// Confronto deterministico: due motori con lo stesso seme devono dare traiettorie identiche.
// Uso: node tools/parity.js <fileCoreA> <fileCoreB> [livello] [bioma] [tier] [semi]
const [A = 'engine.core.generated.js', B = 'engine.core.generated.js', L = 13, N = 6, E = 1, S = 5] = process.argv.slice(2).map((x, i) => i < 2 ? x : Number(x));
const KINDS = {};
function run(core, seed) {
  const { createEngine, createBoss, CLASSES } = require('../src/engine/load')(core.includes('v7') ? { core, seed } : { core, seed, modules: /v[234567]/.test(core) ? ['arena.helpers.js'].concat(/v[34567]/.test(core) ? ['abilities.js'] : []).concat(/v[4567]/.test(core) ? ['abilityUse.js'] : []).concat(/v[567]/.test(core) ? ['bossAI.js'] : []).concat(/v[67]/.test(core) ? ['step.js'] : []) : [] });
  const keys = Object.keys(CLASSES).slice(0, Number(process.env.NH || 20)), g = L - 1;
  const heroes = keys.map((k, i) => { const c = CLASSES[k], mh = c.maxHp + 14 * g; const TL = require('../src/data/talents.json'); const tal = process.env.TAL ? TL[c.arch].map((tier, ti) => tier[(i + ti) % 2].id) : undefined; return { talents: tal, id: 'h' + i, name: c.name, classKey: k, className: c.name, icon: c.icon, arch: c.arch, maxHp: mh, hp: mh, attack: c.attack + 6 * g, defense: c.defense + Math.floor(g * .8), alive: true, level: L, xp: 0, maxMana: c.maxMana || 60, mana: c.maxMana || 60, manaRegen: c.manaRegen || 2.5, atkSpd: 0 }; });
  const boss = createBoss(N, E, 1); boss.maxHp = Math.round(boss.maxHp * (1 + .45 * g) * 2.2); boss.hp = boss.maxHp; boss.attack = Math.round(boss.attack * (1 + .28 * g) * 1.7);
  const e = createEngine(heroes, boss), tr = []; const o0 = e.execAbility0; e.execAbility0 = function (f, m, ...r) { KINDS[m.kind] = (KINDS[m.kind] || 0) + 1; return o0.call(this, f, m, ...r); }; let t = 0, i = 0;
  let dc = 0;
  while (!e.over && t < 300) { if (e.pendingDecision) { const d = e.pendingDecision; if (dc++ % 3 !== 2) { const c = d.choices[dc % d.choices.length]; e.resolveDecision(d.type === 'solo' ? { index: c.index } : { id: c.id }); } } e.step(.1); t += .1; if (++i % 50 === 0) tr.push([+t.toFixed(1), Math.round(e.boss.hp), e.heroes.map(h => Math.round(h.hp)).join(',')].join('|')); }
  tr.push('fine|' + Math.round(e.boss.hp) + '|' + e.heroes.filter(h => h.alive).length); return tr;
}
let ok = 0;
for (let s = 1; s <= S; s++) { const a = run(A, s), b = run(B, s), same = JSON.stringify(a) === JSON.stringify(b); if (same) ok++; else { const k = a.findIndex((x, i) => x !== b[i]); console.log('seme', s, 'DIVERGE al punto', k, a[k], '≠', b[k]); } }
console.log('abilità usate:', Object.keys(KINDS).sort().join(' '));
console.log(`identici ${ok}/${S}`);
