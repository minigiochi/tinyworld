// Simulazione headless. Uso: node tools/sim.js [livello] [biomaN] [tier] [prove] [eroi]
const [L = 7, N = 3, E = 0, T = 10, NH = 20] = process.argv.slice(2).map(Number);
const LD = require('../src/engine/load')(); const { createEngine, createBoss, CLASSES } = LD;
const ROLE = process.env.OLDGROWTH ? 0 : 1;   // crescita per ruolo (come il gioco); OLDGROWTH=1 per la vecchia formula semplice
const levelUp = LD.run('levelUpGains');
const all = Object.keys(CLASSES); const keys = process.env.MIX ? Array.from({ length: Math.min(NH, all.length) }, (_, i) => all[Math.floor(i * all.length / Math.min(NH, all.length))]) : all.slice(0, NH);   // MIX=1: party variegato (classi equidistanti)
function hero(k, i) { const c = CLASSES[k], g = L - 1; let mh = c.maxHp + 14 * g, at = c.attack + 6 * g, df = c.defense + Math.floor(g * .8); if (ROLE) { const r = { maxHp: c.maxHp, attack: c.attack, defense: c.defense, isDps: c.arch == 'melee' || c.arch == 'ranged', isHealer: c.arch == 'healer', isTank: c.arch == 'tank' }; for (let n = 1; n < L; n++) levelUp(r); mh = r.maxHp; at = r.attack; df = r.defense; }
  return { id: 'h' + i, name: c.name, classKey: k, className: c.name, icon: c.icon, arch: c.arch, maxHp: mh, hp: mh, attack: at, defense: df, alive: true, level: L, xp: 0, maxMana: c.maxMana || 60, mana: c.maxMana || 60, manaRegen: c.manaRegen || 2.5, atkSpd: 0 }; }
let w = 0, sv = 0, tt = 0; const t0 = Date.now();
for (let r = 0; r < T; r++) {
  const boss = createBoss(N, E, 1), d = L - 1;               // scala del boss come lvB (v198)
  boss.maxHp = Math.round(boss.maxHp * (1 + .45 * d) * 2.2); boss.hp = boss.maxHp;
  boss.attack = Math.round(boss.attack * (1 + .28 * d) * 1.7); boss.defense += Math.floor(d * .8);
  const e = createEngine(keys.map(hero), boss); let t = 0;
  while (!e.over && t < 400) { e.step(.1); t += .1; }
  if (e.boss.hp <= 0 || !e.boss.alive) w++;
  sv += e.heroes.filter(h => h.alive).length; tt += t;
}
console.log(JSON.stringify({ livello: L, biomaN: N, tier: E, eroi: keys.length, prove: T, vittorie: w, sopravvissuti_medi: +(sv / T).toFixed(1), durata_media_s: +(tt / T).toFixed(0), ms: Date.now() - t0 }));
