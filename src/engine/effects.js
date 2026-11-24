// Effetti elementali dei boss, danni dei pericoli e rinascita (riscritti a mano da DBA_HURT, DBA_ELEM, DBA_TICK, DBA_REVIVE).
// Ogni boss ha un "tema" (fuoco, ghiaccio, ombra…) che colpisce gli eroi con un effetto di stato.
// Stati: burn (danno nel tempo), slow, stun, root (immobile), blind (−35% attacco), curse (−20% attacco).

const DBA_STY = DATA.elementStyles;                                // tema del boss → stile ('lava', 'ice', 'shade'…)
const DBA_RAGE = new Set(DATA.rageClasses);                        // classi che usano "energia" invece del mana
window.DBA_RAGE = DBA_RAGE;

/** Danno diretto a un eroe da un effetto speciale del boss (ridotto da dmgReduce, minimo 1). */
function DBA_HURT(eng, hero, dmg, ev, label, from) {
  dmg = Math.max(1, Math.round(dmg * (1 - (hero.dmgReduce || 0))));
  hero.hp -= dmg;
  ev.push({ t: 'dmg', who: 'boss', from: { x: from.x, z: from.z }, to: { x: hero.pos.x, z: hero.pos.z }, kind: 'special_hit', label, val: dmg, c: eng.boss.color, target: hero.id });
  if (hero.hp <= 0) {
    hero.hp = 0; hero.alive = false; hero._deadAt = eng.time;
    ev.push({ t: 'death', from: { x: hero.pos.x, z: hero.pos.z }, c: '#9ca3af' });
  }
}

/** Effetto di stato applicato quando un pericolo del boss ferisce `hero` (dmg = danno subito, pos = origine). */
function DBA_ELEM(eng, hero, dmg, ev, pos) {
  const boss = eng.boss, theme = boss.theme, style = DBA_STY[theme] || 'stone';
  const states = hero._st || (hero._st = {});
  const roll = Math.random();
  /** applica/rinnova uno stato (`secs` secondi); `value` = danno per tick, `label` = nome del danno */
  const add = (state, secs, value, label) => {
    states[state] = Math.max(states[state] || 0, secs);
    if (value !== undefined) hero['_v' + state] = value;
    if (label) hero._dl = label;
  };
  /** spinge l'eroe: sign = +1 verso l'esterno, −1 verso l'origine, di al massimo `dist` */
  const push = (sign, dist) => {
    let dx = hero.pos.x - pos.x, dz = hero.pos.z - pos.z, d = Math.hypot(dx, dz) || 0.01;
    if (d < 0.05) { dx = Math.random() - 0.5; dz = Math.random() - 0.5; d = Math.hypot(dx, dz) || 0.5; }
    const k = (sign * Math.min(dist, sign < 0 ? d : dist)) / d;
    const p = eng.clampToArena(hero.pos.x + dx * k, hero.pos.z + dz * k);
    hero.pos.x = p.x; hero.pos.z = p.z;
  };
  const burnDmg = (mult) => Math.max(1, Math.round(boss.attack * mult));

  if (style === 'lava') add('burn', 4, burnDmg(0.12), theme === 'fire' || theme === 'phoenix' ? 'Bruciatura' : 'Magma');
  else if (style === 'horn') { add('burn', 4, burnDmg(0.1), 'Sanguinamento'); boss.hp = Math.min(boss.maxHp, boss.hp + Math.round(dmg * 0.3)); }   // il boss si cura
  else if (style === 'ice') { add('slow', 4); if (roll < 0.2) add('stun', 1.2); }
  else if (style === 'crys') { add('slow', 3); add('blind', 3); }
  else if (style === 'thorn') { if (theme === 'venom') add('burn', 5, burnDmg(0.08), 'Veleno'); else add('root', 2.5); }
  else if (style === 'shade') { push(-1, 2.5); add('blind', 4); if (theme === 'chaos' && roll < 0.5) add('stun', 1); }   // attira verso l'origine
  else if (style === 'bone') add('curse', 5);
  else if (style === 'stone') { add('slow', 3); add('blind', 3); }
  else if (style === 'water') { push(1, 3); add('slow', 3); }                                                          // spinge lontano
  else if (style === 'bolt') {
    if (theme === 'light' || theme === 'celestial') add('blind', 3); else add('stun', 0.8);
    const near = eng.heroes.filter((x) => x !== hero && x.alive && Math.hypot(x.pos.x - hero.pos.x, x.pos.z - hero.pos.z) < 4.5).slice(0, 2);
    for (const o of near) DBA_HURT(eng, o, Math.max(1, dmg * 0.4), ev, 'Fulmine a catena', hero.pos);                 // salta su 2 vicini
  }
}

/** Fa scorrere gli stati degli eroi: aggiorna velocità/attacco e applica il danno da bruciatura (1 al secondo). */
function DBA_TICK(eng, dt, ev) {
  for (const h of eng.heroes) {
    const states = h._st;
    if (!states) continue;
    if (!h.alive) { h._st = null; if (h._bs !== undefined) { h.speed = h._bs; h.attack = h._ba; h._bs = undefined; } continue; }
    if (h._bs === undefined) { h._bs = h.speed; h._ba = h.attack; }                    // ricorda i valori normali
    let any = false;
    for (const k in states) if (states[k] > 0) { states[k] -= dt; any = true; }
    let speed = h._bs, atk = h._ba;
    if (states.slow > 0) speed *= 0.5;
    if (states.root > 0 || states.stun > 0) speed = 0;
    if (states.stun > 0 && h.cd) for (let q = 0; q < h.cd.length; q++) h.cd[q] = Math.max(h.cd[q], 0.25);   // stordito: niente abilità
    if (states.blind > 0) atk *= 0.65;
    if (states.curse > 0) atk *= 0.8;
    h.speed = speed; h.attack = Math.round(atk);
    if (states.burn > 0) {
      h._bt = (h._bt || 0) + dt;
      if (h._bt >= 1) { h._bt = 0; DBA_HURT(eng, h, h._vburn || 2, ev, h._dl || 'Bruciatura', h.pos); }
    }
    if (!any) { h._st = null; h.speed = h._bs; h.attack = h._ba; h._bs = undefined; }
  }
}

/** La Fenice rinasce una volta al 35% di vita con +20% attacco. Ritorna true se è rinata. */
function DBA_REVIVE(eng, ev) {
  const b = eng.boss;
  if (b.theme === 'phoenix' && !b._rev) {
    b._rev = 1; b.hp = Math.round(b.maxHp * 0.35); b.attack = Math.round(b.attack * 1.2);
    ev.push({ t: 'boss_transform', kind: 'boss_transform', color: b.color });
    ev.push({ t: 'special_trigger', kind: 'special_trigger', pos: { x: b.pos.x, z: b.pos.z }, radius: 6, color: b.color, name: 'Rinascita', type: 'meteor' });
    return true;
  }
  return false;
}
