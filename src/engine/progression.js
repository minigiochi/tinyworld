// Esperienza e livelli (riscritto a mano da Tp / Y6 / K6 / Z6 / OM del gioco v198).

const XP_AFTER_BATTLE = { survivor: 80, fallen: 30 };

/** XP necessaria per passare dal livello `level` al successivo. */
function xpForLevel(level) { return Math.round(100 + (level - 1) * 85 + (level - 1) * (level - 1) * 5); }

/** Sale di un livello: aggiunge le statistiche in base al ruolo e le restituisce. DPS +14 vita +6 att; curatori +12/+5; tank +34 vita +3 att +5 dif. */
function levelUpGains(hero) {
  const g = { maxHp: 0, attack: 0, defense: 0 };
  if (hero.isDps) { g.maxHp = 14; g.attack = 6; }
  else if (hero.isHealer) { g.maxHp = 12; g.attack = 5; }
  else if (hero.isTank) { g.maxHp = 34; g.attack = 3; g.defense = 5; }
  hero.maxHp += g.maxHp; hero.attack += g.attack; hero.defense += g.defense;
  return g;
}

/** Fine battaglia: ogni eroe riceve XP (sopravvissuto 80, caduto 30) e sale di livello quanto serve. Restituisce {party, summary}. */
function applyBattleXp(party) {
  const out = party.map((h) => ({ ...h })), summary = [];
  for (const h of out) {
    h.xp = (h.xp || 0) + (h.alive ? XP_AFTER_BATTLE.survivor : XP_AFTER_BATTLE.fallen);
    const before = h.level, gains = { maxHp: 0, attack: 0, defense: 0 };
    while (h.xp >= xpForLevel(h.level)) {
      h.xp -= xpForLevel(h.level); h.level += 1;
      const g = levelUpGains(h);
      gains.maxHp += g.maxHp; gains.attack += g.attack; gains.defense += g.defense;
    }
    if (h.level > before) summary.push({ name: h.name, icon: h.icon, className: h.className, level: h.level, classKey: h.classKey, gains });
  }
  return { party: out, summary };
}

/** Toglie i bonus temporanei dell'equipaggiamento (istantanea `_buffSnap`) prima di salvare l'eroe. */
function stripGearSnapshot(h) {
  const s = h._buffSnap;
  return s ? { ...h, attack: s.attack, maxHp: s.maxHp, defense: s.defense, hp: Math.min(h.hp, s.maxHp), _buffSnap: undefined, buff: null } : h;
}
