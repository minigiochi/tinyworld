// Confronto nemico di stanza nuovo (dungeonEnemy/dungeonTemplate) vs originale (DBA_MKB/DBA_TPL), a seme fisso.
const fs=require('fs');const LD=require('../src/engine/load')();
const s=fs.readFileSync(__dirname+'/../reference/code/module_no_assets.js','utf8');
const a=s.indexOf('function DBA_MKB(');const b=s.indexOf('\n',a);const c=s.indexOf('function DBA_TPL(');const d=s.indexOf('\n',c);
LD.run('var DBA_TK=["shadow","fire","frost","bone","nature","abyss","storm","void","blood","light"];'+s.slice(c,d)+'\n'+s.slice(a,b)+';globalThis.__seed=function(sd){var x=sd;Math.random=function(){x=(x+0x6D2B79F5)|0;var t=Math.imul(x^(x>>>15),1|x);t=(t+Math.imul(t^(t>>>7),61|t))^t;return((t^(t>>>14))>>>0)/4294967296}};');
let bad=0,N=500;
for(let sd=1;sd<=N;sd++){
  const out=LD.run('(function(){var r=[];for(var m=0;m<2;m++){for(var i=0;i<10;i++){__seed('+sd+'+i);var B=ug(8,3,1+i);var t1=DBA_TPL(i);var e1=DBA_MKB(t1,B,m,8);__seed('+sd+'+i);var B2=ug(8,3,1+i);var t2=dungeonTemplate(i);var e2=dungeonEnemy(t2,B2,m,8);r.push([JSON.stringify(e1)==JSON.stringify(e2),t1.key==t2.key])}}return r})()');
  if(out.some(x=>!x[0]||!x[1]))bad++;
}
console.log('identici',N-bad,'/',N,'(20 nemici ciascuno)');
