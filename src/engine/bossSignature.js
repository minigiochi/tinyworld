// Abilità "firma" di ogni boss (riscritte a mano da DBA_SIG / DBA_SIGGO). Dati in src/data/bossSignatures.json.
// Tipi: barrage (pioggia di colpi segnalati), ring (onda attorno al boss), drain (come ring ma cura il boss),
// slow (rallenta il party), blind (−30% attacco), summon (evoca un servitore).

var DBA_SIG = DATA.bossSignatures;           // per chiave di boss: nome, colore, ricarico, parametri

/** Lancia la firma `sig` del boss. alive = eroi vivi, ev = lista eventi. */
function DBA_SIGGO(eng, boss, sig, alive, ev) {
  const at = { x: boss.pos.x, z: boss.pos.z };
  ev.push({ t: 'bossWind', kind: 'bossWind', label: '⚠ ' + sig.nm, c: sig.c, from: at });
  /** segnala a terra un'area che esploderà dopo `delay` secondi */
  const telegraph = (x, z, radius, delay) => {
    eng.telegraphs.push({ pos: { x, z }, radius, delay, damage: sig.d * 0.85, color: sig.c, name: sig.nm, type: sig.fx || 'shockwave', heal: sig.h || 0 });
    ev.push({ t: 'special_telegraph', kind: 'special_telegraph', pos: { x, z }, radius, color: sig.c, name: sig.nm, delay, type: sig.fx || 'shockwave' });
  };
  const teamBuff = () => ev.push({ t: 'buff', kind: 'team_buff', from: { x: 0, z: 0 }, color: sig.c, label: sig.nm });

  if (sig.t === 'barrage') {
    for (let i = 0; i < sig.n; i++) {
      let x, z;
      if (sig.rnd || !alive.length) {                                       // a caso nell'arena
        const a = Math.random() * 6.283, q = Math.random() * eng.arenaRadius * 0.7;
        x = Math.cos(a) * q; z = Math.sin(a) * q;
      } else {                                                              // sopra un eroe a caso
        const h = alive[Math.floor(Math.random() * alive.length)];
        x = h.pos.x + (Math.random() - 0.5) * 3; z = h.pos.z + (Math.random() - 0.5) * 3;
      }
      const c = eng.clampToArena(x, z);
      telegraph(c.x, c.z, sig.r, 1.3 + i * 0.3);                            // un colpo ogni 0,3 s
    }
  } else if (sig.t === 'ring' || sig.t === 'drain') {
    telegraph(at.x, at.z, sig.r, 1.4);
  } else if (sig.t === 'slow') {
    for (const h of alive) { h.atkSpeedMul = Math.max(0.5, (h.atkSpdBase || 1) * 0.65); h.atkSpeedTimer = 6; }
    teamBuff();
  } else if (sig.t === 'blind') {
    for (const h of alive) { h.atkBuff = (h.atkBuff || 0) - Math.round(h.attack * 0.3); h.atkBuffTimer = 6; }
    teamBuff();
  } else if (sig.t === 'summon') {
    if (eng.companions.filter((c) => c.alive).length < 3) {                // al massimo 3 servitori
      const ang = Math.random() * 6.283, dist = 2 + Math.random() * 2;
      const x = at.x + Math.cos(ang) * dist, z = at.z + Math.sin(ang) * dist, hp = 25 + (boss.tier || 0) * 8;
      const c = { id: 'comp_' + Math.random().toString(36).slice(2), pos: { x, z }, hp, maxHp: hp, attack: Math.round(boss.attack * 0.35), defense: 2, radius: 0.5, speed: 3.5, range: 1.5, alive: true, _deadAt: 0, attackCd: 1.5, bossColor: boss.color };
      eng.companions.push(c);
      ev.push({ t: 'companion_spawn', kind: 'companion_spawn', id: c.id, pos: { x, z }, color: sig.c });
    }
  }
}
