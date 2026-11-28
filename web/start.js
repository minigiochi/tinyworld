// Flusso d'ingresso fedele all'originale: splash → (accesso/modalità: script_15) → slot → "Componi il tuo party" → arena.
// Markup e classi Tailwind copiati dal gioco v198 (start.css = fogli di stile originali, font Cinzel incluso).
(function () {
  const LS = (() => { try { return window.localStorage; } catch (e) { return { getItem() { return null; }, setItem() {}, removeItem() {} }; } })();
  const root = document.getElementById('root'), MAXP = 20;
  const E = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const CL = window.DBAEngine.CLASSES, byName = {}; Object.keys(CL).forEach((k) => { byName[CL[k].name] = k; });
  const SECS = window.START_SECS.map((s) => ({ ...s, cards: s.cards.map((c) => ({ ...c, key: byName[c.name] })) }));
  const CARD = {}; SECS.forEach((s) => s.cards.forEach((c) => { CARD[c.key] = c; }));
  const state = { slot: null, roster: [], name: '', uid: 1 };
  const jget = (k, d) => { try { const v = JSON.parse(LS.getItem(k)); return v == null ? d : v; } catch (e) { return d; } };
  const slotKey = (n) => 'dbaNextSlot' + n;
  const save = () => { if (state.slot) { try { LS.setItem(slotKey(state.slot), JSON.stringify({ roster: state.roster, ts: Date.now(), mode: LS.getItem('dba_mode') || 'quick' })); LS.setItem('dbaNextActive', String(state.slot)); } catch (e) {} } };

  const HEAD = '<div class="min-h-screen bg-[#0b0710] text-slate-100 relative overflow-hidden"><div class="pointer-events-none absolute inset-0 opacity-60"><div class="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-red-900/20 rounded-full blur-[120px]"></div><div class="absolute bottom-0 right-1/4 w-[36rem] h-[36rem] bg-amber-800/10 rounded-full blur-[120px]"></div></div><div class="relative max-w-5xl mx-auto px-4 py-10 md:py-14"><header class="text-center mb-10 flex flex-col items-center gap-3"><div class="inline-flex items-center gap-2 text-amber-400/80 text-xs tracking-[0.4em] uppercase"> Tiny World</div><div id="topbtns"></div></header>';
  const TAIL = '</div></div>';

  // ---------- schermata slot ----------
  function showSlots() {
    state.slot = null;
    const card = (n) => {
      const d = jget(slotKey(n), null);
      const body = d && d.roster && d.roster.length
        ? '<div class="text-xs text-slate-400">' + d.roster.length + ' eroi · ' + (d.mode === 'full' ? 'Open world' : 'Veloce') + ' · ' + new Date(d.ts).toLocaleDateString('it-IT') + '</div><div class="flex flex-wrap gap-1">' + d.roster.slice(0, 8).map((r) => '<span title="' + E(r.name || CARD[r.k].name) + '">' + CARD[r.k].icon + '</span>').join('') + '</div><button data-act="open" data-n="' + n + '" class="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-red-600 text-white text-sm flex items-center justify-center gap-1.5 transition">▶ Continua</button><button data-act="del" data-n="' + n + '" class="w-full px-4 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-400 text-xs hover:bg-white/[0.1] transition">🗑 Elimina</button>'
        : '<button data-act="new" data-n="' + n + '" class="w-full px-4 py-2.5 rounded-lg bg-white/[0.06] border border-white/15 text-amber-50 text-sm flex items-center justify-center gap-1.5 hover:bg-white/[0.1] transition"><span>＋</span> Nuova partita</button>';
      return '<div class="rounded-2xl border border-white/10 bg-white/[0.04] p-4 flex flex-col gap-3"><div class="flex items-center justify-between"><span class="text-sm font-display tracking-wider text-amber-200/80">SLOT ' + n + '</span></div>' + body + '</div>';
    };
    root.innerHTML = HEAD + '<div class="max-w-xl mx-auto"><h2 class="font-display text-2xl text-amber-100 text-center mb-1">Scegli un salvataggio</h2><p class="text-slate-400 text-sm text-center mb-6">I progressi sono salvati su questo dispositivo (funziona anche offline). Hai 2 slot disponibili.</p><p style="text-align:center;font-size:12px;color:#fbbf24;opacity:.85;margin:-14px 0 16px">Tocca Nuova partita per iniziare</p><div class="grid sm:grid-cols-2 gap-3">' + card(1) + card(2) + '</div></div>' + TAIL;
    root.querySelectorAll('button[data-act]').forEach((b) => b.onclick = () => {
      const n = +b.dataset.n, a = b.dataset.act;
      if (a === 'new') { state.slot = n; state.roster = []; showParty(); }
      else if (a === 'open') { state.slot = n; state.roster = jget(slotKey(n), {}).roster || []; showParty(); }
      else if (a === 'del') { if (confirm('Eliminare il salvataggio dello slot ' + n + '?')) { try { LS.removeItem(slotKey(n)); } catch (e) {} showSlots(); } }
    });
  }

  // ---------- schermata party ----------
  function counts() { const c = {}; state.roster.forEach((r) => { c[r.k] = (c[r.k] || 0) + 1; }); return c; }
  function warn() {
    const a = state.roster.map((r) => CL[r.k].arch), t = a.includes('tank'), h = a.includes('healer');
    if (!state.roster.length || (t && h)) return '';
    return '<div id="dba-warn">Attenzione: nessun ' + (!t && !h ? 'tank e nessun healer' : !t ? 'tank' : 'healer') + ' nel party.</div>';
  }
  function showParty() {
    const sc = window.scrollY; root.style.minHeight = root.offsetHeight + 'px'; // evita che il ridisegno accorci la pagina e faccia saltare lo scroll
    const cnt = counts(), dis = !state.roster.length;
    const cards = (s) => s.cards.map((c) => '<div data-k="' + c.key + '" class="text-left rounded-lg border border-white/10 ' + c.cls + ' p-2 transition relative hover:scale-[1.02] cursor-pointer"><div class="flex items-center gap-1.5"><span class="text-lg">' + c.icon + '</span><span class="text-white text-xs font-semibold truncate flex-1">' + E(c.name) + '</span>' + (cnt[c.key] ? '<span class="text-[10px] text-white/80 bg-black/40 rounded px-1">' + cnt[c.key] + '</span>' : '') + '</div><div class="text-[9px] text-white/70 mt-0.5">' + E(c.stats) + '</div><button data-v="' + c.key + '" class="mt-1.5 w-full text-[10px] py-1 rounded bg-black/40 hover:bg-black/60 text-white/90 border border-white/10 transition">🔍 Visualizza 3D</button></div>').join('');
    const chips = state.roster.map((r) => { const c = CARD[r.k]; return '<div class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-gradient-to-br ' + c.cls.replace('bg-gradient-to-br ', '').replace(' bg-opacity-10', '') + ' bg-opacity-20 border border-white/10"><span>' + c.icon + '</span><span class="text-sm text-white truncate max-w-[110px]">' + E(r.name || c.name) + '</span><button data-c="' + r.uid + '" title="Personalizza" class="text-white/70 hover:text-amber-300 text-sm leading-none">🎨</button><button data-x="' + r.uid + '" class="text-white/50 hover:text-red-300 text-xs leading-none">✕</button></div>'; }).join('');
    root.innerHTML = HEAD + '<div class="space-y-6"><div class="text-center"><h1 class="font-display text-3xl md:text-4xl text-amber-100 mb-2">Componi il tuo party</h1><p class="text-slate-400 text-sm max-w-lg mx-auto">23 classi: 4 healer, 4 tank, 15 DPS (mischia e distanza). Fino a 20 eroi.</p><p style="font-size:12px;color:#fbbf24;opacity:.85;margin-top:6px">Tocca le classi, poi Entra nell\'arena</p></div><div class="flex flex-col sm:flex-row gap-2 items-center justify-between"><input id="cname" placeholder="Nome personalizzato (opzionale)" class="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-amber-400/50" value="' + E(state.name) + '"><button id="fill" class="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-amber-50 text-sm hover:bg-white/[0.1] transition disabled:opacity-40">Auto-riempi (20)</button></div>'
      + SECS.map((s) => '<div class="space-y-2"><div class="flex items-center gap-2"><span class="font-display text-amber-200 text-sm">' + E(s.title) + '</span><span class="text-[10px] text-slate-500 bg-white/5 rounded px-1.5 py-0.5">' + E(s.sub) + '</span></div><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">' + cards(s) + '</div></div>').join('')
      + '<div><div class="flex items-center justify-between mb-2"><span class="text-slate-400 text-sm">Roster</span><span class="text-sm font-semibold text-slate-300">' + state.roster.length + ' / ' + MAXP + '</span></div><div class="flex flex-wrap gap-2">' + chips + '</div></div>' + warn()
      + '<button id="go" ' + (dis ? 'disabled ' : '') + 'class="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-red-600 text-white font-display text-lg transition hover:scale-[1.01] active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100">️⚔️ Entra nell\'arena</button></div><div class="flex justify-center gap-2 mt-4 flex-wrap"><button id="chg" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-slate-400 text-sm hover:bg-white/[0.1] transition">↺ Cambia salvataggio</button></div>' + TAIL;
    window.scrollTo(0, sc); root.style.minHeight = '';
    root.querySelector('#cname').oninput = function () { state.name = this.value; };
    root.querySelectorAll('div[data-k]').forEach((d) => d.onclick = (e) => {
      if (e.target.closest('button')) return; if (state.roster.length >= MAXP) return;
      state.roster.push({ uid: state.uid++, k: d.dataset.k, name: state.name.trim() || (state.roster.length ? '' : (LS.getItem('dba_nick') || '')) }); state.name = ''; save(); showParty();
    });
    root.querySelectorAll('button[data-v]').forEach((b) => b.onclick = (e) => { e.stopPropagation(); view3d(b.dataset.v); });
    root.querySelectorAll('button[data-x]').forEach((b) => b.onclick = () => { state.roster = state.roster.filter((r) => r.uid != b.dataset.x); save(); showParty(); });
    root.querySelectorAll('button[data-c]').forEach((b) => b.onclick = () => customize(state.roster.find((r) => r.uid == b.dataset.c)));
    root.querySelector('#fill').onclick = () => {
      const keys = Object.keys(CL), pick = (arch) => { const a = keys.filter((k) => CL[k].arch === arch); return a[Math.random() * a.length | 0]; };
      const need = MAXP - state.roster.length; const add = [];
      const have = (a) => state.roster.some((r) => CL[r.k].arch === a) || add.some((k) => CL[k].arch === a);
      if (need > 0 && !have('tank')) add.push(pick('tank')); if (need > 1 && !have('healer')) add.push(pick('healer'));
      while (add.length < need) add.push(keys[Math.random() * keys.length | 0]);
      add.slice(0, need).forEach((k) => state.roster.push({ uid: state.uid++, k, name: '' })); save(); showParty();
    };
    root.querySelector('#go').onclick = () => { if (!state.roster.length) return; save(); try { sessionStorage.setItem('dba_in', '1'); } catch (e) { } location.href = 'game.html?slot=' + state.slot; };
    root.querySelector('#chg').onclick = () => showSlots();
    state.uid = Math.max(state.uid, ...state.roster.map((r) => r.uid + 1), 1);
  }

  // ---------- finestra "Visualizza 3D" ----------
  function heroFor(k, extra) { const c = CL[k]; return Object.assign({ id: 'pv_' + k + (extra && extra.uid || ''), classKey: k, arch: c.arch, color: c.color, helmet: c.helmet, weapon: c.weapon, name: c.name }, extra || {}); }
  function view3d(k) {
    const c = CARD[k], cc = CL[k], o = document.createElement('div');
    o.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4';
    o.innerHTML = '<div class="relative w-full max-w-2xl bg-[#0b0710] border border-white/15 rounded-2xl overflow-hidden shadow-2xl"><div class="flex justify-between items-center p-4 border-b border-white/10"><h3 class="text-lg font-display text-amber-100 flex items-center gap-2"><span class="text-xl">' + c.icon + '</span>' + E(c.name) + ' — Visualizzazione 3D</h3><button data-z class="text-slate-400 hover:text-white text-2xl font-bold leading-none">×</button></div><div class="h-96 w-full bg-gradient-to-b from-[#0b0710] to-black"><canvas style="width:100%;height:100%;display:block"></canvas></div><div class="p-4 bg-black/40 flex justify-between items-center text-sm text-slate-300"><span>' + c.stats.split(' · ').slice(0, 3).map((x) => E(x.split(' ')[0]) + ': <span class="text-white font-semibold">' + E(x.split(' ')[1]) + '</span>').join(' | ') + '</span><button data-z class="px-4 py-2 bg-gradient-to-r from-amber-500 to-red-600 hover:scale-[1.02] active:scale-95 text-white rounded-lg transition-all font-semibold">Chiudi</button></div></div>';
    document.body.appendChild(o);
    const pv = Preview3D(o.querySelector('canvas'), CL); if (pv) pv.set(heroFor(k));
    const close = () => { pv && pv.destroy(); o.remove(); };
    o.querySelectorAll('[data-z]').forEach((b) => b.onclick = close); o.onclick = (e) => { if (e.target === o) close(); };
  }

  // ---------- finestra "Personalizza" (🎨) ----------
  const RACES = Object.keys(WOW_RACES), HAIR = ['Corto', 'Lungo', 'Coda', 'Cresta', 'Calvo', 'Spinoso', 'Ricci', 'Trecce', 'Chignon', 'Caschetto', 'Frangia', 'Afro', 'Codini', 'Rasato', 'Ciuffo', 'Treccia', 'Selvaggio', 'Corona'], BEARD = [['Nessuna', -1], ['Pizzetto', 0], ['Folta', 1], ['Baffi', 2], ['Corta', 3], ['Lunga', 4], ['Capra', 5], ['Basette', 6], ['Collare', 7], ['Manubrio', 8], ['Trecciata', 10], ['Selvaggia', 11]];
  const css = (n) => '#' + ('000000' + (n >>> 0).toString(16)).slice(-6);
  function customize(r) {
    const k = r.k, c = CARD[k], o = document.createElement('div'); r.look = r.look || {};
    o.style.cssText = 'position:fixed;inset:0;z-index:10000;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.82);padding:10px';
    o.innerHTML = '<div style="width:100%;max-width:900px;height:min(92vh,620px);display:flex;flex-direction:row;overflow:hidden;border-radius:16px;border:1px solid rgba(251,191,36,.35);background:#0b0710"><div style="height:auto;width:48%;flex-shrink:0;background:rgba(0,0,0,.4)"><canvas style="width:100%;height:100%;display:block"></canvas></div><div id="opt" style="flex:1 1 0%;min-height:0;overflow-y:auto;padding:12px"></div></div>';
    document.body.appendChild(o);
    const pv = Preview3D(o.querySelector('canvas'), CL), opt = o.querySelector('#opt');
    let hideH = false; const cur = () => heroFor(k, { uid: r.uid, id: 'u' + r.uid, look: r.look, hideHelm: hideH });
    const BT = (on) => 'padding:6px 9px;border-radius:8px;font-size:12px;min-height:32px;border:1px solid ' + (on ? 'rgb(251,191,36)' : 'rgba(255,255,255,.15)') + ';background:' + (on ? 'rgba(245,158,11,.3)' : 'rgba(255,255,255,.05)') + ';color:' + (on ? 'rgb(254,243,199)' : 'rgb(203,213,225)');
    const SW = (col, on) => 'width:30px;height:30px;border-radius:50%;background:' + col + ';border:1px solid rgba(255,255,255,.35);outline:' + (on ? 'rgb(251,191,36) solid 2px' : 'none') + ';cursor:pointer';
    const SEC = (t, b) => '<div style="margin-bottom:12px"><div style="font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:rgba(252,211,77,.7);margin-bottom:4px">' + t + '</div><div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center">' + b + '</div></div>';
    function draw() {
      const A = window.__app(cur()); const R = WOW_RACES[A.race];
      const opts = (arr, sel, f) => arr.map((t, i) => '<button data-f="' + f + '" data-v="' + i + '" style="' + BT(sel === i) + '">' + t + '</button>').join('');
      const sw = (arr, sel, f) => arr.map((cc) => '<button data-f="' + f + '" data-n="' + cc + '" style="' + SW(css(cc), sel === cc) + '"></button>').join('') + '<input type="color" data-ci="' + f + '" value="' + css(sel) + '" style="width:30px;height:30px;border:none;background:none;padding:0">';
      opt.innerHTML = '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px"><div><div style="color:#fff;font-weight:600">' + c.icon + ' ' + E(r.name || c.name) + '</div><div style="font-size:11px;color:#94a3b8">' + E(c.name) + ' · ' + R.n + '</div></div><button id="done" style="padding:8px 16px;border-radius:10px;background:linear-gradient(90deg,#f59e0b,#dc2626);color:#fff;font-size:13px;font-weight:600">Fatto</button></div>'
        + SEC('Razza', RACES.map((x, i) => '<button data-f="race" data-v="' + x + '" style="' + BT(A.race === x) + '">' + WOW_RACES[x].n + '</button>').join(''))
        + SEC('Sesso', '<button data-f="sex" data-v="male" style="' + BT(A.sex === 'male') + '">Maschio</button><button data-f="sex" data-v="female" style="' + BT(A.sex === 'female') + '">Femmina</button>')
        + SEC('Colore pelle', sw(R.skin, A.skinColor, 'skinColor')) + SEC('Capelli', opts(HAIR, A.hairStyle, 'hairStyle')) + SEC('Colore capelli', sw(R.hair, A.hairColor, 'hairColor')) + SEC('Anteprima', '<button id="hh" style="' + BT(hideH) + '">Senza elmo</button>')
        + SEC('Barba', BEARD.map((bd) => '<button data-f="beardStyle" data-v="' + bd[1] + '" style="' + BT((A.beardStyle === undefined ? -1 : A.beardStyle) === bd[1]) + '">' + bd[0] + '</button>').join(''));
      opt.querySelector('#done').onclick = () => { pv && pv.destroy(); o.remove(); save(); showParty(); };
      opt.querySelector('#hh').onclick = () => { hideH = !hideH; draw(); };
      opt.querySelectorAll('button[data-f]').forEach((b) => b.onclick = () => {
        const f = b.dataset.f; if (b.dataset.n !== undefined) r.look[f] = +b.dataset.n; else if (f === 'race') { r.look = { race: b.dataset.v, sex: r.look.sex }; } else if (f === 'sex') r.look.sex = b.dataset.v; else r.look[f] = +b.dataset.v;
        save(); draw();
      });
      opt.querySelectorAll('input[data-ci]').forEach((i) => i.oninput = () => { r.look[i.dataset.ci] = parseInt(i.value.slice(1), 16); if (i.dataset.ci === 'hairColor') delete r.look.beardColor; save(); pv && pv.set(cur()); });
      pv && pv.set(cur());
    }
    draw();
  }
  // accesso all'aspetto calcolato (stessa funzione del 3D)
  window.__app = () => ({ race: 'umano', sex: 'male' });
  const __tmpR = (function () { try { const t = document.createElement('canvas'); const r = Mini3D(t); return r ? Hero3D(r, CL) : null; } catch (e) { return null; } })();
  if (__tmpR) window.__app = (h) => __tmpR.appearance(h);

  // ---------- avvio: dopo accesso/modalità mostra gli slot ----------
  window.__dbaLastInfo = function () { return null; };
  window.__dbaStart = function () { };
  let started = false;
  function afterIntro() { if (started) return; started = true; showSlots(); }
  const mo = new MutationObserver(() => { if (!document.getElementById('dbaIntro') && window.__dbaMode && !document.getElementById('dba-splash')) { mo.disconnect(); afterIntro(); } });
  document.addEventListener('DOMContentLoaded', () => mo.observe(document.body, { childList: true }));
  if (/nointro/.test(location.search)) { window.__dbaMode = LS.getItem('dba_mode') || 'quick'; const iv = document.getElementById('dbaIntro'); document.addEventListener('DOMContentLoaded', () => { const t = setInterval(() => { const i = document.getElementById('dbaIntro'); if (i) i.remove(); const sp = document.getElementById('dba-splash'); if (sp) sp.remove(); clearInterval(t); afterIntro(); }, 100); }); }
  if (/screen=slots/.test(location.search)) { window.__dbaMode = LS.getItem('dba_mode') || 'quick'; document.addEventListener('DOMContentLoaded', () => { const sp = document.getElementById('dba-splash'); if (sp) sp.remove(); const i = document.getElementById('dbaIntro'); if (i) i.remove(); setTimeout(() => { const i2 = document.getElementById('dbaIntro'); if (i2) i2.remove(); afterIntro(); }, 300); }); }
  // barra superiore (Bestiario / Spellbook / Grimorio / Impostazioni) montata ad ogni cambio schermata
  (function () {
    const prov = () => { let cfg = {}; try { cfg = JSON.parse(localStorage.getItem('dbaNextCfg' + (state.slot ? '_s' + state.slot : '')) || '{}'); } catch (e) { } return (state.roster || []).map((r) => { const c = CARD[r.k] || {}, id = 'u' + r.uid; return { id, name: r.name || c.name, icon: c.icon, classKey: r.k, level: ((cfg[id] || {}).lv) || 1 }; }); };
    const mt = () => { const h = document.getElementById('topbtns'); if (h && !h.firstChild && window.DBA_TOP) DBA_TOP.mount(h, prov); };
    new MutationObserver(mt).observe(root, { childList: true }); mt();
  })();
})();
