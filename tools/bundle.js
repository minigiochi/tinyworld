// Crea web/engine.bundle.js: il motore (dati + moduli + core) come script unico per il browser.
const fs = require('fs'), path = require('path');
const E = path.join(__dirname, '..', 'src', 'engine'), W = path.join(__dirname, '..', 'src', 'world'), D = path.join(__dirname, '..', 'src', 'data');
const names = ['classes','unlockByClass','unlockByArch','healerSpecial','manaCost','basicKinds','reviveUses','teamChoices','talents','bosses','bossLocations','arenaShapes','difficulties','difficultyLabels','bossSignatures','elementStyles','rageClasses','sets','gearGen','setFull','dungeon'];
const DATA = {}; for (const n of names) DATA[n] = JSON.parse(fs.readFileSync(path.join(D, n + '.json'), 'utf8'));
const mods = ['arena.helpers.js','abilities.js','abilityUse.js','bossAI.js','step.js','battle.js','talents.js','formation.js','arenaShapes.js','bosses.js','effects.js','bossSignature.js','dualAbility.js','gear.js','gearGen.js','enchant.js','progression.js','ultimate.js'];
let out = '// GENERATO da tools/bundle.js — non modificare\nconst DATA = ' + JSON.stringify(DATA) + ';\n' + fs.readFileSync(path.join(E, 'data.js'), 'utf8') + '\n';
out += mods.map((m) => fs.readFileSync(path.join(E, m), 'utf8')).join('\n') + '\n' + fs.readFileSync(path.join(W, 'dungeon.js'), 'utf8') + '\n' + fs.readFileSync(path.join(E, 'engine.core.v7.js'), 'utf8');
out += '\nwindow.DBAEngine = { createEngine: q6, createBoss: ug, CLASSES: Kc, gearApply, GEAR_SETS, gearGenerate, gearEquip, enchantApplyBattle, enchantApply, enchantCost, ENCH, applyBattleXp, abilitiesAt: Ep, BOSSES: DATA.bosses, MANACOST: cg, xpForLevel, ultimateCast, ultimateTaunt, ultimateProgress, ULT_COOLDOWN, dungeon: { generate: () => dungeonGenerate(DATA.dungeon), hurt: dungeonHurt, rest: dungeonRest, trap: dungeonTrap, riddleAnswer: dungeonRiddleAnswer, pickRiddle: () => dungeonPickRiddle(DATA.dungeon), template: dungeonTemplate, enemy: dungeonEnemy, alive: dungeonAlive, data: DATA.dungeon } };\n';
fs.writeFileSync(path.join(__dirname, '..', 'web', 'engine.bundle.js'), out);
console.log('ok', out.length);
