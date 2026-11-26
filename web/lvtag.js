/* Targhette dei nemici nel mondo aperto: nome + livello, colorate in base alla differenza con il livello medio del party. */
(function () {
  var pool = [], par = null;
  function cam() { return window.__dbaSky && window.__dbaSky.cam; }
  function project(c, x, y, z) {
    var v = c.matrixWorldInverse.elements, p = c.projectionMatrix.elements;
    var vx = v[0] * x + v[4] * y + v[8] * z + v[12], vy = v[1] * x + v[5] * y + v[9] * z + v[13], vz = v[2] * x + v[6] * y + v[10] * z + v[14];
    var cx = p[0] * vx + p[4] * vy + p[8] * vz + p[12], cy = p[1] * vx + p[5] * vy + p[9] * vz + p[13], cw = p[3] * vx + p[7] * vy + p[11] * vz + p[15];
    if (cw <= 0.1) return null; var sx = (cx / cw * .5 + .5) * innerWidth, sy = (1 - (cy / cw * .5 + .5)) * innerHeight;
    if (sx < -50 || sx > innerWidth + 50 || sy < -20 || sy > innerHeight + 20) return null; return { x: sx, y: sy };
  }
  function colorOf(df) { return df <= -3 ? '#86efac' : df < 3 ? '#fde68a' : df < 6 ? '#fb923c' : '#f87171'; }
  function tag(i) {
    if (pool[i]) return pool[i];
    var d = document.createElement('div');
    d.className = 'dbaLvTag'; d.style.cssText = 'position:fixed;z-index:20000;pointer-events:none;transform:translate(-50%,-100%);font:700 12px system-ui,sans-serif;color:#fff;text-shadow:0 1px 3px #000,0 0 5px #000;white-space:nowrap;padding:1px 7px;border-radius:9px;background:rgba(10,8,18,.55);display:none';
    pool[i] = d; return d;
  }
  function hideAll() { pool.forEach(function (d) { d.style.display = 'none'; }); }
  function partyLv() { try { var p = window.__dbaGetParty && window.__dbaGetParty(); if (p && p.length) return p.reduce(function (a, h) { return a + (h.level || 1); }, 0) / p.length; } catch (e) {} return 1; }
  var pl = 1, plT = 0;
  function frame() {
    requestAnimationFrame(frame);
    try {
      var A = window.__dbaWAPI, ents = window.__dbaEnts, c = cam(), K = window.__dbaKe, f = window.__dbaEnemyLv;
      if (!A || !ents || !c || !f || document.hidden) { hideAll(); return; }
      if (K && !K.over && performance.now() - (K._ls || 0) < 2000) { hideAll(); return; }
      var host = document.fullscreenElement || document.body; if (par !== host) { par = host; pool.forEach(function (d) { host.appendChild(d); }); }
      var now = performance.now(); if (now - plT > 1500) { plT = now; pl = partyLv(); }
      var me = A.me, near = [];
      for (var i = 0; i < ents.length; i++) {
        var e = ents[i]; if (!e.alive || !e.built || !e.g || !e.g.visible) continue;
        var g = e.g.position, d = Math.hypot(g.x - me.x, g.z - me.z); if (d < 95) near.push({ e: e, d: d });
      }
      near.sort(function (a, b) { return a.d - b.d; });
      var n = Math.min(near.length, 8);
      for (var k = 0; k < n; k++) {
        var en = near[k].e, L = f(en), el = tag(k); if (el.parentNode !== host) host.appendChild(el);
        if (!L) { el.style.display = 'none'; continue; }
        var h = (en.rad || 1.5) * 2.1 + 1.2 * (en.sc || 1), sc = project(c, en.g.position.x, en.g.position.y + h, en.g.position.z);
        if (!sc) { el.style.display = 'none'; continue; }
        var df = L - pl, col = colorOf(df), nm = String(en.bo && en.bo.name || '').replace(/^Miniboss · /, '');
        var tx = nm + ' · Lv ' + L + (df >= 6 ? ' ☠' : '');
        if (el._t !== tx) { el._t = tx; el.textContent = tx; } if (el._c !== col) { el._c = col; el.style.color = col; el.style.border = '1px solid ' + col + '88'; }
        el.style.display = ''; el.style.left = sc.x + 'px'; el.style.top = sc.y + 'px'; el.style.opacity = near[k].d > 70 ? '.6' : '1';
      }
      for (var j = n; j < pool.length; j++) pool[j].style.display = 'none';
    } catch (e) { window.__dbaLvErr = String(e && e.stack || e).slice(0, 300); }
  }
  requestAnimationFrame(frame);
})();
