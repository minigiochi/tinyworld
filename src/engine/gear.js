// Equipaggiamento: statistiche degli oggetti + bonus di set (riscritto a mano da Pe0, ij e DBA_SETB del gioco v198).
// Oggetto: { slot, set?, stats:{attack,defense,maxHp,mana,manaRegen,atkSpeed} }.  Eroe: statistiche base + level + isTank.
// Set: con >=2 pezzi vale b2, con >=4 pezzi vale anche b3. I bonus sono percentuali sulla statistica (base eroe + oggetti), atkSpd in punti.

const GEAR_SETS = DATA.sets;
const GEAR_KEYS = ['attack', 'defense', 'maxHp', 'mana', 'manaRegen', 'atkSpeed'];

/** Somma delle statistiche degli oggetti, scalate per livello (0.45–1.6) e difesa ridotta per i non-tank (×0.6). */
function gearItemTotals(hero, items) {
  const lm = Math.max(0.45, Math.min(1.6, 0.4 + (hero.level || 1) * 0.04));
  const dm = hero.isTank ? 1 : 0.6;
  const t = { attack: 0, defense: 0, maxHp: 0, mana: 0, manaRegen: 0, atkSpeed: 0 };
  for (const it of items) {
    const s = it.stats || {};
    t.attack += Math.round((s.attack || 0) * lm);
    t.defense += Math.round((s.defense || 0) * lm * dm);
    t.maxHp += Math.round((s.maxHp || 0) * lm);
    t.mana += Math.round((s.mana || 0) * lm);
    t.manaRegen += Math.round((s.manaRegen || 0) * lm * 10) / 10;
    t.atkSpeed += s.atkSpeed || 0;
  }
  return t;
}

/** Aggiunge i bonus di set ai totali degli oggetti. `si` = icone dei set attivi. */
function gearWithSets(items, hero, totals) {
  const out = Object.assign({}, totals); out.si = '';
  const count = {};
  for (const it of items) if (it && it.set) count[it.set] = (count[it.set] || 0) + 1;
  const add = { attack: 0, defense: 0, maxHp: 0, mana: 0, manaRegen: 0, atkSpd: 0 };
  for (const S of GEAR_SETS) {
    const n = count[S.k] || 0;
    if (n < 2) continue;
    out.si += S.ic;
    for (const b of n >= 4 ? [S.b2, S.b3] : [S.b2]) {
      for (const k in b) {
        if (k === 'atkSpd') add.atkSpd += b[k] * 100;
        else add[k] += (hero[k === 'mana' ? 'maxMana' : k] + (totals[k] || 0)) * b[k];
      }
    }
  }
  out.attack += Math.round(add.attack); out.defense += Math.round(add.defense); out.maxHp += Math.round(add.maxHp); out.mana += Math.round(add.mana);
  out.manaRegen = Math.round((out.manaRegen + add.manaRegen) * 10) / 10;
  out.atkSpeed += add.atkSpd;
  return out;
}

/** Eroe con l'equipaggiamento applicato (come Pe0). Senza bonus restituisce l'eroe a vita/mana piena. */
function gearApply(hero, items) {
  const b = gearWithSets(items, hero, gearItemTotals(hero, items));
  if (b.attack || b.defense || b.maxHp || b.mana || b.manaRegen || b.atkSpeed) {
    const maxHp = hero.maxHp + b.maxHp, maxMana = hero.maxMana + b.mana;
    return Object.assign({}, hero, {
      attack: hero.attack + b.attack, defense: hero.defense + b.defense, maxHp, hp: maxHp, maxMana, mana: maxMana,
      manaRegen: hero.manaRegen + b.manaRegen, atkSpd: b.atkSpeed, alive: true,
    });
  }
  return Object.assign({}, hero, { atkSpd: 0, hp: hero.maxHp, mana: hero.maxMana || 0, alive: true });
}

/** Equipaggia l'oggetto `itemId` sull'eroe `heroId` (come Ue del gioco): libera lo stesso slot; un'arma a due mani libera la mano secondaria e viceversa. */
function gearEquip(items, itemId, heroId) {
  const it = items.find((o) => o.id === itemId);
  if (!it) return items;
  return items.map((o) => {
    if (o.equippedTo === heroId && o.id !== itemId &&
      (o.slot === it.slot || (it.slot === 'mainhand' && it.hands === 'two' && o.slot === 'offhand') || (it.slot === 'offhand' && o.slot === 'mainhand' && o.hands === 'two'))) return { ...o, equippedTo: null };
    return o.id === itemId ? { ...o, equippedTo: heroId } : o;
  });
}
