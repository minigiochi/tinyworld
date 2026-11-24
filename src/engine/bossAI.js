// Intelligenza del boss: fasi, trappole, attacchi e abilità speciali (riscritta a mano da `bossAI`).
// Viene chiamata ad ogni passo con dt = secondi trascorsi e ev = lista eventi per la grafica.
// ATTENZIONE: l'ordine delle chiamate a Math.random() è identico all'originale, così le simulazioni con seme coincidono.

const DEATH_COLOR = '#9ca3af';
const rnd = () => Math.random();
const randomId = () => Math.random().toString(36).slice(2);
const pt = (o) => ({ x: o.pos.x, z: o.pos.z });
const tick = (obj, key, dt) => { if (obj[key] > 0) obj[key] -= dt; };

/** Infligge `amount` a un eroe (già ridotto dalle sue difese) e registra l'eventuale morte. */
function boss_hurtHero(eng, hero, amount, ev) {
  hero.hp -= amount;
  if (hero.hp <= 0) {
    hero.hp = 0; hero.alive = false; hero._deadAt = eng.time;
    ev.push({ t: 'death', from: { x: hero.pos.x, z: hero.pos.z }, c: DEATH_COLOR });
  }
}
/** Danno = max(1, attacco×mult − difesa/2), ridotto da dmgReduce. */
function boss_hitDamage(boss, hero, mult) {
  const raw = Math.max(1, Math.round(boss.attack * mult - hero.defense / 2));
  return Math.round(raw * (1 - (hero.dmgReduce || 0)));
}

// ---- 1. fasi: a 70% e a 20% di vita il boss si trasforma ---------------------------------------
function boss_phases(boss, ev) {
  if (!boss._p2 && boss.maxHp > 0 && boss.hp / boss.maxHp <= 0.7) {
    boss._p2 = true; boss.attack = Math.round(boss.attack * 1.15); boss.aoeCd = 0; boss.groupCd = 0;
    ev.push({ t: 'boss_transform', kind: 'boss_transform', color: boss.color });
  }
  if (!boss._p3 && boss.maxHp > 0 && boss.hp / boss.maxHp <= 0.2) {
    boss._p3 = true; boss.attack = Math.round(boss.attack * 1.2); boss.aoeCd = 0; boss.groupCd = 0; boss.wallCd = 0;
    ev.push({ t: 'boss_transform', kind: 'boss_transform', color: boss.color });
  }
}

// ---- 2. timer di base --------------------------------------------------------------------------
function boss_timers(boss, dt) {
  tick(boss, 'attackCd', dt); tick(boss, 'aoeCd', dt); tick(boss, 'groupCd', dt); tick(boss, 'wallCd', dt);
  if (boss.dotTimer > 0) {
    boss.dotTimer -= dt; boss.hp -= boss.dot * dt;
    if (boss.dotTimer <= 0) boss.dot = 0;
  }
  if (boss.forcedTimer > 0) {
    boss.forcedTimer -= dt;
    if (boss.forcedTimer <= 0) boss.forcedTarget = null;
  }
}

