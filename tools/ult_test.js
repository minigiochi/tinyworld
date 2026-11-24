global.window=global;require('../web/engine.bundle.js');const E=DBAEngine;
const keys=Object.keys(E.CLASSES);const msgs={};let casts=0,fail=0;
function hero(k,i){const c=E.CLASSES[k];return Object.assign({},c,{id:'h'+i,name:c.name,classKey:k,level:10,maxMana:120,manaRegen:2.5,maxHp:c.maxHp*3,hp:c.maxHp*3,attack:c.attack,defense:c.defense})}
let seed=1;Math.random=()=>(seed=seed*16807%2147483647)/2147483647;
const boss=E.createBoss(3,0,1);boss.maxHp*=200;boss.hp=boss.maxHp;
const eng=E.createEngine(keys.slice(0,20).map(hero),boss);
for(let t=0;t<400&&!eng.over;t++){eng.step(.05);
 if(t%20===10)for(const h of eng.heroes){const m=E.ultimateCast(eng,h);if(m===''){casts++}else{msgs[m]=(msgs[m]||0)+1}}}
console.log('casts ok',casts,'rifiuti',msgs,'tempo',eng.time.toFixed(1),'boss',Math.round(eng.boss.hp),'/',Math.round(eng.boss.maxHp));
const h0=eng.heroes[0];console.log('progress dopo cast',E.ultimateProgress(eng,h0).toFixed(2));
