'use strict';
/* Tiny World · host permanente del mondo condiviso.
 * - WebSocket /world: stesso protocollo del mondo coop (wstart/ws/wh/wj/wl/wdeny), nessun browser lato server.
 * - HTTP: /healthz (per i ping anti-spegnimento) e i file statici di ../web (si può giocare anche da qui).
 * Il server NON simula nemici: ogni giocatore combatte in locale con il proprio party; il server condivide
 * seme del mondo, posizioni e aspetto degli eroi. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { WebSocketServer } = require('ws');

const PORT = +process.env.PORT || 8080;
const SEED = (+process.env.WORLD_SEED || 20260101) | 0;
const MAX_PLAYERS = +process.env.MAX_PLAYERS || 30;
const AOI = 1000, SEE_MAX = 12, STALE_MS = 4000, TICK_MS = 100;
const WEB = path.resolve(process.env.WEB_DIR || path.join(__dirname, '..', 'web'));
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.mp3': 'audio/mpeg', '.ogg': 'audio/ogg', '.wasm': 'application/wasm', '.txt': 'text/plain', '.ico': 'image/x-icon' };
const HERO_KEYS = ['id', 'name', 'classKey', 'className', 'icon', 'arch', 'weapon', 'color', 'appearance', '_eq', 'naked', 'helmet', 'key', 'hideHelm', 'form', 'look', 'level'];

const players = new Map();   // id -> { id, ws, name, hero, x, z, h, m, j, ts, rowAt }
let nextId = 1;
const started = Date.now();

function slim(h) {
  if (!h || typeof h !== 'object') return null;
  const o = {};
  HERO_KEYS.forEach((k) => { if (h[k] !== undefined) o[k] = h[k]; });
  let s; try { s = JSON.stringify(o); } catch (e) { return null; }
  return s.length > 12000 ? null : o;
}
const num = (v) => (Number.isFinite(+v) ? +v : 0);
function send(ws, o) { if (ws.readyState === 1) { try { ws.send(JSON.stringify(o)); } catch (e) { /* ignora */ } } }
function broadcast(o, except) { players.forEach((p) => { if (p.id !== except) send(p.ws, o); }); }

/* ---------- HTTP ---------- */
const server = http.createServer((req, res) => {
  const url = decodeURIComponent((req.url || '/').split('?')[0]);
  if (url === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', 'Access-Control-Allow-Origin': '*' });
    res.end(JSON.stringify({ ok: true, players: players.size, uptimeS: Math.round((Date.now() - started) / 1000) }));
    return;
  }
  let file = path.normalize(path.join(WEB, url === '/' ? 'index.html' : url));
  if (!file.startsWith(WEB + path.sep) && file !== WEB) { res.writeHead(403); res.end('403'); return; }
  fs.stat(file, (e, st) => {
    if (e || !st.isFile()) { res.writeHead(404, { 'Content-Type': 'text/plain' }); res.end('404'); return; }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    fs.createReadStream(file).pipe(res);
  });
});

/* ---------- WebSocket ---------- */
const wss = new WebSocketServer({ server, path: '/world', maxPayload: 64 * 1024 });
wss.on('connection', (ws) => {
  let me = null;
  ws.isAlive = true;
  ws.on('pong', () => { ws.isAlive = true; });
  ws.on('message', (data) => {
    let m; try { m = JSON.parse(data.toString()); } catch (e) { return; }
    if (!m || typeof m.t !== 'string') return;
    if (!me) {
      if (m.t !== 'hello') return;
      if (players.size >= MAX_PLAYERS) { send(ws, { t: 'wfull', max: MAX_PLAYERS }); ws.close(); return; }
      const hero = slim(m.hero); if (!hero) { send(ws, { t: 'werr', msg: 'Eroe non valido' }); ws.close(); return; }
      me = { id: nextId++, ws, name: String(m.name || 'Giocatore').replace(/[<>&"]/g, '').slice(0, 20) || 'Giocatore', hero, x: 0, z: 0, h: 0, m: 0, j: 0, ts: 0, rowAt: 0, far: true };
      const others = []; players.forEach((p) => others.push({ i: p.id, name: p.name, hero: p.hero }));
      players.set(me.id, me);
      const roster = others.concat([{ i: me.id, name: me.name, hero: me.hero }]);
      send(ws, m.re ? { t: 'wre', you: me.id, seed: SEED, players: roster } : { t: 'wstart', you: me.id, seed: SEED, players: roster });   // re: rientro dopo un riavvio, senza ricreare il mondo
      broadcast({ t: 'wj', p: { i: me.id, name: me.name, hero: me.hero } }, me.id);
      log('entra', me.id, me.name, '(' + players.size + ')');
      return;
    }
    if (m.t === 'wp' && Array.isArray(m.r)) {
      const now = Date.now(); if (now - me.rowAt < 40) return; me.rowAt = now;
      me.x = num(m.r[1]); me.z = num(m.r[2]); me.h = num(m.r[3]); me.m = m.r[4] ? 1 : 0; me.j = num(m.r[5]); me.ts = now;
    } else if (m.t === 'wh') {
      const hero = slim(m.hero); if (!hero) return;
      me.hero = hero; broadcast({ t: 'wh', i: me.id, hero }, me.id);
    } else if (m.t === 'wreq') {
      send(ws, { t: 'wdeny' });          // il server non ospita battaglie: il client combatte in locale
    }
  });
  ws.on('close', () => {
    if (me && players.get(me.id) === me) { players.delete(me.id); broadcast({ t: 'wl', i: me.id }); log('esce', me.id, me.name, '(' + players.size + ')'); }
  });
  ws.on('error', () => {});
});

/* diffusione delle posizioni: a ciascuno solo i giocatori vicini (max SEE_MAX) */
setInterval(() => {
  const now = Date.now(), list = [];
  players.forEach((p) => { if (now - p.ts < STALE_MS) list.push(p); });
  players.forEach((p) => {
    const out = [];
    for (const q of list) if (q.id !== p.id) { const d = Math.hypot(q.x - p.x, q.z - p.z); if (d < AOI) out.push([d, q]); }
    out.sort((a, b) => a[0] - b[0]);
    const rows = out.slice(0, SEE_MAX).map(([, q]) => [q.id, Math.round(q.x * 10) / 10, Math.round(q.z * 10) / 10, Math.round(q.h * 100) / 100, q.m, q.j]);
    if (rows.length || p.sent) { send(p.ws, { t: 'ws', p: rows }); p.sent = rows.length > 0; }
  });
}, TICK_MS);

/* elenco di tutti i giocatori online (per "raggiungi"), ogni 2 s */
setInterval(() => {
  const now = Date.now(), all = [];
  players.forEach((p) => { if (p.ts) all.push([p.id, Math.round(p.x), Math.round(p.z)]); });
  players.forEach((p) => send(p.ws, { t: 'wall', p: all, n: players.size }));
}, 2000);

/* connessioni morte */
setInterval(() => { wss.clients.forEach((ws) => { if (ws.isAlive === false) { ws.terminate(); return; } ws.isAlive = false; try { ws.ping(); } catch (e) {} }); }, 25000);

function log() { console.log(new Date().toISOString(), ...arguments); }
if (require.main === module) server.listen(PORT, () => log('Tiny World server su porta', PORT, '· seme', SEED, '· web:', WEB));
module.exports = { server, players };
