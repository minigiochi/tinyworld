// Pannello decisioni della battaglia (copia di h$ dell'originale): "Scelta rapida" (eroe) e "Tattica di squadra".
(function () {
  var css = '.dba-dec{position:fixed;left:0;right:0;margin-inline:auto;width:min(94vw,560px);bottom:calc(112px + env(safe-area-inset-bottom));max-height:calc(100dvh - 190px);overflow-y:auto;z-index:9997;pointer-events:auto;font-family:system-ui,sans-serif}' +
    '.dba-dec .bx{border-radius:16px;background:rgba(11,7,16,.95);backdrop-filter:blur(8px);border:1px solid rgba(251,191,36,.3);box-shadow:0 0 30px rgba(245,158,11,.2);padding:12px}' +
    '.dba-dec .bar{height:4px;border-radius:4px;background:rgba(255,255,255,.1);overflow:hidden;margin-bottom:10px}.dba-dec .bar i{display:block;height:100%;transition:width .1s linear}' +
    '.dba-dec .hd{display:flex;align-items:center;gap:8px;margin-bottom:10px}.dba-dec .hd .k{font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:rgba(251,191,36,.7)}.dba-dec .hd .n{font-size:14px;font-weight:600;color:#fff}.dba-dec .hd .s{margin-left:auto;font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:.06em}' +
    '.dba-dec .g{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}' +
    '.dba-dec button{min-height:44px;text-align:left;border-radius:8px;padding:8px 10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);color:#fff;cursor:pointer;font:inherit}' +
    '.dba-dec button:hover{background:rgba(255,255,255,.08);border-color:rgba(251,191,36,.4)}.dba-dec button.on{background:rgba(245,158,11,.4);border-color:#fbbf24}' +
    '.dba-dec .t{display:flex;justify-content:space-between;font-size:13px;font-weight:600}.dba-dec .t b{color:#fef3c7;font-weight:600}.dba-dec .t u{text-decoration:none;font-size:11px;color:rgba(147,197,253,.8)}' +
    '.dba-dec .d{font-size:11px;color:#94a3b8;line-height:1.25;margin-top:2px}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var box = null, cur = null, busy = false;
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }); }
  function close() { if (box) { box.remove(); box = null; } cur = null; busy = false; }
  function pick(e, ch, btn) {
    if (busy) return; busy = true; btn.classList.add('on');
    setTimeout(function () { try { e.resolveDecision(ch); } catch (x) { } close(); }, 180);
  }
  function build(e, d) {
    close(); cur = d; d._t0 = d.timer || 6;
    box = document.createElement('div'); box.className = 'dba-dec';
    var solo = d.type === 'solo', h = '<div class="bx"><div class="bar"><i></i></div>';
    if (solo) {
      h += '<div class="hd"><span style="font-size:18px">' + esc(d.heroIcon) + '</span><div><div class="k">Scelta rapida</div><div class="n" style="color:' + esc(d.heroColor) + '">' + esc(d.heroName) + '</div></div><span class="s"></span></div><div class="g">';
      (d.choices || []).forEach(function (m, i) { h += '<button data-i="' + i + '"><div class="t"><b>' + esc(m.name) + '</b>' + (m.cost > 0 ? '<u>' + m.cost + 'mp</u>' : '') + '</div>' + (m.desc ? '<div class="d">' + esc(m.desc) + '</div>' : '') + '</button>'; });
    } else {
      h += '<div class="hd"><span style="font-size:16px">⚡</span><div><div class="k">Tattica di squadra</div><div class="n">Scegli un ordine di gruppo</div></div><span class="s"></span></div><div class="g">';
      (d.choices || []).forEach(function (m, i) { h += '<button data-i="' + i + '"><div class="t"><span style="color:' + esc(m.color) + ';font-weight:600"><span style="font-size:16px">' + esc(m.icon) + '</span> ' + esc(m.name) + '</span></div><div class="d">' + esc(m.desc) + '</div></button>'; });
    }
    box.innerHTML = h + '</div></div>';
    box.addEventListener('click', function (ev) {
      var b = ev.target.closest('button[data-i]'); if (!b) return;
      var m = d.choices[+b.getAttribute('data-i')];
      pick(e, solo ? { index: m.index } : { id: m.id }, b);
    });
    document.body.appendChild(box);
  }
  setInterval(function () {
    var e = window.__dbaKe, d = e && e.pendingDecision;
    if (!d || e.over) { if (box) close(); return; }
    if (d !== cur) build(e, d);
    var r = Math.max(0, d.timer), bar = box && box.querySelector('.bar i'), s = box && box.querySelector('.s');
    if (bar) { bar.style.width = (r / d._t0 * 100) + '%'; bar.style.background = r < 2 ? '#ef4444' : '#f59e0b'; }
    if (s) s.textContent = Math.ceil(r) + 's';
  }, 100);
  window.__dbaDecClose = close;
})();
