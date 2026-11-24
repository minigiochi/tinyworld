// Confronto incantesimi/effetti a 5 pezzi nuovo vs originale (DBA_ENP/DBA_ENB), input casuali. Uso: node tools/enchant_parity.js tools/orig_enchant.js
const fs=require('fs'),vm=require('vm'),path=require('path');
const sets=require('../src/data/sets.json'),setFull=require('../src/data/setFull.json');
const A={Math,console};A.window=A;vm.createContext(A);vm.runInContext(fs.readFileSync(process.argv[2],'utf8'),A);
const B={Math};vm.createContext(B);vm.runInContext('const DATA={setFull:'+JSON.stringify(setFull)+'};'+fs.readFileSync(path.join(__dirname,'../src/engine/enchant.js'),'utf8')+';globalThis.ENCH=ENCH;globalThis.enchantPower=enchantPower;globalThis.enchantApplyBattle=enchantApplyBattle;',B);
let s=7;const R=()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296};
const keys=Object.keys(setFull),ench=Object.keys(B.ENCH),rar=['bianco','blu','viola','oro','rosso'];let bad=0,N=20000;
for(let i=0;i<N;i++){
  const nh=1+Math.floor(R()*3),inv=[],heroes=[];
  for(let h=0;h<nh;h++){heroes.push({id:'h'+h,attack:20+Math.floor(R()*300),maxHp:100+Math.floor(R()*1500),hp:0});heroes[h].hp=heroes[h].maxHp;
    const n=Math.floor(R()*9);for(let j=0;j<n;j++)inv.push({equippedTo:R()<.9?'h'+h:null,set:R()<.6?keys[Math.floor(R()*(R()<.5?2:8))]:null,rarity:rar[Math.floor(R()*5)],ench:R()<.5?ench[Math.floor(R()*ench.length)]:undefined})}
  A.__dbaGetInv=()=>inv;
  const ha=JSON.parse(JSON.stringify(heroes)),hb=JSON.parse(JSON.stringify(heroes));
  A.DBA_ENB({heroes:ha});B.enchantApplyBattle(hb,(h)=>inv.filter(o=>o.equippedTo===h.id));
  let pa=ench.map(k=>A.DBA_ENP(k,'h0')),pb=ench.map(k=>B.enchantPower(k,inv.filter(o=>o.equippedTo==='h0')));
  if(JSON.stringify(ha)!==JSON.stringify(hb)||JSON.stringify(pa)!==JSON.stringify(pb)){if(bad++<3)console.log('DIVERGE',JSON.stringify(ha),JSON.stringify(hb))}
}
console.log('identici',N-bad,'/',N);
