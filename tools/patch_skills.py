#!/usr/bin/env python3
# Applica il nuovo albero abilità al motore (engine.bundle.js) dei progetti passati come argomenti (cartelle web/).
import json, re, sys
SKT = open('/home/claude/dba-next-world/src/data/skillTree.json').read()
SKT = json.dumps(json.loads(SKT), ensure_ascii=False, separators=(',', ':'))

def sub(s, a, b, name, cnt=1):
    assert s.count(a) == cnt, (name, s.count(a))
    return s.replace(a, b)

NEW_EP = '''const SKT = ''' + SKT + ''';   // abilità uniche per classe: 10 imparate ogni 3 livelli (3..30) + ultimate (liv. 10)
/**
 * Abilità di un eroe: 3 di base (livello 1) + una nuova ogni 3 livelli fino al 30 (10 in tutto, uniche per classe);
 * i curatori ricevono Resurrezione al livello 8 (in più); l'ultimate si sblocca al livello 10 (in più, sempre ultima).
 * Tempo di carica: nessuno fino al livello 9, poi 0,4 s (fino al 18) e 0,7 s.
 */
function Ep(classKey, level) {
  const cls = Kc[classKey];
  if (!cls) return [];
  const list = cls.abilities.map((a) => ({ ...a, _req: 1, _ct: 0 }));
  const sk = SKT[classKey];
  if (sk) sk.learn.forEach((a, i) => { const req = 3 * (i + 1); if (level >= req) list.push({ ...a, _req: req, _ct: req <= 9 ? 0 : req <= 18 ? 0.4 : 0.7 }); });
  if (cls.arch === 'healer' && level >= 8) list.push({ ...k6, _req: 8, _ct: 3 });
  if (sk && level >= 10) list.push({ ...sk.ult, _req: 10, _ct: 0.6 });
  return list;
}
'''

DMG_OLD = '''  if (ab.dmg) {
    const d = Math.max(1, Math.round(atk * ab.dmg * 1.7 - boss.defense / 2));
    boss.hp -= d; hero.threat += d;'''
DMG_NEW = '''  let dealt = 0;
  if (ab.dmg) {
    let mul = ab.dmg * 1.7;
    if (ab.exec && boss.hp < boss.maxHp * 0.35) mul *= 1 + ab.exec;     // "esecuzione": bonus contro un boss quasi sconfitto
    const d = Math.max(1, Math.round(atk * mul - boss.defense / 2));
    dealt = d; boss.hp -= d; hero.threat += d;'''

FX_OLD = "    else if (fx === 'adaptAll') alive.forEach(adapt);\n"
FX_NEW = FX_OLD + '''    else if (fx === 'dot') { boss.dot = Math.max(boss.dot || 0, atk * (ab.dm || 0.5)); boss.dotTimer = Math.max(boss.dotTimer || 0, ab.dt || 6); ev.push({ t: 'vfx', who: hero.id, from, to, kind: 'curse', c: color }); }
    else if (fx === 'lifesteal') { const g = Math.round(dealt * (ab.ls || 0.4)); if (g > 0) { hero.hp = Math.min(hero.maxHp, hero.hp + g); ev.push({ t: 'heal', who: hero.id, from: pos(hero), to: pos(hero), kind: 'heal_ring', val: g, c: '#ef4444', target: hero.id }); } }
    else if (fx === 'weaken') { boss.weakT = 6; boss.weakV = ab.wk || 0.25; ev.push({ t: 'vfx', who: hero.id, from: to, to, kind: 'ring', c: color }); }
    else if (fx === 'atkAll') alive.forEach((h) => { if (!(h.atkBuffTimer > 0)) h.atkBuff = (h.atkBuff || 0) + Math.round(h.attack * (ab.ap || 0.25)); h.atkBuffTimer = 6; aura(h, '#fbbf24'); });
    else if (fx === 'regenAll') { alive.forEach((h) => { h.regen = Math.max(h.regen || 0, atk * (ab.rg || 0.5) + 3); h.regenTimer = 6; }); ev.push({ t: 'heal', who: hero.id, from, to: from, kind: 'heal_ring', label: label(), c: color }); }
    else if (fx === 'manaAll') { alive.forEach((h) => { if (!h.noMana) h.mana = Math.min(h.maxMana, h.mana + (ab.mp || 15)); }); aura(hero, '#60a5fa'); }
    else if (fx === 'manaSelf') { if (!hero.noMana) hero.mana = Math.min(hero.maxMana, hero.mana + (ab.mp || 20)); aura(hero, '#60a5fa'); }
    else if (fx === 'selfHeal') { const g = Math.round(hero.maxHp * (ab.sh || 0.2)); hero.hp = Math.min(hero.maxHp, hero.hp + g); ev.push({ t: 'heal', who: hero.id, from: pos(hero), to: pos(hero), kind: 'heal_ring', val: g, c: color, target: hero.id }); }
    else if (fx === 'haste') { hero.atkSpeedMul = 1.5 * (hero.atkSpdBase || 1); hero.atkSpeedTimer = 6; aura(hero, '#fbbf24'); }
    else if (fx === 'hasteAll') alive.forEach((h) => { h.atkSpeedMul = 1.35 * (h.atkSpdBase || 1); h.atkSpeedTimer = 6; aura(h, '#fbbf24'); });
'''

