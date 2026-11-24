// Corpi dei boss in 3D: un "piano corporeo" per tipo di mostro, scelto dalla chiave del boss (src/data/bosses.json).
// Ogni piano disegna con P.part(forma, x, y, z, sx, sy, sz, colore, opzioni, rotX, rotZ, rotY) in coordinate locali del boss (z = avanti).
// P: { T tempo, c colore, dark, belly, acc, hit(0-1), cast(0-1), glow(0-1), hurt(0-1 PV), look(obj stile) }.
(function () {
  const sin = Math.sin, PI = Math.PI;
  /** stile per boss: piano corporeo + dettagli (trasparenza, bagliore, colore secondario) */
  const KIND = {
    orco: 'orc', troll: 'troll', golem: 'golem', ciclope: 'cyclops', minotauro: 'minotaur', demone: 'demon', cavaliere: 'knight', lich: 'lich', gargoyle: 'gargoyle',
    ragno: 'spider', idra: 'hydra', kraken: 'kraken',
  };
  const LOOK = {
    spettrale: { alpha: .55, emissive: .5 }, nulla: { alpha: .8, emissive: .1, dark: 1 }, ossa: { bone: 1 }, cristallo: { facets: 1, emissive: .35 },
    magma: { emissive: .45, lava: 1 }, fenice: { emissive: .6 }, luce: { emissive: .7 }, celeste: { emissive: .6 }, tuono: { emissive: .35 }, tempesta: { emissive: .3 }, inferno: { emissive: .25 }, antico: {}, caos: { emissive: .3 },
  };
  const P = {};

  P.dragon = (X) => X.dragon();   // il drago è disegnato da scene3d.js (come prima)

  function legs(X, n, spread, h, w, col) { for (let i = 0; i < n; i++) { const s = i % 2 ? 1 : -1, z = -spread / 2 + (i >> 1) * spread / Math.max(1, (n / 2 - 1)); X.part('cyl', s * .75, h / 2, z, w, h, w, col, {}, 0, 0); X.part('box', s * .75, .08, z + .15, w * 1.3, .16, w * 1.8, col); } }
  function arms(X, y, reach, w, col, swing) { for (const s of [-1, 1]) { const a = swing * s; X.part('cyl', s * 1.0, y, 0 + a * .4, w, reach, w, col, {}, a * .5, s * .15); X.part('sphere', s * 1.05, y - reach * .5, a * .45 + .1, w * 1.5, w * 1.5, w * 1.5, col); } }

  P.orc = (X) => { const { c, dark, T, cast } = X, sw = sin(T * 3) * .25;
    legs(X, 2, 0, 1.1, .5, dark); X.part('sphere', 0, 1.9, 0, 1.9, 1.7, 1.2, c); X.part('sphere', 0, 2.95, .15, .8, .75, .8, c);
    X.part('cone', -.25, 2.7, .6, .12, .45, .12, [.95, .95, .85], {}, -2.6); X.part('cone', .25, 2.7, .6, .12, .45, .12, [.95, .95, .85], {}, -2.6);   // zanne
    for (const s of [-1, 1]) X.part('sphere', s * .22, 3.05, .55, .13, .1, .1, [1, .3, .2], { emissive: 1.5 });
    arms(X, 2.2, 1.3, .38, c, sw + cast * 1.2); X.part('cyl', 1.2, 1.7, .5 + cast * .8, .14, 2.6, .14, [.45, .3, .2], {}, 1.0); X.part('box', 1.2, 2.9, 1.0 + cast * .9, .35, .9, 1.3, [.7, .72, .78], {}, .5);   // ascia
    X.part('box', 0, 1.35, 0, 1.95, .35, 1.25, [.4, .25, .15]); };                                                                                  // cintura

  P.troll = (X) => { const { c, dark, T, cast } = X, sw = sin(T * 2.5) * .3;
    legs(X, 2, 0, 1.0, .65, dark); X.part('sphere', 0, 1.9, -.1, 2.3, 2.0, 1.6, c); X.part('sphere', 0, 1.9, .55, 1.5, 1.4, 1.0, X.belly); X.part('sphere', 0, 3.1, .3, .95, .85, .95, c);
    X.part('sphere', 0, 2.95, .8, .5, .35, .3, dark); for (const s of [-1, 1]) { X.part('sphere', s * .3, 3.25, .75, .17, .17, .17, [1, 1, .4], { emissive: 1.5 }); X.part('cone', s * .55, 3.4, .1, .18, .5, .18, dark, {}, 0, -s * .6); }
    arms(X, 2.3, 1.6, .5, c, sw + cast * 1.0); for (let i = 0; i < 5; i++) X.part('sphere', (i - 2) * .38, 2.95 - Math.abs(i - 2) * .1, -.5, .28, .28, .28, X.acc); };   // muschio sulla schiena

  P.golem = (X) => { const { c, dark, T, cast, look } = X, k = X.acc;
    for (const s of [-1, 1]) { X.part('box', s * .8, .7, 0, .9, 1.4, .9, dark); X.part('box', s * .8, .1, .15, 1.1, .2, 1.3, dark); }
    X.part('box', 0, 2.2, 0, 2.5, 1.9, 1.6, c); X.part('box', 0, 2.55, .85, 1.6, .9, .15, dark); X.part('box', 0, 3.45, .1, 1.1, .9, 1.0, c);
    for (const s of [-1, 1]) { X.part('sphere', s * .3, 3.55, .65, .22, .1, .1, k, { emissive: 1.8 }); X.part('box', s * 1.65, 2.9, 0, .9, .8, .9, dark); X.part('box', s * 1.75, 1.6 + sin(T * 2 + s) * .1 - cast * .6, .3 + cast * .8, .8, 1.9, .8, c); X.part('box', s * 1.75, .6 - cast * .5, .4 + cast * 1.0, 1.1, 1.0, 1.1, c); }
    X.part('sphere', 0, 2.2, .86, .45, .45, .15, k, { emissive: 1.2 + sin(T * 3) * .4 }); for (let i = 0; i < 5; i++) X.part('box', (i - 2) * .55, 3.35, -.5, .35, .5, .35, dark); };   // nucleo + rocce

  P.cyclops = (X) => { const { c, dark, T, cast } = X, sw = sin(T * 2.4) * .25;
    legs(X, 2, 0, 1.2, .6, dark); X.part('sphere', 0, 2.1, 0, 2.2, 1.9, 1.4, c); X.part('sphere', 0, 3.25, .2, 1.3, 1.25, 1.2, c);
    X.part('sphere', 0, 3.3, .78, .55, .55, .25, [.98, .98, .95]); X.part('sphere', 0, 3.3, .93, .28, .28, .12, [.3, .6, 1], { emissive: 1.5 + cast * 2 });   // grande occhio
    X.part('box', 0, 3.75, .75, 1.0, .12, .2, dark); X.part('sphere', 0, 3.02, .7, .5, .25, .2, dark);
    arms(X, 2.5, 1.5, .42, c, sw + cast * 1.1); X.part('cyl', 1.3, 2.0, .6 + cast, .16, 3.0, .16, [.5, .4, .3], {}, 1.1);
    for (let i = 0; i < 4; i++) { const a = T * 4 + i * 1.5; X.part('sphere', 0, 5 + sin(a) * .2, 0, .3, .3, .3, [.6, .8, 1], { emissive: 1.4, alpha: .8 * cast }); } };

  P.minotaur = (X) => { const { c, dark, T, cast } = X, sw = sin(T * 3) * .25;
    legs(X, 2, 0, 1.2, .55, dark); X.part('sphere', 0, 2.1, 0, 2.1, 1.8, 1.2, c); X.part('sphere', 0, 3.1, .35, .95, .9, 1.1, c); X.part('sphere', 0, 2.9, .95, .55, .45, .7, dark);
    for (const s of [-1, 1]) { X.part('cone', s * .6, 3.55, .2, .2, .9, .2, [.93, .9, .8], {}, 0, -s * 1.1); X.part('sphere', s * .35, 3.3, .8, .13, .13, .1, [1, .3, .1], { emissive: 1.8 }); X.part('sphere', s * .22, 2.8, 1.35, .1, .08, .08, [0, 0, 0]); }
    X.part('sphere', 0, 2.75, 1.38, .1, .1, .1, [1, .6, .6], { emissive: .6 }); arms(X, 2.4, 1.4, .4, c, sw + cast); X.part('box', 1.2, 1.4, .8 + cast, .3, 1.0, 2.6, [.55, .55, .6]); };   // ascia

  P.demon = (X) => { const { c, dark, T, cast, acc } = X, fl = sin(T * 3) * .3;
    legs(X, 2, 0, 1.1, .45, dark); X.part('sphere', 0, 1.95, 0, 1.6, 1.7, 1.0, c); X.part('sphere', 0, 3.0, .2, .8, .8, .8, c);
    for (const s of [-1, 1]) { X.part('cone', s * .4, 3.6, .1, .15, .8, .15, dark, {}, 0, -s * .5); X.part('sphere', s * .25, 3.1, .65, .14, .1, .1, [1, .9, .2], { emissive: 2 });
      X.part('box', s * 1.9, 3.0 + fl * s, -.5, 2.0, .05, 1.8, dark, { double: true }, 0, s * (.5 + fl)); X.part('box', s * 1.05, 2.5, -.3, 1.5, .1, .1, dark, {}, 0, s * (.5 + fl)); }
    arms(X, 2.3, 1.3, .32, c, sin(T * 3) * .2 + cast * 1.2); X.part('cone', 0, 1.2, -.9, .2, 1.6, .2, dark, {}, -2.2); if (X.glow > .05) X.part('sphere', 0, 2.6, 1.4, .5 + X.glow * .6, .5 + X.glow * .6, .5 + X.glow * .6, acc, { alpha: .7, emissive: 1.8 }); };

  P.knight = (X) => { const { c, dark, T, cast, acc } = X, sw = sin(T * 2.2) * .2;
    legs(X, 2, 0, 1.3, .55, dark); X.part('box', 0, 2.3, 0, 1.8, 1.8, 1.0, dark); X.part('box', 0, 2.3, .52, 1.4, 1.3, .1, c); X.part('sphere', 0, 3.4, .1, .75, .8, .75, dark); X.part('box', 0, 3.4, .5, .5, .1, .12, acc, { emissive: 1.8 });
    X.part('cone', 0, 4.0, 0, .15, .6, .15, [.8, .1, .1]); for (const s of [-1, 1]) { X.part('sphere', s * 1.15, 3.0, 0, .75, .5, .75, dark); }
    arms(X, 2.4, 1.3, .3, dark, sw + cast * .8); X.part('box', 1.2, 1.9, .9 + cast * 1.1, .14, .14, 3.0, [.78, .82, .9], { emissive: .35 + cast }); X.part('box', -1.35, 2.0, .3, .15, 1.7, 1.1, c, { emissive: .1 });   // spada + scudo
    X.part('box', 0, 1.4, -.55, 1.5, 2.2, .06, [.25, .05, .1], { double: true }); };                                                           // mantello

  P.lich = (X) => { const { c, dark, T, cast, acc } = X, fl = sin(T * 2) * .15;
    X.part('cone', 0, 1.7 + fl, 0, 1.9, 2.8, 1.5, dark); X.part('sphere', 0, 3.3 + fl, .1, .9, 1.0, .9, [.92, .9, .8]); X.part('box', 0, 3.1 + fl, .5, .5, .15, .1, [.15, .12, .1]);
    for (const s of [-1, 1]) { X.part('sphere', s * .22, 3.4 + fl, .5, .2, .22, .1, acc, { emissive: 2 }); X.part('cyl', s * 1.0, 2.5 + fl, .3 + cast * .6, .22, 1.3, .22, dark, {}, 1.0); X.part('sphere', s * 1.1, 2.0 + fl, .8 + cast * .8, .3, .3, .3, [.92, .9, .8]); }
    X.part('cone', 0, 3.95 + fl, -.1, 1.1, 1.0, 1.1, [.15, .08, .22]); X.part('cyl', 1.1, 2.2 + fl, 1.0 + cast * .8, .12, 3.4, .12, [.4, .3, .2]); X.part('sphere', 1.1, 4.0 + fl, 1.0 + cast * .8, .5 + cast * .4, .5 + cast * .4, .5 + cast * .4, acc, { emissive: 1.8 });
    for (let i = 0; i < 5; i++) { const a = X.T * 1.5 + i * 1.26; X.part('sphere', sin(a) * 1.7, 1.0 + i * .4 + fl, Math.cos(a) * 1.7, .25, .25, .25, acc, { emissive: 1.5, alpha: .8 }); } };   // anime

  P.gargoyle = (X) => { const { c, dark, T, cast } = X, fl = sin(T * 4) * .35;
    legs(X, 2, 0, .9, .5, dark); X.part('sphere', 0, 1.6, 0, 1.6, 1.4, 1.0, c, {}, .3); X.part('sphere', 0, 2.5, .5, .85, .8, .85, c);
    for (const s of [-1, 1]) { X.part('cone', s * .3, 3.1, .45, .14, .6, .14, dark, {}, 0, -s * .3); X.part('sphere', s * .24, 2.6, .95, .13, .1, .1, [1, .2, .2], { emissive: 1.8 }); X.part('box', s * 1.9, 2.4 + fl * s, -.3, 2.2, .05, 1.8, dark, { double: true }, 0, s * (.6 + fl)); X.part('box', s * 1.05, 2.0, -.2, 1.6, .1, .1, dark, {}, 0, s * (.6 + fl)); X.part('cone', s * .5, .15, 1.0, .1, .5, .1, dark, {}, -1.5); }
    X.part('cone', 0, 1.0, -.8, .2, 1.4, .2, dark, {}, -2.0); };

  P.spider = (X) => { const { c, dark, T, cast, acc } = X;
    X.part('sphere', 0, 1.6, -1.1, 2.4, 1.9, 2.8, c); X.part('sphere', 0, 1.55, .6, 1.5, 1.2, 1.4, dark);
    for (let i = 0; i < 6; i++) X.part('sphere', (i % 3 - 1) * .3, 1.95 + (i > 2 ? .2 : 0), 1.15, .22, .22, .22, acc, { emissive: 1.8 });
    for (const s of [-1, 1]) { X.part('cone', s * .3, 1.0, 1.35 + cast * .4, .12, .7, .12, [.95, .9, .8], {}, -2.4 + cast * .6); for (let i = 0; i < 4; i++) { const z = -1.3 + i * .85, ph = T * 3 + i * 1.3 * s, lift = Math.max(0, sin(ph)) * .35; X.part('box', s * 1.7, 1.9 + lift, z, 2.1, .3, .3, dark, {}, 0, s * .5); X.part('box', s * 3.0, .95 + lift * .5, z, .3, 2.0, .3, dark, {}, 0, s * -.3); } }
    X.part('sphere', 0, 1.1, -2.0, 1.4, .9, 1.2, X.belly, {}, 0); };

  P.hydra = (X) => { const { c, dark, T, cast, acc } = X;
    X.part('sphere', 0, 1.2, -.3, 2.6, 1.8, 3.2, c); for (const s of [-1, 1]) { X.part('cyl', s * .9, .5, .6, .6, 1.0, .6, dark); X.part('cyl', s * .9, .5, -1.2, .6, 1.0, .6, dark); }
    for (let i = 0; i < 6; i++) X.part('cone', 0, 2.2 - i * .02, .8 - i * .4, .22, .5, .22, acc);
    for (let n = -1; n <= 1; n++) { const ph = T * 1.6 + n * 1.2, base = n * .9;
      for (let k = 0; k < 6; k++) { const t = k / 5, x = base + n * t * .9 + sin(ph + k * .6) * .35 * t, y = 1.8 + t * 1.6, z = .9 + t * 1.2 + cast * t * .8; X.part('sphere', x, y, z, .5 - t * .15, .5 - t * .15, .5 - t * .15, c); }
      const hx = base + n * .9 + sin(ph + 3) * .35, hz = 2.3 + cast * .8; const hy = 3.5; X.part('sphere', hx, hy, hz, .7, .5, .95, c); X.part('sphere', hx - .2, hy + .12, hz + .32, .11, .11, .1, [1, .9, .2], { emissive: 2 }); X.part('sphere', hx + .2, hy + .12, hz + .32, .11, .11, .1, [1, .9, .2], { emissive: 2 }); X.part('box', hx, hy - .22 - cast * .2, hz + .1, .5, .07, .8, dark); }
    X.part('cone', 0, 1.0, -2.0, .5, 2.2, .5, c, {}, -Math.PI / 2); };

  P.kraken = (X) => { const { c, dark, T, cast, acc } = X;
    X.part('sphere', 0, 2.3, 0, 2.6, 2.8, 2.6, c); X.part('sphere', 0, 1.7, .9, 1.5, .9, .9, X.belly);
    for (const s of [-1, 1]) { X.part('sphere', s * .65, 2.2, 1.1, .45, .45, .3, [1, 1, .9]); X.part('sphere', s * .65, 2.2, 1.28, .2, .2, .1, acc, { emissive: 1.6 }); }
    for (let n = 0; n < 8; n++) { const a = n / 8 * PI * 2, ph = T * 2 + n; for (let k = 0; k < 6; k++) { const t = k / 5, rr = .8 + t * 2.2, w = sin(ph - k * .6) * .5 * t; X.part('sphere', Math.cos(a) * rr + Math.cos(a + 1.57) * w, .9 - t * .4 + Math.max(0, sin(ph - k * .6)) * .4 + cast * t * .8, Math.sin(a) * rr + Math.sin(a + 1.57) * w, .85 - t * .45, .85 - t * .45, .85 - t * .45, k % 2 ? c : X.belly); } } };

  window.Boss3D = {
    /** piano corporeo e stile per la chiave del boss */
    plan(key) { return KIND[key] || 'dragon'; },
    look(key) { return LOOK[key] || {}; },
    draw(kind, X) { return P[kind] ? P[kind](X) : P.dragon(X); },
    plans: P,
  };
})();
