// threeshim — sottoinsieme minimo di Three.js (geometrie, colori, gruppi) per eseguire il WOW_build ORIGINALE senza Three.js.
// Produce geometrie vere (posizioni/normali) così WOW_merge funziona identico; il disegno lo fa Mini3D (vedi hero3d.js).
// Mappa dei nomi usata dall'originale (WOWTT): Ci=Torus, Tt=Sfera, rn=Box, Gt=Cono, Fn=Cilindro, La=Icosaedro, Ad=Ottaedro,
// Jn=BufferGeometry, on=BufferAttribute, zn=Group, fe=Mesh, zt=MeshStandard, ln=MeshBasic, Rt=Color, Og=Texture.
(function () {
  const clamp = (x) => Math.max(0, Math.min(1, x));
  class Rt {
    constructor(h) { this.r = this.g = this.b = 1; if (h !== undefined) this.set(h); }
    set(h) { if (h && h.isColor) { this.r = h.r; this.g = h.g; this.b = h.b; } else if (typeof h === 'string') { const s = h.replace('#', ''); const v = parseInt(s.length === 3 ? s.replace(/./g, '$&$&') : s, 16); this.r = (v >> 16 & 255) / 255; this.g = (v >> 8 & 255) / 255; this.b = (v & 255) / 255; } else if (typeof h === 'number') { this.r = (h >> 16 & 255) / 255; this.g = (h >> 8 & 255) / 255; this.b = (h & 255) / 255; } return this; }
    get isColor() { return true; }
    setRGB(r, g, b) { this.r = r; this.g = g; this.b = b; return this; }
    setHex(h) { return this.set(h); }
    clone() { const c = new Rt(); c.r = this.r; c.g = this.g; c.b = this.b; return c; }
    multiplyScalar(f) { this.r = clamp(this.r * f); this.g = clamp(this.g * f); this.b = clamp(this.b * f); return this; }
    lerp(c, t) { this.r += (c.r - this.r) * t; this.g += (c.g - this.g) * t; this.b += (c.b - this.b) * t; return this; }
    setHSL(h, s, l) { const q = l < .5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q, f = (t) => { t = ((t % 1) + 1) % 1; return t < 1 / 6 ? p + (q - p) * 6 * t : t < .5 ? q : t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 : p; }; this.r = f(h + 1 / 3); this.g = f(h); this.b = f(h - 1 / 3); return this; }
  }
  class Attr {
    constructor(array, itemSize) { this.array = array; this.itemSize = itemSize; }
    get count() { return this.array.length / this.itemSize; }
    getX(i) { return this.array[i * this.itemSize]; } getY(i) { return this.array[i * this.itemSize + 1]; } getZ(i) { return this.array[i * this.itemSize + 2]; }
    setXYZ(i, x, y, z) { const a = this.array, k = i * this.itemSize; a[k] = x; a[k + 1] = y; a[k + 2] = z; }
  }
  class Geo {
    constructor() { this.attributes = {}; this.index = null; }
    setAttribute(n, a) { this.attributes[n] = a; return this; }
    computeVertexNormals() { }
    dispose() { }
    _map(fp, fn) { const p = this.attributes.position.array, n = this.attributes.normal && this.attributes.normal.array; for (let i = 0; i < p.length; i += 3) { const r = fp(p[i], p[i + 1], p[i + 2]); p[i] = r[0]; p[i + 1] = r[1]; p[i + 2] = r[2]; if (n) { const q = fn(n[i], n[i + 1], n[i + 2]); n[i] = q[0]; n[i + 1] = q[1]; n[i + 2] = q[2]; } } return this; }
    scale(x, y, z) { return this._map((a, b, c) => [a * x, b * y, c * z], (a, b, c) => { const v = [a / x, b / y, c / z], l = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / l, v[1] / l, v[2] / l]; }); }
    translate(x, y, z) { return this._map((a, b, c) => [a + x, b + y, c + z], (a, b, c) => [a, b, c]); }
    rotateX(t) { const c = Math.cos(t), s = Math.sin(t), f = (a, b, d) => [a, b * c - d * s, b * s + d * c]; return this._map(f, f); }
    rotateY(t) { const c = Math.cos(t), s = Math.sin(t), f = (a, b, d) => [a * c + d * s, b, -a * s + d * c]; return this._map(f, f); }
    rotateZ(t) { const c = Math.cos(t), s = Math.sin(t), f = (a, b, d) => [a * c - b * s, a * s + b * c, d]; return this._map(f, f); }
    toNonIndexed() {
      if (!this.index) return this; const g = new Geo(), ix = this.index;
      for (const k of ['position', 'normal', 'uv']) { const a = this.attributes[k]; if (!a) continue; const o = new Float32Array(ix.length * a.itemSize); for (let i = 0; i < ix.length; i++) for (let j = 0; j < a.itemSize; j++) o[i * a.itemSize + j] = a.array[ix[i] * a.itemSize + j]; g.attributes[k] = new Attr(o, a.itemSize); }
      return g;
    }
  }
  // costruisce una geometria da liste e raddrizza l'orientamento dei triangoli rispetto alle normali
  function build(P, N, I, U) {
    for (let t = 0; t < I.length; t += 3) {
      const a = I[t] * 3, b = I[t + 1] * 3, c = I[t + 2] * 3, ux = P[b] - P[a], uy = P[b + 1] - P[a + 1], uz = P[b + 2] - P[a + 2], vx = P[c] - P[a], vy = P[c + 1] - P[a + 1], vz = P[c + 2] - P[a + 2];
      const cx = uy * vz - uz * vy, cy = uz * vx - ux * vz, cz = ux * vy - uy * vx, d = cx * (N[a] + N[b] + N[c]) + cy * (N[a + 1] + N[b + 1] + N[c + 1]) + cz * (N[a + 2] + N[b + 2] + N[c + 2]);
      if (d < 0) { const q = I[t + 1]; I[t + 1] = I[t + 2]; I[t + 2] = q; }
    }
    const g = new Geo(); g.attributes.position = new Attr(new Float32Array(P), 3); g.attributes.normal = new Attr(new Float32Array(N), 3); g.attributes.uv = new Attr(new Float32Array(U || P.length / 3 * 2), 2); g.index = I; return g;
  }
  function flat(tris) { // tris: array di [p0,p1,p2] -> normali piatte
    const P = [], N = [], I = [];
    for (const t of tris) { const u = [t[1][0] - t[0][0], t[1][1] - t[0][1], t[1][2] - t[0][2]], v = [t[2][0] - t[0][0], t[2][1] - t[0][1], t[2][2] - t[0][2]]; let n = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]]; const l = Math.hypot(...n) || 1; n = n.map((x) => x / l);
      const cen = [(t[0][0] + t[1][0] + t[2][0]) / 3, (t[0][1] + t[1][1] + t[2][1]) / 3, (t[0][2] + t[1][2] + t[2][2]) / 3]; const s = n[0] * cen[0] + n[1] * cen[1] + n[2] * cen[2] < 0 ? -1 : 1;
      for (const p of t) { I.push(P.length / 3); P.push(p[0], p[1], p[2]); N.push(n[0] * s, n[1] * s, n[2] * s); } }
    return build(P, N, I);
  }
  function Sphere(r = 1, ws = 8, hs = 6, ps = 0, pl = Math.PI * 2, ts = 0, tl = Math.PI) {
    ws = Math.max(3, Math.floor(ws)); hs = Math.max(2, Math.floor(hs)); const P = [], N = [], I = [], U = [], grid = [], te = ts + tl;
    for (let y = 0; y <= hs; y++) { const row = [], v = y / hs; for (let x = 0; x <= ws; x++) { const u = x / ws, X = -r * Math.cos(ps + u * pl) * Math.sin(ts + v * tl), Y = r * Math.cos(ts + v * tl), Z = r * Math.sin(ps + u * pl) * Math.sin(ts + v * tl); P.push(X, Y, Z); U.push(u, 1 - v); const l = Math.hypot(X, Y, Z) || 1; N.push(X / l, Y / l, Z / l); row.push(P.length / 3 - 1); } grid.push(row); }
    for (let y = 0; y < hs; y++) for (let x = 0; x < ws; x++) { const a = grid[y][x + 1], b = grid[y][x], c = grid[y + 1][x], d = grid[y + 1][x + 1]; if (y !== 0 || ts > 0) I.push(a, b, d); if (y !== hs - 1 || te < Math.PI) I.push(b, c, d); }
    const g = build(P, N, I, U); g.parameters = { radius: r }; return g;
  }
  function Cyl(rt = 1, rb = 1, h = 1, rs = 8, hs = 1) {
    rs = Math.max(3, Math.floor(rs)); const P = [], N = [], I = [], U = [], grid = [], slope = (rb - rt) / h;
    for (let y = 0; y <= hs; y++) { const row = [], v = y / hs, rad = v * (rb - rt) + rt; for (let x = 0; x <= rs; x++) { const th = x / rs * Math.PI * 2, s = Math.sin(th), c = Math.cos(th); P.push(rad * s, -v * h + h / 2, rad * c); U.push(x / rs, 1 - v); const l = Math.hypot(1, slope); N.push(s / l, slope / l, c / l); row.push(P.length / 3 - 1); } grid.push(row); }
    for (let x = 0; x < rs; x++) for (let y = 0; y < hs; y++) { const a = grid[y][x], b = grid[y + 1][x], c = grid[y + 1][x + 1], d = grid[y][x + 1]; if (rt > 0 || y !== 0) I.push(a, b, d); if (rb > 0 || y !== hs - 1) I.push(b, c, d); }
    for (const top of [true, false]) { const rad = top ? rt : rb; if (rad <= 0) continue; const y = top ? h / 2 : -h / 2, ny = top ? 1 : -1, c0 = P.length / 3; P.push(0, y, 0); N.push(0, ny, 0); U.push(.5, .5);
      for (let x = 0; x <= rs; x++) { const th = x / rs * Math.PI * 2; P.push(rad * Math.sin(th), y, rad * Math.cos(th)); N.push(0, ny, 0); U.push(Math.sin(th) * .5 + .5, Math.cos(th) * .5 * ny + .5); } for (let x = 0; x < rs; x++) I.push(c0, c0 + x + 1, c0 + x + 2); }
    const g = build(P, N, I, U); g.parameters = { height: h }; return g;
  }
  function Box(w = 1, h = 1, d = 1) {
    const P = [], N = [], I = [], U = [], F = [[[0, 0, 1], [1, 0, 0], [0, 1, 0]], [[0, 0, -1], [-1, 0, 0], [0, 1, 0]], [[1, 0, 0], [0, 0, -1], [0, 1, 0]], [[-1, 0, 0], [0, 0, 1], [0, 1, 0]], [[0, 1, 0], [1, 0, 0], [0, 0, -1]], [[0, -1, 0], [1, 0, 0], [0, 0, 1]]];
    for (const [n, u, v] of F) { const b = P.length / 3; for (const [a, c] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) { P.push((n[0] + u[0] * a + v[0] * c) * .5 * w, (n[1] + u[1] * a + v[1] * c) * .5 * h, (n[2] + u[2] * a + v[2] * c) * .5 * d); N.push(n[0], n[1], n[2]); U.push((a + 1) / 2, (c + 1) / 2); } I.push(b, b + 1, b + 2, b, b + 2, b + 3); }
    const g = build(P, N, I, U); g.parameters = { height: h }; return g;
  }
  function Poly(V, Fc, r, detail) {
    const nrm = (p) => { const l = Math.hypot(...p); return p.map((x) => x / l * r); }; let tris = Fc.map((f) => f.map((i) => nrm(V[i])));
    for (let k = 0; k < detail; k++) { const o = []; for (const [a, b, c] of tris) { const ab = nrm(a.map((x, i) => x + b[i])), bc = nrm(b.map((x, i) => x + c[i])), ca = nrm(c.map((x, i) => x + a[i])); o.push([a, ab, ca], [b, bc, ab], [c, ca, bc], [ab, bc, ca]); } tris = o; }
    const g = flat(tris); g.parameters = { radius: r }; return g;
  }
  const PHI = (1 + Math.sqrt(5)) / 2;
  const IV = [[-1, PHI, 0], [1, PHI, 0], [-1, -PHI, 0], [1, -PHI, 0], [0, -1, PHI], [0, 1, PHI], [0, -1, -PHI], [0, 1, -PHI], [PHI, 0, -1], [PHI, 0, 1], [-PHI, 0, -1], [-PHI, 0, 1]];
  const IF = [[0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11], [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8], [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9], [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]];
  const OV = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]], OF = [[0, 2, 4], [0, 4, 3], [0, 3, 5], [0, 5, 2], [1, 2, 5], [1, 5, 3], [1, 3, 4], [1, 4, 2]];
  function Torus(R = 1, tube = .4, rs = 8, ts = 6, arc = Math.PI * 2) {
    const P = [], N = [], I = [], U = []; for (let j = 0; j <= rs; j++) for (let i = 0; i <= ts; i++) { const u = i / ts * arc, v = j / rs * Math.PI * 2, x = (R + tube * Math.cos(v)) * Math.cos(u), y = (R + tube * Math.cos(v)) * Math.sin(u), z = tube * Math.sin(v); P.push(x, y, z); U.push(i / ts, j / rs); N.push(Math.cos(v) * Math.cos(u), Math.cos(v) * Math.sin(u), Math.sin(v)); }
    for (let j = 1; j <= rs; j++) for (let i = 1; i <= ts; i++) { const a = (ts + 1) * j + i - 1, b = (ts + 1) * (j - 1) + i - 1, c = (ts + 1) * (j - 1) + i, d = (ts + 1) * j + i; I.push(a, b, d, b, c, d); }
    return build(P, N, I, U);
  }
  function Capsule(r = 1, len = 1, cs = 4, rs = 8) {
    cs = Math.max(1, Math.floor(cs)); rs = Math.max(3, Math.floor(rs)); const rows = [];
    for (let i = 0; i <= cs; i++) { const t = i / cs * Math.PI / 2; rows.push([len / 2 + r * Math.cos(t), r * Math.sin(t), Math.cos(t), Math.sin(t)]); }
    for (let i = 0; i <= cs; i++) { const t = Math.PI / 2 - i / cs * Math.PI / 2; rows.push([-len / 2 - r * Math.cos(t), r * Math.sin(t), -Math.cos(t), Math.sin(t)]); }
    const P = [], N = [], I = [], U = [], n = rows.length;
    rows.forEach((q, y) => { for (let x = 0; x <= rs; x++) { const th = x / rs * Math.PI * 2, s = Math.sin(th), c = Math.cos(th); P.push(q[1] * s, q[0], q[1] * c); N.push(q[3] * s, q[2], q[3] * c); U.push(x / rs, 1 - y / (n - 1)); } });
    for (let y = 0; y < n - 1; y++) for (let x = 0; x < rs; x++) { const a = y * (rs + 1) + x, b = (y + 1) * (rs + 1) + x, c = b + 1, d = a + 1; I.push(a, b, d, b, c, d); }
    return build(P, N, I, U);
  }
  const wrap = (fn) => function (...a) { return fn(...a); };
  class V3 { constructor() { this.x = 0; this.y = 0; this.z = 0; } set(x, y, z) { this.x = x; this.y = y; this.z = z; return this; } setScalar(s) { return this.set(s, s, s); } copy(v) { return this.set(v.x, v.y, v.z); } }
  class Obj {
    constructor() { this.position = new V3(); this.rotation = new V3(); this.rotation.order = 'XYZ'; this.scale = new V3().set(1, 1, 1); this.children = []; this.userData = {}; }
    add(...cs) { for (const c of cs) { if (c.parent) c.parent.children = c.parent.children.filter((q) => q !== c); this.children.push(c); c.parent = this; } return this; }
  }
  class Group extends Obj { }
  class Mesh extends Obj { constructor(g, m) { super(); this.geometry = g; this.material = m; } }
  class Tex { constructor(img) { this.image = img; this.repeat = new V3(); this.repeat.x = this.repeat.y = 1; this.anisotropy = 1; this.set = 0; } }
  class Mat { constructor(p) { this.params = p || {}; const c = this.params.color; this.color = c && c.isColor ? c.clone() : new Rt(c === undefined ? 0xffffff : c); this.map = this.params.map || null; this.emissiveMap = this.params.emissiveMap || null; this.emissiveIntensity = this.params.emissiveIntensity || 0; this.emissive = this.params.emissive ? (this.params.emissive.isColor ? this.params.emissive : new Rt(this.params.emissive)) : null; this.double = this.params.side === 2; this.vertexColors = !!this.params.vertexColors; } }
  class MatStd extends Mat { }
  class MatBasic extends Mat { constructor(p) { super(p); this.unlit = true; } }
  window.ThreeShim = {
    Ci: wrap(Torus) && function (...a) { return Torus(...a); }, Tt: function (...a) { return Sphere(...a); }, rn: function (...a) { return Box(...a); },
    Gt: function (r, h, s) { return Cyl(0, r, h, s, 1); }, Fn: function (...a) { return Cyl(...a); },
    La: function (r, d) { return Poly(IV, IF, r, d || 0); }, Ad: function (r, d) { return Poly(OV, OF, r, d || 0); },
    Jn: Geo, on: Attr, zn: Group, fe: Mesh, zt: MatStd, ln: MatBasic, Rt, Og: function (img) { return new Tex(img); }, Vc: function (...a) { return Capsule(...a); },
  };
})();
