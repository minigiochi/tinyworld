// Abilità degli eroi in battaglia (riscritte a mano dal motore originale).
// Ogni abilità: infligge danno / cura / applica un effetto, aggiunge eventi per la grafica
// e imposta il ricarico. Ritorna true se l'abilità è stata usata, false se non aveva un bersaglio utile.

const pointOf = (u) => ({ x: u.pos.x, z: u.pos.z });
const DEAD_MARK = '#9ca3af';

/** Compagno di un eroe (falco, lupo, demone). boost 2→"demon2", ≥4→"demon4". */
function makeHeroCompanion(owner, kind, dmgMult, boost) {
  const power = boost || 1;
  const type = kind === 'demon' && boost >= 4 ? 'demon4' : kind === 'demon' && boost >= 2 ? 'demon2' : kind;
  return {
    id: 'hc_' + Math.random().toString(36).slice(2),
    ownerId: owner.id, ownerKey: owner.classKey,
    pos: { x: owner.pos.x + (Math.random() - 0.5) * 2, z: owner.pos.z + (Math.random() - 0.5) * 2 },
    hp: Math.round(owner.maxHp * 0.4 * power), maxHp: Math.round(owner.maxHp * 0.4 * power),
    dmgMult, type, boost: boost || 1, color: owner.color,
    radius: type === 'demon4' ? 0.7 : type === 'demon2' ? 0.55 : 0.4,
    speed: 5.5,
    range: type === 'demon4' ? 4 : type === 'demon2' ? 1.8 : kind === 'hawk' ? 2.5 : 1.6,
    alive: true,
    attackCd: 0.5 + Math.random() * 0.5,
    fireBreathCd: type === 'demon4' ? 3 : 0,
    _deadAt: 0,
  };
}

/**
 * Esegue l'abilità `ab` (indice `idx`) dell'eroe `hero`.
 * from/to = posizioni di eroe e bersaglio, ev = lista eventi, cdMul = moltiplicatore ricarico.
 */
