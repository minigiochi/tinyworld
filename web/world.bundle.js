(function(){
const dc=[{key:"druido",name:"Druido",icon:"🌿",arch:"healer",maxHp:75,attack:11,defense:6,speed:5,radius:.6,range:6.5,color:"#4ade80",accent:"from-emerald-500 to-green-600",text:"text-emerald-300",theme:"nature",weapon:"staff",helmet:"hood",desc:"Cure naturali e rigenerazione con erbe.",abilities:[{name:"Cura Selvatica",cd:2.2,kind:"heal_single",vfx:"heal_beam",desc:"Cura un alleato"},{name:"Rinnovamento",cd:7,kind:"regen",vfx:"regen",desc:"Rigenerazione 6s"},{name:"Sinergia Vitale",cd:11,kind:"heal_aoe",vfx:"heal_ring",desc:"Cura tutto il party"}]},{key:"monaco",name:"Monaco",icon:"💧",arch:"healer",maxHp:80,attack:8,defense:7,speed:5,radius:.6,range:6.5,color:"#38bdf8",accent:"from-cyan-500 to-blue-600",text:"text-cyan-300",theme:"water",weapon:"staff",helmet:"band",desc:"Cure ad area d'acqua e scudi liquidi.",abilities:[{name:"Onda Curativa",cd:3,kind:"heal_aoe",vfx:"heal_ring",desc:"Cura ad area"},{name:"Sorgente",cd:3.5,kind:"heal_single",vfx:"heal_beam",desc:"Cura singola grande"},{name:"Acquascudo",cd:7,kind:"shield",vfx:"bubble",desc:"Scudo d'acqua"}]},{key:"chierico",name:"Chierico",icon:"✨",arch:"healer",maxHp:78,attack:12,defense:8,speed:5,radius:.6,range:6.5,color:"#fde047",accent:"from-amber-300 to-yellow-500",text:"text-amber-300",theme:"light",weapon:"mace",helmet:"circlet",desc:"Cure sacre gialle e barriere di luce.",abilities:[{name:"Luce Sacra",cd:2.2,kind:"heal_single",vfx:"heal_beam",desc:"Cura sacra"},{name:"Barriera di Luce",cd:7,kind:"shield",vfx:"bubble",desc:"Scudo di luce"},{name:"Preghiera",cd:10,kind:"heal_aoe",vfx:"heal_ring",desc:"Cura ad area sacra"}]},{key:"mago_sangue",name:"Mago del Sangue",icon:"🩸",arch:"healer",maxHp:70,attack:12,defense:6,speed:5,radius:.6,range:6.5,color:"#ef4444",accent:"from-red-500 to-rose-700",text:"text-red-300",theme:"blood",weapon:"staff",helmet:"hood",desc:"Cure oscure col potere del sangue.",abilities:[{name:"Cura di Sangue",cd:2.4,kind:"heal_single",vfx:"heal_beam",desc:"Cura sanguigna"},{name:"Rigenerazione Sanguigna",cd:7,kind:"regen",vfx:"regen",desc:"Rigenerazione 6s"},{name:"Emorragia Curativa",cd:11,kind:"heal_aoe",vfx:"heal_ring",desc:"Cura ad area"}]},{key:"cavaliere",name:"Cavaliere",icon:"🛡️",arch:"tank",maxHp:210,attack:11,defense:22,speed:4.3,radius:.78,range:2.5,color:"#cbd5e1",accent:"from-slate-400 to-slate-600",text:"text-slate-300",theme:"steel",weapon:"sword",helmet:"helmet",desc:"Cavaliere in armatura, provoca il boss.",abilities:[{name:"Assalto",cd:1.6,kind:"taunt_strike",vfx:"taunt_strike",desc:"Colpo + provocazione"},{name:"Grido di Guerra",cd:7,kind:"threat",vfx:"ring",desc:"Attira il boss 4s"},{name:"Muro di Ferro",cd:13,kind:"wall",vfx:"aura",desc:"Danni -65% 5s"}]},{key:"barbaro",name:"Barbaro",icon:"🪓",arch:"tank",maxHp:240,attack:14,defense:17,speed:4.3,radius:.82,range:2.5,color:"#dc2626",accent:"from-red-600 to-rose-800",text:"text-red-300",theme:"berserk",weapon:"axe",helmet:"horned",desc:"Carne enorme e rabbia feroce.",abilities:[{name:"Fendente",cd:1.6,kind:"taunt_strike",vfx:"taunt_strike",desc:"Colpo + provocazione"},{name:"Ruggito",cd:7,kind:"threat",vfx:"ring",desc:"Attira il boss 4s"},{name:"Pelle di Ferro",cd:13,kind:"wall",vfx:"aura",desc:"Danni -65% 5s"}]},{key:"guardiano",name:"Guardiano",icon:"⛰️",arch:"tank",maxHp:252,attack:10,defense:24,speed:4.1,radius:.85,range:2.5,color:"#a16207",accent:"from-amber-700 to-yellow-900",text:"text-amber-400",theme:"earth",weapon:"hammer",helmet:"helmet",desc:"Muro di pietra, devia i colpi.",abilities:[{name:"Martellata",cd:1.6,kind:"taunt_strike",vfx:"taunt_strike",desc:"Colpo + provocazione"},{name:"Terraferma",cd:7,kind:"threat",vfx:"ring",desc:"Attira il boss 4s"},{name:"Pietra",cd:13,kind:"wall",vfx:"aura",desc:"Danni -65% 5s"}]},{key:"paladino",name:"Paladino",icon:"⚜️",arch:"tank",maxHp:216,attack:12,defense:20,speed:4.3,radius:.78,range:2.5,color:"#fbbf24",accent:"from-amber-400 to-yellow-600",text:"text-amber-300",theme:"light",weapon:"mace",helmet:"circlet",desc:"Difensore sacro con scudo divino.",abilities:[{name:"Giudizio",cd:1.6,kind:"taunt_strike",vfx:"taunt_strike",desc:"Colpo + provocazione"},{name:"Sfida",cd:7,kind:"threat",vfx:"ring",desc:"Attira il boss 4s"},{name:"Scudo Sacro",cd:13,kind:"wall",vfx:"aura",desc:"Danni -65% 5s"}]},{key:"guerriero",name:"Guerriero",icon:"⚔️",arch:"melee",maxHp:95,attack:18,defense:4,speed:5.6,radius:.6,range:2.5,color:"#cbd5e1",accent:"from-slate-400 to-slate-600",text:"text-slate-300",theme:"steel",weapon:"sword",helmet:"helmet",desc:"Soldato con spada, danno solido.",abilities:[{name:"Assalto",cd:1.1,kind:"strike",vfx:"slash",desc:"Colpo rapido"},{name:"Fendente Letale",cd:6,kind:"big_strike",vfx:"slash_big",desc:"Danno enorme"},{name:"Vortice",cd:10,kind:"aoe",vfx:"ring",desc:"Colpo rotante"}]},{key:"assassino",name:"Assassino",icon:"🗡️",arch:"melee",maxHp:80,attack:20,defense:3,speed:5.8,radius:.58,range:2.5,color:"#a78bfa",accent:"from-violet-500 to-purple-700",text:"text-violet-300",theme:"shadow",weapon:"dagger",helmet:"hood",desc:"Ombre letali con pugnali.",abilities:[{name:"Pugnalata",cd:1,kind:"strike",vfx:"slash",desc:"Colpo rapido"},{name:"Ombra Letale",cd:6,kind:"big_strike",vfx:"slash_big",desc:"Danno enorme"},{name:"Danza di Lame",cd:9,kind:"chain",vfx:"multislash",desc:"Più colpi"}]},{key:"gladiatore",name:"Gladiatore",icon:"🪈",arch:"melee",maxHp:100,attack:17,defense:6,speed:5.5,radius:.62,range:2.5,color:"#d97706",accent:"from-amber-600 to-orange-800",text:"text-amber-300",theme:"bronze",weapon:"spear",helmet:"helmet",desc:"Combattente d'arena con lancia.",abilities:[{name:"Stoccata",cd:1.1,kind:"strike",vfx:"slash",desc:"Colpo rapido"},{name:"Affondo",cd:6,kind:"big_strike",vfx:"slash_big",desc:"Danno enorme"},{name:"Lancia Rotante",cd:10,kind:"aoe",vfx:"ring",desc:"Colpo rotante"}]},{key:"berserker",name:"Berserker",icon:"🔥",arch:"melee",maxHp:85,attack:21,defense:3,speed:5.6,radius:.6,range:2.5,color:"#dc2626",accent:"from-red-600 to-rose-800",text:"text-red-300",theme:"berserk",weapon:"axe",helmet:"horned",desc:"Rabbia sanguinaria con ascia.",abilities:[{name:"Ascia",cd:1.6,kind:"big_strike",vfx:"slash_big",desc:"Colpo pesante"},{name:"Furia Sanguinaria",cd:8,kind:"aoe",vfx:"aura",desc:"Esplosione rabbia"},{name:"Frenesia",cd:14,kind:"buff_atk",vfx:"aura",desc:"Attacco +70% 5s"}]},{key:"spadaccino",name:"Spadaccino",icon:"🤺",arch:"melee",maxHp:90,attack:19,defense:5,speed:5.8,radius:.58,range:2.5,color:"#e5e7eb",accent:"from-slate-300 to-slate-500",text:"text-slate-200",theme:"steel",weapon:"sword",helmet:"band",desc:"Duellante elegante con stocco.",abilities:[{name:"Stoccata Rapida",cd:.9,kind:"strike",vfx:"slash",desc:"Colpo rapido"},{name:"Raffica",cd:6,kind:"chain",vfx:"multislash",desc:"Più colpi"},{name:"Lama Vorticosa",cd:10,kind:"aoe",vfx:"ring",desc:"Colpo rotante"}]},{key:"cavaliere_oscuro",name:"Cav. Oscuro",icon:"🌑",arch:"melee",maxHp:95,attack:18,defense:5,speed:5.5,radius:.6,range:2.5,color:"#7c3aed",accent:"from-purple-600 to-violet-900",text:"text-purple-300",theme:"shadow",weapon:"greatsword",helmet:"horned",desc:"Cavaliere maledetto con spadone.",abilities:[{name:"Lama Oscura",cd:1.4,kind:"big_strike",vfx:"slash_big",desc:"Colpo pesante"},{name:"Corruzione",cd:6,kind:"dot",vfx:"curse",desc:"Danno continuo"},{name:"Onda Nera",cd:11,kind:"aoe",vfx:"aura",desc:"Esplosione ombra"}]},{key:"ninjia",name:"Ninja",icon:"🥷",arch:"melee",maxHp:82,attack:19,defense:3,speed:5.9,radius:.56,range:2.5,color:"#6ee7b7",accent:"from-teal-400 to-emerald-700",text:"text-teal-300",theme:"wind",weapon:"katana",helmet:"hood",desc:"Assassino del vento con katana.",abilities:[{name:"Taglio",cd:1,kind:"strike",vfx:"slash",desc:"Colpo rapido"},{name:"Tempesta di Tagli",cd:6,kind:"chain",vfx:"multislash",desc:"Più colpi"},{name:"Ombracorrente",cd:10,kind:"aoe",vfx:"aura",desc:"Esplosione vento"}]},{key:"boia",name:"Boia",icon:"🪚",arch:"melee",maxHp:88,attack:20,defense:4,speed:5.4,radius:.62,range:2.5,color:"#1f2937",accent:"from-gray-700 to-gray-900",text:"text-gray-300",theme:"shadow",weapon:"greatsword",helmet:"helmet",desc:"Esecutore implacabile.",abilities:[{name:"Decapitazione",cd:1.6,kind:"big_strike",vfx:"slash_big",desc:"Colpo pesante"},{name:"Marchio di Morte",cd:6,kind:"dot",vfx:"curse",desc:"Danno continuo"},{name:"Esecuzione",cd:11,kind:"aoe",vfx:"explosion",desc:"Esplosione mortale"}]},{key:"arciere",name:"Arciere",icon:"🏹",arch:"ranged",maxHp:80,attack:17,defense:3,speed:5,radius:.6,range:9,color:"#4ade80",accent:"from-emerald-500 to-green-600",text:"text-emerald-300",theme:"nature",weapon:"bow",helmet:"hood",desc:"Tiratore con arco, frecce verdi.",abilities:[{name:"Freccia",cd:1.1,kind:"shot",vfx:"projectile",desc:"Freccia rapida"},{name:"Tiro Preciso",cd:5,kind:"big_shot",vfx:"projectile",desc:"Freccia potente"},{name:"Pioggia di Frecce",cd:11,kind:"aoe",vfx:"rain",desc:"Pioggia di frecce"}]},{key:"mago",name:"Mago",icon:"🔥",arch:"ranged",maxHp:78,attack:19,defense:3,speed:5,radius:.6,range:9,color:"#f97316",accent:"from-orange-500 to-red-600",text:"text-orange-300",theme:"fire",weapon:"staff",helmet:"hat",desc:"Pirómante con sfere di fuoco.",abilities:[{name:"Dardo Infuocato",cd:1.1,kind:"shot",vfx:"projectile",desc:"Dardo di fuoco"},{name:"Palla di Fuoco",cd:6,kind:"big_shot",vfx:"projectile",desc:"Sfera esplosiva"},{name:"Esplosione",cd:11,kind:"aoe",vfx:"explosion",desc:"Esplosione di fuoco"}]},{key:"stregone",name:"Stregone",icon:"😈",arch:"ranged",maxHp:80,attack:18,defense:3,speed:5,radius:.6,range:9,color:"#b91c1c",accent:"from-red-700 to-rose-900",text:"text-red-400",theme:"hell",weapon:"staff",helmet:"horned",desc:"Demoni dell'inferno, maledizioni.",abilities:[{name:"Dardo Demonico",cd:1.1,kind:"shot",vfx:"projectile",desc:"Dardo demoniaco"},{name:"Maledizione",cd:6,kind:"dot",vfx:"curse",desc:"Maledizione infernale"},{name:"Demoni",cd:11,kind:"aoe",vfx:"aura",desc:"Evocazione demoni"}]},{key:"necromante",name:"Necromante",icon:"💀",arch:"ranged",maxHp:78,attack:17,defense:3,speed:5,radius:.6,range:9,color:"#65a30d",accent:"from-lime-600 to-green-900",text:"text-lime-300",theme:"death",weapon:"staff",helmet:"hood",desc:"Signore dei morti, ossa e decomposizione.",abilities:[{name:"Dardo d'Ossa",cd:1.1,kind:"shot",vfx:"projectile",desc:"Dardo d'ossa"},{name:"Decomposizione",cd:6,kind:"dot",vfx:"curse",desc:"Decomposizione"},{name:"Esercito di Morti",cd:11,kind:"aoe",vfx:"curse",desc:"Evocazione morti"}]},{key:"crio_mago",name:"Crio Mago",icon:"❄️",arch:"ranged",maxHp:80,attack:17,defense:4,speed:5,radius:.6,range:9,color:"#22d3ee",accent:"from-cyan-400 to-sky-600",text:"text-cyan-300",theme:"frost",weapon:"staff",helmet:"hat",desc:"Mago del ghiaccio, congelamento.",abilities:[{name:"Ghiacciolo",cd:1.1,kind:"shot",vfx:"projectile",desc:"Ghiacciolo"},{name:"Lancia di Ghiaccio",cd:6,kind:"big_shot",vfx:"projectile",desc:"Lancia di ghiaccio"},{name:"Congelamento",cd:9,kind:"dot",vfx:"frost",desc:"Congela e danneggia"}]},{key:"fulmine_mago",name:"Mago Fulmine",icon:"⚡",arch:"ranged",maxHp:76,attack:19,defense:2,speed:5,radius:.6,range:9,color:"#facc15",accent:"from-yellow-400 to-amber-600",text:"text-yellow-300",theme:"storm",weapon:"staff",helmet:"circlet",desc:"Mago della tempesta, saette.",abilities:[{name:"Saetta",cd:1.1,kind:"shot",vfx:"lightning",desc:"Saetta rapida"},{name:"Catena di Fulmini",cd:6,kind:"chain",vfx:"lightning",desc:"Fulmini multipli"},{name:"Tempesta",cd:11,kind:"aoe",vfx:"aura",desc:"Tempesta elettrica"}]},{key:"cacciatore",name:"Cacciatore",icon:"🎯",arch:"ranged",maxHp:84,attack:16,defense:4,speed:5,radius:.6,range:9,color:"#a16207",accent:"from-amber-700 to-stone-800",text:"text-amber-400",theme:"beast",weapon:"crossbow",helmet:"hood",desc:"Cacciatore con balestra e trappole.",abilities:[{name:"Balestra",cd:1.1,kind:"shot",vfx:"projectile",desc:"Dardo di balestra"},{name:"Tiro Pesante",cd:5,kind:"big_shot",vfx:"projectile",desc:"Tiro potente"},{name:"Trappola",cd:11,kind:"aoe",vfx:"explosion",desc:"Trappola esplosiva"}]},...(function(){(function(){
var D=function(n,cd,vfx,dmg,fx,cost,desc,o){return Object.assign({name:n,cd:cd,kind:"dual",vfx:vfx,dmg:dmg,fx:fx,cost:cost,desc:desc},o||{})};
window.DBA_NEWCLS=[
{key:"sciamano",name:"Sciamano",icon:"🪶",arch:"healer",noMana:!0,maxHp:80,attack:11,defense:6,speed:5,radius:.6,range:6.5,color:"#2dd4bf",accent:"dbaA_sciamano",text:"text-teal-300",theme:"spectral",weapon:"staff",helmet:"horned",desc:"Cure spirituali a ricarica: non usa mana.",abilities:[{name:"Spirito Guaritore",cd:2.8,kind:"heal_single",vfx:"heal_beam",desc:"Cura uno spirito alleato"},{name:"Totem della Vita",cd:7,kind:"regen",vfx:"regen",desc:"Rigenerazione 6s"},{name:"Richiamo Ancestrale",cd:10,kind:"heal_aoe",vfx:"heal_ring",desc:"Cura tutto il party"}]},
{key:"alchimista",name:"Alchimista",icon:"⚗️",arch:"healer",noMana:!0,maxHp:76,attack:12,defense:5,speed:5.2,radius:.6,range:7,color:"#a3e635",accent:"dbaA_alchimista",text:"text-lime-300",theme:"venom",weapon:"dagger",helmet:"hat",desc:"Elisir e fiale: cure a ricarica, senza mana.",abilities:[{name:"Elisir Vitale",cd:2.6,kind:"heal_single",vfx:"heal_beam",desc:"Cura con un elisir"},{name:"Fiala Protettiva",cd:8,kind:"shield",vfx:"bubble",desc:"Scudo alchemico"},{name:"Nube Rigenerante",cd:11,kind:"heal_aoe",vfx:"heal_ring",desc:"Cura ad area"}]},
{key:"sentinella_gelo",name:"Sentinella Glaciale",icon:"🧊",arch:"tank",noMana:!0,maxHp:225,attack:11,defense:23,speed:4.2,radius:.8,range:2.5,color:"#7dd3fc",accent:"dbaA_sentinella_gelo",text:"text-sky-300",theme:"frost",weapon:"hammer",helmet:"helmet",desc:"Tank di ghiaccio, nessun mana: protegge gli alleati.",abilities:[{name:"Colpo Glaciale",cd:1.6,kind:"taunt_strike",vfx:"taunt_strike",desc:"Colpo + provocazione"},{name:"Muro di Brina",cd:11,kind:"dual",vfx:"ring",dmg:.8,fx:["self","allyShield"],red:.6,desc:"Danno + scudo a sé e all'alleato ferito"},{name:"Urlo Polare",cd:7,kind:"threat",vfx:"ring",desc:"Attira il boss 4s"}]},
{key:"vindice",name:"Vindice",icon:"⚔️",arch:"tank",noMana:!0,maxHp:215,attack:13,defense:20,speed:4.4,radius:.78,range:2.5,color:"#fb923c",accent:"dbaA_vindice",text:"text-orange-300",theme:"bronze",weapon:"greatsword",helmet:"horned",desc:"Tank vendicativo, nessun mana: colpisce mentre si difende.",abilities:[{name:"Marchio del Vindice",cd:1.6,kind:"taunt_strike",vfx:"taunt_strike",desc:"Colpo + provocazione"},{name:"Rappresaglia",cd:8,kind:"dual",vfx:"slash_big",dmg:1.8,fx:["self"],red:.5,desc:"Colpo forte + difesa personale"},{name:"Giuramento",cd:13,kind:"wall",vfx:"aura",desc:"Danni -65% 5s"}]},
{key:"bardo",name:"Bardo",icon:"🎶",arch:"ranged",cat:"potenziamento",maxHp:78,attack:13,defense:5,speed:5,radius:.6,range:8.5,color:"#f472b6",accent:"dbaA_bardo",text:"text-pink-300",theme:"celestial",weapon:"staff",helmet:"hat",desc:"Potenziamento (mana): canti che feriscono il boss e aiutano il party.",abilities:[D("Nota Tagliente",1.6,"projectile",1.2,["heal"],4,"Danno + piccola cura al più ferito",{hp:1.2}),D("Inno del Coraggio",9,"ring",.7,["adaptAll"],20,"Danno + potenzia ogni alleato secondo il ruolo"),D("Ballata Rigenerante",12,"ring",.7,["healAll"],24,"Danno + cura il party")]},
{key:"artefice",name:"Artefice Runico",icon:"🔷",arch:"ranged",cat:"potenziamento",maxHp:80,attack:13,defense:6,speed:5,radius:.6,range:8,color:"#60a5fa",accent:"dbaA_artefice",text:"text-blue-300",theme:"crystal",weapon:"staff",helmet:"circlet",desc:"Potenziamento (mana): rune che colpiscono e creano barriere.",abilities:[D("Runa Esplosiva",1.7,"projectile",1.3,["bubble"],5,"Danno + bolla sul più ferito"),D("Sigillo Protettivo",11,"ring",.7,["bubbleAll"],24,"Danno + bolla leggera a tutto il party"),D("Runa del Potere",9,"aura",.7,["adapt"],18,"Danno + potenzia il miglior DPS")]},
{key:"araldo",name:"Araldo di Guerra",icon:"📯",arch:"ranged",cat:"potenziamento",maxHp:86,attack:14,defense:6,speed:5,radius:.62,range:7.5,color:"#fbbf24",accent:"dbaA_araldo",text:"text-amber-300",theme:"bronze",weapon:"spear",helmet:"helmet",desc:"Potenziamento (energia dai danni): squilli che accelerano e rinforzano.",abilities:[D("Squillo d'Assalto",1.7,"projectile",1.3,["speed"],6,"Danno + velocità d'attacco a un alleato"),D("Grido di Battaglia",10,"ring",.8,["adaptAll"],28,"Danno + potenzia ogni alleato secondo il ruolo"),D("Vessillo Curativo",12,"aura",1,["heal","bubble"],30,"Danno + cura e bolla")]},
{key:"mistico",name:"Mistico Solare",icon:"☀️",arch:"ranged",cat:"potenziamento",maxHp:82,attack:13,defense:6,speed:5,radius:.6,range:8,color:"#fde047",accent:"dbaA_mistico",text:"text-yellow-300",theme:"light",weapon:"mace",helmet:"circlet",desc:"Potenziamento (energia dai danni): luce che ferisce, cura e protegge.",abilities:[D("Raggio Solare",1.6,"projectile",1.3,["heal"],6,"Danno + cura il più ferito",{hp:1.4}),D("Aura Dorata",11,"ring",.8,["bubbleAll"],28,"Danno + bolla a tutto il party"),D("Eclissi",14,"explosion",1.6,["adaptAll"],35,"Danno forte + potenzia ogni alleato")]}
];
window.DBA_O6N={
bardo:[D("Coro Epico",16,"ring",1,["adaptAll","healAll"],34,"Danno + potenzia e cura il party"),D("Requiem",13,"projectile",1.8,["heal"],26,"Danno forte + cura",{hp:2}),D("Sinfonia di Guerra",18,"aura",1.2,["adaptAll","speed"],38,"Danno + potenziamento doppio")],
artefice:[D("Cupola Runica",16,"ring",1,["bubbleAll","adapt"],34,"Danno + bolla a tutti + potenzia"),D("Runa Perforante",12,"projectile",2,["bubble"],26,"Danno forte + bolla"),D("Catena di Rune",18,"aura",1.2,["adaptAll","bubbleAll"],38,"Danno + bolla e potenziamento")],
araldo:[D("Carica Eroica",14,"projectile",2,["speed","adapt"],32,"Danno forte + velocità e potenziamento"),D("Stendardo Sacro",16,"ring",1,["healAll","adaptAll"],36,"Danno + cura e potenzia"),D("Squillo Finale",20,"explosion",2.4,["adaptAll","bubbleAll"],45,"Danno enorme + potenzia e protegge")],
mistico:[D("Alba Radiosa",15,"ring",1,["healAll","adaptAll"],34,"Danno + cura e potenzia"),D("Lancia di Luce",12,"projectile",2,["heal","bubble"],28,"Danno forte + cura e bolla",{hp:1.8}),D("Corona Solare",20,"explosion",2.4,["adaptAll","bubbleAll"],45,"Danno enorme + potenzia e protegge")]};
})();
return window.DBA_NEWCLS})()];
const Kc=Object.fromEntries(dc.map(n=>[n.key,n]));
const $v=(a=>a.map(x=>x.key==="ossa"?{...x,companionChance:.5,companionName:"Scheletro Evocato"}:x).concat([{"key":"orco","name":"Orco Capoguerra","title":"Il Fracassateste","icon":"🪓","theme":"blood","bossColor":"#65a30d","arena":{"ground":"#14200a","fog":"#0c1406","ring":"#65a30d","light":"#d9f99d"},"requiredLevel":2,"companionChance":0.2,"companionName":"Orco Guerriero","specialAbilities":[{"name":"Fendente Devastante","type":"shockwave","damage":0.55,"radius":4.5,"cd":9,"color":"#84cc16"},{"name":"Grido di Guerra","type":"meteor","damage":0.6,"radius":3.5,"cd":11,"color":"#a3e635"}]},{"key":"golem","name":"Golem di Pietra","title":"Il Guardiano Antico","icon":"🗿","theme":"sand","bossColor":"#a8a29e","arena":{"ground":"#1c1a16","fog":"#12100c","ring":"#fb923c","light":"#fed7aa"},"requiredLevel":4,"companionChance":0.2,"companionName":"Frammento di Roccia","specialAbilities":[{"name":"Pugno Tellurico","type":"shockwave","damage":0.6,"radius":5,"cd":10,"color":"#fb923c"},{"name":"Frana","type":"meteor","damage":0.7,"radius":3.5,"cd":9,"color":"#a8a29e"}]},{"key":"troll","name":"Troll delle Caverne","title":"Il Rigenerante","icon":"👹","theme":"nature","bossColor":"#4d7c0f","arena":{"ground":"#101a0a","fog":"#0a1206","ring":"#84cc16","light":"#d9f99d"},"requiredLevel":6,"companionChance":0.2,"companionName":"Troll Minore","specialAbilities":[{"name":"Radici Fangose","type":"root","damage":0.5,"radius":3.5,"cd":9,"color":"#65a30d"},{"name":"Clava Sismica","type":"shockwave","damage":0.55,"radius":5,"cd":11,"color":"#a3e635"}]},{"key":"ciclope","name":"Ciclope Tonante","title":"Il Gigante Cieco","icon":"👁️","theme":"storm","bossColor":"#d97706","arena":{"ground":"#1c140a","fog":"#120d06","ring":"#facc15","light":"#fef08a"},"requiredLevel":8,"companionChance":0.2,"companionName":"Gigante Minore","specialAbilities":[{"name":"Sguardo Folgorante","type":"lightning_storm","damage":0.8,"radius":3,"cd":8,"color":"#facc15"},{"name":"Lancio di Roccia","type":"meteor","damage":0.7,"radius":3.5,"cd":10,"color":"#d97706"}]},{"key":"minotauro","name":"Minotauro del Labirinto","title":"Il Cornuto","icon":"🐂","theme":"magma","bossColor":"#9a3412","arena":{"ground":"#200c06","fog":"#160804","ring":"#f97316","light":"#fdba74"},"requiredLevel":10,"companionChance":0.2,"companionName":"Mandriano Infernale","specialAbilities":[{"name":"Carica Furiosa","type":"shockwave","damage":0.6,"radius":5.5,"cd":10,"color":"#f97316"},{"name":"Ascia di Fuoco","type":"meteor","damage":0.7,"radius":3.5,"cd":9,"color":"#ef4444"}]},{"key":"lich","name":"Lich Sovrano","title":"Il Re Non Morto","icon":"💀","theme":"bone","bossColor":"#6366f1","arena":{"ground":"#0a0a18","fog":"#060610","ring":"#6366f1","light":"#a5b4fc"},"requiredLevel":12,"companionChance":0.2,"companionName":"Servo Scheletrico","specialAbilities":[{"name":"Onda Necrotica","type":"shadow_wave","damage":0.7,"radius":4.5,"cd":8,"color":"#818cf8"},{"name":"Vuoto Eterno","type":"void","damage":0.9,"radius":3,"cd":12,"color":"#6366f1"}]},{"key":"demone","name":"Demone Infernale","title":"Il Tormentatore","icon":"😈","theme":"fire","bossColor":"#dc2626","arena":{"ground":"#2a0606","fog":"#1a0303","ring":"#ef4444","light":"#fca5a5"},"requiredLevel":14,"companionChance":0.2,"companionName":"Diavoletto","specialAbilities":[{"name":"Pioggia di Brace","type":"meteor","damage":0.75,"radius":3.5,"cd":9,"color":"#f97316"},{"name":"Frustata Ardente","type":"shockwave","damage":0.55,"radius":5,"cd":10,"color":"#ef4444"}]},{"key":"gargoyle","name":"Gargoyle Alato","title":"La Sentinella di Pietra","icon":"🦇","theme":"shadow","bossColor":"#64748b","arena":{"ground":"#10121a","fog":"#0a0c12","ring":"#94a3b8","light":"#cbd5e1"},"requiredLevel":16,"companionChance":0.2,"companionName":"Gargoyle Minore","specialAbilities":[{"name":"Ali di Pietra","type":"shadow_wave","damage":0.6,"radius":4.5,"cd":8,"color":"#94a3b8"},{"name":"Picchiata","type":"shockwave","damage":0.6,"radius":5,"cd":11,"color":"#64748b"}]},{"key":"cavaliere","name":"Cavaliere della Morte","title":"Il Condottiero Oscuro","icon":"🛡️","theme":"void","bossColor":"#7c3aed","arena":{"ground":"#0a0614","fog":"#06030e","ring":"#7c3aed","light":"#c4b5fd"},"requiredLevel":18,"companionChance":0.2,"companionName":"Soldato Spettrale","specialAbilities":[{"name":"Lama del Vuoto","type":"void","damage":0.85,"radius":3,"cd":11,"color":"#7c3aed"},{"name":"Onda Oscura","type":"shadow_wave","damage":0.65,"radius":4.5,"cd":8,"color":"#a78bfa"}]},{"key":"ragno","name":"Ragno Gigante","title":"La Vedova Tessitrice","icon":"🕷️","theme":"venom","bossColor":"#65a30d","arena":{"ground":"#0a140a","fog":"#060c06","ring":"#84cc16","light":"#d9f99d"},"requiredLevel":20,"companionChance":0.2,"companionName":"Ragnetto Velenoso","specialAbilities":[{"name":"Ragnatela","type":"root","damage":0.5,"radius":3.5,"cd":9,"color":"#d9f99d"},{"name":"Veleno Corrosivo","type":"poison","damage":0.65,"radius":4.5,"cd":11,"color":"#84cc16"}]},{"key":"idra","name":"Idra a Tre Teste","title":"La Rigenerante","icon":"🐍","theme":"nature","bossColor":"#15803d","arena":{"ground":"#0a1a0e","fog":"#06100a","ring":"#22c55e","light":"#86efac"},"requiredLevel":22,"companionChance":0.2,"companionName":"Serpente Minore","specialAbilities":[{"name":"Triplo Soffio","type":"poison","damage":0.65,"radius":4.5,"cd":9,"color":"#22c55e"},{"name":"Morso Multiplo","type":"root","damage":0.55,"radius":3.5,"cd":10,"color":"#4ade80"}]},{"key":"kraken","name":"Kraken Abissale","title":"Il Terrore delle Profondità","icon":"🐙","theme":"abyss","bossColor":"#1d4ed8","arena":{"ground":"#050f24","fog":"#030a18","ring":"#3b82f6","light":"#93c5fd"},"requiredLevel":24,"companionChance":0.2,"companionName":"Tentacolo Vivente","specialAbilities":[{"name":"Tempesta di Maree","type":"frost_storm","damage":0.6,"radius":4,"cd":8,"color":"#3b82f6"},{"name":"Abbraccio Abissale","type":"void","damage":0.85,"radius":3,"cd":12,"color":"#1d4ed8"}]}]).sort((x,y)=>x.requiredLevel-y.requiredLevel))([{key:"inferno",name:"Drago Infernale",title:"Signore delle Fiamme",icon:"🐉",theme:"fire",bossColor:"#ef4444",arena:{ground:"#2a0a0a",fog:"#1a0505",ring:"#ef4444",light:"#ff7733"},requiredLevel:1,companionChance:.15,companionName:"Elementale di Fuoco",specialAbilities:[{name:"Pioggia di Meteore",type:"meteor",damage:.7,radius:3.5,cd:9,color:"#ff7733"},{name:"Onda d'Urto",type:"shockwave",damage:.5,radius:5,cd:11,color:"#fb923c"}]},{key:"frost",name:"Drago Glaciale",title:"Signore del Gelo",icon:"❄️",theme:"frost",bossColor:"#67e8f9",arena:{ground:"#0a1a2a",fog:"#08121f",ring:"#22d3ee",light:"#88ccff"},requiredLevel:3,companionChance:.18,companionName:"Elementale di Ghiaccio",specialAbilities:[{name:"Tempesta Glaciale",type:"frost_storm",damage:.6,radius:4,cd:8,color:"#22d3ee"},{name:"Lancia di Ghiaccio",type:"ice_lance",damage:.8,radius:2.5,cd:10,color:"#67e8f9"}]},{key:"natura",name:"Drago Selvatico",title:"Guardiano della Foresta",icon:"🌿",theme:"nature",bossColor:"#4ade80",arena:{ground:"#0a1a0a",fog:"#061206",ring:"#4ade80",light:"#bbf7a0"},requiredLevel:5,companionChance:.2,companionName:"Anima della Foresta",specialAbilities:[{name:"Radici Avvolgenti",type:"root",damage:.5,radius:3.5,cd:9,color:"#4ade80"},{name:"Spore Velenose",type:"poison",damage:.6,radius:4.5,cd:11,color:"#a3e635"}]},{key:"ombra",name:"Drago d'Ombra",title:"Signore del Vuoto",icon:"🌑",theme:"shadow",bossColor:"#a78bfa",arena:{ground:"#0a0a14",fog:"#08081a",ring:"#a78bfa",light:"#c4b5fd"},requiredLevel:7,companionChance:.25,companionName:"Ombra Vivente",specialAbilities:[{name:"Onda d'Ombra",type:"shadow_wave",damage:.7,radius:4.5,cd:8,color:"#a78bfa"},{name:"Buco Nero",type:"void",damage:.9,radius:3,cd:12,color:"#7c3aed"}]},{key:"tempesta",name:"Drago della Tempesta",title:"Signore dei Cieli",icon:"⚡",theme:"storm",bossColor:"#facc15",arena:{ground:"#1a1a0a",fog:"#121008",ring:"#facc15",light:"#fff3b0"},requiredLevel:9,companionChance:.3,companionName:"Elementale del Fulmine",specialAbilities:[{name:"Fulmine a Caten",type:"lightning_storm",damage:.8,radius:3,cd:7,color:"#facc15"},{name:"Tempesta Elettrica",type:"storm",damage:.6,radius:5.5,cd:10,color:"#fff3b0"}]},{key:"sangue",name:"Drago di Sangue",title:"Il Sanguinario",icon:"🩸",theme:"blood",bossColor:"#dc2626",arena:{ground:"#2a0000",fog:"#1a0000",ring:"#dc2626",light:"#ff6b6b"},requiredLevel:11,companionChance:.22,companionName:"Elementale di Sangue",specialAbilities:[{name:"Vortice di Sangue",type:"void",damage:.8,radius:3,cd:11,color:"#dc2626"},{name:"Pioggia di Sangue",type:"meteor",damage:.6,radius:4,cd:9,color:"#ef4444"}]},{key:"cristallo",name:"Drago di Cristallo",title:"Il Prisma",icon:"💎",theme:"crystal",bossColor:"#67e8f9",arena:{ground:"#0a1a2a",fog:"#08141f",ring:"#67e8f9",light:"#a5f3fc"},requiredLevel:13,companionChance:.25,companionName:"Elementale di Cristallo",specialAbilities:[{name:"Scheggia di Cristallo",type:"ice_lance",damage:.85,radius:2.5,cd:9,color:"#67e8f9"},{name:"Prisma Radente",type:"frost_storm",damage:.65,radius:4,cd:11,color:"#22d3ee"}]},{key:"magma",name:"Drago di Magma",title:"Il Forno",icon:"🌋",theme:"magma",bossColor:"#f97316",arena:{ground:"#2a1000",fog:"#1a0a00",ring:"#f97316",light:"#ffa726"},requiredLevel:15,companionChance:.28,companionName:"Elementale di Magma",specialAbilities:[{name:"Bombardamento di Magma",type:"meteor",damage:.75,radius:3.5,cd:8,color:"#f97316"},{name:"Eruzione",type:"shockwave",damage:.6,radius:5.5,cd:10,color:"#fb923c"}]},{key:"sabbie",name:"Drago delle Sabbie",title:"Il Deserto",icon:"🏜️",theme:"sand",bossColor:"#eab308",arena:{ground:"#2a2000",fog:"#1f1800",ring:"#eab308",light:"#fde68a"},requiredLevel:17,companionChance:.3,companionName:"Elementale delle Sabbie",specialAbilities:[{name:"Tempesta di Sabbia",type:"shockwave",damage:.55,radius:5,cd:9,color:"#eab308"},{name:"Sabbie Mobili",type:"root",damage:.65,radius:4,cd:11,color:"#ca8a04"}]},{key:"spettrale",name:"Drago Spettrale",title:"Il Fantasma",icon:"👻",theme:"spectral",bossColor:"#a5b4fc",arena:{ground:"#1a1a2a",fog:"#0f0f1a",ring:"#a5b4fc",light:"#c7d2fe"},requiredLevel:19,companionChance:.32,companionName:"Fantasma",specialAbilities:[{name:"Onda Spettrale",type:"shadow_wave",damage:.7,radius:4.5,cd:8,color:"#a5b4fc"},{name:"Possessione",type:"void",damage:.85,radius:3,cd:12,color:"#818cf8"}]},{key:"ossa",name:"Drago d'Ossa",title:"Il Re Scheletro",icon:"💀",theme:"bone",bossColor:"#d1d5db",arena:{ground:"#1a1a1a",fog:"#0f0f0f",ring:"#d1d5db",light:"#f3f4f6"},requiredLevel:21,companionChance:.35,companionName:"Scheletro",specialAbilities:[{name:"Ossa Avvolgenti",type:"root",damage:.6,radius:4,cd:9,color:"#d1d5db"},{name:"Maledizione d'Ossa",type:"poison",damage:.7,radius:4.5,cd:11,color:"#9ca3af"}]},{key:"luce",name:"Drago di Luce",title:"L'Ascendente",icon:"✨",theme:"light",bossColor:"#fde047",arena:{ground:"#2a2a00",fog:"#1f1f00",ring:"#fde047",light:"#fef9c3"},requiredLevel:23,companionChance:.38,companionName:"Elementale di Luce",specialAbilities:[{name:"Luce Accecante",type:"lightning_storm",damage:.85,radius:3,cd:7,color:"#fde047"},{name:"Giudizio",type:"storm",damage:.6,radius:5.5,cd:10,color:"#fef08a"}]},{key:"caos",name:"Drago del Caos",title:"L'Anomalia",icon:"🔱",theme:"chaos",bossColor:"#d946ef",arena:{ground:"#2a002a",fog:"#1a001a",ring:"#d946ef",light:"#f0abfc"},requiredLevel:25,companionChance:.4,companionName:"Anomalia",specialAbilities:[{name:"Distorsione",type:"void",damage:.9,radius:3.5,cd:10,color:"#d946ef"},{name:"Caos Primordiale",type:"shadow_wave",damage:.75,radius:5,cd:8,color:"#c026d3"}]},{key:"abisso",name:"Drago dell'Abisso",title:"L'Orrore",icon:"🌊",theme:"abyss",bossColor:"#2563eb",arena:{ground:"#000a2a",fog:"#00051a",ring:"#2563eb",light:"#60a5fa"},requiredLevel:27,companionChance:.42,companionName:"Orrore Abissale",specialAbilities:[{name:"Marea Abissale",type:"storm",damage:.7,radius:5.5,cd:9,color:"#2563eb"},{name:"Voragine",type:"void",damage:.85,radius:3.5,cd:12,color:"#1d4ed8"}]},{key:"tuono",name:"Drago del Tuono",title:"Il Rombo",icon:"⛈️",theme:"thunder",bossColor:"#ca8a04",arena:{ground:"#1a1a00",fog:"#121200",ring:"#ca8a04",light:"#fde047"},requiredLevel:29,companionChance:.44,companionName:"Elementale del Tuono",specialAbilities:[{name:"Fulmine Devastante",type:"lightning_storm",damage:.8,radius:3.5,cd:6,color:"#ca8a04"},{name:"Tuono Continuo",type:"storm",damage:.65,radius:5,cd:9,color:"#eab308"}]},{key:"veleno",name:"Drago del Veleno",title:"Il Tossico",icon:"☠️",theme:"venom",bossColor:"#16a34a",arena:{ground:"#0a2a00",fog:"#061f00",ring:"#16a34a",light:"#86efac"},requiredLevel:31,companionChance:.46,companionName:"Elementale del Veleno",specialAbilities:[{name:"Nube Tossica",type:"poison",damage:.75,radius:4.5,cd:8,color:"#16a34a"},{name:"Radici Velenose",type:"root",damage:.65,radius:4,cd:10,color:"#22c55e"}]},{key:"fenice",name:"Drago Fenice",title:"La Rinascita",icon:"🔥",theme:"phoenix",bossColor:"#f97316",arena:{ground:"#2a0a00",fog:"#1a0500",ring:"#f97316",light:"#fbbf24"},requiredLevel:33,companionChance:.48,companionName:"Cenere Ardente",specialAbilities:[{name:"Ceneri Ardenti",type:"meteor",damage:.8,radius:3.5,cd:7,color:"#f97316"},{name:"Ala di Fuoco",type:"shockwave",damage:.65,radius:5,cd:10,color:"#fb923c"}]},{key:"nulla",name:"Drago del Nulla",title:"L'Oblio",icon:"⬛",theme:"void",bossColor:"#831843",arena:{ground:"#000000",fog:"#000000",ring:"#831843",light:"#be185d"},requiredLevel:35,companionChance:.5,companionName:"Ombra del Nulla",specialAbilities:[{name:"Cancellazione",type:"void",damage:.95,radius:3.5,cd:9,color:"#831843"},{name:"Onda del Nulla",type:"shadow_wave",damage:.75,radius:5.5,cd:8,color:"#9d174d"}]},{key:"antico",name:"Drago Antico",title:"Il Primordiale",icon:"🐲",theme:"ancient",bossColor:"#14b8a6",arena:{ground:"#002a2a",fog:"#001f1f",ring:"#14b8a6",light:"#5eead4"},requiredLevel:37,companionChance:.52,companionName:"Spirito Antico",specialAbilities:[{name:"Era Glaciale",type:"frost_storm",damage:.7,radius:5,cd:9,color:"#14b8a6"},{name:"Saggezza Antica",type:"lightning_storm",damage:.85,radius:3,cd:7,color:"#2dd4bf"}]},{key:"celeste",name:"Drago Celeste",title:"Il Divino",icon:"🌟",theme:"celestial",bossColor:"#fbbf24",arena:{ground:"#1a1a2a",fog:"#0f0f1f",ring:"#fbbf24",light:"#fef3c7"},requiredLevel:39,companionChance:.55,companionName:"Angelo Celeste",specialAbilities:[{name:"Giudizio Celeste",type:"storm",damage:.75,radius:6,cd:8,color:"#fbbf24"},{name:"Caduta delle Stelle",type:"meteor",damage:.9,radius:3.5,cd:9,color:"#f59e0b"}]}]);
const JR={inferno:{location:"Vulcano di Ignis",element:"Fuoco"},frost:{location:"Ghiacciai di Niflheim",element:"Ghiaccio"},natura:{location:"Foresta dei Druidi",element:"Natura"},ombra:{location:"Cripte del Vuoto",element:"Ombra"},tempesta:{location:"Picchi Tempestosi",element:"Fulmine"},sangue:{location:"Santuario del Sangue",element:"Sangue"},cristallo:{location:"Caverne di Cristallo",element:"Cristallo"},magma:{location:"Fornace Profonda",element:"Magma"},sabbie:{location:"Deserto Infinito",element:"Sabbia"},spettrale:{location:"Dominio Spettrale",element:"Spettro"},ossa:{location:"Necropoli d'Ossa",element:"Morte"},luce:{location:"Tempio della Luce",element:"Luce"},caos:{location:"Voragine del Caos",element:"Caos"},abisso:{location:"Abisso Oceanico",element:"Abisso"},tuono:{location:"Cima del Tuono",element:"Tuono"},veleno:{location:"Palude Tossica",element:"Veleno"},fenice:{location:"Nido della Fenice",element:"Fuoco"},nulla:{location:"Regno del Nulla",element:"Nulla"},antico:{location:"Rovine Antiche",element:"Natura"},celeste:{location:"Regno Celeste",element:"Luce"}};
const NM=["circle","square","pentagon","hexagon","octagon","random"];
const W6={white:"Facile",blue:"Normale",violet:"Medio",gold:"Difficile",red:"Impossibile"};
const IM=[{key:"white",name:"Bianco",icon:"⚪️",color:"#e5e5e5",statMul:1,chance:.5},{key:"blue",name:"Blu",icon:"🔵",color:"#3b82f6",statMul:1.2,chance:.25},{key:"violet",name:"Viola",icon:"🟣",color:"#a855f7",statMul:1.8,chance:.12},{key:"gold",name:"Oro",icon:"🟡",color:"#fbbf24",statMul:2.5,chance:.08},{key:"red",name:"Rosso",icon:"🔴",color:"#ef4444",statMul:3,chance:.05}];
function $6(){if(window.__bossDiff){const f=IM.find(t=>t.key===window.__bossDiff);if(f)return f}const n=Math.random();let e=0;for(const t of IM)if(e+=t.chance,n<e)return t;return IM[0]}
function ug(n,e=0,lv=1){const t=Math.max(1,n||1),i=$v[e%$v.length],r=$6(),LM=Math.max(1,lv||1)-1,o=Math.round((350+t*150)*(1+e*.15)*2*r.statMul*(1+LM*(window.__bhk||.16))),a=Math.round((16+t*1)*(1+e*.1)*r.statMul*(1+LM*(window.__bak||.3))),c=6+Math.floor(e*1.5),u=NM[Math.floor(Math.random()*NM.length)],d=JR[i.key]||{};return{...i,maxHp:o,hp:o,attack:a,defense:c,alive:!0,tier:e,difficulty:r.key,difficultyLabel:W6[r.key]||r.name,difficultyName:r.name,difficultyIcon:r.icon,difficultyColor:r.color,difficultyMul:r.statMul,color:i.bossColor,arena:i.arena,arenaShape:u,location:d.location,element:d.element,name:i.name,title:i.title,icon:i.icon,specialAbilities:i.specialAbilities||[],requiredLevel:i.requiredLevel||1,companionChance:i.companionChance||.1,companionName:i.companionName||"Companion"}}
window.DBA_ARCH=k=>Kc[k]?Kc[k].arch:"melee";
var DBA_SETS=[{k:"fenice",n:"della Fenice",ic:"🔥",b2:{attack:.10},b3:{attack:.12,maxHp:.10}},{k:"titano",n:"del Titano",ic:"🏔️",b2:{defense:.15},b3:{defense:.15,maxHp:.12}},{k:"tempesta",n:"della Tempesta",ic:"⚡",b2:{manaRegen:.25},b3:{manaRegen:.25,atkSpd:.12,attack:.06}},{k:"vita",n:"della Vita",ic:"🌿",b2:{maxHp:.12},b3:{maxHp:.13,manaRegen:.20}},{k:"gelo",n:"del Gelo",ic:"❄️",b2:{defense:.10,maxHp:.06},b3:{defense:.12,mana:.20}},{k:"sangue",n:"del Sangue",ic:"🩸",b2:{attack:.12},b3:{attack:.12,atkSpd:.10}},{k:"luce",n:"della Luce",ic:"✨",b2:{mana:.20},b3:{mana:.20,manaRegen:.30,maxHp:.08}},{k:"drago",n:"del Drago",ic:"🐉",rare:1,b2:{attack:.10,defense:.10},b3:{attack:.10,defense:.10,maxHp:.15,mana:.15}}];
window.DBA_SETS=DBA_SETS;
var DBA_ARMK={cavaliere:"plate",barbaro:"plate",guardiano:"plate",paladino:"plate",guerriero:"plate",gladiatore:"plate",berserker:"plate",cavaliere_oscuro:"plate",boia:"plate",cacciatore:"mail",arciere:"mail",spadaccino:"mail",assassino:"leather",ninjia:"leather",druido:"leather",monaco:"leather",mago:"cloth",stregone:"cloth",necromante:"cloth",crio_mago:"cloth",fulmine_mago:"cloth",chierico:"cloth",mago_sangue:"cloth"};
window.DBA_ARMK=DBA_ARMK;
var DBA_SLOTW={head:1,shoulders:1,chest:1,hands:1,legs:1,feet:1,mainhand:1.6,offhand:1.1};
window.DBA_SLOTW=DBA_SLOTW;
const n_="171";
const lj=0;
const FM=1;
const cj=2;
const t2=1;
const n2=2;
const Rs=3;
const Go=0;
const Xi=1;
const _n=2;
const zo=0;
const pc=1;
const zM=2;
const BM=3;
const VM=4;
const uj=5;
const Pa=100;
const dj=101;
const hj=102;
const fj=103;
const pj=104;
const mj=200;
const gj=201;
const vj=202;
const yj=203;
const Xv=204;
const Yv=205;
const xj=206;
const _j=207;
const wj=208;
const bj=209;
const Sj=210;
const Mj=211;
const Ej=212;
const Tj=213;
const Cj=214;
const Kv=0;
const Zv=1;
const Qv=2;
const Dc=3;
const Jv=4;
const ey=5;
const ty=6;
const ny=7;
const i2=0;
const Aj=1;
const Rj=2;
const Bo=0;
const Pj=1;
const Nj=2;
const Lj=3;
const kj=4;
const Dj=5;
const Ij=6;
const Oj=7;
const r2=300;
const Ic=301;
const Oc=302;
const iy=303;
const ry=304;
const Kp=306;
const sy=1e3;
const Ua=1001;
const oy=1002;
const Ui=1003;
const Uj=1004;
const ff=1005;
const rs=1006;
const hg=1007;
const Fa=1008;
const Hs=1009;
const s2=1010;
const o2=1011;
const Md=1012;
const i_=1013;
const tl=1014;
const Ds=1015;
const Wd=1016;
const r_=1017;
const s_=1018;
const Uc=1020;
const a2=35902;
const l2=1021;
const c2=1022;
const Wr=1023;
const u2=1024;
const d2=1025;
const mc=1026;
const Fc=1027;
const o_=1028;
const a_=1029;
const h2=1030;
const l_=1031;
const c_=1033;
const rp=33776;
const sp=33777;
const op=33778;
const ap=33779;
const ay=35840;
const ly=35841;
const cy=35842;
const uy=35843;
const dy=36196;
const hy=37492;
const fy=37496;
const py=37808;
const my=37809;
const gy=37810;
const vy=37811;
const yy=37812;
const xy=37813;
const _y=37814;
const wy=37815;
const by=37816;
const Sy=37817;
const My=37818;
const Ey=37819;
const Ty=37820;
const Cy=37821;
const lp=36492;
const Ay=36494;
const Ry=36495;
const f2=36283;
const Py=36284;
const Ny=36285;
const Ly=36286;
const Fj=3200;
const zj=3201;
const u_=0;
const Bj=1;
const Eo="";
const br="srgb";
const zc="srgb-linear";
const Cp="linear";
const fn="srgb";
const Ol=7680;
const jM=519;
const Vj=512;
const jj=513;
const Hj=514;
const p2=515;
const Gj=516;
const Wj=517;
const $j=518;
const qj=519;
const ky=35044;
const HM="300 es";
const Is=2e3;
const Ap=2001;
class al{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}}
const Si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];
const cp=Math.PI/180;
const Dy=180/Math.PI;
function Fs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Si[n&255]+Si[n>>8&255]+Si[n>>16&255]+Si[n>>24&255]+"-"+Si[e&255]+Si[e>>8&255]+"-"+Si[e>>16&15|64]+Si[e>>24&255]+"-"+Si[t&63|128]+Si[t>>8&255]+"-"+Si[t>>16&255]+Si[t>>24&255]+Si[i&255]+Si[i>>8&255]+Si[i>>16&255]+Si[i>>24&255]).toLowerCase()}
function Wt(n,e,t){return Math.max(e,Math.min(t,n))}
function Xj(n,e){return(n%e+e)%e}
function fg(n,e,t){return(1-t)*n+t*e}
function is(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}
function pn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}
class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Wt(this.x,e.x,t.x),this.y=Wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Wt(this.x,e,t),this.y=Wt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*r+e.x,this.y=o*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}
class jt{constructor(e,t,i,r,o,a,c,u,d){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,c,u,d)}set(e,t,i,r,o,a,c,u,d){const p=this.elements;return p[0]=e,p[1]=r,p[2]=c,p[3]=t,p[4]=o,p[5]=u,p[6]=i,p[7]=a,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,a=i[0],c=i[3],u=i[6],d=i[1],p=i[4],f=i[7],m=i[2],v=i[5],_=i[8],w=r[0],x=r[3],g=r[6],b=r[1],M=r[4],T=r[7],R=r[2],L=r[5],P=r[8];return o[0]=a*w+c*b+u*R,o[3]=a*x+c*M+u*L,o[6]=a*g+c*T+u*P,o[1]=d*w+p*b+f*R,o[4]=d*x+p*M+f*L,o[7]=d*g+p*T+f*P,o[2]=m*w+v*b+_*R,o[5]=m*x+v*M+_*L,o[8]=m*g+v*T+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],c=e[5],u=e[6],d=e[7],p=e[8];return t*a*p-t*c*d-i*o*p+i*c*u+r*o*d-r*a*u}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],c=e[5],u=e[6],d=e[7],p=e[8],f=p*a-c*d,m=c*u-p*o,v=d*o-a*u,_=t*f+i*m+r*v;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/_;return e[0]=f*w,e[1]=(r*d-p*i)*w,e[2]=(c*i-r*a)*w,e[3]=m*w,e[4]=(p*t-r*u)*w,e[5]=(r*o-c*t)*w,e[6]=v*w,e[7]=(i*u-d*t)*w,e[8]=(a*t-i*o)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,a,c){const u=Math.cos(o),d=Math.sin(o);return this.set(i*u,i*d,-i*(u*a+d*c)+a+e,-r*d,r*u,-r*(-d*a+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(pg.makeScale(e,t)),this}rotate(e){return this.premultiply(pg.makeRotation(-e)),this}translate(e,t){return this.premultiply(pg.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}
const pg=new jt;
function m2(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}
function Rp(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}
function Kj(){const n=Rp("canvas");return n.style.display="block",n}
const GM={};
function tc(n){n in GM||(GM[n]=!0,console.warn(n))}
function Zj(n,e,t){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}
function Qj(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}
function Jj(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}
const WM=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322);
const $M=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);
function e8(){const n={enabled:!0,workingColorSpace:zc,spaces:{},convert:function(r,o,a){return this.enabled===!1||o===a||!o||!a||(this.spaces[o].transfer===fn&&(r.r=zs(r.r),r.g=zs(r.g),r.b=zs(r.b)),this.spaces[o].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fn&&(r.r=gc(r.r),r.g=gc(r.g),r.b=gc(r.b))),r},fromWorkingColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},toWorkingColorSpace:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Eo?Cp:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,a){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[zc]:{primaries:e,whitePoint:i,transfer:Cp,toXYZ:WM,fromXYZ:$M,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:br},outputColorSpaceConfig:{drawingBufferColorSpace:br}},[br]:{primaries:e,whitePoint:i,transfer:fn,toXYZ:WM,fromXYZ:$M,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:br}}}),n}
const sn=e8();
function zs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}
function gc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}
let Ul;
class t8{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ul===void 0&&(Ul=Rp("canvas")),Ul.width=e.width,Ul.height=e.height;const i=Ul.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ul}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rp("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=zs(o[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zs(t[i]/255)*255):t[i]=zs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}
let n8=0;
class g2{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:n8++}),this.uuid=Fs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,c=r.length;a<c;a++)r[a].isDataTexture?o.push(mg(r[a].image)):o.push(mg(r[a]))}else o=mg(r);i.url=o}return t||(e.images[this.uuid]=i),i}}
function mg(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?t8.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}
let i8=0;
class Pi extends al{constructor(e=Pi.DEFAULT_IMAGE,t=Pi.DEFAULT_MAPPING,i=Ua,r=Ua,o=rs,a=Fa,c=Wr,u=Hs,d=Pi.DEFAULT_ANISOTROPY,p=Eo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i8++}),this.uuid=Fs(),this.name="",this.source=new g2(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=u,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==r2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sy:e.x=e.x-Math.floor(e.x);break;case Ua:e.x=e.x<0?0:1;break;case oy:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sy:e.y=e.y-Math.floor(e.y);break;case Ua:e.y=e.y<0?0:1;break;case oy:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}
Pi.DEFAULT_IMAGE=null;
Pi.DEFAULT_MAPPING=r2;
Pi.DEFAULT_ANISOTROPY=1;
class Dn{constructor(e=0,t=0,i=0,r=1){Dn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const u=e.elements,d=u[0],p=u[4],f=u[8],m=u[1],v=u[5],_=u[9],w=u[2],x=u[6],g=u[10];if(Math.abs(p-m)<.01&&Math.abs(f-w)<.01&&Math.abs(_-x)<.01){if(Math.abs(p+m)<.1&&Math.abs(f+w)<.1&&Math.abs(_+x)<.1&&Math.abs(d+v+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(d+1)/2,T=(v+1)/2,R=(g+1)/2,L=(p+m)/4,P=(f+w)/4,I=(_+x)/4;return M>T&&M>R?M<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(M),r=L/i,o=P/i):T>R?T<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(T),i=L/r,o=I/r):R<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(R),i=P/o,r=I/o),this.set(i,r,o,t),this}let b=Math.sqrt((x-_)*(x-_)+(f-w)*(f-w)+(m-p)*(m-p));return Math.abs(b)<.001&&(b=1),this.x=(x-_)/b,this.y=(f-w)/b,this.z=(m-p)/b,this.w=Math.acos((d+v+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Wt(this.x,e.x,t.x),this.y=Wt(this.y,e.y,t.y),this.z=Wt(this.z,e.z,t.z),this.w=Wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Wt(this.x,e,t),this.y=Wt(this.y,e,t),this.z=Wt(this.z,e,t),this.w=Wt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}
class r8 extends al{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dn(0,0,e,t),this.scissorTest=!1,this.viewport=new Dn(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rs,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Pi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let c=0;c<a;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new g2(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}
class nl extends r8{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}
class v2 extends Pi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}
class s8 extends Pi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}
class il{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,a,c){let u=i[r+0],d=i[r+1],p=i[r+2],f=i[r+3];const m=o[a+0],v=o[a+1],_=o[a+2],w=o[a+3];if(c===0){e[t+0]=u,e[t+1]=d,e[t+2]=p,e[t+3]=f;return}if(c===1){e[t+0]=m,e[t+1]=v,e[t+2]=_,e[t+3]=w;return}if(f!==w||u!==m||d!==v||p!==_){let x=1-c;const g=u*m+d*v+p*_+f*w,b=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const R=Math.sqrt(M),L=Math.atan2(R,g*b);x=Math.sin(x*L)/R,c=Math.sin(c*L)/R}const T=c*b;if(u=u*x+m*T,d=d*x+v*T,p=p*x+_*T,f=f*x+w*T,x===1-c){const R=1/Math.sqrt(u*u+d*d+p*p+f*f);u*=R,d*=R,p*=R,f*=R}}e[t]=u,e[t+1]=d,e[t+2]=p,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,o,a){const c=i[r],u=i[r+1],d=i[r+2],p=i[r+3],f=o[a],m=o[a+1],v=o[a+2],_=o[a+3];return e[t]=c*_+p*f+u*v-d*m,e[t+1]=u*_+p*m+d*f-c*v,e[t+2]=d*_+p*v+c*m-u*f,e[t+3]=p*_-c*f-u*m-d*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,o=e._z,a=e._order,c=Math.cos,u=Math.sin,d=c(i/2),p=c(r/2),f=c(o/2),m=u(i/2),v=u(r/2),_=u(o/2);switch(a){case"XYZ":this._x=m*p*f+d*v*_,this._y=d*v*f-m*p*_,this._z=d*p*_+m*v*f,this._w=d*p*f-m*v*_;break;case"YXZ":this._x=m*p*f+d*v*_,this._y=d*v*f-m*p*_,this._z=d*p*_-m*v*f,this._w=d*p*f+m*v*_;break;case"ZXY":this._x=m*p*f-d*v*_,this._y=d*v*f+m*p*_,this._z=d*p*_+m*v*f,this._w=d*p*f-m*v*_;break;case"ZYX":this._x=m*p*f-d*v*_,this._y=d*v*f+m*p*_,this._z=d*p*_-m*v*f,this._w=d*p*f+m*v*_;break;case"YZX":this._x=m*p*f+d*v*_,this._y=d*v*f+m*p*_,this._z=d*p*_-m*v*f,this._w=d*p*f-m*v*_;break;case"XZY":this._x=m*p*f-d*v*_,this._y=d*v*f-m*p*_,this._z=d*p*_+m*v*f,this._w=d*p*f+m*v*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],a=t[1],c=t[5],u=t[9],d=t[2],p=t[6],f=t[10],m=i+c+f;if(m>0){const v=.5/Math.sqrt(m+1);this._w=.25/v,this._x=(p-u)*v,this._y=(o-d)*v,this._z=(a-r)*v}else if(i>c&&i>f){const v=2*Math.sqrt(1+i-c-f);this._w=(p-u)/v,this._x=.25*v,this._y=(r+a)/v,this._z=(o+d)/v}else if(c>f){const v=2*Math.sqrt(1+c-i-f);this._w=(o-d)/v,this._x=(r+a)/v,this._y=.25*v,this._z=(u+p)/v}else{const v=2*Math.sqrt(1+f-i-c);this._w=(a-r)/v,this._x=(o+d)/v,this._y=(u+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,a=e._w,c=t._x,u=t._y,d=t._z,p=t._w;return this._x=i*p+a*c+r*d-o*u,this._y=r*p+a*u+o*c-i*d,this._z=o*p+a*d+i*u-r*c,this._w=a*p-i*c-r*u-o*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,a=this._w;let c=a*e._w+i*e._x+r*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;const u=1-c*c;if(u<=Number.EPSILON){const v=1-t;return this._w=v*a+t*this._w,this._x=v*i+t*this._x,this._y=v*r+t*this._y,this._z=v*o+t*this._z,this.normalize(),this}const d=Math.sqrt(u),p=Math.atan2(d,c),f=Math.sin((1-t)*p)/d,m=Math.sin(t*p)/d;return this._w=a*f+this._w*m,this._x=i*f+this._x*m,this._y=r*f+this._y*m,this._z=o*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}
class ne{constructor(e=0,t=0,i=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qM.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qM.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,a=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,a=e.y,c=e.z,u=e.w,d=2*(a*r-c*i),p=2*(c*t-o*r),f=2*(o*i-a*t);return this.x=t+u*d+a*f-c*p,this.y=i+u*p+c*d-o*f,this.z=r+u*f+o*p-a*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Wt(this.x,e.x,t.x),this.y=Wt(this.y,e.y,t.y),this.z=Wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Wt(this.x,e,t),this.y=Wt(this.y,e,t),this.z=Wt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,a=t.x,c=t.y,u=t.z;return this.x=r*u-o*c,this.y=o*a-i*u,this.z=i*c-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gg.copy(this).projectOnVector(e),this.sub(gg)}reflect(e){return this.sub(gg.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}
const gg=new ne;
const qM=new il;
class $d{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Fr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,c=o.count;a<c;a++)e.isMesh===!0?e.getVertexPosition(a,Fr):Fr.fromBufferAttribute(o,a),Fr.applyMatrix4(e.matrixWorld),this.expandByPoint(Fr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pf.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pf.copy(i.boundingBox)),pf.applyMatrix4(e.matrixWorld),this.union(pf)}const r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fr),Fr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Du),mf.subVectors(this.max,Du),Fl.subVectors(e.a,Du),zl.subVectors(e.b,Du),Bl.subVectors(e.c,Du),fo.subVectors(zl,Fl),po.subVectors(Bl,zl),xa.subVectors(Fl,Bl);let t=[0,-fo.z,fo.y,0,-po.z,po.y,0,-xa.z,xa.y,fo.z,0,-fo.x,po.z,0,-po.x,xa.z,0,-xa.x,-fo.y,fo.x,0,-po.y,po.x,0,-xa.y,xa.x,0];return!vg(t,Fl,zl,Bl,mf)||(t=[1,0,0,0,1,0,0,0,1],!vg(t,Fl,zl,Bl,mf))?!1:(gf.crossVectors(fo,po),t=[gf.x,gf.y,gf.z],vg(t,Fl,zl,Bl,mf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ss),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}
const Ss=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne];
const Fr=new ne;
const pf=new $d;
const Fl=new ne;
const zl=new ne;
const Bl=new ne;
const fo=new ne;
const po=new ne;
const xa=new ne;
const Du=new ne;
const mf=new ne;
const gf=new ne;
const _a=new ne;
function vg(n,e,t,i,r){for(let o=0,a=n.length-3;o<=a;o+=3){_a.fromArray(n,o);const c=r.x*Math.abs(_a.x)+r.y*Math.abs(_a.y)+r.z*Math.abs(_a.z),u=e.dot(_a),d=t.dot(_a),p=i.dot(_a);if(Math.max(-Math.max(u,d,p),Math.min(u,d,p))>c)return!1}return!0}
const o8=new $d;
const Iu=new ne;
const yg=new ne;
class Zp{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):o8.setFromPoints(e).getCenter(i);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Iu.subVectors(e,this.center);const t=Iu.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Iu,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yg.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Iu.copy(e.center).add(yg)),this.expandByPoint(Iu.copy(e.center).sub(yg))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}
const Ms=new ne;
const xg=new ne;
const vf=new ne;
const mo=new ne;
const _g=new ne;
const yf=new ne;
const wg=new ne;
class d_{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ms)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ms.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ms.copy(this.origin).addScaledVector(this.direction,t),Ms.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){xg.copy(e).add(t).multiplyScalar(.5),vf.copy(t).sub(e).normalize(),mo.copy(this.origin).sub(xg);const o=e.distanceTo(t)*.5,a=-this.direction.dot(vf),c=mo.dot(this.direction),u=-mo.dot(vf),d=mo.lengthSq(),p=Math.abs(1-a*a);let f,m,v,_;if(p>0)if(f=a*u-c,m=a*c-u,_=o*p,f>=0)if(m>=-_)if(m<=_){const w=1/p;f*=w,m*=w,v=f*(f+a*m+2*c)+m*(a*f+m+2*u)+d}else m=o,f=Math.max(0,-(a*m+c)),v=-f*f+m*(m+2*u)+d;else m=-o,f=Math.max(0,-(a*m+c)),v=-f*f+m*(m+2*u)+d;else m<=-_?(f=Math.max(0,-(-a*o+c)),m=f>0?-o:Math.min(Math.max(-o,-u),o),v=-f*f+m*(m+2*u)+d):m<=_?(f=0,m=Math.min(Math.max(-o,-u),o),v=m*(m+2*u)+d):(f=Math.max(0,-(a*o+c)),m=f>0?o:Math.min(Math.max(-o,-u),o),v=-f*f+m*(m+2*u)+d);else m=a>0?-o:o,f=Math.max(0,-(a*m+c)),v=-f*f+m*(m+2*u)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xg).addScaledVector(vf,m),v}intersectSphere(e,t){Ms.subVectors(e.center,this.origin);const i=Ms.dot(this.direction),r=Ms.dot(Ms)-i*i,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),c=i-a,u=i+a;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,a,c,u;const d=1/this.direction.x,p=1/this.direction.y,f=1/this.direction.z,m=this.origin;return d>=0?(i=(e.min.x-m.x)*d,r=(e.max.x-m.x)*d):(i=(e.max.x-m.x)*d,r=(e.min.x-m.x)*d),p>=0?(o=(e.min.y-m.y)*p,a=(e.max.y-m.y)*p):(o=(e.max.y-m.y)*p,a=(e.min.y-m.y)*p),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),f>=0?(c=(e.min.z-m.z)*f,u=(e.max.z-m.z)*f):(c=(e.max.z-m.z)*f,u=(e.min.z-m.z)*f),i>u||c>r)||((c>i||i!==i)&&(i=c),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ms)!==null}intersectTriangle(e,t,i,r,o){_g.subVectors(t,e),yf.subVectors(i,e),wg.crossVectors(_g,yf);let a=this.direction.dot(wg),c;if(a>0){if(r)return null;c=1}else if(a<0)c=-1,a=-a;else return null;mo.subVectors(this.origin,e);const u=c*this.direction.dot(yf.crossVectors(mo,yf));if(u<0)return null;const d=c*this.direction.dot(_g.cross(mo));if(d<0||u+d>a)return null;const p=-c*mo.dot(wg);return p<0?null:this.at(p/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}
class Mn{constructor(e,t,i,r,o,a,c,u,d,p,f,m,v,_,w,x){Mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,c,u,d,p,f,m,v,_,w,x)}set(e,t,i,r,o,a,c,u,d,p,f,m,v,_,w,x){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=o,g[5]=a,g[9]=c,g[13]=u,g[2]=d,g[6]=p,g[10]=f,g[14]=m,g[3]=v,g[7]=_,g[11]=w,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Vl.setFromMatrixColumn(e,0).length(),o=1/Vl.setFromMatrixColumn(e,1).length(),a=1/Vl.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,a=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const m=a*p,v=a*f,_=c*p,w=c*f;t[0]=u*p,t[4]=-u*f,t[8]=d,t[1]=v+_*d,t[5]=m-w*d,t[9]=-c*u,t[2]=w-m*d,t[6]=_+v*d,t[10]=a*u}else if(e.order==="YXZ"){const m=u*p,v=u*f,_=d*p,w=d*f;t[0]=m+w*c,t[4]=_*c-v,t[8]=a*d,t[1]=a*f,t[5]=a*p,t[9]=-c,t[2]=v*c-_,t[6]=w+m*c,t[10]=a*u}else if(e.order==="ZXY"){const m=u*p,v=u*f,_=d*p,w=d*f;t[0]=m-w*c,t[4]=-a*f,t[8]=_+v*c,t[1]=v+_*c,t[5]=a*p,t[9]=w-m*c,t[2]=-a*d,t[6]=c,t[10]=a*u}else if(e.order==="ZYX"){const m=a*p,v=a*f,_=c*p,w=c*f;t[0]=u*p,t[4]=_*d-v,t[8]=m*d+w,t[1]=u*f,t[5]=w*d+m,t[9]=v*d-_,t[2]=-d,t[6]=c*u,t[10]=a*u}else if(e.order==="YZX"){const m=a*u,v=a*d,_=c*u,w=c*d;t[0]=u*p,t[4]=w-m*f,t[8]=_*f+v,t[1]=f,t[5]=a*p,t[9]=-c*p,t[2]=-d*p,t[6]=v*f+_,t[10]=m-w*f}else if(e.order==="XZY"){const m=a*u,v=a*d,_=c*u,w=c*d;t[0]=u*p,t[4]=-f,t[8]=d*p,t[1]=m*f+w,t[5]=a*p,t[9]=v*f-_,t[2]=_*f-v,t[6]=c*p,t[10]=w*f+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a8,e,l8)}lookAt(e,t,i){const r=this.elements;return tr.subVectors(e,t),tr.lengthSq()===0&&(tr.z=1),tr.normalize(),go.crossVectors(i,tr),go.lengthSq()===0&&(Math.abs(i.z)===1?tr.x+=1e-4:tr.z+=1e-4,tr.normalize(),go.crossVectors(i,tr)),go.normalize(),xf.crossVectors(tr,go),r[0]=go.x,r[4]=xf.x,r[8]=tr.x,r[1]=go.y,r[5]=xf.y,r[9]=tr.y,r[2]=go.z,r[6]=xf.z,r[10]=tr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,a=i[0],c=i[4],u=i[8],d=i[12],p=i[1],f=i[5],m=i[9],v=i[13],_=i[2],w=i[6],x=i[10],g=i[14],b=i[3],M=i[7],T=i[11],R=i[15],L=r[0],P=r[4],I=r[8],N=r[12],k=r[1],z=r[5],J=r[9],Z=r[13],K=r[2],me=r[6],ue=r[10],oe=r[14],V=r[3],te=r[7],X=r[11],j=r[15];return o[0]=a*L+c*k+u*K+d*V,o[4]=a*P+c*z+u*me+d*te,o[8]=a*I+c*J+u*ue+d*X,o[12]=a*N+c*Z+u*oe+d*j,o[1]=p*L+f*k+m*K+v*V,o[5]=p*P+f*z+m*me+v*te,o[9]=p*I+f*J+m*ue+v*X,o[13]=p*N+f*Z+m*oe+v*j,o[2]=_*L+w*k+x*K+g*V,o[6]=_*P+w*z+x*me+g*te,o[10]=_*I+w*J+x*ue+g*X,o[14]=_*N+w*Z+x*oe+g*j,o[3]=b*L+M*k+T*K+R*V,o[7]=b*P+M*z+T*me+R*te,o[11]=b*I+M*J+T*ue+R*X,o[15]=b*N+M*Z+T*oe+R*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],a=e[1],c=e[5],u=e[9],d=e[13],p=e[2],f=e[6],m=e[10],v=e[14],_=e[3],w=e[7],x=e[11],g=e[15];return _*(+o*u*f-r*d*f-o*c*m+i*d*m+r*c*v-i*u*v)+w*(+t*u*v-t*d*m+o*a*m-r*a*v+r*d*p-o*u*p)+x*(+t*d*f-t*c*v-o*a*f+i*a*v+o*c*p-i*d*p)+g*(-r*c*p-t*u*f+t*c*m+r*a*f-i*a*m+i*u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],c=e[5],u=e[6],d=e[7],p=e[8],f=e[9],m=e[10],v=e[11],_=e[12],w=e[13],x=e[14],g=e[15],b=f*x*d-w*m*d+w*u*v-c*x*v-f*u*g+c*m*g,M=_*m*d-p*x*d-_*u*v+a*x*v+p*u*g-a*m*g,T=p*w*d-_*f*d+_*c*v-a*w*v-p*c*g+a*f*g,R=_*f*u-p*w*u-_*c*m+a*w*m+p*c*x-a*f*x,L=t*b+i*M+r*T+o*R;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=b*P,e[1]=(w*m*o-f*x*o-w*r*v+i*x*v+f*r*g-i*m*g)*P,e[2]=(c*x*o-w*u*o+w*r*d-i*x*d-c*r*g+i*u*g)*P,e[3]=(f*u*o-c*m*o-f*r*d+i*m*d+c*r*v-i*u*v)*P,e[4]=M*P,e[5]=(p*x*o-_*m*o+_*r*v-t*x*v-p*r*g+t*m*g)*P,e[6]=(_*u*o-a*x*o-_*r*d+t*x*d+a*r*g-t*u*g)*P,e[7]=(a*m*o-p*u*o+p*r*d-t*m*d-a*r*v+t*u*v)*P,e[8]=T*P,e[9]=(_*f*o-p*w*o-_*i*v+t*w*v+p*i*g-t*f*g)*P,e[10]=(a*w*o-_*c*o+_*i*d-t*w*d-a*i*g+t*c*g)*P,e[11]=(p*c*o-a*f*o-p*i*d+t*f*d+a*i*v-t*c*v)*P,e[12]=R*P,e[13]=(p*w*r-_*f*r+_*i*m-t*w*m-p*i*x+t*f*x)*P,e[14]=(_*c*r-a*w*r-_*i*u+t*w*u+a*i*x-t*c*x)*P,e[15]=(a*f*r-p*c*r+p*i*u-t*f*u-a*i*m+t*c*m)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,a=e.x,c=e.y,u=e.z,d=o*a,p=o*c;return this.set(d*a+i,d*c-r*u,d*u+r*c,0,d*c+r*u,p*c+i,p*u-r*a,0,d*u-r*c,p*u+r*a,o*u*u+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,a){return this.set(1,i,o,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,a=t._y,c=t._z,u=t._w,d=o+o,p=a+a,f=c+c,m=o*d,v=o*p,_=o*f,w=a*p,x=a*f,g=c*f,b=u*d,M=u*p,T=u*f,R=i.x,L=i.y,P=i.z;return r[0]=(1-(w+g))*R,r[1]=(v+T)*R,r[2]=(_-M)*R,r[3]=0,r[4]=(v-T)*L,r[5]=(1-(m+g))*L,r[6]=(x+b)*L,r[7]=0,r[8]=(_+M)*P,r[9]=(x-b)*P,r[10]=(1-(m+w))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=Vl.set(r[0],r[1],r[2]).length();const a=Vl.set(r[4],r[5],r[6]).length(),c=Vl.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],zr.copy(this);const d=1/o,p=1/a,f=1/c;return zr.elements[0]*=d,zr.elements[1]*=d,zr.elements[2]*=d,zr.elements[4]*=p,zr.elements[5]*=p,zr.elements[6]*=p,zr.elements[8]*=f,zr.elements[9]*=f,zr.elements[10]*=f,t.setFromRotationMatrix(zr),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,r,o,a,c=Is){const u=this.elements,d=2*o/(t-e),p=2*o/(i-r),f=(t+e)/(t-e),m=(i+r)/(i-r);let v,_;if(c===Is)v=-(a+o)/(a-o),_=-2*a*o/(a-o);else if(c===Ap)v=-a/(a-o),_=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=d,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,o,a,c=Is){const u=this.elements,d=1/(t-e),p=1/(i-r),f=1/(a-o),m=(t+e)*d,v=(i+r)*p;let _,w;if(c===Is)_=(a+o)*f,w=-2*f;else if(c===Ap)_=o*f,w=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*d,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*p,u[9]=0,u[13]=-v,u[2]=0,u[6]=0,u[10]=w,u[14]=-_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}
const Vl=new ne;
const zr=new Mn;
const a8=new ne(0,0,0);
const l8=new ne(1,1,1);
const go=new ne;
const xf=new ne;
const tr=new ne;
const XM=new Mn;
const YM=new il;
class cs{constructor(e=0,t=0,i=0,r=cs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],a=r[4],c=r[8],u=r[1],d=r[5],p=r[9],f=r[2],m=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(u,d)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,d),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return XM.makeRotationFromQuaternion(e),this.setFromRotationMatrix(XM,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return YM.setFromEuler(this),this.setFromQuaternion(YM,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}
cs.DEFAULT_ORDER="XYZ";
class y2{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}
let c8=0;
const KM=new ne;
const jl=new il;
const Es=new Mn;
const _f=new ne;
const Ou=new ne;
const u8=new ne;
const d8=new il;
const ZM=new ne(1,0,0);
const QM=new ne(0,1,0);
const JM=new ne(0,0,1);
const eE={type:"added"};
const h8={type:"removed"};
const Hl={type:"childadded",child:null};
const bg={type:"childremoved",child:null};
class ci extends al{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c8++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ci.DEFAULT_UP.clone();const e=new ne,t=new cs,i=new il,r=new ne(1,1,1);function o(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mn},normalMatrix:{value:new jt}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new y2,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jl.setFromAxisAngle(e,t),this.quaternion.multiply(jl),this}rotateOnWorldAxis(e,t){return jl.setFromAxisAngle(e,t),this.quaternion.premultiply(jl),this}rotateX(e){return this.rotateOnAxis(ZM,e)}rotateY(e){return this.rotateOnAxis(QM,e)}rotateZ(e){return this.rotateOnAxis(JM,e)}translateOnAxis(e,t){return KM.copy(e).applyQuaternion(this.quaternion),this.position.add(KM.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ZM,e)}translateY(e){return this.translateOnAxis(QM,e)}translateZ(e){return this.translateOnAxis(JM,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Es.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_f.copy(e):_f.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ou.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Es.lookAt(Ou,_f,this.up):Es.lookAt(_f,Ou,this.up),this.quaternion.setFromRotationMatrix(Es),r&&(Es.extractRotation(r.matrixWorld),jl.setFromRotationMatrix(Es),this.quaternion.premultiply(jl.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eE),Hl.child=e,this.dispatchEvent(Hl),Hl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h8),bg.child=e,this.dispatchEvent(bg),bg.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Es.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Es.multiply(e.parent.matrixWorld)),e.applyMatrix4(Es),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eE),Hl.child=e,this.dispatchEvent(Hl),Hl.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ou,e,u8),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ou,d8,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let d=0,p=u.length;d<p;d++){const f=u[d];o(e.shapes,f)}else o(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,d=this.material.length;u<d;u++)c.push(o(e.materials,this.material[u]));r.material=c}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];r.animations.push(o(e.animations,u))}}if(t){const c=a(e.geometries),u=a(e.materials),d=a(e.textures),p=a(e.images),f=a(e.shapes),m=a(e.skeletons),v=a(e.animations),_=a(e.nodes);c.length>0&&(i.geometries=c),u.length>0&&(i.materials=u),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),f.length>0&&(i.shapes=f),m.length>0&&(i.skeletons=m),v.length>0&&(i.animations=v),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(c){const u=[];for(const d in c){const p=c[d];delete p.metadata,u.push(p)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}
ci.DEFAULT_UP=new ne(0,1,0);
ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;
ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;
const Br=new ne;
const Ts=new ne;
const Sg=new ne;
const Cs=new ne;
const Gl=new ne;
const Wl=new ne;
const tE=new ne;
const Mg=new ne;
const Eg=new ne;
const Tg=new ne;
const Cg=new Dn;
const Ag=new Dn;
const Rg=new Dn;
class Er{constructor(e=new ne,t=new ne,i=new ne){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Br.subVectors(e,t),r.cross(Br);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){Br.subVectors(r,t),Ts.subVectors(i,t),Sg.subVectors(e,t);const a=Br.dot(Br),c=Br.dot(Ts),u=Br.dot(Sg),d=Ts.dot(Ts),p=Ts.dot(Sg),f=a*d-c*c;if(f===0)return o.set(0,0,0),null;const m=1/f,v=(d*u-c*p)*m,_=(a*p-c*u)*m;return o.set(1-v-_,_,v)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Cs)===null?!1:Cs.x>=0&&Cs.y>=0&&Cs.x+Cs.y<=1}static getInterpolation(e,t,i,r,o,a,c,u){return this.getBarycoord(e,t,i,r,Cs)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,Cs.x),u.addScaledVector(a,Cs.y),u.addScaledVector(c,Cs.z),u)}static getInterpolatedAttribute(e,t,i,r,o,a){return Cg.setScalar(0),Ag.setScalar(0),Rg.setScalar(0),Cg.fromBufferAttribute(e,t),Ag.fromBufferAttribute(e,i),Rg.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Cg,o.x),a.addScaledVector(Ag,o.y),a.addScaledVector(Rg,o.z),a}static isFrontFacing(e,t,i,r){return Br.subVectors(i,t),Ts.subVectors(e,t),Br.cross(Ts).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Br.subVectors(this.c,this.b),Ts.subVectors(this.a,this.b),Br.cross(Ts).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Er.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Er.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return Er.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return Er.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Er.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let a,c;Gl.subVectors(r,i),Wl.subVectors(o,i),Mg.subVectors(e,i);const u=Gl.dot(Mg),d=Wl.dot(Mg);if(u<=0&&d<=0)return t.copy(i);Eg.subVectors(e,r);const p=Gl.dot(Eg),f=Wl.dot(Eg);if(p>=0&&f<=p)return t.copy(r);const m=u*f-p*d;if(m<=0&&u>=0&&p<=0)return a=u/(u-p),t.copy(i).addScaledVector(Gl,a);Tg.subVectors(e,o);const v=Gl.dot(Tg),_=Wl.dot(Tg);if(_>=0&&v<=_)return t.copy(o);const w=v*d-u*_;if(w<=0&&d>=0&&_<=0)return c=d/(d-_),t.copy(i).addScaledVector(Wl,c);const x=p*_-v*f;if(x<=0&&f-p>=0&&v-_>=0)return tE.subVectors(o,r),c=(f-p)/(f-p+(v-_)),t.copy(r).addScaledVector(tE,c);const g=1/(x+w+m);return a=w*g,c=m*g,t.copy(i).addScaledVector(Gl,a).addScaledVector(Wl,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}
const x2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};
const vo={h:0,s:0,l:0};
const wf={h:0,s:0,l:0};
function Pg(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}
class Rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=br){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,sn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=sn.workingColorSpace){return this.r=e,this.g=t,this.b=i,sn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=sn.workingColorSpace){if(e=Xj(e,1),t=Wt(t,0,1),i=Wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,a=2*i-o;this.r=Pg(a,o,e+1/3),this.g=Pg(a,o,e),this.b=Pg(a,o,e-1/3)}return sn.toWorkingColorSpace(this,r),this}setStyle(e,t=br){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],c=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=br){const i=x2[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=gc(e.r),this.g=gc(e.g),this.b=gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=br){return sn.fromWorkingColorSpace(Mi.copy(this),e),Math.round(Wt(Mi.r*255,0,255))*65536+Math.round(Wt(Mi.g*255,0,255))*256+Math.round(Wt(Mi.b*255,0,255))}getHexString(e=br){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=sn.workingColorSpace){sn.fromWorkingColorSpace(Mi.copy(this),t);const i=Mi.r,r=Mi.g,o=Mi.b,a=Math.max(i,r,o),c=Math.min(i,r,o);let u,d;const p=(c+a)/2;if(c===a)u=0,d=0;else{const f=a-c;switch(d=p<=.5?f/(a+c):f/(2-a-c),a){case i:u=(r-o)/f+(r<o?6:0);break;case r:u=(o-i)/f+2;break;case o:u=(i-r)/f+4;break}u/=6}return e.h=u,e.s=d,e.l=p,e}getRGB(e,t=sn.workingColorSpace){return sn.fromWorkingColorSpace(Mi.copy(this),t),e.r=Mi.r,e.g=Mi.g,e.b=Mi.b,e}getStyle(e=br){sn.fromWorkingColorSpace(Mi.copy(this),e);const t=Mi.r,i=Mi.g,r=Mi.b;return e!==br?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(vo),this.setHSL(vo.h+e,vo.s+t,vo.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vo),e.getHSL(wf);const i=fg(vo.h,wf.h,t),r=fg(vo.s,wf.s,t),o=fg(vo.l,wf.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}
const Mi=new Rt;
Rt.NAMES=x2;
let f8=0;
class Ko extends al{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f8++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=pc,this.side=Go,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xv,this.blendDst=Yv,this.blendEquation=Pa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Dc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ol,this.stencilZFail=Ol,this.stencilZPass=Ol,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==pc&&(i.blending=this.blending),this.side!==Go&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xv&&(i.blendSrc=this.blendSrc),this.blendDst!==Yv&&(i.blendDst=this.blendDst),this.blendEquation!==Pa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jM&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ol&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ol&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ol&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const a=[];for(const c in o){const u=o[c];delete u.metadata,a.push(u)}return a}if(t){const o=r(e.textures),a=r(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}
class ln extends Ko{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=i2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}
const Wn=new ne;
const bf=new Ye;
class $r{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ky,this.updateRanges=[],this.gpuType=Ds,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bf.fromBufferAttribute(this,t),bf.applyMatrix3(e),this.setXY(t,bf.x,bf.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix3(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=is(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=is(t,this.array)),t}setX(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=is(t,this.array)),t}setY(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=is(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=is(t,this.array)),t}setW(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array),r=pn(r,this.array),o=pn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ky&&(e.usage=this.usage),e}}
class _2 extends $r{constructor(e,t,i){super(new Uint16Array(e),t,i)}}
class w2 extends $r{constructor(e,t,i){super(new Uint32Array(e),t,i)}}
class on extends $r{constructor(e,t,i){super(new Float32Array(e),t,i)}}
let p8=0;
const yr=new Mn;
const Ng=new ci;
const $l=new ne;
const nr=new $d;
const Uu=new $d;
const ai=new ne;
class Jn extends al{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p8++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(m2(e)?w2:_2)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new jt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yr.makeRotationFromQuaternion(e),this.applyMatrix4(yr),this}rotateX(e){return yr.makeRotationX(e),this.applyMatrix4(yr),this}rotateY(e){return yr.makeRotationY(e),this.applyMatrix4(yr),this}rotateZ(e){return yr.makeRotationZ(e),this.applyMatrix4(yr),this}translate(e,t,i){return yr.makeTranslation(e,t,i),this.applyMatrix4(yr),this}scale(e,t,i){return yr.makeScale(e,t,i),this.applyMatrix4(yr),this}lookAt(e){return Ng.lookAt(e),Ng.updateMatrix(),this.applyMatrix4(Ng.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($l).negate(),this.translate($l.x,$l.y,$l.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new on(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $d);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];nr.setFromBufferAttribute(o),this.morphTargetsRelative?(ai.addVectors(this.boundingBox.min,nr.min),this.boundingBox.expandByPoint(ai),ai.addVectors(this.boundingBox.max,nr.max),this.boundingBox.expandByPoint(ai)):(this.boundingBox.expandByPoint(nr.min),this.boundingBox.expandByPoint(nr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const i=this.boundingSphere.center;if(nr.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const c=t[o];Uu.setFromBufferAttribute(c),this.morphTargetsRelative?(ai.addVectors(nr.min,Uu.min),nr.expandByPoint(ai),ai.addVectors(nr.max,Uu.max),nr.expandByPoint(ai)):(nr.expandByPoint(Uu.min),nr.expandByPoint(Uu.max))}nr.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)ai.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(ai));if(t)for(let o=0,a=t.length;o<a;o++){const c=t[o],u=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)ai.fromBufferAttribute(c,d),u&&($l.fromBufferAttribute(e,d),ai.add($l)),r=Math.max(r,i.distanceToSquared(ai))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $r(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),c=[],u=[];for(let I=0;I<i.count;I++)c[I]=new ne,u[I]=new ne;const d=new ne,p=new ne,f=new ne,m=new Ye,v=new Ye,_=new Ye,w=new ne,x=new ne;function g(I,N,k){d.fromBufferAttribute(i,I),p.fromBufferAttribute(i,N),f.fromBufferAttribute(i,k),m.fromBufferAttribute(o,I),v.fromBufferAttribute(o,N),_.fromBufferAttribute(o,k),p.sub(d),f.sub(d),v.sub(m),_.sub(m);const z=1/(v.x*_.y-_.x*v.y);isFinite(z)&&(w.copy(p).multiplyScalar(_.y).addScaledVector(f,-v.y).multiplyScalar(z),x.copy(f).multiplyScalar(v.x).addScaledVector(p,-_.x).multiplyScalar(z),c[I].add(w),c[N].add(w),c[k].add(w),u[I].add(x),u[N].add(x),u[k].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,N=b.length;I<N;++I){const k=b[I],z=k.start,J=k.count;for(let Z=z,K=z+J;Z<K;Z+=3)g(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const M=new ne,T=new ne,R=new ne,L=new ne;function P(I){R.fromBufferAttribute(r,I),L.copy(R);const N=c[I];M.copy(N),M.sub(R.multiplyScalar(R.dot(N))).normalize(),T.crossVectors(L,N);const z=T.dot(u[I])<0?-1:1;a.setXYZW(I,M.x,M.y,M.z,z)}for(let I=0,N=b.length;I<N;++I){const k=b[I],z=k.start,J=k.count;for(let Z=z,K=z+J;Z<K;Z+=3)P(e.getX(Z+0)),P(e.getX(Z+1)),P(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $r(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,v=i.count;m<v;m++)i.setXYZ(m,0,0,0);const r=new ne,o=new ne,a=new ne,c=new ne,u=new ne,d=new ne,p=new ne,f=new ne;if(e)for(let m=0,v=e.count;m<v;m+=3){const _=e.getX(m+0),w=e.getX(m+1),x=e.getX(m+2);r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,w),a.fromBufferAttribute(t,x),p.subVectors(a,o),f.subVectors(r,o),p.cross(f),c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,x),c.add(p),u.add(p),d.add(p),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(w,u.x,u.y,u.z),i.setXYZ(x,d.x,d.y,d.z)}else for(let m=0,v=t.count;m<v;m+=3)r.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),p.subVectors(a,o),f.subVectors(r,o),p.cross(f),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ai.fromBufferAttribute(e,t),ai.normalize(),e.setXYZ(t,ai.x,ai.y,ai.z)}toNonIndexed(){function e(c,u){const d=c.array,p=c.itemSize,f=c.normalized,m=new d.constructor(u.length*p);let v=0,_=0;for(let w=0,x=u.length;w<x;w++){c.isInterleavedBufferAttribute?v=u[w]*c.data.stride+c.offset:v=u[w]*p;for(let g=0;g<p;g++)m[_++]=d[v++]}return new $r(m,p,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jn,i=this.index.array,r=this.attributes;for(const c in r){const u=r[c],d=e(u,i);t.setAttribute(c,d)}const o=this.morphAttributes;for(const c in o){const u=[],d=o[c];for(let p=0,f=d.length;p<f;p++){const m=d[p],v=e(m,i);u.push(v)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const d in u)u[d]!==void 0&&(e[d]=u[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const u in i){const d=i[u];e.data.attributes[u]=d.toJSON(e.data)}const r={};let o=!1;for(const u in this.morphAttributes){const d=this.morphAttributes[u],p=[];for(let f=0,m=d.length;f<m;f++){const v=d[f];p.push(v.toJSON(e.data))}p.length>0&&(r[u]=p,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const d in r){const p=r[d];this.setAttribute(d,p.clone(t))}const o=e.morphAttributes;for(const d in o){const p=[],f=o[d];for(let m=0,v=f.length;m<v;m++)p.push(f[m].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let d=0,p=a.length;d<p;d++){const f=a[d];this.addGroup(f.start,f.count,f.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}
const nE=new Mn;
const wa=new d_;
const Sf=new Zp;
const iE=new ne;
const Mf=new ne;
const Ef=new ne;
const Tf=new ne;
const Lg=new ne;
const Cf=new ne;
const rE=new ne;
const Af=new ne;
class fe extends ci{constructor(e=new Jn,t=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(o&&c){Cf.set(0,0,0);for(let u=0,d=o.length;u<d;u++){const p=c[u],f=o[u];p!==0&&(Lg.fromBufferAttribute(f,e),a?Cf.addScaledVector(Lg,p):Cf.addScaledVector(Lg.sub(t),p))}t.add(Cf)}return t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sf.copy(i.boundingSphere),Sf.applyMatrix4(o),wa.copy(e.ray).recast(e.near),!(Sf.containsPoint(wa.origin)===!1&&(wa.intersectSphere(Sf,iE)===null||wa.origin.distanceToSquared(iE)>(e.far-e.near)**2))&&(nE.copy(o).invert(),wa.copy(e.ray).applyMatrix4(nE),!(i.boundingBox!==null&&wa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wa)))}_computeIntersections(e,t,i){let r;const o=this.geometry,a=this.material,c=o.index,u=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,f=o.attributes.normal,m=o.groups,v=o.drawRange;if(c!==null)if(Array.isArray(a))for(let _=0,w=m.length;_<w;_++){const x=m[_],g=a[x.materialIndex],b=Math.max(x.start,v.start),M=Math.min(c.count,Math.min(x.start+x.count,v.start+v.count));for(let T=b,R=M;T<R;T+=3){const L=c.getX(T),P=c.getX(T+1),I=c.getX(T+2);r=Rf(this,g,e,i,d,p,f,L,P,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const _=Math.max(0,v.start),w=Math.min(c.count,v.start+v.count);for(let x=_,g=w;x<g;x+=3){const b=c.getX(x),M=c.getX(x+1),T=c.getX(x+2);r=Rf(this,a,e,i,d,p,f,b,M,T),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(a))for(let _=0,w=m.length;_<w;_++){const x=m[_],g=a[x.materialIndex],b=Math.max(x.start,v.start),M=Math.min(u.count,Math.min(x.start+x.count,v.start+v.count));for(let T=b,R=M;T<R;T+=3){const L=T,P=T+1,I=T+2;r=Rf(this,g,e,i,d,p,f,L,P,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const _=Math.max(0,v.start),w=Math.min(u.count,v.start+v.count);for(let x=_,g=w;x<g;x+=3){const b=x,M=x+1,T=x+2;r=Rf(this,a,e,i,d,p,f,b,M,T),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}
function m8(n,e,t,i,r,o,a,c){let u;if(e.side===Xi?u=i.intersectTriangle(a,o,r,!0,c):u=i.intersectTriangle(r,o,a,e.side===Go,c),u===null)return null;Af.copy(c),Af.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(Af);return d<t.near||d>t.far?null:{distance:d,point:Af.clone(),object:n}}
function Rf(n,e,t,i,r,o,a,c,u,d){n.getVertexPosition(c,Mf),n.getVertexPosition(u,Ef),n.getVertexPosition(d,Tf);const p=m8(n,e,t,i,Mf,Ef,Tf,rE);if(p){const f=new ne;Er.getBarycoord(rE,Mf,Ef,Tf,f),r&&(p.uv=Er.getInterpolatedAttribute(r,c,u,d,f,new Ye)),o&&(p.uv1=Er.getInterpolatedAttribute(o,c,u,d,f,new Ye)),a&&(p.normal=Er.getInterpolatedAttribute(a,c,u,d,f,new ne),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const m={a:c,b:u,c:d,normal:new ne,materialIndex:0};Er.getNormal(Mf,Ef,Tf,m.normal),p.face=m,p.barycoord=f}return p}
class rn extends Jn{constructor(e=1,t=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};const c=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const u=[],d=[],p=[],f=[];let m=0,v=0;_("z","y","x",-1,-1,i,t,e,a,o,0),_("z","y","x",1,-1,i,t,-e,a,o,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,o,4),_("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(u),this.setAttribute("position",new on(d,3)),this.setAttribute("normal",new on(p,3)),this.setAttribute("uv",new on(f,2));function _(w,x,g,b,M,T,R,L,P,I,N){const k=T/P,z=R/I,J=T/2,Z=R/2,K=L/2,me=P+1,ue=I+1;let oe=0,V=0;const te=new ne;for(let X=0;X<ue;X++){const j=X*z-Z;for(let de=0;de<me;de++){const Ue=de*k-J;te[w]=Ue*b,te[x]=j*M,te[g]=K,d.push(te.x,te.y,te.z),te[w]=0,te[x]=0,te[g]=L>0?1:-1,p.push(te.x,te.y,te.z),f.push(de/P),f.push(1-X/I),oe+=1}}for(let X=0;X<I;X++)for(let j=0;j<P;j++){const de=m+j+me*X,Ue=m+j+me*(X+1),pe=m+(j+1)+me*(X+1),_e=m+(j+1)+me*X;u.push(de,Ue,_e),u.push(Ue,pe,_e),V+=6}c.addGroup(v,V,N),v+=V,m+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}
function Bc(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}
function Ii(n){const e={};for(let t=0;t<n.length;t++){const i=Bc(n[t]);for(const r in i)e[r]=i[r]}return e}
function g8(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}
function b2(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:sn.workingColorSpace}
const v8={clone:Bc,merge:Ii};
var y8=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;
var x8=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Wo extends Ko{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y8,this.fragmentShader=x8,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bc(e.uniforms),this.uniformsGroups=g8(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}
class S2 extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=Is}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}
const yo=new ne;
const sE=new Ye;
const oE=new Ye;
class ir extends S2{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Dy*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dy*2*Math.atan(Math.tan(cp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){yo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yo.x,yo.y).multiplyScalar(-e/yo.z),yo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yo.x,yo.y).multiplyScalar(-e/yo.z)}getViewSize(e,t){return this.getViewBounds(e,sE,oE),t.subVectors(oE,sE)}setViewOffset(e,t,i,r,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cp*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,d=a.fullHeight;o+=a.offsetX*r/u,t-=a.offsetY*i/d,r*=a.width/u,i*=a.height/d}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}
const ql=-90;
const Xl=1;
class _8 extends ci{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ir(ql,Xl,e,t);r.layers=this.layers,this.add(r);const o=new ir(ql,Xl,e,t);o.layers=this.layers,this.add(o);const a=new ir(ql,Xl,e,t);a.layers=this.layers,this.add(a);const c=new ir(ql,Xl,e,t);c.layers=this.layers,this.add(c);const u=new ir(ql,Xl,e,t);u.layers=this.layers,this.add(u);const d=new ir(ql,Xl,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,a,c,u]=t;for(const d of t)this.remove(d);if(e===Is)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Ap)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,c,u,d,p]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,c),e.setRenderTarget(i,3,r),e.render(t,u),e.setRenderTarget(i,4,r),e.render(t,d),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,r),e.render(t,p),e.setRenderTarget(f,m,v),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}
class M2 extends Pi{constructor(e,t,i,r,o,a,c,u,d,p){e=e!==void 0?e:[],t=t!==void 0?t:Ic,super(e,t,i,r,o,a,c,u,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}
class w8 extends nl{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new M2(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rs}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new rn(5,5,5),o=new Wo({name:"CubemapFromEquirect",uniforms:Bc(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xi,blending:zo});o.uniforms.tEquirect.value=t;const a=new fe(r,o),c=t.minFilter;return t.minFilter===Fa&&(t.minFilter=rs),new _8(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(o)}}
class h_{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Rt(e),this.near=t,this.far=i}clone(){return new h_(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}
class E2 extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cs,this.environmentIntensity=1,this.environmentRotation=new cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}
class b8{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ky,this.updateRanges=[],this.version=0,this.uuid=Fs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}
const Di=new ne;
class Pp{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Di.fromBufferAttribute(this,t),Di.applyMatrix4(e),this.setXYZ(t,Di.x,Di.y,Di.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Di.fromBufferAttribute(this,t),Di.applyNormalMatrix(e),this.setXYZ(t,Di.x,Di.y,Di.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Di.fromBufferAttribute(this,t),Di.transformDirection(e),this.setXYZ(t,Di.x,Di.y,Di.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=is(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pn(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=pn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=is(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=is(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=is(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=is(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array),r=pn(r,this.array),o=pn(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new $r(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}
class Ku extends Ko{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}
let Yl;
const Fu=new ne;
const Kl=new ne;
const Zl=new ne;
const Ql=new Ye;
const zu=new Ye;
const T2=new Mn;
const Pf=new ne;
const Bu=new ne;
const Nf=new ne;
const aE=new Ye;
const kg=new Ye;
const lE=new Ye;
class Lf extends ci{constructor(e=new Ku){if(super(),this.isSprite=!0,this.type="Sprite",Yl===void 0){Yl=new Jn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new b8(t,5);Yl.setIndex([0,1,2,0,2,3]),Yl.setAttribute("position",new Pp(i,3,0,!1)),Yl.setAttribute("uv",new Pp(i,2,3,!1))}this.geometry=Yl,this.material=e,this.center=new Ye(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Kl.setFromMatrixScale(this.matrixWorld),T2.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zl.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Kl.multiplyScalar(-Zl.z);const i=this.material.rotation;let r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));const a=this.center;kf(Pf.set(-.5,-.5,0),Zl,a,Kl,r,o),kf(Bu.set(.5,-.5,0),Zl,a,Kl,r,o),kf(Nf.set(.5,.5,0),Zl,a,Kl,r,o),aE.set(0,0),kg.set(1,0),lE.set(1,1);let c=e.ray.intersectTriangle(Pf,Bu,Nf,!1,Fu);if(c===null&&(kf(Bu.set(-.5,.5,0),Zl,a,Kl,r,o),kg.set(0,1),c=e.ray.intersectTriangle(Pf,Nf,Bu,!1,Fu),c===null))return;const u=e.ray.origin.distanceTo(Fu);u<e.near||u>e.far||t.push({distance:u,point:Fu.clone(),uv:Er.getInterpolation(Fu,Pf,Bu,Nf,aE,kg,lE,new Ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}
function kf(n,e,t,i,r,o){Ql.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(zu.x=o*Ql.x-r*Ql.y,zu.y=r*Ql.x+o*Ql.y):zu.copy(Ql),n.copy(e),n.x+=zu.x,n.y+=zu.y,n.applyMatrix4(T2)}
const Dg=new ne;
const M8=new ne;
const E8=new jt;
class Mo{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Dg.subVectors(i,t).cross(M8.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Dg),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||E8.getNormalMatrix(e),r=this.coplanarPoint(Dg).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}
const ba=new Zp;
const Df=new ne;
class f_{constructor(e=new Mo,t=new Mo,i=new Mo,r=new Mo,o=new Mo,a=new Mo){this.planes=[e,t,i,r,o,a]}set(e,t,i,r,o,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(r),c[4].copy(o),c[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Is){const i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],u=r[3],d=r[4],p=r[5],f=r[6],m=r[7],v=r[8],_=r[9],w=r[10],x=r[11],g=r[12],b=r[13],M=r[14],T=r[15];if(i[0].setComponents(u-o,m-d,x-v,T-g).normalize(),i[1].setComponents(u+o,m+d,x+v,T+g).normalize(),i[2].setComponents(u+a,m+p,x+_,T+b).normalize(),i[3].setComponents(u-a,m-p,x-_,T-b).normalize(),i[4].setComponents(u-c,m-f,x-w,T-M).normalize(),t===Is)i[5].setComponents(u+c,m+f,x+w,T+M).normalize();else if(t===Ap)i[5].setComponents(c,f,w,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ba.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ba.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ba)}intersectsSprite(e){return ba.center.set(0,0,0),ba.radius=.7071067811865476,ba.applyMatrix4(e.matrixWorld),this.intersectsSphere(ba)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Df.x=r.normal.x>0?e.max.x:e.min.x,Df.y=r.normal.y>0?e.max.y:e.min.y,Df.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Df)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}
class zn extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}
class Og extends Pi{constructor(e,t,i,r,o,a,c,u,d){super(e,t,i,r,o,a,c,u,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}
class A2 extends Pi{constructor(e,t,i,r,o,a,c,u,d,p=mc){if(p!==mc&&p!==Fc)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===mc&&(i=tl),i===void 0&&p===Fc&&(i=Uc),super(null,r,o,a,c,u,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Ui,this.minFilter=u!==void 0?u:Ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}
class ds{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),o=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),o+=i.distanceTo(r),t.push(o),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const o=i.length;let a;t?a=t:a=e*i[o-1];let c=0,u=o-1,d;for(;c<=u;)if(r=Math.floor(c+(u-c)/2),d=i[r]-a,d<0)c=r+1;else if(d>0)u=r-1;else{u=r;break}if(r=u,i[r]===a)return r/(o-1);const p=i[r],m=i[r+1]-p,v=(a-p)/m;return(r+v)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const a=this.getPoint(r),c=this.getPoint(o),u=t||(a.isVector2?new Ye:new ne);return u.copy(c).sub(a).normalize(),u}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new ne,r=[],o=[],a=[],c=new ne,u=new Mn;for(let v=0;v<=e;v++){const _=v/e;r[v]=this.getTangentAt(_,new ne)}o[0]=new ne,a[0]=new ne;let d=Number.MAX_VALUE;const p=Math.abs(r[0].x),f=Math.abs(r[0].y),m=Math.abs(r[0].z);p<=d&&(d=p,i.set(1,0,0)),f<=d&&(d=f,i.set(0,1,0)),m<=d&&i.set(0,0,1),c.crossVectors(r[0],i).normalize(),o[0].crossVectors(r[0],c),a[0].crossVectors(r[0],o[0]);for(let v=1;v<=e;v++){if(o[v]=o[v-1].clone(),a[v]=a[v-1].clone(),c.crossVectors(r[v-1],r[v]),c.length()>Number.EPSILON){c.normalize();const _=Math.acos(Wt(r[v-1].dot(r[v]),-1,1));o[v].applyMatrix4(u.makeRotationAxis(c,_))}a[v].crossVectors(r[v],o[v])}if(t===!0){let v=Math.acos(Wt(o[0].dot(o[e]),-1,1));v/=e,r[0].dot(c.crossVectors(o[0],o[e]))>0&&(v=-v);for(let _=1;_<=e;_++)o[_].applyMatrix4(u.makeRotationAxis(r[_],v*_)),a[_].crossVectors(r[_],o[_])}return{tangents:r,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}
class p_ extends ds{constructor(e=0,t=0,i=1,r=1,o=0,a=Math.PI*2,c=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=c,this.aRotation=u}getPoint(e,t=new Ye){const i=t,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(a?o=0:o=r),this.aClockwise===!0&&!a&&(o===r?o=-r:o=o-r);const c=this.aStartAngle+e*o;let u=this.aX+this.xRadius*Math.cos(c),d=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const p=Math.cos(this.aRotation),f=Math.sin(this.aRotation),m=u-this.aX,v=d-this.aY;u=m*p-v*f+this.aX,d=m*f+v*p+this.aY}return i.set(u,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}
class C8 extends p_{constructor(e,t,i,r,o,a){super(e,t,i,i,r,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}
function m_(){let n=0,e=0,t=0,i=0;function r(o,a,c,u){n=o,e=c,t=-3*o+3*a-2*c-u,i=2*o-2*a+c+u}return{initCatmullRom:function(o,a,c,u,d){r(a,c,d*(c-o),d*(u-a))},initNonuniformCatmullRom:function(o,a,c,u,d,p,f){let m=(a-o)/d-(c-o)/(d+p)+(c-a)/p,v=(c-a)/p-(u-a)/(p+f)+(u-c)/f;m*=p,v*=p,r(a,c,m,v)},calc:function(o){const a=o*o,c=a*o;return n+e*o+t*a+i*c}}}
const Uf=new ne;
const Ug=new m_;
const Fg=new m_;
const zg=new m_;
class A8 extends ds{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new ne){const i=t,r=this.points,o=r.length,a=(o-(this.closed?0:1))*e;let c=Math.floor(a),u=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/o)+1)*o:u===0&&c===o-1&&(c=o-2,u=1);let d,p;this.closed||c>0?d=r[(c-1)%o]:(Uf.subVectors(r[0],r[1]).add(r[0]),d=Uf);const f=r[c%o],m=r[(c+1)%o];if(this.closed||c+2<o?p=r[(c+2)%o]:(Uf.subVectors(r[o-1],r[o-2]).add(r[o-1]),p=Uf),this.curveType==="centripetal"||this.curveType==="chordal"){const v=this.curveType==="chordal"?.5:.25;let _=Math.pow(d.distanceToSquared(f),v),w=Math.pow(f.distanceToSquared(m),v),x=Math.pow(m.distanceToSquared(p),v);w<1e-4&&(w=1),_<1e-4&&(_=w),x<1e-4&&(x=w),Ug.initNonuniformCatmullRom(d.x,f.x,m.x,p.x,_,w,x),Fg.initNonuniformCatmullRom(d.y,f.y,m.y,p.y,_,w,x),zg.initNonuniformCatmullRom(d.z,f.z,m.z,p.z,_,w,x)}else this.curveType==="catmullrom"&&(Ug.initCatmullRom(d.x,f.x,m.x,p.x,this.tension),Fg.initCatmullRom(d.y,f.y,m.y,p.y,this.tension),zg.initCatmullRom(d.z,f.z,m.z,p.z,this.tension));return i.set(Ug.calc(u),Fg.calc(u),zg.calc(u)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ne().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}
function dE(n,e,t,i,r){const o=(i-e)*.5,a=(r-t)*.5,c=n*n,u=n*c;return(2*t-2*i+o+a)*u+(-3*t+3*i-2*o-a)*c+o*n+t}
function R8(n,e){const t=1-n;return t*t*e}
function P8(n,e){return 2*(1-n)*n*e}
function N8(n,e){return n*n*e}
function sd(n,e,t,i){return R8(n,e)+P8(n,t)+N8(n,i)}
function L8(n,e){const t=1-n;return t*t*t*e}
function k8(n,e){const t=1-n;return 3*t*t*n*e}
function D8(n,e){return 3*(1-n)*n*n*e}
function I8(n,e){return n*n*n*e}
function od(n,e,t,i,r){return L8(n,e)+k8(n,t)+D8(n,i)+I8(n,r)}
class R2 extends ds{constructor(e=new Ye,t=new Ye,i=new Ye,r=new Ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ye){const i=t,r=this.v0,o=this.v1,a=this.v2,c=this.v3;return i.set(od(e,r.x,o.x,a.x,c.x),od(e,r.y,o.y,a.y,c.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}
class O8 extends ds{constructor(e=new ne,t=new ne,i=new ne,r=new ne){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ne){const i=t,r=this.v0,o=this.v1,a=this.v2,c=this.v3;return i.set(od(e,r.x,o.x,a.x,c.x),od(e,r.y,o.y,a.y,c.y),od(e,r.z,o.z,a.z,c.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}
class P2 extends ds{constructor(e=new Ye,t=new Ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ye){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}
class U8 extends ds{constructor(e=new ne,t=new ne){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new ne){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}
class N2 extends ds{constructor(e=new Ye,t=new Ye,i=new Ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ye){const i=t,r=this.v0,o=this.v1,a=this.v2;return i.set(sd(e,r.x,o.x,a.x),sd(e,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}
class F8 extends ds{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){const i=t,r=this.v0,o=this.v1,a=this.v2;return i.set(sd(e,r.x,o.x,a.x),sd(e,r.y,o.y,a.y),sd(e,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}
class L2 extends ds{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ye){const i=t,r=this.points,o=(r.length-1)*e,a=Math.floor(o),c=o-a,u=r[a===0?a:a-1],d=r[a],p=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return i.set(dE(c,u.x,d.x,p.x,f.x),dE(c,u.y,d.y,p.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Ye().fromArray(r))}return this}}
var hE=Object.freeze({__proto__:null,ArcCurve:C8,CatmullRomCurve3:A8,CubicBezierCurve:R2,CubicBezierCurve3:O8,EllipseCurve:p_,LineCurve:P2,LineCurve3:U8,QuadraticBezierCurve:N2,QuadraticBezierCurve3:F8,SplineCurve:L2});
class z8 extends ds{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hE[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let o=0;for(;o<r.length;){if(r[o]>=i){const a=r[o]-i,c=this.curves[o],u=c.getLength(),d=u===0?0:1-a/u;return c.getPointAt(d,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,o=this.curves;r<o.length;r++){const a=o[r],c=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,u=a.getPoints(c);for(let d=0;d<u.length;d++){const p=u[d];i&&i.equals(p)||(t.push(p),i=p)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new hE[r.type]().fromJSON(r))}return this}}
class Oy extends z8{constructor(e){super(),this.type="Path",this.currentPoint=new Ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new P2(this.currentPoint.clone(),new Ye(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const o=new N2(this.currentPoint.clone(),new Ye(e,t),new Ye(i,r));return this.curves.push(o),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,o,a){const c=new R2(this.currentPoint.clone(),new Ye(e,t),new Ye(i,r),new Ye(o,a));return this.curves.push(c),this.currentPoint.set(o,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new L2(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,o,a){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+c,t+u,i,r,o,a),this}absarc(e,t,i,r,o,a){return this.absellipse(e,t,i,i,r,o,a),this}ellipse(e,t,i,r,o,a,c,u){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(e+d,t+p,i,r,o,a,c,u),this}absellipse(e,t,i,r,o,a,c,u){const d=new p_(e,t,i,r,o,a,c,u);if(this.curves.length>0){const f=d.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(d);const p=d.getPoint(1);return this.currentPoint.copy(p),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}
class g_ extends Jn{constructor(e=[new Ye(0,-.5),new Ye(.5,0),new Ye(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Wt(r,0,Math.PI*2);const o=[],a=[],c=[],u=[],d=[],p=1/t,f=new ne,m=new Ye,v=new ne,_=new ne,w=new ne;let x=0,g=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:x=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,v.x=g*1,v.y=-x,v.z=g*0,w.copy(v),v.normalize(),u.push(v.x,v.y,v.z);break;case e.length-1:u.push(w.x,w.y,w.z);break;default:x=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,v.x=g*1,v.y=-x,v.z=g*0,_.copy(v),v.x+=w.x,v.y+=w.y,v.z+=w.z,v.normalize(),u.push(v.x,v.y,v.z),w.copy(_)}for(let b=0;b<=t;b++){const M=i+b*p*r,T=Math.sin(M),R=Math.cos(M);for(let L=0;L<=e.length-1;L++){f.x=e[L].x*T,f.y=e[L].y,f.z=e[L].x*R,a.push(f.x,f.y,f.z),m.x=b/t,m.y=L/(e.length-1),c.push(m.x,m.y);const P=u[3*L+0]*T,I=u[3*L+1],N=u[3*L+0]*R;d.push(P,I,N)}}for(let b=0;b<t;b++)for(let M=0;M<e.length-1;M++){const T=M+b*e.length,R=T,L=T+e.length,P=T+e.length+1,I=T+1;o.push(R,L,I),o.push(P,I,L)}this.setIndex(o),this.setAttribute("position",new on(a,3)),this.setAttribute("uv",new on(c,2)),this.setAttribute("normal",new on(d,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new g_(e.points,e.segments,e.phiStart,e.phiLength)}}
class Vc extends g_{constructor(e=1,t=1,i=4,r=8){const o=new Oy;o.absarc(0,-t/2,e,Math.PI*1.5,0),o.absarc(0,t/2,e,0,Math.PI*.5),super(o.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new Vc(e.radius,e.length,e.capSegments,e.radialSegments)}}
class Na extends Jn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const o=[],a=[],c=[],u=[],d=new ne,p=new Ye;a.push(0,0,0),c.push(0,0,1),u.push(.5,.5);for(let f=0,m=3;f<=t;f++,m+=3){const v=i+f/t*r;d.x=e*Math.cos(v),d.y=e*Math.sin(v),a.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(a[m]/e+1)/2,p.y=(a[m+1]/e+1)/2,u.push(p.x,p.y)}for(let f=1;f<=t;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new on(a,3)),this.setAttribute("normal",new on(c,3)),this.setAttribute("uv",new on(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.radius,e.segments,e.thetaStart,e.thetaLength)}}
class Fn extends Jn{constructor(e=1,t=1,i=1,r=32,o=1,a=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:o,openEnded:a,thetaStart:c,thetaLength:u};const d=this;r=Math.floor(r),o=Math.floor(o);const p=[],f=[],m=[],v=[];let _=0;const w=[],x=i/2;let g=0;b(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(p),this.setAttribute("position",new on(f,3)),this.setAttribute("normal",new on(m,3)),this.setAttribute("uv",new on(v,2));function b(){const T=new ne,R=new ne;let L=0;const P=(t-e)/i;for(let I=0;I<=o;I++){const N=[],k=I/o,z=k*(t-e)+e;for(let J=0;J<=r;J++){const Z=J/r,K=Z*u+c,me=Math.sin(K),ue=Math.cos(K);R.x=z*me,R.y=-k*i+x,R.z=z*ue,f.push(R.x,R.y,R.z),T.set(me,P,ue).normalize(),m.push(T.x,T.y,T.z),v.push(Z,1-k),N.push(_++)}w.push(N)}for(let I=0;I<r;I++)for(let N=0;N<o;N++){const k=w[N][I],z=w[N+1][I],J=w[N+1][I+1],Z=w[N][I+1];(e>0||N!==0)&&(p.push(k,z,Z),L+=3),(t>0||N!==o-1)&&(p.push(z,J,Z),L+=3)}d.addGroup(g,L,0),g+=L}function M(T){const R=_,L=new Ye,P=new ne;let I=0;const N=T===!0?e:t,k=T===!0?1:-1;for(let J=1;J<=r;J++)f.push(0,x*k,0),m.push(0,k,0),v.push(.5,.5),_++;const z=_;for(let J=0;J<=r;J++){const K=J/r*u+c,me=Math.cos(K),ue=Math.sin(K);P.x=N*ue,P.y=x*k,P.z=N*me,f.push(P.x,P.y,P.z),m.push(0,k,0),L.x=me*.5+.5,L.y=ue*.5*k+.5,v.push(L.x,L.y),_++}for(let J=0;J<r;J++){const Z=R+J,K=z+J;T===!0?p.push(K,K+1,Z):p.push(K+1,K,Z),I+=3}d.addGroup(g,I,T===!0?1:2),g+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}
class Gt extends Fn{constructor(e=1,t=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(0,e,t,i,r,o,a,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c}}static fromJSON(e){return new Gt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}
class Qp extends Jn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const o=[],a=[];c(r),d(i),p(),this.setAttribute("position",new on(o,3)),this.setAttribute("normal",new on(o.slice(),3)),this.setAttribute("uv",new on(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function c(b){const M=new ne,T=new ne,R=new ne;for(let L=0;L<t.length;L+=3)v(t[L+0],M),v(t[L+1],T),v(t[L+2],R),u(M,T,R,b)}function u(b,M,T,R){const L=R+1,P=[];for(let I=0;I<=L;I++){P[I]=[];const N=b.clone().lerp(T,I/L),k=M.clone().lerp(T,I/L),z=L-I;for(let J=0;J<=z;J++)J===0&&I===L?P[I][J]=N:P[I][J]=N.clone().lerp(k,J/z)}for(let I=0;I<L;I++)for(let N=0;N<2*(L-I)-1;N++){const k=Math.floor(N/2);N%2===0?(m(P[I][k+1]),m(P[I+1][k]),m(P[I][k])):(m(P[I][k+1]),m(P[I+1][k+1]),m(P[I+1][k]))}}function d(b){const M=new ne;for(let T=0;T<o.length;T+=3)M.x=o[T+0],M.y=o[T+1],M.z=o[T+2],M.normalize().multiplyScalar(b),o[T+0]=M.x,o[T+1]=M.y,o[T+2]=M.z}function p(){const b=new ne;for(let M=0;M<o.length;M+=3){b.x=o[M+0],b.y=o[M+1],b.z=o[M+2];const T=x(b)/2/Math.PI+.5,R=g(b)/Math.PI+.5;a.push(T,1-R)}_(),f()}function f(){for(let b=0;b<a.length;b+=6){const M=a[b+0],T=a[b+2],R=a[b+4],L=Math.max(M,T,R),P=Math.min(M,T,R);L>.9&&P<.1&&(M<.2&&(a[b+0]+=1),T<.2&&(a[b+2]+=1),R<.2&&(a[b+4]+=1))}}function m(b){o.push(b.x,b.y,b.z)}function v(b,M){const T=b*3;M.x=e[T+0],M.y=e[T+1],M.z=e[T+2]}function _(){const b=new ne,M=new ne,T=new ne,R=new ne,L=new Ye,P=new Ye,I=new Ye;for(let N=0,k=0;N<o.length;N+=9,k+=6){b.set(o[N+0],o[N+1],o[N+2]),M.set(o[N+3],o[N+4],o[N+5]),T.set(o[N+6],o[N+7],o[N+8]),L.set(a[k+0],a[k+1]),P.set(a[k+2],a[k+3]),I.set(a[k+4],a[k+5]),R.copy(b).add(M).add(T).divideScalar(3);const z=x(R);w(L,k+0,b,z),w(P,k+2,M,z),w(I,k+4,T,z)}}function w(b,M,T,R){R<0&&b.x===1&&(a[M]=b.x-1),T.x===0&&T.z===0&&(a[M]=R/2/Math.PI+.5)}function x(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qp(e.vertices,e.indices,e.radius,e.details)}}
class La extends Qp{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new La(e.radius,e.detail)}}
class Ad extends Qp{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ad(e.radius,e.detail)}}
class qd extends Jn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,a=t/2,c=Math.floor(i),u=Math.floor(r),d=c+1,p=u+1,f=e/c,m=t/u,v=[],_=[],w=[],x=[];for(let g=0;g<p;g++){const b=g*m-a;for(let M=0;M<d;M++){const T=M*f-o;_.push(T,-b,0),w.push(0,0,1),x.push(M/c),x.push(1-g/u)}}for(let g=0;g<u;g++)for(let b=0;b<c;b++){const M=b+d*g,T=b+d*(g+1),R=b+1+d*(g+1),L=b+1+d*g;v.push(M,T,L),v.push(T,R,L)}this.setIndex(v),this.setAttribute("position",new on(_,3)),this.setAttribute("normal",new on(w,3)),this.setAttribute("uv",new on(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qd(e.width,e.height,e.widthSegments,e.heightSegments)}}
class Ps extends Jn{constructor(e=.5,t=1,i=32,r=1,o=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:o,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const c=[],u=[],d=[],p=[];let f=e;const m=(t-e)/r,v=new ne,_=new Ye;for(let w=0;w<=r;w++){for(let x=0;x<=i;x++){const g=o+x/i*a;v.x=f*Math.cos(g),v.y=f*Math.sin(g),u.push(v.x,v.y,v.z),d.push(0,0,1),_.x=(v.x/t+1)/2,_.y=(v.y/t+1)/2,p.push(_.x,_.y)}f+=m}for(let w=0;w<r;w++){const x=w*(i+1);for(let g=0;g<i;g++){const b=g+x,M=b,T=b+i+1,R=b+i+2,L=b+1;c.push(M,T,L),c.push(T,R,L)}}this.setIndex(c),this.setAttribute("position",new on(u,3)),this.setAttribute("normal",new on(d,3)),this.setAttribute("uv",new on(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}
class Tt extends Jn{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:a,thetaLength:c},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const u=Math.min(a+c,Math.PI);let d=0;const p=[],f=new ne,m=new ne,v=[],_=[],w=[],x=[];for(let g=0;g<=i;g++){const b=[],M=g/i;let T=0;g===0&&a===0?T=.5/t:g===i&&u===Math.PI&&(T=-.5/t);for(let R=0;R<=t;R++){const L=R/t;f.x=-e*Math.cos(r+L*o)*Math.sin(a+M*c),f.y=e*Math.cos(a+M*c),f.z=e*Math.sin(r+L*o)*Math.sin(a+M*c),_.push(f.x,f.y,f.z),m.copy(f).normalize(),w.push(m.x,m.y,m.z),x.push(L+T,1-M),b.push(d++)}p.push(b)}for(let g=0;g<i;g++)for(let b=0;b<t;b++){const M=p[g][b+1],T=p[g][b],R=p[g+1][b],L=p[g+1][b+1];(g!==0||a>0)&&v.push(M,T,L),(g!==i-1||u<Math.PI)&&v.push(T,R,L)}this.setIndex(v),this.setAttribute("position",new on(_,3)),this.setAttribute("normal",new on(w,3)),this.setAttribute("uv",new on(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}
class Ci extends Jn{constructor(e=1,t=.4,i=12,r=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:o},i=Math.floor(i),r=Math.floor(r);const a=[],c=[],u=[],d=[],p=new ne,f=new ne,m=new ne;for(let v=0;v<=i;v++)for(let _=0;_<=r;_++){const w=_/r*o,x=v/i*Math.PI*2;f.x=(e+t*Math.cos(x))*Math.cos(w),f.y=(e+t*Math.cos(x))*Math.sin(w),f.z=t*Math.sin(x),c.push(f.x,f.y,f.z),p.x=e*Math.cos(w),p.y=e*Math.sin(w),m.subVectors(f,p).normalize(),u.push(m.x,m.y,m.z),d.push(_/r),d.push(v/i)}for(let v=1;v<=i;v++)for(let _=1;_<=r;_++){const w=(r+1)*v+_-1,x=(r+1)*(v-1)+_-1,g=(r+1)*(v-1)+_,b=(r+1)*v+_;a.push(w,x,b),a.push(x,g,b)}this.setIndex(a),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(u,3)),this.setAttribute("uv",new on(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}
class zt extends Ko{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=u_,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}
class rH extends Ko{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fj,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}
class sH extends Ko{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}
class F2 extends ci{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}
const Bg=new Mn;
const gE=new ne;
const vE=new ne;
class oH{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new f_,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;gE.setFromMatrixPosition(e.matrixWorld),t.position.copy(gE),vE.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vE),t.updateMatrixWorld(),Bg.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bg),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bg)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}
class z2 extends S2{constructor(e=-1,t=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,a=i+e,c=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,a=o+d*this.view.width,c-=p*this.view.offsetY,u=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,a,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}
class aH extends oH{constructor(){super(new z2(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}
class kp extends F2{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ci.DEFAULT_UP),this.updateMatrix(),this.target=new ci,this.shadow=new aH}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}
class B2 extends F2{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}
class lH extends ir{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}
function _E(n,e,t,i){const r=dH(i);switch(t){case l2:return n*e;case u2:return n*e;case d2:return n*e*2;case o_:return n*e/r.components*r.byteLength;case a_:return n*e/r.components*r.byteLength;case h2:return n*e*2/r.components*r.byteLength;case l_:return n*e*2/r.components*r.byteLength;case c2:return n*e*3/r.components*r.byteLength;case Wr:return n*e*4/r.components*r.byteLength;case c_:return n*e*4/r.components*r.byteLength;case rp:case sp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case op:case ap:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ly:case uy:return Math.max(n,16)*Math.max(e,8)/4;case ay:case cy:return Math.max(n,8)*Math.max(e,8)/2;case dy:case hy:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fy:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case py:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case my:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case gy:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case vy:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case yy:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xy:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _y:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wy:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case by:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Sy:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case My:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ey:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ty:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Cy:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case lp:case Ay:case Ry:return Math.ceil(n/4)*Math.ceil(e/4)*16;case f2:case Py:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ny:case Ly:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}
function dH(n){switch(n){case Hs:case s2:return{byteLength:1,components:1};case Md:case o2:case Wd:return{byteLength:2,components:1};case r_:case s_:return{byteLength:2,components:4};case tl:case i_:case Ds:return{byteLength:4,components:1};case a2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}
function V2(){let n=null,e=!1,t=null,i=null;function r(o,a){t(o,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}
function hH(n){const e=new WeakMap;function t(c,u){const d=c.array,p=c.usage,f=d.byteLength,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,d,p),c.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?v=n.HALF_FLOAT:v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function i(c,u,d){const p=u.array,f=u.updateRanges;if(n.bindBuffer(d,c),f.length===0)n.bufferSubData(d,0,p);else{f.sort((v,_)=>v.start-_.start);let m=0;for(let v=1;v<f.length;v++){const _=f[m],w=f[v];w.start<=_.start+_.count+1?_.count=Math.max(_.count,w.start+w.count-_.start):(++m,f[m]=w)}f.length=m+1;for(let v=0,_=f.length;v<_;v++){const w=f[v];n.bufferSubData(d,w.start*p.BYTES_PER_ELEMENT,p,w.start,w.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(n.deleteBuffer(u.buffer),e.delete(c))}function a(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,t(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,c,u),d.version=c.version}}return{get:r,remove:o,update:a}}
var fH=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`;
var pH=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`;
var mH=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`;
var gH=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`;
var vH=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`;
var yH=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`;
var xH=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`;
var _H=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`;
var wH=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`;
var bH=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`;
var SH=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`;
var MH=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`;
var EH=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`;
var TH=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`;
var CH=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`;
var AH=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`;
var RH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`;
var PH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`;
var NH=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`;
var LH=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`;
var kH=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`;
var DH=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`;
var IH=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`;
var OH=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`;
var UH=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`;
var FH=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`;
var zH=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`;
var BH=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`;
var VH=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`;
var jH=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`;
var HH="gl_FragColor = linearToOutputTexel( gl_FragColor );";
var GH=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`;
var WH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`;
var $H=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`;
var qH=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`;
var XH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`;
var YH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`;
var KH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`;
var ZH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`;
var QH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;
var JH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`;
var eG=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`;
var tG=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`;
var nG=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`;
var iG=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`;
var rG=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`;
var sG=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`;
var oG=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`;
var aG=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`;
var lG=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`;
var cG=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`;
var uG=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`;
var dG=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`;
var hG=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`;
var fG=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`;
var pG=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`;
var mG=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`;
var gG=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`;
var vG=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`;
var yG=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`;
var xG=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`;
var _G=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`;
var wG=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`;
var bG=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`;
var SG=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`;
var MG=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`;
var EG=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`;
var TG=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`;
var CG=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`;
var AG=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`;
var RG=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`;
var PG=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`;
var NG=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`;
var LG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`;
var kG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`;
var DG=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`;
var IG=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`;
var OG=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`;
var UG=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`;
var FG=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`;
var zG=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`;
var BG=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`;
var VG=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`;
var jG=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`;
var HG=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`;
var GG=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`;
var WG=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`;
var $G=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`;
var qG=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`;
var XG=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`;
var YG=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`;
var KG=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`;
var ZG=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`;
var QG=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`;
var JG=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`;
var eW=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`;
var tW=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`;
var nW=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`;
var iW=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`;
var rW=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`;
var sW=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`;
var oW=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`;
var aW=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`;
var lW=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`;
var cW=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`;
var uW=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`;
var dW=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const hW=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`;
const fW=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
const pW=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`;
const mW=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
const gW=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`;
const vW=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
const yW=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`;
const xW=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`;
const _W=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`;
const wW=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`;
const bW=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`;
const SW=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
const MW=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;
const EW=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`;
const TW=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`;
const CW=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
const AW=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;
const RW=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
const PW=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`;
const NW=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
const LW=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`;
const kW=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`;
const DW=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;
const IW=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
const OW=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`;
const UW=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
const FW=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;
const zW=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
const BW=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`;
const VW=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`;
const jW=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;
const HW=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`;
const GW=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;
const WW=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`;
const Ht={alphahash_fragment:fH,alphahash_pars_fragment:pH,alphamap_fragment:mH,alphamap_pars_fragment:gH,alphatest_fragment:vH,alphatest_pars_fragment:yH,aomap_fragment:xH,aomap_pars_fragment:_H,batching_pars_vertex:wH,batching_vertex:bH,begin_vertex:SH,beginnormal_vertex:MH,bsdfs:EH,iridescence_fragment:TH,bumpmap_pars_fragment:CH,clipping_planes_fragment:AH,clipping_planes_pars_fragment:RH,clipping_planes_pars_vertex:PH,clipping_planes_vertex:NH,color_fragment:LH,color_pars_fragment:kH,color_pars_vertex:DH,color_vertex:IH,common:OH,cube_uv_reflection_fragment:UH,defaultnormal_vertex:FH,displacementmap_pars_vertex:zH,displacementmap_vertex:BH,emissivemap_fragment:VH,emissivemap_pars_fragment:jH,colorspace_fragment:HH,colorspace_pars_fragment:GH,envmap_fragment:WH,envmap_common_pars_fragment:$H,envmap_pars_fragment:qH,envmap_pars_vertex:XH,envmap_physical_pars_fragment:sG,envmap_vertex:YH,fog_vertex:KH,fog_pars_vertex:ZH,fog_fragment:QH,fog_pars_fragment:JH,gradientmap_pars_fragment:eG,lightmap_pars_fragment:tG,lights_lambert_fragment:nG,lights_lambert_pars_fragment:iG,lights_pars_begin:rG,lights_toon_fragment:oG,lights_toon_pars_fragment:aG,lights_phong_fragment:lG,lights_phong_pars_fragment:cG,lights_physical_fragment:uG,lights_physical_pars_fragment:dG,lights_fragment_begin:hG,lights_fragment_maps:fG,lights_fragment_end:pG,logdepthbuf_fragment:mG,logdepthbuf_pars_fragment:gG,logdepthbuf_pars_vertex:vG,logdepthbuf_vertex:yG,map_fragment:xG,map_pars_fragment:_G,map_particle_fragment:wG,map_particle_pars_fragment:bG,metalnessmap_fragment:SG,metalnessmap_pars_fragment:MG,morphinstance_vertex:EG,morphcolor_vertex:TG,morphnormal_vertex:CG,morphtarget_pars_vertex:AG,morphtarget_vertex:RG,normal_fragment_begin:PG,normal_fragment_maps:NG,normal_pars_fragment:LG,normal_pars_vertex:kG,normal_vertex:DG,normalmap_pars_fragment:IG,clearcoat_normal_fragment_begin:OG,clearcoat_normal_fragment_maps:UG,clearcoat_pars_fragment:FG,iridescence_pars_fragment:zG,opaque_fragment:BG,packing:VG,premultiplied_alpha_fragment:jG,project_vertex:HG,dithering_fragment:GG,dithering_pars_fragment:WG,roughnessmap_fragment:$G,roughnessmap_pars_fragment:qG,shadowmap_pars_fragment:XG,shadowmap_pars_vertex:YG,shadowmap_vertex:KG,shadowmask_pars_fragment:ZG,skinbase_vertex:QG,skinning_pars_vertex:JG,skinning_vertex:eW,skinnormal_vertex:tW,specularmap_fragment:nW,specularmap_pars_fragment:iW,tonemapping_fragment:rW,tonemapping_pars_fragment:sW,transmission_fragment:oW,transmission_pars_fragment:aW,uv_pars_fragment:lW,uv_pars_vertex:cW,uv_vertex:uW,worldpos_vertex:dW,background_vert:hW,background_frag:fW,backgroundCube_vert:pW,backgroundCube_frag:mW,cube_vert:gW,cube_frag:vW,depth_vert:yW,depth_frag:xW,distanceRGBA_vert:_W,distanceRGBA_frag:wW,equirect_vert:bW,equirect_frag:SW,linedashed_vert:MW,linedashed_frag:EW,meshbasic_vert:TW,meshbasic_frag:CW,meshlambert_vert:AW,meshlambert_frag:RW,meshmatcap_vert:PW,meshmatcap_frag:NW,meshnormal_vert:LW,meshnormal_frag:kW,meshphong_vert:DW,meshphong_frag:IW,meshphysical_vert:OW,meshphysical_frag:UW,meshtoon_vert:FW,meshtoon_frag:zW,points_vert:BW,points_frag:VW,shadow_vert:jW,shadow_frag:HW,sprite_vert:GW,sprite_frag:WW};
const tt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}};
const ns={basic:{uniforms:Ii([tt.common,tt.specularmap,tt.envmap,tt.aomap,tt.lightmap,tt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ii([tt.common,tt.specularmap,tt.envmap,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.fog,tt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ii([tt.common,tt.specularmap,tt.envmap,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.fog,tt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ii([tt.common,tt.envmap,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.roughnessmap,tt.metalnessmap,tt.fog,tt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ii([tt.common,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.gradientmap,tt.fog,tt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ii([tt.common,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ii([tt.points,tt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ii([tt.common,tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ii([tt.common,tt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ii([tt.common,tt.bumpmap,tt.normalmap,tt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ii([tt.sprite,tt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ii([tt.common,tt.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ii([tt.lights,tt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};
ns.physical={uniforms:Ii([ns.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};
const Bf={r:0,b:0,g:0};
const Sa=new cs;
const $W=new Mn;
function qW(n,e,t,i,r,o,a){const c=new Rt(0);let u=o===!0?0:1,d,p,f=null,m=0,v=null;function _(M){let T=M.isScene===!0?M.background:null;return T&&T.isTexture&&(T=(M.backgroundBlurriness>0?t:e).get(T)),T}function w(M){let T=!1;const R=_(M);R===null?g(c,u):R&&R.isColor&&(g(R,1),T=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(M,T){const R=_(T);R&&(R.isCubeTexture||R.mapping===Kp)?(p===void 0&&(p=new fe(new rn(1,1,1),new Wo({name:"BackgroundCubeMaterial",uniforms:Bc(ns.backgroundCube.uniforms),vertexShader:ns.backgroundCube.vertexShader,fragmentShader:ns.backgroundCube.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Sa.copy(T.backgroundRotation),Sa.x*=-1,Sa.y*=-1,Sa.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Sa.y*=-1,Sa.z*=-1),p.material.uniforms.envMap.value=R,p.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4($W.makeRotationFromEuler(Sa)),p.material.toneMapped=sn.getTransfer(R.colorSpace)!==fn,(f!==R||m!==R.version||v!==n.toneMapping)&&(p.material.needsUpdate=!0,f=R,m=R.version,v=n.toneMapping),p.layers.enableAll(),M.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new fe(new qd(2,2),new Wo({name:"BackgroundMaterial",uniforms:Bc(ns.background.uniforms),vertexShader:ns.background.vertexShader,fragmentShader:ns.background.fragmentShader,side:Go,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.toneMapped=sn.getTransfer(R.colorSpace)!==fn,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||m!==R.version||v!==n.toneMapping)&&(d.material.needsUpdate=!0,f=R,m=R.version,v=n.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null))}function g(M,T){M.getRGB(Bf,b2(n)),i.buffers.color.setClear(Bf.r,Bf.g,Bf.b,T,a)}function b(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),d!==void 0&&(d.geometry.dispose(),d.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(M,T=1){c.set(M),u=T,g(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(M){u=M,g(c,u)},render:w,addToRenderList:x,dispose:b}}
function XW(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=m(null);let o=r,a=!1;function c(k,z,J,Z,K){let me=!1;const ue=f(Z,J,z);o!==ue&&(o=ue,d(o.object)),me=v(k,Z,J,K),me&&_(k,Z,J,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(me||a)&&(a=!1,T(k,z,J,Z),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function u(){return n.createVertexArray()}function d(k){return n.bindVertexArray(k)}function p(k){return n.deleteVertexArray(k)}function f(k,z,J){const Z=J.wireframe===!0;let K=i[k.id];K===void 0&&(K={},i[k.id]=K);let me=K[z.id];me===void 0&&(me={},K[z.id]=me);let ue=me[Z];return ue===void 0&&(ue=m(u()),me[Z]=ue),ue}function m(k){const z=[],J=[],Z=[];for(let K=0;K<t;K++)z[K]=0,J[K]=0,Z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:J,attributeDivisors:Z,object:k,attributes:{},index:null}}function v(k,z,J,Z){const K=o.attributes,me=z.attributes;let ue=0;const oe=J.getAttributes();for(const V in oe)if(oe[V].location>=0){const X=K[V];let j=me[V];if(j===void 0&&(V==="instanceMatrix"&&k.instanceMatrix&&(j=k.instanceMatrix),V==="instanceColor"&&k.instanceColor&&(j=k.instanceColor)),X===void 0||X.attribute!==j||j&&X.data!==j.data)return!0;ue++}return o.attributesNum!==ue||o.index!==Z}function _(k,z,J,Z){const K={},me=z.attributes;let ue=0;const oe=J.getAttributes();for(const V in oe)if(oe[V].location>=0){let X=me[V];X===void 0&&(V==="instanceMatrix"&&k.instanceMatrix&&(X=k.instanceMatrix),V==="instanceColor"&&k.instanceColor&&(X=k.instanceColor));const j={};j.attribute=X,X&&X.data&&(j.data=X.data),K[V]=j,ue++}o.attributes=K,o.attributesNum=ue,o.index=Z}function w(){const k=o.newAttributes;for(let z=0,J=k.length;z<J;z++)k[z]=0}function x(k){g(k,0)}function g(k,z){const J=o.newAttributes,Z=o.enabledAttributes,K=o.attributeDivisors;J[k]=1,Z[k]===0&&(n.enableVertexAttribArray(k),Z[k]=1),K[k]!==z&&(n.vertexAttribDivisor(k,z),K[k]=z)}function b(){const k=o.newAttributes,z=o.enabledAttributes;for(let J=0,Z=z.length;J<Z;J++)z[J]!==k[J]&&(n.disableVertexAttribArray(J),z[J]=0)}function M(k,z,J,Z,K,me,ue){ue===!0?n.vertexAttribIPointer(k,z,J,K,me):n.vertexAttribPointer(k,z,J,Z,K,me)}function T(k,z,J,Z){w();const K=Z.attributes,me=J.getAttributes(),ue=z.defaultAttributeValues;for(const oe in me){const V=me[oe];if(V.location>=0){let te=K[oe];if(te===void 0&&(oe==="instanceMatrix"&&k.instanceMatrix&&(te=k.instanceMatrix),oe==="instanceColor"&&k.instanceColor&&(te=k.instanceColor)),te!==void 0){const X=te.normalized,j=te.itemSize,de=e.get(te);if(de===void 0)continue;const Ue=de.buffer,pe=de.type,_e=de.bytesPerElement,Me=pe===n.INT||pe===n.UNSIGNED_INT||te.gpuType===i_;if(te.isInterleavedBufferAttribute){const Pe=te.data,Ve=Pe.stride,He=te.offset;if(Pe.isInstancedInterleavedBuffer){for(let ft=0;ft<V.locationSize;ft++)g(V.location+ft,Pe.meshPerAttribute);k.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let ft=0;ft<V.locationSize;ft++)x(V.location+ft);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let ft=0;ft<V.locationSize;ft++)M(V.location+ft,j/V.locationSize,pe,X,Ve*_e,(He+j/V.locationSize*ft)*_e,Me)}else{if(te.isInstancedBufferAttribute){for(let Pe=0;Pe<V.locationSize;Pe++)g(V.location+Pe,te.meshPerAttribute);k.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Pe=0;Pe<V.locationSize;Pe++)x(V.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let Pe=0;Pe<V.locationSize;Pe++)M(V.location+Pe,j/V.locationSize,pe,X,j*_e,j/V.locationSize*Pe*_e,Me)}}else if(ue!==void 0){const X=ue[oe];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(V.location,X);break;case 3:n.vertexAttrib3fv(V.location,X);break;case 4:n.vertexAttrib4fv(V.location,X);break;default:n.vertexAttrib1fv(V.location,X)}}}}b()}function R(){I();for(const k in i){const z=i[k];for(const J in z){const Z=z[J];for(const K in Z)p(Z[K].object),delete Z[K];delete z[J]}delete i[k]}}function L(k){if(i[k.id]===void 0)return;const z=i[k.id];for(const J in z){const Z=z[J];for(const K in Z)p(Z[K].object),delete Z[K];delete z[J]}delete i[k.id]}function P(k){for(const z in i){const J=i[z];if(J[k.id]===void 0)continue;const Z=J[k.id];for(const K in Z)p(Z[K].object),delete Z[K];delete J[k.id]}}function I(){N(),a=!0,o!==r&&(o=r,d(o.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:I,resetDefaultState:N,dispose:R,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:x,disableUnusedAttributes:b}}
function YW(n,e,t){let i;function r(d){i=d}function o(d,p){n.drawArrays(i,d,p),t.update(p,i,1)}function a(d,p,f){f!==0&&(n.drawArraysInstanced(i,d,p,f),t.update(p,i,f))}function c(d,p,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,p,0,f);let v=0;for(let _=0;_<f;_++)v+=p[_];t.update(v,i,1)}function u(d,p,f,m){if(f===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<d.length;_++)a(d[_],p[_],m[_]);else{v.multiDrawArraysInstancedWEBGL(i,d,0,p,0,m,0,f);let _=0;for(let w=0;w<f;w++)_+=p[w]*m[w];t.update(_,i,1)}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}
function KW(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Wr&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(P){const I=P===Wd&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Hs&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ds&&!I)}function u(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=u(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const f=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),v=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:f,reverseDepthBuffer:m,maxTextures:v,maxVertexTextures:_,maxTextureSize:w,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:T,vertexTextures:R,maxSamples:L}}
function ZW(n){const e=this;let t=null,i=0,r=!1,o=!1;const a=new Mo,c=new jt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const v=f.length!==0||m||i!==0||r;return r=m,i=f.length,v},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,m){t=p(f,m,0)},this.setState=function(f,m,v){const _=f.clippingPlanes,w=f.clipIntersection,x=f.clipShadows,g=n.get(f);if(!r||_===null||_.length===0||o&&!x)o?p(null):d();else{const b=o?0:i,M=b*4;let T=g.clippingState||null;u.value=T,T=p(_,m,M,v);for(let R=0;R!==M;++R)T[R]=t[R];g.clippingState=T,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function d(){u.value!==t&&(u.value=t,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(f,m,v,_){const w=f!==null?f.length:0;let x=null;if(w!==0){if(x=u.value,_!==!0||x===null){const g=v+w*4,b=m.matrixWorldInverse;c.getNormalMatrix(b),(x===null||x.length<g)&&(x=new Float32Array(g));for(let M=0,T=v;M!==w;++M,T+=4)a.copy(f[M]).applyMatrix4(b,c),a.normal.toArray(x,T),x[T+3]=a.constant}u.value=x,u.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}
function QW(n){let e=new WeakMap;function t(a,c){return c===iy?a.mapping=Ic:c===ry&&(a.mapping=Oc),a}function i(a){if(a&&a.isTexture){const c=a.mapping;if(c===iy||c===ry)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const d=new w8(u.height);return d.fromEquirectangularTexture(n,a),e.set(a,d),a.addEventListener("dispose",r),t(d.texture,a.mapping)}else return null}}return a}function r(a){const c=a.target;c.removeEventListener("dispose",r);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}
const cc=4;
const wE=[.125,.215,.35,.446,.526,.582];
const ka=20;
const Vg=new z2;
const bE=new Rt;
let jg=null;
let Hg=0;
let Gg=0;
let Wg=!1;
const Aa=(1+Math.sqrt(5))/2;
const Jl=1/Aa;
const SE=[new ne(-Aa,Jl,0),new ne(Aa,Jl,0),new ne(-Jl,0,Aa),new ne(Jl,0,Aa),new ne(0,Aa,-Jl),new ne(0,Aa,Jl),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];
class ME{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){jg=this._renderer.getRenderTarget(),Hg=this._renderer.getActiveCubeFace(),Gg=this._renderer.getActiveMipmapLevel(),Wg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=CE(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=TE(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jg,Hg,Gg),this._renderer.xr.enabled=Wg,e.scissorTest=!1,Vf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ic||e.mapping===Oc?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jg=this._renderer.getRenderTarget(),Hg=this._renderer.getActiveCubeFace(),Gg=this._renderer.getActiveMipmapLevel(),Wg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rs,minFilter:rs,generateMipmaps:!1,type:Wd,format:Wr,colorSpace:zc,depthBuffer:!1},r=EE(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=EE(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JW(o)),this._blurMaterial=e9(o,e,t)}return r}_compileMaterial(e){const t=new fe(this._lodPlanes[0],e);this._renderer.compile(t,Vg)}_sceneToCubeUV(e,t,i,r){const c=new ir(90,1,t,i),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,m=p.toneMapping;p.getClearColor(bE),p.toneMapping=Bo,p.autoClear=!1;const v=new ln({name:"PMREM.Background",side:Xi,depthWrite:!1,depthTest:!1}),_=new fe(new rn,v);let w=!1;const x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,w=!0):(v.color.copy(bE),w=!0);for(let g=0;g<6;g++){const b=g%3;b===0?(c.up.set(0,u[g],0),c.lookAt(d[g],0,0)):b===1?(c.up.set(0,0,u[g]),c.lookAt(0,d[g],0)):(c.up.set(0,u[g],0),c.lookAt(0,0,d[g]));const M=this._cubeSize;Vf(r,b*M,g>2?M:0,M,M),p.setRenderTarget(r),w&&p.render(_,c),p.render(e,c)}_.geometry.dispose(),_.material.dispose(),p.toneMapping=m,p.autoClear=f,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ic||e.mapping===Oc;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=CE()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=TE());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new fe(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const u=this._cubeSize;Vf(t,0,0,3*u,2*u),i.setRenderTarget(t),i.render(a,Vg)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=SE[(r-o-1)%SE.length];this._blur(e,o-1,o,a,c)}t.autoClear=i}_blur(e,t,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",o),this._halfBlur(a,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,a,c){const u=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,f=new fe(this._lodPlanes[r],d),m=d.uniforms,v=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*ka-1),w=o/_,x=isFinite(o)?1+Math.floor(p*w):ka;x>ka&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ka}`);const g=[];let b=0;for(let P=0;P<ka;++P){const I=P/w,N=Math.exp(-I*I/2);g.push(N),P===0?b+=N:P<x&&(b+=2*N)}for(let P=0;P<g.length;P++)g[P]=g[P]/b;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=g,m.latitudinal.value=a==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:M}=this;m.dTheta.value=_,m.mipInt.value=M-i;const T=this._sizeLods[r],R=3*T*(r>M-cc?r-M+cc:0),L=4*(this._cubeSize-T);Vf(t,R,L,3*T,2*T),u.setRenderTarget(t),u.render(f,Vg)}}
function JW(n){const e=[],t=[],i=[];let r=n;const o=n-cc+1+wE.length;for(let a=0;a<o;a++){const c=Math.pow(2,r);t.push(c);let u=1/c;a>n-cc?u=wE[a-n+cc-1]:a===0&&(u=0),i.push(u);const d=1/(c-2),p=-d,f=1+d,m=[p,p,f,p,f,f,p,p,f,f,p,f],v=6,_=6,w=3,x=2,g=1,b=new Float32Array(w*_*v),M=new Float32Array(x*_*v),T=new Float32Array(g*_*v);for(let L=0;L<v;L++){const P=L%3*2/3-1,I=L>2?0:-1,N=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];b.set(N,w*_*L),M.set(m,x*_*L);const k=[L,L,L,L,L,L];T.set(k,g*_*L)}const R=new Jn;R.setAttribute("position",new $r(b,w)),R.setAttribute("uv",new $r(M,x)),R.setAttribute("faceIndex",new $r(T,g)),e.push(R),r>cc&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}
function EE(n,e,t){const i=new nl(n,e,t);return i.texture.mapping=Kp,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}
function Vf(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}
function e9(n,e,t){const i=new Float32Array(ka),r=new ne(0,1,0);return new Wo({name:"SphericalGaussianBlur",defines:{n:ka,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:y_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zo,depthTest:!1,depthWrite:!1})}
function TE(){return new Wo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:y_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zo,depthTest:!1,depthWrite:!1})}
function CE(){return new Wo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:y_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zo,depthTest:!1,depthWrite:!1})}
function y_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}
function t9(n){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const u=c.mapping,d=u===iy||u===ry,p=u===Ic||u===Oc;if(d||p){let f=e.get(c);const m=f!==void 0?f.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return t===null&&(t=new ME(n)),f=d?t.fromEquirectangular(c,f):t.fromCubemap(c,f),f.texture.pmremVersion=c.pmremVersion,e.set(c,f),f.texture;if(f!==void 0)return f.texture;{const v=c.image;return d&&v&&v.height>0||p&&v&&r(v)?(t===null&&(t=new ME(n)),f=d?t.fromEquirectangular(c):t.fromCubemap(c),f.texture.pmremVersion=c.pmremVersion,e.set(c,f),c.addEventListener("dispose",o),f.texture):null}}}return c}function r(c){let u=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&u++;return u===d}function o(c){const u=c.target;u.removeEventListener("dispose",o);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}
function n9(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&tc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}
function i9(n,e,t,i){const r={},o=new WeakMap;function a(f){const m=f.target;m.index!==null&&e.remove(m.index);for(const _ in m.attributes)e.remove(m.attributes[_]);m.removeEventListener("dispose",a),delete r[m.id];const v=o.get(m);v&&(e.remove(v),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(f,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,t.memory.geometries++),m}function u(f){const m=f.attributes;for(const v in m)e.update(m[v],n.ARRAY_BUFFER)}function d(f){const m=[],v=f.index,_=f.attributes.position;let w=0;if(v!==null){const b=v.array;w=v.version;for(let M=0,T=b.length;M<T;M+=3){const R=b[M+0],L=b[M+1],P=b[M+2];m.push(R,L,L,P,P,R)}}else if(_!==void 0){const b=_.array;w=_.version;for(let M=0,T=b.length/3-1;M<T;M+=3){const R=M+0,L=M+1,P=M+2;m.push(R,L,L,P,P,R)}}else return;const x=new(m2(m)?w2:_2)(m,1);x.version=w;const g=o.get(f);g&&e.remove(g),o.set(f,x)}function p(f){const m=o.get(f);if(m){const v=f.index;v!==null&&m.version<v.version&&d(f)}else d(f);return o.get(f)}return{get:c,update:u,getWireframeAttribute:p}}
function r9(n,e,t){let i;function r(m){i=m}let o,a;function c(m){o=m.type,a=m.bytesPerElement}function u(m,v){n.drawElements(i,v,o,m*a),t.update(v,i,1)}function d(m,v,_){_!==0&&(n.drawElementsInstanced(i,v,o,m*a,_),t.update(v,i,_))}function p(m,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,o,m,0,_);let x=0;for(let g=0;g<_;g++)x+=v[g];t.update(x,i,1)}function f(m,v,_,w){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<m.length;g++)d(m[g]/a,v[g],w[g]);else{x.multiDrawElementsInstancedWEBGL(i,v,0,o,m,0,w,0,_);let g=0;for(let b=0;b<_;b++)g+=v[b]*w[b];t.update(g,i,1)}}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=f}
function s9(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,c){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=c*(o/3);break;case n.LINES:t.lines+=c*(o/2);break;case n.LINE_STRIP:t.lines+=c*(o-1);break;case n.LINE_LOOP:t.lines+=c*o;break;case n.POINTS:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}
function o9(n,e,t){const i=new WeakMap,r=new Dn;function o(a,c,u){const d=a.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=p!==void 0?p.length:0;let m=i.get(c);if(m===void 0||m.count!==f){let k=function(){I.dispose(),i.delete(c),c.removeEventListener("dispose",k)};var v=k;m!==void 0&&m.texture.dispose();const _=c.morphAttributes.position!==void 0,w=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,g=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],M=c.morphAttributes.color||[];let T=0;_===!0&&(T=1),w===!0&&(T=2),x===!0&&(T=3);let R=c.attributes.position.count*T,L=1;R>e.maxTextureSize&&(L=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const P=new Float32Array(R*L*4*f),I=new v2(P,R,L,f);I.type=Ds,I.needsUpdate=!0;const N=T*4;for(let z=0;z<f;z++){const J=g[z],Z=b[z],K=M[z],me=R*L*4*z;for(let ue=0;ue<J.count;ue++){const oe=ue*N;_===!0&&(r.fromBufferAttribute(J,ue),P[me+oe+0]=r.x,P[me+oe+1]=r.y,P[me+oe+2]=r.z,P[me+oe+3]=0),w===!0&&(r.fromBufferAttribute(Z,ue),P[me+oe+4]=r.x,P[me+oe+5]=r.y,P[me+oe+6]=r.z,P[me+oe+7]=0),x===!0&&(r.fromBufferAttribute(K,ue),P[me+oe+8]=r.x,P[me+oe+9]=r.y,P[me+oe+10]=r.z,P[me+oe+11]=K.itemSize===4?r.w:1)}}m={count:f,texture:I,size:new Ye(R,L)},i.set(c,m),c.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let x=0;x<d.length;x++)_+=d[x];const w=c.morphTargetsRelative?1:1-_;u.getUniforms().setValue(n,"morphTargetBaseInfluence",w),u.getUniforms().setValue(n,"morphTargetInfluences",d)}u.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:o}}
function a9(n,e,t,i){let r=new WeakMap;function o(u){const d=i.render.frame,p=u.geometry,f=e.get(u,p);if(r.get(f)!==d&&(e.update(f),r.set(f,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==d&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),r.set(u,d))),u.isSkinnedMesh){const m=u.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return f}function a(){r=new WeakMap}function c(u){const d=u.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}
const j2=new Pi;
const AE=new A2(1,1);
const H2=new v2;
const G2=new s8;
const W2=new M2;
const RE=[];
const PE=[];
const NE=new Float32Array(16);
const LE=new Float32Array(9);
const kE=new Float32Array(4);
function Zc(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=RE[r];if(o===void 0&&(o=new Float32Array(r),RE[r]=o),e!==0){i.toArray(o,0);for(let a=1,c=0;a!==e;++a)c+=t,n[a].toArray(o,c)}return o}
function ei(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}
function ti(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}
function em(n,e){let t=PE[e];t===void 0&&(t=new Int32Array(e),PE[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}
function l9(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}
function c9(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ei(t,e))return;n.uniform2fv(this.addr,e),ti(t,e)}}
function u9(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ei(t,e))return;n.uniform3fv(this.addr,e),ti(t,e)}}
function d9(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ei(t,e))return;n.uniform4fv(this.addr,e),ti(t,e)}}
function h9(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ei(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ti(t,e)}else{if(ei(t,i))return;kE.set(i),n.uniformMatrix2fv(this.addr,!1,kE),ti(t,i)}}
function f9(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ei(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ti(t,e)}else{if(ei(t,i))return;LE.set(i),n.uniformMatrix3fv(this.addr,!1,LE),ti(t,i)}}
function p9(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ei(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ti(t,e)}else{if(ei(t,i))return;NE.set(i),n.uniformMatrix4fv(this.addr,!1,NE),ti(t,i)}}
function m9(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}
function g9(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ei(t,e))return;n.uniform2iv(this.addr,e),ti(t,e)}}
function v9(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ei(t,e))return;n.uniform3iv(this.addr,e),ti(t,e)}}
function y9(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ei(t,e))return;n.uniform4iv(this.addr,e),ti(t,e)}}
function x9(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}
function _9(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ei(t,e))return;n.uniform2uiv(this.addr,e),ti(t,e)}}
function w9(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ei(t,e))return;n.uniform3uiv(this.addr,e),ti(t,e)}}
function b9(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ei(t,e))return;n.uniform4uiv(this.addr,e),ti(t,e)}}
function S9(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(AE.compareFunction=p2,o=AE):o=j2,t.setTexture2D(e||o,r)}
function M9(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||G2,r)}
function E9(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||W2,r)}
function T9(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||H2,r)}
function C9(n){switch(n){case 5126:return l9;case 35664:return c9;case 35665:return u9;case 35666:return d9;case 35674:return h9;case 35675:return f9;case 35676:return p9;case 5124:case 35670:return m9;case 35667:case 35671:return g9;case 35668:case 35672:return v9;case 35669:case 35673:return y9;case 5125:return x9;case 36294:return _9;case 36295:return w9;case 36296:return b9;case 35678:case 36198:case 36298:case 36306:case 35682:return S9;case 35679:case 36299:case 36307:return M9;case 35680:case 36300:case 36308:case 36293:return E9;case 36289:case 36303:case 36311:case 36292:return T9}}
function A9(n,e){n.uniform1fv(this.addr,e)}
function R9(n,e){const t=Zc(e,this.size,2);n.uniform2fv(this.addr,t)}
function P9(n,e){const t=Zc(e,this.size,3);n.uniform3fv(this.addr,t)}
function N9(n,e){const t=Zc(e,this.size,4);n.uniform4fv(this.addr,t)}
function L9(n,e){const t=Zc(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}
function k9(n,e){const t=Zc(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}
function D9(n,e){const t=Zc(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}
function I9(n,e){n.uniform1iv(this.addr,e)}
function O9(n,e){n.uniform2iv(this.addr,e)}
function U9(n,e){n.uniform3iv(this.addr,e)}
function F9(n,e){n.uniform4iv(this.addr,e)}
function z9(n,e){n.uniform1uiv(this.addr,e)}
function B9(n,e){n.uniform2uiv(this.addr,e)}
function V9(n,e){n.uniform3uiv(this.addr,e)}
function j9(n,e){n.uniform4uiv(this.addr,e)}
function H9(n,e,t){const i=this.cache,r=e.length,o=em(t,r);ei(i,o)||(n.uniform1iv(this.addr,o),ti(i,o));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||j2,o[a])}
function G9(n,e,t){const i=this.cache,r=e.length,o=em(t,r);ei(i,o)||(n.uniform1iv(this.addr,o),ti(i,o));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||G2,o[a])}
function W9(n,e,t){const i=this.cache,r=e.length,o=em(t,r);ei(i,o)||(n.uniform1iv(this.addr,o),ti(i,o));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||W2,o[a])}
function $9(n,e,t){const i=this.cache,r=e.length,o=em(t,r);ei(i,o)||(n.uniform1iv(this.addr,o),ti(i,o));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||H2,o[a])}
function q9(n){switch(n){case 5126:return A9;case 35664:return R9;case 35665:return P9;case 35666:return N9;case 35674:return L9;case 35675:return k9;case 35676:return D9;case 5124:case 35670:return I9;case 35667:case 35671:return O9;case 35668:case 35672:return U9;case 35669:case 35673:return F9;case 5125:return z9;case 36294:return B9;case 36295:return V9;case 36296:return j9;case 35678:case 36198:case 36298:case 36306:case 35682:return H9;case 35679:case 36299:case 36307:return G9;case 35680:case 36300:case 36308:case 36293:return W9;case 36289:case 36303:case 36311:case 36292:return $9}}
class X9{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=C9(t.type)}}
class Y9{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=q9(t.type)}}
class K9{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const c=r[o];c.setValue(e,t[c.id],i)}}}
const $g=/(\w+)(\])?(\[|\.)?/g;
function DE(n,e){n.seq.push(e),n.map[e.id]=e}
function Z9(n,e,t){const i=n.name,r=i.length;for($g.lastIndex=0;;){const o=$g.exec(i),a=$g.lastIndex;let c=o[1];const u=o[2]==="]",d=o[3];if(u&&(c=c|0),d===void 0||d==="["&&a+2===r){DE(t,d===void 0?new X9(c,n,e):new Y9(c,n,e));break}else{let f=t.map[c];f===void 0&&(f=new K9(c),DE(t,f)),t=f}}}
class up{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),a=e.getUniformLocation(t,o.name);Z9(o,a,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,a=t.length;o!==a;++o){const c=t[o],u=i[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in t&&i.push(a)}return i}}
function IE(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}
const Q9=37297;
let J9=0;
function e7(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=r;a<o;a++){const c=a+1;i.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return i.join(`
`)}
const OE=new jt;
function t7(n){sn._getMatrix(OE,sn.workingColorSpace,n);const e=`mat3( ${OE.elements.map(t=>t.toFixed(4))} )`;switch(sn.getTransfer(n)){case Cp:return[e,"LinearTransferOETF"];case fn:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}
function UE(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+e7(n.getShaderSource(e),a)}else return r}
function n7(n,e){const t=t7(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}
function i7(n,e){let t;switch(e){case Pj:t="Linear";break;case Nj:t="Reinhard";break;case Lj:t="Cineon";break;case kj:t="ACESFilmic";break;case Ij:t="AgX";break;case Oj:t="Neutral";break;case Dj:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}
const jf=new ne;
function r7(){sn.getLuminanceCoefficients(jf);const n=jf.x.toFixed(4),e=jf.y.toFixed(4),t=jf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}
function s7(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zu).join(`
`)}
function o7(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}
function a7(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),a=o.name;let c=1;o.type===n.FLOAT_MAT2&&(c=2),o.type===n.FLOAT_MAT3&&(c=3),o.type===n.FLOAT_MAT4&&(c=4),t[a]={type:o.type,location:n.getAttribLocation(e,a),locationSize:c}}return t}
function Zu(n){return n!==""}
function FE(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}
function zE(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}
const l7=/^[ \t]*#include +<([\w\d./]+)>/gm;
function zy(n){return n.replace(l7,u7)}
const c7=new Map;
function u7(n,e){let t=Ht[e];if(t===void 0){const i=c7.get(e);if(i!==void 0)t=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zy(t)}
const d7=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function BE(n){return n.replace(d7,h7)}
function h7(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}
function VE(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}
function f7(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===t2?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===n2?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rs&&(e="SHADOWMAP_TYPE_VSM"),e}
function p7(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ic:case Oc:e="ENVMAP_TYPE_CUBE";break;case Kp:e="ENVMAP_TYPE_CUBE_UV";break}return e}
function m7(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Oc:e="ENVMAP_MODE_REFRACTION";break}return e}
function g7(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case i2:e="ENVMAP_BLENDING_MULTIPLY";break;case Aj:e="ENVMAP_BLENDING_MIX";break;case Rj:e="ENVMAP_BLENDING_ADD";break}return e}
function v7(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}
function y7(n,e,t,i){const r=n.getContext(),o=t.defines;let a=t.vertexShader,c=t.fragmentShader;const u=f7(t),d=p7(t),p=m7(t),f=g7(t),m=v7(t),v=s7(t),_=o7(o),w=r.createProgram();let x,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zu).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zu).join(`
`),g.length>0&&(g+=`
`)):(x=[VE(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zu).join(`
`),g=[VE(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bo?"#define TONE_MAPPING":"",t.toneMapping!==Bo?Ht.tonemapping_pars_fragment:"",t.toneMapping!==Bo?i7("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,n7("linearToOutputTexel",t.outputColorSpace),r7(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zu).join(`
`)),a=zy(a),a=FE(a,t),a=zE(a,t),c=zy(c),c=FE(c,t),c=zE(c,t),a=BE(a),c=BE(c),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===HM?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===HM?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=b+x+a,T=b+g+c,R=IE(r,r.VERTEX_SHADER,M),L=IE(r,r.FRAGMENT_SHADER,T);r.attachShader(w,R),r.attachShader(w,L),t.index0AttributeName!==void 0?r.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function P(z){if(n.debug.checkShaderErrors){const J=r.getProgramInfoLog(w).trim(),Z=r.getShaderInfoLog(R).trim(),K=r.getShaderInfoLog(L).trim();let me=!0,ue=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(me=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,w,R,L);else{const oe=UE(r,R,"vertex"),V=UE(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+J+`
`+oe+`
`+V)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Z===""||K==="")&&(ue=!1);ue&&(z.diagnostics={runnable:me,programLog:J,vertexShader:{log:Z,prefix:x},fragmentShader:{log:K,prefix:g}})}r.deleteShader(R),r.deleteShader(L),I=new up(r,w),N=a7(r,w)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let N;this.getAttributes=function(){return N===void 0&&P(this),N};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(w,Q9)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J9++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=R,this.fragmentShader=L,this}
let x7=0;
class _7{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new w7(e),t.set(e,i)),i}}
class w7{constructor(e){this.id=x7++,this.code=e,this.usedTimes=0}}
function b7(n,e,t,i,r,o,a){const c=new y2,u=new _7,d=new Set,p=[],f=r.logarithmicDepthBuffer,m=r.vertexTextures;let v=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(N){return d.add(N),N===0?"uv":`uv${N}`}function x(N,k,z,J,Z){const K=J.fog,me=Z.geometry,ue=N.isMeshStandardMaterial?J.environment:null,oe=(N.isMeshStandardMaterial?t:e).get(N.envMap||ue),V=oe&&oe.mapping===Kp?oe.image.height:null,te=_[N.type];N.precision!==null&&(v=r.getMaxPrecision(N.precision),v!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",v,"instead."));const X=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,j=X!==void 0?X.length:0;let de=0;me.morphAttributes.position!==void 0&&(de=1),me.morphAttributes.normal!==void 0&&(de=2),me.morphAttributes.color!==void 0&&(de=3);let Ue,pe,_e,Me;if(te){const Yt=ns[te];Ue=Yt.vertexShader,pe=Yt.fragmentShader}else Ue=N.vertexShader,pe=N.fragmentShader,u.update(N),_e=u.getVertexShaderID(N),Me=u.getFragmentShaderID(N);const Pe=n.getRenderTarget(),Ve=n.state.buffers.depth.getReversed(),He=Z.isInstancedMesh===!0,ft=Z.isBatchedMesh===!0,Ft=!!N.map,ke=!!N.matcap,Bt=!!oe,H=!!N.aoMap,je=!!N.lightMap,Le=!!N.bumpMap,Ke=!!N.normalMap,Oe=!!N.displacementMap,it=!!N.emissiveMap,qe=!!N.metalnessMap,q=!!N.roughnessMap,F=N.anisotropy>0,ge=N.clearcoat>0,Se=N.dispersion>0,De=N.iridescence>0,Ae=N.sheen>0,et=N.transmission>0,Xe=F&&!!N.anisotropyMap,Ze=ge&&!!N.clearcoatMap,Ot=ge&&!!N.clearcoatNormalMap,Fe=ge&&!!N.clearcoatRoughnessMap,ct=De&&!!N.iridescenceMap,xt=De&&!!N.iridescenceThicknessMap,Ct=Ae&&!!N.sheenColorMap,ot=Ae&&!!N.sheenRoughnessMap,Et=!!N.specularMap,Lt=!!N.specularColorMap,Jt=!!N.specularIntensityMap,se=et&&!!N.transmissionMap,Je=et&&!!N.thicknessMap,Te=!!N.gradientMap,Ne=!!N.alphaMap,rt=N.alphaTest>0,Qe=!!N.alphaHash,It=!!N.extensions;let gn=Bo;N.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(gn=n.toneMapping);const In={shaderID:te,shaderType:N.type,shaderName:N.name,vertexShader:Ue,fragmentShader:pe,defines:N.defines,customVertexShaderID:_e,customFragmentShaderID:Me,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:v,batching:ft,batchingColor:ft&&Z._colorsTexture!==null,instancing:He,instancingColor:He&&Z.instanceColor!==null,instancingMorph:He&&Z.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Pe===null?n.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:zc,alphaToCoverage:!!N.alphaToCoverage,map:Ft,matcap:ke,envMap:Bt,envMapMode:Bt&&oe.mapping,envMapCubeUVHeight:V,aoMap:H,lightMap:je,bumpMap:Le,normalMap:Ke,displacementMap:m&&Oe,emissiveMap:it,normalMapObjectSpace:Ke&&N.normalMapType===Bj,normalMapTangentSpace:Ke&&N.normalMapType===u_,metalnessMap:qe,roughnessMap:q,anisotropy:F,anisotropyMap:Xe,clearcoat:ge,clearcoatMap:Ze,clearcoatNormalMap:Ot,clearcoatRoughnessMap:Fe,dispersion:Se,iridescence:De,iridescenceMap:ct,iridescenceThicknessMap:xt,sheen:Ae,sheenColorMap:Ct,sheenRoughnessMap:ot,specularMap:Et,specularColorMap:Lt,specularIntensityMap:Jt,transmission:et,transmissionMap:se,thicknessMap:Je,gradientMap:Te,opaque:N.transparent===!1&&N.blending===pc&&N.alphaToCoverage===!1,alphaMap:Ne,alphaTest:rt,alphaHash:Qe,combine:N.combine,mapUv:Ft&&w(N.map.channel),aoMapUv:H&&w(N.aoMap.channel),lightMapUv:je&&w(N.lightMap.channel),bumpMapUv:Le&&w(N.bumpMap.channel),normalMapUv:Ke&&w(N.normalMap.channel),displacementMapUv:Oe&&w(N.displacementMap.channel),emissiveMapUv:it&&w(N.emissiveMap.channel),metalnessMapUv:qe&&w(N.metalnessMap.channel),roughnessMapUv:q&&w(N.roughnessMap.channel),anisotropyMapUv:Xe&&w(N.anisotropyMap.channel),clearcoatMapUv:Ze&&w(N.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&w(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&w(N.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&w(N.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&w(N.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&w(N.sheenColorMap.channel),sheenRoughnessMapUv:ot&&w(N.sheenRoughnessMap.channel),specularMapUv:Et&&w(N.specularMap.channel),specularColorMapUv:Lt&&w(N.specularColorMap.channel),specularIntensityMapUv:Jt&&w(N.specularIntensityMap.channel),transmissionMapUv:se&&w(N.transmissionMap.channel),thicknessMapUv:Je&&w(N.thicknessMap.channel),alphaMapUv:Ne&&w(N.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(Ke||F),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!me.attributes.uv&&(Ft||Ne),fog:!!K,useFog:N.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ve,skinning:Z.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:de,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:N.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:gn,decodeVideoTexture:Ft&&N.map.isVideoTexture===!0&&sn.getTransfer(N.map.colorSpace)===fn,decodeVideoTextureEmissive:it&&N.emissiveMap.isVideoTexture===!0&&sn.getTransfer(N.emissiveMap.colorSpace)===fn,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===_n,flipSided:N.side===Xi,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:It&&N.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&N.extensions.multiDraw===!0||ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return In.vertexUv1s=d.has(1),In.vertexUv2s=d.has(2),In.vertexUv3s=d.has(3),d.clear(),In}function g(N){const k=[];if(N.shaderID?k.push(N.shaderID):(k.push(N.customVertexShaderID),k.push(N.customFragmentShaderID)),N.defines!==void 0)for(const z in N.defines)k.push(z),k.push(N.defines[z]);return N.isRawShaderMaterial===!1&&(b(k,N),M(k,N),k.push(n.outputColorSpace)),k.push(N.customProgramCacheKey),k.join()}function b(N,k){N.push(k.precision),N.push(k.outputColorSpace),N.push(k.envMapMode),N.push(k.envMapCubeUVHeight),N.push(k.mapUv),N.push(k.alphaMapUv),N.push(k.lightMapUv),N.push(k.aoMapUv),N.push(k.bumpMapUv),N.push(k.normalMapUv),N.push(k.displacementMapUv),N.push(k.emissiveMapUv),N.push(k.metalnessMapUv),N.push(k.roughnessMapUv),N.push(k.anisotropyMapUv),N.push(k.clearcoatMapUv),N.push(k.clearcoatNormalMapUv),N.push(k.clearcoatRoughnessMapUv),N.push(k.iridescenceMapUv),N.push(k.iridescenceThicknessMapUv),N.push(k.sheenColorMapUv),N.push(k.sheenRoughnessMapUv),N.push(k.specularMapUv),N.push(k.specularColorMapUv),N.push(k.specularIntensityMapUv),N.push(k.transmissionMapUv),N.push(k.thicknessMapUv),N.push(k.combine),N.push(k.fogExp2),N.push(k.sizeAttenuation),N.push(k.morphTargetsCount),N.push(k.morphAttributeCount),N.push(k.numDirLights),N.push(k.numPointLights),N.push(k.numSpotLights),N.push(k.numSpotLightMaps),N.push(k.numHemiLights),N.push(k.numRectAreaLights),N.push(k.numDirLightShadows),N.push(k.numPointLightShadows),N.push(k.numSpotLightShadows),N.push(k.numSpotLightShadowsWithMaps),N.push(k.numLightProbes),N.push(k.shadowMapType),N.push(k.toneMapping),N.push(k.numClippingPlanes),N.push(k.numClipIntersection),N.push(k.depthPacking)}function M(N,k){c.disableAll(),k.supportsVertexTextures&&c.enable(0),k.instancing&&c.enable(1),k.instancingColor&&c.enable(2),k.instancingMorph&&c.enable(3),k.matcap&&c.enable(4),k.envMap&&c.enable(5),k.normalMapObjectSpace&&c.enable(6),k.normalMapTangentSpace&&c.enable(7),k.clearcoat&&c.enable(8),k.iridescence&&c.enable(9),k.alphaTest&&c.enable(10),k.vertexColors&&c.enable(11),k.vertexAlphas&&c.enable(12),k.vertexUv1s&&c.enable(13),k.vertexUv2s&&c.enable(14),k.vertexUv3s&&c.enable(15),k.vertexTangents&&c.enable(16),k.anisotropy&&c.enable(17),k.alphaHash&&c.enable(18),k.batching&&c.enable(19),k.dispersion&&c.enable(20),k.batchingColor&&c.enable(21),N.push(c.mask),c.disableAll(),k.fog&&c.enable(0),k.useFog&&c.enable(1),k.flatShading&&c.enable(2),k.logarithmicDepthBuffer&&c.enable(3),k.reverseDepthBuffer&&c.enable(4),k.skinning&&c.enable(5),k.morphTargets&&c.enable(6),k.morphNormals&&c.enable(7),k.morphColors&&c.enable(8),k.premultipliedAlpha&&c.enable(9),k.shadowMapEnabled&&c.enable(10),k.doubleSided&&c.enable(11),k.flipSided&&c.enable(12),k.useDepthPacking&&c.enable(13),k.dithering&&c.enable(14),k.transmission&&c.enable(15),k.sheen&&c.enable(16),k.opaque&&c.enable(17),k.pointsUvs&&c.enable(18),k.decodeVideoTexture&&c.enable(19),k.decodeVideoTextureEmissive&&c.enable(20),k.alphaToCoverage&&c.enable(21),N.push(c.mask)}function T(N){const k=_[N.type];let z;if(k){const J=ns[k];z=v8.clone(J.uniforms)}else z=N.uniforms;return z}function R(N,k){let z;for(let J=0,Z=p.length;J<Z;J++){const K=p[J];if(K.cacheKey===k){z=K,++z.usedTimes;break}}return z===void 0&&(z=new y7(n,k,N,o),p.push(z)),z}function L(N){if(--N.usedTimes===0){const k=p.indexOf(N);p[k]=p[p.length-1],p.pop(),N.destroy()}}function P(N){u.remove(N)}function I(){u.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:T,acquireProgram:R,releaseProgram:L,releaseShaderCache:P,programs:p,dispose:I}}
function S7(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let c=n.get(a);return c===void 0&&(c={},n.set(a,c)),c}function i(a){n.delete(a)}function r(a,c,u){n.get(a)[c]=u}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:o}}
function M7(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}
function jE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}
function HE(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function a(f,m,v,_,w,x){let g=n[e];return g===void 0?(g={id:f.id,object:f,geometry:m,material:v,groupOrder:_,renderOrder:f.renderOrder,z:w,group:x},n[e]=g):(g.id=f.id,g.object=f,g.geometry=m,g.material=v,g.groupOrder=_,g.renderOrder=f.renderOrder,g.z=w,g.group=x),e++,g}function c(f,m,v,_,w,x){const g=a(f,m,v,_,w,x);v.transmission>0?i.push(g):v.transparent===!0?r.push(g):t.push(g)}function u(f,m,v,_,w,x){const g=a(f,m,v,_,w,x);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):t.unshift(g)}function d(f,m){t.length>1&&t.sort(f||M7),i.length>1&&i.sort(m||jE),r.length>1&&r.sort(m||jE)}function p(){for(let f=e,m=n.length;f<m;f++){const v=n[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:c,unshift:u,finish:p,sort:d}}
function E7(){let n=new WeakMap;function e(i,r){const o=n.get(i);let a;return o===void 0?(a=new HE,n.set(i,[a])):r>=o.length?(a=new HE,o.push(a)):a=o[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}
function T7(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new Rt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return n[e.id]=t,t}}}
function C7(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}
let A7=0;
function R7(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}
function P7(n){const e=new T7,t=C7(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new ne);const r=new ne,o=new Mn,a=new Mn;function c(d){let p=0,f=0,m=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let v=0,_=0,w=0,x=0,g=0,b=0,M=0,T=0,R=0,L=0,P=0;d.sort(R7);for(let N=0,k=d.length;N<k;N++){const z=d[N],J=z.color,Z=z.intensity,K=z.distance,me=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=J.r*Z,f+=J.g*Z,m+=J.b*Z;else if(z.isLightProbe){for(let ue=0;ue<9;ue++)i.probe[ue].addScaledVector(z.sh.coefficients[ue],Z);P++}else if(z.isDirectionalLight){const ue=e.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const oe=z.shadow,V=t.get(z);V.shadowIntensity=oe.intensity,V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,i.directionalShadow[v]=V,i.directionalShadowMap[v]=me,i.directionalShadowMatrix[v]=z.shadow.matrix,b++}i.directional[v]=ue,v++}else if(z.isSpotLight){const ue=e.get(z);ue.position.setFromMatrixPosition(z.matrixWorld),ue.color.copy(J).multiplyScalar(Z),ue.distance=K,ue.coneCos=Math.cos(z.angle),ue.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ue.decay=z.decay,i.spot[w]=ue;const oe=z.shadow;if(z.map&&(i.spotLightMap[R]=z.map,R++,oe.updateMatrices(z),z.castShadow&&L++),i.spotLightMatrix[w]=oe.matrix,z.castShadow){const V=t.get(z);V.shadowIntensity=oe.intensity,V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,i.spotShadow[w]=V,i.spotShadowMap[w]=me,T++}w++}else if(z.isRectAreaLight){const ue=e.get(z);ue.color.copy(J).multiplyScalar(Z),ue.halfWidth.set(z.width*.5,0,0),ue.halfHeight.set(0,z.height*.5,0),i.rectArea[x]=ue,x++}else if(z.isPointLight){const ue=e.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity),ue.distance=z.distance,ue.decay=z.decay,z.castShadow){const oe=z.shadow,V=t.get(z);V.shadowIntensity=oe.intensity,V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,V.shadowCameraNear=oe.camera.near,V.shadowCameraFar=oe.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=me,i.pointShadowMatrix[_]=z.shadow.matrix,M++}i.point[_]=ue,_++}else if(z.isHemisphereLight){const ue=e.get(z);ue.skyColor.copy(z.color).multiplyScalar(Z),ue.groundColor.copy(z.groundColor).multiplyScalar(Z),i.hemi[g]=ue,g++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=tt.LTC_FLOAT_1,i.rectAreaLTC2=tt.LTC_FLOAT_2):(i.rectAreaLTC1=tt.LTC_HALF_1,i.rectAreaLTC2=tt.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=f,i.ambient[2]=m;const I=i.hash;(I.directionalLength!==v||I.pointLength!==_||I.spotLength!==w||I.rectAreaLength!==x||I.hemiLength!==g||I.numDirectionalShadows!==b||I.numPointShadows!==M||I.numSpotShadows!==T||I.numSpotMaps!==R||I.numLightProbes!==P)&&(i.directional.length=v,i.spot.length=w,i.rectArea.length=x,i.point.length=_,i.hemi.length=g,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=T+R-L,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,I.directionalLength=v,I.pointLength=_,I.spotLength=w,I.rectAreaLength=x,I.hemiLength=g,I.numDirectionalShadows=b,I.numPointShadows=M,I.numSpotShadows=T,I.numSpotMaps=R,I.numLightProbes=P,i.version=A7++)}function u(d,p){let f=0,m=0,v=0,_=0,w=0;const x=p.matrixWorldInverse;for(let g=0,b=d.length;g<b;g++){const M=d[g];if(M.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(x),f++}else if(M.isSpotLight){const T=i.spot[v];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(x),v++}else if(M.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(x),a.identity(),o.copy(M.matrixWorld),o.premultiply(x),a.extractRotation(o),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const T=i.point[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(x),m++}else if(M.isHemisphereLight){const T=i.hemi[w];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(x),w++}}}return{setup:c,setupView:u,state:i}}
function GE(n){const e=new P7(n),t=[],i=[];function r(p){d.camera=p,t.length=0,i.length=0}function o(p){t.push(p)}function a(p){i.push(p)}function c(){e.setup(t)}function u(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a}}
function N7(n){let e=new WeakMap;function t(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new GE(n),e.set(r,[c])):o>=a.length?(c=new GE(n),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:t,dispose:i}}
const L7=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;
const k7=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function D7(n,e,t){let i=new f_;const r=new Ye,o=new Ye,a=new Dn,c=new rH({depthPacking:zj}),u=new sH,d={},p=t.maxTextureSize,f={[Go]:Xi,[Xi]:Go,[_n]:_n},m=new Wo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:L7,fragmentShader:k7}),v=m.clone();v.defines.HORIZONTAL_PASS=1;const _=new Jn;_.setAttribute("position",new $r(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new fe(_,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=t2;let g=this.type;this.render=function(L,P,I){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;const N=n.getRenderTarget(),k=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),J=n.state;J.setBlending(zo),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Z=g!==Rs&&this.type===Rs,K=g===Rs&&this.type!==Rs;for(let me=0,ue=L.length;me<ue;me++){const oe=L[me],V=oe.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const te=V.getFrameExtents();if(r.multiply(te),o.copy(V.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(o.x=Math.floor(p/te.x),r.x=o.x*te.x,V.mapSize.x=o.x),r.y>p&&(o.y=Math.floor(p/te.y),r.y=o.y*te.y,V.mapSize.y=o.y)),V.map===null||Z===!0||K===!0){const j=this.type!==Rs?{minFilter:Ui,magFilter:Ui}:{};V.map!==null&&V.map.dispose(),V.map=new nl(r.x,r.y,j),V.map.texture.name=oe.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const X=V.getViewportCount();for(let j=0;j<X;j++){const de=V.getViewport(j);a.set(o.x*de.x,o.y*de.y,o.x*de.z,o.y*de.w),J.viewport(a),V.updateMatrices(oe,j),i=V.getFrustum(),T(P,I,V.camera,oe,this.type)}V.isPointLightShadow!==!0&&this.type===Rs&&b(V,I),V.needsUpdate=!1}g=this.type,x.needsUpdate=!1,n.setRenderTarget(N,k,z)};function b(L,P){const I=e.update(w);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,v.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new nl(r.x,r.y)),m.uniforms.shadow_pass.value=L.map.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(P,null,I,m,w,null),v.uniforms.shadow_pass.value=L.mapPass.texture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(P,null,I,v,w,null)}function M(L,P,I,N){let k=null;const z=I.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(z!==void 0)k=z;else if(k=I.isPointLight===!0?u:c,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const J=k.uuid,Z=P.uuid;let K=d[J];K===void 0&&(K={},d[J]=K);let me=K[Z];me===void 0&&(me=k.clone(),K[Z]=me,P.addEventListener("dispose",R)),k=me}if(k.visible=P.visible,k.wireframe=P.wireframe,N===Rs?k.side=P.shadowSide!==null?P.shadowSide:P.side:k.side=P.shadowSide!==null?P.shadowSide:f[P.side],k.alphaMap=P.alphaMap,k.alphaTest=P.alphaTest,k.map=P.map,k.clipShadows=P.clipShadows,k.clippingPlanes=P.clippingPlanes,k.clipIntersection=P.clipIntersection,k.displacementMap=P.displacementMap,k.displacementScale=P.displacementScale,k.displacementBias=P.displacementBias,k.wireframeLinewidth=P.wireframeLinewidth,k.linewidth=P.linewidth,I.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const J=n.properties.get(k);J.light=I}return k}function T(L,P,I,N,k){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&k===Rs)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,L.matrixWorld);const Z=e.update(L),K=L.material;if(Array.isArray(K)){const me=Z.groups;for(let ue=0,oe=me.length;ue<oe;ue++){const V=me[ue],te=K[V.materialIndex];if(te&&te.visible){const X=M(L,te,N,k);L.onBeforeShadow(n,L,P,I,Z,X,V),n.renderBufferDirect(I,null,Z,X,L,V),L.onAfterShadow(n,L,P,I,Z,X,V)}}}else if(K.visible){const me=M(L,K,N,k);L.onBeforeShadow(n,L,P,I,Z,me,null),n.renderBufferDirect(I,null,Z,me,L,null),L.onAfterShadow(n,L,P,I,Z,me,null)}}const J=L.children;for(let Z=0,K=J.length;Z<K;Z++)T(J[Z],P,I,N,k)}function R(L){L.target.removeEventListener("dispose",R);for(const I in d){const N=d[I],k=L.target.uuid;k in N&&(N[k].dispose(),delete N[k])}}}
const I7={[Kv]:Zv,[Qv]:ty,[Jv]:ny,[Dc]:ey,[Zv]:Kv,[ty]:Qv,[ny]:Jv,[ey]:Dc};
function O7(n,e){function t(){let se=!1;const Je=new Dn;let Te=null;const Ne=new Dn(0,0,0,0);return{setMask:function(rt){Te!==rt&&!se&&(n.colorMask(rt,rt,rt,rt),Te=rt)},setLocked:function(rt){se=rt},setClear:function(rt,Qe,It,gn,In){In===!0&&(rt*=gn,Qe*=gn,It*=gn),Je.set(rt,Qe,It,gn),Ne.equals(Je)===!1&&(n.clearColor(rt,Qe,It,gn),Ne.copy(Je))},reset:function(){se=!1,Te=null,Ne.set(-1,0,0,0)}}}function i(){let se=!1,Je=!1,Te=null,Ne=null,rt=null;return{setReversed:function(Qe){if(Je!==Qe){const It=e.get("EXT_clip_control");Je?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const gn=rt;rt=null,this.setClear(gn)}Je=Qe},getReversed:function(){return Je},setTest:function(Qe){Qe?Pe(n.DEPTH_TEST):Ve(n.DEPTH_TEST)},setMask:function(Qe){Te!==Qe&&!se&&(n.depthMask(Qe),Te=Qe)},setFunc:function(Qe){if(Je&&(Qe=I7[Qe]),Ne!==Qe){switch(Qe){case Kv:n.depthFunc(n.NEVER);break;case Zv:n.depthFunc(n.ALWAYS);break;case Qv:n.depthFunc(n.LESS);break;case Dc:n.depthFunc(n.LEQUAL);break;case Jv:n.depthFunc(n.EQUAL);break;case ey:n.depthFunc(n.GEQUAL);break;case ty:n.depthFunc(n.GREATER);break;case ny:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=Qe}},setLocked:function(Qe){se=Qe},setClear:function(Qe){rt!==Qe&&(Je&&(Qe=1-Qe),n.clearDepth(Qe),rt=Qe)},reset:function(){se=!1,Te=null,Ne=null,rt=null,Je=!1}}}function r(){let se=!1,Je=null,Te=null,Ne=null,rt=null,Qe=null,It=null,gn=null,In=null;return{setTest:function(Yt){se||(Yt?Pe(n.STENCIL_TEST):Ve(n.STENCIL_TEST))},setMask:function(Yt){Je!==Yt&&!se&&(n.stencilMask(Yt),Je=Yt)},setFunc:function(Yt,ui,dn){(Te!==Yt||Ne!==ui||rt!==dn)&&(n.stencilFunc(Yt,ui,dn),Te=Yt,Ne=ui,rt=dn)},setOp:function(Yt,ui,dn){(Qe!==Yt||It!==ui||gn!==dn)&&(n.stencilOp(Yt,ui,dn),Qe=Yt,It=ui,gn=dn)},setLocked:function(Yt){se=Yt},setClear:function(Yt){In!==Yt&&(n.clearStencil(Yt),In=Yt)},reset:function(){se=!1,Je=null,Te=null,Ne=null,rt=null,Qe=null,It=null,gn=null,In=null}}}const o=new t,a=new i,c=new r,u=new WeakMap,d=new WeakMap;let p={},f={},m=new WeakMap,v=[],_=null,w=!1,x=null,g=null,b=null,M=null,T=null,R=null,L=null,P=new Rt(0,0,0),I=0,N=!1,k=null,z=null,J=null,Z=null,K=null;const me=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,oe=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(V)[1]),ue=oe>=1):V.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ue=oe>=2);let te=null,X={};const j=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),Ue=new Dn().fromArray(j),pe=new Dn().fromArray(de);function _e(se,Je,Te,Ne){const rt=new Uint8Array(4),Qe=n.createTexture();n.bindTexture(se,Qe),n.texParameteri(se,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(se,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<Te;It++)se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?n.texImage3D(Je,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,rt):n.texImage2D(Je+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,rt);return Qe}const Me={};Me[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),c.setClear(0),Pe(n.DEPTH_TEST),a.setFunc(Dc),Le(!1),Ke(FM),Pe(n.CULL_FACE),H(zo);function Pe(se){p[se]!==!0&&(n.enable(se),p[se]=!0)}function Ve(se){p[se]!==!1&&(n.disable(se),p[se]=!1)}function He(se,Je){return f[se]!==Je?(n.bindFramebuffer(se,Je),f[se]=Je,se===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Je),se===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Je),!0):!1}function ft(se,Je){let Te=v,Ne=!1;if(se){Te=m.get(Je),Te===void 0&&(Te=[],m.set(Je,Te));const rt=se.textures;if(Te.length!==rt.length||Te[0]!==n.COLOR_ATTACHMENT0){for(let Qe=0,It=rt.length;Qe<It;Qe++)Te[Qe]=n.COLOR_ATTACHMENT0+Qe;Te.length=rt.length,Ne=!0}}else Te[0]!==n.BACK&&(Te[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(Te)}function Ft(se){return _!==se?(n.useProgram(se),_=se,!0):!1}const ke={[Pa]:n.FUNC_ADD,[dj]:n.FUNC_SUBTRACT,[hj]:n.FUNC_REVERSE_SUBTRACT};ke[fj]=n.MIN,ke[pj]=n.MAX;const Bt={[mj]:n.ZERO,[gj]:n.ONE,[vj]:n.SRC_COLOR,[Xv]:n.SRC_ALPHA,[Sj]:n.SRC_ALPHA_SATURATE,[wj]:n.DST_COLOR,[xj]:n.DST_ALPHA,[yj]:n.ONE_MINUS_SRC_COLOR,[Yv]:n.ONE_MINUS_SRC_ALPHA,[bj]:n.ONE_MINUS_DST_COLOR,[_j]:n.ONE_MINUS_DST_ALPHA,[Mj]:n.CONSTANT_COLOR,[Ej]:n.ONE_MINUS_CONSTANT_COLOR,[Tj]:n.CONSTANT_ALPHA,[Cj]:n.ONE_MINUS_CONSTANT_ALPHA};function H(se,Je,Te,Ne,rt,Qe,It,gn,In,Yt){if(se===zo){w===!0&&(Ve(n.BLEND),w=!1);return}if(w===!1&&(Pe(n.BLEND),w=!0),se!==uj){if(se!==x||Yt!==N){if((g!==Pa||T!==Pa)&&(n.blendEquation(n.FUNC_ADD),g=Pa,T=Pa),Yt)switch(se){case pc:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zM:n.blendFunc(n.ONE,n.ONE);break;case BM:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case VM:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",se);break}else switch(se){case pc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zM:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case BM:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case VM:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",se);break}b=null,M=null,R=null,L=null,P.set(0,0,0),I=0,x=se,N=Yt}return}rt=rt||Je,Qe=Qe||Te,It=It||Ne,(Je!==g||rt!==T)&&(n.blendEquationSeparate(ke[Je],ke[rt]),g=Je,T=rt),(Te!==b||Ne!==M||Qe!==R||It!==L)&&(n.blendFuncSeparate(Bt[Te],Bt[Ne],Bt[Qe],Bt[It]),b=Te,M=Ne,R=Qe,L=It),(gn.equals(P)===!1||In!==I)&&(n.blendColor(gn.r,gn.g,gn.b,In),P.copy(gn),I=In),x=se,N=!1}function je(se,Je){se.side===_n?Ve(n.CULL_FACE):Pe(n.CULL_FACE);let Te=se.side===Xi;Je&&(Te=!Te),Le(Te),se.blending===pc&&se.transparent===!1?H(zo):H(se.blending,se.blendEquation,se.blendSrc,se.blendDst,se.blendEquationAlpha,se.blendSrcAlpha,se.blendDstAlpha,se.blendColor,se.blendAlpha,se.premultipliedAlpha),a.setFunc(se.depthFunc),a.setTest(se.depthTest),a.setMask(se.depthWrite),o.setMask(se.colorWrite);const Ne=se.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(se.stencilWriteMask),c.setFunc(se.stencilFunc,se.stencilRef,se.stencilFuncMask),c.setOp(se.stencilFail,se.stencilZFail,se.stencilZPass)),it(se.polygonOffset,se.polygonOffsetFactor,se.polygonOffsetUnits),se.alphaToCoverage===!0?Pe(n.SAMPLE_ALPHA_TO_COVERAGE):Ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function Le(se){k!==se&&(se?n.frontFace(n.CW):n.frontFace(n.CCW),k=se)}function Ke(se){se!==lj?(Pe(n.CULL_FACE),se!==z&&(se===FM?n.cullFace(n.BACK):se===cj?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ve(n.CULL_FACE),z=se}function Oe(se){se!==J&&(ue&&n.lineWidth(se),J=se)}function it(se,Je,Te){se?(Pe(n.POLYGON_OFFSET_FILL),(Z!==Je||K!==Te)&&(n.polygonOffset(Je,Te),Z=Je,K=Te)):Ve(n.POLYGON_OFFSET_FILL)}function qe(se){se?Pe(n.SCISSOR_TEST):Ve(n.SCISSOR_TEST)}function q(se){se===void 0&&(se=n.TEXTURE0+me-1),te!==se&&(n.activeTexture(se),te=se)}function F(se,Je,Te){Te===void 0&&(te===null?Te=n.TEXTURE0+me-1:Te=te);let Ne=X[Te];Ne===void 0&&(Ne={type:void 0,texture:void 0},X[Te]=Ne),(Ne.type!==se||Ne.texture!==Je)&&(te!==Te&&(n.activeTexture(Te),te=Te),n.bindTexture(se,Je||Me[se]),Ne.type=se,Ne.texture=Je)}function ge(){const se=X[te];se!==void 0&&se.type!==void 0&&(n.bindTexture(se.type,null),se.type=void 0,se.texture=void 0)}function Se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function De(){try{n.compressedTexImage3D.apply(n,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function Ae(){try{n.texSubImage2D.apply(n,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function et(){try{n.texSubImage3D.apply(n,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function Xe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function Ze(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function Ot(){try{n.texStorage2D.apply(n,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function Fe(){try{n.texStorage3D.apply(n,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function ct(){try{n.texImage2D.apply(n,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function xt(){try{n.texImage3D.apply(n,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function Ct(se){Ue.equals(se)===!1&&(n.scissor(se.x,se.y,se.z,se.w),Ue.copy(se))}function ot(se){pe.equals(se)===!1&&(n.viewport(se.x,se.y,se.z,se.w),pe.copy(se))}function Et(se,Je){let Te=d.get(Je);Te===void 0&&(Te=new WeakMap,d.set(Je,Te));let Ne=Te.get(se);Ne===void 0&&(Ne=n.getUniformBlockIndex(Je,se.name),Te.set(se,Ne))}function Lt(se,Je){const Ne=d.get(Je).get(se);u.get(Je)!==Ne&&(n.uniformBlockBinding(Je,Ne,se.__bindingPointIndex),u.set(Je,Ne))}function Jt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},te=null,X={},f={},m=new WeakMap,v=[],_=null,w=!1,x=null,g=null,b=null,M=null,T=null,R=null,L=null,P=new Rt(0,0,0),I=0,N=!1,k=null,z=null,J=null,Z=null,K=null,Ue.set(0,0,n.canvas.width,n.canvas.height),pe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),a.reset(),c.reset()}return{buffers:{color:o,depth:a,stencil:c},enable:Pe,disable:Ve,bindFramebuffer:He,drawBuffers:ft,useProgram:Ft,setBlending:H,setMaterial:je,setFlipSided:Le,setCullFace:Ke,setLineWidth:Oe,setPolygonOffset:it,setScissorTest:qe,activeTexture:q,bindTexture:F,unbindTexture:ge,compressedTexImage2D:Se,compressedTexImage3D:De,texImage2D:ct,texImage3D:xt,updateUBOMapping:Et,uniformBlockBinding:Lt,texStorage2D:Ot,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:et,compressedTexSubImage2D:Xe,compressedTexSubImage3D:Ze,scissor:Ct,viewport:ot,reset:Jt}}
function U7(n,e,t,i,r,o,a){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ye,p=new WeakMap;let f;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(q,F){return v?new OffscreenCanvas(q,F):Rp("canvas")}function w(q,F,ge){let Se=1;const De=qe(q);if((De.width>ge||De.height>ge)&&(Se=ge/Math.max(De.width,De.height)),Se<1)if(typeof HTMLImageElement<"u"&&q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&q instanceof ImageBitmap||typeof VideoFrame<"u"&&q instanceof VideoFrame){const Ae=Math.floor(Se*De.width),et=Math.floor(Se*De.height);f===void 0&&(f=_(Ae,et));const Xe=F?_(Ae,et):f;return Xe.width=Ae,Xe.height=et,Xe.getContext("2d").drawImage(q,0,0,Ae,et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+De.width+"x"+De.height+") to ("+Ae+"x"+et+")."),Xe}else return"data"in q&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+De.width+"x"+De.height+")."),q;return q}function x(q){return q.generateMipmaps}function g(q){n.generateMipmap(q)}function b(q){return q.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:q.isWebGL3DRenderTarget?n.TEXTURE_3D:q.isWebGLArrayRenderTarget||q.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(q,F,ge,Se,De=!1){if(q!==null){if(n[q]!==void 0)return n[q];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+q+"'")}let Ae=F;if(F===n.RED&&(ge===n.FLOAT&&(Ae=n.R32F),ge===n.HALF_FLOAT&&(Ae=n.R16F),ge===n.UNSIGNED_BYTE&&(Ae=n.R8)),F===n.RED_INTEGER&&(ge===n.UNSIGNED_BYTE&&(Ae=n.R8UI),ge===n.UNSIGNED_SHORT&&(Ae=n.R16UI),ge===n.UNSIGNED_INT&&(Ae=n.R32UI),ge===n.BYTE&&(Ae=n.R8I),ge===n.SHORT&&(Ae=n.R16I),ge===n.INT&&(Ae=n.R32I)),F===n.RG&&(ge===n.FLOAT&&(Ae=n.RG32F),ge===n.HALF_FLOAT&&(Ae=n.RG16F),ge===n.UNSIGNED_BYTE&&(Ae=n.RG8)),F===n.RG_INTEGER&&(ge===n.UNSIGNED_BYTE&&(Ae=n.RG8UI),ge===n.UNSIGNED_SHORT&&(Ae=n.RG16UI),ge===n.UNSIGNED_INT&&(Ae=n.RG32UI),ge===n.BYTE&&(Ae=n.RG8I),ge===n.SHORT&&(Ae=n.RG16I),ge===n.INT&&(Ae=n.RG32I)),F===n.RGB_INTEGER&&(ge===n.UNSIGNED_BYTE&&(Ae=n.RGB8UI),ge===n.UNSIGNED_SHORT&&(Ae=n.RGB16UI),ge===n.UNSIGNED_INT&&(Ae=n.RGB32UI),ge===n.BYTE&&(Ae=n.RGB8I),ge===n.SHORT&&(Ae=n.RGB16I),ge===n.INT&&(Ae=n.RGB32I)),F===n.RGBA_INTEGER&&(ge===n.UNSIGNED_BYTE&&(Ae=n.RGBA8UI),ge===n.UNSIGNED_SHORT&&(Ae=n.RGBA16UI),ge===n.UNSIGNED_INT&&(Ae=n.RGBA32UI),ge===n.BYTE&&(Ae=n.RGBA8I),ge===n.SHORT&&(Ae=n.RGBA16I),ge===n.INT&&(Ae=n.RGBA32I)),F===n.RGB&&ge===n.UNSIGNED_INT_5_9_9_9_REV&&(Ae=n.RGB9_E5),F===n.RGBA){const et=De?Cp:sn.getTransfer(Se);ge===n.FLOAT&&(Ae=n.RGBA32F),ge===n.HALF_FLOAT&&(Ae=n.RGBA16F),ge===n.UNSIGNED_BYTE&&(Ae=et===fn?n.SRGB8_ALPHA8:n.RGBA8),ge===n.UNSIGNED_SHORT_4_4_4_4&&(Ae=n.RGBA4),ge===n.UNSIGNED_SHORT_5_5_5_1&&(Ae=n.RGB5_A1)}return(Ae===n.R16F||Ae===n.R32F||Ae===n.RG16F||Ae===n.RG32F||Ae===n.RGBA16F||Ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Ae}function T(q,F){let ge;return q?F===null||F===tl||F===Uc?ge=n.DEPTH24_STENCIL8:F===Ds?ge=n.DEPTH32F_STENCIL8:F===Md&&(ge=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):F===null||F===tl||F===Uc?ge=n.DEPTH_COMPONENT24:F===Ds?ge=n.DEPTH_COMPONENT32F:F===Md&&(ge=n.DEPTH_COMPONENT16),ge}function R(q,F){return x(q)===!0||q.isFramebufferTexture&&q.minFilter!==Ui&&q.minFilter!==rs?Math.log2(Math.max(F.width,F.height))+1:q.mipmaps!==void 0&&q.mipmaps.length>0?q.mipmaps.length:q.isCompressedTexture&&Array.isArray(q.image)?F.mipmaps.length:1}function L(q){const F=q.target;F.removeEventListener("dispose",L),I(F),F.isVideoTexture&&p.delete(F)}function P(q){const F=q.target;F.removeEventListener("dispose",P),k(F)}function I(q){const F=i.get(q);if(F.__webglInit===void 0)return;const ge=q.source,Se=m.get(ge);if(Se){const De=Se[F.__cacheKey];De.usedTimes--,De.usedTimes===0&&N(q),Object.keys(Se).length===0&&m.delete(ge)}i.remove(q)}function N(q){const F=i.get(q);n.deleteTexture(F.__webglTexture);const ge=q.source,Se=m.get(ge);delete Se[F.__cacheKey],a.memory.textures--}function k(q){const F=i.get(q);if(q.depthTexture&&(q.depthTexture.dispose(),i.remove(q.depthTexture)),q.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(F.__webglFramebuffer[Se]))for(let De=0;De<F.__webglFramebuffer[Se].length;De++)n.deleteFramebuffer(F.__webglFramebuffer[Se][De]);else n.deleteFramebuffer(F.__webglFramebuffer[Se]);F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[Se])}else{if(Array.isArray(F.__webglFramebuffer))for(let Se=0;Se<F.__webglFramebuffer.length;Se++)n.deleteFramebuffer(F.__webglFramebuffer[Se]);else n.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Se=0;Se<F.__webglColorRenderbuffer.length;Se++)F.__webglColorRenderbuffer[Se]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[Se]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}const ge=q.textures;for(let Se=0,De=ge.length;Se<De;Se++){const Ae=i.get(ge[Se]);Ae.__webglTexture&&(n.deleteTexture(Ae.__webglTexture),a.memory.textures--),i.remove(ge[Se])}i.remove(q)}let z=0;function J(){z=0}function Z(){const q=z;return q>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+q+" texture units while this GPU supports only "+r.maxTextures),z+=1,q}function K(q){const F=[];return F.push(q.wrapS),F.push(q.wrapT),F.push(q.wrapR||0),F.push(q.magFilter),F.push(q.minFilter),F.push(q.anisotropy),F.push(q.internalFormat),F.push(q.format),F.push(q.type),F.push(q.generateMipmaps),F.push(q.premultiplyAlpha),F.push(q.flipY),F.push(q.unpackAlignment),F.push(q.colorSpace),F.join()}function me(q,F){const ge=i.get(q);if(q.isVideoTexture&&Oe(q),q.isRenderTargetTexture===!1&&q.version>0&&ge.__version!==q.version){const Se=q.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(ge,q,F);return}}t.bindTexture(n.TEXTURE_2D,ge.__webglTexture,n.TEXTURE0+F)}function ue(q,F){const ge=i.get(q);if(q.version>0&&ge.__version!==q.version){pe(ge,q,F);return}t.bindTexture(n.TEXTURE_2D_ARRAY,ge.__webglTexture,n.TEXTURE0+F)}function oe(q,F){const ge=i.get(q);if(q.version>0&&ge.__version!==q.version){pe(ge,q,F);return}t.bindTexture(n.TEXTURE_3D,ge.__webglTexture,n.TEXTURE0+F)}function V(q,F){const ge=i.get(q);if(q.version>0&&ge.__version!==q.version){_e(ge,q,F);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture,n.TEXTURE0+F)}const te={[sy]:n.REPEAT,[Ua]:n.CLAMP_TO_EDGE,[oy]:n.MIRRORED_REPEAT},X={[Ui]:n.NEAREST,[Uj]:n.NEAREST_MIPMAP_NEAREST,[ff]:n.NEAREST_MIPMAP_LINEAR,[rs]:n.LINEAR,[hg]:n.LINEAR_MIPMAP_NEAREST,[Fa]:n.LINEAR_MIPMAP_LINEAR},j={[Vj]:n.NEVER,[qj]:n.ALWAYS,[jj]:n.LESS,[p2]:n.LEQUAL,[Hj]:n.EQUAL,[$j]:n.GEQUAL,[Gj]:n.GREATER,[Wj]:n.NOTEQUAL};function de(q,F){if(F.type===Ds&&e.has("OES_texture_float_linear")===!1&&(F.magFilter===rs||F.magFilter===hg||F.magFilter===ff||F.magFilter===Fa||F.minFilter===rs||F.minFilter===hg||F.minFilter===ff||F.minFilter===Fa)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(q,n.TEXTURE_WRAP_S,te[F.wrapS]),n.texParameteri(q,n.TEXTURE_WRAP_T,te[F.wrapT]),(q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY)&&n.texParameteri(q,n.TEXTURE_WRAP_R,te[F.wrapR]),n.texParameteri(q,n.TEXTURE_MAG_FILTER,X[F.magFilter]),n.texParameteri(q,n.TEXTURE_MIN_FILTER,X[F.minFilter]),F.compareFunction&&(n.texParameteri(q,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(q,n.TEXTURE_COMPARE_FUNC,j[F.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(F.magFilter===Ui||F.minFilter!==ff&&F.minFilter!==Fa||F.type===Ds&&e.has("OES_texture_float_linear")===!1)return;if(F.anisotropy>1||i.get(F).__currentAnisotropy){const ge=e.get("EXT_texture_filter_anisotropic");n.texParameterf(q,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,r.getMaxAnisotropy())),i.get(F).__currentAnisotropy=F.anisotropy}}}function Ue(q,F){let ge=!1;q.__webglInit===void 0&&(q.__webglInit=!0,F.addEventListener("dispose",L));const Se=F.source;let De=m.get(Se);De===void 0&&(De={},m.set(Se,De));const Ae=K(F);if(Ae!==q.__cacheKey){De[Ae]===void 0&&(De[Ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,ge=!0),De[Ae].usedTimes++;const et=De[q.__cacheKey];et!==void 0&&(De[q.__cacheKey].usedTimes--,et.usedTimes===0&&N(F)),q.__cacheKey=Ae,q.__webglTexture=De[Ae].texture}return ge}function pe(q,F,ge){let Se=n.TEXTURE_2D;(F.isDataArrayTexture||F.isCompressedArrayTexture)&&(Se=n.TEXTURE_2D_ARRAY),F.isData3DTexture&&(Se=n.TEXTURE_3D);const De=Ue(q,F),Ae=F.source;t.bindTexture(Se,q.__webglTexture,n.TEXTURE0+ge);const et=i.get(Ae);if(Ae.version!==et.__version||De===!0){t.activeTexture(n.TEXTURE0+ge);const Xe=sn.getPrimaries(sn.workingColorSpace),Ze=F.colorSpace===Eo?null:sn.getPrimaries(F.colorSpace),Ot=F.colorSpace===Eo||Xe===Ze?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,F.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,F.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let Fe=w(F.image,!1,r.maxTextureSize);Fe=it(F,Fe);const ct=o.convert(F.format,F.colorSpace),xt=o.convert(F.type);let Ct=M(F.internalFormat,ct,xt,F.colorSpace,F.isVideoTexture);de(Se,F);let ot;const Et=F.mipmaps,Lt=F.isVideoTexture!==!0,Jt=et.__version===void 0||De===!0,se=Ae.dataReady,Je=R(F,Fe);if(F.isDepthTexture)Ct=T(F.format===Fc,F.type),Jt&&(Lt?t.texStorage2D(n.TEXTURE_2D,1,Ct,Fe.width,Fe.height):t.texImage2D(n.TEXTURE_2D,0,Ct,Fe.width,Fe.height,0,ct,xt,null));else if(F.isDataTexture)if(Et.length>0){Lt&&Jt&&t.texStorage2D(n.TEXTURE_2D,Je,Ct,Et[0].width,Et[0].height);for(let Te=0,Ne=Et.length;Te<Ne;Te++)ot=Et[Te],Lt?se&&t.texSubImage2D(n.TEXTURE_2D,Te,0,0,ot.width,ot.height,ct,xt,ot.data):t.texImage2D(n.TEXTURE_2D,Te,Ct,ot.width,ot.height,0,ct,xt,ot.data);F.generateMipmaps=!1}else Lt?(Jt&&t.texStorage2D(n.TEXTURE_2D,Je,Ct,Fe.width,Fe.height),se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Fe.width,Fe.height,ct,xt,Fe.data)):t.texImage2D(n.TEXTURE_2D,0,Ct,Fe.width,Fe.height,0,ct,xt,Fe.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){Lt&&Jt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Je,Ct,Et[0].width,Et[0].height,Fe.depth);for(let Te=0,Ne=Et.length;Te<Ne;Te++)if(ot=Et[Te],F.format!==Wr)if(ct!==null)if(Lt){if(se)if(F.layerUpdates.size>0){const rt=_E(ot.width,ot.height,F.format,F.type);for(const Qe of F.layerUpdates){const It=ot.data.subarray(Qe*rt/ot.data.BYTES_PER_ELEMENT,(Qe+1)*rt/ot.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Te,0,0,Qe,ot.width,ot.height,1,ct,It)}F.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Te,0,0,0,ot.width,ot.height,Fe.depth,ct,ot.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Te,Ct,ot.width,ot.height,Fe.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Te,0,0,0,ot.width,ot.height,Fe.depth,ct,xt,ot.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Te,Ct,ot.width,ot.height,Fe.depth,0,ct,xt,ot.data)}else{Lt&&Jt&&t.texStorage2D(n.TEXTURE_2D,Je,Ct,Et[0].width,Et[0].height);for(let Te=0,Ne=Et.length;Te<Ne;Te++)ot=Et[Te],F.format!==Wr?ct!==null?Lt?se&&t.compressedTexSubImage2D(n.TEXTURE_2D,Te,0,0,ot.width,ot.height,ct,ot.data):t.compressedTexImage2D(n.TEXTURE_2D,Te,Ct,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?se&&t.texSubImage2D(n.TEXTURE_2D,Te,0,0,ot.width,ot.height,ct,xt,ot.data):t.texImage2D(n.TEXTURE_2D,Te,Ct,ot.width,ot.height,0,ct,xt,ot.data)}else if(F.isDataArrayTexture)if(Lt){if(Jt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Je,Ct,Fe.width,Fe.height,Fe.depth),se)if(F.layerUpdates.size>0){const Te=_E(Fe.width,Fe.height,F.format,F.type);for(const Ne of F.layerUpdates){const rt=Fe.data.subarray(Ne*Te/Fe.data.BYTES_PER_ELEMENT,(Ne+1)*Te/Fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ne,Fe.width,Fe.height,1,ct,xt,rt)}F.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Fe.width,Fe.height,Fe.depth,ct,xt,Fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ct,Fe.width,Fe.height,Fe.depth,0,ct,xt,Fe.data);else if(F.isData3DTexture)Lt?(Jt&&t.texStorage3D(n.TEXTURE_3D,Je,Ct,Fe.width,Fe.height,Fe.depth),se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Fe.width,Fe.height,Fe.depth,ct,xt,Fe.data)):t.texImage3D(n.TEXTURE_3D,0,Ct,Fe.width,Fe.height,Fe.depth,0,ct,xt,Fe.data);else if(F.isFramebufferTexture){if(Jt)if(Lt)t.texStorage2D(n.TEXTURE_2D,Je,Ct,Fe.width,Fe.height);else{let Te=Fe.width,Ne=Fe.height;for(let rt=0;rt<Je;rt++)t.texImage2D(n.TEXTURE_2D,rt,Ct,Te,Ne,0,ct,xt,null),Te>>=1,Ne>>=1}}else if(Et.length>0){if(Lt&&Jt){const Te=qe(Et[0]);t.texStorage2D(n.TEXTURE_2D,Je,Ct,Te.width,Te.height)}for(let Te=0,Ne=Et.length;Te<Ne;Te++)ot=Et[Te],Lt?se&&t.texSubImage2D(n.TEXTURE_2D,Te,0,0,ct,xt,ot):t.texImage2D(n.TEXTURE_2D,Te,Ct,ct,xt,ot);F.generateMipmaps=!1}else if(Lt){if(Jt){const Te=qe(Fe);t.texStorage2D(n.TEXTURE_2D,Je,Ct,Te.width,Te.height)}se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ct,xt,Fe)}else t.texImage2D(n.TEXTURE_2D,0,Ct,ct,xt,Fe);x(F)&&g(Se),et.__version=Ae.version,F.onUpdate&&F.onUpdate(F)}q.__version=F.version}function _e(q,F,ge){if(F.image.length!==6)return;const Se=Ue(q,F),De=F.source;t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+ge);const Ae=i.get(De);if(De.version!==Ae.__version||Se===!0){t.activeTexture(n.TEXTURE0+ge);const et=sn.getPrimaries(sn.workingColorSpace),Xe=F.colorSpace===Eo?null:sn.getPrimaries(F.colorSpace),Ze=F.colorSpace===Eo||et===Xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,F.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,F.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const Ot=F.isCompressedTexture||F.image[0].isCompressedTexture,Fe=F.image[0]&&F.image[0].isDataTexture,ct=[];for(let Ne=0;Ne<6;Ne++)!Ot&&!Fe?ct[Ne]=w(F.image[Ne],!0,r.maxCubemapSize):ct[Ne]=Fe?F.image[Ne].image:F.image[Ne],ct[Ne]=it(F,ct[Ne]);const xt=ct[0],Ct=o.convert(F.format,F.colorSpace),ot=o.convert(F.type),Et=M(F.internalFormat,Ct,ot,F.colorSpace),Lt=F.isVideoTexture!==!0,Jt=Ae.__version===void 0||Se===!0,se=De.dataReady;let Je=R(F,xt);de(n.TEXTURE_CUBE_MAP,F);let Te;if(Ot){Lt&&Jt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Je,Et,xt.width,xt.height);for(let Ne=0;Ne<6;Ne++){Te=ct[Ne].mipmaps;for(let rt=0;rt<Te.length;rt++){const Qe=Te[rt];F.format!==Wr?Ct!==null?Lt?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,rt,0,0,Qe.width,Qe.height,Ct,Qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,rt,Et,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,rt,0,0,Qe.width,Qe.height,Ct,ot,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,rt,Et,Qe.width,Qe.height,0,Ct,ot,Qe.data)}}}else{if(Te=F.mipmaps,Lt&&Jt){Te.length>0&&Je++;const Ne=qe(ct[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Je,Et,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(Fe){Lt?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,ct[Ne].width,ct[Ne].height,Ct,ot,ct[Ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Et,ct[Ne].width,ct[Ne].height,0,Ct,ot,ct[Ne].data);for(let rt=0;rt<Te.length;rt++){const It=Te[rt].image[Ne].image;Lt?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,rt+1,0,0,It.width,It.height,Ct,ot,It.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,rt+1,Et,It.width,It.height,0,Ct,ot,It.data)}}else{Lt?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,Ct,ot,ct[Ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Et,Ct,ot,ct[Ne]);for(let rt=0;rt<Te.length;rt++){const Qe=Te[rt];Lt?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,rt+1,0,0,Ct,ot,Qe.image[Ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,rt+1,Et,Ct,ot,Qe.image[Ne])}}}x(F)&&g(n.TEXTURE_CUBE_MAP),Ae.__version=De.version,F.onUpdate&&F.onUpdate(F)}q.__version=F.version}function Me(q,F,ge,Se,De,Ae){const et=o.convert(ge.format,ge.colorSpace),Xe=o.convert(ge.type),Ze=M(ge.internalFormat,et,Xe,ge.colorSpace),Ot=i.get(F),Fe=i.get(ge);if(Fe.__renderTarget=F,!Ot.__hasExternalTextures){const ct=Math.max(1,F.width>>Ae),xt=Math.max(1,F.height>>Ae);De===n.TEXTURE_3D||De===n.TEXTURE_2D_ARRAY?t.texImage3D(De,Ae,Ze,ct,xt,F.depth,0,et,Xe,null):t.texImage2D(De,Ae,Ze,ct,xt,0,et,Xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,q),Ke(F)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,De,Fe.__webglTexture,0,Le(F)):(De===n.TEXTURE_2D||De>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&De<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Se,De,Fe.__webglTexture,Ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(q,F,ge){if(n.bindRenderbuffer(n.RENDERBUFFER,q),F.depthBuffer){const Se=F.depthTexture,De=Se&&Se.isDepthTexture?Se.type:null,Ae=T(F.stencilBuffer,De),et=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Xe=Le(F);Ke(F)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe,Ae,F.width,F.height):ge?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Ae,F.width,F.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,q)}else{const Se=F.textures;for(let De=0;De<Se.length;De++){const Ae=Se[De],et=o.convert(Ae.format,Ae.colorSpace),Xe=o.convert(Ae.type),Ze=M(Ae.internalFormat,et,Xe,Ae.colorSpace),Ot=Le(F);ge&&Ke(F)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,Ze,F.width,F.height):Ke(F)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ot,Ze,F.width,F.height):n.renderbufferStorage(n.RENDERBUFFER,Ze,F.width,F.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ve(q,F){if(F&&F.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,q),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=i.get(F.depthTexture);Se.__renderTarget=F,(!Se.__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)&&(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),me(F.depthTexture,0);const De=Se.__webglTexture,Ae=Le(F);if(F.depthTexture.format===mc)Ke(F)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,De,0,Ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,De,0);else if(F.depthTexture.format===Fc)Ke(F)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,De,0,Ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,De,0);else throw new Error("Unknown depthTexture format")}function He(q){const F=i.get(q),ge=q.isWebGLCubeRenderTarget===!0;if(F.__boundDepthTexture!==q.depthTexture){const Se=q.depthTexture;if(F.__depthDisposeCallback&&F.__depthDisposeCallback(),Se){const De=()=>{delete F.__boundDepthTexture,delete F.__depthDisposeCallback,Se.removeEventListener("dispose",De)};Se.addEventListener("dispose",De),F.__depthDisposeCallback=De}F.__boundDepthTexture=Se}if(q.depthTexture&&!F.__autoAllocateDepthBuffer){if(ge)throw new Error("target.depthTexture not supported in Cube render targets");Ve(F.__webglFramebuffer,q)}else if(ge){F.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(t.bindFramebuffer(n.FRAMEBUFFER,F.__webglFramebuffer[Se]),F.__webglDepthbuffer[Se]===void 0)F.__webglDepthbuffer[Se]=n.createRenderbuffer(),Pe(F.__webglDepthbuffer[Se],q,!1);else{const De=q.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=F.__webglDepthbuffer[Se];n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,Ae)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,F.__webglFramebuffer),F.__webglDepthbuffer===void 0)F.__webglDepthbuffer=n.createRenderbuffer(),Pe(F.__webglDepthbuffer,q,!1);else{const Se=q.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=F.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,De),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,De)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(q,F,ge){const Se=i.get(q);F!==void 0&&Me(Se.__webglFramebuffer,q,q.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ge!==void 0&&He(q)}function Ft(q){const F=q.texture,ge=i.get(q),Se=i.get(F);q.addEventListener("dispose",P);const De=q.textures,Ae=q.isWebGLCubeRenderTarget===!0,et=De.length>1;if(et||(Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture()),Se.__version=F.version,a.memory.textures++),Ae){ge.__webglFramebuffer=[];for(let Xe=0;Xe<6;Xe++)if(F.mipmaps&&F.mipmaps.length>0){ge.__webglFramebuffer[Xe]=[];for(let Ze=0;Ze<F.mipmaps.length;Ze++)ge.__webglFramebuffer[Xe][Ze]=n.createFramebuffer()}else ge.__webglFramebuffer[Xe]=n.createFramebuffer()}else{if(F.mipmaps&&F.mipmaps.length>0){ge.__webglFramebuffer=[];for(let Xe=0;Xe<F.mipmaps.length;Xe++)ge.__webglFramebuffer[Xe]=n.createFramebuffer()}else ge.__webglFramebuffer=n.createFramebuffer();if(et)for(let Xe=0,Ze=De.length;Xe<Ze;Xe++){const Ot=i.get(De[Xe]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=n.createTexture(),a.memory.textures++)}if(q.samples>0&&Ke(q)===!1){ge.__webglMultisampledFramebuffer=n.createFramebuffer(),ge.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer);for(let Xe=0;Xe<De.length;Xe++){const Ze=De[Xe];ge.__webglColorRenderbuffer[Xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ge.__webglColorRenderbuffer[Xe]);const Ot=o.convert(Ze.format,Ze.colorSpace),Fe=o.convert(Ze.type),ct=M(Ze.internalFormat,Ot,Fe,Ze.colorSpace,q.isXRRenderTarget===!0),xt=Le(q);n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,ct,q.width,q.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),q.depthBuffer&&(ge.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(ge.__webglDepthRenderbuffer,q,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(n.TEXTURE_CUBE_MAP,Se.__webglTexture),de(n.TEXTURE_CUBE_MAP,F);for(let Xe=0;Xe<6;Xe++)if(F.mipmaps&&F.mipmaps.length>0)for(let Ze=0;Ze<F.mipmaps.length;Ze++)Me(ge.__webglFramebuffer[Xe][Ze],q,F,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Ze);else Me(ge.__webglFramebuffer[Xe],q,F,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0);x(F)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(et){for(let Xe=0,Ze=De.length;Xe<Ze;Xe++){const Ot=De[Xe],Fe=i.get(Ot);t.bindTexture(n.TEXTURE_2D,Fe.__webglTexture),de(n.TEXTURE_2D,Ot),Me(ge.__webglFramebuffer,q,Ot,n.COLOR_ATTACHMENT0+Xe,n.TEXTURE_2D,0),x(Ot)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let Xe=n.TEXTURE_2D;if((q.isWebGL3DRenderTarget||q.isWebGLArrayRenderTarget)&&(Xe=q.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Xe,Se.__webglTexture),de(Xe,F),F.mipmaps&&F.mipmaps.length>0)for(let Ze=0;Ze<F.mipmaps.length;Ze++)Me(ge.__webglFramebuffer[Ze],q,F,n.COLOR_ATTACHMENT0,Xe,Ze);else Me(ge.__webglFramebuffer,q,F,n.COLOR_ATTACHMENT0,Xe,0);x(F)&&g(Xe),t.unbindTexture()}q.depthBuffer&&He(q)}function ke(q){const F=q.textures;for(let ge=0,Se=F.length;ge<Se;ge++){const De=F[ge];if(x(De)){const Ae=b(q),et=i.get(De).__webglTexture;t.bindTexture(Ae,et),g(Ae),t.unbindTexture()}}}const Bt=[],H=[];function je(q){if(q.samples>0){if(Ke(q)===!1){const F=q.textures,ge=q.width,Se=q.height;let De=n.COLOR_BUFFER_BIT;const Ae=q.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=i.get(q),Xe=F.length>1;if(Xe)for(let Ze=0;Ze<F.length;Ze++)t.bindFramebuffer(n.FRAMEBUFFER,et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ze,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ze,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let Ze=0;Ze<F.length;Ze++){if(q.resolveDepthBuffer&&(q.depthBuffer&&(De|=n.DEPTH_BUFFER_BIT),q.stencilBuffer&&q.resolveStencilBuffer&&(De|=n.STENCIL_BUFFER_BIT)),Xe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,et.__webglColorRenderbuffer[Ze]);const Ot=i.get(F[Ze]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ot,0)}n.blitFramebuffer(0,0,ge,Se,0,0,ge,Se,De,n.NEAREST),u===!0&&(Bt.length=0,H.length=0,Bt.push(n.COLOR_ATTACHMENT0+Ze),q.depthBuffer&&q.resolveDepthBuffer===!1&&(Bt.push(Ae),H.push(Ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Bt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Xe)for(let Ze=0;Ze<F.length;Ze++){t.bindFramebuffer(n.FRAMEBUFFER,et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ze,n.RENDERBUFFER,et.__webglColorRenderbuffer[Ze]);const Ot=i.get(F[Ze]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ze,n.TEXTURE_2D,Ot,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}else if(q.depthBuffer&&q.resolveDepthBuffer===!1&&u){const F=q.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[F])}}}function Le(q){return Math.min(r.maxSamples,q.samples)}function Ke(q){const F=i.get(q);return q.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function Oe(q){const F=a.render.frame;p.get(q)!==F&&(p.set(q,F),q.update())}function it(q,F){const ge=q.colorSpace,Se=q.format,De=q.type;return q.isCompressedTexture===!0||q.isVideoTexture===!0||ge!==zc&&ge!==Eo&&(sn.getTransfer(ge)===fn?(Se!==Wr||De!==Hs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ge)),F}function qe(q){return typeof HTMLImageElement<"u"&&q instanceof HTMLImageElement?(d.width=q.naturalWidth||q.width,d.height=q.naturalHeight||q.height):typeof VideoFrame<"u"&&q instanceof VideoFrame?(d.width=q.displayWidth,d.height=q.displayHeight):(d.width=q.width,d.height=q.height),d}this.allocateTextureUnit=Z,this.resetTextureUnits=J,this.setTexture2D=me,this.setTexture2DArray=ue,this.setTexture3D=oe,this.setTextureCube=V,this.rebindTextures=ft,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ke}
function F7(n,e){function t(i,r=Eo){let o;const a=sn.getTransfer(r);if(i===Hs)return n.UNSIGNED_BYTE;if(i===r_)return n.UNSIGNED_SHORT_4_4_4_4;if(i===s_)return n.UNSIGNED_SHORT_5_5_5_1;if(i===a2)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===s2)return n.BYTE;if(i===o2)return n.SHORT;if(i===Md)return n.UNSIGNED_SHORT;if(i===i_)return n.INT;if(i===tl)return n.UNSIGNED_INT;if(i===Ds)return n.FLOAT;if(i===Wd)return n.HALF_FLOAT;if(i===l2)return n.ALPHA;if(i===c2)return n.RGB;if(i===Wr)return n.RGBA;if(i===u2)return n.LUMINANCE;if(i===d2)return n.LUMINANCE_ALPHA;if(i===mc)return n.DEPTH_COMPONENT;if(i===Fc)return n.DEPTH_STENCIL;if(i===o_)return n.RED;if(i===a_)return n.RED_INTEGER;if(i===h2)return n.RG;if(i===l_)return n.RG_INTEGER;if(i===c_)return n.RGBA_INTEGER;if(i===rp||i===sp||i===op||i===ap)if(a===fn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===rp)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sp)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===op)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ap)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===rp)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sp)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===op)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ap)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ay||i===ly||i===cy||i===uy)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ay)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ly)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cy)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uy)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dy||i===hy||i===fy)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===dy||i===hy)return a===fn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===fy)return a===fn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===py||i===my||i===gy||i===vy||i===yy||i===xy||i===_y||i===wy||i===by||i===Sy||i===My||i===Ey||i===Ty||i===Cy)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===py)return a===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===my)return a===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gy)return a===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vy)return a===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yy)return a===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xy)return a===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_y)return a===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wy)return a===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===by)return a===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sy)return a===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===My)return a===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ey)return a===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ty)return a===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cy)return a===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lp||i===Ay||i===Ry)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===lp)return a===fn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ay)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ry)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===f2||i===Py||i===Ny||i===Ly)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===lp)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Py)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ny)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ly)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Uc?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}
const z7={type:"move"};
class qg{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,a=null;const c=this._targetRay,u=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){a=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,i),g=this._getHandJoint(d,w);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const p=d.joints["index-finger-tip"],f=d.joints["thumb-tip"],m=p.position.distanceTo(f.position),v=.02,_=.005;d.inputState.pinching&&m>v+_?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&m<=v-_&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(z7)))}return c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}
const B7=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`;
const V7=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class j7{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Pi,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Wo({vertexShader:B7,fragmentShader:V7,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fe(new qd(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}
class H7 extends al{constructor(e,t){super();const i=this;let r=null,o=1,a=null,c="local-floor",u=1,d=null,p=null,f=null,m=null,v=null,_=null;const w=new j7,x=t.getContextAttributes();let g=null,b=null;const M=[],T=[],R=new Ye;let L=null;const P=new ir;P.viewport=new Dn;const I=new ir;I.viewport=new Dn;const N=[P,I],k=new lH;let z=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pe){let _e=M[pe];return _e===void 0&&(_e=new qg,M[pe]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(pe){let _e=M[pe];return _e===void 0&&(_e=new qg,M[pe]=_e),_e.getGripSpace()},this.getHand=function(pe){let _e=M[pe];return _e===void 0&&(_e=new qg,M[pe]=_e),_e.getHandSpace()};function Z(pe){const _e=T.indexOf(pe.inputSource);if(_e===-1)return;const Me=M[_e];Me!==void 0&&(Me.update(pe.inputSource,pe.frame,d||a),Me.dispatchEvent({type:pe.type,data:pe.inputSource}))}function K(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",me);for(let pe=0;pe<M.length;pe++){const _e=T[pe];_e!==null&&(T[pe]=null,M[pe].disconnect(_e))}z=null,J=null,w.reset(),e.setRenderTarget(g),v=null,m=null,f=null,r=null,b=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pe){o=pe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pe){c=pe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(pe){d=pe},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(pe){if(r=pe,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",K),r.addEventListener("inputsourceschange",me),x.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const _e={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),b=new nl(v.framebufferWidth,v.framebufferHeight,{format:Wr,type:Hs,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let _e=null,Me=null,Pe=null;x.depth&&(Pe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=x.stencil?Fc:mc,Me=x.stencil?Uc:tl);const Ve={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:o};f=new XRWebGLBinding(r,t),m=f.createProjectionLayer(Ve),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),b=new nl(m.textureWidth,m.textureHeight,{format:Wr,type:Hs,depthTexture:new A2(m.textureWidth,m.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(u),d=null,a=await r.requestReferenceSpace(c),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function me(pe){for(let _e=0;_e<pe.removed.length;_e++){const Me=pe.removed[_e],Pe=T.indexOf(Me);Pe>=0&&(T[Pe]=null,M[Pe].disconnect(Me))}for(let _e=0;_e<pe.added.length;_e++){const Me=pe.added[_e];let Pe=T.indexOf(Me);if(Pe===-1){for(let He=0;He<M.length;He++)if(He>=T.length){T.push(Me),Pe=He;break}else if(T[He]===null){T[He]=Me,Pe=He;break}if(Pe===-1)break}const Ve=M[Pe];Ve&&Ve.connect(Me)}}const ue=new ne,oe=new ne;function V(pe,_e,Me){ue.setFromMatrixPosition(_e.matrixWorld),oe.setFromMatrixPosition(Me.matrixWorld);const Pe=ue.distanceTo(oe),Ve=_e.projectionMatrix.elements,He=Me.projectionMatrix.elements,ft=Ve[14]/(Ve[10]-1),Ft=Ve[14]/(Ve[10]+1),ke=(Ve[9]+1)/Ve[5],Bt=(Ve[9]-1)/Ve[5],H=(Ve[8]-1)/Ve[0],je=(He[8]+1)/He[0],Le=ft*H,Ke=ft*je,Oe=Pe/(-H+je),it=Oe*-H;if(_e.matrixWorld.decompose(pe.position,pe.quaternion,pe.scale),pe.translateX(it),pe.translateZ(Oe),pe.matrixWorld.compose(pe.position,pe.quaternion,pe.scale),pe.matrixWorldInverse.copy(pe.matrixWorld).invert(),Ve[10]===-1)pe.projectionMatrix.copy(_e.projectionMatrix),pe.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const qe=ft+Oe,q=Ft+Oe,F=Le-it,ge=Ke+(Pe-it),Se=ke*Ft/q*qe,De=Bt*Ft/q*qe;pe.projectionMatrix.makePerspective(F,ge,Se,De,qe,q),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert()}}function te(pe,_e){_e===null?pe.matrixWorld.copy(pe.matrix):pe.matrixWorld.multiplyMatrices(_e.matrixWorld,pe.matrix),pe.matrixWorldInverse.copy(pe.matrixWorld).invert()}this.updateCamera=function(pe){if(r===null)return;let _e=pe.near,Me=pe.far;w.texture!==null&&(w.depthNear>0&&(_e=w.depthNear),w.depthFar>0&&(Me=w.depthFar)),k.near=I.near=P.near=_e,k.far=I.far=P.far=Me,(z!==k.near||J!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),z=k.near,J=k.far),P.layers.mask=pe.layers.mask|2,I.layers.mask=pe.layers.mask|4,k.layers.mask=P.layers.mask|I.layers.mask;const Pe=pe.parent,Ve=k.cameras;te(k,Pe);for(let He=0;He<Ve.length;He++)te(Ve[He],Pe);Ve.length===2?V(k,P,I):k.projectionMatrix.copy(P.projectionMatrix),X(pe,k,Pe)};function X(pe,_e,Me){Me===null?pe.matrix.copy(_e.matrixWorld):(pe.matrix.copy(Me.matrixWorld),pe.matrix.invert(),pe.matrix.multiply(_e.matrixWorld)),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.updateMatrixWorld(!0),pe.projectionMatrix.copy(_e.projectionMatrix),pe.projectionMatrixInverse.copy(_e.projectionMatrixInverse),pe.isPerspectiveCamera&&(pe.fov=Dy*2*Math.atan(1/pe.projectionMatrix.elements[5]),pe.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(m===null&&v===null))return u},this.setFoveation=function(pe){u=pe,m!==null&&(m.fixedFoveation=pe),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=pe)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(k)};let j=null;function de(pe,_e){if(p=_e.getViewerPose(d||a),_=_e,p!==null){const Me=p.views;v!==null&&(e.setRenderTargetFramebuffer(b,v.framebuffer),e.setRenderTarget(b));let Pe=!1;Me.length!==k.cameras.length&&(k.cameras.length=0,Pe=!0);for(let He=0;He<Me.length;He++){const ft=Me[He];let Ft=null;if(v!==null)Ft=v.getViewport(ft);else{const Bt=f.getViewSubImage(m,ft);Ft=Bt.viewport,He===0&&(e.setRenderTargetTextures(b,Bt.colorTexture,m.ignoreDepthValues?void 0:Bt.depthStencilTexture),e.setRenderTarget(b))}let ke=N[He];ke===void 0&&(ke=new ir,ke.layers.enable(He),ke.viewport=new Dn,N[He]=ke),ke.matrix.fromArray(ft.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(ft.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),He===0&&(k.matrix.copy(ke.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Pe===!0&&k.cameras.push(ke)}const Ve=r.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")){const He=f.getDepthInformation(Me[0]);He&&He.isValid&&He.texture&&w.init(e,He,r.renderState)}}for(let Me=0;Me<M.length;Me++){const Pe=T[Me],Ve=M[Me];Pe!==null&&Ve!==void 0&&Ve.update(Pe,_e,d||a)}j&&j(pe,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),_=null}const Ue=new V2;Ue.setAnimationLoop(de),this.setAnimationLoop=function(pe){j=pe},this.dispose=function(){}}}
const Ma=new cs;
const G7=new Mn;
function W7(n,e){function t(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function i(x,g){g.color.getRGB(x.fogColor.value,b2(n)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function r(x,g,b,M,T){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(x,g):g.isMeshToonMaterial?(o(x,g),f(x,g)):g.isMeshPhongMaterial?(o(x,g),p(x,g)):g.isMeshStandardMaterial?(o(x,g),m(x,g),g.isMeshPhysicalMaterial&&v(x,g,T)):g.isMeshMatcapMaterial?(o(x,g),_(x,g)):g.isMeshDepthMaterial?o(x,g):g.isMeshDistanceMaterial?(o(x,g),w(x,g)):g.isMeshNormalMaterial?o(x,g):g.isLineBasicMaterial?(a(x,g),g.isLineDashedMaterial&&c(x,g)):g.isPointsMaterial?u(x,g,b,M):g.isSpriteMaterial?d(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,t(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Xi&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,t(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Xi&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,t(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,t(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const b=e.get(g),M=b.envMap,T=b.envMapRotation;M&&(x.envMap.value=M,Ma.copy(T),Ma.x*=-1,Ma.y*=-1,Ma.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ma.y*=-1,Ma.z*=-1),x.envMapRotation.value.setFromMatrix4(G7.makeRotationFromEuler(Ma)),x.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,x.aoMapTransform))}function a(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform))}function c(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function u(x,g,b,M){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*b,x.scale.value=M*.5,g.map&&(x.map.value=g.map,t(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function d(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function p(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function f(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function m(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function v(x,g,b){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Xi&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,g){g.matcap&&(x.matcap.value=g.matcap)}function w(x,g){const b=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}
function $7(n,e,t,i){let r={},o={},a=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(b,M){const T=M.program;i.uniformBlockBinding(b,T)}function d(b,M){let T=r[b.id];T===void 0&&(_(b),T=p(b),r[b.id]=T,b.addEventListener("dispose",x));const R=M.program;i.updateUBOMapping(b,R);const L=e.render.frame;o[b.id]!==L&&(m(b),o[b.id]=L)}function p(b){const M=f();b.__bindingPointIndex=M;const T=n.createBuffer(),R=b.__size,L=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,R,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,T),T}function f(){for(let b=0;b<c;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(b){const M=r[b.id],T=b.uniforms,R=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let L=0,P=T.length;L<P;L++){const I=Array.isArray(T[L])?T[L]:[T[L]];for(let N=0,k=I.length;N<k;N++){const z=I[N];if(v(z,L,N,R)===!0){const J=z.__offset,Z=Array.isArray(z.value)?z.value:[z.value];let K=0;for(let me=0;me<Z.length;me++){const ue=Z[me],oe=w(ue);typeof ue=="number"||typeof ue=="boolean"?(z.__data[0]=ue,n.bufferSubData(n.UNIFORM_BUFFER,J+K,z.__data)):ue.isMatrix3?(z.__data[0]=ue.elements[0],z.__data[1]=ue.elements[1],z.__data[2]=ue.elements[2],z.__data[3]=0,z.__data[4]=ue.elements[3],z.__data[5]=ue.elements[4],z.__data[6]=ue.elements[5],z.__data[7]=0,z.__data[8]=ue.elements[6],z.__data[9]=ue.elements[7],z.__data[10]=ue.elements[8],z.__data[11]=0):(ue.toArray(z.__data,K),K+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,J,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(b,M,T,R){const L=b.value,P=M+"_"+T;if(R[P]===void 0)return typeof L=="number"||typeof L=="boolean"?R[P]=L:R[P]=L.clone(),!0;{const I=R[P];if(typeof L=="number"||typeof L=="boolean"){if(I!==L)return R[P]=L,!0}else if(I.equals(L)===!1)return I.copy(L),!0}return!1}function _(b){const M=b.uniforms;let T=0;const R=16;for(let P=0,I=M.length;P<I;P++){const N=Array.isArray(M[P])?M[P]:[M[P]];for(let k=0,z=N.length;k<z;k++){const J=N[k],Z=Array.isArray(J.value)?J.value:[J.value];for(let K=0,me=Z.length;K<me;K++){const ue=Z[K],oe=w(ue),V=T%R,te=V%oe.boundary,X=V+te;T+=te,X!==0&&R-X<oe.storage&&(T+=R-X),J.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=T,T+=oe.storage}}}const L=T%R;return L>0&&(T+=R-L),b.__size=T,b.__cache={},this}function w(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function x(b){const M=b.target;M.removeEventListener("dispose",x);const T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function g(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},o={}}return{bind:u,update:d,dispose:g}}
class $2{constructor(e={}){const{canvas:t=Kj(),context:i=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const _=new Uint32Array(4),w=new Int32Array(4);let x=null,g=null;const b=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=br,this.toneMapping=Bo,this.toneMappingExposure=1;const T=this;let R=!1,L=0,P=0,I=null,N=-1,k=null;const z=new Dn,J=new Dn;let Z=null;const K=new Rt(0);let me=0,ue=t.width,oe=t.height,V=1,te=null,X=null;const j=new Dn(0,0,ue,oe),de=new Dn(0,0,ue,oe);let Ue=!1;const pe=new f_;let _e=!1,Me=!1;const Pe=new Mn,Ve=new Mn,He=new ne,ft=new Dn,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function Bt(){return I===null?V:1}let H=i;function je(B,he){return t.getContext(B,he)}try{const B={alpha:!0,depth:r,stencil:o,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${n_}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Qe,!1),H===null){const he="webgl2";if(H=je(he,B),H===null)throw je(he)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let Le,Ke,Oe,it,qe,q,F,ge,Se,De,Ae,et,Xe,Ze,Ot,Fe,ct,xt,Ct,ot,Et,Lt,Jt,se;function Je(){Le=new n9(H),Le.init(),Lt=new F7(H,Le),Ke=new KW(H,Le,e,Lt),Oe=new O7(H,Le),Ke.reverseDepthBuffer&&m&&Oe.buffers.depth.setReversed(!0),it=new s9(H),qe=new S7,q=new U7(H,Le,Oe,qe,Ke,Lt,it),F=new QW(T),ge=new t9(T),Se=new hH(H),Jt=new XW(H,Se),De=new i9(H,Se,it,Jt),Ae=new a9(H,De,Se,it),Ct=new o9(H,Ke,q),Fe=new ZW(qe),et=new b7(T,F,ge,Le,Ke,Jt,Fe),Xe=new W7(T,qe),Ze=new E7,Ot=new N7(Le),xt=new qW(T,F,ge,Oe,Ae,v,u),ct=new D7(T,Ae,Ke),se=new $7(H,it,Ke,Oe),ot=new YW(H,Le,it),Et=new r9(H,Le,it),it.programs=et.programs,T.capabilities=Ke,T.extensions=Le,T.properties=qe,T.renderLists=Ze,T.shadowMap=ct,T.state=Oe,T.info=it}Je();const Te=new H7(T,H);this.xr=Te,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const B=Le.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){const B=Le.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(B){B!==void 0&&(V=B,this.setSize(ue,oe,!1))},this.getSize=function(B){return B.set(ue,oe)},this.setSize=function(B,he,we=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=B,oe=he,t.width=Math.floor(B*V),t.height=Math.floor(he*V),we===!0&&(t.style.width=B+"px",t.style.height=he+"px"),this.setViewport(0,0,B,he)},this.getDrawingBufferSize=function(B){return B.set(ue*V,oe*V).floor()},this.setDrawingBufferSize=function(B,he,we){ue=B,oe=he,V=we,t.width=Math.floor(B*we),t.height=Math.floor(he*we),this.setViewport(0,0,B,he)},this.getCurrentViewport=function(B){return B.copy(z)},this.getViewport=function(B){return B.copy(j)},this.setViewport=function(B,he,we,A){B.isVector4?j.set(B.x,B.y,B.z,B.w):j.set(B,he,we,A),Oe.viewport(z.copy(j).multiplyScalar(V).round())},this.getScissor=function(B){return B.copy(de)},this.setScissor=function(B,he,we,A){B.isVector4?de.set(B.x,B.y,B.z,B.w):de.set(B,he,we,A),Oe.scissor(J.copy(de).multiplyScalar(V).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(B){Oe.setScissorTest(Ue=B)},this.setOpaqueSort=function(B){te=B},this.setTransparentSort=function(B){X=B},this.getClearColor=function(B){return B.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(B=!0,he=!0,we=!0){let A=0;if(B){let O=!1;if(I!==null){const G=I.texture.format;O=G===c_||G===l_||G===a_}if(O){const G=I.texture.type,W=G===Hs||G===tl||G===Md||G===Uc||G===r_||G===s_,$=xt.getClearColor(),ee=xt.getClearAlpha(),ye=$.r,Ce=$.g,Ee=$.b;W?(_[0]=ye,_[1]=Ce,_[2]=Ee,_[3]=ee,H.clearBufferuiv(H.COLOR,0,_)):(w[0]=ye,w[1]=Ce,w[2]=Ee,w[3]=ee,H.clearBufferiv(H.COLOR,0,w))}else A|=H.COLOR_BUFFER_BIT}he&&(A|=H.DEPTH_BUFFER_BIT),we&&(A|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(A)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Qe,!1),xt.dispose(),Ze.dispose(),Ot.dispose(),qe.dispose(),F.dispose(),ge.dispose(),Ae.dispose(),Jt.dispose(),se.dispose(),et.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Tr),Te.removeEventListener("sessionend",lr),Cr.stop()};function Ne(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const B=it.autoReset,he=ct.enabled,we=ct.autoUpdate,A=ct.needsUpdate,O=ct.type;Je(),it.autoReset=B,ct.enabled=he,ct.autoUpdate=we,ct.needsUpdate=A,ct.type=O}function Qe(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function It(B){const he=B.target;he.removeEventListener("dispose",It),gn(he)}function gn(B){In(B),qe.remove(B)}function In(B){const he=qe.get(B).programs;he!==void 0&&(he.forEach(function(we){et.releaseProgram(we)}),B.isShaderMaterial&&et.releaseShaderCache(B))}this.renderBufferDirect=function(B,he,we,A,O,G){he===null&&(he=Ft);const W=O.isMesh&&O.matrixWorld.determinant()<0,$=$s(B,he,we,A,O);Oe.setMaterial(A,W);let ee=we.index,ye=1;if(A.wireframe===!0){if(ee=De.getWireframeAttribute(we),ee===void 0)return;ye=2}const Ce=we.drawRange,Ee=we.attributes.position;let Re=Ce.start*ye,Ge=(Ce.start+Ce.count)*ye;G!==null&&(Re=Math.max(Re,G.start*ye),Ge=Math.min(Ge,(G.start+G.count)*ye)),ee!==null?(Re=Math.max(Re,0),Ge=Math.min(Ge,ee.count)):Ee!=null&&(Re=Math.max(Re,0),Ge=Math.min(Ge,Ee.count));const at=Ge-Re;if(at<0||at===1/0)return;Jt.setup(O,A,$,we,ee);let Q,ce=ot;if(ee!==null&&(Q=Se.get(ee),ce=Et,ce.setIndex(Q)),O.isMesh)A.wireframe===!0?(Oe.setLineWidth(A.wireframeLinewidth*Bt()),ce.setMode(H.LINES)):ce.setMode(H.TRIANGLES);else if(O.isLine){let Ie=A.linewidth;Ie===void 0&&(Ie=1),Oe.setLineWidth(Ie*Bt()),O.isLineSegments?ce.setMode(H.LINES):O.isLineLoop?ce.setMode(H.LINE_LOOP):ce.setMode(H.LINE_STRIP)}else O.isPoints?ce.setMode(H.POINTS):O.isSprite&&ce.setMode(H.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ce.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))ce.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ie=O._multiDrawStarts,dt=O._multiDrawCounts,vt=O._multiDrawCount,en=ee?Se.get(ee).bytesPerElement:1,Pn=qe.get(A).currentProgram.getUniforms();for(let jn=0;jn<vt;jn++)Pn.setValue(H,"_gl_DrawID",jn),ce.render(Ie[jn]/en,dt[jn])}else if(O.isInstancedMesh)ce.renderInstances(Re,at,O.count);else if(we.isInstancedBufferGeometry){const Ie=we._maxInstanceCount!==void 0?we._maxInstanceCount:1/0,dt=Math.min(we.instanceCount,Ie);ce.renderInstances(Re,at,dt)}else ce.render(Re,at)};function Yt(B,he,we){B.transparent===!0&&B.side===_n&&B.forceSinglePass===!1?(B.side=Xi,B.needsUpdate=!0,Ws(B,he,we),B.side=Go,B.needsUpdate=!0,Ws(B,he,we),B.side=_n):Ws(B,he,we)}this.compile=function(B,he,we=null){we===null&&(we=B),g=Ot.get(we),g.init(he),M.push(g),we.traverseVisible(function(O){O.isLight&&O.layers.test(he.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),B!==we&&B.traverseVisible(function(O){O.isLight&&O.layers.test(he.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),g.setupLights();const A=new Set;return B.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const G=O.material;if(G)if(Array.isArray(G))for(let W=0;W<G.length;W++){const $=G[W];Yt($,we,O),A.add($)}else Yt(G,we,O),A.add(G)}),M.pop(),g=null,A},this.compileAsync=function(B,he,we=null){const A=this.compile(B,he,we);return new Promise(O=>{function G(){if(A.forEach(function(W){qe.get(W).currentProgram.isReady()&&A.delete(W)}),A.size===0){O(B);return}setTimeout(G,10)}Le.get("KHR_parallel_shader_compile")!==null?G():setTimeout(G,10)})};let ui=null;function dn(B){ui&&ui(B)}function Tr(){Cr.stop()}function lr(){Cr.start()}const Cr=new V2;Cr.setAnimationLoop(dn),typeof self<"u"&&Cr.setContext(self),this.setAnimationLoop=function(B){ui=B,Te.setAnimationLoop(B),B===null?Cr.stop():Cr.start()},Te.addEventListener("sessionstart",Tr),Te.addEventListener("sessionend",lr),this.render=function(B,he){if(he!==void 0&&he.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),he.parent===null&&he.matrixWorldAutoUpdate===!0&&he.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(he),he=Te.getCamera()),B.isScene===!0&&B.onBeforeRender(T,B,he,I),g=Ot.get(B,M.length),g.init(he),M.push(g),Ve.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),pe.setFromProjectionMatrix(Ve),Me=this.localClippingEnabled,_e=Fe.init(this.clippingPlanes,Me),x=Ze.get(B,b.length),x.init(),b.push(x),Te.enabled===!0&&Te.isPresenting===!0){const G=T.xr.getDepthSensingMesh();G!==null&&cr(G,he,-1/0,T.sortObjects)}cr(B,he,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(te,X),ke=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,ke&&xt.addToRenderList(x,B),this.info.render.frame++,_e===!0&&Fe.beginShadows();const we=g.state.shadowsArray;ct.render(we,B,he),_e===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const A=x.opaque,O=x.transmissive;if(g.setupLights(),he.isArrayCamera){const G=he.cameras;if(O.length>0)for(let W=0,$=G.length;W<$;W++){const ee=G[W];ni(A,O,B,ee)}ke&&xt.render(B);for(let W=0,$=G.length;W<$;W++){const ee=G[W];Ni(x,B,ee,ee.viewport)}}else O.length>0&&ni(A,O,B,he),ke&&xt.render(B),Ni(x,B,he);I!==null&&(q.updateMultisampleRenderTarget(I),q.updateRenderTargetMipmap(I)),B.isScene===!0&&B.onAfterRender(T,B,he),Jt.resetDefaultState(),N=-1,k=null,M.pop(),M.length>0?(g=M[M.length-1],_e===!0&&Fe.setGlobalState(T.clippingPlanes,g.state.camera)):g=null,b.pop(),b.length>0?x=b[b.length-1]:x=null};function cr(B,he,we,A){if(B.visible===!1)return;if(B.layers.test(he.layers)){if(B.isGroup)we=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(he);else if(B.isLight)g.pushLight(B),B.castShadow&&g.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||pe.intersectsSprite(B)){A&&ft.setFromMatrixPosition(B.matrixWorld).applyMatrix4(Ve);const W=Ae.update(B),$=B.material;$.visible&&x.push(B,W,$,we,ft.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||pe.intersectsObject(B))){const W=Ae.update(B),$=B.material;if(A&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),ft.copy(B.boundingSphere.center)):(W.boundingSphere===null&&W.computeBoundingSphere(),ft.copy(W.boundingSphere.center)),ft.applyMatrix4(B.matrixWorld).applyMatrix4(Ve)),Array.isArray($)){const ee=W.groups;for(let ye=0,Ce=ee.length;ye<Ce;ye++){const Ee=ee[ye],Re=$[Ee.materialIndex];Re&&Re.visible&&x.push(B,W,Re,we,ft.z,Ee)}}else $.visible&&x.push(B,W,$,we,ft.z,null)}}const G=B.children;for(let W=0,$=G.length;W<$;W++)cr(G[W],he,we,A)}function Ni(B,he,we,A){const O=B.opaque,G=B.transmissive,W=B.transparent;g.setupLightsView(we),_e===!0&&Fe.setGlobalState(T.clippingPlanes,we),A&&Oe.viewport(z.copy(A)),O.length>0&&Yi(O,he,we),G.length>0&&Yi(G,he,we),W.length>0&&Yi(W,he,we),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function ni(B,he,we,A){if((we.isScene===!0?we.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[A.id]===void 0&&(g.state.transmissionRenderTarget[A.id]=new nl(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?Wd:Hs,minFilter:Fa,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:sn.workingColorSpace}));const G=g.state.transmissionRenderTarget[A.id],W=A.viewport||z;G.setSize(W.z,W.w);const $=T.getRenderTarget();T.setRenderTarget(G),T.getClearColor(K),me=T.getClearAlpha(),me<1&&T.setClearColor(16777215,.5),T.clear(),ke&&xt.render(we);const ee=T.toneMapping;T.toneMapping=Bo;const ye=A.viewport;if(A.viewport!==void 0&&(A.viewport=void 0),g.setupLightsView(A),_e===!0&&Fe.setGlobalState(T.clippingPlanes,A),Yi(B,we,A),q.updateMultisampleRenderTarget(G),q.updateRenderTargetMipmap(G),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Ee=0,Re=he.length;Ee<Re;Ee++){const Ge=he[Ee],at=Ge.object,Q=Ge.geometry,ce=Ge.material,Ie=Ge.group;if(ce.side===_n&&at.layers.test(A.layers)){const dt=ce.side;ce.side=Xi,ce.needsUpdate=!0,Zo(at,we,A,Q,ce,Ie),ce.side=dt,ce.needsUpdate=!0,Ce=!0}}Ce===!0&&(q.updateMultisampleRenderTarget(G),q.updateRenderTargetMipmap(G))}T.setRenderTarget($),T.setClearColor(K,me),ye!==void 0&&(A.viewport=ye),T.toneMapping=ee}function Yi(B,he,we){const A=he.isScene===!0?he.overrideMaterial:null;for(let O=0,G=B.length;O<G;O++){const W=B[O],$=W.object,ee=W.geometry,ye=A===null?W.material:A,Ce=W.group;$.layers.test(we.layers)&&Zo($,he,we,ee,ye,Ce)}}function Zo(B,he,we,A,O,G){B.onBeforeRender(T,he,we,A,O,G),B.modelViewMatrix.multiplyMatrices(we.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),O.onBeforeRender(T,he,we,A,B,G),O.transparent===!0&&O.side===_n&&O.forceSinglePass===!1?(O.side=Xi,O.needsUpdate=!0,T.renderBufferDirect(we,he,A,O,B,G),O.side=Go,O.needsUpdate=!0,T.renderBufferDirect(we,he,A,O,B,G),O.side=_n):T.renderBufferDirect(we,he,A,O,B,G),B.onAfterRender(T,he,we,A,O,G)}function Ws(B,he,we){he.isScene!==!0&&(he=Ft);const A=qe.get(B),O=g.state.lights,G=g.state.shadowsArray,W=O.state.version,$=et.getParameters(B,O.state,G,he,we),ee=et.getProgramCacheKey($);let ye=A.programs;A.environment=B.isMeshStandardMaterial?he.environment:null,A.fog=he.fog,A.envMap=(B.isMeshStandardMaterial?ge:F).get(B.envMap||A.environment),A.envMapRotation=A.environment!==null&&B.envMap===null?he.environmentRotation:B.envMapRotation,ye===void 0&&(B.addEventListener("dispose",It),ye=new Map,A.programs=ye);let Ce=ye.get(ee);if(Ce!==void 0){if(A.currentProgram===Ce&&A.lightsStateVersion===W)return ur(B,$),Ce}else $.uniforms=et.getUniforms(B),B.onBeforeCompile($,T),Ce=et.acquireProgram($,ee),ye.set(ee,Ce),A.uniforms=$.uniforms;const Ee=A.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(Ee.clippingPlanes=Fe.uniform),ur(B,$),A.needsLights=Qc(B),A.lightsStateVersion=W,A.needsLights&&(Ee.ambientLightColor.value=O.state.ambient,Ee.lightProbe.value=O.state.probe,Ee.directionalLights.value=O.state.directional,Ee.directionalLightShadows.value=O.state.directionalShadow,Ee.spotLights.value=O.state.spot,Ee.spotLightShadows.value=O.state.spotShadow,Ee.rectAreaLights.value=O.state.rectArea,Ee.ltc_1.value=O.state.rectAreaLTC1,Ee.ltc_2.value=O.state.rectAreaLTC2,Ee.pointLights.value=O.state.point,Ee.pointLightShadows.value=O.state.pointShadow,Ee.hemisphereLights.value=O.state.hemi,Ee.directionalShadowMap.value=O.state.directionalShadowMap,Ee.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ee.spotShadowMap.value=O.state.spotShadowMap,Ee.spotLightMatrix.value=O.state.spotLightMatrix,Ee.spotLightMap.value=O.state.spotLightMap,Ee.pointShadowMap.value=O.state.pointShadowMap,Ee.pointShadowMatrix.value=O.state.pointShadowMatrix),A.currentProgram=Ce,A.uniformsList=null,Ce}function ll(B){if(B.uniformsList===null){const he=B.currentProgram.getUniforms();B.uniformsList=up.seqWithValue(he.seq,B.uniforms)}return B.uniformsList}function ur(B,he){const we=qe.get(B);we.outputColorSpace=he.outputColorSpace,we.batching=he.batching,we.batchingColor=he.batchingColor,we.instancing=he.instancing,we.instancingColor=he.instancingColor,we.instancingMorph=he.instancingMorph,we.skinning=he.skinning,we.morphTargets=he.morphTargets,we.morphNormals=he.morphNormals,we.morphColors=he.morphColors,we.morphTargetsCount=he.morphTargetsCount,we.numClippingPlanes=he.numClippingPlanes,we.numIntersection=he.numClipIntersection,we.vertexAlphas=he.vertexAlphas,we.vertexTangents=he.vertexTangents,we.toneMapping=he.toneMapping}function $s(B,he,we,A,O){he.isScene!==!0&&(he=Ft),q.resetTextureUnits();const G=he.fog,W=A.isMeshStandardMaterial?he.environment:null,$=I===null?T.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:zc,ee=(A.isMeshStandardMaterial?ge:F).get(A.envMap||W),ye=A.vertexColors===!0&&!!we.attributes.color&&we.attributes.color.itemSize===4,Ce=!!we.attributes.tangent&&(!!A.normalMap||A.anisotropy>0),Ee=!!we.morphAttributes.position,Re=!!we.morphAttributes.normal,Ge=!!we.morphAttributes.color;let at=Bo;A.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(at=T.toneMapping);const Q=we.morphAttributes.position||we.morphAttributes.normal||we.morphAttributes.color,ce=Q!==void 0?Q.length:0,Ie=qe.get(A),dt=g.state.lights;if(_e===!0&&(Me===!0||B!==k)){const At=B===k&&A.id===N;Fe.setState(A,B,At)}let vt=!1;A.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==dt.state.version||Ie.outputColorSpace!==$||O.isBatchedMesh&&Ie.batching===!1||!O.isBatchedMesh&&Ie.batching===!0||O.isBatchedMesh&&Ie.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ie.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ie.instancing===!1||!O.isInstancedMesh&&Ie.instancing===!0||O.isSkinnedMesh&&Ie.skinning===!1||!O.isSkinnedMesh&&Ie.skinning===!0||O.isInstancedMesh&&Ie.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ie.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ie.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ie.instancingMorph===!1&&O.morphTexture!==null||Ie.envMap!==ee||A.fog===!0&&Ie.fog!==G||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Fe.numPlanes||Ie.numIntersection!==Fe.numIntersection)||Ie.vertexAlphas!==ye||Ie.vertexTangents!==Ce||Ie.morphTargets!==Ee||Ie.morphNormals!==Re||Ie.morphColors!==Ge||Ie.toneMapping!==at||Ie.morphTargetsCount!==ce)&&(vt=!0):(vt=!0,Ie.__version=A.version);let en=Ie.currentProgram;vt===!0&&(en=Ws(A,he,O));let Pn=!1,jn=!1,Rr=!1;const an=en.getUniforms(),Xn=Ie.uniforms;if(Oe.useProgram(en.program)&&(Pn=!0,jn=!0,Rr=!0),A.id!==N&&(N=A.id,jn=!0),Pn||k!==B){Oe.buffers.depth.getReversed()?(Pe.copy(B.projectionMatrix),Qj(Pe),Jj(Pe),an.setValue(H,"projectionMatrix",Pe)):an.setValue(H,"projectionMatrix",B.projectionMatrix),an.setValue(H,"viewMatrix",B.matrixWorldInverse);const ii=an.map.cameraPosition;ii!==void 0&&ii.setValue(H,He.setFromMatrixPosition(B.matrixWorld)),Ke.logarithmicDepthBuffer&&an.setValue(H,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial)&&an.setValue(H,"isOrthographic",B.isOrthographicCamera===!0),k!==B&&(k=B,jn=!0,Rr=!0)}if(O.isSkinnedMesh){an.setOptional(H,O,"bindMatrix"),an.setOptional(H,O,"bindMatrixInverse");const At=O.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),an.setValue(H,"boneTexture",At.boneTexture,q))}O.isBatchedMesh&&(an.setOptional(H,O,"batchingTexture"),an.setValue(H,"batchingTexture",O._matricesTexture,q),an.setOptional(H,O,"batchingIdTexture"),an.setValue(H,"batchingIdTexture",O._indirectTexture,q),an.setOptional(H,O,"batchingColorTexture"),O._colorsTexture!==null&&an.setValue(H,"batchingColorTexture",O._colorsTexture,q));const Hn=we.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&Ct.update(O,we,en),(jn||Ie.receiveShadow!==O.receiveShadow)&&(Ie.receiveShadow=O.receiveShadow,an.setValue(H,"receiveShadow",O.receiveShadow)),A.isMeshGouraudMaterial&&A.envMap!==null&&(Xn.envMap.value=ee,Xn.flipEnvMap.value=ee.isCubeTexture&&ee.isRenderTargetTexture===!1?-1:1),A.isMeshStandardMaterial&&A.envMap===null&&he.environment!==null&&(Xn.envMapIntensity.value=he.environmentIntensity),jn&&(an.setValue(H,"toneMappingExposure",T.toneMappingExposure),Ie.needsLights&&Ar(Xn,Rr),G&&A.fog===!0&&Xe.refreshFogUniforms(Xn,G),Xe.refreshMaterialUniforms(Xn,A,V,oe,g.state.transmissionRenderTarget[B.id]),up.upload(H,ll(Ie),Xn,q)),A.isShaderMaterial&&A.uniformsNeedUpdate===!0&&(up.upload(H,ll(Ie),Xn,q),A.uniformsNeedUpdate=!1),A.isSpriteMaterial&&an.setValue(H,"center",O.center),an.setValue(H,"modelViewMatrix",O.modelViewMatrix),an.setValue(H,"normalMatrix",O.normalMatrix),an.setValue(H,"modelMatrix",O.matrixWorld),A.isShaderMaterial||A.isRawShaderMaterial){const At=A.uniformsGroups;for(let ii=0,fs=At.length;ii<fs;ii++){const Vt=At[ii];se.update(Vt,en),se.bind(Vt,en)}}return en}function Ar(B,he){B.ambientLightColor.needsUpdate=he,B.lightProbe.needsUpdate=he,B.directionalLights.needsUpdate=he,B.directionalLightShadows.needsUpdate=he,B.pointLights.needsUpdate=he,B.pointLightShadows.needsUpdate=he,B.spotLights.needsUpdate=he,B.spotLightShadows.needsUpdate=he,B.rectAreaLights.needsUpdate=he,B.hemisphereLights.needsUpdate=he}function Qc(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(B,he,we){qe.get(B.texture).__webglTexture=he,qe.get(B.depthTexture).__webglTexture=we;const A=qe.get(B);A.__hasExternalTextures=!0,A.__autoAllocateDepthBuffer=we===void 0,A.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),A.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(B,he){const we=qe.get(B);we.__webglFramebuffer=he,we.__useDefaultFramebuffer=he===void 0},this.setRenderTarget=function(B,he=0,we=0){I=B,L=he,P=we;let A=!0,O=null,G=!1,W=!1;if(B){const ee=qe.get(B);if(ee.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(H.FRAMEBUFFER,null),A=!1;else if(ee.__webglFramebuffer===void 0)q.setupRenderTarget(B);else if(ee.__hasExternalTextures)q.rebindTextures(B,qe.get(B.texture).__webglTexture,qe.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){const Ee=B.depthTexture;if(ee.__boundDepthTexture!==Ee){if(Ee!==null&&qe.has(Ee)&&(B.width!==Ee.image.width||B.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(B)}}const ye=B.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(W=!0);const Ce=qe.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(Ce[he])?O=Ce[he][we]:O=Ce[he],G=!0):B.samples>0&&q.useMultisampledRTT(B)===!1?O=qe.get(B).__webglMultisampledFramebuffer:Array.isArray(Ce)?O=Ce[we]:O=Ce,z.copy(B.viewport),J.copy(B.scissor),Z=B.scissorTest}else z.copy(j).multiplyScalar(V).floor(),J.copy(de).multiplyScalar(V).floor(),Z=Ue;if(Oe.bindFramebuffer(H.FRAMEBUFFER,O)&&A&&Oe.drawBuffers(B,O),Oe.viewport(z),Oe.scissor(J),Oe.setScissorTest(Z),G){const ee=qe.get(B.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+he,ee.__webglTexture,we)}else if(W){const ee=qe.get(B.texture),ye=he||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ee.__webglTexture,we||0,ye)}N=-1},this.readRenderTargetPixels=function(B,he,we,A,O,G,W){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $=qe.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&W!==void 0&&($=$[W]),$){Oe.bindFramebuffer(H.FRAMEBUFFER,$);try{const ee=B.texture,ye=ee.format,Ce=ee.type;if(!Ke.textureFormatReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}he>=0&&he<=B.width-A&&we>=0&&we<=B.height-O&&H.readPixels(he,we,A,O,Lt.convert(ye),Lt.convert(Ce),G)}finally{const ee=I!==null?qe.get(I).__webglFramebuffer:null;Oe.bindFramebuffer(H.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(B,he,we,A,O,G,W){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $=qe.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&W!==void 0&&($=$[W]),$){const ee=B.texture,ye=ee.format,Ce=ee.type;if(!Ke.textureFormatReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(he>=0&&he<=B.width-A&&we>=0&&we<=B.height-O){Oe.bindFramebuffer(H.FRAMEBUFFER,$);const Ee=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ee),H.bufferData(H.PIXEL_PACK_BUFFER,G.byteLength,H.STREAM_READ),H.readPixels(he,we,A,O,Lt.convert(ye),Lt.convert(Ce),0);const Re=I!==null?qe.get(I).__webglFramebuffer:null;Oe.bindFramebuffer(H.FRAMEBUFFER,Re);const Ge=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Zj(H,Ge,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ee),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,G),H.deleteBuffer(Ee),H.deleteSync(Ge),G}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(B,he=null,we=0){B.isTexture!==!0&&(tc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),he=arguments[0]||null,B=arguments[1]);const A=Math.pow(2,-we),O=Math.floor(B.image.width*A),G=Math.floor(B.image.height*A),W=he!==null?he.x:0,$=he!==null?he.y:0;q.setTexture2D(B,0),H.copyTexSubImage2D(H.TEXTURE_2D,we,0,0,W,$,O,G),Oe.unbindTexture()};const Qo=H.createFramebuffer(),hs=H.createFramebuffer();this.copyTextureToTexture=function(B,he,we=null,A=null,O=0,G=null){B.isTexture!==!0&&(tc("WebGLRenderer: copyTextureToTexture function signature has changed."),A=arguments[0]||null,B=arguments[1],he=arguments[2],G=arguments[3]||0,we=null),G===null&&(O!==0?(tc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),G=O,O=0):G=0);let W,$,ee,ye,Ce,Ee,Re,Ge,at;const Q=B.isCompressedTexture?B.mipmaps[G]:B.image;if(we!==null)W=we.max.x-we.min.x,$=we.max.y-we.min.y,ee=we.isBox3?we.max.z-we.min.z:1,ye=we.min.x,Ce=we.min.y,Ee=we.isBox3?we.min.z:0;else{const Hn=Math.pow(2,-O);W=Math.floor(Q.width*Hn),$=Math.floor(Q.height*Hn),B.isDataArrayTexture?ee=Q.depth:B.isData3DTexture?ee=Math.floor(Q.depth*Hn):ee=1,ye=0,Ce=0,Ee=0}A!==null?(Re=A.x,Ge=A.y,at=A.z):(Re=0,Ge=0,at=0);const ce=Lt.convert(he.format),Ie=Lt.convert(he.type);let dt;he.isData3DTexture?(q.setTexture3D(he,0),dt=H.TEXTURE_3D):he.isDataArrayTexture||he.isCompressedArrayTexture?(q.setTexture2DArray(he,0),dt=H.TEXTURE_2D_ARRAY):(q.setTexture2D(he,0),dt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,he.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,he.unpackAlignment);const vt=H.getParameter(H.UNPACK_ROW_LENGTH),en=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Pn=H.getParameter(H.UNPACK_SKIP_PIXELS),jn=H.getParameter(H.UNPACK_SKIP_ROWS),Rr=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Q.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Q.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ye),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ce),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ee);const an=B.isDataArrayTexture||B.isData3DTexture,Xn=he.isDataArrayTexture||he.isData3DTexture;if(B.isDepthTexture){const Hn=qe.get(B),At=qe.get(he),ii=qe.get(Hn.__renderTarget),fs=qe.get(At.__renderTarget);Oe.bindFramebuffer(H.READ_FRAMEBUFFER,ii.__webglFramebuffer),Oe.bindFramebuffer(H.DRAW_FRAMEBUFFER,fs.__webglFramebuffer);for(let Vt=0;Vt<ee;Vt++)an&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.get(B).__webglTexture,O,Ee+Vt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.get(he).__webglTexture,G,at+Vt)),H.blitFramebuffer(ye,Ce,W,$,Re,Ge,W,$,H.DEPTH_BUFFER_BIT,H.NEAREST);Oe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(O!==0||B.isRenderTargetTexture||qe.has(B)){const Hn=qe.get(B),At=qe.get(he);Oe.bindFramebuffer(H.READ_FRAMEBUFFER,Qo),Oe.bindFramebuffer(H.DRAW_FRAMEBUFFER,hs);for(let ii=0;ii<ee;ii++)an?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Hn.__webglTexture,O,Ee+ii):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Hn.__webglTexture,O),Xn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,At.__webglTexture,G,at+ii):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,At.__webglTexture,G),O!==0?H.blitFramebuffer(ye,Ce,W,$,Re,Ge,W,$,H.COLOR_BUFFER_BIT,H.NEAREST):Xn?H.copyTexSubImage3D(dt,G,Re,Ge,at+ii,ye,Ce,W,$):H.copyTexSubImage2D(dt,G,Re,Ge,ye,Ce,W,$);Oe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Xn?B.isDataTexture||B.isData3DTexture?H.texSubImage3D(dt,G,Re,Ge,at,W,$,ee,ce,Ie,Q.data):he.isCompressedArrayTexture?H.compressedTexSubImage3D(dt,G,Re,Ge,at,W,$,ee,ce,Q.data):H.texSubImage3D(dt,G,Re,Ge,at,W,$,ee,ce,Ie,Q):B.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,G,Re,Ge,W,$,ce,Ie,Q.data):B.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,G,Re,Ge,Q.width,Q.height,ce,Q.data):H.texSubImage2D(H.TEXTURE_2D,G,Re,Ge,W,$,ce,Ie,Q);H.pixelStorei(H.UNPACK_ROW_LENGTH,vt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,en),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Pn),H.pixelStorei(H.UNPACK_SKIP_ROWS,jn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Rr),G===0&&he.generateMipmaps&&H.generateMipmap(dt),Oe.unbindTexture()},this.copyTextureToTexture3D=function(B,he,we=null,A=null,O=0){return B.isTexture!==!0&&(tc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),we=arguments[0]||null,A=arguments[1]||null,B=arguments[2],he=arguments[3],O=arguments[4]||0),tc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(B,he,we,A,O)},this.initRenderTarget=function(B){qe.get(B).__webglFramebuffer===void 0&&q.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?q.setTextureCube(B,0):B.isData3DTexture?q.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?q.setTexture2DArray(B,0):q.setTexture2D(B,0),Oe.unbindTexture()},this.resetState=function(){L=0,P=0,I=null,Oe.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Is}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=sn._getDrawingBufferColorSpace(e),t.unpackColorSpace=sn._getUnpackColorSpace()}}
window.DBA_EQ=function(A){var e={};try{if(!A||!A.id||!window.__dbaGetInv)return e;window.__dbaGetInv().forEach(function(o){if(o.equippedTo===A.id&&o.slot)e[o.slot]=o});if(e.mainhand)e.weapon=e.mainhand;if(e.chest)e.armor=e.chest}catch(x){}return e};
window.DBA_APPR=function(it){return it&&it.skin?Object.assign({},it,{base:it.skin.b,id:it.skin.i,rarity:it.skin.r,name:it.skin.n}):it};
window.DBA_RARS=["bianco","blu","viola","oro","rosso"];
window.DBA_GRIM=(function(){var K="dba_grim_v1",G={},fresh=[],boot=true;try{G=JSON.parse(localStorage.getItem(K)||"{}")||{}}catch(e){G={}}
 var sv=function(){try{localStorage.setItem(K,JSON.stringify(G))}catch(e){}},key=function(it){return it.slot+"|"+it.base+"|"+it.rarity};
 var reg=function(it){if(!it||!it.base||!it.slot||!it.rarity)return false;var k=key(it);if(G[k])return false;G[k]={s:it.slot,b:it.base,r:it.rarity,i:it.id,n:it.name,ic:it.icon||"",si:it.slotIcon||"",h:it.hands||null,o:it.ohk||null,sl:it.slotLabel||it.slot};if(!boot)fresh.push(G[k]);sv();return true};
 var scan=function(){var n=0;try{(window.__dbaGetInv?window.__dbaGetInv():[]).forEach(function(it){if(reg(it))n++})}catch(e){}return n};
 setInterval(function(){try{if(window.__dbaGetInv&&window.__dbaGetInv().length>=0){scan();boot=false}}catch(e){}},1500);
 return{all:function(){return G},reg:reg,scan:scan,key:key,fresh:function(){var f=fresh;fresh=[];return f},merge:function(o){var c=0;if(o)for(var k in o)if(!G[k]){G[k]=o[k];c++}if(c)sv();return c},count:function(){return Object.keys(G).length}}})();
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
window.DBA_SETFXT=function(fx){var a=[];for(var k in fx)if(DBA_EN[k])a.push(DBA_EN[k][0]+" "+DBA_EN[k][3](DBA_EN[k][2](fx[k],3)));return a.join(" · ")};
window.DBA_ENP=function(key,hid){var inv=[],p=0,ids={};try{inv=window.__dbaGetInv()}catch(e){}inv.forEach(function(it){if(it.equippedTo){ids[it.equippedTo]=1;if(it.ench===key&&(hid==null||it.equippedTo===hid))p+=1+Math.max(0,DBA_RARS.indexOf(it.rarity))*.5}});if(hid!=null)p+=DBA_SETFX(hid)[key]||0;else for(var h in ids)p+=DBA_SETFX(h)[key]||0;return p};
function WOW_hash(s){var h=2166136261;s=String(s);for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
var WOW_RARC={bianco:15066597,blu:3900150,viola:11032055,oro:16497188,rosso:15684432};
var WOW_RT={bianco:0,blu:1,viola:2,oro:3,rosso:4};
var WOW_WK={"Bastone":"staff","Spada":"sword","Ascia":"axe","Martello":"hammer","Arco":"bow","Arco Lungo":"bow","Pugnale":"dagger","Pugnali Gemelli":"dagger","Lancia":"spear","Mazza":"mace","Balestra":"crossbow","Spadone":"greatsword","Katana":"katana","Falce":"scythe","Scimitarra":"scimitar","Ascia Bipenne":"axe","Maglio":"hammer"};
var WOW_AK={"Armatura":"plate","Corazza":"plate","Piastre":"plate","Cuirass":"plate","Cotta di Maglia":"mail","Usbergo":"mail","Veste":"cloth","Tunica":"cloth","Farsetto":"leather","Gambali":"leather","Giubbotto":"leather"};
var WOW_HK={"Elmo":"helmet","Cappuccio":"hood","Corona":"crown","Diadema":"circlet","Maschera":"mask","Cappello":"hat","Cimiero":"crest","Cerchietto":"circlet","Corona di Spine":"thorn","Velo":"veil","Elmo Alato":"winged"};
function WOW_skin(T,it){it=window.DBA_APPR?DBA_APPR(it):it;var h=WOW_hash(it.id||it.name),hue=(h%360)/360,r=function(n){return((h>>>n)%100)/100},col=function(hh,s,l){return new T.Rt().setHSL(((hh%1)+1)%1,s,l)},b=String(it.name||"");
 return{h:h,k:it.base||b.slice(0,Math.max(0,b.lastIndexOf(" "))),t:WOW_RT[it.rarity]||0,acc:new T.Rt(WOW_RARC[it.rarity]||15066597),p:col(hue,.5+r(3)*.3,.42+r(6)*.18),s:col(hue+.08+r(9)*.1,.35+r(12)*.3,.3+r(15)*.25),d:col(hue,.3,.18)}}
var WOW_RACES={
umano:{n:"Umano",h:0.95,w:1,hd:.55,skin:[15778208,14725248,13668448,9064496,7029286],hair:[1710618,5979676,12093483,14263178,8007194],eye:null,ears:"round"},
nano:{n:"Nano",h:0.66,w:1.15,hd:.8,skin:[14887298,13701990,12090962],hair:[8010260,11887901,14277081,1710618,11018782],eye:null,ears:"round",beard:1,nose:"big"},
elfo_notte:{n:"Elfo della Notte",h:1.06,w:.95,hd:.58,skin:[8218544,9368772,7035560],hair:[3117930,3825615,12043494,8011696,1780314],eye:14217471,glow:1,ears:"longup"},
gnomo:{n:"Gnomo",h:0.4,w:.9,hd:1.0,skin:[15977912,15119514],hair:[16736168,5099745,15921906,6742122,11759539],eye:null,ears:"gnome",nose:"bulb",gnome:1},
draenei:{n:"Draenei",h:1.1,w:1.12,hd:.62,skin:[5242838,6950880,5927881],hair:[1710634,15263984,3877466],eye:13560063,glow:1,ears:"point",horns:1,tail:"hoof",hoof:1},
worgen:{n:"Worgen",h:1.12,w:1.1,hd:.68,skin:[7039851,5916210,9074274,3815488],hair:[2763306,4880938,9079434],eye:16762938,glow:1,ears:"wolf",snout:1,tail:"fur",hunch:.14,claws:1,fur:1},
pandaren:{n:"Pandaren",h:0.92,w:1.35,hd:.85,skin:[16118250],hair:[1710618],eye:null,ears:"roundbig",snout:.5,tail:"nub",fur:1,panda:1},
orco:{n:"Orco",h:1.08,w:1.2,hd:.62,hunch:.12,skin:[6003260,5147189,6989898,8021562],hair:[1118481,3808274,9079434],eye:16734778,ears:"point",tusks:1,jaw:1},
non_morto:{n:"Non Morto",h:0.92,w:.9,hd:.56,skin:[10135690,11023514,9083518],hair:[3817258,6975066,1710618],eye:15269738,glow:1,ears:"ragged",skeleton:1},
tauren:{n:"Tauren",h:1.22,w:1.3,hd:.62,skin:[8014378,3811874,11569754,15261904,9066042],hair:[1708553,13680800,5909012],eye:null,ears:"cow",snout:1.3,horns:2,tail:"tuft",hoof:1,fur:1,hunch:.06},
troll:{n:"Troll",h:1.08,w:.95,hd:.6,skin:[4163240,4881050,6971312,3840646],hair:[13642314,2791002,10107344,1710618,14721056],eye:16769354,glow:1,ears:"longdown",tusks:1.3,hunch:.3,mohawk:1},
elfo_sangue:{n:"Elfo del Sangue",h:0.96,w:.92,hd:.56,skin:[15782592,15254702],hair:[15254106,15921904,12071454,3807764],eye:9240378,glow:1,ears:"longback"},
goblin:{n:"Goblin",h:0.5,w:.95,hd:.95,skin:[8698940,9814090,6989882],hair:[1710618,4864538],eye:16769354,ears:"longside",nose:"huge"}
};
var WOW_PROP={
umano:{lift:.40,bwm:.84},
elfo_notte:{lift:.46,bwm:.78},
elfo_sangue:{lift:.42,bwm:.80},
draenei:{lift:.38,bwm:.95,cx:1.1},
worgen:{lift:.30,bwm:.95,cx:1.12},
orco:{lift:.22,bwm:1.05,cx:1.15,cy:1.1},
tauren:{lift:.26,bwm:1.05,cx:1.15,cy:1.1},
troll:{lift:.44,bwm:.85,ht:2.1,hz:.55},
non_morto:{lift:.40,bwm:.78},
nano:{lift:.08,bwm:1,bl:1.25,cy:1.1},
gnomo:{lift:.02,bwm:.9,bl:1.2},
goblin:{lift:.08,bwm:.9},
pandaren:{lift:.08,bwm:1,bl:1.5,cx:1.1,cy:1.15}
};
var WOW_RK=Object.keys(WOW_RACES);WOW_RK.forEach(function(k){WOW_RACES[k].k=k});
var WOW_CLS={
druido:{r:"Druido",arm:"cloth",robe:1,pa:"leaf",hm:"antlers",c2:5929525},
monaco:{r:"Monaco",arm:"bare",pa:"none",hm:"band",c2:14721088,sash:1},
chierico:{r:"Sacerdote",arm:"cloth",robe:1,pa:"round",hm:"circlet",c2:16114344,trim:15912806,tabard:1},
mago_sangue:{r:"Stregone",arm:"cloth",robe:1,pa:"spiked",hm:"hood",c2:3805972,skull:1},
cavaliere:{r:"Guerriero",arm:"plate",pa:"big",hm:"helmet",sh:"kite",cape:1,crest:1,c2:10199218},
barbaro:{r:"Guerriero",arm:"bare",pa:"fur",hm:"horned",c2:8018490,paint:1},
guardiano:{r:"Guerriero",arm:"plate",pa:"huge",hm:"helmet",sh:"tower",c2:8021578,stone:1},
paladino:{r:"Paladino",arm:"plate",pa:"big",hm:"circlet",sh:"kite",cape:1,gold:1,halo:1,c2:15912806},
guerriero:{r:"Guerriero",arm:"plate",pa:"spiked",hm:"helmet",sh:"round",c2:10199218},
assassino:{r:"Ladro",arm:"leather",pa:"none",hm:"hood",mask:1,dual:1,cape:1,c2:2763315},
gladiatore:{r:"Guerriero",arm:"plate",pa:"big1",hm:"helmet",sh:"round",crest:1,c2:11569722},
berserker:{r:"Guerriero",arm:"bare",pa:"spiked",hm:"horned",paint:1,c2:9054746},
spadaccino:{r:"Monaco",arm:"leather",pa:"none",hm:"band",cape:1,sash:1,c2:13684952},
cavaliere_oscuro:{r:"Cavaliere della Morte",arm:"plate",pa:"spiked",hm:"horned",cape:1,dark:1,glow:6737151,runes:1,c2:2764602},
ninjia:{r:"Ladro",arm:"leather",pa:"none",hm:"hood",mask:1,sash:1,c2:1710624},
boia:{r:"Guerriero",arm:"leather",pa:"none",hm:"hood",mask:1,exec:1,c2:3811872},
arciere:{r:"Cacciatore",arm:"leather",pa:"small",hm:"hood",quiver:1,cape:1,c2:4876858},
mago:{r:"Mago",arm:"cloth",robe:1,pa:"small",hm:"hat",c2:2767498},
stregone:{r:"Stregone",arm:"cloth",robe:1,pa:"spiked",hm:"horned",skull:1,c2:4856426},
necromante:{r:"Negromante",arm:"cloth",robe:1,pa:"skull",hm:"hood",skull:1,c2:1318938,glow:8388458},
crio_mago:{r:"Mago",arm:"cloth",robe:1,pa:"ice",hm:"hat",c2:10475775,ice:1},
fulmine_mago:{r:"Sciamano",arm:"leather",pa:"bolt",hm:"circlet",totem:1,c2:2775759,bolt:1},
cacciatore:{r:"Cacciatore",arm:"leather",pa:"small",hm:"hood",quiver:1,c2:5917226}
};
function WOW_pick(a){return a[Math.floor(Math.random()*a.length)]}
function WOW_ensure(G){
 if(G&&G.race&&WOW_RACES[G.race])return G;
 var k=WOW_pick(WOW_RK),R=WOW_RACES[k];
 G.race=k;G.skinColor=WOW_pick(R.skin);G.hairColor=WOW_pick(R.hair);
 if(R.eye!=null)G.eyeColor=R.eye;
 G.beardColor=G.hairColor;
 if(R.beard&&G.sex!=="female"&&!(G.beardStyle>=0))G.beardStyle=1;
 return G}
function WOW_merge(T,list){
 if(!list.length)return null;
 var pos=[],col=[],nor=[],uv=[],i,j,hasN=true;
 for(i=0;i<list.length;i++){
  var q=list[i],g=q.geo,r=q.r;
  if(q.s)g.scale(q.s[0],q.s[1],q.s[2]);
  if(r){if(r[2])g.rotateZ(r[2]);if(r[1])g.rotateY(r[1]);if(r[0])g.rotateX(r[0])}
  if(q.k!==1)g.scale(q.k,q.k,q.k);
  g.translate(q.ox+q.p[0]*q.k,q.oy+q.p[1]*q.k,q.oz+q.p[2]*q.k);
  if(g.index)g=g.toNonIndexed();
  var a=g.attributes.position.array,n=a.length/3,c=q.col,na=g.attributes.normal,ua=g.attributes.uv;
  if(!na)hasN=false;
  for(j=0;j<a.length;j++){pos.push(a[j]);nor.push(na?na.array[j]:0)}
  for(j=0;j<n;j++){col.push(c.r,c.g,c.b);uv.push(ua?ua.array[j*2]:0,ua?ua.array[j*2+1]:0)}
  if(g.dispose)g.dispose()}
 var G=new T.Jn();
 G.setAttribute("position",new T.on(new Float32Array(pos),3));
 G.setAttribute("color",new T.on(new Float32Array(col),3));
 G.setAttribute("uv",new T.on(new Float32Array(uv),2));
 if(hasN)G.setAttribute("normal",new T.on(new Float32Array(nor),3));else G.computeVertexNormals();
 return G}
var DBAQ=(function(){var l=3;try{var sv=localStorage.getItem('dba_q'),v=sv==='low'?0:(sv==='high'?2:parseInt(sv));if(v>=0&&v<=3)l=v}catch(e){}return{l:l,tex:[256,512,1024,1024][l],htex:[256,512,512,1024][l],seg:[1,1.5,2,3.5][l],an:[1,2,4,8][l],bs:[.75,1,1.5,2.2][l],bump:l>=2?1:0,disp:[0,0,.025,.045][l]}})();
var DBA_BIOTEX={inferno:window.__ASSETS["tex_00_1e82c47f.jpg"],frost:window.__ASSETS["tex_01_878cad40.jpg"],natura:window.__ASSETS["tex_02_d2a9ef61.jpg"],ombra:window.__ASSETS["tex_03_de1a8120.jpg"],tempesta:window.__ASSETS["tex_04_afee87a3.jpg"],sangue:window.__ASSETS["tex_05_814d0546.jpg"],cristallo:window.__ASSETS["tex_06_bf00866f.jpg"],magma:window.__ASSETS["tex_07_6c9d9b53.jpg"],spettrale:window.__ASSETS["tex_08_9a003c61.jpg"],ossa:window.__ASSETS["tex_09_d9dc744b.jpg"],luce:window.__ASSETS["tex_10_c8e5073f.jpg"],abisso:window.__ASSETS["tex_11_9c2d285d.jpg"]};
var DBA_STARTIMG=window.__ASSETS["tex_12_b62db5ba.jpg"];
function DBA_ST(){var c=document.createElement("canvas");c.width=1024;c.height=560;var t=new Og(c),i=new Image();i.onload=function(){c.getContext("2d").drawImage(i,0,0,1024,560);t.needsUpdate=!0};i.src=DBA_STARTIMG;t.anisotropy=DBAQ.an;return t}
var DBA_WALLIMG=window.__ASSETS["tex_13_c99596d9.jpg"];
var DBA_ROOFIMG=window.__ASSETS["tex_14_9101972a.jpg"];
var DBA_HM={};
function DBA_HTEX(src,w,h,rx,ry){var c=document.createElement("canvas");c.width=w;c.height=h;var t=new Og(c),i=new Image();i.onload=function(){c.getContext("2d").drawImage(i,0,0,w,h);t.needsUpdate=!0};i.src=src;t.wrapS=t.wrapT=1002;t.repeat.set(rx,ry);t.colorSpace="srgb";t.anisotropy=DBAQ.an;return t}
var DBA_NVT={w:[window.__ASSETS["tex_15_d4e56a2e.jpg"],window.__ASSETS["tex_16_a3872503.jpg"],window.__ASSETS["tex_17_7c51f811.jpg"],window.__ASSETS["tex_18_4f3ca090.jpg"],window.__ASSETS["tex_19_94f1b8fb.jpg"],window.__ASSETS["tex_20_988cd76e.jpg"],window.__ASSETS["tex_21_9d5d10f1.jpg"],window.__ASSETS["tex_22_5785631d.jpg"],window.__ASSETS["tex_23_3ce03568.jpg"]],r:[window.__ASSETS["tex_24_36936f6a.jpg"],window.__ASSETS["tex_25_449bd2e9.jpg"],window.__ASSETS["tex_26_247e260a.jpg"],window.__ASSETS["tex_27_c770adc5.jpg"],window.__ASSETS["tex_28_edca00b3.jpg"],window.__ASSETS["tex_29_7a703d4f.jpg"],window.__ASSETS["tex_30_3b7ef12f.jpg"],window.__ASSETS["tex_31_0f48a30c.jpg"],window.__ASSETS["tex_32_c8c569f4.jpg"],window.__ASSETS["tex_33_b0b62dcf.jpg"]],road:window.__ASSETS["tex_34_f882ec0d.jpg"],plaza:window.__ASSETS["tex_35_918f958f.jpg"],g:[window.__ASSETS["tex_36_7885bd30.jpg"],window.__ASSETS["tex_37_ea8ea750.jpg"],window.__ASSETS["tex_38_a5839795.jpg"],window.__ASSETS["tex_39_4745a15c.jpg"]],canvas:window.__ASSETS["tex_40_ad2958a9.jpg"],banner:window.__ASSETS["tex_41_fbf954d5.jpg"],wicker:window.__ASSETS["tex_42_968ac72f.jpg"],barrel:window.__ASSETS["tex_43_ea00035b.jpg"]};
var DBA_PLG=null;
var DBA_NVALT=[[[1,1],[6,1],[7,1]],[[2,2],[7,8],[2,8]],[[0,0],[7,6],[8,9]],[[5,5],[8,9],[5,9]],[[-1,-1],[7,8],[6,7]],[[0,0],[6,7],[8,9]],[[5,5],[2,5],[5,8]],[[1,1],[6,7],[1,9]],[[3,3],[3,6],[7,3]],[[2,2],[7,8],[8,9]],[[4,4],[4,9],[7,9]],[[3,3],[7,7],[3,6]],[[5,5],[6,7],[8,9]],[[5,5],[8,2],[7,8]]];
var DBA_NVRD=[3,2,1,-1,-1,1,-1,3,0,2,-1,0,3,-1];
function DBA_NVM(kind,f,tint){var key="v"+kind+f+(tint?"t"+tint:"");if(DBA_HM[key])return DBA_HM[key];var rep=kind=="w"?[2.2,1.4]:[2.5,1.3],tx=DBA_HTEX(DBA_NVT[kind][f],512,512,rep[0],rep[1]),m=new zt({color:16777215,map:tx,bumpMap:DBAQ.bump?tx:null,bumpScale:kind=="w"?2.2:1.8,roughness:kind=="w"?.92:.85,metalness:.02});if(tint)m.color.copy(new Rt(16777215).lerp(new Rt(tint),.35));return DBA_HM[key]=m}
function DBA_NVG(k,src,rx,ry,tint,key){var kk="vg"+key+k;if(DBA_HM[kk])return DBA_HM[kk];var tx=DBA_HTEX(src,512,512,rx,ry),m=new zt({color:16777215,map:tx,bumpMap:DBAQ.bump?tx:null,bumpScale:1.6,roughness:.95,metalness:.01});if(tint&&k)m.color.copy(new Rt(16777215).lerp(new Rt(tint),.22));return DBA_HM[kk]=m}
var DBA_NGM=null;
var DBA_SMK=[];
function DBA_NGI(){if(DBA_NGM)return DBA_NGM;var c=document.createElement("canvas");c.width=c.height=128;var x=c.getContext("2d"),g=x.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,"rgba(255,210,130,1)");g.addColorStop(.35,"rgba(255,160,70,.5)");g.addColorStop(1,"rgba(255,120,40,0)");x.fillStyle=g;x.fillRect(0,0,128,128);var pt=new Og(c),wc=document.createElement("canvas");wc.width=64;wc.height=72;var wx=wc.getContext("2d"),wg=wx.createLinearGradient(0,0,0,72);wg.addColorStop(0,"#ffe9a8");wg.addColorStop(1,"#ff9a30");wx.fillStyle=wg;wx.fillRect(0,0,64,72);wx.fillStyle="rgba(40,20,5,.85)";wx.fillRect(29,0,6,72);wx.fillRect(0,33,64,6);wx.lineWidth=7;wx.strokeStyle="rgba(40,20,5,.95)";wx.strokeRect(0,0,64,72);var wt=new Og(wc);
 return DBA_NGM={glow:new ln({map:pt,color:16777215,transparent:!0,opacity:0,blending:2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),halo:new ln({color:0xffa040,transparent:!0,opacity:0,blending:2,depthWrite:!1}),win:new ln({map:wt,color:16777215,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),lamp:new ln({color:0x756a35}),fl:new ln({color:0xff6a14}),wg:new qd(3.2,3.6),wg3:new qd(2.6,3.4),pg:new qd(1,1)}}
function DBA_NGU(dl,t,px,pz){var m=DBA_NGI(),n=Math.max(0,Math.min(1,(.55-dl)/.3));m.glow.opacity=n*.9;m.halo.opacity=n*.12;m.win.opacity=n*.95;m.lamp.color.setRGB(.46+.54*n,.42+.46*n,.2+.25*n);if(DBA_VMAT)DBA_VMAT.emissiveIntensity=.7+.9*n;
 for(var i=0;i<DBA_SMK.length;i++){var s=DBA_SMK[i];if(Math.hypot(px-s.x,pz-s.z)>220){continue}s.fl.scale.set(.6+Math.sin(t*9+i)*.08,1.2+Math.sin(t*13+i*2)*.25,.6);s.pl.material===m.glow;for(var j=0;j<s.p.length;j++){var q=s.p[j],f=(t*.3+q.ph)%1;q.m.position.set(s.dx+f*1.6+Math.sin(t+q.ph*9)*.3,3.2+f*9,s.dz);var sc=.7+f*1.9;q.m.scale.set(sc,sc,sc);q.mt.opacity=.34*(1-f)}}}
function DBA_NVT1(key,src,w,h,rx,ry){var kk="t1"+key;if(DBA_HM[kk])return DBA_HM[kk];return DBA_HM[kk]=DBA_HTEX(src,w,h,rx,ry)}
function DBA_HCOL(key,base,col,f){var m=DBA_HM[key];if(m)return m;m=base().clone();var c=new Rt(16777215).lerp(new Rt(col),f);m.color.copy(c);return DBA_HM[key]=m}
var DBA_DOORIMG=window.__ASSETS["tex_44_49bf134c.jpg"];
var DBA_WINIMG=window.__ASSETS["tex_45_7d3c8462.jpg"];
function DBA_HDEC(k){if(DBA_HM[k])return DBA_HM[k];var src=k=="door"?DBA_DOORIMG:DBA_WINIMG,w=512,h=k=="door"?646:557,c=document.createElement("canvas");c.width=w;c.height=h;var t=new Og(c),i=new Image();i.onload=function(){c.getContext("2d").drawImage(i,0,0,w,h);t.needsUpdate=!0};i.src=src;t.colorSpace="srgb";t.anisotropy=DBAQ.an;return DBA_HM[k]=new zt({color:16777215,map:t,roughness:.9,metalness:.02,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}
function DBA_HW(){return DBA_HM.w||(DBA_HM.w=(function(){var t=DBA_HTEX(DBA_WALLIMG,1024,559,.7,.9);return new zt({color:16777215,map:t,bumpMap:DBAQ.bump?t:null,bumpScale:2.2,roughness:.95,metalness:.02})})())}
function DBA_HR(){return DBA_HM.r||(DBA_HM.r=(function(){var t=DBA_HTEX(DBA_ROOFIMG,1024,715,3,1);return new zt({color:16777215,map:t,bumpMap:DBAQ.bump?t:null,bumpScale:1.8,roughness:.85,metalness:.02})})())}
var DBA_BIKEYS=["inferno","frost","natura","ombra","tempesta","sangue","cristallo","magma","sabbie","spettrale","ossa","luce","caos","abisso"];
var DBA_THKEY={fire:"inferno",frost:"frost",nature:"natura",shadow:"ombra",storm:"tempesta",blood:"sangue",crystal:"cristallo",magma:"magma",sand:"sabbie",spectral:"spettrale",bone:"ossa",light:"luce",chaos:"caos",abyss:"abisso"};
window.DBA_BIKEYS=DBA_BIKEYS;
function DBA_BT(k){var c=document.createElement("canvas");c.width=1024;c.height=560;var t=new Og(c),i=new Image();i.onload=function(){c.getContext("2d").drawImage(i,0,0);t.needsUpdate=!0};i.src=DBA_BIOTEX[k];t.anisotropy=DBAQ.an;return t}
var DBA_OTD={"lava": window.__ASSETS["tex_46_45c99926.jpg"], "ice": window.__ASSETS["tex_47_67813469.jpg"], "rune": window.__ASSETS["tex_48_41d61116.jpg"], "bark": window.__ASSETS["tex_49_05477c72.jpg"], "leaf": window.__ASSETS["tex_50_9be679d0.jpg"]};
var DBA_OTS={"lava": [886, 1100], "ice": [800, 993], "rune": [800, 993], "bark": [800, 439], "leaf": [800, 441]};
var DBA_OTT={"bark": {"tile": 2.6, "rot": 0, "sh": 4, "g": [0, 1, 0], "gm": [0, 0, 0], "rough": 0.95, "tint": 0.18}, "leaf": {"tile": 3.6, "rot": 1, "sh": 3, "g": [0, 1, 0], "gm": [0, 0, 0], "rough": 0.9, "tint": 0.22}, "lava": {"tile": 24, "rot": 1, "sh": 3, "g": [0.3, 0.8, 1.5], "gm": [1, 0, 0], "rough": 0.9, "tint": 0.1}, "ice": {"tile": 15, "rot": 1, "sh": 3, "g": [0, 1, 0], "gm": [0, 0, 0], "rough": 0.28, "tint": 0.1}, "rune": {"tile": 6.5, "rot": 1, "sh": 3, "g": [0.08, 0.45, 1.8], "gm": [0.3, 0, 0.7], "rough": 0.85, "tint": 0.1}};
var DBA_OTX={};
var DBA_OMM={};
DBA_OTD.cris=window.__ASSETS["tex_51_e899a532.jpg"];
DBA_OTS.cris=[301,274];
DBA_OTT.cris={"tile":5,"rot":1,"sh":3,"g":[0.08, 0.45, 1.8],"gm":[0.3, 0, 0.7],"rough":0.8,"tint":0.1};
DBA_OTD.magma=window.__ASSETS["tex_52_498805b1.jpg"];
DBA_OTS.magma=[301,274];
DBA_OTT.magma={"tile":20,"rot":1,"sh":3,"g":[0.1, 0.5, 1.7],"gm":[1, 0, 0],"rough":0.9,"tint":0.1};
DBA_OTD.duna=window.__ASSETS["tex_53_d58a43d0.jpg"];
DBA_OTS.duna=[302,274];
DBA_OTT.duna={"tile":14,"rot":1,"sh":3,"g":[0, 1, 0],"gm":[0, 0, 0],"rough":0.95,"tint":0.12};
DBA_OTD.pspe=window.__ASSETS["tex_54_da6e78a7.jpg"];
DBA_OTS.pspe=[301,255];
DBA_OTT.pspe={"tile":5.5,"rot":1,"sh":3,"g":[0.1, 0.5, 1.6],"gm":[0.3, 0, 0.7],"rough":0.85,"tint":0.1};
DBA_OTD.oss=window.__ASSETS["tex_55_869b2065.jpg"];
DBA_OTS.oss=[301,255];
DBA_OTT.oss={"tile":5,"rot":1,"sh":3,"g":[0, 1, 0],"gm":[0, 0, 0],"rough":0.8,"tint":0.1};
DBA_OTD.pdor=window.__ASSETS["tex_56_dcfdbbe4.jpg"];
DBA_OTS.pdor=[302,255];
DBA_OTT.pdor={"tile":5.5,"rot":1,"sh":3,"g":[0.35, 0.75, 1.3],"gm":[0, 0, 1],"rough":0.55,"tint":0.08};
DBA_OTD.caos=window.__ASSETS["tex_57_3972f0c4.jpg"];
DBA_OTS.caos=[301,254];
DBA_OTT.caos={"tile":5,"rot":1,"sh":3,"g":[0.55, 0.9, 1.2],"gm":[0, 0, 1],"rough":0.85,"tint":0.1};
DBA_OTD.abi=window.__ASSETS["tex_58_6fd085b7.jpg"];
DBA_OTS.abi=[301,254];
DBA_OTT.abi={"tile":6,"rot":1,"sh":3,"g":[0.4, 0.75, 1.1],"gm":[0, 0, 1],"rough":0.85,"tint":0.1};
DBA_OTD.red=window.__ASSETS["tex_59_65c3907c.jpg"];
DBA_OTS.red=[302,254];
DBA_OTT.red={"tile":5,"rot":1,"sh":3,"g":[0, 1, 0],"gm":[0, 0, 0],"rough":0.35,"tint":0.08};
DBA_OTD.red2=window.__ASSETS["tex_60_2ccd81b8.jpg"];
DBA_OTS.red2=[301,238];
DBA_OTT.red2={"tile":5,"rot":1,"sh":3,"g":[0, 1, 0],"gm":[0, 0, 0],"rough":0.35,"tint":0.08};
DBA_OTD.caos2=window.__ASSETS["tex_61_55aa4b20.jpg"];
DBA_OTS.caos2=[302,238];
DBA_OTT.caos2={"tile":6,"rot":1,"sh":3,"g":[0.5, 0.9, 1.4],"gm":[0, 0, 1],"rough":0.8,"tint":0.1};
function DBA_OT(k){if(DBA_OTX[k])return DBA_OTX[k];var s=DBA_OTS[k],c=document.createElement("canvas");c.width=s[0];c.height=s[1];var t=new Og(c),i=new Image();i.onload=function(){c.getContext("2d").drawImage(i,0,0);t.needsUpdate=!0};i.src=DBA_OTD[k];t.wrapS=t.wrapT=1002;t.colorSpace="srgb";t.anisotropy=DBAQ.an;return DBA_OTX[k]=t}
function DBA_OM(k){if(DBA_OMM[k])return DBA_OMM[k];var q=DBA_OTT[k],s=DBA_OTS[k],m=new zt({color:16777215,map:DBA_OT(k),roughness:q.rough,metalness:.04});
 if(k=="ice"){m.transparent=!0;m.opacity=.93;m.emissive.set(2775706);m.emissiveIntensity=.22}
 m.onBeforeCompile=function(sh){var u=sh.uniforms;u.uTU={value:1/q.tile};u.uTV={value:s[0]/s[1]/q.tile};u.uRot={value:q.rot};u.uSharp={value:q.sh};u.uGa={value:q.g[0]};u.uGb={value:q.g[1]};u.uGz={value:q.g[2]};u.uGMr={value:q.gm[0]};u.uGMb={value:q.gm[2]};u.uTint={value:q.tint};
  sh.vertexShader="varying vec3 vLP;varying vec3 vLN;varying vec3 vSd;\n"+sh.vertexShader.replace("#include <begin_vertex>","#include <begin_vertex>\n vec3 scL=vec3(length(modelMatrix[0].xyz),length(modelMatrix[1].xyz),length(modelMatrix[2].xyz));vLP=position*scL;vLN=normalize(normal/scL);vec2 wq=modelMatrix[3].xz;vSd=fract(sin(vec3(dot(wq,vec2(12.9898,78.233)),dot(wq,vec2(39.346,11.135)),dot(wq,vec2(73.156,52.235))))*43758.5453);");
  var fp="\nuniform float uTU,uTV,uRot,uSharp,uGa,uGb,uGz,uGMr,uGMb,uTint;varying vec3 vLP;varying vec3 vLN;varying vec3 vSd;\n"+
  "float aaH(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}\n"+
  "float aaN(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(aaH(i),aaH(i+vec2(1.,0.)),f.x),mix(aaH(i+vec2(0.,1.)),aaH(i+vec2(1.,1.)),f.x),f.y);}\n"+
  "vec3 aaS(vec2 p,vec3 sd,vec3 mn){vec2 uv=p*vec2(uTU,uTV);vec3 c1=texture2D(map,uv+sd.xy).rgb;float a=sd.z*6.2831*uRot;mat2 R=mat2(cos(a),-sin(a),sin(a),cos(a));vec2 uv2=R*(uv*.79)+vec2(.371,.613)+sd.yx;vec3 c2=texture2D(map,uv2).rgb;float w=smoothstep(.3,.7,aaN(uv*1.35+sd.xy*37.));vec3 c=mix(c1,c2,w);return max(mn+(c-mn)/sqrt(w*w+(1.-w)*(1.-w)),0.);}\n"+
  "vec3 aaTri(vec3 p,vec3 n,vec3 sd,vec3 mn){vec3 w=pow(abs(n),vec3(uSharp));w/=(w.x+w.y+w.z+1e-5);return aaS(vec2(p.z,p.y),sd,mn)*w.x+aaS(vec2(p.x,p.y),sd+vec3(.31,.72,.13),mn)*w.z+aaS(vec2(p.x,p.z),sd+vec3(.63,.21,.41),mn)*w.y;}\n";
  sh.fragmentShader=sh.fragmentShader.replace("#include <map_pars_fragment>","#include <map_pars_fragment>"+fp)
   .replace("#include <map_fragment>","vec3 aaSd=vSd;vec3 aaMn=texture2D(map,vec2(.5),12.).rgb;vec3 aaC=aaTri(vLP,normalize(vLN),aaSd,aaMn)*(1.-uTint+2.*uTint*aaSd.x);diffuseColor.rgb*=aaC;")
   .replace("#include <emissivemap_fragment>","#include <emissivemap_fragment>\n totalEmissiveRadiance+=aaC*smoothstep(uGa,uGb,aaC.r*uGMr+aaC.b*uGMb)*uGz;")};
 m.customProgramCacheKey=function(){return "aaT"};return DBA_OMM[k]=m}
var DBA_VMAT=null;
function DBA_VM(){if(DBA_VMAT)return DBA_VMAT;var t=DBA_OT("lava");t.wrapS=t.wrapT=1002;t.repeat.set(2.5,1);DBA_VMAT=new zt({color:16777215,map:t,emissive:16777215,emissiveMap:t,emissiveIntensity:.7,roughness:.9,metalness:.04});return DBA_VMAT}
function DBA_TEXOBJ(g,d,bi,GE){var k=d.sh;g.children.forEach(function(c){var t=null,ge=c.geometry;
 if(k=="tree")t=ge===GE.tr?"bark":(ge===GE.lf||ge===GE.sph)?"leaf":null;
 else if(k=="volcano"){if(ge===GE.cone)c.material=DBA_VM();return}
 else if(k=="glacier")t=(ge===GE.box||ge===GE.cone)?"ice":null;
 else if(k=="spike"&&bi==3)t=ge===GE.cone?"rune":null;
 else if(k=="spike"&&bi==13)t=ge===GE.cone?"abi":null;
 else if(k=="crystal")t=ge===GE.cone?(bi==5?(Math.random()<.5?"red":"red2"):"cris"):null;
 else if(k=="dune")t=ge===GE.sph?"duna":null;
 else if(k=="pillar")t=ge===GE.box?(bi==11?"pdor":"pspe"):null;
 else if(k=="bone")t=ge===GE.box?"oss":null;
 else if(k=="chaos")t=ge===GE.box?(Math.random()<.5?"caos":"caos2"):null;
 if(t)c.material=DBA_OM(t)})}
function DBA_FLOOR(th,gc,rc,circ){var Z=DBAQ.tex,L=512,c=document.createElement('canvas');c.width=c.height=Z;var x=c.getContext('2d'),r=Math.random,n=Z/512,hx=function(v){return typeof v=='number'?'#'+('000000'+v.toString(16)).slice(-6):v};x.scale(Z/L,Z/L);gc=hx(gc);rc=hx(rc);
 var pt=function(m){return m*Math.max(1,Math.round(n))};
 var g=x.createRadialGradient(256,256,10,256,256,360);g.addColorStop(0,'rgba(255,255,255,.14)');g.addColorStop(1,'rgba(0,0,0,.4)');
 x.fillStyle=gc;x.fillRect(0,0,L,L);
 function tl(s,col){var a,b;for(a=0;a<L;a+=s)for(b=0;b<L;b+=s){x.fillStyle='rgba('+(r()<.5?'0,0,0':'255,255,255')+','+(r()*.1)+')';x.fillRect(a,b,s,s)}x.strokeStyle=col;x.lineWidth=2;for(a=0;a<=L;a+=s){x.beginPath();x.moveTo(a,0);x.lineTo(a,L);x.stroke();x.beginPath();x.moveTo(0,a);x.lineTo(L,a);x.stroke()}}
 function sp(col,m,s){x.fillStyle=col;for(var a=0;a<pt(m);a++)x.fillRect(r()*L,r()*L,1+r()*s,1+r()*s)}
 function ck(col,m,w,gl){x.strokeStyle=col;x.lineWidth=w;if(gl){x.shadowColor=col;x.shadowBlur=gl}for(var a=0;a<m;a++){var px=r()*L,py=r()*L;x.beginPath();x.moveTo(px,py);for(var k=0;k<7;k++){px+=(r()-.5)*70;py+=(r()-.5)*70;x.lineTo(px,py)}x.stroke()}x.shadowBlur=0}
 function bl(col,m,a0,a1){for(var a=0;a<m;a++){var px=r()*L,py=r()*L,rr=a0+r()*(a1-a0),q=x.createRadialGradient(px,py,0,px,py,rr);q.addColorStop(0,col);q.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=q;x.fillRect(px-rr,py-rr,rr*2,rr*2)}}
 function gs(m,cols){for(var a=0;a<pt(m);a++){var px=r()*L,py=r()*L;x.strokeStyle=cols[r()*cols.length|0];x.lineWidth=1+r();x.beginPath();x.moveTo(px,py);x.lineTo(px+(r()-.5)*5,py-3-r()*9);x.stroke()}}
 function ft(cols,m){for(var a=0;a<m;a++){var px=r()*L,py=r()*L,s=30+r()*60;x.fillStyle=cols[r()*cols.length|0];x.globalAlpha=.25+r()*.4;x.beginPath();x.moveTo(px,py);x.lineTo(px+s,py+(r()-.3)*s);x.lineTo(px+(r()-.5)*s,py+s);x.fill();x.globalAlpha=1}}
 function rp(col,m){x.strokeStyle=col;x.lineWidth=2;for(var a=0;a<m;a++){var y=a*(L/m)+r()*8;x.beginPath();x.moveTo(0,y);for(var b=0;b<=L;b+=16)x.lineTo(b,y+Math.sin(b*.03+a)*5);x.stroke()}}
 function rn(col){x.strokeStyle=col;x.shadowColor=col;x.shadowBlur=10;x.lineWidth=3;[110,150,190].forEach(function(q){x.beginPath();x.arc(256,256,q,0,7);x.stroke()});for(var a=0;a<12;a++){var an=a/6*Math.PI;x.beginPath();x.moveTo(256+Math.cos(an)*110,256+Math.sin(an)*110);x.lineTo(256+Math.cos(an)*190,256+Math.sin(an)*190);x.stroke()}x.shadowBlur=0}
 var K={fire:function(){tl(64,'rgba(0,0,0,.55)');ck('#ff8a30',26,3,12);sp('#ffb050',80,2)},
  phoenix:function(){tl(64,'rgba(0,0,0,.5)');ck('#ffd060',26,3,12);sp('#fff0a0',80,2)},
  magma:function(){bl('rgba(0,0,0,.6)',30,40,110);ck('#ff7a10',46,5,16);ck('#ffd060',20,2,8)},
  frost:function(){tl(80,'rgba(255,255,255,.35)');ck('rgba(60,120,170,.6)',18,2);sp('#ffffff',400,3);bl('rgba(200,240,255,.3)',14,30,80)},
  crystal:function(){ft(['#82d8f0','#c8f4ff','#4aa8d0','#ffffff'],90)},
  nature:function(){bl('rgba(70,50,30,.45)',10,30,70);gs(1400,['#5f9a5c','#2c5a38','#7ab46a','#3d7345']);for(var a=0;a<10;a++){x.fillStyle=a%2?'#f4e27a':'#fff';x.beginPath();x.arc(r()*L,r()*L,3,0,7);x.fill()}},
  venom:function(){bl('rgba(100,220,60,.55)',16,25,80);for(var a=0;a<30;a++){x.strokeStyle='#d0ff80';x.beginPath();x.arc(r()*L,r()*L,3+r()*6,0,7);x.stroke()}ck('rgba(20,60,10,.6)',10,3)},
  shadow:function(){tl(72,'rgba(0,0,0,.6)');rn('#a07aff');sp('#c4a4ff',120,2)},
  void:function(){sp('#ffffff',500,2);bl('rgba(124,58,237,.35)',14,40,120);rn('#7c3aed')},
  spectral:function(){bl('rgba(200,220,255,.3)',22,40,110);tl(96,'rgba(255,255,255,.18)');sp('#e8eeff',200,2)},
  bone:function(){tl(80,'rgba(60,50,35,.5)');ck('rgba(70,60,40,.6)',16,2);x.strokeStyle='rgba(235,228,205,.8)';x.lineWidth=7;for(var a=0;a<9;a++){var px=r()*L,py=r()*L;x.beginPath();x.arc(px,py,24+r()*20,0,Math.PI*(.8+r()*.8));x.stroke()}},
  sand:function(){rp('rgba(120,80,30,.35)',28);rp('rgba(255,235,170,.25)',20);sp('#6a4a20',500,3)},
  storm:function(){tl(90,'rgba(0,0,0,.45)');bl('rgba(60,90,130,.35)',12,30,80);ck('#fff3a0',10,2,12);sp('#a0b4d0',200,2)},
  thunder:function(){tl(90,'rgba(0,0,0,.45)');ck('#ffd060',12,3,14);bl('rgba(60,60,40,.35)',10,30,70)},
  blood:function(){tl(80,'rgba(0,0,0,.5)');bl('rgba(130,10,10,.65)',14,25,90);sp('#a01818',300,3)},
  light:function(){tl(96,'rgba(190,160,70,.55)');rn('#f4d060');sp('#fff0b0',150,2)},
  chaos:function(){x.lineWidth=3;['#d946ef','#7c3aed','#ff80ff'].forEach(function(col,k){x.strokeStyle=col;x.shadowColor=col;x.shadowBlur=10;x.beginPath();for(var a=0;a<260;a++){var an=a*.12+k*2.1,rad=a*.5;x.lineTo(256+Math.cos(an)*rad,256+Math.sin(an)*rad)}x.stroke()});x.shadowBlur=0;ft(['#ff80ff','#7c3aed'],30)},
  ancient:function(){tl(80,'rgba(255,255,255,.3)');ck('rgba(60,100,150,.6)',14,2);sp('#ffffff',300,3)},
  celestial:function(){sp('#ffffff',500,2);bl('rgba(160,180,255,.35)',16,40,120);rn('#a0c0ff')},
  abyss:function(){rp('rgba(100,200,255,.28)',30);for(var a=0;a<40;a++){x.strokeStyle='rgba(180,240,255,.5)';x.beginPath();x.arc(r()*L,r()*L,2+r()*7,0,7);x.stroke()}bl('rgba(0,10,40,.4)',10,40,100)}};
 (K[th]||function(){tl(72,'rgba(0,0,0,.5)');sp('#ffffff',150,2)})();
 x.fillStyle=g;x.fillRect(0,0,L,L);
 var t=new Og(c);t.anisotropy=DBAQ.an;if(!circ){t.wrapS=t.wrapT=1000;t.repeat.set(1/24,1/24);t.offset.set(.5,.5)}return t}
function WOW_BUST(T,r,sg){var n=Math.max(8,Math.round(10*DBAQ.seg)),m=Math.max(6,Math.round(8*DBAQ.seg)),g=new T.Tt(r,n,m),p=g.attributes.position,i;
 for(i=0;i<p.count;i++){var x=p.getX(i)/r,y=p.getY(i)/r,z=p.getZ(i)/r;
  if(z<0)z*=.35;
  if(y>0){x*=1-.18*y;z*=1-.38*y;y*=.72}else{y*=1.12;x+=sg*.1*(-y)}
  p.setXYZ(i,x*r,y*r,z*r)}
 g.rotateY(sg*.14);return g}
var DBA_TAL={tank:[[{id:"t1a",n:"Pelle di Ferro",d:"+15% vita",m:{hp:.15}},{id:"t1b",n:"Muro Vivente",d:"+6 difesa, +25% minaccia",m:{def:6,thr:.25}}],[{id:"t2a",n:"Bastione",d:"+8 difesa, +10% vita",m:{def:8,hp:.1}},{id:"t2b",n:"Provocatore",d:"+50% minaccia, +10% attacco",m:{thr:.5,atk:.1}}],[{id:"t3a",n:"Titano",d:"+25% vita",m:{hp:.25}},{id:"t3b",n:"Contrattacco",d:"+20% attacco, +5 difesa",m:{atk:.2,def:5}}]],
melee:[[{id:"m1a",n:"Lame Affilate",d:"+12% attacco",m:{atk:.12}},{id:"m1b",n:"Furia Rapida",d:"+12% velocità d'attacco",m:{spd:.12}}],[{id:"m2a",n:"Colpo Letale",d:"+18% attacco",m:{atk:.18}},{id:"m2b",n:"Sinergia Fiammeggiante",d:"Le combo fanno +50% di effetto",m:{syn:.5}}],[{id:"m3a",n:"Maestro d'Armi",d:"+20% attacco, +10% velocità",m:{atk:.2,spd:.1}},{id:"m3b",n:"Assassino",d:"+30% attacco, -10% vita",m:{atk:.3,hp:-.1}}]],
ranged:[[{id:"r1a",n:"Occhio di Falco",d:"+12% attacco",m:{atk:.12}},{id:"r1b",n:"Mano Veloce",d:"+12% velocità d'attacco",m:{spd:.12}}],[{id:"r2a",n:"Tiratore Scelto",d:"+18% attacco",m:{atk:.18}},{id:"r2b",n:"Sinergia Arcana",d:"Le combo fanno +50% di effetto",m:{syn:.5}}],[{id:"r3a",n:"Maestro del Mana",d:"+25% attacco, +30% mana",m:{atk:.25,mr:.3}},{id:"r3b",n:"Cecchino",d:"+30% attacco, -10% vita",m:{atk:.3,hp:-.1}}]],
healer:[[{id:"h1a",n:"Fonte di Mana",d:"+30% rigenerazione mana",m:{mr:.3}},{id:"h1b",n:"Cuore Gentile",d:"+15% vita",m:{hp:.15}}],[{id:"h2a",n:"Grazia",d:"+20% potere di cura",m:{atk:.2}},{id:"h2b",n:"Sinergia Vitale",d:"Le combo fanno +50% di effetto",m:{syn:.5}}],[{id:"h3a",n:"Saggezza",d:"+25% cura, +20% mana",m:{atk:.25,mr:.2}},{id:"h3b",n:"Vitalità",d:"+25% vita",m:{hp:.25}}]]};
function DBA_TALFIND(id){for(const a in DBA_TAL)for(const t of DBA_TAL[a])for(const o of t)if(o.id===id)return o;return null}
window.DBA_TAL=DBA_TAL;
window.DBA_TALFIND=DBA_TALFIND;
var DBA_HOLD={
 spear:{r:[-.36,-.78,.33],l:[-1.11,.58,.1],tl:1.58,s:.28,dx:.25},
 staff:{r:[-.48,-.32,.73],l:[-1.3,.59,.1],tl:1.58,s:.28,dx:.35},
 scythe:{r:[-.47,-.35,.69],l:[-1.27,.56,.1],tl:1.58,s:.28,dx:.35},
 greatsword:{r:[-.44,-.85,.5],l:[-.34,.78,.1],tl:1.58,s:-.14,dx:.14},
 hammer:{r:[-.43,-.76,.51],l:[-1.1,.72,.1],tl:1.58,s:.2,dx:.22},
 crossbow:{r:[-.11,-1.07,.05],l:[-.53,.49,1.16],tl:1.58,s:.33,dx:.22,phi:-2.06,ng:1},
 bow:{r:[-.99,-.88,.05],l:[-.98,.01,.6],tl:1.58,s:0,dx:.34,ng:1}};
const DBA_TK=["shadow","fire","frost","bone","nature","abyss","storm","void","blood","light"];
function DBA_TPL(i){const a=$v.filter(x=>x.theme==DBA_TK[i]);return a.length?a[Math.random()*a.length|0]:$v[0]}
function DBA_MKB(t,B,m,n){const b=ug(n,$v.indexOf(t)),h=Math.round(B.maxHp*(m?.8:.18));return Object.assign(b,{tier:0,maxHp:h,hp:h,attack:Math.round(B.attack*(m?.9:.5)),defense:B.defense,difficulty:B.difficulty,difficultyLabel:B.difficultyLabel,difficultyName:B.difficultyName,difficultyIcon:B.difficultyIcon,difficultyColor:B.difficultyColor,difficultyMul:B.difficultyMul,name:(m?"Miniboss · ":"")+t.name,companionChance:.05})}
var DBA_NMD=window.DBA_NMD=[];
(function(){
const reg=[];let started=0;
function isIn(o){while(o){if(o.isScene)return 1;o=o.parent}return 0}
function loop(){requestAnimationFrame(loop);const t=performance.now()/1e3,now=performance.now();
 for(let i=reg.length-1;i>=0;i--){const r=reg[i];
  if(!isIn(r.root)){if(now-r.t0>4000)reg.splice(i,1);continue}
  r.t0=now;
  r.parts.forEach(p=>{const m=p.m,f=p.f,ph=p.ph+t;
   if(f.includes("B"))m.position.y=p.y+Math.sin(ph*1.6)*.09;
   if(f.includes("S"))m.rotation.y=p.ry+t*1.3;
   if(f.includes("P")){const s=1+Math.sin(ph*3)*.09;m.scale.set(p.sx*s,p.sy*s,p.sz*s)}
   if(f.includes("G"))m.rotation.z=p.rz+Math.sin(ph*2.2)*.25;
   if(f.includes("e")&&m.material&&!m.material.__rb&&m.material.emissiveIntensity!=null)m.material.emissiveIntensity=.55+Math.sin(ph*2.4)*.2});
  if(r.rb){r.rb.forEach((q,k)=>{const h=((t*.12+k*.083)%1);q.color.setHSL(h,.95,.55);if(q.emissive)q.emissive.setHSL(h,1,.35)})}}
}
window.DBA_NMB=function(e,j){
 const id=e.nm,def=DBA_NMD.find(d=>d.id===id)||DBA_NMD[0];
 const rb=id==="prisma"?[]:null,pal=def.c.map(c=>new Rt(c)),A=new zn,G=new zn;
 const tex=window.DBA_NMTEX&&window.DBA_NMTEX[id];
 const mats=def.c.map((c,i)=>{const em=i==3||/^#(f|e|d)/i.test(c)&&i>=2;
  const m=new zt({color:rb?"#ffffff":c,roughness:.7,metalness:.08,flatShading:true});
  if(i==3||i==2&&def.glow){m.emissive=new Rt(c);m.emissiveIntensity=.5}
  if(rb){m.emissive=new Rt("#ffffff");m.emissiveIntensity=.25;m.__rb=1;rb.push(m)}
  if(tex&&i<3&&!rb){m.map=tex;m.color=new Rt(c).lerp(new Rt("#ffffff"),i==0?.55:.7);m.flatShading=false}
  return m});
 const emM=mats.map(m=>{if(rb)return m;const q=m.clone();q.emissive=m.color.clone();q.emissiveIntensity=.6;return q});
 const gs={s:new Tt(1,14,10),b:new rn(1,1,1),c:new Gt(1,1,10),y:new Fn(1,1,1,10),t:new Ci(1,.14,8,22)};
 const parts=[],tail=[],legs=[];let wL=null,wR=null,body=null;
 for(const p of def.gen()){
  const [sh,ci,sx,sy,sz,x,y,z,rx,ry,rz,fl]=p,em=fl.includes("e");
  const mat=em?emM[ci]:mats[ci];
  const m=new fe(gs[sh],mat);m.castShadow=false;m.scale.set(sx,sy,sz);m.rotation.set(rx,ry,rz);
  let node=m;
  if(/[WVLT]/.test(fl)){const pv=new zn;pv.position.set(x,y,z);m.position.set(0,0,0);pv.add(m);node=pv;
   if(fl.includes("W"))wL=wL||pv;if(fl.includes("V"))wR=wR||pv;if(fl.includes("T"))tail.push(pv);if(fl.includes("L")&&legs.length<2)legs.push(pv)}
  else m.position.set(x,y,z);
  if(/[BSPG]/.test(fl))parts.push({m,f:fl,y,ry,rz,sx,sy,sz,ph:Math.random()*6});
  if(!body&&sh!="t")body=m;
  G.add(node)}
 // rainbow overlay glow for prisma
 G.scale.setScalar(def.sz||1);A.add(G);G.position.y=-1.5;
 reg.push({root:A,parts,rb,t0:performance.now()});
 if(!started){started=1;requestAnimationFrame(loop)}
 j.add(A);A.position.set(0,1.5,0);
 const nl=new zn,nr=new zn,jw=new zn;
 return{grp:A,bBody:body,bMesh:A,clawL:nl,clawR:nr,jaw:jw,wingL:wL||new zn,wingR:wR||new zn,tail,legs}
};
})();
(function(){
DBA_NMD.push({id:"prisma",n:"Prismatico",bi:-1,c:["#ffffff","#ffffff","#ffffff","#ffffff"],sz:1.25,hp:1,at:1,df:1,sig:null,
 gen:()=>{const a=[],P=(sh,ci,sx,sy,sz,x,y,z,rx,ry,rz,fl)=>[sh,ci,sx,sy,sz,x||0,y||0,z||0,rx||0,ry||0,rz||0,fl||""];
  a.push(P("s",0,1.2,1.0,2.0,0,2.0,0,0,0,0,"B"),P("s",1,.8,.7,.9,0,2.5,2.0,0,0,0,"B"),P("c",3,.2,.7,.2,-.3,3.3,2.0,0,0,.4,"e"),P("c",3,.2,.7,.2,.3,3.3,2.0,0,0,-.4,"e"),P("s",3,.12,.12,.12,-.3,2.65,2.6,0,0,0,"e"),P("s",3,.12,.12,.12,.3,2.65,2.6,0,0,0,"e"));
  for(const s of[-1,1]){for(let k=0;k<3;k++)a.push(P("b",k%2?2:1,2.2-k*.45,.07,1.2-k*.15,s*(1.7+k*1.2),2.9+k*.3,-.3-k*.2,0,0,s*(.25+k*.1),s<0?"W":"V"));a.push(P("y",0,.3,1.6,.3,s*.7,.8,.9,0,0,0,"L"),P("y",0,.3,1.6,.3,s*.7,.8,-.8,0,0,0,"L"))}
  for(let i=0;i<7;i++)a.push(P("c",3-i%2*2,.3-.03*i,.9+.1*i,.3-.03*i,0,2.4+(i%2?.12:-.12),-1.6-i*.55,Math.PI/2,0,0,"Te"));
  for(let i=0;i<9;i++){const q=i/9*6.28;a.push(P("c",3,.2,1.0,.2,Math.sin(q)*.55,3.2,Math.cos(q)*.55-.3,0,0,Math.sin(q)*.7,"e"))}
  a.push(P("t",3,2.6,2.6,2.6,0,2.2,0,Math.PI/2,0,0,"eS"),P("t",2,3.2,3.2,3.2,0,2.2,0,0,0,0,"eS"));return a}});
const SY=["Zy","Kor","Vel","Thas","Mir","Xan","Nyx","Or","Quel","Dra","Ul","Fen","Ash","Ve","Lum","Zor"],MD=["a","o","i","u","e"],EN=["thar","nix","dor","mere","vash","kul","ion","gorn","phel","ryn"];
const FX=[["meteor","#ff7a00"],["ice_lance","#93e0ff"],["poison","#a3e635"],["lightning_storm","#fde047"],["shadow_wave","#a78bfa"],["tide","#22d3ee"],["void","#ff4fd8"]];
const K="dba_prism_v1";
const R=a=>a[Math.floor(Math.random()*a.length)];
const gen=()=>R(SY)+R(MD)+R(SY).toLowerCase()+R(EN);
window.DBA_PRISM={
 get(){let s=null;try{s=JSON.parse(localStorage.getItem(K))}catch(e){}
  if(!s||!s.name)s={name:gen(),lvl:0,wins:0,losses:0,best:0};return s},
 set(s){try{localStorage.setItem(K,JSON.stringify(s))}catch(e){}},
 mult(l){return Math.max(.35,Math.pow(1.22,l))},
 sig(l){const f=FX[((l%FX.length)+FX.length)%FX.length],n=Math.max(2,Math.min(8,3+Math.floor(l/2)));
  return {t:l%3==2?"ring":"barrage",n,r:l%3==2?8:2.2,d:.5,c:f[1],nm:"Spettro Prismatico",fx:f[0],cd:Math.max(9,15-Math.floor(l/2)),rnd:1}},
 apply(bo,ns){const s=this.get(),m=this.mult(s.lvl);bo.nm="prisma";bo.name="🌈 "+s.name+" · Lv "+(s.lvl+1);
  bo.nmS=this.sig(s.lvl);bo.prismLvl=s.lvl;if(ns)return s;bo.maxHp=Math.round(bo.maxHp*1.6*m);bo.hp=bo.maxHp;bo.attack=Math.round(bo.attack*m);bo.defense=Math.round((bo.defense||0)*(.6+.4*m));return s},
 win(){const s=this.get();s.lvl++;s.wins++;s.best=Math.max(s.best||0,s.lvl);this.set(s);return s},
 lose(){const s=this.get();s.lvl=Math.max(-6,s.lvl-1);s.losses++;this.set(s);return s}
};
})();
(function(){var ids=["wd","wl","st","mc","aw","bl","ir","th"],T=window.DBA_VTX={},im=new Image();
ids.forEach(function(id,k){var c=document.createElement("canvas");c.width=c.height=256;var x=c.getContext("2d");x.fillStyle="#6a4a2a";x.fillRect(0,0,256,256);var t=new Og(c);t.wrapS=t.wrapT=1000;t.repeat.set(2,2);T[id]=t;T["_"+id]=c});
im.onload=function(){ids.forEach(function(id,k){var c=T["_"+id];c.getContext("2d").drawImage(im,(k%4)*256,Math.floor(k/4)*256,256,256,0,0,256,256);T[id].needsUpdate=!0})};
im.src=window.__ASSETS["tex_66_9455d9c4.webp"];
var CL={4861462:"wd",4861464:"wd",3810320:"wd",2759178:"wd",5913118:"wd",7031338:"wd",6964518:"wl",9132587:"wl",9079434:"st",10132122:"st",9080726:"st",10265519:"st",8024924:"mc",3816002:"ir",2829104:"ir",5592405:"ir",3355443:"ir",11906428:"bl",13214570:"th"};
var cache={},seen=new WeakSet();window.DBA_VILTEX=function(sc){sc.traverse(function(o){if(!o.isMesh||seen.has(o)||!o.material||Array.isArray(o.material)||o.material.map||(o.material.emissive&&o.material.emissive.getHex()>0))return;seen.add(o);var h=o.material.color&&o.material.color.getHex(),k=CL[h];if(!k)return;if(!cache[h]){var m=o.material.clone();m.map=T[k];m.color=new Rt(0xffffff);m.needsUpdate=!0;cache[h]=m}o.material=cache[h]})};setInterval(function(){try{window.__dbaScene&&DBA_VILTEX(window.__dbaScene)}catch(_){}},1500)})();
(function(){var ids=["sciamano","alchimista","sentinella_gelo","vindice","bardo","artefice","araldo","mistico"],T=window.DBA_HTX={},im=new Image(),M={};
ids.forEach(function(id){var c=document.createElement("canvas");c.width=c.height=256;var x=c.getContext("2d");x.fillStyle="#999";x.fillRect(0,0,256,256);var t=new Og(c);t.wrapS=t.wrapT=1000;T[id]=t;T["_"+id]=c});
im.onload=function(){ids.forEach(function(id,k){T["_"+id].getContext("2d").drawImage(im,(k%4)*256,Math.floor(k/4)*256,256,256,0,0,256,256);T[id].needsUpdate=!0})};
im.src=window.__ASSETS["tex_67_95eb8d7d.webp"];
window.DBA_HMAT=function(Tm,ck){var t=T[ck];if(!t)return null;if(!M[ck])M[ck]=new Tm.zt({vertexColors:!0,color:16777215,emissive:16777215,emissiveMap:t,emissiveIntensity:.1,map:t,roughness:.62,metalness:(ck==="sentinella_gelo"||ck==="vindice"||ck==="araldo")?.3:.1});M[ck].color.setRGB(1.5,1.5,1.5);return M[ck]}})();
function DBA_BM(e,j){if(e.nm&&window.DBA_NMB)return DBA_NMB(e,j);
const K=e.key,D1={ossa:1};
const KB=DBAQ.bs,rs=n=>Math.max(3,Math.round(n*KB)),hs2=Math.max(1,Math.round(2*KB));
const DP=g=>{const a=DBAQ.disp;if(!a)return g;const p=g.attributes.position;for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i),f=1+a*(Math.sin(x*3.1+y*2.3)*Math.cos(z*2.7+x*1.3)+.5*Math.sin(y*7.3+z*5.1)*Math.cos(x*6.2));p.setXYZ(i,x*f,y*f,z*f)}return g};
function SG(r,w,h,...a){return DP(new Tt(r,rs(w),rs(h),...a))}
function CG(r,h,s){return DP(new Gt(r,h,rs(s),hs2))}
function FG(a,b,h,s){return DP(new Fn(a,b,h,rs(s),hs2))}
function BG(w,h,d){const k=Math.max(1,Math.round(KB*2));return DP(new rn(w,h,d,k,k,k))}
function VG(r,l,c,s){return new Vc(r,l,rs(c),rs(s))}
function TG(r,t,g,u,arc){return new Ci(r,t,rs(g),rs(u),arc)}

const PAL={
inferno:['#5a1008','#c8321e','#ff8a3a','#f0b060','#8a1c10','#ffb030','c','f','cracks'],
frost:['#2a5a7a','#6cb8dc','#e6f8ff','#e0f4ff','#7cc8ec','#aef0ff','x','x','frost'],
natura:['#24501e','#4a8a34','#9ad064','#c8d890','#4f9a34','#d0ff80','a','l','leaf'],
ombra:['#140e28','#352a66','#8a6ad8','#241c48','#2e2268','#c8a4ff','c','c','speck',3],
tempesta:['#5a4a10','#d8b428','#fff3a0','#fff0b0','#b89418','#fff6b0','c','c','bolts'],
sangue:['#3a0606','#9a1414','#ff5a5a','#6a0c0c','#5a0a0a','#ff4a4a','c','c','cracks'],
cristallo:['#2a7aa0','#82d8f0','#f0ffff','#c8f0ff','#6cc8e4','#d0ffff','x','x','frost'],
magma:['#0e0804','#2e1408','#ff6a10','#1a0a04','#3a1608','#ff8a20','c','f','cracks'],
sabbie:['#7a5a22','#d0a84c','#f8e2a4','#f0d890','#b88a38','#fff0b0','c','c','speck'],
spettrale:['#4a5a98','#9aaaf0','#e8eeff','#c8d4ff','#7a8ae0','#e0e8ff','c','x','dots',3],
ossa:['#0c0a06','#2a241a','#8a7f66','#3a3426','#2a241a','#9aff9a','c','b','bone'],
luce:['#c8aa48','#fff0a0','#ffffff','#fffbe0','#f4e07a','#ffffff','c','c','speck',0,1],
caos:['#5a1260','#d946ef','#ffb0ff','#8a2a96','#a02ab0','#ff80ff','x','x','bolts',4],
abisso:['#06204a','#2563eb','#70b0ff','#0c3070','#1a4aa8','#60e0ff','c','l','dots'],
tuono:['#5a4208','#ca8a04','#ffd060','#e0b030','#9a6a04','#fff0a0','x','c','bolts'],
veleno:['#0e3a18','#16a34a','#a8ff6a','#7ad040','#128a3a','#b0ff60','c','l','dots'],
fenice:['#8a2a0c','#f97316','#ffd060','#ffc060','#e0541a','#ffe080','c','f','cracks'],
nulla:['#14040e','#831843','#e04890','#240814','#4a0a2a','#ff60b0','c','c','speck',4],
antico:['#2a3442','#6a7e96','#c8e0f0','#8aa0b8','#5a7088','#a0d0ff','x','x','frost'],
celeste:['#8a7ac8','#e8e0ff','#ffffff','#fff0c0','#b0a0f0','#ffe08a','c','c','speck',3,1],
orco:['#1c2c14','#4f7a3a','#8fbf6a','#6a8a4a','#3a5a2a','#ffb040','c','c','speck'],
golem:['#2a2824','#7a766c','#b8b2a0','#5a564c','#4a463c','#ffa030','c','c','runes'],
troll:['#2a3a22','#5f7a48','#a0b880','#7a9060','#4a6038','#c8ff80','c','c','leaf'],
ciclope:['#4a2a1a','#a8704a','#e0b088','#c08a60','#7a4a2a','#ffe060','c','c','speck'],
minotauro:['#2a1a12','#6a3a22','#b07a4a','#8a5a38','#4a2a18','#ff5030','c','c','speck'],
lich:['#10122a','#3a3a6a','#a0a8e0','#2a2a50','#2a2a58','#60ffd0','c','c','runes'],
demone:['#3a0a0a','#a01818','#ff6a3a','#7a1010','#6a0c0c','#ffa030','c','c','cracks'],
gargoyle:['#2a2a32','#6a6a78','#a8a8b8','#4a4a58','#3a3a48','#ff4040','c','c','speck'],
cavaliere:['#0a0a12','#2a2a38','#6a6a88','#1a1a28','#1a1a28','#a050ff','c','c','runes'],
ragno:['#0a140a','#2a3a1a','#7aa040','#1a2a10','#1a2a10','#b0ff40','c','c','dots'],
idra:['#143a1a','#2a8a3a','#8ae070','#c8e8a0','#1a6a2a','#a0ff60','c','c','dots'],
kraken:['#0a1a3a','#2a4a9a','#70a0e8','#1a3a7a','#1a3a7a','#60e0ff','c','c','dots']};
const HM={orco:{h:'orc',w:'axe',sz:1.05},golem:{h:'golem',b:1,sz:1.2,w:'fist'},troll:{h:'troll',w:'club',sz:1.2},ciclope:{h:'cyc',w:'club',sz:1.25},minotauro:{h:'bull',w:'axe',sz:1.1},lich:{h:'skull',w:'staff',sz:1,robe:1},demone:{h:'demon',w:'whip',wing:1,sz:1.1},gargoyle:{h:'garg',wing:1,w:'none',sz:1.05,b:1},cavaliere:{h:'helm',w:'sword',sz:1.1,cape:1}};
const T=PAL[K]||PAL.inferno;let sd=7;const R=()=>(sd=sd*16807%2147483647)/2147483647;
const ad=(p,g,m,x=0,y=0,z=0,rx=0,ry=0,rz=0,sx=1,sy=1,sz=1)=>{const o=new fe(g,m);o.position.set(x,y,z);o.rotation.set(rx,ry,rz);o.scale.set(sx,sy,sz);p.add(o);return o};
const cvs=f=>{const c=document.createElement('canvas');const Z=DBAQ.tex;c.width=c.height=Z;const cx=c.getContext('2d');cx.scale(Z/256,Z/256);f(cx,256);const tt=new Og(c);tt.anisotropy=DBAQ.an;return tt};
const gr=(x,s,a,b)=>{const g=x.createLinearGradient(0,0,0,s);g.addColorStop(0,a);g.addColorStop(1,b);x.fillStyle=g;x.fillRect(0,0,s,s)};
function marks(x,s,go){const ov=T[8];x.lineWidth=go?4:2.5;x.strokeStyle=T[5];x.fillStyle=T[5];
 if(ov=='cracks'||ov=='bolts'||ov=='runes'){for(let i=0;i<24;i++){let px=R()*s,py=R()*s;x.beginPath();x.moveTo(px,py);for(let k=0;k<6;k++){px+=(R()-.5)*34;py+=ov=='cracks'?(R()-.4)*28:ov=='runes'?(R()-.5)*10:16;x.lineTo(px,py)}x.stroke()}}
 if(ov=='dots'){for(let i=0;i<70;i++){x.beginPath();x.arc(R()*s,R()*s,2+R()*3,0,7);x.fill()}}
 if(go)return;
 if(ov=='frost'){for(let i=0;i<420;i++){x.fillStyle=R()<.5?'#ffffffcc':'#bfeaffaa';x.fillRect(R()*s,R()*s,2+R()*3,2+R()*3)}}
 if(ov=='leaf'){x.strokeStyle='#1d3a14';for(let i=0;i<30;i++){x.fillStyle=R()<.5?'#6aa84a':'#3a7a2a';x.beginPath();x.ellipse(R()*s,R()*s,16,7,R()*3,0,7);x.fill();x.stroke()}}
 if(ov=='speck'){for(let i=0;i<300;i++){x.fillStyle=R()<.5?T[5]:T[2];x.globalAlpha=.25+R()*.5;x.fillRect(R()*s,R()*s,1+R()*2,1+R()*2)}x.globalAlpha=1}
 if(ov=='bone'){x.strokeStyle='#5a5240';for(let i=0;i<24;i++){x.beginPath();x.moveTo(R()*s,R()*s);x.lineTo(R()*s,R()*s);x.stroke()}}}
const AT=(window.DBA_BCELL||{})[K],wr=t=>{t.wrapS=t.wrapT=1002;{const q=({golem:1,gargoyle:1,lich:1,demone:1.3}[K]||2);t.repeat.set(q,q)}t.anisotropy=DBAQ.an;return t};
const skin=kind=>AT?(()=>{const Z=Math.min(DBAQ.tex||512,512),c=document.createElement("canvas");c.width=c.height=Z;c.getContext("2d").drawImage(AT,0,0,Z,Z);return wr(new Og(c))})():cvs((x,s)=>{gr(x,s,T[1],T[0]);
 if(kind=='scale'){for(let y=0;y<s+16;y+=14)for(let X=-16;X<s+16;X+=22){const xx=X+((y/14)&1)*11,g=x.createRadialGradient(xx,y-5,1,xx,y,16);g.addColorStop(0,T[2]);g.addColorStop(.5,T[1]);g.addColorStop(1,T[0]);x.fillStyle=g;x.beginPath();x.ellipse(xx,y,11,10,0,0,Math.PI);x.fill();x.strokeStyle=T[0];x.lineWidth=1.5;x.stroke()}x.fillStyle=T[3];x.fillRect(100,0,56,s)}
 else if(kind=='stone'){for(let i=0;i<30;i++){x.fillStyle=R()<.5?T[2]+'55':'#0007';x.fillRect(R()*s,R()*s,20+R()*50,12+R()*30)}}
 else{for(let i=0;i<500;i++){x.fillStyle=R()<.5?'#00000018':'#ffffff14';x.fillRect(R()*s,R()*s,2+R()*3,2+R()*3)}}
 marks(x,s,false)});
const GP={"inferno":(r,g,b)=>r>215&&g>80&&b<120&&r-b>130,"magma":(r,g,b)=>r>215&&g>80&&b<120&&r-b>130,"fenice":(r,g,b)=>r>235&&g>170&&b<130,"demone":(r,g,b)=>r>215&&g>80&&b<120&&r-b>130,"golem":(r,g,b)=>r>215&&g>110&&b<110,"tempesta":(r,g,b)=>r>225&&g>225&&b>200,"tuono":(r,g,b)=>r>235&&g>200&&b<140,"caos":(r,g,b)=>r>220&&g>160&&b>220,"veleno":(r,g,b)=>g>215&&r>110&&b<140,"abisso":(r,g,b)=>b>200&&g>190&&r<130,"ombra":(r,g,b)=>b>220&&r>110&&g<130,"lich":(r,g,b)=>g>200&&b>170&&r<130,"sangue":(r,g,b)=>r>200&&g<110&&b<110},gl=()=>AT?(GP[K]?(()=>{const c=document.createElement('canvas');c.width=256;c.height=512;const x=c.getContext('2d');x.drawImage(AT,0,0);const d=x.getImageData(0,0,256,512),a=d.data,f=GP[K];for(let i=0;i<a.length;i+=4){if(!f(a[i],a[i+1],a[i+2])){a[i]=a[i+1]=a[i+2]=0}}x.putImageData(d,0,0);const Z=Math.min(DBAQ.tex||512,512),c2=document.createElement('canvas');c2.width=c2.height=Z;c2.getContext('2d').drawImage(c,0,0,Z,Z);return wr(new Og(c2))})():null):['cracks','bolts','dots','runes'].includes(T[8])?cvs((x,s)=>{x.fillStyle='#000';x.fillRect(0,0,s,s);marks(x,s,true)}):null;
const gt=gl(),bM=(kind)=>{const tk=skin(kind);return new zt({map:tk,bumpMap:DBAQ.bump?tk:null,bumpScale:2.5,roughness:.6,metalness:.1,emissive:new Rt(AT?'#ffffff':T[5]),emissiveMap:gt,emissiveIntensity:gt?(AT?1.15:1.3):0})};
const hM=new zt({color:T[8]=='bone'?'#e8e0c8':T[2],map:(AT&&T[8]=='bone')?skin('x'):null,roughness:.45,metalness:.15}),gM=new ln({color:T[5]}),aM=new zt({color:'#4a4a52',roughness:.45,metalness:.7});
const memM=new zt({map:AT?skin('scale'):cvs((x,s)=>{gr(x,s,T[4],T[0]);x.strokeStyle=T[2];x.globalAlpha=.5;x.lineWidth=2;for(let i=0;i<9;i++){x.beginPath();x.moveTo(0,s*.45);x.quadraticCurveTo(s*.5,s*(i/8)*.9,s,s*(i/8));x.stroke()}}),side:_n,roughness:.7,emissive:new Rt(T[5]),emissiveIntensity:.15});
const A=new zn,dm=()=>new zn;
function wingG(s,bone){const w=new zn;ad(w,new FG(.07,.1,3.2,8),hM,0,1.6,0);
 if(!bone){ad(w,new CG(1.3,3.1,4),memM,.25*s,1.5,-.05,0,0,0,1,1,.04);ad(w,new CG(.8,2.6,3),memM,-.35*s,1.3,-.05,0,0,.35*s,1,1,.04)}
 else for(const a of[-.5,0,.5])ad(w,new FG(.03,.05,2.4,6),hM,Math.sin(a)*1.1,1.3,0,0,0,-a);
 for(const a of[.5,-.2])ad(w,new FG(.04,.05,2,6),hM,.5*s,2.4,0,0,0,-a*s);
 w.position.set(s*.95,.9,-.1);return w}
let bB,cL=dm(),cR=dm(),jw=dm(),wL=dm(),wR=dm(),tailP=[],LG=[],TN=[];
function headG(P,x,yaw,sz){const h=new zn;h.position.set(x,0,0);const bn=P.bone,sk=bn?hM:P.m;
 ad(h,new SG(.5,24,18),sk,0,0,0,0,0,0,1,.88,1.25);ad(h,new FG(.18,.3,.9,16),sk,0,-.08,.8,Math.PI/2);
 const j=dm();j.position.set(0,-.15,.35);const ji=dm();ji.rotation.x=-Math.PI/2;j.add(ji);
 ad(ji,new FG(.14,.26,.9,14),sk,0,-.04,.5,Math.PI/2);
 for(let k=0;k<4;k++)for(const s of[-1,1]){ad(ji,new CG(.04,.14,6),hM,.14*s,.06,.3+k*.17);ad(h,new CG(.04,.14,6),hM,.14*s,-.2,.55+k*.17,Math.PI)}
 for(const s of[-1,1]){ad(h,new SG(.07,10,8),gM,.3*s,.12,.45);
  const st=T[6];if(st=='x')for(let k=0;k<3;k++)ad(h,new CG(.09,.7,4),hM,.2*s,.35,-.1-k*.1,-1.0-k*.2,0,-.3*s-k*.12*s);
  else{ad(h,new CG(.12,.95,10),hM,.2*s,.4,-.1,-1.0,0,-.35*s);if(st=='a')for(const a of[.7,-.4])ad(h,new CG(.07,.5,6),hM,.35*s,.75,-.3,-.7,0,-a*s);else ad(h,new CG(.07,.55,8),hM,.25*s,.25,.0,-1.6,0,.3*s)}}
 return{h,j}}
function dragon(nh){const bn=T[8]=='bone',m=bM('scale');P={m,bone:bn};
 bB=ad(A,new SG(1,32,24),bn?new zt({color:'#17140e',roughness:.9}):m,0,0,0,0,0,0,1.15,1,1.8);
 const spk=(x,y,z,rx,sc)=>{const st=T[7];ad(A,new CG(.14*sc,.7*sc,st=='x'?4:st=='l'?3:7),st=='f'?gM:hM,x,y,z,rx)};
 const ss=nh>1?[-1.1,0,1.1]:[0];ss.forEach((hx,hi)=>{
  for(let k=0;k<7;k++){const f=k/6,y=.5+f*1.3,z=1.4+f*1.5;ad(A,new SG(bn?.26:.58-.2*f,16,12),bn?hM:m,hx*f*1.2,y,z);if(k%2)spk(hx*f*1.2,y+.45,z-.1,-.4,.8)}
  const hd=headG(P,hx*1.3,0);hd.h.position.set(hx*1.3,1.95,3.15);hd.h.rotation.x=.25;A.add(hd.h);if(hi==Math.floor(ss.length/2)){jw=hd.j;hd.h.add(jw)}else hd.h.add(hd.j)});
 {let par=A,px=0,py=0,pz=0;tailP=[];for(let k=0;k<9;k++){const f=k/8,r=bn?.2-.1*f:.62-.5*f,z=-1.6-f*5,x=Math.sin(f*5)*.5,y=-.15-f*.5;const pv=new zn;pv.position.set(x-px,y-py,z-pz);par.add(pv);px=x;py=y;pz=z;ad(pv,new SG(r,16,12),bn?hM:m,0,0,0);if(k<8){const st=T[7],sc=1-f*.6;ad(pv,new CG(.14*sc,.7*sc,st=='x'?4:st=='l'?3:7),st=='f'?gM:hM,0,r*.9,0,.4)}tailP.push(pv);par=pv}
 ad(par,new CG(.3,1.1,6),T[7]=='f'?gM:hM,0,0,-.1,-Math.PI/2)}
 for(const s of[-1,1]){const lg=new zn;lg.position.set(s*.95,-.4,-1.0);ad(lg,new FG(.35,.22,1.0,14),bn?hM:m,0,-.5,0);const kn=new zn;kn.position.set(0,-1.0,0);lg.add(kn);lg.kn=kn;ad(kn,new SG(.2,12,10),bn?hM:m,0,0,0);ad(kn,new FG(.2,.16,.9,12),bn?hM:m,0,-.1,.1,-.4);ad(kn,new SG(.26,12,8),bn?hM:m,0,-.45,.25,0,0,0,1,.5,1.5);for(const c of[-.12,0,.12])ad(kn,new CG(.05,.3,6),hM,c,-.45,.6,Math.PI/2+.2);A.add(lg);LG.push(lg)}
 for(const s of[-1,1]){const c=s<0?cL:cR;c.position.set(s*1.0,.45,1.0);ad(c,new FG(.34,.24,1.0,14),bn?hM:m,0,-.5,0);const el=new zn;el.position.set(0,-1.0,0);c.add(el);c.el=el;ad(el,new SG(.2,12,10),bn?hM:m,0,0,0);ad(el,new FG(.2,.16,.9,12),bn?hM:m,0,-.1,.15,-.3);ad(el,new SG(.28,12,8),bn?hM:m,0,-.5,.35,0,0,0,1,.5,1.5);for(const k of[-.12,0,.12])ad(el,new CG(.05,.3,6),hM,k,-.5,.7,Math.PI/2+.2);A.add(c)}
 if(nh==1||1){wL=wingG(-1,bn);wR=wingG(1,bn);wL.rotation.z=1;wR.rotation.z=-1;A.add(wL,wR)}
 extras(bn)}
function extras(bn){const ov=T[8],ir=(n,f)=>{for(let i=0;i<n;i++){const a=R()*6.28,y=Math.cos(a),x=Math.sin(a),z=(R()-.5)*3.2;f(x*1.15,y,z,a)}};
 if(bn){for(let k=0;k<6;k++){const z=-1.2+k*.48;ad(A,new TG(1.0,.07,8,22,Math.PI*1.5),hM,0,0,z,0,0,-Math.PI/4,1.15,1,1)}for(let k=0;k<8;k++)ad(A,new SG(.14,10,8),hM,0,1.02,-1.5+k*.45)}
 if(K=='magma')ir(20,(x,y,z,a)=>ad(A,new Ad(.35+R()*.3,0),new zt({color:'#2a1408',emissive:'#ff6a10',emissiveIntensity:.8,roughness:.8}),x,y,z,R()*3,R()*3,R()*3));
 if(ov=='frost')ir(K=='cristallo'?34:24,(x,y,z,a)=>ad(A,new CG(.12+R()*.1,.7+R()*.9,5),new zt({color:T[2],emissive:T[5],emissiveIntensity:.35,roughness:.12,metalness:.3}),x*1.0,y*1.0,z,0,0,-a));
 if(K=='natura')ir(26,(x,y,z,a)=>ad(A,new CG(.22,.7,4),new zt({color:R()<.5?'#3a7a2a':'#6aa84a'}),x,y,z,0,0,-a,1,1,.3));
 if(K=='sabbie')ir(14,(x,y,z,a)=>ad(A,new SG(.4,10,6),new zt({color:T[2],roughness:1}),x*.9,y*.9,z,0,0,0,1.4,.45,.8));
 if(K=='luce')ad(A,new TG(.9,.07,10,36),gM,0,1.95,2.5,0,0,0);
 if(K=='abisso'){ad(A,new FG(.03,.03,1.3,6),hM,0,2.5,3.6,-.6);ad(A,new SG(.14,10,8),gM,0,3.05,4.1)}
 for(let i=0;i<(T[9]||0);i++){const a=i*6.28/T[9];ad(A,new SG(.2,12,10),K=='ombra'||K=='nulla'?new zt({color:'#0a0614',emissive:T[5],emissiveIntensity:.5}):gM,Math.cos(a)*3.2,1.5+i*.3,Math.sin(a)*3.2)}}
function hum(P0){const sz=P0.sz||1,m=bM(P0.b?'stone':'skin'),g=new zn;P={m};
 bB=ad(g,P0.b?new BG(1.8,1.7,1.1):new VG(.7,.9,8,18),m,0,.4,0,0,0,0,P0.b?1:1.25,1,.9);
 ad(g,P0.b?new BG(1.3,.5,.9):new SG(.6,14,10),m,0,-.4,0,0,0,0,1,P0.b?1:.7,.8);
 if(P0.robe)ad(g,new CG(1.3,2.7,18),new zt({color:T[3],roughness:.9}),0,-.2,0);
 if(P0.cape)ad(g,new CG(1.2,3,4),new zt({color:'#1a0a24',side:_n}),0,.0,-.7,.1,0,0,1,1,.08);
 const hd=new zn;hd.position.set(0,1.75,.1);g.add(hd);const H=P0.h;
 ad(hd,P0.b?new BG(.95,.85,.85):new SG(.5,22,16),H=='skull'?hM:H=='helm'?aM:m,0,0,0,0,0,0,1,1.05,1.05);
 const j=dm();j.position.set(0,-.25,.25);const ji=dm();ji.rotation.x=-Math.PI/2;j.add(ji);hd.add(j);jw=j;
 ad(ji,P0.b?new BG(.8,.25,.6):new SG(.38,14,10),H=='skull'?hM:H=='helm'?aM:m,0,-.05,.3,0,0,0,1,.5,1);
 const eye=(x,y,z,r)=>ad(hd,new SG(r,10,8),gM,x,y,z);
 if(H=='orc'||H=='troll'){eye(-.18,.08,.43,.06);eye(.18,.08,.43,.06);for(const s of[-1,1]){ad(ji,new CG(.07,.4,6),hM,.25*s,.1,.5,0,0,0);ad(hd,new CG(.12,.4,5),m,.5*s,.15,0,0,0,-1.3*s)}ad(hd,new BG(.9,.14,.2),m,0,.2,.4)}
 if(H=='cyc'){ad(hd,new SG(.2,14,10),new zt({color:'#fff'}),0,.1,.42);ad(hd,new SG(.1,10,8),gM,0,.1,.58);ad(hd,new CG(.1,.35,5),hM,0,.55,.1)}
 if(H=='bull'){eye(-.18,.1,.43,.06);eye(.18,.1,.43,.06);ad(hd,new BG(.5,.45,.6),m,0,-.15,.55);ad(hd,new TG(.12,.03,6,12),aM,0,-.3,.88,Math.PI/2);for(const s of[-1,1]){ad(hd,new CG(.1,.9,8),hM,.45*s,.4,0,0,0,-.9*s);ad(hd,new CG(.08,.5,6),hM,.7*s,.85,0,0,0,.3*s)}}
 if(H=='skull'){for(const s of[-1,1])ad(hd,new SG(.12,10,8),gM,.17*s,.08,.42);for(let k=0;k<5;k++){const a=k*1.2-2.4;ad(hd,new CG(.07,.35,4),new zt({color:'#d9a441',metalness:.8,roughness:.3}),Math.sin(a)*.4,.55,Math.cos(a)*.0-0.05)}}
 if(H=='demon'||H=='garg'){eye(-.18,.1,.43,.07);eye(.18,.1,.43,.07);for(const s of[-1,1]){ad(hd,new CG(.12,H=='demon'?1.0:.6,8),hM,.35*s,.5,0,-.2,0,-.6*s);ad(ji,new CG(.04,.2,5),hM,.14*s,.1,.55)}}
 if(H=='helm'){ad(hd,new BG(.5,.07,.1),gM,0,.05,.5);ad(hd,new CG(.12,.8,6),aM,.4,.45,0,0,0,-.5);ad(hd,new CG(.12,.8,6),aM,-.4,.45,0,0,0,.5)}
 if(H=='golem'){ad(hd,new BG(.6,.1,.1),gM,0,.1,.5)}
 for(const s of[-1,1]){const c=s<0?cL:cR;c.position.set(s*1.15,1.0,0);g.add(c);
  ad(g,P0.b?new BG(.9,.7,.9):new FG(.3,.3,.62,14),P0.b?m:m,s*1.1,1.0,0,0,0,P0.b?0:Math.PI/2);
  ad(c,P0.b?new BG(.45,.9,.45):new VG(.26,.8,6,12),m,0,-.55,0);const el=dm();el.position.set(0,-1.0,0);c.add(el);const ei=dm();ei.position.set(0,1.0,0);el.add(ei);c.el=el;ad(ei,new FG(.2,.2,.42,10),m,0,-1.0,0,0,0,Math.PI/2);ad(ei,P0.b?new BG(.4,.8,.4):new VG(.22,.7,6,12),m,0,-1.3,.1,-.3);
  ad(ei,P0.b?new BG(.6,.6,.6):new SG(.32,12,10),m,0,-1.85,.25);
  if(s>0){const w=P0.w;
   if(w=='axe'){ad(ei,new FG(.07,.07,2.6,8),hM,0,-1.7,.4,Math.PI/2*0,0,0);ad(ei,new BG(.9,.8,.12),aM,.45,-.7,.4);ad(ei,new CG(.4,.5,3),aM,.9,-.7,.4,0,0,-Math.PI/2,1,1,.3)}
   if(w=='club'){ad(ei,new FG(.28,.16,2.4,10),hM,0,-1.2,.4);for(let k=0;k<6;k++)ad(ei,new CG(.06,.25,5),aM,Math.sin(k*1.05)*.3,-.4-k*.15,.4+Math.cos(k*1.05)*.3)}
   if(w=='staff'){ad(ei,new FG(.05,.05,3.4,8),hM,0,-1.0,.4);ad(ei,new SG(.28,14,10),gM,0,.8,.4);ad(ei,new TG(.3,.04,6,16),aM,0,.8,.4)}
   if(w=='sword'){ad(ei,new BG(.2,2.4,.06),aM,0,-.5,.45);ad(ei,new BG(.7,.1,.12),new zt({color:'#d9a441',metalness:.8}),0,-1.7,.45)}
   if(w=='whip')for(let k=0;k<10;k++)ad(ei,new SG(.07,8,6),gM,Math.sin(k*.5)*.5,-1.9+k*.05,.4+k*.3)}}
 for(const s of[-1,1]){const lg=dm();lg.position.set(s*.5,-.3,0);g.add(lg);LG.push(lg);ad(lg,P0.b?new BG(.55,.9,.6):new VG(.3,.8,6,12),m,0,-.45,0);const kn=dm();kn.position.set(0,-.7,0);lg.add(kn);lg.kn=kn;ad(kn,new FG(.18,.18,.36,10),m,0,0,0,0,0,Math.PI/2);ad(kn,P0.b?new BG(.5,.8,.55):new VG(.26,.7,6,12),m,0,-.25,.05);ad(kn,new BG(.55,.25,.9),P0.b?m:aM,0,-.42,.2)}
 if(P0.wing){wL=wingG(-1,false);wR=wingG(1,false);wL.position.set(-.6,.9,-.5);wR.position.set(.6,.9,-.5);wL.rotation.z=1;wR.rotation.z=-1;g.add(wL,wR)}
 if(P0.b&&K=='golem'){ad(g,new SG(.3,14,10),gM,0,.5,.6)}
 g.scale.setScalar(sz);A.add(g)}
function spider(){const m=bM('skin');P={m};bB=ad(A,new SG(1.3,24,18),m,0,.1,-1.1,0,0,0,1,.85,1.2);ad(A,new SG(.8,20,14),m,0,.2,.6,0,0,0,1,.8,1);
 for(let i=0;i<8;i++)ad(A,new SG(.06+.03*(i%3),8,6),gM,(i-3.5)*.1,.55,1.35);
 const j=dm();j.position.set(0,0,1.3);const ji=dm();ji.rotation.x=-Math.PI/2;j.add(ji);A.add(j);jw=j;for(const s of[-1,1])ad(ji,new CG(.1,.7,6),hM,.2*s,-.2,.3,Math.PI);
 for(let i=0;i<8;i++){const s=i<4?-1:1,k=i%4,z=.9-k*.55,a=(k-1.5)*.35,lg=new zn;lg.position.set(s*.7,.2,z);lg.sp=1;lg.sd=s;ad(lg,new FG(.08,.12,1.6,8),hM,s*.8,.3,0,0,0,-s*1.0+a*0,1,1,1);const kn=new zn;kn.position.set(s*1.47,.73,0);lg.add(kn);lg.kn=kn;ad(kn,new SG(.11,8,6),hM,0,0,0);ad(kn,new FG(.06,.09,1.9,8),hM,s*.48,-1.28,.0,0,0,s*.3);A.add(lg);LG.push(lg)}
 for(const s of[-1,1]){const c=s<0?cL:cR;c.position.set(s*.4,.2,1.4);ad(c,new FG(.1,.14,1.0,8),hM,0,-.4,.2,-.5);A.add(c)}
 ad(A,new BG(.3,.05,.3),gM,0,.7,-1.0)}
function kraken(){const m=bM('skin');P={m};bB=ad(A,new SG(1.5,28,20),m,0,.9,-.3,0,0,0,1,1.3,1.1);
 for(const s of[-1,1]){ad(A,new SG(.34,12,10),new zt({color:'#fff'}),.65*s,.7,.95);ad(A,new SG(.17,10,8),gM,.65*s,.7,1.2)}
 const j=dm();j.position.set(0,-.2,1.0);const ji=dm();ji.rotation.x=-Math.PI/2;j.add(ji);A.add(j);jw=j;for(const s of[-1,1])ad(ji,new CG(.12,.6,6),aM,.15*s,.0,.3,Math.PI);
 for(let i=0;i<8;i++){const a=i/8*6.28,tg=new zn,big=i==0||i==4;tg.position.set(Math.sin(a)*.9,-.3,Math.cos(a)*.6-.3);
  {let par=tg,px=0,py=0,pz=0;const ch=[];for(let k=0;k<7;k++){const f=k/6,x=Math.sin(a)*(.2+f*1.6),y=-f*.9+(k>4?-.2:0),z=Math.cos(a)*(.2+f*1.4),pv=new zn;pv.position.set(x-px,y-py,z-pz);par.add(pv);px=x;py=y;pz=z;ad(pv,new SG(.34-.26*f,12,10),m,0,0,0);if(k%2==1)ad(pv,new SG(.07,6,6),gM,0,-.08+(k>4?.2:0),.1);ch.push(pv);par=pv}TN.push(ch)}
  if(i==2){cL.position.copy(tg.position);cL.add(...tg.children);A.add(cL)}else if(i==6){cR.position.copy(tg.position);cR.add(...tg.children);A.add(cR)}else A.add(tg)}
 ad(A,new SG(.4,10,8),gM,0,2.1,-.6)}
const pl=K=='ragno'?spider:K=='kraken'?kraken:HM[K]?()=>hum(HM[K]):()=>dragon(K=='idra'?3:1);let P;pl();
if(DBA_LEGO)DBA_BRICK(A);A.position.set(0,1.5,0);j.add(A);
return{grp:A,bBody:bB,bMesh:A,clawL:cL,clawR:cR,jaw:jw,wingL:wL,wingR:wR,tail:tailP,legs:LG,tent:TN}}
function DBA_R3(host,b,o,party){
 const V=window.__dgv=window.__dgv||{zm:1,m:0},X=b.arena,C=hn,P=Math.PI,W=o.W,hw=W/2,Dp=20;let w=host.clientWidth||360,h=host.clientHeight||480,asp=w/h;
 const S=new E2;S.background=new Rt(0);
 let bf=asp<1?72:52;const cam=new ir(bf,asp,.1,160),rd=new $2({antialias:!0,powerPreference:"high-performance"});
 rd.setPixelRatio(Math.min(devicePixelRatio,1.5));rd.setSize(w,h);rd.domElement.style.cssText="display:block;width:100%;height:100%";host.appendChild(rd.domElement);
 const onRz=()=>{const W2=host.clientWidth,H2=host.clientHeight;if(!W2||!H2||(W2==w&&H2==h))return;w=W2;h=H2;asp=w/h;bf=asp<1?72:52;rd.setSize(w,h);cam.aspect=asp;cam.fov=V.m===2?80:bf;cam.updateProjectionMatrix()},onOr=()=>{setTimeout(onRz,120);setTimeout(onRz,500)};addEventListener("resize",onRz);addEventListener("orientationchange",onOr);const ro=window.ResizeObserver?new ResizeObserver(onRz):null;ro&&ro.observe(host);const rzOff=()=>{removeEventListener("resize",onRz);removeEventListener("orientationchange",onOr);ro&&ro.disconnect()};
 S.add(new B2(6706602,.9));let L=new kp(C(X.light),1.2);L.position.set(8,22,8);S.add(L);L=new kp(C(X.ring),.6);L.position.set(-12,8,-10);S.add(L);
 const cv=document.createElement("canvas");cv.width=2048;cv.height=1024;const g2=cv.getContext("2d");g2.fillStyle="#02010a";g2.fillRect(0,0,2048,1024);
 for(let i=0;i<7;i++){const x=Math.random()*2048,y=Math.random()*1024,q=150+Math.random()*250,gr=g2.createRadialGradient(x,y,0,x,y,q);gr.addColorStop(0,["rgba(120,60,200,.35)","rgba(40,90,220,.3)","rgba(200,60,140,.28)"][i%3]);gr.addColorStop(1,"rgba(0,0,0,0)");g2.fillStyle=gr;g2.fillRect(0,0,2048,1024)}
 for(let i=0;i<1800;i++){g2.fillStyle="rgba(255,255,255,"+(.3+Math.random()*.7)+")";g2.beginPath();g2.arc(Math.random()*2048,Math.random()*1024,Math.random()<.04?2.2:Math.random()*1.2+.3,0,P*2);g2.fill()}
 S.add(new fe(new Tt(130,32,16),new ln({map:new Og(cv),side:_n,fog:!1})));
 const M=(c,x)=>new zt(Object.assign({color:c,roughness:.7,metalness:.2},x||{})),add=(m,x,y,z,g)=>{m.position.set(x,y,z);(g||S).add(m);return m},rc=C(X.ring);
 const SH=o.sh||"rect",pg=(N,R)=>Array.from({length:N},(_,k)=>{const f=P/N+k*2*P/N;return[R*Math.sin(f),R*Math.cos(f)]});
 const VS={rect:[[-hw,-Dp],[hw,-Dp],[hw,Dp],[-hw,Dp]],hex:pg(6,26),oct:pg(8,23.8),round:pg(24,22),cross:[[-10,-20],[10,-20],[10,-10],[20,-10],[20,10],[10,10],[10,20],[-10,20],[-10,10],[-20,10],[-20,-10],[-10,-10]]}[SH],SP={rect:W,hex:30,oct:24,round:30,cross:22}[SH],bw={rect:W,hex:52,oct:48,round:44,cross:40}[SH];
 const dbaFK=window.__dgFloorKey,dbaBio=!!(dbaFK&&DBA_BIOTEX[dbaFK]),tx=dbaBio?DBA_BT(dbaFK):DBA_FLOOR(b.theme,X.ground,X.ring,!0);tx.wrapS=tx.wrapT=1002;tx.repeat.set(dbaBio?bw/18:bw/10,bw/10);
 const fm=new zt({color:16777215,map:tx,roughness:.9,metalness:.1}),fb=(w,d)=>{const m=new fe(new rn(w,.4,d),fm);m.position.y=-.2;S.add(m)};
 if(SH=="rect")fb(W,2*Dp);else if(SH=="cross"){fb(20,40);fb(40,20)}else{const N=VS.length,R0=SH=="hex"?26:SH=="oct"?23.8:22,m=new fe(new Fn(R0,R0,.4,N),fm);m.rotation.y=P/N;m.position.y=-.2;S.add(m)}
 const per=(x,sg)=>{let best=null;VS.forEach((p,i)=>{const q=VS[(i+1)%VS.length];if(Math.abs(q[0]-p[0])<1e-6||x<Math.min(p[0],q[0])-1e-6||x>Math.max(p[0],q[0])+1e-6)return;const u=(x-p[0])/(q[0]-p[0]),z=p[1]+u*(q[1]-p[1]);if(!best||sg*z>sg*best.z){const l=Math.hypot(q[0]-p[0],q[1]-p[1]),tx=(q[0]-p[0])/l,tz=(q[1]-p[1])/l;let nx=-tz,nz=tx;if(-nx*x-nz*z<0){nx=-nx;nz=-nz}best={x,z,tx,tz,nx,nz,i}}});return best};
 const ds=o.doors.map(d=>per(d.x*SP,-1)),en=per(0,1);
 const WL=[],FR=[],sx=(a,b,c,d,e,f,g,h)=>{const o=(x,y,z,w,s,t)=>(w-x)*(t-y)-(z-y)*(s-x),d1=o(a,b,c,d,e,f),d2=o(a,b,c,d,g,h),d3=o(e,f,g,h,a,b),d4=o(e,f,g,h,c,d);return d1*d2<0&&d3*d4<0};
 const wm=M(5723454,{emissive:rc,emissiveIntensity:.15}),fr=M(3355443);
 VS.forEach((p,i)=>{const q=VS[(i+1)%VS.length],dx=q[0]-p[0],dz=q[1]-p[1],L=Math.hypot(dx,dz),sg=(c0,c1)=>{const c=(c0+c1)/2,mm=add(new fe(new rn(c1-c0+.6,6.4,.6),wm),p[0]+dx/L*c,3.2,p[1]+dz/L*c);mm.rotation.y=-Math.atan2(dz,dx);WL.push({m:mm,x1:p[0]+dx/L*c0,z1:p[1]+dz/L*c0,x2:p[0]+dx/L*c1,z2:p[1]+dz/L*c1})};
  if(en.i==i){const t=Math.hypot(en.x-p[0],en.z-p[1]);sg(0,t-2.5);sg(t+2.5,L)}else sg(0,L)});
 const frm=(q,glow,full)=>{const g=new zn;g.position.set(q.x+q.nx*.3,0,q.z+q.nz*.3);g.rotation.y=-Math.atan2(q.tz,q.tx);S.add(g);FR.push(g);if(full)add(new fe(new rn(5.6,6,.8),M(1118481,{emissive:rc,emissiveIntensity:glow})),0,3,0,g);[-3,3].forEach(d=>add(new fe(new rn(.8,6.8,1.2),fr),d,3.4,0,g));add(new fe(new rn(6.8,1,1.2),fr),0,6.8,0,g)};
 ds.forEach(q=>frm(q,.7,1));frm(en,.2,0);
 const hs=party.slice(0,12).map((p,i)=>{const g=WOW_build(WOWTT(),p,!1);g.scale.set(1.5,((p.appearance&&p.appearance.heightMul)||1)*1.5,1.5);S.add(g);const dd=p.alive===!1;if(dd)g.rotation.x=-P/2;return{g,i,tx:0,tz:0,dl:0,mv:0,hd:0,dead:dd}});const pk=()=>{const C=window.__dbaCtl;if(C&&C.on){const a=hs.find(a=>!a.dead&&party[a.i]&&party[a.i].id===C.id);if(a)return a}return hs.find(a=>!a.dead)||hs[0]};
 const zs=(o.ev=="n"||o.ev=="m")?12:5,slot=(i,z0)=>[(i%2?1:-1)*(4.5+((i/2|0)%3)*2.1),z0+((i/2/3)|0)*2.2];let mcb=null,t=0,fx=[],ev=null,st={};
 hs.forEach(a=>{const s=o.mode=="enter"?[en.x-en.nx*(2+a.i*.9),en.z-en.nz*(2+a.i*.9)]:slot(a.i,zs);a.g.position.set(s[0],0,s[1]);a.g.rotation.y=o.mode=="enter"?Math.atan2(en.nx,en.nz):P;if(a.dead)a.g.position.y=.4});
 function go(f,cb,hd){hs.forEach(a=>{let q=f(a.i);if(typeof q[0]=="number")q=[q];if(a.dead){const l=q[q.length-1];a.g.position.set(l[0],.4,l[1]);a.mv=0;a.q=[];return}a.q=q.slice(1);a.tx=q[0][0];a.tz=q[0][1];a.dl=a.i*.15;a.mv=1;a.hd=hd?1:0;a.g.visible=!0});mcb=cb}
 function ev0(kind,op){if(ev)S.remove(ev);ev=new zn;ev.position.set(0,0,kind=="n"||kind=="m"?-3:0);ev.scale.setScalar(kind=="m"?1.7:kind=="n"?1.1:1.7);S.add(ev);st={p:0,go:0};op=op||{};
  if(kind=="c"){add(new fe(new rn(2.6,1.2,1.7),M(9132587)),0,.6,0,ev);const lid=new zn;lid.position.set(0,1.2,-.85);const lm=new fe(new rn(2.6,.5,1.7),M(9132587));lm.position.set(0,.25,.85);lid.add(lm);ev.add(lid);st.lid=lid;add(new fe(new rn(2.7,.18,1.8),M(16096779,{metalness:.8})),0,.9,0,ev);
   st.orb=add(new fe(new Tt(.6,16,12),new ln({color:16436245,transparent:!0,opacity:0})),0,2.1,0,ev);st.bm=add(new fe(new Fn(.5,.9,7,16,1,!0),new ln({color:16436245,transparent:!0,opacity:0,side:_n})),0,4.5,0,ev)}
  if(kind=="t"){const c={spike:15680580,arrow:12632256,fire:16737792,poison:8900331}[op.type]||15680580;add(new fe(new Fn(2.6,2.6,.15,6),M(c,{emissive:c,emissiveIntensity:.4})),0,.08,0,ev);add(new fe(new Ps(1.6,1.8,6),new ln({color:c,side:_n})),0,.2,0,ev).rotation.x=-P/2}
  if(kind=="r"){add(new fe(new Fn(.8,1,1.6,8),M(7893356)),0,.8,0,ev);add(new fe(new rn(2.2,2.8,.3),M(4868682)),0,1.4,-1.6,ev);st.orb=add(new fe(new Tt(.55,16,12),new ln({color:rc})),0,3,0,ev);st.rr=add(new fe(new Ci(1,.06,8,40),new ln({color:rc})),0,3,0,ev)}
  if(kind=="n"||kind=="m"){const mg=new zn;ev.add(mg);try{DBA_BM(op.bo,mg)}catch(x){add(new fe(new Gt(1,3,6),M(15680580)),0,1.5,0,mg)}add(new fe(new Ps(3.2,3.8,40),new ln({color:15680580,side:_n})),0,.15,0,mg).rotation.x=-P/2;st.orb=mg}
  st.k=kind}
 function fxs(ty){hs.forEach(a=>{const x=a.g.position.x,z=a.g.position.z;let m,f;
  if(ty=="spike"){m=new fe(new Gt(.35,2.6,6),M(15680580,{emissive:15680580,emissiveIntensity:.6}));f=u=>{m.position.set(x,-1.3+Math.sin(Math.min(1,u*1.2)*P)*2.4,z)}}
  else if(ty=="arrow"){const s=x<0?-1:1;m=new fe(new Gt(.1,1.8,5),M(12632256));m.rotation.z=s>0?P/2:-P/2;f=u=>{m.position.set(s*hw+(x-s*hw)*Math.min(1,u*2),1.9,z);m.visible=u<.6}}
  else if(ty=="fire"){m=new fe(new Gt(.9,3.6,8),new ln({color:16737792,transparent:!0,opacity:.85}));f=u=>{const k=.4+Math.sin(Math.min(1,u)*P)*(.9+Math.random()*.3);m.scale.y=k;m.position.set(x,1.8*k,z)}}
  else{m=new fe(new Tt(1.4,12,10),new ln({color:8900331,transparent:!0,opacity:.5}));f=u=>{m.position.set(x,1.4+u*1.8,z);m.scale.setScalar(1+u*.6);m.material.opacity=.55*(1-u)}}
  S.add(m);fx.push({m,l:1.6,u:0,f})})}
 if(o.ev)ev0(o.ev,{type:o.ty,bo:o.bo});
 const el=rd.domElement,pt=new Map;let pd=0,fh=P,fpP=!1;el.style.touchAction="none";
 el.addEventListener("wheel",ev=>{ev.preventDefault();V.zm=Math.min(1.6,Math.max(.4,V.zm*Math.exp(ev.deltaY*.001)))},{passive:!1});
 el.addEventListener("pointerdown",ev=>pt.set(ev.pointerId,ev));
 el.addEventListener("pointermove",ev=>{if(!pt.has(ev.pointerId))return;pt.set(ev.pointerId,ev);if(pt.size==2){const[p1,p2]=[...pt.values()],dd=Math.hypot(p1.clientX-p2.clientX,p1.clientY-p2.clientY);if(pd)V.zm=Math.min(1.6,Math.max(.4,V.zm*pd/dd));pd=dd}});
 const pu=ev=>{pt.delete(ev.pointerId);pd=0};el.addEventListener("pointerup",pu);el.addEventListener("pointercancel",pu);
 let id;const t0=performance.now(),lp=()=>{id=requestAnimationFrame(lp);const n=(performance.now()-t0)/1e3,dt=Math.min(.05,n-t);t=n;
  let run=0;hs.forEach(a=>{if(!a.mv)return;run=1;if(a.dl>0){a.dl-=dt;return}const p=a.g.position,dx=a.tx-p.x,dz=a.tz-p.z,d=Math.hypot(dx,dz);
   if(d<.12){p.x=a.tx;p.z=a.tz;if(a.q&&a.q.length){const w=a.q.shift();a.tx=w[0];a.tz=w[1];return}p.y=0;a.mv=0;a.g.rotation.z=0;a.g.rotation.y=P;if(a.hd)a.g.visible=!1;return}
   {const sp=Math.min(8*dt,d);p.x+=dx/d*sp;p.z+=dz/d*sp}p.y=Math.abs(Math.sin(t*11+a.i))*.14;a.g.rotation.y=Math.atan2(dx,dz);a.g.rotation.z=Math.sin(t*11+a.i)*.06});
  if(!run&&mcb){const c=mcb;mcb=null;c()}
  st.p+=((st.go?1:0)-st.p)*.08;if(st.lid){st.lid.rotation.x=-st.p*1.3;st.orb.material.opacity=st.p*.7;st.bm.material.opacity=st.p*.35}
  if(st.k=="r"){st.orb.position.y=st.rr.position.y=3+Math.sin(t*1.5)*.25;st.rr.rotation.x=t;st.rr.rotation.y=t*.7}
  if(st.k=="n"||st.k=="m"){st.orb.rotation.y=Math.sin(t)*.3;st.orb.position.y=Math.abs(Math.sin(t*2))*.15}
  fx=fx.filter(q=>{q.u+=dt/q.l;if(q.u>=1){S.remove(q.m);return!1}q.f(q.u);return!0});
  const tn=Math.tan(bf*P/360),dd=Math.max((bw*.9+4)/(2*tn*asp),(bw*.55+6)/(2*tn)),ex=Math.max(dd*1.15,46)*V.zm;
  const fm=V.m===2;if(fm!=fpP){fpP=fm;cam.fov=fm?80:bf;cam.updateProjectionMatrix();if(!fm&&pk())pk().g.visible=!(pk().hd&&!pk().mv)}
  if(V.m>0&&pk()){const g=pk().g,df=Math.atan2(Math.sin(g.rotation.y-fh),Math.cos(g.rotation.y-fh));fh+=df*.08;const fx=Math.sin(fh),fz=Math.cos(fh),p=g.position;
   if(fm){g.visible=!1;cam.position.set(p.x-fx*.2,3.6+p.y,p.z-fz*.2);cam.lookAt(p.x+fx*12,3.1,p.z+fz*12)}
   else{const d=15*V.zm;cam.position.set(p.x-fx*d,8+3*V.zm,p.z-fz*d);cam.lookAt(p.x+fx*5,2.4,p.z+fz*5)}FR.forEach(g=>{g.visible=!(V.m===1&&Math.hypot(cam.position.x-g.position.x,cam.position.z-g.position.z)<10)});WL.forEach(w=>{const mx=(w.x1+w.x2)/2,mz=(w.z1+w.z2)/2;w.m.visible=!(V.m===1&&(sx(cam.position.x,cam.position.z,p.x,p.z,w.x1,w.z1,w.x2,w.z2)||Math.hypot(cam.position.x-mx,cam.position.z-mz)<7))})}
  else{WL.forEach(w=>w.m.visible=!0);FR.forEach(g=>g.visible=!0);const a=.08*Math.sin(t*.25);cam.position.set(Math.sin(a)*ex*.4,ex*.85,ex*.65);cam.lookAt(0,0,asp<1?ex*.3:ex*.08)}
  rd.render(S,cam)};lp();
 return{enter(c){go(i=>[[en.x+en.nx*1.5,en.z+en.nz*1.5],slot(i,zs)],c)},back(c){go(i=>slot(i,12),c)},event:ev0,
  act(op){if(st.k=="c"){st.go=1;if(op.color){st.orb.material.color.set(op.color);st.bm.material.color.set(op.color)}}else if(st.k=="t")fxs(op.type)},
  mid(c){go(i=>slot(i,-13),c)},door(i,c){const q=ds[i];go(k=>{const f=((k%3)-1)*.8;return[[q.x+q.nx*4+q.tx*f,q.z+q.nz*4+q.tz*f],[q.x+q.tx*f*.5,q.z+q.tz*f*.5]]},c,1)},
  flash(c){st.orb&&st.orb.material.color.set(c)},dispose(){rzOff();cancelAnimationFrame(id);rd.dispose();rd.forceContextLoss&&rd.forceContextLoss();rd.domElement.parentNode&&rd.domElement.parentNode.removeChild(rd.domElement)}}}
function DBA_W(host,cfg){
 const P=Math.PI,XD=window.DBA_X,CS=1200,HW=2400;let w=host.clientWidth||360,h=host.clientHeight||640,asp=w/h;
 const mb=a=>()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};let rs=mb(cfg.seed||1),rnd=(a,b)=>a+rs()*(b-a);
 const S=new E2;window.__dbaScene=S;S.background=new Rt(7316188);S.fog=new h_(7316188,90,260);
 const cam=new ir(asp<1?68:52,asp,.1,420);let rd=null,lost=0,zm=1;
 const mkRd=()=>{rd=new $2({antialias:!0,powerPreference:"high-performance"});rd.setPixelRatio(Math.min(devicePixelRatio,2));rd.setSize(w,h);const c=rd.domElement;c.style.cssText="display:block;width:100%;height:100%;touch-action:none";host.insertBefore(c,host.firstChild);c.addEventListener("wheel",e=>{e.preventDefault();zm=Math.min(1.8,Math.max(.5,zm*Math.exp(e.deltaY*.001)))},{passive:!1});c.addEventListener("webglcontextlost",e=>{e.preventDefault();if(rd&&e.target===rd.domElement)lost=1})};
 const suspendR=()=>{if(!rd)return;try{rd.dispose();rd.forceContextLoss&&rd.forceContextLoss()}catch(e){}rd.domElement.remove();rd=null},resumeR=()=>{if(!rd){mkRd();window.DBA_RETEX&&window.DBA_RETEX(1)}};mkRd();
 const onRz=()=>{const W2=host.clientWidth,H2=host.clientHeight;if(!W2||!H2||(W2==w&&H2==h))return;w=W2;h=H2;asp=w/h;if(rd)rd.setSize(w,h);cam.aspect=asp;cam.updateProjectionMatrix()},onOr=()=>{setTimeout(onRz,120);setTimeout(onRz,500)};addEventListener("resize",onRz);addEventListener("orientationchange",onOr);const ro=window.ResizeObserver?new ResizeObserver(onRz):null;ro&&ro.observe(host);const rzOff=()=>{removeEventListener("resize",onRz);removeEventListener("orientationchange",onOr);ro&&ro.disconnect()};
 const AM=new B2(12111064,1.0);S.add(AM);const L=new kp(16773584,1.25);L.position.set(60,120,40);S.add(L);
 const NL=(()=>{try{if(localStorage.getItem("dba_nl")==="0"||localStorage.getItem("dba_q")==="low")return null}catch(e){}const g=new zn;g.isLight=!0;g.isPointLight=!0;g.color=new Rt(16758890);g.intensity=0;g.distance=48;g.decay=1.5;g.castShadow=!1;S.add(g);return g})();
 const mats={},M=(c,x)=>{const k=c+JSON.stringify(x||0);return mats[k]||(mats[k]=new zt(Object.assign({color:c,roughness:.8,metalness:.1},x||{})))};
 const add=(m,x,y,z,g)=>{m.position.set(x,y,z);(g||S).add(m);return m};
 const GE={tr:new Fn(.5,.8,4,6),lf:new Gt(3,7,7),cone:new Gt(1,1,7),box:new rn(1,1,1),cyl:new Fn(1,1,1,10),sph:new Tt(1,8,8)};
 // ---- 14 biomi (uno per elemento di drago) e percorso a serpentina su griglia 4x4
 const KEYS=["inferno","frost","natura","ombra","tempesta","sangue","cristallo","magma","sabbie","spettrale","ossa","luce","caos","abisso"];
 const DEF=[{n:"Terre d'Inferno",ic:"🔥",sh:"volcano",c:[0x2a1208,0xff5a10]},{n:"Ghiacciai Eterni",ic:"❄️",sh:"glacier",c:[0xa8d8ff,0xd8f0ff]},{n:"Foresta Selvatica",ic:"🌲",sh:"tree",c:[0x5c3a1a,0x2f7a3a]},{n:"Valle d'Ombra",ic:"🌑",sh:"spike",c:[0x1a1230,0x8b5cf6]},{n:"Piana della Tempesta",ic:"⛈️",sh:"pylon",c:[0x39424e,0x60a5fa]},{n:"Palude di Sangue",ic:"🩸",sh:"crystal",c:[0x5a0a14,0xdc2626]},{n:"Caverne di Cristallo",ic:"💎",sh:"crystal",c:[0x7ab8ff,0xc4b5fd]},{n:"Crateri di Magma",ic:"🌋",sh:"volcano",c:[0x3a1500,0xff7a00]},{n:"Deserto delle Sabbie",ic:"🏜️",sh:"dune",c:[0xd9b36a,0xb88a3a]},{n:"Brughiera Spettrale",ic:"👻",sh:"pillar",c:[0x9fb4c8,0xc7f9ff]},{n:"Piana d'Ossa",ic:"💀",sh:"bone",c:[0xd8d2c0,0xece6d6]},{n:"Altopiani di Luce",ic:"☀️",sh:"pillar",c:[0xf5f0d0,0xfde68a]},{n:"Terre del Caos",ic:"🌀",sh:"chaos",c:[0xff3366,0x33ddff]},{n:"Abissi Sommersi",ic:"🌊",sh:"spike",c:[0x0b2a4a,0x22d3ee]}];
 const BI=DEF.map((d,i)=>Object.assign({i,t:XD.TPK(KEYS[i])},d));
 const PATH=[];for(let r=0;r<4;r++)for(let c=0;c<4;c++)PATH.push({cx:r%2?3-c:c,cz:r});
 const CI=[];PATH.forEach((p,k)=>CI[p.cz*4+p.cx]=k);
 const cellOf=(x,z)=>CI[Math.min(3,Math.max(0,Math.floor((z+HW)/CS)))*4+Math.min(3,Math.max(0,Math.floor((x+HW)/CS)))];
 const cc=k=>({x:-HW+PATH[k].cx*CS+CS/2,z:-HW+PATH[k].cz*CS+CS/2});
 const GT=[];for(let k=0;k<15;k++){const a=PATH[k],b=PATH[k+1],hx=a.cx!=b.cx;GT.push({k,a:k,b:k+1,u:k-1,ln:hx?"x":"z",open:k==0,p:hx?{x:-HW+Math.max(a.cx,b.cx)*CS,z:cc(k).z}:{x:cc(k).x,z:-HW+Math.max(a.cz,b.cz)*CS}})}
 for(let a=0;a<15;a++)for(let b=a+2;b<15;b++){const pa=PATH[a],pb=PATH[b];if(Math.abs(pa.cx-pb.cx)+Math.abs(pa.cz-pb.cz)!=1)continue;const hx=pa.cx!=pb.cx,cm=Math.max(a,b-3);GT.push({k:GT.length,a,b,u:cm-1,x:1,ln:hx?"x":"z",open:!1,p:hx?{x:-HW+Math.max(pa.cx,pb.cx)*CS,z:cc(a).z}:{x:cc(a).x,z:-HW+Math.max(pa.cz,pb.cz)*CS}})}
 const CAMPS=[cc(0)];for(let k=1;k<=14;k++){const p=GT[k-1].p,c=cc(k),d=Math.hypot(c.x-p.x,c.z-p.z);CAMPS.push({x:p.x+(c.x-p.x)/d*160,z:p.z+(c.z-p.z)/d*160})}
 const nearGate=(x,z,r)=>GT.some(g=>Math.hypot(x-g.p.x,z-g.p.z)<r);
 // ---- terreno con rilievi
 const ph=[0,1,2,3].map(()=>rs()*6.28),sm=t=>{t=Math.max(0,Math.min(1,t));return t*t*(3-2*t)};
 const AMP=k=>k==0?2:k==15?7:({volcano:12,glacier:9,dune:7,tree:6,spike:8,crystal:9,pylon:6,pillar:6,bone:6,chaos:9})[BI[k-1].sh]||6;
 const VF=[],TGM=[];const HT0=(x,z)=>{const k=cellOf(x,z),dx=(((x+HW)%CS)+CS)%CS,dz=(((z+HW)%CS)+CS)%CS,db=Math.min(dx,CS-dx,dz,CS-dz),fb=sm((db-16)/40);let fc=1;for(let i=0;i<CAMPS.length;i++){const c=CAMPS[i];fc=Math.min(fc,sm((Math.hypot(x-c.x,z-c.z)-90)/60))}for(let i=0;i<VF.length;i++){const c=VF[i];fc=Math.min(fc,sm((Math.hypot(x-c.x,z-c.z)-90)/60))}
  return(Math.sin(x*.011+ph[0])*Math.cos(z*.013+ph[1])+.5*Math.sin((x+z)*.027+ph[2])+.25*Math.sin(x*.05-z*.043+ph[3]))*AMP(k)*fb*fc*.55};
 const PONDS=[];{const pr=mb((cfg.seed||1)*7919+13),R0=(a,b)=>a+pr()*(b-a),want=k=>{if(k==0)return[34];const sh=BI[k-1].sh;return sh=="tree"?[44,30]:sh=="glacier"?[40]:sh=="dune"?[26]:[]};for(let k=0;k<=14;k++){const c=cc(k);want(k).forEach(R=>{for(let n=0;n<60;n++){const x=c.x+R0(-CS/2+260,CS/2-260),z=c.z+R0(-CS/2+260,CS/2-260);if(CAMPS.some(q=>Math.hypot(x-q.x,z-q.z)<230)||nearGate(x,z,200)||PONDS.some(q=>Math.hypot(x-q.x,z-q.z)<260))continue;PONDS.push({x,z,r:R,k,h0:HT0(x,z),sh:k?BI[k-1].sh:"vil"});break}})}}
 const HT=(x,z)=>{let h=HT0(x,z);for(let i=0;i<PONDS.length;i++){const q=PONDS[i],dx=x-q.x;if(dx>q.r*1.7||dx<-q.r*1.7)continue;const d=Math.hypot(dx,z-q.z);if(d>q.r*1.6)continue;const w=sm(1-(d-q.r*.9)/(q.r*.7)),dp=d<q.r*1.15?4.5*(1-(d/(q.r*1.15))**2):0;h=h*(1-w)+(q.h0-dp)*w}return h};
 const GTX=[];for(let k=0;k<16;k++){const t=k>=1&&k<=14?BI[k-1].t:BI[k?3:2].t,X=t.arena,bt=k>=1&&k<=14&&DBA_BIOTEX[KEYS[k-1]],tx=k==0?DBA_ST():bt?DBA_BT(KEYS[k-1]):DBA_FLOOR(t.theme,X.ground,X.ring,!0);tx.wrapS=tx.wrapT=1002;GTX[k]=tx;tx.repeat.set(k==0||bt?64:80,k==0||bt?116:80);const g=new qd(CS,CS,150,150);g.rotateX(-P/2);const pa=g.attributes.position,c=cc(k);for(let i=0;i<pa.count;i++)pa.setY(i,HT(pa.getX(i)+c.x,pa.getZ(i)+c.z));g.computeVertexNormals();const f=new fe(g,new zt({color:16777215,map:tx,roughness:.95,metalness:.05}));f.position.set(c.x,0,c.z);S.add(f);TGM.push({g,c,pa})}
 const OBG=new Map(),GS=20;let RX=0,RZ=0,OBL=[],OBM=0;window.__dbaOBG=OBG;
 const addOb=(x,z,r,e)=>{const o={x,z,r,e};OBL.push(o);const a=Math.floor((x-r-4)/GS),b=Math.floor((x+r+4)/GS),c=Math.floor((z-r-4)/GS),d=Math.floor((z+r+4)/GS);for(let i=a;i<=b;i++)for(let j=c;j<=d;j++){const k=(i+300)*1000+j+300;let l=OBG.get(k);if(!l)OBG.set(k,l=[]);l.push(o)}};
 const pushOb=(x,z,pr)=>{for(let it=0;it<3;it++){const l=OBG.get((Math.floor(x/GS)+300)*1000+Math.floor(z/GS)+300);if(!l)break;for(let n=0;n<l.length;n++){const o=l[n];if(o.dead||o.e&&!o.e.on)continue;const dx=x-o.x,dz=z-o.z,m=o.r+pr,d2=dx*dx+dz*dz;if(d2<m*m){if(d2<1e-6){x=o.x+m}else{const d=Math.sqrt(d2);x=o.x+dx/d*m;z=o.z+dz/d*m}}}}RX=x;RZ=z};
 const WT=[];{const mkR=()=>{const c=document.createElement("canvas");c.width=c.height=256;const x=c.getContext("2d");for(let i=0;i<46;i++){const px=Math.random()*256,py=Math.random()*256,w=10+Math.random()*28,h=3+Math.random()*7;x.strokeStyle="rgba(255,255,255,"+(.25+Math.random()*.45)+")";x.lineWidth=1.5+Math.random()*2;const rt=Math.random()*.6,ar=Math.PI*2*(.5+Math.random()*.4);for(const ox of[-256,0,256])for(const oy of[-256,0,256]){x.beginPath();x.ellipse(px+ox,py+oy,w,h,rt,0,ar);x.stroke()}}const t=new Og(c);t.wrapS=t.wrapT=1000;return t};
  PONDS.forEach(q=>{addOb(q.x,q.z,q.r*1.05+2);const ice=q.sh=="glacier",col=ice?0xa9dff0:q.sh=="dune"?0x2fb5c0:q.sh=="tree"?0x2d7fae:0x3a8fc0,wl=q.h0-1.0,g=new zn;g.position.set(q.x,wl,q.z);
   const m1=new fe(new Na(q.r*1.02,56),new zt({color:col,transparent:!0,opacity:ice?.88:.8,roughness:.1,metalness:.15,emissive:col,emissiveIntensity:.12}));m1.rotation.x=-P/2;g.add(m1);
   const t1=mkR(),t2=mkR();t1.repeat.set(q.r/14,q.r/14);t2.repeat.set(q.r/9,q.r/9);
   const m2=new fe(new Na(q.r*1.01,56),new ln({map:t1,transparent:!0,opacity:.4,blending:2,depthWrite:!1,color:ice?0xffffff:0xcfefff}));m2.rotation.x=-P/2;m2.position.y=.05;g.add(m2);
   const m3=new fe(new Na(q.r*1.0,56),new ln({map:t2,transparent:!0,opacity:.25,blending:2,depthWrite:!1,color:0xffffff}));m3.rotation.x=-P/2;m3.position.y=.09;g.add(m3);
   S.add(g);WT.push({p:q,g,m1,t1,t2,wl,ice})})}
 const GR=new Map([[GE.tr,[1.1,2]],[GE.lf,[3,3.5]],[GE.cone,[1,.5]],[GE.box,[.6,.5]],[GE.cyl,[1,.5]],[GE.sph,[1,1]]]);
 const colOf=(g,x,z)=>{let r=0;g.children.forEach(m=>{const q=GR.get(m.geometry);if(!q)return;const sx=Math.max(m.scale.x,m.scale.z),sy=m.scale.y;if(sy<.25||m.position.y-q[1]*sy>2.2)return;let rr=q[0]*sx;if(m.geometry===GE.sph&&sy<4)rr*=.6;if(rr>r)r=rr});if(r>.3)addOb(x,z,Math.min(r*2,32))};
 const HH=new Map([[GE.tr,2],[GE.lf,3.5],[GE.cone,.5],[GE.box,.5],[GE.cyl,.5],[GE.sph,1]]);
 const gnd=(g,fr)=>{if(!g||g.userData.gd||!g.position)return;g.userData.gd=1;const x=g.position.x,z=g.position.z,gs=g.scale.x||1;let r=fr;
  if(r==null){r=0;g.children.forEach(c=>{const q=GR.get(c.geometry);if(!q)return;r=Math.max(r,Math.hypot(c.position.x,c.position.z)+q[0]*Math.max(c.scale.x,c.scale.z))});r=Math.min(r*gs,16)}
  let m=HT(x,z),mxv=m;for(let i=0;i<8;i++){const a=i*Math.PI/4,hv=HT(x+Math.cos(a)*r,z+Math.sin(a)*r);m=Math.min(m,hv);mxv=Math.max(mxv,hv)}
  g.position.y=m;g.updateMatrixWorld(!0);let lo=1e9;
  g.traverse(c=>{if(!c.isMesh||!c.geometry)return;const gg=c.geometry;if(!gg.boundingBox)gg.computeBoundingBox();const bb=gg.boundingBox,e=c.matrixWorld.elements;for(let i=0;i<8;i++){const X=i&1?bb.max.x:bb.min.x,Y=i&2?bb.max.y:bb.min.y,Z=i&4?bb.max.z:bb.min.z,wy=e[1]*X+e[5]*Y+e[9]*Z+e[13];if(wy<lo)lo=wy}});
  g.position.y=(lo<1e8?m-(lo-m)-.1*gs:m-.1*gs)-Math.min(2.2,.25*Math.max(0,mxv-m))};
 let swl=[];const props=[],mk=(o,x,z,r)=>{props.push({o,x,z,r:r||230});S.add(o);return o};props.push=function(p){p.obs=OBL.slice(OBM);OBM=OBL.length;return Array.prototype.push.call(this,p)};window.__dbaProps=props;
 const sh=(geo,mat,sx,sy,sz,y)=>{const m=new fe(geo,mat);m.scale.set(sx,sy,sz);m.position.y=y;return m};
 const sty=(bi,x,z,big)=>{if(PONDS.some(q=>Math.hypot(x-q.x,z-q.z)<q.r*1.1+4))return;const d=BI[bi],c=d.c,s=big?rnd(1.3,1.9):rnd(.8,1.4),g=new zn;g.position.set(x,HT(x,z),z);const A=(geo,col,sx,sy,sz,y,ex)=>g.add(sh(geo,M(col,ex),sx,sy,sz,y));
  switch(d.sh){case"tree":{const v=rs(),lc=()=>rs()<.5?c[1]:c[1]-0x0a1a0a,B2=(geo,col,sx,sy,sz,y,ox,oz,rz)=>{const m=sh(geo,M(col),sx,sy,sz,y);m.position.x=ox;m.position.z=oz;if(rz)m.rotation.z=rz;g.add(m)};
  if(v<.25){A(GE.tr,c[0],s,s,s,2*s);A(GE.lf,lc(),s,s,s,7*s)}
  else if(v<.45){A(GE.tr,c[0],.9*s,1.4*s,.9*s,2.8*s);A(GE.lf,lc(),1.35*s,.8*s,1.35*s,6*s);A(GE.lf,lc(),1.05*s,.8*s,1.05*s,9.2*s);A(GE.lf,lc(),.72*s,.7*s,.72*s,12.2*s)}
  else if(v<.67){A(GE.tr,c[0],1.5*s,.9*s,1.5*s,1.8*s);A(GE.sph,lc(),4.4*s,3.4*s,4.4*s,6.2*s);B2(GE.sph,lc(),3.2*s,2.5*s,3.2*s,5.2*s,2.6*s,0);B2(GE.sph,lc(),3*s,2.4*s,3*s,5.6*s,-1.8*s,2*s);B2(GE.sph,lc(),2.8*s,2.2*s,2.8*s,5*s,-1.4*s,-2.2*s)}
  else if(v<.83){A(GE.tr,c[0],.55*s,1.5*s,.55*s,3.2*s);A(GE.sph,lc(),2.3*s,6.5*s,2.3*s,9.5*s)}
  else if(v<.93){A(GE.tr,c[0],.9*s,1.7*s,.9*s,3.4*s);B2(GE.tr,c[0],.35*s,1.1*s,.35*s,6.4*s,1.1*s,0,-.9);B2(GE.tr,c[0],.3*s,1*s,.3*s,6.8*s,-1*s,.4*s,.8)}
  else{A(GE.tr,c[0],1.2*s,.7*s,1.2*s,1.4*s);A(GE.sph,lc(),5.6*s,2.4*s,5.6*s,4.2*s);B2(GE.sph,lc(),4*s,1.8*s,4*s,3.4*s,3.4*s,1.5*s);B2(GE.sph,lc(),4*s,1.8*s,4*s,3.2*s,-3.2*s,-1.8*s)}
  break}
  case"volcano":{const v=big||rs()<.25;if(v){A(GE.cone,c[0],8*s,15*s,8*s,7.5*s,{emissive:c[1],emissiveIntensity:.3})}else A(GE.cone,c[0],2*s,rnd(4,8),2*s,3,{emissive:c[1],emissiveIntensity:.4});break}
  case"glacier":g.rotation.y=rnd(0,P);A(GE.box,c[0],rnd(4,9)*s,rnd(6,14)*s,rnd(4,9)*s,5*s,{emissive:0x2a5a9a,emissiveIntensity:.25,transparent:!0,opacity:.85});if(rs()<.5)A(GE.cone,c[1],2*s,8*s,2*s,10*s,{transparent:!0,opacity:.9});break;
  case"pillar":A(GE.box,c[0],1.6*s,rnd(4,10)*s,1.6*s,3*s,{emissive:c[1],emissiveIntensity:.25});A(GE.sph,c[1],1.2*s,1.2*s,1.2*s,rnd(7,12)*s,{emissive:c[1],emissiveIntensity:.8});break;
  case"bone":A(GE.box,c[0],1.5*s,rnd(4,10)*s,1.5*s,3*s);A(GE.sph,c[1],1.3*s,1.1*s,1.3*s,rnd(7,12)*s);break;
  case"spike":A(GE.cone,c[0],1.6*s,rnd(7,16)*s,1.6*s,5*s,{emissive:c[1],emissiveIntensity:.35});A(GE.sph,c[1],.5*s,.5*s,.5*s,rnd(10,16)*s,{emissive:c[1],emissiveIntensity:1});break;
  case"crystal":g.rotation.z=rnd(-.3,.3);A(GE.cone,c[1],2*s,rnd(5,12)*s,2*s,4*s,{emissive:c[1],emissiveIntensity:.7,transparent:!0,opacity:.9});A(GE.cone,c[0],1.2*s,rnd(3,6)*s,1.2*s,2*s,{emissive:c[1],emissiveIntensity:.5});break;
  case"dune":A(GE.sph,c[0],rnd(6,12)*s,rnd(1.5,3.5)*s,rnd(6,12)*s,0);if(rs()<.4)A(GE.cyl,0x3a7a3a,.5*s,3.5*s,.5*s,1.8*s);break;
  case"pylon":A(GE.box,c[0],1.6*s,rnd(8,16)*s,1.6*s,4*s);A(GE.sph,c[1],1.1*s,1.1*s,1.1*s,rnd(9,17)*s,{emissive:c[1],emissiveIntensity:1});break;
  default:{const col=[0xff3366,0x33ddff,0xffdd33,0x9966ff][rs()*4|0];g.rotation.set(rnd(0,1),rnd(0,P),rnd(0,1));A(GE.box,col,rnd(2,5)*s,rnd(2,8)*s,rnd(2,5)*s,3*s,{emissive:col,emissiveIntensity:.5})}}
  g.scale.setScalar(2);DBA_TEXOBJ(g,d,bi,GE);colOf(g,x,z);g.userData.sw=d.sh=="tree"?1:0;return mk(g,x,z)};
 const bOf=(x,z)=>{const k=cellOf(x,z);return k>=1&&k<=14?k-1:(k==0?2:3)};
 const line=(x1,z1,x2,z2)=>{const L2=Math.hypot(x2-x1,z2-z1),nx=-(z2-z1)/L2,nz=(x2-x1)/L2;for(let d=0;d<L2;d+=1){const t=d/L2,x=x1+(x2-x1)*t,z=z1+(z2-z1)*t;if(nearGate(x,z,45))continue;for(const sd of[-1,1]){const px=x+nx*12*sd,pz=z+nz*12*sd,bi=bOf(px,pz),sp=BI[bi].sh=="tree"?14:BI[bi].sh=="volcano"?26:18;if(Math.floor(d)%sp)continue;sty(bi,px+rnd(-2,2),pz+rnd(-2,2),!0)}}};
 for(let k=1;k<4;k++){const v=-HW+k*CS;line(v,-HW,v,HW);line(-HW,v,HW,v)}
 {const ed=(x1,z1,x2,z2,ix,iz)=>{const L2=Math.hypot(x2-x1,z2-z1),ux=(x2-x1)/L2,uz=(z2-z1)/L2;[8,20].forEach((off,ri)=>{for(let d=0;d<L2;d+=1){const x=x1+ux*d+ix*off,z=z1+uz*d+iz*off,bi=bOf(x,z),sp=BI[bi].sh=="tree"?14:BI[bi].sh=="volcano"?26:18;if((Math.floor(d)+ri*4)%sp)continue;const px=x+rnd(-2,2),pz=z+rnd(-2,2);if(CAMPS.some(q=>Math.hypot(px-q.x,pz-q.z)<120)||nearGate(px,pz,45))continue;sty(bi,px,pz,!0)}})};
 ed(-HW,-HW,HW,-HW,0,1);ed(-HW,HW,HW,HW,0,-1);ed(-HW,-HW,-HW,HW,1,0);ed(HW,-HW,HW,HW,-1,0)}
 for(let k=0;k<16;k++){const c=cc(k);for(let i=0;i<(k==0?900:380);i++){const x=c.x+rnd(-CS/2+22,CS/2-22),z=c.z+rnd(-CS/2+22,CS/2-22);if(CAMPS.some(q=>Math.hypot(x-q.x,z-q.z)<120)||nearGate(x,z,45)||(k==15&&Math.hypot(x-c.x,z-c.z)<60))continue;sty(bOf(x,z),x,z,!1)}}
 const RTU=[window.__ASSETS["tex_68_a791653a.webp"], window.__ASSETS["tex_69_e750592d.webp"], window.__ASSETS["tex_70_7c07de64.webp"], window.__ASSETS["tex_71_53662e27.webp"], window.__ASSETS["tex_72_d7c7fe15.webp"], window.__ASSETS["tex_73_bd4bb4c4.webp"], window.__ASSETS["tex_74_b48edce2.webp"], window.__ASSETS["tex_75_c8259ba2.webp"]],RTK=[0,5,4,0,7,1,3,1,5,2,6,6,1,7,3,5],RTC={};
  const RTX=n=>{if(RTC[n])return RTC[n];const c=document.createElement("canvas");c.width=192;c.height=512;const x=c.getContext("2d");x.fillStyle="#8a6f4a";x.fillRect(0,0,192,512);const t=new Og(c);t.wrapS=1001;t.wrapT=1003;const im=new Image();im.onload=()=>{x.clearRect(0,0,192,512);x.drawImage(im,0,0,192,512);t.needsUpdate=!0};im.src=RTU[n];return RTC[n]=t};
  const RMAT=(k,kind)=>{const m=new zt({map:RTX(RTK[k]),transparent:!0,depthWrite:!1,roughness:.96,metalness:0,side:_n,color:kind=="s"?0xd2cabd:16777215});m.polygonOffset=!0;m.polygonOffsetFactor=-3;m.polygonOffsetUnits=-3;return m};
 const PLC=[];
 const freeAt=(x,z,r)=>{const a=Math.floor((x-r)/GS),b=Math.floor((x+r)/GS),c=Math.floor((z-r)/GS),d=Math.floor((z+r)/GS);for(let i=a;i<=b;i++)for(let j=c;j<=d;j++){const l=OBG.get((i+300)*1000+j+300);if(l)for(let n=0;n<l.length;n++){const o=l[n];if(Math.hypot(x-o.x,z-o.z)<o.r+r)return!1}}for(let n=0;n<PLC.length;n++){const q=PLC[n];if(Math.hypot(x-q.x,z-q.z)<q.r+r+3)return!1}return!0};
 const pos=(k,r)=>{r=r||4;const c=cc(k);for(let n=0;n<120;n++){const x=c.x+rnd(-CS/2+80,CS/2-80),z=c.z+rnd(-CS/2+80,CS/2-80);if(!CAMPS.some(q=>Math.hypot(x-q.x,z-q.z)<130)&&!nearGate(x,z,60)&&freeAt(x,z,r)){PLC.push({x,z,r});return{x,z}}}return c};
 // ---- cancelli
 GT.forEach(g=>{const o=new zn;o.position.set(g.p.x,HT(g.p.x,g.p.z),g.p.z);S.add(o);const al=g.ln=="x";[-15,15].forEach(d=>{addOb(g.p.x+(al?0:d),g.p.z+(al?d:0),2.2);add(new fe(GE.box,M(0x555555)),al?0:d,10,al?d:0,o).scale.set(3,20,3)});add(new fe(GE.box,M(0x555555)),0,20.5,0,o).scale.set(al?3:34,3,al?34:3);
  g.pm=new zt({color:0xff3030,emissive:0xff1010,emissiveIntensity:.8,transparent:!0,opacity:.45,side:_n});const pn=add(new fe(GE.box,g.pm),0,9,0,o);pn.scale.set(al?.6:28,18,al?28:.6);g.pn=pn});
 const setGate=(k,op)=>{const g=GT[k];if(!g)return;g.open=op;g.pm.color.set(op?0x30ff80:0xff3030);g.pm.emissive.set(op?0x10c050:0xff1010);g.pn.visible=!op};setGate(0,!0);
 // ---- campi e villaggio
 let lc=()=>.5;const VCN=Array(16).fill(1),VIL=[],MKM=[null,"!","?"].map((ch,ix)=>{if(!ch)return null;const cv=document.createElement("canvas");cv.width=128;cv.height=192;const x=cv.getContext("2d");x.font="bold 170px Georgia,serif";x.textAlign="center";x.textBaseline="middle";x.lineWidth=14;x.strokeStyle="#3b2300";x.strokeText(ch,64,100);x.fillStyle=ix==1?"#ffd21f":"#9bd7ff";x.fillText(ch,64,100);return new ln({map:new Og(cv),transparent:!0,side:_n,depthTest:!1,depthWrite:!1})}),npcs=[],NP=[["elder","chierico","#4338ca",0xfacc15,-18,-6],["inn","monaco","#be185d",0xf472b6,18,-4],["arena","gladiatore","#991b1b",0xef4444,-12,22],["shop","arciere","#065f46",0x34d399,14,24],["arcan","stregone","#7c3aed",0xa78bfa,24,8]],camp=(k,c,vi)=>{const g=new zn,tc=k?BI[k-1].c[0]:0x8b5a2b,sty=(k+vi)%4,VRK=WOW_RK[(k*3+vi*5+1)%WOW_RK.length];g.position.set(c.x,HT(c.x,c.z),c.z);S.add(g);
  [[-36,-12],[36,-12],[-32,28],[32,28]].forEach(([x,z])=>{const HS=.74,hg=new zn;hg.position.set(x*(1-HS),0,z*(1-HS));hg.scale.setScalar(HS);g.add(hg);{const lg=Math.abs(x)>=Math.abs(z-8),hx=[10,10.5,lg?8:15,9][sty]*HS,hz=[10,10.5,lg?15:8,9][sty]*HS,rr=3.2,cs=(h)=>{if(h<=rr)return[0];const n=Math.max(2,Math.ceil((2*h-2*rr)/(rr*1.3))+1),a=[];for(let i=0;i<n;i++)a.push(-(h-rr)+i*2*(h-rr)/(n-1));return a};cs(hx).forEach(u=>cs(hz).forEach(v=>addOb(c.x+x+u,c.z+z+v,rr)))}const al=k?DBA_NVALT[k-1][vi%3]:[-1,-1],tn=k==6&&vi==0?0x7a1a20:0,HWM=al[0]>=0?DBA_NVM("w",al[0],tn):(k?DBA_HCOL("w"+k,DBA_HW,tc==0x2a1208?0x6a4a3a:tc,.5):DBA_HW()),HRM=al[1]>=0?DBA_NVM("r",al[1],tn):(k?DBA_HCOL("r"+k,DBA_HR,BI[k-1].c[1],.3):DBA_HR());if(sty==0){add(new fe(GE.box,HWM),x,6.4,z,hg).scale.set(20,12.8,20);add(new fe(GE.cone,HRM),x,18,z,hg).scale.set(16.8,10.4,16.8)}else if(sty==1){add(new fe(GE.cyl,HWM),x,5.5,z,hg).scale.set(20,11,20);add(new fe(GE.cone,HRM),x,16.5,z,hg).scale.set(24,11,24)}else if(sty==2){add(new fe(GE.box,HWM),x,5,z,hg).scale.set(Math.abs(x)>=Math.abs(z-8)?16:30,10,Math.abs(x)>=Math.abs(z-8)?30:16,hg);add(new fe(GE.cone,HRM),x,13.5,z,hg).scale.set(26,8,26)}else{add(new fe(GE.box,HWM),x,11,z,hg).scale.set(14,22,14);add(new fe(GE.cone,HRM),x,29,z,hg).scale.set(15,13,15);add(new fe(GE.box,HWM),x,7,z,hg).scale.set(18,3,18)}if(sty!=0){const fx3=Math.abs(x)>=Math.abs(z-8)?Math.sign(-x)||1:0,fz3=fx3?0:(Math.sign(8-z)||1);add(new fe(GE.box,M(0x3a2410)),x+fx3*(sty==3?7.2:10.2),3.6,z+fz3*(sty==3?7.2:10.2),hg).scale.set(fx3?.6:5.5,7.2,fz3?.6:5.5)}{const fx4=Math.abs(x)>=Math.abs(z-8)?Math.sign(-x)||1:0,fz4=fx4?0:(Math.sign(8-z)||1),WW=[10.12,10.35,8.12,7.12][sty],WY=[7.6,6.5,6,14][sty],US=sty==3?[0]:sty==0?[-7.2,7.2]:[-4.5,4.5],NG=DBA_NGI();US.forEach(u=>{const wm=new fe(sty==3?NG.wg3:NG.wg,NG.win);wm.position.set(x+fx4*WW+fz4*u,WY,z+fz4*WW-fx4*u);wm.rotation.y=Math.atan2(fx4,fz4);hg.add(wm)})}if(sty==0){const fa=Math.abs(x)>=Math.abs(z-8),fn2=fa?[Math.sign(-x)||1,0]:[0,Math.sign(8-z)||1],dc=(nx,nz,u,y,mt,w2,h2)=>{const m=new fe(new qd(w2,h2),mt);m.position.set(x+nx*10.06+nz*u,y,z+nz*10.06-nx*u);m.rotation.y=Math.atan2(nx,nz);hg.add(m)},DM=DBA_HDEC("door"),WM=DBA_HDEC("win"),[fx,fz]=fn2;dc(fx,fz,0,4.1,DM,6.5,8.2);dc(fx,fz,-7.2,7.6,WM,4.2,4.6);dc(fx,fz,7.2,7.6,WM,4.2,4.6);dc(-fx,-fz,-4.6,7,WM,4.6,5);dc(-fx,-fz,4.6,7,WM,4.6,5);dc(fz,-fx,0,7,WM,4.6,5);dc(-fz,fx,0,7,WM,4.6,5)}});
  {const BM=DBA_NVG(0,DBA_NVT.barrel,1,1,0,"b");[[-27,-25],[27,-25],[-23,39],[23,39],[-9,20]].forEach(([x,z])=>{add(new fe(GE.cyl,BM),x,1.15,z,g).scale.set(1.3,2.3,1.3);addOb(c.x+x,c.z+z,1.6)})}
  {const NG=DBA_NGI();
   [[-12,-2],[12,-2],[-12,18],[12,18]].forEach(([x,z])=>{add(new fe(GE.cyl,M(0x4a2e16)),x,2.6,z,g).scale.set(.28,5.2,.28);add(new fe(GE.box,M(0x2a1a0a)),x,5.45,z,g).scale.set(.9,.25,.9);add(new fe(GE.sph,NG.lamp),x,5.95,z,g).scale.set(.55,.7,.55);add(new fe(GE.sph,NG.halo),x,5.95,z,g).scale.set(1.5,1.7,1.5);const pl=new fe(NG.pg,NG.glow);pl.rotation.x=-P/2;pl.position.set(x,.2,z);pl.scale.set(15,15,1);g.add(pl);addOb(c.x+x,c.z+z,.7)});
   [[-6,-10],[6,-10]].forEach(([x,z],bi)=>{add(new fe(GE.cyl,M(0x2b2b30)),x,.9,z,g).scale.set(1.5,.5,1.5);add(new fe(GE.cyl,M(0x3a3a42)),x,.35,z,g).scale.set(.5,.7,.5);const fl=add(new fe(GE.cone,NG.fl),x,1.75,z,g);fl.scale.set(.6,1.2,.6);const pl=new fe(NG.pg,NG.glow);pl.rotation.x=-P/2;pl.position.set(x,.2,z);pl.scale.set(13,13,1);g.add(pl);const ps=[];for(let i=0;i<4;i++){const mt=new ln({color:0x8a8a8a,transparent:!0,opacity:.3,depthWrite:!1}),pm=new fe(GE.sph,mt);pm.position.set(x,4,z);g.add(pm);ps.push({m:pm,mt,ph:i/4+bi*.13})}DBA_SMK.push({x:c.x+x,z:c.z+z,dx:x,dz:z,fl,pl,p:ps});addOb(c.x+x,c.z+z,1.2)});
   {const gs=new zn;gs.position.set(0,0,-19);g.add(gs);const CV=DBA_NVG(0,DBA_NVT.canvas,1.5,1,0,"cv"),WK=DBA_NVG(0,DBA_NVT.wicker,2,2,0,"wk");
    [[-3,-1.3],[3,-1.3],[-3,1.3],[3,1.3]].forEach(([px2,pz2])=>add(new fe(GE.cyl,M(0x4a2e16)),px2,2.1,pz2,gs).scale.set(.2,4.2,.2));
    const rf=add(new fe(GE.box,CV),0,4.4,0,gs);rf.scale.set(7.6,.22,4);rf.rotation.x=.16;
    add(new fe(GE.box,M(0x6a4526)),0,.8,.2,gs).scale.set(6,1.6,2.2);
    [[-1.9,0xdc2626],[0,0xfacc15],[1.9,0x65a30d]].forEach(([bx,fc])=>{add(new fe(GE.cyl,WK),bx,1.95,.2,gs).scale.set(.85,.7,.85);for(let i=0;i<3;i++)add(new fe(GE.sph,M(fc)),bx+(i-1)*.35,2.45,.2+(i%2?.2:-.15),gs).scale.set(.38,.38,.38)});
    add(new fe(GE.cyl,WK),-4.6,.55,1.6,gs).scale.set(.9,1.1,.9);add(new fe(GE.cyl,WK),4.6,.55,1.8,gs).scale.set(.8,1.0,.8);addOb(c.x,c.z-19,4.2)}}
  {const PM=DBA_NVG(k,DBA_NVT.plaza,2,2,tc,"p"),rd0=k?DBA_NVRD[k-1]:-1,RM=RMAT(k,"m");[PM,RM].forEach(m=>{m.polygonOffset=!0;m.polygonOffsetFactor=-2;m.polygonOffsetUnits=-2});add(new fe(DBA_PLG||(DBA_PLG=new Fn(1,1,1,40)),PM),0,.12,8,g).scale.set(15,.2,15);
   [[-36,-12],[36,-12],[-32,28],[32,28]].forEach(([x,z])=>{const dx=x,dz=z-8,d=Math.hypot(dx,dz),a0=13,a1=d-9,L=a1-a0;if(L<4)return;const pg=new qd(L,6),uv=pg.attributes.uv;for(let i=0;i<uv.count;i++){const u0=uv.getX(i),v0=uv.getY(i);uv.setXY(i,v0,u0*L/16)}const rg=new zn;rg.position.set(dx/d*(a0+a1)/2,.1,8+dz/d*(a0+a1)/2);rg.rotation.y=-Math.atan2(dz,dx);const rm=new fe(pg,RM);rm.rotation.x=-P/2;rg.add(rm);g.add(rg)})}
  addOb(c.x,c.z+8,4.9);add(new fe(GE.cyl,M(0x9a9a9a)),0,1.5,8,g).scale.set(4.25,3,4.25);add(new fe(GE.cyl,new ln({color:0x3b82f6})),0,3.05,8,g).scale.set(3,.6,3);add(new fe(new Ps(64,66,64),new ln({color:0x22c55e,side:_n})),0,.15,0,g).rotation.x=-P/2;
  {const RN=WOW_RACES[VRK].n,ROLE=["Cacciatori","Esploratori","Naturalisti"][vi%3],TT=k==0?"Villaggio di partenza":"Villaggio dei "+ROLE,cv=document.createElement("canvas");cv.width=512;cv.height=160;const cx2=cv.getContext("2d"),hu=((k*47+vi*113)%360);cx2.fillStyle="#3a2410";cx2.fillRect(0,0,512,160);cx2.strokeStyle="hsl("+hu+",70%,55%)";cx2.lineWidth=10;cx2.strokeRect(8,8,496,144);cx2.fillStyle="#f5e6c4";cx2.textAlign="center";cx2.font="bold 46px Georgia,serif";cx2.fillText(TT.length>22?"Villaggio · "+ROLE:TT,256,76);cx2.font="34px Georgia,serif";cx2.fillStyle="hsl("+hu+",80%,75%)";cx2.fillText("Popolo: "+RN,256,125);const sg=new fe(new qd(15,4.7),new ln({map:new Og(cv),side:_n}));sg.position.set(0,10.5,-27);g.add(sg);add(new fe(GE.cyl,M(0x4a2e16)),-7,5,-27,g).scale.set(.7,10,.7);add(new fe(GE.cyl,M(0x4a2e16)),7,5,-27,g).scale.set(.7,10,.7);
   [-1,1].forEach(sd=>{const bn=new fe(new qd(3.4,6.8),new ln({map:DBA_NVT1("bn",DBA_NVT.banner,256,512,1,1),color:new Rt("hsl("+hu+",55%,78%)"),side:_n}));bn.position.set(sd*21,11,-26);g.add(bn);add(new fe(GE.cyl,M(0x4a2e16)),sd*21,7.5,-26,g).scale.set(.45,15,.45)});addOb(c.x-7,c.z-27,1);addOb(c.x+7,c.z-27,1)}
  NP.forEach(([kd,cl,col,mkc,x,z])=>{if(kd=="elder"&&!k)return;const ra=vi?lc():rs(),rb=vi?lc():rs(),rc=vi?lc():rs(),rd=vi?lc():rs(),rk=VRK,RC2=WOW_RACES[rk],ap={sex:rb<.5?"male":"female",race:rk,skinColor:RC2.skin[rc*RC2.skin.length|0],hairColor:RC2.hair[rd*RC2.hair.length|0]};ap.beardColor=ap.hairColor;if(RC2.eye!=null)ap.eyeColor=RC2.eye;if(RC2.beard&&ap.sex!="female")ap.beardStyle=1;
   const q=new zn;q.position.set(c.x+x,HT(c.x+x,c.z+z),c.z+z);q.rotation.y=Math.atan2(-x,8-z);q.visible=!1;S.add(q);addOb(c.x+x,c.z+z,2.6);
   const o={race:rk,vi:vi,g:q,m:null,my:kd=="elder"?7.6:6.2,x:c.x+x,z:c.z+z,k:kd,b:k-1,cd:0,y:HT(c.x,c.z),built:0};
   o.mk=()=>{o.built=1;try{const m3=WOW_build(WOWTT(),{classKey:cl,color:col,arch:cl=="chierico"?"healer":"melee",name:kd,appearance:ap},!1);m3.scale.set(1.95,1.95,1.95);q.add(m3)}catch(e){add(new fe(GE.cyl,M(0x4338ca)),0,1.65,0,q).scale.set(1.35,3.3,1.35);add(new fe(GE.sph,M(0xf1c9a5)),0,3.9,0,q).scale.set(.9,.9,.9)}if(kd=="elder"){const mm=new fe(new qd(3.4,5.1),MKM[1]);mm.position.set(0,o.my,0);mm.renderOrder=20;mm.visible=!1;q.add(mm);o.m=mm}else{const mm=add(new fe(GE.sph,new ln({color:mkc})),0,o.my,0,q);mm.scale.set(.75,.75,.75);o.m=mm}};
   npcs.push(o)})};
 for(let k=0;k<=14;k++)camp(k,CAMPS[k],0);
 {let ls=1234567;lc=()=>{ls=(ls*1664525+1013904223)%4294967296;return ls/4294967296};
 for(let k=1;k<=14;k++)for(let vi=1;vi<=2;vi++){const cn=cc(k);let ok=null;for(let n=0;n<200&&!ok;n++){const x=cn.x+(lc()-.5)*(CS-220),z=cn.z+(lc()-.5)*(CS-220);if(CAMPS.some(q=>Math.hypot(x-q.x,z-q.z)<190)||VIL.some(q=>Math.hypot(x-q.x,z-q.z)<210)||nearGate(x,z,100)||PONDS.some(q=>Math.hypot(x-q.x,z-q.z)<q.r*1.7+110)||!freeAt(x,z,60))continue;ok={x,z}}
  if(ok){VCN[k]++;VIL.push(ok);VF.push(ok);PLC.push({x:ok.x,z:ok.z,r:75});camp(k,ok,vi)}}
  TGM.forEach(t=>{const p=t.pa;let ch=0;for(let i=0;i<p.count;i++){const wx=p.getX(i)+t.c.x,wz=p.getZ(i)+t.c.z;if(VF.some(q=>Math.abs(wx-q.x)<160&&Math.abs(wz-q.z)<160)){p.setY(i,HT(wx,wz));ch=1}}if(ch){p.needsUpdate=!0;t.g.computeVertexNormals();t.g.computeBoundingSphere()}});{let jj=0;for(let i=0;i<props.length;i++){const q=props[i];if(VF.some(v=>Math.hypot(q.x-v.x,q.z-v.z)<95)){S.remove(q.o);(q.obs||[]).forEach(w=>{if(Math.hypot(w.x-q.x,w.z-q.z)<40)w.dead=1})}else props[jj++]=q}props.length=jj}}

 // ---- strade e sentieri
 const ROADS=[],JS=[];{
  let rl=987654;const rc=()=>{rl=(rl*1664525+1013904223)%4294967296;return rl/4294967296},hyp=Math.hypot;
  const VA=[...CAMPS,...VIL];
  const crs=(Pt,step)=>{const o=[],n=Pt.length;for(let i=0;i<n-1;i++){const p0=Pt[Math.max(i-1,0)],p1=Pt[i],p2=Pt[i+1],p3=Pt[Math.min(i+2,n-1)],m=Math.max(1,Math.ceil(hyp(p2[0]-p1[0],p2[1]-p1[1])/step));for(let j=0;j<m;j++){const t=j/m,t2=t*t,t3=t2*t;o.push([0,1].map(a=>.5*((2*p1[a])+(-p0[a]+p2[a])*t+(2*p0[a]-5*p1[a]+4*p2[a]-p3[a])*t2+(-p0[a]+3*p1[a]-3*p2[a]+p3[a])*t3)))}}o.push(Pt[n-1].slice());return o};
  const fin=(Pt,ex,bnd)=>{let a=crs(Pt,10),D=0,L=[0];for(let i=1;i<a.length;i++){D+=hyp(a[i][0]-a[i-1][0],a[i][1]-a[i-1][1]);L.push(D)}const ph=rc()*6.28,ph2=rc()*6.28;a=a.map((p,i)=>{const q=a[Math.min(a.length-1,i+1)],r=a[Math.max(0,i-1)];let tx=q[0]-r[0],tz=q[1]-r[1];const l=hyp(tx,tz)||1;tx/=l;tz/=l;const f=Math.min(1,L[i]/170,(D-L[i])/170),o=(Math.sin(L[i]*.021+ph)*5+Math.sin(L[i]*.053+ph2)*2.2)*f;return[p[0]-tz*o,p[1]+tx*o]});
   for(let it=0;it<3;it++){a=a.map((p,i)=>{if(i==0||i==a.length-1)return p;let x=p[0],z=p[1];for(const q of PONDS){const d=hyp(x-q.x,z-q.z),R=q.r*1.75+7;if(d<R){const u=Math.max(d,1);x=q.x+(x-q.x)/u*R;z=q.z+(z-q.z)/u*R}}for(const q of VA){if(ex&&ex.includes(q))continue;const d=hyp(x-q.x,z-q.z);if(d<95){const u=Math.max(d,1);x=q.x+(x-q.x)/u*95;z=q.z+(z-q.z)/u*95}}if(bnd){const c=bnd,m=95;x=Math.max(c.x-CS/2+m,Math.min(c.x+CS/2-m,x));z=Math.max(c.z-CS/2+m,Math.min(c.z+CS/2-m,z))}return[x,z]});
    a=a.map((p,i)=>{if(i==0||i==a.length-1)return p;const q=a[i-1],r=a[i+1];return[(q[0]+p[0]*2+r[0])/4,(q[1]+p[1]*2+r[1])/4]})}
   const out=[a[0]];let acc=0;for(let i=1;i<a.length;i++){acc+=hyp(a[i][0]-a[i-1][0],a[i][1]-a[i-1][1]);if(acc>=6||i==a.length-1){out.push(a[i]);acc=0}}return out};
  const side=(v,tx)=>tx>=v.x?1:-1,sOut={};
  const legPts=(A,B,aV,bV)=>{const P2=[];if(aV){const sd=side(A,B.x),ky=A.x+"_"+A.z+"_"+sd;P2.push([A.x+sd*9,A.z+8]);P2.push([A.x+sd*66,A.z+8])}else P2.push([A.x,A.z]);const a=P2[P2.length-1],bs=bV?side(B,A.x):0,b=bV?[B.x+bs*66,B.z+8]:[B.x,B.z],L=hyp(b[0]-a[0],b[1]-a[1]),nm=Math.floor(L/240);for(let j=1;j<=nm;j++){const t=j/(nm+1),nx=-(b[1]-a[1])/L,nz=(b[0]-a[0])/L,o=(rc()-.5)*2*Math.min(120,L*.2);P2.push([a[0]+(b[0]-a[0])*t+nx*o,a[1]+(b[1]-a[1])*t+nz*o])}P2.push(b);if(bV)P2.push([B.x+bs*9,B.z+8]);return P2};
  const add=(k,w,pts,kind)=>{if(pts.length>2)ROADS.push({k,w,pts,kind})};
  for(let k=0;k<=15;k++){
   let nodes;
   if(k==0)nodes=[{p:CAMPS[0],v:1},{p:GT[0].p,v:0}];
   else if(k==15){const g=GT[14].p,c=cc(15),d=hyp(c.x-g.x,c.z-g.z);nodes=[{p:g,v:0},{p:{x:c.x-(c.x-g.x)/d*110,z:c.z-(c.z-g.z)/d*110},v:0}]}
   else{const g0=GT[k-1].p,g1=GT[k].p,vs=[CAMPS[k],...VIL.filter(v=>cellOf(v.x,v.z)===k)],dx=g1.x-g0.x,dz=g1.z-g0.z;vs.sort((a,b)=>((a.x-g0.x)*dx+(a.z-g0.z)*dz)-((b.x-g0.x)*dx+(b.z-g0.z)*dz));nodes=[{p:g0,v:0},...vs.map(p=>({p,v:1})),{p:g1,v:0}]}
   const cl=cc(k),mainAll=[];
   for(let i=0;i<nodes.length-1;i++){const A=nodes[i],B=nodes[i+1],ex=[A.p,B.p],pts=fin(legPts(A.p,B.p,A.v,B.v),ex,null),nb=ROADS.length;add(k,9,pts,"m");if(ROADS.length>nb){ROADS[nb].A=A;ROADS[nb].B=B;ROADS[nb].i=i;ROADS[nb].n=nodes.length}pts.forEach(q=>mainAll.push(q))}
   if(k>=1&&k<=14&&mainAll.length>30){const ok=(p)=>!VA.some(q=>hyp(p[0]-q.x,p[1]-q.z)<150)&&!GT.some(g=>hyp(p[0]-g.p.x,p[1]-g.p.z)<140),cand=mainAll.map((p,i)=>i).filter(i=>i>4&&i<mainAll.length-5&&ok(mainAll[i])),used=[];
    const pick=()=>{for(let t=0;t<40;t++){const i=cand[rc()*cand.length|0];if(i!=null&&used.every(u=>Math.abs(u-i)>28)){used.push(i);return i}}return -1};
    for(let n=0;n<3;n++){const i=pick();if(i<0)break;const p=mainAll[i],q=mainAll[Math.min(mainAll.length-1,i+2)],r=mainAll[Math.max(0,i-2)];let tx=q[0]-r[0],tz=q[1]-r[1];const l=hyp(tx,tz)||1;tx/=l;tz/=l;let sg=rc()<.5?1:-1;if(((p[0]+(-tz*sg)*120)-cl.x)**2+((p[1]+(tx*sg)*120)-cl.z)**2>((p[0]-cl.x)**2+(p[1]-cl.z)**2)&&rc()<.7)sg=-sg;
     JS.push({k,x:p[0],z:p[1],tx,tz,sg,loop:n>=2});if(n<2){let h=Math.atan2(tx*sg,-tz*sg)+(rc()-.5)*.5,x=p[0],z=p[1];const Pt=[[x,z]],len=5+(rc()*5|0);for(let j=0;j<len;j++){h+=(rc()-.5)*.9;let hx=Math.cos(h),hz=Math.sin(h);const nx=x+hx*38,nz=z+hz*38;if(Math.abs(nx-cl.x)>CS/2-130||Math.abs(nz-cl.z)>CS/2-130){h=Math.atan2(cl.z-z,cl.x-x)+(rc()-.5)*.4;hx=Math.cos(h);hz=Math.sin(h)}x+=hx*38;z+=hz*38;Pt.push([x,z])}
      const pts=fin(Pt,[],cl);add(k,5.5,pts,"s");const e=pts[pts.length-1],hh=HT(e[0],e[1]),g=new zn;g.position.set(e[0],hh,e[1]);[[1.6,.9,0],[1.2,1.8,.1],[.8,2.5,-.1]].forEach(([r2,y,o2])=>{const m=new fe(GE.sph,M(0x8a8f96));m.scale.set(r2*1.25,r2*.85,r2*1.25);m.position.set(o2,y*.5+.3,0);g.add(m)});const pl=new fe(GE.cyl,M(0x5a3a1e));pl.scale.set(.18,3.2,.18);pl.position.set(2.4,1.6,.4);g.add(pl);S.add(g)}
     else{const j=Math.min(mainAll.length-1,i+44),pj=mainAll[j];if(!ok(pj)||j-i<30)continue;const mx2=(p[0]+pj[0])/2,mz2=(p[1]+pj[1])/2,dx2=pj[0]-p[0],dz2=pj[1]-p[1],dl=hyp(dx2,dz2)||1,o=sg*110,b=[mx2-dz2/dl*o,mz2+dx2/dl*o];if(Math.abs(b[0]-cl.x)>CS/2-120||Math.abs(b[1]-cl.z)>CS/2-120)continue;add(k,5.5,fin([p.slice(),[p[0]+(b[0]-p[0])*.5,p[1]+(b[1]-p[1])*.5],b,[pj[0]+(b[0]-pj[0])*.5,pj[1]+(b[1]-pj[1])*.5],pj.slice()],[],cl),"s")}}}
   if(k==0&&mainAll.length>20){const i=mainAll.length>>1,p=mainAll[i],q=mainAll[i+2]||p,r=mainAll[i-2]||p;let tx=q[0]-r[0],tz=q[1]-r[1];const l=hyp(tx,tz)||1;tx/=l;tz/=l;const Pt=[[p[0],p[1]]];let x=p[0],z=p[1];for(let j=1;j<=5;j++){x+=-tz*34+(rc()-.5)*20;z+=tx*34+(rc()-.5)*20;Pt.push([x,z])}add(k,5.5,fin(Pt,[],cl),"s")}
  }
  // mesh
  const gc=document.createElement("canvas");gc.width=64;gc.height=4;{const x=gc.getContext("2d"),g=x.createLinearGradient(0,0,64,0);g.addColorStop(0,"rgba(255,255,255,0)");g.addColorStop(.28,"rgba(255,255,255,.75)");g.addColorStop(.72,"rgba(255,255,255,.75)");g.addColorStop(1,"rgba(255,255,255,0)");x.fillStyle=g;x.fillRect(0,0,64,4)}
  const GRT=new Og(gc),SHM=k=>{const tc=k>=1&&k<=14?BI[k-1].c[0]:0x6b4a2a,m=new zt({color:new Rt(0x3a2a18).lerp(new Rt(tc),.25),map:GRT,transparent:!0,roughness:1,metalness:0,depthWrite:!1,side:_n});m.polygonOffset=!0;m.polygonOffsetFactor=-2;m.polygonOffsetUnits=-2;return m};
  const build=(list,wm,uv0,extra,yo,po)=>{const Pp=[],Uu=[],Ii=[];list.forEach(r=>{const pts=r.pts,w=r.w+extra,base=Pp.length/3;let D=0;pts.forEach((p,i)=>{const q=pts[Math.min(pts.length-1,i+1)],o=pts[Math.max(0,i-1)];let tx=q[0]-o[0],tz=q[1]-o[1];const l=hyp(tx,tz)||1;tx/=l;tz/=l;if(i)D+=hyp(p[0]-pts[i-1][0],p[1]-pts[i-1][1]);const lx=p[0]-tz*w/2,lz=p[1]+tx*w/2,rx=p[0]+tz*w/2,rz=p[1]-tx*w/2;Pp.push(lx,HT(lx,lz)+yo,lz,rx,HT(rx,rz)+yo,rz);Uu.push(0,D/(w*2.667),1,D/(w*2.667))});for(let i=0;i<pts.length-1;i++){const a=base+i*2;Ii.push(a,a+2,a+1,a+1,a+2,a+3)}});if(!Pp.length)return null;const g=new Jn;g.setAttribute("position",new on(Pp,3));g.setAttribute("uv",new on(Uu,2));g.setIndex(Ii);g.computeVertexNormals();const m=new fe(g,wm);m.renderOrder=po;m.frustumCulled=!1;S.add(m);return m};
  for(let k=0;k<=15;k++){["m","s"].forEach((kd,ki)=>{const L=ROADS.filter(r=>r.k===k&&r.kind===kd);if(L.length)build(L,RMAT(k,kd),1,0,.34+ki*.02,2+ki)})}
  // niente alberi/rocce sul tracciato + zone libere
  const cell=new Map();ROADS.forEach(r=>r.pts.forEach(p=>{const key=Math.floor(p[0]/24)+","+Math.floor(p[1]/24);let l=cell.get(key);if(!l)cell.set(key,l=[]);l.push([p[0],p[1],r.w/2+3.5])}));
  const onRoad=(x,z)=>{const a=Math.floor(x/24),b=Math.floor(z/24);for(let i=a-1;i<=a+1;i++)for(let j=b-1;j<=b+1;j++){const l=cell.get(i+","+j);if(l)for(const q of l)if(hyp(x-q[0],z-q[1])<q[2])return!0}return!1};
  let jj=0;for(let i=0;i<props.length;i++){const p=props[i];if(onRoad(p.x,p.z)){S.remove(p.o);(p.obs||[]).forEach(q=>{if(Math.hypot(q.x-p.x,q.z-p.z)<40)q.dead=1})}else props[jj++]=p}props.length=jj;
  ROADS.forEach(r=>{for(let i=0;i<r.pts.length;i+=4)PLC.push({x:r.pts[i][0],z:r.pts[i][1],r:r.w/2+4})});

  // ---- segnavia
  {const WT=new Map(),tex=(l1,l2)=>{const key=l1+"|"+l2;if(WT.has(key))return WT.get(key);const c=document.createElement("canvas");c.width=512;c.height=192;const x=c.getContext("2d");x.fillStyle="#7a5530";x.fillRect(0,0,512,192);for(let i=0;i<46;i++){x.strokeStyle="rgba(40,22,8,"+(.08+(i%5)*.03)+")";x.lineWidth=1+(i%3);x.beginPath();x.moveTo(0,i*4.2+(i%7));x.bezierCurveTo(170,i*4.2+(i%5)*2,340,i*4.2-(i%4)*2,512,i*4.2+(i%6))}x.strokeStyle="#3a2410";x.lineWidth=12;x.strokeRect(6,6,500,180);x.strokeStyle="#c8a45e";x.lineWidth=3;x.strokeRect(14,14,484,164);x.textAlign="center";x.textBaseline="middle";x.fillStyle="#fdf0cf";x.shadowColor="rgba(0,0,0,.6)";x.shadowBlur=3;let f=l2?50:64;x.font="bold "+f+"px Georgia,serif";while(x.measureText(l1).width>460&&f>24){f-=3;x.font="bold "+f+"px Georgia,serif"}x.fillText(l1,256,l2?72:96);if(l2){let g=40;x.font=g+"px Georgia,serif";while(x.measureText(l2).width>460&&g>20){g-=2;x.font=g+"px Georgia,serif"}x.fillStyle="#f3d58a";x.fillText(l2,256,134)}const t=new Og(c);if(window.DBAQ&&0)t.anisotropy=4;WT.set(key,t);return t};
   const sign=(x,z,nx,nz,fr,bk)=>{const l=hyp(nx,nz)||1;nx/=l;nz/=l;(window.__dbaSigns=window.__dbaSigns||[]).push({x,z,nx,nz,t:fr[0]+"/"+fr[1]});const g=new zn,yaw=Math.atan2(nx,nz);g.position.set(x,HT(x,z),z);const pm=M(0x4a2e16);const po=new fe(GE.cyl,pm);po.scale.set(.2,4.9,.2);po.position.y=2.45;g.add(po);[[1,fr],[-1,bk]].forEach(([sd,tx2])=>{const mm=new fe(new qd(4.6,1.72),new zt({map:tex(tx2[0],tx2[1]),roughness:.9,metalness:0}));mm.position.set(nx*sd*.3,3.7,nz*sd*.3);mm.rotation.y=yaw+(sd<0?Math.PI:0);g.add(mm)});const cap=new fe(GE.box,pm);cap.scale.set(.7,.2,.7);cap.position.y=4.95;cap.rotation.y=yaw+Math.PI/2;g.add(cap);{const NG=DBA_NGI(),lm=new fe(GE.sph,NG.lamp);lm.scale.set(.5,.65,.5);lm.position.set(0,5.4,0);g.add(lm);const hl=new fe(GE.sph,NG.halo);hl.scale.set(1.5,1.7,1.5);hl.position.set(0,5.4,0);g.add(hl);const pl=new fe(NG.pg,NG.glow);pl.rotation.x=-P/2;pl.position.set(0,.6,0);pl.scale.set(11,11,1);g.add(pl)}g.scale.setScalar(1.25);mk(g,x,z,200)};
   const walk=(pts,fromEnd,d)=>{const n=pts.length,a=fromEnd?n-1:0,st=fromEnd?-1:1,e=pts[a];for(let i=a;i>=0&&i<n;i+=st)if(hyp(pts[i][0]-e[0],pts[i][1]-e[1])>=d){const q=pts[Math.min(n-1,Math.max(0,i+st))],r=pts[Math.max(0,Math.min(n-1,i-st))];return{p:pts[i],tx:(q[0]-r[0])*st,tz:(q[1]-r[1])*st}}return null};
   const place=(w,hit,n,fr,bk)=>{if(!hit)return;let tx=-n[0],tz=-n[1];const l=hyp(tx,tz)||1;tx/=l;tz/=l;sign(hit.p[0]+(-tz)*(w/2+2.6),hit.p[1]+tx*(w/2+2.6),n[0],n[1],fr,bk)};
   const bn=k=>k>=1&&k<=14?BI[k-1].n:k==0?"Terre di Partenza":"Tana del Boss";
   ROADS.forEach(r=>{if(r.kind!="m"||!r.A)return;const k=r.k,A=r.A,B=r.B,np=r.pts,isFirst=r.i==0,isLast=r.i==r.n-2;
    [[A,0],[B,1]].forEach(([nd,fe2])=>{const hit=walk(np,fe2,nd.v?100:44);if(!hit)return;const c=nd.p;let nx=hit.p[0]-c.x,nz=hit.p[1]-c.z;
     if(nd.v){const isCamp=CAMPS.includes(c);place(r.w,hit,[nx,nz],[k==0?"🏘 Villaggio":(isCamp?"⛺ Campo base":"🏘 Villaggio"),bn(k)],["↩ Strada",bn(k)])}
     else{const entr=(fe2==0&&isFirst);if(entr){place(r.w,hit,[-nx,-nz],[k==15?"🐉 Tana del Boss":"Benvenuti",k==15?"Il drago attende":bn(k)],["🚪 Portale","↩ "+bn(k-1)])}else if(fe2==1&&isLast){place(r.w,hit,[nx,nz],["🚪 Portale","→ "+(k<14?bn(k+1):"Tana del Boss")],["↩ "+bn(k),"Villaggi e campi"])}}})});
   JS.forEach(j=>{const rt=j.sg>0,nx=-j.tx,nz=-j.tz,off=r=>[j.x+(-j.tz)*r,j.z+j.tx*r],pp=off(-(4.5+2.6));sign(pp[0],pp[1],nx,nz,[j.loop?"Variante":"Sentiero",rt?"➜ a destra":"⬅ a sinistra"],[j.loop?"Variante":"Sentiero",rt?"⬅ a sinistra":"➜ a destra"])});
  }
  window.__dbaRoads=ROADS;
 }
 {const ENV=(k)=>{try{return DBA_OM(k)}catch(e){return null}};
 const place=(g,x,z,r)=>{g.scale.setScalar(2);const rr=r?r*2:4;if(!freeAt(x,z,rr))return 0;if(r)addOb(x,z,r*2);mk(g,x,z);return 1};
 const MUSHT=(()=>{const c=document.createElement("canvas");c.width=c.height=512;const x=c.getContext("2d");x.fillStyle="#c0392b";x.fillRect(0,0,512,512);const t=new Og(c);t.wrapS=t.wrapT=1002;const src=window.__DBA_NT&&window.__DBA_NT.m;if(src){const im=new Image();im.onload=()=>{x.drawImage(im,0,0,512,512);t.needsUpdate=!0};im.src=src}return t})(),
  MUSHM=[0xffffff,0xffc27a,0xe8b8c8].map(c=>new zt({map:MUSHT,color:c,roughness:.55,metalness:0,side:_n})),MCAP=new Tt(1,18,10,0,6.2832,0,1.75),MGIL=(()=>{return new Na(1,18)})(),MGM=new zt({color:0xe8d8b8,roughness:.9,side:_n});
  {const p=MCAP.attributes.position,u=MCAP.attributes.uv;for(let i=0;i<p.count;i++)u.setXY(i,p.getX(i)*.5+.5,p.getZ(i)*.5+.5)}
  const dsk=(R2,x,z)=>{const h0=HT(x,z),PP=[0,.16,0],UU=[.5,.5],II=[];for(let rg=1;rg<=3;rg++)for(let sg=0;sg<16;sg++){const a=sg/16*6.2832,px=Math.cos(a)*R2*rg/3,pz=Math.sin(a)*R2*rg/3;PP.push(px,HT(x+px,z+pz)-h0+.16,pz);UU.push(.5+Math.cos(a)*rg/6,.5+Math.sin(a)*rg/6)}for(let sg=0;sg<16;sg++)II.push(0,1+(sg+1)%16,1+sg);for(let rg=1;rg<3;rg++)for(let sg=0;sg<16;sg++){const i0=1+(rg-1)*16+sg,i1=1+(rg-1)*16+(sg+1)%16,o0=1+rg*16+sg,o1=1+rg*16+(sg+1)%16;II.push(i0,i1,o1,i0,o1,o0)}const dg=new Jn;dg.setAttribute("position",new on(PP,3));dg.setAttribute("uv",new on(UU,2));dg.setIndex(II);dg.computeVertexNormals();return dg};
  const clut=(bi,x,z)=>{const d=BI[bi],c=d.c,g=new zn,s2=rnd(.8,1.4),v=rs();g.position.set(x,HT(x,z),z);
  const Q=(geo,col,sx,sy,sz,px,py,pz,ex)=>{const m=new fe(geo,typeof col=="number"?M(col,ex):typeof col=="string"?(ENV(col)||M(0x888888)):col);m.scale.set(sx,sy,sz);m.position.set(px,py,pz);g.add(m);return m};let r=0;const LV=bi==7?"magma":"lava",PK=bi==11?"pdor":"pspe";
  switch(d.sh){
  case"volcano":if(v<.4){Q(GE.sph,LV,3*s2,2.2*s2,2.6*s2,0,.9*s2,0);Q(GE.sph,LV,1.2*s2,.5*s2,1.2*s2,.6*s2,2*s2,0);r=2.6*s2}else if(v<.7){Q(dsk((3+v*7)*s2,x,z),LV,1,1,1,0,0,0);g.userData.gd=1;r=0}else{for(let n=0;n<3;n++)Q(GE.cone,LV,.9*s2,(2.5+n)*s2,.9*s2,(n-1)*1.4*s2,(1.4+n*.5)*s2,(n%2)*1.1*s2);r=2.4*s2}break;
  case"glacier":if(v<.5){Q(GE.sph,"ice",4*s2,1.5*s2,3.4*s2,0,.5*s2,0);r=3*s2}else{for(let n=0;n<4;n++)Q(GE.cone,"ice",.8*s2,(2.5+n*1.2)*s2,.8*s2,(n-1.5)*1.1*s2,(1.3+n*.6)*s2,(n%2)*.9*s2);r=2.6*s2}break;
  case"tree":if(v<.55){const cpi=rs()*3|0;for(let n=0;n<3;n++){const ox=(n-1)*2.2*s2,sc=1-n*.18,tz=(n%2)*1.2;Q(GE.cyl,0xf1e6c8,.5*s2*sc,2*s2*sc,.5*s2*sc,ox,1*s2*sc,tz);const cap=Q(MCAP,MUSHM[cpi],1.9*s2*sc,1.05*s2*sc,1.9*s2*sc,ox,1.9*s2*sc,tz);cap.rotation.y=n*1.7;const gl=Q(MGIL,MGM,1.78*s2*sc,1,1.78*s2*sc,ox,1.9*s2*sc,tz);gl.rotation.x=Math.PI/2}r=3*s2}else{const m=Q(GE.cyl,ENV("bark")||0x5c3a1a,.9*s2,7*s2,.9*s2,0,.8*s2,0);m.rotation.z=Math.PI/2;m.rotation.y=rnd(0,3);r=3.5*s2}break;
  case"spike":if(bi==3){if(v<.6){Q(GE.box,"pspe",1.7*s2,3*s2,.6*s2,0,1.5*s2,0);Q(GE.sph,"pspe",.9*s2,.9*s2,.3*s2,0,3*s2,0);r=1.4*s2}else{Q(GE.sph,0xc4b5fd,.7*s2,.7*s2,.7*s2,0,(3+v*3)*s2,0,{emissive:0x8b5cf6,emissiveIntensity:1.4,transparent:!0,opacity:.8});Q(GE.cone,"rune",.7*s2,3*s2,.7*s2,0,1.5*s2,0);r=1*s2}}else{const cc2=[0xf472b6,0x22d3ee,0xfbbf24,0xa78bfa][rs()*4|0];for(let n=0;n<4;n++)Q(GE.cone,"abi",.7*s2,(2+n*.8)*s2,.7*s2,(n-1.5)*1*s2,(1+n*.4)*s2,(n%2)*.8*s2);r=2.4*s2}break;
  case"pylon":if(v<.6){Q(GE.box,"caos",1.6*s2,.8*s2,1.6*s2,0,.4*s2,0);Q(GE.cyl,0x9ca3af,.35*s2,5*s2,.35*s2,0,3*s2,0);Q(GE.sph,0x60a5fa,.9*s2,.9*s2,.9*s2,0,5.8*s2,0,{emissive:0x60a5fa,emissiveIntensity:1.5});r=1.6*s2}else{for(let n=0;n<3;n++)Q(GE.box,"caos",(1+n*.4)*s2,(.6+n*.2)*s2,(1.4-n*.2)*s2,(n-1)*1.5*s2,(.3+n*.3)*s2,(n%2)*1.2*s2);r=2.4*s2}break;
  case"crystal":if(bi==5){if(v<.5){{Q(dsk((4+v*6)*s2,x,z),"red2",1,1,1,0,0,0);g.userData.gd=1;r=0}}else{for(let n=0;n<4;n++)Q(GE.cone,"red",.55*s2,(3+n)*s2,.55*s2,(n-1.5)*.9*s2,(1.5+n*.5)*s2,(n%2)*.7*s2);r=2.4*s2}}else{const cc2=[0xc4b5fd,0x7ab8ff,0xf0abfc][rs()*3|0];for(let n=0;n<5;n++)Q(GE.cone,"cris",.8*s2,(2+n*.9)*s2,.8*s2,(n-2)*.9*s2,(1+n*.45)*s2,(n%2)*.9*s2);r=2.8*s2}break;
  case"dune":if(v<.55){Q(GE.cyl,0x3a7a3a,.55*s2,4.5*s2,.55*s2,0,2.2*s2,0);const a1=Q(GE.cyl,0x3a7a3a,.4*s2,1.8*s2,.4*s2,1.1*s2,3*s2,0);const a2=Q(GE.cyl,0x3a7a3a,.4*s2,1.5*s2,.4*s2,-1.1*s2,2.6*s2,0);r=1.4*s2}else if(v>.85){Q(GE.sph,"duna",3*s2,1.4*s2,2.6*s2,0,.6*s2,0);r=2.6*s2}else{Q(GE.sph,0xe8dcc0,1.1*s2,.9*s2,1.2*s2,0,.5*s2,0);Q(GE.sph,0x2a2a2a,.3*s2,.3*s2,.2*s2,-.35*s2,.65*s2,.8*s2);Q(GE.sph,0x2a2a2a,.3*s2,.3*s2,.2*s2,.35*s2,.65*s2,.8*s2);r=1.2*s2}break;
  case"pillar":if(v<.6){Q(GE.cyl,PK,1.3*s2,(2+v*5)*s2,1.3*s2,0,1.2*s2,0);Q(GE.cyl,PK,1.8*s2,.4*s2,1.8*s2,0,.2*s2,0);r=1.8*s2}else{Q(GE.sph,c[1],.8*s2,.8*s2,.8*s2,0,(3+v*2)*s2,0,{emissive:c[1],emissiveIntensity:1.5,transparent:!0,opacity:.85});Q(GE.cyl,PK,.9*s2,.4*s2,.9*s2,0,.2*s2,0);r=1*s2}break;
  case"bone":if(v<.45){for(let n=-2;n<=2;n++){const m=Q(GE.box,"oss",.5*s2,(4-Math.abs(n)*.7)*s2,.5*s2,n*1.2*s2,(2-Math.abs(n)*.2)*s2,0);m.rotation.z=n*.18}r=3*s2}else if(v<.8){Q(GE.sph,"oss",1.5*s2,1.2*s2,1.6*s2,0,1.1*s2,0);Q(GE.sph,0x1a1a1a,.4*s2,.4*s2,.3*s2,-.5*s2,1.3*s2,1.3*s2);Q(GE.sph,0x1a1a1a,.4*s2,.4*s2,.3*s2,.5*s2,1.3*s2,1.3*s2);r=1.6*s2}else{const m=Q(GE.box,"oss",.5*s2,6*s2,.5*s2,0,.5*s2,0);m.rotation.z=1.45;m.rotation.y=rnd(0,3);r=2.6*s2}break;
  default:{const col=[0xff3366,0x33ddff,0xffdd33,0x9966ff][rs()*4|0];for(let n=0;n<3;n++){const m=Q(GE.box,n%2?"caos":"caos2",(1+n*.5)*s2,(1+n*.5)*s2,(1+n*.5)*s2,(n-1)*2*s2,(2+n*1.3)*s2,(n%2)*1.5*s2);m.rotation.set(n,n*.7,n*1.3)}r=2.2*s2}}
  g.userData.sw=(d.sh=="tree"&&v>=.55)?1:0;return place(g,x,z,r)};
 const bush=(x,z)=>{const g=new zn,s2=rnd(.8,1.5),lm=ENV("leaf")||M(0x2f7a3a);for(let n=0;n<3;n++){const m=new fe(GE.sph,lm);m.scale.set((2.2+n*.2)*s2,1.7*s2,(2.2+n*.2)*s2);m.position.set((n-1)*1.4*s2,.8*s2,(n%2)*1.2*s2);g.add(m)}g.position.set(x,HT(x,z),z);g.userData.sw=1.4;return place(g,x,z,2.8*s2)};
 const stump=(x,z)=>{const g=new zn,s2=rnd(.8,1.5),bm=ENV("bark")||M(0x5c3a1a),m=new fe(GE.cyl,bm);m.scale.set(1.2*s2,1.5*s2,1.2*s2);m.position.y=.75*s2;g.add(m);const t=new fe(GE.cyl,M(0xc9a36a));t.scale.set(1.05*s2,.05,1.05*s2);t.position.y=1.52*s2;g.add(t);g.position.set(x,HT(x,z),z);return place(g,x,z,1.3*s2)};
 const rock=(x,z)=>{const g=new zn,s2=rnd(.8,1.5),m=new fe(GE.sph,DBA_HW());m.scale.set(3*s2,1.8*s2,2.4*s2);m.position.y=.7*s2;g.add(m);g.rotation.y=rnd(0,6.28);g.position.set(x,HT(x,z),z);return place(g,x,z,2.4*s2)};
 {const GRM=new zt({vertexColors:!0,side:_n,roughness:1,metalness:0}),gpr=mb((cfg.seed||1)*31+7),mkT=cl=>{const base=new Rt(cl),tip=base.clone().multiplyScalar(1.3),root=base.clone().multiplyScalar(.45),pos=[],col=[],n=30+(gpr()*14|0);for(let i=0;i<n;i++){const a=gpr()*6.283,r=Math.sqrt(gpr())*3.4,bx=Math.cos(a)*r,bz=Math.sin(a)*r,h=.55+gpr()*.8,w=.1+gpr()*.07,ang=gpr()*3.14,lean=(gpr()-.5)*.6,cx=Math.cos(ang),cz=Math.sin(ang);pos.push(bx-cx*w,0,bz-cz*w,bx+cx*w,0,bz+cz*w,bx+Math.cos(a)*lean,h,bz+Math.sin(a)*lean);col.push(root.r,root.g,root.b,root.r,root.g,root.b,tip.r,tip.g,tip.b)}const ge=new Jn();ge.setAttribute("position",new on(pos,3));ge.setAttribute("color",new on(col,3));ge.computeVertexNormals();return ge};
  const GL=[[0,0x5aa03a,900]];BI.forEach((d,i)=>{if(d.sh=="tree")GL.push([i+1,d.c[1],1400]);else if(d.sh=="dune")GL.push([i+1,0xb59a55,350])});
  GL.forEach(([k,cl,N])=>{const tp=[0,1,2,3,4,5].map(()=>mkT(cl)),c0=cc(k);let m=0;for(let t2=0;t2<N*3&&m<N;t2++){const x=c0.x+(gpr()*2-1)*(CS/2-60),z=c0.z+(gpr()*2-1)*(CS/2-60);if(CAMPS.some(q=>Math.hypot(x-q.x,z-q.z)<70)||nearGate(x,z,30)||PONDS.some(q=>Math.hypot(x-q.x,z-q.z)<q.r*1.15+3)||!freeAt(x,z,1.5))continue;const g=new zn,f=new fe(tp[m%6],GRM);f.rotation.y=gpr()*6.28;g.add(f);g.position.set(x,HT(x,z),z);g.scale.setScalar(2);g.userData.sw=2.2;mk(g,x,z,140);m++}})}
  for(let k=0;k<=14;k++){const c0=cc(k),want=k==0?420:90;let n=0;for(let t2=0;t2<want*3&&n<want;t2++){const x=c0.x+rnd(-CS/2+60,CS/2-60),z=c0.z+rnd(-CS/2+60,CS/2-60);if(CAMPS.some(q=>Math.hypot(x-q.x,z-q.z)<125)||nearGate(x,z,55)||(k==15))continue;let ok;if(k==0){const w=rs();ok=w<.4?bush(x,z):w<.7?stump(x,z):rock(x,z)}else ok=rs()<.12?rock(x,z):clut(k-1,x,z);if(ok)n++}}}
 // ---- tesori, fonti, monoliti, risorse, cripte (caverne 3D), santuari
 const NT=(()=>{const mk=(key,fb)=>{const c=document.createElement("canvas");c.width=c.height=512;const x=c.getContext("2d");x.fillStyle=fb;x.fillRect(0,0,512,512);const t=new Og(c);t.wrapS=t.wrapT=1002;const src=window.__DBA_NT&&window.__DBA_NT[key];if(src){const im=new Image();im.onload=()=>{x.drawImage(im,0,0,512,512);t.needsUpdate=!0};im.src=src}return t};return{h:mk("h","#2f6a2a"),o:mk("o","#4a525c")}})();
  const gm=parts=>{const P=[],U=[];parts.forEach(g=>{const ps=g.attributes.position,uv=g.attributes.uv,ix=g.index,n=ix?ix.count:ps.count;for(let i=0;i<n;i++){const j=ix?ix.getX(i):i;P.push(ps.getX(j),ps.getY(j),ps.getZ(j));U.push(uv?uv.getX(j):0,uv?uv.getY(j):0)}g.dispose()});const G=new Jn;G.setAttribute("position",new on(P,3));G.setAttribute("uv",new on(U,2));G.computeVertexNormals();return G};
  const leafG=(w,h,bend,tilt,az,ox,oz)=>{const g=new qd(w,h,2,7),p=g.attributes.position;for(let i=0;i<p.count;i++){const y=Math.min(1,Math.max(0,p.getY(i)/h+.5)),x=p.getX(i),wd=Math.pow(Math.sin(Math.PI*Math.min(.97,y*.93+.035)),.75);p.setX(i,x*wd);p.setZ(i,Math.pow(y,1.8)*bend-Math.abs(x)*wd*.28);p.setY(i,y*h)}const uv=g.attributes.uv,u0=Math.random()*.55,v0=Math.random()*.55,sc=.3+Math.random()*.12;for(let i=0;i<uv.count;i++)uv.setXY(i,u0+uv.getX(i)*sc,v0+uv.getY(i)*sc);g.rotateX(tilt);g.rotateY(az);g.translate(ox,.02,oz);return g};
  const herbV=()=>{const L=[],F=[],n=9+(Math.random()*4|0);for(let i=0;i<n;i++){const a=i*6.283/n+Math.random()*.4,tl=.25+Math.random()*.55,r=.05+Math.random()*.1;L.push(leafG(.5+Math.random()*.3,.95+Math.random()*.6,.25+Math.random()*.4,tl,a,Math.sin(a)*r,Math.cos(a)*r))}for(let i=0;i<4;i++){L.push(leafG(.34,.8+Math.random()*.35,.1,.08+Math.random()*.15,Math.random()*6.28,0,0))}
   const mound=new Tt(.62,9,5);mound.scale(1,.28,1);L.push(mound);for(let i=0;i<3;i++){const a=Math.random()*6.283,r=.15+Math.random()*.3,h=.9+Math.random()*.5,st=new Fn(.018,.03,h,5);st.translate(0,h/2,0);st.rotateZ(.12);st.rotateY(a);L.push(st);const fl=new Tt(.075+Math.random()*.03,6,5);{const tx=-Math.sin(.12)*h;fl.translate(tx*Math.cos(a),h*Math.cos(.12),-tx*Math.sin(a))}F.push(fl)}return{L:gm(L),F:gm(F)}};
  const rockG=(r,sx,sy,sz,ox,oy,oz)=>{const g=new Tt(r,8,6),p=g.attributes.position;for(let i=0;i<p.count;i++){const k=.78+Math.random()*.4;p.setXYZ(i,p.getX(i)*k*sx,p.getY(i)*k*sy,p.getZ(i)*k*sz)}g.translate(ox,oy,oz);return g};
  const crysG=(r,h,tilt,az,ox,oz)=>{const body=new Fn(r*.78,r,h,6,1),tip=new Gt(r*.78,h*.34,6);body.translate(0,h/2,0);tip.translate(0,h+h*.17,0);const parts=[body,tip],G=gm(parts);G.rotateZ(tilt);G.rotateY(az);G.translate(ox,.05,oz);return G};
  const minV=()=>{const R=[rockG(.7,1.2,.55,1,0,.1,0)],C=[];for(let i=0;i<2+(Math.random()*2|0);i++)R.push(rockG(.28+Math.random()*.22,1,.7,1,Math.cos(i*2.4)*.8,.05,Math.sin(i*2.4)*.8));C.push(crysG(.2+Math.random()*.08,1.5+Math.random()*.6,(Math.random()-.5)*.25,Math.random()*6.28,0,0));const n=4+(Math.random()*3|0);for(let i=0;i<n;i++){const a=i*6.283/n+Math.random()*.5,d=.3+Math.random()*.35;C.push(crysG(.1+Math.random()*.1,.55+Math.random()*.8,.25+Math.random()*.45,a,Math.sin(a)*d,Math.cos(a)*d))}return{L:gm(R),F:gm(C)}};
  const HV=Array.from({length:4},herbV),MV=Array.from({length:4},minV),HMt=new zt({map:NT.h,color:0xffffff,roughness:.88,metalness:0,side:_n}),RMt=new zt({map:NT.o,color:0x9a9fa8,roughness:.95,metalness:.05}),mcache={};
  const cmat=(k,t,c)=>{const key=t+c;return mcache[key]||(mcache[key]=t=="h"?new zt({color:new Rt(c).lerp(new Rt(0xffffff),.3),emissive:new Rt(c),emissiveIntensity:.35,roughness:.5}):new zt({map:NT.o,color:new Rt(c).lerp(new Rt(0xdff0ff),.72),emissive:new Rt(c),emissiveIntensity:.22,roughness:.38,metalness:.2}))};
  const NG=(()=>{const c=document.createElement("canvas");c.width=c.height=64;const x=c.getContext("2d"),r=x.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(255,255,255,.9)");r.addColorStop(1,"rgba(255,255,255,0)");x.fillStyle=r;x.fillRect(0,0,64,64);return new Og(c)})(),NGM={h:new Ku({map:NG,color:0xb6ff6a,transparent:!0,opacity:.5,depthWrite:!1,blending:2}),o:new Ku({map:NG,color:0x7fd8ff,transparent:!0,opacity:.55,depthWrite:!1,blending:2})};
  const nodeModel=(g,t,k)=>{const v=(t=="h"?HV:MV)[Math.random()*4|0],acc=BI[k-1]?BI[k-1].c[1]:0x66ff88,a=new fe(v.L,t=="h"?HMt:RMt),b=new fe(v.F,cmat(k,t,acc)),q=new zn;q.add(a,b);q.rotation.y=Math.random()*6.28;q.scale.setScalar((.85+Math.random()*.4)*1.35);g.add(q);const gl=new Lf(NGM[t]);gl.position.y=1.7;gl.scale.set(2.2,2.2,1);g.add(gl)};
  const chests=[],springs=[],pois=[],nodes=[],crypts=[],shrines=[];
 const cave=(k)=>{const p=pos(k,52),c=cc(k),rot=Math.atan2(c.x-p.x,c.z-p.z),g=new zn;g.position.set(p.x,HT(p.x,p.z),p.z);g.rotation.y=rot;g.scale.setScalar(2);S.add(g);const rk=DBA_HW(),dk=M(0x07070b);
  add(new fe(GE.sph,rk),0,0,0,g).scale.set(11,8,9);[[-9,2],[9,3],[-5,-8],[6,-7],[0,-9]].forEach(([a,b])=>add(new fe(GE.sph,rk),a,0,b,g).scale.set(3.4,2.8,3.2));
  add(new fe(GE.box,dk),0,2.4,7,g).scale.set(5,5,2.6);const pcol=BI[k-1].c[1],glow=new zt({color:pcol,emissive:pcol,emissiveIntensity:1});add(new fe(new Ci(3.1,.4,10,28),glow),0,2.9,8.4,g);
  [-1.8,0,1.8].forEach(a=>{const m=add(new fe(GE.cone,rk),a,5.6,8.2,g);m.scale.set(.4,1.4,.4);m.rotation.x=P});
  const pnl=new zt({color:pcol,emissive:pcol,emissiveIntensity:.8,transparent:!0,opacity:.55});add(new fe(GE.box,pnl),0,2.4,8.5,g).scale.set(4.6,4.8,.15);
  [[0,0,7.5],[-6,.5,5],[6,.5,5],[-9,2,3],[9,3,3],[-5,-8,3],[6,-7,3],[0,-9,3]].forEach(([a,b,r])=>addOb(p.x+(a*Math.cos(rot)+b*Math.sin(rot))*2,p.z+(-a*Math.sin(rot)+b*Math.cos(rot))*2,r*2));props.push({o:g,x:p.x,z:p.z,r:230});return{x:p.x+Math.sin(rot)*28,z:p.z+Math.cos(rot)*28,b:k-1,on:!0,glow,pnl,pcol}};
 for(let k=1;k<=14;k++){const bi=k-1;
  for(let i=0;i<10;i++){const p=pos(k,6),g=new zn;g.position.set(p.x,HT(p.x,p.z),p.z);g.scale.setScalar(2);S.add(g);add(new fe(GE.box,M(0x8b5a2b)),0,.45,0,g).scale.set(1.6,.9,1.1);add(new fe(GE.box,M(0xf5b50b,{metalness:.8})),0,.95,0,g).scale.set(1.7,.2,1.2);add(new fe(GE.sph,new ln({color:0xfde68a})),0,2.2,0,g).scale.set(.35,.35,.35);chests.push({g,x:p.x,z:p.z,on:!0,b:bi});props.push({o:g,x:p.x,z:p.z,r:200})}
  {const p=pos(k,10),g=new zn;g.position.set(p.x,HT(p.x,p.z),p.z);g.scale.setScalar(2);S.add(g);add(new fe(GE.cyl,M(0x3b82f6,{emissive:0x2563eb,emissiveIntensity:.8})),0,.15,0,g).scale.set(3.2,.3,3.2);add(new fe(GE.cyl,new ln({color:0x93c5fd,transparent:!0,opacity:.35})),0,2.5,0,g).scale.set(.6,5,.6);springs.push({x:p.x,z:p.z,cd:0,b:bi});props.push({o:g,x:p.x,z:p.z,r:200})}
  {const p=pos(k,12),g=new zn;g.position.set(p.x,HT(p.x,p.z),p.z);g.scale.setScalar(2);S.add(g);add(new fe(GE.box,M(0x6b7280,{emissive:0x8b5cf6,emissiveIntensity:.6})),0,5,0,g).scale.set(2.4,10,2.4);add(new fe(new Ps(4,4.6,32),new ln({color:0xa78bfa,side:_n})),0,.2,0,g).rotation.x=-P/2;{const q={x:p.x,z:p.z,b:bi,on:!0,g};pois.push(q);addOb(p.x,p.z,3.6,q)}props.push({o:g,x:p.x,z:p.z,r:240})}
  {const p=pos(k,8),g=new zn;g.position.set(p.x,HT(p.x,p.z),p.z);g.scale.setScalar(2);S.add(g);add(new fe(GE.cyl,M(0x9aa0b0,{emissive:0x22d3ee,emissiveIntensity:.5})),0,2,0,g).scale.set(.9,4,.9);add(new fe(new Ps(2.2,2.8,24),new ln({color:0x22d3ee,side:_n})),0,.2,0,g).rotation.x=-P/2;add(new fe(GE.sph,new ln({color:0x67e8f9})),0,4.6,0,g).scale.set(.6,.6,.6);addOb(p.x,p.z,1.8);props.push({o:g,x:p.x,z:p.z,r:200});shrines.push({x:p.x,z:p.z,b:bi,cd:0})}
  for(let i=0;i<16;i++){const p=pos(k,4),t=i<10?"h":"o",g=new zn;g.position.set(p.x,HT(p.x,p.z),p.z);g.scale.setScalar(2);S.add(g);nodeModel(g,t,k);nodes.push({g,x:p.x,z:p.z,t,on:!0,cd:0,b:bi});props.push({o:g,x:p.x,z:p.z,r:150})}
  crypts.push(cave(k))}
 // ---- nemici, avamposti, guardiani
 const ents=[],mkEnt=(bi,m,x,z,ex)=>{const e=Object.assign({bi,k:bi+1,m,home:{x,z},tx:x,tz:z,t:rnd(1,4),alive:!0,ret:0,built:!1,bo:cfg.mkBoss(ex&&ex.tpl!=null?$v[ex.tpl]:BI[bi].t,m,bi),g:new zn},ex||{});e.g.position.set(x,HT(x,z),z);e.g.visible=!1;S.add(e.g);ents.push(e);return e};
 for(let bi=0;bi<14;bi++)for(let i=0;i<16;i++){const p=pos(bi+1,6),e=mkEnt(bi,i>=12,p.x,p.z);if(!e.m&&i%4==1&&window.DBA_NMD){const vs=DBA_NMD.filter(d=>d.bi===bi);if(vs.length){const d=vs[((i>>2)+(bi&1))%vs.length];e.nmv=d.id;e.bo.nm=d.id;e.bo.nmS=d.sig;e.bo.name=d.n;e.sc=1}}else if(!e.m&&(i==3||i==11)){const af=["heal","summon","rage"][(bi+i)%3],cl={heal:0x40ff80,summon:0xc080ff,rage:0xff5030}[af];e.elite=af;e.bo.name="Campione · "+e.bo.name;const rg=new fe(new Ps(2.4,3.1,32),new ln({color:cl,side:_n,transparent:!0,opacity:.6,depthWrite:!1}));rg.rotation.x=-P/2;rg.position.y=.4;e.g.add(rg);e.ring=rg}}
 window.__dbaEnts=ents;const OUT=[];for(let bi=0;bi<14;bi++){const c=pos(bi+1,24),g=new zn;g.position.set(c.x,HT(c.x,c.z),c.z);g.scale.setScalar(2);S.add(g);add(new fe(GE.cyl,M(0x6b4a2a)),0,5,0,g).scale.set(.4,10,.4);const fm=new zt({color:0xdd3322,side:_n,emissive:0x661100});add(new fe(GE.box,fm),2,9,0,g).scale.set(4,2.4,.2);add(new fe(GE.cyl,M(0x333333)),0,.1,0,g).scale.set(9,.2,9);addOb(c.x,c.z,1.2);props.push({o:g,x:c.x,z:c.z,r:240});OUT.push({x:c.x,z:c.z,b:bi,fm,done:0});for(let i=0;i<3;i++)mkEnt(bi,!1,c.x+rnd(-18,18),c.z+rnd(-18,18),{op:bi})}
 for(let bi=0;bi<14;bi++){const g=GT[bi+1].p,c=cc(bi+1),d=Math.hypot(c.x-g.x,c.z-g.z),e=mkEnt(bi,!0,g.x+(c.x-g.x)/d*70,g.z+(c.z-g.z)/d*70,{guard:1});e.bo.maxHp=Math.round(e.bo.maxHp*1.25);e.bo.hp=e.bo.maxHp;e.bo.attack=Math.round(e.bo.attack*.85);e.bo.name="Guardiano · "+String(e.bo.name).replace("Miniboss · ","");e.sc=1.4}
 const RDPC={},RDP=k=>RDPC[k]||(RDPC[k]=ROADS.filter(r=>r.k===k).flatMap(r=>r.pts));
 for(let bi=0;bi<14;bi++){const p=pos(bi+1,60),e=mkEnt(bi,!0,p.x,p.z,{roam:1,sc:1.5});e.bo.maxHp=Math.round(e.bo.maxHp*1.4);e.bo.hp=e.bo.maxHp;e.bo.attack=Math.round(e.bo.attack*.85);e.bo.name="Vagante · "+String(e.bo.name).replace("Miniboss · ","");{const rg=new fe(new Ps(4,5.2,40),new ln({color:0xff4020,side:_n,transparent:!0,opacity:.55,depthWrite:!1}));rg.rotation.x=-P/2;rg.position.y=.45;e.g.add(rg);e.ring=rg}}
 const hOf=g=>{g.updateMatrixWorld(!0);let lo=1e9,hi=-1e9;g.traverse(o=>{const ge=o.geometry;if(!ge||!o.visible)return;if(!ge.boundingBox)ge.computeBoundingBox();const b=ge.boundingBox,el=o.matrixWorld.elements;for(let i=0;i<8;i++){const x=i&1?b.max.x:b.min.x,y=i&2?b.max.y:b.min.y,z=i&4?b.max.z:b.min.z,wy=el[1]*x+el[5]*y+el[9]*z+el[13];if(wy<lo)lo=wy;if(wy>hi)hi=wy}});return hi>lo?hi-lo:0};
 const refH=()=>{if(refC)return refC;let s2=0,n2=0;hs.forEach(a=>{if(!a.dead){const h=hOf(a.g);if(h>0){s2+=h;n2++}}});return n2?(refC=s2/n2):3.9};
 const build=e=>{const mg=new zn;try{e.bm=DBA_BM(e.bo,mg)}catch(x){add(new fe(new Gt(1,3,6),M(0xcc3322)),0,1.5,0,mg)}e.g.add(mg);e.mg=mg;e.built=!0;const mult=e.roam?5:e.guard?4:e.rare?3:e.m?3:2;let sc=1;try{const h1=hOf(mg);if(h1>.05)sc=Math.max(.3,Math.min(10,refH()*mult/h1))}catch(x){sc=e.sc||(e.m?.9:.55)}mg.scale.setScalar(sc);const hh=refH()*mult;e.rad=Math.max(1.2,hh*.3);e.hit=Math.max(e.m?5.4:4.2,e.rad+3.4);const q2=mkSh(e.rad*1.35);q2.position.y=.14;e.g.add(q2);e.sh=q2};
 const BP=cc(15),bg=new zn;bg.position.set(BP.x,HT(BP.x,BP.z),BP.z);S.add(bg);const bmg=new zn;bg.add(bmg);try{DBA_BM(cfg.boss,bmg)}catch(e){}bmg.scale.setScalar(1.6);
 add(new fe(new Ps(14,15,48),new ln({color:0xff3030,side:_n})),0,.2,0,bg).rotation.x=-P/2;add(new fe(GE.cyl,new ln({color:0xff4040,transparent:!0,opacity:.35})),0,40,0,bg).scale.set(.6,80,.6);
 let px=CAMPS[0].x,pz=CAMPS[0].z+16,hd=P,cy=P,hs=[],paused=!1,mvg=0,sprint=!1,stam=100,mount=0,disc=Array(15).fill(0),curK=0,tod=.3,day=0,dl=1,obj=null;disc[0]=1;let lastRot=0,jv=0,jh=0;const keys={},joy={x:0,y:0},camJoy={x:0,y:0},PRV={third:.3,wide:.55,top:1.4,first:.55};let view=PRV[cfg.view]?cfg.view:"third",pr=PRV[view],td=(()=>{try{const v=parseFloat(localStorage.getItem("dba_ow_dist3"));return v>=3&&v<=30?v:18}catch(e){return 18}})();
 const cD=new Rt(7316188),cN=new Rt(0x070b1f),cc2=new Rt(0);rnd=(a,b)=>a+Math.random()*(b-a);
 const SHT=(()=>{const c=document.createElement("canvas");c.width=c.height=64;const x=c.getContext("2d"),r=x.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(0,0,0,.75)");r.addColorStop(.55,"rgba(0,0,0,.4)");r.addColorStop(1,"rgba(0,0,0,0)");x.fillStyle=r;x.fillRect(0,0,64,64);return new Og(c)})(),SHG=new Na(1,20),SHM=new ln({map:SHT,transparent:!0,depthWrite:!1}),mkSh=r=>{const m=new fe(SHG,SHM);m.rotation.x=-P/2;m.scale.setScalar(r);m.renderOrder=1;return m};
 window.__dbaWAPI={S,HT,anim:(a,m)=>animH(a,m),susp:()=>suspendR(),res:()=>resumeR(),build:p=>WOW_build(WOWTT(),p,!1),get me(){return{x:px,z:pz,h:hd,m:mvg,j:jh}}};let refC=0;const mkParty=pl=>{refC=0;hs.forEach(a=>{S.remove(a.g);a.sh&&S.remove(a.sh)});hs=pl.map((p,i)=>{const g=WOW_build(WOWTT(),p,!1);g.scale.set(1.95,((p.appearance&&p.appearance.heightMul)||1)*1.95,1.95);const dd=p.alive===!1;if(dd)g.rotation.x=-P/2;g.position.set(px,HT(px,pz)+(dd?.4:0),pz);S.add(g);const sh=mkSh(1.1);sh.position.set(px,HT(px,pz)+.12,pz);S.add(sh);return{g,i,dead:dd,id:p.id,ud:g.userData,sh}})};const ctlLead=()=>{const C=window.__dbaCtl;if(C&&C.on){const a=hs.find(a=>!a.dead&&a.id===C.id);if(a)return a}return hs.find(a=>!a.dead)||hs[0]};
 mkParty(cfg.party);
 const mnts=[null],RH=[0,2.25,2.25,2.7,1.8,2.6],MSPD=[1,1.6,2,2.5,1.8,2.3];
 {const mk=(c,o)=>new zt(Object.assign({color:c,roughness:.8},o||{})),bx=(g,m,x,y,z,sx,sy,sz,rx)=>{const q=add(new fe(GE.box,m),x,y,z,g);q.scale.set(sx,sy,sz);if(rx)q.rotation.x=rx;return q},cn=(g,m,x,y,z,r,h,rx)=>{const q=add(new fe(GE.cone,m),x,y,z,g);q.scale.set(r,h,r);if(rx)q.rotation.x=rx;return q},sp=(g,m,x,y,z,r)=>{const q=add(new fe(GE.sph,m),x,y,z,g);q.scale.setScalar(r);return q};
  const legs=(g,m,pos,len,w)=>pos.map(([x,y,z],i)=>{const pv=new zn;pv.position.set(x,y,z);g.add(pv);const q=new fe(GE.box,m);q.position.y=-len/2;q.scale.set(w,len,w);pv.add(q);pv.userData.ph=i%3==0?0:Math.PI;return pv});
  const fin=(g,lg,wn)=>{g.visible=!1;g.scale.setScalar(1.5);S.add(g);g.userData.anim=(t,mv)=>{lg.forEach(l=>{l.rotation.x=mv?Math.sin(t*14+l.userData.ph)*.6:0});if(wn)wn.forEach((w,i)=>{w.rotation.z=(i?-1:1)*(mv?Math.sin(t*9)*.6:.15+Math.sin(t*2)*.05)})}};
  /* 1 cavallo da guerra */
  {const g=new zn,m=mk(0x8b5a2b),d=mk(0x2b1a0e),w=mk(0xeeeeee);bx(g,m,0,1.35,0,1.2,1.1,2.8);bx(g,m,0,2.1,1.35,.6,1.4,.7,-.5);bx(g,m,0,2.75,1.95,.5,.5,1.1,-.2);bx(g,d,0,2.25,1.1,.15,1.1,.4,-.5);bx(g,w,0,1.6,-.4,1.25,.1,1.6);cn(g,d,0,1.6,-1.6,.25,1.4,2.6);cn(g,m,-.18,3.15,1.7,.12,.35);cn(g,m,.18,3.15,1.7,.12,.35);bx(g,mk(0xaa2222),0,1.95,.1,1.3,.12,1.2);
   const lg=legs(g,m,[[-.45,.95,-1.05],[.45,.95,-1.05],[-.45,.95,1.05],[.45,.95,1.05]],.95,.3);fin(g,lg);mnts[1]=g}
  /* 2 destriero di brace */
  {const g=new zn,m=mk(0x1d0e0a,{emissive:0x551100,emissiveIntensity:.8}),f=mk(0xff6a10,{emissive:0xff4400,emissiveIntensity:1.4,transparent:!0,opacity:.85}),h=mk(0xffcc33,{emissive:0xffaa00,emissiveIntensity:1.5});bx(g,m,0,1.35,0,1.2,1.15,2.8);bx(g,m,0,2.1,1.35,.6,1.4,.7,-.5);bx(g,m,0,2.8,1.95,.5,.5,1.15,-.2);[[0,2.5,1.0],[0,2.9,.7],[0,3.25,.4]].forEach(([x,y,z],i)=>cn(g,f,x,y,z,.34-i*.04,1.1,.3));[[0,1.7,-1.5,.35,1.6,-2.4],[.3,1.6,-1.4,.25,1.2,-2.7],[-.3,1.6,-1.4,.25,1.2,-2.7]].forEach(([x,y,z,r,hh,rx])=>cn(g,f,x,y,z,r,hh,rx));sp(g,h,-.15,3,2.45,.08);sp(g,h,.15,3,2.45,.08);cn(g,h,-.18,3.25,1.7,.12,.45);cn(g,h,.18,3.25,1.7,.12,.45);
   const lg=legs(g,m,[[-.45,.95,-1.05],[.45,.95,-1.05],[-.45,.95,1.05],[.45,.95,1.05]],.95,.3);lg.forEach(l=>{bx(l,h,0,-.95,0,.34,.14,.34)});const base=g.userData;fin(g,lg);const an=g.userData.anim;g.userData.anim=(t,mv)=>{an(t,mv);f.emissiveIntensity=1.2+Math.sin(t*12)*.4};mnts[2]=g}
  /* 3 wyvern d'ossa */
  {const g=new zn,m=mk(0xd8d2b8,{roughness:.9}),d=mk(0x7a735c),e=mk(0x66ffcc,{emissive:0x22ffaa,emissiveIntensity:1.5});bx(g,m,0,1.5,0,.9,.8,2.6);bx(g,m,0,2.2,1.4,.45,1.1,.5,-.6);bx(g,m,0,2.9,2.05,.45,.45,1.0,-.15);cn(g,d,-.2,3.35,1.8,.12,.5);cn(g,d,.2,3.35,1.8,.12,.5);sp(g,e,-.15,3.0,2.5,.07);sp(g,e,.15,3.0,2.5,.07);cn(g,m,0,1.5,-2.2,.3,3.2,-1.5708);[0,1,2,3,4].forEach(i=>bx(g,d,0,1.95,-1+i*.5-.3,.1,.35,.18));
   const wn=[1,-1].map(sd=>{const pv=new zn;pv.position.set(sd*.5,2.0,.3);g.add(pv);const w1=new fe(GE.box,m);w1.position.set(sd*1.4,0,0);w1.scale.set(2.8,.08,1.6);pv.add(w1);const w2=new fe(GE.box,d);w2.position.set(sd*2.9,0,-.2);w2.scale.set(1.2,.06,1.1);pv.add(w2);[0,1,2].forEach(i=>{const bn=new fe(GE.box,d);bn.position.set(sd*(.7+i*.8),.07,-.3);bn.scale.set(.08,.08,1.7);pv.add(bn)});return pv});
   const lg=legs(g,d,[[-.4,1.0,-.6],[.4,1.0,-.6],[-.4,1.0,.8],[.4,1.0,.8]],.7,.22);fin(g,lg,wn);mnts[3]=g}
  /* 4 lupo d'ombra */
  {const g=new zn,m=mk(0x1b1530,{emissive:0x2a1050,emissiveIntensity:.6}),e=mk(0x55eeff,{emissive:0x22ddff,emissiveIntensity:2}),a=mk(0x7a55cc,{emissive:0x5533aa,emissiveIntensity:1,transparent:!0,opacity:.7});bx(g,m,0,1.0,0,1.1,.9,2.6);bx(g,m,0,1.25,1.5,.8,.8,.8);bx(g,m,0,1.1,2.15,.45,.4,.7);cn(g,m,-.3,1.8,1.5,.16,.5);cn(g,m,.3,1.8,1.5,.16,.5);sp(g,e,-.2,1.4,1.9,.07);sp(g,e,.2,1.4,1.9,.07);cn(g,m,0,1.2,-1.6,.3,1.6,2.2);bx(g,a,0,1.65,.3,.9,.1,2.0);[[0,2.0,-1],[0,2.1,0],[0,2.0,1]].forEach(([x,y,z])=>cn(g,a,x,y,z,.2,.7));
   const lg=legs(g,m,[[-.4,.75,-1.0],[.4,.75,-1.0],[-.4,.75,1.0],[.4,.75,1.0]],.75,.26);fin(g,lg);mnts[4]=g}
  /* 5 grifone dorato */
  {const g=new zn,m=mk(0xc89b3c),w=mk(0xf6efe0),y=mk(0xffd24a,{emissive:0xaa7700,emissiveIntensity:.7}),k=mk(0x222222);bx(g,m,0,1.4,0,1.1,1.0,2.7);bx(g,w,0,2.2,1.4,.5,1.0,.55,-.4);sp(g,w,0,2.85,1.85,.5);cn(g,y,0,2.8,2.45,.18,.7,1.5708);sp(g,k,-.22,2.95,2.2,.07);sp(g,k,.22,2.95,2.2,.07);cn(g,w,-.2,3.3,1.75,.12,.4);cn(g,w,.2,3.3,1.75,.12,.4);cn(g,m,0,1.4,-1.6,.3,1.5,2.4);bx(g,y,0,1.95,.1,1.2,.1,1.2);
   const wn=[1,-1].map(sd=>{const pv=new zn;pv.position.set(sd*.5,2.0,.2);g.add(pv);const a=new fe(GE.box,w);a.position.set(sd*1.5,0,0);a.scale.set(3.0,.08,1.8);pv.add(a);const b=new fe(GE.box,y);b.position.set(sd*3.1,0,-.2);b.scale.set(1.3,.06,1.2);pv.add(b);return pv});
   const lg=legs(g,m,[[-.4,.95,-1.0],[.4,.95,-1.0],[-.4,.95,1.0],[.4,.95,1.0]],.9,.28);lg.forEach(l=>{bx(l,y,0,-.95,.1,.3,.1,.45)});fin(g,lg,wn);mnts[5]=g}
 }
 const chkOut=bi=>{const o=OUT[bi];if(o.done)return;if(ents.filter(e=>e.op===bi).every(e=>!e.alive)){o.done=1;o.fm.color.set(0x33dd55);o.fm.emissive.set(0x116622);return 1}};
 if(cfg.save){const sv=cfg.save;tod=sv.tod!=null?sv.tod:.3;day=sv.day||0;if(sv.ver===2){px=sv.pos.x;pz=sv.pos.z;pushOb(px,pz,1.5);px=RX;pz=RZ;ents.forEach((e,i)=>{if(sv.killed[i]&&!(e.roam&&sv.killed[i]>1600)){e.alive=!1;e.ret=sv.killed[i]}});chests.forEach((c,i)=>{if(!sv.chests[i]){c.on=!1;c.g.userData.h=1;c.g.visible=!1}});(sv.pois||[]).forEach((v,i)=>{if(pois[i]&&!v){pois[i].on=!1;pois[i].g.userData.h=1}});(sv.crypts||[]).forEach((v,i)=>{if(crypts[i]&&!v){crypts[i].on=!1;crypts[i].glow.color.set(0x555566);crypts[i].glow.emissive.set(0x222233);crypts[i].pnl.color.set(0x555566);crypts[i].pnl.emissive.set(0x222233)}});nodes.forEach((n,i)=>{if(sv.nodes&&!sv.nodes[i]){n.on=!1;n.cd=60;n.g.userData.h=1}})}if(sv.disc)disc=sv.disc;hs.forEach(a=>a.g.position.set(px,HT(px,pz)+(a.dead?.4:0),pz))}
 OUT.forEach((o,i)=>chkOut(i));
 const kd=e=>{const K=window.DBA_KEYS;if(K&&K.capturing)return;if(e.target&&/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName))return;const ids=K?K.acts(e):[];ids.forEach(id=>{keys[id]=1;if(id==="talk"){if(!e.repeat&&!paused){e.preventDefault();interact()}}else if(id==="jump"){e.preventDefault();if(!paused&&jh===0&&!e.repeat)jv=24}else if(!e.repeat&&!paused&&K.hud(id)){e.preventDefault();K.click(id)}})},ku=e=>{const K=window.DBA_KEYS;(K?K.acts(e):[]).forEach(id=>{keys[id]=0})};addEventListener("keydown",kd);addEventListener("keyup",ku);addEventListener("blur",()=>{for(const k in keys)keys[k]=0});window.__owKeys=keys;
 const mm=document.createElement("canvas");mm.width=mm.height=120;mm.style.cssText="position:absolute;right:10px;top:max(150px,calc(env(safe-area-inset-top) + 150px));width:110px;height:110px;border-radius:12px;border:1px solid rgba(251,191,36,.6);opacity:.92;pointer-events:none";host.appendChild(mm);
 const ql=document.createElement("div");ql.style.cssText="position:absolute;right:10px;top:max(266px,calc(env(safe-area-inset-top) + 266px));width:110px;text-align:center;font:600 11px system-ui,sans-serif;color:#fff;background:rgba(0,0,0,.55);border:1px solid rgba(251,191,36,.5);border-radius:8px;padding:2px 0;pointer-events:none;display:none";host.appendChild(ql);let qlT="";
 const mx=mm.getContext("2d"),RAD=230,sc=60/RAD,cols=PATH.map((p,k)=>{const t=k>=1&&k<=14?BI[k-1].t:BI[k?3:2].t,g=String(t.arena.ground);return g[0]=="#"?g:"#445544"});
 function drawMap(){mx.clearRect(0,0,120,120);const X=x=>60+(x-px)*sc,Z=z=>60+(z-pz)*sc;PATH.forEach((p,k)=>{const c=cc(k);mx.fillStyle=cols[k];mx.fillRect(X(c.x-CS/2),Z(c.z-CS/2),CS*sc+1,CS*sc+1)});mx.globalAlpha=.35;mx.fillStyle="#000";mx.fillRect(0,0,120,120);mx.globalAlpha=1;
  mx.strokeStyle="#ddd";mx.lineWidth=1.2;mx.beginPath();for(let k=0;k<=4;k++){const v=-HW+k*CS;mx.moveTo(X(v),Z(-HW));mx.lineTo(X(v),Z(HW));mx.moveTo(X(-HW),Z(v));mx.lineTo(X(HW),Z(v))}mx.stroke();
  mx.lineCap="round";ROADS.forEach(r=>{mx.strokeStyle=r.kind=="m"?"#e8cf9a":"#b79c6a";mx.lineWidth=r.kind=="m"?1.8:1;mx.beginPath();let on2=!1;for(let i=0;i<r.pts.length;i+=3){const a=X(r.pts[i][0]),b=Z(r.pts[i][1]);if(a<-10||b<-10||a>130||b>130){on2=!1;continue}if(on2)mx.lineTo(a,b);else{mx.moveTo(a,b);on2=!0}}mx.stroke()});GT.forEach(g=>{mx.strokeStyle=g.open?"#30ff80":"#ff3030";mx.lineWidth=4;mx.beginPath();if(g.ln=="x"){mx.moveTo(X(g.p.x),Z(g.p.z-14));mx.lineTo(X(g.p.x),Z(g.p.z+14))}else{mx.moveTo(X(g.p.x-14),Z(g.p.z));mx.lineTo(X(g.p.x+14),Z(g.p.z))}mx.stroke()});
  const dot=(x,z,c,r)=>{const a=X(x),b=Z(z);if(a<0||b<0||a>120||b>120)return;mx.fillStyle=c;mx.beginPath();mx.arc(a,b,r,0,P*2);mx.fill()};
  chests.forEach(c=>c.on&&dot(c.x,c.z,"#fbbf24",2));springs.forEach(s=>dot(s.x,s.z,"#60a5fa",3));pois.forEach(p=>p.on&&dot(p.x,p.z,"#a78bfa",3));ents.forEach(e=>e.alive&&dot(e.g.position.x,e.g.position.z,e.m?"#f97316":"#ef4444",2.2));CAMPS.forEach(c=>dot(c.x,c.z,"#22c55e",4));VIL.forEach(c=>dot(c.x,c.z,"#16a34a",3));{const nw=performance.now();if(nw-(window.__mmT||0)>1000){window.__mmT=nw;npcs.forEach(q=>{if(q.k=="elder")q.ms=cfg.getMark?cfg.getMark(q.b,q.vi):0})}npcs.forEach(q=>{if(q.k!="elder")return;const ms=q.ms|0;if(ms){dot(q.x,q.z,ms==2?"#9bd7ff":"#ffd21f",5.5);dot(q.x,q.z,"#1b1200",2)}})}{let bq=null,bd=1e9;npcs.forEach(q=>{if(q.k!="elder"||!(q.ms|0))return;if(cfg.canGo&&!cfg.canGo(q.b))return;const d=Math.hypot(q.x-px,q.z-pz);if(d<bd){bd=d;bq=q}});let tx="";if(bq&&bd>40){const ms=bq.ms|0,col=ms==2?"#9bd7ff":"#ffd21f";let a=X(bq.x)-60,b2=Z(bq.z)-60;const l=Math.hypot(a,b2);if(l>50){const an=Math.atan2(b2,a);mx.save();mx.translate(60+Math.cos(an)*52,60+Math.sin(an)*52);mx.rotate(an+P/2);mx.fillStyle=col;mx.strokeStyle="#1b1200";mx.lineWidth=1.5;mx.beginPath();mx.moveTo(0,-7);mx.lineTo(6,5);mx.lineTo(0,2);mx.lineTo(-6,5);mx.closePath();mx.fill();mx.stroke();mx.restore()}else{mx.strokeStyle=col;mx.lineWidth=2;mx.beginPath();mx.arc(60+a,60+b2,8+Math.sin(performance.now()/250)*1.5,0,P*2);mx.stroke()}tx=(ms==2?"❓ Consegna ":"❗ Missioni ")+(Math.round(bd/10)*10)+" m"}if(tx!==qlT){qlT=tx;ql.textContent=tx;ql.style.display=tx?"block":"none"}}OUT.forEach(o=>dot(o.x,o.z,o.done?"#34d399":"#fb923c",3.5));crypts.forEach(c=>dot(c.x,c.z,c.on?"#c084fc":"#6b7280",3));shrines.forEach(q=>dot(q.x,q.z,"#22d3ee",2.5));dot(BP.x,BP.z,"#ff2020",5);
  if(obj){let a=X(obj.x)-60,b=Z(obj.z)-60;const l=Math.hypot(a,b);if(l>52){a=a/l*52;b=b/l*52}mx.fillStyle="#facc15";mx.beginPath();mx.arc(60+a,60+b,4,0,P*2);mx.fill()}
  (window.__dbaInd||[]).forEach(t=>{let a=X(t.x)-60,b=Z(t.z)-60;const l=Math.hypot(a,b);if(l>50){a=a/l*50;b=b/l*50}mx.strokeStyle="#fff";mx.fillStyle="rgba(250,204,21,.85)";mx.lineWidth=1.8;mx.beginPath();mx.arc(60+a,60+b,4.5+Math.sin(performance.now()/220)*1.3,0,P*2);mx.fill();mx.stroke()});
  (window.__sqInd||[]).forEach(t=>{let a=X(t.x)-60,b=Z(t.z)-60;const l=Math.hypot(a,b);if(l>50){a=a/l*50;b=b/l*50}const cx=60+a,cy=60+b,r=t.big?6.5:4.5;mx.strokeStyle="#04222a";mx.fillStyle=t.c||"#22d3ee";mx.lineWidth=1.6;mx.beginPath();mx.moveTo(cx,cy-r);mx.lineTo(cx+r,cy);mx.lineTo(cx,cy+r);mx.lineTo(cx-r,cy);mx.closePath();mx.fill();mx.stroke()});
  mx.save();mx.translate(60,60);mx.rotate(-hd+P);mx.fillStyle="#fff";mx.beginPath();mx.moveTo(0,-7);mx.lineTo(4,4);mx.lineTo(-4,4);mx.closePath();mx.fill();mx.restore();mx.fillStyle="#fff";mx.font="13px sans-serif";mx.fillText(dl>.45?"☀":"🌙",3,14)}
 const canGo=(x0,z0,x1,z1,pl)=>{const a=cellOf(x0,z0),b=cellOf(x1,z1);if(a===b)return!0;if(!pl)return!1;const g=GT.find(g=>(g.a===a&&g.b===b)||(g.a===b&&g.b===a));return!!(g&&g.open&&(g.ln=="x"?Math.abs(z1-g.p.z)<14:Math.abs(x1-g.p.x)<14))};
 let id,t0=performance.now(),last=t0,lastM=0,lastV=0,rareE=null,prismE=null,rareDone=!1,nearQ=null;const interact=()=>{if(!nearQ||paused)return;const q=nearQ;paused=!0;nearQ=null;cfg.onNear&&cfg.onNear(null);cfg.onNpc(q.k,q.b,q.vi,q)};const ad=(a,b)=>Math.atan2(Math.sin(a-b),Math.cos(a-b));
 props.forEach(p=>gnd(p.o));try{window.DBA_VILTEX&&DBA_VILTEX(S)}catch(_){}
 const evs=[],EVC={merchant:0xfbbf24,treasure:0x22d3ee};
 const spawnEv=(kind)=>{for(let n=0;n<30;n++){const a=Math.random()*6.28,d=34+Math.random()*22,x=Math.max(-HW+30,Math.min(HW-30,px+Math.cos(a)*d)),z=Math.max(-HW+30,Math.min(HW-30,pz+Math.sin(a)*d));if(cellOf(x,z)!==cellOf(px,pz)||!freeAt(x,z,5)||nearGate(x,z,40)||CAMPS.some(q=>Math.hypot(x-q.x,z-q.z)<90))continue;
  const g=new zn,col=EVC[kind]||0xffffff,gm=new zt({color:col,emissive:col,emissiveIntensity:1.2,transparent:!0,opacity:.55});
  add(new fe(GE.cyl,gm),0,14,0,g).scale.set(.5,28,.5);add(new fe(new Ci(3,.35,8,24),gm),0,.4,0,g).rotation.x=P/2;
  if(kind=="merchant"){const bm=M(0x8b5a2b);add(new fe(GE.box,bm),0,1.1,0,g).scale.set(3.2,2.2,2.2);add(new fe(GE.box,M(0xdc2626)),0,2.5,0,g).scale.set(3.6,.6,2.6);add(new fe(GE.sph,M(0xfbbf24,{emissive:0xfbbf24,emissiveIntensity:.8})),0,3.6,0,g).scale.set(.7,.7,.7)}
  else{add(new fe(GE.box,M(0x0e7490,{metalness:.6})),0,.9,0,g).scale.set(2.2,1.8,1.6);add(new fe(GE.cone,M(0x67e8f9,{emissive:0x22d3ee,emissiveIntensity:1})),0,3.2,0,g).scale.set(.9,1.8,.9)}
  g.position.set(x,HT(x,z),z);S.add(g);const e={kind,x,z,g,t:170,b:cellOf(px,pz)-1};evs.push(e);return{x,z}}return null};
 const spawnAmb=(n)=>{const k=cellOf(px,pz);if(k<1||k>14)return 0;let c=0;for(let i=0;i<n*3&&c<n;i++){const a=Math.random()*6.28,d=24+Math.random()*10,x=Math.max(-HW+30,Math.min(HW-30,px+Math.cos(a)*d)),z=Math.max(-HW+30,Math.min(HW-30,pz+Math.sin(a)*d));if(cellOf(x,z)!==k||!freeAt(x,z,3))continue;mkEnt(k-1,!1,x,z,{amb:1});c++}return c};
 const animH=(a,mv)=>{const u=a.ud;if(!u||!u.hipL)return;u.h={moving:mv};u.lx=u.rx=u.lz=u.rz=0;try{DBA_ANIM(u,0)}catch(e){}
  if(u.leftArm&&u.rightArm&&!u.hold&&!u.shd){const s=mv?Math.sin(performance.now()*.014)*.5:0;u.leftArm.rotation.x+=((-s)-u.leftArm.rotation.x)*.35;u.rightArm.rotation.x+=(s-u.rightArm.rotation.x)*.35}};
const ATD=[null,
 {d:0x5a2a1c,n:0x1a0805,f:[60,190],p:{c:0xff8a30,n:70,s:[.3,.7],v:[0,2.4,0],sw:1.5,add:1}},
 {d:0xbcd8ee,n:0x0a1830,f:[80,230],p:{c:0xffffff,n:100,s:[.18,.42],v:[1.2,-1.9,0],sw:1.2,add:0}},
 {d:0x86c9a0,n:0x06140c,f:[80,240],p:{c:0xd8ff6a,n:55,s:[.22,.5],v:[0,.25,0],sw:2.2,add:1,tw:1,night:1}},
 {d:0x2c2347,n:0x0a0618,f:[55,170],p:{c:0xa78bfa,n:60,s:[.3,.65],v:[0,.9,0],sw:1.5,add:1,tw:1}},
 {d:0x56606e,n:0x0a0e18,f:[60,190],p:{c:0xbcd4ff,n:110,s:[.07,.12],v:[-3,-26,0],sw:.3,add:0,st:9,op:.5}},
 {d:0x6a2a2e,n:0x1a0508,f:[50,160],p:{c:0xff4a5a,n:60,s:[.25,.55],v:[0,.8,0],sw:1.5,add:1}},
 {d:0x9fb8ee,n:0x0a1030,f:[90,260],p:{c:0xcfe8ff,n:70,s:[.2,.5],v:[0,.15,0],sw:1,add:1,tw:1}},
 {d:0x5a2410,n:0x1a0a02,f:[55,180],p:{c:0xff6a00,n:80,s:[.3,.7],v:[0,3.2,0],sw:1.8,add:1}},
 {d:0xe0c48a,n:0x1f1a28,f:[70,210],p:{c:0xe8cc90,n:100,s:[.15,.35],v:[7,.2,2],sw:.8,add:0}},
 {d:0xaebfce,n:0x0c1420,f:[45,150],p:{c:0xe0f4ff,n:45,s:[.5,1.1],v:[0,.5,0],sw:2.5,add:1,tw:1,op:.5}},
 {d:0xcfc6ae,n:0x16140f,f:[70,210],p:{c:0xcfc8b4,n:70,s:[.15,.35],v:[1.6,-.5,.5],sw:1,add:0}},
 {d:0xfff3c0,n:0x1a1630,f:[100,280],p:{c:0xffe58a,n:60,s:[.25,.55],v:[0,1.1,0],sw:1.3,add:1,tw:1}},
 {d:0x7a2a6a,n:0x14051a,f:[55,170],p:{c:0xff4fd8,n:65,s:[.25,.6],v:[0,0,0],sw:5,add:1,tw:1,hue:1}},
 {d:0x103a5a,n:0x020a18,f:[40,140],p:{c:0x9fe8ff,n:65,s:[.2,.55],v:[0,2,0],sw:1,add:1,op:.6}}];
 const AT_=ATD.map(a=>a&&{d:new Rt(a.d),n:new Rt(a.n)}),D0=new Rt(7316188),N0=new Rt(0x070b1f),PN=100;
 const PM=new Ku({map:(()=>{const c=document.createElement("canvas");c.width=c.height=64;const g=c.getContext("2d"),r=g.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(255,255,255,1)");r.addColorStop(.35,"rgba(255,255,255,.6)");r.addColorStop(1,"rgba(255,255,255,0)");g.fillStyle=r;g.fillRect(0,0,64,64);return new Og(c)})(),transparent:!0,depthWrite:!1,color:0xffffff,opacity:.85}),PS=[];let pBi=-2,pN=0;
 for(let i=0;i<PN;i++){const sp=new Lf(PM);sp.visible=!1;S.add(sp);PS.push({sp,x:Math.random()*84-42,y:Math.random()*22,z:Math.random()*84-42,ph:Math.random()*6.28,sz:Math.random(),i:0})}
 let wxN=90,wxF=260;
 const WXT={vil:[["clear",6],["rain",3],["fog",1]],tree:[["clear",4],["rain",4],["storm",1.5],["fog",1.5]],glacier:[["clear",3],["snow",5],["fog",2]],dune:[["clear",5],["sand",5]],volcano:[["clear",4],["ash",6]],boss:[["clear",1]]},WXD=[["clear",5],["fog",3],["rain",2],["storm",1.5]],
 WXM={rain:{c:0xc8dcff,o:.6,n:300,v:34,len:1.8,w:.05,fog:.5,tint:[0x5c6a78,.35],dim:.4,msg:"🌧 Inizia a piovere"},storm:{c:0xb8ccf0,o:.65,n:420,v:42,len:2.2,w:.06,fog:.4,tint:[0x3c4656,.5],dim:.55,msg:"⛈ Si scatena un temporale"},fog:{n:0,fog:.28,tint:[0xaab4bc,.3],dim:.2,msg:"🌫 Scende una fitta nebbia"},snow:{c:0xffffff,o:.95,n:260,v:3.2,len:.16,w:.1,flake:1,fog:.6,tint:[0xdfe8f2,.25],dim:.1,msg:"❄ Inizia a nevicare"},sand:{c:0xd9b36a,o:.7,n:260,v:2,len:.18,w:.12,flake:1,wind:30,fog:.38,tint:[0xc9a15a,.5],dim:.2,msg:"🏜 Tempesta di sabbia"},ash:{c:0x6b5a55,o:.85,n:220,v:2.6,len:.2,w:.13,flake:1,fog:.65,tint:[0x3a2a28,.35],dim:.25,msg:"🌋 Cade cenere vulcanica"}};
 const wx={cur:"clear",want:"clear",i:1,next:40,k:-1,lt:8},WXMAX=420,wxP=new Float32Array(WXMAX*3),wxH=new Float32Array(WXMAX),wxTmp=new Rt(0xffffff);
 const wxGe=new Jn(),wxA=new on(new Float32Array(WXMAX*12),3),wxIx=[];for(let q=0;q<WXMAX;q++){const o=q*4;wxIx.push(o,o+1,o+2,o,o+2,o+3);wxH[q]=Math.random();wxP[q*3]=Math.random()*44-22;wxP[q*3+1]=Math.random()*26;wxP[q*3+2]=Math.random()*44-22}
 wxGe.setAttribute("position",wxA);wxGe.setIndex(wxIx);wxGe.setDrawRange(0,0);
 const wxMat=new ln({color:0xffffff,transparent:!0,opacity:.5,side:_n,depthWrite:!1,fog:!1}),wxM=new fe(wxGe,wxMat);wxM.frustumCulled=!1;wxM.visible=!1;wxM.renderOrder=5;S.add(wxM);
 const wxFl=document.createElement("div");wxFl.style.cssText="position:absolute;inset:0;background:#d6e4ff;opacity:0;pointer-events:none;z-index:3";host.appendChild(wxFl);
 const wxSp=()=>{const v={snow:.9,sand:.85,ash:.92,storm:.94,rain:.97}[wx.cur];return v?1-(1-v)*wx.i:1},wxPick=sh=>{const t=WXT[sh]||WXD;let s=0;t.forEach(a=>s+=a[1]);let r=Math.random()*s;for(const a of t){r-=a[1];if(r<=0)return a[0]}return"clear"};
 const wxFlash=()=>{wxFl.style.transition="none";wxFl.style.opacity=".55";setTimeout(()=>{wxFl.style.opacity=".1"},70);setTimeout(()=>{wxFl.style.opacity=".5"},150);setTimeout(()=>{wxFl.style.transition="opacity .6s";wxFl.style.opacity="0"},230);setTimeout(()=>{try{window.DBA_SFX&&window.DBA_SFX.play("thunder")}catch(e){}},400+Math.random()*1400)};
 const wxUp=(dt,t)=>{const k=Math.max(0,curK),sh=k>=1&&k<=14?BI[k-1].sh:k==0?"vil":"boss";
  if(window.__wxForce){wx.want=window.__wxForce;wx.next=1e9;window.__wxForce=null}else if(wx.k!==k){wx.k=k;wx.want=wxPick(sh);wx.next=120+Math.random()*180}
  wx.next-=dt;if(wx.next<=0){wx.want=wxPick(sh);wx.next=120+Math.random()*180}
  if(wx.want!==wx.cur){wx.i-=dt*(window.__atmoSnap?9:.25);if(wx.i<=0){wx.i=0;wx.cur=wx.want;const mm=WXM[wx.cur];if(mm&&cfg.onWeather)cfg.onWeather(mm.msg)}}else wx.i=Math.min(1,wx.i+dt*(window.__atmoSnap?9:.15));
  const m=WXM[wx.cur],i=wx.i;try{window.DBA_AMB&&DBA_AMB(m&&i>0?wx.cur:null,m&&i>0?i:0)}catch(e){}if(!m||i<=0){wxM.visible=!1;return}
  const fr=1-(1-m.fog)*i;S.fog.far=Math.max(30,wxF*fr);S.fog.near=Math.max(4,wxN*Math.max(.05,fr-.25));
  wxTmp.setHex(m.tint[0]).multiplyScalar(.25+.75*dl);S.background.lerp(wxTmp,m.tint[1]*i);S.fog.color.lerp(wxTmp,m.tint[1]*i);
  L.intensity*=1-m.dim*i;AM.intensity*=1-m.dim*i*.5;
  const ql=window.DBAQ&&DBAQ.l!=null?DBAQ.l:2,cnt=m.n?Math.round(m.n*i*[.3,.55,.8,1][ql]):0;
  if(cnt<=0||window.__dbaReduce&&m.flake){wxM.visible=!1}else{wxM.visible=!0;wxMat.color.setHex(m.c);wxMat.opacity=m.o*(.4+.6*i);wxGe.setDrawRange(0,cnt*6);
   const gy=HT(px,pz),R=22,H=26,rx=Math.cos(cy),rz=-Math.sin(cy),pos=wxA.array,w=m.w,Ln=m.len;
   for(let q=0;q<cnt;q++){let x=wxP[q*3],y=wxP[q*3+1],z=wxP[q*3+2];const ph=wxH[q];
    y-=m.v*dt*(m.flake?.8+ph*.4:1);x+=(m.wind||(m.flake?Math.sin(t*1.3+ph*9)*.9:3))*dt;if(m.flake&&!m.wind)z+=Math.cos(t*1.1+ph*7)*.6*dt;
    x=px+((x-px+R)%(2*R)+2*R)%(2*R)-R;z=pz+((z-pz+R)%(2*R)+2*R)%(2*R)-R;y=gy-3+((y-gy+3)%H+H)%H;
    wxP[q*3]=x;wxP[q*3+1]=y;wxP[q*3+2]=z;const o=q*12;
    if(m.flake){pos[o]=x-rx*w;pos[o+1]=y-w;pos[o+2]=z-rz*w;pos[o+3]=x+rx*w;pos[o+4]=y-w;pos[o+5]=z+rz*w;pos[o+6]=x+rx*w;pos[o+7]=y+w;pos[o+8]=z+rz*w;pos[o+9]=x-rx*w;pos[o+10]=y+w;pos[o+11]=z-rz*w}
    else{const sx=.12*Ln;pos[o]=x-rx*w;pos[o+1]=y;pos[o+2]=z-rz*w;pos[o+3]=x+rx*w;pos[o+4]=y;pos[o+5]=z+rz*w;pos[o+6]=x+rx*w+sx;pos[o+7]=y+Ln;pos[o+8]=z+rz*w;pos[o+9]=x-rx*w+sx;pos[o+10]=y+Ln;pos[o+11]=z-rz*w}}
   wxA.needsUpdate=!0}
  if(wx.cur=="storm"&&i>.6){wx.lt-=dt;if(wx.lt<=0){wx.lt=6+Math.random()*10;wxFlash()}}};
 const atmoUp=(dt,t)=>{const k=Math.max(0,curK),a=ATD[k],A=AT_[k],f=window.__atmoSnap?1:Math.min(1,dt*.8);cD.lerp(A?A.d:D0,f);cN.lerp(A?A.n:N0,f);const fg=a?a.f:[90,260];S.fog.near+=(fg[0]-S.fog.near)*f;S.fog.far+=(fg[1]-S.fog.far)*f;
  const Pr=a&&a.p;if(pBi!==k){pBi=k;if(Pr){PM.color.setHex(Pr.c);PM.blending=Pr.add?2:1;PM.needsUpdate=!0;PM.opacity=Pr.op||.85;const ql=window.DBAQ&&DBAQ.l!=null?DBAQ.l:2;pN=Math.min(PN,Math.round(Pr.n*[.3,.55,.8,1][ql]||Pr.n*.8))}else pN=0}
  if(!Pr){PS.forEach(q=>q.sp.visible=!1);return}
  if(Pr.hue)PM.color.setHSL((t*.15)%1,1,.62);
  const vis=Pr.night?Math.round(pN*(1-dl*.75)):pN,py2=HT(px,pz);
  PS.forEach((q,i)=>{if(i>=vis){q.sp.visible=!1;return}if(!q.i){q.i=1;q.x+=px;q.z+=pz}
   q.x+=(Pr.v[0]+Math.sin(t*.7+q.ph)*Pr.sw)*dt;q.y+=(Pr.v[1]*(.6+q.sz*.8)+Math.cos(t*.9+q.ph)*Pr.sw*.3)*dt;q.z+=(Pr.v[2]+Math.cos(t*.6+q.ph)*Pr.sw)*dt;
   q.x=px+(((q.x-px+42)%84)+84)%84-42;q.z=pz+(((q.z-pz+42)%84)+84)%84-42;q.y=((q.y%22)+22)%22;
   let sz=(Pr.s[0]+(Pr.s[1]-Pr.s[0])*q.sz)*1.7;if(Pr.tw)sz*=.55+.45*Math.sin(t*(2+q.sz*3)+q.ph);
   q.sp.position.set(q.x,py2+.4+q.y,q.z);q.sp.scale.set(sz,sz*(Pr.st||1),1);q.sp.visible=!0})};
 const NGT=(()=>{const c=document.createElement("canvas");c.width=c.height=64;const x=c.getContext("2d"),r=x.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(255,205,130,.95)");r.addColorStop(.5,"rgba(255,150,60,.35)");r.addColorStop(1,"rgba(255,120,40,0)");x.fillStyle=r;x.fillRect(0,0,64,64);return new Og(c)})();
 const NGL=new fe(new Na(1,32),new ln({map:NGT,transparent:!0,opacity:0,blending:2,depthWrite:!1,fog:!1}));NGL.rotation.x=-P/2;NGL.scale.setScalar(15);NGL.renderOrder=2;NGL.visible=!1;S.add(NGL);
 const SKY=(()=>{const c=document.createElement("canvas");c.width=1024;c.height=512;const x=c.getContext("2d");x.clearRect(0,0,1024,512);for(let i=0;i<900;i++){x.fillStyle="rgba(255,255,255,"+(.35+Math.random()*.65)+")";x.beginPath();x.arc(Math.random()*1024,Math.random()*300,Math.random()<.05?1.9:Math.random()*1+.3,0,6.283);x.fill()}const m=new fe(new Tt(380,24,12),new ln({map:new Og(c),side:_n,transparent:!0,opacity:0,blending:2,depthWrite:!1,fog:!1}));m.renderOrder=-1;m.visible=!1;S.add(m);return m})();
 const SKT=kind=>{const c=document.createElement("canvas");c.width=kind=="cloud"?256:128;c.height=128;const x=c.getContext("2d");
  if(kind=="sun"){const g=x.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,"rgba(255,255,245,1)");g.addColorStop(.1,"rgba(255,250,215,1)");g.addColorStop(.17,"rgba(255,232,160,.55)");g.addColorStop(.5,"rgba(255,190,90,.14)");g.addColorStop(1,"rgba(255,170,60,0)");x.fillStyle=g;x.fillRect(0,0,128,128)}
  else if(kind=="moon"){const g=x.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,"rgba(220,230,255,.4)");g.addColorStop(.35,"rgba(200,215,255,.13)");g.addColorStop(1,"rgba(180,200,255,0)");x.fillStyle=g;x.fillRect(0,0,128,128);x.fillStyle="#eef2fd";x.beginPath();x.arc(64,64,17,0,6.283);x.fill();x.fillStyle="rgba(150,165,200,.45)";[[58,58,4],[70,66,3],[62,72,3.4],[72,56,2.4]].forEach(a=>{x.beginPath();x.arc(a[0],a[1],a[2],0,6.283);x.fill()})}
  else{for(let i=0;i<30;i++){const cx=36+Math.random()*184,cy=46+Math.random()*34,r=16+Math.random()*26,g=x.createRadialGradient(cx,cy,0,cx,cy,r);g.addColorStop(0,"rgba(255,255,255,.5)");g.addColorStop(1,"rgba(255,255,255,0)");x.fillStyle=g;x.fillRect(cx-r,cy-r,r*2,r*2)}}
  return new Og(c)};
 const SUNM=new fe(new qd(230,230),new ln({map:SKT("sun"),transparent:!0,opacity:0,blending:2,depthWrite:!1,fog:!1,color:16777215})),MOONM=new fe(new qd(120,120),new ln({map:SKT("moon"),transparent:!0,opacity:0,blending:2,depthWrite:!1,fog:!1,color:16777215}));SUNM.renderOrder=-1;MOONM.renderOrder=-1;SUNM.visible=MOONM.visible=!1;S.add(SUNM);S.add(MOONM);
 const CLT=SKT("cloud"),CLD=Array.from({length:11},(_,i)=>{const m=new fe(new qd(1,1),new ln({map:CLT,transparent:!0,opacity:0,depthWrite:!1,fog:!1}));m.renderOrder=-1;m.visible=!1;const w=110+Math.random()*120;m.scale.set(w,w*.42,1);S.add(m);const a=i/11*6.283+Math.random()*.4,d=170+Math.random()*130;return{m,x:Math.cos(a)*d,z:Math.sin(a)*d,h:28+Math.random()*45,v:2+Math.random()*3,w}}),SNC=new Rt(0),CCC=new Rt(0),CWH=new Rt(16777215),CDK=new Rt(0x2a1a18);
 window.__dbaSky={SUNM,MOONM,CLD,get cam(){return cam}};
 const skyUp=(dt,t)=>{const k=Math.max(0,curK),A=k>=1&&k<=14?BI[k-1]:null,ang=((window.__todF!=null?window.__todF:tod)-.25)*P*2,el=Math.sin(ang),az=Math.cos(ang),cp=cam.position,wm=WXM[wx.cur],wd=wm?wx.i:0;
  const sv=Math.max(0,Math.min(1,(el+.1)/.3))*(1-wd*.85);SUNM.visible=sv>.02;if(SUNM.visible){SUNM.position.set(cp.x+az*250,cp.y+el*85+4,cp.z-150);SUNM.lookAt(cp);SUNM.material.opacity=sv;SNC.setHex(A?A.c[1]:0xffe9a8);SUNM.material.color.setHex(16777215).lerp(SNC,.3)}
  const mv=Math.max(0,Math.min(1,(-el+.1)/.3))*(1-wd*.8);MOONM.visible=mv>.02;if(MOONM.visible){MOONM.position.set(cp.x-az*250,cp.y-el*85+4,cp.z-150);MOONM.lookAt(cp);MOONM.material.opacity=mv}
  CCC.copy(cc2).lerp(CWH,.55+.2*dl);if(A&&A.sh=="volcano")CCC.lerp(CDK,.55);const co=(.2+.3*dl+wd*.25)*(A&&A.sh=="volcano"?1.2:1);
  CLD.forEach(c=>{c.x+=c.v*dt*(1+wd*2);if(c.x>300)c.x-=600;c.m.position.set(cp.x+c.x,cp.y+c.h,cp.z+c.z);c.m.lookAt(cp.x,cp.y+c.h*.5,cp.z);c.m.material.color.copy(CCC);c.m.material.opacity=Math.min(.75,co);c.m.visible=co>.03})};
 const FIRES=CAMPS.map((c,i)=>{const g=new zn,ax=c.x+5,az=c.z+5;g.position.set(ax,HT(ax,az),az);[0,2.1,4.2].forEach(a=>{const l=new fe(GE.cyl,M(0x4a2e18));l.scale.set(.35,2.4,.35);l.rotation.z=P/2;l.rotation.y=a;l.position.y=.3;g.add(l)});const fl=[0,1,2].map(n=>{const f=new fe(new Gt(.55-.12*n,1.8-.35*n,7),new ln({color:[0xff5a10,0xff9a20,0xffe070][n],transparent:!0,opacity:.9}));f.position.y=1+.12*n;g.add(f);return f});const gd=new fe(new Na(1,28),new ln({map:NGT,transparent:!0,opacity:.25,blending:2,depthWrite:!1,fog:!1}));gd.rotation.x=-P/2;gd.position.y=.3;gd.scale.setScalar(26);g.add(gd);S.add(g);props.push({o:g,x:ax,z:az,r:260});return{g,fl,gd}});
 const fxUp=(dt,t)=>{const nt=1-dl;NGL.visible=nt>.15;if(NGL.visible){NGL.position.set(px,HT(px,pz)+.25,pz);NGL.material.opacity=Math.min(.5,nt*.6)*(.9+.1*Math.sin(t*6))}
  skyUp(dt,t);SKY.position.copy(cam.position);SKY.material.opacity=Math.max(0,(nt-.4)*1.6);SKY.visible=SKY.material.opacity>.02;
  FIRES.forEach((f,i)=>{if(!f.g.visible)return;f.fl.forEach((m,n)=>{m.scale.y=1+.25*Math.sin(t*9+n*2+i);m.scale.x=m.scale.z=1+.12*Math.sin(t*7+n*3)});f.gd.material.opacity=.15+nt*.5+.05*Math.sin(t*8)});
  const k=Math.max(0,curK),X=GTX[k];if(X){if(k===1||k===8){X.offset.x+=dt*.006;X.offset.y+=dt*.0035}else if(k===14){X.offset.y=Math.sin(t*.35)*.02;X.offset.x=Math.cos(t*.27)*.02}}
  if(typeof DBA_OMM!="undefined"&&DBA_OMM.ice)DBA_OMM.ice.emissiveIntensity=.22+.12*Math.sin(t*1.4)};
 const dispG=g=>{try{g.traverse(m=>{m.geometry&&m.geometry.dispose()})}catch(x){}},unb=e=>{if(!e.built||!e.mg)return;e.sh&&(e.g.remove(e.sh),e.sh=null);e.g.remove(e.mg);dispG(e.mg);e.mg=null;e.bm=null;e.built=!1};
 const ANE=(e,t)=>{const b=e.bm,mg=e.mg;if(!mg)return;const sp=e.sp||0,mv=Math.min(1,sp/3.5),ph=t*(5+Math.min(8,sp*.5))+e.home.x,s=Math.sin(ph);
  mg.position.y=Math.abs(Math.sin(ph))*.1*mv+.02;mg.rotation.z=Math.sin(ph)*.045*mv;
  if(!b)return;
  if(b.legs&&b.legs.length>1&&!b.legs[0].sp){b.legs[0].rotation.x=s*.75*mv;b.legs[1].rotation.x=-s*.75*mv}if(b.legs&&b.legs[0]&&b.legs[0].sp)b.legs.forEach((q,i)=>{const p2=ph*.7+(i%4)*1.6+(i<4?0:Math.PI),a=Math.sin(p2);q.rotation.y=a*.28*mv;q.kn.rotation.z=-q.sd*(Math.max(0,Math.cos(p2))*.55*mv+Math.sin(t*1.4+i)*.05)});if(b.tent)b.tent.forEach((ch,i)=>ch.forEach((q,k)=>{q.rotation.x=Math.sin(t*(1.6+mv*1.4)-k*.7+i*.8)*(.12+mv*.05);q.rotation.z=Math.cos(t*1.3-k*.6+i)*.11}));
  if(b.clawL&&b.clawR){b.clawL.rotation.x=-s*.6*mv;b.clawR.rotation.x=s*.6*mv}if(b.clawL&&b.clawL.el){b.clawL.el.rotation.x=-(.2+.45*mv*Math.max(0,s));b.clawR.el.rotation.x=-(.2+.45*mv*Math.max(0,-s))}if(b.legs&&b.legs.length>1&&b.legs[0].kn&&!b.legs[0].sp){b.legs[0].kn.rotation.x=Math.max(0,-s)*.8*mv;b.legs[1].kn.rotation.x=Math.max(0,s)*.8*mv}
  if(b.tail)b.tail.forEach((q,i)=>{q.rotation.y=Math.sin(t*(2.6+mv*2.4)+e.home.x-i*.55)*(.09+i*.012)*(1+mv*1.1);q.rotation.x=Math.sin(t*2+e.home.z-i*.4)*.035});
  if(b.wingL&&b.wingR){const f=Math.sin(t*(3+mv*4)+e.home.z)*(.22+mv*.22);b.wingL.rotation.x=f;b.wingR.rotation.x=-f}};
 const lp=()=>{id=requestAnimationFrame(lp);try{lp0()}catch(er){if(!lp._w||performance.now()-lp._w>5e3){lp._w=performance.now();console.warn('DBA loop',er)}}},lp0=()=>{if(paused||!rd)return;if(lost){lost=0;suspendR();resumeR();return}const n=performance.now(),dt=Math.min(.05,(n-last)/1e3);last=n;const t=(n-t0)/1e3;lp._f=(lp._f||0)+1;
  {const fr=n-(lp._p||n);lp._p=n;if(fr<400){lp._e=lp._e?lp._e*.94+fr*.06:fr;if(n-(lp._q||0)>2500){lp._q=n;const cu=rd.getPixelRatio(),ba=Math.min(devicePixelRatio||1,2),lo=window.__dbaMinPR||.6;if(lp._e>34&&cu>lo+.01){rd.setPixelRatio(Math.max(lo,cu*.8));lp._e=null}else if(lp._e<19&&cu<ba-.01){rd.setPixelRatio(Math.min(ba,cu*1.2));lp._e=null}}}else lp._e=null}
  {const nt=tod+dt/300;if(nt>=1)day++;tod=nt%1}dl=.5+.5*Math.sin((tod-.25)*P*2);if(window.__dlForce!=null)dl=window.__dlForce;DBA_NGU(dl,t,px,pz);S.fog.near=wxN;S.fog.far=wxF;atmoUp(dt,t);wxN=S.fog.near;wxF=S.fog.far;fxUp(dt,t);cc2.copy(cN).lerp(cD,dl);S.background.copy(cc2);S.fog.color.copy(cc2);AM.intensity=.22+.78*dl;L.intensity=.07+1.18*dl;if(NL){const nn=Math.max(0,Math.min(1,(.55-dl)/.3));NL.intensity=nn*95*(1+.05*Math.sin(t*8.3));NL.position.set(px,HT(px,pz)+3.8,pz)}wxUp(dt,t);const ag=1+.4*(1-dl);cy-=camJoy.x*2.2*dt;cy+=((keys.cL?1:0)-(keys.cR?1:0))*2*dt;pr=Math.max(.12,Math.min(1.7,pr+camJoy.y*.9*dt));
  const ix=(keys.mR?1:0)-(keys.mL?1:0)+joy.x,iz=(keys.mB?1:0)-(keys.mF?1:0)+joy.y,il=Math.hypot(ix,iz);mvg=il>.12?1:0;
  if(mvg){const k=Math.min(1,il)/il,fi=-iz*k,st=ix*k,fx=Math.sin(cy),fz=Math.cos(cy),rx=-Math.cos(cy),rz=Math.sin(cy),dx=fx*fi+rx*st,dz=fz*fi+rz*st,spd=26*(sprint&&stam>0&&mount?MSPD[mount]:1)*wxSp();let nx=Math.max(-HW+6,Math.min(HW-6,px+dx*spd*dt)),nz=Math.max(-HW+6,Math.min(HW-6,pz+dz*spd*dt));
   if(!canGo(px,pz,nx,pz,1))nx=px;if(!canGo(nx,pz,nx,nz,1))nz=pz;pushOb(nx,nz,1.65);if(canGo(px,pz,RX,RZ,1)){nx=RX;nz=RZ}px=nx;pz=nz;hd=Math.atan2(dx,dz);if(Math.abs(camJoy.x)<.15&&!keys.cL&&!keys.cR&&fi>-.2&&performance.now()-lastRot>1500){const dd=ad(hd,cy);cy+=Math.max(-.45,Math.min(.45,dd*.5))*dt}}
  stam=100;if(jh>0||jv!==0){jv-=62*dt;jh+=jv*dt;if(jh<=0){jh=0;jv=0}}
  const fx=Math.sin(hd),fz=Math.cos(hd),lead=ctlLead(),py=HT(px,pz);
  hs.forEach((a,k)=>{const ox=a===lead?0:((k%3)-1)*2.7,oz=(a===lead?0:3.3+((k/3)|0)*2.85),tx=px+fz*ox-fx*oz,tz=pz-fx*ox-fz*oz,p=a.g.position,f=a===lead?1:Math.min(1,dt*6);p.x+=(tx-p.x)*f;p.z+=(tz-p.z)*f;if(a!==lead){pushOb(p.x,p.z,1.5);p.x=RX;p.z=RZ}const gy=HT(p.x,p.z);if(a.sh){a.sh.position.set(p.x,gy+.12,p.z);a.sh.scale.setScalar(1.1*Math.max(.4,1-jh*.12))}
   if(a.dead){p.y=gy+.4;return}p.y=gy+(mvg?Math.abs(Math.sin(t*11+k))*.18:0)+jh;a.g.rotation.y=hd;a.g.rotation.z=mvg?Math.sin(t*11+k)*.06:0;if(!a.dead)animH(a,mvg&&!(sprint&&mount&&a===lead))});
  {const tt=t;swl.forEach(q=>{const o=q.o,A=.03*o.userData.sw,w=tt*1.25+q.x*.021+q.z*.017;o.rotation.z=Math.sin(w)*A+Math.sin(w*2.7)*A*.3;o.rotation.x=Math.cos(w*.8)*A*.6});WT.forEach(w=>{if(Math.abs(w.p.x-px)>380||Math.abs(w.p.z-pz)>380){w.g.visible=!1;return}w.g.visible=!0;if(w.ice){w.t1.offset.x=tt*.004;w.t2.offset.y=-tt*.003}else{w.t1.offset.x=tt*.03;w.t1.offset.y=tt*.012;w.t2.offset.x=-tt*.02;w.t2.offset.y=tt*.035}w.g.position.y=w.wl+Math.sin(tt*.9+w.p.x)*.06;w.m1.material.opacity=(w.ice?.88:.8)+Math.sin(tt*1.3)*.03})}
  {const ld=ctlLead();mnts.forEach((q,i)=>{if(q&&i!==mount)q.visible=!1});const mq=mnts[mount];if(sprint&&mount&&mq&&ld&&!ld.dead){mq.visible=!0;mq.position.set(ld.g.position.x,py+jh+(mount>=3&&mount!=4?.5:0),ld.g.position.z);mq.rotation.y=hd;mq.userData.anim(t,mvg);ld.g.position.y=py+jh+RH[mount]+(mvg?Math.abs(Math.sin(t*14))*.1:0)}else if(mq)mq.visible=!1}
  let bud=1;ents.forEach(e=>{if(!e.alive){e.ret-=dt;if(e.ret<=0){e.alive=!0;e.g.position.set(e.home.x,HT(e.home.x,e.home.z),e.home.z)}else return}
   const gp=e.g.position,dx=px-gp.x,dz=pz-gp.z,d=Math.hypot(dx,dz);if(d>210){e.g.visible=!1;if(e.roam){e.t-=dt;if(e.t<=0){e.t=rnd(8,16);const L=RDP(e.k),q=L.length?L[Math.random()*L.length|0]:[e.home.x,e.home.z];e.tx=q[0];e.tz=q[1]}const ax=e.tx-gp.x,az=e.tz-gp.z,al=Math.hypot(ax,az);if(al>1){gp.x+=ax/al*9.6*dt;gp.z+=az/al*9.6*dt}gp.y=HT(gp.x,gp.z)}if(d>480&&e.built)unb(e);return}if(!e.built){if(bud<=0)return;bud--;build(e)}e.g.visible=!0;if(e.ring)e.ring.scale.setScalar(1+.12*Math.sin(t*3));let tx,tz,sp;
   if(d<(e.roam?30:e.m?18:14)*ag&&cellOf(px,pz)==e.k){tx=px;tz=pz;sp=(e.roam?6.2:e.m?5.4:4.8)*(1+.15*(1-dl))}else{e.t-=dt;if(e.t<=0){if(e.roam){e.t=rnd(8,16);const L=RDP(e.k),q=L.length?L[Math.random()*L.length|0]:[e.home.x+rnd(-300,300),e.home.z+rnd(-300,300)];e.tx=q[0];e.tz=q[1]}else{e.t=rnd(3,6);e.tx=e.home.x+rnd(-14,14);e.tz=e.home.z+rnd(-14,14)}}tx=e.tx;tz=e.tz;sp=e.roam?3.2:1.8}
   const ax=tx-gp.x,az=tz-gp.z,al=Math.hypot(ax,az);if(al>.5){const nx=gp.x+ax/al*sp*dt,nz=gp.z+az/al*sp*dt;if(canGo(gp.x,gp.z,nx,nz,0)){pushOb(nx,nz,e.rad||1.2*(e.sc||1));if(canGo(gp.x,gp.z,RX,RZ,0)){gp.x=RX;gp.z=RZ}}e.g.rotation.y=Math.atan2(ax,az)}
   gp.y=HT(gp.x,gp.z);{const sp0=e._px==null?0:Math.hypot(gp.x-e._px,gp.z-e._pz)/Math.max(dt,.001);e._px=gp.x;e._pz=gp.z;e.sp=(e.sp||0)*.85+Math.min(40,sp0)*.15}if(d<90||(lp._f+(e._i||(e._i=(lp._i=(lp._i||0)+1))))%3==0)ANE(e,t);if(d<(e.hit||(e.m?5.4:4.2))&&!paused){paused=!0;cfg.onFight(e)}});
  if(!paused&&Math.hypot(px-BP.x,pz-BP.z)<12){paused=!0;cfg.onBoss()}
  chests.forEach(c=>{if(c.on&&Math.hypot(px-c.x,pz-c.z)<5.6){c.on=!1;c.g.userData.h=1;c.g.visible=!1;cfg.onChest(c.b)}});
  pois.forEach(p=>{if(p.on&&Math.hypot(px-p.x,pz-p.z)<10){p.on=!1;p.g.userData.h=1;p.g.visible=!1;cfg.onPoi(p.b)}});
  let nb=null,nbd=9;npcs.forEach(q=>{q.cd-=dt;const dq=Math.hypot(px-q.x,pz-q.z);if(!q.built&&dq<260)q.mk();q.g.visible=dq<300;if(!q.m)return;q.m.position.y=q.my+Math.sin(t*3)*.3;if(q.k=="elder"){q.mt=(q.mt||0)-dt;if(q.mt<=0){q.mt=.6;q.ms=cfg.getMark?cfg.getMark(q.b,q.vi):0}q.m.visible=!!q.ms&&dq<140;if(q.ms&&q.m.material!==MKM[q.ms])q.m.material=MKM[q.ms];q.m.rotation.y=Math.atan2(px-q.x,pz-q.z)-q.g.rotation.y}if(!paused&&dq<9&&dq<nbd){nbd=dq;nb=q}});if(paused)nb=null;if(nb!==nearQ){nearQ=nb;cfg.onNear&&cfg.onNear(nb?{k:nb.k,b:nb.b,vi:nb.vi}:null)}
  springs.forEach(s=>{s.cd-=dt;if(s.cd<=0&&Math.hypot(px-s.x,pz-s.z)<7.6){s.cd=30;cfg.onSpring(s.b)}});PONDS.forEach(q=>{q.cd=(q.cd||0)-dt;if(q.cd<=0&&!paused&&cfg.onPond&&Math.hypot(px-q.x,pz-q.z)<q.r*.95){q.cd=45;paused=!0;cfg.onPond(q.k)}});
  GT.forEach(g=>{g.cd=(g.cd||0)-dt;if(!g.open&&g.cd<=0&&Math.hypot(px-g.p.x,pz-g.p.z)<22){g.cd=8;cfg.onLocked(g.u)}});
  CAMPS.forEach((c,i)=>{if(!disc[i]&&Math.hypot(px-c.x,pz-c.z)<85){disc[i]=1;cfg.onCamp(i-1)}});
  nodes.forEach(nd=>{if(!nd.on){nd.cd-=dt;if(nd.cd<=0){nd.on=!0;nd.g.userData.h=0}return}if(Math.hypot(px-nd.x,pz-nd.z)<5.2){nd.on=!1;nd.cd=120;nd.g.userData.h=1;nd.g.visible=!1;cfg.onGather(nd.t,nd.b)}});
  crypts.forEach((c,i)=>{if(c.on&&!paused&&Math.hypot(px-c.x,pz-c.z)<10){paused=!0;cfg.onCrypt(i)}});shrines.forEach(s2=>{s2.cd-=dt;if(s2.cd<=0&&Math.hypot(px-s2.x,pz-s2.z)<7.6){s2.cd=300;cfg.onShrine(s2.b)}});
  for(let i=evs.length-1;i>=0;i--){const e=evs[i];e.t-=dt;e.g.rotation.y+=dt*.8;if(e.t<=0){S.remove(e.g);dispG(e.g);evs.splice(i,1);continue}if(!paused&&Math.hypot(px-e.x,pz-e.z)<6.5){S.remove(e.g);dispG(e.g);evs.splice(i,1);paused=!0;cfg.onEvent&&cfg.onEvent(e.kind,e.b)}}
  {const D=window.__dbaDst||(window.__dbaDst={t:0,lx:px,lz:pz,i:0,P:[]});if(!D.P.length){for(let n=0;n<14;n++){const mt=new Ku({map:PM.map,transparent:!0,depthWrite:!1,color:0xbbaa99,opacity:0}),sp=new Lf(mt);sp.visible=!1;S.add(sp);D.P.push({sp,mt,l:0,m:0})}}
   const mv=Math.hypot(px-D.lx,pz-D.lz);D.lx=px;D.lz=pz;D.t-=dt;if(mv>.04&&D.t<=0&&jh===0&&!paused){D.t=.09;const p=D.P[D.i++%D.P.length],c=cols[Math.max(0,cellOf(px,pz)-0)]||0x998877;p.mt.color.set(c).lerp(new Rt(0xffffff),.3);p.sp.position.set(px+(Math.random()-.5)*.8,HT(px,pz)+.25,pz+(Math.random()-.5)*.8);p.l=p.m=.75;p.sp.visible=!0}
   D.P.forEach(p=>{if(p.l>0){p.l-=dt;const f=Math.max(0,p.l/p.m);p.mt.opacity=.8*f;p.sp.scale.setScalar(1.1+(1-f)*2.6);p.sp.position.y+=dt*.5;if(p.l<=0)p.sp.visible=!1}})}
  const kk=cellOf(px,pz);
  if(dl<.28&&!rareE&&!rareDone&&!paused&&kk>=1&&kk<=14){const a=Math.random()*P*2,x=Math.max(-HW+30,Math.min(HW-30,px+Math.cos(a)*80)),z=Math.max(-HW+30,Math.min(HW-30,pz+Math.sin(a)*80));if(cellOf(x,z)===kk){rareE=mkEnt(kk-1,!0,x,z,{rare:1,sc:1.1});rareE.bo.maxHp=Math.round(rareE.bo.maxHp*1.2);rareE.bo.hp=rareE.bo.maxHp;rareE.bo.attack=Math.round(rareE.bo.attack*.85);rareE.bo.name="Spettro · "+String(rareE.bo.name).replace("Miniboss · ","");rareDone=!0;cfg.onRare()}}
  if(dl>.6){rareDone=!1;if(rareE){if(rareE.alive){rareE.alive=!1;rareE.ret=1e9;rareE.g.visible=!1}rareE=null}}
  if(kk!==curK){curK=kk;cfg.onBiome(kk-1);if(prismE){if(prismE.alive){prismE.alive=!1;prismE.ret=1e9;prismE.g.visible=!1}prismE=null}if(kk>=1&&kk<=14&&!paused&&Math.random()<.5){const a=Math.random()*P*2,x=Math.max(-HW+30,Math.min(HW-30,px+Math.cos(a)*90)),z=Math.max(-HW+30,Math.min(HW-30,pz+Math.sin(a)*90));if(cellOf(x,z)===kk){prismE=mkEnt(kk-1,!0,x,z,{prism:1,sc:1.1});window.DBA_PRISM.apply(prismE.bo,1);cfg.onPrism&&cfg.onPrism(prismE.bo.name)}}}
  if(n-lastV>400){lastV=n;props.forEach(p=>{p.o.visible=!p.o.userData.h&&Math.abs(p.x-px)<p.r&&Math.abs(p.z-pz)<p.r&&Math.hypot(p.x-px,p.z-pz)<p.r});swl=props.filter(p=>p.o.visible&&p.o.userData.sw&&Math.abs(p.x-px)<75&&Math.abs(p.z-pz)<75)}
  window.__dbaWH&&window.__dbaWH(dt,t);
  const cf=Math.sin(cy),cg=Math.cos(cy);
  if(view=="first"){const ld=ctlLead(),hy=py+5.1;cam.position.set(px+cf*.9,hy,pz+cg*.9);cam.lookAt(px+cf*12,hy+(.55-pr)*9,pz+cg*12);hs.forEach(a=>{a.g.visible=a!==ld})}
  else{const ex=(view=="wide"?(asp<1?36:30):view=="top"?(asp<1?44:36):view=="third"?td:(asp<1?15:13))*zm,cx=px-cf*ex,cz=pz-cg*ex;cam.position.set(cx,Math.max(py+ex*pr+2,HT(cx,cz)+2),cz);if(view=="third"){cam.lookAt(px+cf*6,py+2.1,pz+cg*6);hs.forEach(a=>{a.g.visible=a===lead||Math.hypot(a.g.position.x-cx,a.g.position.z-cz)>Math.max(4.2,ex-.2)})}else{cam.lookAt(px+cf*ex*.15,py+2,pz+cg*ex*.15);hs.forEach(a=>{a.g.visible=!0})}}
  {const wf=view=="third"?52:(asp<1?68:52);if(cam.fov!==wf){cam.fov=wf;cam.updateProjectionMatrix()}}rd&&rd.render(S,cam);
  if(n-lastM>200){lastM=n;drawMap()}};id=requestAnimationFrame(lp);
 return{setTod:v=>{tod=v},npcList:()=>npcs.map(q=>({x:q.x,z:q.z,k:q.k,b:q.b})),_nodes:nodes,nodeList:()=>nodes.map(n=>({x:n.x,z:n.z,t:n.t,b:n.b})),jumpH:()=>jh,quality:()=>rd&&rd.getPixelRatio(),perf:()=>({calls:rd.info.render.calls,tris:rd.info.render.triangles,geo:rd.info.memory.geometries,tex:rd.info.memory.textures,ents:ents.length,built:ents.filter(e=>e.built).length,vis:props.filter(p=>p.o.visible).length,props:props.length}),_pr:props,ponds:()=>PONDS.map(q=>({x:q.x,z:q.z,r:q.r,k:q.k,sh:q.sh})),_ht:HT,spawnEv,spawnAmb,isPaused:()=>paused,
  addNpc(o0){const k=o0.b+1,x=o0.x,z=o0.z,q=new zn;q.position.set(x,HT(x,z),z);q.rotation.y=o0.ry||0;q.visible=!1;S.add(q);addOb(x,z,2.6);
   const ks=Object.keys(WOW_RACES),rs=o0.rs|0,rk=ks[rs%ks.length],RC2=WOW_RACES[rk],f1=((rs*9301+49297)%233280)/233280,f2=((rs*7919+13)%1000)/1000,f3=((rs*104729+7)%1000)/1000;
   const ap={sex:f1<.5?"male":"female",race:rk,skinColor:RC2.skin[(f2*RC2.skin.length)|0],hairColor:RC2.hair[(f3*RC2.hair.length)|0],hairStyle:(rs>>3)%18,hairPick:1};ap.beardColor=ap.hairColor;if(RC2.eye!=null)ap.eyeColor=RC2.eye;if(RC2.beard&&ap.sex!="female")ap.beardStyle=1;else if(ap.sex!="female"&&rs%3==0){ap.beardStyle=(rs>>5)%12;ap.beardPick=1}
   const o={race:rk,vi:o0.id,g:q,m:null,my:6.2,x,z,k:"sq",b:o0.b,cd:0,y:HT(x,z),built:0,sq:1};
   o.mk=()=>{o.built=1;try{const m3=WOW_build(WOWTT(),{classKey:o0.cl||"druido",color:o0.col||0x6d4c9f,arch:"melee",name:"sq",appearance:ap},!1);m3.scale.set(1.95,1.95,1.95);q.add(m3)}catch(e){add(new fe(GE.cyl,M(0x4338ca)),0,1.65,0,q).scale.set(1.35,3.3,1.35);add(new fe(GE.sph,M(0xf1c9a5)),0,3.9,0,q).scale.set(.9,.9,.9)}const mm=add(new fe(GE.sph,new ln({color:o0.mkc||0xfacc15})),0,o.my,0,q);mm.scale.set(.75,.75,.75);o.m=mm};
   npcs.push(o);return o},
  rmNpc(o){const i=npcs.indexOf(o);if(i>=0)npcs.splice(i,1);S.remove(o.g)},
  moveNpc(o,x,z,ry){o.x=x;o.z=z;o.g.position.set(x,HT(x,z),z);if(ry!=null)o.g.rotation.y=ry},
  spot(b,dmin){const k=b+1,cn=cc(k);for(let n=0;n<400;n++){const x=cn.x+(Math.random()-.5)*(CS-260),z=cn.z+(Math.random()-.5)*(CS-260);if(CAMPS.some(q=>Math.hypot(x-q.x,z-q.z)<(dmin||150))||VIL.some(q=>Math.hypot(x-q.x,z-q.z)<150)||nearGate(x,z,100)||PONDS.some(q=>Math.hypot(x-q.x,z-q.z)<q.r*1.7+60)||!freeAt(x,z,30))continue;return{x,z}}return null},
  spawnQ(bi,tpl,x,z,ex){if(!freeAt(x,z,3))return null;return mkEnt(bi,!1,x,z,Object.assign({tpl},ex||{}))},
  entAt(e){return ents.indexOf(e)>=0},
  evCount:()=>evs.length,suspend:suspendR,resume:resumeR,setSprint(b){sprint=!!b&&mount>0},stamina:()=>stam,isSprint:()=>sprint,setMount(t){mount=t;if(!t)sprint=!1},
  markCrypt(i,dn){const c=crypts[i];c.on=!dn;c.glow.color.set(dn?0x555566:c.pcol);c.glow.emissive.set(dn?0x222233:c.pcol);c.pnl.color.set(dn?0x555566:c.pcol);c.pnl.emissive.set(dn?0x222233:c.pcol)},cryptInfo:i=>({b:crypts[i].b}),day:()=>day,
  vilCount:k=>VCN[k]||1,interact,nearNpc:()=>nearQ&&{k:nearQ.k,b:nearQ.b,vi:nearQ.vi},npcInfo:()=>npcs.map(q=>({k:q.k,b:q.b,vi:q.vi,race:q.race})),inCamp:()=>CAMPS.some(c=>Math.hypot(px-c.x,pz-c.z)<75)||VIL.some(c=>Math.hypot(px-c.x,pz-c.z)<75),teleport(x,z){px=x;pz=z;hs.forEach(a=>a.g.position.set(x,HT(x,z)+(a.dead?.4:0),z))},
  mapData:()=>({px,pz,HW,CS,cells:PATH.map((p,k)=>({x:cc(k).x,z:cc(k).z,col:cols[k]})),gates:GT.map(g=>({x:g.p.x,z:g.p.z,o:g.open})),camps:CAMPS.map((c,i)=>({x:c.x,z:c.z,d:disc[i]})),vils:VIL.map(c=>({x:c.x,z:c.z})),outs:OUT.map(o=>({x:o.x,z:o.z,d:o.done})),crypts:crypts.map(c=>({x:c.x,z:c.z,d:!c.on})),roam:ents.filter(e=>e.roam&&e.alive).map(e=>({x:e.g.position.x,z:e.g.position.z,b:e.bi})),BP,roads:ROADS.map(r=>({k:r.kind,p:r.pts.filter((_,i)=>i%5==0).map(a=>[a[0]|0,a[1]|0])}))}),
  weather:()=>({cur:wx.cur,want:wx.want,i:wx.i,next:wx.next,sp:wxSp()}),
  state(){return{ver:2,day,crypts:crypts.map(c=>c.on?1:0),disc,nodes:nodes.map(n=>n.on?1:0),pos:{x:px,z:pz},tod,killed:ents.map(e=>e.alive?0:Math.max(1,Math.round(e.ret))),chests:chests.map(c=>c.on?1:0),pois:pois.map(p=>p.on?1:0)}},
  joy,camJoy,jump(){if(!paused&&jh===0)jv=24},rotCam(dx,dy){cy-=dx*.006;pr=Math.max(.12,Math.min(1.7,pr+dy*.004));lastRot=performance.now()},camState:()=>({cy,pr,view}),setView(v){if(PRV[v]){view=v;pr=PRV[v];zm=1}},getView:()=>view,setGate,xg:GT.slice(15).map(g=>g.u),setObj(o){obj=o},isNight:()=>dl<.35,biome:()=>curK,BI,CAMPS,GATES:GT.map(g=>g.p),BP,pause(b){paused=b;last=performance.now()},setParty(pl){mkParty(pl)},
  kill(e){e.alive=!1;e.ret=(e.op!=null||e.guard||e.rare||e.amb)?1e9:50;e.g.visible=!1;try{unb(e);if(e.amb){S.remove(e.g);const ii=ents.indexOf(e);ii>=0&&ents.splice(ii,1)}}catch(x){}if(e.op!=null&&chkOut(e.op))cfg.onOutpost(e.op)},push(x,z){px=x;pz=z},pos:()=>({x:px,z:pz}),zoom(f){if(view=="third"){td=Math.min(30,Math.max(3,td*f));try{localStorage.setItem("dba_ow_dist3",String(Math.round(td*10)/10))}catch(e){}}else zm=Math.min(1.8,Math.max(.5,zm*f))},setDist(v){td=Math.min(30,Math.max(3,v))},getDist:()=>td,ents,tg:()=>({chests,springs,nodes,pois,crypts,OUT,npcs,shrines}),project(x,z,h){const y=HT(x,z)+(h==null?8:h),m=cam.matrixWorldInverse.elements,q=cam.projectionMatrix.elements,vx=m[0]*x+m[4]*y+m[8]*z+m[12],vy=m[1]*x+m[5]*y+m[9]*z+m[13],vz=m[2]*x+m[6]*y+m[10]*z+m[14],cx=q[0]*vx+q[4]*vy+q[8]*vz+q[12],cy=q[1]*vx+q[5]*vy+q[9]*vz+q[13],cw=q[3]*vx+q[7]*vy+q[11]*vz+q[15];return{x:cx/cw,y:cy/cw,f:cw>0}},
  dispose(){cancelAnimationFrame(id);removeEventListener("keydown",kd);removeEventListener("keyup",ku);rzOff();suspendR();mm.remove();try{wxFl.remove()}catch(e){}}}}
function DBA_TPK(k){return $v.find(x=>x.key===k)||$v[0]}
window.DBA_X={TPL:DBA_TPL,MKB:DBA_MKB,R3:DBA_R3,W:DBA_W,TPK:DBA_TPK};
window.DBA_MUS=()=>fi;
var DBA_LEGO=(function(){try{return localStorage.getItem('dba_style')==='lego'}catch(e){return false}})();
var DBA_LP=[0xc91a09,0x0055bf,0xf2cd37,0x237841,0xf2f3f2,0x05131d,0xfe8a18,0xe4cd9e,0x6d6e5c,0xa0a5a9,0x81007b,0x5c3a1e,0xfc97ac,0xa5ca18,0x55a5af,0x720e0f,0x0a3463,0x184632,0xb4d2e3,0xd09168];
function DBA_LC(c){if(typeof c==='string')c=parseInt(c.replace('#',''),16);var r=c>>16&255,g=c>>8&255,b=c&255,best=DBA_LP[0],bd=1e9,i,q,d;for(i=0;i<DBA_LP.length;i++){q=DBA_LP[i];d=Math.pow((q>>16&255)-r,2)*.3+Math.pow((q>>8&255)-g,2)*.59+Math.pow((q&255)-b,2)*.11;if(d<bd){bd=d;best=q}}return best}
var DBA_AV=new WeakMap();
function DBA_AVG(tex){if(!tex||!tex.image)return null;if(DBA_AV.has(tex))return DBA_AV.get(tex);var r=null;try{var c=document.createElement('canvas');c.width=c.height=4;var x=c.getContext('2d');x.drawImage(tex.image,0,0,4,4);var d=x.getImageData(0,0,4,4).data,R=0,G=0,B=0,n=0,i;for(i=0;i<d.length;i+=4){if(d[i+3]>8){R+=d[i];G+=d[i+1];B+=d[i+2];n++}}if(n)r=(Math.round(R/n)<<16)|(Math.round(G/n)<<8)|Math.round(B/n)}catch(e){}DBA_AV.set(tex,r);return r}
var DBA_STUD={};
function DBA_STUDG(r,h){var k=r+'|'+h;return DBA_STUD[k]||(DBA_STUD[k]=new Fn(r,r,h,10,1))}
function DBA_BRICK(root){var list=[],studs=0;root.traverse(function(o){if(o.isMesh&&!(o.userData&&o.userData.lg))list.push(o)});
 list.forEach(function(o){var g=o.geometry,t=g.type,p=g.parameters||{},m=o.material,ng=null,w=0,d=0,top=0,round=false,r,rt,rb,h,r2;
  if(t==='SphereGeometry'){r=p.radius;ng=new Fn(r,r,r*1.6,12,1);w=d=r*1.5;top=r*.8;round=true}
  else if(t==='OctahedronGeometry'){r2=p.radius*1.5;ng=new rn(r2,r2,r2);w=d=r2;top=r2/2}
  else if(t==='CapsuleGeometry'){r=p.radius;h=p.length+2*r;ng=new Fn(r,r,h,12,1);w=d=r*2;top=h/2;round=true}
  else if(t==='ConeGeometry'||t==='CylinderGeometry'){rt=t==='ConeGeometry'?0:p.radiusTop;rb=t==='ConeGeometry'?p.radius:p.radiusBottom;h=p.height;
   if(rt<rb*.6||rt<.04){ng=new Fn(Math.max(rt,rb*.12)*1.2,rb*1.25,h,4,1);ng.rotateY(Math.PI/4)}
   else{ng=new Fn(rt,rb,h,Math.min(12,Math.max(8,p.radialSegments||8)),1);if(rt>=.12){w=d=rt*2;top=h/2;round=true}}}
  else if(t==='BoxGeometry'){w=p.width;d=p.depth;top=p.height/2}
  if(ng)o.geometry=ng;
  if(m&&m.isMeshStandardMaterial){var c=m.map?DBA_AVG(m.map):null;if(c==null)c=m.color.getHex();var nm=new zt({color:DBA_LC(c),roughness:.22,metalness:.02,emissive:m.emissive?m.emissive.getHex():0,emissiveIntensity:m.emissiveMap?0:(m.emissiveIntensity||0),transparent:m.transparent,opacity:m.opacity,side:m.side});o.material=nm;m=nm}
  var sc=o.scale,mn=Math.min(sc.x,sc.y,sc.z),mx=Math.max(sc.x,sc.y,sc.z);
  if(top>0&&Math.min(w,d)>.22&&mn>.35*mx&&studs<420){var sr=Math.min(.1,Math.min(w,d)*.2),sh=sr*.7,nx=Math.max(1,Math.min(6,Math.round(w/(sr*3.4)))),nz=Math.max(1,Math.min(6,Math.round(d/(sr*3.4)))),i,k,x,z;
   if(round){nx=nz=w>sr*7?2:1}
   for(i=0;i<nx;i++)for(k=0;k<nz;k++){x=(i-(nx-1)/2)*(w/nx);z=(k-(nz-1)/2)*(d/nz);var s=new fe(DBA_STUDG(sr,sh),m);s.position.set(x,top+sh/2,z);s.userData.lg=1;o.add(s);studs++}}})}
function DBA_ANIM(A,Ce){var n=performance.now(),mv=A.h&&A.h.moving,ph=n*.014,s=Math.sin(ph),c=Math.cos(ph),w=mv?1:0,i;
 if(A.hipL){A.hipL.rotation.x=w?s*.6:-.05+Math.sin(n*.002)*.02;A.hipR.rotation.x=w?-s*.6:.05-Math.sin(n*.002)*.02;A.knL.rotation.x=.1+(w?Math.max(0,-c)*.8:0)+Math.max(0,-Ce)*.5;A.knR.rotation.x=.1+(w?Math.max(0,c)*.8:0)+Math.max(0,-Ce)*.5}
 if(A.head&&A.head!==A.body){var sd=A._sd||(A._sd=Math.random()*6.28);A.head.rotation.y=Math.sin(n*.0008+sd)*.3}
 if(A.pdL)A.pdL.rotation.set(A.lx*.35,0,A.lz*.4);if(A.pdR)A.pdR.rotation.set(A.rx*.35,0,A.rz*.4);
 if(A.tailG)A.tailG.rotation.y=Math.sin(n*.003)*.35+(w?s*.25:0);
 if(A.skirt)for(i=0;i<A.skirt.length;i++){var ka=(i-3)*.42;A.skirt[i].rotation.x=.06+Math.sin(n*.003+i)*.03+(w?s*.25*Math.cos(ka):0)+Math.abs(Ce)*.3*Math.cos(ka)}
 if(A.cape)for(i=0;i<A.cape.length;i++)A.cape[i].rotation.x=.12+Math.sin(n*.003+i*.7)*.035*(i+1)+(w?.25:0)+Math.max(0,Ce)*.4}
function WOW_TEX(T,k,cv){var S=512,Z=DBAQ.htex,c=cv||document.createElement('canvas');c.width=c.height=Z;var x=c.getContext('2d'),i,r=Math.random;x.scale(Z/S,Z/S);
 if(k=='metal'){var g=x.createLinearGradient(0,0,S,S);g.addColorStop(0,'#f4f4f8');g.addColorStop(.5,'#dcdce2');g.addColorStop(1,'#eeeef2');x.fillStyle=g;x.fillRect(0,0,S,S);
  x.lineWidth=1;for(i=0;i<420;i++){var y=r()*S,v=150+r()*100|0;x.strokeStyle='rgba('+v+','+v+','+v+','+(.08+r()*.12)+')';x.beginPath();x.moveTo(r()*S*.5,y);x.lineTo(S*(.5+r()*.5),y+(r()-.5)*6);x.stroke()}
  x.strokeStyle='rgba(70,70,80,.55)';x.lineWidth=7;x.strokeRect(26,26,S-52,S-52);x.strokeStyle='rgba(255,255,255,.55)';x.lineWidth=2;x.strokeRect(34,34,S-68,S-68);
  x.strokeStyle='rgba(90,90,105,.35)';x.lineWidth=3;x.beginPath();x.moveTo(S/2,70);x.lineTo(S-90,S/2);x.lineTo(S/2,S-70);x.lineTo(90,S/2);x.closePath();x.stroke();x.beginPath();x.arc(S/2,S/2,60,0,7);x.stroke();
  [[44,44],[S-44,44],[44,S-44],[S-44,S-44],[S/2,44],[S/2,S-44],[44,S/2],[S-44,S/2]].forEach(function(p){var rg=x.createRadialGradient(p[0]-3,p[1]-3,1,p[0],p[1],11);rg.addColorStop(0,'#ffffff');rg.addColorStop(.6,'#a8a8b4');rg.addColorStop(1,'#55555f');x.fillStyle=rg;x.beginPath();x.arc(p[0],p[1],10,0,7);x.fill()});
  x.strokeStyle='rgba(60,60,70,.3)';for(i=0;i<14;i++){x.beginPath();x.moveTo(r()*S,r()*S);x.lineTo(r()*S,r()*S);x.stroke()}
  for(i=0;i<1400;i++){var w=150+r()*100|0;x.fillStyle='rgba('+w+','+w+','+w+',.25)';x.fillRect(r()*S,r()*S,1+r()*2,1+r()*2)}}
 else{x.fillStyle='#f6f4f0';x.fillRect(0,0,S,S);x.fillStyle='rgba(90,80,70,.13)';for(i=0;i<S;i+=4){x.fillRect(i,0,1,S);x.fillRect(0,i,S,1)}
  x.fillStyle='rgba(255,255,255,.18)';for(i=0;i<S;i+=8)x.fillRect(i+1,0,2,S);
  x.setLineDash([10,7]);x.strokeStyle='rgba(60,50,40,.45)';x.lineWidth=3;x.strokeRect(22,22,S-44,S-44);x.setLineDash([]);
  x.strokeStyle='rgba(60,50,40,.14)';x.lineWidth=2;for(i=-S;i<S*2;i+=64){x.beginPath();x.moveTo(i,0);x.lineTo(i+S,S);x.stroke();x.beginPath();x.moveTo(i+S,0);x.lineTo(i,S);x.stroke()}
  for(i=0;i<1800;i++){var q=140+r()*110|0;x.fillStyle='rgba('+q+','+q+','+q+',.22)';x.fillRect(r()*S,r()*S,1+r()*2,1+r()*2)}}
 if(cv)return;var t=new T.Og(c);t.wrapS=t.wrapT=1000;t.anisotropy=DBAQ.an;t.__cv=c;t.__re=function(){WOW_TEX(T,k,c);t.needsUpdate=true};return t}
var WOW_MATS=null;
function DBA_RETEX(force){try{if(!WOW_MATS)return;var seen=[];for(var k in WOW_MATS){var m=WOW_MATS[k];['map','bumpMap'].forEach(function(q){var t=m[q];if(!t||seen.indexOf(t)>=0)return;seen.push(t);var bad=!!force;if(!bad&&t.__cv){try{var cx=t.__cv.getContext('2d'),W=t.__cv.width,d1=cx.getImageData(W>>1,W>>1,1,1).data,d2=cx.getImageData(3,3,1,1).data,d3=cx.getImageData(W-4,W-4,1,1).data;bad=!d1[3]&&!d2[3]&&!d3[3]}catch(e){}}if(bad){if(t.__re)t.__re();else t.needsUpdate=true}});if(force)m.needsUpdate=true}}catch(e){}}
window.DBA_RETEX=DBA_RETEX;
function WOW_build(T,A,pv){
 var G=A.appearance||{};
 if(!G.race||!WOW_RACES[G.race]){
  if(pv){G=WOW_ensure({sex:Math.random()<.5?"male":"female"})}
  else{WOW_ensure(G);if(!A.appearance)A.appearance=G}}
 var R=WOW_RACES[G.race],ck=A.classKey||A.key,
  CL=WOW_CLS[ck]||{r:"Guerriero",arm:A.arch==="ranged"||A.arch==="healer"?"cloth":"plate",robe:A.arch==="healer"||A.arch==="ranged"?1:0,pa:"small",hm:A.helmet,c2:10199218},
  hm=CL.hm||A.helmet,W=G.sex==="female",
  C=function(h){return new T.Rt(h)},
  sh=function(c,f){return c.clone().multiplyScalar(f)},
  S=function(r,w,h,a,b,c,d){if(DBA_LEGO&&a===undefined&&b===undefined)return new T.Fn(r,r,r*1.5,Math.max(8,Math.round(8*DBAQ.seg*.8)),1);return new T.Tt(r,Math.round((w||6)*DBAQ.seg),Math.round((h||4)*DBAQ.seg),a,b,c,d)},
  Bx=function(x,y,z){return new T.rn(x,y,z)},
  Co=function(r,h,s){s=s||5;return new T.Gt(r,h,s>4?Math.round(s*DBAQ.seg):s)},
  Cy=function(a,b,h,s){s=s||6;if(DBA_LEGO){if(LGT&&(LGT.charAt(0)==="t"||LGT.charAt(0)==="s")&&a<.3&&h>.12)return new T.rn(a*1.9,h,a*1.9);if(a>.3){var g4=new T.Fn(a*1.3,b*1.3,h,4,1);g4.rotateY(Math.PI/4);return g4}return new T.Fn(a,b,h,s>4?Math.max(8,Math.round(s*DBAQ.seg*.7)):s,1)}return new T.Fn(a,b,h,s>4?Math.round(s*DBAQ.seg):s,1)},
  Ic=function(r){return DBA_LEGO?new T.rn(r*1.5,r*1.5,r*1.5):new T.La(r,DBAQ.seg>=2?1:0)},
  Oc=function(r){return new T.Ad(r,0)},
  PI=Math.PI,
  cls=C(A.color||"#cccccc"),skin=C(G.skinColor||15778208),hair=C(G.hairColor||1710618),
  furC=G.skinColor||15778208,
  eyeHex=CL.glow&&hm==="horned"&&CL.dark?CL.glow:(R.eye!=null?R.eye:(G.eyeColor||3815994)),
  c2=C(CL.c2||10199218),
  steel=C(CL.dark?3815994:(CL.stone?9139029:11975116)),steelD=C(CL.dark?1710624:5326430),
  gold=C(15246657),wood=C(7029795),leath=C(7036462),leathD=C(4010514),bone=C(14078648),ivory=C(15724490),dark=C(1118481),
  plate=CL.arm==="plate",bare=CL.arm==="bare",cloth=CL.arm==="cloth",leather=CL.arm==="leather",
  bw=Math.max(.8,Math.min(1.3,G.widthMul||1))*(A.form==="tank"?1.1:1)*(W?.92:1)*.88*((WOW_PROP[R.k]||{bwm:1}).bwm),
  hun=R.hunch||0,
  armCol=plate?steel:(cloth?sh(cls,.8):(leather?leathD:skin)),
  metal=plate?(CL.gold?gold:steel):steel,
  stat={l:[],g:[],ox:0,oy:0,oz:0,k:1},head={l:[],g:[],ox:0,oy:0,oz:0,k:1},
  aL={l:[],g:[],ox:0,oy:0,oz:0,k:1},aR={l:[],g:[],ox:0,oy:0,oz:0,k:1};
 var EQ=(A._eq&&Object.keys(A._eq).length)?A._eq:(window.DBA_EQ?DBA_EQ(A):{}),iw=EQ.weapon,ia=EQ.armor,ih=EQ.head,ROBE=CL.robe,PA=CL.pa,ask=null,hsk=null,RC=null,mail=false;
 if(ia){ask=WOW_skin(T,ia);var ak=WOW_AK[ask.k]||"plate";mail=ak==="mail";plate=ak==="plate"||mail;cloth=ak==="cloth";leather=ak==="leather";bare=false;ROBE=cloth?1:0;steel=ask.p;steelD=sh(ask.p,.55);metal=ask.t>=3?C(15246657).lerp(ask.p,.45):ask.p;armCol=plate||cloth?ask.p:ask.s;RC=ask.p;PA=plate?["round","big","spiked","fur","small","huge"][ask.h%6]:(leather?["small","fur","none","spiked"][ask.h%4]:["small","round","leaf","bolt"][ask.h%4])}
 if(ih){hsk=WOW_skin(T,ih);hm=WOW_HK[hsk.k]||"helmet"}
 var ISH=EQ.shoulders,shCol=null,ssk=null,OFH=EQ.offhand,CSH=CL.sh,ohsk=null;
 if(ISH){ssk=WOW_skin(T,ISH);var sak=(window.DBA_ARMK&&DBA_ARMK[ISH.classKey])||"plate";shCol=ssk.p;PA=(sak==="plate"?["round","big","spiked","big","small","huge"]:sak==="mail"?["round","big","round","small"]:sak==="leather"?["small","fur","small","spiked"]:["small","round","leaf","small"])[ssk.h%(sak==="plate"?6:4)]}
 if(OFH&&OFH.ohk==="shield"){ohsk=WOW_skin(T,OFH);CSH=(ohsk.k==="Targa"||ohsk.k==="Brocchiero")?"round":(ohsk.k==="Scudo a Torre"?"tower":"kite")}
 else if(OFH&&OFH.ohk==="held")ohsk=WOW_skin(T,OFH);
 if(EQ.mainhand&&EQ.mainhand.hands==="two"&&!(OFH&&OFH.ohk==="shield"))CSH=null;
 var NK=A.naked!=null?!!A.naked:!!(A.id&&window.__dbaGetParty&&(function(){try{return __dbaGetParty().some(function(p){return p.id===A.id})}catch(e){return false}})()),NA=NK&&!ia;
 if(NK){if(!ia){plate=cloth=leather=mail=false;bare=true;ROBE=0;armCol=skin;if(!ISH)PA="none"}if(!ih){hsk=null;hm="none"}if(!OFH)CSH=null}
 if(A.hideHelm){hsk=null;hm="none"}
 var PR=WOW_PROP[R.k]||null,HUM=!!PR,LIFT=HUM?PR.lift:0,HIPY=.53+LIFT,KNY=.3+LIFT*.5,DIG=HUM&&!!(R.hoof||R.claws),KZ=DIG?(HIPY-KNY)*Math.tan(.38):0;var AFL=false,LGT=null;function add(B,geo,col,p,r,s,glow){(glow?B.g:B.l).push({geo:geo,col:col,p:p||[0,0,0],r:r,s:s,ox:B.ox,oy:B.oy,oz:B.oz,k:B.k,fa:AFL,lg:LGT})}
 var hk=.4*R.hd+.08,hy=(HUM?1.04+.3*bw*(PR.cy||1)+.4*R.hd-hun*.5:1.1+.32*R.hd-hun*.5+.3),hz=hun;
 head.ox=0;head.oy=hy;head.oz=hz;head.k=R.hd;
 // ---------- LEGS ----------
 var lx=.18*bw,pandaLim=R.panda?dark:null;
 if(ROBE){
  add(stat,Cy(.34*bw,.6*bw,.62,7),RC||sh(cls,.55),[0,.31,0]);
  add(stat,Cy(.61*bw,.62*bw,.06,7),ask&&ask.t>=1?ask.acc:C(CL.trim||13152348),[0,.04,0]);
  add(stat,Co(.12*bw,.3,3),sh(cls,.45),[0,.2,.46*bw],[PI,0,0])}
 else{
  for(var sx=-1;sx<=1;sx+=2){
   var legC=plate?steel:(leather?leathD:(cloth?sh(cls,.6):skin));
   if(pandaLim)legC=dark;
   if(bare&&!pandaLim)legC=NA?skin:sh(cls,.55);
   LGT="t"+sx;var thH=HIPY-KNY+.11;if(DIG){var thL=(HIPY-KNY)/Math.cos(.38)+.11;add(stat,Cy(.17*bw,.115*bw,thL,10),legC,[sx*lx,HIPY-(thL-.11)/2*Math.cos(.38)-.055,(thL-.11)/2*Math.sin(.38)+.03],[-.38,0,0])}else add(stat,Cy((HUM?.17:.15)*bw,(HUM?.115:.12)*bw,thH,HUM?10:6),legC,[sx*lx,HIPY-thH/2,0]);add(stat,Cy(.1*bw,.1*bw,.2*bw,10),legC,[sx*lx,HIPY,0],[0,0,PI/2]);LGT="s"+sx;
   if(DIG){var shL=Math.sqrt(KZ*KZ+(KNY-.12)*(KNY-.12));add(stat,Cy(.11*bw,.075*bw,shL+.04,10),R.fur?C(furC):legC,[sx*lx,(KNY+.12)/2,KZ/2],[Math.atan2(KZ,KNY-.12),0,0])}else add(stat,Cy((HUM?.115:.12)*bw,(HUM?.08:.1)*bw,KNY,HUM?10:6),plate?steel:(R.fur?C(furC):legC),[sx*lx,KNY/2,0]);add(stat,Cy(.095*bw,.095*bw,.17*bw,10),plate?steel:(R.fur?C(furC):legC),[sx*lx,KNY,KZ],[0,0,PI/2]);
   if(plate)add(stat,S(.1*bw,5,4),metal,[sx*lx,KNY+.04,KZ+.1],0,[1,.9,.8])}}
 for(var sx2=-1;sx2<=1;sx2+=2){LGT="s"+sx2;
  if(R.hoof){add(stat,Cy(.09*bw,.12*bw,.2,5),dark,[sx2*lx,.1,.02]);add(stat,Co(.06,.1,4),dark,[sx2*lx,.03,.1],[PI/2,0,0])}
  else add(stat,S(.15*bw,9,6),NA?skin:(plate?steelD:(leather?leathD:sh(cls,.35))),[sx2*lx,.075,.07],0,[1.05,.78,2.05]);
  if(R.claws&&!ROBE){for(var cc=-1;cc<=1;cc++)add(stat,Co(.02,.08,3),ivory,[sx2*lx+cc*.05,.04,.24],[PI/2,0,0])}}
 LGT=null;
 function TOR(col,m){m=m||1;if((R.hunch||0)>.15)add(stat,S(.36*bw*m,12,9),col,[0,1.0,0],0,[1.0,.62,.75]);var cx=PR.cx||1.02,cy=PR.cy||1,bl=PR.bl||1;add(stat,S(.5*bw*m,16,10),col,[0,1.0,(R.hunch||0)*(PR.hz||.7)],[(R.hunch||0)*(PR.ht||1.4),0,0],[W?cx*.9:cx,.6*cy,.68*(PR.cz||1)]);add(stat,Cy(.33*bw*m*bl,(W?.25:.29)*bw*m*bl,.3,10),col,[0,.76,0],0,[1,1,.76]);add(stat,S(.31*bw*m*bl,12,8),col,[0,.62,0],0,[W?1.28:1,.6,.78]);for(var sd=-1;sd<=1;sd+=2)add(stat,S(.15*bw*m,9,7),col,[sd*(W?.43:.47)*bw*m*(cx/1.02),1.0+.12*cy,(R.hunch||0)*.5],0,[1,.95,.95])}
 // ---------- TORSO OVERLAYS ----------
 if(!NA){add(stat,Cy(.42*bw,.42*bw,.1,6),leathD,[0,.52,0],0,[1,1,.82]);
 add(stat,Bx(.1,.1,.04),gold,[0,.52,.34*bw])}
 if(plate){
  if(HUM)TOR(metal,1.06);else add(stat,Cy(.51*bw,.4*bw,.4,6),metal,[0,.99,0],0,[1,1,.82]);
  add(stat,Cy(.3*bw,.34*bw,.12,6),steelD,[0,1.2,0],0,[1,1,.9]);
  add(stat,Co(.12,.26,3),CL.gold?gold:steelD,[0,1.0,.34*bw],[PI/2,0,0],[1,1,.3]);
  if(CL.stone){for(var q=0;q<3;q++)add(stat,Ic(.12),C(7041638),[(q-1)*.2,.78,.34*bw])}}
 if(ask&&plate){var v4=(ask.h>>>4)%3;if(v4===1)add(stat,Bx(.07,.5,.05),ask.s,[0,.99,.37*bw]);else if(v4===2){for(var bb=0;bb<3;bb++)add(stat,Cy(.42*bw,.4*bw,.08,6),ask.s,[0,.86-bb*.09,0],0,[1,1,.85])}if(mail)for(var st=0;st<6;st++)add(stat,Ic(.03),sh(ask.p,.5),[(st%3-1)*.14,1.04-(st>2?.14:0),.37*bw])}
 else if(leather){
  if(HUM)TOR(ask?ask.s:leath);else add(stat,Cy(.5*bw,.41*bw,.46,6),ask?ask.s:leath,[0,.98,0],0,[1,1,.82]);
  add(stat,Bx(.06,.4,.03),leathD,[0,.96,.36*bw]);
  add(stat,Cy(.43*bw,.43*bw,.07,6),sh(c2,1),[0,.76,0],0,[1,1,.84])}
 else if(bare){
  if(HUM)TOR(R.panda?C(16118250):skin);else add(stat,Cy(.5*bw,.41*bw,.46,6),R.panda?C(16118250):skin,[0,.99,0],0,[1,1,.78]);
  if(!NA){add(stat,Bx(.07,.55,.03),c2,[-.18*bw,1.0,.34*bw],[0,0,.5]);
  add(stat,Bx(.07,.55,.03),c2,[.18*bw,1.0,.34*bw],[0,0,-.5]);
  if(CL.paint)add(stat,Bx(.3,.05,.03),C(13369344),[0,1.12,.33*bw]);
  if(CL.sash)add(stat,Cy(.43*bw,.43*bw,.14,6),c2,[0,.6,0],0,[1,1,.84])}}
 else if(ask&&cloth){if(HUM)TOR(ask.p);else add(stat,Cy(.5*bw,.41*bw,.46,6),ask.p,[0,.98,0],0,[1,1,.82]);add(stat,Bx(.08,.5,.03),ask.s,[0,.98,.36*bw]);add(stat,Cy(.43*bw,.43*bw,.07,6),ask.s,[0,.76,0],0,[1,1,.84])}
 else if(CL.tabard&&!NA){
  add(stat,Bx(.3,.7,.04),C(16316664),[0,.7,.36*bw]);add(stat,Bx(.06,.3,.045),gold,[0,.8,.37*bw]);add(stat,Bx(.2,.06,.045),gold,[0,.84,.37*bw])}
 if(ask){if(ask.t>=2)add(stat,Oc(.09),ask.acc,[0,1.02,.38*bw],0,[1,1.4,.5],1);if(ask.t>=3)add(stat,Cy(.3*bw,.3*bw,.03,6),ask.acc,[0,1.2,0],0,[1,1,.9],1)}
 if(CL.sash&&!bare&&!NA)add(stat,Cy(.43*bw,.43*bw,.14,6),c2,[0,.6,0],0,[1,1,.84]);
 if(CL.runes&&!NA){for(var rq=0;rq<3;rq++)add(stat,Bx(.05,.12,.03),C(CL.glow),[(rq-1)*.15,.98,.36*bw],0,0,1)}
 if(CL.skull&&!NA){add(stat,Ic(.09),bone,[.3*bw,.52,.3]);add(stat,Bx(.03,.03,.02),dark,[.3*bw-.03,.53,.38]);add(stat,Bx(.03,.03,.02),dark,[.3*bw+.03,.53,.38])}
 if(CL.quiver&&!NA){add(stat,Cy(.09,.08,.55,5),leath,[.2,1.0,-.34],[.3,0,-.4]);for(var qa=0;qa<3;qa++)add(stat,Co(.025,.12,3),ivory,[.1+qa*.04,1.32,-.42],[.3,0,-.4])}
 if(CL.totem&&!NA){add(stat,Cy(.03,.03,.5,5),wood,[-.25,.95,-.36]);add(stat,Oc(.09),C(3646463),[-.25,1.25,-.36],0,0,1)}
 if(R.gnome){var gbC=plate?metal:(leather?(ask?ask.s:leath):(bare?skin:(ask&&cloth?ask.p:(cloth?sh(cls,.8):cls))));add(stat,S(.37*bw,9,7),gbC,[0,.8,.2],0,[1,.95,.85])}
 // cape
 if(CL.cape&&!NA){
  var capC=CL.dark?C(2763322):(CL.gold?C(16316664):sh(c2,.9));
  add(stat,Bx(.66*bw,.5,.04),capC,[0,1.0,-.3*bw],[.1,0,0]);
  add(stat,Bx(.54*bw,.4,.04),capC,[0,.62,-.34*bw],[.16,0,0]);
  add(stat,Co(.27*bw,.3,4),capC,[0,.3,-.36*bw],[PI+.16,PI/4,0],[1,1,.2])}
 // tail
 LGT="tl";
 if(R.tail==="hoof"){add(stat,Cy(.05,.06,.3,4),skin,[0,.55,-.32],[-.6,0,0]);add(stat,Cy(.04,.05,.3,4),skin,[0,.42,-.52],[-.2,0,0]);add(stat,Co(.07,.14,4),dark,[0,.25,-.55],[PI,0,0])}
 if(R.tail==="fur"){add(stat,Co(.13,.6,5),C(furC),[0,.5,-.5],[-2.2,0,0])}
 if(R.tail==="tuft"){add(stat,Cy(.03,.04,.5,4),C(furC),[0,.45,-.35],[-.3,0,0]);add(stat,Ic(.1),dark,[0,.2,-.4])}
 if(R.tail==="nub")add(stat,S(.1,5,4),C(16118250),[0,.55,-.34]);
 LGT=null;
 // ---------- BUSTO FEMMINILE ----------
 if(W){var bC=plate?metal:(leather?(ask?ask.s:leath):(bare?(R.panda?C(16118250):skin):(ask&&cloth?ask.p:(cloth?sh(cls,.8):cls))));
  if(!HUM)add(stat,S(.3*bw,10,8),bC,[0,1.06,.31*bw],0,[1.15,.62,.42]);
  for(var bsx=-1;bsx<=1;bsx+=2)add(stat,WOW_BUST(T,(HUM?.15:.17)*bw,bsx),bC,HUM?[bsx*.115*bw,.96,.26*bw]:[bsx*.125*bw,1.02,.33*bw])}
 // ---------- PAULDRONS ----------
 for(var ps=-1;ps<=1;ps+=2){
  var px=ps*.6*bw,py=1.08,pt=PA;LGT="p"+ps;
  if(ask&&ask.t>=4)add(stat,Co(.07,.3,4),ask.acc,[px,py+.3,0],[0,0,-ps*.2],0,1);
  if(pt==="round"||pt==="big"||pt==="huge"||pt==="big1"||pt==="spiked"||pt==="small"){
   var pr=pt==="huge"?.34:(pt==="big"||pt==="big1"?.28:(pt==="small"?.18:.22));
   if(pt==="big1"&&ps===1)pr=.16;
   add(stat,Cy(pr*.6,pr*.85,pr*.7,10),shCol?shCol:(PA==="small"?(cloth?sh(cls,.85):leathD):(CL.stone?C(8021578):metal)),[px+ps*pr*.05,py+.01,0],[0,0,-ps*.12],[1,1,1.05]);if(ssk&&ssk.t>=2)add(stat,Oc(.05),ssk.acc,[px,py+.14,.05],0,0,1);
   if(pt==="big"||pt==="huge")add(stat,Co(pr*.45,pr*.8,4),CL.gold?gold:steelD,[px+ps*pr*.5,py+.06,0],[0,0,-ps*1.2]);
   if(pt==="spiked"){add(stat,Co(.07,.32,4),steelD,[px+ps*.1,py+.2,0],[0,0,-ps*.5]);add(stat,Co(.05,.2,4),steelD,[px+ps*.05,py+.12,.14],[.7,0,-ps*.3])}}
  else if(pt==="fur"){add(stat,S(.26,5,4),C(8018490),[px,py,0],0,[1.2,.7,1.1]);for(var ft=0;ft<4;ft++)add(stat,Co(.05,.16,3),C(8018490),[px+ps*(.1+ft*.04),py-.05,.1-ft*.08],[0,0,ps*2.2])}
  else if(pt==="leaf"){for(var lf=0;lf<3;lf++)add(stat,Co(.08,.3,4),C(5929525+lf*1600),[px+ps*lf*.07,py+.04-lf*.02,0],[0,0,-ps*(.5+lf*.5)],[1,1,.5])}
  else if(pt==="skull"){add(stat,Ic(.15),bone,[px,py+.08,0]);add(stat,Bx(.04,.04,.03),dark,[px-.04,py+.1,.13]);add(stat,Bx(.04,.04,.03),dark,[px+.04,py+.1,.13])}
  else if(pt==="ice"){add(stat,Oc(.16),C(10475775),[px,py+.1,0],0,[1,1.5,1],0);add(stat,Co(.06,.25,4),C(14281727),[px+ps*.1,py+.28,0],[0,0,-ps*.3])}
  else if(pt==="bolt"){add(stat,S(.18,5,4),leathD,[px,py,0],0,[1.1,.7,1]);add(stat,Co(.04,.3,3),C(3646463),[px+ps*.08,py+.22,0],[0,0,-ps*.5],0,1)}
  else{add(stat,Cy(.12*bw,.13*bw,.1,10),armCol,[ps*.56*bw,py+.02,0])}
  if(plate)for(var lm=1;lm<=2;lm++)add(stat,Cy(.2-lm*.025,.17-lm*.025,.045,8),lm==1?metal:steelD,[px+ps*lm*.02,py-.1-lm*.065,0],[0,0,ps*.12],[1.1,1,1.05]);
 }
 LGT=null;
 // ---------- ARMS ----------
 for(var as=-1;as<=1;as+=2){
  var B=as<0?aL:aR,sl=armCol,aw=R.gnome?.78:1;
  if(R.panda)sl=dark;
  add(B,Cy(.13*bw*aw,.11*bw*aw,.34,6),sl,[0,-.18,0]);add(B,Cy(.1*bw*aw,.1*bw*aw,.17*bw*aw,10),sl,[0,-.02,0],[0,0,PI/2]);
  add(B,Cy(.11*bw*aw,.09*bw*aw,.28,6),plate?steelD:(leather?leathD:(bare?(R.panda?dark:skin):sh(cls,.7))),[0,-.4,0]);
  add(B,Cy(.085*bw*aw,.085*bw*aw,.15*bw*aw,10),plate?steelD:(leather?leathD:(bare?(R.panda?dark:skin):sh(cls,.7))),[0,-.345,0],[0,0,PI/2]);
  if(plate)add(B,Cy(.125*bw,.1*bw,.18,6),CL.gold?gold:steel,[0,-.43,0]);
  if(DBA_LEGO)add(B,Cy(.09*bw,.09*bw,.13,10),R.panda?dark:(plate?steelD:skin),[0,-.56,.01],[PI/2,0,0]);else add(B,Cy(.085*bw,.062*bw,.15,7),R.panda?dark:(plate?steelD:skin),[0,-.56,.02],[.12,0,0],[1.15,1,.85]);
  var holdsW=(NK&&!iw)?false:as>0?!!(A.weapon||iw):!!(CL.dual||(iw&&WOW_skin(T,iw).k==="Pugnali Gemelli"));
  if(!holdsW){for(var fg=-1.5;fg<=1.5;fg++)add(B,Cy(.017*bw,.014*bw,.09,5),R.panda?dark:(plate?steelD:skin),[fg*.032*bw,-.62,.05],[.7,0,0]);
  add(B,Cy(.02*bw,.016*bw,.08,5),R.panda?dark:(plate?steelD:skin),[.07*bw,-.58,.04],[.5,0,.8])}
  if(R.claws){for(var cl=-1;cl<=1;cl++)add(B,Co(.02,.09,3),ivory,[cl*.04,-.64,.05],[PI-.4,0,0])}}
 AFL=true;
 // shield (left arm)
 if(CSH){
  var shC=ohsk&&OFH.ohk==="shield"?ohsk.p:(CL.gold?gold:(CL.stone?C(8021578):steel)),sc=Math.cos(2.05),ss=Math.sin(2.05),W0=[.06,.26,.38];
  var shp=function(w){return[w[0],w[1]*sc-w[2]*ss-.34,w[1]*ss+w[2]*sc]};
  var sA=function(geo,col,o,r,sx){add(aL,geo,col,shp([W0[0]+o[0],W0[1]+o[1],W0[2]+o[2]]),[(r?r[0]:0)+2.05,r?r[1]:0,r?r[2]:0],sx)};
  if(CSH==="round"){sA(Cy(.3,.3,.07,8),shC,[0,0,0],[PI/2,0,0]);sA(Ic(.08),ohsk&&OFH.ohk==="shield"?ohsk.acc:gold,[0,0,.06])}
  else if(CSH==="kite"){sA(Bx(.5,.34,.07),shC,[0,.08,0]);sA(Co(.25,.42,4),shC,[0,-.28,0],[0,PI/4,PI],[1,1,.28]);sA(Ic(.07),CL.gold?C(16316664):gold,[0,0,.05])}
  else{sA(Bx(.5,.68,.08),shC,[0,0,0]);sA(Bx(.42,.1,.09),gold,[0,.17,0]);sA(Co(.08,.2,4),steelD,[0,.02,.1],[PI/2,0,0])}
  sA(Cy(.022,.022,.22,5),leathD,[0,-.16,-.17],[0,0,PI/2]);sA(Bx(.16,.035,.035),leathD,[0,-.2,-.2])}
 if(OFH&&OFH.ohk==="held"&&ohsk){var hb=ohsk.k;if(hb==="Tomo"||hb==="Grimorio"){add(aL,Bx(.26,.34,.07),ohsk.p,[.02,-.72,.2],[.3,0,0]);add(aL,Bx(.04,.34,.08),ohsk.s,[-.1,-.72,.2],[.3,0,0]);add(aL,Ic(.05),ohsk.acc,[.04,-.72,.25],0,0,1)}else{add(aL,S(.11,8,6),ohsk.acc,[0,-.7,.14],0,0,1);add(aL,Cy(.07,.05,.05,6),ohsk.s,[0,-.8,.14])}}
 // ---------- WEAPON (right arm; origin = old weapon group (0,-.5,.1)) ----------
 var wk=A.weapon,wo=[0,-.56,.02],isk=null,dualW=CL.dual;
 if(iw){isk=WOW_skin(T,iw);wk=WOW_WK[isk.k]||wk;dualW=isk.k==="Pugnali Gemelli"}
 if(NK&&!iw){wk="none";dualW=false}
 var wGlow=C(CL.glow||A.color||"#88ccff"),
  RB=isk?C(13420768).lerp(isk.p,.55):C(CL.dark?9145248:(wk==="katana"?15263992:(wk==="dagger"?14277081:13420768))),
  RG=isk?(isk.t>=3?isk.acc:isk.s):(wk==="katana"?dark:(CL.dark?steelD:gold)),
  RH=isk?isk.d:wood,RM=isk?isk.acc:wGlow,RS=isk?isk.p:(CL.stone?C(8021578):steel);
 var HPd=window.__HOLD||DBA_HOLD,HP=HPd[wk],twoH=!!(HP&&!CSH&&!dualW),WA=(wk==="bow"&&twoH)?aL:aR;var TL={staff:.55,spear:.55,scythe:.5,bow:.12,crossbow:1.45,sword:1,katana:1,scimitar:1,greatsword:1.15,dagger:.9,axe:.9,hammer:.9,mace:.9},tl=twoH?HP.tl:(TL[wk]||.9),ct=Math.cos(tl),sn=Math.sin(tl);
 function wa(geo,col,p,r,s,glow){add(WA,geo,col,[wo[0]+p[0],wo[1]+p[1]*ct-p[2]*sn,wo[2]+p[1]*sn+p[2]*ct],r?[r[0]+tl,r[1],r[2]]:[tl,0,0],s,glow)}
 if(isk){aR.k=1.25;aR.oy=.14;aR.oz=-.005}
 if(wk==="staff"){
  wa(Cy(.04,.05,1.5,5),RH,[0,.3,0]);
  if(CL.skull&&!isk){wa(Ic(.14),bone,[0,1.1,0]);wa(Bx(.04,.04,.03),dark,[-.05,1.12,.12]);wa(Bx(.04,.04,.03),dark,[.05,1.12,.12]);wa(Co(.02,.12,3),wGlow,[0,1.22,0],0,0,1)}
  else if(CL.ice&&!isk){wa(Oc(.13),C(10475775),[0,1.12,0],0,[1,1.9,1],1);wa(Co(.03,.2,3),C(14281727),[.13,1.0,0],[0,0,-.8]);wa(Co(.03,.2,3),C(14281727),[-.13,1.0,0],[0,0,.8])}
  else if(CL.bolt&&!isk){wa(Oc(.13),C(3646463),[0,1.1,0],0,0,1);wa(Co(.03,.25,3),C(16770648),[0,1.32,0],[0,0,.3],0,1)}
  else{var np=isk?3+isk.h%3:3;wa(isk&&isk.h%2?Ic(.14):Oc(.15),RM,[0,1.1,0],0,0,1);for(var pg=0;pg<np;pg++){var an=pg/np*PI*2;wa(Co(.03,.25,3),isk?isk.s:gold,[Math.cos(an)*.12,.98,Math.sin(an)*.12],[Math.sin(an)*.35,0,-Math.cos(an)*.35])}}}
 else if(wk==="sword"||wk==="katana"){
  var kt=wk==="katana",bl=isk?.85+(isk.h%30)/100:1;
  wa(Bx(kt?.05:.1,.72*bl,.03),RB,[0,.14+.36*bl,0]);
  wa(Co(kt?.035:.07,.2,4),RB,[0,.14+.72*bl+.1,0],0,[1,1,.4]);
  wa(Bx(kt?.16:(isk&&isk.h%2?.46:.34),.07,.09),RG,[0,.1,0]);
  wa(Cy(.03,.03,.22,5),leathD,[0,-.03,0]);wa(Ic(.05),RG,[0,-.17,0])}
 else if(wk==="scimitar"){
  wa(Bx(.1,.3,.03),RB,[0,.3,0]);wa(Bx(.1,.3,.03),RB,[.03,.58,0],[0,0,-.15]);wa(Bx(.1,.3,.03),RB,[.09,.84,0],[0,0,-.35]);wa(Co(.06,.2,4),RB,[.19,1.04,0],[0,0,-.7],[1,1,.4]);
  wa(Bx(.3,.06,.08),RG,[0,.1,0]);wa(Cy(.03,.03,.2,5),leathD,[0,-.03,0]);wa(Ic(.05),RG,[0,-.16,0])}
 else if(wk==="greatsword"){
  wa(Bx(.16,1.25,.04),RB,[0,.8,0]);
  wa(Co(.1,.32,4),RB,[0,1.58,0],0,[1,1,.35]);
  wa(Bx(.5,.09,.1),RG,[0,.14,0]);wa(Cy(.035,.035,.3,5),leathD,[0,-.05,0]);wa(Ic(.06),RG,[0,-.22,0]);
  if(CL.runes){for(var rn2=0;rn2<4;rn2++)wa(Bx(.03,.1,.05),C(CL.glow),[0,.35+rn2*.25,0],0,0,1)}}
 else if(wk==="dagger"){
  wa(Bx(.07,.38,.02),RB,[0,.3,0]);wa(Co(.05,.14,4),RB,[0,.57,0],0,[1,1,.4]);wa(Bx(.18,.05,.07),isk?RG:dark,[0,.1,0]);wa(Cy(.025,.025,.16,5),leathD,[0,0,0])}
 else if(wk==="axe"){
  wa(Cy(.04,.045,1.05,5),RH,[0,.3,0]);
  wa(Bx(.1,.3,.06),isk?RS:steel,[0,.68,0]);
  for(var as2=-1;as2<=1;as2+=2){wa(Co(.17,.26,3),RB,[as2*.2,.68,0],[0,0,-as2*PI/2],[1,1,.35])}
  wa(Co(.04,.14,4),steelD,[0,.88,0])}
 else if(wk==="hammer"){
  wa(Cy(.04,.045,1.05,5),RH,[0,.3,0]);wa(Bx(.34,.26,.26),RS,[0,.85,0]);
  wa(Co(.05,.12,4),steelD,[.2,.85,0],[0,0,-PI/2]);wa(Co(.05,.12,4),steelD,[-.2,.85,0],[0,0,PI/2])}
 else if(wk==="spear"){
  wa(Cy(.03,.04,1.8,5),RH,[0,.45,0]);wa(Co(.08,.42,4),RB,[0,1.55,0],0,[1,1,.35]);
  wa(Bx(.14,.04,.04),isk?RG:gold,[0,1.32,0]);wa(Co(.06,.22,3),isk?isk.acc:C(13369344),[0,1.18,-.05],[PI,0,0],[1,1,.2])}
 else if(wk==="scythe"){
  wa(Cy(.035,.045,1.7,5),RH,[0,.4,0]);wa(Bx(.5,.07,.03),RB,[.25,1.22,0],[0,0,-.15]);wa(Bx(.3,.06,.03),RB,[.55,1.1,0],[0,0,-.7]);wa(Co(.05,.2,3),RB,[.66,.95,0],[0,0,-PI+.4],[1,1,.4])}
 else if(wk==="mace"){
  wa(Cy(.035,.04,.6,5),RH,[0,.1,0]);wa(Ic(.17),isk?RS:(CL.gold?gold:steel),[0,.5,0]);
  for(var mq=0;mq<6;mq++){var ma=mq/6*PI*2;wa(Co(.05,.14,4),isk?RG:(CL.gold?gold:steelD),[Math.cos(ma)*.2,.5,Math.sin(ma)*.2],[Math.sin(ma)*1.2,0,-Math.cos(ma)*1.2])}}
 else if(wk==="bow"){
  var nseg=7,rad=isk&&isk.k==="Arco Lungo"?.75:.6,bz=function(a){return rad*Math.cos(a)-rad+.2};
  for(var bs=0;bs<nseg;bs++){var a0=-1.1+(bs+.5)/nseg*2.2;
   wa(Bx(.05,2*rad*Math.sin(1.1/nseg)+.01,.05),isk?isk.p:wood,[0,rad*Math.sin(a0),bz(a0)],[-a0,0,0])}
  var bT=rad*Math.sin(1.1),bN=-.2,bL=Math.hypot(bT,bz(1.1)-bN),bA=Math.atan2(bz(1.1)-bN,bT);
  wa(Bx(.01,bL,.01),ivory,[0,bT/2,(bz(1.1)+bN)/2],[bA,0,0]);wa(Bx(.01,bL,.01),ivory,[0,-bT/2,(bz(1.1)+bN)/2],[-bA,0,0]);
  wa(Cy(.011,.011,.86,5),wood,[0,0,.23],[PI/2,0,0]);wa(Co(.03,.1,4),steel,[0,0,.69],[PI/2,0,0]);
  wa(Bx(.05,.012,.1),ivory,[0,0,-.13],0);wa(Bx(.012,.05,.1),ivory,[0,0,-.13],0)}
 else if(wk==="crossbow"){
  var xph=twoH?(HP.phi||0):0,xc=Math.cos(xph),xs=Math.sin(xph),wx=function(geo,col,p,rz){var X=p[0]*xc+p[2]*xs,Z=-p[0]*xs+p[2]*xc;add(aR,geo,col,[wo[0]+X,wo[1]+p[1]*ct-Z*sn,wo[2]+p[1]*sn+Z*ct],[tl,xph,rz||0])};
  wx(Bx(.06,.07,.17),RH,[0,-.01,0]);wx(Bx(.012,.04,.05),steelD,[0,.05,-.04]);
  wx(Bx(.075,.95,.075),RH,[0,.12,.12]);wx(Bx(.08,.04,.14),steelD,[0,-.36,.11]);
  wx(Bx(.03,.7,.025),steelD,[0,.27,.17]);wx(Cy(.011,.011,.62,5),ivory,[0,.3,.19]);wx(Co(.025,.09,4),steel,[0,.64,.19]);
  for(var xl=-1;xl<=1;xl+=2){wx(Bx(.22,.045,.045),isk?RS:steelD,[xl*.15,.5,.12]);wx(Bx(.2,.04,.04),isk?RS:steelD,[xl*.31,.46,.12],-xl*.38);wx(Bx(.5,.01,.01),ivory,[xl*.21,.3,.12],xl*.563)}}
 if(isk){var wy=wk==="staff"?1.1:(wk==="bow"?.3:.8);
  if(isk.t>=2)wa(Oc(.07),RM,[0,.14,.07],0,[1,1.3,1],1);
  if(isk.t>=3){wa(Oc(.05),RM,[.14,wy,0],0,0,1);wa(Oc(.05),RM,[-.14,wy+.1,0],0,0,1)}
  if(isk.t>=4)wa(Co(.08,.3,4),RM,[0,wy+.45,0],0,0,1)}
 aR.k=1;aR.oy=0;aR.oz=0;
 function gripW(B,t,sp){var c=Math.cos(t),n=Math.sin(t),hc=R.panda?dark:(plate?steelD:skin),rr=wk==="dagger"?.036:(wk==="sword"||wk==="katana"||wk==="scimitar"||wk==="greatsword"?.042:.05);
  for(var f=0;f<4;f++){var d=(f-1.5)*.04*sp;add(B,new T.Ci(rr,.017*bw,5,10),hc,[wo[0],wo[1]+d*c,wo[2]+d*n],[t-PI/2,0,0],[1,1,1])}
  add(B,Cy(.017*bw,.015*bw,.1,5),hc,[wo[0],wo[1]+.075*c+rr*.9*-n,wo[2]+.075*n+rr*.9*c],[t+.5,0,PI/2]);
  add(B,Cy(.026*bw,.026*bw,.05,6),hc,[wo[0],wo[1]-.07*c,wo[2]-.07*n],[t,0,0])}
 function gripX(){var P=HP.phi||0,d=[Math.sin(P),-Math.sin(tl)*Math.cos(P),Math.cos(tl)*Math.cos(P)],ry=Math.asin(d[0]),rx=Math.atan2(-d[1],d[2]),hc=R.panda?dark:(plate?steelD:skin);for(var f=0;f<4;f++){var u=(f-1.5)*.04;add(aR,new T.Ci(.05,.017*bw,5,10),hc,[wo[0]+d[0]*u,wo[1]+d[1]*u,wo[2]+d[2]*u],[rx,ry,0])}}
 if(A.weapon||iw){if(wk==="crossbow"&&twoH)gripX();else gripW(WA,tl,1)}
 if(dualW)gripW(aL,.9,.9);
 if(twoH&&!HP.ng){(function(){function mx(a,b){var o=[0,0,0,0,0,0,0,0,0],i,j,k;for(i=0;i<3;i++)for(j=0;j<3;j++)for(k=0;k<3;k++)o[i*3+j]+=a[i*3+k]*b[k*3+j];return o}
  function RX(a){var c=Math.cos(a),n=Math.sin(a);return[1,0,0,0,c,-n,0,n,c]}function RZ(a){var c=Math.cos(a),n=Math.sin(a);return[c,-n,0,n,c,0,0,0,1]}
  function mv(m,v){return[m[0]*v[0]+m[1]*v[1]+m[2]*v[2],m[3]*v[0]+m[4]*v[1]+m[5]*v[2],m[6]*v[0]+m[7]*v[1]+m[8]*v[2]]}
  var Rr=mx(mx(RX(HP.r[0]),RZ(HP.r[1])),RX(-HP.r[2])),Rl=mx(mx(RX(HP.l[0]),RZ(HP.l[1])),RX(-HP.l[2])),ax=mv(Rr,[0,Math.cos(HP.tl),Math.sin(HP.tl)]);
  var d=[Rl[0]*ax[0]+Rl[3]*ax[1]+Rl[6]*ax[2],Rl[1]*ax[0]+Rl[4]*ax[1]+Rl[7]*ax[2],Rl[2]*ax[0]+Rl[5]*ax[1]+Rl[8]*ax[2]];
  var ry=Math.asin(Math.max(-1,Math.min(1,d[0]))),rx=Math.atan2(-d[1],d[2]),hc=R.panda?dark:(plate?steelD:skin),rr=.045;
  for(var f=0;f<4;f++){var u=(f-1.5)*.04;add(aL,new T.Ci(rr,.017*bw,5,10),hc,[wo[0]+d[0]*u,wo[1]+d[1]*u,wo[2]+d[2]*u],[rx,ry,0])}
  add(aL,Cy(.026*bw,.026*bw,.05,6),hc,[wo[0]-d[0]*.07,wo[1]-d[1]*.07,wo[2]-d[2]*.07],[rx,ry,0])})()}
 if(dualW){var ct2=Math.cos(.9),sn2=Math.sin(.9),wl=function(geo,col,p,r,s){add(aL,geo,col,[0,-.56+p[1]*ct2-p[2]*sn2,.02+p[1]*sn2+p[2]*ct2],r?[r[0]+.9,r[1],r[2]]:[.9,0,0],s)};
  wl(Bx(.07,.38,.02),RB,[0,.3,0]);wl(Co(.05,.14,4),RB,[0,.57,0],0,[1,1,.4]);wl(Bx(.18,.05,.07),isk?RG:dark,[0,.1,0]);wl(Cy(.025,.025,.16,5),leathD,[0,0,0])}
 // ---------- HEAD ----------
 var hs=head;
 var skullC=R.skeleton?C(11315829):skin;
 var fur=R.fur&&!R.panda?C(furC):skullC;
 if(R.panda){skullC=C(16118250);fur=skullC}
 var neckC=R.skeleton?bone:(R.panda?skullC:(R.fur?C(furC):skin)),nkTop=hy-.1*R.hd,nkBot=1.1;
 add(stat,Cy(HUM?.145*bw:.15*Math.min(1.25,R.hd),HUM?.18*bw:.19*Math.min(1.25,R.hd),nkTop-nkBot,8),neckC,[0,(nkTop+nkBot)/2,hz*.6]);
 add(hs,S(.4,R.gnome?10:7,R.gnome?8:5),fur,[0,0,0],0,R.gnome?[1.03,1.05,1]:[1,1.04,.96]);DBA_LEGO&&add(hs,Cy(.13,.13,.1,10),fur,[0,.37,0]);
 if(R.jaw||R.tusks){add(hs,S(.27,10,7),skullC,[0,-.25,.2],0,[1.05,.5,.85])}
 if(R.skeleton){add(hs,Bx(.36,.14,.24),bone,[0,-.27,.2]);for(var tt=-2;tt<=2;tt++)add(hs,Bx(.04,.05,.02),ivory,[tt*.07,-.2,.33])}
 // eyes (unlit glow bucket)
 var eyeY=.05,eyeX=.14*(R.snout>1?1.25:1);
 var DEC=!!(window.DBA_TEX&&DBA_TEX.ready)&&!DBA_LEGO&&!R.skeleton&&!R.glow&&!R.panda,DC={s:[],i:[],b:[],bl:[],l:[],ll:[]},lidC=skin,irisC=(function(){var q=C(eyeHex),m=Math.max(q.r,q.g,q.b,.01),f=Math.min(3,.68/m);return new T.Rt(((Math.min(1,q.r*f)*255|0)<<16)|((Math.min(1,q.g*f)*255|0)<<8)|(Math.min(1,q.b*f)*255|0))})();
 function dadd(k,geo,col,p,r){DC[k].push({geo:geo,col:col,p:p,r:r,s:null,ox:head.ox,oy:head.oy,oz:head.oz,k:head.k,fa:false,lg:null})}
 for(var es=-1;es<=1;es+=2){
  if(DEC){dadd("s",Bx(.15,.085,.006),C(16777215),[es*eyeX,eyeY,.372]);dadd("i",Bx(.07,.07,.006),irisC,[es*eyeX,eyeY-.003,.381]);dadd(es>0?"l":"ll",Bx(.15,.085,.006),lidC,[es*eyeX,eyeY,.388]);dadd(es>0?"b":"bl",Bx(.2,.064,.006),hair,[es*eyeX*1.04,eyeY+.108,.372]);continue}
  if(R.glow){add(hs,Bx(.14,.06,.04),C(eyeHex),[es*eyeX,eyeY,.34],[0,0,-es*.15],0,1)}
  else{if(DBA_LEGO)add(hs,Cy(.045,.045,.03,10),C(1710618),[es*eyeX*.75,eyeY,.385],[PI/2,0,0],0,1);else{add(hs,Bx(.12,.09,.04),C(16777215),[es*eyeX,eyeY,.34],0,0,1);add(hs,Bx(.06,.07,.045),C(eyeHex),[es*eyeX,eyeY,.355],0,0,1)}}
  add(hs,Bx(.16,.035,.04),hair,[es*eyeX,eyeY+.1,.34],[0,0,-es*.12]);if(R.gnome)add(hs,Bx(.2,.07,.07),skullC,[es*eyeX,eyeY+.13,.33],[0,0,es*.28]);
  if(R.panda)add(hs,Ic(.1),dark,[es*eyeX,eyeY,.3],0,[1,1.3,.6]);
  if(R.skeleton)add(hs,Bx(.15,.12,.03),dark,[es*eyeX,eyeY,.33])}
 // nose / snout
 if(R.snout){var sn=R.snout;add(hs,Cy(.11*sn,.16*sn,.34*(sn>1?1.1:1),5),R.panda?C(16118250):fur,[0,-.08,.46],[PI/2,0,0]);add(hs,Ic(.07*sn),dark,[0,-.04,.64*(sn>1?1.05:.8)])}
 else if(R.nose==="huge")add(hs,Co(.1,.32,4),skullC,[0,-.04,.46],[PI/2+.3,0,0]);
 else if(R.nose==="bulb"){add(hs,S(.1,7,5),skullC,[0,-.06,.42],0,[1,.95,1.05]);add(hs,Bx(.07,.14,.06),skullC,[0,.0,.39],[.3,0,0])}
 else if(R.nose==="big")add(hs,Co(.09,.2,4),skullC,[0,-.04,.42],[PI/2+.2,0,0]);
 else if(R.skeleton)add(hs,Bx(.07,.1,.03),dark,[0,-.06,.38]);
 else if(!DBA_LEGO)add(hs,Co(.055,.15,4),skullC,[0,-.04,.4],[PI/2,0,0]);
 if(!R.skeleton){if(R.snout||!DBA_LEGO)add(hs,Bx(.1,.02,.03),C(4854036),[0,-.2,.36*(R.snout?1.35:1)]);else for(var sm=-2;sm<=2;sm++)add(hs,Bx(.045,.025,.02),C(4854036),[sm*.05,-.2+.012*sm*sm,.39],0,0,1)}
 // tusks
 if(R.tusks){var tz=R.tusks;for(var ts=-1;ts<=1;ts+=2)add(hs,Co(.045,.2*tz,4),ivory,[ts*.15,-.17,.36],[.1,0,ts*.1])}
 // ears
 var ek=R.ears;
 for(var e=-1;e<=1;e+=2){
  if(ek==="gnome"){add(hs,S(.12,6,5),skullC,[e*.41,.0,-.02],0,[.4,1.15,.85]);add(hs,Co(.05,.12,4),skullC,[e*.43,.12,-.02],[0,0,-e*.5],[1,1,.5])}
  else if(ek==="round")add(hs,S(.08,5,4),skullC,[e*.4,0,0],0,[.5,1,.7]);
  else if(ek==="point")add(hs,Co(.07,.28,4),skullC,[e*.4,.06,0],[0,0,-e*1.2],[1,1,.5]);
  else if(ek==="longup")add(hs,Co(.07,.6,4),skullC,[e*.44,.18,-.05],[-.3,0,-e*1.15],[1,1,.45]);
  else if(ek==="longback")add(hs,Co(.065,.52,4),skullC,[e*.44,.06,-.08],[-.25,0,-e*1.4],[1,1,.45]);
  else if(ek==="longdown")add(hs,Co(.08,.5,4),skullC,[e*.46,-.02,-.02],[0,0,-e*2.3],[1,1,.45]);
  else if(ek==="longside")add(hs,Co(.1,.55,4),skullC,[e*.5,.02,0],[0,0,-e*1.5],[1,1,.4]);
  else if(ek==="wolf")add(hs,Co(.11,.32,4),fur,[e*.22,.4,-.06],[0,0,-e*.15],[1,1,.6]);
  else if(ek==="cow")add(hs,Co(.1,.34,4),fur,[e*.46,.1,0],[0,0,-e*1.5],[1,1,.4]);
  else if(ek==="roundbig")add(hs,S(.15,5,4),dark,[e*.3,.34,-.02]);
  else if(ek==="ragged")add(hs,Co(.06,.18,3),skullC,[e*.4,.04,0],[0,0,-e*1.7],[1,1,.4])}
 // horns
 if(R.horns===1){for(var h1=-1;h1<=1;h1+=2){add(hs,Co(.05,.34,4),C(7634784),[h1*.17,.4,-.1],[-.9,0,h1*.15]);}
  if(G.sex!=="female"){for(var t3=-1;t3<=1;t3+=2)for(var t4=0;t4<2;t4++)add(hs,Co(.03,.28,3),C(6950880),[t3*(.08+t4*.08),-.4,.18],[PI,0,t3*.2])}}
 if(R.horns===2){for(var h2=-1;h2<=1;h2+=2){add(hs,Co(.07,.4,5),ivory,[h2*.34,.28,.04],[0,0,-h2*1.0]);add(hs,Co(.05,.28,4),ivory,[h2*.58,.5,.04],[0,0,h2*.3])}}
 if(R.panda===undefined&&R.fur&&R.tail==="fur")add(hs,Co(.2,.3,5),fur,[0,.38,-.12],[-.4,0,0]);

 // anti-intersezione: accorcia (comprime in verticale) i pezzi appesi sotto 'anchor' perché il fondo non scenda sotto L (coordinate locali testa)
 function fitHang(arr,n0,anchor,L,pred){
  var P=[],i,q,g,h,sy,minB=1e9;
  for(i=n0;i<arr.length;i++){q=arr[i];if(!q.geo||(pred&&!pred(q)))continue;g=q.geo.parameters||{};sy=q.s&&q.s.length?q.s[1]:1;h=g.height;
   var ext=h?h*sy/2:(g.radius?g.radius*sy:0);P.push(q);minB=Math.min(minB,q.p[1]-ext)}
  if(minB>=L||!P.length)return;
  var f=(anchor-L)/(anchor-minB);
  P.forEach(function(q){var g=q.geo.parameters||{},h=g.height,sy=q.s&&q.s.length?q.s[1]:1,y=q.p[1];
   function m(v){return v<anchor?anchor+(v-anchor)*f:v}
   if(h){var tp=m(y+h*sy/2),bt=m(y-h*sy/2),ns=(tp-bt)/h;q.s=q.s&&q.s.length?[q.s[0],ns,q.s[2]]:[1,ns,1];q.p=[q.p[0],(tp+bt)/2,q.p[2]]}
   else q.p=[q.p[0],m(y),q.p[2]]})}
 var hdLow=function(){return (.97-hy)/R.hd};
 // hair
 var hstyle=R.mohawk&&!G.hairPick?3:(G.hairStyle||0),noHair=hm==="hood"||hm==="helmet"||hm==="winged"||hm==="crest"||hm==="horned"||hm==="veil"||hm==="hat",hn0=hs.l.length,hr=(noHair||hstyle===4)?1:1.16;
 if(!noHair){
  var hh=hair.clone().lerp(C(6053478),.15),HC=function(tl,bk){add(hs,S(.46,8,5,0,PI*2,0,PI*tl),hh,[0,.05,-.02],0,[1,1.05,1.05]);add(hs,S(.47,8,5,PI,PI,0,PI*bk),hh,[0,.03,-.02],0,[1,1.05,1.05])};
  switch(hstyle){
   case 0:HC(.36,.6);add(hs,Bx(.46,.07,.08),hh,[0,.34,.3],[.35,0,0]);break;
   case 1:HC(.36,.68);add(hs,Bx(.12,.7,.18),hh,[-.4,-.22,0]);add(hs,Bx(.12,.7,.18),hh,[.4,-.22,0]);add(hs,Bx(.8,.75,.12),hh,[0,-.28,-.38]);break;
   case 2:HC(.36,.6);add(hs,Cy(.12,.06,.75,5),hh,[0,-.12,-.5],[.5,0,0]);add(hs,Ic(.12),hh,[0,.18,-.46]);break;
   case 3:for(var mh=0;mh<5;mh++)add(hs,Co(.11,.42-Math.abs(mh-2)*.06,4),hh,[0,.42-Math.abs(mh-2)*.04,.22-mh*.12],[-.2+mh*.1,0,0]);break;
   case 4:break;
   case 5:HC(.3,.5);for(var sp=0;sp<8;sp++){var sa2=sp/8*PI*2;add(hs,Co(.08,.32,3),hh,[Math.cos(sa2)*.27,.4,Math.sin(sa2)*.27],[Math.sin(sa2)*.6,0,-Math.cos(sa2)*.6])}break;
   case 6:for(var cu=0;cu<8;cu++){var ca=PI+cu/7*PI;add(hs,Oc(.17),hh,[Math.cos(ca)*.34,.1+(cu%2)*.14,Math.sin(ca)*.3-.02])}HC(.34,.5);add(hs,Oc(.17),hh,[0,.42,0]);add(hs,Oc(.15),hh,[.2,.38,.05]);add(hs,Oc(.15),hh,[-.2,.38,.05]);break;
   case 8:HC(.36,.6);add(hs,Ic(.17),hh,[0,.52,-.1]);add(hs,Cy(.1,.1,.06,6),hh,[0,.42,-.08]);break;
   case 9:HC(.36,.68);add(hs,Bx(.12,.42,.46),hh,[-.4,-.14,.02]);add(hs,Bx(.12,.42,.46),hh,[.4,-.14,.02]);add(hs,Bx(.8,.5,.12),hh,[0,-.2,-.4]);add(hs,Bx(.5,.07,.08),hh,[0,.3,.34],[.35,0,0]);break;
   case 10:HC(.36,.6);add(hs,Bx(.56,.12,.16),hh,[.08,.3,.32],[.5,0,.3]);add(hs,Bx(.14,.5,.12),hh,[-.38,-.06,.2]);add(hs,Bx(.12,.34,.5),hh,[.42,-.02,-.04]);break;
   case 11:add(hs,S(.68,9,7),hh,[0,.4,-.36],0,[1,.95,1]);break;
   case 12:HC(.36,.6);for(var tw=-1;tw<=1;tw+=2){add(hs,Ic(.1),hh,[tw*.4,.4,-.1]);add(hs,Cy(.09,.05,.6,5),hh,[tw*.46,.08,-.12],[0,0,tw*.12]);add(hs,Ic(.07),hh,[tw*.48,-.24,-.12])}break;
   case 13:HC(.2,.4);add(hs,Bx(.15,.2,.62),hh,[0,.47,-.04]);add(hs,Bx(.12,.14,.18),hh,[0,.52,.3],[.3,0,0]);break;
   case 14:HC(.36,.62);add(hs,Bx(.52,.3,.36),hh,[0,.5,.14],[.4,0,0]);add(hs,Bx(.3,.18,.3),hh,[0,.6,.02]);break;
   case 15:HC(.36,.62);add(hs,Ic(.1),hh,[0,-.08,-.5]);add(hs,Ic(.1),hh,[0,-.3,-.55]);add(hs,Ic(.09),hh,[0,-.52,-.58]);add(hs,Ic(.08),hh,[0,-.72,-.6]);add(hs,Ic(.06),hh,[0,-.9,-.61]);break;
   case 16:HC(.34,.55);for(var sv=0;sv<11;sv++){var sa3=sv/11*PI*2,sr=.12+(sv%3)*.1;add(hs,Co(.09,.34+(sv%4)*.08,3),hh,[Math.cos(sa3)*sr*2.2,.42+(sv%3)*.05,Math.sin(sa3)*sr*2],[Math.sin(sa3)*.8,0,-Math.cos(sa3)*.8])}break;
   case 17:HC(.34,.55);for(var cr=0;cr<9;cr++){var ca2=cr/9*PI*2;add(hs,Ic(.075),hh,[Math.cos(ca2)*.4,.34,Math.sin(ca2)*.38-.02])}add(hs,Ic(.12),hh,[0,.5,-.02]);break;
   default:HC(.36,.62);for(var bs2=-1;bs2<=1;bs2+=2){add(hs,Cy(.06,.04,.35,4),hh,[bs2*.4,-.2,-.02]);add(hs,Cy(.05,.03,.3,4),hh,[bs2*.4,-.5,-.02]);add(hs,Ic(.06),hh,[bs2*.4,-.68,-.02])}}} else if(!R.snout&&!R.gnome&&hstyle!==4&&hm!=="hat"&&hm!=="veil"&&hm!=="horned"){var hh2=hair,lg=(hstyle===1||hstyle===2||hstyle===7)?.55:.3;add(hs,Bx(.62,lg,.12),hh2,[0,-.16-lg/2,-.43]);if(hstyle===2)add(hs,Cy(.07,.05,.5,4),hh2,[0,-.3,-.44],[.5,0,0]);if(hstyle===7){add(hs,Cy(.04,.03,.5,4),hh2,[-.14,-.4,-.4]);add(hs,Cy(.04,.03,.5,4),hh2,[.14,-.4,-.4])}}
 if(!noHair){var hL=hdLow();fitHang(hs.l,hn0,-.05,-.3,function(q){return Math.abs(q.p[0])>.3});fitHang(hs.l,hn0,-.2,Math.max(hL-.1,-.8),function(q){return Math.abs(q.p[0])<=.3});for(var hi=hn0;hi<hs.l.length;hi++){var hq=hs.l[hi],hg=hq.geo&&hq.geo.parameters;if(hq.p[2]<-.25&&hq.p[1]<.1)hq.p=[hq.p[0],hq.p[1],hq.p[2]-.08];if(Math.abs(hq.p[0])>.3&&hg&&hg.height>.25){var hsc=hq.s&&hq.s.length?hq.s:[1,1,1];hq.s=[hsc[0]*.7,hsc[1],hsc[2]*.75]}}}
 // beard
 var bn0=hs.l.length;
 var bst=G.beardPick?G.beardStyle:(R.gnome?9:(R.beard?1:G.beardStyle)),bz=R.snout?.2*(R.snout>1?1.4:1):0;
 if((G.sex!=="female"||G.beardPick)&&bst>=0&&(G.beardPick||!R.snout)){
  var bc=C(G.beardColor||G.hairColor||1710618),FB=function(sx,len,yTop,x,zo){add(hs,S(.3,8,6),bc,[x||0,yTop-len/2,.35+bz+(zo||0)],[-.2,0,0],[sx,len/.6,.16])};
  switch(bst){
   case 9:FB(1.15,.55,-.2);FB(.8,.5,-.45,0,.02);add(hs,S(.1,6,4),bc,[-.09,-.13,.37],0,[1.5,.6,.8]);add(hs,S(.1,6,4),bc,[.09,-.13,.37],0,[1.5,.6,.8]);break;
   case 0:FB(.3,.16,-.28);break;
   case 1:FB(1,R.beard?.7:.45,-.2);break;
   case 2:add(hs,Bx(.12,.03,.04),bc,[-.07,-.12,.38+bz],[0,0,.2]);add(hs,Bx(.12,.03,.04),bc,[.07,-.12,.38+bz],[0,0,-.2]);break;
   case 4:FB(.95,.9,-.2);add(hs,S(.22,6,4,0,PI*2,PI*.45,PI*.4),bc,[0,-.3,.08+bz],0,[1,.5,.8]);break;
   case 5:FB(.28,.5,-.2,0,.03);add(hs,Bx(.12,.03,.04),bc,[-.07,-.12,.38+bz],[0,0,.2]);add(hs,Bx(.12,.03,.04),bc,[.07,-.12,.38+bz],[0,0,-.2]);break;
   case 6:add(hs,Bx(.07,.34,.1),bc,[-.42,-.08,.14]);add(hs,Bx(.07,.34,.1),bc,[.42,-.08,.14]);break;
   case 7:add(hs,Bx(.07,.34,.1),bc,[-.42,-.08,.14]);add(hs,Bx(.07,.34,.1),bc,[.42,-.08,.14]);add(hs,S(.3,6,4,0,PI*2,PI*.5,PI*.35),bc,[0,-.34,.08+bz],0,[1,.5,.9]);break;
   case 8:add(hs,Bx(.2,.035,.05),bc,[-.12,-.12,.38+bz],[0,0,-.25]);add(hs,Bx(.2,.035,.05),bc,[.12,-.12,.38+bz],[0,0,.25]);add(hs,Co(.03,.14,4),bc,[-.26,-.07,.38+bz],[0,0,-.9]);add(hs,Co(.03,.14,4),bc,[.26,-.07,.38+bz],[0,0,.9]);break;
   case 10:add(hs,S(.22,6,4,0,PI*2,PI*.45,PI*.4),bc,[0,-.3,.08+bz],0,[1,.5,.8]);FB(.5,.7,-.2,-.1);FB(.5,.7,-.2,.1,.01);break;
   case 11:add(hs,S(.34,7,5,0,PI*2,PI*.4,PI*.5),bc,[0,-.3,.08+bz],0,[1.15,1.2,1]);FB(1.1,.45,-.2);add(hs,Bx(.14,.1,.1),bc,[-.36,-.1,.1]);add(hs,Bx(.14,.1,.1),bc,[.36,-.1,.1]);break;
   default:add(hs,S(.25,6,4,0,PI*2,PI*.45,PI*.4),bc,[0,-.3,.05+bz],0,[1,.5,.8])}}
 {var bL=Math.max(hdLow(),-.7);if(bL>-.45)bL=-.45;fitHang(hs.l,bn0,-.3,bL);for(var bi=bn0;bi<hs.l.length;bi++){var bq=hs.l[bi];if(bq.p[1]<-.3&&bq.p[2]<.5)bq.p=[bq.p[0],bq.p[1],bq.p[2]+.015]}}
 if(R.mohawk&&hm==="hood"){}
 // helmets / headgear
 if(hsk){steel=hsk.p;steelD=sh(hsk.p,.55);c2=hsk.s;if(hsk.t>=1)gold=hsk.acc;if(hsk.t>=2)add(hs,Oc(.06),hsk.acc,[0,.2,.41],0,[1,1.3,.6],1);if(hsk.t>=3)add(hs,Cy(.36,.36,.02,12),hsk.acc,[0,.66,-.05],0,0,1);if(hsk.t>=4)for(var fl=-1;fl<=1;fl++)add(hs,Co(.05,.28,3),hsk.acc,[fl*.14,.62,-.05],[0,0,-fl*.3],0,1)}
 if(hm==="helmet"||hm==="crest"||hm==="winged"){
  add(hs,S(.46,7,5,0,PI*2,0,PI*.62),CL.stone?C(8021578):steel,[0,.06,-.02]);
  add(hs,Bx(.5,.1,.1),dark,[0,.02,.36]);add(hs,Bx(.07,.3,.07),steelD,[0,-.06,.4]);
  if(CL.crest)add(hs,Bx(.07,.24,.6),C(CL.c2===11569722?12589056:A.color||"#cc3333"),[0,.5,-.04]);
  else add(hs,Co(.06,.2,4),steelD,[0,.52,0]);
  if(hm==="crest")add(hs,Bx(.08,.4+(hsk?hsk.h%20/100:0),.8),hsk?hsk.s:C(13369344),[0,.58,-.05]);
  if(hm==="winged")for(var wg=-1;wg<=1;wg+=2)for(var wf=0;wf<3;wf++)add(hs,Co(.07,.5-wf*.08,3),ivory,[wg*(.44+wf*.05),.28-wf*.06,-.02],[0,0,-wg*(1.1+wf*.2)],[1,1,.4])}
 else if(hm==="crown"||hm==="thorn"){var ns=hm==="thorn"?8:3+(hsk?hsk.h%5:2);add(hs,Cy(.4*hr,.42*hr,.12,8),hm==="thorn"?steelD:gold,[0,.26,0]);for(var cs=0;cs<ns;cs++){var ca2=cs/ns*PI*2;add(hs,Co(hm==="thorn"?.035:.06,hm==="thorn"?.3:.2,hm==="thorn"?3:4),hm==="thorn"?steelD:gold,[Math.cos(ca2)*.38*hr,.4,Math.sin(ca2)*.38*hr],[Math.sin(ca2)*(hm==="thorn"?.7:.15),0,-Math.cos(ca2)*(hm==="thorn"?.7:.15)])}if(hm==="crown")add(hs,Oc(.07),hsk?hsk.acc:wGlow,[0,.3,.42],0,[1,1.3,.6],1)}
 else if(hm==="mask"){add(hs,Bx(.46,.36,.1),steel,[0,-.02,.36],0,[1,1,.6]);add(hs,Bx(.1,.05,.03),dark,[-.14,.03,.42]);add(hs,Bx(.1,.05,.03),dark,[.14,.03,.42]);add(hs,Co(.07,.2,3),steelD,[0,-.12,.44],[PI,0,0])}
 else if(hm==="veil"){var vc=hsk?hsk.p:c2;add(hs,Cy(.44,.46,.5,7),vc,[0,-.05,-.04],0,[1,1,.95]);add(hs,Bx(.42,.3,.03),sh(vc,1.3),[0,-.12,.4]);add(hs,S(.42,7,4,0,PI*2,0,PI*.5),vc,[0,.1,-.02])}
 else if(hm==="horned"){
  add(hs,S(.44,7,4,0,PI*2,0,PI*.58),CL.dark?steelD:C(5326430),[0,.07,-.02]);
  for(var hrn=-1;hrn<=1;hrn+=2){add(hs,Co(.09,.34,5),ivory,[hrn*.34,.32,0],[0,0,-hrn*1.1]);add(hs,Co(.06,.28,4),ivory,[hrn*.56,.5,0],[0,0,hrn*.3])}
  if(CL.dark){add(hs,Co(.06,.24,3),steelD,[0,.52,-.1]);}}
 else if(hm==="hood"){
  var hc=sh(hsk?hsk.p:(CL.c2?c2:cls),.9);
  add(hs,Co(.5,.78,6),hc,[0,.32,-.06],[-.1,0,0]);add(hs,Cy(.46,.48,.3,7),hc,[0,-.12,-.08],0,[1,1,.9]);
  add(hs,Bx(.38,.34,.1),dark,[0,0,.3],0,[1,1,.5]);
  if(CL.mask)add(hs,Bx(.38,.2,.06),CL.exec?leathD:C(2763315),[0,-.1,.4]);
  if(CL.exec)add(hs,Bx(.5,.3,.05),leathD,[0,.12,.4])}
 else if(hm==="band"){
  add(hs,Cy(.4*hr,.4*hr,.1,7),c2,[0,.16,0]);add(hs,Bx(.09,.4,.03),c2,[-.1,-.0,-.4],[.2,0,.1]);add(hs,Bx(.09,.36,.03),c2,[.1,-.02,-.42],[.2,0,-.1])}
 else if(hm==="circlet"){
  add(hs,Cy(.39*hr,.39*hr,.07,7),CL.gold||CL.trim?gold:C(16769126),[0,.22,0]);
  add(hs,Oc(.07),CL.bolt?C(3646463):(CL.halo?C(16775388):wGlow),[0,.26,.38],0,[1,1.4,.7],1);
  if(CL.halo)add(hs,Cy(.38,.38,.02,12),C(16775388),[0,.66,-.05],0,0,1)}
 else if(hm==="hat"){
  var htc=CL.ice?C(5735339):sh(c2,.9);
  add(hs,Cy(.64,.64,.04,8),htc,[0,.3,0]);add(hs,Co(.4,.7,7),htc,[0,.68,0],[.12,0,0]);add(hs,Co(.12,.32,5),htc,[0,1.12,-.1],[-.5,0,0]);
  add(hs,Cy(.41,.41,.06,7),gold,[0,.36,0])}
 else if(hm==="antlers"){
  var an2=C(9136946);
  for(var aa=-1;aa<=1;aa+=2){add(hs,Cy(.025,.04,.5,4),an2,[aa*.22,.55,0],[0,0,-aa*.45]);add(hs,Cy(.02,.03,.3,4),an2,[aa*.34,.72,0],[0,0,-aa*.9]);add(hs,Cy(.02,.03,.26,4),an2,[aa*.28,.82,0],[0,0,aa*.2])}
  add(hs,Cy(.38*hr,.4*hr,.08,7),C(5929525),[0,.2,0])}
 // ---------- BODY mesh (class coloured, flashes) ----------
 var bodyMat=new T.zt({color:(ask?ask.p.clone():(NA?skin.clone():cls.clone())),emissive:(NA?skin:cls).clone().multiplyScalar(.22),emissiveIntensity:.22,roughness:DBA_LEGO?.26:.55,metalness:DBA_LEGO?.02:.2});
 var baseEm=(NA?skin:cls).clone().multiplyScalar(.22);
 var body=new T.fe((DBA_LEGO?new T.rn(.92*bw,.8,.64*bw):new T.Fn(.5*bw,.38*bw,.8,Math.max(6,Math.round(7*DBAQ.seg)),1)),bodyMat);
 body.scale.set(1,1,DBA_LEGO?1:.8);body.position.y=.85;if(HUM&&!DBA_LEGO&&!ROBE){body.scale.set(.5,.62,.4);body.position.y=.9}body.castShadow=true;body.receiveShadow=true;
 if(!WOW_MATS)WOW_MATS=(function(){var tc=WOW_TEX(T,'cloth'),tm=WOW_TEX(T,'metal');var L0=DBA_LEGO;return{lit:new T.zt({vertexColors:true,map:L0?null:tc,bumpMap:(!L0&&DBAQ.bump)?tc:null,bumpScale:2,roughness:L0?.26:.72,metalness:L0?.02:.08}),metal:new T.zt({vertexColors:true,map:L0?null:tm,bumpMap:(!L0&&DBAQ.bump)?tm:null,bumpScale:2.5,roughness:L0?.18:.4,metalness:L0?.14:.35}),glow:new T.ln({vertexColors:true})}})();bodyMat.map=WOW_MATS.lit.map;if(DBAQ.bump){bodyMat.bumpMap=WOW_MATS.lit.map;bodyMat.bumpScale=2}
 var O=new T.zn(),I=new T.zn();O.add(I);
 I.add(body);
 var HTM=(!ia&&window.DBA_HMAT)?DBA_HMAT(T,ck):null,HTL=HTM?[cls,sh(cls,.5),sh(cls,.65),sh(cls,.8),c2,steel,steelD]:[],
  near=function(c){for(var q=0;q<HTL.length;q++){var k=HTL[q];if(Math.abs(c.r-k.r)+Math.abs(c.g-k.g)+Math.abs(c.b-k.b)<.16)return!0}return!1};
 var SKM=null;if(window.DBA_TEX&&DBA_TEX.ready&&!DBA_LEGO&&!R.skeleton){var sk0=(R.fur||R.panda)?'fur':'skin',stx=DBA_TEX.t[sk0]||(DBA_TEX.t[sk0]=(function(){var q=new T.Og(DBA_TEX[sk0]);q.dba=1;q.needsUpdate=true;return q})());SKM=new T.zt({vertexColors:true,map:stx,roughness:.8,metalness:.05})}
 function nearSk(c){return Math.abs(c.r-skin.r)+Math.abs(c.g-skin.g)+Math.abs(c.b-skin.b)<.015}
 function mesh(B,parent,glowOnly){
  var lm=[],ll=[],tx=[],sk=[],x,c,grp=new T.zn(),r=null;
  for(x=0;x<B.l.length;x++){c=B.l[x].col;if(SKM&&nearSk(c)){sk.push(B.l[x]);continue}if(HTM&&near(c)){tx.push(B.l[x]);continue}(Math.max(c.r,c.g,c.b)-Math.min(c.r,c.g,c.b)<.12||(c.r>.7&&c.g>.5&&c.b<.4&&c.r>c.b*1.8)?lm:ll).push(B.l[x])}
  [[WOW_merge(T,lm),WOW_MATS.metal],[WOW_merge(T,ll),WOW_MATS.lit],[WOW_merge(T,tx),HTM],[WOW_merge(T,sk),SKM]].forEach(function(p){if(p[0]){var m=new T.fe(p[0],p[1]);m.castShadow=true;m.receiveShadow=true;grp.add(m);r=grp}});
  var g2=WOW_merge(T,B.g);if(g2){grp.add(new T.fe(g2,WOW_MATS.glow));r=grp}
  if(r)parent.add(grp);
  return r}
 var hipL=null,hipR=null,knL=null,knR=null,capeG=[];
 function limb(B,tag,pv){var f={l:[],g:[],ox:B.ox,oy:B.oy,oz:B.oz,k:B.k},n=0;["l","g"].forEach(function(kk){var keep=[];B[kk].forEach(function(q){if(q.lg===tag){var kq=q.k||1;q.p=[q.p[0]-pv[0]/kq,q.p[1]-pv[1]/kq,q.p[2]-pv[2]/kq];f[kk].push(q);n++}else keep.push(q)});B[kk]=keep});return n?f:null}
 if(!ROBE){var hips=[],knees=[];[-1,1].forEach(function(sd){var hp=[sd*lx,HIPY,0],kp=[sd*lx,KNY,KZ],th=limb(stat,"t"+sd,hp),sk=limb(stat,"s"+sd,kp),hg=new T.zn(),kg=new T.zn();hg.position.set(hp[0],hp[1],hp[2]);kg.position.set(0,kp[1]-hp[1],0);if(th)mesh(th,hg);if(sk)mesh(sk,kg);hg.add(kg);I.add(hg);hips.push(hg);knees.push(kg)});hipL=hips[0];hipR=hips[1];knL=knees[0];knR=knees[1]}
 if(plate||ROBE||cloth){var cc=sh(cls,.65),cgp=null;for(var ci=0;ci<4;ci++){var sg=new T.zn();if(ci==0)sg.position.set(0,1.22,-.38*bw);else sg.position.set(0,-.3,0);var sl={l:[],g:[],ox:0,oy:0,oz:0,k:1};add(sl,Bx(.66*bw*(1+ci*.06),.3,.04),ci==3?(CL.gold?gold:(ask?ask.acc:cc)):cc,[0,-.15,0]);mesh(sl,sg);if(cgp)cgp.add(sg);else I.add(sg);cgp=sg;capeG.push(sg)}}
var pdL=null,pdR=null,tailG=null,skG=[];
 [-1,1].forEach(function(sd){var pv=[sd*.6*bw,1.08,0],pf=limb(stat,"p"+sd,pv);if(pf){var pg=new T.zn();pg.position.set(pv[0],pv[1],pv[2]);mesh(pf,pg);I.add(pg);if(sd<0)pdL=pg;else pdR=pg}});
 var tf=limb(stat,"tl",[0,.5,-.35]);if(tf){tailG=new T.zn();tailG.position.set(0,.5,HUM?-.2:-.35);mesh(tf,tailG);I.add(tailG)}
 if(!ROBE&&(plate||leather||cloth)){var skc=plate?metal:(leather?leathD:sh(cls,.8));for(var ki=0;ki<7;ki++){var ka=(ki-3)*.42,kg2=new T.zn(),kl={l:[],g:[],ox:0,oy:0,oz:0,k:1};kg2.rotation.order="YXZ";kg2.position.set(Math.sin(ka)*.42*bw,.6,Math.cos(ka)*.34*bw);kg2.rotation.y=ka;add(kl,Bx(.17*bw,.24,.025),skc,[0,-.12,0]);if(plate)add(kl,Bx(.17*bw,.03,.03),CL.gold?gold:steelD,[0,-.24,0]);mesh(kl,kg2);I.add(kg2);skG.push(kg2)}}
 mesh(stat,I);
 var headMesh=mesh(head,I);
 if(DEC&&headMesh){var dmk=function(k,tk,col){var g=WOW_merge(T,DC[k]);if(!g)return;var tx=DBA_TEX.t[tk]||(DBA_TEX.t[tk]=(function(){var q=new T.Og(DBA_TEX[tk]);q.needsUpdate=true;return q})());headMesh.add(new T.fe(g,new T.ln({map:tx,transparent:true,alphaTest:.12,color:col})))};dmk("s","sclera",C(16777215));dmk("i","iris",irisC);dmk("b","brow",hair);dmk("bl","browL",hair);dmk("l","lid",lidC);dmk("ll","lidL",lidC)}
 var leftArm=new T.zn();leftArm.position.set(-.56*bw,1.05,HUM?(R.hunch||0)*.45:0);
 var rightArm=new T.zn();rightArm.position.set(.56*bw,1.05,HUM?(R.hunch||0)*.45:0);
 // arm parts were authored with shoulder as origin -> already relative to pivot
 function fore(Bk,grp){var f={l:[],g:[],ox:Bk.ox,oy:Bk.oy,oz:Bk.oz,k:Bk.k},el=new T.zn();el.position.set(0,-.34,0);
  ["l","g"].forEach(function(kk){var keep=[];Bk[kk].forEach(function(q){if(q.fa||q.p[1]<-.33){q.p=[q.p[0],q.p[1]+.34/(q.k||1),q.p[2]];f[kk].push(q)}else keep.push(q)});Bk[kk]=keep});
  mesh(Bk,grp);mesh(f,el);grp.add(el);return el}
 var elbL=fore(aL,leftArm),elbR=fore(aR,rightArm),holdU=null;
 if(twoH){var HX=HP.dx||.26;leftArm.position.x=-(.56*bw-HX);rightArm.position.x=.56*bw-HX;leftArm.rotation.set(HP.l[0],0,HP.l[1]);rightArm.rotation.set(HP.r[0],0,HP.r[1]);elbL.rotation.x=-HP.l[2];elbR.rotation.x=-HP.r[2];holdU={l:{rx:HP.l[0],z:HP.l[1],e:HP.l[2]},r:{rx:HP.r[0],z:HP.r[1],e:HP.r[2]}}}
 if(CL.sh&&!twoH){leftArm.rotation.set(-.25,0,0);elbL.rotation.x=-1.8;leftArm.position.x=-(.56*bw-.1)}
 I.add(leftArm);I.add(rightArm);
 if(HUM)I.children.forEach(function(ch){if(ch!==hipL&&ch!==hipR)ch.position.y+=LIFT});
 var hm0=G.heightMul||1,rh=Math.max(.62/hm0,Math.min(1.3/hm0,R.h)),rw=Math.max(.7,Math.min(1.45,R.w));
 I.scale.set(rw,rh,rw);
 O.userData={shd:(CL.sh&&!twoH)?{rx:-.25,z:0,e:1.8}:null,hold:holdU,pdL:pdL,pdR:pdR,tailG:tailG,skirt:skG,hipL:hipL,hipR:hipR,knL:knL,knR:knR,cape:capeG,elbL:elbL,elbR:elbR,leftArm:leftArm,rightArm:rightArm,body:body,bodyMat:bodyMat,head:headMesh||body,baseEmissive:baseEm,race:R.n,wowClass:CL.r};
 return O}
function WOWTT(){return{Ci:Ci,Og:Og,Tt:Tt,rn:rn,Gt:Gt,Fn:Fn,La:La,Ad:Ad,Jn:Jn,on:on,zn:zn,fe:fe,zt:zt,ln:ln,Rt:Rt}}
const f$={aeolian:[0,2,3,5,7,8,10,12],dorian:[0,2,3,5,7,9,10,12],phrygian:[0,1,3,5,7,8,11,12],pentaMinor:[0,3,5,7,10,12],pentaMajor:[0,2,4,7,9,12],lydian:[0,2,4,6,7,9,11,12],mixolydian:[0,2,4,5,7,9,10,12],harmonicMinor:[0,2,3,5,7,8,11,12]};
const So=[{name:"Bosco Antico",scale:"aeolian",root:57,tempo:.7,wave:"sine",bright:.3},{name:"Caverna Profonda",scale:"phrygian",root:48,tempo:.5,wave:"triangle",bright:.15},{name:"Tempio Sacro",scale:"lydian",root:60,tempo:.6,wave:"sine",bright:.5},{name:"Pianura al Tramonto",scale:"pentaMajor",root:55,tempo:.8,wave:"sine",bright:.4},{name:"Notte Stellata",scale:"dorian",root:53,tempo:.5,wave:"sine",bright:.3},{name:"Rovine Dimenticate",scale:"aeolian",root:50,tempo:.6,wave:"triangle",bright:.2},{name:"Santuario di Ghiaccio",scale:"pentaMinor",root:58,tempo:.5,wave:"sine",bright:.35},{name:"Deserto Infuocato",scale:"harmonicMinor",root:52,tempo:.7,wave:"triangle",bright:.25},{name:"Oceano Infinito",scale:"dorian",root:47,tempo:.4,wave:"sine",bright:.2},{name:"Cima del Monte",scale:"lydian",root:56,tempo:.6,wave:"sine",bright:.45},{name:"Foresta Incantata",scale:"pentaMinor",root:54,tempo:.7,wave:"sine",bright:.35},{name:"Cripta Oscura",scale:"phrygian",root:45,tempo:.4,wave:"triangle",bright:.1},{name:"Grotta di Cristallo",scale:"lydian",root:62,tempo:.5,wave:"sine",bright:.55},{name:"Palude Nebbiosa",scale:"aeolian",root:49,tempo:.5,wave:"triangle",bright:.15},{name:"Cittadella Fluttuante",scale:"mixolydian",root:57,tempo:.7,wave:"sine",bright:.4},{name:"Abisso Senza Luce",scale:"phrygian",root:43,tempo:.3,wave:"triangle",bright:.08},{name:"Aurora Boreale",scale:"lydian",root:60,tempo:.6,wave:"sine",bright:.5},{name:"Bosco di Betulle",scale:"pentaMajor",root:53,tempo:.8,wave:"sine",bright:.45},{name:"Vulcano Attivo",scale:"harmonicMinor",root:50,tempo:.6,wave:"triangle",bright:.2},{name:"Lago Lunare",scale:"dorian",root:55,tempo:.5,wave:"sine",bright:.3},{name:"Antica Biblioteca",scale:"aeolian",root:52,tempo:.6,wave:"sine",bright:.25},{name:"Giardino Segreto",scale:"pentaMajor",root:57,tempo:.7,wave:"sine",bright:.45},{name:"Caverna Smeraldina",scale:"dorian",root:51,tempo:.5,wave:"sine",bright:.3},{name:"Torre del Mago",scale:"lydian",root:58,tempo:.6,wave:"sine",bright:.5},{name:"Valle dei Draghi",scale:"harmonicMinor",root:49,tempo:.7,wave:"triangle",bright:.2},{name:"Spiaggia Dorata",scale:"pentaMajor",root:56,tempo:.8,wave:"sine",bright:.5},{name:"Rovine Sommerse",scale:"aeolian",root:48,tempo:.4,wave:"triangle",bright:.15},{name:"Prateria in Fiore",scale:"pentaMajor",root:58,tempo:.9,wave:"sine",bright:.5},{name:"Ossario Antico",scale:"phrygian",root:46,tempo:.4,wave:"triangle",bright:.1},{name:"Cascata Nascosta",scale:"dorian",root:54,tempo:.6,wave:"sine",bright:.35},{name:"Picco Gelido",scale:"pentaMinor",root:56,tempo:.5,wave:"sine",bright:.3},{name:"Foresta di Mezzanotte",scale:"aeolian",root:51,tempo:.5,wave:"sine",bright:.2},{name:"Altare Rovesciato",scale:"harmonicMinor",root:47,tempo:.5,wave:"triangle",bright:.15},{name:"Oasi nel Deserto",scale:"mixolydian",root:55,tempo:.7,wave:"sine",bright:.4},{name:"Ponte di Pietra",scale:"dorian",root:53,tempo:.6,wave:"sine",bright:.3},{name:"Cripta di Cristallo",scale:"lydian",root:59,tempo:.5,wave:"sine",bright:.5},{name:"Radura Silente",scale:"pentaMinor",root:52,tempo:.6,wave:"sine",bright:.3},{name:"Cielo Infinito",scale:"lydian",root:61,tempo:.6,wave:"sine",bright:.55},{name:"Fornace degli Dei",scale:"harmonicMinor",root:48,tempo:.6,wave:"triangle",bright:.2},{name:"Ascesa Finale",scale:"pentaMajor",root:60,tempo:.7,wave:"sine",bright:.5}];
class p${constructor(){this.ctx=null,this.master=null,this.reverb=null,this.reverbGain=null,this.trackGain=null,this.currentTrack=Math.floor(Math.random()*So.length),this.volume=.45,this.muted=!1,this.playing=!1,this.intervals=[],this.arpStep=0,this.chordIdx=0}init(){if(!this.ctx)try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:this.volume,this.master.connect(this.ctx.destination),this.reverb=this._makeReverb(),this.reverbGain=this.ctx.createGain(),this.reverbGain.gain.value=.4,this.reverb.connect(this.reverbGain),this.reverbGain.connect(this.master)}catch{}}_makeReverb(){const e=this.ctx.createConvolver(),t=this.ctx.sampleRate*2.5,i=this.ctx.createBuffer(2,t,this.ctx.sampleRate);for(let r=0;r<2;r++){const o=i.getChannelData(r);for(let a=0;a<t;a++)o[a]=(Math.random()*2-1)*Math.pow(1-a/t,2.5)}return e.buffer=i,e}_midiToFreq(e){return 440*Math.pow(2,(e-69)/12)}_getNote(e,t){const i=t%e.length,r=Math.floor(t/e.length);return e[i]+r*12}_newTrackGain(){if(this.trackGain&&this.ctx){const e=this.trackGain;e.gain.cancelScheduledValues(this.ctx.currentTime),e.gain.setValueAtTime(e.gain.value,this.ctx.currentTime),e.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.15),setTimeout(()=>{try{e.disconnect()}catch{}},300)}this.trackGain=this.ctx.createGain(),this.trackGain.gain.value=0,this.trackGain.connect(this.master),this.trackGain.connect(this.reverb),this.trackGain.gain.linearRampToValueAtTime(1,this.ctx.currentTime+.4)}async play(){if(this.init(),!this.ctx)return!1;if(this.ctx.state==="suspended")try{await this.ctx.resume()}catch{return!1}return this.playing=!0,this._startTrack(this.currentTrack),!0}pause(){this.playing=!1,this._clearIntervals(),this.trackGain&&this.ctx&&(this.trackGain.gain.cancelScheduledValues(this.ctx.currentTime),this.trackGain.gain.setValueAtTime(this.trackGain.gain.value,this.ctx.currentTime),this.trackGain.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.15))}_clearIntervals(){for(const e of this.intervals)clearInterval(e);this.intervals=[]}_startTrack(e){this._clearIntervals();const t=So[e];if(!t||!this.ctx)return;this.currentTrack=e,this._newTrackGain();const i=f$[t.scale],r=t.root;this.arpStep=0,this.chordIdx=0,this._startPad(r,i,t),this._startArpeggio(r,i,t),this._startBass(r,t)}_startPad(e,t,i){const r=[0,5,3,4],o=()=>{if(!this.playing||!this.ctx||!this.trackGain)return;const a=r[this.chordIdx%r.length],c=e-12,u=[this._getNote(t,a),this._getNote(t,a+2),this._getNote(t,a+4)];for(const d of u){const p=this.ctx.createOscillator();p.type=i.wave||"sine",p.frequency.value=this._midiToFreq(c+d);const f=this.ctx.createOscillator();f.type=i.wave||"sine",f.frequency.value=this._midiToFreq(c+d)*1.003;const m=this.ctx.createGain();m.gain.value=0;const v=this.ctx.createBiquadFilter();v.type="lowpass",v.frequency.value=500+(i.bright||.3)*1200,v.Q.value=.8,p.connect(v),f.connect(v),v.connect(m),m.connect(this.trackGain);const _=this.ctx.currentTime;m.gain.setValueAtTime(0,_),m.gain.linearRampToValueAtTime(.05,_+2.5),m.gain.linearRampToValueAtTime(.04,_+6),m.gain.linearRampToValueAtTime(0,_+8.5),p.start(_),f.start(_),p.stop(_+9),f.stop(_+9);const w=this.ctx.createOscillator();w.frequency.value=.08+Math.random()*.06;const x=this.ctx.createGain();x.gain.value=150,w.connect(x),x.connect(v.frequency),w.start(_),w.stop(_+9)}this.chordIdx++};o(),this.intervals.push(setInterval(o,8e3))}_startArpeggio(e,t,i){const o=1e3/(i.tempo||.6),a=[0,1,2,3,4,3,2,1],c=()=>{if(!this.playing||!this.ctx||!this.trackGain)return;const u=a[this.arpStep%a.length],d=Math.floor(this.arpStep/a.length)%2,p=e+this._getNote(t,u)+d*12,f=this.ctx.createOscillator();f.type="sine",f.frequency.value=this._midiToFreq(p);const m=this.ctx.createGain();m.gain.value=0;const v=this.ctx.createBiquadFilter();v.type="lowpass",v.frequency.value=2e3,f.connect(v),v.connect(m),m.connect(this.trackGain);const _=this.ctx.currentTime;m.gain.setValueAtTime(0,_),m.gain.linearRampToValueAtTime(.06,_+.03),m.gain.exponentialRampToValueAtTime(.001,_+1.8),f.start(_),f.stop(_+2),this.arpStep++};c(),this.intervals.push(setInterval(c,o))}_startBass(e){const t=()=>{if(!this.playing||!this.ctx||!this.trackGain)return;const i=this.ctx.createOscillator();i.type="triangle",i.frequency.value=this._midiToFreq(e-24);const r=this.ctx.createGain();r.gain.value=0;const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=250,i.connect(o),o.connect(r),r.connect(this.trackGain);const a=this.ctx.currentTime;r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(.08,a+1.5),r.gain.linearRampToValueAtTime(.06,a+7),r.gain.linearRampToValueAtTime(0,a+10),i.start(a),i.stop(a+10.5)};t(),this.intervals.push(setInterval(t,1e4))}next(){this.currentTrack=(this.currentTrack+1)%So.length,this.playing&&this._startTrack(this.currentTrack)}prev(){this.currentTrack=(this.currentTrack-1+So.length)%So.length,this.playing&&this._startTrack(this.currentTrack)}setVolume(e){this.volume=e,this.master&&!this.muted&&(this.master.gain.value=e)}mute(){this.muted=!0,this.master&&(this.master.gain.value=0)}unmute(){this.muted=!1,this.master&&(this.master.gain.value=this.volume)}getTrackInfo(){return So[this.currentTrack]||{name:""}}isPlaying(){return this.playing}isMuted(){return this.muted}getVolume(){return this.volume}getTrackIndex(){return this.currentTrack}getTrackCount(){return So.length}}
const fi=new p$;
const hn=n=>{const e=parseInt((n||"#ffffff").replace("#",""),16);return isNaN(e)?16777215:e};
;function DBA_R3(host,b,o,party){
 const V=window.__dgv=window.__dgv||{zm:1,m:0},X=b.arena,C=hn,P=Math.PI,W=o.W,hw=W/2,Dp=20;let w=host.clientWidth||360,h=host.clientHeight||480,asp=w/h;
 const S=new E2;S.background=new Rt(0);
 let bf=asp<1?72:52;const cam=new ir(bf,asp,.1,160),rd=new $2({antialias:!0,powerPreference:"high-performance"});
 rd.setPixelRatio(Math.min(devicePixelRatio,1.5));rd.setSize(w,h);rd.domElement.style.cssText="display:block;width:100%;height:100%";host.appendChild(rd.domElement);
 const onRz=()=>{const W2=host.clientWidth,H2=host.clientHeight;if(!W2||!H2||(W2==w&&H2==h))return;w=W2;h=H2;asp=w/h;bf=asp<1?72:52;rd.setSize(w,h);cam.aspect=asp;cam.fov=V.m===2?80:bf;cam.updateProjectionMatrix()},onOr=()=>{setTimeout(onRz,120);setTimeout(onRz,500)};addEventListener("resize",onRz);addEventListener("orientationchange",onOr);const ro=window.ResizeObserver?new ResizeObserver(onRz):null;ro&&ro.observe(host);const rzOff=()=>{removeEventListener("resize",onRz);removeEventListener("orientationchange",onOr);ro&&ro.disconnect()};
 S.add(new B2(6706602,.9));let L=new kp(C(X.light),1.2);L.position.set(8,22,8);S.add(L);L=new kp(C(X.ring),.6);L.position.set(-12,8,-10);S.add(L);
 const cv=document.createElement("canvas");cv.width=2048;cv.height=1024;const g2=cv.getContext("2d");g2.fillStyle="#02010a";g2.fillRect(0,0,2048,1024);
 for(let i=0;i<7;i++){const x=Math.random()*2048,y=Math.random()*1024,q=150+Math.random()*250,gr=g2.createRadialGradient(x,y,0,x,y,q);gr.addColorStop(0,["rgba(120,60,200,.35)","rgba(40,90,220,.3)","rgba(200,60,140,.28)"][i%3]);gr.addColorStop(1,"rgba(0,0,0,0)");g2.fillStyle=gr;g2.fillRect(0,0,2048,1024)}
 for(let i=0;i<1800;i++){g2.fillStyle="rgba(255,255,255,"+(.3+Math.random()*.7)+")";g2.beginPath();g2.arc(Math.random()*2048,Math.random()*1024,Math.random()<.04?2.2:Math.random()*1.2+.3,0,P*2);g2.fill()}
 S.add(new fe(new Tt(130,32,16),new ln({map:new Og(cv),side:_n,fog:!1})));
 const M=(c,x)=>new zt(Object.assign({color:c,roughness:.7,metalness:.2},x||{})),add=(m,x,y,z,g)=>{m.position.set(x,y,z);(g||S).add(m);return m},rc=C(X.ring);
 const SH=o.sh||"rect",pg=(N,R)=>Array.from({length:N},(_,k)=>{const f=P/N+k*2*P/N;return[R*Math.sin(f),R*Math.cos(f)]});
 const VS={rect:[[-hw,-Dp],[hw,-Dp],[hw,Dp],[-hw,Dp]],hex:pg(6,26),oct:pg(8,23.8),round:pg(24,22),cross:[[-10,-20],[10,-20],[10,-10],[20,-10],[20,10],[10,10],[10,20],[-10,20],[-10,10],[-20,10],[-20,-10],[-10,-10]]}[SH],SP={rect:W,hex:30,oct:24,round:30,cross:22}[SH],bw={rect:W,hex:52,oct:48,round:44,cross:40}[SH];
 const dbaFK=window.__dgFloorKey,dbaBio=!!(dbaFK&&DBA_BIOTEX[dbaFK]),tx=dbaBio?DBA_BT(dbaFK):DBA_FLOOR(b.theme,X.ground,X.ring,!0);tx.wrapS=tx.wrapT=1002;tx.repeat.set(dbaBio?bw/18:bw/10,bw/10);
 const fm=new zt({color:16777215,map:tx,roughness:.9,metalness:.1}),fb=(w,d)=>{const m=new fe(new rn(w,.4,d),fm);m.position.y=-.2;S.add(m)};
 if(SH=="rect")fb(W,2*Dp);else if(SH=="cross"){fb(20,40);fb(40,20)}else{const N=VS.length,R0=SH=="hex"?26:SH=="oct"?23.8:22,m=new fe(new Fn(R0,R0,.4,N),fm);m.rotation.y=P/N;m.position.y=-.2;S.add(m)}
 const per=(x,sg)=>{let best=null;VS.forEach((p,i)=>{const q=VS[(i+1)%VS.length];if(Math.abs(q[0]-p[0])<1e-6||x<Math.min(p[0],q[0])-1e-6||x>Math.max(p[0],q[0])+1e-6)return;const u=(x-p[0])/(q[0]-p[0]),z=p[1]+u*(q[1]-p[1]);if(!best||sg*z>sg*best.z){const l=Math.hypot(q[0]-p[0],q[1]-p[1]),tx=(q[0]-p[0])/l,tz=(q[1]-p[1])/l;let nx=-tz,nz=tx;if(-nx*x-nz*z<0){nx=-nx;nz=-nz}best={x,z,tx,tz,nx,nz,i}}});return best};
 const ds=o.doors.map(d=>per(d.x*SP,-1)),en=per(0,1);
 const WL=[],FR=[],sx=(a,b,c,d,e,f,g,h)=>{const o=(x,y,z,w,s,t)=>(w-x)*(t-y)-(z-y)*(s-x),d1=o(a,b,c,d,e,f),d2=o(a,b,c,d,g,h),d3=o(e,f,g,h,a,b),d4=o(e,f,g,h,c,d);return d1*d2<0&&d3*d4<0};
 const wm=M(5723454,{emissive:rc,emissiveIntensity:.15}),fr=M(3355443);
 VS.forEach((p,i)=>{const q=VS[(i+1)%VS.length],dx=q[0]-p[0],dz=q[1]-p[1],L=Math.hypot(dx,dz),sg=(c0,c1)=>{const c=(c0+c1)/2,mm=add(new fe(new rn(c1-c0+.6,6.4,.6),wm),p[0]+dx/L*c,3.2,p[1]+dz/L*c);mm.rotation.y=-Math.atan2(dz,dx);WL.push({m:mm,x1:p[0]+dx/L*c0,z1:p[1]+dz/L*c0,x2:p[0]+dx/L*c1,z2:p[1]+dz/L*c1})};
  if(en.i==i){const t=Math.hypot(en.x-p[0],en.z-p[1]);sg(0,t-2.5);sg(t+2.5,L)}else sg(0,L)});
 const frm=(q,glow,full)=>{const g=new zn;g.position.set(q.x+q.nx*.3,0,q.z+q.nz*.3);g.rotation.y=-Math.atan2(q.tz,q.tx);S.add(g);FR.push(g);if(full)add(new fe(new rn(5.6,6,.8),M(1118481,{emissive:rc,emissiveIntensity:glow})),0,3,0,g);[-3,3].forEach(d=>add(new fe(new rn(.8,6.8,1.2),fr),d,3.4,0,g));add(new fe(new rn(6.8,1,1.2),fr),0,6.8,0,g)};
 ds.forEach(q=>frm(q,.7,1));frm(en,.2,0);
 const hs=party.slice(0,12).map((p,i)=>{const g=WOW_build(WOWTT(),p,!1);g.scale.set(1.5,((p.appearance&&p.appearance.heightMul)||1)*1.5,1.5);S.add(g);const dd=p.alive===!1;if(dd)g.rotation.x=-P/2;return{g,i,tx:0,tz:0,dl:0,mv:0,hd:0,dead:dd}});const pk=()=>{const C=window.__dbaCtl;if(C&&C.on){const a=hs.find(a=>!a.dead&&party[a.i]&&party[a.i].id===C.id);if(a)return a}return hs.find(a=>!a.dead)||hs[0]};
 const zs=(o.ev=="n"||o.ev=="m")?12:5,slot=(i,z0)=>[(i%2?1:-1)*(4.5+((i/2|0)%3)*2.1),z0+((i/2/3)|0)*2.2];let mcb=null,t=0,fx=[],ev=null,st={};
 hs.forEach(a=>{const s=o.mode=="enter"?[en.x-en.nx*(2+a.i*.9),en.z-en.nz*(2+a.i*.9)]:slot(a.i,zs);a.g.position.set(s[0],0,s[1]);a.g.rotation.y=o.mode=="enter"?Math.atan2(en.nx,en.nz):P;if(a.dead)a.g.position.y=.4});
 function go(f,cb,hd){hs.forEach(a=>{let q=f(a.i);if(typeof q[0]=="number")q=[q];if(a.dead){const l=q[q.length-1];a.g.position.set(l[0],.4,l[1]);a.mv=0;a.q=[];return}a.q=q.slice(1);a.tx=q[0][0];a.tz=q[0][1];a.dl=a.i*.15;a.mv=1;a.hd=hd?1:0;a.g.visible=!0});mcb=cb}
 function ev0(kind,op){if(ev)S.remove(ev);ev=new zn;ev.position.set(0,0,kind=="n"||kind=="m"?-3:0);ev.scale.setScalar(kind=="m"?1.7:kind=="n"?1.1:1.7);S.add(ev);st={p:0,go:0};op=op||{};
  if(kind=="c"){add(new fe(new rn(2.6,1.2,1.7),M(9132587)),0,.6,0,ev);const lid=new zn;lid.position.set(0,1.2,-.85);const lm=new fe(new rn(2.6,.5,1.7),M(9132587));lm.position.set(0,.25,.85);lid.add(lm);ev.add(lid);st.lid=lid;add(new fe(new rn(2.7,.18,1.8),M(16096779,{metalness:.8})),0,.9,0,ev);
   st.orb=add(new fe(new Tt(.6,16,12),new ln({color:16436245,transparent:!0,opacity:0})),0,2.1,0,ev);st.bm=add(new fe(new Fn(.5,.9,7,16,1,!0),new ln({color:16436245,transparent:!0,opacity:0,side:_n})),0,4.5,0,ev)}
  if(kind=="t"){const c={spike:15680580,arrow:12632256,fire:16737792,poison:8900331}[op.type]||15680580;add(new fe(new Fn(2.6,2.6,.15,6),M(c,{emissive:c,emissiveIntensity:.4})),0,.08,0,ev);add(new fe(new Ps(1.6,1.8,6),new ln({color:c,side:_n})),0,.2,0,ev).rotation.x=-P/2}
  if(kind=="r"){add(new fe(new Fn(.8,1,1.6,8),M(7893356)),0,.8,0,ev);add(new fe(new rn(2.2,2.8,.3),M(4868682)),0,1.4,-1.6,ev);st.orb=add(new fe(new Tt(.55,16,12),new ln({color:rc})),0,3,0,ev);st.rr=add(new fe(new Ci(1,.06,8,40),new ln({color:rc})),0,3,0,ev)}
  if(kind=="n"||kind=="m"){const mg=new zn;ev.add(mg);try{DBA_BM(op.bo,mg)}catch(x){add(new fe(new Gt(1,3,6),M(15680580)),0,1.5,0,mg)}add(new fe(new Ps(3.2,3.8,40),new ln({color:15680580,side:_n})),0,.15,0,mg).rotation.x=-P/2;st.orb=mg}
  st.k=kind}
 function fxs(ty){hs.forEach(a=>{const x=a.g.position.x,z=a.g.position.z;let m,f;
  if(ty=="spike"){m=new fe(new Gt(.35,2.6,6),M(15680580,{emissive:15680580,emissiveIntensity:.6}));f=u=>{m.position.set(x,-1.3+Math.sin(Math.min(1,u*1.2)*P)*2.4,z)}}
  else if(ty=="arrow"){const s=x<0?-1:1;m=new fe(new Gt(.1,1.8,5),M(12632256));m.rotation.z=s>0?P/2:-P/2;f=u=>{m.position.set(s*hw+(x-s*hw)*Math.min(1,u*2),1.9,z);m.visible=u<.6}}
  else if(ty=="fire"){m=new fe(new Gt(.9,3.6,8),new ln({color:16737792,transparent:!0,opacity:.85}));f=u=>{const k=.4+Math.sin(Math.min(1,u)*P)*(.9+Math.random()*.3);m.scale.y=k;m.position.set(x,1.8*k,z)}}
  else{m=new fe(new Tt(1.4,12,10),new ln({color:8900331,transparent:!0,opacity:.5}));f=u=>{m.position.set(x,1.4+u*1.8,z);m.scale.setScalar(1+u*.6);m.material.opacity=.55*(1-u)}}
  S.add(m);fx.push({m,l:1.6,u:0,f})})}
 if(o.ev)ev0(o.ev,{type:o.ty,bo:o.bo});
 const el=rd.domElement,pt=new Map;let pd=0,fh=P,fpP=!1;el.style.touchAction="none";
 el.addEventListener("wheel",ev=>{ev.preventDefault();V.zm=Math.min(1.6,Math.max(.4,V.zm*Math.exp(ev.deltaY*.001)))},{passive:!1});
 el.addEventListener("pointerdown",ev=>pt.set(ev.pointerId,ev));
 el.addEventListener("pointermove",ev=>{if(!pt.has(ev.pointerId))return;pt.set(ev.pointerId,ev);if(pt.size==2){const[p1,p2]=[...pt.values()],dd=Math.hypot(p1.clientX-p2.clientX,p1.clientY-p2.clientY);if(pd)V.zm=Math.min(1.6,Math.max(.4,V.zm*pd/dd));pd=dd}});
 const pu=ev=>{pt.delete(ev.pointerId);pd=0};el.addEventListener("pointerup",pu);el.addEventListener("pointercancel",pu);
 let id;const t0=performance.now(),lp=()=>{id=requestAnimationFrame(lp);const n=(performance.now()-t0)/1e3,dt=Math.min(.05,n-t);t=n;
  let run=0;hs.forEach(a=>{if(!a.mv)return;run=1;if(a.dl>0){a.dl-=dt;return}const p=a.g.position,dx=a.tx-p.x,dz=a.tz-p.z,d=Math.hypot(dx,dz);
   if(d<.12){p.x=a.tx;p.z=a.tz;if(a.q&&a.q.length){const w=a.q.shift();a.tx=w[0];a.tz=w[1];return}p.y=0;a.mv=0;a.g.rotation.z=0;a.g.rotation.y=P;if(a.hd)a.g.visible=!1;return}
   {const sp=Math.min(8*dt,d);p.x+=dx/d*sp;p.z+=dz/d*sp}p.y=Math.abs(Math.sin(t*11+a.i))*.14;a.g.rotation.y=Math.atan2(dx,dz);a.g.rotation.z=Math.sin(t*11+a.i)*.06});
  if(!run&&mcb){const c=mcb;mcb=null;c()}
  st.p+=((st.go?1:0)-st.p)*.08;if(st.lid){st.lid.rotation.x=-st.p*1.3;st.orb.material.opacity=st.p*.7;st.bm.material.opacity=st.p*.35}
  if(st.k=="r"){st.orb.position.y=st.rr.position.y=3+Math.sin(t*1.5)*.25;st.rr.rotation.x=t;st.rr.rotation.y=t*.7}
  if(st.k=="n"||st.k=="m"){st.orb.rotation.y=Math.sin(t)*.3;st.orb.position.y=Math.abs(Math.sin(t*2))*.15}
  fx=fx.filter(q=>{q.u+=dt/q.l;if(q.u>=1){S.remove(q.m);return!1}q.f(q.u);return!0});
  const tn=Math.tan(bf*P/360),dd=Math.max((bw*.9+4)/(2*tn*asp),(bw*.55+6)/(2*tn)),ex=Math.max(dd*1.15,46)*V.zm;
  const fm=V.m===2;if(fm!=fpP){fpP=fm;cam.fov=fm?80:bf;cam.updateProjectionMatrix();if(!fm&&pk())pk().g.visible=!(pk().hd&&!pk().mv)}
  if(V.m>0&&pk()){const g=pk().g,df=Math.atan2(Math.sin(g.rotation.y-fh),Math.cos(g.rotation.y-fh));fh+=df*.08;const fx=Math.sin(fh),fz=Math.cos(fh),p=g.position;
   if(fm){g.visible=!1;cam.position.set(p.x-fx*.2,3.6+p.y,p.z-fz*.2);cam.lookAt(p.x+fx*12,3.1,p.z+fz*12)}
   else{const d=15*V.zm;cam.position.set(p.x-fx*d,8+3*V.zm,p.z-fz*d);cam.lookAt(p.x+fx*5,2.4,p.z+fz*5)}FR.forEach(g=>{g.visible=!(V.m===1&&Math.hypot(cam.position.x-g.position.x,cam.position.z-g.position.z)<10)});WL.forEach(w=>{const mx=(w.x1+w.x2)/2,mz=(w.z1+w.z2)/2;w.m.visible=!(V.m===1&&(sx(cam.position.x,cam.position.z,p.x,p.z,w.x1,w.z1,w.x2,w.z2)||Math.hypot(cam.position.x-mx,cam.position.z-mz)<7))})}
  else{WL.forEach(w=>w.m.visible=!0);FR.forEach(g=>g.visible=!0);const a=.08*Math.sin(t*.25);cam.position.set(Math.sin(a)*ex*.4,ex*.85,ex*.65);cam.lookAt(0,0,asp<1?ex*.3:ex*.08)}
  rd.render(S,cam)};lp();
 return{enter(c){go(i=>[[en.x+en.nx*1.5,en.z+en.nz*1.5],slot(i,zs)],c)},back(c){go(i=>slot(i,12),c)},event:ev0,
  act(op){if(st.k=="c"){st.go=1;if(op.color){st.orb.material.color.set(op.color);st.bm.material.color.set(op.color)}}else if(st.k=="t")fxs(op.type)},
  mid(c){go(i=>slot(i,-13),c)},door(i,c){const q=ds[i];go(k=>{const f=((k%3)-1)*.8;return[[q.x+q.nx*4+q.tx*f,q.z+q.nz*4+q.tz*f],[q.x+q.tx*f*.5,q.z+q.tz*f*.5]]},c,1)},
  flash(c){st.orb&&st.orb.material.color.set(c)},dispose(){rzOff();cancelAnimationFrame(id);rd.dispose();rd.forceContextLoss&&rd.forceContextLoss();rd.domElement.parentNode&&rd.domElement.parentNode.removeChild(rd.domElement)}}}
function DBA_W(host,cfg){
 const P=Math.PI,XD=window.DBA_X,CS=1200,HW=2400;let w=host.clientWidth||360,h=host.clientHeight||640,asp=w/h;
 const mb=a=>()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};let rs=mb(cfg.seed||1),rnd=(a,b)=>a+rs()*(b-a);
 const S=new E2;window.__dbaScene=S;S.background=new Rt(7316188);S.fog=new h_(7316188,90,260);
 const cam=new ir(asp<1?68:52,asp,.1,420);let rd=null,lost=0,zm=1;
 const mkRd=()=>{rd=new $2({antialias:!0,powerPreference:"high-performance"});rd.setPixelRatio(Math.min(devicePixelRatio,2));rd.setSize(w,h);const c=rd.domElement;c.style.cssText="display:block;width:100%;height:100%;touch-action:none";host.insertBefore(c,host.firstChild);c.addEventListener("wheel",e=>{e.preventDefault();zm=Math.min(1.8,Math.max(.5,zm*Math.exp(e.deltaY*.001)))},{passive:!1});c.addEventListener("webglcontextlost",e=>{e.preventDefault();if(rd&&e.target===rd.domElement)lost=1})};
 const suspendR=()=>{if(!rd)return;try{rd.dispose();rd.forceContextLoss&&rd.forceContextLoss()}catch(e){}rd.domElement.remove();rd=null},resumeR=()=>{if(!rd){mkRd();window.DBA_RETEX&&window.DBA_RETEX(1)}};mkRd();
 const onRz=()=>{const W2=host.clientWidth,H2=host.clientHeight;if(!W2||!H2||(W2==w&&H2==h))return;w=W2;h=H2;asp=w/h;if(rd)rd.setSize(w,h);cam.aspect=asp;cam.updateProjectionMatrix()},onOr=()=>{setTimeout(onRz,120);setTimeout(onRz,500)};addEventListener("resize",onRz);addEventListener("orientationchange",onOr);const ro=window.ResizeObserver?new ResizeObserver(onRz):null;ro&&ro.observe(host);const rzOff=()=>{removeEventListener("resize",onRz);removeEventListener("orientationchange",onOr);ro&&ro.disconnect()};
 const AM=new B2(12111064,1.0);S.add(AM);const L=new kp(16773584,1.25);L.position.set(60,120,40);S.add(L);
 const NL=(()=>{try{if(localStorage.getItem("dba_nl")==="0"||localStorage.getItem("dba_q")==="low")return null}catch(e){}const g=new zn;g.isLight=!0;g.isPointLight=!0;g.color=new Rt(16758890);g.intensity=0;g.distance=48;g.decay=1.5;g.castShadow=!1;S.add(g);return g})();
 const mats={},M=(c,x)=>{const k=c+JSON.stringify(x||0);return mats[k]||(mats[k]=new zt(Object.assign({color:c,roughness:.8,metalness:.1},x||{})))};
 const add=(m,x,y,z,g)=>{m.position.set(x,y,z);(g||S).add(m);return m};
 const GE={tr:new Fn(.5,.8,4,6),lf:new Gt(3,7,7),cone:new Gt(1,1,7),box:new rn(1,1,1),cyl:new Fn(1,1,1,10),sph:new Tt(1,8,8)};
 // ---- 14 biomi (uno per elemento di drago) e percorso a serpentina su griglia 4x4
 const KEYS=["inferno","frost","natura","ombra","tempesta","sangue","cristallo","magma","sabbie","spettrale","ossa","luce","caos","abisso"];
 const DEF=[{n:"Terre d'Inferno",ic:"🔥",sh:"volcano",c:[0x2a1208,0xff5a10]},{n:"Ghiacciai Eterni",ic:"❄️",sh:"glacier",c:[0xa8d8ff,0xd8f0ff]},{n:"Foresta Selvatica",ic:"🌲",sh:"tree",c:[0x5c3a1a,0x2f7a3a]},{n:"Valle d'Ombra",ic:"🌑",sh:"spike",c:[0x1a1230,0x8b5cf6]},{n:"Piana della Tempesta",ic:"⛈️",sh:"pylon",c:[0x39424e,0x60a5fa]},{n:"Palude di Sangue",ic:"🩸",sh:"crystal",c:[0x5a0a14,0xdc2626]},{n:"Caverne di Cristallo",ic:"💎",sh:"crystal",c:[0x7ab8ff,0xc4b5fd]},{n:"Crateri di Magma",ic:"🌋",sh:"volcano",c:[0x3a1500,0xff7a00]},{n:"Deserto delle Sabbie",ic:"🏜️",sh:"dune",c:[0xd9b36a,0xb88a3a]},{n:"Brughiera Spettrale",ic:"👻",sh:"pillar",c:[0x9fb4c8,0xc7f9ff]},{n:"Piana d'Ossa",ic:"💀",sh:"bone",c:[0xd8d2c0,0xece6d6]},{n:"Altopiani di Luce",ic:"☀️",sh:"pillar",c:[0xf5f0d0,0xfde68a]},{n:"Terre del Caos",ic:"🌀",sh:"chaos",c:[0xff3366,0x33ddff]},{n:"Abissi Sommersi",ic:"🌊",sh:"spike",c:[0x0b2a4a,0x22d3ee]}];
 const BI=DEF.map((d,i)=>Object.assign({i,t:XD.TPK(KEYS[i])},d));
 const PATH=[];for(let r=0;r<4;r++)for(let c=0;c<4;c++)PATH.push({cx:r%2?3-c:c,cz:r});
 const CI=[];PATH.forEach((p,k)=>CI[p.cz*4+p.cx]=k);
 const cellOf=(x,z)=>CI[Math.min(3,Math.max(0,Math.floor((z+HW)/CS)))*4+Math.min(3,Math.max(0,Math.floor((x+HW)/CS)))];
 const cc=k=>({x:-HW+PATH[k].cx*CS+CS/2,z:-HW+PATH[k].cz*CS+CS/2});
 const GT=[];for(let k=0;k<15;k++){const a=PATH[k],b=PATH[k+1],hx=a.cx!=b.cx;GT.push({k,a:k,b:k+1,u:k-1,ln:hx?"x":"z",open:k==0,p:hx?{x:-HW+Math.max(a.cx,b.cx)*CS,z:cc(k).z}:{x:cc(k).x,z:-HW+Math.max(a.cz,b.cz)*CS}})}
 for(let a=0;a<15;a++)for(let b=a+2;b<15;b++){const pa=PATH[a],pb=PATH[b];if(Math.abs(pa.cx-pb.cx)+Math.abs(pa.cz-pb.cz)!=1)continue;const hx=pa.cx!=pb.cx,cm=Math.max(a,b-3);GT.push({k:GT.length,a,b,u:cm-1,x:1,ln:hx?"x":"z",open:!1,p:hx?{x:-HW+Math.max(pa.cx,pb.cx)*CS,z:cc(a).z}:{x:cc(a).x,z:-HW+Math.max(pa.cz,pb.cz)*CS}})}
 const CAMPS=[cc(0)];for(let k=1;k<=14;k++){const p=GT[k-1].p,c=cc(k),d=Math.hypot(c.x-p.x,c.z-p.z);CAMPS.push({x:p.x+(c.x-p.x)/d*160,z:p.z+(c.z-p.z)/d*160})}
 const nearGate=(x,z,r)=>GT.some(g=>Math.hypot(x-g.p.x,z-g.p.z)<r);
 // ---- terreno con rilievi
 const ph=[0,1,2,3].map(()=>rs()*6.28),sm=t=>{t=Math.max(0,Math.min(1,t));return t*t*(3-2*t)};
 const AMP=k=>k==0?2:k==15?7:({volcano:12,glacier:9,dune:7,tree:6,spike:8,crystal:9,pylon:6,pillar:6,bone:6,chaos:9})[BI[k-1].sh]||6;
 const VF=[],TGM=[];const HT0=(x,z)=>{const k=cellOf(x,z),dx=(((x+HW)%CS)+CS)%CS,dz=(((z+HW)%CS)+CS)%CS,db=Math.min(dx,CS-dx,dz,CS-dz),fb=sm((db-16)/40);let fc=1;for(let i=0;i<CAMPS.length;i++){const c=CAMPS[i];fc=Math.min(fc,sm((Math.hypot(x-c.x,z-c.z)-90)/60))}for(let i=0;i<VF.length;i++){const c=VF[i];fc=Math.min(fc,sm((Math.hypot(x-c.x,z-c.z)-90)/60))}
  return(Math.sin(x*.011+ph[0])*Math.cos(z*.013+ph[1])+.5*Math.sin((x+z)*.027+ph[2])+.25*Math.sin(x*.05-z*.043+ph[3]))*AMP(k)*fb*fc*.55};
 const PONDS=[];{const pr=mb((cfg.seed||1)*7919+13),R0=(a,b)=>a+pr()*(b-a),want=k=>{if(k==0)return[34];const sh=BI[k-1].sh;return sh=="tree"?[44,30]:sh=="glacier"?[40]:sh=="dune"?[26]:[]};for(let k=0;k<=14;k++){const c=cc(k);want(k).forEach(R=>{for(let n=0;n<60;n++){const x=c.x+R0(-CS/2+260,CS/2-260),z=c.z+R0(-CS/2+260,CS/2-260);if(CAMPS.some(q=>Math.hypot(x-q.x,z-q.z)<230)||nearGate(x,z,200)||PONDS.some(q=>Math.hypot(x-q.x,z-q.z)<260))continue;PONDS.push({x,z,r:R,k,h0:HT0(x,z),sh:k?BI[k-1].sh:"vil"});break}})}}
 const HT=(x,z)=>{let h=HT0(x,z);for(let i=0;i<PONDS.length;i++){const q=PONDS[i],dx=x-q.x;if(dx>q.r*1.7||dx<-q.r*1.7)continue;const d=Math.hypot(dx,z-q.z);if(d>q.r*1.6)continue;const w=sm(1-(d-q.r*.9)/(q.r*.7)),dp=d<q.r*1.15?4.5*(1-(d/(q.r*1.15))**2):0;h=h*(1-w)+(q.h0-dp)*w}return h};
 const GTX=[];for(let k=0;k<16;k++){const t=k>=1&&k<=14?BI[k-1].t:BI[k?3:2].t,X=t.arena,bt=k>=1&&k<=14&&DBA_BIOTEX[KEYS[k-1]],tx=k==0?DBA_ST():bt?DBA_BT(KEYS[k-1]):DBA_FLOOR(t.theme,X.ground,X.ring,!0);tx.wrapS=tx.wrapT=1002;GTX[k]=tx;tx.repeat.set(k==0||bt?64:80,k==0||bt?116:80);const g=new qd(CS,CS,150,150);g.rotateX(-P/2);const pa=g.attributes.position,c=cc(k);for(let i=0;i<pa.count;i++)pa.setY(i,HT(pa.getX(i)+c.x,pa.getZ(i)+c.z));g.computeVertexNormals();const f=new fe(g,new zt({color:16777215,map:tx,roughness:.95,metalness:.05}));f.position.set(c.x,0,c.z);S.add(f);TGM.push({g,c,pa})}
 const OBG=new Map(),GS=20;let RX=0,RZ=0,OBL=[],OBM=0;window.__dbaOBG=OBG;
 const addOb=(x,z,r,e)=>{const o={x,z,r,e};OBL.push(o);const a=Math.floor((x-r-4)/GS),b=Math.floor((x+r+4)/GS),c=Math.floor((z-r-4)/GS),d=Math.floor((z+r+4)/GS);for(let i=a;i<=b;i++)for(let j=c;j<=d;j++){const k=(i+300)*1000+j+300;let l=OBG.get(k);if(!l)OBG.set(k,l=[]);l.push(o)}};
 const pushOb=(x,z,pr)=>{for(let it=0;it<3;it++){const l=OBG.get((Math.floor(x/GS)+300)*1000+Math.floor(z/GS)+300);if(!l)break;for(let n=0;n<l.length;n++){const o=l[n];if(o.dead||o.e&&!o.e.on)continue;const dx=x-o.x,dz=z-o.z,m=o.r+pr,d2=dx*dx+dz*dz;if(d2<m*m){if(d2<1e-6){x=o.x+m}else{const d=Math.sqrt(d2);x=o.x+dx/d*m;z=o.z+dz/d*m}}}}RX=x;RZ=z};
 const WT=[];{const mkR=()=>{const c=document.createElement("canvas");c.width=c.height=256;const x=c.getContext("2d");for(let i=0;i<46;i++){const px=Math.random()*256,py=Math.random()*256,w=10+Math.random()*28,h=3+Math.random()*7;x.strokeStyle="rgba(255,255,255,"+(.25+Math.random()*.45)+")";x.lineWidth=1.5+Math.random()*2;const rt=Math.random()*.6,ar=Math.PI*2*(.5+Math.random()*.4);for(const ox of[-256,0,256])for(const oy of[-256,0,256]){x.beginPath();x.ellipse(px+ox,py+oy,w,h,rt,0,ar);x.stroke()}}const t=new Og(c);t.wrapS=t.wrapT=1000;return t};
  PONDS.forEach(q=>{addOb(q.x,q.z,q.r*1.05+2);const ice=q.sh=="glacier",col=ice?0xa9dff0:q.sh=="dune"?0x2fb5c0:q.sh=="tree"?0x2d7fae:0x3a8fc0,wl=q.h0-1.0,g=new zn;g.position.set(q.x,wl,q.z);
   const m1=new fe(new Na(q.r*1.02,56),new zt({color:col,transparent:!0,opacity:ice?.88:.8,roughness:.1,metalness:.15,emissive:col,emissiveIntensity:.12}));m1.rotation.x=-P/2;g.add(m1);
   const t1=mkR(),t2=mkR();t1.repeat.set(q.r/14,q.r/14);t2.repeat.set(q.r/9,q.r/9);
   const m2=new fe(new Na(q.r*1.01,56),new ln({map:t1,transparent:!0,opacity:.4,blending:2,depthWrite:!1,color:ice?0xffffff:0xcfefff}));m2.rotation.x=-P/2;m2.position.y=.05;g.add(m2);
   const m3=new fe(new Na(q.r*1.0,56),new ln({map:t2,transparent:!0,opacity:.25,blending:2,depthWrite:!1,color:0xffffff}));m3.rotation.x=-P/2;m3.position.y=.09;g.add(m3);
   S.add(g);WT.push({p:q,g,m1,t1,t2,wl,ice})})}
 const GR=new Map([[GE.tr,[1.1,2]],[GE.lf,[3,3.5]],[GE.cone,[1,.5]],[GE.box,[.6,.5]],[GE.cyl,[1,.5]],[GE.sph,[1,1]]]);
 const colOf=(g,x,z)=>{let r=0;g.children.forEach(m=>{const q=GR.get(m.geometry);if(!q)return;const sx=Math.max(m.scale.x,m.scale.z),sy=m.scale.y;if(sy<.25||m.position.y-q[1]*sy>2.2)return;let rr=q[0]*sx;if(m.geometry===GE.sph&&sy<4)rr*=.6;if(rr>r)r=rr});if(r>.3)addOb(x,z,Math.min(r*2,32))};
 const HH=new Map([[GE.tr,2],[GE.lf,3.5],[GE.cone,.5],[GE.box,.5],[GE.cyl,.5],[GE.sph,1]]);
 const gnd=(g,fr)=>{if(!g||g.userData.gd||!g.position)return;g.userData.gd=1;const x=g.position.x,z=g.position.z,gs=g.scale.x||1;let r=fr;
  if(r==null){r=0;g.children.forEach(c=>{const q=GR.get(c.geometry);if(!q)return;r=Math.max(r,Math.hypot(c.position.x,c.position.z)+q[0]*Math.max(c.scale.x,c.scale.z))});r=Math.min(r*gs,16)}
  let m=HT(x,z),mxv=m;for(let i=0;i<8;i++){const a=i*Math.PI/4,hv=HT(x+Math.cos(a)*r,z+Math.sin(a)*r);m=Math.min(m,hv);mxv=Math.max(mxv,hv)}
  g.position.y=m;g.updateMatrixWorld(!0);let lo=1e9;
  g.traverse(c=>{if(!c.isMesh||!c.geometry)return;const gg=c.geometry;if(!gg.boundingBox)gg.computeBoundingBox();const bb=gg.boundingBox,e=c.matrixWorld.elements;for(let i=0;i<8;i++){const X=i&1?bb.max.x:bb.min.x,Y=i&2?bb.max.y:bb.min.y,Z=i&4?bb.max.z:bb.min.z,wy=e[1]*X+e[5]*Y+e[9]*Z+e[13];if(wy<lo)lo=wy}});
  g.position.y=(lo<1e8?m-(lo-m)-.1*gs:m-.1*gs)-Math.min(2.2,.25*Math.max(0,mxv-m))};
 let swl=[];const props=[],mk=(o,x,z,r)=>{props.push({o,x,z,r:r||230});S.add(o);return o};props.push=function(p){p.obs=OBL.slice(OBM);OBM=OBL.length;return Array.prototype.push.call(this,p)};window.__dbaProps=props;
 const sh=(geo,mat,sx,sy,sz,y)=>{const m=new fe(geo,mat);m.scale.set(sx,sy,sz);m.position.y=y;return m};
 const sty=(bi,x,z,big)=>{if(PONDS.some(q=>Math.hypot(x-q.x,z-q.z)<q.r*1.1+4))return;const d=BI[bi],c=d.c,s=big?rnd(1.3,1.9):rnd(.8,1.4),g=new zn;g.position.set(x,HT(x,z),z);const A=(geo,col,sx,sy,sz,y,ex)=>g.add(sh(geo,M(col,ex),sx,sy,sz,y));
  switch(d.sh){case"tree":{const v=rs(),lc=()=>rs()<.5?c[1]:c[1]-0x0a1a0a,B2=(geo,col,sx,sy,sz,y,ox,oz,rz)=>{const m=sh(geo,M(col),sx,sy,sz,y);m.position.x=ox;m.position.z=oz;if(rz)m.rotation.z=rz;g.add(m)};
  if(v<.25){A(GE.tr,c[0],s,s,s,2*s);A(GE.lf,lc(),s,s,s,7*s)}
  else if(v<.45){A(GE.tr,c[0],.9*s,1.4*s,.9*s,2.8*s);A(GE.lf,lc(),1.35*s,.8*s,1.35*s,6*s);A(GE.lf,lc(),1.05*s,.8*s,1.05*s,9.2*s);A(GE.lf,lc(),.72*s,.7*s,.72*s,12.2*s)}
  else if(v<.67){A(GE.tr,c[0],1.5*s,.9*s,1.5*s,1.8*s);A(GE.sph,lc(),4.4*s,3.4*s,4.4*s,6.2*s);B2(GE.sph,lc(),3.2*s,2.5*s,3.2*s,5.2*s,2.6*s,0);B2(GE.sph,lc(),3*s,2.4*s,3*s,5.6*s,-1.8*s,2*s);B2(GE.sph,lc(),2.8*s,2.2*s,2.8*s,5*s,-1.4*s,-2.2*s)}
  else if(v<.83){A(GE.tr,c[0],.55*s,1.5*s,.55*s,3.2*s);A(GE.sph,lc(),2.3*s,6.5*s,2.3*s,9.5*s)}
  else if(v<.93){A(GE.tr,c[0],.9*s,1.7*s,.9*s,3.4*s);B2(GE.tr,c[0],.35*s,1.1*s,.35*s,6.4*s,1.1*s,0,-.9);B2(GE.tr,c[0],.3*s,1*s,.3*s,6.8*s,-1*s,.4*s,.8)}
  else{A(GE.tr,c[0],1.2*s,.7*s,1.2*s,1.4*s);A(GE.sph,lc(),5.6*s,2.4*s,5.6*s,4.2*s);B2(GE.sph,lc(),4*s,1.8*s,4*s,3.4*s,3.4*s,1.5*s);B2(GE.sph,lc(),4*s,1.8*s,4*s,3.2*s,-3.2*s,-1.8*s)}
  break}
  case"volcano":{const v=big||rs()<.25;if(v){A(GE.cone,c[0],8*s,15*s,8*s,7.5*s,{emissive:c[1],emissiveIntensity:.3})}else A(GE.cone,c[0],2*s,rnd(4,8),2*s,3,{emissive:c[1],emissiveIntensity:.4});break}
  case"glacier":g.rotation.y=rnd(0,P);A(GE.box,c[0],rnd(4,9)*s,rnd(6,14)*s,rnd(4,9)*s,5*s,{emissive:0x2a5a9a,emissiveIntensity:.25,transparent:!0,opacity:.85});if(rs()<.5)A(GE.cone,c[1],2*s,8*s,2*s,10*s,{transparent:!0,opacity:.9});break;
  case"pillar":A(GE.box,c[0],1.6*s,rnd(4,10)*s,1.6*s,3*s,{emissive:c[1],emissiveIntensity:.25});A(GE.sph,c[1],1.2*s,1.2*s,1.2*s,rnd(7,12)*s,{emissive:c[1],emissiveIntensity:.8});break;
  case"bone":A(GE.box,c[0],1.5*s,rnd(4,10)*s,1.5*s,3*s);A(GE.sph,c[1],1.3*s,1.1*s,1.3*s,rnd(7,12)*s);break;
  case"spike":A(GE.cone,c[0],1.6*s,rnd(7,16)*s,1.6*s,5*s,{emissive:c[1],emissiveIntensity:.35});A(GE.sph,c[1],.5*s,.5*s,.5*s,rnd(10,16)*s,{emissive:c[1],emissiveIntensity:1});break;
  case"crystal":g.rotation.z=rnd(-.3,.3);A(GE.cone,c[1],2*s,rnd(5,12)*s,2*s,4*s,{emissive:c[1],emissiveIntensity:.7,transparent:!0,opacity:.9});A(GE.cone,c[0],1.2*s,rnd(3,6)*s,1.2*s,2*s,{emissive:c[1],emissiveIntensity:.5});break;
  case"dune":A(GE.sph,c[0],rnd(6,12)*s,rnd(1.5,3.5)*s,rnd(6,12)*s,0);if(rs()<.4)A(GE.cyl,0x3a7a3a,.5*s,3.5*s,.5*s,1.8*s);break;
  case"pylon":A(GE.box,c[0],1.6*s,rnd(8,16)*s,1.6*s,4*s);A(GE.sph,c[1],1.1*s,1.1*s,1.1*s,rnd(9,17)*s,{emissive:c[1],emissiveIntensity:1});break;
  default:{const col=[0xff3366,0x33ddff,0xffdd33,0x9966ff][rs()*4|0];g.rotation.set(rnd(0,1),rnd(0,P),rnd(0,1));A(GE.box,col,rnd(2,5)*s,rnd(2,8)*s,rnd(2,5)*s,3*s,{emissive:col,emissiveIntensity:.5})}}
  g.scale.setScalar(2);DBA_TEXOBJ(g,d,bi,GE);colOf(g,x,z);g.userData.sw=d.sh=="tree"?1:0;return mk(g,x,z)};
 const bOf=(x,z)=>{const k=cellOf(x,z);return k>=1&&k<=14?k-1:(k==0?2:3)};
 const line=(x1,z1,x2,z2)=>{const L2=Math.hypot(x2-x1,z2-z1),nx=-(z2-z1)/L2,nz=(x2-x1)/L2;for(let d=0;d<L2;d+=1){const t=d/L2,x=x1+(x2-x1)*t,z=z1+(z2-z1)*t;if(nearGate(x,z,45))continue;for(const sd of[-1,1]){const px=x+nx*12*sd,pz=z+nz*12*sd,bi=bOf(px,pz),sp=BI[bi].sh=="tree"?14:BI[bi].sh=="volcano"?26:18;if(Math.floor(d)%sp)continue;sty(bi,px+rnd(-2,2),pz+rnd(-2,2),!0)}}};
 for(let k=1;k<4;k++){const v=-HW+k*CS;line(v,-HW,v,HW);line(-HW,v,HW,v)}
 {const ed=(x1,z1,x2,z2,ix,iz)=>{const L2=Math.hypot(x2-x1,z2-z1),ux=(x2-x1)/L2,uz=(z2-z1)/L2;[8,20].forEach((off,ri)=>{for(let d=0;d<L2;d+=1){const x=x1+ux*d+ix*off,z=z1+uz*d+iz*off,bi=bOf(x,z),sp=BI[bi].sh=="tree"?14:BI[bi].sh=="volcano"?26:18;if((Math.floor(d)+ri*4)%sp)continue;const px=x+rnd(-2,2),pz=z+rnd(-2,2);if(CAMPS.some(q=>Math.hypot(px-q.x,pz-q.z)<120)||nearGate(px,pz,45))continue;sty(bi,px,pz,!0)}})};
 ed(-HW,-HW,HW,-HW,0,1);ed(-HW,HW,HW,HW,0,-1);ed(-HW,-HW,-HW,HW,1,0);ed(HW,-HW,HW,HW,-1,0)}
 for(let k=0;k<16;k++){const c=cc(k);for(let i=0;i<(k==0?900:380);i++){const x=c.x+rnd(-CS/2+22,CS/2-22),z=c.z+rnd(-CS/2+22,CS/2-22);if(CAMPS.some(q=>Math.hypot(x-q.x,z-q.z)<120)||nearGate(x,z,45)||(k==15&&Math.hypot(x-c.x,z-c.z)<60))continue;sty(bOf(x,z),x,z,!1)}}
 const RTU=[window.__ASSETS["tex_68_a791653a.webp"], window.__ASSETS["tex_69_e750592d.webp"], window.__ASSETS["tex_70_7c07de64.webp"], window.__ASSETS["tex_71_53662e27.webp"], window.__ASSETS["tex_72_d7c7fe15.webp"], window.__ASSETS["tex_73_bd4bb4c4.webp"], window.__ASSETS["tex_74_b48edce2.webp"], window.__ASSETS["tex_75_c8259ba2.webp"]],RTK=[0,5,4,0,7,1,3,1,5,2,6,6,1,7,3,5],RTC={};
  const RTX=n=>{if(RTC[n])return RTC[n];const c=document.createElement("canvas");c.width=192;c.height=512;const x=c.getContext("2d");x.fillStyle="#8a6f4a";x.fillRect(0,0,192,512);const t=new Og(c);t.wrapS=1001;t.wrapT=1003;const im=new Image();im.onload=()=>{x.clearRect(0,0,192,512);x.drawImage(im,0,0,192,512);t.needsUpdate=!0};im.src=RTU[n];return RTC[n]=t};
  const RMAT=(k,kind)=>{const m=new zt({map:RTX(RTK[k]),transparent:!0,depthWrite:!1,roughness:.96,metalness:0,side:_n,color:kind=="s"?0xd2cabd:16777215});m.polygonOffset=!0;m.polygonOffsetFactor=-3;m.polygonOffsetUnits=-3;return m};
 const PLC=[];
 const freeAt=(x,z,r)=>{const a=Math.floor((x-r)/GS),b=Math.floor((x+r)/GS),c=Math.floor((z-r)/GS),d=Math.floor((z+r)/GS);for(let i=a;i<=b;i++)for(let j=c;j<=d;j++){const l=OBG.get((i+300)*1000+j+300);if(l)for(let n=0;n<l.length;n++){const o=l[n];if(Math.hypot(x-o.x,z-o.z)<o.r+r)return!1}}for(let n=0;n<PLC.length;n++){const q=PLC[n];if(Math.hypot(x-q.x,z-q.z)<q.r+r+3)return!1}return!0};
 const pos=(k,r)=>{r=r||4;const c=cc(k);for(let n=0;n<120;n++){const x=c.x+rnd(-CS/2+80,CS/2-80),z=c.z+rnd(-CS/2+80,CS/2-80);if(!CAMPS.some(q=>Math.hypot(x-q.x,z-q.z)<130)&&!nearGate(x,z,60)&&freeAt(x,z,r)){PLC.push({x,z,r});return{x,z}}}return c};
 // ---- cancelli
 GT.forEach(g=>{const o=new zn;o.position.set(g.p.x,HT(g.p.x,g.p.z),g.p.z);S.add(o);const al=g.ln=="x";[-15,15].forEach(d=>{addOb(g.p.x+(al?0:d),g.p.z+(al?d:0),2.2);add(new fe(GE.box,M(0x555555)),al?0:d,10,al?d:0,o).scale.set(3,20,3)});add(new fe(GE.box,M(0x555555)),0,20.5,0,o).scale.set(al?3:34,3,al?34:3);
  g.pm=new zt({color:0xff3030,emissive:0xff1010,emissiveIntensity:.8,transparent:!0,opacity:.45,side:_n});const pn=add(new fe(GE.box,g.pm),0,9,0,o);pn.scale.set(al?.6:28,18,al?28:.6);g.pn=pn});
 const setGate=(k,op)=>{const g=GT[k];if(!g)return;g.open=op;g.pm.color.set(op?0x30ff80:0xff3030);g.pm.emissive.set(op?0x10c050:0xff1010);g.pn.visible=!op};setGate(0,!0);
 // ---- campi e villaggio
 let lc=()=>.5;const VCN=Array(16).fill(1),VIL=[],MKM=[null,"!","?"].map((ch,ix)=>{if(!ch)return null;const cv=document.createElement("canvas");cv.width=128;cv.height=192;const x=cv.getContext("2d");x.font="bold 170px Georgia,serif";x.textAlign="center";x.textBaseline="middle";x.lineWidth=14;x.strokeStyle="#3b2300";x.strokeText(ch,64,100);x.fillStyle=ix==1?"#ffd21f":"#9bd7ff";x.fillText(ch,64,100);return new ln({map:new Og(cv),transparent:!0,side:_n,depthTest:!1,depthWrite:!1})}),npcs=[],NP=[["elder","chierico","#4338ca",0xfacc15,-18,-6],["inn","monaco","#be185d",0xf472b6,18,-4],["arena","gladiatore","#991b1b",0xef4444,-12,22],["shop","arciere","#065f46",0x34d399,14,24],["arcan","stregone","#7c3aed",0xa78bfa,24,8]],camp=(k,c,vi)=>{const g=new zn,tc=k?BI[k-1].c[0]:0x8b5a2b,sty=(k+vi)%4,VRK=WOW_RK[(k*3+vi*5+1)%WOW_RK.length];g.position.set(c.x,HT(c.x,c.z),c.z);S.add(g);
  [[-36,-12],[36,-12],[-32,28],[32,28]].forEach(([x,z])=>{const HS=.74,hg=new zn;hg.position.set(x*(1-HS),0,z*(1-HS));hg.scale.setScalar(HS);g.add(hg);{const lg=Math.abs(x)>=Math.abs(z-8),hx=[10,10.5,lg?8:15,9][sty]*HS,hz=[10,10.5,lg?15:8,9][sty]*HS,rr=3.2,cs=(h)=>{if(h<=rr)return[0];const n=Math.max(2,Math.ceil((2*h-2*rr)/(rr*1.3))+1),a=[];for(let i=0;i<n;i++)a.push(-(h-rr)+i*2*(h-rr)/(n-1));return a};cs(hx).forEach(u=>cs(hz).forEach(v=>addOb(c.x+x+u,c.z+z+v,rr)))}const al=k?DBA_NVALT[k-1][vi%3]:[-1,-1],tn=k==6&&vi==0?0x7a1a20:0,HWM=al[0]>=0?DBA_NVM("w",al[0],tn):(k?DBA_HCOL("w"+k,DBA_HW,tc==0x2a1208?0x6a4a3a:tc,.5):DBA_HW()),HRM=al[1]>=0?DBA_NVM("r",al[1],tn):(k?DBA_HCOL("r"+k,DBA_HR,BI[k-1].c[1],.3):DBA_HR());if(sty==0){add(new fe(GE.box,HWM),x,6.4,z,hg).scale.set(20,12.8,20);add(new fe(GE.cone,HRM),x,18,z,hg).scale.set(16.8,10.4,16.8)}else if(sty==1){add(new fe(GE.cyl,HWM),x,5.5,z,hg).scale.set(20,11,20);add(new fe(GE.cone,HRM),x,16.5,z,hg).scale.set(24,11,24)}else if(sty==2){add(new fe(GE.box,HWM),x,5,z,hg).scale.set(Math.abs(x)>=Math.abs(z-8)?16:30,10,Math.abs(x)>=Math.abs(z-8)?30:16,hg);add(new fe(GE.cone,HRM),x,13.5,z,hg).scale.set(26,8,26)}else{add(new fe(GE.box,HWM),x,11,z,hg).scale.set(14,22,14);add(new fe(GE.cone,HRM),x,29,z,hg).scale.set(15,13,15);add(new fe(GE.box,HWM),x,7,z,hg).scale.set(18,3,18)}if(sty!=0){const fx3=Math.abs(x)>=Math.abs(z-8)?Math.sign(-x)||1:0,fz3=fx3?0:(Math.sign(8-z)||1);add(new fe(GE.box,M(0x3a2410)),x+fx3*(sty==3?7.2:10.2),3.6,z+fz3*(sty==3?7.2:10.2),hg).scale.set(fx3?.6:5.5,7.2,fz3?.6:5.5)}{const fx4=Math.abs(x)>=Math.abs(z-8)?Math.sign(-x)||1:0,fz4=fx4?0:(Math.sign(8-z)||1),WW=[10.12,10.35,8.12,7.12][sty],WY=[7.6,6.5,6,14][sty],US=sty==3?[0]:sty==0?[-7.2,7.2]:[-4.5,4.5],NG=DBA_NGI();US.forEach(u=>{const wm=new fe(sty==3?NG.wg3:NG.wg,NG.win);wm.position.set(x+fx4*WW+fz4*u,WY,z+fz4*WW-fx4*u);wm.rotation.y=Math.atan2(fx4,fz4);hg.add(wm)})}if(sty==0){const fa=Math.abs(x)>=Math.abs(z-8),fn2=fa?[Math.sign(-x)||1,0]:[0,Math.sign(8-z)||1],dc=(nx,nz,u,y,mt,w2,h2)=>{const m=new fe(new qd(w2,h2),mt);m.position.set(x+nx*10.06+nz*u,y,z+nz*10.06-nx*u);m.rotation.y=Math.atan2(nx,nz);hg.add(m)},DM=DBA_HDEC("door"),WM=DBA_HDEC("win"),[fx,fz]=fn2;dc(fx,fz,0,4.1,DM,6.5,8.2);dc(fx,fz,-7.2,7.6,WM,4.2,4.6);dc(fx,fz,7.2,7.6,WM,4.2,4.6);dc(-fx,-fz,-4.6,7,WM,4.6,5);dc(-fx,-fz,4.6,7,WM,4.6,5);dc(fz,-fx,0,7,WM,4.6,5);dc(-fz,fx,0,7,WM,4.6,5)}});
  {const BM=DBA_NVG(0,DBA_NVT.barrel,1,1,0,"b");[[-27,-25],[27,-25],[-23,39],[23,39],[-9,20]].forEach(([x,z])=>{add(new fe(GE.cyl,BM),x,1.15,z,g).scale.set(1.3,2.3,1.3);addOb(c.x+x,c.z+z,1.6)})}
  {const NG=DBA_NGI();
   [[-12,-2],[12,-2],[-12,18],[12,18]].forEach(([x,z])=>{add(new fe(GE.cyl,M(0x4a2e16)),x,2.6,z,g).scale.set(.28,5.2,.28);add(new fe(GE.box,M(0x2a1a0a)),x,5.45,z,g).scale.set(.9,.25,.9);add(new fe(GE.sph,NG.lamp),x,5.95,z,g).scale.set(.55,.7,.55);add(new fe(GE.sph,NG.halo),x,5.95,z,g).scale.set(1.5,1.7,1.5);const pl=new fe(NG.pg,NG.glow);pl.rotation.x=-P/2;pl.position.set(x,.2,z);pl.scale.set(15,15,1);g.add(pl);addOb(c.x+x,c.z+z,.7)});
   [[-6,-10],[6,-10]].forEach(([x,z],bi)=>{add(new fe(GE.cyl,M(0x2b2b30)),x,.9,z,g).scale.set(1.5,.5,1.5);add(new fe(GE.cyl,M(0x3a3a42)),x,.35,z,g).scale.set(.5,.7,.5);const fl=add(new fe(GE.cone,NG.fl),x,1.75,z,g);fl.scale.set(.6,1.2,.6);const pl=new fe(NG.pg,NG.glow);pl.rotation.x=-P/2;pl.position.set(x,.2,z);pl.scale.set(13,13,1);g.add(pl);const ps=[];for(let i=0;i<4;i++){const mt=new ln({color:0x8a8a8a,transparent:!0,opacity:.3,depthWrite:!1}),pm=new fe(GE.sph,mt);pm.position.set(x,4,z);g.add(pm);ps.push({m:pm,mt,ph:i/4+bi*.13})}DBA_SMK.push({x:c.x+x,z:c.z+z,dx:x,dz:z,fl,pl,p:ps});addOb(c.x+x,c.z+z,1.2)});
   {const gs=new zn;gs.position.set(0,0,-19);g.add(gs);const CV=DBA_NVG(0,DBA_NVT.canvas,1.5,1,0,"cv"),WK=DBA_NVG(0,DBA_NVT.wicker,2,2,0,"wk");
    [[-3,-1.3],[3,-1.3],[-3,1.3],[3,1.3]].forEach(([px2,pz2])=>add(new fe(GE.cyl,M(0x4a2e16)),px2,2.1,pz2,gs).scale.set(.2,4.2,.2));
    const rf=add(new fe(GE.box,CV),0,4.4,0,gs);rf.scale.set(7.6,.22,4);rf.rotation.x=.16;
    add(new fe(GE.box,M(0x6a4526)),0,.8,.2,gs).scale.set(6,1.6,2.2);
    [[-1.9,0xdc2626],[0,0xfacc15],[1.9,0x65a30d]].forEach(([bx,fc])=>{add(new fe(GE.cyl,WK),bx,1.95,.2,gs).scale.set(.85,.7,.85);for(let i=0;i<3;i++)add(new fe(GE.sph,M(fc)),bx+(i-1)*.35,2.45,.2+(i%2?.2:-.15),gs).scale.set(.38,.38,.38)});
    add(new fe(GE.cyl,WK),-4.6,.55,1.6,gs).scale.set(.9,1.1,.9);add(new fe(GE.cyl,WK),4.6,.55,1.8,gs).scale.set(.8,1.0,.8);addOb(c.x,c.z-19,4.2)}}
  {const PM=DBA_NVG(k,DBA_NVT.plaza,2,2,tc,"p"),rd0=k?DBA_NVRD[k-1]:-1,RM=RMAT(k,"m");[PM,RM].forEach(m=>{m.polygonOffset=!0;m.polygonOffsetFactor=-2;m.polygonOffsetUnits=-2});add(new fe(DBA_PLG||(DBA_PLG=new Fn(1,1,1,40)),PM),0,.12,8,g).scale.set(15,.2,15);
   [[-36,-12],[36,-12],[-32,28],[32,28]].forEach(([x,z])=>{const dx=x,dz=z-8,d=Math.hypot(dx,dz),a0=13,a1=d-9,L=a1-a0;if(L<4)return;const pg=new qd(L,6),uv=pg.attributes.uv;for(let i=0;i<uv.count;i++){const u0=uv.getX(i),v0=uv.getY(i);uv.setXY(i,v0,u0*L/16)}const rg=new zn;rg.position.set(dx/d*(a0+a1)/2,.1,8+dz/d*(a0+a1)/2);rg.rotation.y=-Math.atan2(dz,dx);const rm=new fe(pg,RM);rm.rotation.x=-P/2;rg.add(rm);g.add(rg)})}
  addOb(c.x,c.z+8,4.9);add(new fe(GE.cyl,M(0x9a9a9a)),0,1.5,8,g).scale.set(4.25,3,4.25);add(new fe(GE.cyl,new ln({color:0x3b82f6})),0,3.05,8,g).scale.set(3,.6,3);add(new fe(new Ps(64,66,64),new ln({color:0x22c55e,side:_n})),0,.15,0,g).rotation.x=-P/2;
  {const RN=WOW_RACES[VRK].n,ROLE=["Cacciatori","Esploratori","Naturalisti"][vi%3],TT=k==0?"Villaggio di partenza":"Villaggio dei "+ROLE,cv=document.createElement("canvas");cv.width=512;cv.height=160;const cx2=cv.getContext("2d"),hu=((k*47+vi*113)%360);cx2.fillStyle="#3a2410";cx2.fillRect(0,0,512,160);cx2.strokeStyle="hsl("+hu+",70%,55%)";cx2.lineWidth=10;cx2.strokeRect(8,8,496,144);cx2.fillStyle="#f5e6c4";cx2.textAlign="center";cx2.font="bold 46px Georgia,serif";cx2.fillText(TT.length>22?"Villaggio · "+ROLE:TT,256,76);cx2.font="34px Georgia,serif";cx2.fillStyle="hsl("+hu+",80%,75%)";cx2.fillText("Popolo: "+RN,256,125);const sg=new fe(new qd(15,4.7),new ln({map:new Og(cv),side:_n}));sg.position.set(0,10.5,-27);g.add(sg);add(new fe(GE.cyl,M(0x4a2e16)),-7,5,-27,g).scale.set(.7,10,.7);add(new fe(GE.cyl,M(0x4a2e16)),7,5,-27,g).scale.set(.7,10,.7);
   [-1,1].forEach(sd=>{const bn=new fe(new qd(3.4,6.8),new ln({map:DBA_NVT1("bn",DBA_NVT.banner,256,512,1,1),color:new Rt("hsl("+hu+",55%,78%)"),side:_n}));bn.position.set(sd*21,11,-26);g.add(bn);add(new fe(GE.cyl,M(0x4a2e16)),sd*21,7.5,-26,g).scale.set(.45,15,.45)});addOb(c.x-7,c.z-27,1);addOb(c.x+7,c.z-27,1)}
  NP.forEach(([kd,cl,col,mkc,x,z])=>{if(kd=="elder"&&!k)return;const ra=vi?lc():rs(),rb=vi?lc():rs(),rc=vi?lc():rs(),rd=vi?lc():rs(),rk=VRK,RC2=WOW_RACES[rk],ap={sex:rb<.5?"male":"female",race:rk,skinColor:RC2.skin[rc*RC2.skin.length|0],hairColor:RC2.hair[rd*RC2.hair.length|0]};ap.beardColor=ap.hairColor;if(RC2.eye!=null)ap.eyeColor=RC2.eye;if(RC2.beard&&ap.sex!="female")ap.beardStyle=1;
   const q=new zn;q.position.set(c.x+x,HT(c.x+x,c.z+z),c.z+z);q.rotation.y=Math.atan2(-x,8-z);q.visible=!1;S.add(q);addOb(c.x+x,c.z+z,2.6);
   const o={race:rk,vi:vi,g:q,m:null,my:kd=="elder"?7.6:6.2,x:c.x+x,z:c.z+z,k:kd,b:k-1,cd:0,y:HT(c.x,c.z),built:0};
   o.mk=()=>{o.built=1;try{const m3=WOW_build(WOWTT(),{classKey:cl,color:col,arch:cl=="chierico"?"healer":"melee",name:kd,appearance:ap},!1);m3.scale.set(1.95,1.95,1.95);q.add(m3)}catch(e){add(new fe(GE.cyl,M(0x4338ca)),0,1.65,0,q).scale.set(1.35,3.3,1.35);add(new fe(GE.sph,M(0xf1c9a5)),0,3.9,0,q).scale.set(.9,.9,.9)}if(kd=="elder"){const mm=new fe(new qd(3.4,5.1),MKM[1]);mm.position.set(0,o.my,0);mm.renderOrder=20;mm.visible=!1;q.add(mm);o.m=mm}else{const mm=add(new fe(GE.sph,new ln({color:mkc})),0,o.my,0,q);mm.scale.set(.75,.75,.75);o.m=mm}};
   npcs.push(o)})};
 for(let k=0;k<=14;k++)camp(k,CAMPS[k],0);
 {let ls=1234567;lc=()=>{ls=(ls*1664525+1013904223)%4294967296;return ls/4294967296};
 for(let k=1;k<=14;k++)for(let vi=1;vi<=2;vi++){const cn=cc(k);let ok=null;for(let n=0;n<200&&!ok;n++){const x=cn.x+(lc()-.5)*(CS-220),z=cn.z+(lc()-.5)*(CS-220);if(CAMPS.some(q=>Math.hypot(x-q.x,z-q.z)<190)||VIL.some(q=>Math.hypot(x-q.x,z-q.z)<210)||nearGate(x,z,100)||PONDS.some(q=>Math.hypot(x-q.x,z-q.z)<q.r*1.7+110)||!freeAt(x,z,60))continue;ok={x,z}}
  if(ok){VCN[k]++;VIL.push(ok);VF.push(ok);PLC.push({x:ok.x,z:ok.z,r:75});camp(k,ok,vi)}}
  TGM.forEach(t=>{const p=t.pa;let ch=0;for(let i=0;i<p.count;i++){const wx=p.getX(i)+t.c.x,wz=p.getZ(i)+t.c.z;if(VF.some(q=>Math.abs(wx-q.x)<160&&Math.abs(wz-q.z)<160)){p.setY(i,HT(wx,wz));ch=1}}if(ch){p.needsUpdate=!0;t.g.computeVertexNormals();t.g.computeBoundingSphere()}});{let jj=0;for(let i=0;i<props.length;i++){const q=props[i];if(VF.some(v=>Math.hypot(q.x-v.x,q.z-v.z)<95)){S.remove(q.o);(q.obs||[]).forEach(w=>{if(Math.hypot(w.x-q.x,w.z-q.z)<40)w.dead=1})}else props[jj++]=q}props.length=jj}}

 // ---- strade e sentieri
 const ROADS=[],JS=[];{
  let rl=987654;const rc=()=>{rl=(rl*1664525+1013904223)%4294967296;return rl/4294967296},hyp=Math.hypot;
  const VA=[...CAMPS,...VIL];
  const crs=(Pt,step)=>{const o=[],n=Pt.length;for(let i=0;i<n-1;i++){const p0=Pt[Math.max(i-1,0)],p1=Pt[i],p2=Pt[i+1],p3=Pt[Math.min(i+2,n-1)],m=Math.max(1,Math.ceil(hyp(p2[0]-p1[0],p2[1]-p1[1])/step));for(let j=0;j<m;j++){const t=j/m,t2=t*t,t3=t2*t;o.push([0,1].map(a=>.5*((2*p1[a])+(-p0[a]+p2[a])*t+(2*p0[a]-5*p1[a]+4*p2[a]-p3[a])*t2+(-p0[a]+3*p1[a]-3*p2[a]+p3[a])*t3)))}}o.push(Pt[n-1].slice());return o};
  const fin=(Pt,ex,bnd)=>{let a=crs(Pt,10),D=0,L=[0];for(let i=1;i<a.length;i++){D+=hyp(a[i][0]-a[i-1][0],a[i][1]-a[i-1][1]);L.push(D)}const ph=rc()*6.28,ph2=rc()*6.28;a=a.map((p,i)=>{const q=a[Math.min(a.length-1,i+1)],r=a[Math.max(0,i-1)];let tx=q[0]-r[0],tz=q[1]-r[1];const l=hyp(tx,tz)||1;tx/=l;tz/=l;const f=Math.min(1,L[i]/170,(D-L[i])/170),o=(Math.sin(L[i]*.021+ph)*5+Math.sin(L[i]*.053+ph2)*2.2)*f;return[p[0]-tz*o,p[1]+tx*o]});
   for(let it=0;it<3;it++){a=a.map((p,i)=>{if(i==0||i==a.length-1)return p;let x=p[0],z=p[1];for(const q of PONDS){const d=hyp(x-q.x,z-q.z),R=q.r*1.75+7;if(d<R){const u=Math.max(d,1);x=q.x+(x-q.x)/u*R;z=q.z+(z-q.z)/u*R}}for(const q of VA){if(ex&&ex.includes(q))continue;const d=hyp(x-q.x,z-q.z);if(d<95){const u=Math.max(d,1);x=q.x+(x-q.x)/u*95;z=q.z+(z-q.z)/u*95}}if(bnd){const c=bnd,m=95;x=Math.max(c.x-CS/2+m,Math.min(c.x+CS/2-m,x));z=Math.max(c.z-CS/2+m,Math.min(c.z+CS/2-m,z))}return[x,z]});
    a=a.map((p,i)=>{if(i==0||i==a.length-1)return p;const q=a[i-1],r=a[i+1];return[(q[0]+p[0]*2+r[0])/4,(q[1]+p[1]*2+r[1])/4]})}
   const out=[a[0]];let acc=0;for(let i=1;i<a.length;i++){acc+=hyp(a[i][0]-a[i-1][0],a[i][1]-a[i-1][1]);if(acc>=6||i==a.length-1){out.push(a[i]);acc=0}}return out};
  const side=(v,tx)=>tx>=v.x?1:-1,sOut={};
  const legPts=(A,B,aV,bV)=>{const P2=[];if(aV){const sd=side(A,B.x),ky=A.x+"_"+A.z+"_"+sd;P2.push([A.x+sd*9,A.z+8]);P2.push([A.x+sd*66,A.z+8])}else P2.push([A.x,A.z]);const a=P2[P2.length-1],bs=bV?side(B,A.x):0,b=bV?[B.x+bs*66,B.z+8]:[B.x,B.z],L=hyp(b[0]-a[0],b[1]-a[1]),nm=Math.floor(L/240);for(let j=1;j<=nm;j++){const t=j/(nm+1),nx=-(b[1]-a[1])/L,nz=(b[0]-a[0])/L,o=(rc()-.5)*2*Math.min(120,L*.2);P2.push([a[0]+(b[0]-a[0])*t+nx*o,a[1]+(b[1]-a[1])*t+nz*o])}P2.push(b);if(bV)P2.push([B.x+bs*9,B.z+8]);return P2};
  const add=(k,w,pts,kind)=>{if(pts.length>2)ROADS.push({k,w,pts,kind})};
  for(let k=0;k<=15;k++){
   let nodes;
   if(k==0)nodes=[{p:CAMPS[0],v:1},{p:GT[0].p,v:0}];
   else if(k==15){const g=GT[14].p,c=cc(15),d=hyp(c.x-g.x,c.z-g.z);nodes=[{p:g,v:0},{p:{x:c.x-(c.x-g.x)/d*110,z:c.z-(c.z-g.z)/d*110},v:0}]}
   else{const g0=GT[k-1].p,g1=GT[k].p,vs=[CAMPS[k],...VIL.filter(v=>cellOf(v.x,v.z)===k)],dx=g1.x-g0.x,dz=g1.z-g0.z;vs.sort((a,b)=>((a.x-g0.x)*dx+(a.z-g0.z)*dz)-((b.x-g0.x)*dx+(b.z-g0.z)*dz));nodes=[{p:g0,v:0},...vs.map(p=>({p,v:1})),{p:g1,v:0}]}
   const cl=cc(k),mainAll=[];
   for(let i=0;i<nodes.length-1;i++){const A=nodes[i],B=nodes[i+1],ex=[A.p,B.p],pts=fin(legPts(A.p,B.p,A.v,B.v),ex,null),nb=ROADS.length;add(k,9,pts,"m");if(ROADS.length>nb){ROADS[nb].A=A;ROADS[nb].B=B;ROADS[nb].i=i;ROADS[nb].n=nodes.length}pts.forEach(q=>mainAll.push(q))}
   if(k>=1&&k<=14&&mainAll.length>30){const ok=(p)=>!VA.some(q=>hyp(p[0]-q.x,p[1]-q.z)<150)&&!GT.some(g=>hyp(p[0]-g.p.x,p[1]-g.p.z)<140),cand=mainAll.map((p,i)=>i).filter(i=>i>4&&i<mainAll.length-5&&ok(mainAll[i])),used=[];
    const pick=()=>{for(let t=0;t<40;t++){const i=cand[rc()*cand.length|0];if(i!=null&&used.every(u=>Math.abs(u-i)>28)){used.push(i);return i}}return -1};
    for(let n=0;n<3;n++){const i=pick();if(i<0)break;const p=mainAll[i],q=mainAll[Math.min(mainAll.length-1,i+2)],r=mainAll[Math.max(0,i-2)];let tx=q[0]-r[0],tz=q[1]-r[1];const l=hyp(tx,tz)||1;tx/=l;tz/=l;let sg=rc()<.5?1:-1;if(((p[0]+(-tz*sg)*120)-cl.x)**2+((p[1]+(tx*sg)*120)-cl.z)**2>((p[0]-cl.x)**2+(p[1]-cl.z)**2)&&rc()<.7)sg=-sg;
     JS.push({k,x:p[0],z:p[1],tx,tz,sg,loop:n>=2});if(n<2){let h=Math.atan2(tx*sg,-tz*sg)+(rc()-.5)*.5,x=p[0],z=p[1];const Pt=[[x,z]],len=5+(rc()*5|0);for(let j=0;j<len;j++){h+=(rc()-.5)*.9;let hx=Math.cos(h),hz=Math.sin(h);const nx=x+hx*38,nz=z+hz*38;if(Math.abs(nx-cl.x)>CS/2-130||Math.abs(nz-cl.z)>CS/2-130){h=Math.atan2(cl.z-z,cl.x-x)+(rc()-.5)*.4;hx=Math.cos(h);hz=Math.sin(h)}x+=hx*38;z+=hz*38;Pt.push([x,z])}
      const pts=fin(Pt,[],cl);add(k,5.5,pts,"s");const e=pts[pts.length-1],hh=HT(e[0],e[1]),g=new zn;g.position.set(e[0],hh,e[1]);[[1.6,.9,0],[1.2,1.8,.1],[.8,2.5,-.1]].forEach(([r2,y,o2])=>{const m=new fe(GE.sph,M(0x8a8f96));m.scale.set(r2*1.25,r2*.85,r2*1.25);m.position.set(o2,y*.5+.3,0);g.add(m)});const pl=new fe(GE.cyl,M(0x5a3a1e));pl.scale.set(.18,3.2,.18);pl.position.set(2.4,1.6,.4);g.add(pl);S.add(g)}
     else{const j=Math.min(mainAll.length-1,i+44),pj=mainAll[j];if(!ok(pj)||j-i<30)continue;const mx2=(p[0]+pj[0])/2,mz2=(p[1]+pj[1])/2,dx2=pj[0]-p[0],dz2=pj[1]-p[1],dl=hyp(dx2,dz2)||1,o=sg*110,b=[mx2-dz2/dl*o,mz2+dx2/dl*o];if(Math.abs(b[0]-cl.x)>CS/2-120||Math.abs(b[1]-cl.z)>CS/2-120)continue;add(k,5.5,fin([p.slice(),[p[0]+(b[0]-p[0])*.5,p[1]+(b[1]-p[1])*.5],b,[pj[0]+(b[0]-pj[0])*.5,pj[1]+(b[1]-pj[1])*.5],pj.slice()],[],cl),"s")}}}
   if(k==0&&mainAll.length>20){const i=mainAll.length>>1,p=mainAll[i],q=mainAll[i+2]||p,r=mainAll[i-2]||p;let tx=q[0]-r[0],tz=q[1]-r[1];const l=hyp(tx,tz)||1;tx/=l;tz/=l;const Pt=[[p[0],p[1]]];let x=p[0],z=p[1];for(let j=1;j<=5;j++){x+=-tz*34+(rc()-.5)*20;z+=tx*34+(rc()-.5)*20;Pt.push([x,z])}add(k,5.5,fin(Pt,[],cl),"s")}
  }
  // mesh
  const gc=document.createElement("canvas");gc.width=64;gc.height=4;{const x=gc.getContext("2d"),g=x.createLinearGradient(0,0,64,0);g.addColorStop(0,"rgba(255,255,255,0)");g.addColorStop(.28,"rgba(255,255,255,.75)");g.addColorStop(.72,"rgba(255,255,255,.75)");g.addColorStop(1,"rgba(255,255,255,0)");x.fillStyle=g;x.fillRect(0,0,64,4)}
  const GRT=new Og(gc),SHM=k=>{const tc=k>=1&&k<=14?BI[k-1].c[0]:0x6b4a2a,m=new zt({color:new Rt(0x3a2a18).lerp(new Rt(tc),.25),map:GRT,transparent:!0,roughness:1,metalness:0,depthWrite:!1,side:_n});m.polygonOffset=!0;m.polygonOffsetFactor=-2;m.polygonOffsetUnits=-2;return m};
  const build=(list,wm,uv0,extra,yo,po)=>{const Pp=[],Uu=[],Ii=[];list.forEach(r=>{const pts=r.pts,w=r.w+extra,base=Pp.length/3;let D=0;pts.forEach((p,i)=>{const q=pts[Math.min(pts.length-1,i+1)],o=pts[Math.max(0,i-1)];let tx=q[0]-o[0],tz=q[1]-o[1];const l=hyp(tx,tz)||1;tx/=l;tz/=l;if(i)D+=hyp(p[0]-pts[i-1][0],p[1]-pts[i-1][1]);const lx=p[0]-tz*w/2,lz=p[1]+tx*w/2,rx=p[0]+tz*w/2,rz=p[1]-tx*w/2;Pp.push(lx,HT(lx,lz)+yo,lz,rx,HT(rx,rz)+yo,rz);Uu.push(0,D/(w*2.667),1,D/(w*2.667))});for(let i=0;i<pts.length-1;i++){const a=base+i*2;Ii.push(a,a+2,a+1,a+1,a+2,a+3)}});if(!Pp.length)return null;const g=new Jn;g.setAttribute("position",new on(Pp,3));g.setAttribute("uv",new on(Uu,2));g.setIndex(Ii);g.computeVertexNormals();const m=new fe(g,wm);m.renderOrder=po;m.frustumCulled=!1;S.add(m);return m};
  for(let k=0;k<=15;k++){["m","s"].forEach((kd,ki)=>{const L=ROADS.filter(r=>r.k===k&&r.kind===kd);if(L.length)build(L,RMAT(k,kd),1,0,.34+ki*.02,2+ki)})}
  // niente alberi/rocce sul tracciato + zone libere
  const cell=new Map();ROADS.forEach(r=>r.pts.forEach(p=>{const key=Math.floor(p[0]/24)+","+Math.floor(p[1]/24);let l=cell.get(key);if(!l)cell.set(key,l=[]);l.push([p[0],p[1],r.w/2+3.5])}));
  const onRoad=(x,z)=>{const a=Math.floor(x/24),b=Math.floor(z/24);for(let i=a-1;i<=a+1;i++)for(let j=b-1;j<=b+1;j++){const l=cell.get(i+","+j);if(l)for(const q of l)if(hyp(x-q[0],z-q[1])<q[2])return!0}return!1};
  let jj=0;for(let i=0;i<props.length;i++){const p=props[i];if(onRoad(p.x,p.z)){S.remove(p.o);(p.obs||[]).forEach(q=>{if(Math.hypot(q.x-p.x,q.z-p.z)<40)q.dead=1})}else props[jj++]=p}props.length=jj;
  ROADS.forEach(r=>{for(let i=0;i<r.pts.length;i+=4)PLC.push({x:r.pts[i][0],z:r.pts[i][1],r:r.w/2+4})});

  // ---- segnavia
  {const WT=new Map(),tex=(l1,l2)=>{const key=l1+"|"+l2;if(WT.has(key))return WT.get(key);const c=document.createElement("canvas");c.width=512;c.height=192;const x=c.getContext("2d");x.fillStyle="#7a5530";x.fillRect(0,0,512,192);for(let i=0;i<46;i++){x.strokeStyle="rgba(40,22,8,"+(.08+(i%5)*.03)+")";x.lineWidth=1+(i%3);x.beginPath();x.moveTo(0,i*4.2+(i%7));x.bezierCurveTo(170,i*4.2+(i%5)*2,340,i*4.2-(i%4)*2,512,i*4.2+(i%6))}x.strokeStyle="#3a2410";x.lineWidth=12;x.strokeRect(6,6,500,180);x.strokeStyle="#c8a45e";x.lineWidth=3;x.strokeRect(14,14,484,164);x.textAlign="center";x.textBaseline="middle";x.fillStyle="#fdf0cf";x.shadowColor="rgba(0,0,0,.6)";x.shadowBlur=3;let f=l2?50:64;x.font="bold "+f+"px Georgia,serif";while(x.measureText(l1).width>460&&f>24){f-=3;x.font="bold "+f+"px Georgia,serif"}x.fillText(l1,256,l2?72:96);if(l2){let g=40;x.font=g+"px Georgia,serif";while(x.measureText(l2).width>460&&g>20){g-=2;x.font=g+"px Georgia,serif"}x.fillStyle="#f3d58a";x.fillText(l2,256,134)}const t=new Og(c);if(window.DBAQ&&0)t.anisotropy=4;WT.set(key,t);return t};
   const sign=(x,z,nx,nz,fr,bk)=>{const l=hyp(nx,nz)||1;nx/=l;nz/=l;(window.__dbaSigns=window.__dbaSigns||[]).push({x,z,nx,nz,t:fr[0]+"/"+fr[1]});const g=new zn,yaw=Math.atan2(nx,nz);g.position.set(x,HT(x,z),z);const pm=M(0x4a2e16);const po=new fe(GE.cyl,pm);po.scale.set(.2,4.9,.2);po.position.y=2.45;g.add(po);[[1,fr],[-1,bk]].forEach(([sd,tx2])=>{const mm=new fe(new qd(4.6,1.72),new zt({map:tex(tx2[0],tx2[1]),roughness:.9,metalness:0}));mm.position.set(nx*sd*.3,3.7,nz*sd*.3);mm.rotation.y=yaw+(sd<0?Math.PI:0);g.add(mm)});const cap=new fe(GE.box,pm);cap.scale.set(.7,.2,.7);cap.position.y=4.95;cap.rotation.y=yaw+Math.PI/2;g.add(cap);{const NG=DBA_NGI(),lm=new fe(GE.sph,NG.lamp);lm.scale.set(.5,.65,.5);lm.position.set(0,5.4,0);g.add(lm);const hl=new fe(GE.sph,NG.halo);hl.scale.set(1.5,1.7,1.5);hl.position.set(0,5.4,0);g.add(hl);const pl=new fe(NG.pg,NG.glow);pl.rotation.x=-P/2;pl.position.set(0,.6,0);pl.scale.set(11,11,1);g.add(pl)}g.scale.setScalar(1.25);mk(g,x,z,200)};
   const walk=(pts,fromEnd,d)=>{const n=pts.length,a=fromEnd?n-1:0,st=fromEnd?-1:1,e=pts[a];for(let i=a;i>=0&&i<n;i+=st)if(hyp(pts[i][0]-e[0],pts[i][1]-e[1])>=d){const q=pts[Math.min(n-1,Math.max(0,i+st))],r=pts[Math.max(0,Math.min(n-1,i-st))];return{p:pts[i],tx:(q[0]-r[0])*st,tz:(q[1]-r[1])*st}}return null};
   const place=(w,hit,n,fr,bk)=>{if(!hit)return;let tx=-n[0],tz=-n[1];const l=hyp(tx,tz)||1;tx/=l;tz/=l;sign(hit.p[0]+(-tz)*(w/2+2.6),hit.p[1]+tx*(w/2+2.6),n[0],n[1],fr,bk)};
   const bn=k=>k>=1&&k<=14?BI[k-1].n:k==0?"Terre di Partenza":"Tana del Boss";
   ROADS.forEach(r=>{if(r.kind!="m"||!r.A)return;const k=r.k,A=r.A,B=r.B,np=r.pts,isFirst=r.i==0,isLast=r.i==r.n-2;
    [[A,0],[B,1]].forEach(([nd,fe2])=>{const hit=walk(np,fe2,nd.v?100:44);if(!hit)return;const c=nd.p;let nx=hit.p[0]-c.x,nz=hit.p[1]-c.z;
     if(nd.v){const isCamp=CAMPS.includes(c);place(r.w,hit,[nx,nz],[k==0?"🏘 Villaggio":(isCamp?"⛺ Campo base":"🏘 Villaggio"),bn(k)],["↩ Strada",bn(k)])}
     else{const entr=(fe2==0&&isFirst);if(entr){place(r.w,hit,[-nx,-nz],[k==15?"🐉 Tana del Boss":"Benvenuti",k==15?"Il drago attende":bn(k)],["🚪 Portale","↩ "+bn(k-1)])}else if(fe2==1&&isLast){place(r.w,hit,[nx,nz],["🚪 Portale","→ "+(k<14?bn(k+1):"Tana del Boss")],["↩ "+bn(k),"Villaggi e campi"])}}})});
   JS.forEach(j=>{const rt=j.sg>0,nx=-j.tx,nz=-j.tz,off=r=>[j.x+(-j.tz)*r,j.z+j.tx*r],pp=off(-(4.5+2.6));sign(pp[0],pp[1],nx,nz,[j.loop?"Variante":"Sentiero",rt?"➜ a destra":"⬅ a sinistra"],[j.loop?"Variante":"Sentiero",rt?"⬅ a sinistra":"➜ a destra"])});
  }
  window.__dbaRoads=ROADS;
 }
 {const ENV=(k)=>{try{return DBA_OM(k)}catch(e){return null}};
 const place=(g,x,z,r)=>{g.scale.setScalar(2);const rr=r?r*2:4;if(!freeAt(x,z,rr))return 0;if(r)addOb(x,z,r*2);mk(g,x,z);return 1};
 const MUSHT=(()=>{const c=document.createElement("canvas");c.width=c.height=512;const x=c.getContext("2d");x.fillStyle="#c0392b";x.fillRect(0,0,512,512);const t=new Og(c);t.wrapS=t.wrapT=1002;const src=window.__DBA_NT&&window.__DBA_NT.m;if(src){const im=new Image();im.onload=()=>{x.drawImage(im,0,0,512,512);t.needsUpdate=!0};im.src=src}return t})(),
  MUSHM=[0xffffff,0xffc27a,0xe8b8c8].map(c=>new zt({map:MUSHT,color:c,roughness:.55,metalness:0,side:_n})),MCAP=new Tt(1,18,10,0,6.2832,0,1.75),MGIL=(()=>{return new Na(1,18)})(),MGM=new zt({color:0xe8d8b8,roughness:.9,side:_n});
  {const p=MCAP.attributes.position,u=MCAP.attributes.uv;for(let i=0;i<p.count;i++)u.setXY(i,p.getX(i)*.5+.5,p.getZ(i)*.5+.5)}
  const dsk=(R2,x,z)=>{const h0=HT(x,z),PP=[0,.16,0],UU=[.5,.5],II=[];for(let rg=1;rg<=3;rg++)for(let sg=0;sg<16;sg++){const a=sg/16*6.2832,px=Math.cos(a)*R2*rg/3,pz=Math.sin(a)*R2*rg/3;PP.push(px,HT(x+px,z+pz)-h0+.16,pz);UU.push(.5+Math.cos(a)*rg/6,.5+Math.sin(a)*rg/6)}for(let sg=0;sg<16;sg++)II.push(0,1+(sg+1)%16,1+sg);for(let rg=1;rg<3;rg++)for(let sg=0;sg<16;sg++){const i0=1+(rg-1)*16+sg,i1=1+(rg-1)*16+(sg+1)%16,o0=1+rg*16+sg,o1=1+rg*16+(sg+1)%16;II.push(i0,i1,o1,i0,o1,o0)}const dg=new Jn;dg.setAttribute("position",new on(PP,3));dg.setAttribute("uv",new on(UU,2));dg.setIndex(II);dg.computeVertexNormals();return dg};
  const clut=(bi,x,z)=>{const d=BI[bi],c=d.c,g=new zn,s2=rnd(.8,1.4),v=rs();g.position.set(x,HT(x,z),z);
  const Q=(geo,col,sx,sy,sz,px,py,pz,ex)=>{const m=new fe(geo,typeof col=="number"?M(col,ex):typeof col=="string"?(ENV(col)||M(0x888888)):col);m.scale.set(sx,sy,sz);m.position.set(px,py,pz);g.add(m);return m};let r=0;const LV=bi==7?"magma":"lava",PK=bi==11?"pdor":"pspe";
  switch(d.sh){
  case"volcano":if(v<.4){Q(GE.sph,LV,3*s2,2.2*s2,2.6*s2,0,.9*s2,0);Q(GE.sph,LV,1.2*s2,.5*s2,1.2*s2,.6*s2,2*s2,0);r=2.6*s2}else if(v<.7){Q(dsk((3+v*7)*s2,x,z),LV,1,1,1,0,0,0);g.userData.gd=1;r=0}else{for(let n=0;n<3;n++)Q(GE.cone,LV,.9*s2,(2.5+n)*s2,.9*s2,(n-1)*1.4*s2,(1.4+n*.5)*s2,(n%2)*1.1*s2);r=2.4*s2}break;
  case"glacier":if(v<.5){Q(GE.sph,"ice",4*s2,1.5*s2,3.4*s2,0,.5*s2,0);r=3*s2}else{for(let n=0;n<4;n++)Q(GE.cone,"ice",.8*s2,(2.5+n*1.2)*s2,.8*s2,(n-1.5)*1.1*s2,(1.3+n*.6)*s2,(n%2)*.9*s2);r=2.6*s2}break;
  case"tree":if(v<.55){const cpi=rs()*3|0;for(let n=0;n<3;n++){const ox=(n-1)*2.2*s2,sc=1-n*.18,tz=(n%2)*1.2;Q(GE.cyl,0xf1e6c8,.5*s2*sc,2*s2*sc,.5*s2*sc,ox,1*s2*sc,tz);const cap=Q(MCAP,MUSHM[cpi],1.9*s2*sc,1.05*s2*sc,1.9*s2*sc,ox,1.9*s2*sc,tz);cap.rotation.y=n*1.7;const gl=Q(MGIL,MGM,1.78*s2*sc,1,1.78*s2*sc,ox,1.9*s2*sc,tz);gl.rotation.x=Math.PI/2}r=3*s2}else{const m=Q(GE.cyl,ENV("bark")||0x5c3a1a,.9*s2,7*s2,.9*s2,0,.8*s2,0);m.rotation.z=Math.PI/2;m.rotation.y=rnd(0,3);r=3.5*s2}break;
  case"spike":if(bi==3){if(v<.6){Q(GE.box,"pspe",1.7*s2,3*s2,.6*s2,0,1.5*s2,0);Q(GE.sph,"pspe",.9*s2,.9*s2,.3*s2,0,3*s2,0);r=1.4*s2}else{Q(GE.sph,0xc4b5fd,.7*s2,.7*s2,.7*s2,0,(3+v*3)*s2,0,{emissive:0x8b5cf6,emissiveIntensity:1.4,transparent:!0,opacity:.8});Q(GE.cone,"rune",.7*s2,3*s2,.7*s2,0,1.5*s2,0);r=1*s2}}else{const cc2=[0xf472b6,0x22d3ee,0xfbbf24,0xa78bfa][rs()*4|0];for(let n=0;n<4;n++)Q(GE.cone,"abi",.7*s2,(2+n*.8)*s2,.7*s2,(n-1.5)*1*s2,(1+n*.4)*s2,(n%2)*.8*s2);r=2.4*s2}break;
  case"pylon":if(v<.6){Q(GE.box,"caos",1.6*s2,.8*s2,1.6*s2,0,.4*s2,0);Q(GE.cyl,0x9ca3af,.35*s2,5*s2,.35*s2,0,3*s2,0);Q(GE.sph,0x60a5fa,.9*s2,.9*s2,.9*s2,0,5.8*s2,0,{emissive:0x60a5fa,emissiveIntensity:1.5});r=1.6*s2}else{for(let n=0;n<3;n++)Q(GE.box,"caos",(1+n*.4)*s2,(.6+n*.2)*s2,(1.4-n*.2)*s2,(n-1)*1.5*s2,(.3+n*.3)*s2,(n%2)*1.2*s2);r=2.4*s2}break;
  case"crystal":if(bi==5){if(v<.5){{Q(dsk((4+v*6)*s2,x,z),"red2",1,1,1,0,0,0);g.userData.gd=1;r=0}}else{for(let n=0;n<4;n++)Q(GE.cone,"red",.55*s2,(3+n)*s2,.55*s2,(n-1.5)*.9*s2,(1.5+n*.5)*s2,(n%2)*.7*s2);r=2.4*s2}}else{const cc2=[0xc4b5fd,0x7ab8ff,0xf0abfc][rs()*3|0];for(let n=0;n<5;n++)Q(GE.cone,"cris",.8*s2,(2+n*.9)*s2,.8*s2,(n-2)*.9*s2,(1+n*.45)*s2,(n%2)*.9*s2);r=2.8*s2}break;
  case"dune":if(v<.55){Q(GE.cyl,0x3a7a3a,.55*s2,4.5*s2,.55*s2,0,2.2*s2,0);const a1=Q(GE.cyl,0x3a7a3a,.4*s2,1.8*s2,.4*s2,1.1*s2,3*s2,0);const a2=Q(GE.cyl,0x3a7a3a,.4*s2,1.5*s2,.4*s2,-1.1*s2,2.6*s2,0);r=1.4*s2}else if(v>.85){Q(GE.sph,"duna",3*s2,1.4*s2,2.6*s2,0,.6*s2,0);r=2.6*s2}else{Q(GE.sph,0xe8dcc0,1.1*s2,.9*s2,1.2*s2,0,.5*s2,0);Q(GE.sph,0x2a2a2a,.3*s2,.3*s2,.2*s2,-.35*s2,.65*s2,.8*s2);Q(GE.sph,0x2a2a2a,.3*s2,.3*s2,.2*s2,.35*s2,.65*s2,.8*s2);r=1.2*s2}break;
  case"pillar":if(v<.6){Q(GE.cyl,PK,1.3*s2,(2+v*5)*s2,1.3*s2,0,1.2*s2,0);Q(GE.cyl,PK,1.8*s2,.4*s2,1.8*s2,0,.2*s2,0);r=1.8*s2}else{Q(GE.sph,c[1],.8*s2,.8*s2,.8*s2,0,(3+v*2)*s2,0,{emissive:c[1],emissiveIntensity:1.5,transparent:!0,opacity:.85});Q(GE.cyl,PK,.9*s2,.4*s2,.9*s2,0,.2*s2,0);r=1*s2}break;
  case"bone":if(v<.45){for(let n=-2;n<=2;n++){const m=Q(GE.box,"oss",.5*s2,(4-Math.abs(n)*.7)*s2,.5*s2,n*1.2*s2,(2-Math.abs(n)*.2)*s2,0);m.rotation.z=n*.18}r=3*s2}else if(v<.8){Q(GE.sph,"oss",1.5*s2,1.2*s2,1.6*s2,0,1.1*s2,0);Q(GE.sph,0x1a1a1a,.4*s2,.4*s2,.3*s2,-.5*s2,1.3*s2,1.3*s2);Q(GE.sph,0x1a1a1a,.4*s2,.4*s2,.3*s2,.5*s2,1.3*s2,1.3*s2);r=1.6*s2}else{const m=Q(GE.box,"oss",.5*s2,6*s2,.5*s2,0,.5*s2,0);m.rotation.z=1.45;m.rotation.y=rnd(0,3);r=2.6*s2}break;
  default:{const col=[0xff3366,0x33ddff,0xffdd33,0x9966ff][rs()*4|0];for(let n=0;n<3;n++){const m=Q(GE.box,n%2?"caos":"caos2",(1+n*.5)*s2,(1+n*.5)*s2,(1+n*.5)*s2,(n-1)*2*s2,(2+n*1.3)*s2,(n%2)*1.5*s2);m.rotation.set(n,n*.7,n*1.3)}r=2.2*s2}}
  g.userData.sw=(d.sh=="tree"&&v>=.55)?1:0;return place(g,x,z,r)};
 const bush=(x,z)=>{const g=new zn,s2=rnd(.8,1.5),lm=ENV("leaf")||M(0x2f7a3a);for(let n=0;n<3;n++){const m=new fe(GE.sph,lm);m.scale.set((2.2+n*.2)*s2,1.7*s2,(2.2+n*.2)*s2);m.position.set((n-1)*1.4*s2,.8*s2,(n%2)*1.2*s2);g.add(m)}g.position.set(x,HT(x,z),z);g.userData.sw=1.4;return place(g,x,z,2.8*s2)};
 const stump=(x,z)=>{const g=new zn,s2=rnd(.8,1.5),bm=ENV("bark")||M(0x5c3a1a),m=new fe(GE.cyl,bm);m.scale.set(1.2*s2,1.5*s2,1.2*s2);m.position.y=.75*s2;g.add(m);const t=new fe(GE.cyl,M(0xc9a36a));t.scale.set(1.05*s2,.05,1.05*s2);t.position.y=1.52*s2;g.add(t);g.position.set(x,HT(x,z),z);return place(g,x,z,1.3*s2)};
 const rock=(x,z)=>{const g=new zn,s2=rnd(.8,1.5),m=new fe(GE.sph,DBA_HW());m.scale.set(3*s2,1.8*s2,2.4*s2);m.position.y=.7*s2;g.add(m);g.rotation.y=rnd(0,6.28);g.position.set(x,HT(x,z),z);return place(g,x,z,2.4*s2)};
 {const GRM=new zt({vertexColors:!0,side:_n,roughness:1,metalness:0}),gpr=mb((cfg.seed||1)*31+7),mkT=cl=>{const base=new Rt(cl),tip=base.clone().multiplyScalar(1.3),root=base.clone().multiplyScalar(.45),pos=[],col=[],n=30+(gpr()*14|0);for(let i=0;i<n;i++){const a=gpr()*6.283,r=Math.sqrt(gpr())*3.4,bx=Math.cos(a)*r,bz=Math.sin(a)*r,h=.55+gpr()*.8,w=.1+gpr()*.07,ang=gpr()*3.14,lean=(gpr()-.5)*.6,cx=Math.cos(ang),cz=Math.sin(ang);pos.push(bx-cx*w,0,bz-cz*w,bx+cx*w,0,bz+cz*w,bx+Math.cos(a)*lean,h,bz+Math.sin(a)*lean);col.push(root.r,root.g,root.b,root.r,root.g,root.b,tip.r,tip.g,tip.b)}const ge=new Jn();ge.setAttribute("position",new on(pos,3));ge.setAttribute("color",new on(col,3));ge.computeVertexNormals();return ge};
  const GL=[[0,0x5aa03a,900]];BI.forEach((d,i)=>{if(d.sh=="tree")GL.push([i+1,d.c[1],1400]);else if(d.sh=="dune")GL.push([i+1,0xb59a55,350])});
  GL.forEach(([k,cl,N])=>{const tp=[0,1,2,3,4,5].map(()=>mkT(cl)),c0=cc(k);let m=0;for(let t2=0;t2<N*3&&m<N;t2++){const x=c0.x+(gpr()*2-1)*(CS/2-60),z=c0.z+(gpr()*2-1)*(CS/2-60);if(CAMPS.some(q=>Math.hypot(x-q.x,z-q.z)<70)||nearGate(x,z,30)||PONDS.some(q=>Math.hypot(x-q.x,z-q.z)<q.r*1.15+3)||!freeAt(x,z,1.5))continue;const g=new zn,f=new fe(tp[m%6],GRM);f.rotation.y=gpr()*6.28;g.add(f);g.position.set(x,HT(x,z),z);g.scale.setScalar(2);g.userData.sw=2.2;mk(g,x,z,140);m++}})}
  for(let k=0;k<=14;k++){const c0=cc(k),want=k==0?420:90;let n=0;for(let t2=0;t2<want*3&&n<want;t2++){const x=c0.x+rnd(-CS/2+60,CS/2-60),z=c0.z+rnd(-CS/2+60,CS/2-60);if(CAMPS.some(q=>Math.hypot(x-q.x,z-q.z)<125)||nearGate(x,z,55)||(k==15))continue;let ok;if(k==0){const w=rs();ok=w<.4?bush(x,z):w<.7?stump(x,z):rock(x,z)}else ok=rs()<.12?rock(x,z):clut(k-1,x,z);if(ok)n++}}}
 // ---- tesori, fonti, monoliti, risorse, cripte (caverne 3D), santuari
 const NT=(()=>{const mk=(key,fb)=>{const c=document.createElement("canvas");c.width=c.height=512;const x=c.getContext("2d");x.fillStyle=fb;x.fillRect(0,0,512,512);const t=new Og(c);t.wrapS=t.wrapT=1002;const src=window.__DBA_NT&&window.__DBA_NT[key];if(src){const im=new Image();im.onload=()=>{x.drawImage(im,0,0,512,512);t.needsUpdate=!0};im.src=src}return t};return{h:mk("h","#2f6a2a"),o:mk("o","#4a525c")}})();
  const gm=parts=>{const P=[],U=[];parts.forEach(g=>{const ps=g.attributes.position,uv=g.attributes.uv,ix=g.index,n=ix?ix.count:ps.count;for(let i=0;i<n;i++){const j=ix?ix.getX(i):i;P.push(ps.getX(j),ps.getY(j),ps.getZ(j));U.push(uv?uv.getX(j):0,uv?uv.getY(j):0)}g.dispose()});const G=new Jn;G.setAttribute("position",new on(P,3));G.setAttribute("uv",new on(U,2));G.computeVertexNormals();return G};
  const leafG=(w,h,bend,tilt,az,ox,oz)=>{const g=new qd(w,h,2,7),p=g.attributes.position;for(let i=0;i<p.count;i++){const y=Math.min(1,Math.max(0,p.getY(i)/h+.5)),x=p.getX(i),wd=Math.pow(Math.sin(Math.PI*Math.min(.97,y*.93+.035)),.75);p.setX(i,x*wd);p.setZ(i,Math.pow(y,1.8)*bend-Math.abs(x)*wd*.28);p.setY(i,y*h)}const uv=g.attributes.uv,u0=Math.random()*.55,v0=Math.random()*.55,sc=.3+Math.random()*.12;for(let i=0;i<uv.count;i++)uv.setXY(i,u0+uv.getX(i)*sc,v0+uv.getY(i)*sc);g.rotateX(tilt);g.rotateY(az);g.translate(ox,.02,oz);return g};
  const herbV=()=>{const L=[],F=[],n=9+(Math.random()*4|0);for(let i=0;i<n;i++){const a=i*6.283/n+Math.random()*.4,tl=.25+Math.random()*.55,r=.05+Math.random()*.1;L.push(leafG(.5+Math.random()*.3,.95+Math.random()*.6,.25+Math.random()*.4,tl,a,Math.sin(a)*r,Math.cos(a)*r))}for(let i=0;i<4;i++){L.push(leafG(.34,.8+Math.random()*.35,.1,.08+Math.random()*.15,Math.random()*6.28,0,0))}
   const mound=new Tt(.62,9,5);mound.scale(1,.28,1);L.push(mound);for(let i=0;i<3;i++){const a=Math.random()*6.283,r=.15+Math.random()*.3,h=.9+Math.random()*.5,st=new Fn(.018,.03,h,5);st.translate(0,h/2,0);st.rotateZ(.12);st.rotateY(a);L.push(st);const fl=new Tt(.075+Math.random()*.03,6,5);{const tx=-Math.sin(.12)*h;fl.translate(tx*Math.cos(a),h*Math.cos(.12),-tx*Math.sin(a))}F.push(fl)}return{L:gm(L),F:gm(F)}};
  const rockG=(r,sx,sy,sz,ox,oy,oz)=>{const g=new Tt(r,8,6),p=g.attributes.position;for(let i=0;i<p.count;i++){const k=.78+Math.random()*.4;p.setXYZ(i,p.getX(i)*k*sx,p.getY(i)*k*sy,p.getZ(i)*k*sz)}g.translate(ox,oy,oz);return g};
  const crysG=(r,h,tilt,az,ox,oz)=>{const body=new Fn(r*.78,r,h,6,1),tip=new Gt(r*.78,h*.34,6);body.translate(0,h/2,0);tip.translate(0,h+h*.17,0);const parts=[body,tip],G=gm(parts);G.rotateZ(tilt);G.rotateY(az);G.translate(ox,.05,oz);return G};
  const minV=()=>{const R=[rockG(.7,1.2,.55,1,0,.1,0)],C=[];for(let i=0;i<2+(Math.random()*2|0);i++)R.push(rockG(.28+Math.random()*.22,1,.7,1,Math.cos(i*2.4)*.8,.05,Math.sin(i*2.4)*.8));C.push(crysG(.2+Math.random()*.08,1.5+Math.random()*.6,(Math.random()-.5)*.25,Math.random()*6.28,0,0));const n=4+(Math.random()*3|0);for(let i=0;i<n;i++){const a=i*6.283/n+Math.random()*.5,d=.3+Math.random()*.35;C.push(crysG(.1+Math.random()*.1,.55+Math.random()*.8,.25+Math.random()*.45,a,Math.sin(a)*d,Math.cos(a)*d))}return{L:gm(R),F:gm(C)}};
  const HV=Array.from({length:4},herbV),MV=Array.from({length:4},minV),HMt=new zt({map:NT.h,color:0xffffff,roughness:.88,metalness:0,side:_n}),RMt=new zt({map:NT.o,color:0x9a9fa8,roughness:.95,metalness:.05}),mcache={};
  const cmat=(k,t,c)=>{const key=t+c;return mcache[key]||(mcache[key]=t=="h"?new zt({color:new Rt(c).lerp(new Rt(0xffffff),.3),emissive:new Rt(c),emissiveIntensity:.35,roughness:.5}):new zt({map:NT.o,color:new Rt(c).lerp(new Rt(0xdff0ff),.72),emissive:new Rt(c),emissiveIntensity:.22,roughness:.38,metalness:.2}))};
  const NG=(()=>{const c=document.createElement("canvas");c.width=c.height=64;const x=c.getContext("2d"),r=x.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(255,255,255,.9)");r.addColorStop(1,"rgba(255,255,255,0)");x.fillStyle=r;x.fillRect(0,0,64,64);return new Og(c)})(),NGM={h:new Ku({map:NG,color:0xb6ff6a,transparent:!0,opacity:.5,depthWrite:!1,blending:2}),o:new Ku({map:NG,color:0x7fd8ff,transparent:!0,opacity:.55,depthWrite:!1,blending:2})};
  const nodeModel=(g,t,k)=>{const v=(t=="h"?HV:MV)[Math.random()*4|0],acc=BI[k-1]?BI[k-1].c[1]:0x66ff88,a=new fe(v.L,t=="h"?HMt:RMt),b=new fe(v.F,cmat(k,t,acc)),q=new zn;q.add(a,b);q.rotation.y=Math.random()*6.28;q.scale.setScalar((.85+Math.random()*.4)*1.35);g.add(q);const gl=new Lf(NGM[t]);gl.position.y=1.7;gl.scale.set(2.2,2.2,1);g.add(gl)};
  const chests=[],springs=[],pois=[],nodes=[],crypts=[],shrines=[];
 const cave=(k)=>{const p=pos(k,52),c=cc(k),rot=Math.atan2(c.x-p.x,c.z-p.z),g=new zn;g.position.set(p.x,HT(p.x,p.z),p.z);g.rotation.y=rot;g.scale.setScalar(2);S.add(g);const rk=DBA_HW(),dk=M(0x07070b);
  add(new fe(GE.sph,rk),0,0,0,g).scale.set(11,8,9);[[-9,2],[9,3],[-5,-8],[6,-7],[0,-9]].forEach(([a,b])=>add(new fe(GE.sph,rk),a,0,b,g).scale.set(3.4,2.8,3.2));
  add(new fe(GE.box,dk),0,2.4,7,g).scale.set(5,5,2.6);const pcol=BI[k-1].c[1],glow=new zt({color:pcol,emissive:pcol,emissiveIntensity:1});add(new fe(new Ci(3.1,.4,10,28),glow),0,2.9,8.4,g);
  [-1.8,0,1.8].forEach(a=>{const m=add(new fe(GE.cone,rk),a,5.6,8.2,g);m.scale.set(.4,1.4,.4);m.rotation.x=P});
  const pnl=new zt({color:pcol,emissive:pcol,emissiveIntensity:.8,transparent:!0,opacity:.55});add(new fe(GE.box,pnl),0,2.4,8.5,g).scale.set(4.6,4.8,.15);
  [[0,0,7.5],[-6,.5,5],[6,.5,5],[-9,2,3],[9,3,3],[-5,-8,3],[6,-7,3],[0,-9,3]].forEach(([a,b,r])=>addOb(p.x+(a*Math.cos(rot)+b*Math.sin(rot))*2,p.z+(-a*Math.sin(rot)+b*Math.cos(rot))*2,r*2));props.push({o:g,x:p.x,z:p.z,r:230});return{x:p.x+Math.sin(rot)*28,z:p.z+Math.cos(rot)*28,b:k-1,on:!0,glow,pnl,pcol}};
 for(let k=1;k<=14;k++){const bi=k-1;
  for(let i=0;i<10;i++){const p=pos(k,6),g=new zn;g.position.set(p.x,HT(p.x,p.z),p.z);g.scale.setScalar(2);S.add(g);add(new fe(GE.box,M(0x8b5a2b)),0,.45,0,g).scale.set(1.6,.9,1.1);add(new fe(GE.box,M(0xf5b50b,{metalness:.8})),0,.95,0,g).scale.set(1.7,.2,1.2);add(new fe(GE.sph,new ln({color:0xfde68a})),0,2.2,0,g).scale.set(.35,.35,.35);chests.push({g,x:p.x,z:p.z,on:!0,b:bi});props.push({o:g,x:p.x,z:p.z,r:200})}
  {const p=pos(k,10),g=new zn;g.position.set(p.x,HT(p.x,p.z),p.z);g.scale.setScalar(2);S.add(g);add(new fe(GE.cyl,M(0x3b82f6,{emissive:0x2563eb,emissiveIntensity:.8})),0,.15,0,g).scale.set(3.2,.3,3.2);add(new fe(GE.cyl,new ln({color:0x93c5fd,transparent:!0,opacity:.35})),0,2.5,0,g).scale.set(.6,5,.6);springs.push({x:p.x,z:p.z,cd:0,b:bi});props.push({o:g,x:p.x,z:p.z,r:200})}
  {const p=pos(k,12),g=new zn;g.position.set(p.x,HT(p.x,p.z),p.z);g.scale.setScalar(2);S.add(g);add(new fe(GE.box,M(0x6b7280,{emissive:0x8b5cf6,emissiveIntensity:.6})),0,5,0,g).scale.set(2.4,10,2.4);add(new fe(new Ps(4,4.6,32),new ln({color:0xa78bfa,side:_n})),0,.2,0,g).rotation.x=-P/2;{const q={x:p.x,z:p.z,b:bi,on:!0,g};pois.push(q);addOb(p.x,p.z,3.6,q)}props.push({o:g,x:p.x,z:p.z,r:240})}
  {const p=pos(k,8),g=new zn;g.position.set(p.x,HT(p.x,p.z),p.z);g.scale.setScalar(2);S.add(g);add(new fe(GE.cyl,M(0x9aa0b0,{emissive:0x22d3ee,emissiveIntensity:.5})),0,2,0,g).scale.set(.9,4,.9);add(new fe(new Ps(2.2,2.8,24),new ln({color:0x22d3ee,side:_n})),0,.2,0,g).rotation.x=-P/2;add(new fe(GE.sph,new ln({color:0x67e8f9})),0,4.6,0,g).scale.set(.6,.6,.6);addOb(p.x,p.z,1.8);props.push({o:g,x:p.x,z:p.z,r:200});shrines.push({x:p.x,z:p.z,b:bi,cd:0})}
  for(let i=0;i<16;i++){const p=pos(k,4),t=i<10?"h":"o",g=new zn;g.position.set(p.x,HT(p.x,p.z),p.z);g.scale.setScalar(2);S.add(g);nodeModel(g,t,k);nodes.push({g,x:p.x,z:p.z,t,on:!0,cd:0,b:bi});props.push({o:g,x:p.x,z:p.z,r:150})}
  crypts.push(cave(k))}
 // ---- nemici, avamposti, guardiani
 const ents=[],mkEnt=(bi,m,x,z,ex)=>{const e=Object.assign({bi,k:bi+1,m,home:{x,z},tx:x,tz:z,t:rnd(1,4),alive:!0,ret:0,built:!1,bo:cfg.mkBoss(ex&&ex.tpl!=null?$v[ex.tpl]:BI[bi].t,m,bi),g:new zn},ex||{});e.g.position.set(x,HT(x,z),z);e.g.visible=!1;S.add(e.g);ents.push(e);return e};
 for(let bi=0;bi<14;bi++)for(let i=0;i<16;i++){const p=pos(bi+1,6),e=mkEnt(bi,i>=12,p.x,p.z);if(!e.m&&i%4==1&&window.DBA_NMD){const vs=DBA_NMD.filter(d=>d.bi===bi);if(vs.length){const d=vs[((i>>2)+(bi&1))%vs.length];e.nmv=d.id;e.bo.nm=d.id;e.bo.nmS=d.sig;e.bo.name=d.n;e.sc=1}}else if(!e.m&&(i==3||i==11)){const af=["heal","summon","rage"][(bi+i)%3],cl={heal:0x40ff80,summon:0xc080ff,rage:0xff5030}[af];e.elite=af;e.bo.name="Campione · "+e.bo.name;const rg=new fe(new Ps(2.4,3.1,32),new ln({color:cl,side:_n,transparent:!0,opacity:.6,depthWrite:!1}));rg.rotation.x=-P/2;rg.position.y=.4;e.g.add(rg);e.ring=rg}}
 window.__dbaEnts=ents;const OUT=[];for(let bi=0;bi<14;bi++){const c=pos(bi+1,24),g=new zn;g.position.set(c.x,HT(c.x,c.z),c.z);g.scale.setScalar(2);S.add(g);add(new fe(GE.cyl,M(0x6b4a2a)),0,5,0,g).scale.set(.4,10,.4);const fm=new zt({color:0xdd3322,side:_n,emissive:0x661100});add(new fe(GE.box,fm),2,9,0,g).scale.set(4,2.4,.2);add(new fe(GE.cyl,M(0x333333)),0,.1,0,g).scale.set(9,.2,9);addOb(c.x,c.z,1.2);props.push({o:g,x:c.x,z:c.z,r:240});OUT.push({x:c.x,z:c.z,b:bi,fm,done:0});for(let i=0;i<3;i++)mkEnt(bi,!1,c.x+rnd(-18,18),c.z+rnd(-18,18),{op:bi})}
 for(let bi=0;bi<14;bi++){const g=GT[bi+1].p,c=cc(bi+1),d=Math.hypot(c.x-g.x,c.z-g.z),e=mkEnt(bi,!0,g.x+(c.x-g.x)/d*70,g.z+(c.z-g.z)/d*70,{guard:1});e.bo.maxHp=Math.round(e.bo.maxHp*1.25);e.bo.hp=e.bo.maxHp;e.bo.attack=Math.round(e.bo.attack*.85);e.bo.name="Guardiano · "+String(e.bo.name).replace("Miniboss · ","");e.sc=1.4}
 const RDPC={},RDP=k=>RDPC[k]||(RDPC[k]=ROADS.filter(r=>r.k===k).flatMap(r=>r.pts));
 for(let bi=0;bi<14;bi++){const p=pos(bi+1,60),e=mkEnt(bi,!0,p.x,p.z,{roam:1,sc:1.5});e.bo.maxHp=Math.round(e.bo.maxHp*1.4);e.bo.hp=e.bo.maxHp;e.bo.attack=Math.round(e.bo.attack*.85);e.bo.name="Vagante · "+String(e.bo.name).replace("Miniboss · ","");{const rg=new fe(new Ps(4,5.2,40),new ln({color:0xff4020,side:_n,transparent:!0,opacity:.55,depthWrite:!1}));rg.rotation.x=-P/2;rg.position.y=.45;e.g.add(rg);e.ring=rg}}
 const hOf=g=>{g.updateMatrixWorld(!0);let lo=1e9,hi=-1e9;g.traverse(o=>{const ge=o.geometry;if(!ge||!o.visible)return;if(!ge.boundingBox)ge.computeBoundingBox();const b=ge.boundingBox,el=o.matrixWorld.elements;for(let i=0;i<8;i++){const x=i&1?b.max.x:b.min.x,y=i&2?b.max.y:b.min.y,z=i&4?b.max.z:b.min.z,wy=el[1]*x+el[5]*y+el[9]*z+el[13];if(wy<lo)lo=wy;if(wy>hi)hi=wy}});return hi>lo?hi-lo:0};
 const refH=()=>{if(refC)return refC;let s2=0,n2=0;hs.forEach(a=>{if(!a.dead){const h=hOf(a.g);if(h>0){s2+=h;n2++}}});return n2?(refC=s2/n2):3.9};
 const build=e=>{const mg=new zn;try{e.bm=DBA_BM(e.bo,mg)}catch(x){add(new fe(new Gt(1,3,6),M(0xcc3322)),0,1.5,0,mg)}e.g.add(mg);e.mg=mg;e.built=!0;const mult=e.roam?5:e.guard?4:e.rare?3:e.m?3:2;let sc=1;try{const h1=hOf(mg);if(h1>.05)sc=Math.max(.3,Math.min(10,refH()*mult/h1))}catch(x){sc=e.sc||(e.m?.9:.55)}mg.scale.setScalar(sc);const hh=refH()*mult;e.rad=Math.max(1.2,hh*.3);e.hit=Math.max(e.m?5.4:4.2,e.rad+3.4);const q2=mkSh(e.rad*1.35);q2.position.y=.14;e.g.add(q2);e.sh=q2};
 const BP=cc(15),bg=new zn;bg.position.set(BP.x,HT(BP.x,BP.z),BP.z);S.add(bg);const bmg=new zn;bg.add(bmg);try{DBA_BM(cfg.boss,bmg)}catch(e){}bmg.scale.setScalar(1.6);
 add(new fe(new Ps(14,15,48),new ln({color:0xff3030,side:_n})),0,.2,0,bg).rotation.x=-P/2;add(new fe(GE.cyl,new ln({color:0xff4040,transparent:!0,opacity:.35})),0,40,0,bg).scale.set(.6,80,.6);
 let px=CAMPS[0].x,pz=CAMPS[0].z+16,hd=P,cy=P,hs=[],paused=!1,mvg=0,sprint=!1,stam=100,mount=0,disc=Array(15).fill(0),curK=0,tod=.3,day=0,dl=1,obj=null;disc[0]=1;let lastRot=0,jv=0,jh=0;const keys={},joy={x:0,y:0},camJoy={x:0,y:0},PRV={third:.3,wide:.55,top:1.4,first:.55};let view=PRV[cfg.view]?cfg.view:"third",pr=PRV[view],td=(()=>{try{const v=parseFloat(localStorage.getItem("dba_ow_dist3"));return v>=3&&v<=30?v:18}catch(e){return 18}})();
 const cD=new Rt(7316188),cN=new Rt(0x070b1f),cc2=new Rt(0);rnd=(a,b)=>a+Math.random()*(b-a);
 const SHT=(()=>{const c=document.createElement("canvas");c.width=c.height=64;const x=c.getContext("2d"),r=x.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(0,0,0,.75)");r.addColorStop(.55,"rgba(0,0,0,.4)");r.addColorStop(1,"rgba(0,0,0,0)");x.fillStyle=r;x.fillRect(0,0,64,64);return new Og(c)})(),SHG=new Na(1,20),SHM=new ln({map:SHT,transparent:!0,depthWrite:!1}),mkSh=r=>{const m=new fe(SHG,SHM);m.rotation.x=-P/2;m.scale.setScalar(r);m.renderOrder=1;return m};
 window.__dbaWAPI={S,HT,anim:(a,m)=>animH(a,m),susp:()=>suspendR(),res:()=>resumeR(),build:p=>WOW_build(WOWTT(),p,!1),get me(){return{x:px,z:pz,h:hd,m:mvg,j:jh}}};let refC=0;const mkParty=pl=>{refC=0;hs.forEach(a=>{S.remove(a.g);a.sh&&S.remove(a.sh)});hs=pl.map((p,i)=>{const g=WOW_build(WOWTT(),p,!1);g.scale.set(1.95,((p.appearance&&p.appearance.heightMul)||1)*1.95,1.95);const dd=p.alive===!1;if(dd)g.rotation.x=-P/2;g.position.set(px,HT(px,pz)+(dd?.4:0),pz);S.add(g);const sh=mkSh(1.1);sh.position.set(px,HT(px,pz)+.12,pz);S.add(sh);return{g,i,dead:dd,id:p.id,ud:g.userData,sh}})};const ctlLead=()=>{const C=window.__dbaCtl;if(C&&C.on){const a=hs.find(a=>!a.dead&&a.id===C.id);if(a)return a}return hs.find(a=>!a.dead)||hs[0]};
 mkParty(cfg.party);
 const mnts=[null],RH=[0,2.25,2.25,2.7,1.8,2.6],MSPD=[1,1.6,2,2.5,1.8,2.3];
 {const mk=(c,o)=>new zt(Object.assign({color:c,roughness:.8},o||{})),bx=(g,m,x,y,z,sx,sy,sz,rx)=>{const q=add(new fe(GE.box,m),x,y,z,g);q.scale.set(sx,sy,sz);if(rx)q.rotation.x=rx;return q},cn=(g,m,x,y,z,r,h,rx)=>{const q=add(new fe(GE.cone,m),x,y,z,g);q.scale.set(r,h,r);if(rx)q.rotation.x=rx;return q},sp=(g,m,x,y,z,r)=>{const q=add(new fe(GE.sph,m),x,y,z,g);q.scale.setScalar(r);return q};
  const legs=(g,m,pos,len,w)=>pos.map(([x,y,z],i)=>{const pv=new zn;pv.position.set(x,y,z);g.add(pv);const q=new fe(GE.box,m);q.position.y=-len/2;q.scale.set(w,len,w);pv.add(q);pv.userData.ph=i%3==0?0:Math.PI;return pv});
  const fin=(g,lg,wn)=>{g.visible=!1;g.scale.setScalar(1.5);S.add(g);g.userData.anim=(t,mv)=>{lg.forEach(l=>{l.rotation.x=mv?Math.sin(t*14+l.userData.ph)*.6:0});if(wn)wn.forEach((w,i)=>{w.rotation.z=(i?-1:1)*(mv?Math.sin(t*9)*.6:.15+Math.sin(t*2)*.05)})}};
  /* 1 cavallo da guerra */
  {const g=new zn,m=mk(0x8b5a2b),d=mk(0x2b1a0e),w=mk(0xeeeeee);bx(g,m,0,1.35,0,1.2,1.1,2.8);bx(g,m,0,2.1,1.35,.6,1.4,.7,-.5);bx(g,m,0,2.75,1.95,.5,.5,1.1,-.2);bx(g,d,0,2.25,1.1,.15,1.1,.4,-.5);bx(g,w,0,1.6,-.4,1.25,.1,1.6);cn(g,d,0,1.6,-1.6,.25,1.4,2.6);cn(g,m,-.18,3.15,1.7,.12,.35);cn(g,m,.18,3.15,1.7,.12,.35);bx(g,mk(0xaa2222),0,1.95,.1,1.3,.12,1.2);
   const lg=legs(g,m,[[-.45,.95,-1.05],[.45,.95,-1.05],[-.45,.95,1.05],[.45,.95,1.05]],.95,.3);fin(g,lg);mnts[1]=g}
  /* 2 destriero di brace */
  {const g=new zn,m=mk(0x1d0e0a,{emissive:0x551100,emissiveIntensity:.8}),f=mk(0xff6a10,{emissive:0xff4400,emissiveIntensity:1.4,transparent:!0,opacity:.85}),h=mk(0xffcc33,{emissive:0xffaa00,emissiveIntensity:1.5});bx(g,m,0,1.35,0,1.2,1.15,2.8);bx(g,m,0,2.1,1.35,.6,1.4,.7,-.5);bx(g,m,0,2.8,1.95,.5,.5,1.15,-.2);[[0,2.5,1.0],[0,2.9,.7],[0,3.25,.4]].forEach(([x,y,z],i)=>cn(g,f,x,y,z,.34-i*.04,1.1,.3));[[0,1.7,-1.5,.35,1.6,-2.4],[.3,1.6,-1.4,.25,1.2,-2.7],[-.3,1.6,-1.4,.25,1.2,-2.7]].forEach(([x,y,z,r,hh,rx])=>cn(g,f,x,y,z,r,hh,rx));sp(g,h,-.15,3,2.45,.08);sp(g,h,.15,3,2.45,.08);cn(g,h,-.18,3.25,1.7,.12,.45);cn(g,h,.18,3.25,1.7,.12,.45);
   const lg=legs(g,m,[[-.45,.95,-1.05],[.45,.95,-1.05],[-.45,.95,1.05],[.45,.95,1.05]],.95,.3);lg.forEach(l=>{bx(l,h,0,-.95,0,.34,.14,.34)});const base=g.userData;fin(g,lg);const an=g.userData.anim;g.userData.anim=(t,mv)=>{an(t,mv);f.emissiveIntensity=1.2+Math.sin(t*12)*.4};mnts[2]=g}
  /* 3 wyvern d'ossa */
  {const g=new zn,m=mk(0xd8d2b8,{roughness:.9}),d=mk(0x7a735c),e=mk(0x66ffcc,{emissive:0x22ffaa,emissiveIntensity:1.5});bx(g,m,0,1.5,0,.9,.8,2.6);bx(g,m,0,2.2,1.4,.45,1.1,.5,-.6);bx(g,m,0,2.9,2.05,.45,.45,1.0,-.15);cn(g,d,-.2,3.35,1.8,.12,.5);cn(g,d,.2,3.35,1.8,.12,.5);sp(g,e,-.15,3.0,2.5,.07);sp(g,e,.15,3.0,2.5,.07);cn(g,m,0,1.5,-2.2,.3,3.2,-1.5708);[0,1,2,3,4].forEach(i=>bx(g,d,0,1.95,-1+i*.5-.3,.1,.35,.18));
   const wn=[1,-1].map(sd=>{const pv=new zn;pv.position.set(sd*.5,2.0,.3);g.add(pv);const w1=new fe(GE.box,m);w1.position.set(sd*1.4,0,0);w1.scale.set(2.8,.08,1.6);pv.add(w1);const w2=new fe(GE.box,d);w2.position.set(sd*2.9,0,-.2);w2.scale.set(1.2,.06,1.1);pv.add(w2);[0,1,2].forEach(i=>{const bn=new fe(GE.box,d);bn.position.set(sd*(.7+i*.8),.07,-.3);bn.scale.set(.08,.08,1.7);pv.add(bn)});return pv});
   const lg=legs(g,d,[[-.4,1.0,-.6],[.4,1.0,-.6],[-.4,1.0,.8],[.4,1.0,.8]],.7,.22);fin(g,lg,wn);mnts[3]=g}
  /* 4 lupo d'ombra */
  {const g=new zn,m=mk(0x1b1530,{emissive:0x2a1050,emissiveIntensity:.6}),e=mk(0x55eeff,{emissive:0x22ddff,emissiveIntensity:2}),a=mk(0x7a55cc,{emissive:0x5533aa,emissiveIntensity:1,transparent:!0,opacity:.7});bx(g,m,0,1.0,0,1.1,.9,2.6);bx(g,m,0,1.25,1.5,.8,.8,.8);bx(g,m,0,1.1,2.15,.45,.4,.7);cn(g,m,-.3,1.8,1.5,.16,.5);cn(g,m,.3,1.8,1.5,.16,.5);sp(g,e,-.2,1.4,1.9,.07);sp(g,e,.2,1.4,1.9,.07);cn(g,m,0,1.2,-1.6,.3,1.6,2.2);bx(g,a,0,1.65,.3,.9,.1,2.0);[[0,2.0,-1],[0,2.1,0],[0,2.0,1]].forEach(([x,y,z])=>cn(g,a,x,y,z,.2,.7));
   const lg=legs(g,m,[[-.4,.75,-1.0],[.4,.75,-1.0],[-.4,.75,1.0],[.4,.75,1.0]],.75,.26);fin(g,lg);mnts[4]=g}
  /* 5 grifone dorato */
  {const g=new zn,m=mk(0xc89b3c),w=mk(0xf6efe0),y=mk(0xffd24a,{emissive:0xaa7700,emissiveIntensity:.7}),k=mk(0x222222);bx(g,m,0,1.4,0,1.1,1.0,2.7);bx(g,w,0,2.2,1.4,.5,1.0,.55,-.4);sp(g,w,0,2.85,1.85,.5);cn(g,y,0,2.8,2.45,.18,.7,1.5708);sp(g,k,-.22,2.95,2.2,.07);sp(g,k,.22,2.95,2.2,.07);cn(g,w,-.2,3.3,1.75,.12,.4);cn(g,w,.2,3.3,1.75,.12,.4);cn(g,m,0,1.4,-1.6,.3,1.5,2.4);bx(g,y,0,1.95,.1,1.2,.1,1.2);
   const wn=[1,-1].map(sd=>{const pv=new zn;pv.position.set(sd*.5,2.0,.2);g.add(pv);const a=new fe(GE.box,w);a.position.set(sd*1.5,0,0);a.scale.set(3.0,.08,1.8);pv.add(a);const b=new fe(GE.box,y);b.position.set(sd*3.1,0,-.2);b.scale.set(1.3,.06,1.2);pv.add(b);return pv});
   const lg=legs(g,m,[[-.4,.95,-1.0],[.4,.95,-1.0],[-.4,.95,1.0],[.4,.95,1.0]],.9,.28);lg.forEach(l=>{bx(l,y,0,-.95,.1,.3,.1,.45)});fin(g,lg,wn);mnts[5]=g}
 }
 const chkOut=bi=>{const o=OUT[bi];if(o.done)return;if(ents.filter(e=>e.op===bi).every(e=>!e.alive)){o.done=1;o.fm.color.set(0x33dd55);o.fm.emissive.set(0x116622);return 1}};
 if(cfg.save){const sv=cfg.save;tod=sv.tod!=null?sv.tod:.3;day=sv.day||0;if(sv.ver===2){px=sv.pos.x;pz=sv.pos.z;pushOb(px,pz,1.5);px=RX;pz=RZ;ents.forEach((e,i)=>{if(sv.killed[i]&&!(e.roam&&sv.killed[i]>1600)){e.alive=!1;e.ret=sv.killed[i]}});chests.forEach((c,i)=>{if(!sv.chests[i]){c.on=!1;c.g.userData.h=1;c.g.visible=!1}});(sv.pois||[]).forEach((v,i)=>{if(pois[i]&&!v){pois[i].on=!1;pois[i].g.userData.h=1}});(sv.crypts||[]).forEach((v,i)=>{if(crypts[i]&&!v){crypts[i].on=!1;crypts[i].glow.color.set(0x555566);crypts[i].glow.emissive.set(0x222233);crypts[i].pnl.color.set(0x555566);crypts[i].pnl.emissive.set(0x222233)}});nodes.forEach((n,i)=>{if(sv.nodes&&!sv.nodes[i]){n.on=!1;n.cd=60;n.g.userData.h=1}})}if(sv.disc)disc=sv.disc;hs.forEach(a=>a.g.position.set(px,HT(px,pz)+(a.dead?.4:0),pz))}
 OUT.forEach((o,i)=>chkOut(i));
 const kd=e=>{const K=window.DBA_KEYS;if(K&&K.capturing)return;if(e.target&&/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName))return;const ids=K?K.acts(e):[];ids.forEach(id=>{keys[id]=1;if(id==="talk"){if(!e.repeat&&!paused){e.preventDefault();interact()}}else if(id==="jump"){e.preventDefault();if(!paused&&jh===0&&!e.repeat)jv=24}else if(!e.repeat&&!paused&&K.hud(id)){e.preventDefault();K.click(id)}})},ku=e=>{const K=window.DBA_KEYS;(K?K.acts(e):[]).forEach(id=>{keys[id]=0})};addEventListener("keydown",kd);addEventListener("keyup",ku);addEventListener("blur",()=>{for(const k in keys)keys[k]=0});window.__owKeys=keys;
 const mm=document.createElement("canvas");mm.width=mm.height=120;mm.style.cssText="position:absolute;right:10px;top:max(150px,calc(env(safe-area-inset-top) + 150px));width:110px;height:110px;border-radius:12px;border:1px solid rgba(251,191,36,.6);opacity:.92;pointer-events:none";host.appendChild(mm);
 const ql=document.createElement("div");ql.style.cssText="position:absolute;right:10px;top:max(266px,calc(env(safe-area-inset-top) + 266px));width:110px;text-align:center;font:600 11px system-ui,sans-serif;color:#fff;background:rgba(0,0,0,.55);border:1px solid rgba(251,191,36,.5);border-radius:8px;padding:2px 0;pointer-events:none;display:none";host.appendChild(ql);let qlT="";
 const mx=mm.getContext("2d"),RAD=230,sc=60/RAD,cols=PATH.map((p,k)=>{const t=k>=1&&k<=14?BI[k-1].t:BI[k?3:2].t,g=String(t.arena.ground);return g[0]=="#"?g:"#445544"});
 function drawMap(){mx.clearRect(0,0,120,120);const X=x=>60+(x-px)*sc,Z=z=>60+(z-pz)*sc;PATH.forEach((p,k)=>{const c=cc(k);mx.fillStyle=cols[k];mx.fillRect(X(c.x-CS/2),Z(c.z-CS/2),CS*sc+1,CS*sc+1)});mx.globalAlpha=.35;mx.fillStyle="#000";mx.fillRect(0,0,120,120);mx.globalAlpha=1;
  mx.strokeStyle="#ddd";mx.lineWidth=1.2;mx.beginPath();for(let k=0;k<=4;k++){const v=-HW+k*CS;mx.moveTo(X(v),Z(-HW));mx.lineTo(X(v),Z(HW));mx.moveTo(X(-HW),Z(v));mx.lineTo(X(HW),Z(v))}mx.stroke();
  mx.lineCap="round";ROADS.forEach(r=>{mx.strokeStyle=r.kind=="m"?"#e8cf9a":"#b79c6a";mx.lineWidth=r.kind=="m"?1.8:1;mx.beginPath();let on2=!1;for(let i=0;i<r.pts.length;i+=3){const a=X(r.pts[i][0]),b=Z(r.pts[i][1]);if(a<-10||b<-10||a>130||b>130){on2=!1;continue}if(on2)mx.lineTo(a,b);else{mx.moveTo(a,b);on2=!0}}mx.stroke()});GT.forEach(g=>{mx.strokeStyle=g.open?"#30ff80":"#ff3030";mx.lineWidth=4;mx.beginPath();if(g.ln=="x"){mx.moveTo(X(g.p.x),Z(g.p.z-14));mx.lineTo(X(g.p.x),Z(g.p.z+14))}else{mx.moveTo(X(g.p.x-14),Z(g.p.z));mx.lineTo(X(g.p.x+14),Z(g.p.z))}mx.stroke()});
  const dot=(x,z,c,r)=>{const a=X(x),b=Z(z);if(a<0||b<0||a>120||b>120)return;mx.fillStyle=c;mx.beginPath();mx.arc(a,b,r,0,P*2);mx.fill()};
  chests.forEach(c=>c.on&&dot(c.x,c.z,"#fbbf24",2));springs.forEach(s=>dot(s.x,s.z,"#60a5fa",3));pois.forEach(p=>p.on&&dot(p.x,p.z,"#a78bfa",3));ents.forEach(e=>e.alive&&dot(e.g.position.x,e.g.position.z,e.m?"#f97316":"#ef4444",2.2));CAMPS.forEach(c=>dot(c.x,c.z,"#22c55e",4));VIL.forEach(c=>dot(c.x,c.z,"#16a34a",3));{const nw=performance.now();if(nw-(window.__mmT||0)>1000){window.__mmT=nw;npcs.forEach(q=>{if(q.k=="elder")q.ms=cfg.getMark?cfg.getMark(q.b,q.vi):0})}npcs.forEach(q=>{if(q.k!="elder")return;const ms=q.ms|0;if(ms){dot(q.x,q.z,ms==2?"#9bd7ff":"#ffd21f",5.5);dot(q.x,q.z,"#1b1200",2)}})}{let bq=null,bd=1e9;npcs.forEach(q=>{if(q.k!="elder"||!(q.ms|0))return;if(cfg.canGo&&!cfg.canGo(q.b))return;const d=Math.hypot(q.x-px,q.z-pz);if(d<bd){bd=d;bq=q}});let tx="";if(bq&&bd>40){const ms=bq.ms|0,col=ms==2?"#9bd7ff":"#ffd21f";let a=X(bq.x)-60,b2=Z(bq.z)-60;const l=Math.hypot(a,b2);if(l>50){const an=Math.atan2(b2,a);mx.save();mx.translate(60+Math.cos(an)*52,60+Math.sin(an)*52);mx.rotate(an+P/2);mx.fillStyle=col;mx.strokeStyle="#1b1200";mx.lineWidth=1.5;mx.beginPath();mx.moveTo(0,-7);mx.lineTo(6,5);mx.lineTo(0,2);mx.lineTo(-6,5);mx.closePath();mx.fill();mx.stroke();mx.restore()}else{mx.strokeStyle=col;mx.lineWidth=2;mx.beginPath();mx.arc(60+a,60+b2,8+Math.sin(performance.now()/250)*1.5,0,P*2);mx.stroke()}tx=(ms==2?"❓ Consegna ":"❗ Missioni ")+(Math.round(bd/10)*10)+" m"}if(tx!==qlT){qlT=tx;ql.textContent=tx;ql.style.display=tx?"block":"none"}}OUT.forEach(o=>dot(o.x,o.z,o.done?"#34d399":"#fb923c",3.5));crypts.forEach(c=>dot(c.x,c.z,c.on?"#c084fc":"#6b7280",3));shrines.forEach(q=>dot(q.x,q.z,"#22d3ee",2.5));dot(BP.x,BP.z,"#ff2020",5);
  if(obj){let a=X(obj.x)-60,b=Z(obj.z)-60;const l=Math.hypot(a,b);if(l>52){a=a/l*52;b=b/l*52}mx.fillStyle="#facc15";mx.beginPath();mx.arc(60+a,60+b,4,0,P*2);mx.fill()}
  (window.__dbaInd||[]).forEach(t=>{let a=X(t.x)-60,b=Z(t.z)-60;const l=Math.hypot(a,b);if(l>50){a=a/l*50;b=b/l*50}mx.strokeStyle="#fff";mx.fillStyle="rgba(250,204,21,.85)";mx.lineWidth=1.8;mx.beginPath();mx.arc(60+a,60+b,4.5+Math.sin(performance.now()/220)*1.3,0,P*2);mx.fill();mx.stroke()});
  (window.__sqInd||[]).forEach(t=>{let a=X(t.x)-60,b=Z(t.z)-60;const l=Math.hypot(a,b);if(l>50){a=a/l*50;b=b/l*50}const cx=60+a,cy=60+b,r=t.big?6.5:4.5;mx.strokeStyle="#04222a";mx.fillStyle=t.c||"#22d3ee";mx.lineWidth=1.6;mx.beginPath();mx.moveTo(cx,cy-r);mx.lineTo(cx+r,cy);mx.lineTo(cx,cy+r);mx.lineTo(cx-r,cy);mx.closePath();mx.fill();mx.stroke()});
  mx.save();mx.translate(60,60);mx.rotate(-hd+P);mx.fillStyle="#fff";mx.beginPath();mx.moveTo(0,-7);mx.lineTo(4,4);mx.lineTo(-4,4);mx.closePath();mx.fill();mx.restore();mx.fillStyle="#fff";mx.font="13px sans-serif";mx.fillText(dl>.45?"☀":"🌙",3,14)}
 const canGo=(x0,z0,x1,z1,pl)=>{const a=cellOf(x0,z0),b=cellOf(x1,z1);if(a===b)return!0;if(!pl)return!1;const g=GT.find(g=>(g.a===a&&g.b===b)||(g.a===b&&g.b===a));return!!(g&&g.open&&(g.ln=="x"?Math.abs(z1-g.p.z)<14:Math.abs(x1-g.p.x)<14))};
 let id,t0=performance.now(),last=t0,lastM=0,lastV=0,rareE=null,prismE=null,rareDone=!1,nearQ=null;const interact=()=>{if(!nearQ||paused)return;const q=nearQ;paused=!0;nearQ=null;cfg.onNear&&cfg.onNear(null);cfg.onNpc(q.k,q.b,q.vi,q)};const ad=(a,b)=>Math.atan2(Math.sin(a-b),Math.cos(a-b));
 props.forEach(p=>gnd(p.o));try{window.DBA_VILTEX&&DBA_VILTEX(S)}catch(_){}
 const evs=[],EVC={merchant:0xfbbf24,treasure:0x22d3ee};
 const spawnEv=(kind)=>{for(let n=0;n<30;n++){const a=Math.random()*6.28,d=34+Math.random()*22,x=Math.max(-HW+30,Math.min(HW-30,px+Math.cos(a)*d)),z=Math.max(-HW+30,Math.min(HW-30,pz+Math.sin(a)*d));if(cellOf(x,z)!==cellOf(px,pz)||!freeAt(x,z,5)||nearGate(x,z,40)||CAMPS.some(q=>Math.hypot(x-q.x,z-q.z)<90))continue;
  const g=new zn,col=EVC[kind]||0xffffff,gm=new zt({color:col,emissive:col,emissiveIntensity:1.2,transparent:!0,opacity:.55});
  add(new fe(GE.cyl,gm),0,14,0,g).scale.set(.5,28,.5);add(new fe(new Ci(3,.35,8,24),gm),0,.4,0,g).rotation.x=P/2;
  if(kind=="merchant"){const bm=M(0x8b5a2b);add(new fe(GE.box,bm),0,1.1,0,g).scale.set(3.2,2.2,2.2);add(new fe(GE.box,M(0xdc2626)),0,2.5,0,g).scale.set(3.6,.6,2.6);add(new fe(GE.sph,M(0xfbbf24,{emissive:0xfbbf24,emissiveIntensity:.8})),0,3.6,0,g).scale.set(.7,.7,.7)}
  else{add(new fe(GE.box,M(0x0e7490,{metalness:.6})),0,.9,0,g).scale.set(2.2,1.8,1.6);add(new fe(GE.cone,M(0x67e8f9,{emissive:0x22d3ee,emissiveIntensity:1})),0,3.2,0,g).scale.set(.9,1.8,.9)}
  g.position.set(x,HT(x,z),z);S.add(g);const e={kind,x,z,g,t:170,b:cellOf(px,pz)-1};evs.push(e);return{x,z}}return null};
 const spawnAmb=(n)=>{const k=cellOf(px,pz);if(k<1||k>14)return 0;let c=0;for(let i=0;i<n*3&&c<n;i++){const a=Math.random()*6.28,d=24+Math.random()*10,x=Math.max(-HW+30,Math.min(HW-30,px+Math.cos(a)*d)),z=Math.max(-HW+30,Math.min(HW-30,pz+Math.sin(a)*d));if(cellOf(x,z)!==k||!freeAt(x,z,3))continue;mkEnt(k-1,!1,x,z,{amb:1});c++}return c};
 const animH=(a,mv)=>{const u=a.ud;if(!u||!u.hipL)return;u.h={moving:mv};u.lx=u.rx=u.lz=u.rz=0;try{DBA_ANIM(u,0)}catch(e){}
  if(u.leftArm&&u.rightArm&&!u.hold&&!u.shd){const s=mv?Math.sin(performance.now()*.014)*.5:0;u.leftArm.rotation.x+=((-s)-u.leftArm.rotation.x)*.35;u.rightArm.rotation.x+=(s-u.rightArm.rotation.x)*.35}};
const ATD=[null,
 {d:0x5a2a1c,n:0x1a0805,f:[60,190],p:{c:0xff8a30,n:70,s:[.3,.7],v:[0,2.4,0],sw:1.5,add:1}},
 {d:0xbcd8ee,n:0x0a1830,f:[80,230],p:{c:0xffffff,n:100,s:[.18,.42],v:[1.2,-1.9,0],sw:1.2,add:0}},
 {d:0x86c9a0,n:0x06140c,f:[80,240],p:{c:0xd8ff6a,n:55,s:[.22,.5],v:[0,.25,0],sw:2.2,add:1,tw:1,night:1}},
 {d:0x2c2347,n:0x0a0618,f:[55,170],p:{c:0xa78bfa,n:60,s:[.3,.65],v:[0,.9,0],sw:1.5,add:1,tw:1}},
 {d:0x56606e,n:0x0a0e18,f:[60,190],p:{c:0xbcd4ff,n:110,s:[.07,.12],v:[-3,-26,0],sw:.3,add:0,st:9,op:.5}},
 {d:0x6a2a2e,n:0x1a0508,f:[50,160],p:{c:0xff4a5a,n:60,s:[.25,.55],v:[0,.8,0],sw:1.5,add:1}},
 {d:0x9fb8ee,n:0x0a1030,f:[90,260],p:{c:0xcfe8ff,n:70,s:[.2,.5],v:[0,.15,0],sw:1,add:1,tw:1}},
 {d:0x5a2410,n:0x1a0a02,f:[55,180],p:{c:0xff6a00,n:80,s:[.3,.7],v:[0,3.2,0],sw:1.8,add:1}},
 {d:0xe0c48a,n:0x1f1a28,f:[70,210],p:{c:0xe8cc90,n:100,s:[.15,.35],v:[7,.2,2],sw:.8,add:0}},
 {d:0xaebfce,n:0x0c1420,f:[45,150],p:{c:0xe0f4ff,n:45,s:[.5,1.1],v:[0,.5,0],sw:2.5,add:1,tw:1,op:.5}},
 {d:0xcfc6ae,n:0x16140f,f:[70,210],p:{c:0xcfc8b4,n:70,s:[.15,.35],v:[1.6,-.5,.5],sw:1,add:0}},
 {d:0xfff3c0,n:0x1a1630,f:[100,280],p:{c:0xffe58a,n:60,s:[.25,.55],v:[0,1.1,0],sw:1.3,add:1,tw:1}},
 {d:0x7a2a6a,n:0x14051a,f:[55,170],p:{c:0xff4fd8,n:65,s:[.25,.6],v:[0,0,0],sw:5,add:1,tw:1,hue:1}},
 {d:0x103a5a,n:0x020a18,f:[40,140],p:{c:0x9fe8ff,n:65,s:[.2,.55],v:[0,2,0],sw:1,add:1,op:.6}}];
 const AT_=ATD.map(a=>a&&{d:new Rt(a.d),n:new Rt(a.n)}),D0=new Rt(7316188),N0=new Rt(0x070b1f),PN=100;
 const PM=new Ku({map:(()=>{const c=document.createElement("canvas");c.width=c.height=64;const g=c.getContext("2d"),r=g.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(255,255,255,1)");r.addColorStop(.35,"rgba(255,255,255,.6)");r.addColorStop(1,"rgba(255,255,255,0)");g.fillStyle=r;g.fillRect(0,0,64,64);return new Og(c)})(),transparent:!0,depthWrite:!1,color:0xffffff,opacity:.85}),PS=[];let pBi=-2,pN=0;
 for(let i=0;i<PN;i++){const sp=new Lf(PM);sp.visible=!1;S.add(sp);PS.push({sp,x:Math.random()*84-42,y:Math.random()*22,z:Math.random()*84-42,ph:Math.random()*6.28,sz:Math.random(),i:0})}
 let wxN=90,wxF=260;
 const WXT={vil:[["clear",6],["rain",3],["fog",1]],tree:[["clear",4],["rain",4],["storm",1.5],["fog",1.5]],glacier:[["clear",3],["snow",5],["fog",2]],dune:[["clear",5],["sand",5]],volcano:[["clear",4],["ash",6]],boss:[["clear",1]]},WXD=[["clear",5],["fog",3],["rain",2],["storm",1.5]],
 WXM={rain:{c:0xc8dcff,o:.6,n:300,v:34,len:1.8,w:.05,fog:.5,tint:[0x5c6a78,.35],dim:.4,msg:"🌧 Inizia a piovere"},storm:{c:0xb8ccf0,o:.65,n:420,v:42,len:2.2,w:.06,fog:.4,tint:[0x3c4656,.5],dim:.55,msg:"⛈ Si scatena un temporale"},fog:{n:0,fog:.28,tint:[0xaab4bc,.3],dim:.2,msg:"🌫 Scende una fitta nebbia"},snow:{c:0xffffff,o:.95,n:260,v:3.2,len:.16,w:.1,flake:1,fog:.6,tint:[0xdfe8f2,.25],dim:.1,msg:"❄ Inizia a nevicare"},sand:{c:0xd9b36a,o:.7,n:260,v:2,len:.18,w:.12,flake:1,wind:30,fog:.38,tint:[0xc9a15a,.5],dim:.2,msg:"🏜 Tempesta di sabbia"},ash:{c:0x6b5a55,o:.85,n:220,v:2.6,len:.2,w:.13,flake:1,fog:.65,tint:[0x3a2a28,.35],dim:.25,msg:"🌋 Cade cenere vulcanica"}};
 const wx={cur:"clear",want:"clear",i:1,next:40,k:-1,lt:8},WXMAX=420,wxP=new Float32Array(WXMAX*3),wxH=new Float32Array(WXMAX),wxTmp=new Rt(0xffffff);
 const wxGe=new Jn(),wxA=new on(new Float32Array(WXMAX*12),3),wxIx=[];for(let q=0;q<WXMAX;q++){const o=q*4;wxIx.push(o,o+1,o+2,o,o+2,o+3);wxH[q]=Math.random();wxP[q*3]=Math.random()*44-22;wxP[q*3+1]=Math.random()*26;wxP[q*3+2]=Math.random()*44-22}
 wxGe.setAttribute("position",wxA);wxGe.setIndex(wxIx);wxGe.setDrawRange(0,0);
 const wxMat=new ln({color:0xffffff,transparent:!0,opacity:.5,side:_n,depthWrite:!1,fog:!1}),wxM=new fe(wxGe,wxMat);wxM.frustumCulled=!1;wxM.visible=!1;wxM.renderOrder=5;S.add(wxM);
 const wxFl=document.createElement("div");wxFl.style.cssText="position:absolute;inset:0;background:#d6e4ff;opacity:0;pointer-events:none;z-index:3";host.appendChild(wxFl);
 const wxSp=()=>{const v={snow:.9,sand:.85,ash:.92,storm:.94,rain:.97}[wx.cur];return v?1-(1-v)*wx.i:1},wxPick=sh=>{const t=WXT[sh]||WXD;let s=0;t.forEach(a=>s+=a[1]);let r=Math.random()*s;for(const a of t){r-=a[1];if(r<=0)return a[0]}return"clear"};
 const wxFlash=()=>{wxFl.style.transition="none";wxFl.style.opacity=".55";setTimeout(()=>{wxFl.style.opacity=".1"},70);setTimeout(()=>{wxFl.style.opacity=".5"},150);setTimeout(()=>{wxFl.style.transition="opacity .6s";wxFl.style.opacity="0"},230);setTimeout(()=>{try{window.DBA_SFX&&window.DBA_SFX.play("thunder")}catch(e){}},400+Math.random()*1400)};
 const wxUp=(dt,t)=>{const k=Math.max(0,curK),sh=k>=1&&k<=14?BI[k-1].sh:k==0?"vil":"boss";
  if(window.__wxForce){wx.want=window.__wxForce;wx.next=1e9;window.__wxForce=null}else if(wx.k!==k){wx.k=k;wx.want=wxPick(sh);wx.next=120+Math.random()*180}
  wx.next-=dt;if(wx.next<=0){wx.want=wxPick(sh);wx.next=120+Math.random()*180}
  if(wx.want!==wx.cur){wx.i-=dt*(window.__atmoSnap?9:.25);if(wx.i<=0){wx.i=0;wx.cur=wx.want;const mm=WXM[wx.cur];if(mm&&cfg.onWeather)cfg.onWeather(mm.msg)}}else wx.i=Math.min(1,wx.i+dt*(window.__atmoSnap?9:.15));
  const m=WXM[wx.cur],i=wx.i;try{window.DBA_AMB&&DBA_AMB(m&&i>0?wx.cur:null,m&&i>0?i:0)}catch(e){}if(!m||i<=0){wxM.visible=!1;return}
  const fr=1-(1-m.fog)*i;S.fog.far=Math.max(30,wxF*fr);S.fog.near=Math.max(4,wxN*Math.max(.05,fr-.25));
  wxTmp.setHex(m.tint[0]).multiplyScalar(.25+.75*dl);S.background.lerp(wxTmp,m.tint[1]*i);S.fog.color.lerp(wxTmp,m.tint[1]*i);
  L.intensity*=1-m.dim*i;AM.intensity*=1-m.dim*i*.5;
  const ql=window.DBAQ&&DBAQ.l!=null?DBAQ.l:2,cnt=m.n?Math.round(m.n*i*[.3,.55,.8,1][ql]):0;
  if(cnt<=0||window.__dbaReduce&&m.flake){wxM.visible=!1}else{wxM.visible=!0;wxMat.color.setHex(m.c);wxMat.opacity=m.o*(.4+.6*i);wxGe.setDrawRange(0,cnt*6);
   const gy=HT(px,pz),R=22,H=26,rx=Math.cos(cy),rz=-Math.sin(cy),pos=wxA.array,w=m.w,Ln=m.len;
   for(let q=0;q<cnt;q++){let x=wxP[q*3],y=wxP[q*3+1],z=wxP[q*3+2];const ph=wxH[q];
    y-=m.v*dt*(m.flake?.8+ph*.4:1);x+=(m.wind||(m.flake?Math.sin(t*1.3+ph*9)*.9:3))*dt;if(m.flake&&!m.wind)z+=Math.cos(t*1.1+ph*7)*.6*dt;
    x=px+((x-px+R)%(2*R)+2*R)%(2*R)-R;z=pz+((z-pz+R)%(2*R)+2*R)%(2*R)-R;y=gy-3+((y-gy+3)%H+H)%H;
    wxP[q*3]=x;wxP[q*3+1]=y;wxP[q*3+2]=z;const o=q*12;
    if(m.flake){pos[o]=x-rx*w;pos[o+1]=y-w;pos[o+2]=z-rz*w;pos[o+3]=x+rx*w;pos[o+4]=y-w;pos[o+5]=z+rz*w;pos[o+6]=x+rx*w;pos[o+7]=y+w;pos[o+8]=z+rz*w;pos[o+9]=x-rx*w;pos[o+10]=y+w;pos[o+11]=z-rz*w}
    else{const sx=.12*Ln;pos[o]=x-rx*w;pos[o+1]=y;pos[o+2]=z-rz*w;pos[o+3]=x+rx*w;pos[o+4]=y;pos[o+5]=z+rz*w;pos[o+6]=x+rx*w+sx;pos[o+7]=y+Ln;pos[o+8]=z+rz*w;pos[o+9]=x-rx*w+sx;pos[o+10]=y+Ln;pos[o+11]=z-rz*w}}
   wxA.needsUpdate=!0}
  if(wx.cur=="storm"&&i>.6){wx.lt-=dt;if(wx.lt<=0){wx.lt=6+Math.random()*10;wxFlash()}}};
 const atmoUp=(dt,t)=>{const k=Math.max(0,curK),a=ATD[k],A=AT_[k],f=window.__atmoSnap?1:Math.min(1,dt*.8);cD.lerp(A?A.d:D0,f);cN.lerp(A?A.n:N0,f);const fg=a?a.f:[90,260];S.fog.near+=(fg[0]-S.fog.near)*f;S.fog.far+=(fg[1]-S.fog.far)*f;
  const Pr=a&&a.p;if(pBi!==k){pBi=k;if(Pr){PM.color.setHex(Pr.c);PM.blending=Pr.add?2:1;PM.needsUpdate=!0;PM.opacity=Pr.op||.85;const ql=window.DBAQ&&DBAQ.l!=null?DBAQ.l:2;pN=Math.min(PN,Math.round(Pr.n*[.3,.55,.8,1][ql]||Pr.n*.8))}else pN=0}
  if(!Pr){PS.forEach(q=>q.sp.visible=!1);return}
  if(Pr.hue)PM.color.setHSL((t*.15)%1,1,.62);
  const vis=Pr.night?Math.round(pN*(1-dl*.75)):pN,py2=HT(px,pz);
  PS.forEach((q,i)=>{if(i>=vis){q.sp.visible=!1;return}if(!q.i){q.i=1;q.x+=px;q.z+=pz}
   q.x+=(Pr.v[0]+Math.sin(t*.7+q.ph)*Pr.sw)*dt;q.y+=(Pr.v[1]*(.6+q.sz*.8)+Math.cos(t*.9+q.ph)*Pr.sw*.3)*dt;q.z+=(Pr.v[2]+Math.cos(t*.6+q.ph)*Pr.sw)*dt;
   q.x=px+(((q.x-px+42)%84)+84)%84-42;q.z=pz+(((q.z-pz+42)%84)+84)%84-42;q.y=((q.y%22)+22)%22;
   let sz=(Pr.s[0]+(Pr.s[1]-Pr.s[0])*q.sz)*1.7;if(Pr.tw)sz*=.55+.45*Math.sin(t*(2+q.sz*3)+q.ph);
   q.sp.position.set(q.x,py2+.4+q.y,q.z);q.sp.scale.set(sz,sz*(Pr.st||1),1);q.sp.visible=!0})};
 const NGT=(()=>{const c=document.createElement("canvas");c.width=c.height=64;const x=c.getContext("2d"),r=x.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(255,205,130,.95)");r.addColorStop(.5,"rgba(255,150,60,.35)");r.addColorStop(1,"rgba(255,120,40,0)");x.fillStyle=r;x.fillRect(0,0,64,64);return new Og(c)})();
 const NGL=new fe(new Na(1,32),new ln({map:NGT,transparent:!0,opacity:0,blending:2,depthWrite:!1,fog:!1}));NGL.rotation.x=-P/2;NGL.scale.setScalar(15);NGL.renderOrder=2;NGL.visible=!1;S.add(NGL);
 const SKY=(()=>{const c=document.createElement("canvas");c.width=1024;c.height=512;const x=c.getContext("2d");x.clearRect(0,0,1024,512);for(let i=0;i<900;i++){x.fillStyle="rgba(255,255,255,"+(.35+Math.random()*.65)+")";x.beginPath();x.arc(Math.random()*1024,Math.random()*300,Math.random()<.05?1.9:Math.random()*1+.3,0,6.283);x.fill()}const m=new fe(new Tt(380,24,12),new ln({map:new Og(c),side:_n,transparent:!0,opacity:0,blending:2,depthWrite:!1,fog:!1}));m.renderOrder=-1;m.visible=!1;S.add(m);return m})();
 const SKT=kind=>{const c=document.createElement("canvas");c.width=kind=="cloud"?256:128;c.height=128;const x=c.getContext("2d");
  if(kind=="sun"){const g=x.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,"rgba(255,255,245,1)");g.addColorStop(.1,"rgba(255,250,215,1)");g.addColorStop(.17,"rgba(255,232,160,.55)");g.addColorStop(.5,"rgba(255,190,90,.14)");g.addColorStop(1,"rgba(255,170,60,0)");x.fillStyle=g;x.fillRect(0,0,128,128)}
  else if(kind=="moon"){const g=x.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,"rgba(220,230,255,.4)");g.addColorStop(.35,"rgba(200,215,255,.13)");g.addColorStop(1,"rgba(180,200,255,0)");x.fillStyle=g;x.fillRect(0,0,128,128);x.fillStyle="#eef2fd";x.beginPath();x.arc(64,64,17,0,6.283);x.fill();x.fillStyle="rgba(150,165,200,.45)";[[58,58,4],[70,66,3],[62,72,3.4],[72,56,2.4]].forEach(a=>{x.beginPath();x.arc(a[0],a[1],a[2],0,6.283);x.fill()})}
  else{for(let i=0;i<30;i++){const cx=36+Math.random()*184,cy=46+Math.random()*34,r=16+Math.random()*26,g=x.createRadialGradient(cx,cy,0,cx,cy,r);g.addColorStop(0,"rgba(255,255,255,.5)");g.addColorStop(1,"rgba(255,255,255,0)");x.fillStyle=g;x.fillRect(cx-r,cy-r,r*2,r*2)}}
  return new Og(c)};
 const SUNM=new fe(new qd(230,230),new ln({map:SKT("sun"),transparent:!0,opacity:0,blending:2,depthWrite:!1,fog:!1,color:16777215})),MOONM=new fe(new qd(120,120),new ln({map:SKT("moon"),transparent:!0,opacity:0,blending:2,depthWrite:!1,fog:!1,color:16777215}));SUNM.renderOrder=-1;MOONM.renderOrder=-1;SUNM.visible=MOONM.visible=!1;S.add(SUNM);S.add(MOONM);
 const CLT=SKT("cloud"),CLD=Array.from({length:11},(_,i)=>{const m=new fe(new qd(1,1),new ln({map:CLT,transparent:!0,opacity:0,depthWrite:!1,fog:!1}));m.renderOrder=-1;m.visible=!1;const w=110+Math.random()*120;m.scale.set(w,w*.42,1);S.add(m);const a=i/11*6.283+Math.random()*.4,d=170+Math.random()*130;return{m,x:Math.cos(a)*d,z:Math.sin(a)*d,h:28+Math.random()*45,v:2+Math.random()*3,w}}),SNC=new Rt(0),CCC=new Rt(0),CWH=new Rt(16777215),CDK=new Rt(0x2a1a18);
 window.__dbaSky={SUNM,MOONM,CLD,get cam(){return cam}};
 const skyUp=(dt,t)=>{const k=Math.max(0,curK),A=k>=1&&k<=14?BI[k-1]:null,ang=((window.__todF!=null?window.__todF:tod)-.25)*P*2,el=Math.sin(ang),az=Math.cos(ang),cp=cam.position,wm=WXM[wx.cur],wd=wm?wx.i:0;
  const sv=Math.max(0,Math.min(1,(el+.1)/.3))*(1-wd*.85);SUNM.visible=sv>.02;if(SUNM.visible){SUNM.position.set(cp.x+az*250,cp.y+el*85+4,cp.z-150);SUNM.lookAt(cp);SUNM.material.opacity=sv;SNC.setHex(A?A.c[1]:0xffe9a8);SUNM.material.color.setHex(16777215).lerp(SNC,.3)}
  const mv=Math.max(0,Math.min(1,(-el+.1)/.3))*(1-wd*.8);MOONM.visible=mv>.02;if(MOONM.visible){MOONM.position.set(cp.x-az*250,cp.y-el*85+4,cp.z-150);MOONM.lookAt(cp);MOONM.material.opacity=mv}
  CCC.copy(cc2).lerp(CWH,.55+.2*dl);if(A&&A.sh=="volcano")CCC.lerp(CDK,.55);const co=(.2+.3*dl+wd*.25)*(A&&A.sh=="volcano"?1.2:1);
  CLD.forEach(c=>{c.x+=c.v*dt*(1+wd*2);if(c.x>300)c.x-=600;c.m.position.set(cp.x+c.x,cp.y+c.h,cp.z+c.z);c.m.lookAt(cp.x,cp.y+c.h*.5,cp.z);c.m.material.color.copy(CCC);c.m.material.opacity=Math.min(.75,co);c.m.visible=co>.03})};
 const FIRES=CAMPS.map((c,i)=>{const g=new zn,ax=c.x+5,az=c.z+5;g.position.set(ax,HT(ax,az),az);[0,2.1,4.2].forEach(a=>{const l=new fe(GE.cyl,M(0x4a2e18));l.scale.set(.35,2.4,.35);l.rotation.z=P/2;l.rotation.y=a;l.position.y=.3;g.add(l)});const fl=[0,1,2].map(n=>{const f=new fe(new Gt(.55-.12*n,1.8-.35*n,7),new ln({color:[0xff5a10,0xff9a20,0xffe070][n],transparent:!0,opacity:.9}));f.position.y=1+.12*n;g.add(f);return f});const gd=new fe(new Na(1,28),new ln({map:NGT,transparent:!0,opacity:.25,blending:2,depthWrite:!1,fog:!1}));gd.rotation.x=-P/2;gd.position.y=.3;gd.scale.setScalar(26);g.add(gd);S.add(g);props.push({o:g,x:ax,z:az,r:260});return{g,fl,gd}});
 const fxUp=(dt,t)=>{const nt=1-dl;NGL.visible=nt>.15;if(NGL.visible){NGL.position.set(px,HT(px,pz)+.25,pz);NGL.material.opacity=Math.min(.5,nt*.6)*(.9+.1*Math.sin(t*6))}
  skyUp(dt,t);SKY.position.copy(cam.position);SKY.material.opacity=Math.max(0,(nt-.4)*1.6);SKY.visible=SKY.material.opacity>.02;
  FIRES.forEach((f,i)=>{if(!f.g.visible)return;f.fl.forEach((m,n)=>{m.scale.y=1+.25*Math.sin(t*9+n*2+i);m.scale.x=m.scale.z=1+.12*Math.sin(t*7+n*3)});f.gd.material.opacity=.15+nt*.5+.05*Math.sin(t*8)});
  const k=Math.max(0,curK),X=GTX[k];if(X){if(k===1||k===8){X.offset.x+=dt*.006;X.offset.y+=dt*.0035}else if(k===14){X.offset.y=Math.sin(t*.35)*.02;X.offset.x=Math.cos(t*.27)*.02}}
  if(typeof DBA_OMM!="undefined"&&DBA_OMM.ice)DBA_OMM.ice.emissiveIntensity=.22+.12*Math.sin(t*1.4)};
 const dispG=g=>{try{g.traverse(m=>{m.geometry&&m.geometry.dispose()})}catch(x){}},unb=e=>{if(!e.built||!e.mg)return;e.sh&&(e.g.remove(e.sh),e.sh=null);e.g.remove(e.mg);dispG(e.mg);e.mg=null;e.bm=null;e.built=!1};
 const ANE=(e,t)=>{const b=e.bm,mg=e.mg;if(!mg)return;const sp=e.sp||0,mv=Math.min(1,sp/3.5),ph=t*(5+Math.min(8,sp*.5))+e.home.x,s=Math.sin(ph);
  mg.position.y=Math.abs(Math.sin(ph))*.1*mv+.02;mg.rotation.z=Math.sin(ph)*.045*mv;
  if(!b)return;
  if(b.legs&&b.legs.length>1&&!b.legs[0].sp){b.legs[0].rotation.x=s*.75*mv;b.legs[1].rotation.x=-s*.75*mv}if(b.legs&&b.legs[0]&&b.legs[0].sp)b.legs.forEach((q,i)=>{const p2=ph*.7+(i%4)*1.6+(i<4?0:Math.PI),a=Math.sin(p2);q.rotation.y=a*.28*mv;q.kn.rotation.z=-q.sd*(Math.max(0,Math.cos(p2))*.55*mv+Math.sin(t*1.4+i)*.05)});if(b.tent)b.tent.forEach((ch,i)=>ch.forEach((q,k)=>{q.rotation.x=Math.sin(t*(1.6+mv*1.4)-k*.7+i*.8)*(.12+mv*.05);q.rotation.z=Math.cos(t*1.3-k*.6+i)*.11}));
  if(b.clawL&&b.clawR){b.clawL.rotation.x=-s*.6*mv;b.clawR.rotation.x=s*.6*mv}if(b.clawL&&b.clawL.el){b.clawL.el.rotation.x=-(.2+.45*mv*Math.max(0,s));b.clawR.el.rotation.x=-(.2+.45*mv*Math.max(0,-s))}if(b.legs&&b.legs.length>1&&b.legs[0].kn&&!b.legs[0].sp){b.legs[0].kn.rotation.x=Math.max(0,-s)*.8*mv;b.legs[1].kn.rotation.x=Math.max(0,s)*.8*mv}
  if(b.tail)b.tail.forEach((q,i)=>{q.rotation.y=Math.sin(t*(2.6+mv*2.4)+e.home.x-i*.55)*(.09+i*.012)*(1+mv*1.1);q.rotation.x=Math.sin(t*2+e.home.z-i*.4)*.035});
  if(b.wingL&&b.wingR){const f=Math.sin(t*(3+mv*4)+e.home.z)*(.22+mv*.22);b.wingL.rotation.x=f;b.wingR.rotation.x=-f}};
 const lp=()=>{id=requestAnimationFrame(lp);try{lp0()}catch(er){if(!lp._w||performance.now()-lp._w>5e3){lp._w=performance.now();console.warn('DBA loop',er)}}},lp0=()=>{if(paused||!rd)return;if(lost){lost=0;suspendR();resumeR();return}const n=performance.now(),dt=Math.min(.05,(n-last)/1e3);last=n;const t=(n-t0)/1e3;lp._f=(lp._f||0)+1;
  {const fr=n-(lp._p||n);lp._p=n;if(fr<400){lp._e=lp._e?lp._e*.94+fr*.06:fr;if(n-(lp._q||0)>2500){lp._q=n;const cu=rd.getPixelRatio(),ba=Math.min(devicePixelRatio||1,2),lo=window.__dbaMinPR||.6;if(lp._e>34&&cu>lo+.01){rd.setPixelRatio(Math.max(lo,cu*.8));lp._e=null}else if(lp._e<19&&cu<ba-.01){rd.setPixelRatio(Math.min(ba,cu*1.2));lp._e=null}}}else lp._e=null}
  {const nt=tod+dt/300;if(nt>=1)day++;tod=nt%1}dl=.5+.5*Math.sin((tod-.25)*P*2);if(window.__dlForce!=null)dl=window.__dlForce;DBA_NGU(dl,t,px,pz);S.fog.near=wxN;S.fog.far=wxF;atmoUp(dt,t);wxN=S.fog.near;wxF=S.fog.far;fxUp(dt,t);cc2.copy(cN).lerp(cD,dl);S.background.copy(cc2);S.fog.color.copy(cc2);AM.intensity=.22+.78*dl;L.intensity=.07+1.18*dl;if(NL){const nn=Math.max(0,Math.min(1,(.55-dl)/.3));NL.intensity=nn*95*(1+.05*Math.sin(t*8.3));NL.position.set(px,HT(px,pz)+3.8,pz)}wxUp(dt,t);const ag=1+.4*(1-dl);cy-=camJoy.x*2.2*dt;cy+=((keys.cL?1:0)-(keys.cR?1:0))*2*dt;pr=Math.max(.12,Math.min(1.7,pr+camJoy.y*.9*dt));
  const ix=(keys.mR?1:0)-(keys.mL?1:0)+joy.x,iz=(keys.mB?1:0)-(keys.mF?1:0)+joy.y,il=Math.hypot(ix,iz);mvg=il>.12?1:0;
  if(mvg){const k=Math.min(1,il)/il,fi=-iz*k,st=ix*k,fx=Math.sin(cy),fz=Math.cos(cy),rx=-Math.cos(cy),rz=Math.sin(cy),dx=fx*fi+rx*st,dz=fz*fi+rz*st,spd=26*(sprint&&stam>0&&mount?MSPD[mount]:1)*wxSp();let nx=Math.max(-HW+6,Math.min(HW-6,px+dx*spd*dt)),nz=Math.max(-HW+6,Math.min(HW-6,pz+dz*spd*dt));
   if(!canGo(px,pz,nx,pz,1))nx=px;if(!canGo(nx,pz,nx,nz,1))nz=pz;pushOb(nx,nz,1.65);if(canGo(px,pz,RX,RZ,1)){nx=RX;nz=RZ}px=nx;pz=nz;hd=Math.atan2(dx,dz);if(Math.abs(camJoy.x)<.15&&!keys.cL&&!keys.cR&&fi>-.2&&performance.now()-lastRot>1500){const dd=ad(hd,cy);cy+=Math.max(-.45,Math.min(.45,dd*.5))*dt}}
  stam=100;if(jh>0||jv!==0){jv-=62*dt;jh+=jv*dt;if(jh<=0){jh=0;jv=0}}
  const fx=Math.sin(hd),fz=Math.cos(hd),lead=ctlLead(),py=HT(px,pz);
  hs.forEach((a,k)=>{const ox=a===lead?0:((k%3)-1)*2.7,oz=(a===lead?0:3.3+((k/3)|0)*2.85),tx=px+fz*ox-fx*oz,tz=pz-fx*ox-fz*oz,p=a.g.position,f=a===lead?1:Math.min(1,dt*6);p.x+=(tx-p.x)*f;p.z+=(tz-p.z)*f;if(a!==lead){pushOb(p.x,p.z,1.5);p.x=RX;p.z=RZ}const gy=HT(p.x,p.z);if(a.sh){a.sh.position.set(p.x,gy+.12,p.z);a.sh.scale.setScalar(1.1*Math.max(.4,1-jh*.12))}
   if(a.dead){p.y=gy+.4;return}p.y=gy+(mvg?Math.abs(Math.sin(t*11+k))*.18:0)+jh;a.g.rotation.y=hd;a.g.rotation.z=mvg?Math.sin(t*11+k)*.06:0;if(!a.dead)animH(a,mvg&&!(sprint&&mount&&a===lead))});
  {const tt=t;swl.forEach(q=>{const o=q.o,A=.03*o.userData.sw,w=tt*1.25+q.x*.021+q.z*.017;o.rotation.z=Math.sin(w)*A+Math.sin(w*2.7)*A*.3;o.rotation.x=Math.cos(w*.8)*A*.6});WT.forEach(w=>{if(Math.abs(w.p.x-px)>380||Math.abs(w.p.z-pz)>380){w.g.visible=!1;return}w.g.visible=!0;if(w.ice){w.t1.offset.x=tt*.004;w.t2.offset.y=-tt*.003}else{w.t1.offset.x=tt*.03;w.t1.offset.y=tt*.012;w.t2.offset.x=-tt*.02;w.t2.offset.y=tt*.035}w.g.position.y=w.wl+Math.sin(tt*.9+w.p.x)*.06;w.m1.material.opacity=(w.ice?.88:.8)+Math.sin(tt*1.3)*.03})}
  {const ld=ctlLead();mnts.forEach((q,i)=>{if(q&&i!==mount)q.visible=!1});const mq=mnts[mount];if(sprint&&mount&&mq&&ld&&!ld.dead){mq.visible=!0;mq.position.set(ld.g.position.x,py+jh+(mount>=3&&mount!=4?.5:0),ld.g.position.z);mq.rotation.y=hd;mq.userData.anim(t,mvg);ld.g.position.y=py+jh+RH[mount]+(mvg?Math.abs(Math.sin(t*14))*.1:0)}else if(mq)mq.visible=!1}
  let bud=1;ents.forEach(e=>{if(!e.alive){e.ret-=dt;if(e.ret<=0){e.alive=!0;e.g.position.set(e.home.x,HT(e.home.x,e.home.z),e.home.z)}else return}
   const gp=e.g.position,dx=px-gp.x,dz=pz-gp.z,d=Math.hypot(dx,dz);if(d>210){e.g.visible=!1;if(e.roam){e.t-=dt;if(e.t<=0){e.t=rnd(8,16);const L=RDP(e.k),q=L.length?L[Math.random()*L.length|0]:[e.home.x,e.home.z];e.tx=q[0];e.tz=q[1]}const ax=e.tx-gp.x,az=e.tz-gp.z,al=Math.hypot(ax,az);if(al>1){gp.x+=ax/al*9.6*dt;gp.z+=az/al*9.6*dt}gp.y=HT(gp.x,gp.z)}if(d>480&&e.built)unb(e);return}if(!e.built){if(bud<=0)return;bud--;build(e)}e.g.visible=!0;if(e.ring)e.ring.scale.setScalar(1+.12*Math.sin(t*3));let tx,tz,sp;
   if(d<(e.roam?30:e.m?18:14)*ag&&cellOf(px,pz)==e.k){tx=px;tz=pz;sp=(e.roam?6.2:e.m?5.4:4.8)*(1+.15*(1-dl))}else{e.t-=dt;if(e.t<=0){if(e.roam){e.t=rnd(8,16);const L=RDP(e.k),q=L.length?L[Math.random()*L.length|0]:[e.home.x+rnd(-300,300),e.home.z+rnd(-300,300)];e.tx=q[0];e.tz=q[1]}else{e.t=rnd(3,6);e.tx=e.home.x+rnd(-14,14);e.tz=e.home.z+rnd(-14,14)}}tx=e.tx;tz=e.tz;sp=e.roam?3.2:1.8}
   const ax=tx-gp.x,az=tz-gp.z,al=Math.hypot(ax,az);if(al>.5){const nx=gp.x+ax/al*sp*dt,nz=gp.z+az/al*sp*dt;if(canGo(gp.x,gp.z,nx,nz,0)){pushOb(nx,nz,e.rad||1.2*(e.sc||1));if(canGo(gp.x,gp.z,RX,RZ,0)){gp.x=RX;gp.z=RZ}}e.g.rotation.y=Math.atan2(ax,az)}
   gp.y=HT(gp.x,gp.z);{const sp0=e._px==null?0:Math.hypot(gp.x-e._px,gp.z-e._pz)/Math.max(dt,.001);e._px=gp.x;e._pz=gp.z;e.sp=(e.sp||0)*.85+Math.min(40,sp0)*.15}if(d<90||(lp._f+(e._i||(e._i=(lp._i=(lp._i||0)+1))))%3==0)ANE(e,t);if(d<(e.hit||(e.m?5.4:4.2))&&!paused){paused=!0;cfg.onFight(e)}});
  if(!paused&&Math.hypot(px-BP.x,pz-BP.z)<12){paused=!0;cfg.onBoss()}
  chests.forEach(c=>{if(c.on&&Math.hypot(px-c.x,pz-c.z)<5.6){c.on=!1;c.g.userData.h=1;c.g.visible=!1;cfg.onChest(c.b)}});
  pois.forEach(p=>{if(p.on&&Math.hypot(px-p.x,pz-p.z)<10){p.on=!1;p.g.userData.h=1;p.g.visible=!1;cfg.onPoi(p.b)}});
  let nb=null,nbd=9;npcs.forEach(q=>{q.cd-=dt;const dq=Math.hypot(px-q.x,pz-q.z);if(!q.built&&dq<260)q.mk();q.g.visible=dq<300;if(!q.m)return;q.m.position.y=q.my+Math.sin(t*3)*.3;if(q.k=="elder"){q.mt=(q.mt||0)-dt;if(q.mt<=0){q.mt=.6;q.ms=cfg.getMark?cfg.getMark(q.b,q.vi):0}q.m.visible=!!q.ms&&dq<140;if(q.ms&&q.m.material!==MKM[q.ms])q.m.material=MKM[q.ms];q.m.rotation.y=Math.atan2(px-q.x,pz-q.z)-q.g.rotation.y}if(!paused&&dq<9&&dq<nbd){nbd=dq;nb=q}});if(paused)nb=null;if(nb!==nearQ){nearQ=nb;cfg.onNear&&cfg.onNear(nb?{k:nb.k,b:nb.b,vi:nb.vi}:null)}
  springs.forEach(s=>{s.cd-=dt;if(s.cd<=0&&Math.hypot(px-s.x,pz-s.z)<7.6){s.cd=30;cfg.onSpring(s.b)}});PONDS.forEach(q=>{q.cd=(q.cd||0)-dt;if(q.cd<=0&&!paused&&cfg.onPond&&Math.hypot(px-q.x,pz-q.z)<q.r*.95){q.cd=45;paused=!0;cfg.onPond(q.k)}});
  GT.forEach(g=>{g.cd=(g.cd||0)-dt;if(!g.open&&g.cd<=0&&Math.hypot(px-g.p.x,pz-g.p.z)<22){g.cd=8;cfg.onLocked(g.u)}});
  CAMPS.forEach((c,i)=>{if(!disc[i]&&Math.hypot(px-c.x,pz-c.z)<85){disc[i]=1;cfg.onCamp(i-1)}});
  nodes.forEach(nd=>{if(!nd.on){nd.cd-=dt;if(nd.cd<=0){nd.on=!0;nd.g.userData.h=0}return}if(Math.hypot(px-nd.x,pz-nd.z)<5.2){nd.on=!1;nd.cd=120;nd.g.userData.h=1;nd.g.visible=!1;cfg.onGather(nd.t,nd.b)}});
  crypts.forEach((c,i)=>{if(c.on&&!paused&&Math.hypot(px-c.x,pz-c.z)<10){paused=!0;cfg.onCrypt(i)}});shrines.forEach(s2=>{s2.cd-=dt;if(s2.cd<=0&&Math.hypot(px-s2.x,pz-s2.z)<7.6){s2.cd=300;cfg.onShrine(s2.b)}});
  for(let i=evs.length-1;i>=0;i--){const e=evs[i];e.t-=dt;e.g.rotation.y+=dt*.8;if(e.t<=0){S.remove(e.g);dispG(e.g);evs.splice(i,1);continue}if(!paused&&Math.hypot(px-e.x,pz-e.z)<6.5){S.remove(e.g);dispG(e.g);evs.splice(i,1);paused=!0;cfg.onEvent&&cfg.onEvent(e.kind,e.b)}}
  {const D=window.__dbaDst||(window.__dbaDst={t:0,lx:px,lz:pz,i:0,P:[]});if(!D.P.length){for(let n=0;n<14;n++){const mt=new Ku({map:PM.map,transparent:!0,depthWrite:!1,color:0xbbaa99,opacity:0}),sp=new Lf(mt);sp.visible=!1;S.add(sp);D.P.push({sp,mt,l:0,m:0})}}
   const mv=Math.hypot(px-D.lx,pz-D.lz);D.lx=px;D.lz=pz;D.t-=dt;if(mv>.04&&D.t<=0&&jh===0&&!paused){D.t=.09;const p=D.P[D.i++%D.P.length],c=cols[Math.max(0,cellOf(px,pz)-0)]||0x998877;p.mt.color.set(c).lerp(new Rt(0xffffff),.3);p.sp.position.set(px+(Math.random()-.5)*.8,HT(px,pz)+.25,pz+(Math.random()-.5)*.8);p.l=p.m=.75;p.sp.visible=!0}
   D.P.forEach(p=>{if(p.l>0){p.l-=dt;const f=Math.max(0,p.l/p.m);p.mt.opacity=.8*f;p.sp.scale.setScalar(1.1+(1-f)*2.6);p.sp.position.y+=dt*.5;if(p.l<=0)p.sp.visible=!1}})}
  const kk=cellOf(px,pz);
  if(dl<.28&&!rareE&&!rareDone&&!paused&&kk>=1&&kk<=14){const a=Math.random()*P*2,x=Math.max(-HW+30,Math.min(HW-30,px+Math.cos(a)*80)),z=Math.max(-HW+30,Math.min(HW-30,pz+Math.sin(a)*80));if(cellOf(x,z)===kk){rareE=mkEnt(kk-1,!0,x,z,{rare:1,sc:1.1});rareE.bo.maxHp=Math.round(rareE.bo.maxHp*1.2);rareE.bo.hp=rareE.bo.maxHp;rareE.bo.attack=Math.round(rareE.bo.attack*.85);rareE.bo.name="Spettro · "+String(rareE.bo.name).replace("Miniboss · ","");rareDone=!0;cfg.onRare()}}
  if(dl>.6){rareDone=!1;if(rareE){if(rareE.alive){rareE.alive=!1;rareE.ret=1e9;rareE.g.visible=!1}rareE=null}}
  if(kk!==curK){curK=kk;cfg.onBiome(kk-1);if(prismE){if(prismE.alive){prismE.alive=!1;prismE.ret=1e9;prismE.g.visible=!1}prismE=null}if(kk>=1&&kk<=14&&!paused&&Math.random()<.5){const a=Math.random()*P*2,x=Math.max(-HW+30,Math.min(HW-30,px+Math.cos(a)*90)),z=Math.max(-HW+30,Math.min(HW-30,pz+Math.sin(a)*90));if(cellOf(x,z)===kk){prismE=mkEnt(kk-1,!0,x,z,{prism:1,sc:1.1});window.DBA_PRISM.apply(prismE.bo,1);cfg.onPrism&&cfg.onPrism(prismE.bo.name)}}}
  if(n-lastV>400){lastV=n;props.forEach(p=>{p.o.visible=!p.o.userData.h&&Math.abs(p.x-px)<p.r&&Math.abs(p.z-pz)<p.r&&Math.hypot(p.x-px,p.z-pz)<p.r});swl=props.filter(p=>p.o.visible&&p.o.userData.sw&&Math.abs(p.x-px)<75&&Math.abs(p.z-pz)<75)}
  window.__dbaWH&&window.__dbaWH(dt,t);
  const cf=Math.sin(cy),cg=Math.cos(cy);
  if(view=="first"){const ld=ctlLead(),hy=py+5.1;cam.position.set(px+cf*.9,hy,pz+cg*.9);cam.lookAt(px+cf*12,hy+(.55-pr)*9,pz+cg*12);hs.forEach(a=>{a.g.visible=a!==ld})}
  else{const ex=(view=="wide"?(asp<1?36:30):view=="top"?(asp<1?44:36):view=="third"?td:(asp<1?15:13))*zm,cx=px-cf*ex,cz=pz-cg*ex;cam.position.set(cx,Math.max(py+ex*pr+2,HT(cx,cz)+2),cz);if(view=="third"){cam.lookAt(px+cf*6,py+2.1,pz+cg*6);hs.forEach(a=>{a.g.visible=a===lead||Math.hypot(a.g.position.x-cx,a.g.position.z-cz)>Math.max(4.2,ex-.2)})}else{cam.lookAt(px+cf*ex*.15,py+2,pz+cg*ex*.15);hs.forEach(a=>{a.g.visible=!0})}}
  {const wf=view=="third"?52:(asp<1?68:52);if(cam.fov!==wf){cam.fov=wf;cam.updateProjectionMatrix()}}rd&&rd.render(S,cam);
  if(n-lastM>200){lastM=n;drawMap()}};id=requestAnimationFrame(lp);
 return{setTod:v=>{tod=v},npcList:()=>npcs.map(q=>({x:q.x,z:q.z,k:q.k,b:q.b})),_nodes:nodes,nodeList:()=>nodes.map(n=>({x:n.x,z:n.z,t:n.t,b:n.b})),jumpH:()=>jh,quality:()=>rd&&rd.getPixelRatio(),perf:()=>({calls:rd.info.render.calls,tris:rd.info.render.triangles,geo:rd.info.memory.geometries,tex:rd.info.memory.textures,ents:ents.length,built:ents.filter(e=>e.built).length,vis:props.filter(p=>p.o.visible).length,props:props.length}),_pr:props,ponds:()=>PONDS.map(q=>({x:q.x,z:q.z,r:q.r,k:q.k,sh:q.sh})),_ht:HT,spawnEv,spawnAmb,isPaused:()=>paused,
  addNpc(o0){const k=o0.b+1,x=o0.x,z=o0.z,q=new zn;q.position.set(x,HT(x,z),z);q.rotation.y=o0.ry||0;q.visible=!1;S.add(q);addOb(x,z,2.6);
   const ks=Object.keys(WOW_RACES),rs=o0.rs|0,rk=ks[rs%ks.length],RC2=WOW_RACES[rk],f1=((rs*9301+49297)%233280)/233280,f2=((rs*7919+13)%1000)/1000,f3=((rs*104729+7)%1000)/1000;
   const ap={sex:f1<.5?"male":"female",race:rk,skinColor:RC2.skin[(f2*RC2.skin.length)|0],hairColor:RC2.hair[(f3*RC2.hair.length)|0],hairStyle:(rs>>3)%18,hairPick:1};ap.beardColor=ap.hairColor;if(RC2.eye!=null)ap.eyeColor=RC2.eye;if(RC2.beard&&ap.sex!="female")ap.beardStyle=1;else if(ap.sex!="female"&&rs%3==0){ap.beardStyle=(rs>>5)%12;ap.beardPick=1}
   const o={race:rk,vi:o0.id,g:q,m:null,my:6.2,x,z,k:"sq",b:o0.b,cd:0,y:HT(x,z),built:0,sq:1};
   o.mk=()=>{o.built=1;try{const m3=WOW_build(WOWTT(),{classKey:o0.cl||"druido",color:o0.col||0x6d4c9f,arch:"melee",name:"sq",appearance:ap},!1);m3.scale.set(1.95,1.95,1.95);q.add(m3)}catch(e){add(new fe(GE.cyl,M(0x4338ca)),0,1.65,0,q).scale.set(1.35,3.3,1.35);add(new fe(GE.sph,M(0xf1c9a5)),0,3.9,0,q).scale.set(.9,.9,.9)}const mm=add(new fe(GE.sph,new ln({color:o0.mkc||0xfacc15})),0,o.my,0,q);mm.scale.set(.75,.75,.75);o.m=mm};
   npcs.push(o);return o},
  rmNpc(o){const i=npcs.indexOf(o);if(i>=0)npcs.splice(i,1);S.remove(o.g)},
  moveNpc(o,x,z,ry){o.x=x;o.z=z;o.g.position.set(x,HT(x,z),z);if(ry!=null)o.g.rotation.y=ry},
  spot(b,dmin){const k=b+1,cn=cc(k);for(let n=0;n<400;n++){const x=cn.x+(Math.random()-.5)*(CS-260),z=cn.z+(Math.random()-.5)*(CS-260);if(CAMPS.some(q=>Math.hypot(x-q.x,z-q.z)<(dmin||150))||VIL.some(q=>Math.hypot(x-q.x,z-q.z)<150)||nearGate(x,z,100)||PONDS.some(q=>Math.hypot(x-q.x,z-q.z)<q.r*1.7+60)||!freeAt(x,z,30))continue;return{x,z}}return null},
  spawnQ(bi,tpl,x,z,ex){if(!freeAt(x,z,3))return null;return mkEnt(bi,!1,x,z,Object.assign({tpl},ex||{}))},
  entAt(e){return ents.indexOf(e)>=0},
  evCount:()=>evs.length,suspend:suspendR,resume:resumeR,setSprint(b){sprint=!!b&&mount>0},stamina:()=>stam,isSprint:()=>sprint,setMount(t){mount=t;if(!t)sprint=!1},
  markCrypt(i,dn){const c=crypts[i];c.on=!dn;c.glow.color.set(dn?0x555566:c.pcol);c.glow.emissive.set(dn?0x222233:c.pcol);c.pnl.color.set(dn?0x555566:c.pcol);c.pnl.emissive.set(dn?0x222233:c.pcol)},cryptInfo:i=>({b:crypts[i].b}),day:()=>day,
  vilCount:k=>VCN[k]||1,interact,nearNpc:()=>nearQ&&{k:nearQ.k,b:nearQ.b,vi:nearQ.vi},npcInfo:()=>npcs.map(q=>({k:q.k,b:q.b,vi:q.vi,race:q.race})),inCamp:()=>CAMPS.some(c=>Math.hypot(px-c.x,pz-c.z)<75)||VIL.some(c=>Math.hypot(px-c.x,pz-c.z)<75),teleport(x,z){px=x;pz=z;hs.forEach(a=>a.g.position.set(x,HT(x,z)+(a.dead?.4:0),z))},
  mapData:()=>({px,pz,HW,CS,cells:PATH.map((p,k)=>({x:cc(k).x,z:cc(k).z,col:cols[k]})),gates:GT.map(g=>({x:g.p.x,z:g.p.z,o:g.open})),camps:CAMPS.map((c,i)=>({x:c.x,z:c.z,d:disc[i]})),vils:VIL.map(c=>({x:c.x,z:c.z})),outs:OUT.map(o=>({x:o.x,z:o.z,d:o.done})),crypts:crypts.map(c=>({x:c.x,z:c.z,d:!c.on})),roam:ents.filter(e=>e.roam&&e.alive).map(e=>({x:e.g.position.x,z:e.g.position.z,b:e.bi})),BP,roads:ROADS.map(r=>({k:r.kind,p:r.pts.filter((_,i)=>i%5==0).map(a=>[a[0]|0,a[1]|0])}))}),
  weather:()=>({cur:wx.cur,want:wx.want,i:wx.i,next:wx.next,sp:wxSp()}),
  state(){return{ver:2,day,crypts:crypts.map(c=>c.on?1:0),disc,nodes:nodes.map(n=>n.on?1:0),pos:{x:px,z:pz},tod,killed:ents.map(e=>e.alive?0:Math.max(1,Math.round(e.ret))),chests:chests.map(c=>c.on?1:0),pois:pois.map(p=>p.on?1:0)}},
  joy,camJoy,jump(){if(!paused&&jh===0)jv=24},rotCam(dx,dy){cy-=dx*.006;pr=Math.max(.12,Math.min(1.7,pr+dy*.004));lastRot=performance.now()},camState:()=>({cy,pr,view}),setView(v){if(PRV[v]){view=v;pr=PRV[v];zm=1}},getView:()=>view,setGate,xg:GT.slice(15).map(g=>g.u),setObj(o){obj=o},isNight:()=>dl<.35,biome:()=>curK,BI,CAMPS,GATES:GT.map(g=>g.p),BP,pause(b){paused=b;last=performance.now()},setParty(pl){mkParty(pl)},
  kill(e){e.alive=!1;e.ret=(e.op!=null||e.guard||e.rare||e.amb)?1e9:50;e.g.visible=!1;try{unb(e);if(e.amb){S.remove(e.g);const ii=ents.indexOf(e);ii>=0&&ents.splice(ii,1)}}catch(x){}if(e.op!=null&&chkOut(e.op))cfg.onOutpost(e.op)},push(x,z){px=x;pz=z},pos:()=>({x:px,z:pz}),zoom(f){if(view=="third"){td=Math.min(30,Math.max(3,td*f));try{localStorage.setItem("dba_ow_dist3",String(Math.round(td*10)/10))}catch(e){}}else zm=Math.min(1.8,Math.max(.5,zm*f))},setDist(v){td=Math.min(30,Math.max(3,v))},getDist:()=>td,ents,tg:()=>({chests,springs,nodes,pois,crypts,OUT,npcs,shrines}),project(x,z,h){const y=HT(x,z)+(h==null?8:h),m=cam.matrixWorldInverse.elements,q=cam.projectionMatrix.elements,vx=m[0]*x+m[4]*y+m[8]*z+m[12],vy=m[1]*x+m[5]*y+m[9]*z+m[13],vz=m[2]*x+m[6]*y+m[10]*z+m[14],cx=q[0]*vx+q[4]*vy+q[8]*vz+q[12],cy=q[1]*vx+q[5]*vy+q[9]*vz+q[13],cw=q[3]*vx+q[7]*vy+q[11]*vz+q[15];return{x:cx/cw,y:cy/cw,f:cw>0}},
  dispose(){cancelAnimationFrame(id);removeEventListener("keydown",kd);removeEventListener("keyup",ku);rzOff();suspendR();mm.remove();try{wxFl.remove()}catch(e){}}}}
function DBA_TPL(i){const a=$v.filter(x=>x.theme==DBA_TK[i]);return a.length?a[Math.random()*a.length|0]:$v[0]}
function DBA_MKB(t,B,m,n){const b=ug(n,$v.indexOf(t)),h=Math.round(B.maxHp*(m?.8:.18));return Object.assign(b,{tier:0,maxHp:h,hp:h,attack:Math.round(B.attack*(m?.9:.5)),defense:B.defense,difficulty:B.difficulty,difficultyLabel:B.difficultyLabel,difficultyName:B.difficultyName,difficultyIcon:B.difficultyIcon,difficultyColor:B.difficultyColor,difficultyMul:B.difficultyMul,name:(m?"Miniboss · ":"")+t.name,companionChance:.05})}
function DBA_TPK(k){return $v.find(x=>x.key===k)||$v[0]}
window.DBA_X={TPL:DBA_TPL,MKB:DBA_MKB,R3:DBA_R3,W:DBA_W,TPK:DBA_TPK};
var __T=[$2,E2,ir,B2,kp,h_,Na,Ps,qd,Ku,Lf,Rt,zt,ln,fe,Og,Jn,on,zn,Tt,Fn,Gt,rn,Ci,_n,DBA_ARCH,DBA_BIKEYS,DBA_EN,DBA_ENP,DBA_EQ,DBA_GRIM,DBA_MUS,DBA_NMD,DBA_PRISM,DBA_RARS,DBA_SETFULL,DBA_SETFXT,DBA_SETS,DBA_SLOTW,DBA_TAL,DBA_TALFIND,DBA_THKEY,DBA_HMAT,DBA_NMB,DBA_VILTEX,WOW_RACES,WOW_build,$v,hn];

;window.THREE_O={WebGLRenderer:$2,Scene:E2,PerspectiveCamera:ir,AmbientLight:B2,DirectionalLight:kp,Fog:h_,Mesh:fe,MeshStandardMaterial:zt,MeshBasicMaterial:ln,Color:Rt,Texture:Og,BufferGeometry:Jn,BufferAttribute:on,Group:zn,SphereGeometry:Tt,CylinderGeometry:Fn,ConeGeometry:Gt,BoxGeometry:rn,TorusGeometry:Ci};window.DBA_W=DBA_W;window.DBA_R3=DBA_R3;if(typeof DBA_X!=="undefined")window.DBA_X=DBA_X;
})();
