// hero3d — disegna gli eroi con i modelli ORIGINALI (WOW_build: razza × classe × sesso) usando Mini3D.
// Richiede: threeshim.js, wowdata.js, wowbuild.js, mini3d.js.
(function () {
  const RK = Object.keys(WOW_RACES);
  function hash(s) { return WOW_hash(String(s)); }
  /** aspetto deterministico per eroe (come WOW_ensure ma senza Math.random, così il look non cambia a ogni partita) */
  function appearance(h) {
    const L = h.look || {}, k = hash((h.appId || h.id) + '|' + (h.classKey || '')), race = L.race || h.race || RK[k % RK.length], R = WOW_RACES[race];
    const sex = L.sex || h.sex || ((k >>> 5) % 2 ? 'female' : 'male'), pk = (a, n) => a[(k >>> n) % a.length];
    const G = { race, sex, skinColor: pk(R.skin, 7), hairColor: pk(R.hair, 11), hairStyle: (k >>> 3) % 8 };
    if (R.eye != null) G.eyeColor = R.eye; G.beardColor = G.hairColor;
    if (R.beard && sex !== 'female') G.beardStyle = 1; else if (sex !== 'female' && (k >>> 9) % 3 === 0) G.beardStyle = (k >>> 13) % 4;
    for (const f of ['skinColor', 'hairColor', 'hairStyle', 'beardStyle']) if (L[f] !== undefined && L[f] !== null) G[f] = L[f]; if (L.hairColor !== undefined && L.hairColor !== null && L.beardColor === undefined) G.beardColor = L.hairColor; if (sex === 'female' && L.beardStyle === undefined) delete G.beardStyle; if (L.hairStyle !== undefined && L.hairStyle !== null) G.hairPick = 1; if (L.beardStyle !== undefined && L.beardStyle !== null) G.beardPick = 1; /* scelte esplicite dal creatore: senza questi flag Troll (cresta) e Femmine (barba) ignoravano la scelta */
    return G;
  }
  // matrice locale = T * R(order) * S
  function rotM(x, y, z, order) {
    const cx = Math.cos(x), sx = Math.sin(x), cy = Math.cos(y), sy = Math.sin(y), cz = Math.cos(z), sz = Math.sin(z);
    const X = [1, 0, 0, 0, cx, -sx, 0, sx, cx], Y = [cy, 0, sy, 0, 1, 0, -sy, 0, cy], Z = [cz, -sz, 0, sz, cz, 0, 0, 0, 1];
    const mm = (a, b) => { const o = new Array(9); for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) o[i * 3 + j] = a[i * 3] * b[j] + a[i * 3 + 1] * b[3 + j] + a[i * 3 + 2] * b[6 + j]; return o; };
    return order === 'YXZ' ? mm(mm(Y, X), Z) : mm(mm(X, Y), Z);
  }
  function local(n) {
    const R = rotM(n.rotation.x, n.rotation.y, n.rotation.z, n.rotation.order), s = n.scale, p = n.position, o = new Float32Array(16);
    // colonne (WebGL): colonna j = R[:,j]*s[j]
    o[0] = R[0] * s.x; o[1] = R[3] * s.x; o[2] = R[6] * s.x; o[4] = R[1] * s.y; o[5] = R[4] * s.y; o[6] = R[7] * s.y; o[8] = R[2] * s.z; o[9] = R[5] * s.z; o[10] = R[8] * s.z;
    o[12] = p.x; o[13] = p.y; o[14] = p.z; o[15] = 1; return o;
  }
  window.Hero3D = function (r, CLASSES) {
    const M = Mini3D.m, T = ThreeShim, cache = {};
    function upload(node) {
      if (node.geometry) {
        let g = node.geometry; if (g.index) g = g.toNonIndexed();
        const P = g.attributes.position.array, N = g.attributes.normal ? g.attributes.normal.array : null, C = g.attributes.color ? g.attributes.color.array : null, n = P.length / 3, mc = node.material.color, v = new Float32Array(n * 9);
        for (let i = 0; i < n; i++) { v[i * 9] = P[i * 3]; v[i * 9 + 1] = P[i * 3 + 1]; v[i * 9 + 2] = P[i * 3 + 2]; if (N) { v[i * 9 + 3] = N[i * 3]; v[i * 9 + 4] = N[i * 3 + 1]; v[i * 9 + 5] = N[i * 3 + 2]; } else v[i * 9 + 4] = 1;
          v[i * 9 + 6] = C ? C[i * 3] : mc.r; v[i * 9 + 7] = C ? C[i * 3 + 1] : mc.g; v[i * 9 + 8] = C ? C[i * 3 + 2] : mc.b; }
        const mp = node.material.map, uvA = g.attributes.uv;
        if (mp && mp.image && uvA && (node.material.unlit || mp.dba)) {
          const v2 = new Float32Array(n * 11); for (let i = 0; i < n; i++) { for (let q = 0; q < 9; q++) v2[i * 11 + q] = v[i * 9 + q]; v2[i * 11 + 9] = uvA.array[i * 2]; v2[i * 11 + 10] = 1 - uvA.array[i * 2 + 1]; }
          r._tc = r._tc || new Map(); if (!r._tc.has(mp.image)) r._tc.set(mp.image, r.makeTex(mp.image));
          node.gname = r.makeMesh(v2, true); node.tex = r._tc.get(mp.image); node.ta = true;
        } else node.gname = r.makeMesh(v);
        node.unlit = !!node.material.unlit; node.geometry = null;
      }
      node.children.forEach(upload);
    }
    function get(h) {
      const A = { classKey: h.classKey, arch: h.arch, color: h.color || '#cccccc', helmet: h.helmet, appearance: appearance(h) };
      if (h.weapon) A.weapon = h.weapon;
      A.naked = !(h._items && h._items.length);
      if (h.hideHelm) A.hideHelm = true;
      let sig = ''; if (h._items && h._items.length) { const eq = {}; h._items.forEach((o) => { if (o.slot && !eq[o.slot]) eq[o.slot] = o; }); if (eq.mainhand) eq.weapon = eq.mainhand; if (eq.chest) eq.armor = eq.chest; A._eq = eq; sig = h._items.map((o) => o.id).join(','); }
      const key = [(window.DBA_TEX && DBA_TEX.ready ? 'T' : ''), A.classKey, A.arch, A.color, A.helmet || '', A.weapon || '', A.appearance.race, A.appearance.sex, A.appearance.skinColor, A.appearance.hairColor, A.appearance.hairStyle, A.appearance.beardStyle, (A.naked ? 'N' : '') + (A.hideHelm ? 'H' : ''), sig].join('|');
      if (cache[key]) return cache[key];
      let root; try { root = WOW_build(T, A, false); } catch (e) { console.warn('WOW_build', e); return (cache[key] = null); }
      upload(root); return (cache[key] = { root, ud: root.userData, A, base: null });
    }
    function walk(n, pm, opt, out) {
      const m = M.mul(pm, local(n));
      if (n.gname) r.draw(n.gname, m, n.unlit ? { unlit: true, alpha: opt.alpha, color: opt.tint || [1, 1, 1], tex: n.tex, ta: n.ta } : { alpha: opt.alpha, color: opt.tint || [1, 1, 1], emissive: opt.emissive, tex: n.tex });
      for (const c of n.children) walk(c, m, opt, out);
    }
    /** pose: step (fase camminata), moving, atk (0..1 attacco), melee, fall (0..1) */
    function pose(mod, P) {
      const u = mod.ud; if (!mod.base) { mod.base = {}; for (const k of ['leftArm', 'rightArm', 'elbL', 'elbR', 'hipL', 'hipR', 'knL', 'knR']) if (u[k]) mod.base[k] = [u[k].rotation.x, u[k].rotation.z]; }
      const b = mod.base, sw = Math.sin(P.step) * (P.moving ? .7 : 0), set = (k, dx, dz) => { if (u[k]) { u[k].rotation.x = b[k][0] + (dx || 0); u[k].rotation.z = b[k][1] + (dz || 0); } };
      set('hipL', sw); set('hipR', -sw); set('knL', Math.max(0, -sw) * .8); set('knR', Math.max(0, sw) * .8);
      const hold = !!u.hold, a = P.atk;
      if (!hold && !u.shd) set('leftArm', -sw * .6); if (!hold) set('rightArm', sw * .6 - a * (P.melee ? 1.9 : .7)); else set('rightArm', -a * (P.melee ? .9 : .3));
      if (u.elbR && !hold) u.elbR.rotation.x = b.elbR[0] - a * .5; if (u.pdL) u.pdL.rotation.x = 0;
    }
    return {
      appearance, get,
      /** x,z posizione; face rotazione Y; opts {step,moving,atk,melee,fall,flash,scale} */
      draw(h, x, y, z, face, o) {
        const mod = get(h); if (!mod) return false; pose(mod, o);
        const sc = (o.scale || 1) * .95; let m = M.trs(x, y, z, face, sc, sc, sc);
        if (o.fall > 0) { m = M.mul(m, M.trs(0, 0, 0, 0, 1, 1, 1, -o.fall * 1.45)); }
        const tint = o.flash > 0 ? [1, 1 - o.flash * .6, 1 - o.flash * .6] : null;
        walk(mod.root, m, { alpha: o.alpha, tint, emissive: o.flash > 0 ? o.flash * .6 : 0 });
        return true;
      },
      label(h) { const G = appearance(h), R = WOW_RACES[G.race], C = WOW_CLS[h.classKey]; return (C ? C.r : h.classKey) + ' - ' + R.n; },
    };
  };
})();
