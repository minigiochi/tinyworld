#!/usr/bin/env node
/* Anti-spegnimento: manda una richiesta a /healthz ogni 10 minuti (il piano gratuito di Render
 * mette in pausa il servizio dopo 15 minuti senza traffico in ingresso).
 * Va eseguito FUORI da Render (un PC acceso, un Raspberry, un altro servizio): se girasse sul server
 * stesso, la richiesta non verrebbe contata come traffico in ingresso.
 * Uso:  node keepalive.js https://tinyworld.onrender.com            (senza dipendenze, Node >= 18) */
const url = (process.argv[2] || process.env.RENDER_URL || '').replace(/\/+$/, '');
const every = (+process.env.EVERY_MIN || 10) * 60 * 1000;
if (!url) { console.error('Uso: node keepalive.js https://NOME.onrender.com'); process.exit(1); }
async function ping() {
  const t = Date.now();
  try {
    const r = await fetch(url + '/healthz', { signal: AbortSignal.timeout(90000) });
    console.log(new Date().toISOString(), r.status, (Date.now() - t) + ' ms', await r.text());
  } catch (e) { console.log(new Date().toISOString(), 'errore:', e.message); }
}
ping(); setInterval(ping, every);