// ---- 3. muri: tra un eroe e il boss, 4 schemi casuali ------------------------------------------
function boss_walls(eng, boss, alive, ev) {
  if (!(boss.wallCd <= 0 && boss.alive)) return;
  const target = alive[Math.floor(rnd() * alive.length)];
  const cx = (boss.pos.x + target.pos.x) / 2, cz = (boss.pos.z + target.pos.z) / 2;
  const angle = Math.atan2(target.pos.z - boss.pos.z, target.pos.x - boss.pos.x) + Math.PI / 2;
  const roll = rnd();
  // ogni muro: [spostamento laterale, lunghezza, spessore, altezza]
  const layout =
    roll < 0.25 ? [[0, 10.5 + rnd() * 2, 0.7, 4]] :
    roll < 0.5 ? [[0, 5 + rnd() * 1.2, 0.7, 4]] :
    roll < 0.75 ? (() => { const n = rnd() < 0.5 ? 2 : 3, a = []; for (let i = 0; i < n; i++) a.push([(i - (n - 1) / 2) * 3.4, 1.6, 1.1, 4.6]); return a; })() :
    [[-3.6, 4, 0.7, 4], [3.6, 4, 0.7, 4]];
  for (const [side, length, thickness, height] of layout) {
    const x = cx + Math.cos(angle) * side, z = cz + Math.sin(angle) * side;
    const w = { id: 'wall_' + randomId(), x, z, angle, halfLen: length / 2, length, height, duration: 14, alive: true, color: boss.color, thickness };
    eng.walls.push(w);
    ev.push({ t: 'wall_spawn', kind: 'wall_spawn', id: w.id, x, z, angle, length, height, duration: 14, color: boss.color });
  }
  boss.wallCd = 14 + rnd() * 4;
}

// ---- 4. spuntoni, trappole e zona di danno nel tempo -------------------------------------------
function boss_spikes(eng, boss, alive, dt, ev) {
  if (boss.spikeCd > 0) boss.spikeCd -= dt;
  if (!(boss.spikeCd <= 0 && boss.alive)) return;
  const count = 3 + Math.floor(rnd() * 3);
  for (let i = 0; i < count; i++) {
    const target = alive[Math.floor(rnd() * alive.length)];
    const x = target.pos.x + (rnd() - 0.5) * 4, z = target.pos.z + (rnd() - 0.5) * 4;
    const s = { id: 'spike_' + randomId(), pos: { x, z }, delay: 1.2, damage: 0.4, radius: 1.2, color: boss.color, active: false };
    eng.spikes.push(s);
    ev.push({ t: 'spike_spawn', kind: 'spike_spawn', id: s.id, pos: { x, z }, color: boss.color, delay: 1.2, radius: 1.2 });
  }
  boss.spikeCd = 8 + rnd() * 4;
}
function boss_traps(eng, boss, dt, ev) {
  if (boss.trapCd > 0) boss.trapCd -= dt;
  if (!(boss.trapCd <= 0 && boss.alive)) return;
  const count = 2 + Math.floor(rnd() * 2);
  for (let i = 0; i < count; i++) {
    const ang = rnd() * Math.PI * 2, dist = 3 + rnd() * 6;
    const p = eng.clampToArena(boss.pos.x + Math.cos(ang) * dist, boss.pos.z + Math.sin(ang) * dist);
    const t = { id: 'trap_' + randomId(), pos: { x: p.x, z: p.z }, damage: 0.6, radius: 1, color: boss.color };
    eng.traps.push(t);
    ev.push({ t: 'trap_spawn', kind: 'trap_spawn', id: t.id, pos: { x: p.x, z: p.z }, color: boss.color, radius: 1 });
  }
  boss.trapCd = 12 + rnd() * 4;
}
function boss_coverage(eng, boss, dt, ev) {
  if (boss.coverageCd > 0) boss.coverageCd -= dt;
  if (!(boss.coverageCd <= 0 && boss.alive)) return;
  const radius = eng.arenaRadius * (0.3 + rnd() * 0.4), ang = rnd() * Math.PI * 2;
  const x = Math.cos(ang) * eng.arenaRadius * 0.15, z = Math.sin(ang) * eng.arenaRadius * 0.15;
  eng.coverageArea = { pos: { x, z }, radius, dot: boss.attack * 0.08, color: boss.color };
  ev.push({ t: 'coverage_spawn', kind: 'coverage_spawn', pos: { x, z }, radius, color: boss.color });
  boss.coverageCd = 30 + rnd() * 10;
}

