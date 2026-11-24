function DBA_BM(e,j){if(e.nm&&window.DBA_NMB)return DBA_NMB(e,j);
const K=e.key,D1={ossa:1};
const KB=DBAQ.bs,rs=n=>Math.max(3,Math.round(n*KB)),hs2=Math.max(1,Math.round(2*KB));
const DP=g=>{const a=DBAQ.disp;if(!a)return g;const p=g.attributes.position;for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i),f=1+a*(Math.sin(x*3.1+y*2.3)*Math.cos(z*2.7+x*1.3)+.5*Math.sin(y*7.3+z*5.1)*Math.cos(x*6.2));p.setXYZ(i,x*f,y*f,z*f)}return g};
function SG(r,w,h,...a){return DP(new Tt(r,rs(w),rs(h),...a))}
function CG(r,h,s){return DP(new Gt(r,h,rs(s),hs2))}
function FG(a,b,h,s){return DP(new Fn(a,b,h,rs(s),hs2))}
function BG(w,h,d){const k=Math.max(1,Math.round(KB*2));return DP(new rn(w,h,d,k,k,k))}
function VG(r,l,c,s){return new Vc(r,l,rs(c),rs(s))}
function TG(r,t,g,u,arc){return new Ci(r,t,rs(g),rs(u),arc)}

