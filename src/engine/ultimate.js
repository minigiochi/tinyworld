// Ultimate manuale (riscritto a mano da forceUlt/press dello script_11 del gioco v198).
// L'ultimate di un eroe è la sua ULTIMA abilità; si lancia a mano, con ricarica di 8 s per eroe
// (l'originale usa Date.now(): qui si usa il tempo di simulazione, così funziona anche a velocità 2×/4×).

const ULT_COOLDOWN = 8;
/** Mana consumato in più per tipo di abilità (tabella CG dell'originale). */
const ULT_MANA_COST = { strike: 2, taunt_strike: 3, big_strike: 10, shot: 2, big_shot: 10, aoe: 15, chain: 16, dot: 14, heal_single: 8, heal_aoe: 18, regen: 12, shield: 16, buff_atk: 22, wall: 18, threat: 6, revive: 30, revive_companion: 15, summon_boost: 25 };
const ULT_DAMAGING = ['strike', 'big_strike', 'taunt_strike', 'shot', 'big_shot', 'aoe', 'chain', 'dot'];

/** 0..1: quanto è carica l'ultimate dell'eroe (1 = pronta). */
function ultimateProgress(eng, hero) {
  const at = eng._ultAt && eng._ultAt[hero.id];
  return at === undefined ? 1 : Math.min(1, (eng.time - at) / ULT_COOLDOWN);
}

/** Lancia l'ultimate. Restituisce '' se riuscita, altrimenti il motivo (testo come nell'originale). */
function ultimateCast(eng, hero) {
  const abilities = hero.abilities || [], k = abilities.length - 1, ab = abilities[k];
  if (!eng || eng.over || !hero.alive) return 'Non disponibile';
  if (ultimateProgress(eng, hero) < 1) return 'In ricarica';
  if (k < 0 || !ab || !hero.cd) return 'Non disponibile';
  const kind = ab.kind, ev = [], from = { x: hero.pos.x, z: hero.pos.z }, to = { x: eng.boss.pos.x, z: eng.boss.pos.z };
  let target = null;
  if (!(hero.mana > 0)) return 'Mana esaurito';
  if (kind === 'revive') { target = eng.lowestDead(); if (!target) return 'Nessun eroe caduto'; }
  else if (kind === 'heal_single' || kind === 'regen' || kind === 'shield') { target = eng.lowestHurt(); if (!target) return 'Nessun ferito'; }
  else if (kind === 'heal_aoe') { if (!eng.anyHurt()) return 'Nessun ferito'; }
  else if (kind === 'revive_companion') { if (!eng.heroCompanions.some((c) => c.ownerId === hero.id && !c.alive)) return 'Nessun compagno caduto'; }
  const hit = ULT_DAMAGING.indexOf(kind) >= 0;
  if (hit || target) {
    const px = target ? target.pos.x : to.x, pz = target ? target.pos.z : to.z;
    if (eng.lineBlocked(from.x, from.z, px, pz) && !(hero.arch === 'healer' && Math.random() < 0.95)) return 'Visuale interrotta';
  }
  if (kind === 'revive' && eng.reviveUses <= 0) eng.reviveUses = 1;
  hero.cd[k] = 0;
  const ok = eng.execAbility(hero, ab, k, from, to, ev, 1 / (hero.atkSpeedMul || 1));
  if (!ok) { hero.cd[k] = 0; return kind === 'summon_boost' ? 'Limite evocazioni' : 'Non utilizzabile'; }
  hero.mana = Math.max(0, hero.mana - (ULT_MANA_COST[kind] || 0)); hero.cd[k] = 0;
  if (hit) eng.splashCompanions(to, 3, hero.attack + (hero.atkBuff || 0), ev);
  eng._pendingEvents = (eng._pendingEvents || []).concat(ev);
  (eng._ultAt = eng._ultAt || {})[hero.id] = eng.time;
  return '';
}

/** "Provoca": il boss punta l'eroe per 4 s (modalità alternativa del pulsante, come nell'originale). */
function ultimateTaunt(eng, hero) {
  if (!eng || eng.over || !hero.alive) return false;
  eng.boss.forcedTarget = hero.id; eng.boss.forcedTimer = 4; return true;
}
