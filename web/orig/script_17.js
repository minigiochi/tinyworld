/* v169: impostazioni grafica/audio dentro l'ingranaggio */

window.__dbaBK=(function(){var N=2;
 function keys(){var r=[];try{for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);if(/^dba/.test(k)&&!/^dba_bk_/.test(k))r.push(k)}}catch(e){}return r}
 function snap(){var o={};keys().forEach(function(k){try{o[k]=localStorage.getItem(k)}catch(e){}});return o}
 function list(){var r=[];for(var i=0;i<N;i++){try{var v=localStorage.getItem('dba_bk_'+i);if(v){var j=JSON.parse(v);r.push({i:i,t:j.t,n:Object.keys(j.d||{}).length})}}catch(e){}}return r.sort(function(a,b){return b.t-a.t})}
 function make(){try{var d=snap();if(!Object.keys(d).length)return false;var l=list(),slot=l.length<N?[0,1].filter(function(x){return!l.some(function(y){return y.i===x})})[0]:l[l.length-1].i;
  localStorage.setItem('dba_bk_'+slot,JSON.stringify({t:Date.now(),d:d}));return true}catch(e){return false}}
 function restore(i){try{var j=JSON.parse(localStorage.getItem('dba_bk_'+i));if(!j||!j.d)return false;keys().forEach(function(k){localStorage.removeItem(k)});Object.keys(j.d).forEach(function(k){localStorage.setItem(k,j.d[k])});return true}catch(e){return false}}
 function exp(){var d=snap(),b=new Blob([JSON.stringify({game:'DragonsBaneArena',v:1,t:Date.now(),d:d})],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(b);var D=new Date();a.download='DragonsBane_salvataggio_'+D.getFullYear()+('0'+(D.getMonth()+1)).slice(-2)+('0'+D.getDate()).slice(-2)+'.json';document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},500);return Object.keys(d).length}
 function imp(txt){var j;try{j=JSON.parse(txt)}catch(e){return'File non valido (non è un salvataggio).'}
  if(!j||j.game!=='DragonsBaneArena'||!j.d||typeof j.d!=='object')return'File non valido (non è un salvataggio di Tiny World).';
  var ks=Object.keys(j.d).filter(function(k){return/^dba/.test(k)&&!/^dba_bk_/.test(k)&&typeof j.d[k]==='string'});if(!ks.length)return'Il file non contiene dati di gioco.';
  make();try{keys().forEach(function(k){localStorage.removeItem(k)});ks.forEach(function(k){localStorage.setItem(k,j.d[k])})}catch(e){return'Importazione fallita (spazio insufficiente nel browser). Il backup precedente è stato salvato.'}return ks.length}
 try{var l=list();if(!l.length||Date.now()-l[0].t>6*3600*1000)setTimeout(make,4000)}catch(e){}
 return{make:make,list:list,restore:restore,exp:exp,imp:imp}})();