const PAL={
inferno:['#5a1008','#c8321e','#ff8a3a','#f0b060','#8a1c10','#ffb030','c','f','cracks'],
frost:['#2a5a7a','#6cb8dc','#e6f8ff','#e0f4ff','#7cc8ec','#aef0ff','x','x','frost'],
natura:['#24501e','#4a8a34','#9ad064','#c8d890','#4f9a34','#d0ff80','a','l','leaf'],
ombra:['#140e28','#352a66','#8a6ad8','#241c48','#2e2268','#c8a4ff','c','c','speck',3],
tempesta:['#5a4a10','#d8b428','#fff3a0','#fff0b0','#b89418','#fff6b0','c','c','bolts'],
sangue:['#3a0606','#9a1414','#ff5a5a','#6a0c0c','#5a0a0a','#ff4a4a','c','c','cracks'],
cristallo:['#2a7aa0','#82d8f0','#f0ffff','#c8f0ff','#6cc8e4','#d0ffff','x','x','frost'],
magma:['#0e0804','#2e1408','#ff6a10','#1a0a04','#3a1608','#ff8a20','c','f','cracks'],
sabbie:['#7a5a22','#d0a84c','#f8e2a4','#f0d890','#b88a38','#fff0b0','c','c','speck'],
spettrale:['#4a5a98','#9aaaf0','#e8eeff','#c8d4ff','#7a8ae0','#e0e8ff','c','x','dots',3],
ossa:['#0c0a06','#2a241a','#8a7f66','#3a3426','#2a241a','#9aff9a','c','b','bone'],
luce:['#c8aa48','#fff0a0','#ffffff','#fffbe0','#f4e07a','#ffffff','c','c','speck',0,1],
caos:['#5a1260','#d946ef','#ffb0ff','#8a2a96','#a02ab0','#ff80ff','x','x','bolts',4],
abisso:['#06204a','#2563eb','#70b0ff','#0c3070','#1a4aa8','#60e0ff','c','l','dots'],
tuono:['#5a4208','#ca8a04','#ffd060','#e0b030','#9a6a04','#fff0a0','x','c','bolts'],
veleno:['#0e3a18','#16a34a','#a8ff6a','#7ad040','#128a3a','#b0ff60','c','l','dots'],
fenice:['#8a2a0c','#f97316','#ffd060','#ffc060','#e0541a','#ffe080','c','f','cracks'],
nulla:['#14040e','#831843','#e04890','#240814','#4a0a2a','#ff60b0','c','c','speck',4],
antico:['#2a3442','#6a7e96','#c8e0f0','#8aa0b8','#5a7088','#a0d0ff','x','x','frost'],
celeste:['#8a7ac8','#e8e0ff','#ffffff','#fff0c0','#b0a0f0','#ffe08a','c','c','speck',3,1],
orco:['#1c2c14','#4f7a3a','#8fbf6a','#6a8a4a','#3a5a2a','#ffb040','c','c','speck'],
golem:['#2a2824','#7a766c','#b8b2a0','#5a564c','#4a463c','#ffa030','c','c','runes'],
troll:['#2a3a22','#5f7a48','#a0b880','#7a9060','#4a6038','#c8ff80','c','c','leaf'],
ciclope:['#4a2a1a','#a8704a','#e0b088','#c08a60','#7a4a2a','#ffe060','c','c','speck'],
minotauro:['#2a1a12','#6a3a22','#b07a4a','#8a5a38','#4a2a18','#ff5030','c','c','speck'],
lich:['#10122a','#3a3a6a','#a0a8e0','#2a2a50','#2a2a58','#60ffd0','c','c','runes'],
demone:['#3a0a0a','#a01818','#ff6a3a','#7a1010','#6a0c0c','#ffa030','c','c','cracks'],
gargoyle:['#2a2a32','#6a6a78','#a8a8b8','#4a4a58','#3a3a48','#ff4040','c','c','speck'],
cavaliere:['#0a0a12','#2a2a38','#6a6a88','#1a1a28','#1a1a28','#a050ff','c','c','runes'],
ragno:['#0a140a','#2a3a1a','#7aa040','#1a2a10','#1a2a10','#b0ff40','c','c','dots'],
idra:['#143a1a','#2a8a3a','#8ae070','#c8e8a0','#1a6a2a','#a0ff60','c','c','dots'],
kraken:['#0a1a3a','#2a4a9a','#70a0e8','#1a3a7a','#1a3a7a','#60e0ff','c','c','dots']};
const HM={orco:{h:'orc',w:'axe',sz:1.05},golem:{h:'golem',b:1,sz:1.2,w:'fist'},troll:{h:'troll',w:'club',sz:1.2},ciclope:{h:'cyc',w:'club',sz:1.25},minotauro:{h:'bull',w:'axe',sz:1.1},lich:{h:'skull',w:'staff',sz:1,robe:1},demone:{h:'demon',w:'whip',wing:1,sz:1.1},gargoyle:{h:'garg',wing:1,w:'none',sz:1.05,b:1},cavaliere:{h:'helm',w:'sword',sz:1.1,cape:1}};
const T=PAL[K]||PAL.inferno;let sd=7;const R=()=>(sd=sd*16807%2147483647)/2147483647;
const ad=(p,g,m,x=0,y=0,z=0,rx=0,ry=0,rz=0,sx=1,sy=1,sz=1)=>{const o=new fe(g,m);o.position.set(x,y,z);o.rotation.set(rx,ry,rz);o.scale.set(sx,sy,sz);p.add(o);return o};
const cvs=f=>{const c=document.createElement('canvas');const Z=DBAQ.tex;c.width=c.height=Z;const cx=c.getContext('2d');cx.scale(Z/256,Z/256);f(cx,256);const tt=new Og(c);tt.anisotropy=DBAQ.an;return tt};
const gr=(x,s,a,b)=>{const g=x.createLinearGradient(0,0,0,s);g.addColorStop(0,a);g.addColorStop(1,b);x.fillStyle=g;x.fillRect(0,0,s,s)};
function marks(x,s,go){const ov=T[8];x.lineWidth=go?4:2.5;x.strokeStyle=T[5];x.fillStyle=T[5];
 if(ov=='cracks'||ov=='bolts'||ov=='runes'){for(let i=0;i<24;i++){let px=R()*s,py=R()*s;x.beginPath();x.moveTo(px,py);for(let k=0;k<6;k++){px+=(R()-.5)*34;py+=ov=='cracks'?(R()-.4)*28:ov=='runes'?(R()-.5)*10:16;x.lineTo(px,py)}x.stroke()}}
 if(ov=='dots'){for(let i=0;i<70;i++){x.beginPath();x.arc(R()*s,R()*s,2+R()*3,0,7);x.fill()}}
 if(go)return;
 if(ov=='frost'){for(let i=0;i<420;i++){x.fillStyle=R()<.5?'#ffffffcc':'#bfeaffaa';x.fillRect(R()*s,R()*s,2+R()*3,2+R()*3)}}
 if(ov=='leaf'){x.strokeStyle='#1d3a14';for(let i=0;i<30;i++){x.fillStyle=R()<.5?'#6aa84a':'#3a7a2a';x.beginPath();x.ellipse(R()*s,R()*s,16,7,R()*3,0,7);x.fill();x.stroke()}}
 if(ov=='speck'){for(let i=0;i<300;i++){x.fillStyle=R()<.5?T[5]:T[2];x.globalAlpha=.25+R()*.5;x.fillRect(R()*s,R()*s,1+R()*2,1+R()*2)}x.globalAlpha=1}
 if(ov=='bone'){x.strokeStyle='#5a5240';for(let i=0;i<24;i++){x.beginPath();x.moveTo(R()*s,R()*s);x.lineTo(R()*s,R()*s);x.stroke()}}}
