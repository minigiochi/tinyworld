// Scelta dell'abilità da usare per un eroe, ad ogni passo della battaglia.
// (riscritta a mano da `useAbility` del motore originale)
//
// Regole, in ordine:
//  1. Se l'eroe sta caricando un incantesimo, aspetta la fine; poi lo lancia (_fz = abilità scelta, _fin = carica finita).
//  2. Scorre le abilità nell'ordine della scheda eroe e usa la prima disponibile:
//     - ricarico finito, mana sufficiente;
//     - attacchi base (insieme `hf`) solo se il boss è a tiro;
//     - cure/scudi/rigenerazione solo se c'è un ferito, rianimazione solo se c'è un caduto;
//     - mai se un muro blocca la linea di tiro.
//  3. Se l'abilità ha un tempo di carica (_ct), l'eroe inizia a caricare e si ferma qui.
//  4. Dopo l'uso: toglie il mana (gli attacchi base ne restituiscono un po'), danneggia i compagni del boss vicini
//     e il tank guadagna minaccia.
// Con il controllo manuale (window.__dbaCtl) il giocatore sceglie: l'automatico usa solo l'attacco base e le abilità da tank.

const SUPPORT_KINDS = new Set(['heal_single', 'shield', 'regen']);

function abilityManaCost(hero, ab) {
  if (hero.noMana) return 0;
  return ab.cost != null ? ab.cost : (cg[ab.kind] || 0);
}

/** Punto verso cui l'abilità è rivolta (boss, ferito o caduto); null se non c'è un bersaglio utile. */
function abilityAimPoint(eng, hero, ab, bossPoint, idx) {
  if (SUPPORT_KINDS.has(ab.kind)) {
    const t = arenaLowestHurt(eng);
    if (!t) { hero.cd[idx] = 0.4; return null; }
    return { x: t.pos.x, z: t.pos.z };
  }
  if (ab.kind === 'revive') {
    const t = arenaLowestDead(eng);
    if (!t) { hero.cd[idx] = 0.8; return null; }
    return { x: t.pos.x, z: t.pos.z };
  }
  return bossPoint;
}

function useHeroAbility(eng, hero, inRange, ev) {
  const ctl = !!(window.__dbaCtl && window.__dbaCtl.on && hero.id === window.__dbaCtl.id);

  // 1. incantesimo in carica
  if (hero.casting) {
    if (eng.time >= hero.casting.end) { hero._fz = hero.casting.idx; hero._fin = 1; hero.casting = null; }
    else return;
  }
  if (ctl && hero._mq !== undefined && eng.time - hero._mqT > 4) hero._mq = undefined;   // coda manuale scaduta

  const cdMul = 1 / hero.atkSpeedMul;
  const boss = eng.boss;
  const from = { x: hero.pos.x, z: hero.pos.z };
  const bossPoint = { x: boss.pos.x, z: boss.pos.z };

  for (let i = 0; i < hero.abilities.length; i++) {
    if (hero._fz !== undefined && i !== hero._fz) continue;     // sta finendo una carica: solo quella
    if (hero.cd[i] > 0) continue;
    const ab = hero.abilities[i];
    if (!ab || (hf.has(ab.kind) && !inRange)) continue;
    if (ctl && hero._fz === undefined && hero._mq !== i) {
      const autoAllowed = (i === 0 && (hf.has(ab.kind) || hero.arch === 'healer')) ||
        (hero.arch === 'tank' && (ab.kind === 'taunt_strike' || ab.kind === 'threat'));
      if (!autoAllowed) continue;
    }
    const cost = abilityManaCost(hero, ab);
    if (hero.mana < cost) continue;

    // bersaglio e linea di tiro
    if (hf.has(ab.kind) || SUPPORT_KINDS.has(ab.kind) || ab.kind === 'revive') {
      const aim = abilityAimPoint(eng, hero, ab, bossPoint, i);
      if (!aim) continue;
      if (eng.lineBlocked(from.x, from.z, aim.x, aim.z)) continue;
    }

    // 3. carica
    if (ab._ct > 0 && !hero._fin) {
      const castTime = ab._ct * (ctl && ab.kind !== 'revive' ? 0.6 : 1);
      hero.casting = { idx: i, end: eng.time + castTime, total: castTime, name: ab.name };
      if (hero._mq === i) hero._mq = undefined;
      return;
    }

    // 4. uso
    if (eng.execAbility(hero, ab, i, from, bossPoint, ev, cdMul)) {
      const basic = hf.has(ab.kind);
      const manaBack = basic ? (hero.useEn ? 2 + cost * 0.4 : cost * 0.15) : 0;
      hero.mana = Math.min(hero.maxMana, Math.max(0, hero.mana - cost) + manaBack);
      if (basic) eng.splashCompanions(bossPoint, 3, hero.attack + (hero.atkBuff || 0), ev);
      hero._fz = undefined; hero._fin = 0;
      if (hero.arch === 'tank') hero.threat += Math.round(hero.attack * 1.5);
      if (hero._mq === i) hero._mq = undefined;
      return;
    }
  }
  hero._fz = undefined; hero._fin = 0;
}
