// Passo di simulazione della battaglia (riscritto a mano da `step` e `resolveDecision`).
// Ordine di un passo (dt secondi):
//  1. decisioni del giocatore in attesa → il tempo si ferma
//  2. scadenza dei muri
//  3. timer e trasformazioni degli eroi
//  4. nuove decisioni (solo / squadra) proposte al giocatore
//  5. movimento e abilità di ogni eroe vivo
//  6. IA del boss
//  7. spuntoni, trappole, zona di danno, attacchi segnalati
//  8. compagni del boss e degli eroi
//  9. fine battaglia (vittoria / sconfitta)
// L'ordine delle chiamate a Math.random() è identico all'originale (necessario per i test con seme).

const SCARED_BY = new Set(['bossAoE', 'bossGroup', 'special_telegraph', 'spike_spawn', 'trap_spawn', 'coverage_spawn', 'wall_spawn']);
const dist2d = (a, b) => Math.hypot(a.pos.x - b.pos.x, a.pos.z - b.pos.z);

function killHeroIfDead(eng, hero, ev) {
  if (hero.hp <= 0) {
    hero.hp = 0; hero.alive = false; hero._deadAt = eng.time;
    ev.push({ t: 'death', from: { x: hero.pos.x, z: hero.pos.z }, c: '#9ca3af' });
  }
}
/** Danno di un pericolo a terra (spuntone, trappola, attacco segnalato): attacco×mult − difesa/2, ridotto da dmgReduce. */
function hazardDamage(eng, hero, mult) {
  const raw = Math.max(1, Math.round(eng.boss.attack * mult - hero.defense / 2));
  return Math.round(raw * (1 - (hero.dmgReduce || 0)));
}
/** Ogni eroe "sceglie" una sola volta (70%) se evitare un pericolo; la scelta è memorizzata sul pericolo. */
function heroSuffersHazard(hazard, hero) {
  hazard._av = hazard._av || {};
  hazard._av[hero.id] ??= Math.random() < 0.7;
  return !hazard._av[hero.id];
}

// ---- decisioni del giocatore -------------------------------------------------------------------
function runResolveDecision(eng, choice) {
  const dec = eng.pendingDecision;
  if (!dec) return;
  const ev = [];
  if (dec.type === 'solo') {
    const hero = eng.heroes.find((h) => h.id === dec.heroId && h.alive);
    if (hero && choice && choice.index != null) {
      const idx = choice.index, ab = hero.abilities[idx];
      if (ab && hero.cd[idx] <= 0) {
        const from = { x: hero.pos.x, z: hero.pos.z }, to = { x: eng.boss.pos.x, z: eng.boss.pos.z };
        const cost = hero.noMana ? 0 : (ab.cost != null ? ab.cost : (cg[ab.kind] || 0));
        if (eng.execAbility(hero, ab, idx, from, to, ev, 1)) {
          hero.mana = Math.max(0, hero.mana - cost);
          if (hf.has(ab.kind)) eng.splashCompanions(to, 3, hero.attack + (hero.atkBuff || 0), ev);
        }
      }
    }
  } else if (dec.type === 'team') {
    const id = choice && choice.id, origin = { x: 0, z: 0 };
    if (id === 'focus') {
      for (const h of eng.heroes) if (h.alive) { h.atkBuff = (h.atkBuff || 0) + Math.round(h.attack * 0.4); h.atkBuffTimer = 6; }
      ev.push({ t: 'buff', kind: 'team_buff', from: origin, color: '#f59e0b', label: 'Assalto Concentrato' });
    } else if (id === 'defense') {
      for (const h of eng.heroes) if (h.alive) { h.dmgReduce = 0.5; h.dmgReduceTimer = 6; }
      ev.push({ t: 'buff', kind: 'team_buff', from: origin, color: '#38bdf8', label: 'Formazione Difensiva' });
    } else if (id === 'heal') {
      for (const h of eng.heroes) if (h.alive) h.hp = Math.min(h.maxHp, h.hp + Math.round(h.maxHp * 0.3));
      ev.push({ t: 'heal', kind: 'heal_ring', from: origin, color: '#22c55e', label: 'Cura di Gruppo' });
    } else if (id === 'fury') {
      for (const h of eng.heroes) if (h.alive) { h.atkSpeedMul = 1.6 * (h.atkSpdBase || 1); h.atkSpeedTimer = 6; }
      ev.push({ t: 'buff', kind: 'team_buff', from: origin, color: '#ef4444', label: 'Furia' });
    }
  }
  eng._pendingEvents = (eng._pendingEvents || []).concat(ev);
  eng.pendingDecision = null;
}