window.DBA_SETSEC=function(host){
 if(!host||host.__dbaS)return;host.__dbaS=1;
 var W=document.createElement('div');W.style.cssText='text-align:left;margin-top:12px;padding-top:6px;border-top:1px solid rgba(255,255,255,.14);color:#e2e8f0;font:13px system-ui';host.appendChild(W);
 function ls(k,d){try{var v=localStorage.getItem(k);return v==null?d:v}catch(e){return d}}
 function H(t){var d=document.createElement('div');d.style.cssText='margin:10px 0 6px;font-weight:700;color:#fde68a;font-size:14px';d.textContent=t;d.__h=1;W.appendChild(d)}
 function B(t,on,f){var b=document.createElement('button');b.type='button';b.textContent=t;b.style.cssText='padding:8px 6px;border-radius:9px;border:1px solid '+(on?'#fbbf24':'rgba(255,255,255,.18)')+';background:'+(on?'rgba(245,158,11,.35)':'rgba(255,255,255,.08)')+';color:'+(on?'#fef3c7':'#cbd5e1')+';font:600 12px system-ui;margin:0;width:auto;display:inline-block';b.onclick=function(e){e.stopPropagation();f(b)};return b}
 function R(){var d=document.createElement('div');d.style.cssText='display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:4px 0';W.appendChild(d);return d}
 function SL(lbl,val,f){var d=document.createElement('div');d.style.cssText='margin:6px 0';var t=document.createElement('div');t.style.cssText='display:flex;justify-content:space-between';var a=document.createElement('span');a.textContent=lbl;var v=document.createElement('span');v.textContent=Math.round(val*100)+'%';t.appendChild(a);t.appendChild(v);var i=document.createElement('input');i.type='range';i.min=0;i.max=1;i.step='.05';i.value=val;i.style.cssText='width:100%;accent-color:#fbbf24';i.oninput=function(){v.textContent=Math.round(+i.value*100)+'%';f(+i.value)};['pointerdown','keydown','keyup'].forEach(function(ev){i.addEventListener(ev,function(e){e.stopPropagation()})});d.appendChild(t);d.appendChild(i);W.appendChild(d);return d}
 var Q=['Bassa','Media','Alta','Molto alta'],cq=2;try{var sv=ls('dba_q','2'),pv=parseInt(sv);cq=sv==='low'?0:(sv==='high'?2:(pv>=0&&pv<=3?pv:2))}catch(e){}
 H('⚔️ Difficoltà nemici del mondo');var rd=R(),dl=document.createElement('div');dl.style.cssText='opacity:.75;font-size:11px;line-height:1.35;margin-top:2px';
 function wdc(){var v=ls('dba_wd','1');return v==='0'||v==='2'?v:'1'}
 var WDN=[['0','Facile'],['1','Normale'],['2','Difficile']],WDB=[];
 function wdu(){var c=wdc();WDB.forEach(function(x,i){var on=WDN[i][0]===c;x.style.borderColor=on?'#fbbf24':'rgba(255,255,255,.18)';x.style.background=on?'rgba(245,158,11,.35)':'rgba(255,255,255,.08)';x.style.color=on?'#fef3c7':'#cbd5e1'});dl.textContent=c==='0'?'Facile: miniboss, vaganti, spettri e guardiani infliggono ~25% di danno in meno e hanno ~15% di vita in meno.':c==='2'?'Difficile: ~30% di danno in più e ~15% di vita in più per miniboss, vaganti, spettri e guardiani.':'Normale: i nemici crescono un po\' (fino a ~+40%) se il tuo party ha un buon equipaggiamento. Vale dal prossimo scontro; il drago finale non cambia.'}
 WDN.forEach(function(a){var b=B(a[1],0,function(){try{localStorage.setItem('dba_wd',a[0])}catch(e){}wdu()});WDB.push(b);rd.appendChild(b)});W.appendChild(dl);wdu();

 H('💾 Salvataggi e backup');var rb=R(),bm=document.createElement('div');bm.style.cssText='opacity:.85;font-size:11px;line-height:1.35;margin-top:2px';
 function bkt(m){var l=window.__dbaBK.list();bm.textContent=(m?m+' ':'')+(l.length?'Backup automatici: '+l.map(function(x){return new Date(x.t).toLocaleString('it-IT',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})}).join(' · ')+'.':'Nessun backup ancora.')}
 var bkf=document.createElement('input');bkf.type='file';bkf.accept='.json,application/json';bkf.style.display='none';bkf.onchange=function(){var fl=bkf.files&&bkf.files[0];if(!fl)return;var bkr=new FileReader();bkr.onload=function(){bkf.value='';if(!confirm('Importare questo salvataggio? Quello attuale verrà salvato prima in un backup e il gioco si ricaricherà.'))return;var r=window.__dbaBK.imp(String(bkr.result));if(typeof r==='number'){location.reload()}else{bkt(r)}};bkr.onerror=function(){bkt('Lettura del file non riuscita.')};try{bkr.readAsText(fl)}catch(e){bkt('Lettura del file non riuscita.')}};
 rb.appendChild(B('⬇ Esporta file',0,function(){var n=window.__dbaBK.exp();bkt(n?'Salvataggio esportato ('+n+' voci).':'Niente da esportare.')}));
 rb.appendChild(B('⬆ Importa file',0,function(){bkf.click()}));
 rb.appendChild(B('📌 Backup ora',0,function(){bkt(window.__dbaBK.make()?'Backup creato.':'Backup non riuscito (spazio pieno?).')}));
 rb.appendChild(B('↩ Ripristina ultimo backup',0,function(){var l=window.__dbaBK.list();if(!l.length){bkt('Nessun backup da ripristinare.');return}if(confirm('Ripristinare il backup del '+new Date(l[0].t).toLocaleString('it-IT')+'? Il gioco si ricaricherà e i progressi dopo quella data andranno persi.')){if(window.__dbaBK.restore(l[0].i))location.reload();else bkt('Ripristino fallito.')}}));
 W.appendChild(bkf);W.appendChild(bm);bkt('');
 H('⛶ Schermo intero');var rf=R(),fsl=document.createElement('div');fsl.style.cssText='opacity:.75;font-size:11px;line-height:1.35;margin-top:2px';
 var bT=B('',0,function(){window.__dbaFS(true);setTimeout(upd,350)}),bA=B('',0,function(){var o=__dbaFSget('dba_fs_auto','1')!=='0';try{localStorage.setItem('dba_fs_auto',o?'0':'1')}catch(e){}upd()}),bL=B('',0,function(){var o=__dbaFSget('dba_fs_land','0')==='1';try{localStorage.setItem('dba_fs_land',o?'0':'1')}catch(e){}try{if(!o&&__dbaFSOn()&&screen.orientation&&screen.orientation.lock)screen.orientation.lock('landscape').catch(function(){});if(o&&screen.orientation&&screen.orientation.unlock)screen.orientation.unlock()}catch(e){}upd()});
 function st(b,t,on){b.textContent=t;b.style.borderColor=on?'#fbbf24':'rgba(255,255,255,.18)';b.style.background=on?'rgba(245,158,11,.35)':'rgba(255,255,255,.08)';b.style.color=on?'#fef3c7':'#cbd5e1'}
 function upd(){if(!W.isConnected)return;var on=window.__dbaFSOn(),ok=window.__dbaFSOk();st(bT,on?'⛶ Esci dallo schermo intero':'⛶ Schermo intero',on);var a=__dbaFSget('dba_fs_auto','1')!=='0';st(bA,'Automatico: '+(a?'sì':'no'),a);var l=__dbaFSget('dba_fs_land','0')==='1';st(bL,'Orizzontale fisso: '+(l?'sì':'no'),l);
  fsl.textContent=ok?'Automatico: entra a schermo intero quando scegli una modalità di gioco. Lo schermo resta acceso mentre giochi.':'Questo browser non permette lo schermo intero dalla pagina. Su iPhone/iPad: Condividi → "Aggiungi alla schermata Home", poi apri il gioco dall\'icona per averlo a schermo intero reale.'}
 rf.appendChild(bT);rf.appendChild(bA);rf.appendChild(bL);W.appendChild(fsl);upd();window.addEventListener('dba-fs',upd);
 H('🖼 Qualità grafica');var r1=R();Q.forEach(function(n,i){r1.appendChild(B(n+(i==cq?' ✓':''),i==cq,function(){if(i==cq)return;if(confirm('Applicare "'+n+'" e ricaricare il gioco? I progressi non salvati andranno persi.')){try{localStorage.setItem('dba_q',i===0?'low':String(i))}catch(e){}location.reload()}}))});
 var small=document.createElement('div');small.style.cssText='opacity:.65;font-size:11px;line-height:1.3';small.textContent='Bassa 256px · Media 512px · Alta 1024px (boss e arene) · Molto alta 1024px ovunque.';W.appendChild(small);
 var cs=ls('dba_style','normal')==='lego'?'l':'n';
 H('🎨 Stile grafico');var r2=R();[['n','Normale'],['l','Lego 🧱']].forEach(function(a){r2.appendChild(B(a[1]+(a[0]==cs?' ✓':''),a[0]==cs,function(){if(a[0]==cs)return;if(confirm('Passare allo stile "'+a[1]+'" e ricaricare il gioco? I progressi non salvati andranno persi.')){try{localStorage.setItem('dba_style',a[0]=='l'?'lego':'normal')}catch(e){}location.reload()}}))});
 H('💡 Lanterna notturna');var rl=R(),on=ls('dba_nl','1')!=='0'&&ls('dba_q','2')!=='low';rl.appendChild(B(on?'Attiva ✓':'Attiva',on,function(){if(on)return;if(confirm('Attivare la lanterna notturna e ricaricare il gioco? I progressi non salvati andranno persi.')){try{localStorage.setItem('dba_nl','1');if(localStorage.getItem('dba_q')==='low')localStorage.setItem('dba_q','1')}catch(e){}location.reload()}}));rl.appendChild(B(on?'Spenta':'Spenta ✓',!on,function(){if(!on)return;if(confirm('Spegnere la lanterna notturna (più veloce su telefoni lenti) e ricaricare il gioco?')){try{localStorage.setItem('dba_nl','0')}catch(e){}location.reload()}}));
 var fi=window.__dbaFi,A=window.__dbaA&&window.__dbaA();
 H('🎵 Musica');
 if(fi){var rm=R();var nm=document.createElement('span');nm.style.cssText='flex:1;min-width:90px;opacity:.85;font-size:12px';function trk(){try{nm.textContent=fi.getTrackInfo().name||''}catch(e){}}
  var bp=B('⏮',0,function(){fi.prev();trk()}),bn=B('⏭',0,function(){fi.next();trk()}),bt=B(fi.isPlaying()?'⏸':'▶',0,function(b){if(fi.isPlaying()){fi.pause();b.textContent='▶'}else{Promise.resolve(fi.play()).then(function(){b.textContent=fi.isPlaying()?'⏸':'▶';trk()})}});
  rm.appendChild(bp);rm.appendChild(bt);rm.appendChild(bn);rm.appendChild(nm);trk();
  SL('Volume musica',fi.isMuted()?0:fi.getVolume(),function(v){fi.setVolume(v);if(v>0&&fi.isMuted())fi.unmute();if(v==0)fi.mute()})}
 if(A){H('🔊 Effetti sonori');var rs=R();rs.appendChild(B(A.O.sfx?'Attivi':'Muti',!!A.O.sfx,function(b){A.O.sfx=A.O.sfx?0:1;A.sv();A.apply();b.textContent=A.O.sfx?'Attivi':'Muti';b.style.background=A.O.sfx?'rgba(245,158,11,.35)':'rgba(255,255,255,.08)';if(A.O.sfx)A.play('chime')}));
  var sl=SL('Volume effetti',A.O.vol,function(v){A.setVol(v)});sl.querySelector('input').onchange=function(){A.play('chime')};
  H('♿ Accessibilità');var tl=['Normale','Grande','Molto grande'],ra=R();
  ra.appendChild(B('Testo: '+tl[A.O.txt|0],0,function(b){A.O.txt=((A.O.txt|0)+1)%3;A.sv();A.apply();b.textContent='Testo: '+tl[A.O.txt|0]}));
  ra.appendChild(B('Alto contrasto: '+(A.O.hc?'sì':'no'),!!A.O.hc,function(b){A.O.hc=A.O.hc?0:1;A.sv();A.apply();b.textContent='Alto contrasto: '+(A.O.hc?'sì':'no');b.style.background=A.O.hc?'rgba(245,158,11,.35)':'rgba(255,255,255,.08)'}));
  ra.appendChild(B('Meno animazioni: '+(A.O.rm?'sì':'no'),!!A.O.rm,function(b){A.O.rm=A.O.rm?0:1;A.sv();A.apply();b.textContent='Meno animazioni: '+(A.O.rm?'sì':'no');b.style.background=A.O.rm?'rgba(245,158,11,.35)':'rgba(255,255,255,.08)'}))}
 try{var kids=Array.prototype.slice.call(W.children),secs=[],cur=null;kids.forEach(function(n){if(n.__h){cur={h:n,b:[]};secs.push(cur)}else if(cur)cur.b.push(n)});
  secs.forEach(function(s,ix){var key='dba_sec_'+s.h.textContent,sv=ls(key,ix<1?'1':'0')==='1';var body=document.createElement('div');s.h.parentNode.insertBefore(body,s.b[0]||s.h.nextSibling);s.b.forEach(function(n){body.appendChild(n)});
   s.h.setAttribute('role','button');s.h.tabIndex=0;s.h.style.cssText+=';cursor:pointer;display:flex;justify-content:space-between;align-items:center;padding:10px 12px;border-radius:10px;background:rgba(255,255,255,.06);min-height:40px';
   var ar=document.createElement('span');ar.style.cssText='opacity:.7;font-size:12px';s.h.appendChild(ar);
   function ap(){body.style.display=sv?'block':'none';ar.textContent=sv?'▲':'▼';s.h.setAttribute('aria-expanded',sv?'true':'false')}
   function tg(e){if(e)e.stopPropagation();sv=!sv;try{localStorage.setItem(key,sv?'1':'0')}catch(x){}ap()}
   s.h.onclick=tg;s.h.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();tg()}};ap()})}catch(e){}
};
