// Abilità "doppie" (riscritta a mano da window.DBA_DUAL): un'abilità con un danno opzionale e una lista di effetti `fx`.
// Dati dell'abilità (ab): dmg (moltiplicatore danno), fx (elenco di effetti), cd, hp (potenza cure), red (riduzione), tt (secondi di provocazione).
// Effetti: heal, healAll, bubble, bubbleAll, adapt, adaptAll, speed, self, allyShield, taunt.

window.DBA_DUAL = function (eng, hero, ab, idx, from, to, ev, cdMul) {
  const boss = eng.boss, atk = hero.attack + (hero.atkBuff || 0), color = hero.color;
  let firstLabel = true;
  const label = () => { const l = firstLabel ? ab.name : undefined; firstLabel = false; return l; };   // il nome appare solo sul 1° effetto
  const pos = (h) => ({ x: h.pos.x, z: h.pos.z });
  const alive = eng.heroes.filter((h) => h.alive);
  /** compagno più forte in attacco tra i DPS (o l'eroe stesso) */
  const bestDps = () => alive.filter((h) => h !== hero && h.isDps).sort((a, b) => b.attack - a.attack)[0] || hero;
  const aura = (h, col) => { const p = pos(h); ev.push({ t: 'buff', who: hero.id, from: p, to: p, kind: 'aura', label: label(), c: col || color, target: h.id }); };
  const bubble = (h) => { const p = pos(h); ev.push({ t: 'buff', who: hero.id, from: p, to: p, kind: 'bubble', label: label(), c: color, target: h.id }); };
  const shield = (h, red, secs) => { h.dmgReduce = Math.max(h.dmgReduce || 0, red); h.dmgReduceTimer = Math.max(h.dmgReduceTimer || 0, secs); };
  /** "adattamento": ogni ruolo riceve il bonus più adatto */
  const adapt = (h) => {
    if (h.isTank) shield(h, 0.4, 6);
    else if (h.isHealer) { if (!(h.atkBuffTimer > 0)) h.atkBuff = (h.atkBuff || 0) + Math.round(h.attack * 0.35); h.atkBuffTimer = 7; }
    else if (h.isMelee) { h.atkSpeedMul = 1.3 * (h.atkSpdBase || 1); h.atkSpeedTimer = 6; }
    else { if (!(h.atkBuffTimer > 0)) h.atkBuff = (h.atkBuff || 0) + Math.round(h.attack * 0.3); h.atkBuffTimer = 6; }
    aura(h, h.isTank ? '#60a5fa' : h.isHealer ? '#4ade80' : h.isMelee ? '#fbbf24' : '#f472b6');
  };

  if (ab.dmg) {
    const d = Math.max(1, Math.round(atk * ab.dmg * 1.7 - boss.defense / 2));
    boss.hp -= d; hero.threat += d;
    ev.push({ t: 'dmg', who: hero.id, from, to, kind: ab.vfx || 'projectile', label: label(), val: d, c: color });
  }
  for (const fx of ab.fx || []) {
    if (fx === 'heal') {
      const t = eng.lowestHurt();
      if (t) {
        const before = t.hp; t.hp = Math.min(t.maxHp, t.hp + Math.round(atk * (ab.hp || 1.8) + 8));
        ev.push({ t: 'heal', who: hero.id, from, to: pos(t), kind: 'heal_beam', label: label(), val: Math.round(t.hp - before), c: color, target: t.id });
      }
    } else if (fx === 'healAll') {
      if (eng.anyHurt()) { eng.healAll(Math.round(atk * (ab.hp || 1) + 5)); ev.push({ t: 'heal', who: hero.id, from, to: from, kind: 'heal_ring', label: label(), c: color }); }
    } else if (fx === 'bubble') {
      const t = eng.lowestHurt() || hero; shield(t, 0.5, 5); bubble(t);
    } else if (fx === 'bubbleAll') {
      for (const h of alive) { shield(h, 0.35, 4); bubble(h); }
    } else if (fx === 'adapt') adapt(bestDps());
    else if (fx === 'adaptAll') alive.forEach(adapt);
    else if (fx === 'speed') { const h = bestDps(); h.atkSpeedMul = 1.35 * (h.atkSpdBase || 1); h.atkSpeedTimer = 6; aura(h, '#fbbf24'); }
    else if (fx === 'self') { shield(hero, ab.red || 0.5, 5); aura(hero); }
    else if (fx === 'allyShield') {
      const t = eng.lowestHurt();
      if (t && t !== hero) { shield(t, 0.4, 5); bubble(t); }
    } else if (fx === 'taunt') {
      boss.forcedTarget = hero.id; boss.forcedTimer = Math.max(boss.forcedTimer || 0, ab.tt || 4); hero.threat += Math.round(hero.attack * 3);
    }
  }
  hero.cd[idx] = ab.cd * cdMul;
  return true;
};
