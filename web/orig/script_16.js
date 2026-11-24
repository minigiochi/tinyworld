/* v110: effetti sonori sintetizzati + accessibilità */
(function(){
var LS=null;try{LS=window.localStorage}catch(e){}
function ld(){try{return Object.assign({sfx:1,vol:.7,txt:0,hc:0,rm:0},JSON.parse(LS.getItem('dba_a11y')||'{}'))}catch(e){return{sfx:1,vol:.7,txt:0,hc:0,rm:0}}}
var O=ld();function sv(){try{LS.setItem('dba_a11y',JSON.stringify(O))}catch(e){}}
var st=document.createElement('style');st.id='dba-a11y-css';document.head.appendChild(st);
function apply(){var z=[1,1.15,1.3][O.txt|0];var c='html{font-size:'+(16*z)+'px}';
 if(z>1)c+='#dbaDG,#dba-warn,#dba-a11y,#dba-tut div{zoom:'+z+'}#dba-a11y{zoom:1}';
 if(O.hc)c+='body{filter:contrast(1.18) saturate(1.12)}';
 if(O.rm)c+='*,*::before,*::after{animation-duration:.001s!important;animation-iteration-count:1!important;transition-duration:.001s!important}';
 st.textContent=c;window.__dbaReduce=!!O.rm}
apply();
var ctx=null,mg=null,last={},nb=null,wet=null;
function ac(){if(ctx)return ctx;var C=window.AudioContext||window.webkitAudioContext;if(!C)return null;try{ctx=new C();var cp=ctx.createDynamicsCompressor();cp.threshold.value=-14;cp.ratio.value=4;cp.connect(ctx.destination);mg=ctx.createGain();mg.gain.value=O.vol;mg.connect(cp);var n=ctx.sampleRate*.5|0,b=ctx.createBuffer(1,n,ctx.sampleRate),d=b.getChannelData(0);for(var i=0;i<n;i++)d[i]=Math.random()*2-1;nb=b;
 var rl=ctx.sampleRate*1.4|0,rb=ctx.createBuffer(2,rl,ctx.sampleRate);for(var c=0;c<2;c++){var rd=rb.getChannelData(c);for(var j=0;j<rl;j++)rd[j]=(Math.random()*2-1)*Math.pow(1-j/rl,3)}
 var cv=ctx.createConvolver();cv.buffer=rb;wet=ctx.createGain();wet.gain.value=.5;wet.connect(cv);var wg=ctx.createGain();wg.gain.value=.55;cv.connect(wg);wg.connect(mg)}catch(e){ctx=null}return ctx}
function out(g,send){g.connect(mg);if(send&&wet){var s=ctx.createGain();s.gain.value=send;g.connect(s);s.connect(wet)}}
function rnd(a){return 1+(Math.random()-.5)*a}
function tone(f0,f1,dur,type,vol,delay,send,att){var t=ctx.currentTime+(delay||0),o=ctx.createOscillator(),g=ctx.createGain();o.type=type||'sine';o.frequency.setValueAtTime(f0,t);if(f1)o.frequency.exponentialRampToValueAtTime(Math.max(20,f1),t+dur);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol,t+(att||.008));g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);out(g,send);o.start(t);o.stop(t+dur+.05)}
function bell(f,dur,vol,delay,send){var t=ctx.currentTime+(delay||0),c=ctx.createOscillator(),m=ctx.createOscillator(),mgn=ctx.createGain(),g=ctx.createGain();c.type='sine';m.type='sine';c.frequency.value=f;m.frequency.value=f*3.5;mgn.gain.setValueAtTime(f*1.4,t);mgn.gain.exponentialRampToValueAtTime(.01,t+dur*.6);m.connect(mgn);mgn.connect(c.frequency);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol,t+.004);g.gain.exponentialRampToValueAtTime(.0001,t+dur);c.connect(g);out(g,send==null?.9:send);c.start(t);m.start(t);c.stop(t+dur+.05);m.stop(t+dur+.05)}
function noise(dur,vol,fc,delay,type,q,f1,send){var t=ctx.currentTime+(delay||0),s=ctx.createBufferSource(),g=ctx.createGain(),f=ctx.createBiquadFilter();s.buffer=nb;f.type=type||'lowpass';f.frequency.setValueAtTime(fc||1800,t);if(f1)f.frequency.exponentialRampToValueAtTime(f1,t+dur);f.Q.value=q||.8;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol,t+.006);g.gain.exponentialRampToValueAtTime(.0001,t+dur);s.connect(f);f.connect(g);out(g,send);s.start(t);s.stop(t+Math.min(dur+.05,.5))}
var S={
 dmg:function(){var r=rnd(.14);tone(150*r,48,.2,'sine',.4,0,.15);noise(.14,.3,1500,0,'lowpass',.7,300);noise(.05,.12,2600*r,0,'bandpass',2)},
 hit:function(){var r=rnd(.2);noise(.07,.22,2400*r,0,'bandpass',2.5,1200);tone(360*r,150,.1,'sine',.2,0,.1);bell(1180*r,.18,.025,.005,.5)},
 heal:function(){var r=rnd(.06);[660,880,1108,1320].forEach(function(f,i){bell(f*r,.55,.07,i*.07,1)})},
 buff:function(){var r=rnd(.05);tone(330*r,330*r,.45,'sine',.07,0,.7,.15);tone(495*r,495*r,.45,'sine',.06,.02,.7,.15);bell(990*r,.5,.06,.12,1);bell(1480*r,.45,.04,.2,1)},
 death:function(){tone(300,95,.7,'triangle',.22,0,.4,.02);tone(150,52,.6,'sine',.28,0,.2);noise(.4,.12,900,0,'lowpass',.7,200)},
 boom:function(){tone(85,28,.55,'sine',.55,0,.2);noise(.5,.42,1600,0,'lowpass',.7,160);noise(.18,.2,3200,.02,'bandpass',1.2,800)},
 warn:function(){bell(784,.45,.09,0,.8);bell(784,.45,.09,.2,.8);bell(1175,.5,.05,.2,.8)},
 roar:function(){var t=ctx.currentTime,o=ctx.createOscillator(),f=ctx.createBiquadFilter(),g=ctx.createGain();o.type='sawtooth';o.frequency.setValueAtTime(95,t);o.frequency.linearRampToValueAtTime(52,t+.95);f.type='lowpass';f.frequency.setValueAtTime(260,t);f.frequency.linearRampToValueAtTime(700,t+.3);f.frequency.linearRampToValueAtTime(220,t+.95);f.Q.value=3;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.34,t+.12);g.gain.exponentialRampToValueAtTime(.0001,t+1);o.connect(f);f.connect(g);out(g,.3);o.start(t);o.stop(t+1.05);noise(.85,.2,420,0,'bandpass',1.5,160,.2)},
 click:function(){var r=rnd(.1);tone(780*r,420*r,.05,'sine',.07,0,0,.002);noise(.015,.03,4000,0,'highpass',.7)},
 chime:function(){bell(988,.7,.1,0,1);bell(1480,.8,.08,.1,1);bell(1976,.8,.05,.2,1)},
 fanfare:function(){[523,659,784,1047].forEach(function(f,i){tone(f,f,.4,'triangle',.12,i*.11,.5,.015);bell(f*2,.7,.05,i*.11,1)});[523,659,784,1047].forEach(function(f){tone(f,f,.9,'triangle',.06,.5,.6,.04)});bell(2093,1.2,.05,.52,1)},
 thunder:function(){noise(.9,.5,420,0,'lowpass',.7,90,.3);noise(.7,.4,300,.3,'lowpass',.7,80,.3);tone(65,28,1.2,'sine',.5,0,.3)},
 sad:function(){[392,330,262].forEach(function(f,i){bell(f,.9,.09,i*.22,1);tone(f,f*.99,.7,'sine',.05,i*.22,.8,.05)})}
};
var gap={thunder:2000,dmg:70,hit:70,heal:150,buff:200,death:200,boom:200,warn:400,roar:1500,click:40,chime:300,fanfare:800,sad:800};
function play(n){if(!O.sfx||document.hidden)return;if(!ac())return;if(ctx.state==='suspended'){try{ctx.resume()}catch(e){}}var now=performance.now();if(last[n]&&now-last[n]<(gap[n]||80))return;last[n]=now;try{S[n]&&S[n]()}catch(e){}}
var AMB=null,ambT=0;
window.DBA_AMB=function(kind,lv){ambT=performance.now();if(!O.sfx||document.hidden||!ac()){if(AMB)AMB.g.gain.setTargetAtTime(0,ctx.currentTime,.3);return}
 if(!AMB){var b=ctx.createBuffer(1,ctx.sampleRate*2|0,ctx.sampleRate),d=b.getChannelData(0);for(var i=0;i<d.length;i++)d[i]=Math.random()*2-1;var sr=ctx.createBufferSource();sr.buffer=b;sr.loop=true;var f=ctx.createBiquadFilter(),g=ctx.createGain();g.gain.value=0;sr.connect(f);f.connect(g);g.connect(mg);sr.start();AMB={f:f,g:g,o:ctx.createOscillator(),k:ctx.createGain()};AMB.o.frequency.value=.13;AMB.k.gain.value=0;AMB.o.connect(AMB.k);AMB.o.start()}
 var P={rain:['bandpass',2600,.5,.16],storm:['bandpass',1900,.5,.24],snow:['lowpass',420,.7,.07],sand:['bandpass',900,.6,.14],ash:['lowpass',320,.7,.06]}[kind];
 if(!P||lv<=.02){AMB.g.gain.setTargetAtTime(0,ctx.currentTime,.5);return}
 AMB.f.type=P[0];AMB.f.frequency.setTargetAtTime(P[1],ctx.currentTime,.3);AMB.f.Q.value=P[2];AMB.g.gain.setTargetAtTime(P[3]*lv,ctx.currentTime,.6)};
