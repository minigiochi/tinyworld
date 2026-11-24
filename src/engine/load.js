// Carica il motore di battaglia (estratto alla lettera dal gioco v198) senza browser.
// Uso: const {createEngine, createBoss, CLASSES} = require('./load')();
const fs = require('fs'), vm = require('vm'), path = require('path');
module.exports = function loadEngine(opts = {}) {
  const core0 = opts.core || 'engine.core.v7.js';
  if (!opts.modules && core0 === 'engine.core.v7.js') opts.modules = ['arena.helpers.js', 'abilities.js', 'abilityUse.js', 'bossAI.js', 'step.js', 'battle.js', 'talents.js', 'formation.js', 'arenaShapes.js', 'bosses.js', 'effects.js', 'bossSignature.js', 'dualAbility.js', 'gear.js', 'gearGen.js', 'enchant.js', 'progression.js','ultimate.js', 'world/dungeon.js'];
  const modern = core0 === 'engine.core.v7.js';
  const deps = fs.readFileSync(path.join(__dirname, modern ? 'engine.deps.generated.js' : 'engine.deps.legacy.generated.js'), 'utf8');
  let dataSrc = '';
  if (modern) {
    const D = (n) => JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', n + '.json'), 'utf8'));
    const DATA = { classes: D('classes'), unlockByClass: D('unlockByClass'), unlockByArch: D('unlockByArch'), healerSpecial: D('healerSpecial'), manaCost: D('manaCost'), basicKinds: D('basicKinds'), reviveUses: D('reviveUses'), teamChoices: D('teamChoices'), talents: D('talents'), bosses: D('bosses'), bossLocations: D('bossLocations'), arenaShapes: D('arenaShapes'), difficulties: D('difficulties'), difficultyLabels: D('difficultyLabels'), bossSignatures: D('bossSignatures'), elementStyles: D('elementStyles'), rageClasses: D('rageClasses'), sets: D('sets'), gearGen: D('gearGen'), setFull: D('setFull'), dungeon: D('dungeon') };
    dataSrc = 'const DATA = ' + JSON.stringify(DATA) + ';\n' + fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8') + '\n';
  }
  const mods = (opts.modules || []).map((m) => fs.readFileSync(path.join(__dirname, m.includes('/') ? '..' : '.', m), 'utf8')).join('\n');
  const core = mods + '\n' + fs.readFileSync(path.join(__dirname, core0), 'utf8');
  const stub = new Proxy(function () {}, { get: (t, k) => k === Symbol.toPrimitive ? () => 0 : stub, apply: () => stub, construct: () => stub });
  const ls = { getItem: () => null, setItem() {}, removeItem() {} };
  const ctx = {
    console, setTimeout, clearTimeout, setInterval: () => 0, clearInterval() {}, queueMicrotask, WeakSet,
    performance: { now: () => Date.now() }, localStorage: ls,
    document: { createElement: () => stub, addEventListener() {}, documentElement: stub, body: stub, getElementById: () => null, querySelector: () => null, querySelectorAll: () => [] },
    navigator: { userAgent: 'node', maxTouchPoints: 0 }, location: { origin: 'x', pathname: '/' },
    devicePixelRatio: 1, innerWidth: 1000, innerHeight: 600, addEventListener() {}, removeEventListener() {},
    matchMedia: () => ({ matches: false, addEventListener() {}, addListener() {} }), requestAnimationFrame() {},
    AbortController: class {}, Element: class {}, HTMLElement: class {}, IntersectionObserver: class {}, PointerEvent: class {}, SVGElement: class {},
  };
  ctx.window = ctx; ctx.globalThis = ctx; vm.createContext(ctx);
  if (opts.seed != null) vm.runInContext('(function(){let s=' + (opts.seed >>> 0) + ';Math.random=function(){s=(s+0x6D2B79F5)|0;let t=Math.imul(s^(s>>>15),1|s);t=(t+Math.imul(t^(t>>>7),61|t))^t;return((t^(t>>>14))>>>0)/4294967296}})()', ctx);
  vm.runInContext(dataSrc + deps + '\n' + core + '\nglobalThis.__x={createEngine:q6,createBoss:ug,CLASSES:Kc};', ctx, { filename: 'engine.generated' });
  return Object.assign(ctx.__x, { run: (code) => vm.runInContext(code, ctx) });   // run(): valuta codice nel contesto del vecchio motore (per esportare i dati)
};
