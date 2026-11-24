// Confronto equipaggiamento nuovo vs originale (DBA_SETB + Pe0 del gioco v198), con input casuali.
const fs=require('fs'),vm=require('vm'),path=require('path');
const orig=fs.readFileSync(process.argv[2],'utf8');
const sets=require('../src/data/sets.json');
const ctx={console,Math};vm.createContext(ctx);
vm.runInContext(orig+'\nglobalThis.orig=function(Le,je){var Ke=DBA_SETB(Le,je,Le.reduce(function(Oe,it){var qe=ij(it),lm=Math.max(.45,Math.min(1.6,.4+(je.level||1)*.04)),dm=je.isTank?1:.6;return{attack:Oe.attack+Math.round(qe.attack*lm),defense:Oe.defense+Math.round(qe.defense*lm*dm),maxHp:Oe.maxHp+Math.round(qe.maxHp*lm),mana:Oe.mana+Math.round(qe.mana*lm),manaRegen:Oe.manaRegen+Math.round(qe.manaRegen*lm*10)/10,atkSpeed:Oe.atkSpeed+qe.atkSpeed}},{attack:0,defense:0,maxHp:0,mana:0,manaRegen:0,atkSpeed:0}));return Ke};',ctx);
const code='const DATA={sets:'+JSON.stringify(sets)+'};'+fs.readFileSync(path.join(__dirname,'../src/engine/gear.js'),'utf8')+';globalThis.mine=function(Le,je){return gearWithSets(Le,je,gearItemTotals(je,Le))}';
const c2={Math};vm.createContext(c2);vm.runInContext(code,c2);
let s=1;const R=()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296};
const slots=['head','shoulders','chest','hands','legs','mainhand'],keys=sets.map(x=>x.k);let bad=0,N=20000;
for(let i=0;i<N;i++){const items=[];const n=Math.floor(R()*7);for(let j=0;j<n;j++){const st={};['attack','defense','maxHp','mana','manaRegen','atkSpeed'].forEach(k=>{if(R()<.7)st[k]=k=='manaRegen'?Math.round(R()*30)/10:Math.floor(R()*60)});items.push({slot:slots[j%6],set:R()<.7?keys[Math.floor(R()*3)]:(R()<.5?keys[Math.floor(R()*8)]:undefined),stats:R()<.95?st:undefined})}
 const h={level:1+Math.floor(R()*80),isTank:R()<.3,attack:20+Math.floor(R()*400),defense:Math.floor(R()*200),maxHp:100+Math.floor(R()*2000),maxMana:60+Math.floor(R()*60),manaRegen:2+R()*2};
 const a=JSON.stringify(c2.mine(items,h)),b=JSON.stringify(ctx.orig(items,h));if(a!==b){if(bad++<3)console.log('DIVERGE',a,b)}}
console.log('identici',N-bad,'/',N);