// ---- 5. bersaglio, movimento e artiglio --------------------------------------------------------
/** Ritorna { target, dist, reach } e sposta il boss verso il bersaglio. */
function boss_chase(eng, boss, alive, dt) {
  let target = boss.forcedTarget ? eng.heroes.find((h) => h.id === boss.forcedTarget && h.alive) : null;
  if (!target) target = alive.slice().sort((a, b) => b.threat - a.threat)[0];   // più minaccia
  if (!target) target = alive[0];
  boss.targetId = target.id;
  const dx = target.pos.x - boss.pos.x, dz = target.pos.z - boss.pos.z;
  const dist = Math.hypot(dx, dz) || 0.001, reach = boss.radius + target.radius + 0.5;
  if (dist > reach) { const step = 3.1 * dt; boss.pos.x += (dx / dist) * step; boss.pos.z += (dz / dist) * step; }
  const p = eng.clampToArena(boss.pos.x, boss.pos.z);
  boss.pos.x = p.x; boss.pos.z = p.z;
  return { target, dist, reach };
}
/** Artiglio: preavviso di 0,3 s poi danno ×2, ogni 1,3 s. */
function boss_claw(eng, boss, target, dist, reach, dt, ev) {
  if (boss.attackCd <= 0 && dist <= reach + 1 && boss.clW == null) { boss.clW = 0.3; ev.push({ t: 'bossWind', kind: 'bossWind', claw: 1 }); }
  if (boss.clW != null && (boss.clW -= dt) <= 0) {
    boss.clW = null;
    if (dist <= reach + 2.2) {
      const raw = Math.max(1, Math.round(boss.attack - target.defense / 2));
      const dmg = Math.round(raw * 2 * (1 - (target.dmgReduce || 0)));
      target.hp -= dmg;
      ev.push({ t: 'dmg', who: 'boss', from: pt(boss), to: pt(target), kind: 'bossSlash', label: 'Artiglio', val: dmg, c: '#f87171', target: target.id });
      if (target.hp <= 0) { target.hp = 0; target.alive = false; target._deadAt = eng.time; ev.push({ t: 'death', from: pt(target), c: DEATH_COLOR }); }
    }
    boss.attackCd = 1.3;
  }
}

// ---- 6. Soffio: onda d'urto con preavviso di 0,9 s, raggio 4,8, danno ×0,5 ogni 8 s ------------
function boss_breath(eng, boss, dt, ev) {
  if (boss.aoeCd <= 0 && boss.aoeW == null) {
    boss.aoeW = 0.9; boss.aoeP = { x: boss.pos.x, z: boss.pos.z };
    ev.push(
      { t: 'special_telegraph', kind: 'special_telegraph', pos: { x: boss.pos.x, z: boss.pos.z }, radius: 4.8, color: '#fb923c', name: 'Soffio', delay: 0.9, type: 'shockwave' },
      { t: 'bossWind', kind: 'bossWind', label: '⚠ Soffio', c: '#fb923c', from: { x: boss.pos.x, z: boss.pos.z } });
  }
  if (boss.aoeW != null && (boss.aoeW -= dt) <= 0) {
    boss.aoeW = null;
    const at = boss.aoeP || { x: boss.pos.x, z: boss.pos.z };
    ev.push({ t: 'special_trigger', kind: 'special_trigger', pos: { x: at.x, z: at.z }, radius: 4.8, color: '#fb923c', name: 'Soffio', type: 'shockwave' });
    for (const h of eng.heroes) {
      if (!h.alive) continue;
      if (Math.hypot(h.pos.x - at.x, h.pos.z - at.z) <= 4.8) boss_hurtHero(eng, h, boss_hitDamage(boss, h, 0.5), ev);
    }
    eng.splashHeroCompanions({ x: at.x, z: at.z }, 4.8, boss.attack * 0.5, ev);
    ev.push({ t: 'aoe', who: 'boss', from: { x: boss.pos.x, z: boss.pos.z }, kind: 'bossAoE', label: 'Soffio', c: '#fb923c' });
    boss.aoeCd = 8;
  }
}

