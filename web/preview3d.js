// Anteprima 3D girevole di un eroe (piattaforma + modello originale), per "Visualizza 3D" e "Personalizza".
// Uso: const p = Preview3D(canvas, CLASSES); p.set(hero); ... p.destroy()
(function () {
  window.Preview3D = function (canvas, CLASSES) {
    const r = window.Mini3D && Mini3D(canvas); if (!r) return null;
    const m = Mini3D.m, H3 = Hero3D(r, CLASSES); let hero = null, t = 0, raf = 0, last = performance.now(), dead = false;
    const hex = (c) => { c = String(c || '#cccccc').replace('#', ''); if (c.length === 3) c = c.replace(/./g, (x) => x + x); const n = parseInt(c, 16); return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255]; };
    function frame(now) {
      if (dead) return; const dt = Math.min(.1, (now - last) / 1000); last = now; t += dt;
      if (hero) {
        const asp = canvas.clientWidth / Math.max(1, canvas.clientHeight); r.camera({ yaw: 0, pitch: .12, dist: 6 * Math.max(1, .95 / asp), target: [0, 1.45, 0] });
        r.begin(t, 6); const col = hex(hero.color);
        r.draw('cyl', m.trs(0, .12, 0, 0, 2.5, .24, 2.5), { color: col.map((x) => x * .9 + .1) });
        r.draw('cyl', m.trs(0, -.06, 0, 0, 2.7, .14, 2.7), { color: [.12, .12, .14] });
        r.draw('ringThin', m.trs(0, .27, 0, 0, 1.9, 1, 1.9), { color: [1, .6, .1], emissive: .9, double: true });
        H3.draw(hero, 0, .24, 0, t * .7, { step: 0, moving: false, atk: 0, melee: false, fall: 0, flash: 0, scale: 1.25 });
        r.end();
      }
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    return { set(h) { hero = h; }, destroy() { dead = true; cancelAnimationFrame(raf); } };
  };
})();
