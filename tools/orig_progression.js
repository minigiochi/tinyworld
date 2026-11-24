var OM={survivor:80,fallen:30};
function Tp(n){return Math.round(100+(n-1)*85+(n-1)*(n-1)*5)}
function Y6(n){const e={maxHp:0,attack:0,defense:0};return n.isDps?(e.maxHp=14,e.attack=6):n.isHealer?(e.maxHp=12,e.attack=5):n.isTank&&(e.maxHp=34,e.attack=3,e.defense=5),n.maxHp+=e.maxHp,n.attack+=e.attack,n.defense+=e.defense,e}
function K6(n){const e=n.map(i=>({...i})),t=[];return e.forEach(i=>{const r=i.alive?OM.survivor:OM.fallen;i.xp=(i.xp||0)+r;const o=i.level;let a={maxHp:0,attack:0,defense:0};for(;i.xp>=Tp(i.level);){i.xp-=Tp(i.level),i.level+=1;const c=Y6(i);a.maxHp+=c.maxHp,a.attack+=c.attack,a.defense+=c.defense}i.level>o&&t.push({name:i.name,icon:i.icon,className:i.className,level:i.level,classKey:i.classKey,gains:a})}),{party:e,summary:t}}
function Z6(n){return n._buffSnap?{...n,attack:n._buffSnap.attack,maxHp:n._buffSnap.maxHp,defense:n._buffSnap.defense,hp:Math.min(n.hp,n._buffSnap.maxHp),_buffSnap:void 0,buff:null}:n}