// ---- 7. affisso del boss (rigenerazione / servitori / furia) -----------------------------------
function boss_affix(eng, boss, alive, dt, ev) {
  if (!(boss.affix && boss.alive && alive.length > 0)) return;
  boss.afxCd = (boss.afxCd == null ? 8 : boss.afxCd) - dt;
  if (boss.afxCd > 0) return;
  const from = { x: boss.pos.x, z: boss.pos.z };
  if (boss.affix === 'heal') {
    boss.afxCd = 10; boss.hp = Math.min(boss.maxHp, boss.hp + boss.maxHp * 0.05);
    ev.push({ t: 'aoe', who: 'boss', from, kind: 'bossAoE', label: '✚ Rigenerazione', c: '#4ade80' });
  } else if (boss.affix === 'summon') {
    boss.afxCd = 12;
    ev.push({ t: 'aoe', who: 'boss', from, kind: 'bossAoE', label: '👻 Evoca servitori', c: '#c084fc' });
    const victims = alive.slice().sort(() => rnd() - 0.5).slice(0, 2);
    for (const h of victims) {
      const dmg = boss_hitDamage(boss, h, 0.4);
      h.hp -= dmg;
      ev.push({ t: 'dmg', who: 'boss', from, to: pt(h), kind: 'groupHit', label: 'Servitore', val: dmg, c: '#c084fc', target: h.id });
      if (h.hp <= 0) { h.hp = 0; h.alive = false; h._deadAt = eng.time; ev.push({ t: 'death', from: pt(h), c: DEATH_COLOR }); }
    }
  } else if (boss.affix === 'rage') {
    boss.afxCd = 15;
    if ((boss.rageN | 0) < 5) { boss.rageN = (boss.rageN | 0) + 1; boss.attack = Math.round(boss.attack * 1.07); }
    ev.push({ t: 'aoe', who: 'boss', from, kind: 'bossAoE', label: '🔥 Furia crescente', c: '#ef4444' });
  }
}

// ---- 8. Ruggito: danno a tutti ×0,6 ogni 8-11 s, preavviso 0,8 s -------------------------------
function boss_roar(eng, boss, alive, dt, ev) {
  if (boss.groupCd <= 0 && alive.length > 0 && boss.grW == null) {
    boss.grW = 0.8;
    ev.push({ t: 'bossWind', kind: 'bossWind', label: '⚠ Ruggito', c: '#fbbf24', from: { x: boss.pos.x, z: boss.pos.z } });
  }
  if (boss.grW != null && (boss.grW -= dt) <= 0) {
    boss.grW = null;
    for (const h of alive) {   // NB: come nell'originale, anche chi è morto in questo passo viene colpito
      const dmg = boss_hitDamage(boss, h, 0.6);
      h.hp -= dmg;
      ev.push({ t: 'dmg', who: 'boss', from: { x: boss.pos.x, z: boss.pos.z }, to: pt(h), kind: 'groupHit', label: 'Ruggito', val: dmg, c: '#fbbf24', target: h.id });
      if (h.hp <= 0) { h.hp = 0; h.alive = false; h._deadAt = eng.time; ev.push({ t: 'death', from: pt(h), c: DEATH_COLOR }); }
    }
    eng.splashHeroCompanions({ x: boss.pos.x, z: boss.pos.z }, eng.arenaRadius, boss.attack * 0.6, ev);
    ev.push({ t: 'aoe', who: 'boss', from: { x: boss.pos.x, z: boss.pos.z }, kind: 'bossGroup', label: 'Ruggito Furioso', c: '#fbbf24' });
    boss.groupCd = 8 + rnd() * 3;
  }
}

