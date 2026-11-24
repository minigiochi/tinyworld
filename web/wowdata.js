// Dati e helper dei modelli eroe, estratti dal gioco originale (WOW_RACES, WOW_CLS, WOW_skin, WOW_merge, DBA_HOLD…).
// Gli stub sotto sostituiscono le tabelle d'armi/armature che servono solo all'equipaggiamento visivo.
var DBA_WP={},DBA_CW={},DBA_CO={},DBA_ARMK={},DBAQ={l:0,seg:(/Mobi|Android|iPhone/i.test(navigator.userAgent)?2:3),bump:0,htex:256},DBA_LEGO=false,WOW_MATS=null;
function WOW_TEX(){return null}
function WOW_hash(s){var h=2166136261;s=String(s);for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
var WOW_RT={};
var WOW_RARC={bianco:15066597,blu:3900150,viola:11032055,oro:16497188,rosso:15684432},WOW_RT={bianco:0,blu:1,viola:2,oro:3,rosso:4};
var WOW_WK={"Bastone":"staff","Spada":"sword","Ascia":"axe","Martello":"hammer","Arco":"bow","Arco Lungo":"bow","Pugnale":"dagger","Pugnali Gemelli":"dagger","Lancia":"spear","Mazza":"mace","Balestra":"crossbow","Spadone":"greatsword","Katana":"katana","Falce":"scythe","Scimitarra":"scimitar","Ascia Bipenne":"axe","Maglio":"hammer"};
var WOW_AK={"Armatura":"plate","Corazza":"plate","Piastre":"plate","Cuirass":"plate","Cotta di Maglia":"mail","Usbergo":"mail","Veste":"cloth","Tunica":"cloth","Farsetto":"leather","Gambali":"leather","Giubbotto":"leather"};
var WOW_HK={"Elmo":"helmet","Cappuccio":"hood","Corona":"crown","Diadema":"circlet","Maschera":"mask","Cappello":"hat","Cimiero":"crest","Cerchietto":"circlet","Corona di Spine":"thorn","Velo":"veil","Elmo Alato":"winged"};
function WOW_skin(T,it){it=window.DBA_APPR?DBA_APPR(it):it;var h=WOW_hash(it.id||it.name),hue=(h%360)/360,r=function(n){return((h>>>n)%100)/100},col=function(hh,s,l){return new T.Rt().setHSL(((hh%1)+1)%1,s,l)},b=String(it.name||"");
 return{h:h,k:it.base||b.slice(0,Math.max(0,b.lastIndexOf(" "))),t:WOW_RT[it.rarity]||0,acc:new T.Rt(WOW_RARC[it.rarity]||15066597),p:col(hue,.5+r(3)*.3,.42+r(6)*.18),s:col(hue+.08+r(9)*.1,.35+r(12)*.3,.3+r(15)*.25),d:col(hue,.3,.18)}}
var WOW_RACES={
umano:{n:"Umano",h:0.95,w:1,hd:.55,skin:[15778208,14725248,13668448,9064496,7029286],hair:[1710618,5979676,12093483,14263178,8007194],eye:null,ears:"round"},
nano:{n:"Nano",h:0.66,w:1.15,hd:.8,skin:[14887298,13701990,12090962],hair:[8010260,11887901,14277081,1710618,11018782],eye:null,ears:"round",beard:1,nose:"big"},
elfo_notte:{n:"Elfo della Notte",h:1.06,w:.95,hd:.58,skin:[8218544,9368772,7035560],hair:[3117930,3825615,12043494,8011696,1780314],eye:14217471,glow:1,ears:"longup"},
gnomo:{n:"Gnomo",h:0.4,w:.9,hd:1.0,skin:[15977912,15119514],hair:[16736168,5099745,15921906,6742122,11759539],eye:null,ears:"gnome",nose:"bulb",gnome:1},
draenei:{n:"Draenei",h:1.1,w:1.12,hd:.62,skin:[5242838,6950880,5927881],hair:[1710634,15263984,3877466],eye:13560063,glow:1,ears:"point",horns:1,tail:"hoof",hoof:1},
worgen:{n:"Worgen",h:1.12,w:1.1,hd:.68,skin:[7039851,5916210,9074274,3815488],hair:[2763306,4880938,9079434],eye:16762938,glow:1,ears:"wolf",snout:1,tail:"fur",hunch:.14,claws:1,fur:1},
pandaren:{n:"Pandaren",h:0.92,w:1.35,hd:.85,skin:[16118250],hair:[1710618],eye:null,ears:"roundbig",snout:.5,tail:"nub",fur:1,panda:1},
orco:{n:"Orco",h:1.08,w:1.2,hd:.62,hunch:.12,skin:[6003260,5147189,6989898,8021562],hair:[1118481,3808274,9079434],eye:16734778,ears:"point",tusks:1,jaw:1},
non_morto:{n:"Non Morto",h:0.92,w:.9,hd:.56,skin:[10135690,11023514,9083518],hair:[3817258,6975066,1710618],eye:15269738,glow:1,ears:"ragged",skeleton:1},
tauren:{n:"Tauren",h:1.22,w:1.3,hd:.62,skin:[8014378,3811874,11569754,15261904,9066042],hair:[1708553,13680800,5909012],eye:null,ears:"cow",snout:1.3,horns:2,tail:"tuft",hoof:1,fur:1,hunch:.06},
troll:{n:"Troll",h:1.08,w:.95,hd:.6,skin:[4163240,4881050,6971312,3840646],hair:[13642314,2791002,10107344,1710618,14721056],eye:16769354,glow:1,ears:"longdown",tusks:1.3,hunch:.3,mohawk:1},
elfo_sangue:{n:"Elfo del Sangue",h:0.96,w:.92,hd:.56,skin:[15782592,15254702],hair:[15254106,15921904,12071454,3807764],eye:9240378,glow:1,ears:"longback"},
goblin:{n:"Goblin",h:0.5,w:.95,hd:.95,skin:[8698940,9814090,6989882],hair:[1710618,4864538],eye:16769354,ears:"longside",nose:"huge"}
};
var WOW_PROP={
umano:{lift:.40,bwm:.84},
elfo_notte:{lift:.46,bwm:.78},
elfo_sangue:{lift:.42,bwm:.80},
draenei:{lift:.38,bwm:.95,cx:1.1},
worgen:{lift:.30,bwm:.95,cx:1.12},
orco:{lift:.22,bwm:1.05,cx:1.15,cy:1.1},
tauren:{lift:.26,bwm:1.05,cx:1.15,cy:1.1},
troll:{lift:.44,bwm:.85,ht:2.1,hz:.55},
non_morto:{lift:.40,bwm:.78},
nano:{lift:.08,bwm:1,bl:1.25,cy:1.1},
gnomo:{lift:.02,bwm:.9,bl:1.2},
goblin:{lift:.08,bwm:.9},
pandaren:{lift:.08,bwm:1,bl:1.5,cx:1.1,cy:1.15}
};
var WOW_RK=Object.keys(WOW_RACES);WOW_RK.forEach(function(k){WOW_RACES[k].k=k});
var WOW_CLS={
druido:{r:"Druido",arm:"cloth",robe:1,pa:"leaf",hm:"antlers",c2:5929525},
monaco:{r:"Monaco",arm:"bare",pa:"none",hm:"band",c2:14721088,sash:1},
chierico:{r:"Sacerdote",arm:"cloth",robe:1,pa:"round",hm:"circlet",c2:16114344,trim:15912806,tabard:1},
mago_sangue:{r:"Stregone",arm:"cloth",robe:1,pa:"spiked",hm:"hood",c2:3805972,skull:1},
cavaliere:{r:"Guerriero",arm:"plate",pa:"big",hm:"helmet",sh:"kite",cape:1,crest:1,c2:10199218},
barbaro:{r:"Guerriero",arm:"bare",pa:"fur",hm:"horned",c2:8018490,paint:1},
guardiano:{r:"Guerriero",arm:"plate",pa:"huge",hm:"helmet",sh:"tower",c2:8021578,stone:1},
paladino:{r:"Paladino",arm:"plate",pa:"big",hm:"circlet",sh:"kite",cape:1,gold:1,halo:1,c2:15912806},
guerriero:{r:"Guerriero",arm:"plate",pa:"spiked",hm:"helmet",sh:"round",c2:10199218},
assassino:{r:"Ladro",arm:"leather",pa:"none",hm:"hood",mask:1,dual:1,cape:1,c2:2763315},
gladiatore:{r:"Guerriero",arm:"plate",pa:"big1",hm:"helmet",sh:"round",crest:1,c2:11569722},
berserker:{r:"Guerriero",arm:"bare",pa:"spiked",hm:"horned",paint:1,c2:9054746},
spadaccino:{r:"Monaco",arm:"leather",pa:"none",hm:"band",cape:1,sash:1,c2:13684952},
cavaliere_oscuro:{r:"Cavaliere della Morte",arm:"plate",pa:"spiked",hm:"horned",cape:1,dark:1,glow:6737151,runes:1,c2:2764602},
ninjia:{r:"Ladro",arm:"leather",pa:"none",hm:"hood",mask:1,sash:1,c2:1710624},
boia:{r:"Guerriero",arm:"leather",pa:"none",hm:"hood",mask:1,exec:1,c2:3811872},
arciere:{r:"Cacciatore",arm:"leather",pa:"small",hm:"hood",quiver:1,cape:1,c2:4876858},
mago:{r:"Mago",arm:"cloth",robe:1,pa:"small",hm:"hat",c2:2767498},
stregone:{r:"Stregone",arm:"cloth",robe:1,pa:"spiked",hm:"horned",skull:1,c2:4856426},
necromante:{r:"Negromante",arm:"cloth",robe:1,pa:"skull",hm:"hood",skull:1,c2:1318938,glow:8388458},
crio_mago:{r:"Mago",arm:"cloth",robe:1,pa:"ice",hm:"hat",c2:10475775,ice:1},
fulmine_mago:{r:"Sciamano",arm:"leather",pa:"bolt",hm:"circlet",totem:1,c2:2775759,bolt:1},
cacciatore:{r:"Cacciatore",arm:"leather",pa:"small",hm:"hood",quiver:1,c2:5917226}
};
try{(function(){var NK={sciamano:["Bastone","Lancia","Falce"],alchimista:["Pugnale","Bastone"],sentinella_gelo:["Martello","Mazza","Spada"],vindice:["Spadone","Spada","Ascia"],bardo:["Bastone","Pugnale"],artefice:["Bastone","Pugnale","Spada"],araldo:["Lancia","Spada","Mazza"],mistico:["Mazza","Bastone","Martello"]},NA2={sciamano:"leather",alchimista:"cloth",sentinella_gelo:"plate",vindice:"plate",bardo:"cloth",artefice:"cloth",araldo:"mail",mistico:"cloth"};
for(var k in NK){DBA_WP[k]=NK[k];DBA_CW[k]=NK[k];DBA_CO[k]=(k==="sentinella_gelo"||k==="vindice")?["shield"]:["held"];DBA_ARMK[k]=NA2[k]}
Object.assign(WOW_CLS,{sciamano:{r:"Sciamano",arm:"leather",pa:"leaf",hm:"horned",totem:1,c2:3067867},alchimista:{r:"Alchimista",arm:"cloth",robe:1,pa:"small",hm:"hat",c2:10732085},sentinella_gelo:{r:"Guerriero",arm:"plate",pa:"ice",hm:"helmet",sh:"kite",cape:1,crest:1,ice:1,c2:8248300},vindice:{r:"Guerriero",arm:"plate",pa:"spiked",hm:"horned",sh:"kite",cape:1,c2:16553264},bardo:{r:"Bardo",arm:"cloth",robe:1,pa:"round",hm:"hat",c2:16020632,sash:1},artefice:{r:"Mago",arm:"cloth",robe:1,pa:"bolt",hm:"circlet",bolt:1,c2:6333946},araldo:{r:"Araldo",arm:"mail",pa:"big",hm:"helmet",cape:1,tabard:1,c2:16498468},mistico:{r:"Sacerdote",arm:"cloth",robe:1,pa:"round",hm:"circlet",tabard:1,trim:16645710,c2:16637239}})})()}catch(e){console.warn("newcls tables",e)}
function WOW_pick(a){return a[Math.floor(Math.random()*a.length)]}
function WOW_ensure(G){
 if(G&&G.race&&WOW_RACES[G.race])return G;
 var k=WOW_pick(WOW_RK),R=WOW_RACES[k];
 G.race=k;G.skinColor=WOW_pick(R.skin);G.hairColor=WOW_pick(R.hair);
 if(R.eye!=null)G.eyeColor=R.eye;
 G.beardColor=G.hairColor;
 if(R.beard&&G.sex!=="female"&&!(G.beardStyle>=0))G.beardStyle=1;
 return G}

function WOW_merge(T,list){
 if(!list.length)return null;
 var pos=[],col=[],nor=[],uv=[],i,j,hasN=true;
 for(i=0;i<list.length;i++){
  var q=list[i],g=q.geo,r=q.r;
  if(q.s)g.scale(q.s[0],q.s[1],q.s[2]);
  if(r){if(r[2])g.rotateZ(r[2]);if(r[1])g.rotateY(r[1]);if(r[0])g.rotateX(r[0])}
  if(q.k!==1)g.scale(q.k,q.k,q.k);
  g.translate(q.ox+q.p[0]*q.k,q.oy+q.p[1]*q.k,q.oz+q.p[2]*q.k);
  if(g.index)g=g.toNonIndexed();
  var a=g.attributes.position.array,n=a.length/3,c=q.col,na=g.attributes.normal,ua=g.attributes.uv;
  if(!na)hasN=false;
  for(j=0;j<a.length;j++){pos.push(a[j]);nor.push(na?na.array[j]:0)}
  for(j=0;j<n;j++){col.push(c.r,c.g,c.b);uv.push(ua?ua.array[j*2]:0,ua?ua.array[j*2+1]:0)}
  if(g.dispose)g.dispose()}
 var G=new T.Jn();
 G.setAttribute("position",new T.on(new Float32Array(pos),3));
 G.setAttribute("color",new T.on(new Float32Array(col),3));
 G.setAttribute("uv",new T.on(new Float32Array(uv),2));
 if(hasN)G.setAttribute("normal",new T.on(new Float32Array(nor),3));else G.computeVertexNormals();
 return G}
function WOW_BUST(T,r,sg){var n=Math.max(8,Math.round(10*DBAQ.seg)),m=Math.max(6,Math.round(8*DBAQ.seg)),g=new T.Tt(r,n,m),p=g.attributes.position,i;
 for(i=0;i<p.count;i++){var x=p.getX(i)/r,y=p.getY(i)/r,z=p.getZ(i)/r;
  if(z<0)z*=.35;
  if(y>0){x*=1-.18*y;z*=1-.38*y;y*=.72}else{y*=1.12;x+=sg*.1*(-y)}
  p.setXYZ(i,x*r,y*r,z*r)}
 g.rotateY(sg*.14);return g}
var DBA_HOLD={
 spear:{r:[-.36,-.78,.33],l:[-1.11,.58,.1],tl:1.58,s:.28,dx:.25},
 staff:{r:[-.48,-.32,.73],l:[-1.3,.59,.1],tl:1.58,s:.28,dx:.35},
 scythe:{r:[-.47,-.35,.69],l:[-1.27,.56,.1],tl:1.58,s:.28,dx:.35},
 greatsword:{r:[-.44,-.85,.5],l:[-.34,.78,.1],tl:1.58,s:-.14,dx:.14},
 hammer:{r:[-.43,-.76,.51],l:[-1.1,.72,.1],tl:1.58,s:.2,dx:.22},
 crossbow:{r:[-.11,-1.07,.05],l:[-.53,.49,1.16],tl:1.58,s:.33,dx:.22,phi:-2.06,ng:1},
 bow:{r:[-.99,-.88,.05],l:[-.98,.01,.6],tl:1.58,s:0,dx:.34,ng:1}};
