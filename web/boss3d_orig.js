// boss3d_orig — disegna i boss con i modelli ORIGINALI (DBA_BM) e le texture a atlante del gioco.
// Richiede: threeshim.js, bossAtlas.js (DBA_BCELL), bossbuild.js, mini3d.js.
(function () {
  window.BossO3D = function (r) {
    const M = Mini3D.m, cache = {}, texs = new Map();
    const tex = (t) => { if (!t) return null; const im = t.image; if (!im) return null; if (!texs.has(im)) texs.set(im, r.makeTex(im)); return texs.get(im); };
    function upload(n) {
      if (n.geometry) {
        let g = n.geometry; if (g.index) g = g.toNonIndexed(); const P = g.attributes.position.array, N = g.attributes.normal.array, U = g.attributes.uv.array, c = n.material.color, cnt = P.length / 3, v = new Float32Array(cnt * 11);
        for (let i = 0; i < cnt; i++) { v.set([P[i * 3], P[i * 3 + 1], P[i * 3 + 2], N[i * 3], N[i * 3 + 1], N[i * 3 + 2], c.r, c.g, c.b, U[i * 2], U[i * 2 + 1]], i * 11); }
        const mt = n.material, e = mt.emissive, ei = mt.emissiveIntensity || 0;
        n.gname = r.makeMesh(v, true);
        n.opt = { unlit: !!mt.unlit, double: !!mt.double, tex: tex(mt.map), rep: mt.map ? [mt.map.repeat.x, mt.map.repeat.y] : null };
        if (mt.emissiveMap) { n.opt.etex = tex(mt.emissiveMap); n.opt.ec = e ? [e.r * ei, e.g * ei, e.b * ei] : [ei, ei, ei]; if (!n.opt.rep) n.opt.rep = [1, 1]; if (mt.map && mt.emissiveMap.repeat) n.opt.rep = [mt.emissiveMap.repeat.x, mt.emissiveMap.repeat.y]; }
        else if (e && ei) n.opt.emissive = Math.min(1, ei * (e.r + e.g + e.b) / 3);
        n.geometry = null;
      }
      n.children.forEach(upload);
    }
    function local(n) {
      const x = n.rotation.x, y = n.rotation.y, z = n.rotation.z, cx = Math.cos(x), sx = Math.sin(x), cy = Math.cos(y), sy = Math.sin(y), cz = Math.cos(z), sz = Math.sin(z), s = n.scale, p = n.position;
      // Rx*Ry*Rz
      const R = [cy * cz, -cy * sz, sy, cx * sz + sx * sy * cz, cx * cz - sx * sy * sz, -sx * cy, sx * sz - cx * sy * cz, sx * cz + cx * sy * sz, cx * cy];
      const o = new Float32Array(16); o[0] = R[0] * s.x; o[1] = R[3] * s.x; o[2] = R[6] * s.x; o[4] = R[1] * s.y; o[5] = R[4] * s.y; o[6] = R[7] * s.y; o[8] = R[2] * s.z; o[9] = R[5] * s.z; o[10] = R[8] * s.z; o[12] = p.x; o[13] = p.y; o[14] = p.z; o[15] = 1; return o;
    }
    function walk(n, pm, o) {
      const m = M.mul(pm, local(n));
      if (n.gname) { const q = Object.assign({}, n.opt); if (o.alpha !== undefined) q.alpha = o.alpha; if (o.tint) q.color = o.tint; if (o.emissive) q.emissive = (q.emissive || 0) + o.emissive; r.draw(n.gname, m, q); }
      for (const c of n.children) walk(c, m, o);
    }
    return {
      ready() { return !!(window.BossOrig && window.DBA_BCELL && Object.keys(window.DBA_BCELL).length >= 24); },
      get(key) { if (cache[key] === undefined) { try { const b = BossOrig.build(key); upload(b.root); b.base = {}; for (const k of ['wingL', 'wingR', 'jaw', 'clawL', 'clawR']) if (b[k] && b[k].rotation) b.base[k] = [b[k].rotation.x, b[k].rotation.y, b[k].rotation.z]; b.tailSeg = (Array.isArray(b.tail) ? b.tail : []).filter((q) => q && q.rotation).map((q) => [q, q.rotation.y]); cache[key] = b; } catch (e) { console.warn('boss', key, e); cache[key] = null; } } return cache[key]; },
      /** x,z, rotazione Y, scala, tempo; o: {hit, cast} */
      draw(key, x, z, face, scale, T, o) {
        const b = this.get(key); if (!b) return false; const B = b.base, cast = o.cast || 0;
        // animazione come ANE dell'originale: velocità → camminata (gambe, artigli, bob), ali su rotation.x, coda a onde
        const pv = b._p, dtt = pv ? Math.max(1e-3, T - pv.t) : 0, sp = pv && dtt < .5 ? Math.hypot(x - pv.x, z - pv.z) / dtt : 0; b._p = { x, z, t: T };
        b._sp = (b._sp || 0) * .85 + sp * .15; const mv = Math.min(1, b._sp / 3.5), ph = T * (5 + Math.min(8, b._sp * .5)), sn = Math.sin(ph);
        if (b.legs && b.legs.length > 1 && b.legs[0].rotation && !b.legs[0].sp) { b.legs[0].rotation.x = sn * .75 * mv; b.legs[1].rotation.x = -sn * .75 * mv; }
        if (b.legs && b.legs[0] && b.legs[0].sp) b.legs.forEach((q, i) => { const p2 = ph * .7 + (i % 4) * 1.6 + (i < 4 ? 0 : Math.PI), a = Math.sin(p2); q.rotation.y = a * .28 * mv; q.kn.rotation.z = -q.sd * (Math.max(0, Math.cos(p2)) * .55 * mv + Math.sin(T * 1.4 + i) * .05); });
        if (b.tent) b.tent.forEach((ch, i) => ch.forEach((q, k) => { q.rotation.x = Math.sin(T * (1.6 + mv * 1.4) - k * .7 + i * .8) * (.12 + mv * .05); q.rotation.z = Math.cos(T * 1.3 - k * .6 + i) * .11; }));
        let aw = 0, asc = 1, aj = 0, al = 0; const an = o.anim; if (an) { const G = an.g, sg = Math.sin(G * Math.PI);
          if (an.type === 'slash') { aw = -sg * 1.9; al = sg * .8; } else if (an.type === 'breath') { asc = 1 + sg * .22; aj = sg * .6; } else if (an.type === 'wind') { const e = Math.min(1, G * 1.3); aw = -e * 1.5; aj = e * .55; asc = 1 + e * .1; al = -e * .35; } }
        b._cr = (b._cr || 0) + (aw - (b._cr || 0)) * Math.min(1, 14 * Math.max(.016, dtt || .016));
        if (b.clawL && b.clawR) { b.clawL.rotation.x = -sn * .6 * mv + b._cr * .6; b.clawR.rotation.x = sn * .6 * mv + b._cr; }
        if (b.clawL && b.clawL.el) { b.clawL.el.rotation.x = -(.2 + .45 * mv * Math.max(0, sn) + .45 * Math.abs(b._cr)); b.clawR.el.rotation.x = -(.2 + .45 * mv * Math.max(0, -sn) + .45 * Math.abs(b._cr)); }
        if (b.legs && b.legs.length > 1 && b.legs[0].kn && !b.legs[0].sp) { b.legs[0].kn.rotation.x = Math.max(0, -sn) * .8 * mv; b.legs[1].kn.rotation.x = Math.max(0, sn) * .8 * mv; }
        b.tailSeg.forEach(([q], i) => { q.rotation.y = Math.sin(T * (2.6 + mv * 2.4) - i * .55) * (.09 + i * .012) * (1 + mv * 1.1); q.rotation.x = Math.sin(T * 2 - i * .4) * .035; });
        if (b.wingL && b.wingR) { const f = window.__noflap ? 0 : Math.sin(T * (3 + mv * 4)) * (.22 + mv * .22); b.wingL.rotation.x = f; b.wingR.rotation.x = -f; }
        if (b.jaw && B.jaw) b.jaw.rotation.x = B.jaw[0] + cast * .5 + aj + Math.max(0, Math.sin(T * 1.1)) * .06;
        b.root.position.y = Math.abs(sn) * .1 * mv + .02; b.root.rotation.z = sn * .045 * mv;
        const de = o.dead || 0, ee2 = de * de * (3 - 2 * de);
        walk(b.root, M.trs(x + Math.sin(face) * al * 1.5 + ee2 * .8, -ee2 * .6, z + Math.cos(face) * al * 1.5, face, scale * asc, scale * asc, scale * asc, 0, ee2 * 1.25), { emissive: o.hit ? o.hit * .5 : 0, tint: o.hit ? [1, 1 - o.hit * .4, 1 - o.hit * .4] : null });
        return true;
      },
    };
  };
})();