setInterval(function(){if(AMB&&performance.now()-ambT>4000)AMB.g.gain.setTargetAtTime(0,ctx.currentTime,.4)},1000);
window.DBA_SFX={play:play,opts:O,apply:apply};
['pointerdown','keydown','touchstart'].forEach(function(e){document.addEventListener(e,function(){if(ac()&&ctx.state==='suspended')try{ctx.resume()}catch(x){}},{passive:true})});
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('button');if(b&&!b.closest('#dba-a11y'))play('click')},true);
document.addEventListener('visibilitychange',function(){if(ctx){try{document.hidden?ctx.suspend():ctx.resume()}catch(e){}}});
var prevEv=window.__dbaEv;
window.__dbaEv=function(eng,ev){try{var h=0,b=0;for(var i=0;i<ev.length;i++){var e=ev[i];if(!e)continue;var t=e.t;
 if(t==='dmg'){e.who==='boss'||e.from&&e.target?b=1:h=1}
 else if(t==='heal')play('heal');else if(t==='death')play('death');else if(t==='buff')play('buff');
 else if(t==='special_telegraph')play('warn');else if(t==='special_trigger'||t==='aoe'||t==='barrage'||t==='ring'||t==='trap_trigger'||t==='spike_trigger')play('boom');
 else if(t==='boss_transform')play('roar')}
 if(b)play('dmg');else if(h)play('hit')}catch(x){}
 return prevEv?prevEv.apply(this,arguments):void 0};
