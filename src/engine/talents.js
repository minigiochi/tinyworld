// Talenti e sinergie (riscritti a mano da DBA_TAL / DBA_TALFIND / DBA_TALAPPLY / DBA_SYN).
// I dati dei talenti stanno in src/data/talents.json: 4 archetipi × 3 livelli × 2 scelte.
// Ogni talento ha un oggetto `m` con i modificatori: hp, atk, def (valore), spd, mr (mana), thr (minaccia), syn (combo).

var DBA_TAL = DATA.talents;                  // var: il vecchio codice lo cerca anche come window.DBA_TAL
window.DBA_TAL = DBA_TAL;

/** Cerca un talento per id ("t1a", "m2b"…). */
function DBA_TALFIND(id) {
  for (const arch in DBA_TAL) for (const tier of DBA_TAL[arch]) for (const t of tier) if (t.id === id) return t;
  return null;
}
window.DBA_TALFIND = DBA_TALFIND;

/** Applica i talenti scelti (h.talents = lista di id) alle statistiche di battaglia di ogni eroe. */
function DBA_TALAPPLY(heroes) {
  for (const h of heroes) {
    const picked = h.talents;
    if (!picked || !picked.length) continue;
    const sum = { hp: 0, atk: 0, def: 0, spd: 0, mr: 0, thr: 0, syn: 0 };
    for (const id of picked) {
      const t = DBA_TALFIND(id);
      if (!t) continue;
      for (const k in sum) sum[k] += t.m[k] || 0;
    }
    if (sum.hp) { const r = 1 + sum.hp; h.maxHp = Math.round(h.maxHp * r); h.hp = Math.min(h.maxHp, Math.round(h.hp * r)); }
    if (sum.atk) h.attack = Math.round(h.attack * (1 + sum.atk));
    if (sum.def) h.defense = (h.defense || 0) + sum.def;
    if (sum.spd) { h.atkSpdBase *= 1 + sum.spd; h.atkSpeedMul = h.atkSpdBase; }
    if (sum.mr) h.manaRegen = (h.manaRegen || 2.5) * (1 + sum.mr);
    if (sum.thr) h.threat = (h.threat || 0) * (1 + sum.thr) + sum.thr * 100;
    if (sum.syn) h.synMul = 1 + sum.syn;
  }
}

/**
 * Sinergie ("combo") dopo un'abilità riuscita di `hero`:
 *  - attacco subito dopo un veleno/DoT sul boss → Detonazione (+35% del danno appena fatto), max ogni 2,2 s;
 *  - tiro a distanza mentre il boss è provocato → Fuoco di Copertura (+25%), stessa pausa;
 *  - cura mentre qualcuno ha uno scudo → Cura Protetta (cura di gruppo), max ogni 3 s.
 * `before` = fotografia presa prima dell'abilità (dot0, tn0, sh0, hp0). Il talento "syn" amplifica l'effetto.
 */
function DBA_SYN(eng, hero, ab, before, ev) {
  const boss = eng.boss, dealt = Math.max(0, before.hp0 - boss.hp);
  const DAMAGE = { strike: 1, big_strike: 1, aoe: 1, chain: 1, shot: 1, big_shot: 1, taunt_strike: 1 };
  const RANGED = { shot: 1, big_shot: 1, chain: 1, aoe: 1 };
  const HEAL = { heal_single: 1, heal_aoe: 1, regen: 1 };
  const mul = hero.synMul || 1, from = { x: hero.pos.x, z: hero.pos.z }, to = { x: boss.pos.x, z: boss.pos.z };
  const explode = (label, extra, color) => {
    boss.hp -= extra;
    ev.push({ t: 'dmg', who: hero.id, from, to, kind: 'explosion', label, val: extra, c: color });
  };
  if (DAMAGE[ab.kind] && dealt > 0 && eng.time - (boss._sy1 || -9) > 2.2) {
    if (before.dot0) { boss._sy1 = eng.time; explode('Combo: Detonazione', Math.round(dealt * 0.35 * mul), '#fb923c'); }
    else if (before.tn0 && RANGED[ab.kind]) { boss._sy1 = eng.time; explode('Combo: Fuoco di Copertura', Math.round(dealt * 0.25 * mul), '#38bdf8'); }
  }
  if (HEAL[ab.kind] && before.sh0 && eng.time - (boss._sy2 || -9) > 3) {
    boss._sy2 = eng.time;
    eng.healAll(Math.round(hero.attack * 0.8 * mul) + 6);
    ev.push({ t: 'heal', who: hero.id, from, to: from, kind: 'heal_ring', label: 'Combo: Cura Protetta', c: '#34d399' });
  }
}
