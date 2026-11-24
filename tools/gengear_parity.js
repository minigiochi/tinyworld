// Confronto generazione oggetti nuovo vs originale (rj): stesso seme → stessi oggetti (id escluso, ma consuma lo stesso numero di tiri).
// Uso: node tools/gengear_parity.js <orig_rj.js>   (orig_rj.js si estrae da reference/code/module_no_assets.js)
const fs=require('fs'),vm=require('vm');
const load=require('../src/engine/load');
const E=load({seed:1});const CLASSES=E.CLASSES;
const orig=fs.readFileSync(process.argv[2],'utf8');
const seedCode=(sd)=>'(function(){let s='+sd+';Math.random=function(){s=(s+0x6D2B79F5)|0;let t=Math.imul(s^(s>>>15),1|s);t=(t+Math.imul(t^(t>>>7),61|t))^t;return((t^(t>>>14))>>>0)/4294967296}})()';
let bad=0,N=0;const keys=Object.keys(CLASSES);
for(let sd=1;sd<=300;sd++){
  const a={Math:Object.create(Math),Date:{now:()=>1}};vm.createContext(a);vm.runInContext(orig+'\n',a);a.Kc=CLASSES;vm.runInContext('var Kc=globalThis.Kc;',a);vm.runInContext(seedCode(sd),a);
  const e=load({seed:sd});
  const ga=vm.runInContext('(function(){var o=[];for(var i=0;i<30;i++)o.push(rj(Object.keys(Kc)[i%Object.keys(Kc).length],i%4,i%3?null:["bianco","blu","viola","oro","rosso"][i%5]));return JSON.stringify(o.map(function(x){delete x.id;return x}))})()',a);
  const gb=e.run('(function(){var o=[];for(var i=0;i<30;i++)o.push(gearGenerate(Object.keys(Kc)[i%Object.keys(Kc).length],i%4,i%3?null:["bianco","blu","viola","oro","rosso"][i%5]));return JSON.stringify(o.map(function(x){delete x.id;return x}))})()');
  N++;if(ga!==gb){if(bad++<2)console.log('DIVERGE',sd,ga.slice(0,300),'\n',gb.slice(0,300))}
}
console.log('identici',N-bad,'/',N,'(30 oggetti ciascuno)');