/* toast -> suoni */
try{new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){if(n.nodeType!==1)return;var t=(n.innerText||'').slice(0,160);if(!t)return;
 if(/livello|level/i.test(t)&&!/Liv\./.test(t))play('fanfare');else if(/superata|vittoria|completat|riscatt/i.test(t))play('fanfare');else if(/caduto|sconfitt|annientat/i.test(t))play('sad');else if(/trovato|ottenut|forziere|ricevi|raccolt/i.test(t))play('chime')})})}).observe(document.body,{childList:true,subtree:true})}catch(e){}
/* pannello accessibilità */
function panel(){var p=document.getElementById('dba-a11y');if(p){p.remove();return}p=document.createElement('div');p.id='dba-a11y';
 p.style.cssText='position:fixed;right:8px;bottom:56px;z-index:10020;width:min(290px,92vw);background:#0b0710;border:1px solid rgba(251,191,36,.5);border-radius:14px;padding:12px;color:#e2e8f0;font:13px system-ui;box-shadow:0 8px 30px #000a';
 var tl=['Normale','Grande','Molto grande'];
 function row(l,v,f){return '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin:8px 0"><span>'+l+'</span><button data-f="'+f+'" style="background:rgba(251,191,36,.15);border:1px solid rgba(251,191,36,.5);color:#fde68a;border-radius:999px;padding:6px 12px;min-width:92px">'+v+'</button></div>'}
 function draw(){p.innerHTML='<b style="color:#fde68a;font-size:15px">♿ Audio e accessibilità</b>'+row('Effetti sonori',O.sfx?'Attivi':'Muti','sfx')+'<div style="margin:8px 0"><div style="display:flex;justify-content:space-between"><span>Volume</span><span>'+Math.round(O.vol*100)+'%</span></div><input id="dba-vol" type="range" min="0" max="1" step=".05" value="'+O.vol+'" style="width:100%;accent-color:#fbbf24"></div>'+row('Dimensione testo',tl[O.txt|0],'txt')+row('Alto contrasto',O.hc?'Attivo':'No','hc')+row('Riduci animazioni',O.rm?'Attivo':'No','rm')+'<button data-f="x" style="width:100%;margin-top:6px;padding:8px;border-radius:10px;background:#d97706;color:#fff;font-weight:600">Chiudi</button>';
  p.querySelectorAll('button[data-f]').forEach(function(b){b.onclick=function(){var f=b.dataset.f;if(f==='x'){p.remove();return}if(f==='txt')O.txt=((O.txt|0)+1)%3;else O[f]=O[f]?0:1;sv();apply();draw();if(f==='sfx'&&O.sfx)play('chime')}});
  var v=p.querySelector('#dba-vol');v.oninput=function(){O.vol=+v.value;if(mg)mg.gain.value=O.vol;sv()};v.onchange=function(){play('chime');draw()}}
 draw();document.body.appendChild(p)}
function mount(){var bar=document.getElementById('dba-bar');if(!bar||document.getElementById('dba-a11y-btn'))return!!bar;var b=document.createElement('button');b.id='dba-a11y-btn';b.textContent='🔊';b.title='Audio e accessibilità';b.onclick=panel;bar.insertBefore(b,bar.firstChild);return true}
window.__dbaA=function(){return{O:O,sv:sv,apply:apply,play:play,setVol:function(v){O.vol=v;if(mg)mg.gain.value=v;sv()}}};
var tm=setInterval(function(){if(mount())clearInterval(tm)},400);
})();