// Confronto generatore dungeon nuovo vs originale (gen di script_13), a seme fisso. Uso: node tools/dungeon_parity.js tools/orig_dungeon.js
const fs=require('fs'),vm=require('vm'),path=require('path');
const DG=require('../src/data/dungeon.json');
const seed=(sd)=>'(function(){let s='+sd+';Math.random=function(){s=(s+0x6D2B79F5)|0;let t=Math.imul(s^(s>>>15),1|s);t=(t+Math.imul(t^(t>>>7),61|t))^t;return((t^(t>>>14))>>>0)/4294967296}})()';
const mod=fs.readFileSync(path.join(__dirname,'../src/world/dungeon.js'),'utf8');
let bad=0,N=3000;
for(let sd=1;sd<=N;sd++){
  const A={Math:Object.create(Math)};vm.createContext(A);vm.runInContext(fs.readFileSync(process.argv[2],'utf8')+';globalThis.gen=gen;',A);vm.runInContext(seed(sd),A);
  const B={Math:Object.create(Math)};vm.createContext(B);vm.runInContext('const DG='+JSON.stringify(DG)+';'+mod+';globalThis.g=()=>dungeonGenerate(DG);',B);vm.runInContext(seed(sd),B);
  const ga=A.gen(),gb=B.g();const a=JSON.stringify([ga,ga.L.map(l=>l.labs)]),b=JSON.stringify([gb,gb.L.map(l=>l.labs)]);
  if(a!==b){if(bad++<2)console.log('DIVERGE',sd,a.slice(0,200),b.slice(0,200))}
}
console.log('identici',N-bad,'/',N,'dungeon');
