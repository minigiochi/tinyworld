/* Suggerimenti brevi (max 6 parole) mostrati per qualche secondo all'apertura del mondo e di una battaglia. */
(function () {
  var el = null, tmr = [];
  function say(t, top, ms) {
    try {
      if (!el) { el = document.createElement('div'); el.id = 'dbaHintBar'; } var par = document.fullscreenElement || document.body; if (el.parentNode !== par) par.appendChild(el);
      el.style.cssText = 'position:fixed;left:50%;transform:translateX(-50%);z-index:2147483000;pointer-events:none;width:max-content;max-width:86vw;text-align:center;font:600 13px system-ui,sans-serif;color:#fde68a;background:rgba(8,6,16,.72);border:1px solid rgba(251,191,36,.35);border-radius:999px;padding:6px 14px;text-shadow:0 1px 2px #000;transition:opacity .5s;opacity:0;' + (top ? 'top:' + top + 'px' : 'bottom:200px');
      el.textContent = '💡 ' + t; requestAnimationFrame(function () { el.style.opacity = '1'; });
      tmr.push(setTimeout(function () { if (el) el.style.opacity = '0'; }, ms || 4200));
    } catch (e) {}
  }
  function seq(list, top) { tmr.forEach(clearTimeout); tmr = []; list.forEach(function (t, i) { tmr.push(setTimeout(function () { say(t, top, 4200); }, i * 5000)); }); }
  document.addEventListener('fullscreenchange', function () { try { var par = document.fullscreenElement || document.body; if (el && el.parentNode !== par) par.appendChild(el); } catch (e) {} });
  var lastS = null, lastK = null;
  setInterval(function () {
    try {
      var A = window.__dbaWAPI, K = window.__dbaKe;
      if (K && K !== lastK) { lastK = K; var c = window.__dbaCtl && window.__dbaCtl.on; seq([c ? 'Tocca un\'abilità per lanciarla' : 'Il party combatte da solo', 'Cambia velocità in alto'], 172); }
      else if (!K && A && A.S !== lastS && !document.getElementById('dbaIntro') && !document.querySelector('.dba-picking')) { lastS = A.S; seq(['Muoviti col joystick sinistro', 'Avvicinati a un nemico per combattere', 'Zaino e mappa: pulsanti a sinistra'], 0); }
    } catch (e) {}
  }, 600);
})();
