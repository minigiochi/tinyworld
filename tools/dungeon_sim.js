// Esegue un dungeon intero senza grafica: stanze, eventi (nemici, miniboss, trappole, tesori, indovinelli) e boss finale.
// Uso: node tools/dungeon_sim.js [livello] [eroi] [prove]   (party variegato; boss finale scalato come sim.js)
const LD = require('../src/engine/load')(); const { createEngine, createBoss, CLASSES } = LD;
const L = +process.argv[2] || 10, NH = +process.argv[3] || 8, T = +process.argv[4] || 20;
const all = Object.keys(CLASSES), keys = Array.from({ length: NH }, (_, i) => all[Math.floor(i * all.length / NH)]);
const levelUp = LD.run('levelUpGains');
function hero(k, i) { const c = CLASSES[k], r = { maxHp: c.maxHp, attack: c.attack, defense: c.defense, isDps: c.arch == 'melee' || c.arch == 'ranged', isHealer: c.arch == 'healer', isTank: c.arch == 'tank' }; for (let n = 1; n < L; n++) levelUp(r);
  return { id: 'h' + i, name: c.name, classKey: k, className: c.name, icon: c.icon, arch: c.arch, maxHp: r.maxHp, hp: r.maxHp, attack: r.attack, defense: r.defense, alive: true, level: L, xp: 0, maxMana: c.maxMana || 60, mana: c.maxMana || 60, manaRegen: c.manaRegen || 2.5, atkSpd: 0 }; }
// il codice del dungeon vive nel contesto del motore
const run = (code) => LD.run(code);
const dg = LD.run('({generate:()=>dungeonGenerate(DATA.dungeon),hurt:dungeonHurt,rest:dungeonRest,trap:dungeonTrap,riddle:dungeonRiddleAnswer,pick:()=>dungeonPickRiddle(DATA.dungeon),tpl:dungeonTemplate,enemy:dungeonEnemy,alive:dungeonAlive})');
const d = L - 1;
function finalBoss() { const b = createBoss(NH, Math.min(14, Math.floor(L / 4) + 1), 1); b.maxHp = Math.round(b.maxHp * (1 + .45 * d) * 2.2); b.hp = b.maxHp; b.attack = Math.round(b.attack * (1 + .28 * d) * 1.7); b.defense += Math.floor(d * .8); return b; }
function fight(party, boss) {
  const e = createEngine(party.map((h) => ({ ...h, mana: h.maxMana, alive: h.alive })), boss);
  for (let i = 0; i < 4000 && !e.over; i++) e.step(.05);
  party.forEach((h) => { const q = e.heroes.find((x) => x.id == h.id); if (q) { h.hp = q.hp; h.alive = q.alive && q.hp > 0; } });
  return e.outcome == 'victory' && dg.alive(party);
}
const stats = { win: 0, died: 0, rooms: 0, events: { n: 0, m: 0, t: 0, c: 0, r: 0 }, deadAt: [] };
for (let t = 0; t < T; t++) {
  const party = keys.map(hero), B = finalBoss(), D = dg.generate();
  let node = D.L[0][0], ok = true;
  for (;;) {
    stats.rooms++; dg.rest(party);
    for (const ev of node.ev) {
      stats.events[ev]++;
      if (ev == 'n' || ev == 'm') { const tpl = dg.tpl(node.r.id / 100 | 0); if (!fight(party, dg.enemy(tpl, B, ev == 'm', party.length))) { ok = false; break; } }
      else if (ev == 't') dg.hurt(party, B.attack * 0.7);
      else if (ev == 'r') { const q = dg.pick(); dg.riddle(party, B, q.answers[Math.random() * q.answers.length | 0].correct); }
      if (!dg.alive(party)) { ok = false; break; }
    }
    if (!ok) break;
    if (node.d == D.D - 1) { ok = fight(party, B); break; }
    const nx = D.L[node.d + 1]; node = nx[node.ex[Math.random() * node.ex.length | 0]];
  }
  if (ok) stats.win++; else stats.deadAt.push(node.d + 1 + '/' + D.D);
}
console.log(JSON.stringify({ livello: L, eroi: NH, prove: T, dungeon_completati: stats.win, stanze_visitate: stats.rooms, eventi: stats.events, fallimenti_a_stanza: stats.deadAt.join(' ') }));
