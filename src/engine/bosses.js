// Boss: tabella dei boss, difficoltà e creazione (riscritte a mano da $v, JR, NM, IM, W6, $6, ug).
// Dati in src/data: bosses.json (32 boss), bossLocations.json (luogo ed elemento), arenaShapes.json,
// difficulties.json (grado + moltiplicatore + probabilità), difficultyLabels.json.

const $v = DATA.bosses;                 // i boss, nell'ordine dei biomi (indice = bioma)
const JR = DATA.bossLocations;          // luogo ed elemento per chiave di boss
const NM = DATA.arenaShapes;            // forme d'arena possibili
const IM = DATA.difficulties;           // gradi: bianco, blu, viola, oro, rosso
const W6 = DATA.difficultyLabels;       // etichette: Facile … Impossibile

/** Grado di difficoltà del boss: forzato (window.__bossDiff) oppure estratto a sorte secondo `chance`. */
function $6() {
  if (window.__bossDiff) { const forced = IM.find((d) => d.key === window.__bossDiff); if (forced) return forced; }
  const roll = Math.random();
  let acc = 0;
  for (const d of IM) { acc += d.chance; if (roll < acc) return d; }
  return IM[0];
}

/**
 * Crea un boss.  n = bioma (1…), e = tier (0…4), lv = livello del party.
 *  vita    = (350 + 150·n) · (1 + 0,15·e) · 2 · moltiplicatore del grado · (1 + 0,16·(lv−1))
 *  attacco = (16 + n)       · (1 + 0,10·e)     ·   moltiplicatore del grado · (1 + 0,30·(lv−1))
 *  difesa  = 6 + 1,5·e (arrotondata per difetto)
 * (i fattori 0,16 e 0,30 si possono cambiare da console con window.__bhk e window.__bak)
 */
function ug(n, e = 0, lv = 1) {
  const biome = Math.max(1, n || 1);
  const base = $v[e % $v.length];
  const diff = $6();
  const levelsAbove1 = Math.max(1, lv || 1) - 1;
  const maxHp = Math.round((350 + biome * 150) * (1 + e * 0.15) * 2 * diff.statMul * (1 + levelsAbove1 * (window.__bhk || 0.16)));
  const attack = Math.round((16 + biome * 1) * (1 + e * 0.1) * diff.statMul * (1 + levelsAbove1 * (window.__bak || 0.3)));
  const defense = 6 + Math.floor(e * 1.5);
  const shape = NM[Math.floor(Math.random() * NM.length)];
  const place = JR[base.key] || {};
  return {
    ...base,
    maxHp, hp: maxHp, attack, defense, alive: true, tier: e,
    difficulty: diff.key, difficultyLabel: W6[diff.key] || diff.name, difficultyName: diff.name,
    difficultyIcon: diff.icon, difficultyColor: diff.color, difficultyMul: diff.statMul,
    color: base.bossColor, arena: base.arena, arenaShape: shape,
    location: place.location, element: place.element,
    name: base.name, title: base.title, icon: base.icon,
    specialAbilities: base.specialAbilities || [],
    requiredLevel: base.requiredLevel || 1,
    companionChance: base.companionChance || 0.1,
    companionName: base.companionName || 'Companion',
  };
}
