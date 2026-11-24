// Funzioni di servizio dell'arena (geometria, bersagli, cure di gruppo).
// Scritte a mano con nomi leggibili; rimpiazzano i metodi equivalenti del motore generato.
// Usano le funzioni globali del vecchio codice: H6 (limite arena poligonale) e DM (intersezione segmenti).

/** Tiene un punto dentro l'arena (cerchio o poligono). */
function arenaClamp(eng, x, z) {
  if (eng.arenaVerts) return H6(x, z, eng.arenaVerts, eng.arenaRadius);
  const dist = Math.hypot(x, z);
  return dist > eng.arenaRadius
    ? { x: (x / dist) * eng.arenaRadius, z: (z / dist) * eng.arenaRadius }
    : { x, z };
}

/** Estremi del segmento di un muro (centro ± metà lunghezza lungo l'angolo). */
function wallEnds(w) {
  const dx = Math.cos(w.angle) * w.halfLen, dz = Math.sin(w.angle) * w.halfLen;
  return [w.x - dx, w.z - dz, w.x + dx, w.z + dz];
}

/** Primo muro vivo che taglia il segmento (x1,z1)-(x2,z2), oppure null. */
function arenaBlockingWall(eng, x1, z1, x2, z2) {
  for (const w of eng.walls) {
    if (!w.alive) continue;
    const [ax, az, bx, bz] = wallEnds(w);
    if (DM(x1, z1, x2, z2, ax, az, bx, bz)) return w;
  }
  return null;
}

/** Spinge un cerchio (x,z,raggio) fuori dai muri. */
function arenaCollideWalls(eng, x, z, radius) {
  for (const w of eng.walls) {
    if (!w.alive) continue;
    const [ax, az, bx, bz] = wallEnds(w);
    const sx = bx - ax, sz = bz - az, len2 = sx * sx + sz * sz || 1;
    const t = Math.max(0, Math.min(1, ((x - ax) * sx + (z - az) * sz) / len2));
    const px = ax + t * sx, pz = az + t * sz;           // punto del muro più vicino
    const dist = Math.hypot(x - px, z - pz);
    const minDist = radius + (w.thickness || 0.5) * 0.5;
    if (dist < minDist && dist > 0.001) {
      const push = minDist - dist;
      x += ((x - px) / dist) * push;
      z += ((z - pz) / dist) * push;
    }
  }
  return { x, z };
}

function killMarker(unit, time, events) {
  unit.hp = 0; unit.alive = false; unit._deadAt = time;
  events.push({ t: 'death', from: { x: unit.pos.x, z: unit.pos.z }, c: '#9ca3af' });
}

/** Danno ad area ai compagni del boss (40% del danno, minimo 1). */
function arenaSplashCompanions(eng, center, radius, dmg, events) {
  for (const c of eng.companions) {
    if (!c.alive) continue;
    if (Math.hypot(c.pos.x - center.x, c.pos.z - center.z) <= radius) {
      c.hp -= Math.max(1, Math.round(dmg * 0.4));
      if (c.hp <= 0) killMarker(c, eng.time, events);
    }
  }
}

/** Danno ad area ai compagni degli eroi (danno pieno, minimo 1). */
function arenaSplashHeroCompanions(eng, center, radius, dmg, events) {
  for (const c of eng.heroCompanions) {
    if (!c.alive) continue;
    if (Math.hypot(c.pos.x - center.x, c.pos.z - center.z) <= radius) {
      c.hp -= Math.max(1, Math.round(dmg));
      if (c.hp <= 0) killMarker(c, eng.time, events);
    }
  }
}

/** Eroe ferito con la minor percentuale di vita (i tank contano come più feriti: ×0,7). */
function arenaLowestHurt(eng) {
  let best = null, bestRatio = 2;
  for (const h of eng.heroes) {
    if (!h.alive) continue;
    const ratio = (h.hp / h.maxHp) * (h.isTank ? 0.7 : 1);
    if (ratio < bestRatio && h.hp < h.maxHp) { bestRatio = ratio; best = h; }
  }
  return best;
}

function arenaLowestDead(eng) {
  for (const h of eng.heroes) if (!h.alive) return h;
  return null;
}

function arenaAnyHurt(eng) {
  return eng.heroes.some((h) => h.alive && h.hp < h.maxHp);
}

function arenaHealAll(eng, amount) {
  for (const h of eng.heroes) {
    if (h.alive && h.hp < h.maxHp) h.hp = Math.min(h.maxHp, h.hp + amount);
  }
}