// ---- 3. timer e trasformazioni di un eroe -------------------------------------------------------
function step_heroTimers(eng, g, dt, ev) {
  // schivata manuale (solo eroe controllato dal giocatore)
  const ctl = window.__dbaCtl;
  if (g._dgReq && !(g._dgCd > 0) && !(g._dgT > 0) && ctl && ctl.on && g.id === ctl.id) {
    g._dgReq = 0; g._dgCd = 3; g._dgT = 0.38;
    const ax = g.pos.x - eng.boss.pos.x, az = g.pos.z - eng.boss.pos.z, al = Math.hypot(ax, az) || 1;
    g._dgX = (ax / al) * 22; g._dgZ = (az / al) * 22;
    g._dgSave = g.dmgReduce || 0; g._dgSaveT = Math.max(0, (g.dmgReduceTimer || 0) - 0.38);
    g.dmgReduce = 1; g.dmgReduceTimer = 0.6;
    ev.push({ t: 'dodge', kind: 'dodge', who: g.id, from: { x: g.pos.x, z: g.pos.z }, label: 'Schivata', c: '#93c5fd' });
  } else g._dgReq = 0;
  if (g._dgCd > 0) g._dgCd -= dt;
  if (g._dgT > 0) {
    g._dgT -= dt;
    const p = eng.clampToArena(g.pos.x + g._dgX * dt, g.pos.z + g._dgZ * dt);
    g.pos.x = p.x; g.pos.z = p.z;
    if (g._dgT <= 0) { g._dgT = 0; g.dmgReduce = g._dgSave; g.dmgReduceTimer = g._dgSaveT; }
  }
  // ricarichi, buff e rigenerazione
  for (let i = 0; i < g.cd.length; i++) if (g.cd[i] > 0) g.cd[i] -= dt;
  if (g.atkSpeedTimer > 0) { g.atkSpeedTimer -= dt; if (g.atkSpeedTimer <= 0) g.atkSpeedMul = g.atkSpdBase || 1; }
  if (g.dmgReduceTimer > 0) { g.dmgReduceTimer -= dt; if (g.dmgReduceTimer <= 0) g.dmgReduce = 0; }
  if (g.regenTimer > 0) {
    g.regenTimer -= dt;
    if (g.alive) g.hp = Math.min(g.maxHp, g.hp + g.regen * dt);
    if (g.regenTimer <= 0) g.regen = 0;
  }
  if (g.atkBuffTimer > 0) { g.atkBuffTimer -= dt; if (g.atkBuffTimer <= 0) g.atkBuff = 0; }
  // mana: rigenerazione normale, oppure (classi a "energia") ricarica in base al danno fatto al boss
  if (g.manaRegen) {
    const base = g.manaRegen * dt * (g.useEn ? 1 : g.isDps ? 1.3 : 1.2) * (!g.useEn && g.mana < g.maxMana * 0.25 ? 1.5 : 1);
    let fromDamage = 0;
    if (g.useEn) {
      const dealt = Math.max(0, (g._bh == null ? eng.boss.hp : g._bh) - eng.boss.hp);
      g._bh = eng.boss.hp;
      fromDamage = (dealt / Math.max(1, eng.boss.maxHp)) * 250;
    }
    g.mana = Math.min(g.maxMana, g.mana + base + fromDamage);
  }
  if (g.isTank) g.threat += dt * 4;
  if (g.repositionTimer > 0) g.repositionTimer -= dt;
  // trasformazione al livello 10+: l'energia sale di 6/s, a 100 l'eroe diventa più forte (+30% attacco) per 10 s
  if (g.level >= 10) {
    if (g.transformed) {
      g.transformTimer -= dt;
      if (g.transformTimer <= 0) {
        g.transformed = false;
        if (g._transformAtkSnap) g.attack = g._transformAtkSnap;
        g.energy = 0;
        ev.push({ t: 'hero_revert', kind: 'hero_revert', who: g.id, from: { x: g.pos.x, z: g.pos.z }, c: g.color });
      }
    } else {
      g.energy = Math.min(100, (g.energy || 0) + 6 * dt);
      if (g.energy >= 100) {
        g.transformed = true; g.transformTimer = 10; g._transformAtkSnap = g.attack; g.attack = Math.round(g.attack * 1.3);
        if (g.isTank) { g.dmgReduce = Math.max(g.dmgReduce || 0, 0.3); g.dmgReduceTimer = Math.max(g.dmgReduceTimer || 0, 10); }
        ev.push({ t: 'hero_transform', kind: 'hero_transform', who: g.id, from: { x: g.pos.x, z: g.pos.z }, c: g.color });
      }
    }
  }
}

