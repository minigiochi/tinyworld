/* Boss Coop (1-4 giocatori) — rete WebRTC punto-a-punto senza server, scambio manuale di codici.
 * Sincronizzazione "lockstep": tutti simulano lo STESSO scontro (stesso seme casuale, passo fisso 0,05 s);
 * si scambiano solo gli ingressi (abilità, ult, schivata) con un ritardo fisso di D passi, decisi dall'host.
 * Ogni giocatore comanda UN eroe; gli altri eroi sono automatici. */
(function () {
  'use strict';
  var D = 6;                       // ritardo ingressi (passi da 0,05 s = 0,3 s)
  var HASH_EVERY = 40;             // controllo di sincronia ogni 40 passi
  var ICE = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
  var $ = function (id) { return document.getElementById(id); };
  var E = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  /* ---------- generatore casuale deterministico (condiviso da tutti) ---------- */
  var rs = 1;
  function mul() { rs = (rs + 0x6D2B79F5) | 0; var t = Math.imul(rs ^ (rs >>> 15), 1 | rs); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }
  var NATIVE = Math.random, evWrapped = false;
  /* i gestori di eventi (suoni, ecc.) girano DENTRO il passo del motore: non devono consumare numeri del generatore condiviso */
  function guardEv() {
    if (evWrapped) return; evWrapped = true; var prev = window.__dbaEv;
    window.__dbaEv = function () { var m = Math.random; Math.random = NATIVE; try { return prev ? prev.apply(this, arguments) : void 0; } finally { Math.random = m; } };
  }
  function withRng(fn) { var o = Math.random; Math.random = mul; try { return fn(); } finally { Math.random = o; } }

  /* ---------- codici di connessione ---------- */
  function b64(u) { var s = ''; for (var i = 0; i < u.length; i++) s += String.fromCharCode(u[i]); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
  async function enc(o) {
    var st = new Blob([JSON.stringify(o)]).stream().pipeThrough(new CompressionStream('deflate-raw'));
    return 'DBA1.' + b64(new Uint8Array(await new Response(st).arrayBuffer()));
  }
  async function dec(t) {
    t = String(t || '').trim().replace(/\s+/g, '');
    if (t.indexOf('DBA1.') !== 0) throw new Error('Codice non valido');
    var s = atob(t.slice(5).replace(/-/g, '+').replace(/_/g, '/')), u = new Uint8Array(s.length);
    for (var i = 0; i < s.length; i++) u[i] = s.charCodeAt(i);
    var st = new Blob([u]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
    return JSON.parse(await new Response(st).text());
  }
  function gather(pc) {
    return new Promise(function (res) {
      if (pc.iceGatheringState === 'complete') return res();
      var f = function () { if (pc.iceGatheringState === 'complete') { pc.removeEventListener('icegatheringstatechange', f); res(); } };
      pc.addEventListener('icegatheringstatechange', f); setTimeout(res, 6000);
    });
  }
  function wrap(pc, dc, on) {
    var p = { pc: pc, dc: dc, open: false, send: function (o) { try { if (dc && dc.readyState === 'open') dc.send(JSON.stringify(o)); } catch (e) {} } };
    dc.onopen = function () { p.open = true; on.open && on.open(p); };
    dc.onclose = function () { if (p.open) { p.open = false; on.close && on.close(p); } };
    dc.onmessage = function (e) { try { on.msg && on.msg(p, JSON.parse(e.data)); } catch (x) { console.error('coop msg', x); } };
    pc.onconnectionstatechange = function () { if (pc.connectionState === 'failed' || pc.connectionState === 'disconnected' || pc.connectionState === 'closed') { if (p.open) { p.open = false; on.close && on.close(p); } } };
    return p;
  }

  /* ---------- stato ---------- */
  var C = { used: {}, role: null, peers: [], me: 0, players: [], cfg: { ti: 0, bi: 3, lv: 10 }, on: false, tick: 0, hostTick: 0, sched: {}, owners: {}, myId: null,
    myH: {}, hostH: {}, desync: 0, stall: 0, ended: false, name: 'Giocatore', picked: null, over: false };
  var UI = null, slots = [], gstage = 'enter', gcode = '', gerr = '';
  /* ---------- elenco stanze pubbliche (broker MQTT pubblico, nessun account) ---------- */
  var BROKERS = (function () { var m = /[?&]broker=([^&]+)/.exec(location.search); if (m) return [decodeURIComponent(m[1])]; return window.DBA_BROKERS || ['wss://broker.emqx.io:8084/mqtt', 'wss://broker.hivemq.com:8884/mqtt', 'wss://test.mosquitto.org:8081/']; })();
  var NS = 'dbacoop1/', DIR = null, rooms = {}, roomId = null, myGid = Math.random().toString(36).slice(2, 9), dirTimer = null, dirErr = '', joinTO = null;
  function jparse(s) { try { var o = JSON.parse(s); return o && typeof o === 'object' ? o : null; } catch (e) { return null; } }
  function cleanStr(s, n) { return String(s == null ? '' : s).replace(/[\u0000-\u001f<>&"]/g, '').slice(0, n); }
  function pubRoom() {
    if (!DIR || !DIR.up || !roomId || !C.pub) return;
    var n = C.players.filter(function (p) { return p && p.connected !== false; }).length;
    DIR.pub(NS + 'r/' + roomId, JSON.stringify({ id: roomId, name: cleanStr(C.name, 20), n: n, max: 4, st: C.on ? 'play' : 'lobby', boss: cleanStr(bossName(), 30), lv: C.cfg.lv, ts: Date.now(), v: 1 }), true);
  }
  async function dirHostStart() {
    roomId = 'r' + Math.random().toString(36).slice(2, 8); C.pub = true; dirErr = '';
    try {
      DIR = new MQLite(BROKERS, { will: { topic: NS + 'r/' + roomId, payload: '', retain: true } });
      await DIR.connect();
      DIR.onmessage = function (t, s) {
        if (t === NS + 'j/' + roomId) { var m = jparse(s); if (m && typeof m.g === 'string' && m.g.length < 20) hostPublicJoin(cleanStr(m.g, 19)); }
        else if (t.indexOf(NS + 'a/' + roomId + '/') === 0) { var g = t.split('/').pop(), si = slots.findIndex(function (x) { return x.gid === g; }); if (si >= 0 && slots[si].state === 'offer') { slots[si].ans = s; hostAccept(si); } }
      };
      DIR.sub(NS + 'j/' + roomId); DIR.sub(NS + 'a/' + roomId + '/+');
      DIR.ondown = function () { dirErr = 'Connessione all\'elenco pubblico persa'; render(); };
      pubRoom(); clearInterval(dirTimer); dirTimer = setInterval(pubRoom, 20000);
    } catch (e) { dirErr = 'Elenco pubblico non raggiungibile: usa l\'invito manuale con codice'; C.pub = false; }
    render();
  }
  function hostPublicJoin(g) {
    if (C.on || !DIR || !DIR.up) return;
    if (slots.some(function (x) { return x.gid === g && x.state !== 'idle'; })) return;
    var si = slots.findIndex(function (x) { return x.state === 'idle'; }); if (si < 0) return;
    slots[si].gid = g;
    hostInvite(si, function (code) { if (DIR && DIR.up) DIR.pub(NS + 'o/' + roomId + '/' + g, code, false); });
    setTimeout(function () { var x = slots[si]; if (x && x.gid === g && x.state !== 'on') { try { x.peer && x.peer.pc.close(); } catch (e) {} C.peers[si] = undefined; slots[si] = { state: 'idle' }; render(); } }, 45000);
  }
  async function guestBrowse() {
    C.role = 'guest'; gstage = 'browse'; rooms = {}; gerr = ''; render();
    try {
      if (DIR) DIR.close(); DIR = new MQLite(BROKERS); await DIR.connect();
      DIR.onmessage = function (t, s) {
        if (t.indexOf(NS + 'r/') === 0) { var id = cleanStr(t.slice((NS + 'r/').length), 12); if (!s) { delete rooms[id]; } else { var m = jparse(s); if (m && typeof m.ts === 'number') rooms[id] = { id: id, name: cleanStr(m.name, 20), n: +m.n | 0, max: +m.max | 0 || 4, st: m.st === 'play' ? 'play' : 'lobby', boss: cleanStr(m.boss, 30), lv: +m.lv | 0, ts: m.ts }; } if (gstage === 'browse') render(); }
        else if (joinRoom && t === NS + 'o/' + joinRoom + '/' + myGid) { clearTimeout(joinTO); guestJoin(s, function (code) { DIR.pub(NS + 'a/' + joinRoom + '/' + myGid, code, false); }); }
      };
      DIR.sub(NS + 'r/+'); clearInterval(dirTimer); dirTimer = setInterval(function () { if (gstage === 'browse' && UI) render(); }, 6000);
    } catch (e) { gerr = 'Elenco pubblico non raggiungibile. Prova più tardi o usa i codici manuali.'; }
    render();
  }
  var joinRoom = null;
  function guestJoinPublic(id) {
    if (!DIR || !DIR.up) return; joinRoom = id; gstage = 'joining'; gerr = ''; render();
    DIR.sub(NS + 'o/' + id + '/' + myGid);
    setTimeout(function () { if (DIR && DIR.up) DIR.pub(NS + 'j/' + id, JSON.stringify({ g: myGid, name: cleanStr(C.name, 20) }), false); }, 500);
    clearTimeout(joinTO); joinTO = setTimeout(function () { if (gstage === 'joining') { gstage = 'browse'; gerr = 'L\'host non ha risposto (stanza piena o chiusa).'; render(); } }, 30000);
  }

  function broadcast(o) { C.peers.forEach(function (p) { if (p && p.open) p.send(o); }); }
  function ownerOf(p) { return C.peers.indexOf(p) + 1; }

  /* ---------- eroi ---------- */
  function myHeroList() {
    var keys = pkeys(), L = +$('lv').value || 1;
    return keys.map(function (k, i) { var h = hero(k, i, L); return { i: i, k: k, name: h.name, cls: h.className, icon: h.icon, level: h.level }; });
  }
  function buildMyHero(i) { var k = pkeys()[i], h = hero(k, i, +$('lv').value || 1); return JSON.parse(JSON.stringify(h)); }
  function lobbyView() {
    return { players: C.players.map(function (p) { return { name: p.name, hero: p.label || null, connected: p.connected !== false }; }), cfg: C.cfg };
  }
  function pushLobby() { if (C.role === 'host') { broadcast({ t: 'lobby', v: lobbyView() }); pubRoom(); render(); } }

  /* ---------- messaggi ---------- */
  function onMsg(p, m) {
    if (C.role === 'host') {
      var idx = ownerOf(p);
      if (m.t === 'hello') { C.players[idx] = Object.assign(C.players[idx] || {}, { name: String(m.name || 'Giocatore').slice(0, 20), connected: true }); p.send({ t: 'welcome', me: idx }); pushLobby(); }
      else if (m.t === 'pick') { if (!C.players[idx]) return; C.players[idx].hero = m.hero; C.players[idx].label = (m.hero.name || m.hero.classKey) + ' · ' + (m.hero.className || '') + ' Lv ' + m.hero.level; pushLobby(); }
      else if (m.t === 'wreq') { worldFightReq(idx, m); }
      else if (m.t === 'wh') { if (m.hero && W.on) { setHero(idx, m.hero); C.peers.forEach(function (q, qi) { if (q && q.open && qi + 1 !== idx) q.send({ t: 'wh', i: idx, hero: m.hero }); }); } }
      else if (m.t === 'wp') { W.rem[idx] = { x: +m.r[1], z: +m.r[2], h: +m.r[3], m: m.r[4] ? 1 : 0, j: +m.r[5] || 0, ts: performance.now() }; }
      else if (m.t === 'r') { if (!C.on) return; var u = C.owners[m.u]; if (u === idx) schedule({ u: m.u, a: m.a, i: m.i }); }
    } else {
      if (!C.on && /^(i|h|x|end)$/.test(m.t)) return;
      if (m.t === 'welcome') { C.me = m.me; gstage = 'lobby'; clearTimeout(joinTO); clearInterval(dirTimer); if (DIR) { DIR.close(); DIR = null; } render(); }
      else if (m.t === 'lobby') { C.players = m.v.players; C.cfg = m.v.cfg; render(); }
      else if (m.t === 'start') { if (m.w) worldFightBegin(m); else begin(m); }
      else if (m.t === 'wdeny') { worldFightDeny(); }
      else if (m.t === 'wh') { if (m.hero && W.on) setHero(m.i, m.hero); }
      else if (m.t === 'wstart') worldStart(m);
      else if (m.t === 'ws') { var nw = performance.now(), seen = {}; m.p.forEach(function (r) { seen[r[0]] = 1; W.rem[r[0]] = { x: +r[1], z: +r[2], h: +r[3], m: r[4] ? 1 : 0, j: +r[5] || 0, ts: nw }; }); }
      else if (m.t === 'i') { (C.sched[m.k] = C.sched[m.k] || []).push(m); }
      else if (m.t === 'h') { if (m.k > C.hostTick) C.hostTick = m.k; }
      else if (m.t === 'x') { C.hostH[m.k] = m.h; checkHash(m.k); }
      else if (m.t === 'end') { C.over = true; }
    }
  }
  function onClose(p) {
    if (C.role === 'host') {
      var idx = ownerOf(p); if (C.players[idx]) C.players[idx].connected = false;
      if (C.on && !C.over) { Object.keys(C.owners).forEach(function (id) { if (C.owners[id] === idx) schedule({ u: id, a: 'drop' }); }); note('⚠ ' + (C.players[idx] ? C.players[idx].name : 'Un giocatore') + ' si è disconnesso: il suo eroe passa in automatico'); }
      pushLobby();
    } else { C.hostGone = true; note('⚠ Connessione con l\'host persa'); render(); }
  }

  /* ---------- ingressi ---------- */
  function schedule(m) { m.k = C.tick + D; m.t = 'i'; (C.sched[m.k] = C.sched[m.k] || []).push(m); broadcast(m); }
  function input(a, i) {
    if (!C.on || C.over || !C.myId) return;
    if (C.role === 'host') schedule({ u: C.myId, a: a, i: i || 0 });
    else C.peers[0].send({ t: 'r', u: C.myId, a: a, i: i || 0 });
  }
  function apply(e, m) {
    if (m.a === 'drop') { if (window.__dbaCtlSet) window.__dbaCtlSet.delete(m.u); return; }
    var h = e.heroes.find(function (x) { return x.id === m.u; });
    if (!h || !h.alive) return;
    if (m.a === 'ult' || m.a === 'dodge') C.used[m.u] = 1;
    else if (m.a === 'cast') {   // l'abilità base (e quelle che il comando automatico lancia da sole) NON contano come partecipazione
      var ab = h.abilities && h.abilities[m.i], auto = m.i === 0 || (h.arch === 'tank' && ab && (ab.kind === 'taunt_strike' || ab.kind === 'threat'));
      if (!auto) C.used[m.u] = 1;
    }
    if (m.a === 'cast') { h._mq = m.i; h._mqT = e.time; }
    else if (m.a === 'ult') DBAEngine.ultimateCast(e, h);
    else if (m.a === 'dodge') h._dgReq = 1;
  }

  /* ---------- simulazione ---------- */
  function hashOf(e) {
    var s = e.heroes.map(function (h) { return Math.round(h.hp) + ':' + Math.round(h.pos.x * 100) + ',' + Math.round(h.pos.z * 100) + ':' + Math.round(h.mana || 0); }).join('|') + '#' + Math.round(e.boss.hp) + '#' + Math.round(e.time * 100) + '#' + rs;
    var x = 5381; for (var i = 0; i < s.length; i++) x = ((x << 5) + x + s.charCodeAt(i)) | 0; return x;
  }
  function checkHash(k) { if (C.myH[k] !== undefined && C.hostH[k] !== undefined) { if (C.myH[k] !== C.hostH[k]) { C.desync++; note('⚠ Possibile desincronizzazione (' + C.desync + ')'); } delete C.myH[k]; delete C.hostH[k]; } }
  function stepCount(n, dt) {
    if (!C.on) return window.__dbaSim(n, dt);
    if (C.role === 'host') return window.__dbaSim(n, dt);
    var avail = C.hostTick + D - C.tick;
    C.stall = avail <= 0 ? C.stall + 1 : 0;
    return Math.max(0, Math.min(avail, 60));
  }
  function step(e) {
    if (!C.on) return e.step(.05);
    var T = C.tick, ev;
    ev = withRng(function () {
      var L = C.sched[T]; if (L) { delete C.sched[T]; L.forEach(function (m) { apply(e, m); }); }
      e.heroes.forEach(function (h) {                       // ult automatica degli eroi non comandati
        if (!h.alive || (window.__dbaCtlSet && window.__dbaCtlSet.has(h.id))) return;
        if (e.time - (h._coopTry === undefined ? -9 : h._coopTry) < 1.5) return;
        if (DBAEngine.ultimateProgress(e, h) >= 1) { h._coopTry = e.time; DBAEngine.ultimateCast(e, h); }
      });
      return e.step(.05);
    });
    C.tick++;
    if (C.tick % HASH_EVERY === 0) { var hv = hashOf(e); C.myH[C.tick] = hv; if (C.role === 'host') broadcast({ t: 'x', k: C.tick, h: hv }); else checkHash(C.tick); }
    if (C.role === 'host' && C.tick % 2 === 0) broadcast({ t: 'h', k: C.tick });
    if (C.role === 'host' && e.over && !C.over) { C.over = true; broadcast({ t: 'h', k: C.tick }); }
    return ev;
  }

  /* ---------- inizio battaglia ---------- */
  function mkBoss(c) {
    var d = c.lv - 1, b = DBAEngine.createBoss(+c.bi, +c.ti, 1);
    b.maxHp = Math.round(b.maxHp * (1 + .45 * d) * 2.2); b.hp = b.maxHp; b.attack = Math.round(b.attack * (1 + .28 * d) * 1.7); b.defense += Math.floor(d * .8);
    return b;
  }
  function hostStart() {
    var heroes = [], owners = {}, picked = {}, used = {};
    C.players.forEach(function (p, pi) {
      if (!p || !p.hero) return; var h = JSON.parse(JSON.stringify(p.hero)); h.appId = h.id; h.id = 'p' + pi + '_' + h.id; heroes.push(h); owners[h.id] = pi;
    });
    var target = Math.max(4, heroes.length), mine = C.players[0].hero, keys = pkeys(), L = +$('lv').value || 1;
    keys.forEach(function (k, i) {
      if (heroes.length >= target) return; var h0 = hero(k, i, L); if (mine && h0.id === mine.id) return;
      var h = JSON.parse(JSON.stringify(h0)); h.appId = h.id; h.id = 'a' + i + '_' + h.id; heroes.push(h);
    });
    var msg = { t: 'start', seed: (Math.random() * 2147483647) | 0, cfg: C.cfg, heroes: heroes, owners: owners };
    C.peers.forEach(function (p, i) { if (p && p.open) p.send(Object.assign({ you: i + 1 }, msg)); });
    begin(Object.assign({ you: 0 }, msg));
  }
  function begin(m) {
    C.used = {}; C.on = true; C.over = false; C.tick = 0; C.hostTick = 0; C.sched = {}; C.myH = {}; C.hostH = {}; C.desync = 0; C.stall = 0; C.owners = m.owners; C.cfg = m.cfg; C.me = m.you;
    var mine = Object.keys(m.owners).filter(function (id) { return m.owners[id] === m.you; })[0] || null; C.myId = mine;
    guardEv();
    window.__dbaCtlSet = new Set(Object.keys(m.owners));
    window.__dbaCtl = mine ? { on: true, id: mine } : { on: false };
    window.__dbaCoop = { input: input, step: step, steps: stepCount, get me() { return C.myId; } };
    rs = m.seed | 0;
    document.documentElement.classList.remove('dba-picking');
    if (UI) { UI.remove(); UI = null; }
    document.querySelectorAll('body>[style*="9998"]').forEach(function (x) { if (x.id !== 'dbaCoopEnd') x.remove(); });
    window.__paused = false; battleCb = null;
    eng = withRng(function () { return DBAEngine.createEngine(m.heroes, m.boss ? JSON.parse(JSON.stringify(m.boss)) : mkBoss(m.cfg)); });
    fx = []; done = true;
    var cs = $('ctlsel'); if (cs) cs.style.display = 'none'; var sp = $('sp'); if (sp && C.role !== 'host') sp.disabled = true;
    banner(); if (C.role === 'host') pubRoom();
  }

  /* ---------- fine / uscita ---------- */
  function cleanup() {
    clearInterval(dirTimer); clearTimeout(joinTO); if (DIR) { try { if (C.role === 'host' && roomId) DIR.pub(NS + 'r/' + roomId, '', true); } catch (e) {} DIR.close(); DIR = null; } roomId = null; C.pub = false;
    window.__dbaCoop = null; window.__dbaCtlSet = null; C.on = false; C.peers.forEach(function (p) { try { p.pc.close(); } catch (e) {} }); C.peers = [];
    var cs = $('ctlsel'); if (cs) cs.style.display = ''; var sp = $('sp'); if (sp) sp.disabled = false; var b = $('dbaCoopBar'); if (b) b.remove(); var en = $('dbaCoopEnd'); if (en) en.remove(); C.role = null;
  }
  function endScreen() {
    if (W.fight) { worldFightEnd(); return; }
    if ($('dbaCoopEnd')) return; var win = eng.outcome === 'victory';
    var o = document.createElement('div'); o.id = 'dbaCoopEnd';
    o.style.cssText = 'position:fixed;inset:0;z-index:9990;background:rgba(5,3,12,.82);display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif';
    o.innerHTML = '<div style="max-width:380px;padding:24px;border-radius:18px;text-align:center;border:1px solid ' + (win ? 'rgba(251,191,36,.6)' : 'rgba(239,68,68,.5)') + ';background:rgba(15,10,20,.96);color:#e2e8f0"><div style="font-size:52px">' + (win ? '🏆' : '💀') + '</div><h2 style="margin:6px 0;color:' + (win ? '#fde68a' : '#fca5a5') + '">' + (win ? 'Vittoria!' : 'Sconfitta') + '</h2><div style="font-size:14px;margin-bottom:14px">' + (win ? 'Il boss è stato sconfitto in ' : 'Il gruppo è stato annientato dopo ') + Math.round(eng.time) + ' s<br>Sopravvissuti: ' + eng.heroes.filter(function (h) { return h.alive; }).length + '/' + eng.heroes.length + '</div><button id="coopBack" style="padding:12px 22px;border-radius:12px;border:1px solid rgba(251,191,36,.6);background:rgba(251,191,36,.16);color:#fde68a;font-size:15px;font-weight:700">Torna al menù</button></div>';
    document.body.appendChild(o);
    $('coopBack').onclick = function () { cleanup(); eng = null; if (window.__reopenPick) window.__reopenPick(); else location.href = 'start.html?screen=slots'; };
  }
  function note(t) { var b = $('dbaCoopBar'); if (!b) return; b.dataset.note = t; b.dataset.nt = Date.now(); }
  function banner() {
    var b = $('dbaCoopBar'); if (!b) { b = document.createElement('div'); b.id = 'dbaCoopBar'; b.style.cssText = 'position:fixed;top:8px;left:8px;z-index:9000;padding:4px 12px;border-radius:10px;background:rgba(10,8,18,.78);border:1px solid rgba(251,191,36,.4);color:#fde68a;font:600 12px system-ui,sans-serif;pointer-events:none;white-space:nowrap'; document.body.appendChild(b); }
    return b;
  }
  setInterval(function () {
    if (!C.on) return;
    if (!eng) { cleanup(); return; }
    var b = banner(), n = b.dataset.note && Date.now() - (+b.dataset.nt || 0) < 6000 ? ' · ' + b.dataset.note : '';
    var wait = C.role === 'guest' && C.stall > 25 && !eng.over ? ' · ⏳ in attesa dell\'host' : '';
    b.textContent = '🤝 Coop · ' + (C.role === 'host' ? 'host' : 'ospite') + ' · ' + (C.players.length || '?') + ' giocatori' + wait + n;
    if (eng.over && !$('dbaCoopEnd')) setTimeout(function () { if (eng && eng.over) endScreen(); }, 1800);
  }, 400);

  /* ---------- connessione ---------- */
  async function hostInvite(si, onCode) {
    var s = slots[si]; s.state = 'gen'; s.err = ''; render();
    var pc = new RTCPeerConnection(ICE), dc = pc.createDataChannel('g', { ordered: true });
    var idx = si + 1;
    s.peer = wrap(pc, dc, { open: function (p) { C.peers[si] = p; C.players[idx] = C.players[idx] || { name: 'Giocatore ' + (idx + 1), connected: true }; s.state = 'on'; pushLobby(); }, close: onClose, msg: onMsg });
    C.peers[si] = s.peer;
    await pc.setLocalDescription(await pc.createOffer()); await gather(pc);
    s.code = await enc({ d: pc.localDescription.toJSON ? pc.localDescription.toJSON() : { type: pc.localDescription.type, sdp: pc.localDescription.sdp } }); s.state = 'offer'; if (onCode) onCode(s.code); render();
  }
  async function hostAccept(si) {
    var s = slots[si];
    try { var o = await dec(s.ans); await s.peer.pc.setRemoteDescription(o.d); s.state = 'link'; s.err = ''; }
    catch (e) { s.err = 'Codice di risposta non valido'; }
    render();
  }
  async function guestJoin(code, onAnswer) {
    gerr = '';
    try {
      var o = await dec(code), pc = new RTCPeerConnection(ICE);
      var peer = null;
      pc.ondatachannel = function (ev) { peer = wrap(pc, ev.channel, { open: function (p) { C.peers = [p]; p.send({ t: 'hello', name: C.name }); }, close: onClose, msg: onMsg }); if (ev.channel.readyState === 'open') { peer.open = true; C.peers = [peer]; peer.send({ t: 'hello', name: C.name }); } };
      await pc.setRemoteDescription(o.d); await pc.setLocalDescription(await pc.createAnswer()); await gather(pc);
      gcode = await enc({ d: { type: pc.localDescription.type, sdp: pc.localDescription.sdp } }); if (onAnswer) { onAnswer(gcode); gstage = 'link'; } else gstage = 'answer';
    } catch (e) { gerr = 'Codice non valido o connessione non riuscita'; console.error(e); }
    render();
  }

  /* ---------- interfaccia lobby ---------- */
  var cs = 'display:block;width:100%;margin:8px 0;padding:12px;border-radius:12px;border:1px solid rgba(251,191,36,.55);background:rgba(251,191,36,.14);color:#fde68a;font-size:15px;font-weight:700;cursor:pointer';
  var ts = 'width:100%;box-sizing:border-box;height:70px;margin:6px 0;border-radius:8px;border:1px solid #475569;background:#0f172a;color:#e2e8f0;font:11px monospace;word-break:break-all';
  var ss = 'padding:5px 8px;border-radius:8px;border:1px solid #475569;background:#0f172a;color:#e2e8f0;font-size:13px';
  function open(mode) {
    C.mode = mode || C.mode || 'b';
    if (UI) UI.remove();
    document.documentElement.classList.remove('dba-picking');
    UI = document.createElement('div'); UI.id = 'dbaCoop';
    UI.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(5,3,12,.96);display:flex;align-items:flex-start;justify-content:center;padding:16px;font-family:system-ui,sans-serif;overflow:auto;color:#e2e8f0';
    document.body.appendChild(UI); C.role = C.role || null; render();
  }
  function heroPicker() {
    var L = myHeroList(), mine = (C.role === 'host' ? C.players[0] : (C.players[C.me] || {})) || {};
    return '<div style="font-size:12px;color:#94a3b8;margin:10px 0 4px">Scegli il tuo eroe (lo comandi tu, gli altri sono automatici)</div><div style="display:flex;flex-wrap:wrap;gap:6px">' + L.map(function (h) {
      var on = C.picked === h.i; return '<button data-pick="' + h.i + '" style="flex:0 0 auto;padding:8px 10px;border-radius:10px;font-size:13px;font-weight:600;color:' + (on ? '#fde68a' : '#cbd5e1') + ';border:1px solid ' + (on ? 'rgba(251,191,36,.8)' : '#475569') + ';background:' + (on ? 'rgba(251,191,36,.18)' : 'none') + '">' + E(h.icon || '') + ' ' + E(h.name) + '<div style="font-size:10px;font-weight:400">' + E(h.cls) + ' · Lv ' + h.level + '</div></button>';
    }).join('') + '</div>';
  }
  function playersHtml() {
    return '<div style="margin:10px 0;border:1px solid #334155;border-radius:12px;padding:8px 10px;background:#0b1020;font-size:13px">' + (C.players.length ? C.players.map(function (p, i) { return p ? '<div style="padding:3px 0">' + (i === 0 ? '👑 ' : '🎮 ') + '<b>' + E(p.name) + '</b> — ' + (p.label ? E(p.label) : '<span style="color:#94a3b8">sceglie l\'eroe…</span>') + (p.connected === false ? ' <span style="color:#fca5a5">(disconnesso)</span>' : '') + '</div>' : ''; }).join('') : '<span style="color:#94a3b8">Nessun giocatore</span>') + '</div>';
  }
  function bossOpts() { var t = $('ti'), h = ''; if (t) for (var i = 0; i < t.options.length; i++) h += '<option value="' + t.options[i].value + '"' + (+t.options[i].value === +C.cfg.ti ? ' selected' : '') + '>' + E(t.options[i].textContent) + '</option>'; return h; }
  function render() {
    if (!UI) return; var h = '<div style="max-width:560px;width:100%"><h2 style="color:#fde68a;margin:0 0 4px;text-align:center">'+(C.mode === 'o' ? '🌍 Open world coop' : '🤝 Boss Coop')+'</h2><div style="font-size:12px;color:#94a3b8;text-align:center;margin-bottom:10px">1-4 giocatori · ognuno comanda un eroe · connessione diretta, senza server</div><div style="font-size:12px;color:#fbbf24;opacity:.85;text-align:center;margin-bottom:10px">Crea una stanza o unisciti</div>';
    if (!C.role) {
      h += '<label style="font-size:12px;color:#94a3b8">Il tuo nome</label><input id="cpName" value="' + E(C.name) + '" maxlength="20" style="' + ss + ';width:100%;box-sizing:border-box;margin-bottom:6px"><button data-a="host" style="' + cs + '">👑 Crea una stanza pubblica</button><button data-a="browse" style="' + cs + '">🌐 Cerca stanze pubbliche</button><button data-a="join" style="' + cs + ';font-size:13px;border-color:#475569;color:#cbd5e1;background:none">🔑 Entra con un codice (avanzato)</button><button data-a="x" style="' + cs + ';font-size:13px;border-color:#475569;color:#94a3b8;background:none">Annulla</button>';
    } else if (C.role === 'host') {
      h += playersHtml() + (C.pub ? '<div style="font-size:13px;color:#86efac;margin:6px 0">🌐 Stanza pubblica visibile a tutti nell\'elenco · attendi che gli amici entrino</div>' : '') + (dirErr ? '<div style="font-size:12px;color:#fca5a5;margin:6px 0">⚠ ' + E(dirErr) + '</div>' : '');
      h += '<details style="margin:8px 0"><summary style="font-size:12px;color:#94a3b8;cursor:pointer">Invito manuale con codice (avanzato)</summary>';
      slots.forEach(function (s, si) {
        h += '<div style="border:1px solid #334155;border-radius:12px;padding:8px 10px;margin:8px 0;background:#0b1020"><b style="font-size:13px">Giocatore ' + (si + 2) + '</b> ';
        if (s.state === 'idle') h += '<button data-a="inv" data-s="' + si + '" style="' + ss + '">Invita</button>';
        else if (s.state === 'gen') h += '<span style="color:#94a3b8;font-size:12px">genero il codice…</span>';
        else if (s.state === 'offer' || s.state === 'link') h += '<div style="font-size:12px;color:#94a3b8;margin-top:4px">1) Invia questo codice al giocatore</div><textarea readonly style="' + ts + '" onclick="this.select()">' + E(s.code) + '</textarea><button data-a="cp" data-s="' + si + '" style="' + ss + '">📋 Copia</button><div style="font-size:12px;color:#94a3b8;margin-top:6px">2) Incolla qui la sua risposta</div><textarea data-ans="' + si + '" style="' + ts + '">' + E(s.ans || '') + '</textarea><button data-a="acc" data-s="' + si + '" style="' + ss + '">Collega</button>' + (s.state === 'link' ? ' <span style="font-size:12px;color:#94a3b8">collegamento in corso…</span>' : '') + (s.err ? ' <span style="color:#fca5a5;font-size:12px">' + E(s.err) + '</span>' : '');
        else if (s.state === 'on') h += '<span style="color:#86efac;font-size:13px">✔ connesso</span>';
        h += '</div>';
      });
      h += '</details>';
      h += heroPicker() + '<div style="display:flex;gap:8px;flex-wrap:wrap;margin:12px 0;align-items:center"><label style="font-size:12px;color:#94a3b8">Boss <select id="cpTi" style="' + ss + '">' + bossOpts() + '</select></label><label style="font-size:12px;color:#94a3b8">Livello <input id="cpLv" type="number" min="1" max="80" value="' + C.cfg.lv + '" style="' + ss + ';width:60px"></label><label style="font-size:12px;color:#94a3b8">Scala <input id="cpBi" type="number" min="0" max="13" value="' + C.cfg.bi + '" style="' + ss + ';width:55px"></label></div>';
      var ready = C.players.filter(function (p) { return p && p.hero && p.connected !== false; }).length;
      h += (C.mode === 'o' ? '' : '<button data-a="go" style="' + cs + (ready >= 1 ? '' : ';opacity:.45') + '">⚔️ Avvia la battaglia (' + ready + ' giocatori pronti)</button>') + (C.mode === 'o' ? '<button data-a="gow" style="' + cs + (ready >= 1 ? '' : ';opacity:.45') + '">🌍 Entra nel mondo (' + ready + ' giocatori pronti)</button>' : '') + '<button data-a="x" style="' + cs + ';font-size:13px;border-color:#475569;color:#94a3b8;background:none">Chiudi stanza</button>';
    } else {
      if (gstage === 'browse') h += browseHtml();
      else if (gstage === 'joining' || gstage === 'link') h += '<div style="margin:14px 0;color:#fde68a">⏳ Collegamento alla stanza in corso…</div>' + (gerr ? '<div style="color:#fca5a5;font-size:12px">' + E(gerr) + '</div>' : '');
      else if (gstage === 'enter') h += '<div style="font-size:13px;margin:6px 0">1) Incolla il codice ricevuto dall\'host</div><textarea id="cpOffer" style="' + ts + '"></textarea><button data-a="jn" style="' + cs + '">Genera la risposta</button>' + (gerr ? '<div style="color:#fca5a5;font-size:12px">' + E(gerr) + '</div>' : '');
      else if (gstage === 'answer') h += '<div style="font-size:13px;margin:6px 0">2) Invia questa risposta all\'host e attendi il collegamento</div><textarea readonly style="' + ts + '" onclick="this.select()">' + E(gcode) + '</textarea><button data-a="cpg" style="' + ss + '">📋 Copia</button><div style="color:#94a3b8;font-size:12px;margin-top:8px">⏳ In attesa che l\'host ti colleghi…</div>';
      else h += playersHtml() + heroPicker() + '<div style="font-size:12px;color:#94a3b8;margin-top:10px">Boss: ' + E(bossName()) + ' · Livello ' + C.cfg.lv + '</div><div style="color:#fde68a;font-size:13px;margin-top:8px">⏳ Attendi che l\'host avvii la battaglia…</div>' + (C.hostGone ? '<div style="color:#fca5a5">Connessione persa</div>' : '');
      h += '<button data-a="x" style="' + cs + ';font-size:13px;border-color:#475569;color:#94a3b8;background:none;margin-top:14px">Esci</button>';
    }
    var ans = {}; UI.querySelectorAll('textarea[data-ans]').forEach(function (t) { ans[t.dataset.ans] = t.value; });
    UI.innerHTML = h + '</div>';
    UI.querySelectorAll('textarea[data-ans]').forEach(function (t) { t.oninput = function () { slots[+t.dataset.ans].ans = t.value; }; });
    UI.querySelectorAll('button[data-join]').forEach(function (b) { b.onclick = function () { guestJoinPublic(b.dataset.join); }; });
    UI.querySelectorAll('button[data-pick]').forEach(function (b) { b.onclick = function () { pick(+b.dataset.pick); }; });
    UI.querySelectorAll('button[data-a]').forEach(function (b) { b.onclick = function () { act(b.dataset.a, +b.dataset.s); }; });
    var nm = $('cpName'); if (nm) nm.oninput = function () { C.name = nm.value || 'Giocatore'; };
    var t1 = $('cpTi'), l1 = $('cpLv'), b1 = $('cpBi');
    if (t1) t1.onchange = function () { C.cfg.ti = +t1.value; pushLobby(); };
    if (l1) l1.onchange = function () { C.cfg.lv = Math.max(1, Math.min(80, +l1.value || 10)); pushLobby(); };
    if (b1) b1.onchange = function () { C.cfg.bi = Math.max(0, Math.min(13, +b1.value || 3)); pushLobby(); };
  }
  function browseHtml() {
    var now = Date.now(), list = Object.keys(rooms).map(function (k) { return rooms[k]; }).filter(function (r) { return Math.abs(now - r.ts) < 90000; }).sort(function (a, b) { return b.ts - a.ts; });
    var h = '<div style="font-size:13px;margin:8px 0;color:#94a3b8">Stanze pubbliche aperte ora</div>';
    if (gerr) h += '<div style="color:#fca5a5;font-size:12px;margin:6px 0">' + E(gerr) + '</div>';
    if (!list.length) h += '<div style="padding:16px;text-align:center;color:#94a3b8;border:1px dashed #334155;border-radius:12px;font-size:13px">' + (DIR && DIR.up ? 'Nessuna stanza aperta al momento. Crea la tua e invita gli amici!' : 'Connessione all\'elenco…') + '</div>';
    list.forEach(function (r) {
      var full = r.n >= r.max || r.st === 'play';
      h += '<div style="display:flex;align-items:center;gap:8px;border:1px solid #334155;border-radius:12px;padding:8px 10px;margin:6px 0;background:#0b1020"><div style="flex:1;font-size:13px"><b>👑 ' + E(r.name) + '</b><div style="font-size:11px;color:#94a3b8">' + E(r.boss) + ' · Lv ' + r.lv + ' · ' + r.n + '/' + r.max + ' giocatori' + (r.st === 'play' ? ' · in corso' : '') + '</div></div><button data-join="' + E(r.id) + '" style="' + ss + (full ? ';opacity:.4' : '') + '"' + (full ? ' disabled' : '') + '>Entra</button></div>';
    });
    return h + '<button data-a="join" style="' + cs + ';font-size:12px;border-color:#475569;color:#94a3b8;background:none">🔑 Ho un codice (avanzato)</button>';
  }
  function bossName() { var t = $('ti'); for (var i = 0; t && i < t.options.length; i++) if (+t.options[i].value === +C.cfg.ti) return t.options[i].textContent; return ''; }
  function pick(i) {
    C.picked = i; var h = buildMyHero(i);
    if (C.role === 'host') { C.players[0] = Object.assign(C.players[0] || { name: C.name, connected: true }, { name: C.name, hero: h, label: (h.name || h.classKey) + ' · ' + (h.className || '') + ' Lv ' + h.level }); pushLobby(); }
    else { C.peers[0] && C.peers[0].send({ t: 'pick', hero: h }); var me = C.players[C.me]; if (me) { me.label = (h.name || h.classKey) + ' · ' + (h.className || '') + ' Lv ' + h.level; } render(); }
  }
  function act(a, si) {
    if (a === 'x') { cleanup(); if (UI) { UI.remove(); UI = null; } if (window.DBA_MODE_PICK) { } if (window.__reopenPick) window.__reopenPick(); return; }
    if (a === 'host') { C.role = 'host'; C.name = ($('cpName') || {}).value || C.name; C.players = [{ name: C.name, connected: true }]; slots = [0, 1, 2].map(function () { return { state: 'idle' }; }); render(); dirHostStart(); }
    else if (a === 'browse') { C.name = ($('cpName') || {}).value || C.name; guestBrowse(); }
    else if (a === 'join') { C.role = 'guest'; if (!C.name) C.name = ($('cpName') || {}).value || C.name; if (DIR) { DIR.close(); DIR = null; } clearInterval(dirTimer); gstage = 'enter'; render(); }
    else if (a === 'inv') hostInvite(si);
    else if (a === 'acc') hostAccept(si);
    else if (a === 'cp' || a === 'cpg') { var tx = a === 'cp' ? slots[si].code : gcode; try { navigator.clipboard.writeText(tx); } catch (e) {} }
    else if (a === 'jn') { var o = $('cpOffer'); guestJoin(o ? o.value : ''); }
    else if (a === 'gow') { var rd2 = C.players.filter(function (p) { return p && p.hero && p.connected !== false; }).length; if (rd2 >= 1) worldHostStart(); }
    else if (a === 'go') { var rdy = C.players.filter(function (p) { return p && p.hero && p.connected !== false; }).length; if (rdy >= 1) hostStart(); }
  }

  /* ---------- mondo condiviso (fase 1: si vedono muoversi) ----------
   * Il mondo è generato con lo stesso seme su tutti i PC (stessi nemici, strade, ostacoli).
   * Ogni giocatore muove il proprio party; gli altri vedono l'eroe scelto + nome. L'host fa da relè
   * e invia a ciascuno solo i giocatori vicini (area di interesse). */
  var W = { on: false, rem: {}, av: {}, pl: {}, me: 0, last: 0, S: null, AOI: 700 };
  function worldHostStart() {
    var pl = [];
    C.players.forEach(function (p, i) { if (p && p.hero) pl.push({ i: i, name: p.name, hero: p.hero }); });
    var msg = { t: 'wstart', seed: (Math.random() * 2147483647) | 0, players: pl };
    C.peers.forEach(function (p, i) { if (p && p.open) p.send(Object.assign({ you: i + 1 }, msg)); });
    worldStart(Object.assign({ you: 0 }, msg));
  }
  function worldStart(m) {
    C.on = false; W.on = true; W.me = m.you; W.pl = {}; W.rem = {}; worldClear();
    m.players.forEach(function (p) { W.pl[p.i] = p; });
    if (UI) { UI.remove(); UI = null; }
    document.documentElement.classList.remove('dba-picking');
    window.__dbaWH = worldTick; rs = m.seed | 0; installFightHook();
    withRng(function () { $('owb').onclick(); });
  }
  function dropAv(id) { var a = W.av[id]; if (!a) return; try { if (a.g.parent) a.g.parent.remove(a.g); } catch (e) {} if (a.tag) a.tag.remove(); delete W.av[id]; }
  function setHero(i, h) { var o = W.pl[i]; if (o && o.hero && JSON.stringify(o.hero) === JSON.stringify(h)) return; W.pl[i] = Object.assign(W.pl[i] || { i: i, name: 'Giocatore' }, { hero: h }); dropAv(i); }
  function worldClear() { Object.keys(W.av).forEach(function (k) { var a = W.av[k]; try { if (a.g.parent) a.g.parent.remove(a.g); } catch (e) {} if (a.tag) a.tag.remove(); }); W.av = {}; }
  function project(cam, x, y, z) {
    var v = cam.matrixWorldInverse.elements, p = cam.projectionMatrix.elements;
    var vx = v[0] * x + v[4] * y + v[8] * z + v[12], vy = v[1] * x + v[5] * y + v[9] * z + v[13], vz = v[2] * x + v[6] * y + v[10] * z + v[14];
    var cx = p[0] * vx + p[4] * vy + p[8] * vz + p[12], cy = p[1] * vx + p[5] * vy + p[9] * vz + p[13], cw = p[3] * vx + p[7] * vy + p[11] * vz + p[15];
    if (cw <= 0.1) return null; return { x: (cx / cw * .5 + .5) * innerWidth, y: (1 - (cy / cw * .5 + .5)) * innerHeight };
  }
  function worldTick(dt, t) {
    var A = window.__dbaWAPI; if (!A || !W.on) return;
    if (W.S !== A.S) { worldClear(); W.S = A.S; }
    var now = performance.now(), me = A.me;
    if (now - (W.lastH || 0) > 2000) { W.lastH = now; try { var pa = window.__dbaGetParty && window.__dbaGetParty(), lid = A.lead, hh = pa && (pa.filter(function (x) { return x.id == lid; })[0] || pa[0]); if (hh) { var js = JSON.stringify(hh); if (js !== W.snapH || now - (W.lastF || 0) > 10000) { W.snapH = js; W.lastF = now; var hj = JSON.parse(js); if (C.role === 'host') { W.pl[W.me] = Object.assign(W.pl[W.me] || { i: W.me }, { hero: hj }); broadcast({ t: 'wh', i: W.me, hero: hj }); } else if (C.peers[0]) C.peers[0].send({ t: 'wh', hero: hj }); } } } catch (e) {} }
    if (now - W.last > 100) {
      W.last = now; var row = [W.me, +me.x.toFixed(1), +me.z.toFixed(1), +me.h.toFixed(2), me.m ? 1 : 0, +me.j.toFixed(2)];
      if (C.role === 'host') {
        C.peers.forEach(function (p, i) {
          if (!p || !p.open) return; var id = i + 1, ref = W.rem[id] || { x: me.x, z: me.z }, out = [row];
          Object.keys(W.rem).forEach(function (k) { var r = W.rem[k]; if (+k === id || now - r.ts > 4000) return; if (Math.hypot(r.x - ref.x, r.z - ref.z) < W.AOI) out.push([+k, r.x, r.z, r.h, r.m, r.j]); });
          if (Math.hypot(me.x - ref.x, me.z - ref.z) >= W.AOI) out.shift();
          p.send({ t: 'ws', p: out });
        });
      } else if (C.peers[0]) C.peers[0].send({ t: 'wp', r: row });
    }
    var cam = window.__dbaSky && window.__dbaSky.cam, f = Math.min(1, dt * 9);
    Object.keys(W.rem).forEach(function (id) {
      var r = W.rem[id], a = W.av[id], far = Math.hypot(r.x - me.x, r.z - me.z) > W.AOI;
      if (now - r.ts > 4000 || far) { if (a) { if (a.g.parent) a.g.parent.remove(a.g); if (a.tag) a.tag.remove(); delete W.av[id]; } return; }
      if (!a) {
        var pl = W.pl[id]; if (!pl || !pl.hero) return;
        var g = A.build(pl.hero); g.scale.set(1.95, ((pl.hero.appearance && pl.hero.appearance.heightMul) || 1) * 1.95, 1.95); g.position.set(r.x, A.HT(r.x, r.z), r.z); A.S.add(g);
        var tag = document.createElement('div'); tag.style.cssText = 'position:fixed;z-index:10000;pointer-events:none;transform:translate(-50%,-100%);font:600 12px system-ui;color:#fde68a;text-shadow:0 1px 3px #000,0 0 6px #000;white-space:nowrap';
        tag.textContent = pl.name || 'Giocatore'; document.body.appendChild(tag);
        a = W.av[id] = { g: g, tag: tag, o: { g: g, ud: g.userData, i: 0, tx: 0, tz: 0, dl: 0, mv: 0, hd: 0, dead: false } };
      }
      var p = a.g.position; p.x += (r.x - p.x) * f; p.z += (r.z - p.z) * f;
      p.y = A.HT(p.x, p.z) + (r.m ? Math.abs(Math.sin(t * 11)) * .18 : 0) + r.j; a.g.rotation.y = r.h; a.g.rotation.z = r.m ? Math.sin(t * 11) * .06 : 0;
      try { A.anim(a.o, !!r.m); } catch (e) {}
      var sc = cam && project(cam, p.x, p.y + 5.2, p.z);
      if (sc) { a.tag.style.display = ''; a.tag.style.left = sc.x + 'px'; a.tag.style.top = sc.y + 'px'; } else a.tag.style.display = 'none';
    });
  }

  /* ---------- combattimenti nel mondo condiviso ----------
   * Chi tocca un nemico chiede all'host di avviare uno scontro coop (lockstep) con i giocatori vicini.
   * L'host deve essere tra i partecipanti (simula e fa da orologio): se è lontano o già occupato, si combatte da soli come prima. */
  var FR = 90;
  function installFightHook() {
    if (window.__dbaFH) return; window.__dbaFH = 1; var orig = window.runBattle;
    window.runBattle = function (b, Hs, cb) {
      if (W.auto) { var au = W.auto; W.auto = null; return setTimeout(function () { au(Hs, cb); }, 30); }
      if (!W.on || W.fight) return orig(b, Hs, cb);
      var ent = (window.__dbaEnts || []).indexOf((window.__dbaEnts || []).filter(function (x) { return x.bo === b; })[0]);
      W.pend = { b: b, Hs: Hs, cb: cb, orig: orig, ei: ent };
      var bj; try { bj = JSON.parse(JSON.stringify(b)); } catch (e) { bj = null; }
      if (!bj) return worldFightDeny();
      var hs = JSON.parse(JSON.stringify(Hs));
      if (C.role === 'host') worldFightReq(0, { boss: bj, Hs: hs, ei: ent }); else if (C.peers[0]) C.peers[0].send({ t: 'wreq', boss: bj, Hs: hs, ei: ent }); else return worldFightDeny();
      clearTimeout(W.pt); W.pt = setTimeout(function () { if (W.pend) worldFightDeny(); }, 4000);
    };
  }
  function worldFightDeny() { var p = W.pend; W.pend = null; clearTimeout(W.pt); if (p) p.orig(p.b, p.Hs, p.cb); }
  function posOf(i) { var A = window.__dbaWAPI; if (i === 0) return A ? A.me : null; return W.rem[i] || null; }
  function worldFightReq(req, m) {   // solo host
    var deny = function () { if (req === 0) worldFightDeny(); else if (C.peers[req - 1]) C.peers[req - 1].send({ t: 'wdeny' }); };
    if (!W.on || C.on || W.fight) return deny();
    var rp = posOf(req), hp = posOf(0); if (!rp || !hp || Math.hypot(rp.x - hp.x, rp.z - hp.z) > FR) return deny();
    var parts = [0];
    C.players.forEach(function (p, i) { if (i === 0 || !p || !p.hero || p.connected === false) return; var q = posOf(i); if (q && performance.now() - (q.ts || 0) < 6000 && Math.hypot(q.x - rp.x, q.z - rp.z) <= FR) parts.push(i); });
    if (req !== 0 && parts.indexOf(req) < 0) return deny();
    if (parts.length < 2) return deny();
    var heroes = [], owners = {}, used = {};
    parts.forEach(function (pi) { var h = JSON.parse(JSON.stringify(C.players[pi].hero)); used[h.id] = 1; h.appId = h.id; h.id = 'p' + pi + '_' + h.id; heroes.push(h); owners[h.id] = pi; });
    (m.Hs || []).forEach(function (h0) { if (heroes.length >= Math.max(4, parts.length) || used[h0.id]) return; var h = JSON.parse(JSON.stringify(h0)); h.appId = h.id; h.id = 'a' + heroes.length + '_' + h.id; heroes.push(h); });
    var msg = { t: 'start', w: 1, req: req, seed: (Math.random() * 2147483647) | 0, cfg: C.cfg, boss: m.boss, ei: m.ei, heroes: heroes, owners: owners };
    parts.forEach(function (pi) { if (pi === 0) return; var p = C.peers[pi - 1]; if (p && p.open) p.send(Object.assign({ you: pi }, msg)); });
    worldFightBegin(Object.assign({ you: 0 }, msg));
  }
  function worldFightBegin(m) {
    var A = window.__dbaWAPI; W.fight = true; W.ei = m.ei; W.isReq = (m.req === m.you) && !!W.pend; if (W.isReq) { W.cb = W.pend; W.pend = null; clearTimeout(W.pt); } else W.cb = null;
    worldClear(); try { A && A.susp(); } catch (e) {} var ov = $('dbaDG'); if (ov) ov.style.display = 'none';
    begin(m);
  }
  /* ricompense ridotte del 70% (restano il 30%) a chi non ha usato nemmeno un'abilità */
  function scaled(fn, f) {
    if (f >= 1) return fn();
    var Q = window.__owQ, g0 = Q ? Q.gold : 0, gx = window.__dbaGiveXp, inv0 = {};
    try { window.__dbaGetInv().forEach(function (i) { inv0[i.id] = 1; }); } catch (e) {}
    if (gx) window.__dbaGiveXp = function (A) { return gx.call(this, Math.round(A * f)); };
    try { fn(); } finally { if (gx) window.__dbaGiveXp = gx; }
    try { if (Q) Q.gold = g0 + Math.round((Q.gold - g0) * f); } catch (e) {}
    try {
      var dropIds = {}; window.__dbaGetInv().forEach(function (i) { if (!inv0[i.id] && Math.random() >= f) dropIds[i.id] = 1; });
      if (Object.keys(dropIds).length) window.__dbaMapInv(function (a) { return a.filter(function (x) { return !dropIds[x.id]; }); });
    } catch (e) {}
    try { var t = document.createElement('div'); t.textContent = '🤝 Non hai usato abilità: ricompense ridotte al ' + Math.round(f * 100) + '%'; t.style.cssText = 'position:fixed;left:50%;top:70px;transform:translateX(-50%);z-index:10001;background:rgba(15,10,20,.92);color:#fde68a;padding:8px 14px;border-radius:12px;font:600 13px system-ui;pointer-events:none'; document.body.appendChild(t); setTimeout(function () { t.remove(); }, 4500); } catch (e) {}
  }
  function worldFightEnd() {
    var e = eng, out = e ? e.outcome : 'defeat', me = C.me, cb = W.cb, ei = W.ei, fac = C.used[C.myId] ? 1 : .3;
    W.fight = false; W.cb = null; C.on = false; C.over = false;
    window.__dbaCoop = null; window.__dbaCtlSet = null; window.__dbaCtl = { on: false }; battleCb = null; eng = null; fx = [];
    var b = $('dbaCoopBar'); if (b) b.remove(); var cs = $('ctlsel'); if (cs) cs.style.display = ''; var sp = $('sp'); if (sp) sp.disabled = false;
    if (cb) {
      var res = cb.Hs.map(function (h) { var f = e && e.heroes.filter(function (x) { return x.appId === h.id && x.id.indexOf('p' + me + '_') === 0; })[0]; return f ? Object.assign({}, h, out === 'victory' ? { hp: Math.max(1, f.hp), alive: true } : { hp: f.hp, alive: f.alive }) : h; });   // vittoria di squadra: chi è caduto in battaglia non azzera il party
      scaled(function () { cb.cb(out, res); }, out === 'victory' ? fac : 1);
    } else {
      var ov = $('dbaDG'); if (ov) ov.style.display = ''; try { window.__dbaWAPI.res(); } catch (x) {}
      var ent = out === 'victory' && ei >= 0 && window.__dbaEnts && window.__dbaEnts[ei];
      if (ent && ent.alive && window.__dbaFight) {      // stesso nemico nel mio mondo (identico): applico la vittoria con le MIE ricompense
        W.auto = function (Hs, cb2) { scaled(function () { cb2('victory', Hs); }, fac); };
        setTimeout(function () { try { window.__dbaFight(ent); } catch (x) { W.auto = null; console.error(x); } }, 200);
      }
    }
  }
  window.__dbaWorldMP = W;
  window.DBA_COOP = open; window.DBA_COOPWORLD = 1;
  window.__dbaCoopState = C;           // utile per prove automatiche
  if (/[?&]coop=1/.test(location.search)) setTimeout(open, 1500);
})();
