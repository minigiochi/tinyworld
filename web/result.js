// Schermata risultato (porting di result/y$/x$ dell'originale): VITTORIA/Sconfitta, carte Tempo/Sopravvissuti/Valutazione,
// "Saliti di livello" con nuove abilità, carte XP del party, "Bottino del Drago" (Raccogli/Scarta) e pulsanti finali.
(function () {
  var RAR = { bianco: ['#94a3b8', 'Bianco'], blu: ['#3b82f6', 'Blu'], viola: ['#a855f7', 'Viola'], oro: ['#f59e0b', 'Oro'], rosso: ['#ef4444', 'Rosso'] };
  var css = '#dbaRes{position:fixed;inset:0;z-index:9998;background:rgba(8,5,14,.985);overflow-y:auto;display:flex;justify-content:center;padding:18px 12px;font-family:system-ui,sans-serif;color:#e2e8f0}' +
    '#dbaRes .w{width:100%;max-width:672px;margin:auto;text-align:center;display:flex;flex-direction:column;align-items:center;gap:16px}' +
    '#dbaRes .hero{width:100%;padding:22px 16px 18px;border-radius:20px;border:1px solid rgba(251,191,36,.45);background:radial-gradient(120% 140% at 50% 0%,rgba(251,191,36,.22),rgba(15,10,20,.92) 62%);box-shadow:0 0 40px rgba(251,191,36,.18) inset,0 10px 30px rgba(0,0,0,.45);display:flex;flex-direction:column;align-items:center;gap:10px}' +
    '#dbaRes .hero.lose{border-color:rgba(239,68,68,.4);background:radial-gradient(120% 140% at 50% 0%,rgba(239,68,68,.2),rgba(15,10,20,.92) 62%);box-shadow:0 0 40px rgba(239,68,68,.15) inset}' +
    '#dbaRes h1{margin:0;font:700 40px Cinzel,Georgia,serif;letter-spacing:3px;background:linear-gradient(180deg,#fff3c4,#f5b82e 55%,#d97706);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 2px 6px rgba(0,0,0,.6))}' +
    '#dbaRes h1.lose{background:none;color:#fca5a5}#dbaRes .tr{font-size:56px;line-height:1;filter:drop-shadow(0 0 14px rgba(251,191,36,.5))}' +
    '#dbaRes p{margin:0;color:#e7d9b0;font-size:14px}#dbaRes .tip{display:block;margin-top:8px;color:rgba(253,230,138,.8)}' +
    '#dbaRes .cd{display:flex;gap:8px;width:100%;max-width:520px}#dbaRes .cd div{flex:1 1 90px;padding:8px 6px;border-radius:12px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1)}' +
    '#dbaRes .cd b{display:block;font-size:15px;color:#fde68a}#dbaRes .cd small{font-size:10px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px}#dbaRes .cd span{font-size:18px}' +
    '#dbaRes .sec{width:100%;text-align:left;display:flex;flex-direction:column;gap:8px}#dbaRes h3{margin:0;text-align:center;color:#fcd34d;font:600 18px Cinzel,Georgia,serif}' +
    '#dbaRes .lu{display:flex;gap:12px;align-items:center;border-radius:12px;border:1px solid rgba(245,158,11,.3);background:rgba(245,158,11,.05);padding:10px 16px}' +
    '#dbaRes .lu .ic{font-size:24px}#dbaRes .lu .nm{font:600 15px Cinzel,Georgia,serif;color:#fef3c7}#dbaRes .lu .gn{font-size:12px;color:#6ee7b7}' +
    '#dbaRes .ch{display:inline-block;margin:4px 4px 0 0;font-size:10px;padding:2px 6px;border-radius:4px;background:rgba(139,92,246,.2);border:1px solid rgba(167,139,250,.4);color:#ddd6fe}#dbaRes .ch i{display:block;font-style:normal;font-size:9px;opacity:.8}' +
    '#dbaRes .pg{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:8px}' +
    '#dbaRes .pc{display:flex;align-items:center;gap:8px;border-radius:8px;padding:10px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04)}#dbaRes .pc .ic{font-size:20px}#dbaRes .pc .m{flex:1;min-width:0}' +
    '#dbaRes .pc .r1{display:flex;justify-content:space-between;gap:8px;font:600 14px Cinzel,Georgia,serif;color:#fff}#dbaRes .pc .r1 small{font:10px system-ui;color:#fde68a}' +
    '#dbaRes .xb{height:6px;border-radius:6px;background:rgba(0,0,0,.4);overflow:hidden;margin:4px 0 2px}#dbaRes .xb i{display:block;height:100%;background:rgba(251,191,36,.7)}#dbaRes .pc .x{font-size:9px;color:#94a3b8}#dbaRes .pc .st{text-align:right;font-size:10px;color:rgba(203,213,225,.7);line-height:1.3}' +
    '#dbaRes .lt{margin-top:8px;width:100%}#dbaRes .lt .ttl{color:rgba(252,211,77,.8);font-size:10px;text-transform:uppercase;letter-spacing:.2em;margin-bottom:10px}#dbaRes .lg{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:8px}' +
    '#dbaRes .it{text-align:left;border-radius:12px;border:1px solid;padding:10px}#dbaRes .it .a{display:flex;gap:8px;align-items:center;margin-bottom:4px}#dbaRes .it .a span{font-size:22px}#dbaRes .it b{display:block;font-size:12px;color:#fff}#dbaRes .it small{font-size:10px;opacity:.8}#dbaRes .it .s{font-size:12px;font-weight:600;color:#6ee7b7}#dbaRes .it .o{font-size:9px;color:#64748b;margin-top:4px}' +
    '#dbaRes .bt{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;width:100%}#dbaRes button{cursor:pointer;font:inherit;border-radius:10px;padding:10px 18px;font-size:14px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.05);color:#fffbeb}#dbaRes button:hover{background:rgba(255,255,255,.1)}' +
    '#dbaRes button.pr{border:0;color:#fff;font:600 15px Cinzel,Georgia,serif;background:linear-gradient(90deg,#f59e0b,#dc2626)}#dbaRes button.pr:hover{filter:brightness(1.1)}#dbaRes .lt .bt button{flex:1}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var E = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }); };
  function close() { var e = document.getElementById('dbaRes'); if (e) e.remove(); }
  // o: {win, bossName, time, alive, total, summary:[{name,icon,level,classKey,gains}], party:[{icon,name,level,xp,xpNeed,attack,maxHp}], loot:[items], onCollect, onNext, onInv, onNew, onRetry, eff(item)}
  function show(o) {
    close();
    var d = document.createElement('div'); d.id = 'dbaRes';
    var h = '<div class="w">';
    if (o.win) {
      var stars = o.alive === o.total ? 3 : o.alive / o.total >= .5 ? 2 : 1, sec = Math.floor(o.time || 0);
      h += '<div class="hero"><div class="tr">🏆</div><h1>VITTORIA!</h1><p>' + E(o.bossName) + ' è stato sconfitto</p><div class="cd"><div><span>⏱️</span><b>' + Math.floor(sec / 60) + ':' + ('0' + sec % 60).slice(-2) + '</b><small>Tempo</small></div><div><span>🛡️</span><b>' + o.alive + ' / ' + o.total + '</b><small>Sopravvissuti</small></div><div><span>⭐</span><b>' + '★'.repeat(stars) + '☆'.repeat(3 - stars) + '</b><small>Valutazione</small></div></div></div>';
      h += '<div class="sec">';
      if (o.summary && o.summary.length) {
        h += '<h3>⬆ Saliti di livello</h3>';
        o.summary.forEach(function (t) {
          var nw = o.newAbil ? o.newAbil(t) : [];
          h += '<div class="lu"><span class="ic">' + E(t.icon) + '</span><div style="flex:1;min-width:0"><div class="nm">' + E(t.name) + ' → Liv. ' + t.level + '</div><div class="gn">+' + t.gains.maxHp + ' HP, +' + t.gains.attack + ' ATK' + (t.gains.defense ? ', +' + t.gains.defense + ' DEF' : '') + '</div>' +
            (nw.length ? '<div>' + nw.map(function (c) { return '<span class="ch">✨ ' + E(c.name) + (c.desc ? '<i>' + E(c.desc) + '</i>' : '') + '</span>'; }).join('') + '</div>' : '') + '</div></div>';
        });
      }
      h += '<div class="pg">' + (o.party || []).map(function (t) { var p = Math.min(100, (t.xp || 0) / t.xpNeed * 100); return '<div class="pc"><span class="ic">' + E(t.icon) + '</span><div class="m"><div class="r1"><span>' + E(t.name) + '</span><small>Lv.' + t.level + '</small></div><div class="xb"><i style="width:' + p + '%"></i></div><div class="x">XP ' + (t.xp || 0) + '/' + t.xpNeed + '</div></div><div class="st"><div>ATK ' + t.attack + '</div><div>HP ' + t.maxHp + '</div></div></div>'; }).join('') + '</div></div>';
      if (o.loot && o.loot.length) {
        h += '<div class="lt"><div class="ttl">Bottino del Drago</div><div class="lg">' + o.loot.map(function (i) {
          var r = RAR[i.rarity] || RAR.bianco, sx = o.eff ? o.eff(i) : (i.stats || {}), a = [];
          if (sx.attack) a.push('+' + sx.attack + ' ATK'); if (sx.defense) a.push('+' + sx.defense + ' DEF'); if (sx.maxHp) a.push('+' + sx.maxHp + ' HP');
          return '<div class="it" style="border-color:' + r[0] + ';background:' + r[0] + '1a"><div class="a"><span>' + E(i.icon) + '</span><div style="min-width:0"><b>' + E(i.name) + '</b><small style="color:' + r[0] + '">' + r[1] + ' · ' + E(i.className) + '</small></div></div><div class="s">' + a.join(' · ') + '</div><div class="o">Solo: ' + E(i.className) + '</div></div>';
        }).join('') + '</div><div class="bt" style="margin-top:12px"><button class="pr" data-a="col">Raccogli nell\'inventario</button><button data-a="dis" style="flex:0 0 auto">Scarta</button></div></div>';
      }
      h += '<div class="bt"><button class="pr" data-a="next">Prossima battaglia</button><button data-a="inv">📦 Inventario</button><button data-a="new">Nuovo party</button></div>';
    } else {
      h += '<div class="hero lose"><div class="tr" style="filter:drop-shadow(0 0 14px rgba(239,68,68,.5))">💀</div><h1 class="lose">Sconfitta</h1><p>' + E(o.bossName) + ' ha annientato la tua compagnia dopo ' + Math.floor(o.time || 0) + 's.<span class="tip">Consiglio: porta almeno 1 tank e 1 healer e più eroi. Il rango del boss (Bianco→Rosso) è casuale.</span></p><div class="bt" style="margin-top:10px"><button class="pr" data-a="retry">Riprova</button><button data-a="new">Nuovo party</button></div></div>';
    }
    h += '<div class="bt"><button data-a="stat">Statistiche battaglia</button></div></div>';
    d.innerHTML = h; document.body.appendChild(d);
    d.addEventListener('click', function (ev) {
      var b = ev.target.closest('button[data-a]'); if (!b) return; var a = b.getAttribute('data-a');
      if (a === 'col') { try { o.onCollect && o.onCollect(); } catch (e) { } var l = d.querySelector('.lt'); if (l) l.innerHTML = '<div class="ttl">Oggetti raccolti nell\'inventario ✓</div>'; return; }
      if (a === 'dis') { var l2 = d.querySelector('.lt'); if (l2) l2.remove(); return; }
      if (a === 'stat') { close(); return; }
      close();
      if (a === 'next' && o.onNext) o.onNext(); else if (a === 'retry' && o.onRetry) o.onRetry(); else if (a === 'inv' && o.onInv) { o.onInv(); } else if (a === 'new' && o.onNew) o.onNew();
    });
  }
  window.DBA_RESULT = { show: show, close: close };
})();