// ---- 4. decisioni proposte al giocatore --------------------------------------------------------
function step_decisions(eng, dt) {
  eng.decisionTimer -= dt;
  if (eng.decisionTimer <= 0 && !eng.pendingDecision && !(window.__dbaCtl && window.__dbaCtl.on)) {
    const alive = eng.heroes.filter((h) => h.alive);
    const hero = eng.controlledHeroId ? eng.heroes.find((h) => h.id === eng.controlledHeroId && h.alive) : alive[Math.floor(Math.random() * alive.length)];
    if (hero) {
      const choices = [];
      for (let i = 0; i < hero.abilities.length; i++) {
        const ab = hero.abilities[i];
        if (!ab) continue;
        const cost = cg[ab.kind] || 0;
        if (hero.cd[i] <= 0 && hero.mana >= cost) choices.push({ name: ab.name, desc: ab.desc, kind: ab.kind, index: i, cost });
      }
      if (choices.length > 0) eng.pendingDecision = { type: 'solo', heroId: hero.id, heroName: hero.name, heroIcon: hero.icon, heroColor: hero.color, timer: 6, choices };
    }
    eng.decisionTimer = 9 + Math.random() * 4;
  }
  eng.teamDecisionTimer -= dt;
  if (eng.teamDecisionTimer <= 0 && !eng.pendingDecision) {
    if (eng.heroes.filter((h) => h.alive).length > 0) eng.pendingDecision = { type: 'team', choices: V6, timer: 6 };
    eng.teamDecisionTimer = 18 + Math.random() * 6;
  }
}

// ---- 5. movimento di un eroe -------------------------------------------------------------------
/** Se un muro blocca il tiro, l'eroe lo aggira (70% dei casi). Ritorna true se è bloccato. */
function hero_walkAroundWall(eng, g, aim, dt) {
  const wall = eng.findBlockingWall(g.pos.x, g.pos.z, aim.x, aim.z);
  if (!wall) return;
  g._wallPathMap = g._wallPathMap || {};
  if (g._wallPathMap[wall.id] === undefined) g._wallPathMap[wall.id] = Math.random() < 0.7;
  if (g._wallPathMap[wall.id]) {
    const along = { x: Math.cos(wall.angle), z: Math.sin(wall.angle) };          // direzione del muro
    const across = { x: -Math.sin(wall.angle), z: Math.cos(wall.angle) };        // perpendicolare
    const margin = Math.max(wall.length * 0.1, 1.2);
    const side = (g.pos.x - wall.x) * across.x + (g.pos.z - wall.z) * across.z;   // da che lato sta
    const sign = side >= 0 ? 1 : -1, offset = Math.abs(side);
    const endA = { x: wall.x + along.x * wall.halfLen, z: wall.z + along.z * wall.halfLen };
    const endB = { x: wall.x - along.x * wall.halfLen, z: wall.z - along.z * wall.halfLen };
    const nearerIsA = (Math.hypot(g.pos.x - endA.x, g.pos.z - endA.z) < Math.hypot(g.pos.x - endB.x, g.pos.z - endB.z) ? endA : endB) === endA;
    const toEnd = nearerIsA ? along : { x: -along.x, z: -along.z };
    let dx, dz;
    if (offset < margin) { dx = across.x * sign; dz = across.z * sign; }          // prima si scosta dal muro…
    else { dx = toEnd.x; dz = toEnd.z; }                                           // …poi lo costeggia fino all'estremità
    const sp = g.speed * dt * 1.4;
    g.pos.x += dx * sp; g.pos.z += dz * sp; g.moving = true;
  } else g.moving = false;
}