const AT=(window.DBA_BCELL||{})[K],wr=t=>{t.wrapS=t.wrapT=1002;{const q=({golem:1,gargoyle:1,lich:1,demone:1.3}[K]||2);t.repeat.set(q,q)}t.anisotropy=DBAQ.an;return t};
const skin=kind=>AT?(()=>{const Z=Math.min(DBAQ.tex||512,512),c=document.createElement("canvas");c.width=c.height=Z;c.getContext("2d").drawImage(AT,0,0,Z,Z);return wr(new Og(c))})():cvs((x,s)=>{gr(x,s,T[1],T[0]);
 if(kind=='scale'){for(let y=0;y<s+16;y+=14)for(let X=-16;X<s+16;X+=22){const xx=X+((y/14)&1)*11,g=x.createRadialGradient(xx,y-5,1,xx,y,16);g.addColorStop(0,T[2]);g.addColorStop(.5,T[1]);g.addColorStop(1,T[0]);x.fillStyle=g;x.beginPath();x.ellipse(xx,y,11,10,0,0,Math.PI);x.fill();x.strokeStyle=T[0];x.lineWidth=1.5;x.stroke()}x.fillStyle=T[3];x.fillRect(100,0,56,s)}
 else if(kind=='stone'){for(let i=0;i<30;i++){x.fillStyle=R()<.5?T[2]+'55':'#0007';x.fillRect(R()*s,R()*s,20+R()*50,12+R()*30)}}
 else{for(let i=0;i<500;i++){x.fillStyle=R()<.5?'#00000018':'#ffffff14';x.fillRect(R()*s,R()*s,2+R()*3,2+R()*3)}}
 marks(x,s,false)});
