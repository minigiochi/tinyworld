function WOW_build(T,A,pv){
 var G=A.appearance||{};
 if(!G.race||!WOW_RACES[G.race]){
  if(pv){G=WOW_ensure({sex:Math.random()<.5?"male":"female"})}
  else{WOW_ensure(G);if(!A.appearance)A.appearance=G}}
 var R=WOW_RACES[G.race],ck=A.classKey||A.key,
  CL=WOW_CLS[ck]||{r:"Guerriero",arm:A.arch==="ranged"||A.arch==="healer"?"cloth":"plate",robe:A.arch==="healer"||A.arch==="ranged"?1:0,pa:"small",hm:A.helmet,c2:10199218},
  hm=CL.hm||A.helmet,W=G.sex==="female",
  C=function(h){return new T.Rt(h)},
  sh=function(c,f){return c.clone().multiplyScalar(f)},
  S=function(r,w,h,a,b,c,d){if(DBA_LEGO&&a===undefined&&b===undefined)return new T.Fn(r,r,r*1.5,Math.max(8,Math.round(8*DBAQ.seg*.8)),1);return new T.Tt(r,Math.round((w||6)*DBAQ.seg),Math.round((h||4)*DBAQ.seg),a,b,c,d)},
  Bx=function(x,y,z){return new T.rn(x,y,z)},
  Co=function(r,h,s){s=s||5;return new T.Gt(r,h,s>4?Math.round(s*DBAQ.seg):s)},
  Cy=function(a,b,h,s){s=s||6;if(DBA_LEGO){if(LGT&&(LGT.charAt(0)==="t"||LGT.charAt(0)==="s")&&a<.3&&h>.12)return new T.rn(a*1.9,h,a*1.9);if(a>.3){var g4=new T.Fn(a*1.3,b*1.3,h,4,1);g4.rotateY(Math.PI/4);return g4}return new T.Fn(a,b,h,s>4?Math.max(8,Math.round(s*DBAQ.seg*.7)):s,1)}return new T.Fn(a,b,h,s>4?Math.round(s*DBAQ.seg):s,1)},
  Ic=function(r){return DBA_LEGO?new T.rn(r*1.5,r*1.5,r*1.5):new T.La(r,DBAQ.seg>=2?1:0)},
  Oc=function(r){return new T.Ad(r,0)},
  PI=Math.PI,
  cls=C(A.color||"#cccccc"),skin=C(G.skinColor||15778208),hair=C(G.hairColor||1710618),
  furC=G.skinColor||15778208,
  eyeHex=CL.glow&&hm==="horned"&&CL.dark?CL.glow:(R.eye!=null?R.eye:(G.eyeColor||3815994)),
  c2=C(CL.c2||10199218),
  steel=C(CL.dark?3815994:(CL.stone?9139029:11975116)),steelD=C(CL.dark?1710624:5326430),
  gold=C(15246657),wood=C(7029795),leath=C(7036462),leathD=C(4010514),bone=C(14078648),ivory=C(15724490),dark=C(1118481),
  plate=CL.arm==="plate",bare=CL.arm==="bare",cloth=CL.arm==="cloth",leather=CL.arm==="leather",
  bw=Math.max(.8,Math.min(1.3,G.widthMul||1))*(A.form==="tank"?1.1:1)*(W?.92:1),
  hun=R.hunch||0,
  armCol=plate?steel:(cloth?sh(cls,.8):(leather?leathD:skin)),
  metal=plate?(CL.gold?gold:steel):steel,
  stat={l:[],g:[],ox:0,oy:0,oz:0,k:1},head={l:[],g:[],ox:0,oy:0,oz:0,k:1},
  aL={l:[],g:[],ox:0,oy:0,oz:0,k:1},aR={l:[],g:[],ox:0,oy:0,oz:0,k:1};
 var EQ=(A._eq&&Object.keys(A._eq).length)?A._eq:(window.DBA_EQ?DBA_EQ(A):{}),iw=EQ.weapon,ia=EQ.armor,ih=EQ.head,ROBE=CL.robe,PA=CL.pa,ask=null,hsk=null,RC=null,mail=false;
 if(ia){ask=WOW_skin(T,ia);var ak=WOW_AK[ask.k]||"plate";mail=ak==="mail";plate=ak==="plate"||mail;cloth=ak==="cloth";leather=ak==="leather";bare=false;ROBE=cloth?1:0;steel=ask.p;steelD=sh(ask.p,.55);metal=ask.t>=3?C(15246657).lerp(ask.p,.45):ask.p;armCol=plate||cloth?ask.p:ask.s;RC=ask.p;PA=plate?["round","big","spiked","fur","small","huge"][ask.h%6]:(leather?["small","fur","none","spiked"][ask.h%4]:["small","round","leaf","bolt"][ask.h%4])}
 if(ih){hsk=WOW_skin(T,ih);hm=WOW_HK[hsk.k]||"helmet"}
 var ISH=EQ.shoulders,shCol=null,ssk=null,OFH=EQ.offhand,CSH=CL.sh,ohsk=null;
 if(ISH){ssk=WOW_skin(T,ISH);var sak=(window.DBA_ARMK&&DBA_ARMK[ISH.classKey])||"plate";shCol=ssk.p;PA=(sak==="plate"?["round","big","spiked","big","small","huge"]:sak==="mail"?["round","big","round","small"]:sak==="leather"?["small","fur","small","spiked"]:["small","round","leaf","small"])[ssk.h%(sak==="plate"?6:4)]}
 if(OFH&&OFH.ohk==="shield"){ohsk=WOW_skin(T,OFH);CSH=(ohsk.k==="Targa"||ohsk.k==="Brocchiero")?"round":(ohsk.k==="Scudo a Torre"?"tower":"kite")}
 else if(OFH&&OFH.ohk==="held")ohsk=WOW_skin(T,OFH);
 if(EQ.mainhand&&EQ.mainhand.hands==="two"&&!(OFH&&OFH.ohk==="shield"))CSH=null;
 if(A.hideHelm){hsk=null;hm="none"}
 var AFL=false,LGT=null;function add(B,geo,col,p,r,s,glow){(glow?B.g:B.l).push({geo:geo,col:col,p:p||[0,0,0],r:r,s:s,ox:B.ox,oy:B.oy,oz:B.oz,k:B.k,fa:AFL,lg:LGT})}
 var hk=.4*R.hd+.08,hy=1.1+.32*R.hd-hun*.5,hz=hun;
 head.ox=0;head.oy=hy;head.oz=hz;head.k=R.hd;
 // ---------- LEGS ----------
 var lx=.18*bw,pandaLim=R.panda?dark:null;
 if(ROBE){
  add(stat,Cy(.34*bw,.6*bw,.62,7),RC||sh(cls,.55),[0,.31,0]);
  add(stat,Cy(.61*bw,.62*bw,.06,7),ask&&ask.t>=1?ask.acc:C(CL.trim||13152348),[0,.04,0]);
  add(stat,Co(.12*bw,.3,3),sh(cls,.45),[0,.2,.46*bw],[PI,0,0])}
 else{
  for(var sx=-1;sx<=1;sx+=2){
   var legC=plate?steel:(leather?leathD:(cloth?sh(cls,.6):skin));
   if(pandaLim)legC=dark;
   if(bare&&!pandaLim)legC=sh(cls,.55);
   LGT="t"+sx;add(stat,Cy(.15*bw,.12*bw,.34,6),legC,[sx*lx,.36,0]);LGT="s"+sx;
   add(stat,Cy(.12*bw,.1*bw,.3,6),plate?steel:(R.fur?C(furC):legC),[sx*lx,.16,0]);
   if(plate)add(stat,S(.1*bw,5,4),metal,[sx*lx,.34,.1],0,[1,.9,.8])}}
 for(var sx2=-1;sx2<=1;sx2+=2){LGT="s"+sx2;
  if(R.hoof){add(stat,Cy(.09*bw,.12*bw,.2,5),dark,[sx2*lx,.1,.02]);add(stat,Co(.06,.1,4),dark,[sx2*lx,.03,.1],[PI/2,0,0])}
  else add(stat,Bx(.2*bw,.13,.32),plate?steelD:(leather?leathD:sh(cls,.35)),[sx2*lx,.07,.05]);
  if(R.claws&&!ROBE){for(var cc=-1;cc<=1;cc++)add(stat,Co(.02,.08,3),ivory,[sx2*lx+cc*.05,.04,.24],[PI/2,0,0])}}
 LGT=null;
 // ---------- TORSO OVERLAYS ----------
 add(stat,Cy(.42*bw,.42*bw,.1,6),leathD,[0,.52,0],0,[1,1,.82]);
 add(stat,Bx(.1,.1,.04),gold,[0,.52,.34*bw]);
 if(plate){
  add(stat,Cy(.51*bw,.4*bw,.4,6),metal,[0,.99,0],0,[1,1,.82]);
  add(stat,Cy(.3*bw,.34*bw,.12,6),steelD,[0,1.2,0],0,[1,1,.9]);
  add(stat,Co(.12,.26,3),CL.gold?gold:steelD,[0,1.0,.34*bw],[PI/2,0,0],[1,1,.3]);
  if(CL.stone){for(var q=0;q<3;q++)add(stat,Ic(.12),C(7041638),[(q-1)*.2,.78,.34*bw])}}
 if(ask&&plate){var v4=(ask.h>>>4)%3;if(v4===1)add(stat,Bx(.07,.5,.05),ask.s,[0,.99,.37*bw]);else if(v4===2){for(var bb=0;bb<3;bb++)add(stat,Cy(.42*bw,.4*bw,.08,6),ask.s,[0,.86-bb*.09,0],0,[1,1,.85])}if(mail)for(var st=0;st<6;st++)add(stat,Ic(.03),sh(ask.p,.5),[(st%3-1)*.14,1.04-(st>2?.14:0),.37*bw])}
 else if(leather){
  add(stat,Cy(.5*bw,.41*bw,.46,6),ask?ask.s:leath,[0,.98,0],0,[1,1,.82]);
  add(stat,Bx(.06,.4,.03),leathD,[0,.96,.36*bw]);
  add(stat,Cy(.43*bw,.43*bw,.07,6),sh(c2,1),[0,.76,0],0,[1,1,.84])}
 else if(bare){
  add(stat,Cy(.5*bw,.41*bw,.46,6),R.panda?C(16118250):skin,[0,.99,0],0,[1,1,.78]);
  add(stat,Bx(.07,.55,.03),c2,[-.18*bw,1.0,.34*bw],[0,0,.5]);
  add(stat,Bx(.07,.55,.03),c2,[.18*bw,1.0,.34*bw],[0,0,-.5]);
  if(CL.paint)add(stat,Bx(.3,.05,.03),C(13369344),[0,1.12,.33*bw]);
  if(CL.sash)add(stat,Cy(.43*bw,.43*bw,.14,6),c2,[0,.6,0],0,[1,1,.84])}
 else if(ask&&cloth){add(stat,Cy(.5*bw,.41*bw,.46,6),ask.p,[0,.98,0],0,[1,1,.82]);add(stat,Bx(.08,.5,.03),ask.s,[0,.98,.36*bw]);add(stat,Cy(.43*bw,.43*bw,.07,6),ask.s,[0,.76,0],0,[1,1,.84])}
 else if(CL.tabard){
  add(stat,Bx(.3,.7,.04),C(16316664),[0,.7,.36*bw]);add(stat,Bx(.06,.3,.045),gold,[0,.8,.37*bw]);add(stat,Bx(.2,.06,.045),gold,[0,.84,.37*bw])}
 if(ask){if(ask.t>=2)add(stat,Oc(.09),ask.acc,[0,1.02,.38*bw],0,[1,1.4,.5],1);if(ask.t>=3)add(stat,Cy(.3*bw,.3*bw,.03,6),ask.acc,[0,1.2,0],0,[1,1,.9],1)}
 if(CL.sash&&!bare)add(stat,Cy(.43*bw,.43*bw,.14,6),c2,[0,.6,0],0,[1,1,.84]);
 if(CL.runes){for(var rq=0;rq<3;rq++)add(stat,Bx(.05,.12,.03),C(CL.glow),[(rq-1)*.15,.98,.36*bw],0,0,1)}
 if(CL.skull){add(stat,Ic(.09),bone,[.3*bw,.52,.3]);add(stat,Bx(.03,.03,.02),dark,[.3*bw-.03,.53,.38]);add(stat,Bx(.03,.03,.02),dark,[.3*bw+.03,.53,.38])}
 if(CL.quiver){add(stat,Cy(.09,.08,.55,5),leath,[.2,1.0,-.34],[.3,0,-.4]);for(var qa=0;qa<3;qa++)add(stat,Co(.025,.12,3),ivory,[.1+qa*.04,1.32,-.42],[.3,0,-.4])}
 if(CL.totem){add(stat,Cy(.03,.03,.5,5),wood,[-.25,.95,-.36]);add(stat,Oc(.09),C(3646463),[-.25,1.25,-.36],0,0,1)}
 if(R.gnome){var gbC=plate?metal:(leather?(ask?ask.s:leath):(bare?skin:(ask&&cloth?ask.p:(cloth?sh(cls,.8):cls))));add(stat,S(.37*bw,9,7),gbC,[0,.8,.2],0,[1,.95,.85])}
 // cape
 if(CL.cape){
  var capC=CL.dark?C(2763322):(CL.gold?C(16316664):sh(c2,.9));
  add(stat,Bx(.66*bw,.5,.04),capC,[0,1.0,-.3*bw],[.1,0,0]);
  add(stat,Bx(.54*bw,.4,.04),capC,[0,.62,-.34*bw],[.16,0,0]);
  add(stat,Co(.27*bw,.3,4),capC,[0,.3,-.36*bw],[PI+.16,PI/4,0],[1,1,.2])}
 // tail
 LGT="tl";
 if(R.tail==="hoof"){add(stat,Cy(.05,.06,.3,4),skin,[0,.55,-.32],[-.6,0,0]);add(stat,Cy(.04,.05,.3,4),skin,[0,.42,-.52],[-.2,0,0]);add(stat,Co(.07,.14,4),dark,[0,.25,-.55],[PI,0,0])}
 if(R.tail==="fur"){add(stat,Co(.13,.6,5),C(furC),[0,.5,-.5],[-2.2,0,0])}
 if(R.tail==="tuft"){add(stat,Cy(.03,.04,.5,4),C(furC),[0,.45,-.35],[-.3,0,0]);add(stat,Ic(.1),dark,[0,.2,-.4])}
 if(R.tail==="nub")add(stat,S(.1,5,4),C(16118250),[0,.55,-.34]);
 LGT=null;
 // ---------- BUSTO FEMMINILE ----------
 if(W){var bC=plate?metal:(leather?(ask?ask.s:leath):(bare?(R.panda?C(16118250):skin):(ask&&cloth?ask.p:(cloth?sh(cls,.8):cls))));
  add(stat,S(.3*bw,10,8),bC,[0,1.06,.31*bw],0,[1.15,.62,.42]);
  for(var bsx=-1;bsx<=1;bsx+=2)add(stat,WOW_BUST(T,.17*bw,bsx),bC,[bsx*.125*bw,1.02,.33*bw])}
 // ---------- PAULDRONS ----------
 for(var ps=-1;ps<=1;ps+=2){
  var px=ps*.6*bw,py=1.08,pt=PA;LGT="p"+ps;
  if(ask&&ask.t>=4)add(stat,Co(.07,.3,4),ask.acc,[px,py+.3,0],[0,0,-ps*.2],0,1);
  if(pt==="round"||pt==="big"||pt==="huge"||pt==="big1"||pt==="spiked"||pt==="small"){
   var pr=pt==="huge"?.34:(pt==="big"||pt==="big1"?.28:(pt==="small"?.18:.22));
   if(pt==="big1"&&ps===1)pr=.16;
   add(stat,S(pr,6,4),shCol?shCol:(PA==="small"?(cloth?sh(cls,.85):leathD):(CL.stone?C(8021578):metal)),[px,py,0],0,[1.1,.7,1.05]);if(ssk&&ssk.t>=2)add(stat,Oc(.05),ssk.acc,[px,py+.14,.05],0,0,1);
   if(pt==="big"||pt==="huge")add(stat,Co(pr*.45,pr*.8,4),CL.gold?gold:steelD,[px+ps*pr*.5,py+.06,0],[0,0,-ps*1.2]);
   if(pt==="spiked"){add(stat,Co(.07,.32,4),steelD,[px+ps*.1,py+.2,0],[0,0,-ps*.5]);add(stat,Co(.05,.2,4),steelD,[px+ps*.05,py+.12,.14],[.7,0,-ps*.3])}}
  else if(pt==="fur"){add(stat,S(.26,5,4),C(8018490),[px,py,0],0,[1.2,.7,1.1]);for(var ft=0;ft<4;ft++)add(stat,Co(.05,.16,3),C(8018490),[px+ps*(.1+ft*.04),py-.05,.1-ft*.08],[0,0,ps*2.2])}
  else if(pt==="leaf"){for(var lf=0;lf<3;lf++)add(stat,Co(.08,.3,4),C(5929525+lf*1600),[px+ps*lf*.07,py+.04-lf*.02,0],[0,0,-ps*(.5+lf*.5)],[1,1,.5])}
  else if(pt==="skull"){add(stat,Ic(.15),bone,[px,py+.08,0]);add(stat,Bx(.04,.04,.03),dark,[px-.04,py+.1,.13]);add(stat,Bx(.04,.04,.03),dark,[px+.04,py+.1,.13])}
  else if(pt==="ice"){add(stat,Oc(.16),C(10475775),[px,py+.1,0],0,[1,1.5,1],0);add(stat,Co(.06,.25,4),C(14281727),[px+ps*.1,py+.28,0],[0,0,-ps*.3])}
  else if(pt==="bolt"){add(stat,S(.18,5,4),leathD,[px,py,0],0,[1.1,.7,1]);add(stat,Co(.04,.3,3),C(3646463),[px+ps*.08,py+.22,0],[0,0,-ps*.5],0,1)}
  else{add(stat,S(.17,5,4),armCol,[px,py,0])}
  if(plate)for(var lm=1;lm<=2;lm++)add(stat,Cy(.2-lm*.025,.17-lm*.025,.045,8),lm==1?metal:steelD,[px+ps*lm*.02,py-.1-lm*.065,0],[0,0,ps*.12],[1.1,1,1.05]);
 }
 LGT=null;
 // ---------- ARMS ----------
 for(var as=-1;as<=1;as+=2){
  var B=as<0?aL:aR,sl=armCol,aw=R.gnome?.78:1;
  if(R.panda)sl=dark;
  add(B,Cy(.13*bw*aw,.11*bw*aw,.34,6),sl,[0,-.18,0]);
  add(B,Cy(.11*bw*aw,.09*bw*aw,.28,6),plate?steelD:(leather?leathD:(bare?(R.panda?dark:skin):sh(cls,.7))),[0,-.4,0]);
  if(plate)add(B,Cy(.125*bw,.1*bw,.18,6),CL.gold?gold:steel,[0,-.43,0]);
  if(DBA_LEGO)add(B,Cy(.09*bw,.09*bw,.13,10),R.panda?dark:(plate?steelD:skin),[0,-.56,.01],[PI/2,0,0]);else add(B,Ic(.1),R.panda?dark:(plate?steelD:skin),[0,-.56,.01]);
  var holdsW=as>0?!!(A.weapon||iw):!!(CL.dual||(iw&&WOW_skin(T,iw).k==="Pugnali Gemelli"));
  if(!holdsW){for(var fg=-1.5;fg<=1.5;fg++)add(B,Cy(.017*bw,.014*bw,.09,5),R.panda?dark:(plate?steelD:skin),[fg*.032*bw,-.62,.05],[.7,0,0]);
  add(B,Cy(.02*bw,.016*bw,.08,5),R.panda?dark:(plate?steelD:skin),[.07*bw,-.58,.04],[.5,0,.8])}
  if(R.claws){for(var cl=-1;cl<=1;cl++)add(B,Co(.02,.09,3),ivory,[cl*.04,-.64,.05],[PI-.4,0,0])}}
 AFL=true;
 // shield (left arm)
 if(CSH){
  var shC=ohsk&&OFH.ohk==="shield"?ohsk.p:(CL.gold?gold:(CL.stone?C(8021578):steel)),sc=Math.cos(2.05),ss=Math.sin(2.05),W0=[.06,.26,.38];
  var shp=function(w){return[w[0],w[1]*sc-w[2]*ss-.34,w[1]*ss+w[2]*sc]};
  var sA=function(geo,col,o,r,sx){add(aL,geo,col,shp([W0[0]+o[0],W0[1]+o[1],W0[2]+o[2]]),[(r?r[0]:0)+2.05,r?r[1]:0,r?r[2]:0],sx)};
  if(CSH==="round"){sA(Cy(.3,.3,.07,8),shC,[0,0,0],[PI/2,0,0]);sA(Ic(.08),ohsk&&OFH.ohk==="shield"?ohsk.acc:gold,[0,0,.06])}
  else if(CSH==="kite"){sA(Bx(.5,.34,.07),shC,[0,.08,0]);sA(Co(.25,.42,4),shC,[0,-.28,0],[0,PI/4,PI],[1,1,.28]);sA(Ic(.07),CL.gold?C(16316664):gold,[0,0,.05])}
  else{sA(Bx(.5,.68,.08),shC,[0,0,0]);sA(Bx(.42,.1,.09),gold,[0,.17,0]);sA(Co(.08,.2,4),steelD,[0,.02,.1],[PI/2,0,0])}
  sA(Cy(.022,.022,.22,5),leathD,[0,-.16,-.17],[0,0,PI/2]);sA(Bx(.16,.035,.035),leathD,[0,-.2,-.2])}
 if(OFH&&OFH.ohk==="held"&&ohsk){var hb=ohsk.k;if(hb==="Tomo"||hb==="Grimorio"){add(aL,Bx(.26,.34,.07),ohsk.p,[.02,-.72,.2],[.3,0,0]);add(aL,Bx(.04,.34,.08),ohsk.s,[-.1,-.72,.2],[.3,0,0]);add(aL,Ic(.05),ohsk.acc,[.04,-.72,.25],0,0,1)}else{add(aL,S(.11,8,6),ohsk.acc,[0,-.7,.14],0,0,1);add(aL,Cy(.07,.05,.05,6),ohsk.s,[0,-.8,.14])}}
 // ---------- WEAPON (right arm; origin = old weapon group (0,-.5,.1)) ----------
 var wk=A.weapon,wo=[0,-.56,.02],isk=null,dualW=CL.dual;
 if(iw){isk=WOW_skin(T,iw);wk=WOW_WK[isk.k]||wk;dualW=isk.k==="Pugnali Gemelli"}
 var wGlow=C(CL.glow||A.color||"#88ccff"),
  RB=isk?C(13420768).lerp(isk.p,.55):C(CL.dark?9145248:(wk==="katana"?15263992:(wk==="dagger"?14277081:13420768))),
  RG=isk?(isk.t>=3?isk.acc:isk.s):(wk==="katana"?dark:(CL.dark?steelD:gold)),
  RH=isk?isk.d:wood,RM=isk?isk.acc:wGlow,RS=isk?isk.p:(CL.stone?C(8021578):steel);
 var HPd=window.__HOLD||DBA_HOLD,HP=HPd[wk],twoH=!!(HP&&!CSH&&!dualW),WA=(wk==="bow"&&twoH)?aL:aR;var TL={staff:.55,spear:.55,scythe:.5,bow:.12,crossbow:1.45,sword:1,katana:1,scimitar:1,greatsword:1.15,dagger:.9,axe:.9,hammer:.9,mace:.9},tl=twoH?HP.tl:(TL[wk]||.9),ct=Math.cos(tl),sn=Math.sin(tl);
 function wa(geo,col,p,r,s,glow){add(WA,geo,col,[wo[0]+p[0],wo[1]+p[1]*ct-p[2]*sn,wo[2]+p[1]*sn+p[2]*ct],r?[r[0]+tl,r[1],r[2]]:[tl,0,0],s,glow)}
 if(isk){aR.k=1.25;aR.oy=.14;aR.oz=-.005}
 if(wk==="staff"){
  wa(Cy(.04,.05,1.5,5),RH,[0,.3,0]);
  if(CL.skull&&!isk){wa(Ic(.14),bone,[0,1.1,0]);wa(Bx(.04,.04,.03),dark,[-.05,1.12,.12]);wa(Bx(.04,.04,.03),dark,[.05,1.12,.12]);wa(Co(.02,.12,3),wGlow,[0,1.22,0],0,0,1)}
  else if(CL.ice&&!isk){wa(Oc(.13),C(10475775),[0,1.12,0],0,[1,1.9,1],1);wa(Co(.03,.2,3),C(14281727),[.13,1.0,0],[0,0,-.8]);wa(Co(.03,.2,3),C(14281727),[-.13,1.0,0],[0,0,.8])}
  else if(CL.bolt&&!isk){wa(Oc(.13),C(3646463),[0,1.1,0],0,0,1);wa(Co(.03,.25,3),C(16770648),[0,1.32,0],[0,0,.3],0,1)}
  else{var np=isk?3+isk.h%3:3;wa(isk&&isk.h%2?Ic(.14):Oc(.15),RM,[0,1.1,0],0,0,1);for(var pg=0;pg<np;pg++){var an=pg/np*PI*2;wa(Co(.03,.25,3),isk?isk.s:gold,[Math.cos(an)*.12,.98,Math.sin(an)*.12],[Math.sin(an)*.35,0,-Math.cos(an)*.35])}}}
 else if(wk==="sword"||wk==="katana"){
  var kt=wk==="katana",bl=isk?.85+(isk.h%30)/100:1;
  wa(Bx(kt?.05:.1,.72*bl,.03),RB,[0,.14+.36*bl,0]);
  wa(Co(kt?.035:.07,.2,4),RB,[0,.14+.72*bl+.1,0],0,[1,1,.4]);
  wa(Bx(kt?.16:(isk&&isk.h%2?.46:.34),.07,.09),RG,[0,.1,0]);
  wa(Cy(.03,.03,.22,5),leathD,[0,-.03,0]);wa(Ic(.05),RG,[0,-.17,0])}
 else if(wk==="scimitar"){
  wa(Bx(.1,.3,.03),RB,[0,.3,0]);wa(Bx(.1,.3,.03),RB,[.03,.58,0],[0,0,-.15]);wa(Bx(.1,.3,.03),RB,[.09,.84,0],[0,0,-.35]);wa(Co(.06,.2,4),RB,[.19,1.04,0],[0,0,-.7],[1,1,.4]);
  wa(Bx(.3,.06,.08),RG,[0,.1,0]);wa(Cy(.03,.03,.2,5),leathD,[0,-.03,0]);wa(Ic(.05),RG,[0,-.16,0])}
 else if(wk==="greatsword"){
  wa(Bx(.16,1.25,.04),RB,[0,.8,0]);
  wa(Co(.1,.32,4),RB,[0,1.58,0],0,[1,1,.35]);
  wa(Bx(.5,.09,.1),RG,[0,.14,0]);wa(Cy(.035,.035,.3,5),leathD,[0,-.05,0]);wa(Ic(.06),RG,[0,-.22,0]);
  if(CL.runes){for(var rn2=0;rn2<4;rn2++)wa(Bx(.03,.1,.05),C(CL.glow),[0,.35+rn2*.25,0],0,0,1)}}
 else if(wk==="dagger"){
  wa(Bx(.07,.38,.02),RB,[0,.3,0]);wa(Co(.05,.14,4),RB,[0,.57,0],0,[1,1,.4]);wa(Bx(.18,.05,.07),isk?RG:dark,[0,.1,0]);wa(Cy(.025,.025,.16,5),leathD,[0,0,0])}
 else if(wk==="axe"){
  wa(Cy(.04,.045,1.05,5),RH,[0,.3,0]);
  wa(Bx(.1,.3,.06),isk?RS:steel,[0,.68,0]);
  for(var as2=-1;as2<=1;as2+=2){wa(Co(.17,.26,3),RB,[as2*.2,.68,0],[0,0,-as2*PI/2],[1,1,.35])}
  wa(Co(.04,.14,4),steelD,[0,.88,0])}
 else if(wk==="hammer"){
  wa(Cy(.04,.045,1.05,5),RH,[0,.3,0]);wa(Bx(.34,.26,.26),RS,[0,.85,0]);
  wa(Co(.05,.12,4),steelD,[.2,.85,0],[0,0,-PI/2]);wa(Co(.05,.12,4),steelD,[-.2,.85,0],[0,0,PI/2])}
 else if(wk==="spear"){
  wa(Cy(.03,.04,1.8,5),RH,[0,.45,0]);wa(Co(.08,.42,4),RB,[0,1.55,0],0,[1,1,.35]);
  wa(Bx(.14,.04,.04),isk?RG:gold,[0,1.32,0]);wa(Co(.06,.22,3),isk?isk.acc:C(13369344),[0,1.18,-.05],[PI,0,0],[1,1,.2])}
 else if(wk==="scythe"){
  wa(Cy(.035,.045,1.7,5),RH,[0,.4,0]);wa(Bx(.5,.07,.03),RB,[.25,1.22,0],[0,0,-.15]);wa(Bx(.3,.06,.03),RB,[.55,1.1,0],[0,0,-.7]);wa(Co(.05,.2,3),RB,[.66,.95,0],[0,0,-PI+.4],[1,1,.4])}
 else if(wk==="mace"){
  wa(Cy(.035,.04,.6,5),RH,[0,.1,0]);wa(Ic(.17),isk?RS:(CL.gold?gold:steel),[0,.5,0]);
  for(var mq=0;mq<6;mq++){var ma=mq/6*PI*2;wa(Co(.05,.14,4),isk?RG:(CL.gold?gold:steelD),[Math.cos(ma)*.2,.5,Math.sin(ma)*.2],[Math.sin(ma)*1.2,0,-Math.cos(ma)*1.2])}}
 else if(wk==="bow"){
  var nseg=7,rad=isk&&isk.k==="Arco Lungo"?.75:.6,bz=function(a){return rad*Math.cos(a)-rad+.2};
  for(var bs=0;bs<nseg;bs++){var a0=-1.1+(bs+.5)/nseg*2.2;
   wa(Bx(.05,2*rad*Math.sin(1.1/nseg)+.01,.05),isk?isk.p:wood,[0,rad*Math.sin(a0),bz(a0)],[-a0,0,0])}
  var bT=rad*Math.sin(1.1),bN=-.2,bL=Math.hypot(bT,bz(1.1)-bN),bA=Math.atan2(bz(1.1)-bN,bT);
  wa(Bx(.01,bL,.01),ivory,[0,bT/2,(bz(1.1)+bN)/2],[bA,0,0]);wa(Bx(.01,bL,.01),ivory,[0,-bT/2,(bz(1.1)+bN)/2],[-bA,0,0]);
  wa(Cy(.011,.011,.86,5),wood,[0,0,.23],[PI/2,0,0]);wa(Co(.03,.1,4),steel,[0,0,.69],[PI/2,0,0]);
  wa(Bx(.05,.012,.1),ivory,[0,0,-.13],0);wa(Bx(.012,.05,.1),ivory,[0,0,-.13],0)}
 else if(wk==="crossbow"){
  var xph=twoH?(HP.phi||0):0,xc=Math.cos(xph),xs=Math.sin(xph),wx=function(geo,col,p,rz){var X=p[0]*xc+p[2]*xs,Z=-p[0]*xs+p[2]*xc;add(aR,geo,col,[wo[0]+X,wo[1]+p[1]*ct-Z*sn,wo[2]+p[1]*sn+Z*ct],[tl,xph,rz||0])};
  wx(Bx(.06,.07,.17),RH,[0,-.01,0]);wx(Bx(.012,.04,.05),steelD,[0,.05,-.04]);
  wx(Bx(.075,.95,.075),RH,[0,.12,.12]);wx(Bx(.08,.04,.14),steelD,[0,-.36,.11]);
  wx(Bx(.03,.7,.025),steelD,[0,.27,.17]);wx(Cy(.011,.011,.62,5),ivory,[0,.3,.19]);wx(Co(.025,.09,4),steel,[0,.64,.19]);
  for(var xl=-1;xl<=1;xl+=2){wx(Bx(.22,.045,.045),isk?RS:steelD,[xl*.15,.5,.12]);wx(Bx(.2,.04,.04),isk?RS:steelD,[xl*.31,.46,.12],-xl*.38);wx(Bx(.5,.01,.01),ivory,[xl*.21,.3,.12],xl*.563)}}
 if(isk){var wy=wk==="staff"?1.1:(wk==="bow"?.3:.8);
  if(isk.t>=2)wa(Oc(.07),RM,[0,.14,.07],0,[1,1.3,1],1);
  if(isk.t>=3){wa(Oc(.05),RM,[.14,wy,0],0,0,1);wa(Oc(.05),RM,[-.14,wy+.1,0],0,0,1)}
  if(isk.t>=4)wa(Co(.08,.3,4),RM,[0,wy+.45,0],0,0,1)}
 aR.k=1;aR.oy=0;aR.oz=0;
 function gripW(B,t,sp){var c=Math.cos(t),n=Math.sin(t),hc=R.panda?dark:(plate?steelD:skin),rr=wk==="dagger"?.036:(wk==="sword"||wk==="katana"||wk==="scimitar"||wk==="greatsword"?.042:.05);
  for(var f=0;f<4;f++){var d=(f-1.5)*.04*sp;add(B,new T.Ci(rr,.017*bw,5,10),hc,[wo[0],wo[1]+d*c,wo[2]+d*n],[t-PI/2,0,0],[1,1,1])}
  add(B,Cy(.017*bw,.015*bw,.1,5),hc,[wo[0],wo[1]+.075*c+rr*.9*-n,wo[2]+.075*n+rr*.9*c],[t+.5,0,PI/2]);
  add(B,Cy(.026*bw,.026*bw,.05,6),hc,[wo[0],wo[1]-.07*c,wo[2]-.07*n],[t,0,0])}
 function gripX(){var P=HP.phi||0,d=[Math.sin(P),-Math.sin(tl)*Math.cos(P),Math.cos(tl)*Math.cos(P)],ry=Math.asin(d[0]),rx=Math.atan2(-d[1],d[2]),hc=R.panda?dark:(plate?steelD:skin);for(var f=0;f<4;f++){var u=(f-1.5)*.04;add(aR,new T.Ci(.05,.017*bw,5,10),hc,[wo[0]+d[0]*u,wo[1]+d[1]*u,wo[2]+d[2]*u],[rx,ry,0])}}
 if(A.weapon||iw){if(wk==="crossbow"&&twoH)gripX();else gripW(WA,tl,1)}
 if(dualW)gripW(aL,.9,.9);
 if(twoH&&!HP.ng){(function(){function mx(a,b){var o=[0,0,0,0,0,0,0,0,0],i,j,k;for(i=0;i<3;i++)for(j=0;j<3;j++)for(k=0;k<3;k++)o[i*3+j]+=a[i*3+k]*b[k*3+j];return o}
  function RX(a){var c=Math.cos(a),n=Math.sin(a);return[1,0,0,0,c,-n,0,n,c]}function RZ(a){var c=Math.cos(a),n=Math.sin(a);return[c,-n,0,n,c,0,0,0,1]}
  function mv(m,v){return[m[0]*v[0]+m[1]*v[1]+m[2]*v[2],m[3]*v[0]+m[4]*v[1]+m[5]*v[2],m[6]*v[0]+m[7]*v[1]+m[8]*v[2]]}
  var Rr=mx(mx(RX(HP.r[0]),RZ(HP.r[1])),RX(-HP.r[2])),Rl=mx(mx(RX(HP.l[0]),RZ(HP.l[1])),RX(-HP.l[2])),ax=mv(Rr,[0,Math.cos(HP.tl),Math.sin(HP.tl)]);
  var d=[Rl[0]*ax[0]+Rl[3]*ax[1]+Rl[6]*ax[2],Rl[1]*ax[0]+Rl[4]*ax[1]+Rl[7]*ax[2],Rl[2]*ax[0]+Rl[5]*ax[1]+Rl[8]*ax[2]];
  var ry=Math.asin(Math.max(-1,Math.min(1,d[0]))),rx=Math.atan2(-d[1],d[2]),hc=R.panda?dark:(plate?steelD:skin),rr=.045;
  for(var f=0;f<4;f++){var u=(f-1.5)*.04;add(aL,new T.Ci(rr,.017*bw,5,10),hc,[wo[0]+d[0]*u,wo[1]+d[1]*u,wo[2]+d[2]*u],[rx,ry,0])}
  add(aL,Cy(.026*bw,.026*bw,.05,6),hc,[wo[0]-d[0]*.07,wo[1]-d[1]*.07,wo[2]-d[2]*.07],[rx,ry,0])})()}
 if(dualW){var ct2=Math.cos(.9),sn2=Math.sin(.9),wl=function(geo,col,p,r,s){add(aL,geo,col,[0,-.56+p[1]*ct2-p[2]*sn2,.02+p[1]*sn2+p[2]*ct2],r?[r[0]+.9,r[1],r[2]]:[.9,0,0],s)};
  wl(Bx(.07,.38,.02),RB,[0,.3,0]);wl(Co(.05,.14,4),RB,[0,.57,0],0,[1,1,.4]);wl(Bx(.18,.05,.07),isk?RG:dark,[0,.1,0]);wl(Cy(.025,.025,.16,5),leathD,[0,0,0])}
 // ---------- HEAD ----------
 var hs=head;
 var skullC=R.skeleton?C(11315829):skin;
 var fur=R.fur&&!R.panda?C(furC):skullC;
 if(R.panda){skullC=C(16118250);fur=skullC}
 add(hs,S(.4,R.gnome?10:7,R.gnome?8:5),fur,[0,0,0],0,R.gnome?[1.03,1.05,1]:[1,1.04,.96]);DBA_LEGO&&add(hs,Cy(.13,.13,.1,10),fur,[0,.37,0]);
 if(R.jaw||R.tusks){add(hs,Bx(.5,.16,.3),skullC,[0,-.26,.18])}
 if(R.skeleton){add(hs,Bx(.36,.14,.24),bone,[0,-.27,.2]);for(var tt=-2;tt<=2;tt++)add(hs,Bx(.04,.05,.02),ivory,[tt*.07,-.2,.33])}
 // eyes (unlit glow bucket)
 var eyeY=.05,eyeX=.14*(R.snout>1?1.25:1);
 for(var es=-1;es<=1;es+=2){
  if(R.glow){add(hs,Bx(.14,.06,.04),C(eyeHex),[es*eyeX,eyeY,.34],[0,0,-es*.15],0,1)}
  else{if(DBA_LEGO)add(hs,Cy(.045,.045,.03,10),C(1710618),[es*eyeX*.75,eyeY,.385],[PI/2,0,0],0,1);else{add(hs,Bx(.12,.09,.04),C(16777215),[es*eyeX,eyeY,.34],0,0,1);add(hs,Bx(.06,.07,.045),C(eyeHex),[es*eyeX,eyeY,.355],0,0,1)}}
  add(hs,Bx(.16,.035,.04),hair,[es*eyeX,eyeY+.1,.34],[0,0,-es*.12]);if(R.gnome)add(hs,Bx(.2,.07,.07),skullC,[es*eyeX,eyeY+.13,.33],[0,0,es*.28]);
  if(R.panda)add(hs,Ic(.1),dark,[es*eyeX,eyeY,.3],0,[1,1.3,.6]);
  if(R.skeleton)add(hs,Bx(.15,.12,.03),dark,[es*eyeX,eyeY,.33])}
 // nose / snout
 if(R.snout){var sn=R.snout;add(hs,Cy(.11*sn,.16*sn,.34*(sn>1?1.1:1),5),R.panda?C(16118250):fur,[0,-.08,.46],[PI/2,0,0]);add(hs,Ic(.07*sn),dark,[0,-.04,.64*(sn>1?1.05:.8)])}
 else if(R.nose==="huge")add(hs,Co(.1,.32,4),skullC,[0,-.04,.46],[PI/2+.3,0,0]);
 else if(R.nose==="bulb"){add(hs,S(.1,7,5),skullC,[0,-.06,.42],0,[1,.95,1.05]);add(hs,Bx(.07,.14,.06),skullC,[0,.0,.39],[.3,0,0])}
 else if(R.nose==="big")add(hs,Co(.09,.2,4),skullC,[0,-.04,.42],[PI/2+.2,0,0]);
 else if(R.skeleton)add(hs,Bx(.07,.1,.03),dark,[0,-.06,.38]);
 else if(!DBA_LEGO)add(hs,Co(.055,.15,4),skullC,[0,-.04,.4],[PI/2,0,0]);
 if(!R.skeleton){if(R.snout||!DBA_LEGO)add(hs,Bx(.1,.02,.03),C(4854036),[0,-.2,.36*(R.snout?1.35:1)]);else for(var sm=-2;sm<=2;sm++)add(hs,Bx(.045,.025,.02),C(4854036),[sm*.05,-.2+.012*sm*sm,.39],0,0,1)}
 // tusks
 if(R.tusks){var tz=R.tusks;for(var ts=-1;ts<=1;ts+=2)add(hs,Co(.045,.2*tz,4),ivory,[ts*.15,-.17,.36],[.1,0,ts*.1])}
 // ears
 var ek=R.ears;
 for(var e=-1;e<=1;e+=2){
  if(ek==="gnome"){add(hs,S(.12,6,5),skullC,[e*.41,.0,-.02],0,[.4,1.15,.85]);add(hs,Co(.05,.12,4),skullC,[e*.43,.12,-.02],[0,0,-e*.5],[1,1,.5])}
  else if(ek==="round")add(hs,S(.08,5,4),skullC,[e*.4,0,0],0,[.5,1,.7]);
  else if(ek==="point")add(hs,Co(.07,.28,4),skullC,[e*.4,.06,0],[0,0,-e*1.2],[1,1,.5]);
  else if(ek==="longup")add(hs,Co(.07,.6,4),skullC,[e*.44,.18,-.05],[-.3,0,-e*1.15],[1,1,.45]);
  else if(ek==="longback")add(hs,Co(.065,.52,4),skullC,[e*.44,.06,-.08],[-.25,0,-e*1.4],[1,1,.45]);
  else if(ek==="longdown")add(hs,Co(.08,.5,4),skullC,[e*.46,-.02,-.02],[0,0,-e*2.3],[1,1,.45]);
  else if(ek==="longside")add(hs,Co(.1,.55,4),skullC,[e*.5,.02,0],[0,0,-e*1.5],[1,1,.4]);
  else if(ek==="wolf")add(hs,Co(.11,.32,4),fur,[e*.22,.4,-.06],[0,0,-e*.15],[1,1,.6]);
  else if(ek==="cow")add(hs,Co(.1,.34,4),fur,[e*.46,.1,0],[0,0,-e*1.5],[1,1,.4]);
  else if(ek==="roundbig")add(hs,S(.15,5,4),dark,[e*.3,.34,-.02]);
  else if(ek==="ragged")add(hs,Co(.06,.18,3),skullC,[e*.4,.04,0],[0,0,-e*1.7],[1,1,.4])}
 // horns
 if(R.horns===1){for(var h1=-1;h1<=1;h1+=2){add(hs,Co(.05,.34,4),C(7634784),[h1*.17,.4,-.1],[-.9,0,h1*.15]);}
  if(G.sex!=="female"){for(var t3=-1;t3<=1;t3+=2)for(var t4=0;t4<2;t4++)add(hs,Co(.03,.28,3),C(6950880),[t3*(.08+t4*.08),-.4,.18],[PI,0,t3*.2])}}
 if(R.horns===2){for(var h2=-1;h2<=1;h2+=2){add(hs,Co(.07,.4,5),ivory,[h2*.34,.28,.04],[0,0,-h2*1.0]);add(hs,Co(.05,.28,4),ivory,[h2*.58,.5,.04],[0,0,h2*.3])}}
 if(R.panda===undefined&&R.fur&&R.tail==="fur")add(hs,Co(.2,.3,5),fur,[0,.38,-.12],[-.4,0,0]);
 // hair
 var hstyle=R.mohawk&&!G.hairPick?3:(G.hairStyle||0),noHair=R.gnome||hm==="hood"||hm==="helmet"||hm==="winged"||hm==="crest"||R.panda||R.horns===2||R.snout;
 if(!noHair){
  var hh=hair.clone().lerp(C(6053478),.15),HC=function(tl,bk){add(hs,S(.46,8,5,0,PI*2,0,PI*tl),hh,[0,.05,-.02],0,[1,1.05,1.05]);add(hs,S(.47,8,5,PI,PI,0,PI*bk),hh,[0,.03,-.02],0,[1,1.05,1.05])};
  switch(hstyle){
   case 0:HC(.36,.6);add(hs,Bx(.46,.07,.08),hh,[0,.34,.3],[.35,0,0]);break;
   case 1:HC(.36,.68);add(hs,Bx(.12,.7,.18),hh,[-.4,-.22,0]);add(hs,Bx(.12,.7,.18),hh,[.4,-.22,0]);add(hs,Bx(.8,.75,.12),hh,[0,-.28,-.38]);break;
   case 2:HC(.36,.6);add(hs,Cy(.12,.06,.75,5),hh,[0,-.12,-.5],[.5,0,0]);add(hs,Ic(.12),hh,[0,.18,-.46]);break;
   case 3:for(var mh=0;mh<5;mh++)add(hs,Co(.11,.42-Math.abs(mh-2)*.06,4),hh,[0,.42-Math.abs(mh-2)*.04,.22-mh*.12],[-.2+mh*.1,0,0]);break;
   case 4:break;
   case 5:HC(.3,.5);for(var sp=0;sp<8;sp++){var sa2=sp/8*PI*2;add(hs,Co(.08,.32,3),hh,[Math.cos(sa2)*.27,.4,Math.sin(sa2)*.27],[Math.sin(sa2)*.6,0,-Math.cos(sa2)*.6])}break;
   case 6:for(var cu=0;cu<8;cu++){var ca=PI+cu/7*PI;add(hs,Oc(.17),hh,[Math.cos(ca)*.34,.1+(cu%2)*.14,Math.sin(ca)*.3-.02])}HC(.34,.5);add(hs,Oc(.17),hh,[0,.42,0]);add(hs,Oc(.15),hh,[.2,.38,.05]);add(hs,Oc(.15),hh,[-.2,.38,.05]);break;
   default:HC(.36,.62);for(var bs2=-1;bs2<=1;bs2+=2){add(hs,Cy(.06,.04,.35,4),hh,[bs2*.4,-.2,-.02]);add(hs,Cy(.05,.03,.3,4),hh,[bs2*.4,-.5,-.02]);add(hs,Ic(.06),hh,[bs2*.4,-.68,-.02])}}} else if(!R.snout&&!R.gnome&&hstyle!==4){var hh2=hair,lg=(hstyle===1||hstyle===2||hstyle===7)?.55:.3;add(hs,Bx(.62,lg,.12),hh2,[0,-.12-lg/3,-.36]);add(hs,Bx(.09,lg*.8,.14),hh2,[-.4,-.12,.02]);add(hs,Bx(.09,lg*.8,.14),hh2,[.4,-.12,.02]);if(hstyle===2)add(hs,Cy(.07,.05,.5,4),hh2,[0,-.3,-.44],[.5,0,0]);if(hstyle===7){add(hs,Cy(.04,.03,.5,4),hh2,[-.14,-.4,-.4]);add(hs,Cy(.04,.03,.5,4),hh2,[.14,-.4,-.4])}}
 // beard
 if((G.sex!=="female"||G.beardPick)&&(G.beardStyle>=0||R.gnome)&&!R.snout){
  var bc=C(G.beardColor||G.hairColor||1710618);
  switch(R.gnome?9:(R.beard?1:G.beardStyle)){
   case 9:add(hs,Co(.34,.5,7),bc,[0,-.42,.12],[PI,0,0],[1,1,.62]);add(hs,Co(.24,.5,6),bc,[0,-.58,.24],[PI,0,0],[1,1,.5]);add(hs,S(.1,6,4),bc,[-.09,-.13,.37],0,[1.5,.6,.8]);add(hs,S(.1,6,4),bc,[.09,-.13,.37],0,[1.5,.6,.8]);break;
   case 0:add(hs,Co(.07,.18,4),bc,[0,-.38,.28],[PI,0,0]);break;
   case 1:add(hs,Co(.3,R.beard?.7:.45,6),bc,[0,-.55,.14],[PI,0,0],[1,1,.6]);break;
   case 2:add(hs,Bx(.12,.03,.04),bc,[-.07,-.12,.38],[0,0,.2]);add(hs,Bx(.12,.03,.04),bc,[.07,-.12,.38],[0,0,-.2]);break;
   default:add(hs,S(.25,6,4,0,PI*2,PI*.45,PI*.4),bc,[0,-.3,.05],0,[1,.5,.8])}}
 if(R.mohawk&&hm==="hood"){}
 // helmets / headgear
 if(hsk){steel=hsk.p;steelD=sh(hsk.p,.55);c2=hsk.s;if(hsk.t>=1)gold=hsk.acc;if(hsk.t>=2)add(hs,Oc(.06),hsk.acc,[0,.2,.41],0,[1,1.3,.6],1);if(hsk.t>=3)add(hs,Cy(.36,.36,.02,12),hsk.acc,[0,.66,-.05],0,0,1);if(hsk.t>=4)for(var fl=-1;fl<=1;fl++)add(hs,Co(.05,.28,3),hsk.acc,[fl*.14,.62,-.05],[0,0,-fl*.3],0,1)}
 if(hm==="helmet"||hm==="crest"||hm==="winged"){
  add(hs,S(.46,7,5,0,PI*2,0,PI*.62),CL.stone?C(8021578):steel,[0,.06,-.02]);
  add(hs,Bx(.5,.1,.1),dark,[0,.02,.36]);add(hs,Bx(.07,.3,.07),steelD,[0,-.06,.4]);
  if(CL.crest)add(hs,Bx(.07,.24,.6),C(CL.c2===11569722?12589056:A.color||"#cc3333"),[0,.5,-.04]);
  else add(hs,Co(.06,.2,4),steelD,[0,.52,0]);
  if(hm==="crest")add(hs,Bx(.08,.4+(hsk?hsk.h%20/100:0),.8),hsk?hsk.s:C(13369344),[0,.58,-.05]);
  if(hm==="winged")for(var wg=-1;wg<=1;wg+=2)for(var wf=0;wf<3;wf++)add(hs,Co(.07,.5-wf*.08,3),ivory,[wg*(.44+wf*.05),.28-wf*.06,-.02],[0,0,-wg*(1.1+wf*.2)],[1,1,.4])}
 else if(hm==="crown"||hm==="thorn"){var ns=hm==="thorn"?8:3+(hsk?hsk.h%5:2);add(hs,Cy(.4,.42,.12,8),hm==="thorn"?steelD:gold,[0,.26,0]);for(var cs=0;cs<ns;cs++){var ca2=cs/ns*PI*2;add(hs,Co(hm==="thorn"?.035:.06,hm==="thorn"?.3:.2,hm==="thorn"?3:4),hm==="thorn"?steelD:gold,[Math.cos(ca2)*.38,.4,Math.sin(ca2)*.38],[Math.sin(ca2)*(hm==="thorn"?.7:.15),0,-Math.cos(ca2)*(hm==="thorn"?.7:.15)])}if(hm==="crown")add(hs,Oc(.07),hsk?hsk.acc:wGlow,[0,.3,.42],0,[1,1.3,.6],1)}
 else if(hm==="mask"){add(hs,Bx(.46,.36,.1),steel,[0,-.02,.36],0,[1,1,.6]);add(hs,Bx(.1,.05,.03),dark,[-.14,.03,.42]);add(hs,Bx(.1,.05,.03),dark,[.14,.03,.42]);add(hs,Co(.07,.2,3),steelD,[0,-.12,.44],[PI,0,0])}
 else if(hm==="veil"){var vc=hsk?hsk.p:c2;add(hs,Cy(.44,.46,.5,7),vc,[0,-.05,-.04],0,[1,1,.95]);add(hs,Bx(.42,.3,.03),sh(vc,1.3),[0,-.12,.4]);add(hs,S(.42,7,4,0,PI*2,0,PI*.5),vc,[0,.1,-.02])}
 else if(hm==="horned"){
  add(hs,S(.44,7,4,0,PI*2,0,PI*.58),CL.dark?steelD:C(5326430),[0,.07,-.02]);
  for(var hrn=-1;hrn<=1;hrn+=2){add(hs,Co(.09,.34,5),ivory,[hrn*.34,.32,0],[0,0,-hrn*1.1]);add(hs,Co(.06,.28,4),ivory,[hrn*.56,.5,0],[0,0,hrn*.3])}
  if(CL.dark){add(hs,Co(.06,.24,3),steelD,[0,.52,-.1]);}}
 else if(hm==="hood"){
  var hc=sh(hsk?hsk.p:(CL.c2?c2:cls),.9);
  add(hs,Co(.5,.78,6),hc,[0,.32,-.06],[-.1,0,0]);add(hs,Cy(.46,.48,.3,7),hc,[0,-.12,-.08],0,[1,1,.9]);
  add(hs,Bx(.38,.34,.1),dark,[0,0,.3],0,[1,1,.5]);
  if(CL.mask)add(hs,Bx(.38,.2,.06),CL.exec?leathD:C(2763315),[0,-.1,.4]);
  if(CL.exec)add(hs,Bx(.5,.3,.05),leathD,[0,.12,.4])}
 else if(hm==="band"){
  add(hs,Cy(.4,.4,.1,7),c2,[0,.16,0]);add(hs,Bx(.09,.4,.03),c2,[-.1,-.0,-.4],[.2,0,.1]);add(hs,Bx(.09,.36,.03),c2,[.1,-.02,-.42],[.2,0,-.1])}
 else if(hm==="circlet"){
  add(hs,Cy(.39,.39,.07,7),CL.gold||CL.trim?gold:C(16769126),[0,.22,0]);
  add(hs,Oc(.07),CL.bolt?C(3646463):(CL.halo?C(16775388):wGlow),[0,.26,.38],0,[1,1.4,.7],1);
  if(CL.halo)add(hs,Cy(.38,.38,.02,12),C(16775388),[0,.66,-.05],0,0,1)}
 else if(hm==="hat"){
  var htc=CL.ice?C(5735339):sh(c2,.9);
  add(hs,Cy(.64,.64,.04,8),htc,[0,.3,0]);add(hs,Co(.4,.7,7),htc,[0,.68,0],[.12,0,0]);add(hs,Co(.12,.32,5),htc,[0,1.12,-.1],[-.5,0,0]);
  add(hs,Cy(.41,.41,.06,7),gold,[0,.36,0])}
 else if(hm==="antlers"){
  var an2=C(9136946);
  for(var aa=-1;aa<=1;aa+=2){add(hs,Cy(.025,.04,.5,4),an2,[aa*.22,.55,0],[0,0,-aa*.45]);add(hs,Cy(.02,.03,.3,4),an2,[aa*.34,.72,0],[0,0,-aa*.9]);add(hs,Cy(.02,.03,.26,4),an2,[aa*.28,.82,0],[0,0,aa*.2])}
  add(hs,Cy(.38,.4,.08,7),C(5929525),[0,.2,0])}
 // ---------- BODY mesh (class coloured, flashes) ----------
 var bodyMat=new T.zt({color:(ask?ask.p.clone():cls.clone()),emissive:cls.clone().multiplyScalar(.22),emissiveIntensity:.22,roughness:DBA_LEGO?.26:.55,metalness:DBA_LEGO?.02:.2});
 var baseEm=cls.clone().multiplyScalar(.22);
 var body=new T.fe((DBA_LEGO?new T.rn(.92*bw,.8,.64*bw):new T.Fn(.5*bw,.38*bw,.8,Math.max(6,Math.round(7*DBAQ.seg)),1)),bodyMat);
 body.scale.set(1,1,DBA_LEGO?1:.8);body.position.y=.85;body.castShadow=true;body.receiveShadow=true;
 if(!WOW_MATS)WOW_MATS=(function(){var tc=WOW_TEX(T,'cloth'),tm=WOW_TEX(T,'metal');var L0=DBA_LEGO;return{lit:new T.zt({vertexColors:true,map:L0?null:tc,bumpMap:(!L0&&DBAQ.bump)?tc:null,bumpScale:2,roughness:L0?.26:.72,metalness:L0?.02:.08}),metal:new T.zt({vertexColors:true,map:L0?null:tm,bumpMap:(!L0&&DBAQ.bump)?tm:null,bumpScale:2.5,roughness:L0?.18:.4,metalness:L0?.14:.35}),glow:new T.ln({vertexColors:true})}})();bodyMat.map=WOW_MATS.lit.map;if(DBAQ.bump){bodyMat.bumpMap=WOW_MATS.lit.map;bodyMat.bumpScale=2}
 var O=new T.zn(),I=new T.zn();O.add(I);
 I.add(body);
 var HTM=(!ia&&window.DBA_HMAT)?DBA_HMAT(T,ck):null,HTL=HTM?[cls,sh(cls,.5),sh(cls,.65),sh(cls,.8),c2,steel,steelD]:[],
  near=function(c){for(var q=0;q<HTL.length;q++){var k=HTL[q];if(Math.abs(c.r-k.r)+Math.abs(c.g-k.g)+Math.abs(c.b-k.b)<.16)return!0}return!1};
 function mesh(B,parent,glowOnly){
  var lm=[],ll=[],tx=[],x,c,grp=new T.zn(),r=null;
  for(x=0;x<B.l.length;x++){c=B.l[x].col;if(HTM&&near(c)){tx.push(B.l[x]);continue}(Math.max(c.r,c.g,c.b)-Math.min(c.r,c.g,c.b)<.12||(c.r>.7&&c.g>.5&&c.b<.4&&c.r>c.b*1.8)?lm:ll).push(B.l[x])}
  [[WOW_merge(T,lm),WOW_MATS.metal],[WOW_merge(T,ll),WOW_MATS.lit],[WOW_merge(T,tx),HTM]].forEach(function(p){if(p[0]){var m=new T.fe(p[0],p[1]);m.castShadow=true;m.receiveShadow=true;grp.add(m);r=grp}});
  var g2=WOW_merge(T,B.g);if(g2){grp.add(new T.fe(g2,WOW_MATS.glow));r=grp}
  if(r)parent.add(grp);
  return r}
 var hipL=null,hipR=null,knL=null,knR=null,capeG=[];
 function limb(B,tag,pv){var f={l:[],g:[],ox:B.ox,oy:B.oy,oz:B.oz,k:B.k},n=0;["l","g"].forEach(function(kk){var keep=[];B[kk].forEach(function(q){if(q.lg===tag){var kq=q.k||1;q.p=[q.p[0]-pv[0]/kq,q.p[1]-pv[1]/kq,q.p[2]-pv[2]/kq];f[kk].push(q);n++}else keep.push(q)});B[kk]=keep});return n?f:null}
 if(!ROBE){var hips=[],knees=[];[-1,1].forEach(function(sd){var hp=[sd*lx,.53,0],kp=[sd*lx,.3,0],th=limb(stat,"t"+sd,hp),sk=limb(stat,"s"+sd,kp),hg=new T.zn(),kg=new T.zn();hg.position.set(hp[0],hp[1],hp[2]);kg.position.set(0,kp[1]-hp[1],0);if(th)mesh(th,hg);if(sk)mesh(sk,kg);hg.add(kg);I.add(hg);hips.push(hg);knees.push(kg)});hipL=hips[0];hipR=hips[1];knL=knees[0];knR=knees[1]}
 if(plate||ROBE||cloth){var cc=sh(cls,.65),cgp=null;for(var ci=0;ci<4;ci++){var sg=new T.zn();if(ci==0)sg.position.set(0,1.22,-.38*bw);else sg.position.set(0,-.3,0);var sl={l:[],g:[],ox:0,oy:0,oz:0,k:1};add(sl,Bx(.66*bw*(1+ci*.06),.3,.04),ci==3?(CL.gold?gold:(ask?ask.acc:cc)):cc,[0,-.15,0]);mesh(sl,sg);if(cgp)cgp.add(sg);else I.add(sg);cgp=sg;capeG.push(sg)}}
var pdL=null,pdR=null,tailG=null,skG=[];
 [-1,1].forEach(function(sd){var pv=[sd*.6*bw,1.08,0],pf=limb(stat,"p"+sd,pv);if(pf){var pg=new T.zn();pg.position.set(pv[0],pv[1],pv[2]);mesh(pf,pg);I.add(pg);if(sd<0)pdL=pg;else pdR=pg}});
 var tf=limb(stat,"tl",[0,.5,-.35]);if(tf){tailG=new T.zn();tailG.position.set(0,.5,-.35);mesh(tf,tailG);I.add(tailG)}
 if(!ROBE&&(plate||leather||cloth)){var skc=plate?metal:(leather?leathD:sh(cls,.8));for(var ki=0;ki<7;ki++){var ka=(ki-3)*.42,kg2=new T.zn(),kl={l:[],g:[],ox:0,oy:0,oz:0,k:1};kg2.rotation.order="YXZ";kg2.position.set(Math.sin(ka)*.42*bw,.6,Math.cos(ka)*.34*bw);kg2.rotation.y=ka;add(kl,Bx(.17*bw,.24,.025),skc,[0,-.12,0]);if(plate)add(kl,Bx(.17*bw,.03,.03),CL.gold?gold:steelD,[0,-.24,0]);mesh(kl,kg2);I.add(kg2);skG.push(kg2)}}
 mesh(stat,I);
 var headMesh=mesh(head,I);
 var leftArm=new T.zn();leftArm.position.set(-.56*bw,1.05,0);
 var rightArm=new T.zn();rightArm.position.set(.56*bw,1.05,0);
 // arm parts were authored with shoulder as origin -> already relative to pivot
 function fore(Bk,grp){var f={l:[],g:[],ox:Bk.ox,oy:Bk.oy,oz:Bk.oz,k:Bk.k},el=new T.zn();el.position.set(0,-.34,0);
  ["l","g"].forEach(function(kk){var keep=[];Bk[kk].forEach(function(q){if(q.fa||q.p[1]<-.33){q.p=[q.p[0],q.p[1]+.34/(q.k||1),q.p[2]];f[kk].push(q)}else keep.push(q)});Bk[kk]=keep});
  mesh(Bk,grp);mesh(f,el);grp.add(el);return el}
 var elbL=fore(aL,leftArm),elbR=fore(aR,rightArm),holdU=null;
 if(twoH){var HX=HP.dx||.26;leftArm.position.x=-(.56*bw-HX);rightArm.position.x=.56*bw-HX;leftArm.rotation.set(HP.l[0],0,HP.l[1]);rightArm.rotation.set(HP.r[0],0,HP.r[1]);elbL.rotation.x=-HP.l[2];elbR.rotation.x=-HP.r[2];holdU={l:{rx:HP.l[0],z:HP.l[1],e:HP.l[2]},r:{rx:HP.r[0],z:HP.r[1],e:HP.r[2]}}}
 if(CL.sh&&!twoH){leftArm.rotation.set(-.25,0,0);elbL.rotation.x=-1.8;leftArm.position.x=-(.56*bw-.1)}
 I.add(leftArm);I.add(rightArm);
 var hm0=G.heightMul||1,rh=Math.max(.62/hm0,Math.min(1.3/hm0,R.h)),rw=Math.max(.7,Math.min(1.45,R.w));
 I.scale.set(rw,rh,rw);
 O.userData={shd:(CL.sh&&!twoH)?{rx:-.25,z:0,e:1.8}:null,hold:holdU,pdL:pdL,pdR:pdR,tailG:tailG,skirt:skG,hipL:hipL,hipR:hipR,knL:knL,knR:knR,cape:capeG,elbL:elbL,elbR:elbR,leftArm:leftArm,rightArm:rightArm,body:body,bodyMat:bodyMat,head:headMesh||body,baseEmissive:baseEm,race:R.n,wowClass:CL.r};
 return O}