/** Dopo un attacco segnalato l'eroe si riposiziona (avvicina al bersaglio) per 1,5 s. */
function hero_reposition(eng, g, range, dt) {
  let goal = null, stopAt = range;
  if (g.isHealer) { const w = arenaLowestHurt(eng); if (w) { goal = { x: w.pos.x, z: w.pos.z }; stopAt = 4; } }
  if (!goal && eng.boss.alive) goal = { x: eng.boss.pos.x, z: eng.boss.pos.z };
  if (goal) {
    const dx = goal.x - g.pos.x, dz = goal.z - g.pos.z, d = Math.hypot(dx, dz) || 0.001;
    if (d > stopAt) { const sp = g.speed * dt; g.pos.x += (dx / d) * sp; g.pos.z += (dz / d) * sp; g.moving = true; }
    else { g.moving = false; g.repositionTimer = 0; }
  } else { g.moving = false; g.repositionTimer = 0; }
}

/** Movimento normale: schiva i pericoli segnalati, si avvicina al boss, altrimenti gira attorno a lui. */
function hero_moveNormally(eng, g, dx, dz, distBoss, range, dt) {
  let flee = null;
  const dangers = [];
  for (const t of eng.telegraphs) dangers.push({ pos: t.pos, radius: t.radius, key: 'tg_' + Math.round(t.pos.x * 10) + '_' + Math.round(t.pos.z * 10) });
  for (const s of eng.spikes) if (s.delay > 0) dangers.push({ pos: s.pos, radius: s.radius, key: 'sk_' + s.id });
  let inDanger = false;
  for (const d of dangers) {
    if (Math.hypot(g.pos.x - d.pos.x, g.pos.z - d.pos.z) <= d.radius + 1) {
      inDanger = true;
      g._dodgeMap = g._dodgeMap || {};
      if (g._dodgeMap[d.key] === undefined) g._dodgeMap[d.key] = Math.random() < 0.7;
      if (g._dodgeMap[d.key]) {
        const ex = g.pos.x - d.pos.x, ez = g.pos.z - d.pos.z, e = Math.hypot(ex, ez) || 0.001;
        flee = { x: ex / e, z: ez / e };
      }
      break;
    }
  }
  if (!inDanger && g._dodgeMap) g._dodgeMap = {};
  if (flee) {
    const sp = g.speed * dt * 1.5;
    g.pos.x += flee.x * sp; g.pos.z += flee.z * sp; g.moving = true;
  } else if (distBoss > range) {
    const sp = g.speed * dt;
    g.pos.x += (dx / distBoss) * sp; g.pos.z += (dz / distBoss) * sp; g.moving = true;
  } else {
    // a tiro: ogni tanto fa un piccolo giro laterale attorno al boss
    g.wT = (g.wT === undefined ? 2 + Math.random() * 5 : g.wT) - dt;
    if (g.wT <= 0 && !g.wD) {
      const ang = Math.atan2(dz, dx) + (Math.random() < 0.5 ? 1 : -1) * (Math.PI / 2 + (Math.random() - 0.5) * 0.8), len = 2 + Math.random() * 3;
      g.wD = { x: g.pos.x + Math.cos(ang) * len, z: g.pos.z + Math.sin(ang) * len };
    }
    if (g.wD) {
      const wx = g.wD.x - g.pos.x, wz = g.wD.z - g.pos.z, wd = Math.hypot(wx, wz);
      if (wd > 0.25) { const sp = g.speed * dt * 0.6; g.pos.x += (wx / wd) * sp; g.pos.z += (wz / wd) * sp; g.moving = true; }
      else { g.wD = null; g.wT = 3 + Math.random() * 6; g.moving = false; }
    } else g.moving = false;
  }
}

