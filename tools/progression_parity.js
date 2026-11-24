// Confronto esperienza/livelli nuovo vs originale (Tp, Y6, K6, Z6). Uso: node tools/progression_parity.js tools/orig_progression.js
const fs=require('fs'),vm=require('vm'),path=require('path');
const A={};vm.createContext(A);vm.runInContext(fs.readFileSync(process.argv[2],'utf8')+';globalThis.Tp=Tp;globalThis.Y6=Y6;globalThis.K6=K6;globalThis.Z6=Z6;',A);
const B={};vm.createContext(B);vm.runInContext(fs.readFileSync(path.join(__dirname,'../src/engine/progression.js'),'utf8')+';globalThis.xp=xpForLevel;globalThis.lu=levelUpGains;globalThis.bx=applyBattleXp;globalThis.sg=stripGearSnapshot;',B);
let s=3;const R=()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296};let bad=0,N=20000;
for(let L=1;L<=300;L++)if(A.Tp(L)!==B.xp(L)){bad++;console.log('Tp',L)}
for(let i=0;i<N;i++){
  const party=[];const n=1+Math.floor(R()*6);for(let j=0;j<n;j++){const r=R();party.push({name:'h'+j,icon:'x',className:'c',classKey:'k',alive:R()<.7,level:1+Math.floor(R()*60),xp:Math.floor(R()*2000),maxHp:100+Math.floor(R()*900),attack:10+Math.floor(R()*300),defense:Math.floor(R()*100),isDps:r<.4,isHealer:r>=.4&&r<.6,isTank:r>=.6&&r<.85,hp:50,_buffSnap:R()<.3?{attack:5,maxHp:60,defense:2}:undefined})}
  const a=JSON.stringify(A.K6(party)),b=JSON.stringify(B.bx(party));const za=JSON.stringify(party.map(A.Z6)),zb=JSON.stringify(party.map(B.sg));
  if(a!==b||za!==zb){if(bad++<3)console.log('DIVERGE',a.slice(0,200),b.slice(0,200))}
}
console.log('identici',N-bad,'/',N);