const GP={"inferno":(r,g,b)=>r>215&&g>80&&b<120&&r-b>130,"magma":(r,g,b)=>r>215&&g>80&&b<120&&r-b>130,"fenice":(r,g,b)=>r>235&&g>170&&b<130,"demone":(r,g,b)=>r>215&&g>80&&b<120&&r-b>130,"golem":(r,g,b)=>r>215&&g>110&&b<110,"tempesta":(r,g,b)=>r>225&&g>225&&b>200,"tuono":(r,g,b)=>r>235&&g>200&&b<140,"caos":(r,g,b)=>r>220&&g>160&&b>220,"veleno":(r,g,b)=>g>215&&r>110&&b<140,"abisso":(r,g,b)=>b>200&&g>190&&r<130,"ombra":(r,g,b)=>b>220&&r>110&&g<130,"lich":(r,g,b)=>g>200&&b>170&&r<130,"sangue":(r,g,b)=>r>200&&g<110&&b<110},gl=()=>AT?(GP[K]?(()=>{const c=document.createElement('canvas');c.width=256;c.height=512;const x=c.getContext('2d');x.drawImage(AT,0,0);const d=x.getImageData(0,0,256,512),a=d.data,f=GP[K];for(let i=0;i<a.length;i+=4){if(!f(a[i],a[i+1],a[i+2])){a[i]=a[i+1]=a[i+2]=0}}x.putImageData(d,0,0);const Z=Math.min(DBAQ.tex||512,512),c2=document.createElement('canvas');c2.width=c2.height=Z;c2.getContext('2d').drawImage(c,0,0,Z,Z);return wr(new Og(c2))})():null):['cracks','bolts','dots','runes'].includes(T[8])?cvs((x,s)=>{x.fillStyle='#000';x.fillRect(0,0,s,s);marks(x,s,true)}):null;
const gt=gl(),bM=(kind)=>{const tk=skin(kind);return new zt({map:tk,bumpMap:DBAQ.bump?tk:null,bumpScale:2.5,roughness:.6,metalness:.1,emissive:new Rt(AT?'#ffffff':T[5]),emissiveMap:gt,emissiveIntensity:gt?(AT?1.15:1.3):0})};
const hM=new zt({color:T[8]=='bone'?'#e8e0c8':T[2],map:(AT&&T[8]=='bone')?skin('x'):null,roughness:.45,metalness:.15}),gM=new ln({color:T[5]}),aM=new zt({color:'#4a4a52',roughness:.45,metalness:.7});
const memM=new zt({map:AT?skin('scale'):cvs((x,s)=>{gr(x,s,T[4],T[0]);x.strokeStyle=T[2];x.globalAlpha=.5;x.lineWidth=2;for(let i=0;i<9;i++){x.beginPath();x.moveTo(0,s*.45);x.quadraticCurveTo(s*.5,s*(i/8)*.9,s,s*(i/8));x.stroke()}}),side:_n,roughness:.7,emissive:new Rt(T[5]),emissiveIntensity:.15});
const A=new zn,dm=()=>new zn;
function wingG(s,bone){const w=new zn;ad(w,new FG(.07,.1,3.2,8),hM,0,1.6,0);
 if(!bone){ad(w,new CG(1.3,3.1,4),memM,.25*s,1.5,-.05,0,0,0,1,1,.04);ad(w,new CG(.8,2.6,3),memM,-.35*s,1.3,-.05,0,0,.35*s,1,1,.04)}
 else for(const a of[-.5,0,.5])ad(w,new FG(.03,.05,2.4,6),hM,Math.sin(a)*1.1,1.3,0,0,0,-a);
 for(const a of[.5,-.2])ad(w,new FG(.04,.05,2,6),hM,.5*s,2.4,0,0,0,-a*s);
 w.position.set(s*.95,.9,-.1);return w}
let bB,cL=dm(),cR=dm(),jw=dm(),wL=dm(),wR=dm(),tailP=[],LG=[];
function headG(P,x,yaw,sz){const h=new zn;h.position.set(x,0,0);const bn=P.bone,sk=bn?hM:P.m;
 ad(h,new SG(.5,24,18),sk,0,0,0,0,0,0,1,.88,1.25);ad(h,new FG(.18,.3,.9,16),sk,0,-.08,.8,Math.PI/2);
 const j=dm();j.position.set(0,-.15,.35);const ji=dm();ji.rotation.x=-Math.PI/2;j.add(ji);
 ad(ji,new FG(.14,.26,.9,14),sk,0,-.04,.5,Math.PI/2);
 for(let k=0;k<4;k++)for(const s of[-1,1]){ad(ji,new CG(.04,.14,6),hM,.14*s,.06,.3+k*.17);ad(h,new CG(.04,.14,6),hM,.14*s,-.2,.55+k*.17,Math.PI)}
 for(const s of[-1,1]){ad(h,new SG(.07,10,8),gM,.3*s,.12,.45);
  const st=T[6];if(st=='x')for(let k=0;k<3;k++)ad(h,new CG(.09,.7,4),hM,.2*s,.35,-.1-k*.1,-1.0-k*.2,0,-.3*s-k*.12*s);
  else{ad(h,new CG(.12,.95,10),hM,.2*s,.4,-.1,-1.0,0,-.35*s);if(st=='a')for(const a of[.7,-.4])ad(h,new CG(.07,.5,6),hM,.35*s,.75,-.3,-.7,0,-a*s);else ad(h,new CG(.07,.55,8),hM,.25*s,.25,.0,-1.6,0,.3*s)}}
 return{h,j}}