function step_heroAct(eng, g, aliveAtStart, dt, ev) {
  const boss = eng.boss;
  const dx = boss.pos.x - g.pos.x, dz = boss.pos.z - g.pos.z, distBoss = Math.hypot(dx, dz) || 0.001, range = g.baseRange;
  let aim = null;                                       // verso chi guarda: ferito (curatori) o boss
  if (g.isHealer) { const w = arenaLowestHurt(eng); if (w) aim = { x: w.pos.x, z: w.pos.z }; }
  else if (boss.alive) aim = { x: boss.pos.x, z: boss.pos.z };

  let blocked = false;
  if (aim && eng.lineBlocked(g.pos.x, g.pos.z, aim.x, aim.z)) { blocked = true; hero_walkAroundWall(eng, g, aim, dt); }
  else if (g._wallPathMap) g._wallPathMap = {};

  if (blocked) {
    const p = eng.clampToArena(g.pos.x, g.pos.z); g.pos.x = p.x; g.pos.z = p.z;
    return;
  }
  if ((g.repositionTimer || 0) > 0) hero_reposition(eng, g, range, dt);
  else hero_moveNormally(eng, g, dx, dz, distBoss, range, dt);
  // gli eroi non si sovrappongono
  for (const o of aliveAtStart) {
    if (o === g) continue;
    const ox = g.pos.x - o.pos.x, oz = g.pos.z - o.pos.z, d = Math.hypot(ox, oz), min = g.radius + o.radius;
    if (d > 0 && d < min) { const push = (min - d) / 2; g.pos.x += (ox / d) * push; g.pos.z += (oz / d) * push; }
  }
  const p = eng.clampToArena(g.pos.x, g.pos.z); g.pos.x = p.x; g.pos.z = p.z;
  eng.useAbility(g, distBoss <= range + 0.6, ev);
}

// ---- 7. pericoli a terra -----------------------------------------------------------------------
function step_hazards(eng, dt, ev) {
  const boss = eng.boss;
  // spuntoni: dopo il ritardo scattano e colpiscono chi non li ha evitati; poi svaniscono dopo 2 s
  for (let i = eng.spikes.length - 1; i >= 0; i--) {
    const s = eng.spikes[i];
    if (s.delay > 0) {
      s.delay -= dt;
      if (s.delay <= 0) {
        s.active = true;
        for (const h of eng.heroes) {
          if (!h.alive) continue;
          if (Math.hypot(h.pos.x - s.pos.x, h.pos.z - s.pos.z) <= s.radius && heroSuffersHazard(s, h)) {
            const dmg = hazardDamage(eng, h, s.damage);
            h.hp -= dmg; DBA_ELEM(eng, h, dmg, ev, s.pos);
            ev.push({ t: 'dmg', who: 'boss', from: s.pos, to: { x: h.pos.x, z: h.pos.z }, kind: 'spike_hit', label: 'Spuntone', val: dmg, c: s.color, target: h.id });
            killHeroIfDead(eng, h, ev);
          }
        }
        ev.push({ t: 'spike_trigger', kind: 'spike_trigger', id: s.id, pos: s.pos, color: s.color, radius: s.radius });
        s.fadeTimer = 2;
      }
    } else if (s.fadeTimer !== undefined) {
      s.fadeTimer -= dt;
      if (s.fadeTimer <= 0) { ev.push({ t: 'spike_remove', kind: 'spike_remove', id: s.id }); eng.spikes.splice(i, 1); }
    }
  }
  // trappole: scattano la prima volta che un eroe (non fortunato) le tocca
  for (let i = eng.traps.length - 1; i >= 0; i--) {
    const t = eng.traps[i];
    for (const h of eng.heroes) {
      if (!h.alive) continue;
      if (Math.hypot(h.pos.x - t.pos.x, h.pos.z - t.pos.z) <= t.radius && heroSuffersHazard(t, h)) {
        const dmg = hazardDamage(eng, h, t.damage);
        h.hp -= dmg; DBA_ELEM(eng, h, dmg, ev, t.pos);
        ev.push({ t: 'dmg', who: 'boss', from: t.pos, to: { x: h.pos.x, z: h.pos.z }, kind: 'trap_hit', label: 'Trappola', val: dmg, c: t.color, target: h.id });
        killHeroIfDead(eng, h, ev);
        ev.push({ t: 'trap_trigger', kind: 'trap_trigger', id: t.id, pos: t.pos, color: t.color });
        eng.traps.splice(i, 1);
        break;
      }
    }
  }
  // zona di danno nel tempo (nessun controllo morte qui: lo fa il resto del passo)
  if (eng.coverageArea) {
    for (const h of eng.heroes) {
      if (!h.alive) continue;
      if (Math.hypot(h.pos.x - eng.coverageArea.pos.x, h.pos.z - eng.coverageArea.pos.z) <= eng.coverageArea.radius) h.hp -= eng.coverageArea.dot * dt;
    }
  }
  // attacchi speciali segnalati: dopo il preavviso colpiscono l'area
  for (let i = eng.telegraphs.length - 1; i >= 0; i--) {
    const t = eng.telegraphs[i];
    t.delay -= dt;
    if (t.delay <= 0) {
      for (const h of eng.heroes) {
        if (!h.alive) continue;
        if (Math.hypot(h.pos.x - t.pos.x, h.pos.z - t.pos.z) <= t.radius && heroSuffersHazard(t, h)) {
          const dmg = hazardDamage(eng, h, t.damage);
          h.hp -= dmg; DBA_ELEM(eng, h, dmg, ev, t.pos);
          ev.push({ t: 'dmg', who: 'boss', from: { x: t.pos.x, z: t.pos.z }, to: { x: h.pos.x, z: h.pos.z }, kind: 'special_hit', label: t.name, val: dmg, c: t.color, target: h.id });
          killHeroIfDead(eng, h, ev);
        }
      }
      if (t.heal && boss.alive) boss.hp = Math.min(boss.maxHp, boss.hp + Math.round(boss.maxHp * t.heal));
      eng.splashHeroCompanions(t.pos, t.radius, boss.attack * t.damage, ev);
      ev.push({ t: 'special_trigger', kind: 'special_trigger', pos: { x: t.pos.x, z: t.pos.z }, radius: t.radius, color: t.color, name: t.name, type: t.type });
      eng.telegraphs.splice(i, 1);
    }
  }
}

