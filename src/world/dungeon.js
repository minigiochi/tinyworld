// Dungeon procedurale (riscritto a mano da DBA_DG del gioco v198, script_13). Solo logica: niente grafica né schermate.
// Dati (stanze, eventi, indovinelli, trappole) in src/data/dungeon.json. L'ordine delle chiamate a Math.random() è quello dell'originale.
// Uso: const dg = dungeonGenerate(DG); dg.L[livello][stanza] = { d, p, r:{id,name,th}, ex:[uscite], ev:[eventi], labs }.
// Eventi: n = nemico, m = miniboss, t = trappola, c = tesoro, r = indovinello.

const dgR = (n) => Math.random() * n | 0;                                                   // intero casuale 0..n-1
const dgShuffle = (a) => a.map((x) => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map((p) => p[1]);
const DG_TRAP_TYPES = ['spike', 'arrow', 'fire', 'poison'];

/** Le 1000 stanze preimpostate: 10 nomi × 10 aggettivi × 10 ambientazioni. */
function dungeonRoomPool(DG) {
  return Array.from({ length: 1000 }, (_, i) => ({ id: i, name: DG.roomNouns[i % 10] + ' ' + DG.roomAdjectives[(i / 10 | 0) % 10], th: DG.themes[(i / 100 | 0) % 10] }));
}

/** Genera la struttura: 4–8 livelli di stanze (da 1 a 3 per livello), collegamenti tra livelli ed eventi sparsi. */
function dungeonGenerate(DG) {
  const pool = dungeonRoomPool(DG);
  const D = 4 + dgR(5), ids = dgShuffle(pool.map((_, i) => i));
  let k = 0;
  const L = [];
  for (let d = 0; d < D; d++) {
    const width = d ? 1 + dgR(3) : 1;
    L.push(Array.from({ length: width }, (_, p) => ({ d, p, r: pool[ids[k++]], ex: [], ev: [] })));
  }
  for (let d = 0; d < D - 1; d++) {
    const next = L[d + 1], W = next.length;
    next.labs = W == 1 ? ['Dritto'] : W == 2 ? DG.pairs[dgR(3)] : ['Sinistra', 'Dritto', 'Destra'];
    L[d].forEach((n) => { n.ex = dgShuffle(next.map((_, i) => i)).slice(0, Math.min(W, 1 + dgR(3))).sort(); });
    // ogni stanza del livello successivo deve essere raggiungibile da almeno una del livello corrente
    next.forEach((_, i) => { if (!L[d].some((n) => n.ex.includes(i))) L[d][dgR(L[d].length)].ex.push(i); });
    L[d].forEach((n) => { n.ex = [...new Set(n.ex)].sort(); });
  }
  const all = dgShuffle(L.flat());
  dgShuffle(['n', 'n', 'n', 'm', 'm', 't', 'c', 'r']).forEach((e, i) => all[i % all.length].ev.push(e));
  return { D, L };
}

/** Il party subisce `dmg` (ridotto da metà difesa, minimo 1). Restituisce le righe di registro per gli eroi caduti. */
function dungeonHurt(party, dmg) {
  const log = [];
  for (const h of party) {
    if (!h.alive) continue;
    h.hp -= Math.max(1, Math.round(dmg - h.defense / 2));
    if (h.hp <= 0) { h.hp = 0; h.alive = false; log.push('💀 ' + h.name + ' è caduto'); }
  }
  return log;
}

/** Entrando in una stanza i vivi recuperano il 15% dei PV massimi. */
function dungeonRest(party) { for (const h of party) if (h.alive) h.hp = Math.min(h.maxHp, h.hp + h.maxHp * 0.15); }

/** Trappola: colpisce tutto il party con il 70% dell'attacco del boss. */
function dungeonTrap(party, boss) { return dungeonHurt(party, boss.attack * 0.7); }

/** Indovinello: risposta giusta = +25% PV ai vivi; sbagliata = colpo pari al 30% dell'attacco del boss. Restituisce il registro. */
function dungeonRiddleAnswer(party, boss, correct) {
  if (correct) { for (const h of party) if (h.alive) h.hp = Math.min(h.maxHp, h.hp + h.maxHp * 0.25); return []; }
  return dungeonHurt(party, boss.attack * 0.3);
}

/** Estrae un indovinello e mescola le risposte: [{testo, giusta}, …]. */
function dungeonPickRiddle(DG) {
  const q = DG.riddles[dgR(DG.riddles.length)];
  return { question: q[0], answers: dgShuffle(q[1].map((t, i) => [t, i == q[2]])).map((x) => ({ text: x[0], correct: x[1] })) };
}

const dungeonAlive = (party) => party.some((h) => h.alive);

const DG_THEMES = ['shadow', 'fire', 'frost', 'bone', 'nature', 'abyss', 'storm', 'void', 'blood', 'light'];

/** Mostro-modello per l'ambientazione `i` (0–9): uno a caso tra i boss di quel tema, altrimenti il primo. */
function dungeonTemplate(i) {
  const a = $v.filter((x) => x.theme == DG_THEMES[i]);
  return a.length ? a[Math.random() * a.length | 0] : $v[0];
}

/** Nemico di stanza (come DBA_MKB): normale = 12% PV e 50% attacco del boss finale, miniboss = 30% e 90%. */
function dungeonEnemy(template, B, mini, nHeroes) {
  const b = ug(nHeroes, $v.indexOf(template)), hp = Math.round(B.maxHp * (mini ? 0.3 : 0.12));
  return Object.assign(b, {
    tier: 0, maxHp: hp, hp, attack: Math.round(B.attack * (mini ? 0.9 : 0.5)), defense: B.defense,
    difficulty: B.difficulty, difficultyLabel: B.difficultyLabel, difficultyName: B.difficultyName, difficultyIcon: B.difficultyIcon, difficultyColor: B.difficultyColor, difficultyMul: B.difficultyMul,
    name: (mini ? 'Miniboss · ' : '') + template.name, companionChance: 0.05,
  });
}