function dragon(nh){const bn=T[8]=='bone',m=bM('scale');P={m,bone:bn};
 bB=ad(A,new SG(1,32,24),bn?new zt({color:'#17140e',roughness:.9}):m,0,0,0,0,0,0,1.15,1,1.8);
 const spk=(x,y,z,rx,sc)=>{const st=T[7];ad(A,new CG(.14*sc,.7*sc,st=='x'?4:st=='l'?3:7),st=='f'?gM:hM,x,y,z,rx)};
 const ss=nh>1?[-1.1,0,1.1]:[0];ss.forEach((hx,hi)=>{
  for(let k=0;k<7;k++){const f=k/6,y=.5+f*1.3,z=1.4+f*1.5;ad(A,new SG(bn?.26:.58-.2*f,16,12),bn?hM:m,hx*f*1.2,y,z);if(k%2)spk(hx*f*1.2,y+.45,z-.1,-.4,.8)}
  const hd=headG(P,hx*1.3,0);hd.h.position.set(hx*1.3,1.95,3.15);hd.h.rotation.x=.25;A.add(hd.h);if(hi==Math.floor(ss.length/2)){jw=hd.j;hd.h.add(jw)}else hd.h.add(hd.j)});
 {let par=A,px=0,py=0,pz=0;tailP=[];for(let k=0;k<9;k++){const f=k/8,r=bn?.2-.1*f:.62-.5*f,z=-1.6-f*5,x=Math.sin(f*5)*.5,y=-.15-f*.5;const pv=new zn;pv.position.set(x-px,y-py,z-pz);par.add(pv);px=x;py=y;pz=z;ad(pv,new SG(r,16,12),bn?hM:m,0,0,0);if(k<8){const st=T[7],sc=1-f*.6;ad(pv,new CG(.14*sc,.7*sc,st=='x'?4:st=='l'?3:7),st=='f'?gM:hM,0,r*.9,0,.4)}tailP.push(pv);par=pv}
 ad(par,new CG(.3,1.1,6),T[7]=='f'?gM:hM,0,0,-.1,-Math.PI/2)}
 for(const s of[-1,1]){const lg=new zn;lg.position.set(s*.95,-.4,-1.0);ad(lg,new FG(.35,.22,1.0,14),bn?hM:m,0,-.5,0);ad(lg,new FG(.2,.16,.9,12),bn?hM:m,0,-1.1,.1,-.4);ad(lg,new SG(.26,12,8),bn?hM:m,0,-1.45,.25,0,0,0,1,.5,1.5);for(const c of[-.12,0,.12])ad(lg,new CG(.05,.3,6),hM,c,-1.45,.6,Math.PI/2+.2);A.add(lg);LG.push(lg)}
 for(const s of[-1,1]){const c=s<0?cL:cR;c.position.set(s*1.0,.45,1.0);ad(c,new FG(.34,.24,1.0,14),bn?hM:m,0,-.5,0);ad(c,new FG(.2,.16,.9,12),bn?hM:m,0,-1.1,.15,-.3);ad(c,new SG(.28,12,8),bn?hM:m,0,-1.5,.35,0,0,0,1,.5,1.5);for(const k of[-.12,0,.12])ad(c,new CG(.05,.3,6),hM,k,-1.5,.7,Math.PI/2+.2);A.add(c)}
 if(nh==1||1){wL=wingG(-1,bn);wR=wingG(1,bn);wL.rotation.z=1;wR.rotation.z=-1;A.add(wL,wR)}
 extras(bn)}