// ---- 8. compagni --------------------------------------------------------------------------------
function step_bossCompanions(eng, dt, ev) {
  for (let i = eng.companions.length - 1; i >= 0; i--) {
    const c = eng.companions[i];
    if (!c.alive) { if (eng.time - c._deadAt > 2) eng.companions.splice(i, 1); continue; }
    let target = null, best = Infinity;
    for (const h of eng.heroes) {
      if (!h.alive) continue;
      const d = Math.hypot(h.pos.x - c.pos.x, h.pos.z - c.pos.z);
      if (d < best) { best = d; target = h; }
    }
    const tanks = eng.heroes.filter((h) => h.alive && h.isTank);
    if (tanks.length > 0 && Math.random() < 0.7) target = tanks[Math.floor(Math.random() * tanks.length)];   // 70%: attacca un tank
    if (!target) continue;
    const dx = target.pos.x - c.pos.x, dz = target.pos.z - c.pos.z, d = Math.hypot(dx, dz) || 0.001;
    if (d > c.range) { const sp = c.speed * dt; c.pos.x += (dx / d) * sp; c.pos.z += (dz / d) * sp; }
    const p = eng.clampToArena(c.pos.x, c.pos.z); c.pos.x = p.x; c.pos.z = p.z;
    if (c.attackCd > 0) c.attackCd -= dt;
    if (c.attackCd <= 0 && d <= c.range + 0.5) {
      const raw = Math.max(1, Math.round(c.attack - target.defense / 2)), dmg = Math.round(raw * (1 - (target.dmgReduce || 0)));
      target.hp -= dmg;
      ev.push({ t: 'dmg', who: c.id, from: { x: c.pos.x, z: c.pos.z }, to: { x: target.pos.x, z: target.pos.z }, kind: 'companionAttack', label: 'Morso', val: dmg, c: c.bossColor || '#ff6b6b', target: target.id });
      killHeroIfDead(eng, target, ev);
      c.attackCd = 1.5;
    }
  }
}

