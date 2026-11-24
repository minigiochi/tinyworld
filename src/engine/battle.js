// Creazione di una battaglia (riscritta a mano da `q6`): eroi, boss e oggetto "motore" con i suoi metodi.
// Dipende ancora dai vecchi moduli compressi: Kc (classi), Ep (abilità per classe/livello), DBA_FORM (formazione),
// DBA_RAGE (classi a rabbia), DBA_TALAPPLY (talenti), e2 (forma arena), B6 (rianimazioni per difficoltà), DBA_SYN (sinergie).

const ARENA_RADIUS = 16;

/** Dati di battaglia di un eroe: partono dalla scheda del giocatore e aggiungono ciò che serve in combattimento. */
function makeBattleHero(sheet, index, formation) {
  const cls = Kc[sheet.classKey], spot = formation(index, cls.arch), abilities = Ep(sheet.classKey, sheet.level);
  const rage = DBA_RAGE.has(sheet.classKey);
  return {
    ...sheet,
    mana: rage ? 40 : sheet.maxMana, maxMana: rage ? 100 : sheet.maxMana, manaRegen: rage ? 0.3 : (sheet.manaRegen || 2.5),
    useEn: rage, noMana: !!cls.noMana,
    pos: { x: spot.x, z: spot.z },
    baseRange: cls.range, speed: cls.speed, radius: cls.radius, color: cls.color, theme: cls.theme, weapon: cls.weapon, helmet: cls.helmet,
    form: cls.arch,
    isHealer: cls.arch === 'healer', isTank: cls.arch === 'tank',
    isDps: cls.arch === 'melee' || cls.arch === 'ranged',
    isMelee: cls.arch === 'melee' || cls.arch === 'tank',
    isRanged: cls.arch === 'ranged' || cls.arch === 'healer',
    abilities: abilities.map((a) => ({ ...a })),
    cd: abilities.map(() => 2 + Math.random() * 2),               // le abilità partono con 2-4 s di ricarico
    atkSpdBase: 1 + (sheet.atkSpd || 0) / 100, atkSpeedMul: 1 + (sheet.atkSpd || 0) / 100, atkSpeedTimer: 0,
    dmgReduce: 0, dmgReduceTimer: 0,
    threat: cls.arch === 'tank' ? 400 : 0,                        // il tank parte con minaccia alta
    alive: true, moving: false, _deadAt: 0,
  };
}

/** Il boss parte dal modello del gioco e aggiunge timer, bersaglio e tre attacchi speciali di base. */
function makeBattleBoss(template, arena) {
  return {
    ...template,
    pos: { x: 0, z: 0 }, radius: 1.6,
    attackCd: 1.5, aoeCd: 7, groupCd: 8, specialCd: 5, companionCd: 6, wallCd: 12, spikeCd: 6, trapCd: 10, coverageCd: 25,
    forcedTarget: null, forcedTimer: 0, dot: 0, dotTimer: 0, targetId: null, alive: true,
    specialAbilities: [
      ...(template.specialAbilities || []),
      { name: 'Devastazione', size: 0.5, damage: 0.5, radius: arena * 0.5, color: '#f87171' },
      { name: 'Detonazione', size: 0.25, damage: 0.85, radius: arena * 0.25, color: '#fb923c' },
      { name: 'Mira Devastante', size: 0.15, damage: 1.3, radius: arena * 0.15, color: '#ef4444' },
    ],
  };
}

/** Compagni iniziali: l'arciere ha un falco, il cacciatore un lupo. */
function makeStartingCompanions(heroes) {
  const companions = [], events = [];
  for (const h of heroes) {
    let kind = null, power = 0;
    if (h.classKey === 'arciere') { kind = 'hawk'; power = 0.2; }
    else if (h.classKey === 'cacciatore') { kind = 'wolf'; power = 0.2; }
    if (kind) {
      const c = makeHeroCompanion(h, kind, power);
      companions.push(c);
      events.push({ t: 'heroCompanion_spawn', kind: 'heroCompanion_spawn', id: c.id, ownerId: h.id, pos: { x: c.pos.x, z: c.pos.z }, color: h.color, type: kind });
    }
  }
  return { companions, events };
}

/** Crea il motore di una battaglia: `party` = schede eroe, `bossTemplate` = boss del gioco. */
function createBattle(party, bossTemplate) {
  const shape = bossTemplate.arenaShape || 'circle';
  const verts = e2(shape, ARENA_RADIUS);
  const formation = DBA_FORM(party.length);
  const heroes = party.map((sheet, i) => makeBattleHero(sheet, i, formation));
  DBA_TALAPPLY(heroes);
  const boss = makeBattleBoss(bossTemplate, ARENA_RADIUS);
  const start = makeStartingCompanions(heroes);

  return {
    // stato
    heroes, boss, companions: [], heroCompanions: start.companions,
    telegraphs: [], walls: [], spikes: [], traps: [], coverageArea: null,
    time: 0, over: false, outcome: null,
    arenaRadius: ARENA_RADIUS, arenaShape: shape, arenaVerts: verts,
    _pendingEvents: start.events,
    reviveUses: B6[bossTemplate.difficulty] || 1,
    controlledHeroId: null, pendingDecision: null, decisionTimer: 8, teamDecisionTimer: 18,

    // geometria e bersagli (arena.helpers.js)
    clampToArena(x, z) { return arenaClamp(this, x, z); },
    lineBlocked(x1, z1, x2, z2) { return arenaBlockingWall(this, x1, z1, x2, z2) !== null; },
    findBlockingWall(x1, z1, x2, z2) { return arenaBlockingWall(this, x1, z1, x2, z2); },
    collideWalls(x, z, r) { return arenaCollideWalls(this, x, z, r); },
    splashCompanions(center, r, dmg, ev) { arenaSplashCompanions(this, center, r, dmg, ev); },
    splashHeroCompanions(center, r, dmg, ev) { arenaSplashHeroCompanions(this, center, r, dmg, ev); },
    lowestHurt() { return arenaLowestHurt(this); },
    lowestDead() { return arenaLowestDead(this); },
    anyHurt() { return arenaAnyHurt(this); },
    healAll(n) { arenaHealAll(this, n); },

    // abilità degli eroi (abilities.js, abilityUse.js)
    execAbility(hero, ab, idx, from, to, ev, cdMul) {
      const b = this.boss;
      const before = { dot0: b.dotTimer > 0, tn0: !!(b.forcedTimer > 0 && b.forcedTarget), sh0: this.heroes.some((h) => h.alive && h.dmgReduceTimer > 0 && h.dmgReduce > 0), hp0: b.hp };
      const ok = this.execAbility0(hero, ab, idx, from, to, ev, cdMul);
      if (ok) { try { DBA_SYN(this, hero, ab, before, ev); } catch (e) { /* sinergie: errori ignorati come nell'originale */ } }
      return ok;
    },
    execAbility0(hero, ab, idx, from, to, ev, cdMul) { return runHeroAbility(this, hero, ab, idx, from, to, ev, cdMul); },
    useAbility(hero, inRange, ev) { useHeroAbility(this, hero, inRange, ev); },

    // boss e passo di simulazione (bossAI.js, step.js)
    bossAI(dt, ev) { runBossAI(this, dt, ev); },
    resolveDecision(choice) { runResolveDecision(this, choice); },
    step(dt) { return runStep(this, dt); },
  };
}