function extras(bn){const ov=T[8],ir=(n,f)=>{for(let i=0;i<n;i++){const a=R()*6.28,y=Math.cos(a),x=Math.sin(a),z=(R()-.5)*3.2;f(x*1.15,y,z,a)}};
 if(bn){for(let k=0;k<6;k++){const z=-1.2+k*.48;ad(A,new TG(1.0,.07,8,22,Math.PI*1.5),hM,0,0,z,0,0,-Math.PI/4,1.15,1,1)}for(let k=0;k<8;k++)ad(A,new SG(.14,10,8),hM,0,1.02,-1.5+k*.45)}
 if(K=='magma')ir(20,(x,y,z,a)=>ad(A,new Ad(.35+R()*.3,0),new zt({color:'#2a1408',emissive:'#ff6a10',emissiveIntensity:.8,roughness:.8}),x,y,z,R()*3,R()*3,R()*3));
 if(ov=='frost')ir(K=='cristallo'?34:24,(x,y,z,a)=>ad(A,new CG(.12+R()*.1,.7+R()*.9,5),new zt({color:T[2],emissive:T[5],emissiveIntensity:.35,roughness:.12,metalness:.3}),x*1.0,y*1.0,z,0,0,-a));
 if(K=='natura')ir(26,(x,y,z,a)=>ad(A,new CG(.22,.7,4),new zt({color:R()<.5?'#3a7a2a':'#6aa84a'}),x,y,z,0,0,-a,1,1,.3));
 if(K=='sabbie')ir(14,(x,y,z,a)=>ad(A,new SG(.4,10,6),new zt({color:T[2],roughness:1}),x*.9,y*.9,z,0,0,0,1.4,.45,.8));
 if(K=='luce')ad(A,new TG(.9,.07,10,36),gM,0,1.95,2.5,0,0,0);
 if(K=='abisso'){ad(A,new FG(.03,.03,1.3,6),hM,0,2.5,3.6,-.6);ad(A,new SG(.14,10,8),gM,0,3.05,4.1)}
 for(let i=0;i<(T[9]||0);i++){const a=i*6.28/T[9];ad(A,new SG(.2,12,10),K=='ombra'||K=='nulla'?new zt({color:'#0a0614',emissive:T[5],emissiveIntensity:.5}):gM,Math.cos(a)*3.2,1.5+i*.3,Math.sin(a)*3.2)}}