function step_heroCompanions(eng, dt, ev) {
  const boss = eng.boss;
  for (let i = eng.heroCompanions.length - 1; i >= 0; i--) {
    const c = eng.heroCompanions[i];
    if (!c.alive) { if (eng.time - c._deadAt > 2) eng.heroCompanions.splice(i, 1); continue; }
    if (!boss.alive) continue;
    const owner = eng.heroes.find((h) => h.id === c.ownerId);
    const dx = boss.pos.x - c.pos.x, dz = boss.pos.z - c.pos.z, d = Math.hypot(dx, dz) || 0.001;
    if (d > c.range) { const sp = c.speed * dt; c.pos.x += (dx / d) * sp; c.pos.z += (dz / d) * sp; }
    const p = eng.clampToArena(c.pos.x, c.pos.z); c.pos.x = p.x; c.pos.z = p.z;
    if (c.attackCd > 0) c.attackCd -= dt;
    const power = owner ? owner.attack + (owner.atkBuff || 0) : 10;
    if (c.type === 'demon4') {                    // demone maggiore: soffio di fuoco ×1,5 ogni 3,5 s
      if (c.fireBreathCd > 0) c.fireBreathCd -= dt;
      if (c.fireBreathCd <= 0 && d <= c.range && boss.alive) {
        const dmg = Math.max(1, Math.round(power * c.dmgMult * 1.5 - boss.defense / 2));
        boss.hp -= dmg;
        ev.push({ t: 'dmg', who: c.id, from: { x: c.pos.x, z: c.pos.z }, to: { x: boss.pos.x, z: boss.pos.z }, kind: 'fire_breath', label: 'Soffio di Fuoco', val: dmg, c: '#ff6600', compType: c.type, target: boss.id });
        c.fireBreathCd = 3.5;
      }
    }
    if (c.attackCd <= 0 && d <= c.range + 0.5 && boss.alive && c.type !== 'demon4') {
      const dmg = Math.max(1, Math.round(power * c.dmgMult - boss.defense / 2));
      boss.hp -= dmg;
      const label = c.type === 'hawk' ? 'Artiglio' : c.type === 'wolf' ? 'Morso' : c.type === 'demon2' ? 'Artiglio' : 'Dardo';
      ev.push({ t: 'dmg', who: c.id, from: { x: c.pos.x, z: c.pos.z }, to: { x: boss.pos.x, z: boss.pos.z }, kind: 'petAttack', label, val: dmg, c: c.color, compType: c.type, target: boss.id });
      c.attackCd = c.type === 'hawk' ? 0.8 : 1;
    }
  }
}

// ---- passo completo ----------------------------------------------------------------------------
function runStep(eng, dt) {
  eng._ls = performance.now();
  if (eng.over) return [];
  if (eng.pendingDecision) {                      // in attesa del giocatore: il tempo non scorre
    eng.pendingDecision.timer -= dt;
    if (eng.pendingDecision.timer <= 0) eng.resolveDecision(null);
    return [];
  }
  eng.time += dt;
  const ev = [];
  if (eng._pendingEvents) { for (const e of eng._pendingEvents) ev.push(e); eng._pendingEvents = null; }
  for (let i = eng.walls.length - 1; i >= 0; i--) {          // scadenza muri
    const w = eng.walls[i];
    w.duration -= dt;
    if (w.duration <= 0) { ev.push({ t: 'wall_remove', kind: 'wall_remove', id: w.id }); eng.walls.splice(i, 1); }
  }
  const aliveAtStart = eng.heroes.filter((h) => h.alive);
  for (const g of eng.heroes) if (g.alive) step_heroTimers(eng, g, dt, ev);
  step_decisions(eng, dt);
  for (const g of aliveAtStart) step_heroAct(eng, g, aliveAtStart, dt, ev);
  for (const g of aliveAtStart) { const p = eng.collideWalls(g.pos.x, g.pos.z, g.radius); g.pos.x = p.x; g.pos.z = p.z; }

  eng.bossAI(dt, ev);
  if (ev.some((e) => e.kind && SCARED_BY.has(e.kind))) for (const h of eng.heroes) if (h.alive) h.repositionTimer = 1.5;
  const bp = eng.collideWalls(eng.boss.pos.x, eng.boss.pos.z, eng.boss.radius);
  eng.boss.pos.x = bp.x; eng.boss.pos.z = bp.z;

  step_hazards(eng, dt, ev);
  step_bossCompanions(eng, dt, ev);
  step_heroCompanions(eng, dt, ev);

  // fine battaglia
  if (eng.boss.hp <= 0 && !DBA_REVIVE(eng, ev)) {
    eng.boss.hp = 0; eng.boss.alive = false;
    for (const c of eng.companions) if (c.alive) { c.alive = false; c._deadAt = eng.time; }
    for (const c of eng.heroCompanions) if (c.alive) { c.alive = false; c._deadAt = 0; }
    eng.spikes = []; eng.traps = []; eng.coverageArea = null;
    eng.over = true; eng.outcome = 'victory';
  }
  if (aliveAtStart.length === 0 && eng.heroes.every((h) => !h.alive)) { eng.over = true; eng.outcome = 'defeat'; }
  if (window.__dbaEv) window.__dbaEv(eng, ev);
  return ev;
}