function runHeroAbility(eng, hero, ab, idx, from, to, ev, cdMul) {
  const boss = eng.boss;
  const atk = hero.attack + (hero.atkBuff || 0);
  const color = hero.color;
  const startCooldown = () => { hero.cd[idx] = ab.cd * cdMul; };
  const noTarget = (cd) => { hero.cd[idx] = cd; return false; };
  /** danno al boss = attacco × moltiplicatore − metà difesa (minimo 1) */
  const dmg = (mult) => Math.max(1, Math.round(atk * mult - boss.defense / 2));
  const hit = (kind, val, threatMul) => {
    boss.hp -= val; hero.threat += val * threatMul;
    ev.push({ t: 'dmg', who: hero.id, from, to, kind, label: ab.name, val, c: color });
  };
  const buffEvent = (kind, at, label) => ev.push({ t: 'buff', who: hero.id, from: at, to: at, kind, label: label || ab.name, c: color });

  switch (ab.kind) {
    case 'dual': return window.DBA_DUAL(eng, hero, ab, idx, from, to, ev, cdMul);
    case 'strike': hit('slash', dmg(1.3), 1); break;
    case 'big_strike': hit('slash_big', dmg(3), 2); break;
    case 'taunt_strike': {
      hit('taunt_strike', Math.max(1, Math.round(atk * 1.2 - boss.defense / 2)), 3);
      boss.forcedTarget = hero.id; boss.forcedTimer = 4; break;
    }
    case 'shot': hit('projectile', dmg(1.4), 1); break;
    case 'big_shot':
      hit('projectile', dmg(3.2), 2);
      ev.push({ t: 'vfx', who: hero.id, from, to, kind: 'explosion', c: color }); break;
    case 'aoe': hit(ab.vfx, dmg(1.8), 1); break;
    case 'chain': {
      let total = 0;
      for (let i = 0; i < 3; i++) { const p = dmg(1); boss.hp -= p; total += p; }
      hero.threat += total;
      ev.push({ t: 'dmg', who: hero.id, from, to, kind: ab.vfx, label: ab.name, val: Math.round(total), c: color }); break;
    }
    case 'dot':
      boss.dot = atk * 0.6; boss.dotTimer = 5;
      ev.push({ t: 'vfx', who: hero.id, from, to, kind: ab.vfx, label: ab.name, c: color }); break;
    case 'heal_single': {
      const t = arenaLowestHurt(eng); if (!t) return noTarget(0.4);
      const before = t.hp; t.hp = Math.min(t.maxHp, t.hp + Math.round(atk * 3.2 + 10));
      ev.push({ t: 'heal', who: hero.id, from, to: pointOf(t), kind: 'heal_beam', label: ab.name, val: Math.round(t.hp - before), c: color, target: t.id }); break;
    }
    case 'heal_aoe':
      if (!arenaAnyHurt(eng)) return noTarget(0.5);
      arenaHealAll(eng, Math.round(atk * 1.6 + 6));
      ev.push({ t: 'heal', who: hero.id, from, to: from, kind: 'heal_ring', label: ab.name, c: color }); break;
    case 'regen': {
      const t = arenaLowestHurt(eng); if (!t) return noTarget(0.4);
      t.regen = atk * 0.9 + 4; t.regenTimer = 6;
      ev.push({ t: 'heal', who: hero.id, from, to: pointOf(t), kind: 'regen', label: ab.name, c: color, target: t.id }); break;
    }
    case 'shield': {
      const t = arenaLowestHurt(eng); if (!t) return noTarget(0.5);
      t.dmgReduce = 0.5; t.dmgReduceTimer = 5;
      ev.push({ t: 'buff', who: hero.id, from: pointOf(t), to: pointOf(t), kind: 'bubble', label: ab.name, c: color, target: t.id }); break;
    }
    case 'buff_atk':
      for (const h of eng.heroes) if (h.alive) { h.atkBuff = (h.atkBuff || 0) + 6; h.atkBuffTimer = 6; }
      buffEvent('aura', from); break;
    case 'wall': hero.dmgReduce = 0.65; hero.dmgReduceTimer = 5; buffEvent('aura', from); break;
    case 'threat':
      boss.forcedTarget = hero.id; boss.forcedTimer = 6; hero.threat += 9999; buffEvent('ring', from); break;
    case 'revive': {
      const t = arenaLowestDead(eng); if (!t) return noTarget(0.8);
      t.alive = true; t.hp = Math.round(t.maxHp * 0.5); t._deadAt = 0; t.moving = false;
      ev.push({ t: 'heal', who: hero.id, from, to: pointOf(t), kind: 'heal_beam', label: ab.name, val: t.hp, c: color, target: t.id });
      buffEvent('bubble', pointOf(t), 'Resurrezione'); break;
    }
    case 'revive_companion': {
      const c = eng.heroCompanions.find((k) => k.ownerId === hero.id && !k.alive); if (!c) return noTarget(0.8);
      c.alive = true; c.hp = c.maxHp; c._deadAt = 0;
      ev.push({ t: 'heroCompanion_spawn', kind: 'heroCompanion_spawn', id: c.id, ownerId: hero.id, pos: pointOf(c), color: hero.color, type: c.type });
      buffEvent('aura', from); break;
    }
    case 'summon_boost': {
      const demons = eng.heroCompanions.filter((k) => k.ownerId === hero.id && k.alive && (k.type === 'demon' || k.type === 'demon2' || k.type === 'demon4'));
      if (demons.length >= 4) return noTarget(1);
      const boost = ab.boost || 2, d = makeHeroCompanion(hero, 'demon', 0.23 * boost, boost);
      d.pos = { x: hero.pos.x + (Math.random() - 0.5) * 2, z: hero.pos.z + (Math.random() - 0.5) * 2 };
      eng.heroCompanions.push(d);
      ev.push({ t: 'heroCompanion_spawn', kind: 'heroCompanion_spawn', id: d.id, ownerId: hero.id, pos: pointOf(d), color: hero.color, type: d.type, boost: d.boost });
      buffEvent('aura', from); break;
    }
    default: return true;           // tipo sconosciuto: non fa nulla (come nell'originale)
  }
  startCooldown();
  return true;
}