function hum(P0){const sz=P0.sz||1,m=bM(P0.b?'stone':'skin'),g=new zn;P={m};
 bB=ad(g,P0.b?new BG(1.8,1.7,1.1):new VG(.7,.9,8,18),m,0,.4,0,0,0,0,P0.b?1:1.25,1,.9);
 ad(g,P0.b?new BG(1.3,.5,.9):new SG(.6,14,10),m,0,-.4,0,0,0,0,1,P0.b?1:.7,.8);
 if(P0.robe)ad(g,new CG(1.3,2.7,18),new zt({color:T[3],roughness:.9}),0,-.2,0);
 if(P0.cape)ad(g,new CG(1.2,3,4),new zt({color:'#1a0a24',side:_n}),0,.0,-.7,.1,0,0,1,1,.08);
 const hd=new zn;hd.position.set(0,1.75,.1);g.add(hd);const H=P0.h;
 ad(hd,P0.b?new BG(.95,.85,.85):new SG(.5,22,16),H=='skull'?hM:H=='helm'?aM:m,0,0,0,0,0,0,1,1.05,1.05);
 const j=dm();j.position.set(0,-.25,.25);const ji=dm();ji.rotation.x=-Math.PI/2;j.add(ji);hd.add(j);jw=j;
 ad(ji,P0.b?new BG(.8,.25,.6):new SG(.38,14,10),H=='skull'?hM:H=='helm'?aM:m,0,-.05,.3,0,0,0,1,.5,1);
 const eye=(x,y,z,r)=>ad(hd,new SG(r,10,8),gM,x,y,z);
 if(H=='orc'||H=='troll'){eye(-.18,.08,.43,.06);eye(.18,.08,.43,.06);for(const s of[-1,1]){ad(ji,new CG(.07,.4,6),hM,.25*s,.1,.5,0,0,0);ad(hd,new CG(.12,.4,5),m,.5*s,.15,0,0,0,-1.3*s)}ad(hd,new BG(.9,.14,.2),m,0,.2,.4)}
 if(H=='cyc'){ad(hd,new SG(.2,14,10),new zt({color:'#fff'}),0,.1,.42);ad(hd,new SG(.1,10,8),gM,0,.1,.58);ad(hd,new CG(.1,.35,5),hM,0,.55,.1)}
 if(H=='bull'){eye(-.18,.1,.43,.06);eye(.18,.1,.43,.06);ad(hd,new BG(.5,.45,.6),m,0,-.15,.55);ad(hd,new TG(.12,.03,6,12),aM,0,-.3,.88,Math.PI/2);for(const s of[-1,1]){ad(hd,new CG(.1,.9,8),hM,.45*s,.4,0,0,0,-.9*s);ad(hd,new CG(.08,.5,6),hM,.7*s,.85,0,0,0,.3*s)}}
 if(H=='skull'){for(const s of[-1,1])ad(hd,new SG(.12,10,8),gM,.17*s,.08,.42);for(let k=0;k<5;k++){const a=k*1.2-2.4;ad(hd,new CG(.07,.35,4),new zt({color:'#d9a441',metalness:.8,roughness:.3}),Math.sin(a)*.4,.55,Math.cos(a)*.0-0.05)}}
 if(H=='demon'||H=='garg'){eye(-.18,.1,.43,.07);eye(.18,.1,.43,.07);for(const s of[-1,1]){ad(hd,new CG(.12,H=='demon'?1.0:.6,8),hM,.35*s,.5,0,-.2,0,-.6*s);ad(ji,new CG(.04,.2,5),hM,.14*s,.1,.55)}}
 if(H=='helm'){ad(hd,new BG(.5,.07,.1),gM,0,.05,.5);ad(hd,new CG(.12,.8,6),aM,.4,.45,0,0,0,-.5);ad(hd,new CG(.12,.8,6),aM,-.4,.45,0,0,0,.5)}
 if(H=='golem'){ad(hd,new BG(.6,.1,.1),gM,0,.1,.5)}
 for(const s of[-1,1]){const c=s<0?cL:cR;c.position.set(s*1.15,1.0,0);g.add(c);
  ad(g,P0.b?new BG(.9,.7,.9):new SG(.5,14,10),P0.b?m:aM,s*1.1,1.0,0);
  ad(c,P0.b?new BG(.45,.9,.45):new VG(.26,.8,6,12),m,0,-.55,0);ad(c,P0.b?new BG(.4,.8,.4):new VG(.22,.7,6,12),m,0,-1.3,.1,-.3);
  ad(c,P0.b?new BG(.6,.6,.6):new SG(.32,12,10),m,0,-1.85,.25);
  if(s>0){const w=P0.w;
   if(w=='axe'){ad(c,new FG(.07,.07,2.6,8),hM,0,-1.7,.4,Math.PI/2*0,0,0);ad(c,new BG(.9,.8,.12),aM,.45,-.7,.4);ad(c,new CG(.4,.5,3),aM,.9,-.7,.4,0,0,-Math.PI/2,1,1,.3)}
   if(w=='club'){ad(c,new FG(.28,.16,2.4,10),hM,0,-1.2,.4);for(let k=0;k<6;k++)ad(c,new CG(.06,.25,5),aM,Math.sin(k*1.05)*.3,-.4-k*.15,.4+Math.cos(k*1.05)*.3)}
   if(w=='staff'){ad(c,new FG(.05,.05,3.4,8),hM,0,-1.0,.4);ad(c,new SG(.28,14,10),gM,0,.8,.4);ad(c,new TG(.3,.04,6,16),aM,0,.8,.4)}
   if(w=='sword'){ad(c,new BG(.2,2.4,.06),aM,0,-.5,.45);ad(c,new BG(.7,.1,.12),new zt({color:'#d9a441',metalness:.8}),0,-1.7,.45)}
   if(w=='whip')for(let k=0;k<10;k++)ad(c,new SG(.07,8,6),gM,Math.sin(k*.5)*.5,-1.9+k*.05,.4+k*.3)}}
 for(const s of[-1,1]){ad(g,P0.b?new BG(.55,.9,.6):new VG(.3,.8,6,12),m,s*.5,-.75,0);ad(g,P0.b?new BG(.5,.8,.55):new VG(.26,.7,6,12),m,s*.5,-1.25,.05);ad(g,new BG(.55,.25,.9),P0.b?m:aM,s*.5,-1.42,.2)}
 if(P0.wing){wL=wingG(-1,false);wR=wingG(1,false);wL.position.set(-.6,.9,-.5);wR.position.set(.6,.9,-.5);wL.rotation.z=1;wR.rotation.z=-1;g.add(wL,wR)}
 if(P0.b&&K=='golem'){ad(g,new SG(.3,14,10),gM,0,.5,.6)}
 g.scale.setScalar(sz);A.add(g)}
