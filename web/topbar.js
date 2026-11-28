// Barra superiore dell'originale: 📖 Bestiario · 📖 Spellbook · 📕 Grimorio · ⚙ Impostazioni (porting di E$, DbaSpellbookBtn, DbaGrimBtn e del modal Impostazioni).
// Uso: DBA_TOP.mount(container, () => [{id,name,icon,classKey,level}])  ·  DBA_TOP.open('best'|'spell'|'grim'|'set')
(function () {
  var JR = { inferno: ['Vulcano di Ignis', 'Fuoco'], frost: ['Ghiacciai di Niflheim', 'Ghiaccio'], natura: ['Foresta dei Druidi', 'Natura'], ombra: ['Cripte del Vuoto', 'Ombra'], tempesta: ['Picchi Tempestosi', 'Fulmine'], sangue: ['Santuario del Sangue', 'Sangue'], cristallo: ['Caverne di Cristallo', 'Cristallo'], magma: ['Fornace Profonda', 'Magma'], sabbie: ['Deserto Infinito', 'Sabbia'], spettrale: ['Dominio Spettrale', 'Spettro'], ossa: ["Necropoli d'Ossa", 'Morte'], luce: ['Tempio della Luce', 'Luce'], caos: ['Voragine del Caos', 'Caos'], abisso: ['Abisso Oceanico', 'Abisso'], tuono: ['Cima del Tuono', 'Tuono'], veleno: ['Palude Tossica', 'Veleno'], fenice: ['Nido della Fenice', 'Fuoco'], nulla: ['Regno del Nulla', 'Nulla'], antico: ['Rovine Antiche', 'Natura'], celeste: ['Regno Celeste', 'Luce'] };
  var RC = { bianco: '#e5e7eb', blu: '#60a5fa', viola: '#c084fc', oro: '#fbbf24', rosso: '#f87171' }, RARS = ['bianco', 'blu', 'viola', 'oro', 'rosso'];
  var E = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var SK = 'dbaNextSettings', DEF = { cameraMode: 'rotate', showLevel: false, cameraDistance: 16, thirdPersonDistance: 5 };
  function loadSet() { var o = {}; try { o = JSON.parse(localStorage.getItem(SK) || '{}') || {}; } catch (e) { } return Object.assign({}, DEF, o); }
  function saveSet(s) { window.__dbaSet = s; try { localStorage.setItem(SK, JSON.stringify(s)); } catch (e) { } }
  window.__dbaSet = loadSet(); window.__dbaSaveSet = saveSet;
  var css = '.dbaTop{display:flex;gap:8px;flex-wrap:wrap;justify-content:center}.dbaTop button{padding:6px 12px;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.05);color:rgba(255,248,230,.8);font-size:12px;cursor:pointer}.dbaTop button:hover{background:rgba(255,255,255,.1)}' +
    '#dbaTopM{position:fixed;inset:0;z-index:10002;background:rgba(0,0,0,.72);display:flex;align-items:center;justify-content:center;padding:10px;font-family:system-ui,sans-serif}#dbaTopM .bx{background:#0b0710;border:1px solid rgba(255,255,255,.18);border-radius:14px;width:100%;max-width:560px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;color:#e2e8f0;text-align:left}' +
    '#dbaTopM .hd{display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.1)}#dbaTopM .hd b{color:#fde68a;font-size:16px}#dbaTopM .x{background:none;border:0;color:#94a3b8;font-size:22px;cursor:pointer}' +
    '#dbaTopM .tabs{display:flex;gap:6px;padding:8px 10px;overflow-x:auto;border-bottom:1px solid rgba(255,255,255,.08)}#dbaTopM .tabs button,#dbaTopM .sg button{white-space:nowrap;padding:5px 9px;border-radius:8px;font-size:12px;cursor:pointer;color:#fff;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.05)}#dbaTopM .tabs button.on,#dbaTopM .sg button.on{border-color:#fbbf24;background:rgba(245,158,11,.25)}' +
    '#dbaTopM .bd{overflow:auto;padding:10px;display:flex;flex-direction:column;gap:6px}#dbaTopM .sp{border-radius:10px;padding:7px 10px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.03);opacity:.65}#dbaTopM .sp.l{border-color:rgba(52,211,153,.45);background:rgba(16,185,129,.1);opacity:1}' +
    '#dbaTopM .r1{display:flex;justify-content:space-between;gap:8px;font-size:13px}#dbaTopM .sp b{color:#cbd5e1}#dbaTopM .sp.l b{color:#a7f3d0}#dbaTopM .r1 span{font-size:10px;color:#fbbf24;white-space:nowrap}#dbaTopM .sp.l .r1 span{color:#6ee7b7}#dbaTopM .ds{font-size:11px;color:#cbd5e1;margin-top:2px}#dbaTopM .cd{font-size:10px;color:#94a3b8;margin-top:2px}' +
    '#dbaTopM .bg{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px}#dbaTopM .bs{border-radius:12px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.03);padding:12px;display:flex;align-items:center;gap:12px}#dbaTopM .bs .ic{font-size:30px}#dbaTopM .bs .n{font-weight:600;color:#fff;font-size:14px}#dbaTopM .bs .n i{font-style:normal;font-size:11px;color:#64748b;margin-right:6px}#dbaTopM .bs .t{font-size:11px;color:#94a3b8}#dbaTopM .bs .m{font-size:10px;margin-top:4px;color:#67e8f9}#dbaTopM .bs .m em{font-style:normal;margin-left:8px;padding:1px 6px;border-radius:4px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);color:#fde68a}' +
    '#dbaTopM .gr{display:flex;gap:8px;align-items:center;border-radius:8px;padding:4px 8px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03)}#dbaTopM .sg{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}#dbaTopM .sg button{padding:8px 4px}#dbaTopM label{display:block;color:#94a3b8;font-size:12px;margin-bottom:4px}#dbaTopM input[type=range]{width:100%;accent-color:#fbbf24}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var getParty = function () { return []; };
  function close() { var m = document.getElementById('dbaTopM'); if (m) m.remove(); }
  function modal(title, bodyFn) {
    close(); var m = document.createElement('div'); m.id = 'dbaTopM';
    m.innerHTML = '<div class="bx"><div class="hd"><b>' + title + '</b><button class="x">×</button></div><div class="in"></div></div>';
    m.addEventListener('click', function (e) { if (e.target === m || e.target.classList.contains('x')) close(); });
    document.body.appendChild(m); bodyFn(m.querySelector('.in')); return m;
  }
  function bestiary() {
    var bs = (window.DBAEngine && DBAEngine.BOSSES) || [];
    modal('📖 Bestiario — Draghi Boss', function (el) {
      el.className = 'bd'; el.innerHTML = '<div class="bg">' + bs.map(function (e, i) { var j = JR[e.key] || ['—', e.theme]; return '<div class="bs"><div class="ic" style="filter:drop-shadow(0 0 6px ' + E(e.bossColor) + ')">' + E(e.icon) + '</div><div style="min-width:0;flex:1"><div class="n"><i>#' + (i + 1) + '</i>' + E(e.name) + '</div><div class="t">' + E(e.title) + '</div><div class="m">📍 ' + E(j[0]) + '<em>' + E(j[1]) + '</em>' + (e.requiredLevel ? '<span style="color:#64748b;margin-left:8px">Liv. ' + e.requiredLevel + '</span>' : '') + '</div></div></div>'; }).join('') + '</div>';
    });
  }
  function spell() {
    var party = getParty() || [], si = 0, C = DBAEngine.CLASSES, cost = DBAEngine.MANACOST || {};
    modal('📖 Spellbook', function (el) {
      function draw() {
        if (!party.length) { el.innerHTML = '<p style="padding:20px;color:#94a3b8">Il party è vuoto: aggiungi degli eroi.</p>'; return; }
        var h = party[Math.min(si, party.length - 1)], lv = h.level || 1, cl = C[h.classKey], list = DBAEngine.abilitiesAt(h.classKey, 99).map(function (a) { return Object.assign({}, a, { learned: lv >= a._req }); }).sort(function (a, b) { return (a.ult ? 1 : 0) - (b.ult ? 1 : 0) || a._req - b._req; });
        el.innerHTML = '<div class="tabs">' + party.map(function (p, i) { return '<button data-i="' + i + '" class="' + (i === si ? 'on' : '') + '">' + E(p.icon) + ' ' + E(p.name) + ' · Liv.' + (p.level || 1) + '</button>'; }).join('') + '</div><div class="bd"><div style="font-size:11px;color:#94a3b8">' + E(cl ? cl.name : '') + ' · imparate ' + list.filter(function (a) { return a.learned; }).length + '/' + list.length + '</div>' +
          list.map(function (a) { var c = a.cost != null ? a.cost : cost[a.kind]; return '<div class="sp ' + (a.learned ? 'l' : '') + '"><div class="r1"><b>' + (a.learned ? '✅ ' : '🔒 ') + (a.ic ? E(a.ic) + ' ' : '') + E(a.name) + (a.ult ? ' · ULTIMATE' : a.kind === 'revive' ? ' · RESURREZIONE' : '') + '</b><span>' + (a.learned ? 'Imparata' : 'Livello ' + a._req) + '</span></div><div class="ds">' + E(a.desc || '—') + '</div><div class="cd">Ricarica ' + a.cd + 's' + (c ? ' · Mana ' + c : '') + '</div></div>'; }).join('') + '</div>';
      }
      el.addEventListener('click', function (e) { var b = e.target.closest('.tabs button'); if (b) { si = +b.getAttribute('data-i'); draw(); } });
      draw();
    });
  }
  function grim() {
    try { window.DBA_GRIM && DBA_GRIM.scan(); } catch (e) { }
    var all; try { all = window.DBA_GRIM ? DBA_GRIM.all() : JSON.parse(localStorage.getItem('dba_grim_v1') || '{}'); } catch (e) { all = {}; }
    all = Object.keys(all || {}).map(function (k) { return all[k]; });
    var slots = []; all.forEach(function (e) { if (slots.indexOf(e.s) < 0) slots.push(e.s); });
    var flt = 'tutti';
    modal('📕 Grimorio · ' + all.length + ' aspetti', function (el) {
      function draw() {
        var list = all.filter(function (e) { return flt === 'tutti' || e.s === flt; }).sort(function (a, b) { return a.s < b.s ? -1 : a.s > b.s ? 1 : RARS.indexOf(b.r) - RARS.indexOf(a.r) || (a.b < b.b ? -1 : 1); });
        el.innerHTML = '<div style="font-size:11px;color:#94a3b8;padding:6px 14px">Ogni oggetto ottenuto registra il suo aspetto per sempre, anche se lo vendi o lo distruggi. Li usi dall\'Arcanista dei villaggi.</div><div class="tabs">' + ['tutti'].concat(slots).map(function (s) { return '<button data-s="' + E(s) + '" class="' + (s === flt ? 'on' : '') + '">' + E(s) + '</button>'; }).join('') + '</div><div class="bd">' +
          (list.length ? list.map(function (e) { return '<div class="gr"><span style="font-size:16px">' + E(e.si || '▫️') + '</span><b style="color:' + (RC[e.r] || '#fff') + ';font-size:13px">' + E(e.b) + '</b><span style="font-size:11px;color:#94a3b8">' + E(e.s + ' · ' + e.r) + '</span><span style="margin-left:auto;font-size:14px">' + E(e.ic) + '</span></div>'; }).join('') : '<p style="color:#94a3b8">Nessun aspetto registrato: ottieni degli oggetti.</p>') + '</div>';
      }
      el.addEventListener('click', function (e) { var b = e.target.closest('.tabs button'); if (b) { flt = b.getAttribute('data-s'); draw(); } });
      draw();
    });
  }
  function settings() {
    var S = window.__dbaSet || loadSet();
    modal('Impostazioni', function (el) {
      el.className = 'bd';
      function draw() {
        var M = [['rotate', 'Orbita'], ['third', '3ª Pers.'], ['first', '1ª Pers.']];
        el.innerHTML = '<div><label>Telecamera</label><div class="sg">' + M.map(function (m) { return '<button data-m="' + m[0] + '" class="' + (S.cameraMode === m[0] ? 'on' : '') + '">' + m[1] + '</button>'; }).join('') + '</div></div>' +
          (S.cameraMode === 'rotate' ? '<div><label>Distanza: ' + Math.round(S.cameraDistance) + '</label><input type="range" min="8" max="60" step="1" value="' + S.cameraDistance + '" data-r="cameraDistance"></div>' : '') +
          (S.cameraMode === 'third' ? '<div><label>Distanza: ' + Math.round(S.thirdPersonDistance) + '</label><input type="range" min="3" max="25" step="1" value="' + S.thirdPersonDistance + '" data-r="thirdPersonDistance"></div>' : '') +
          '<div style="display:flex;justify-content:space-between;align-items:center"><span style="color:#94a3b8;font-size:12px">Livello nel nome</span><span class="sg" style="display:block"><button data-l="1" class="' + (S.showLevel ? 'on' : '') + '" style="padding:4px 14px">' + (S.showLevel ? 'ON' : 'OFF') + '</button></span></div><div id="dbaSS"></div>';
        var h = el.querySelector('#dbaSS'); if (window.DBA_SETSEC) window.DBA_SETSEC(h);
      }
      el.addEventListener('click', function (e) { var b = e.target.closest('button[data-m],button[data-l]'); if (!b) return; if (b.hasAttribute('data-m')) S.cameraMode = b.getAttribute('data-m'); else S.showLevel = !S.showLevel; saveSet(S); draw(); });
      el.addEventListener('input', function (e) { var r = e.target.getAttribute && e.target.getAttribute('data-r'); if (!r) return; S[r] = +e.target.value; saveSet(S); e.target.previousElementSibling.textContent = 'Distanza: ' + Math.round(S[r]); });
      if (!window.DBA_SETSEC && !window.__dbaSsLoad) { window.__dbaSsLoad = 1; var sc = document.createElement('script'); sc.src = 'orig/script_17.js'; sc.onload = function () { if (document.getElementById('dbaTopM')) draw(); }; document.head.appendChild(sc); }
      draw();
    });
  }
  var OPEN = { best: bestiary, spell: spell, grim: grim, set: settings };
  window.DBA_TOP = {
    open: function (k) { OPEN[k](); },
    mount: function (host, gp) {
      if (gp) getParty = gp; host.classList.add('dbaTop');
      host.innerHTML = '<button data-o="best">📖 Bestiario</button><button data-o="spell">📖 Spellbook</button><button data-o="grim">📕 Grimorio</button><button data-o="set">⚙ Impostazioni</button>';
      host.addEventListener('click', function (e) { var b = e.target.closest('button[data-o]'); if (b) OPEN[b.getAttribute('data-o')](); });
    },
    setParty: function (f) { getParty = f; }
  };
})();
