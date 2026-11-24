// Forme dell'arena e geometria (riscritte a mano da e2, j6, H6, DM).
// L'arena è un cerchio di raggio R oppure un poligono (quadrato, pentagono, esagono, ottagono) o una forma casuale irregolare.

/** Vertici del poligono dell'arena, o null se è un cerchio. */
function e2(shape, radius) {
  if (shape === 'circle') return null;
  if (shape === 'random') {                               // 5-8 vertici a distanza irregolare (72%-100% del raggio)
    const n = 5 + Math.floor(Math.random() * 4), verts = [];
    for (let i = 0; i < n; i++) {
      const ang = (i / n) * Math.PI * 2, r = radius * (0.72 + Math.random() * 0.28);
      verts.push({ x: Math.cos(ang) * r, z: Math.sin(ang) * r });
    }
    return verts;
  }
  const sides = { square: 4, pentagon: 5, hexagon: 6, octagon: 8 }[shape];
  if (!sides) return null;
  const verts = [];
  for (let i = 0; i < sides; i++) {
    const ang = (i / sides) * Math.PI * 2 - Math.PI / 2;  // un vertice in alto
    verts.push({ x: Math.cos(ang) * radius, z: Math.sin(ang) * radius });
  }
  return verts;
}

/** Il punto (x,z) è dentro il poligono? (regola pari-dispari) */
function j6(x, z, verts) {
  let inside = false;
  for (let i = 0, j = verts.length - 1; i < verts.length; j = i++) {
    const xi = verts[i].x, zi = verts[i].z, xj = verts[j].x, zj = verts[j].z;
    if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}

/** Riporta un punto dentro il poligono: se è fuori va sul lato più vicino, poi rientra dell'1,5%. */
function H6(x, z, verts) {
  if (j6(x, z, verts)) return { x, z };
  let nearest = { x, z }, best = Infinity;
  for (let i = 0, j = verts.length - 1; i < verts.length; j = i++) {
    const a = verts[j], b = verts[i], sx = b.x - a.x, sz = b.z - a.z, len2 = sx * sx + sz * sz || 1;
    const t = Math.max(0, Math.min(1, ((x - a.x) * sx + (z - a.z) * sz) / len2));
    const px = a.x + t * sx, pz = a.z + t * sz, d = Math.hypot(x - px, z - pz);
    if (d < best) { best = d; nearest = { x: px, z: pz }; }
  }
  return { x: nearest.x * 0.985, z: nearest.z * 0.985 };
}

/** I segmenti (x1,z1)-(x2,z2) e (x3,z3)-(x4,z4) si incrociano? */
function DM(x1, z1, x2, z2, x3, z3, x4, z4) {
  const den = (x2 - x1) * (z4 - z3) - (z2 - z1) * (x4 - x3);
  if (den === 0) return false;                             // paralleli
  const u = ((x3 - x1) * (z4 - z3) - (z3 - z1) * (x4 - x3)) / den;
  const v = ((x3 - x1) * (z2 - z1) - (z3 - z1) * (x2 - x1)) / den;
  return u >= 0 && u <= 1 && v >= 0 && v <= 1;
}
