var DBA_RARS=["bianco","blu","viola","oro","rosso"];
window.DBA_EN={
 vamp:["🩸","Vampirismo",function(p){return Math.min(25,2*p)},function(x){return "Dopo ogni vittoria il party recupera il "+x+"% dei PV massimi"}],
 oro:["💰","Avidità",function(p,b){return Math.round((8+3*(b|0))*p)},function(x){return "+"+x+" 🪙 a ogni vittoria"}],
 xp:["📚","Sapienza",function(p,b){return Math.round((6+2*(b|0))*p)},function(x){return "+"+x+" XP a ogni eroe dopo ogni vittoria"}],
 racc:["⛏","Raccolto",function(p){return Math.min(60,8*p)},function(x){return x+"% di probabilità di raccolta doppia"}],
 fort:["🍀","Fortuna",function(p){return Math.min(40,4*p)},function(x){return "+"+x+"% di probabilità di trovare gemme e mappe"}],
 rig:["🌿","Rigenerazione",function(p){return Math.min(6,Math.round(6*p)/10)},function(x){return "Nel mondo aperto il party recupera il "+x+"% dei PV ogni 10 secondi"}],
 furia:["🔥","Furia",function(p){return Math.min(40,3*p)},function(x){return "+"+x+"% di attacco in battaglia (solo l'eroe che lo indossa)"}],
 baluardo:["🛡","Baluardo",function(p){return Math.min(40,3*p)},function(x){return "+"+x+"% di PV massimi in battaglia (solo l'eroe che lo indossa)"}]};
window.DBA_SETFULL={fenice:{rig:3},titano:{baluardo:3},tempesta:{furia:3},drago:{furia:2,baluardo:2},gelo:{baluardo:2,fort:2},sangue:{vamp:4},luce:{xp:3,rig:1},vita:{rig:4,vamp:1}};
window.DBA_SETFX=function(hid){var c={},r={};try{__dbaGetInv().forEach(function(o){if(o.equippedTo===hid&&o.set)c[o.set]=(c[o.set]||0)+1})}catch(e){}for(var k in c)if(c[k]>=5&&DBA_SETFULL[k])for(var e in DBA_SETFULL[k])r[e]=(r[e]||0)+DBA_SETFULL[k][e];return r};
window.DBA_ENP=function(key,hid){var inv=[],p=0,ids={};try{inv=window.__dbaGetInv()}catch(e){}inv.forEach(function(it){if(it.equippedTo){ids[it.equippedTo]=1;if(it.ench===key&&(hid==null||it.equippedTo===hid))p+=1+Math.max(0,DBA_RARS.indexOf(it.rarity))*.5}});if(hid!=null)p+=DBA_SETFX(hid)[key]||0;else for(var h in ids)p+=DBA_SETFX(h)[key]||0;return p};
window.DBA_ENB=function(ke){(ke.heroes||[]).forEach(function(h){var f=DBA_ENP("furia",h.id),b=DBA_ENP("baluardo",h.id);if(f>0)h.attack=Math.round(h.attack*(1+DBA_EN.furia[2](f)/100));if(b>0){var m=1+DBA_EN.baluardo[2](b)/100;h.maxHp=Math.round(h.maxHp*m);h.hp=Math.round(h.hp*m)}})};
