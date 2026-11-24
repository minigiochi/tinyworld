// Generazione degli oggetti (riscritta a mano da rj / nj / DBA_PK / DBA_LBL del gioco v198).
// ATTENZIONE: l'ORDINE delle chiamate a Math.random() è quello dell'originale (serve per il test a seme fisso).
// Dati in src/data/gearGen.json (DATA.gearGen).

const GG = DATA.gearGen;
const GG_STATS = ['attack', 'defense', 'maxHp', 'mana', 'manaRegen', 'atkSpeed'];

function ggPick(list) { return list[Math.random() * list.length | 0]; }

/** Rarità casuale (nel gioco attuale le probabilità di salto sono 0: esce sempre "bianco", ma il tiro resta). */
function ggRollRarity() {
  let n = 0;
  for (let e = 1; e < GG.rarities.length && Math.random() < GG.rarities[e].chance; e++) n = e;
  return GG.rarities[n];
}

/** Etichetta e icona dello slot (solo estetica). */
function ggSlotLabel(o) {
  const sl = o.slot;
  if (sl === 'mainhand') return o.hands === 'two' ? { l: 'A due mani', i: '⚔️' } : { l: 'Mano primaria', i: '🗡️' };
  if (sl === 'offhand') {
    if (o.ohk === 'shield') return { l: 'Mano secondaria · Scudo', i: '🛡️' };
    if (o.ohk === 'held') return { l: 'Mano secondaria · Oggetto', i: '📖' };
    return { l: 'Mano secondaria · Arma', i: '🗡️' };
  }
  return { l: (GG.slotNames || {})[sl] || sl, i: (GG.slotIcons || {})[sl] || '' };
}

/** Sceglie lo slot (pesi), riprovando fino a 20 volte se esce "offhand" per una classe senza mano secondaria. */
function ggRollSlot(offhandKinds) {
  let sl = 'head';
  for (let g = 0; g < 20; g++) {
    let total = 0;
    GG.slotOrder.forEach((k) => (total += GG.slotWeights[k]));
    let x = Math.random() * total;
    sl = 'head';
    for (const k of GG.slotOrder) { x -= GG.slotWeights[k]; if (x <= 0) { sl = k; break; } }
    if (sl === 'offhand' && !offhandKinds.length) continue;
    break;
  }
  if (sl === 'offhand' && !offhandKinds.length) sl = 'head';
  return sl;
}

/** Crea un oggetto per la classe `classKey` (boss tier `tier`; `rarityKey` forza la rarità). */
function gearGenerate(classKey, tier = 0, rarityKey = null, classes = Kc) {
  const cls = classes[classKey];
  if (!cls) return null;
  const rar = rarityKey ? GG.rarities.find((r) => r.key === rarityKey) : ggRollRarity();
  const mul = rar.statMul * (1 + tier * 0.15);
  const offKinds = GG.classOffhand[classKey] || [];
  const slot = ggRollSlot(offKinds);
  const armor = GG.armorKind[classKey] || 'plate';
  let base = '', hands = null, ohk = null;
  if (slot === 'mainhand') { base = ggPick(GG.classWeapons[classKey] || ['Spada']); hands = GG.handsOf[base] || 'one'; }
  else if (slot === 'offhand') {
    ohk = ggPick(offKinds);
    if (ohk === 'weapon') {
      const ones = (GG.classWeapons[classKey] || []).filter((x) => GG.handsOf[x] === 'one');
      base = ggPick(ones.length ? ones : ['Pugnale']); hands = 'one';
    } else base = ggPick(GG.offhandNames[ohk]);
  } else base = ggPick(GG.armorNames[armor][slot]);
  const weightKey = slot === 'offhand' ? (ohk === 'weapon' ? 'mainhand' : ohk) : slot;
  const w = GG.slotStatWeights[weightKey];
  const sm = slot === 'mainhand' ? (hands === 'two' ? GG.slotScale.main2 : GG.slotScale.main1)
    : slot === 'offhand' ? (ohk === 'weapon' ? GG.slotScale.main1 * 0.8 : GG.slotScale.offhand) : GG.slotScale[slot];
  // da 1 a 3 statistiche, estratte con probabilità proporzionale al quadrato del peso dello slot
  const nStats = 1 + Math.floor(Math.random() * 3), stats = { attack: 0, defense: 0, maxHp: 0, mana: 0, manaRegen: 0, atkSpeed: 0 }, pool = [...GG_STATS];
  for (let q = 0; q < nStats && pool.length; q++) {
    let tw = 0; pool.forEach((k) => (tw += w[k] * w[k]));
    let x = Math.random() * tw, pk = pool[0];
    for (const k of pool) { x -= w[k] * w[k]; if (x <= 0) { pk = k; break; } }
    pool.splice(pool.indexOf(pk), 1);
    stats[pk] = Math.max(1, Math.round(GG.statBase[pk] * mul * w[pk] * sm * (0.5 + Math.random() * 0.7)));
  }
  if (stats.manaRegen) stats.manaRegen = Math.round(stats.manaRegen * 10) / 10;
  // set: solo sui pezzi d'armatura; probabilità per rarità; i set rari solo da oro/rosso
  let set = null;
  if (GG.setSlots.indexOf(slot) > -1) {
    const p = rar.key === 'bianco' ? 0.06 : rar.key === 'blu' ? 0.2 : 0.35;
    if (Math.random() < p) {
      const pool2 = GEAR_SETS.filter((q) => !q.rare || rar.key === 'oro' || rar.key === 'rosso');
      set = pool2[Math.random() * pool2.length | 0];
    }
  }
  const L = ggSlotLabel({ slot, hands, ohk });
  return {
    id: Math.random().toString(36).slice(2) + Date.now().toString(36),
    name: set ? `${base} ${rar.label} ${set.n} ${set.ic}` : `${base} ${rar.label}`,
    base, set: set ? set.k : null, rarity: rar.key, classKey, className: cls.name, icon: cls.icon,
    slotIcon: L.i, slotLabel: L.l, slot, hands, ohk, stats, bossTier: tier, equippedTo: null, _v: 2,
  };
}