function spider(){const m=bM('skin');P={m};bB=ad(A,new SG(1.3,24,18),m,0,.1,-1.1,0,0,0,1,.85,1.2);ad(A,new SG(.8,20,14),m,0,.2,.6,0,0,0,1,.8,1);
 for(let i=0;i<8;i++)ad(A,new SG(.06+.03*(i%3),8,6),gM,(i-3.5)*.1,.55,1.35);
 const j=dm();j.position.set(0,0,1.3);const ji=dm();ji.rotation.x=-Math.PI/2;j.add(ji);A.add(j);jw=j;for(const s of[-1,1])ad(ji,new CG(.1,.7,6),hM,.2*s,-.2,.3,Math.PI);
 for(let i=0;i<8;i++){const s=i<4?-1:1,k=i%4,z=.9-k*.55,a=(k-1.5)*.35,lg=new zn;lg.position.set(s*.7,.2,z);ad(lg,new FG(.08,.12,1.6,8),hM,s*.8,.3,0,0,0,-s*1.0+a*0,1,1,1);ad(lg,new FG(.06,.09,1.9,8),hM,s*1.95,-.55,.0,0,0,s*.3);A.add(lg);LG.push(lg)}
 for(const s of[-1,1]){const c=s<0?cL:cR;c.position.set(s*.4,.2,1.4);ad(c,new FG(.1,.14,1.0,8),hM,0,-.4,.2,-.5);A.add(c)}
 ad(A,new BG(.3,.05,.3),gM,0,.7,-1.0)}
function kraken(){const m=bM('skin');P={m};bB=ad(A,new SG(1.5,28,20),m,0,.9,-.3,0,0,0,1,1.3,1.1);
 for(const s of[-1,1]){ad(A,new SG(.34,12,10),new zt({color:'#fff'}),.65*s,.7,.95);ad(A,new SG(.17,10,8),gM,.65*s,.7,1.2)}
 const j=dm();j.position.set(0,-.2,1.0);const ji=dm();ji.rotation.x=-Math.PI/2;j.add(ji);A.add(j);jw=j;for(const s of[-1,1])ad(ji,new CG(.12,.6,6),aM,.15*s,.0,.3,Math.PI);
 for(let i=0;i<8;i++){const a=i/8*6.28,tg=new zn,big=i==0||i==4;tg.position.set(Math.sin(a)*.9,-.3,Math.cos(a)*.6-.3);
  for(let k=0;k<7;k++){const f=k/6;ad(tg,new SG(.34-.26*f,12,10),m,Math.sin(a)*(.2+f*1.6),-f*.9+(k>4?-.2:0),Math.cos(a)*(.2+f*1.4));if(k%2==1)ad(tg,new SG(.07,6,6),gM,Math.sin(a)*(.2+f*1.6),-f*.9+.12-.2,Math.cos(a)*(.2+f*1.4)+.1)}
  if(i==2){cL.position.copy(tg.position);cL.add(...tg.children);A.add(cL)}else if(i==6){cR.position.copy(tg.position);cR.add(...tg.children);A.add(cR)}else A.add(tg)}
 ad(A,new SG(.4,10,8),gM,0,2.1,-.6)}
const pl=K=='ragno'?spider:K=='kraken'?kraken:HM[K]?()=>hum(HM[K]):()=>dragon(K=='idra'?3:1);let P;pl();
if(DBA_LEGO)DBA_BRICK(A);A.position.set(0,1.5,0);j.add(A);
return{grp:A,bBody:bB,bMesh:A,clawL:cL,clawR:cR,jaw:jw,wingL:wL,wingR:wR,tail:tailP,legs:LG}}
