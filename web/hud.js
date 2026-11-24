// hud — barra di battaglia in stile gioco originale: barra HP boss in alto, titolo, sopravvissuti/tempo,
// fila icone classi e carte eroe (livello, nome, HP, mana/furia). Solo DOM/CSS, nessuna dipendenza.
(function () {
  const css = `
  .hud{position:absolute;inset:0;pointer-events:none;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#f4f1e8;--gold:#f2b84b}
  .hud *{box-sizing:border-box}
  .hud .bb{position:absolute;left:0;right:0;top:0;height:5px;background:#0006}
  .hud .bb i{display:block;height:100%;width:100%;background:linear-gradient(90deg,#e23b3b,#ff9a2e);transition:width .25s}
  .hud .pill{position:absolute;background:#fff;color:#111;border-radius:999px;padding:6px 12px;font-weight:700;font-size:13px;box-shadow:0 2px 8px #0006}
  .hud .hp{left:12px;top:16px}
  .hud .sv{right:12px;top:16px;text-align:left;font-weight:500}.hud .sv b{font-weight:800}.hud .sv small{display:block;color:#555;font-size:12px}
  .hud .ttl{position:absolute;left:50%;top:10px;transform:translateX(-50%);text-align:center;text-shadow:0 2px 6px #000}
  .hud .ttl h1{margin:0;font-size:clamp(14px,2.2vw,22px);letter-spacing:.08em;font-weight:800;text-transform:uppercase}
  .hud .ttl p{margin:2px 0 0;font-size:11px;letter-spacing:.2em;opacity:.8;text-transform:uppercase}
  .hud .ttl em{font-style:normal;font-weight:800;font-size:12px;color:#b58cff}
  .hud .bot{position:absolute;left:0;right:0;bottom:0;padding:0 6px 6px;background:linear-gradient(transparent,#0009 30%)}
  .hud .strip{display:flex;gap:6px;align-items:center;padding:4px 2px 6px;overflow:hidden}
  .hud .strip .lab{flex:none;border:2px solid var(--gold);border-radius:999px;background:#10131c;padding:6px 12px;font-weight:700;font-size:13px}
  .hud .ic{flex:none;width:34px;height:34px;border-radius:50%;border:2px solid var(--gold);background:#10131c;display:grid;place-items:center;font-size:17px}
  .hud .ic.dead{opacity:.3;filter:grayscale(1)}
  .hud .cards{display:grid;grid-template-columns:repeat(10,1fr);gap:5px}
  @media (max-width:900px){.hud .cards{grid-template-columns:repeat(5,1fr)}}
  
  .hud .cd{border:2px solid #b8862b;background:#12151f;border-radius:8px;padding:4px 7px 5px;position:relative;min-width:0}
  .hud .cd.dead{opacity:.35;border-color:#444}
  .hud .cd .n{font-size:12px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-right:2px}.hud .cd .n b{color:var(--gold);margin-right:4px}
  .hud .bar{height:5px;border-radius:3px;background:#0b0d14;margin-top:3px;overflow:hidden;border:1px solid #2a2f40}.hud .bar i{display:block;height:100%}
  .hud .hpb i{background:#38c24b}.hud .mpb i{background:#3b82f6}.hud .rgb i{background:#f97316}
  .hud .strip .lab{pointer-events:auto;cursor:pointer;color:#fde68a;font-family:inherit}.hud .ic{pointer-events:auto;cursor:pointer;position:relative;padding:0;color:inherit}
  .hud .ic.rdy{box-shadow:0 0 8px 1px #f2b84b99}
  .hud .ub{position:relative;height:18px;border-radius:9px;border:1px solid #b8862b;background:#0008;overflow:hidden;margin:0 0 4px}
  .hud .ub i{position:absolute;left:0;top:0;bottom:0;width:0;background:linear-gradient(#ffd36b,#e0a02a);transition:width .25s}
  .hud .ub span{position:relative;display:block;text-align:center;font-size:11px;font-weight:700;line-height:16px;color:#2b1d00;text-shadow:0 0 2px #fff6}
  .hud .cd .ult{display:none;position:absolute;right:6px;top:4px;background:#f2b84b;color:#3b2600;font-size:9px;font-weight:800;border-radius:4px;padding:0 4px}.hud .cd.rdy .ult{display:block}
  .hud .flt{position:absolute;transform:translate(-50%,-100%);background:#000d;color:#fde68a;border:1px solid #fbbf24;border-radius:8px;padding:2px 8px;font-weight:800;font-size:12px;white-space:nowrap;animation:hudflt 1.8s ease-out forwards;pointer-events:none}
  @keyframes hudflt{0%{opacity:0;margin-top:6px}15%{opacity:1;margin-top:0}80%{opacity:1}100%{opacity:0;margin-top:-14px}}
  .hud .tl{position:absolute;left:12px;top:62px;display:flex;gap:6px;pointer-events:auto}
  .hud .tr{position:absolute;right:12px;top:62px;display:flex;gap:6px;pointer-events:auto}
  .hud .pan{position:absolute;inset:0;display:none;place-items:center;background:#0008;pointer-events:auto}.hud .pan.on{display:grid}
  .hud .panc{background:#12151f;border:2px solid #b8862b;border-radius:14px;padding:14px 18px;max-width:460px;width:92%;max-height:86%;overflow:auto;font-size:13px;line-height:1.5}
  .hud .panc h3{margin:0 0 8px;font-size:16px;color:#fde68a}.hud .panc label{display:flex;gap:8px;align-items:center;padding:4px 0}.hud .panc kbd{background:#2a2f40;border:1px solid #555;border-radius:4px;padding:0 6px;font-size:12px}
  .hud .panc button{margin-top:10px;padding:6px 14px;border-radius:10px;border:1px solid #b8862b;background:#f2b84b;color:#2b1d00;font-weight:800;cursor:pointer}
  .hud .tl button,.hud .tr button{height:34px;min-width:34px;padding:0 10px;border-radius:999px;border:1px solid #b8862b;background:#0b0d14cc;color:#fde68a;font-weight:700;font-size:13px;cursor:pointer}
  .hud .tr button.on{background:#f2b84b;color:#2b1d00}
  .hud .ban{position:absolute;top:92px;left:50%;transform:translateX(-50%);background:#7f1d1df0;color:#fff;border:1px solid #f87171;border-radius:12px;padding:8px 14px;font-weight:800;font-size:14px;letter-spacing:.05em;transition:opacity .6s;pointer-events:none;white-space:nowrap}
  .hud .end{position:absolute;inset:0;display:none;place-items:center;background:#000a;pointer-events:auto;overflow:auto}
  .hud .end.on{display:grid}
  .hud .endc{background:#12151f;border:2px solid #b8862b;border-radius:14px;padding:16px 18px;max-width:560px;width:92%;max-height:88%;overflow:auto;text-align:center}
  .hud .endc h2{margin:0 0 4px;font-size:26px;letter-spacing:.06em}.hud .endc p{margin:0 0 10px;font-size:12px;opacity:.8}
  .hud .endc table{width:100%;border-collapse:collapse;font-size:12px;margin-bottom:12px}.hud .endc td,.hud .endc th{padding:3px 4px;text-align:right}.hud .endc td:first-child,.hud .endc th:first-child{text-align:left}.hud .endc th{color:#fde68a}.hud .endc td b{color:#fbbf24}
  .hud .endc button{padding:8px 16px;border-radius:10px;border:1px solid #b8862b;background:#f2b84b;color:#2b1d00;font-weight:800;cursor:pointer}
  .hud .cd.hit{animation:hudhit .25s}@keyframes hudhit{50%{box-shadow:0 0 10px 2px #f55}}
  /* --- allineamento all'originale (v198): fascia in alto, titolo piccolo, dock con carte --- */
  .hud .top{position:absolute;left:0;right:0;top:0;height:40px;background:linear-gradient(#0b0710,#160d20);border-bottom:1px solid rgba(251,191,36,.3);pointer-events:auto}
  .hud .bb{top:40px;height:6px;background:rgba(0,0,0,.4)}.hud .bb i{background:linear-gradient(90deg,#ef4444,#f97316,#fbbf24)}
  .hud .tr{position:absolute;right:6px;top:6px;left:auto;gap:6px;z-index:2}
  .hud .tr button{height:auto;min-width:0;padding:4px 9px;border-radius:999px;border:1px solid rgba(251,191,36,.4);background:rgba(0,0,0,.75);color:#fde68a;font:400 12px system-ui}
  .hud .tr button.on{background:#f2b84b;color:#2b1d00}
  .hud .ttl{top:52px;text-shadow:none}
  .hud .ttl h1{display:flex;align-items:center;gap:6px;font-size:12px;letter-spacing:.15em;font-weight:600;color:rgba(255,255,255,.95);text-decoration:underline 2px #e5e5e5;text-underline-offset:3px;text-shadow:0 1px 3px #000}
  .hud .ttl p{margin:2px 0 0;font-size:9px;letter-spacing:.3em;opacity:.55}
  .hud .ttl em{display:block;margin-top:2px;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.05em}
  .hud .pill{padding:2px 11px;font-size:11px;font-weight:400;border:1px solid rgba(255,255,255,.7);box-shadow:0 1px 2px #0003;line-height:1.25}
  .hud .hp{left:16px;top:64px}.hud .hp b{font-weight:600}.hud .hp small{color:#94a3b8;margin-left:3px}
  .hud .sv{right:16px;top:64px;font-weight:400}.hud .sv b{font-weight:600}.hud .sv small{display:block;color:#64748b;font-size:10px;margin-top:2px}
  .hud .tl{left:8px;top:104px;flex-wrap:wrap;width:104px;gap:8px}
  .hud .tl button{height:40px;width:40px;min-width:0;padding:0;border-radius:50%;border:1px solid rgba(251,191,36,.4);background:rgba(0,0,0,.7);color:#fde68a;font-size:18px;font-weight:400}
  .hud .tl button.x{width:auto;height:29px;border-radius:999px;padding:0 12px;font:12px system-ui;background:rgba(0,0,0,.75);margin-top:0}
  .hud .bot{inset:0;padding:0;background:none}
  .hud .ub{position:absolute;left:8px;right:8px;bottom:calc(var(--dock,133px) + 46px);height:16px;margin:0;border-radius:8px;border:1px solid rgba(251,191,36,.35);background:rgba(0,0,0,.65)}
  .hud .ub i{background:linear-gradient(90deg,#f59e0b,#ef4444)}.hud .ub.full i{background:linear-gradient(90deg,#fbbf24,#fde68a)}
  .hud .ub span{font:600 10px/16px system-ui;color:#fff;text-shadow:0 1px 2px #000}
  .hud .strip{position:absolute;left:8px;right:8px;bottom:calc(var(--dock,133px) + 6px);padding:0;gap:4px}
  .hud .strip .lab{height:36px;padding:0 10px;border:1px solid rgba(251,191,36,.45);background:rgba(0,0,0,.75);font:12px system-ui;font-weight:400;color:#fde68a}
  .hud .ic{width:36px;height:36px;border:1px solid rgba(251,191,36,.45);background:rgba(0,0,0,.75);font-size:17px}
  .hud .ic.rdy{box-shadow:0 0 0 2px #fbbf24,0 0 12px 3px rgba(251,191,36,.85)}
  .hud .cards{position:absolute;left:0;right:0;bottom:0;margin:0;display:grid;grid-template-columns:repeat(var(--cols,10),122px);justify-content:center;grid-auto-rows:58px;gap:5px;padding:6px;background:linear-gradient(#160d20,#0b0710);border-top:1px solid rgba(251,191,36,.3);font:600 10px "Trebuchet MS",system-ui,sans-serif;pointer-events:auto}
  .hud .cd{display:block;padding:3px 5px;border:1px solid rgba(217,164,65,.45);border-radius:8px;background:linear-gradient(rgba(32,38,54,.95),rgba(14,17,26,.95));overflow:hidden}
  .hud .cd.rdy{box-shadow:0 0 0 1px #fbbf24,0 0 10px rgba(251,191,36,.7)}
  .hud .cd .n{font-size:10px;line-height:12px;color:#f1e8d0;padding:0}.hud .cd .n b{color:#fbbf24;margin-right:3px;font-weight:600}
  .hud .bar{position:relative;height:9px;margin-top:2px;border-radius:3px;background:#05070b;border:1px solid #2a3140;overflow:hidden}
  .hud .bar i{position:absolute;left:0;top:0;bottom:0;transition:width .15s}.hud .bar span{position:absolute;inset:0;text-align:center;font-size:7px;line-height:9px;color:#fff;text-shadow:0 0 2px #000}
  .hud .hpb i{background:linear-gradient(#5be26a,#1f9a35)}.hud .hpb.low i{background:linear-gradient(#ff7a6a,#c42a1a)}
  .hud .mpb i{background:linear-gradient(#5aa8ff,#1f55c8)}.hud .rgb i{background:linear-gradient(#ffb347,#e0480a)}
  .hud .bar.en{opacity:.4}.hud .bar.en i{background:linear-gradient(#ffe066,#d19a10)}
  .hud .cd .ult{right:3px;top:1px;font:800 8px/11px system-ui;color:#1a1204;background:#fbbf24;border-radius:6px;padding:0 4px}
  .hud .lay{position:absolute;right:8px;bottom:calc(var(--dock,133px) + 6px);display:flex;align-items:center;gap:6px;border-radius:999px;background:#fff;border:1px solid rgba(255,255,255,.7);box-shadow:0 1px 2px #0003;padding:6px 10px;color:#334155;cursor:pointer;pointer-events:auto;font-size:13px;line-height:1}
  .hud .abp{position:absolute;left:0;right:0;bottom:calc(var(--dock,133px) + 66px);display:none;grid-template-columns:repeat(var(--cols,10),122px);justify-content:center;gap:5px;pointer-events:none}.hud .abp.on{display:grid}
  .hud .abp div{background:#fff;color:#334155;border-radius:8px;padding:5px 7px;font:10px/1.35 system-ui;box-shadow:0 1px 4px #0005;max-height:96px;overflow:hidden}.hud .abp b{display:block;color:#0f172a;font-size:11px;margin-bottom:2px}.hud .abp span{display:flex;justify-content:space-between;gap:4px}.hud .abp span i{font-style:normal;color:#64748b}
  .hud .abp.sm{justify-content:start;overflow-x:auto;pointer-events:auto;padding:0 6px}
  @media (max-width:900px),(max-height:500px){.hud .strip{overflow-x:auto;right:56px;flex-wrap:nowrap}.hud .strip::-webkit-scrollbar{display:none}}
  .hud .cards.sm{justify-content:start;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch}
  .hud .cards.sm::-webkit-scrollbar{display:none}
  @media (max-width:600px){.hud .ttl{top:104px}}`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  window.Hud = function (host, CLASSES, api) {
    api = api || {};
    const root = document.createElement('div'); root.className = 'hud';
    root.innerHTML = '<div class="top"></div><div class="bb"><i></i></div><div class="pill hp"></div><div class="ttl"><h1></h1><p></p><em></em></div><div class="pill sv"></div><div class="tl"><button data-a="fs" title="Schermo intero (F)">⛶</button><button data-a="set" title="Opzioni">⚙</button><button class="x" data-a="exit" title="Esci dalla battaglia">↩ Esci</button></div><div class="tr"><button data-a="keys" title="Comandi da tastiera">⌨</button><button data-a="sets" title="Set di equipaggiamento">📚</button><button data-a="pause" title="Pausa / riprendi">⏸</button><button data-a="s1" title="Velocità normale">1×</button><button data-a="s2" title="Velocità doppia">2×</button><button data-a="help" title="Aiuto">?</button></div><div class="pan"><div class="panc"></div></div><div class="end"><div class="endc"></div></div><div class="abp"></div><div class="lay" title="Abilità degli eroi"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg></div><div class="bot"><div class="ub"><i></i><span></span></div><div class="strip"><button class="lab">⚡ Ultimate</button></div><div class="cards"></div></div>';
    host.appendChild(root);
    const q = (s) => root.querySelector(s), bb = q('.bb i'), hp = q('.hp'), h1 = q('h1'), sub = q('.ttl p'), dif = q('.ttl em'), sv = q('.sv'), strip = q('.strip'), lab = q('.lab'), ubar = q('.ub i'), utxt = q('.ub span'), cards = q('.cards');
    let sig = '', els = [], prevHp = [], mode = 'ult', cur = null, heroes = [], stats = null, ph = 0, endNote = '', endShown = null;
    const banner = (t) => { const d = document.createElement('div'); d.className = 'ban'; d.textContent = t; root.appendChild(d); setTimeout(() => (d.style.opacity = 0), 1800); setTimeout(() => d.remove(), 2500); };
    const fresh = (eng) => { stats = { eng, dmg: {}, heal: {}, taken: {}, prev: {}, names: {} }; ph = 0; endShown = null; endNote = ''; q('.end').classList.remove('on'); };
    const spd = host.ownerDocument.getElementById('sp'), pbtn = q('[data-a=pause]');
    pbtn.onclick = () => { window.__paused = !window.__paused; pbtn.textContent = window.__paused ? '▶' : '⏸'; pbtn.classList.toggle('on', !!window.__paused); };
    const setSpd = (v) => { if (spd) { spd.value = String(v); } sync(); };
    const sync = () => { q('[data-a=s1]').classList.toggle('on', !spd || spd.value === '1'); q('[data-a=s2]').classList.toggle('on', !!spd && spd.value === '2'); };
    const togglePause = () => pbtn.onclick(), pan = q('.pan'), panc = q('.panc');
    const open = (html) => { panc.innerHTML = html + '<br><button>Chiudi</button>'; panc.querySelector('button').onclick = () => pan.classList.remove('on'); pan.classList.add('on'); }, closeP = () => pan.classList.remove('on');
    pan.onclick = (e) => { if (e.target === pan) closeP(); };
    const fs = () => { const d = host.ownerDocument; if (d.fullscreenElement) d.exitFullscreen(); else if (host.requestFullscreen) host.requestFullscreen(); };
    const keysHtml = '<h3>Tasti</h3><p><kbd>Spazio</kbd> pausa · <kbd>1</kbd> <kbd>2</kbd> velocità · <kbd>F</kbd> schermo intero · <kbd>N</kbd> nomi eroi · <kbd>R</kbd> rotazione camera · <kbd>U</kbd> ultimate di tutti gli eroi pronti · <kbd>Esc</kbd> chiudi pannello.</p><p>Camera: trascina per ruotare, rotella/pizzica per zoom, doppio clic per rotazione automatica.</p>';
    const helpHtml = '<h3>Come leggere lo schermo</h3><p>In alto la barra rossa è la vita del boss. A sinistra il suo valore, al centro nome e difficoltà, a destra sopravvissuti e tempo.</p><p>Sotto: la fila di icone sono gli <b>ultimate</b> (ricarica 8 s); tocca un\'icona carica per lanciare l\'ultima abilità di quell\'eroe. Il pulsante a sinistra passa da <b>Ultimate</b> a <b>Provoca</b> (il boss punta l\'eroe scelto per 4 s).</p><p>Le carte mostrano livello, nome, vita (verde) e mana (blu) o furia (arancione). I cerchi colorati a terra sono attacchi in arrivo: esci dall\'area.</p>';
    const setHtml = () => '<h3>Impostazioni</h3>' + [['names', 'Etichette "Classe - Razza"', (api.get && api.get('names'))], ['hm', 'Modelli eroe originali', window.__heroModels !== false], ['bm', 'Modelli boss originali', window.__bossModels !== false], ['auto', 'Rotazione automatica camera', (api.get && api.get('auto'))]].map(([k, t, v]) => '<label><input type="checkbox" data-k="' + k + '"' + (v ? ' checked' : '') + '> ' + t + '</label>').join('');
    const openSets = () => { const d = host.ownerDocument; let o = d.getElementById('dba-sets'); if (o) { o.remove(); return; } const L = { attack: 'Attacco', defense: 'Difesa', maxHp: 'PV', mana: 'Mana', manaRegen: 'Rigen. mana', atkSpd: 'Vel. attacco' }, fmt = (b) => Object.keys(b).map((k) => '+' + Math.round(b[k] * 100) + '% ' + L[k]).join(', ');
      o = d.createElement('div'); o.id = 'dba-sets'; o.style.cssText = 'position:fixed;inset:0;z-index:10030;background:rgba(0,0,0,.82);display:flex;align-items:center;justify-content:center;padding:14px';
      let s = '<div style="max-width:420px;width:100%;max-height:88vh;overflow:auto;background:#0b0710;border:1px solid rgba(251,191,36,.5);border-radius:16px;padding:14px;color:#e2e8f0;font:13px/1.45 system-ui"><div style="font-size:17px;font-weight:700;color:#fde68a">📚 Set di equipaggiamento</div><div style="opacity:.8;margin:6px 0 10px">Alcuni pezzi (testa, spalle, corpo, guanti, pantaloni) appartengono a un set. Equipaggiane 2 o 4 sullo stesso eroe per attivare i bonus. Si trovano nel bottino, anche con rarità bassa; il set del Drago solo con Oro o Rosso.</div>';
      (window.DBA_SETS || []).forEach((S) => { s += '<div style="margin:8px 0;padding:8px 10px;border:1px solid rgba(255,255,255,.12);border-radius:10px"><b style="color:#fbbf24">' + S.ic + ' Set ' + S.n.replace(/^(della|del) /, '') + (S.rare ? ' <span style="font-weight:400;opacity:.7">(raro)</span>' : '') + '</b><br><span style="opacity:.8">2 pezzi:</span> ' + fmt(S.b2) + '<br><span style="opacity:.8">4 pezzi:</span> + ' + fmt(S.b3) + '</div>'; });
      s += '<button style="width:100%;margin-top:8px;padding:10px;border-radius:10px;background:#d97706;color:#fff;font-weight:600">Chiudi</button></div>'; o.innerHTML = s; o.querySelector('button').onclick = () => o.remove(); o.onclick = (e) => { if (e.target === o) o.remove(); }; d.body.appendChild(o); };
    q('[data-a=sets]').onclick = openSets;
    q('[data-a=exit]').onclick = () => { if (!cur || cur.over) return; if (confirm('Uscire dalla battaglia?')) { cur.over = true; cur.outcome = 'defeat'; } };
    const abp = q('.abp'), lay = q('.lay'); let abT = 0;
    const abFill = () => { if (!cur) return; abp.innerHTML = cur.heroes.map((h) => '<div><b>' + (h.icon || '') + ' ' + (h.name || '') + '</b>' + (h.abilities || []).slice(0, 4).map((a) => '<span>' + a.name + '<i>' + ((a._ct > 0 ? a._ct : a.cd) || 0).toFixed(a.cd < 10 ? 1 : 0).replace(/\.0$/, '') + 's</i></span>').join('') + '</div>').join(''); };
    lay.onclick = () => { abp.classList.toggle('on'); lay.style.background = abp.classList.contains('on') ? '#fde68a' : '#fff'; abFill(); };
    setInterval(() => { if (abp.classList.contains('on') && host.offsetParent !== null) abFill(); }, 500);
    q('[data-a=fs]').onclick = fs; q('[data-a=keys]').onclick = () => open(keysHtml); q('[data-a=help]').onclick = () => open(helpHtml);
    q('[data-a=set]').onclick = () => { open(setHtml()); panc.querySelectorAll('input').forEach((i) => { i.onchange = () => { const k = i.dataset.k; if (k === 'hm') window.__heroModels = i.checked; else if (k === 'bm') window.__bossModels = i.checked; else if (api.set) api.set(k, i.checked); }; }); };
    q('[data-a=s1]').onclick = () => setSpd(1); q('[data-a=s2]').onclick = () => setSpd(2); sync();
    host.ownerDocument.addEventListener('keydown', (e) => { if (e.target && /INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return; if (host.offsetParent === null) return; { const dg = document.getElementById('dbaDG'); if (dg && dg.childElementCount && getComputedStyle(dg).display !== 'none') return; /* mondo/dungeon aperto: i tasti sono suoi (F = interagisci, ecc.) */ } const k = e.key; const CT = window.__dbaCtl; if (CT && CT.on && (k === ' ' || (k >= '1' && k <= '9') || k === 'u' || k === 'U')) return; /* con 1 eroe controllato questi tasti sono abilità/ult/schivata */
      if (k === ' ') { e.preventDefault(); togglePause(); } else if (k === '1') setSpd(1); else if (k === '2') setSpd(2); else if (k === 'f' || k === 'F') fs(); else if (k === 'n' || k === 'N') api.set && api.set('names', !(api.get && api.get('names'))); else if (k === 'r' || k === 'R') api.set && api.set('auto', !(api.get && api.get('auto')));
      else if (k === 'u' || k === 'U') { if (cur) heroes.forEach((_, i) => { if (DBAEngine.ultimateProgress(cur, heroes[i]) >= 1 && heroes[i].alive) press(i); }); } else if (k === 'Escape') closeP(); });
    const showEnd = (eng) => { const win = eng.outcome === 'victory', ids = Object.keys(stats.names).sort((a, b) => (stats.dmg[b] || 0) - (stats.dmg[a] || 0)), mx = (o) => Math.max(0, ...ids.map((i) => o[i] || 0)), M = { d: mx(stats.dmg), h: mx(stats.heal), t: mx(stats.taken) };
      const c = (o, i, k) => { const v = Math.round(o[i] || 0); return '<td>' + (v && v === Math.round(M[k]) ? '<b>' + v + '</b>' : v) + '</td>'; };
      const e = q('.end'), cc = q('.endc'); cc.innerHTML = '<h2>' + (win ? 'Vittoria!' : 'Sconfitta') + '</h2><p>' + Math.floor(eng.time) + ' s · ' + eng.heroes.filter((h) => h.alive).length + '/' + eng.heroes.length + ' sopravvissuti <span class="note"></span></p><table><tr><th>Eroe</th><th>Danno</th><th>Cure</th><th>Subito</th></tr>' + ids.map((i) => '<tr><td>' + stats.names[i].i + ' ' + stats.names[i].n + '</td>' + c(stats.dmg, i, 'd') + c(stats.heal, i, 'h') + c(stats.taken, i, 't') + '</tr>').join('') + '</table><button>Continua</button>';
      cc.querySelector('button').onclick = () => { const g = host.ownerDocument.getElementById('go'); if (g) g.click(); }; e.classList.add('on'); };
    const flt = (i, t) => { const e = els[i]; if (!e) return; const r = e.ic.getBoundingClientRect(), h = root.getBoundingClientRect(), d = document.createElement('div'); d.className = 'flt'; d.textContent = t; d.style.left = (r.left - h.left + r.width / 2) + 'px'; d.style.top = (r.top - h.top - 6) + 'px'; root.appendChild(d); setTimeout(() => d.remove(), 1800); };
    const press = (i) => { const h = heroes[i]; if (!cur || !h) return; if (mode === 'taunt') { if (DBAEngine.ultimateTaunt(cur, h)) flt(i, 'Il boss punta ' + (h.name || '')); return; } const ab = (h.abilities || [])[(h.abilities || []).length - 1], m = DBAEngine.ultimateCast(cur, h); flt(i, m || (ab && ab.name) || 'Ultimate'); };
    lab.onclick = () => { mode = mode === 'ult' ? 'taunt' : 'ult'; };
    const pct = (a, b) => Math.max(0, Math.min(100, b ? a / b * 100 : 0)) + '%';
    return {
      /** da chiamare con gli eventi di ogni step: accumula danno/cure per eroe */
      feed(eng, evs) { if (!stats || stats.eng !== eng) fresh(eng); const by = {}; eng.heroes.forEach((h) => { by[h.id] = h; stats.names[h.id] = { n: h.name, i: h.icon }; const p = stats.prev[h.id]; if (p != null && h.hp < p) stats.taken[h.id] = (stats.taken[h.id] || 0) + (p - h.hp); stats.prev[h.id] = h.hp; });
        for (const e of evs || []) if (e && e.who && by[e.who] && e.val) { if (e.t === 'dmg') stats.dmg[e.who] = (stats.dmg[e.who] || 0) + e.val; else if (e.t === 'heal') stats.heal[e.who] = (stats.heal[e.who] || 0) + e.val; } },
      note(t) { const n = root.querySelector('.note'); endNote = t; if (n) n.textContent = '· ' + t; },
      el: root, show(v) { root.style.display = v ? '' : 'none'; },
      update(eng, extra) {
        const sw = (el, v) => { if (el._w !== v) { el._w = v; el.style.width = v; } }, st = (el, v) => { if (el._t !== v) { el._t = v; el.textContent = v; } }, sh = (el, v) => { if (el._h !== v) { el._h = v; el.innerHTML = v; } }, sbg = (el, v) => { if (el._b !== v) { el._b = v; el.style.background = v; } };
        if (!stats || stats.eng !== eng) fresh(eng); cur = eng; heroes = eng.heroes; const b = eng.boss, hs = eng.heroes, alive = hs.filter((h) => h.alive).length;
        sw(bb, pct(b.hp, b.maxHp)); sh(hp, '<b>' + Math.max(0, Math.round(b.hp)) + ' / ' + Math.round(b.maxHp) + '</b><small>HP</small>');
        const dl = ((extra && extra.difficulty) || b.difficultyLabel || b.difficultyName || '').toString(), RK = { Facile: ['⚪️', '#e5e5e5'], Normale: ['🔵', '#3b82f6'], Medio: ['🟣', '#a855f7'], Difficile: ['🟡', '#fbbf24'], Impossibile: ['🔴', '#ef4444'] }[dl] || ['⚪️', '#e5e5e5']; sh(h1, '<span>' + RK[0] + '</span>' + (b.name || '') + '<span>' + RK[0] + '</span>'); h1.style.textDecorationColor = RK[1]; st(sub, b.title || ''); st(dif, dl); dif.style.color = b.difficultyColor || RK[1];
        sh(sv, 'Sopravvissuti: <b>' + alive + ' / ' + hs.length + '</b><small>🕒 ' + Math.floor(eng.time) + 's</small>');
        if (b._p2 && ph < 2) { ph = 2; banner('FASE 2 · il boss accelera!'); } if (b.enraged && ph < 3) { ph = 3; banner('FURIA · attacco +50%!'); } if (b._p3 && ph < 4) { ph = 4; banner('FASE 3 · attacco finale!'); }
        if (eng.over && endShown !== eng) { endShown = eng; showEnd(eng); if (endNote) this.note(endNote); }
        const s = hs.map((h) => h.id || h.name).join('|');
        if (s !== sig) { sig = s; cards.innerHTML = ''; strip.querySelectorAll('.ic').forEach((e) => e.remove()); prevHp = [];
          els = hs.map((h) => { const c = document.createElement('div'); c.className = 'cd';
            c.innerHTML = '<div class="n"><b>' + (h.level || h.lv || 1) + '</b>' + (h.name || h.classKey) + '</div><span class="ult">ULT</span><div class="bar hpb"><i></i><span></span></div><div class="bar ' + (h.useEn ? 'rgb' : 'mpb') + '"><i></i><span></span></div><div class="bar en"><i style="width:0"></i><span>Liv. ' + (h.level || h.lv || 1) + '</span></div>'; cards.appendChild(c);
            const ic = document.createElement('span'); ic.className = 'ic'; ic.textContent = h.icon || (CLASSES[h.classKey] && CLASSES[h.classKey].icon) || '🙂'; ic.title = h.name || ''; ic.onclick = () => press(hs.indexOf(h)); strip.appendChild(ic);
            return { c, ic, hp: c.querySelector('.hpb i'), mp: c.querySelector('.mpb i, .rgb i'), hpt: c.querySelector('.hpb span'), mpt: c.querySelector('.mpb span, .rgb span'), hpb: c.querySelector('.hpb') }; });
          const n = hs.length, sm = innerWidth < 900 || innerHeight < 500, cols = sm ? n : n <= 5 ? n : n <= 10 ? Math.min(n, 5) : 10, rows = sm ? 1 : Math.ceil(n / cols); cards.classList.toggle('sm', sm); q('.abp').classList.toggle('sm', sm); cards.style.setProperty('--cols', Math.max(1, cols)); host.style.setProperty('--dock', (rows * 58 + (rows - 1) * 5 + 13) + 'px'); try { document.documentElement.style.setProperty('--dbaCtlB', (rows * 58 + (rows - 1) * 5 + 13 + 70) + 'px'); } catch (e) {} }
        let rd = 0, al = 0;
        hs.forEach((h, i) => { const e = els[i]; if (!e) return; if (h.alive) { al++; const p = DBAEngine.ultimateProgress(eng, h), ok = p >= 1; if (ok) rd++; e.c.classList.toggle('rdy', ok); e.ic.classList.toggle('rdy', ok); sbg(e.ic, ok ? '' : 'linear-gradient(to top,rgba(251,191,36,.55) ' + Math.round(p * 100) + '%,rgba(16,19,28,.95) ' + Math.round(p * 100) + '%)'); const ab = (h.abilities || [])[(h.abilities || []).length - 1]; { const tt = (h.name || '') + ' · ' + (ab ? ab.name : 'Ultimate') + (ok ? ' · ULTIMATE PRONTA' : ' · pronta tra ' + Math.ceil(DBAEngine.ULT_COOLDOWN * (1 - p)) + 's'); if (e.ic._tt !== tt) { e.ic._tt = tt; e.ic.title = tt; } } } else e.c.classList.remove('rdy'); e.c.classList.toggle('dead', !h.alive); e.ic.classList.toggle('dead', !h.alive);
          sw(e.hp, pct(h.hp, h.maxHp)); sw(e.mp, pct(h.mana, h.maxMana)); st(e.hpt, Math.max(0, Math.round(h.hp)) + ' / ' + Math.round(h.maxHp)); st(e.mpt, Math.round(h.mana) + ' / ' + Math.round(h.maxMana)); e.hpb.classList.toggle('low', h.hp < h.maxHp * .3);
          if (prevHp[i] !== undefined && h.hp < prevHp[i] - 1) { e.c.classList.remove('hit'); void e.c.offsetWidth; e.c.classList.add('hit'); } prevHp[i] = h.hp; });
        st(lab, mode === 'ult' ? '⚡ Ultimate ' + rd + '/' + al : '🎯 Provoca');
        sw(ubar, (al ? rd / al * 100 : 0) + '%'); ubar.parentNode.classList.toggle('full', al > 0 && rd === al); st(utxt, rd ? '⚡ ' + rd + '/' + al + " ULTIMATE PRONTE · tocca l'icona di un eroe" : 'Ultimate in ricarica (' + DBAEngine.ULT_COOLDOWN + 's per eroe)');
      },
    };
  };
})();