def patch(path):
    s = open(path).read()
    m = re.search(r'/\*\*\n \* Abilità di un eroe:.*?\n \*/\nfunction Ep\(classKey, level\) \{.*?\n\}\n', s, re.S)
    assert m, 'Ep non trovata'
    s = s[:m.start()] + NEW_EP + s[m.end():]
    s = sub(s, DMG_OLD, DMG_NEW, 'dmg')
    s = sub(s, FX_OLD, FX_NEW, 'fx')
    # indebolimento del boss
    s = sub(s, "  const raw = Math.max(1, Math.round(boss.attack * mult - hero.defense / 2));\n  return Math.round(raw * (1 - (hero.dmgReduce || 0)));",
            "  const raw = Math.max(1, Math.round(boss.attack * mult - hero.defense / 2));\n  return Math.round(raw * (1 - (hero.dmgReduce || 0)) * (boss.weakT > 0 ? 1 - (boss.weakV || 0.25) : 1));", 'weak1')
    s = sub(s, "  const raw = Math.max(1, Math.round(eng.boss.attack * mult - hero.defense / 2));\n  return Math.round(raw * (1 - (hero.dmgReduce || 0)));",
            "  const raw = Math.max(1, Math.round(eng.boss.attack * mult - hero.defense / 2));\n  return Math.round(raw * (1 - (hero.dmgReduce || 0)) * (eng.boss.weakT > 0 ? 1 - (eng.boss.weakV || 0.25) : 1));", 'weak2')
    s = sub(s, "  if (boss.dotTimer > 0) {\n    boss.dotTimer -= dt;", "  if (boss.weakT > 0) boss.weakT -= dt;\n  if (boss.dotTimer > 0) {\n    boss.dotTimer -= dt;", 'weakT')
    # ultimate = abilità con flag ult
    s = sub(s, "function ultimateProgress(eng, hero) {\n", "function ultimateIndex(hero) { const a = (hero && hero.abilities) || []; for (let i = a.length - 1; i >= 0; i--) if (a[i] && a[i].ult) return i; return -1; }\nfunction ultimateProgress(eng, hero) {\n  if (ultimateIndex(hero) < 0) return 0;\n", 'ultprog')
    s = sub(s, "const abilities = hero.abilities || [], k = abilities.length - 1, ab = abilities[k];\n  if (!eng || eng.over || !hero.alive) return 'Non disponibile';",
            "const abilities = hero.abilities || [], k = ultimateIndex(hero), ab = abilities[k];\n  if (!eng || eng.over || !hero.alive) return 'Non disponibile';\n  if (k < 0) return 'Si sblocca al livello 10';", 'ultcast')
    s = sub(s, "ultimateCast, ultimateTaunt, ultimateProgress,", "ultimateCast, ultimateTaunt, ultimateProgress, ultimateIndex,", 'export')
    # abilità di sola cura: non usarle se nessuno è ferito
    s = sub(s, "    const ab = hero.abilities[i];\n    if (!ab || (hf.has(ab.kind) && !inRange)) continue;", "    const ab = hero.abilities[i];\n    if (ab && ab.hurt && !eng.anyHurt()) continue;\n    if (!ab || (hf.has(ab.kind) && !inRange)) continue;", 'hurt')
    s = sub(s, "        const cost = cg[ab.kind] || 0;\n        if (hero.cd[i] <= 0 && hero.mana >= cost) choices.push", "        const cost = ab.cost != null ? ab.cost : (cg[ab.kind] || 0);\n        if (hero.cd[i] <= 0 && hero.mana >= cost) choices.push", 'dec')
    open(path, 'w').write(s)

for p in sys.argv[1:]:
    patch(p); print('ok', p)
