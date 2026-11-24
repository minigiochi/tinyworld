// Incantesimi degli oggetti e effetti a 5 pezzi (riscritto a mano da DBA_EN / DBA_SETFX / DBA_ENP / DBA_ENB del gioco v198).
// Ogni incantesimo ha una "potenza" p: 1 + 0,5 per ogni gradino di rarità (bianco 1, blu 1,5 … rosso 3) per ogni pezzo incantato,
// più la potenza data dall'effetto a 5 pezzi dello stesso set (src/data/setFull.json).
// In battaglia contano solo Furia (+% attacco) e Baluardo (+% PV max); gli altri valgono nel mondo/dopo la vittoria.

const ENCH_RARITIES = ['bianco', 'blu', 'viola', 'oro', 'rosso'];
const ENCH_SETFULL = DATA.setFull;
/** key → [icona, nome, valore(p, tier), descrizione(valore)] */
const ENCH = {
  vamp: ['🩸', 'Vampirismo', (p) => Math.min(25, 2 * p), (x) => `Dopo ogni vittoria il party recupera il ${x}% dei PV massimi`],
  oro: ['💰', 'Avidità', (p, tier) => Math.round((8 + 3 * (tier | 0)) * p), (x) => `+${x} 🪙 a ogni vittoria`],
  xp: ['📚', 'Sapienza', (p, tier) => Math.round((6 + 2 * (tier | 0)) * p), (x) => `+${x} XP a ogni eroe dopo ogni vittoria`],
  racc: ['⛏', 'Raccolto', (p) => Math.min(60, 8 * p), (x) => `${x}% di probabilità di raccolta doppia`],
  fort: ['🍀', 'Fortuna', (p) => Math.min(40, 4 * p), (x) => `+${x}% di probabilità di trovare gemme e mappe`],
  rig: ['🌿', 'Rigenerazione', (p) => Math.min(6, Math.round(6 * p) / 10), (x) => `Nel mondo aperto il party recupera il ${x}% dei PV ogni 10 secondi`],
  furia: ['🔥', 'Furia', (p) => Math.min(40, 3 * p), (x) => `+${x}% di attacco in battaglia (solo l'eroe che lo indossa)`],
  baluardo: ['🛡', 'Baluardo', (p) => Math.min(40, 3 * p), (x) => `+${x}% di PV massimi in battaglia (solo l'eroe che lo indossa)`],
};

/** Effetti a 5 pezzi: { chiave incantesimo: potenza } sommati su tutti i set con almeno 5 pezzi. */
function enchantSetEffects(items) {
  const count = {}, out = {};
  for (const it of items) if (it.set) count[it.set] = (count[it.set] || 0) + 1;
  for (const k in count) if (count[k] >= 5 && ENCH_SETFULL[k]) for (const e in ENCH_SETFULL[k]) out[e] = (out[e] || 0) + ENCH_SETFULL[k][e];
  return out;
}

/** Potenza di un incantesimo per un eroe, dati i suoi pezzi equipaggiati. */
function enchantPower(key, items) {
  let p = 0;
  for (const it of items) if (it.ench === key) p += 1 + Math.max(0, ENCH_RARITIES.indexOf(it.rarity)) * 0.5;
  return p + (enchantSetEffects(items)[key] || 0);
}

/** Applica Furia e Baluardo agli eroi a inizio battaglia. `itemsOf(hero)` restituisce i pezzi equipaggiati dell'eroe. */
function enchantApplyBattle(heroes, itemsOf) {
  for (const h of heroes) {
    const items = itemsOf(h) || [];
    const f = enchantPower('furia', items), b = enchantPower('baluardo', items);
    if (f > 0) h.attack = Math.round(h.attack * (1 + ENCH.furia[2](f) / 100));
    if (b > 0) { const m = 1 + ENCH.baluardo[2](b) / 100; h.maxHp = Math.round(h.maxHp * m); h.hp = Math.round(h.hp * m); }
  }
}

/** Gradino di rarità di un oggetto (0 = bianco … 4 = rosso). */
function enchantRarityIndex(item) { return Math.max(0, ENCH_RARITIES.indexOf(item.rarity)); }

/** Costo per incantare un oggetto dall'incantatore: minerale (o), erbe (h), oro (g). */
function enchantCost(item) {
  const r = enchantRarityIndex(item);
  return { o: 4 + 3 * r, h: 3 + 2 * r, g: 150 * (1 + r) };
}

/**
 * Incanta l'oggetto `itemId` con `key` pagando le risorse `res` = {o, h, gold}.
 * Restituisce { ok, items, res, msg }: se risorse insufficienti o già applicato, nulla cambia.
 */
function enchantApply(items, itemId, key, res) {
  const it = items.find((x) => x.id === itemId);
  if (!it || !ENCH[key]) return { ok: false, items, res, msg: 'oggetto o incantesimo non valido' };
  if (it.ench === key) return { ok: false, items, res, msg: 'Già applicato' };
  const c = enchantCost(it);
  if ((res.o | 0) < c.o || (res.h | 0) < c.h || res.gold < c.g) return { ok: false, items, res, msg: `Servono ${c.o} ⛏ + ${c.h} 🌿 + ${c.g} 🪙` };
  return { ok: true, items: items.map((x) => (x.id === itemId ? { ...x, ench: key } : x)), res: { o: res.o - c.o, h: res.h - c.h, gold: res.gold - c.g }, msg: `${ENCH[key][0]} ${ENCH[key][1]} applicato` };
}
