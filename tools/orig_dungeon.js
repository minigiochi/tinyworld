// estratto da reference/code/script_13.js (righe 3-13, 15-25, 27-28)
const R=n=>Math.random()*n|0,sh=a=>a.map(x=>[Math.random(),x]).sort((p,q)=>p[0]-q[0]).map(p=>p[1]);
const E=s=>String(s).replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
const NOU=["Cripta","Sala","Galleria","Camera","Caverna","Biblioteca","Fucina","Cisterna","Cappella","Armeria"];
const ADJ=["Oscura","Antica","Maledetta","Sommersa","Silenziosa","Ardente","Gelida","Crollata","Dimenticata","Sanguinosa"];
const TH=[["🕸️","Ragnatele spesse coprono ogni angolo."],["🔥","L'aria brucia e le pareti sono incandescenti."],["❄️","Il ghiaccio scricchiola sotto i tuoi passi."],["💀","Ossa antiche tappezzano il pavimento."],["🌿","Radici e muschio invadono la pietra."],["💧","Acqua gocciola dal soffitto nel buio."],["⚡","Scariche elettriche corrono sulle pareti."],["🌑","Un'oscurità innaturale inghiotte la luce."],["🩸","Rune rosse pulsano sul pavimento."],["✨","Una luce fioca illumina simboli arcani."]];
/* 1000 stanze preimpostate = 10 nomi x 10 aggettivi x 10 ambientazioni */
const POOL=Array.from({length:1000},(_,i)=>({id:i,name:NOU[i%10]+" "+ADJ[(i/10|0)%10],th:TH[(i/100|0)%10]}));
const NE=[["🕷️","Ragno Gigante"],["💀","Scheletro"],["👺","Goblin"],["👻","Spettro"],["🐺","Lupo Famelico"],["🧟","Ghoul"],["😈","Imp"],["🦇","Pipistrello Vampiro"]];
const MB=[["🗿","Golem Antico"],["⚔️","Campione Corrotto"],["🪓","Mastro Carnefice"],["🛡️","Guardiano Maledetto"],["🌑","Ombra Ancestrale"]];
const RID=[["Parlo senza bocca e ascolto senza orecchie. Chi sono?",["L'eco","Il vento","Un fantasma"],0],["Ha città ma non case, fiumi ma non acqua.",["Una mappa","Un sogno","Un quadro"],0],["Più ne togli, più diventa grande.",["Un buco","Un debito","Un muro"],0],["Ha chiavi ma non apre porte.",["Una tastiera","Un forziere","Un orologio"],0],["Quanto più asciuga, tanto più si bagna.",["Un asciugamano","Il sole","Il vento"],0],["Ha un collo ma nessuna testa, e un tappo ma non beve.",["Una bottiglia","Una camicia","Un pozzo"],0],["Ha lancette ma non ti saluta, si muove ma non va da nessuna parte.",["Un orologio","Una bussola","Una stella"],0],["Si rompe appena lo nomini.",["Il silenzio","Il vetro","Un patto"],0],["Ha denti ma non morde.",["Un pettine","Un cane","Un serpente"],0],["Ha un occhio solo ma non vede.",["Un ago","Un ciclope","Un faro"],0],["Se lo condividi, non lo hai più.",["Un segreto","Un pane","Un tesoro"],0],["Vive solo se mangia, muore se beve.",["Il fuoco","L'uomo","Una pianta"],0],["Ha un letto ma non dorme, una bocca ma non mangia.",["Un fiume","Un lago","Un pozzo"],0],["Ti passa sempre davanti ma non puoi mai vederlo.",["Il futuro","Il passato","L'aria"],0],["Si può spezzare, regalare, mantenere, ma mai toccare.",["Una promessa","Una spada","Una catena"],0],["Sta in un angolo ma viaggia per il mondo.",["Un francobollo","Una ragnatela","Un ragno"],0]];
const LB={Sinistra:"⬅️",Dritto:"⬆️",Destra:"➡️"},PR=[["Sinistra","Destra"],["Sinistra","Dritto"],["Dritto","Destra"]];
function gen(){
 const D=4+R(5),ids=sh(POOL.map((_,i)=>i));let k=0;const L=[];
 for(let d=0;d<D;d++){const w=d?1+R(3):1;L.push(Array.from({length:w},(_,p)=>({d,p,r:POOL[ids[k++]],ex:[],ev:[]})));}
 for(let d=0;d<D-1;d++){const nx=L[d+1],W=nx.length;
  nx.labs=W==1?["Dritto"]:W==2?PR[R(3)]:["Sinistra","Dritto","Destra"];
  L[d].forEach(n=>{n.ex=sh(nx.map((_,i)=>i)).slice(0,Math.min(W,1+R(3))).sort()});
  nx.forEach((_,i)=>{if(!L[d].some(n=>n.ex.includes(i)))L[d][R(L[d].length)].ex.push(i)});
  L[d].forEach(n=>n.ex=[...new Set(n.ex)].sort());}
 const all=sh(L.flat());
 sh(["n","n","n","m","m","t","c","r"]).forEach((e,i)=>all[i%all.length].ev.push(e));
 return{D,L};}
const SHP=["rect","oct","cross","hex","round","rect","hex","round","oct","cross"],RC={bianco:0xe5e5e5,blu:0x3b82f6,viola:0xa855f7,oro:0xfbbf24,rosso:0xef4444},XP={Sinistra:-.3,Dritto:0,Destra:.3};
const TR={spike:["Spuntoni","Spuntoni affilati emergono dal pavimento!"],arrow:["Frecce","Frecce partono dalle pareti!"],fire:["Fiamme","Colonne di fuoco esplodono dal suolo!"],poison:["Veleno","Una nube di veleno avvolge la stanza!"]};