// ---- 9. attacchi speciali del boss con segnalazione a terra ------------------------------------
function boss_special(eng, boss, alive, dt, ev) {
  if (boss.specialCd > 0) boss.specialCd -= dt;
  if (!(boss.specialCd <= 0 && boss.alive && (boss.specialAbilities || []).length > 0)) return;
  if (rnd() < 0.3) {
    const sp = boss.specialAbilities[Math.floor(rnd() * boss.specialAbilities.length)];
    let x, z;
    if (rnd() < 0.8 && alive.length > 0) { const h = alive[Math.floor(rnd() * alive.length)]; x = h.pos.x; z = h.pos.z; }
    else { x = (rnd() - 0.5) * 16; z = (rnd() - 0.5) * 16; }
    eng.telegraphs.push({ pos: { x, z }, radius: sp.radius, delay: 1.5, damage: sp.damage, color: sp.color, name: sp.name, type: sp.type });
    ev.push({ t: 'special_telegraph', kind: 'special_telegraph', pos: { x, z }, radius: sp.radius, color: sp.color, name: sp.name, delay: 1.5, type: sp.type });
  }
  boss.specialCd = 6 + rnd() * 3;
}

// ---- 10. abilità firma (per bioma) e servitori -------------------------------------------------
function boss_signature(eng, boss, alive, dt, ev) {
  const sig = boss.sig && (boss.nmS || DBA_SIG[boss.key]);
  if (!(sig && boss.alive)) return;
  boss.sigCd = (boss.sigCd == null ? 12 : boss.sigCd) - dt;
  if (boss.sigCd <= 0) {
    boss.sigCd = sig.cd * (boss._p3 ? 0.7 : 1);
    try { DBA_SIGGO(eng, boss, sig, alive, ev); } catch (e) { /* come l'originale: ignora errori della firma */ }
  }
}
function boss_companions(eng, boss, dt, ev) {
  if (boss.companionCd > 0) boss.companionCd -= dt;
  if (!(boss.companionCd <= 0 && boss.alive)) return;
  const chance = (boss.companionChance || 0.1) + boss.tier * 0.04;
  if (rnd() < chance && eng.companions.filter((c) => c.alive).length < 2 + Math.floor(boss.tier / 2)) {
    const ang = rnd() * Math.PI * 2, dist = 2 + rnd() * 2;
    const x = boss.pos.x + Math.cos(ang) * dist, z = boss.pos.z + Math.sin(ang) * dist, hp = 25 + boss.tier * 8;
    const c = { id: 'comp_' + randomId(), pos: { x, z }, hp, maxHp: hp, attack: Math.round(boss.attack * 0.35), defense: 2, radius: 0.5, speed: 3.5, range: 1.5, alive: true, _deadAt: 0, attackCd: 1.5, bossColor: boss.color };
    eng.companions.push(c);
    ev.push({ t: 'companion_spawn', kind: 'companion_spawn', id: c.id, pos: { x, z }, color: boss.color });
  }
  boss.companionCd = 5 + rnd() * 3;
}

/** Un passo dell'IA del boss. */
function runBossAI(eng, dt, ev) {
  const boss = eng.boss;
  if (!boss.alive) return;
  boss_phases(boss, ev);
  boss_timers(boss, dt);
  const alive = eng.heroes.filter((h) => h.alive);
  if (alive.length === 0) return;
  DBA_TICK(eng, dt, ev, boss);
  boss_walls(eng, boss, alive, ev);
  boss_spikes(eng, boss, alive, dt, ev);
  boss_traps(eng, boss, dt, ev);
  boss_coverage(eng, boss, dt, ev);
  const { target, dist, reach } = boss_chase(eng, boss, alive, dt);
  boss_claw(eng, boss, target, dist, reach, dt, ev);
  boss_breath(eng, boss, dt, ev);
  boss_affix(eng, boss, alive, dt, ev);
  boss_roar(eng, boss, alive, dt, ev);
  boss_special(eng, boss, alive, dt, ev);
  boss_signature(eng, boss, alive, dt, ev);
  boss_companions(eng, boss, dt, ev);
}
