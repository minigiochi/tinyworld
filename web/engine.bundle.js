// GENERATO da tools/bundle.js — non modificare
const DATA = {"classes":{"druido":{"key":"druido","name":"Druido","icon":"🌿","arch":"healer","maxHp":75,"attack":11,"defense":6,"speed":5,"radius":0.6,"range":6.5,"color":"#4ade80","accent":"from-emerald-500 to-green-600","text":"text-emerald-300","theme":"nature","weapon":"staff","helmet":"hood","desc":"Cure naturali e rigenerazione con erbe.","abilities":[{"name":"Cura Selvatica","cd":2.2,"kind":"heal_single","vfx":"heal_beam","desc":"Cura un alleato"},{"name":"Rinnovamento","cd":7,"kind":"regen","vfx":"regen","desc":"Rigenerazione 6s"},{"name":"Sinergia Vitale","cd":11,"kind":"heal_aoe","vfx":"heal_ring","desc":"Cura tutto il party"}]},"monaco":{"key":"monaco","name":"Monaco","icon":"💧","arch":"healer","maxHp":80,"attack":8,"defense":7,"speed":5,"radius":0.6,"range":6.5,"color":"#38bdf8","accent":"from-cyan-500 to-blue-600","text":"text-cyan-300","theme":"water","weapon":"staff","helmet":"band","desc":"Cure ad area d'acqua e scudi liquidi.","abilities":[{"name":"Onda Curativa","cd":3,"kind":"heal_aoe","vfx":"heal_ring","desc":"Cura ad area"},{"name":"Sorgente","cd":3.5,"kind":"heal_single","vfx":"heal_beam","desc":"Cura singola grande"},{"name":"Acquascudo","cd":7,"kind":"shield","vfx":"bubble","desc":"Scudo d'acqua"}]},"chierico":{"key":"chierico","name":"Chierico","icon":"✨","arch":"healer","maxHp":78,"attack":12,"defense":8,"speed":5,"radius":0.6,"range":6.5,"color":"#fde047","accent":"from-amber-300 to-yellow-500","text":"text-amber-300","theme":"light","weapon":"mace","helmet":"circlet","desc":"Cure sacre gialle e barriere di luce.","abilities":[{"name":"Luce Sacra","cd":2.2,"kind":"heal_single","vfx":"heal_beam","desc":"Cura sacra"},{"name":"Barriera di Luce","cd":7,"kind":"shield","vfx":"bubble","desc":"Scudo di luce"},{"name":"Preghiera","cd":10,"kind":"heal_aoe","vfx":"heal_ring","desc":"Cura ad area sacra"}]},"mago_sangue":{"key":"mago_sangue","name":"Mago del Sangue","icon":"🩸","arch":"healer","maxHp":70,"attack":12,"defense":6,"speed":5,"radius":0.6,"range":6.5,"color":"#ef4444","accent":"from-red-500 to-rose-700","text":"text-red-300","theme":"blood","weapon":"staff","helmet":"hood","desc":"Cure oscure col potere del sangue.","abilities":[{"name":"Cura di Sangue","cd":2.4,"kind":"heal_single","vfx":"heal_beam","desc":"Cura sanguigna"},{"name":"Rigenerazione Sanguigna","cd":7,"kind":"regen","vfx":"regen","desc":"Rigenerazione 6s"},{"name":"Emorragia Curativa","cd":11,"kind":"heal_aoe","vfx":"heal_ring","desc":"Cura ad area"}]},"cavaliere":{"key":"cavaliere","name":"Cavaliere","icon":"🛡️","arch":"tank","maxHp":210,"attack":11,"defense":22,"speed":4.3,"radius":0.78,"range":2.5,"color":"#cbd5e1","accent":"from-slate-400 to-slate-600","text":"text-slate-300","theme":"steel","weapon":"sword","helmet":"helmet","desc":"Cavaliere in armatura, provoca il boss.","abilities":[{"name":"Assalto","cd":1.6,"kind":"taunt_strike","vfx":"taunt_strike","desc":"Colpo + provocazione"},{"name":"Grido di Guerra","cd":7,"kind":"threat","vfx":"ring","desc":"Attira il boss 4s"},{"name":"Muro di Ferro","cd":13,"kind":"wall","vfx":"aura","desc":"Danni -65% 5s"}]},"barbaro":{"key":"barbaro","name":"Barbaro","icon":"🪓","arch":"tank","maxHp":240,"attack":14,"defense":17,"speed":4.3,"radius":0.82,"range":2.5,"color":"#dc2626","accent":"from-red-600 to-rose-800","text":"text-red-300","theme":"berserk","weapon":"axe","helmet":"horned","desc":"Carne enorme e rabbia feroce.","abilities":[{"name":"Fendente","cd":1.6,"kind":"taunt_strike","vfx":"taunt_strike","desc":"Colpo + provocazione"},{"name":"Ruggito","cd":7,"kind":"threat","vfx":"ring","desc":"Attira il boss 4s"},{"name":"Pelle di Ferro","cd":13,"kind":"wall","vfx":"aura","desc":"Danni -65% 5s"}]},"guardiano":{"key":"guardiano","name":"Guardiano","icon":"⛰️","arch":"tank","maxHp":252,"attack":10,"defense":24,"speed":4.1,"radius":0.85,"range":2.5,"color":"#a16207","accent":"from-amber-700 to-yellow-900","text":"text-amber-400","theme":"earth","weapon":"hammer","helmet":"helmet","desc":"Muro di pietra, devia i colpi.","abilities":[{"name":"Martellata","cd":1.6,"kind":"taunt_strike","vfx":"taunt_strike","desc":"Colpo + provocazione"},{"name":"Terraferma","cd":7,"kind":"threat","vfx":"ring","desc":"Attira il boss 4s"},{"name":"Pietra","cd":13,"kind":"wall","vfx":"aura","desc":"Danni -65% 5s"}]},"paladino":{"key":"paladino","name":"Paladino","icon":"⚜️","arch":"tank","maxHp":216,"attack":12,"defense":20,"speed":4.3,"radius":0.78,"range":2.5,"color":"#fbbf24","accent":"from-amber-400 to-yellow-600","text":"text-amber-300","theme":"light","weapon":"mace","helmet":"circlet","desc":"Difensore sacro con scudo divino.","abilities":[{"name":"Giudizio","cd":1.6,"kind":"taunt_strike","vfx":"taunt_strike","desc":"Colpo + provocazione"},{"name":"Sfida","cd":7,"kind":"threat","vfx":"ring","desc":"Attira il boss 4s"},{"name":"Scudo Sacro","cd":13,"kind":"wall","vfx":"aura","desc":"Danni -65% 5s"}]},"guerriero":{"key":"guerriero","name":"Guerriero","icon":"⚔️","arch":"melee","maxHp":95,"attack":18,"defense":4,"speed":5.6,"radius":0.6,"range":2.5,"color":"#cbd5e1","accent":"from-slate-400 to-slate-600","text":"text-slate-300","theme":"steel","weapon":"sword","helmet":"helmet","desc":"Soldato con spada, danno solido.","abilities":[{"name":"Assalto","cd":1.1,"kind":"strike","vfx":"slash","desc":"Colpo rapido"},{"name":"Fendente Letale","cd":6,"kind":"big_strike","vfx":"slash_big","desc":"Danno enorme"},{"name":"Vortice","cd":10,"kind":"aoe","vfx":"ring","desc":"Colpo rotante"}]},"assassino":{"key":"assassino","name":"Assassino","icon":"🗡️","arch":"melee","maxHp":80,"attack":20,"defense":3,"speed":5.8,"radius":0.58,"range":2.5,"color":"#a78bfa","accent":"from-violet-500 to-purple-700","text":"text-violet-300","theme":"shadow","weapon":"dagger","helmet":"hood","desc":"Ombre letali con pugnali.","abilities":[{"name":"Pugnalata","cd":1,"kind":"strike","vfx":"slash","desc":"Colpo rapido"},{"name":"Ombra Letale","cd":6,"kind":"big_strike","vfx":"slash_big","desc":"Danno enorme"},{"name":"Danza di Lame","cd":9,"kind":"chain","vfx":"multislash","desc":"Più colpi"}]},"gladiatore":{"key":"gladiatore","name":"Gladiatore","icon":"🪈","arch":"melee","maxHp":100,"attack":17,"defense":6,"speed":5.5,"radius":0.62,"range":2.5,"color":"#d97706","accent":"from-amber-600 to-orange-800","text":"text-amber-300","theme":"bronze","weapon":"spear","helmet":"helmet","desc":"Combattente d'arena con lancia.","abilities":[{"name":"Stoccata","cd":1.1,"kind":"strike","vfx":"slash","desc":"Colpo rapido"},{"name":"Affondo","cd":6,"kind":"big_strike","vfx":"slash_big","desc":"Danno enorme"},{"name":"Lancia Rotante","cd":10,"kind":"aoe","vfx":"ring","desc":"Colpo rotante"}]},"berserker":{"key":"berserker","name":"Berserker","icon":"🔥","arch":"melee","maxHp":85,"attack":21,"defense":3,"speed":5.6,"radius":0.6,"range":2.5,"color":"#dc2626","accent":"from-red-600 to-rose-800","text":"text-red-300","theme":"berserk","weapon":"axe","helmet":"horned","desc":"Rabbia sanguinaria con ascia.","abilities":[{"name":"Ascia","cd":1.6,"kind":"big_strike","vfx":"slash_big","desc":"Colpo pesante"},{"name":"Furia Sanguinaria","cd":8,"kind":"aoe","vfx":"aura","desc":"Esplosione rabbia"},{"name":"Frenesia","cd":14,"kind":"buff_atk","vfx":"aura","desc":"Attacco +70% 5s"}]},"spadaccino":{"key":"spadaccino","name":"Spadaccino","icon":"🤺","arch":"melee","maxHp":90,"attack":19,"defense":5,"speed":5.8,"radius":0.58,"range":2.5,"color":"#e5e7eb","accent":"from-slate-300 to-slate-500","text":"text-slate-200","theme":"steel","weapon":"sword","helmet":"band","desc":"Duellante elegante con stocco.","abilities":[{"name":"Stoccata Rapida","cd":0.9,"kind":"strike","vfx":"slash","desc":"Colpo rapido"},{"name":"Raffica","cd":6,"kind":"chain","vfx":"multislash","desc":"Più colpi"},{"name":"Lama Vorticosa","cd":10,"kind":"aoe","vfx":"ring","desc":"Colpo rotante"}]},"cavaliere_oscuro":{"key":"cavaliere_oscuro","name":"Cav. Oscuro","icon":"🌑","arch":"melee","maxHp":95,"attack":18,"defense":5,"speed":5.5,"radius":0.6,"range":2.5,"color":"#7c3aed","accent":"from-purple-600 to-violet-900","text":"text-purple-300","theme":"shadow","weapon":"greatsword","helmet":"horned","desc":"Cavaliere maledetto con spadone.","abilities":[{"name":"Lama Oscura","cd":1.4,"kind":"big_strike","vfx":"slash_big","desc":"Colpo pesante"},{"name":"Corruzione","cd":6,"kind":"dot","vfx":"curse","desc":"Danno continuo"},{"name":"Onda Nera","cd":11,"kind":"aoe","vfx":"aura","desc":"Esplosione ombra"}]},"ninjia":{"key":"ninjia","name":"Ninja","icon":"🥷","arch":"melee","maxHp":82,"attack":19,"defense":3,"speed":5.9,"radius":0.56,"range":2.5,"color":"#6ee7b7","accent":"from-teal-400 to-emerald-700","text":"text-teal-300","theme":"wind","weapon":"katana","helmet":"hood","desc":"Assassino del vento con katana.","abilities":[{"name":"Taglio","cd":1,"kind":"strike","vfx":"slash","desc":"Colpo rapido"},{"name":"Tempesta di Tagli","cd":6,"kind":"chain","vfx":"multislash","desc":"Più colpi"},{"name":"Ombracorrente","cd":10,"kind":"aoe","vfx":"aura","desc":"Esplosione vento"}]},"boia":{"key":"boia","name":"Boia","icon":"🪚","arch":"melee","maxHp":88,"attack":20,"defense":4,"speed":5.4,"radius":0.62,"range":2.5,"color":"#1f2937","accent":"from-gray-700 to-gray-900","text":"text-gray-300","theme":"shadow","weapon":"greatsword","helmet":"helmet","desc":"Esecutore implacabile.","abilities":[{"name":"Decapitazione","cd":1.6,"kind":"big_strike","vfx":"slash_big","desc":"Colpo pesante"},{"name":"Marchio di Morte","cd":6,"kind":"dot","vfx":"curse","desc":"Danno continuo"},{"name":"Esecuzione","cd":11,"kind":"aoe","vfx":"explosion","desc":"Esplosione mortale"}]},"arciere":{"key":"arciere","name":"Arciere","icon":"🏹","arch":"ranged","maxHp":80,"attack":17,"defense":3,"speed":5,"radius":0.6,"range":9,"color":"#4ade80","accent":"from-emerald-500 to-green-600","text":"text-emerald-300","theme":"nature","weapon":"bow","helmet":"hood","desc":"Tiratore con arco, frecce verdi.","abilities":[{"name":"Freccia","cd":1.1,"kind":"shot","vfx":"projectile","desc":"Freccia rapida"},{"name":"Tiro Preciso","cd":5,"kind":"big_shot","vfx":"projectile","desc":"Freccia potente"},{"name":"Pioggia di Frecce","cd":11,"kind":"aoe","vfx":"rain","desc":"Pioggia di frecce"}]},"mago":{"key":"mago","name":"Mago","icon":"🔥","arch":"ranged","maxHp":78,"attack":19,"defense":3,"speed":5,"radius":0.6,"range":9,"color":"#f97316","accent":"from-orange-500 to-red-600","text":"text-orange-300","theme":"fire","weapon":"staff","helmet":"hat","desc":"Pirómante con sfere di fuoco.","abilities":[{"name":"Dardo Infuocato","cd":1.1,"kind":"shot","vfx":"projectile","desc":"Dardo di fuoco"},{"name":"Palla di Fuoco","cd":6,"kind":"big_shot","vfx":"projectile","desc":"Sfera esplosiva"},{"name":"Esplosione","cd":11,"kind":"aoe","vfx":"explosion","desc":"Esplosione di fuoco"}]},"stregone":{"key":"stregone","name":"Stregone","icon":"😈","arch":"ranged","maxHp":80,"attack":18,"defense":3,"speed":5,"radius":0.6,"range":9,"color":"#b91c1c","accent":"from-red-700 to-rose-900","text":"text-red-400","theme":"hell","weapon":"staff","helmet":"horned","desc":"Demoni dell'inferno, maledizioni.","abilities":[{"name":"Dardo Demonico","cd":1.1,"kind":"shot","vfx":"projectile","desc":"Dardo demoniaco"},{"name":"Maledizione","cd":6,"kind":"dot","vfx":"curse","desc":"Maledizione infernale"},{"name":"Demoni","cd":11,"kind":"aoe","vfx":"aura","desc":"Evocazione demoni"}]},"necromante":{"key":"necromante","name":"Necromante","icon":"💀","arch":"ranged","maxHp":78,"attack":17,"defense":3,"speed":5,"radius":0.6,"range":9,"color":"#65a30d","accent":"from-lime-600 to-green-900","text":"text-lime-300","theme":"death","weapon":"staff","helmet":"hood","desc":"Signore dei morti, ossa e decomposizione.","abilities":[{"name":"Dardo d'Ossa","cd":1.1,"kind":"shot","vfx":"projectile","desc":"Dardo d'ossa"},{"name":"Decomposizione","cd":6,"kind":"dot","vfx":"curse","desc":"Decomposizione"},{"name":"Esercito di Morti","cd":11,"kind":"aoe","vfx":"curse","desc":"Evocazione morti"}]},"crio_mago":{"key":"crio_mago","name":"Crio Mago","icon":"❄️","arch":"ranged","maxHp":80,"attack":17,"defense":4,"speed":5,"radius":0.6,"range":9,"color":"#22d3ee","accent":"from-cyan-400 to-sky-600","text":"text-cyan-300","theme":"frost","weapon":"staff","helmet":"hat","desc":"Mago del ghiaccio, congelamento.","abilities":[{"name":"Ghiacciolo","cd":1.1,"kind":"shot","vfx":"projectile","desc":"Ghiacciolo"},{"name":"Lancia di Ghiaccio","cd":6,"kind":"big_shot","vfx":"projectile","desc":"Lancia di ghiaccio"},{"name":"Congelamento","cd":9,"kind":"dot","vfx":"frost","desc":"Congela e danneggia"}]},"fulmine_mago":{"key":"fulmine_mago","name":"Mago Fulmine","icon":"⚡","arch":"ranged","maxHp":76,"attack":19,"defense":2,"speed":5,"radius":0.6,"range":9,"color":"#facc15","accent":"from-yellow-400 to-amber-600","text":"text-yellow-300","theme":"storm","weapon":"staff","helmet":"circlet","desc":"Mago della tempesta, saette.","abilities":[{"name":"Saetta","cd":1.1,"kind":"shot","vfx":"lightning","desc":"Saetta rapida"},{"name":"Catena di Fulmini","cd":6,"kind":"chain","vfx":"lightning","desc":"Fulmini multipli"},{"name":"Tempesta","cd":11,"kind":"aoe","vfx":"aura","desc":"Tempesta elettrica"}]},"cacciatore":{"key":"cacciatore","name":"Cacciatore","icon":"🎯","arch":"ranged","maxHp":84,"attack":16,"defense":4,"speed":5,"radius":0.6,"range":9,"color":"#a16207","accent":"from-amber-700 to-stone-800","text":"text-amber-400","theme":"beast","weapon":"crossbow","helmet":"hood","desc":"Cacciatore con balestra e trappole.","abilities":[{"name":"Balestra","cd":1.1,"kind":"shot","vfx":"projectile","desc":"Dardo di balestra"},{"name":"Tiro Pesante","cd":5,"kind":"big_shot","vfx":"projectile","desc":"Tiro potente"},{"name":"Trappola","cd":11,"kind":"aoe","vfx":"explosion","desc":"Trappola esplosiva"}]},"sciamano":{"key":"sciamano","name":"Sciamano","icon":"🪶","arch":"healer","noMana":true,"maxHp":80,"attack":11,"defense":6,"speed":5,"radius":0.6,"range":6.5,"color":"#2dd4bf","accent":"dbaA_sciamano","text":"text-teal-300","theme":"spectral","weapon":"staff","helmet":"horned","desc":"Cure spirituali a ricarica: non usa mana.","abilities":[{"name":"Spirito Guaritore","cd":2.8,"kind":"heal_single","vfx":"heal_beam","desc":"Cura uno spirito alleato"},{"name":"Totem della Vita","cd":7,"kind":"regen","vfx":"regen","desc":"Rigenerazione 6s"},{"name":"Richiamo Ancestrale","cd":10,"kind":"heal_aoe","vfx":"heal_ring","desc":"Cura tutto il party"}]},"alchimista":{"key":"alchimista","name":"Alchimista","icon":"⚗️","arch":"healer","noMana":true,"maxHp":76,"attack":12,"defense":5,"speed":5.2,"radius":0.6,"range":7,"color":"#a3e635","accent":"dbaA_alchimista","text":"text-lime-300","theme":"venom","weapon":"dagger","helmet":"hat","desc":"Elisir e fiale: cure a ricarica, senza mana.","abilities":[{"name":"Elisir Vitale","cd":2.6,"kind":"heal_single","vfx":"heal_beam","desc":"Cura con un elisir"},{"name":"Fiala Protettiva","cd":8,"kind":"shield","vfx":"bubble","desc":"Scudo alchemico"},{"name":"Nube Rigenerante","cd":11,"kind":"heal_aoe","vfx":"heal_ring","desc":"Cura ad area"}]},"sentinella_gelo":{"key":"sentinella_gelo","name":"Sentinella Glaciale","icon":"🧊","arch":"tank","noMana":true,"maxHp":225,"attack":11,"defense":23,"speed":4.2,"radius":0.8,"range":2.5,"color":"#7dd3fc","accent":"dbaA_sentinella_gelo","text":"text-sky-300","theme":"frost","weapon":"hammer","helmet":"helmet","desc":"Tank di ghiaccio, nessun mana: protegge gli alleati.","abilities":[{"name":"Colpo Glaciale","cd":1.6,"kind":"taunt_strike","vfx":"taunt_strike","desc":"Colpo + provocazione"},{"name":"Muro di Brina","cd":11,"kind":"dual","vfx":"ring","dmg":0.8,"fx":["self","allyShield"],"red":0.6,"desc":"Danno + scudo a sé e all'alleato ferito"},{"name":"Urlo Polare","cd":7,"kind":"threat","vfx":"ring","desc":"Attira il boss 4s"}]},"vindice":{"key":"vindice","name":"Vindice","icon":"⚔️","arch":"tank","noMana":true,"maxHp":215,"attack":13,"defense":20,"speed":4.4,"radius":0.78,"range":2.5,"color":"#fb923c","accent":"dbaA_vindice","text":"text-orange-300","theme":"bronze","weapon":"greatsword","helmet":"horned","desc":"Tank vendicativo, nessun mana: colpisce mentre si difende.","abilities":[{"name":"Marchio del Vindice","cd":1.6,"kind":"taunt_strike","vfx":"taunt_strike","desc":"Colpo + provocazione"},{"name":"Rappresaglia","cd":8,"kind":"dual","vfx":"slash_big","dmg":1.8,"fx":["self"],"red":0.5,"desc":"Colpo forte + difesa personale"},{"name":"Giuramento","cd":13,"kind":"wall","vfx":"aura","desc":"Danni -65% 5s"}]},"bardo":{"key":"bardo","name":"Bardo","icon":"🎶","arch":"ranged","cat":"potenziamento","maxHp":78,"attack":13,"defense":5,"speed":5,"radius":0.6,"range":8.5,"color":"#f472b6","accent":"dbaA_bardo","text":"text-pink-300","theme":"celestial","weapon":"staff","helmet":"hat","desc":"Potenziamento (mana): canti che feriscono il boss e aiutano il party.","abilities":[{"name":"Nota Tagliente","cd":1.6,"kind":"dual","vfx":"projectile","dmg":1.2,"fx":["heal"],"cost":4,"desc":"Danno + piccola cura al più ferito","hp":1.2},{"name":"Inno del Coraggio","cd":9,"kind":"dual","vfx":"ring","dmg":0.7,"fx":["adaptAll"],"cost":20,"desc":"Danno + potenzia ogni alleato secondo il ruolo"},{"name":"Ballata Rigenerante","cd":12,"kind":"dual","vfx":"ring","dmg":0.7,"fx":["healAll"],"cost":24,"desc":"Danno + cura il party"}]},"artefice":{"key":"artefice","name":"Artefice Runico","icon":"🔷","arch":"ranged","cat":"potenziamento","maxHp":80,"attack":13,"defense":6,"speed":5,"radius":0.6,"range":8,"color":"#60a5fa","accent":"dbaA_artefice","text":"text-blue-300","theme":"crystal","weapon":"staff","helmet":"circlet","desc":"Potenziamento (mana): rune che colpiscono e creano barriere.","abilities":[{"name":"Runa Esplosiva","cd":1.7,"kind":"dual","vfx":"projectile","dmg":1.3,"fx":["bubble"],"cost":5,"desc":"Danno + bolla sul più ferito"},{"name":"Sigillo Protettivo","cd":11,"kind":"dual","vfx":"ring","dmg":0.7,"fx":["bubbleAll"],"cost":24,"desc":"Danno + bolla leggera a tutto il party"},{"name":"Runa del Potere","cd":9,"kind":"dual","vfx":"aura","dmg":0.7,"fx":["adapt"],"cost":18,"desc":"Danno + potenzia il miglior DPS"}]},"araldo":{"key":"araldo","name":"Araldo di Guerra","icon":"📯","arch":"ranged","cat":"potenziamento","maxHp":86,"attack":14,"defense":6,"speed":5,"radius":0.62,"range":7.5,"color":"#fbbf24","accent":"dbaA_araldo","text":"text-amber-300","theme":"bronze","weapon":"spear","helmet":"helmet","desc":"Potenziamento (energia dai danni): squilli che accelerano e rinforzano.","abilities":[{"name":"Squillo d'Assalto","cd":1.7,"kind":"dual","vfx":"projectile","dmg":1.3,"fx":["speed"],"cost":6,"desc":"Danno + velocità d'attacco a un alleato"},{"name":"Grido di Battaglia","cd":10,"kind":"dual","vfx":"ring","dmg":0.8,"fx":["adaptAll"],"cost":28,"desc":"Danno + potenzia ogni alleato secondo il ruolo"},{"name":"Vessillo Curativo","cd":12,"kind":"dual","vfx":"aura","dmg":1,"fx":["heal","bubble"],"cost":30,"desc":"Danno + cura e bolla"}]},"mistico":{"key":"mistico","name":"Mistico Solare","icon":"☀️","arch":"ranged","cat":"potenziamento","maxHp":82,"attack":13,"defense":6,"speed":5,"radius":0.6,"range":8,"color":"#fde047","accent":"dbaA_mistico","text":"text-yellow-300","theme":"light","weapon":"mace","helmet":"circlet","desc":"Potenziamento (energia dai danni): luce che ferisce, cura e protegge.","abilities":[{"name":"Raggio Solare","cd":1.6,"kind":"dual","vfx":"projectile","dmg":1.3,"fx":["heal"],"cost":6,"desc":"Danno + cura il più ferito","hp":1.4},{"name":"Aura Dorata","cd":11,"kind":"dual","vfx":"ring","dmg":0.8,"fx":["bubbleAll"],"cost":28,"desc":"Danno + bolla a tutto il party"},{"name":"Eclissi","cd":14,"kind":"dual","vfx":"explosion","dmg":1.6,"fx":["adaptAll"],"cost":35,"desc":"Danno forte + potenzia ogni alleato"}]}},"unlockByClass":{"arciere":[{"name":"Richiamo del Companion","cd":12,"kind":"revive_companion","vfx":"aura","desc":"Resuscita il tuo companion"},{"name":"Pioggia di Colpi","cd":7,"kind":"aoe","vfx":"rain","desc":"Pioggia di proiettili"},{"name":"Tiro Multiplo","cd":12,"kind":"chain","vfx":"lightning","desc":"Proiettili a catena"},{"name":"Devastazione Arcana","cd":18,"kind":"big_shot","vfx":"projectile","desc":"Proiettile enorme"},{"name":"Apocalisse","cd":22,"kind":"aoe","vfx":"explosion","desc":"Esplosione finale"},{"name":"Dardo Rapido","cd":5,"kind":"shot","vfx":"projectile","desc":"Tiro veloce"},{"name":"Catena Folgorante","cd":13,"kind":"chain","vfx":"lightning","desc":"Fulmini a catena"},{"name":"Tempesta di Frecce","cd":16,"kind":"aoe","vfx":"rain","desc":"Pioggia su tutta l'area"},{"name":"Colpo Perfetto","cd":24,"kind":"big_shot","vfx":"projectile","desc":"Colpo mirato enorme"}],"cacciatore":[{"name":"Richiamo del Companion","cd":12,"kind":"revive_companion","vfx":"aura","desc":"Resuscita il tuo companion"},{"name":"Pioggia di Colpi","cd":7,"kind":"aoe","vfx":"rain","desc":"Pioggia di proiettili"},{"name":"Tiro Multiplo","cd":12,"kind":"chain","vfx":"lightning","desc":"Proiettili a catena"},{"name":"Devastazione Arcana","cd":18,"kind":"big_shot","vfx":"projectile","desc":"Proiettile enorme"},{"name":"Apocalisse","cd":22,"kind":"aoe","vfx":"explosion","desc":"Esplosione finale"},{"name":"Dardo Rapido","cd":5,"kind":"shot","vfx":"projectile","desc":"Tiro veloce"},{"name":"Catena Folgorante","cd":13,"kind":"chain","vfx":"lightning","desc":"Fulmini a catena"},{"name":"Tempesta di Frecce","cd":16,"kind":"aoe","vfx":"rain","desc":"Pioggia su tutta l'area"},{"name":"Colpo Perfetto","cd":24,"kind":"big_shot","vfx":"projectile","desc":"Colpo mirato enorme"}],"stregone":[{"name":"Evocazione Maggiore","cd":10,"kind":"summon_boost","boost":2,"vfx":"aura","desc":"Evoca companion x2.0"},{"name":"Evocazione Suprema","cd":16,"kind":"summon_boost","boost":4,"vfx":"aura","desc":"Evoca companion x4.0"},{"name":"Pioggia di Colpi","cd":7,"kind":"aoe","vfx":"rain","desc":"Pioggia di proiettili"},{"name":"Tiro Multiplo","cd":12,"kind":"chain","vfx":"lightning","desc":"Proiettili a catena"},{"name":"Devastazione Arcana","cd":18,"kind":"big_shot","vfx":"projectile","desc":"Proiettile enorme"},{"name":"Apocalisse","cd":22,"kind":"aoe","vfx":"explosion","desc":"Esplosione finale"},{"name":"Dardo Rapido","cd":5,"kind":"shot","vfx":"projectile","desc":"Tiro veloce"},{"name":"Catena Folgorante","cd":13,"kind":"chain","vfx":"lightning","desc":"Fulmini a catena"},{"name":"Tempesta di Frecce","cd":16,"kind":"aoe","vfx":"rain","desc":"Pioggia su tutta l'area"},{"name":"Colpo Perfetto","cd":24,"kind":"big_shot","vfx":"projectile","desc":"Colpo mirato enorme"}]},"unlockByArch":{"healer":[{"name":"Cura di Gruppo","cd":8,"kind":"heal_aoe","vfx":"heal_ring","desc":"Cura tutti gli alleati"},{"name":"Benedizione","cd":14,"kind":"buff_atk","vfx":"aura","desc":"Attacco + al party"},{"name":"Santuario","cd":18,"kind":"shield","vfx":"bubble","desc":"Scudo potente"},{"name":"Purificazione","cd":22,"kind":"heal_aoe","vfx":"heal_ring","desc":"Cura massiva"},{"name":"Tocco Risanante","cd":4,"kind":"heal_single","vfx":"heal_beam","desc":"Cura singola rapida"},{"name":"Raggio Rigenerante","cd":10,"kind":"regen","vfx":"regen","desc":"Rigenerazione continua"},{"name":"Egida Sacra","cd":20,"kind":"shield","vfx":"bubble","desc":"Scudo molto resistente"},{"name":"Furia Benedetta","cd":26,"kind":"buff_atk","vfx":"aura","desc":"Attacco molto aumentato"}],"tank":[{"name":"Fendente Rotante","cd":7,"kind":"aoe","vfx":"ring","desc":"Colpo ad area + provocazione"},{"name":"Pelle di Granito","cd":14,"kind":"wall","vfx":"aura","desc":"Danni -80%"},{"name":"Terra Tremante","cd":18,"kind":"aoe","vfx":"ring","desc":"Onda d'urto"},{"name":"Ultimo Baluardo","cd":22,"kind":"threat","vfx":"ring","desc":"Provocazione assoluta"},{"name":"Scudo Spezzaossa","cd":6,"kind":"taunt_strike","vfx":"ring","desc":"Colpo che provoca"},{"name":"Muro di Ferro","cd":16,"kind":"wall","vfx":"aura","desc":"Danni -80%"},{"name":"Grido di Sfida","cd":10,"kind":"threat","vfx":"ring","desc":"Attira i nemici"},{"name":"Maglio Titanico","cd":20,"kind":"big_strike","vfx":"slash_big","desc":"Colpo devastante"}],"melee":[{"name":"Colpo Rotante","cd":7,"kind":"aoe","vfx":"ring","desc":"Colpo ad area"},{"name":"Assalto Furente","cd":12,"kind":"chain","vfx":"multislash","desc":"Più colpi"},{"name":"Devastazione","cd":18,"kind":"big_strike","vfx":"slash_big","desc":"Danno enorme"},{"name":"Tempesta Mortale","cd":22,"kind":"aoe","vfx":"explosion","desc":"Esplosione finale"},{"name":"Lama Danzante","cd":5,"kind":"strike","vfx":"multislash","desc":"Colpo rapido"},{"name":"Furia Sanguinaria","cd":14,"kind":"chain","vfx":"multislash","desc":"Raffica di colpi"},{"name":"Colpo Sismico","cd":16,"kind":"aoe","vfx":"ring","desc":"Onda d'urto"},{"name":"Esecuzione","cd":24,"kind":"big_strike","vfx":"slash_big","desc":"Colpo letale"}],"ranged":[{"name":"Pioggia di Colpi","cd":7,"kind":"aoe","vfx":"rain","desc":"Pioggia di proiettili"},{"name":"Tiro Multiplo","cd":12,"kind":"chain","vfx":"lightning","desc":"Proiettili a catena"},{"name":"Devastazione Arcana","cd":18,"kind":"big_shot","vfx":"projectile","desc":"Proiettile enorme"},{"name":"Apocalisse","cd":22,"kind":"aoe","vfx":"explosion","desc":"Esplosione finale"},{"name":"Dardo Rapido","cd":5,"kind":"shot","vfx":"projectile","desc":"Tiro veloce"},{"name":"Catena Folgorante","cd":13,"kind":"chain","vfx":"lightning","desc":"Fulmini a catena"},{"name":"Tempesta di Frecce","cd":16,"kind":"aoe","vfx":"rain","desc":"Pioggia su tutta l'area"},{"name":"Colpo Perfetto","cd":24,"kind":"big_shot","vfx":"projectile","desc":"Colpo mirato enorme"}]},"healerSpecial":{"name":"Resurrezione","cd":16,"kind":"revive","vfx":"heal_beam","desc":"Risveglia un alleato caduto"},"manaCost":{"dual":16,"strike":2,"taunt_strike":3,"big_strike":10,"shot":2,"big_shot":10,"aoe":15,"chain":16,"dot":14,"heal_single":8,"heal_aoe":18,"regen":12,"shield":16,"buff_atk":22,"wall":18,"threat":6,"revive":30,"revive_companion":15,"summon_boost":25},"basicKinds":["dual","strike","big_strike","taunt_strike","shot","big_shot","aoe","chain","dot"],"reviveUses":{"white":1,"blue":1,"violet":2,"gold":2,"red":3},"teamChoices":[{"id":"focus","name":"Assalto Concentrato","desc":"+40% attacco a tutti gli eroi per 6s","icon":"⚔️","color":"#f59e0b"},{"id":"defense","name":"Formazione Difensiva","desc":"-50% danni subiti per 6s","icon":"🛡️","color":"#38bdf8"},{"id":"heal","name":"Cura di Gruppo","desc":"Cura tutti gli eroi del 30% HP max","icon":"💚","color":"#22c55e"},{"id":"fury","name":"Furia","desc":"+60% velocità d'attacco per 6s","icon":"🔥","color":"#ef4444"}],"talents":{"tank":[[{"id":"t1a","n":"Pelle di Ferro","d":"+15% vita","m":{"hp":0.15}},{"id":"t1b","n":"Muro Vivente","d":"+6 difesa, +25% minaccia","m":{"def":6,"thr":0.25}}],[{"id":"t2a","n":"Bastione","d":"+8 difesa, +10% vita","m":{"def":8,"hp":0.1}},{"id":"t2b","n":"Provocatore","d":"+50% minaccia, +10% attacco","m":{"thr":0.5,"atk":0.1}}],[{"id":"t3a","n":"Titano","d":"+25% vita","m":{"hp":0.25}},{"id":"t3b","n":"Contrattacco","d":"+20% attacco, +5 difesa","m":{"atk":0.2,"def":5}}]],"melee":[[{"id":"m1a","n":"Lame Affilate","d":"+12% attacco","m":{"atk":0.12}},{"id":"m1b","n":"Furia Rapida","d":"+12% velocità d'attacco","m":{"spd":0.12}}],[{"id":"m2a","n":"Colpo Letale","d":"+18% attacco","m":{"atk":0.18}},{"id":"m2b","n":"Sinergia Fiammeggiante","d":"Le combo fanno +50% di effetto","m":{"syn":0.5}}],[{"id":"m3a","n":"Maestro d'Armi","d":"+20% attacco, +10% velocità","m":{"atk":0.2,"spd":0.1}},{"id":"m3b","n":"Assassino","d":"+30% attacco, -10% vita","m":{"atk":0.3,"hp":-0.1}}]],"ranged":[[{"id":"r1a","n":"Occhio di Falco","d":"+12% attacco","m":{"atk":0.12}},{"id":"r1b","n":"Mano Veloce","d":"+12% velocità d'attacco","m":{"spd":0.12}}],[{"id":"r2a","n":"Tiratore Scelto","d":"+18% attacco","m":{"atk":0.18}},{"id":"r2b","n":"Sinergia Arcana","d":"Le combo fanno +50% di effetto","m":{"syn":0.5}}],[{"id":"r3a","n":"Maestro del Mana","d":"+25% attacco, +30% mana","m":{"atk":0.25,"mr":0.3}},{"id":"r3b","n":"Cecchino","d":"+30% attacco, -10% vita","m":{"atk":0.3,"hp":-0.1}}]],"healer":[[{"id":"h1a","n":"Fonte di Mana","d":"+30% rigenerazione mana","m":{"mr":0.3}},{"id":"h1b","n":"Cuore Gentile","d":"+15% vita","m":{"hp":0.15}}],[{"id":"h2a","n":"Grazia","d":"+20% potere di cura","m":{"atk":0.2}},{"id":"h2b","n":"Sinergia Vitale","d":"Le combo fanno +50% di effetto","m":{"syn":0.5}}],[{"id":"h3a","n":"Saggezza","d":"+25% cura, +20% mana","m":{"atk":0.25,"mr":0.2}},{"id":"h3b","n":"Vitalità","d":"+25% vita","m":{"hp":0.25}}]]},"bosses":[{"key":"inferno","name":"Drago Infernale","title":"Signore delle Fiamme","icon":"🐉","theme":"fire","bossColor":"#ef4444","arena":{"ground":"#2a0a0a","fog":"#1a0505","ring":"#ef4444","light":"#ff7733"},"requiredLevel":1,"companionChance":0.15,"companionName":"Elementale di Fuoco","specialAbilities":[{"name":"Pioggia di Meteore","type":"meteor","damage":0.7,"radius":3.5,"cd":9,"color":"#ff7733"},{"name":"Onda d'Urto","type":"shockwave","damage":0.5,"radius":5,"cd":11,"color":"#fb923c"}]},{"key":"orco","name":"Orco Capoguerra","title":"Il Fracassateste","icon":"🪓","theme":"blood","bossColor":"#65a30d","arena":{"ground":"#14200a","fog":"#0c1406","ring":"#65a30d","light":"#d9f99d"},"requiredLevel":2,"companionChance":0.2,"companionName":"Orco Guerriero","specialAbilities":[{"name":"Fendente Devastante","type":"shockwave","damage":0.55,"radius":4.5,"cd":9,"color":"#84cc16"},{"name":"Grido di Guerra","type":"meteor","damage":0.6,"radius":3.5,"cd":11,"color":"#a3e635"}]},{"key":"frost","name":"Drago Glaciale","title":"Signore del Gelo","icon":"❄️","theme":"frost","bossColor":"#67e8f9","arena":{"ground":"#0a1a2a","fog":"#08121f","ring":"#22d3ee","light":"#88ccff"},"requiredLevel":3,"companionChance":0.18,"companionName":"Elementale di Ghiaccio","specialAbilities":[{"name":"Tempesta Glaciale","type":"frost_storm","damage":0.6,"radius":4,"cd":8,"color":"#22d3ee"},{"name":"Lancia di Ghiaccio","type":"ice_lance","damage":0.8,"radius":2.5,"cd":10,"color":"#67e8f9"}]},{"key":"golem","name":"Golem di Pietra","title":"Il Guardiano Antico","icon":"🗿","theme":"sand","bossColor":"#a8a29e","arena":{"ground":"#1c1a16","fog":"#12100c","ring":"#fb923c","light":"#fed7aa"},"requiredLevel":4,"companionChance":0.2,"companionName":"Frammento di Roccia","specialAbilities":[{"name":"Pugno Tellurico","type":"shockwave","damage":0.6,"radius":5,"cd":10,"color":"#fb923c"},{"name":"Frana","type":"meteor","damage":0.7,"radius":3.5,"cd":9,"color":"#a8a29e"}]},{"key":"natura","name":"Drago Selvatico","title":"Guardiano della Foresta","icon":"🌿","theme":"nature","bossColor":"#4ade80","arena":{"ground":"#0a1a0a","fog":"#061206","ring":"#4ade80","light":"#bbf7a0"},"requiredLevel":5,"companionChance":0.2,"companionName":"Anima della Foresta","specialAbilities":[{"name":"Radici Avvolgenti","type":"root","damage":0.5,"radius":3.5,"cd":9,"color":"#4ade80"},{"name":"Spore Velenose","type":"poison","damage":0.6,"radius":4.5,"cd":11,"color":"#a3e635"}]},{"key":"troll","name":"Troll delle Caverne","title":"Il Rigenerante","icon":"👹","theme":"nature","bossColor":"#4d7c0f","arena":{"ground":"#101a0a","fog":"#0a1206","ring":"#84cc16","light":"#d9f99d"},"requiredLevel":6,"companionChance":0.2,"companionName":"Troll Minore","specialAbilities":[{"name":"Radici Fangose","type":"root","damage":0.5,"radius":3.5,"cd":9,"color":"#65a30d"},{"name":"Clava Sismica","type":"shockwave","damage":0.55,"radius":5,"cd":11,"color":"#a3e635"}]},{"key":"ombra","name":"Drago d'Ombra","title":"Signore del Vuoto","icon":"🌑","theme":"shadow","bossColor":"#a78bfa","arena":{"ground":"#0a0a14","fog":"#08081a","ring":"#a78bfa","light":"#c4b5fd"},"requiredLevel":7,"companionChance":0.25,"companionName":"Ombra Vivente","specialAbilities":[{"name":"Onda d'Ombra","type":"shadow_wave","damage":0.7,"radius":4.5,"cd":8,"color":"#a78bfa"},{"name":"Buco Nero","type":"void","damage":0.9,"radius":3,"cd":12,"color":"#7c3aed"}]},{"key":"ciclope","name":"Ciclope Tonante","title":"Il Gigante Cieco","icon":"👁️","theme":"storm","bossColor":"#d97706","arena":{"ground":"#1c140a","fog":"#120d06","ring":"#facc15","light":"#fef08a"},"requiredLevel":8,"companionChance":0.2,"companionName":"Gigante Minore","specialAbilities":[{"name":"Sguardo Folgorante","type":"lightning_storm","damage":0.8,"radius":3,"cd":8,"color":"#facc15"},{"name":"Lancio di Roccia","type":"meteor","damage":0.7,"radius":3.5,"cd":10,"color":"#d97706"}]},{"key":"tempesta","name":"Drago della Tempesta","title":"Signore dei Cieli","icon":"⚡","theme":"storm","bossColor":"#facc15","arena":{"ground":"#1a1a0a","fog":"#121008","ring":"#facc15","light":"#fff3b0"},"requiredLevel":9,"companionChance":0.3,"companionName":"Elementale del Fulmine","specialAbilities":[{"name":"Fulmine a Caten","type":"lightning_storm","damage":0.8,"radius":3,"cd":7,"color":"#facc15"},{"name":"Tempesta Elettrica","type":"storm","damage":0.6,"radius":5.5,"cd":10,"color":"#fff3b0"}]},{"key":"minotauro","name":"Minotauro del Labirinto","title":"Il Cornuto","icon":"🐂","theme":"magma","bossColor":"#9a3412","arena":{"ground":"#200c06","fog":"#160804","ring":"#f97316","light":"#fdba74"},"requiredLevel":10,"companionChance":0.2,"companionName":"Mandriano Infernale","specialAbilities":[{"name":"Carica Furiosa","type":"shockwave","damage":0.6,"radius":5.5,"cd":10,"color":"#f97316"},{"name":"Ascia di Fuoco","type":"meteor","damage":0.7,"radius":3.5,"cd":9,"color":"#ef4444"}]},{"key":"sangue","name":"Drago di Sangue","title":"Il Sanguinario","icon":"🩸","theme":"blood","bossColor":"#dc2626","arena":{"ground":"#2a0000","fog":"#1a0000","ring":"#dc2626","light":"#ff6b6b"},"requiredLevel":11,"companionChance":0.22,"companionName":"Elementale di Sangue","specialAbilities":[{"name":"Vortice di Sangue","type":"void","damage":0.8,"radius":3,"cd":11,"color":"#dc2626"},{"name":"Pioggia di Sangue","type":"meteor","damage":0.6,"radius":4,"cd":9,"color":"#ef4444"}]},{"key":"lich","name":"Lich Sovrano","title":"Il Re Non Morto","icon":"💀","theme":"bone","bossColor":"#6366f1","arena":{"ground":"#0a0a18","fog":"#060610","ring":"#6366f1","light":"#a5b4fc"},"requiredLevel":12,"companionChance":0.2,"companionName":"Servo Scheletrico","specialAbilities":[{"name":"Onda Necrotica","type":"shadow_wave","damage":0.7,"radius":4.5,"cd":8,"color":"#818cf8"},{"name":"Vuoto Eterno","type":"void","damage":0.9,"radius":3,"cd":12,"color":"#6366f1"}]},{"key":"cristallo","name":"Drago di Cristallo","title":"Il Prisma","icon":"💎","theme":"crystal","bossColor":"#67e8f9","arena":{"ground":"#0a1a2a","fog":"#08141f","ring":"#67e8f9","light":"#a5f3fc"},"requiredLevel":13,"companionChance":0.25,"companionName":"Elementale di Cristallo","specialAbilities":[{"name":"Scheggia di Cristallo","type":"ice_lance","damage":0.85,"radius":2.5,"cd":9,"color":"#67e8f9"},{"name":"Prisma Radente","type":"frost_storm","damage":0.65,"radius":4,"cd":11,"color":"#22d3ee"}]},{"key":"demone","name":"Demone Infernale","title":"Il Tormentatore","icon":"😈","theme":"fire","bossColor":"#dc2626","arena":{"ground":"#2a0606","fog":"#1a0303","ring":"#ef4444","light":"#fca5a5"},"requiredLevel":14,"companionChance":0.2,"companionName":"Diavoletto","specialAbilities":[{"name":"Pioggia di Brace","type":"meteor","damage":0.75,"radius":3.5,"cd":9,"color":"#f97316"},{"name":"Frustata Ardente","type":"shockwave","damage":0.55,"radius":5,"cd":10,"color":"#ef4444"}]},{"key":"magma","name":"Drago di Magma","title":"Il Forno","icon":"🌋","theme":"magma","bossColor":"#f97316","arena":{"ground":"#2a1000","fog":"#1a0a00","ring":"#f97316","light":"#ffa726"},"requiredLevel":15,"companionChance":0.28,"companionName":"Elementale di Magma","specialAbilities":[{"name":"Bombardamento di Magma","type":"meteor","damage":0.75,"radius":3.5,"cd":8,"color":"#f97316"},{"name":"Eruzione","type":"shockwave","damage":0.6,"radius":5.5,"cd":10,"color":"#fb923c"}]},{"key":"gargoyle","name":"Gargoyle Alato","title":"La Sentinella di Pietra","icon":"🦇","theme":"shadow","bossColor":"#64748b","arena":{"ground":"#10121a","fog":"#0a0c12","ring":"#94a3b8","light":"#cbd5e1"},"requiredLevel":16,"companionChance":0.2,"companionName":"Gargoyle Minore","specialAbilities":[{"name":"Ali di Pietra","type":"shadow_wave","damage":0.6,"radius":4.5,"cd":8,"color":"#94a3b8"},{"name":"Picchiata","type":"shockwave","damage":0.6,"radius":5,"cd":11,"color":"#64748b"}]},{"key":"sabbie","name":"Drago delle Sabbie","title":"Il Deserto","icon":"🏜️","theme":"sand","bossColor":"#eab308","arena":{"ground":"#2a2000","fog":"#1f1800","ring":"#eab308","light":"#fde68a"},"requiredLevel":17,"companionChance":0.3,"companionName":"Elementale delle Sabbie","specialAbilities":[{"name":"Tempesta di Sabbia","type":"shockwave","damage":0.55,"radius":5,"cd":9,"color":"#eab308"},{"name":"Sabbie Mobili","type":"root","damage":0.65,"radius":4,"cd":11,"color":"#ca8a04"}]},{"key":"cavaliere","name":"Cavaliere della Morte","title":"Il Condottiero Oscuro","icon":"🛡️","theme":"void","bossColor":"#7c3aed","arena":{"ground":"#0a0614","fog":"#06030e","ring":"#7c3aed","light":"#c4b5fd"},"requiredLevel":18,"companionChance":0.2,"companionName":"Soldato Spettrale","specialAbilities":[{"name":"Lama del Vuoto","type":"void","damage":0.85,"radius":3,"cd":11,"color":"#7c3aed"},{"name":"Onda Oscura","type":"shadow_wave","damage":0.65,"radius":4.5,"cd":8,"color":"#a78bfa"}]},{"key":"spettrale","name":"Drago Spettrale","title":"Il Fantasma","icon":"👻","theme":"spectral","bossColor":"#a5b4fc","arena":{"ground":"#1a1a2a","fog":"#0f0f1a","ring":"#a5b4fc","light":"#c7d2fe"},"requiredLevel":19,"companionChance":0.32,"companionName":"Fantasma","specialAbilities":[{"name":"Onda Spettrale","type":"shadow_wave","damage":0.7,"radius":4.5,"cd":8,"color":"#a5b4fc"},{"name":"Possessione","type":"void","damage":0.85,"radius":3,"cd":12,"color":"#818cf8"}]},{"key":"ragno","name":"Ragno Gigante","title":"La Vedova Tessitrice","icon":"🕷️","theme":"venom","bossColor":"#65a30d","arena":{"ground":"#0a140a","fog":"#060c06","ring":"#84cc16","light":"#d9f99d"},"requiredLevel":20,"companionChance":0.2,"companionName":"Ragnetto Velenoso","specialAbilities":[{"name":"Ragnatela","type":"root","damage":0.5,"radius":3.5,"cd":9,"color":"#d9f99d"},{"name":"Veleno Corrosivo","type":"poison","damage":0.65,"radius":4.5,"cd":11,"color":"#84cc16"}]},{"key":"ossa","name":"Drago d'Ossa","title":"Il Re Scheletro","icon":"💀","theme":"bone","bossColor":"#d1d5db","arena":{"ground":"#1a1a1a","fog":"#0f0f0f","ring":"#d1d5db","light":"#f3f4f6"},"requiredLevel":21,"companionChance":0.5,"companionName":"Scheletro Evocato","specialAbilities":[{"name":"Ossa Avvolgenti","type":"root","damage":0.6,"radius":4,"cd":9,"color":"#d1d5db"},{"name":"Maledizione d'Ossa","type":"poison","damage":0.7,"radius":4.5,"cd":11,"color":"#9ca3af"}]},{"key":"idra","name":"Idra a Tre Teste","title":"La Rigenerante","icon":"🐍","theme":"nature","bossColor":"#15803d","arena":{"ground":"#0a1a0e","fog":"#06100a","ring":"#22c55e","light":"#86efac"},"requiredLevel":22,"companionChance":0.2,"companionName":"Serpente Minore","specialAbilities":[{"name":"Triplo Soffio","type":"poison","damage":0.65,"radius":4.5,"cd":9,"color":"#22c55e"},{"name":"Morso Multiplo","type":"root","damage":0.55,"radius":3.5,"cd":10,"color":"#4ade80"}]},{"key":"luce","name":"Drago di Luce","title":"L'Ascendente","icon":"✨","theme":"light","bossColor":"#fde047","arena":{"ground":"#2a2a00","fog":"#1f1f00","ring":"#fde047","light":"#fef9c3"},"requiredLevel":23,"companionChance":0.38,"companionName":"Elementale di Luce","specialAbilities":[{"name":"Luce Accecante","type":"lightning_storm","damage":0.85,"radius":3,"cd":7,"color":"#fde047"},{"name":"Giudizio","type":"storm","damage":0.6,"radius":5.5,"cd":10,"color":"#fef08a"}]},{"key":"kraken","name":"Kraken Abissale","title":"Il Terrore delle Profondità","icon":"🐙","theme":"abyss","bossColor":"#1d4ed8","arena":{"ground":"#050f24","fog":"#030a18","ring":"#3b82f6","light":"#93c5fd"},"requiredLevel":24,"companionChance":0.2,"companionName":"Tentacolo Vivente","specialAbilities":[{"name":"Tempesta di Maree","type":"frost_storm","damage":0.6,"radius":4,"cd":8,"color":"#3b82f6"},{"name":"Abbraccio Abissale","type":"void","damage":0.85,"radius":3,"cd":12,"color":"#1d4ed8"}]},{"key":"caos","name":"Drago del Caos","title":"L'Anomalia","icon":"🔱","theme":"chaos","bossColor":"#d946ef","arena":{"ground":"#2a002a","fog":"#1a001a","ring":"#d946ef","light":"#f0abfc"},"requiredLevel":25,"companionChance":0.4,"companionName":"Anomalia","specialAbilities":[{"name":"Distorsione","type":"void","damage":0.9,"radius":3.5,"cd":10,"color":"#d946ef"},{"name":"Caos Primordiale","type":"shadow_wave","damage":0.75,"radius":5,"cd":8,"color":"#c026d3"}]},{"key":"abisso","name":"Drago dell'Abisso","title":"L'Orrore","icon":"🌊","theme":"abyss","bossColor":"#2563eb","arena":{"ground":"#000a2a","fog":"#00051a","ring":"#2563eb","light":"#60a5fa"},"requiredLevel":27,"companionChance":0.42,"companionName":"Orrore Abissale","specialAbilities":[{"name":"Marea Abissale","type":"storm","damage":0.7,"radius":5.5,"cd":9,"color":"#2563eb"},{"name":"Voragine","type":"void","damage":0.85,"radius":3.5,"cd":12,"color":"#1d4ed8"}]},{"key":"tuono","name":"Drago del Tuono","title":"Il Rombo","icon":"⛈️","theme":"thunder","bossColor":"#ca8a04","arena":{"ground":"#1a1a00","fog":"#121200","ring":"#ca8a04","light":"#fde047"},"requiredLevel":29,"companionChance":0.44,"companionName":"Elementale del Tuono","specialAbilities":[{"name":"Fulmine Devastante","type":"lightning_storm","damage":0.8,"radius":3.5,"cd":6,"color":"#ca8a04"},{"name":"Tuono Continuo","type":"storm","damage":0.65,"radius":5,"cd":9,"color":"#eab308"}]},{"key":"veleno","name":"Drago del Veleno","title":"Il Tossico","icon":"☠️","theme":"venom","bossColor":"#16a34a","arena":{"ground":"#0a2a00","fog":"#061f00","ring":"#16a34a","light":"#86efac"},"requiredLevel":31,"companionChance":0.46,"companionName":"Elementale del Veleno","specialAbilities":[{"name":"Nube Tossica","type":"poison","damage":0.75,"radius":4.5,"cd":8,"color":"#16a34a"},{"name":"Radici Velenose","type":"root","damage":0.65,"radius":4,"cd":10,"color":"#22c55e"}]},{"key":"fenice","name":"Drago Fenice","title":"La Rinascita","icon":"🔥","theme":"phoenix","bossColor":"#f97316","arena":{"ground":"#2a0a00","fog":"#1a0500","ring":"#f97316","light":"#fbbf24"},"requiredLevel":33,"companionChance":0.48,"companionName":"Cenere Ardente","specialAbilities":[{"name":"Ceneri Ardenti","type":"meteor","damage":0.8,"radius":3.5,"cd":7,"color":"#f97316"},{"name":"Ala di Fuoco","type":"shockwave","damage":0.65,"radius":5,"cd":10,"color":"#fb923c"}]},{"key":"nulla","name":"Drago del Nulla","title":"L'Oblio","icon":"⬛","theme":"void","bossColor":"#831843","arena":{"ground":"#000000","fog":"#000000","ring":"#831843","light":"#be185d"},"requiredLevel":35,"companionChance":0.5,"companionName":"Ombra del Nulla","specialAbilities":[{"name":"Cancellazione","type":"void","damage":0.95,"radius":3.5,"cd":9,"color":"#831843"},{"name":"Onda del Nulla","type":"shadow_wave","damage":0.75,"radius":5.5,"cd":8,"color":"#9d174d"}]},{"key":"antico","name":"Drago Antico","title":"Il Primordiale","icon":"🐲","theme":"ancient","bossColor":"#14b8a6","arena":{"ground":"#002a2a","fog":"#001f1f","ring":"#14b8a6","light":"#5eead4"},"requiredLevel":37,"companionChance":0.52,"companionName":"Spirito Antico","specialAbilities":[{"name":"Era Glaciale","type":"frost_storm","damage":0.7,"radius":5,"cd":9,"color":"#14b8a6"},{"name":"Saggezza Antica","type":"lightning_storm","damage":0.85,"radius":3,"cd":7,"color":"#2dd4bf"}]},{"key":"celeste","name":"Drago Celeste","title":"Il Divino","icon":"🌟","theme":"celestial","bossColor":"#fbbf24","arena":{"ground":"#1a1a2a","fog":"#0f0f1f","ring":"#fbbf24","light":"#fef3c7"},"requiredLevel":39,"companionChance":0.55,"companionName":"Angelo Celeste","specialAbilities":[{"name":"Giudizio Celeste","type":"storm","damage":0.75,"radius":6,"cd":8,"color":"#fbbf24"},{"name":"Caduta delle Stelle","type":"meteor","damage":0.9,"radius":3.5,"cd":9,"color":"#f59e0b"}]}],"bossLocations":{"inferno":{"location":"Vulcano di Ignis","element":"Fuoco"},"frost":{"location":"Ghiacciai di Niflheim","element":"Ghiaccio"},"natura":{"location":"Foresta dei Druidi","element":"Natura"},"ombra":{"location":"Cripte del Vuoto","element":"Ombra"},"tempesta":{"location":"Picchi Tempestosi","element":"Fulmine"},"sangue":{"location":"Santuario del Sangue","element":"Sangue"},"cristallo":{"location":"Caverne di Cristallo","element":"Cristallo"},"magma":{"location":"Fornace Profonda","element":"Magma"},"sabbie":{"location":"Deserto Infinito","element":"Sabbia"},"spettrale":{"location":"Dominio Spettrale","element":"Spettro"},"ossa":{"location":"Necropoli d'Ossa","element":"Morte"},"luce":{"location":"Tempio della Luce","element":"Luce"},"caos":{"location":"Voragine del Caos","element":"Caos"},"abisso":{"location":"Abisso Oceanico","element":"Abisso"},"tuono":{"location":"Cima del Tuono","element":"Tuono"},"veleno":{"location":"Palude Tossica","element":"Veleno"},"fenice":{"location":"Nido della Fenice","element":"Fuoco"},"nulla":{"location":"Regno del Nulla","element":"Nulla"},"antico":{"location":"Rovine Antiche","element":"Natura"},"celeste":{"location":"Regno Celeste","element":"Luce"}},"arenaShapes":["circle","square","pentagon","hexagon","octagon","random"],"difficulties":[{"key":"white","name":"Bianco","icon":"⚪️","color":"#e5e5e5","statMul":1,"chance":0.5},{"key":"blue","name":"Blu","icon":"🔵","color":"#3b82f6","statMul":1.2,"chance":0.25},{"key":"violet","name":"Viola","icon":"🟣","color":"#a855f7","statMul":1.8,"chance":0.12},{"key":"gold","name":"Oro","icon":"🟡","color":"#fbbf24","statMul":2.5,"chance":0.08},{"key":"red","name":"Rosso","icon":"🔴","color":"#ef4444","statMul":3,"chance":0.05}],"difficultyLabels":{"white":"Facile","blue":"Normale","violet":"Medio","gold":"Difficile","red":"Impossibile"},"bossSignatures":{"inferno":{"t":"barrage","n":5,"r":2.6,"d":0.55,"c":"#ff6a00","nm":"Pioggia Ardente","fx":"meteor","cd":15},"frost":{"t":"slow","c":"#93c5fd","nm":"Gelo Eterno","cd":16},"natura":{"t":"summon","c":"#4ade80","nm":"Richiamo della Selva","cd":22},"ombra":{"t":"drain","r":7,"d":0.5,"h":0.04,"c":"#a78bfa","nm":"Divorare Ombra","fx":"shadow_wave","cd":16},"tempesta":{"t":"barrage","n":4,"r":2.2,"d":0.6,"c":"#60a5fa","nm":"Fulmini a Catena","fx":"lightning_storm","cd":14},"sangue":{"t":"drain","r":8,"d":0.5,"h":0.05,"c":"#dc2626","nm":"Sete di Sangue","fx":"void","cd":17},"cristallo":{"t":"barrage","n":6,"r":1.8,"d":0.45,"c":"#c4b5fd","nm":"Schegge Prismatiche","fx":"ice_lance","cd":13},"magma":{"t":"barrage","n":4,"r":3.2,"d":0.7,"c":"#ff7a00","nm":"Eruzione","fx":"meteor","cd":16},"sabbie":{"t":"ring","r":9,"d":0.6,"c":"#d9b36a","nm":"Tempesta di Sabbia","fx":"storm","cd":17},"spettrale":{"t":"summon","c":"#c7f9ff","nm":"Legione Spettrale","cd":22},"ossa":{"t":"summon","c":"#ece6d6","nm":"Risveglio dei Caduti","cd":22},"luce":{"t":"blind","c":"#fde68a","nm":"Luce Accecante","cd":16},"caos":{"t":"barrage","n":6,"r":2,"d":0.5,"c":"#ff4fd8","nm":"Frammenti del Caos","fx":"void","cd":13,"rnd":1},"abisso":{"t":"ring","r":10,"d":0.6,"c":"#22d3ee","nm":"Marea Abissale","fx":"tide","cd":16}},"elementStyles":{"fire":"lava","phoenix":"lava","magma":"lava","blood":"horn","frost":"ice","ancient":"ice","crystal":"crys","nature":"thorn","venom":"thorn","shadow":"shade","void":"shade","spectral":"shade","chaos":"shade","bone":"bone","sand":"stone","storm":"bolt","thunder":"bolt","light":"bolt","celestial":"bolt","abyss":"water"},"rageClasses":["araldo","mistico","berserker","guerriero","gladiatore","assassino","ninjia","boia","cacciatore","cavaliere_oscuro"],"sets":[{"k":"fenice","n":"della Fenice","ic":"🔥","b2":{"attack":0.1},"b3":{"attack":0.12,"maxHp":0.1}},{"k":"titano","n":"del Titano","ic":"🏔️","b2":{"defense":0.15},"b3":{"defense":0.15,"maxHp":0.12}},{"k":"tempesta","n":"della Tempesta","ic":"⚡","b2":{"manaRegen":0.25},"b3":{"manaRegen":0.25,"atkSpd":0.12,"attack":0.06}},{"k":"vita","n":"della Vita","ic":"🌿","b2":{"maxHp":0.12},"b3":{"maxHp":0.13,"manaRegen":0.2}},{"k":"gelo","n":"del Gelo","ic":"❄️","b2":{"defense":0.1,"maxHp":0.06},"b3":{"defense":0.12,"mana":0.2}},{"k":"sangue","n":"del Sangue","ic":"🩸","b2":{"attack":0.12},"b3":{"attack":0.12,"atkSpd":0.1}},{"k":"luce","n":"della Luce","ic":"✨","b2":{"mana":0.2},"b3":{"mana":0.2,"manaRegen":0.3,"maxHp":0.08}},{"k":"drago","n":"del Drago","ic":"🐉","rare":1,"b2":{"attack":0.1,"defense":0.1},"b3":{"attack":0.1,"defense":0.1,"maxHp":0.15,"mana":0.15}}],"gearGen":{"slotWeights":{"head":1,"shoulders":1,"chest":1,"hands":1,"legs":1,"feet":1,"mainhand":1.6,"offhand":1.1},"classWeapons":{"cavaliere":["Spada","Spadone","Mazza","Ascia"],"barbaro":["Ascia","Martello","Falce","Ascia Bipenne","Maglio"],"guardiano":["Martello","Lancia","Mazza","Maglio"],"paladino":["Spada","Mazza","Lancia","Spadone","Maglio"],"guerriero":["Spada","Ascia","Spadone","Lancia","Ascia Bipenne"],"assassino":["Pugnale","Scimitarra","Pugnali Gemelli"],"gladiatore":["Spada","Scimitarra","Lancia","Mazza"],"berserker":["Ascia","Martello","Falce","Maglio","Ascia Bipenne"],"spadaccino":["Spada","Scimitarra","Katana"],"cavaliere_oscuro":["Spadone","Katana","Falce","Spada","Ascia Bipenne"],"ninjia":["Katana","Pugnale","Pugnali Gemelli"],"boia":["Falce","Ascia","Spadone","Maglio","Ascia Bipenne"],"arciere":["Arco","Arco Lungo","Balestra"],"mago":["Bastone","Pugnale","Spada"],"stregone":["Bastone","Pugnale","Spada"],"necromante":["Falce","Bastone","Pugnale"],"crio_mago":["Bastone","Pugnale","Spada"],"fulmine_mago":["Bastone","Pugnale","Spada"],"cacciatore":["Arco","Balestra","Lancia","Pugnale"],"druido":["Bastone","Lancia","Falce","Mazza","Pugnale"],"monaco":["Bastone","Pugnale","Mazza"],"chierico":["Bastone","Mazza","Martello"],"mago_sangue":["Falce","Pugnale","Bastone"]},"handsOf":{"Spada":"one","Ascia":"one","Mazza":"one","Martello":"one","Pugnale":"one","Pugnali Gemelli":"one","Scimitarra":"one","Katana":"one","Spadone":"two","Ascia Bipenne":"two","Maglio":"two","Lancia":"two","Falce":"two","Bastone":"two","Arco":"two","Arco Lungo":"two","Balestra":"two"},"offhandNames":{"shield":["Scudo","Targa","Scudo a Torre","Brocchiero","Egida"],"held":["Tomo","Globo","Grimorio","Orbe","Talismano"]},"armorNames":{"plate":{"head":["Elmo","Elmo Alato","Cimiero"],"shoulders":["Spallacci","Spalliere"],"chest":["Armatura","Corazza","Piastre","Cuirass"],"hands":["Guanti d'Arme","Manopole"],"legs":["Schinieri","Gambiere"],"feet":["Stivali Corazzati","Calzari"]},"mail":{"head":["Elmo","Cimiero","Maschera"],"shoulders":["Spallacci di Maglia"],"chest":["Cotta di Maglia","Usbergo"],"hands":["Guanti di Maglia"],"legs":["Calzoni di Maglia"],"feet":["Stivali di Maglia"]},"leather":{"head":["Cappuccio","Maschera"],"shoulders":["Spalline di Cuoio","Mantellina"],"chest":["Farsetto","Giubbotto"],"hands":["Guanti di Cuoio"],"legs":["Pantaloni di Cuoio","Calzoni"],"feet":["Stivali di Cuoio","Scarponi"]},"cloth":{"head":["Cappello","Diadema","Corona","Velo","Cerchietto","Corona di Spine"],"shoulders":["Spalline di Seta","Mantella"],"chest":["Veste","Tunica"],"hands":["Guanti di Seta","Mezzeguanti"],"legs":["Pantaloni di Seta","Gonna Rituale"],"feet":["Sandali","Pantofole"]}},"armorKind":{"cavaliere":"plate","barbaro":"plate","guardiano":"plate","paladino":"plate","guerriero":"plate","gladiatore":"plate","berserker":"plate","cavaliere_oscuro":"plate","boia":"plate","cacciatore":"mail","arciere":"mail","spadaccino":"mail","assassino":"leather","ninjia":"leather","druido":"leather","monaco":"leather","mago":"cloth","stregone":"cloth","necromante":"cloth","crio_mago":"cloth","fulmine_mago":"cloth","chierico":"cloth","mago_sangue":"cloth"},"slotStatWeights":{"head":{"attack":0.4,"defense":0.6,"maxHp":0.7,"mana":1.5,"manaRegen":1.3,"atkSpeed":0.6},"shoulders":{"attack":0.7,"defense":0.9,"maxHp":0.9,"mana":0.6,"manaRegen":0.5,"atkSpeed":0.5},"chest":{"attack":0.3,"defense":1.5,"maxHp":1.2,"mana":0.4,"manaRegen":0.3,"atkSpeed":0.3},"hands":{"attack":1,"defense":0.5,"maxHp":0.4,"mana":0.5,"manaRegen":0.4,"atkSpeed":1.4},"legs":{"attack":0.5,"defense":1.1,"maxHp":1.2,"mana":0.6,"manaRegen":0.4,"atkSpeed":0.5},"feet":{"attack":0.3,"defense":0.6,"maxHp":0.6,"mana":0.3,"manaRegen":0.3,"atkSpeed":1.6},"mainhand":{"attack":1.5,"defense":0.3,"maxHp":0.5,"mana":0.5,"manaRegen":0.3,"atkSpeed":1.3},"shield":{"attack":0.1,"defense":1.7,"maxHp":1.4,"mana":0.2,"manaRegen":0.2,"atkSpeed":0.1},"held":{"attack":0.5,"defense":0.2,"maxHp":0.4,"mana":1.7,"manaRegen":1.6,"atkSpeed":0.3}},"slotScale":{"head":0.5,"shoulders":0.45,"chest":0.65,"hands":0.4,"legs":0.55,"feet":0.4,"main1":0.8,"main2":1.35,"offhand":0.5},"setSlots":["head","shoulders","chest","hands","legs"],"classOffhand":{"cavaliere":["shield"],"barbaro":["weapon"],"guardiano":["shield"],"paladino":["shield"],"guerriero":["shield","weapon"],"assassino":["weapon"],"gladiatore":["shield","weapon"],"berserker":["weapon"],"spadaccino":["weapon"],"cavaliere_oscuro":["weapon"],"ninjia":["weapon"],"boia":["weapon"],"arciere":[],"mago":["held"],"stregone":["held"],"necromante":["held"],"crio_mago":["held"],"fulmine_mago":["held"],"cacciatore":[],"druido":["held"],"monaco":["held"],"chierico":["held"],"mago_sangue":["held"]},"rarities":[{"key":"bianco","name":"Bianco","chance":0,"color":"#e5e5e5","label":"Bianco","statMul":1},{"key":"blu","name":"Blu","chance":0,"color":"#3b82f6","label":"Blu","statMul":2.5},{"key":"viola","name":"Viola","chance":0,"color":"#a855f7","label":"Viola","statMul":5},{"key":"oro","name":"Oro","chance":0,"color":"#fbbf24","label":"Oro","statMul":7.5},{"key":"rosso","name":"Rosso","chance":0,"color":"#ef4444","label":"Rosso","statMul":10}],"statBase":{"attack":3,"defense":2,"maxHp":10,"mana":8,"manaRegen":1.5,"atkSpeed":2},"slotOrder":["head","shoulders","chest","hands","legs","feet","mainhand","offhand"],"rarityByDifficulty":{"white":"bianco","blue":"blu","violet":"viola","gold":"oro","red":"rosso"},"slotNames":{"head":"Testa","shoulders":"Spalle","chest":"Corpo","hands":"Guanti","legs":"Pantaloni","feet":"Scarpe","mainhand":"Mano primaria","offhand":"Mano secondaria"},"slotIcons":{"head":"🪖","shoulders":"🧥","chest":"🛡️","hands":"🧤","legs":"👖","feet":"🥾","mainhand":"⚔️","offhand":"🛡️"}},"setFull":{"fenice":{"rig":3},"titano":{"baluardo":3},"tempesta":{"furia":3},"drago":{"furia":2,"baluardo":2},"gelo":{"baluardo":2,"fort":2},"sangue":{"vamp":4},"luce":{"xp":3,"rig":1},"vita":{"rig":4,"vamp":1}},"dungeon":{"roomNouns":["Cripta","Sala","Galleria","Camera","Caverna","Biblioteca","Fucina","Cisterna","Cappella","Armeria"],"roomAdjectives":["Oscura","Antica","Maledetta","Sommersa","Silenziosa","Ardente","Gelida","Crollata","Dimenticata","Sanguinosa"],"themes":[["🕸️","Ragnatele spesse coprono ogni angolo."],["🔥","L'aria brucia e le pareti sono incandescenti."],["❄️","Il ghiaccio scricchiola sotto i tuoi passi."],["💀","Ossa antiche tappezzano il pavimento."],["🌿","Radici e muschio invadono la pietra."],["💧","Acqua gocciola dal soffitto nel buio."],["⚡","Scariche elettriche corrono sulle pareti."],["🌑","Un'oscurità innaturale inghiotte la luce."],["🩸","Rune rosse pulsano sul pavimento."],["✨","Una luce fioca illumina simboli arcani."]],"enemies":[["🕷️","Ragno Gigante"],["💀","Scheletro"],["👺","Goblin"],["👻","Spettro"],["🐺","Lupo Famelico"],["🧟","Ghoul"],["😈","Imp"],["🦇","Pipistrello Vampiro"]],"minibosses":[["🗿","Golem Antico"],["⚔️","Campione Corrotto"],["🪓","Mastro Carnefice"],["🛡️","Guardiano Maledetto"],["🌑","Ombra Ancestrale"]],"riddles":[["Parlo senza bocca e ascolto senza orecchie. Chi sono?",["L'eco","Il vento","Un fantasma"],0],["Ha città ma non case, fiumi ma non acqua.",["Una mappa","Un sogno","Un quadro"],0],["Più ne togli, più diventa grande.",["Un buco","Un debito","Un muro"],0],["Ha chiavi ma non apre porte.",["Una tastiera","Un forziere","Un orologio"],0],["Quanto più asciuga, tanto più si bagna.",["Un asciugamano","Il sole","Il vento"],0],["Ha un collo ma nessuna testa, e un tappo ma non beve.",["Una bottiglia","Una camicia","Un pozzo"],0],["Ha lancette ma non ti saluta, si muove ma non va da nessuna parte.",["Un orologio","Una bussola","Una stella"],0],["Si rompe appena lo nomini.",["Il silenzio","Il vetro","Un patto"],0],["Ha denti ma non morde.",["Un pettine","Un cane","Un serpente"],0],["Ha un occhio solo ma non vede.",["Un ago","Un ciclope","Un faro"],0],["Se lo condividi, non lo hai più.",["Un segreto","Un pane","Un tesoro"],0],["Vive solo se mangia, muore se beve.",["Il fuoco","L'uomo","Una pianta"],0],["Ha un letto ma non dorme, una bocca ma non mangia.",["Un fiume","Un lago","Un pozzo"],0],["Ti passa sempre davanti ma non puoi mai vederlo.",["Il futuro","Il passato","L'aria"],0],["Si può spezzare, regalare, mantenere, ma mai toccare.",["Una promessa","Una spada","Una catena"],0],["Sta in un angolo ma viaggia per il mondo.",["Un francobollo","Una ragnatela","Un ragno"],0]],"labels":{"Sinistra":"⬅️","Dritto":"⬆️","Destra":"➡️"},"pairs":[["Sinistra","Destra"],["Sinistra","Dritto"],["Dritto","Destra"]],"shapes":["rect","oct","cross","hex","round","rect","hex","round","oct","cross"],"traps":{"spike":["Spuntoni","Spuntoni affilati emergono dal pavimento!"],"arrow":["Frecce","Frecce partono dalle pareti!"],"fire":["Fiamme","Colonne di fuoco esplodono dal suolo!"],"poison":["Veleno","Una nube di veleno avvolge la stanza!"]},"doorX":{"Sinistra":-0.3,"Dritto":0,"Destra":0.3}}};
// Dati di gioco (classi eroe, abilità, costi mana…) caricati dai file JSON in src/data/.
// Questo file è SCRITTO A MANO: i JSON si modificano a mano, questo non va rigenerato.
// (Nel browser i JSON saranno importati; qui sotto la versione per il test in Node è iniettata da load.js come DATA.)

const Kc = DATA.classes;                    // classi: statistiche e abilità di base
const O6 = DATA.unlockByClass;              // abilità sbloccate ogni 3 livelli, per classe (arciere, cacciatore, stregone)
const ip = DATA.unlockByArch;               // idem, per archetipo (healer, tank, melee, ranged) per le altre classi
const k6 = DATA.healerSpecial;              // Resurrezione dei curatori (dal livello 6)
const cg = DATA.manaCost;                   // costo in mana per tipo di abilità
const hf = new Set(DATA.basicKinds);        // tipi di "attacco base" (restituiscono un po' di mana)
const B6 = DATA.reviveUses;                 // rianimazioni del boss per difficoltà
const V6 = DATA.teamChoices;                // scelte di squadra offerte al giocatore

const SKT = {"druido":{"learn":[{"cd":13,"fx":["regenAll"],"rg":0.55,"ic":"🌱","vfx":"aura","name":"Linfa Vitale","kind":"dual","cost":14,"hurt":1,"desc":"Rigenera il party 6s"},{"cd":9,"fx":["heal"],"hp":3.15,"ic":"💖","vfx":"aura","name":"Abbraccio della Foresta","kind":"dual","cost":11,"hurt":1,"desc":"Cura il più ferito"},{"cd":12,"fx":["heal","bubble"],"hp":1.76,"ic":"💫","vfx":"aura","name":"Corteccia Protettiva","kind":"dual","cost":13,"hurt":1,"desc":"Cura il più ferito · scudo al ferito"},{"cd":14,"fx":["heal","regenAll"],"hp":2.53,"rg":0.4,"ic":"🌿","vfx":"aura","name":"Fioritura Improvvisa","kind":"dual","cost":14,"hurt":1,"desc":"Cura il più ferito · rigenera il party 6s"},{"cd":8,"dmg":1.08,"fx":["heal"],"hp":1.68,"ic":"☀️","vfx":"aura","name":"Spina di Rovo","kind":"dual","cost":10,"desc":"Danno ×1,1 · cura il più ferito"},{"cd":19,"fx":["bubbleAll"],"ic":"🔰","vfx":"aura","name":"Muro di Edera","kind":"dual","cost":18,"desc":"Scudo a tutto il party"},{"cd":14,"fx":["healAll"],"hp":1.95,"ic":"✨","vfx":"aura","name":"Pioggia di Primavera","kind":"dual","cost":14,"hurt":1,"desc":"Cura il party"},{"cd":20,"fx":["manaAll"],"mp":20,"ic":"🔮","vfx":"aura","name":"Rugiada Lunare","kind":"dual","cost":19,"desc":"+20 mana al party"},{"cd":18,"fx":["heal","hasteAll"],"hp":1.96,"ic":"🕊️","vfx":"aura","name":"Vento tra le Foglie","kind":"dual","cost":18,"desc":"Cura il più ferito · velocità party +35% 6s"},{"cd":24,"fx":["healAll","bubbleAll"],"hp":2.61,"ic":"🙏","vfx":"aura","name":"Ciclo delle Stagioni","kind":"dual","cost":22,"desc":"Cura il party · scudo a tutto il party"}],"ult":{"cd":30,"fx":["healAll","regenAll","bubbleAll"],"hp":2.4,"rg":0.6,"ic":"🌈","vfx":"aura","ult":1,"name":"Risveglio dell'Albero Antico","kind":"dual","cost":24,"desc":"Cura il party · rigenera il party 6s · scudo a tutto il party"}},"monaco":{"learn":[{"cd":9,"fx":["heal"],"hp":3.0,"ic":"💖","vfx":"aura","name":"Palmo Sereno","kind":"dual","cost":11,"hurt":1,"desc":"Cura il più ferito"},{"cd":12,"fx":["heal","bubble"],"hp":1.68,"ic":"💫","vfx":"aura","name":"Respiro Interiore","kind":"dual","cost":13,"hurt":1,"desc":"Cura il più ferito · scudo al ferito"},{"cd":13,"fx":["regenAll"],"rg":0.61,"ic":"🌱","vfx":"aura","name":"Flusso del Chi","kind":"dual","cost":14,"hurt":1,"desc":"Rigenera il party 6s"},{"cd":8,"dmg":1.03,"fx":["heal"],"hp":1.61,"ic":"☀️","vfx":"aura","name":"Pugno Luminoso","kind":"dual","cost":10,"desc":"Danno ×1,0 · cura il più ferito"},{"cd":19,"fx":["bubbleAll"],"ic":"🔰","vfx":"aura","name":"Postura della Gru","kind":"dual","cost":18,"desc":"Scudo a tutto il party"},{"cd":18,"fx":["heal","hasteAll"],"hp":1.75,"ic":"🕊️","vfx":"aura","name":"Passo del Vento","kind":"dual","cost":18,"desc":"Cura il più ferito · velocità party +35% 6s"},{"cd":14,"fx":["healAll"],"hp":1.95,"ic":"✨","vfx":"aura","name":"Onda di Armonia","kind":"dual","cost":14,"hurt":1,"desc":"Cura il party"},{"cd":20,"fx":["manaAll"],"mp":20,"ic":"🔮","vfx":"aura","name":"Meditazione Profonda","kind":"dual","cost":19,"desc":"+20 mana al party"},{"cd":17,"dmg":0.7,"fx":["weaken","healAll"],"wk":0.25,"hp":1.26,"ic":"🌘","vfx":"aura","name":"Colpo del Silenzio","kind":"dual","cost":17,"desc":"Danno ×0,7 · boss −25% danni 6s · cura il party"},{"cd":24,"fx":["healAll","bubbleAll"],"hp":2.61,"ic":"🙏","vfx":"aura","name":"Mille Mani Gentili","kind":"dual","cost":22,"desc":"Cura il party · scudo a tutto il party"}],"ult":{"cd":30,"fx":["healAll","atkAll","hasteAll"],"hp":1.9,"ap":0.35,"ic":"🌅","vfx":"aura","ult":1,"name":"Illuminazione Suprema","kind":"dual","cost":24,"desc":"Cura il party · attacco party +35% 6s · velocità party +35% 6s"}},"chierico":{"learn":[{"cd":8,"dmg":0.9,"fx":["heal"],"hp":1.4,"ic":"☀️","vfx":"aura","name":"Fiamma Consacrata","kind":"dual","cost":10,"desc":"Danno ×0,9 · cura il più ferito"},{"cd":9,"fx":["heal"],"hp":3.15,"ic":"💖","vfx":"aura","name":"Mano Divina","kind":"dual","cost":11,"hurt":1,"desc":"Cura il più ferito"},{"cd":12,"fx":["heal","bubble"],"hp":1.76,"ic":"💫","vfx":"aura","name":"Veste Benedetta","kind":"dual","cost":13,"hurt":1,"desc":"Cura il più ferito · scudo al ferito"},{"cd":16,"fx":["heal","atkAll"],"hp":1.61,"ap":0.25,"ic":"🎺","vfx":"aura","name":"Salmo di Battaglia","kind":"dual","cost":16,"desc":"Cura il più ferito · attacco party +25% 6s"},{"cd":14,"fx":["healAll"],"hp":1.8,"ic":"✨","vfx":"aura","name":"Luce dell'Alba","kind":"dual","cost":14,"hurt":1,"desc":"Cura il party"},{"cd":19,"fx":["bubbleAll"],"ic":"🔰","vfx":"aura","name":"Cupola Sacra","kind":"dual","cost":18,"desc":"Scudo a tutto il party"},{"cd":14,"fx":["heal","regenAll"],"hp":2.86,"rg":0.4,"ic":"🌿","vfx":"aura","name":"Grazia Duratura","kind":"dual","cost":14,"hurt":1,"desc":"Cura il più ferito · rigenera il party 6s"},{"cd":17,"dmg":0.68,"fx":["weaken","healAll"],"wk":0.25,"hp":1.22,"ic":"🌘","vfx":"aura","name":"Castigo Divino","kind":"dual","cost":17,"desc":"Danno ×0,7 · boss −25% danni 6s · cura il party"},{"cd":20,"fx":["manaAll"],"mp":20,"ic":"🔮","vfx":"aura","name":"Calice Sacro","kind":"dual","cost":19,"desc":"+20 mana al party"},{"cd":24,"fx":["healAll","bubbleAll"],"hp":2.61,"ic":"🙏","vfx":"aura","name":"Coro Celeste","kind":"dual","cost":22,"desc":"Cura il party · scudo a tutto il party"}],"ult":{"cd":30,"fx":["healAll","regenAll","bubbleAll"],"hp":2.4,"rg":0.6,"ic":"🌈","vfx":"aura","ult":1,"name":"Miracolo di Luce","kind":"dual","cost":24,"desc":"Cura il party · rigenera il party 6s · scudo a tutto il party"}},"mago_sangue":{"learn":[{"cd":8,"dmg":0.9,"fx":["heal"],"hp":1.4,"ic":"☀️","vfx":"curse","name":"Salasso","kind":"dual","cost":10,"desc":"Danno ×0,9 · cura il più ferito"},{"cd":9,"fx":["heal"],"hp":3.15,"ic":"💖","vfx":"aura","name":"Trasfusione","kind":"dual","cost":11,"hurt":1,"desc":"Cura il più ferito"},{"cd":12,"fx":["heal","bubble"],"hp":1.76,"ic":"💫","vfx":"aura","name":"Patto di Sangue","kind":"dual","cost":13,"hurt":1,"desc":"Cura il più ferito · scudo al ferito"},{"cd":13,"fx":["regenAll"],"rg":0.63,"ic":"🌱","vfx":"aura","name":"Vena Rigenerante","kind":"dual","cost":14,"hurt":1,"desc":"Rigenera il party 6s"},{"cd":17,"dmg":0.6,"fx":["weaken","healAll"],"wk":0.25,"hp":1.08,"ic":"🌘","vfx":"curse","name":"Macchia Cremisi","kind":"dual","cost":17,"desc":"Danno ×0,6 · boss −25% danni 6s · cura il party"},{"cd":16,"fx":["heal","atkAll"],"hp":1.75,"ap":0.25,"ic":"🎺","vfx":"aura","name":"Frenesia di Sangue","kind":"dual","cost":16,"desc":"Cura il più ferito · attacco party +25% 6s"},{"cd":14,"fx":["healAll"],"hp":1.95,"ic":"✨","vfx":"aura","name":"Marea Scarlatta","kind":"dual","cost":14,"hurt":1,"desc":"Cura il party"},{"cd":19,"fx":["bubbleAll"],"ic":"🔰","vfx":"aura","name":"Crosta Cremisi","kind":"dual","cost":18,"desc":"Scudo a tutto il party"},{"cd":18,"fx":["heal","hasteAll"],"hp":1.96,"ic":"🕊️","vfx":"aura","name":"Battito Accelerato","kind":"dual","cost":18,"desc":"Cura il più ferito · velocità party +35% 6s"},{"cd":24,"fx":["healAll","bubbleAll"],"hp":2.61,"ic":"🙏","vfx":"aura","name":"Calice del Sangue","kind":"dual","cost":22,"desc":"Cura il party · scudo a tutto il party"}],"ult":{"cd":30,"fx":["healAll","atkAll","hasteAll"],"hp":1.9,"ap":0.35,"ic":"🌅","vfx":"aura","ult":1,"name":"Eclissi Cremisi","kind":"dual","cost":24,"desc":"Cura il party · attacco party +35% 6s · velocità party +35% 6s"}},"cavaliere":{"learn":[{"cd":8,"dmg":1.0,"fx":["taunt"],"tt":5,"ic":"🔨","vfx":"slash_big","name":"Carica del Destriero","kind":"dual","cost":10,"desc":"Danno ×1,0 · provoca 5s"},{"cd":11,"fx":["allyShield","self"],"red":0.4,"ic":"🤝","vfx":"aura","name":"Guardia del Fratello","kind":"dual","cost":12,"desc":"Scudo al ferito · danni −40% per 5s"},{"cd":19,"fx":["bubbleAll","taunt"],"tt":3,"ic":"🏰","vfx":"aura","name":"Formazione a Testuggine","kind":"dual","cost":18,"desc":"Scudo a tutto il party · provoca 3s"},{"cd":12,"dmg":0.69,"fx":["weaken","taunt"],"wk":0.25,"tt":4,"ic":"😠","vfx":"slash_big","name":"Sguardo Severo","kind":"dual","cost":13,"desc":"Danno ×0,7 · boss −25% danni 6s · provoca 4s"},{"cd":10,"dmg":0.96,"fx":["self","taunt"],"red":0.5,"tt":4,"ic":"🌵","vfx":"slash_big","name":"Contrattacco","kind":"dual","cost":12,"desc":"Danno ×1,0 · danni −50% per 5s · provoca 4s"},{"cd":16,"fx":["selfHeal","self"],"sh":0.25,"red":0.3,"ic":"💚","vfx":"aura","name":"Respiro del Guerriero","kind":"dual","cost":16,"desc":"Curi 25% della tua vita · danni −30% per 5s"},{"cd":22,"fx":["atkAll","bubbleAll"],"ap":0.2,"ic":"🚩","vfx":"aura","name":"Stendardo Reale","kind":"dual","cost":20,"desc":"Attacco party +20% 6s · scudo a tutto il party"},{"cd":15,"dmg":2.16,"fx":["taunt"],"tt":3,"ic":"🌋","vfx":"slash_big","name":"Calata di Spada","kind":"dual","cost":15,"desc":"Danno ×2,2 · provoca 3s"},{"cd":14,"fx":["haste","taunt"],"tt":3,"ic":"💨","vfx":"aura","name":"Galoppo","kind":"dual","cost":14,"desc":"Tua velocità +50% 6s · provoca 3s"},{"cd":20,"fx":["self","taunt"],"red":0.8,"tt":4,"ic":"🗿","vfx":"aura","name":"Baluardo del Regno","kind":"dual","cost":19,"desc":"Danni −80% per 5s · provoca 4s"}],"ult":{"cd":30,"dmg":1.8,"fx":["bubbleAll","taunt","atkAll"],"tt":6,"ap":0.2,"ic":"👑","vfx":"slash_big","ult":1,"name":"Giuramento del Re","kind":"dual","cost":24,"desc":"Danno ×1,8 · scudo a tutto il party · provoca 6s · attacco party +20% 6s"}},"barbaro":{"learn":[{"cd":8,"dmg":1.0,"fx":["taunt"],"tt":5,"ic":"🔨","vfx":"slash_big","name":"Colpo d'Ascia Selvaggio","kind":"dual","cost":10,"desc":"Danno ×1,0 · provoca 5s"},{"cd":13,"dmg":0.95,"fx":["lifesteal","taunt"],"ls":0.5,"tt":3,"ic":"🧛","vfx":"slash_big","name":"Sete di Sangue","kind":"dual","cost":14,"desc":"Danno ×0,9 · ruba 50% del danno · provoca 3s"},{"cd":10,"dmg":0.88,"fx":["self","taunt"],"red":0.5,"tt":4,"ic":"🌵","vfx":"slash_big","name":"Pelle di Orso","kind":"dual","cost":12,"desc":"Danno ×0,9 · danni −50% per 5s · provoca 4s"},{"cd":12,"dmg":0.69,"fx":["weaken","taunt"],"wk":0.25,"tt":4,"ic":"😠","vfx":"slash_big","name":"Ringhio Minaccioso","kind":"dual","cost":13,"desc":"Danno ×0,7 · boss −25% danni 6s · provoca 4s"},{"cd":15,"dmg":1.92,"fx":["taunt"],"tt":3,"ic":"🌋","vfx":"slash_big","name":"Calpestio","kind":"dual","cost":15,"desc":"Danno ×1,9 · provoca 3s"},{"cd":18,"fx":["self","selfHeal"],"red":0.6,"sh":0.15,"ic":"🧱","vfx":"aura","name":"Ira Incassatrice","kind":"dual","cost":18,"desc":"Danni −60% per 5s · curi 15% della tua vita"},{"cd":14,"fx":["haste","taunt"],"tt":3,"ic":"💨","vfx":"aura","name":"Corsa Furiosa","kind":"dual","cost":14,"desc":"Tua velocità +50% 6s · provoca 3s"},{"cd":22,"fx":["atkAll","bubbleAll"],"ap":0.2,"ic":"🚩","vfx":"aura","name":"Grido di Guerra Tribale","kind":"dual","cost":20,"desc":"Attacco party +20% 6s · scudo a tutto il party"},{"cd":16,"fx":["selfHeal","self"],"sh":0.25,"red":0.3,"ic":"💚","vfx":"aura","name":"Rigenerazione Selvaggia","kind":"dual","cost":16,"desc":"Curi 25% della tua vita · danni −30% per 5s"},{"cd":20,"fx":["self","taunt"],"red":0.8,"tt":4,"ic":"🗿","vfx":"aura","name":"Furia della Montagna","kind":"dual","cost":19,"desc":"Danni −80% per 5s · provoca 4s"}],"ult":{"cd":30,"dmg":1.6,"fx":["self","selfHeal","taunt","weaken"],"red":0.8,"sh":0.4,"tt":6,"wk":0.3,"ic":"🛡️","vfx":"slash_big","ult":1,"name":"Furia Immortale","kind":"dual","cost":24,"desc":"Danno ×1,6 · danni −80% per 5s · curi 40% della tua vita · provoca 6s · boss −30% danni 6s"}},"guardiano":{"learn":[{"cd":8,"dmg":1.0,"fx":["taunt"],"tt":5,"ic":"🔨","vfx":"ring","name":"Pugno di Roccia","kind":"dual","cost":10,"desc":"Danno ×1,0 · provoca 5s"},{"cd":20,"fx":["self","taunt"],"red":0.8,"tt":4,"ic":"🗿","vfx":"aura","name":"Pelle di Macigno","kind":"dual","cost":19,"desc":"Danni −80% per 5s · provoca 4s"},{"cd":11,"fx":["allyShield","self"],"red":0.4,"ic":"🤝","vfx":"aura","name":"Scudo Montano","kind":"dual","cost":12,"desc":"Scudo al ferito · danni −40% per 5s"},{"cd":19,"fx":["bubbleAll","taunt"],"tt":3,"ic":"🏰","vfx":"aura","name":"Cerchio di Pietre","kind":"dual","cost":18,"desc":"Scudo a tutto il party · provoca 3s"},{"cd":18,"fx":["self","selfHeal"],"red":0.6,"sh":0.15,"ic":"🧱","vfx":"aura","name":"Radice Profonda","kind":"dual","cost":18,"desc":"Danni −60% per 5s · curi 15% della tua vita"},{"cd":15,"dmg":2.0,"fx":["taunt"],"tt":3,"ic":"🌋","vfx":"ring","name":"Frana","kind":"dual","cost":15,"desc":"Danno ×2,0 · provoca 3s"},{"cd":17,"dmg":1.69,"fx":["weaken"],"wk":0.3,"ic":"⛓️","vfx":"ring","name":"Catene di Radici","kind":"dual","cost":17,"desc":"Danno ×1,7 · boss −30% danni 6s"},{"cd":16,"fx":["selfHeal","self"],"sh":0.25,"red":0.3,"ic":"💚","vfx":"aura","name":"Linfa della Roccia","kind":"dual","cost":16,"desc":"Curi 25% della tua vita · danni −30% per 5s"},{"cd":10,"dmg":1.12,"fx":["self","taunt"],"red":0.5,"tt":4,"ic":"🌵","vfx":"ring","name":"Spine di Granito","kind":"dual","cost":12,"desc":"Danno ×1,1 · danni −50% per 5s · provoca 4s"},{"cd":22,"fx":["atkAll","bubbleAll"],"ap":0.2,"ic":"🚩","vfx":"aura","name":"Risveglio del Monte","kind":"dual","cost":20,"desc":"Attacco party +20% 6s · scudo a tutto il party"}],"ult":{"cd":30,"dmg":1.6,"fx":["self","selfHeal","taunt","weaken"],"red":0.8,"sh":0.4,"tt":6,"wk":0.3,"ic":"🛡️","vfx":"ring","ult":1,"name":"Colosso Eterno","kind":"dual","cost":24,"desc":"Danno ×1,6 · danni −80% per 5s · curi 40% della tua vita · provoca 6s · boss −30% danni 6s"}},"paladino":{"learn":[{"cd":8,"dmg":1.0,"fx":["taunt"],"tt":5,"ic":"🔨","vfx":"ring","name":"Martello Sacro","kind":"dual","cost":10,"desc":"Danno ×1,0 · provoca 5s"},{"cd":11,"fx":["allyShield","self"],"red":0.4,"ic":"🤝","vfx":"aura","name":"Mano della Protezione","kind":"dual","cost":12,"desc":"Scudo al ferito · danni −40% per 5s"},{"cd":16,"fx":["selfHeal","self"],"sh":0.25,"red":0.3,"ic":"💚","vfx":"aura","name":"Imposizione delle Mani","kind":"dual","cost":16,"desc":"Curi 25% della tua vita · danni −30% per 5s"},{"cd":12,"dmg":0.69,"fx":["weaken","taunt"],"wk":0.25,"tt":4,"ic":"😠","vfx":"ring","name":"Anatema","kind":"dual","cost":13,"desc":"Danno ×0,7 · boss −25% danni 6s · provoca 4s"},{"cd":19,"fx":["bubbleAll","taunt"],"tt":3,"ic":"🏰","vfx":"aura","name":"Aura di Devozione","kind":"dual","cost":18,"desc":"Scudo a tutto il party · provoca 3s"},{"cd":13,"dmg":1.12,"fx":["lifesteal","taunt"],"ls":0.5,"tt":3,"ic":"🧛","vfx":"ring","name":"Punizione Luminosa","kind":"dual","cost":14,"desc":"Danno ×1,1 · ruba 50% del danno · provoca 3s"},{"cd":22,"fx":["atkAll","bubbleAll"],"ap":0.2,"ic":"🚩","vfx":"aura","name":"Vessillo Sacro","kind":"dual","cost":20,"desc":"Attacco party +20% 6s · scudo a tutto il party"},{"cd":15,"dmg":2.16,"fx":["taunt"],"tt":3,"ic":"🌋","vfx":"ring","name":"Ira Divina","kind":"dual","cost":15,"desc":"Danno ×2,2 · provoca 3s"},{"cd":18,"fx":["self","selfHeal"],"red":0.6,"sh":0.15,"ic":"🧱","vfx":"aura","name":"Bolla di Fede","kind":"dual","cost":18,"desc":"Danni −60% per 5s · curi 15% della tua vita"},{"cd":20,"fx":["self","taunt"],"red":0.8,"tt":4,"ic":"🗿","vfx":"aura","name":"Fortezza della Fede","kind":"dual","cost":19,"desc":"Danni −80% per 5s · provoca 4s"}],"ult":{"cd":30,"dmg":1.8,"fx":["bubbleAll","taunt","atkAll"],"tt":6,"ap":0.2,"ic":"👑","vfx":"ring","ult":1,"name":"Crociata Eterna","kind":"dual","cost":24,"desc":"Danno ×1,8 · scudo a tutto il party · provoca 6s · attacco party +20% 6s"}},"guerriero":{"learn":[{"cd":8,"dmg":1.1,"fx":[],"hits":4,"ic":"⚔️","vfx":"slash","name":"Triplo Fendente","kind":"dual","cost":10,"desc":"Danno ×1,1 · 4 colpi"},{"cd":12,"dmg":0.53,"fx":["self"],"red":0.45,"ic":"🛡️","vfx":"slash","name":"Parata e Risposta","kind":"dual","cost":13,"desc":"Danno ×0,5 · danni −45% per 5s"},{"cd":9,"dmg":1.43,"fx":[],"ic":"💥","vfx":"slash","name":"Colpo Poderoso","kind":"dual","cost":11,"desc":"Danno ×1,4"},{"cd":14,"dmg":0.92,"exec":1.8,"fx":[],"ic":"🎯","vfx":"slash","name":"Finale di Spada","kind":"dual","cost":14,"desc":"Danno ×0,9 · +180% se il boss è sotto il 35%"},{"cd":17,"dmg":0.36,"fx":["atkAll"],"ap":0.22,"ic":"📣","vfx":"slash","name":"Urlo di Battaglia","kind":"dual","cost":17,"desc":"Danno ×0,4 · attacco party +22% 6s"},{"cd":11,"dmg":1.12,"fx":["lifesteal"],"ls":0.45,"ic":"🩸","vfx":"slash","name":"Lama Vorace","kind":"dual","cost":12,"desc":"Danno ×1,1 · ruba 45% del danno"},{"cd":15,"dmg":0.52,"fx":["haste"],"ic":"⚡","vfx":"slash","name":"Impeto","kind":"dual","cost":15,"desc":"Danno ×0,5 · tua velocità +50% 6s"},{"cd":13,"dmg":0.81,"fx":["weaken"],"wk":0.25,"ic":"🕸️","vfx":"slash","name":"Colpo alle Gambe","kind":"dual","cost":14,"desc":"Danno ×0,8 · boss −25% danni 6s"},{"cd":18,"dmg":2.8,"fx":[],"ic":"☄️","vfx":"slash","name":"Fendente Spaccaossa","kind":"dual","cost":18,"desc":"Danno ×2,8"},{"cd":12,"dmg":0.51,"fx":["dot"],"dm":0.72,"dt":7,"ic":"☠️","vfx":"slash","name":"Taglio Profondo","kind":"dual","cost":13,"desc":"Danno ×0,5 · danno nel tempo 7s"}],"ult":{"cd":30,"dmg":3.0,"fx":["dot"],"dm":0.6,"dt":8,"ic":"🌟","vfx":"slash","ult":1,"name":"Tempesta d'Acciaio","kind":"dual","cost":24,"desc":"Danno ×3,0 · danno nel tempo 8s"}},"assassino":{"learn":[{"cd":14,"dmg":0.8,"exec":1.8,"fx":[],"ic":"🎯","vfx":"multislash","name":"Colpo alle Spalle","kind":"dual","cost":14,"desc":"Danno ×0,8 · +180% se il boss è sotto il 35%"},{"cd":12,"dmg":0.37,"fx":["dot"],"dm":0.53,"dt":7,"ic":"☠️","vfx":"multislash","name":"Lama Avvelenata","kind":"dual","cost":13,"desc":"Danno ×0,4 · danno nel tempo 7s"},{"cd":15,"dmg":0.44,"fx":["haste"],"ic":"⚡","vfx":"multislash","name":"Passo d'Ombra","kind":"dual","cost":15,"desc":"Danno ×0,4 · tua velocità +50% 6s"},{"cd":8,"dmg":1.26,"fx":[],"hits":4,"ic":"⚔️","vfx":"multislash","name":"Mille Ferite","kind":"dual","cost":10,"desc":"Danno ×1,3 · 4 colpi"},{"cd":13,"dmg":0.72,"fx":["weaken"],"wk":0.25,"ic":"🕸️","vfx":"multislash","name":"Polvere Accecante","kind":"dual","cost":14,"desc":"Danno ×0,7 · boss −25% danni 6s"},{"cd":11,"dmg":1.12,"fx":["lifesteal"],"ls":0.45,"ic":"🩸","vfx":"multislash","name":"Assorbi Vita","kind":"dual","cost":12,"desc":"Danno ×1,1 · ruba 45% del danno"},{"cd":12,"dmg":0.65,"fx":["self"],"red":0.45,"ic":"🛡️","vfx":"multislash","name":"Velo di Fumo","kind":"dual","cost":13,"desc":"Danno ×0,7 · danni −45% per 5s"},{"cd":9,"dmg":1.76,"fx":[],"ic":"💥","vfx":"multislash","name":"Pugnale Gemello","kind":"dual","cost":11,"desc":"Danno ×1,8"},{"cd":18,"dmg":2.8,"fx":[],"ic":"☄️","vfx":"multislash","name":"Esecuzione Silenziosa","kind":"dual","cost":18,"desc":"Danno ×2,8"},{"cd":16,"dmg":0.58,"fx":["manaSelf"],"mp":26,"ic":"💧","vfx":"multislash","name":"Concentrazione Mortale","kind":"dual","cost":16,"desc":"Danno ×0,6 · +26 mana a te"}],"ult":{"cd":30,"dmg":2.0,"exec":2.5,"fx":["weaken"],"wk":0.3,"ic":"💀","vfx":"multislash","ult":1,"name":"Notte Senza Luna","kind":"dual","cost":24,"desc":"Danno ×2,0 · +250% se il boss è sotto il 35% · boss −30% danni 6s"}},"gladiatore":{"learn":[{"cd":8,"dmg":1.1,"fx":[],"hits":4,"ic":"⚔️","vfx":"ring","name":"Colpi dell'Arena","kind":"dual","cost":10,"desc":"Danno ×1,1 · 4 colpi"},{"cd":12,"dmg":0.53,"fx":["self"],"red":0.45,"ic":"🛡️","vfx":"ring","name":"Scudo del Colosseo","kind":"dual","cost":13,"desc":"Danno ×0,5 · danni −45% per 5s"},{"cd":17,"dmg":0.33,"fx":["atkAll"],"ap":0.22,"ic":"📣","vfx":"ring","name":"Ruggito della Folla","kind":"dual","cost":17,"desc":"Danno ×0,3 · attacco party +22% 6s"},{"cd":9,"dmg":1.49,"fx":[],"ic":"💥","vfx":"ring","name":"Lancia Trafiggente","kind":"dual","cost":11,"desc":"Danno ×1,5"},{"cd":15,"dmg":0.48,"fx":["haste"],"ic":"⚡","vfx":"ring","name":"Danza della Rete","kind":"dual","cost":15,"desc":"Danno ×0,5 · tua velocità +50% 6s"},{"cd":11,"dmg":1.12,"fx":["lifesteal"],"ls":0.45,"ic":"🩸","vfx":"ring","name":"Sangue sulla Sabbia","kind":"dual","cost":12,"desc":"Danno ×1,1 · ruba 45% del danno"},{"cd":14,"dmg":1.04,"exec":1.8,"fx":[],"ic":"🎯","vfx":"ring","name":"Pollice Verso","kind":"dual","cost":14,"desc":"Danno ×1,0 · +180% se il boss è sotto il 35%"},{"cd":13,"dmg":0.81,"fx":["weaken"],"wk":0.25,"ic":"🕸️","vfx":"ring","name":"Rete Intrappolante","kind":"dual","cost":14,"desc":"Danno ×0,8 · boss −25% danni 6s"},{"cd":18,"dmg":2.8,"fx":[],"ic":"☄️","vfx":"ring","name":"Tridente Spaccaossa","kind":"dual","cost":18,"desc":"Danno ×2,8"},{"cd":12,"dmg":0.51,"fx":["dot"],"dm":0.72,"dt":7,"ic":"☠️","vfx":"ring","name":"Ferita Aperta","kind":"dual","cost":13,"desc":"Danno ×0,5 · danno nel tempo 7s"}],"ult":{"cd":30,"dmg":1.8,"fx":["atkAll","hasteAll"],"ap":0.4,"ic":"🏆","vfx":"ring","ult":1,"name":"Gloria dell'Arena","kind":"dual","cost":24,"desc":"Danno ×1,8 · attacco party +40% 6s · velocità party +35% 6s"}},"berserker":{"learn":[{"cd":11,"dmg":0.9,"fx":["lifesteal"],"ls":0.45,"ic":"🩸","vfx":"slash_big","name":"Fame di Sangue","kind":"dual","cost":12,"desc":"Danno ×0,9 · ruba 45% del danno"},{"cd":9,"dmg":1.37,"fx":[],"ic":"💥","vfx":"slash_big","name":"Colpo Folle","kind":"dual","cost":11,"desc":"Danno ×1,4"},{"cd":15,"dmg":0.44,"fx":["haste"],"ic":"⚡","vfx":"slash_big","name":"Ira Cieca","kind":"dual","cost":15,"desc":"Danno ×0,4 · tua velocità +50% 6s"},{"cd":8,"dmg":1.26,"fx":[],"hits":4,"ic":"⚔️","vfx":"slash_big","name":"Mulinello d'Ascia","kind":"dual","cost":10,"desc":"Danno ×1,3 · 4 colpi"},{"cd":12,"dmg":0.6,"fx":["self"],"red":0.45,"ic":"🛡️","vfx":"slash_big","name":"Pelle Indurita","kind":"dual","cost":13,"desc":"Danno ×0,6 · danni −45% per 5s"},{"cd":12,"dmg":0.44,"fx":["dot"],"dm":0.62,"dt":7,"ic":"☠️","vfx":"slash_big","name":"Ferita Sanguinante","kind":"dual","cost":13,"desc":"Danno ×0,4 · danno nel tempo 7s"},{"cd":14,"dmg":1.04,"exec":1.8,"fx":[],"ic":"🎯","vfx":"slash_big","name":"Colpo Disperato","kind":"dual","cost":14,"desc":"Danno ×1,0 · +180% se il boss è sotto il 35%"},{"cd":17,"dmg":0.41,"fx":["atkAll"],"ap":0.22,"ic":"📣","vfx":"slash_big","name":"Ululato di Furia","kind":"dual","cost":17,"desc":"Danno ×0,4 · attacco party +22% 6s"},{"cd":18,"dmg":2.8,"fx":[],"ic":"☄️","vfx":"slash_big","name":"Frattura","kind":"dual","cost":18,"desc":"Danno ×2,8"},{"cd":13,"dmg":0.87,"fx":["weaken"],"wk":0.25,"ic":"🕸️","vfx":"slash_big","name":"Urlo Terrificante","kind":"dual","cost":14,"desc":"Danno ×0,9 · boss −25% danni 6s"}],"ult":{"cd":30,"dmg":2.4,"fx":["lifesteal","self"],"ls":0.7,"red":0.5,"ic":"🩸","vfx":"slash_big","ult":1,"name":"Furia Senza Fine","kind":"dual","cost":24,"desc":"Danno ×2,4 · ruba 70% del danno · danni −50% per 5s"}},"spadaccino":{"learn":[{"cd":8,"dmg":1.1,"fx":[],"hits":4,"ic":"⚔️","vfx":"multislash","name":"Fioretto Veloce","kind":"dual","cost":10,"desc":"Danno ×1,1 · 4 colpi"},{"cd":14,"dmg":0.84,"exec":1.8,"fx":[],"ic":"🎯","vfx":"multislash","name":"Stoccata Mortale","kind":"dual","cost":14,"desc":"Danno ×0,8 · +180% se il boss è sotto il 35%"},{"cd":12,"dmg":0.55,"fx":["self"],"red":0.45,"ic":"🛡️","vfx":"multislash","name":"Parata Perfetta","kind":"dual","cost":13,"desc":"Danno ×0,6 · danni −45% per 5s"},{"cd":15,"dmg":0.46,"fx":["haste"],"ic":"⚡","vfx":"multislash","name":"Passo Schermitore","kind":"dual","cost":15,"desc":"Danno ×0,5 · tua velocità +50% 6s"},{"cd":13,"dmg":0.72,"fx":["weaken"],"wk":0.25,"ic":"🕸️","vfx":"multislash","name":"Finta Ingannevole","kind":"dual","cost":14,"desc":"Danno ×0,7 · boss −25% danni 6s"},{"cd":9,"dmg":1.62,"fx":[],"ic":"💥","vfx":"multislash","name":"Affondo Lungo","kind":"dual","cost":11,"desc":"Danno ×1,6"},{"cd":12,"dmg":0.45,"fx":["dot"],"dm":0.65,"dt":7,"ic":"☠️","vfx":"multislash","name":"Punta Avvelenata","kind":"dual","cost":13,"desc":"Danno ×0,5 · danno nel tempo 7s"},{"cd":11,"dmg":1.22,"fx":["lifesteal"],"ls":0.45,"ic":"🩸","vfx":"multislash","name":"Riposta Vampirica","kind":"dual","cost":12,"desc":"Danno ×1,2 · ruba 45% del danno"},{"cd":17,"dmg":0.42,"fx":["atkAll"],"ap":0.22,"ic":"📣","vfx":"multislash","name":"Saluto d'Onore","kind":"dual","cost":17,"desc":"Danno ×0,4 · attacco party +22% 6s"},{"cd":18,"dmg":2.9,"fx":[],"ic":"☄️","vfx":"multislash","name":"Cento Lame","kind":"dual","cost":18,"desc":"Danno ×2,9"}],"ult":{"cd":30,"dmg":3.0,"fx":["dot"],"dm":0.6,"dt":8,"ic":"🌟","vfx":"multislash","ult":1,"name":"Danza delle Mille Lame","kind":"dual","cost":24,"desc":"Danno ×3,0 · danno nel tempo 8s"}},"cavaliere_oscuro":{"learn":[{"cd":12,"dmg":0.35,"fx":["dot"],"dm":0.5,"dt":7,"ic":"☠️","vfx":"curse","name":"Marchio d'Ombra","kind":"dual","cost":13,"desc":"Danno ×0,3 · danno nel tempo 7s"},{"cd":11,"dmg":0.95,"fx":["lifesteal"],"ls":0.45,"ic":"🩸","vfx":"curse","name":"Drenaggio Oscuro","kind":"dual","cost":12,"desc":"Danno ×0,9 · ruba 45% del danno"},{"cd":9,"dmg":1.43,"fx":[],"ic":"💥","vfx":"curse","name":"Lama d'Abisso","kind":"dual","cost":11,"desc":"Danno ×1,4"},{"cd":13,"dmg":0.69,"fx":["weaken"],"wk":0.25,"ic":"🕸️","vfx":"curse","name":"Aura di Terrore","kind":"dual","cost":14,"desc":"Danno ×0,7 · boss −25% danni 6s"},{"cd":12,"dmg":0.6,"fx":["self"],"red":0.45,"ic":"🛡️","vfx":"curse","name":"Armatura Spettrale","kind":"dual","cost":13,"desc":"Danno ×0,6 · danni −45% per 5s"},{"cd":14,"dmg":1.0,"exec":1.8,"fx":[],"ic":"🎯","vfx":"curse","name":"Colpo della Rovina","kind":"dual","cost":14,"desc":"Danno ×1,0 · +180% se il boss è sotto il 35%"},{"cd":8,"dmg":1.43,"fx":[],"hits":4,"ic":"⚔️","vfx":"curse","name":"Fendenti Neri","kind":"dual","cost":10,"desc":"Danno ×1,4 · 4 colpi"},{"cd":15,"dmg":0.54,"fx":["haste"],"ic":"⚡","vfx":"curse","name":"Cavalcata Oscura","kind":"dual","cost":15,"desc":"Danno ×0,5 · tua velocità +50% 6s"},{"cd":18,"dmg":2.8,"fx":[],"ic":"☄️","vfx":"curse","name":"Frantumazione Anima","kind":"dual","cost":18,"desc":"Danno ×2,8"},{"cd":17,"dmg":0.43,"fx":["atkAll"],"ap":0.22,"ic":"📣","vfx":"curse","name":"Richiamo dei Dannati","kind":"dual","cost":17,"desc":"Danno ×0,4 · attacco party +22% 6s"}],"ult":{"cd":30,"dmg":2.4,"fx":["weaken","dot"],"wk":0.35,"dm":0.5,"dt":8,"ic":"🌑","vfx":"curse","ult":1,"name":"Calata delle Tenebre","kind":"dual","cost":24,"desc":"Danno ×2,4 · boss −35% danni 6s · danno nel tempo 8s"}},"ninjia":{"learn":[{"cd":8,"dmg":1.1,"fx":[],"hits":4,"ic":"⚔️","vfx":"multislash","name":"Shuriken Multipli","kind":"dual","cost":10,"desc":"Danno ×1,1 · 4 colpi"},{"cd":15,"dmg":0.42,"fx":["haste"],"ic":"⚡","vfx":"multislash","name":"Passo Silente","kind":"dual","cost":15,"desc":"Danno ×0,4 · tua velocità +50% 6s"},{"cd":12,"dmg":0.39,"fx":["dot"],"dm":0.55,"dt":7,"ic":"☠️","vfx":"multislash","name":"Kunai Avvelenato","kind":"dual","cost":13,"desc":"Danno ×0,4 · danno nel tempo 7s"},{"cd":14,"dmg":0.92,"exec":1.8,"fx":[],"ic":"🎯","vfx":"multislash","name":"Colpo Vitale","kind":"dual","cost":14,"desc":"Danno ×0,9 · +180% se il boss è sotto il 35%"},{"cd":12,"dmg":0.6,"fx":["self"],"red":0.45,"ic":"🛡️","vfx":"multislash","name":"Sostituzione","kind":"dual","cost":13,"desc":"Danno ×0,6 · danni −45% per 5s"},{"cd":13,"dmg":0.75,"fx":["weaken"],"wk":0.25,"ic":"🕸️","vfx":"multislash","name":"Bomba Fumogena","kind":"dual","cost":14,"desc":"Danno ×0,8 · boss −25% danni 6s"},{"cd":9,"dmg":1.69,"fx":[],"ic":"💥","vfx":"multislash","name":"Taglio Lampo","kind":"dual","cost":11,"desc":"Danno ×1,7"},{"cd":16,"dmg":0.54,"fx":["manaSelf"],"mp":26,"ic":"💧","vfx":"multislash","name":"Respiro Zen","kind":"dual","cost":16,"desc":"Danno ×0,5 · +26 mana a te"},{"cd":11,"dmg":1.26,"fx":["lifesteal"],"ls":0.45,"ic":"🩸","vfx":"multislash","name":"Lama Assetata","kind":"dual","cost":12,"desc":"Danno ×1,3 · ruba 45% del danno"},{"cd":18,"dmg":2.9,"fx":[],"ic":"☄️","vfx":"multislash","name":"Tecnica Segreta","kind":"dual","cost":18,"desc":"Danno ×2,9"}],"ult":{"cd":30,"dmg":2.0,"exec":2.5,"fx":["weaken"],"wk":0.3,"ic":"💀","vfx":"multislash","ult":1,"name":"Dieci Mila Ombre","kind":"dual","cost":24,"desc":"Danno ×2,0 · +250% se il boss è sotto il 35% · boss −30% danni 6s"}},"boia":{"learn":[{"cd":14,"dmg":0.8,"exec":1.8,"fx":[],"ic":"🎯","vfx":"slash_big","name":"Colpo di Grazia","kind":"dual","cost":14,"desc":"Danno ×0,8 · +180% se il boss è sotto il 35%"},{"cd":12,"dmg":0.37,"fx":["dot"],"dm":0.53,"dt":7,"ic":"☠️","vfx":"slash_big","name":"Ferro Rovente","kind":"dual","cost":13,"desc":"Danno ×0,4 · danno nel tempo 7s"},{"cd":13,"dmg":0.66,"fx":["weaken"],"wk":0.25,"ic":"🕸️","vfx":"slash_big","name":"Sguardo Spietato","kind":"dual","cost":14,"desc":"Danno ×0,7 · boss −25% danni 6s"},{"cd":9,"dmg":1.49,"fx":[],"ic":"💥","vfx":"slash_big","name":"Colpo di Mannaia","kind":"dual","cost":11,"desc":"Danno ×1,5"},{"cd":11,"dmg":1.08,"fx":["lifesteal"],"ls":0.45,"ic":"🩸","vfx":"slash_big","name":"Tributo di Sangue","kind":"dual","cost":12,"desc":"Danno ×1,1 · ruba 45% del danno"},{"cd":12,"dmg":0.62,"fx":["self"],"red":0.45,"ic":"🛡️","vfx":"slash_big","name":"Cappuccio Nero","kind":"dual","cost":13,"desc":"Danno ×0,6 · danni −45% per 5s"},{"cd":15,"dmg":0.52,"fx":["haste"],"ic":"⚡","vfx":"slash_big","name":"Passo Funebre","kind":"dual","cost":15,"desc":"Danno ×0,5 · tua velocità +50% 6s"},{"cd":18,"dmg":2.7,"fx":[],"ic":"☄️","vfx":"slash_big","name":"Taglio della Testa","kind":"dual","cost":18,"desc":"Danno ×2,7"},{"cd":8,"dmg":1.54,"fx":[],"hits":4,"ic":"⚔️","vfx":"slash_big","name":"Lame del Patibolo","kind":"dual","cost":10,"desc":"Danno ×1,5 · 4 colpi"},{"cd":17,"dmg":0.43,"fx":["atkAll"],"ap":0.22,"ic":"📣","vfx":"slash_big","name":"Rullo di Tamburi","kind":"dual","cost":17,"desc":"Danno ×0,4 · attacco party +22% 6s"}],"ult":{"cd":30,"dmg":2.0,"exec":2.5,"fx":["weaken"],"wk":0.3,"ic":"💀","vfx":"slash_big","ult":1,"name":"Ultima Sentenza","kind":"dual","cost":24,"desc":"Danno ×2,0 · +250% se il boss è sotto il 35% · boss −30% danni 6s"}},"arciere":{"learn":[{"cd":8,"dmg":1.1,"fx":[],"hits":4,"ic":"⚔️","vfx":"projectile","name":"Triplice Freccia","kind":"dual","cost":10,"desc":"Danno ×1,1 · 4 colpi"},{"cd":14,"dmg":0.84,"exec":1.8,"fx":[],"ic":"🎯","vfx":"projectile","name":"Freccia Mortale","kind":"dual","cost":14,"desc":"Danno ×0,8 · +180% se il boss è sotto il 35%"},{"cd":15,"dmg":0.44,"fx":["haste"],"ic":"⚡","vfx":"projectile","name":"Occhio d'Aquila","kind":"dual","cost":15,"desc":"Danno ×0,4 · tua velocità +50% 6s"},{"cd":12,"dmg":0.4,"fx":["dot"],"dm":0.57,"dt":7,"ic":"☠️","vfx":"projectile","name":"Freccia Avvelenata","kind":"dual","cost":13,"desc":"Danno ×0,4 · danno nel tempo 7s"},{"cd":10,"dmg":0.84,"fx":["dot"],"dm":0.4,"dt":4,"ic":"🌪️","vfx":"projectile","name":"Raffica di Frecce","kind":"dual","cost":12,"desc":"Danno ×0,8 · danno nel tempo 4s"},{"cd":13,"dmg":0.75,"fx":["weaken"],"wk":0.25,"ic":"🕸️","vfx":"projectile","name":"Freccia Rallentante","kind":"dual","cost":14,"desc":"Danno ×0,8 · boss −25% danni 6s"},{"cd":12,"dmg":0.65,"fx":["self"],"red":0.45,"ic":"🛡️","vfx":"projectile","name":"Salto Indietro","kind":"dual","cost":13,"desc":"Danno ×0,7 · danni −45% per 5s"},{"cd":9,"dmg":1.76,"fx":[],"ic":"💥","vfx":"projectile","name":"Colpo Perforante","kind":"dual","cost":11,"desc":"Danno ×1,8"},{"cd":16,"dmg":0.56,"fx":["manaSelf"],"mp":26,"ic":"💧","vfx":"projectile","name":"Respiro Profondo","kind":"dual","cost":16,"desc":"Danno ×0,6 · +26 mana a te"},{"cd":18,"dmg":2.9,"fx":[],"ic":"☄️","vfx":"projectile","name":"Freccia del Cacciatore","kind":"dual","cost":18,"desc":"Danno ×2,9"}],"ult":{"cd":30,"dmg":3.0,"fx":["dot"],"dm":0.6,"dt":8,"ic":"🌟","vfx":"projectile","ult":1,"name":"Pioggia Infuocata","kind":"dual","cost":24,"desc":"Danno ×3,0 · danno nel tempo 8s"}},"mago":{"learn":[{"cd":9,"dmg":1.3,"fx":[],"ic":"💥","vfx":"explosion","name":"Dardo Arcano","kind":"dual","cost":11,"desc":"Danno ×1,3"},{"cd":12,"dmg":0.37,"fx":["dot"],"dm":0.53,"dt":7,"ic":"☠️","vfx":"explosion","name":"Fiamma Persistente","kind":"dual","cost":13,"desc":"Danno ×0,4 · danno nel tempo 7s"},{"cd":16,"dmg":0.44,"fx":["manaSelf"],"mp":26,"ic":"💧","vfx":"explosion","name":"Concentrazione Arcana","kind":"dual","cost":16,"desc":"Danno ×0,4 · +26 mana a te"},{"cd":12,"dmg":0.57,"fx":["self"],"red":0.45,"ic":"🛡️","vfx":"explosion","name":"Barriera Magica","kind":"dual","cost":13,"desc":"Danno ×0,6 · danni −45% per 5s"},{"cd":10,"dmg":0.84,"fx":["dot"],"dm":0.4,"dt":4,"ic":"🌪️","vfx":"explosion","name":"Pioggia di Meteoriti","kind":"dual","cost":12,"desc":"Danno ×0,8 · danno nel tempo 4s"},{"cd":13,"dmg":0.75,"fx":["weaken"],"wk":0.25,"ic":"🕸️","vfx":"explosion","name":"Sfera Rallentante","kind":"dual","cost":14,"desc":"Danno ×0,8 · boss −25% danni 6s"},{"cd":14,"dmg":1.04,"exec":1.8,"fx":[],"ic":"🎯","vfx":"explosion","name":"Esecuzione Arcana","kind":"dual","cost":14,"desc":"Danno ×1,0 · +180% se il boss è sotto il 35%"},{"cd":15,"dmg":0.54,"fx":["haste"],"ic":"⚡","vfx":"explosion","name":"Magia Accelerata","kind":"dual","cost":15,"desc":"Danno ×0,5 · tua velocità +50% 6s"},{"cd":18,"dmg":2.8,"fx":[],"ic":"☄️","vfx":"explosion","name":"Meteora","kind":"dual","cost":18,"desc":"Danno ×2,8"},{"cd":17,"dmg":0.43,"fx":["atkAll"],"ap":0.22,"ic":"📣","vfx":"explosion","name":"Risonanza Arcana","kind":"dual","cost":17,"desc":"Danno ×0,4 · attacco party +22% 6s"}],"ult":{"cd":30,"dmg":3.0,"fx":["dot"],"dm":0.6,"dt":8,"ic":"🌟","vfx":"explosion","ult":1,"name":"Apocalisse di Fuoco","kind":"dual","cost":24,"desc":"Danno ×3,0 · danno nel tempo 8s"}},"stregone":{"learn":[{"cd":12,"dmg":0.35,"fx":["dot"],"dm":0.5,"dt":7,"ic":"☠️","vfx":"curse","name":"Fiamma Infernale","kind":"dual","cost":13,"desc":"Danno ×0,3 · danno nel tempo 7s"},{"cd":11,"dmg":0.95,"fx":["lifesteal"],"ls":0.45,"ic":"🩸","vfx":"curse","name":"Furto d'Anima","kind":"dual","cost":12,"desc":"Danno ×0,9 · ruba 45% del danno"},{"cd":13,"dmg":0.66,"fx":["weaken"],"wk":0.25,"ic":"🕸️","vfx":"curse","name":"Occhio Maledetto","kind":"dual","cost":14,"desc":"Danno ×0,7 · boss −25% danni 6s"},{"cd":9,"dmg":1.49,"fx":[],"ic":"💥","vfx":"curse","name":"Dardo del Caos","kind":"dual","cost":11,"desc":"Danno ×1,5"},{"cd":12,"dmg":0.6,"fx":["self"],"red":0.45,"ic":"🛡️","vfx":"curse","name":"Patto Oscuro","kind":"dual","cost":13,"desc":"Danno ×0,6 · danni −45% per 5s"},{"cd":16,"dmg":0.5,"fx":["manaSelf"],"mp":26,"ic":"💧","vfx":"curse","name":"Banchetto di Anime","kind":"dual","cost":16,"desc":"Danno ×0,5 · +26 mana a te"},{"cd":10,"dmg":0.91,"fx":["dot"],"dm":0.4,"dt":4,"ic":"🌪️","vfx":"curse","name":"Pioggia di Cenere","kind":"dual","cost":12,"desc":"Danno ×0,9 · danno nel tempo 4s"},{"cd":14,"dmg":1.08,"exec":1.8,"fx":[],"ic":"🎯","vfx":"curse","name":"Condanna","kind":"dual","cost":14,"desc":"Danno ×1,1 · +180% se il boss è sotto il 35%"},{"cd":15,"dmg":0.56,"fx":["haste"],"ic":"⚡","vfx":"curse","name":"Frenesia Demoniaca","kind":"dual","cost":15,"desc":"Danno ×0,6 · tua velocità +50% 6s"},{"cd":18,"dmg":2.9,"fx":[],"ic":"☄️","vfx":"curse","name":"Sigillo del Vuoto","kind":"dual","cost":18,"desc":"Danno ×2,9"}],"ult":{"cd":30,"dmg":2.4,"fx":["weaken","dot"],"wk":0.35,"dm":0.5,"dt":8,"ic":"🌑","vfx":"curse","ult":1,"name":"Portale dell'Abisso","kind":"dual","cost":24,"desc":"Danno ×2,4 · boss −35% danni 6s · danno nel tempo 8s"}},"necromante":{"learn":[{"cd":11,"dmg":0.9,"fx":["lifesteal"],"ls":0.45,"ic":"🩸","vfx":"curse","name":"Sussurro di Morte","kind":"dual","cost":12,"desc":"Danno ×0,9 · ruba 45% del danno"},{"cd":12,"dmg":0.37,"fx":["dot"],"dm":0.53,"dt":7,"ic":"☠️","vfx":"curse","name":"Peste Strisciante","kind":"dual","cost":13,"desc":"Danno ×0,4 · danno nel tempo 7s"},{"cd":13,"dmg":0.66,"fx":["weaken"],"wk":0.25,"ic":"🕸️","vfx":"curse","name":"Tocco Marcescente","kind":"dual","cost":14,"desc":"Danno ×0,7 · boss −25% danni 6s"},{"cd":9,"dmg":1.49,"fx":[],"ic":"💥","vfx":"curse","name":"Lancia d'Ossa","kind":"dual","cost":11,"desc":"Danno ×1,5"},{"cd":16,"dmg":0.48,"fx":["manaSelf"],"mp":26,"ic":"💧","vfx":"curse","name":"Banchetto di Cadaveri","kind":"dual","cost":16,"desc":"Danno ×0,5 · +26 mana a te"},{"cd":12,"dmg":0.62,"fx":["self"],"red":0.45,"ic":"🛡️","vfx":"curse","name":"Armatura d'Ossa","kind":"dual","cost":13,"desc":"Danno ×0,6 · danni −45% per 5s"},{"cd":10,"dmg":0.91,"fx":["dot"],"dm":0.4,"dt":4,"ic":"🌪️","vfx":"curse","name":"Nube Sepolcrale","kind":"dual","cost":12,"desc":"Danno ×0,9 · danno nel tempo 4s"},{"cd":14,"dmg":1.08,"exec":1.8,"fx":[],"ic":"🎯","vfx":"curse","name":"Falce Spettrale","kind":"dual","cost":14,"desc":"Danno ×1,1 · +180% se il boss è sotto il 35%"},{"cd":17,"dmg":0.42,"fx":["atkAll"],"ap":0.22,"ic":"📣","vfx":"curse","name":"Lamento dei Defunti","kind":"dual","cost":17,"desc":"Danno ×0,4 · attacco party +22% 6s"},{"cd":18,"dmg":2.9,"fx":[],"ic":"☄️","vfx":"curse","name":"Esplosione di Cadavere","kind":"dual","cost":18,"desc":"Danno ×2,9"}],"ult":{"cd":30,"dmg":2.4,"fx":["weaken","dot"],"wk":0.35,"dm":0.5,"dt":8,"ic":"🌑","vfx":"curse","ult":1,"name":"Danza Macabra","kind":"dual","cost":24,"desc":"Danno ×2,4 · boss −35% danni 6s · danno nel tempo 8s"}},"crio_mago":{"learn":[{"cd":9,"dmg":1.3,"fx":[],"ic":"💥","vfx":"frost","name":"Freccia Gelida","kind":"dual","cost":11,"desc":"Danno ×1,3"},{"cd":13,"dmg":0.63,"fx":["weaken"],"wk":0.25,"ic":"🕸️","vfx":"frost","name":"Gelo Rallentante","kind":"dual","cost":14,"desc":"Danno ×0,6 · boss −25% danni 6s"},{"cd":12,"dmg":0.39,"fx":["dot"],"dm":0.55,"dt":7,"ic":"☠️","vfx":"frost","name":"Congelamento Lento","kind":"dual","cost":13,"desc":"Danno ×0,4 · danno nel tempo 7s"},{"cd":12,"dmg":0.57,"fx":["self"],"red":0.45,"ic":"🛡️","vfx":"frost","name":"Corazza di Brina","kind":"dual","cost":13,"desc":"Danno ×0,6 · danni −45% per 5s"},{"cd":10,"dmg":0.84,"fx":["dot"],"dm":0.4,"dt":4,"ic":"🌪️","vfx":"frost","name":"Grandine","kind":"dual","cost":12,"desc":"Danno ×0,8 · danno nel tempo 4s"},{"cd":16,"dmg":0.5,"fx":["manaSelf"],"mp":26,"ic":"💧","vfx":"frost","name":"Cristallo di Mana","kind":"dual","cost":16,"desc":"Danno ×0,5 · +26 mana a te"},{"cd":14,"dmg":1.04,"exec":1.8,"fx":[],"ic":"🎯","vfx":"frost","name":"Frantumazione","kind":"dual","cost":14,"desc":"Danno ×1,0 · +180% se il boss è sotto il 35%"},{"cd":15,"dmg":0.54,"fx":["haste"],"ic":"⚡","vfx":"frost","name":"Scivolata sul Ghiaccio","kind":"dual","cost":15,"desc":"Danno ×0,5 · tua velocità +50% 6s"},{"cd":18,"dmg":2.8,"fx":[],"ic":"☄️","vfx":"frost","name":"Iceberg Cadente","kind":"dual","cost":18,"desc":"Danno ×2,8"},{"cd":17,"dmg":0.43,"fx":["atkAll"],"ap":0.22,"ic":"📣","vfx":"frost","name":"Vento del Nord","kind":"dual","cost":17,"desc":"Danno ×0,4 · attacco party +22% 6s"}],"ult":{"cd":30,"dmg":2.4,"fx":["weaken","dot"],"wk":0.35,"dm":0.5,"dt":8,"ic":"🌑","vfx":"frost","ult":1,"name":"Inverno Eterno","kind":"dual","cost":24,"desc":"Danno ×2,4 · boss −35% danni 6s · danno nel tempo 8s"}},"fulmine_mago":{"learn":[{"cd":8,"dmg":1.1,"fx":[],"hits":4,"ic":"⚔️","vfx":"lightning","name":"Scarica Multipla","kind":"dual","cost":10,"desc":"Danno ×1,1 · 4 colpi"},{"cd":15,"dmg":0.42,"fx":["haste"],"ic":"⚡","vfx":"lightning","name":"Sovraccarico","kind":"dual","cost":15,"desc":"Danno ×0,4 · tua velocità +50% 6s"},{"cd":9,"dmg":1.43,"fx":[],"ic":"💥","vfx":"lightning","name":"Fulmine Sferzante","kind":"dual","cost":11,"desc":"Danno ×1,4"},{"cd":10,"dmg":0.8,"fx":["dot"],"dm":0.4,"dt":4,"ic":"🌪️","vfx":"lightning","name":"Pioggia Elettrica","kind":"dual","cost":12,"desc":"Danno ×0,8 · danno nel tempo 4s"},{"cd":16,"dmg":0.48,"fx":["manaSelf"],"mp":26,"ic":"💧","vfx":"lightning","name":"Condensatore","kind":"dual","cost":16,"desc":"Danno ×0,5 · +26 mana a te"},{"cd":12,"dmg":0.62,"fx":["self"],"red":0.45,"ic":"🛡️","vfx":"lightning","name":"Gabbia di Faraday","kind":"dual","cost":13,"desc":"Danno ×0,6 · danni −45% per 5s"},{"cd":13,"dmg":0.78,"fx":["weaken"],"wk":0.25,"ic":"🕸️","vfx":"lightning","name":"Scossa Paralizzante","kind":"dual","cost":14,"desc":"Danno ×0,8 · boss −25% danni 6s"},{"cd":14,"dmg":1.08,"exec":1.8,"fx":[],"ic":"🎯","vfx":"lightning","name":"Colpo di Tuono","kind":"dual","cost":14,"desc":"Danno ×1,1 · +180% se il boss è sotto il 35%"},{"cd":17,"dmg":0.42,"fx":["atkAll"],"ap":0.22,"ic":"📣","vfx":"lightning","name":"Campo Magnetico","kind":"dual","cost":17,"desc":"Danno ×0,4 · attacco party +22% 6s"},{"cd":18,"dmg":2.9,"fx":[],"ic":"☄️","vfx":"lightning","name":"Fulmine Globulare","kind":"dual","cost":18,"desc":"Danno ×2,9"}],"ult":{"cd":30,"dmg":2.6,"fx":["manaAll","haste"],"mp":30,"ic":"🌌","vfx":"lightning","ult":1,"name":"Occhio del Ciclone","kind":"dual","cost":24,"desc":"Danno ×2,6 · +30 mana al party · tua velocità +50% 6s"}},"cacciatore":{"learn":[{"cd":12,"dmg":0.35,"fx":["dot"],"dm":0.5,"dt":7,"ic":"☠️","vfx":"projectile","name":"Dardo Velenoso","kind":"dual","cost":13,"desc":"Danno ×0,3 · danno nel tempo 7s"},{"cd":8,"dmg":1.16,"fx":[],"hits":4,"ic":"⚔️","vfx":"projectile","name":"Doppia Balestra","kind":"dual","cost":10,"desc":"Danno ×1,2 · 4 colpi"},{"cd":13,"dmg":0.66,"fx":["weaken"],"wk":0.25,"ic":"🕸️","vfx":"projectile","name":"Trappola Rallentante","kind":"dual","cost":14,"desc":"Danno ×0,7 · boss −25% danni 6s"},{"cd":14,"dmg":0.92,"exec":1.8,"fx":[],"ic":"🎯","vfx":"projectile","name":"Marchio del Cacciatore","kind":"dual","cost":14,"desc":"Danno ×0,9 · +180% se il boss è sotto il 35%"},{"cd":15,"dmg":0.48,"fx":["haste"],"ic":"⚡","vfx":"projectile","name":"Istinto Predatore","kind":"dual","cost":15,"desc":"Danno ×0,5 · tua velocità +50% 6s"},{"cd":12,"dmg":0.62,"fx":["self"],"red":0.45,"ic":"🛡️","vfx":"projectile","name":"Mimetismo","kind":"dual","cost":13,"desc":"Danno ×0,6 · danni −45% per 5s"},{"cd":9,"dmg":1.69,"fx":[],"ic":"💥","vfx":"projectile","name":"Quadrello Perforante","kind":"dual","cost":11,"desc":"Danno ×1,7"},{"cd":10,"dmg":0.94,"fx":["dot"],"dm":0.4,"dt":4,"ic":"🌪️","vfx":"projectile","name":"Raffica del Branco","kind":"dual","cost":12,"desc":"Danno ×0,9 · danno nel tempo 4s"},{"cd":16,"dmg":0.56,"fx":["manaSelf"],"mp":26,"ic":"💧","vfx":"projectile","name":"Pazienza","kind":"dual","cost":16,"desc":"Danno ×0,6 · +26 mana a te"},{"cd":18,"dmg":2.9,"fx":[],"ic":"☄️","vfx":"projectile","name":"Colpo da Cecchino","kind":"dual","cost":18,"desc":"Danno ×2,9"}],"ult":{"cd":30,"dmg":2.0,"exec":2.5,"fx":["weaken"],"wk":0.3,"ic":"💀","vfx":"projectile","ult":1,"name":"Caccia Grossa","kind":"dual","cost":24,"desc":"Danno ×2,0 · +250% se il boss è sotto il 35% · boss −30% danni 6s"}},"sciamano":{"learn":[{"cd":13,"fx":["regenAll"],"rg":0.55,"ic":"🌱","vfx":"aura","name":"Canto degli Avi","kind":"dual","cost":14,"hurt":1,"desc":"Rigenera il party 6s"},{"cd":8,"dmg":0.95,"fx":["heal"],"hp":1.47,"ic":"☀️","vfx":"aura","name":"Colpo di Totem","kind":"dual","cost":10,"desc":"Danno ×0,9 · cura il più ferito"},{"cd":9,"fx":["heal"],"hp":3.3,"ic":"💖","vfx":"aura","name":"Spirito Lupo","kind":"dual","cost":11,"hurt":1,"desc":"Cura il più ferito"},{"cd":12,"fx":["heal","bubble"],"hp":1.84,"ic":"💫","vfx":"aura","name":"Amuleto Tribale","kind":"dual","cost":13,"hurt":1,"desc":"Cura il più ferito · scudo al ferito"},{"cd":16,"fx":["heal","atkAll"],"hp":1.68,"ap":0.25,"ic":"🎺","vfx":"aura","name":"Tamburi di Guerra","kind":"dual","cost":16,"desc":"Cura il più ferito · attacco party +25% 6s"},{"cd":14,"fx":["healAll"],"hp":1.88,"ic":"✨","vfx":"aura","name":"Fuoco dello Spirito","kind":"dual","cost":14,"hurt":1,"desc":"Cura il party"},{"cd":19,"fx":["bubbleAll"],"ic":"🔰","vfx":"aura","name":"Totem della Pietra","kind":"dual","cost":18,"desc":"Scudo a tutto il party"},{"cd":18,"fx":["heal","hasteAll"],"hp":1.89,"ic":"🕊️","vfx":"aura","name":"Danza della Pioggia","kind":"dual","cost":18,"desc":"Cura il più ferito · velocità party +35% 6s"},{"cd":20,"fx":["manaAll"],"mp":20,"ic":"🔮","vfx":"aura","name":"Visione Ancestrale","kind":"dual","cost":19,"desc":"+20 mana al party"},{"cd":24,"fx":["healAll","bubbleAll"],"hp":2.61,"ic":"🙏","vfx":"aura","name":"Grande Spirito","kind":"dual","cost":22,"desc":"Cura il party · scudo a tutto il party"}],"ult":{"cd":30,"fx":["healAll","manaAll","bubbleAll"],"hp":2.0,"mp":30,"ic":"💠","vfx":"aura","ult":1,"name":"Tempesta degli Spiriti","kind":"dual","cost":24,"desc":"Cura il party · +30 mana al party · scudo a tutto il party"}},"alchimista":{"learn":[{"cd":8,"dmg":0.9,"fx":["heal"],"hp":1.4,"ic":"☀️","vfx":"explosion","name":"Fiala Corrosiva","kind":"dual","cost":10,"desc":"Danno ×0,9 · cura il più ferito"},{"cd":9,"fx":["heal"],"hp":3.15,"ic":"💖","vfx":"aura","name":"Tonico Rapido","kind":"dual","cost":11,"hurt":1,"desc":"Cura il più ferito"},{"cd":12,"fx":["heal","bubble"],"hp":1.76,"ic":"💫","vfx":"aura","name":"Elisir di Pelle","kind":"dual","cost":13,"hurt":1,"desc":"Cura il più ferito · scudo al ferito"},{"cd":13,"fx":["regenAll"],"rg":0.63,"ic":"🌱","vfx":"aura","name":"Distillato Vitale","kind":"dual","cost":14,"hurt":1,"desc":"Rigenera il party 6s"},{"cd":17,"dmg":0.6,"fx":["weaken","healAll"],"wk":0.25,"hp":1.08,"ic":"🌘","vfx":"explosion","name":"Gas Soporifero","kind":"dual","cost":17,"desc":"Danno ×0,6 · boss −25% danni 6s · cura il party"},{"cd":20,"fx":["manaAll"],"mp":20,"ic":"🔮","vfx":"aura","name":"Essenza di Mana","kind":"dual","cost":19,"desc":"+20 mana al party"},{"cd":16,"fx":["heal","atkAll"],"hp":1.82,"ap":0.25,"ic":"🎺","vfx":"aura","name":"Pozione Furente","kind":"dual","cost":16,"desc":"Cura il più ferito · attacco party +25% 6s"},{"cd":18,"fx":["heal","hasteAll"],"hp":1.89,"ic":"🕊️","vfx":"aura","name":"Infuso Veloce","kind":"dual","cost":18,"desc":"Cura il più ferito · velocità party +35% 6s"},{"cd":14,"fx":["heal","regenAll"],"hp":3.08,"rg":0.4,"ic":"🌿","vfx":"aura","name":"Panacea Lenta","kind":"dual","cost":14,"hurt":1,"desc":"Cura il più ferito · rigenera il party 6s"},{"cd":21,"fx":["healAll","manaAll"],"hp":1.59,"mp":12,"ic":"🌊","vfx":"aura","name":"Pietra Filosofale","kind":"dual","cost":20,"desc":"Cura il party · +12 mana al party"}],"ult":{"cd":30,"fx":["healAll","manaAll","bubbleAll"],"hp":2.0,"mp":30,"ic":"💠","vfx":"aura","ult":1,"name":"Grande Opera","kind":"dual","cost":24,"desc":"Cura il party · +30 mana al party · scudo a tutto il party"}},"sentinella_gelo":{"learn":[{"cd":8,"dmg":1.0,"fx":["taunt"],"tt":5,"ic":"🔨","vfx":"frost","name":"Sbarra di Ghiaccio","kind":"dual","cost":10,"desc":"Danno ×1,0 · provoca 5s"},{"cd":17,"dmg":1.37,"fx":["weaken"],"wk":0.3,"ic":"⛓️","vfx":"frost","name":"Brina Paralizzante","kind":"dual","cost":17,"desc":"Danno ×1,4 · boss −30% danni 6s"},{"cd":20,"fx":["self","taunt"],"red":0.8,"tt":4,"ic":"🗿","vfx":"aura","name":"Armatura di Cristallo","kind":"dual","cost":19,"desc":"Danni −80% per 5s · provoca 4s"},{"cd":11,"fx":["allyShield","self"],"red":0.4,"ic":"🤝","vfx":"aura","name":"Riparo Nevoso","kind":"dual","cost":12,"desc":"Scudo al ferito · danni −40% per 5s"},{"cd":12,"dmg":0.72,"fx":["weaken","taunt"],"wk":0.25,"tt":4,"ic":"😠","vfx":"frost","name":"Respiro Gelido","kind":"dual","cost":13,"desc":"Danno ×0,7 · boss −25% danni 6s · provoca 4s"},{"cd":19,"fx":["bubbleAll","taunt"],"tt":3,"ic":"🏰","vfx":"aura","name":"Bufera Protettiva","kind":"dual","cost":18,"desc":"Scudo a tutto il party · provoca 3s"},{"cd":16,"fx":["selfHeal","self"],"sh":0.25,"red":0.3,"ic":"💚","vfx":"aura","name":"Rigenerazione Glaciale","kind":"dual","cost":16,"desc":"Curi 25% della tua vita · danni −30% per 5s"},{"cd":15,"dmg":2.16,"fx":["taunt"],"tt":3,"ic":"🌋","vfx":"frost","name":"Valanga","kind":"dual","cost":15,"desc":"Danno ×2,2 · provoca 3s"},{"cd":18,"fx":["self","selfHeal"],"red":0.6,"sh":0.15,"ic":"🧱","vfx":"aura","name":"Iceberg","kind":"dual","cost":18,"desc":"Danni −60% per 5s · curi 15% della tua vita"},{"cd":22,"fx":["atkAll","bubbleAll"],"ap":0.2,"ic":"🚩","vfx":"aura","name":"Marcia Polare","kind":"dual","cost":20,"desc":"Attacco party +20% 6s · scudo a tutto il party"}],"ult":{"cd":30,"dmg":1.6,"fx":["self","selfHeal","taunt","weaken"],"red":0.8,"sh":0.4,"tt":6,"wk":0.3,"ic":"🛡️","vfx":"frost","ult":1,"name":"Era Glaciale","kind":"dual","cost":24,"desc":"Danno ×1,6 · danni −80% per 5s · curi 40% della tua vita · provoca 6s · boss −30% danni 6s"}},"vindice":{"learn":[{"cd":8,"dmg":1.0,"fx":["taunt"],"tt":5,"ic":"🔨","vfx":"slash_big","name":"Colpo di Vendetta","kind":"dual","cost":10,"desc":"Danno ×1,0 · provoca 5s"},{"cd":10,"dmg":0.84,"fx":["self","taunt"],"red":0.5,"tt":4,"ic":"🌵","vfx":"slash_big","name":"Spine del Rancore","kind":"dual","cost":12,"desc":"Danno ×0,8 · danni −50% per 5s · provoca 4s"},{"cd":13,"dmg":0.99,"fx":["lifesteal","taunt"],"ls":0.5,"tt":3,"ic":"🧛","vfx":"slash_big","name":"Ripresa del Maltolto","kind":"dual","cost":14,"desc":"Danno ×1,0 · ruba 50% del danno · provoca 3s"},{"cd":12,"dmg":0.69,"fx":["weaken","taunt"],"wk":0.25,"tt":4,"ic":"😠","vfx":"slash_big","name":"Sentenza","kind":"dual","cost":13,"desc":"Danno ×0,7 · boss −25% danni 6s · provoca 4s"},{"cd":11,"fx":["allyShield","self"],"red":0.4,"ic":"🤝","vfx":"aura","name":"Scudo del Debole","kind":"dual","cost":12,"desc":"Scudo al ferito · danni −40% per 5s"},{"cd":18,"fx":["self","selfHeal"],"red":0.6,"sh":0.15,"ic":"🧱","vfx":"aura","name":"Resistenza Ostinata","kind":"dual","cost":18,"desc":"Danni −60% per 5s · curi 15% della tua vita"},{"cd":15,"dmg":2.08,"fx":["taunt"],"tt":3,"ic":"🌋","vfx":"slash_big","name":"Giustizia Rovente","kind":"dual","cost":15,"desc":"Danno ×2,1 · provoca 3s"},{"cd":19,"fx":["bubbleAll","taunt"],"tt":3,"ic":"🏰","vfx":"aura","name":"Catena Protettiva","kind":"dual","cost":18,"desc":"Scudo a tutto il party · provoca 3s"},{"cd":22,"fx":["atkAll","bubbleAll"],"ap":0.2,"ic":"🚩","vfx":"aura","name":"Appello alla Rivalsa","kind":"dual","cost":20,"desc":"Attacco party +20% 6s · scudo a tutto il party"},{"cd":20,"fx":["self","taunt"],"red":0.8,"tt":4,"ic":"🗿","vfx":"aura","name":"Voto Inflessibile","kind":"dual","cost":19,"desc":"Danni −80% per 5s · provoca 4s"}],"ult":{"cd":30,"dmg":1.8,"fx":["bubbleAll","taunt","atkAll"],"tt":6,"ap":0.2,"ic":"👑","vfx":"slash_big","ult":1,"name":"Giorno del Giudizio","kind":"dual","cost":24,"desc":"Danno ×1,8 · scudo a tutto il party · provoca 6s · attacco party +20% 6s"}},"bardo":{"learn":[{"cd":9,"dmg":1.3,"fx":[],"ic":"💥","vfx":"aura","name":"Nota Stridente","kind":"dual","cost":11,"desc":"Danno ×1,3"},{"cd":17,"dmg":0.32,"fx":["atkAll"],"ap":0.22,"ic":"📣","vfx":"aura","name":"Canto di Guerra","kind":"dual","cost":17,"desc":"Danno ×0,3 · attacco party +22% 6s"},{"cd":15,"dmg":0.44,"fx":["haste"],"ic":"⚡","vfx":"aura","name":"Ritmo Incalzante","kind":"dual","cost":15,"desc":"Danno ×0,4 · tua velocità +50% 6s"},{"cd":16,"dmg":0.46,"fx":["manaSelf"],"mp":26,"ic":"💧","vfx":"aura","name":"Pausa Musicale","kind":"dual","cost":16,"desc":"Danno ×0,5 · +26 mana a te"},{"cd":13,"dmg":0.72,"fx":["weaken"],"wk":0.25,"ic":"🕸️","vfx":"aura","name":"Dissonanza","kind":"dual","cost":14,"desc":"Danno ×0,7 · boss −25% danni 6s"},{"cd":12,"dmg":0.62,"fx":["self"],"red":0.45,"ic":"🛡️","vfx":"aura","name":"Melodia Protettiva","kind":"dual","cost":13,"desc":"Danno ×0,6 · danni −45% per 5s"},{"cd":10,"dmg":0.91,"fx":["dot"],"dm":0.4,"dt":4,"ic":"🌪️","vfx":"aura","name":"Crescendo","kind":"dual","cost":12,"desc":"Danno ×0,9 · danno nel tempo 4s"},{"cd":14,"dmg":1.08,"exec":1.8,"fx":[],"ic":"🎯","vfx":"aura","name":"Nota Finale","kind":"dual","cost":14,"desc":"Danno ×1,1 · +180% se il boss è sotto il 35%"},{"cd":11,"dmg":1.26,"fx":["lifesteal"],"ls":0.45,"ic":"🩸","vfx":"aura","name":"Canzone Vampirica","kind":"dual","cost":12,"desc":"Danno ×1,3 · ruba 45% del danno"},{"cd":18,"dmg":2.9,"fx":[],"ic":"☄️","vfx":"aura","name":"Assolo Epico","kind":"dual","cost":18,"desc":"Danno ×2,9"}],"ult":{"cd":30,"dmg":1.8,"fx":["atkAll","hasteAll"],"ap":0.4,"ic":"🏆","vfx":"aura","ult":1,"name":"Sinfonia Immortale","kind":"dual","cost":24,"desc":"Danno ×1,8 · attacco party +40% 6s · velocità party +35% 6s"}},"artefice":{"learn":[{"cd":9,"dmg":1.3,"fx":[],"ic":"💥","vfx":"explosion","name":"Runa del Fulmine","kind":"dual","cost":11,"desc":"Danno ×1,3"},{"cd":12,"dmg":0.53,"fx":["self"],"red":0.45,"ic":"🛡️","vfx":"explosion","name":"Runa Scudo","kind":"dual","cost":13,"desc":"Danno ×0,5 · danni −45% per 5s"},{"cd":17,"dmg":0.33,"fx":["atkAll"],"ap":0.22,"ic":"📣","vfx":"explosion","name":"Runa della Forza","kind":"dual","cost":17,"desc":"Danno ×0,3 · attacco party +22% 6s"},{"cd":12,"dmg":0.4,"fx":["dot"],"dm":0.57,"dt":7,"ic":"☠️","vfx":"explosion","name":"Runa Ardente","kind":"dual","cost":13,"desc":"Danno ×0,4 · danno nel tempo 7s"},{"cd":16,"dmg":0.48,"fx":["manaSelf"],"mp":26,"ic":"💧","vfx":"explosion","name":"Runa del Mana","kind":"dual","cost":16,"desc":"Danno ×0,5 · +26 mana a te"},{"cd":13,"dmg":0.75,"fx":["weaken"],"wk":0.25,"ic":"🕸️","vfx":"explosion","name":"Runa del Gelo","kind":"dual","cost":14,"desc":"Danno ×0,8 · boss −25% danni 6s"},{"cd":15,"dmg":0.52,"fx":["haste"],"ic":"⚡","vfx":"explosion","name":"Runa della Velocità","kind":"dual","cost":15,"desc":"Danno ×0,5 · tua velocità +50% 6s"},{"cd":14,"dmg":1.08,"exec":1.8,"fx":[],"ic":"🎯","vfx":"explosion","name":"Runa della Rovina","kind":"dual","cost":14,"desc":"Danno ×1,1 · +180% se il boss è sotto il 35%"},{"cd":10,"dmg":0.98,"fx":["dot"],"dm":0.4,"dt":4,"ic":"🌪️","vfx":"explosion","name":"Runa a Catena","kind":"dual","cost":12,"desc":"Danno ×1,0 · danno nel tempo 4s"},{"cd":18,"dmg":2.9,"fx":[],"ic":"☄️","vfx":"explosion","name":"Runa Maestra","kind":"dual","cost":18,"desc":"Danno ×2,9"}],"ult":{"cd":30,"dmg":2.6,"fx":["manaAll","haste"],"mp":30,"ic":"🌌","vfx":"explosion","ult":1,"name":"Forgia del Mondo","kind":"dual","cost":24,"desc":"Danno ×2,6 · +30 mana al party · tua velocità +50% 6s"}},"araldo":{"learn":[{"cd":17,"dmg":0.3,"fx":["atkAll"],"ap":0.22,"ic":"📣","vfx":"ring","name":"Squillo di Tromba","kind":"dual","cost":17,"desc":"Danno ×0,3 · attacco party +22% 6s"},{"cd":9,"dmg":1.37,"fx":[],"ic":"💥","vfx":"ring","name":"Lancia Sonora","kind":"dual","cost":11,"desc":"Danno ×1,4"},{"cd":12,"dmg":0.55,"fx":["self"],"red":0.45,"ic":"🛡️","vfx":"ring","name":"Vessillo Difensivo","kind":"dual","cost":13,"desc":"Danno ×0,6 · danni −45% per 5s"},{"cd":15,"dmg":0.46,"fx":["haste"],"ic":"⚡","vfx":"ring","name":"Marcia Veloce","kind":"dual","cost":15,"desc":"Danno ×0,5 · tua velocità +50% 6s"},{"cd":16,"dmg":0.48,"fx":["manaSelf"],"mp":26,"ic":"💧","vfx":"ring","name":"Proclama Ispirante","kind":"dual","cost":16,"desc":"Danno ×0,5 · +26 mana a te"},{"cd":13,"dmg":0.75,"fx":["weaken"],"wk":0.25,"ic":"🕸️","vfx":"ring","name":"Editto Spaventoso","kind":"dual","cost":14,"desc":"Danno ×0,8 · boss −25% danni 6s"},{"cd":12,"dmg":0.45,"fx":["dot"],"dm":0.65,"dt":7,"ic":"☠️","vfx":"ring","name":"Bandiera Infuocata","kind":"dual","cost":13,"desc":"Danno ×0,5 · danno nel tempo 7s"},{"cd":14,"dmg":1.08,"exec":1.8,"fx":[],"ic":"🎯","vfx":"ring","name":"Annuncio di Rovina","kind":"dual","cost":14,"desc":"Danno ×1,1 · +180% se il boss è sotto il 35%"},{"cd":11,"dmg":1.26,"fx":["lifesteal"],"ls":0.45,"ic":"🩸","vfx":"ring","name":"Stendardo di Sangue","kind":"dual","cost":12,"desc":"Danno ×1,3 · ruba 45% del danno"},{"cd":18,"dmg":2.9,"fx":[],"ic":"☄️","vfx":"ring","name":"Grande Fanfara","kind":"dual","cost":18,"desc":"Danno ×2,9"}],"ult":{"cd":30,"dmg":1.8,"fx":["atkAll","hasteAll"],"ap":0.4,"ic":"🏆","vfx":"ring","ult":1,"name":"Proclama della Vittoria","kind":"dual","cost":24,"desc":"Danno ×1,8 · attacco party +40% 6s · velocità party +35% 6s"}},"mistico":{"learn":[{"cd":9,"dmg":1.3,"fx":[],"ic":"💥","vfx":"aura","name":"Raggio Stellare","kind":"dual","cost":11,"desc":"Danno ×1,3"},{"cd":16,"dmg":0.42,"fx":["manaSelf"],"mp":26,"ic":"💧","vfx":"aura","name":"Contemplazione","kind":"dual","cost":16,"desc":"Danno ×0,4 · +26 mana a te"},{"cd":12,"dmg":0.55,"fx":["self"],"red":0.45,"ic":"🛡️","vfx":"aura","name":"Velo Lunare","kind":"dual","cost":13,"desc":"Danno ×0,6 · danni −45% per 5s"},{"cd":12,"dmg":0.4,"fx":["dot"],"dm":0.57,"dt":7,"ic":"☠️","vfx":"aura","name":"Fuoco Fatuo","kind":"dual","cost":13,"desc":"Danno ×0,4 · danno nel tempo 7s"},{"cd":13,"dmg":0.72,"fx":["weaken"],"wk":0.25,"ic":"🕸️","vfx":"aura","name":"Ombra Opprimente","kind":"dual","cost":14,"desc":"Danno ×0,7 · boss −25% danni 6s"},{"cd":17,"dmg":0.38,"fx":["atkAll"],"ap":0.22,"ic":"📣","vfx":"aura","name":"Alba Benedicente","kind":"dual","cost":17,"desc":"Danno ×0,4 · attacco party +22% 6s"},{"cd":15,"dmg":0.52,"fx":["haste"],"ic":"⚡","vfx":"aura","name":"Equilibrio Perfetto","kind":"dual","cost":15,"desc":"Danno ×0,5 · tua velocità +50% 6s"},{"cd":14,"dmg":1.08,"exec":1.8,"fx":[],"ic":"🎯","vfx":"aura","name":"Zenit","kind":"dual","cost":14,"desc":"Danno ×1,1 · +180% se il boss è sotto il 35%"},{"cd":11,"dmg":1.26,"fx":["lifesteal"],"ls":0.45,"ic":"🩸","vfx":"aura","name":"Luce Vampira","kind":"dual","cost":12,"desc":"Danno ×1,3 · ruba 45% del danno"},{"cd":18,"dmg":2.9,"fx":[],"ic":"☄️","vfx":"aura","name":"Nova Cosmica","kind":"dual","cost":18,"desc":"Danno ×2,9"}],"ult":{"cd":30,"dmg":2.6,"fx":["manaAll","haste"],"mp":30,"ic":"🌌","vfx":"aura","ult":1,"name":"Eclissi Totale","kind":"dual","cost":24,"desc":"Danno ×2,6 · +30 mana al party · tua velocità +50% 6s"}}};   // abilità uniche per classe: 10 imparate ogni 3 livelli (3..30) + ultimate (liv. 10)
/**
 * Abilità di un eroe: 3 di base (livello 1) + una nuova ogni 3 livelli fino al 30 (10 in tutto, uniche per classe);
 * i curatori ricevono Resurrezione al livello 8 (in più); l'ultimate si sblocca al livello 10 (in più, sempre ultima).
 * Tempo di carica: nessuno fino al livello 9, poi 0,4 s (fino al 18) e 0,7 s.
 */
function Ep(classKey, level) {
  const cls = Kc[classKey];
  if (!cls) return [];
  const list = cls.abilities.map((a) => ({ ...a, _req: 1, _ct: 0 }));
  const sk = SKT[classKey];
  if (sk) sk.learn.forEach((a, i) => { const req = 3 * (i + 1); if (level >= req) list.push({ ...a, _req: req, _ct: req <= 9 ? 0 : req <= 18 ? 0.4 : 0.7 }); });
  if (cls.arch === 'healer' && level >= 8) list.push({ ...k6, _req: 8, _ct: 3 });
  if (sk && level >= 10) list.push({ ...sk.ult, _req: 10, _ct: 0.6 });
  return list;
}

// Funzioni di servizio dell'arena (geometria, bersagli, cure di gruppo).
// Scritte a mano con nomi leggibili; rimpiazzano i metodi equivalenti del motore generato.
// Usano le funzioni globali del vecchio codice: H6 (limite arena poligonale) e DM (intersezione segmenti).

/** Tiene un punto dentro l'arena (cerchio o poligono). */
function arenaClamp(eng, x, z) {
  if (eng.arenaVerts) return H6(x, z, eng.arenaVerts, eng.arenaRadius);
  const dist = Math.hypot(x, z);
  return dist > eng.arenaRadius
    ? { x: (x / dist) * eng.arenaRadius, z: (z / dist) * eng.arenaRadius }
    : { x, z };
}

/** Estremi del segmento di un muro (centro ± metà lunghezza lungo l'angolo). */
function wallEnds(w) {
  const dx = Math.cos(w.angle) * w.halfLen, dz = Math.sin(w.angle) * w.halfLen;
  return [w.x - dx, w.z - dz, w.x + dx, w.z + dz];
}

/** Primo muro vivo che taglia il segmento (x1,z1)-(x2,z2), oppure null. */
function arenaBlockingWall(eng, x1, z1, x2, z2) {
  for (const w of eng.walls) {
    if (!w.alive) continue;
    const [ax, az, bx, bz] = wallEnds(w);
    if (DM(x1, z1, x2, z2, ax, az, bx, bz)) return w;
  }
  return null;
}

/** Spinge un cerchio (x,z,raggio) fuori dai muri. */
function arenaCollideWalls(eng, x, z, radius) {
  for (const w of eng.walls) {
    if (!w.alive) continue;
    const [ax, az, bx, bz] = wallEnds(w);
    const sx = bx - ax, sz = bz - az, len2 = sx * sx + sz * sz || 1;
    const t = Math.max(0, Math.min(1, ((x - ax) * sx + (z - az) * sz) / len2));
    const px = ax + t * sx, pz = az + t * sz;           // punto del muro più vicino
    const dist = Math.hypot(x - px, z - pz);
    const minDist = radius + (w.thickness || 0.5) * 0.5;
    if (dist < minDist && dist > 0.001) {
      const push = minDist - dist;
      x += ((x - px) / dist) * push;
      z += ((z - pz) / dist) * push;
    }
  }
  return { x, z };
}

function killMarker(unit, time, events) {
  unit.hp = 0; unit.alive = false; unit._deadAt = time;
  events.push({ t: 'death', from: { x: unit.pos.x, z: unit.pos.z }, c: '#9ca3af' });
}

/** Danno ad area ai compagni del boss (40% del danno, minimo 1). */
function arenaSplashCompanions(eng, center, radius, dmg, events) {
  for (const c of eng.companions) {
    if (!c.alive) continue;
    if (Math.hypot(c.pos.x - center.x, c.pos.z - center.z) <= radius) {
      c.hp -= Math.max(1, Math.round(dmg * 0.4));
      if (c.hp <= 0) killMarker(c, eng.time, events);
    }
  }
}

/** Danno ad area ai compagni degli eroi (danno pieno, minimo 1). */
function arenaSplashHeroCompanions(eng, center, radius, dmg, events) {
  for (const c of eng.heroCompanions) {
    if (!c.alive) continue;
    if (Math.hypot(c.pos.x - center.x, c.pos.z - center.z) <= radius) {
      c.hp -= Math.max(1, Math.round(dmg));
      if (c.hp <= 0) killMarker(c, eng.time, events);
    }
  }
}

/** Eroe ferito con la minor percentuale di vita (i tank contano come più feriti: ×0,7). */
function arenaLowestHurt(eng) {
  let best = null, bestRatio = 2;
  for (const h of eng.heroes) {
    if (!h.alive) continue;
    const ratio = (h.hp / h.maxHp) * (h.isTank ? 0.7 : 1);
    if (ratio < bestRatio && h.hp < h.maxHp) { bestRatio = ratio; best = h; }
  }
  return best;
}

function arenaLowestDead(eng) {
  for (const h of eng.heroes) if (!h.alive) return h;
  return null;
}

function arenaAnyHurt(eng) {
  return eng.heroes.some((h) => h.alive && h.hp < h.maxHp);
}

function arenaHealAll(eng, amount) {
  for (const h of eng.heroes) {
    if (h.alive && h.hp < h.maxHp) h.hp = Math.min(h.maxHp, h.hp + amount);
  }
}

// Abilità degli eroi in battaglia (riscritte a mano dal motore originale).
// Ogni abilità: infligge danno / cura / applica un effetto, aggiunge eventi per la grafica
// e imposta il ricarico. Ritorna true se l'abilità è stata usata, false se non aveva un bersaglio utile.

const pointOf = (u) => ({ x: u.pos.x, z: u.pos.z });
const DEAD_MARK = '#9ca3af';

/** Compagno di un eroe (falco, lupo, demone). boost 2→"demon2", ≥4→"demon4". */
function makeHeroCompanion(owner, kind, dmgMult, boost) {
  const power = boost || 1;
  const type = kind === 'demon' && boost >= 4 ? 'demon4' : kind === 'demon' && boost >= 2 ? 'demon2' : kind;
  return {
    id: 'hc_' + Math.random().toString(36).slice(2),
    ownerId: owner.id, ownerKey: owner.classKey,
    pos: { x: owner.pos.x + (Math.random() - 0.5) * 2, z: owner.pos.z + (Math.random() - 0.5) * 2 },
    hp: Math.round(owner.maxHp * 0.4 * power), maxHp: Math.round(owner.maxHp * 0.4 * power),
    dmgMult, type, boost: boost || 1, color: owner.color,
    radius: type === 'demon4' ? 0.7 : type === 'demon2' ? 0.55 : 0.4,
    speed: 5.5,
    range: type === 'demon4' ? 4 : type === 'demon2' ? 1.8 : kind === 'hawk' ? 2.5 : 1.6,
    alive: true,
    attackCd: 0.5 + Math.random() * 0.5,
    fireBreathCd: type === 'demon4' ? 3 : 0,
    _deadAt: 0,
  };
}

/**
 * Esegue l'abilità `ab` (indice `idx`) dell'eroe `hero`.
 * from/to = posizioni di eroe e bersaglio, ev = lista eventi, cdMul = moltiplicatore ricarico.
 */
function runHeroAbility(eng, hero, ab, idx, from, to, ev, cdMul) {
  const boss = eng.boss;
  const atk = hero.attack + (hero.atkBuff || 0);
  const color = hero.color;
  const startCooldown = () => { hero.cd[idx] = ab.cd * cdMul; };
  const noTarget = (cd) => { hero.cd[idx] = cd; return false; };
  /** danno al boss = attacco × moltiplicatore − metà difesa (minimo 1) */
  const dmg = (mult) => Math.max(1, Math.round(atk * mult - boss.defense / 2));
  const hit = (kind, val, threatMul) => {
    boss.hp -= val; hero.threat += val * threatMul;
    ev.push({ t: 'dmg', who: hero.id, from, to, kind, label: ab.name, val, c: color });
  };
  const buffEvent = (kind, at, label) => ev.push({ t: 'buff', who: hero.id, from: at, to: at, kind, label: label || ab.name, c: color });

  switch (ab.kind) {
    case 'dual': return window.DBA_DUAL(eng, hero, ab, idx, from, to, ev, cdMul);
    case 'strike': hit('slash', dmg(1.3), 1); break;
    case 'big_strike': hit('slash_big', dmg(3), 2); break;
    case 'taunt_strike': {
      hit('taunt_strike', Math.max(1, Math.round(atk * 1.2 - boss.defense / 2)), 3);
      boss.forcedTarget = hero.id; boss.forcedTimer = 4; break;
    }
    case 'shot': hit('projectile', dmg(1.4), 1); break;
    case 'big_shot':
      hit('projectile', dmg(3.2), 2);
      ev.push({ t: 'vfx', who: hero.id, from, to, kind: 'explosion', c: color }); break;
    case 'aoe': hit(ab.vfx, dmg(1.8), 1); break;
    case 'chain': {
      let total = 0;
      for (let i = 0; i < 3; i++) { const p = dmg(1); boss.hp -= p; total += p; }
      hero.threat += total;
      ev.push({ t: 'dmg', who: hero.id, from, to, kind: ab.vfx, label: ab.name, val: Math.round(total), c: color }); break;
    }
    case 'dot':
      boss.dot = atk * 0.6; boss.dotTimer = 5;
      ev.push({ t: 'vfx', who: hero.id, from, to, kind: ab.vfx, label: ab.name, c: color }); break;
    case 'heal_single': {
      const t = arenaLowestHurt(eng); if (!t) return noTarget(0.4);
      const before = t.hp; t.hp = Math.min(t.maxHp, t.hp + Math.round(atk * 3.2 + 10));
      ev.push({ t: 'heal', who: hero.id, from, to: pointOf(t), kind: 'heal_beam', label: ab.name, val: Math.round(t.hp - before), c: color, target: t.id }); break;
    }
    case 'heal_aoe':
      if (!arenaAnyHurt(eng)) return noTarget(0.5);
      arenaHealAll(eng, Math.round(atk * 1.6 + 6));
      ev.push({ t: 'heal', who: hero.id, from, to: from, kind: 'heal_ring', label: ab.name, c: color }); break;
    case 'regen': {
      const t = arenaLowestHurt(eng); if (!t) return noTarget(0.4);
      t.regen = atk * 0.9 + 4; t.regenTimer = 6;
      ev.push({ t: 'heal', who: hero.id, from, to: pointOf(t), kind: 'regen', label: ab.name, c: color, target: t.id }); break;
    }
    case 'shield': {
      const t = arenaLowestHurt(eng); if (!t) return noTarget(0.5);
      t.dmgReduce = 0.5; t.dmgReduceTimer = 5;
      ev.push({ t: 'buff', who: hero.id, from: pointOf(t), to: pointOf(t), kind: 'bubble', label: ab.name, c: color, target: t.id }); break;
    }
    case 'buff_atk':
      for (const h of eng.heroes) if (h.alive) { h.atkBuff = (h.atkBuff || 0) + 6; h.atkBuffTimer = 6; }
      buffEvent('aura', from); break;
    case 'wall': hero.dmgReduce = 0.65; hero.dmgReduceTimer = 5; buffEvent('aura', from); break;
    case 'threat':
      boss.forcedTarget = hero.id; boss.forcedTimer = 6; hero.threat += 9999; buffEvent('ring', from); break;
    case 'revive': {
      const t = arenaLowestDead(eng); if (!t) return noTarget(0.8);
      t.alive = true; t.hp = Math.round(t.maxHp * 0.5); t._deadAt = 0; t.moving = false;
      ev.push({ t: 'heal', who: hero.id, from, to: pointOf(t), kind: 'heal_beam', label: ab.name, val: t.hp, c: color, target: t.id });
      buffEvent('bubble', pointOf(t), 'Resurrezione'); break;
    }
    case 'revive_companion': {
      const c = eng.heroCompanions.find((k) => k.ownerId === hero.id && !k.alive); if (!c) return noTarget(0.8);
      c.alive = true; c.hp = c.maxHp; c._deadAt = 0;
      ev.push({ t: 'heroCompanion_spawn', kind: 'heroCompanion_spawn', id: c.id, ownerId: hero.id, pos: pointOf(c), color: hero.color, type: c.type });
      buffEvent('aura', from); break;
    }
    case 'summon_boost': {
      const demons = eng.heroCompanions.filter((k) => k.ownerId === hero.id && k.alive && (k.type === 'demon' || k.type === 'demon2' || k.type === 'demon4'));
      if (demons.length >= 4) return noTarget(1);
      const boost = ab.boost || 2, d = makeHeroCompanion(hero, 'demon', 0.23 * boost, boost);
      d.pos = { x: hero.pos.x + (Math.random() - 0.5) * 2, z: hero.pos.z + (Math.random() - 0.5) * 2 };
      eng.heroCompanions.push(d);
      ev.push({ t: 'heroCompanion_spawn', kind: 'heroCompanion_spawn', id: d.id, ownerId: hero.id, pos: pointOf(d), color: hero.color, type: d.type, boost: d.boost });
      buffEvent('aura', from); break;
    }
    default: return true;           // tipo sconosciuto: non fa nulla (come nell'originale)
  }
  startCooldown();
  return true;
}

// Scelta dell'abilità da usare per un eroe, ad ogni passo della battaglia.
// (riscritta a mano da `useAbility` del motore originale)
//
// Regole, in ordine:
//  1. Se l'eroe sta caricando un incantesimo, aspetta la fine; poi lo lancia (_fz = abilità scelta, _fin = carica finita).
//  2. Scorre le abilità nell'ordine della scheda eroe e usa la prima disponibile:
//     - ricarico finito, mana sufficiente;
//     - attacchi base (insieme `hf`) solo se il boss è a tiro;
//     - cure/scudi/rigenerazione solo se c'è un ferito, rianimazione solo se c'è un caduto;
//     - mai se un muro blocca la linea di tiro.
//  3. Se l'abilità ha un tempo di carica (_ct), l'eroe inizia a caricare e si ferma qui.
//  4. Dopo l'uso: toglie il mana (gli attacchi base ne restituiscono un po'), danneggia i compagni del boss vicini
//     e il tank guadagna minaccia.
// Con il controllo manuale (window.__dbaCtl) il giocatore sceglie: l'automatico usa solo l'attacco base e le abilità da tank.

const SUPPORT_KINDS = new Set(['heal_single', 'shield', 'regen']);

function abilityManaCost(hero, ab) {
  if (hero.noMana) return 0;
  return ab.cost != null ? ab.cost : (cg[ab.kind] || 0);
}

/** Punto verso cui l'abilità è rivolta (boss, ferito o caduto); null se non c'è un bersaglio utile. */
function abilityAimPoint(eng, hero, ab, bossPoint, idx) {
  if (SUPPORT_KINDS.has(ab.kind)) {
    const t = arenaLowestHurt(eng);
    if (!t) { hero.cd[idx] = 0.4; return null; }
    return { x: t.pos.x, z: t.pos.z };
  }
  if (ab.kind === 'revive') {
    const t = arenaLowestDead(eng);
    if (!t) { hero.cd[idx] = 0.8; return null; }
    return { x: t.pos.x, z: t.pos.z };
  }
  return bossPoint;
}

function DBA_ISCTL(id) { const S = window.__dbaCtlSet; if (S && S.size) return S.has(id); const c = window.__dbaCtl; return !!(c && c.on && c.id === id); }
function DBA_ANYCTL() { const S = window.__dbaCtlSet; return !!(S && S.size) || !!(window.__dbaCtl && window.__dbaCtl.on); }
function useHeroAbility(eng, hero, inRange, ev) {
  const ctl = DBA_ISCTL(hero.id);

  // 1. incantesimo in carica
  if (hero.casting) {
    if (eng.time >= hero.casting.end) { hero._fz = hero.casting.idx; hero._fin = 1; hero.casting = null; }
    else return;
  }
  if (ctl && hero._mq !== undefined && eng.time - hero._mqT > 4) hero._mq = undefined;   // coda manuale scaduta

  const cdMul = 1 / hero.atkSpeedMul;
  const boss = eng.boss;
  const from = { x: hero.pos.x, z: hero.pos.z };
  const bossPoint = { x: boss.pos.x, z: boss.pos.z };

  for (let i = 0; i < hero.abilities.length; i++) {
    if (hero._fz !== undefined && i !== hero._fz) continue;     // sta finendo una carica: solo quella
    if (hero.cd[i] > 0) continue;
    const ab = hero.abilities[i];
    if (ab && ab.hurt && !eng.anyHurt()) continue;
    if (!ab || (hf.has(ab.kind) && !inRange)) continue;
    if (ctl && hero._fz === undefined && hero._mq !== i) {
      const autoAllowed = (i === 0 && (hf.has(ab.kind) || hero.arch === 'healer')) ||
        (hero.arch === 'tank' && (ab.kind === 'taunt_strike' || ab.kind === 'threat'));
      if (!autoAllowed) continue;
    }
    const cost = abilityManaCost(hero, ab);
    if (hero.mana < cost) continue;

    // bersaglio e linea di tiro
    if (hf.has(ab.kind) || SUPPORT_KINDS.has(ab.kind) || ab.kind === 'revive') {
      const aim = abilityAimPoint(eng, hero, ab, bossPoint, i);
      if (!aim) continue;
      if (eng.lineBlocked(from.x, from.z, aim.x, aim.z)) continue;
    }

    // 3. carica
    if (ab._ct > 0 && !hero._fin) {
      const castTime = ab._ct * (ctl && ab.kind !== 'revive' ? 0.6 : 1);
      hero.casting = { idx: i, end: eng.time + castTime, total: castTime, name: ab.name };
      if (hero._mq === i) hero._mq = undefined;
      return;
    }

    // 4. uso
    if (eng.execAbility(hero, ab, i, from, bossPoint, ev, cdMul)) {
      const basic = hf.has(ab.kind);
      const manaBack = basic ? (hero.useEn ? 2 + cost * 0.4 : cost * 0.15) : 0;
      hero.mana = Math.min(hero.maxMana, Math.max(0, hero.mana - cost) + manaBack);
      if (basic) eng.splashCompanions(bossPoint, 3, hero.attack + (hero.atkBuff || 0), ev);
      hero._fz = undefined; hero._fin = 0;
      if (hero.arch === 'tank') hero.threat += Math.round(hero.attack * 1.5);
      if (hero._mq === i) hero._mq = undefined;
      return;
    }
  }
  hero._fz = undefined; hero._fin = 0;
}

// Intelligenza del boss: fasi, trappole, attacchi e abilità speciali (riscritta a mano da `bossAI`).
// Viene chiamata ad ogni passo con dt = secondi trascorsi e ev = lista eventi per la grafica.
// ATTENZIONE: l'ordine delle chiamate a Math.random() è identico all'originale, così le simulazioni con seme coincidono.

const DEATH_COLOR = '#9ca3af';
const rnd = () => Math.random();
const randomId = () => Math.random().toString(36).slice(2);
const pt = (o) => ({ x: o.pos.x, z: o.pos.z });
const tick = (obj, key, dt) => { if (obj[key] > 0) obj[key] -= dt; };

/** Infligge `amount` a un eroe (già ridotto dalle sue difese) e registra l'eventuale morte. */
function boss_hurtHero(eng, hero, amount, ev) {
  hero.hp -= amount;
  if (hero.hp <= 0) {
    hero.hp = 0; hero.alive = false; hero._deadAt = eng.time;
    ev.push({ t: 'death', from: { x: hero.pos.x, z: hero.pos.z }, c: DEATH_COLOR });
  }
}
/** Danno = max(1, attacco×mult − difesa/2), ridotto da dmgReduce. */
function boss_hitDamage(boss, hero, mult) {
  const raw = Math.max(1, Math.round(boss.attack * mult - hero.defense / 2));
  return Math.round(raw * (1 - (hero.dmgReduce || 0)) * (boss.weakT > 0 ? 1 - (boss.weakV || 0.25) : 1));
}

// ---- 1. fasi: a 70% e a 20% di vita il boss si trasforma ---------------------------------------
function boss_phases(boss, ev) {
  if (!boss._p2 && boss.maxHp > 0 && boss.hp / boss.maxHp <= 0.7) {
    boss._p2 = true; boss.attack = Math.round(boss.attack * 1.15); boss.aoeCd = 0; boss.groupCd = 0;
    ev.push({ t: 'boss_transform', kind: 'boss_transform', color: boss.color });
  }
  if (!boss._p3 && boss.maxHp > 0 && boss.hp / boss.maxHp <= 0.2) {
    boss._p3 = true; boss.attack = Math.round(boss.attack * 1.2); boss.aoeCd = 0; boss.groupCd = 0; boss.wallCd = 0;
    ev.push({ t: 'boss_transform', kind: 'boss_transform', color: boss.color });
  }
}

// ---- 2. timer di base --------------------------------------------------------------------------
function boss_timers(boss, dt) {
  tick(boss, 'attackCd', dt); tick(boss, 'aoeCd', dt); tick(boss, 'groupCd', dt); tick(boss, 'wallCd', dt);
  if (boss.weakT > 0) boss.weakT -= dt;
  if (boss.dotTimer > 0) {
    boss.dotTimer -= dt; boss.hp -= boss.dot * dt;
    if (boss.dotTimer <= 0) boss.dot = 0;
  }
  if (boss.forcedTimer > 0) {
    boss.forcedTimer -= dt;
    if (boss.forcedTimer <= 0) boss.forcedTarget = null;
  }
}

// ---- 3. muri: tra un eroe e il boss, 4 schemi casuali ------------------------------------------
function boss_walls(eng, boss, alive, ev) {
  if (!(boss.wallCd <= 0 && boss.alive)) return;
  const target = alive[Math.floor(rnd() * alive.length)];
  const cx = (boss.pos.x + target.pos.x) / 2, cz = (boss.pos.z + target.pos.z) / 2;
  const angle = Math.atan2(target.pos.z - boss.pos.z, target.pos.x - boss.pos.x) + Math.PI / 2;
  const roll = rnd();
  // ogni muro: [spostamento laterale, lunghezza, spessore, altezza]
  const layout =
    roll < 0.25 ? [[0, 10.5 + rnd() * 2, 0.7, 4]] :
    roll < 0.5 ? [[0, 5 + rnd() * 1.2, 0.7, 4]] :
    roll < 0.75 ? (() => { const n = rnd() < 0.5 ? 2 : 3, a = []; for (let i = 0; i < n; i++) a.push([(i - (n - 1) / 2) * 3.4, 1.6, 1.1, 4.6]); return a; })() :
    [[-3.6, 4, 0.7, 4], [3.6, 4, 0.7, 4]];
  for (const [side, length, thickness, height] of layout) {
    const x = cx + Math.cos(angle) * side, z = cz + Math.sin(angle) * side;
    const w = { id: 'wall_' + randomId(), x, z, angle, halfLen: length / 2, length, height, duration: 14, alive: true, color: boss.color, thickness };
    eng.walls.push(w);
    ev.push({ t: 'wall_spawn', kind: 'wall_spawn', id: w.id, x, z, angle, length, height, duration: 14, color: boss.color });
  }
  boss.wallCd = 14 + rnd() * 4;
}

// ---- 4. spuntoni, trappole e zona di danno nel tempo -------------------------------------------
function boss_spikes(eng, boss, alive, dt, ev) {
  if (boss.spikeCd > 0) boss.spikeCd -= dt;
  if (!(boss.spikeCd <= 0 && boss.alive)) return;
  const count = 3 + Math.floor(rnd() * 3);
  for (let i = 0; i < count; i++) {
    const target = alive[Math.floor(rnd() * alive.length)];
    const x = target.pos.x + (rnd() - 0.5) * 4, z = target.pos.z + (rnd() - 0.5) * 4;
    const s = { id: 'spike_' + randomId(), pos: { x, z }, delay: 1.2, damage: 0.4, radius: 1.2, color: boss.color, active: false };
    eng.spikes.push(s);
    ev.push({ t: 'spike_spawn', kind: 'spike_spawn', id: s.id, pos: { x, z }, color: boss.color, delay: 1.2, radius: 1.2 });
  }
  boss.spikeCd = 8 + rnd() * 4;
}
function boss_traps(eng, boss, dt, ev) {
  if (boss.trapCd > 0) boss.trapCd -= dt;
  if (!(boss.trapCd <= 0 && boss.alive)) return;
  const count = 2 + Math.floor(rnd() * 2);
  for (let i = 0; i < count; i++) {
    const ang = rnd() * Math.PI * 2, dist = 3 + rnd() * 6;
    const p = eng.clampToArena(boss.pos.x + Math.cos(ang) * dist, boss.pos.z + Math.sin(ang) * dist);
    const t = { id: 'trap_' + randomId(), pos: { x: p.x, z: p.z }, damage: 0.6, radius: 1, color: boss.color };
    eng.traps.push(t);
    ev.push({ t: 'trap_spawn', kind: 'trap_spawn', id: t.id, pos: { x: p.x, z: p.z }, color: boss.color, radius: 1 });
  }
  boss.trapCd = 12 + rnd() * 4;
}
function boss_coverage(eng, boss, dt, ev) {
  if (boss.coverageCd > 0) boss.coverageCd -= dt;
  if (!(boss.coverageCd <= 0 && boss.alive)) return;
  const radius = eng.arenaRadius * (0.3 + rnd() * 0.4), ang = rnd() * Math.PI * 2;
  const x = Math.cos(ang) * eng.arenaRadius * 0.15, z = Math.sin(ang) * eng.arenaRadius * 0.15;
  eng.coverageArea = { pos: { x, z }, radius, dot: boss.attack * 0.08, color: boss.color };
  ev.push({ t: 'coverage_spawn', kind: 'coverage_spawn', pos: { x, z }, radius, color: boss.color });
  boss.coverageCd = 30 + rnd() * 10;
}

// ---- 5. bersaglio, movimento e artiglio --------------------------------------------------------
/** Ritorna { target, dist, reach } e sposta il boss verso il bersaglio. */
function boss_chase(eng, boss, alive, dt) {
  let target = boss.forcedTarget ? eng.heroes.find((h) => h.id === boss.forcedTarget && h.alive) : null;
  if (!target) target = alive.slice().sort((a, b) => b.threat - a.threat)[0];   // più minaccia
  if (!target) target = alive[0];
  boss.targetId = target.id;
  const dx = target.pos.x - boss.pos.x, dz = target.pos.z - boss.pos.z;
  const dist = Math.hypot(dx, dz) || 0.001, reach = boss.radius + target.radius + 0.5;
  if (dist > reach) { const step = 3.1 * dt; boss.pos.x += (dx / dist) * step; boss.pos.z += (dz / dist) * step; }
  const p = eng.clampToArena(boss.pos.x, boss.pos.z);
  boss.pos.x = p.x; boss.pos.z = p.z;
  return { target, dist, reach };
}
/** Artiglio: preavviso di 0,3 s poi danno ×2, ogni 1,3 s. */
function boss_claw(eng, boss, target, dist, reach, dt, ev) {
  if (boss.attackCd <= 0 && dist <= reach + 1 && boss.clW == null) { boss.clW = 0.3; ev.push({ t: 'bossWind', kind: 'bossWind', claw: 1 }); }
  if (boss.clW != null && (boss.clW -= dt) <= 0) {
    boss.clW = null;
    if (dist <= reach + 2.2) {
      const raw = Math.max(1, Math.round(boss.attack - target.defense / 2));
      const dmg = Math.round(raw * 2 * (1 - (target.dmgReduce || 0)));
      target.hp -= dmg;
      ev.push({ t: 'dmg', who: 'boss', from: pt(boss), to: pt(target), kind: 'bossSlash', label: 'Artiglio', val: dmg, c: '#f87171', target: target.id });
      if (target.hp <= 0) { target.hp = 0; target.alive = false; target._deadAt = eng.time; ev.push({ t: 'death', from: pt(target), c: DEATH_COLOR }); }
    }
    boss.attackCd = 1.3;
  }
}

// ---- 6. Soffio: onda d'urto con preavviso di 0,9 s, raggio 4,8, danno ×0,5 ogni 8 s ------------
function boss_breath(eng, boss, dt, ev) {
  if (boss.aoeCd <= 0 && boss.aoeW == null) {
    boss.aoeW = 0.9; boss.aoeP = { x: boss.pos.x, z: boss.pos.z };
    ev.push(
      { t: 'special_telegraph', kind: 'special_telegraph', pos: { x: boss.pos.x, z: boss.pos.z }, radius: 4.8, color: '#fb923c', name: 'Soffio', delay: 0.9, type: 'shockwave' },
      { t: 'bossWind', kind: 'bossWind', label: '⚠ Soffio', c: '#fb923c', from: { x: boss.pos.x, z: boss.pos.z } });
  }
  if (boss.aoeW != null && (boss.aoeW -= dt) <= 0) {
    boss.aoeW = null;
    const at = boss.aoeP || { x: boss.pos.x, z: boss.pos.z };
    ev.push({ t: 'special_trigger', kind: 'special_trigger', pos: { x: at.x, z: at.z }, radius: 4.8, color: '#fb923c', name: 'Soffio', type: 'shockwave' });
    for (const h of eng.heroes) {
      if (!h.alive) continue;
      if (Math.hypot(h.pos.x - at.x, h.pos.z - at.z) <= 4.8) boss_hurtHero(eng, h, boss_hitDamage(boss, h, 0.5), ev);
    }
    eng.splashHeroCompanions({ x: at.x, z: at.z }, 4.8, boss.attack * 0.5, ev);
    ev.push({ t: 'aoe', who: 'boss', from: { x: boss.pos.x, z: boss.pos.z }, kind: 'bossAoE', label: 'Soffio', c: '#fb923c' });
    boss.aoeCd = 8;
  }
}

// ---- 7. affisso del boss (rigenerazione / servitori / furia) -----------------------------------
function boss_affix(eng, boss, alive, dt, ev) {
  if (!(boss.affix && boss.alive && alive.length > 0)) return;
  boss.afxCd = (boss.afxCd == null ? 8 : boss.afxCd) - dt;
  if (boss.afxCd > 0) return;
  const from = { x: boss.pos.x, z: boss.pos.z };
  if (boss.affix === 'heal') {
    boss.afxCd = 12; boss.hp = Math.min(boss.maxHp, boss.hp + boss.maxHp * 0.025);
    ev.push({ t: 'aoe', who: 'boss', from, kind: 'bossAoE', label: '✚ Rigenerazione', c: '#4ade80' });
  } else if (boss.affix === 'summon') {
    boss.afxCd = 12;
    ev.push({ t: 'aoe', who: 'boss', from, kind: 'bossAoE', label: '👻 Evoca servitori', c: '#c084fc' });
    const victims = alive.slice().sort(() => rnd() - 0.5).slice(0, 2);
    for (const h of victims) {
      const dmg = boss_hitDamage(boss, h, 0.4);
      h.hp -= dmg;
      ev.push({ t: 'dmg', who: 'boss', from, to: pt(h), kind: 'groupHit', label: 'Servitore', val: dmg, c: '#c084fc', target: h.id });
      if (h.hp <= 0) { h.hp = 0; h.alive = false; h._deadAt = eng.time; ev.push({ t: 'death', from: pt(h), c: DEATH_COLOR }); }
    }
  } else if (boss.affix === 'rage') {
    boss.afxCd = 15;
    if ((boss.rageN | 0) < 5) { boss.rageN = (boss.rageN | 0) + 1; boss.attack = Math.round(boss.attack * 1.07); }
    ev.push({ t: 'aoe', who: 'boss', from, kind: 'bossAoE', label: '🔥 Furia crescente', c: '#ef4444' });
  }
}

// ---- 8. Ruggito: danno a tutti ×0,6 ogni 8-11 s, preavviso 0,8 s -------------------------------
function boss_roar(eng, boss, alive, dt, ev) {
  if (boss.groupCd <= 0 && alive.length > 0 && boss.grW == null) {
    boss.grW = 0.8;
    ev.push({ t: 'bossWind', kind: 'bossWind', label: '⚠ Ruggito', c: '#fbbf24', from: { x: boss.pos.x, z: boss.pos.z } });
  }
  if (boss.grW != null && (boss.grW -= dt) <= 0) {
    boss.grW = null;
    for (const h of alive) {   // NB: come nell'originale, anche chi è morto in questo passo viene colpito
      const dmg = boss_hitDamage(boss, h, 0.6);
      h.hp -= dmg;
      ev.push({ t: 'dmg', who: 'boss', from: { x: boss.pos.x, z: boss.pos.z }, to: pt(h), kind: 'groupHit', label: 'Ruggito', val: dmg, c: '#fbbf24', target: h.id });
      if (h.hp <= 0) { h.hp = 0; h.alive = false; h._deadAt = eng.time; ev.push({ t: 'death', from: pt(h), c: DEATH_COLOR }); }
    }
    eng.splashHeroCompanions({ x: boss.pos.x, z: boss.pos.z }, eng.arenaRadius, boss.attack * 0.6, ev);
    ev.push({ t: 'aoe', who: 'boss', from: { x: boss.pos.x, z: boss.pos.z }, kind: 'bossGroup', label: 'Ruggito Furioso', c: '#fbbf24' });
    boss.groupCd = 8 + rnd() * 3;
  }
}

// ---- 9. attacchi speciali del boss con segnalazione a terra ------------------------------------
function boss_special(eng, boss, alive, dt, ev) {
  if (boss.specialCd > 0) boss.specialCd -= dt;
  if (!(boss.specialCd <= 0 && boss.alive && (boss.specialAbilities || []).length > 0)) return;
  if (rnd() < 0.3) {
    const sp = boss.specialAbilities[Math.floor(rnd() * boss.specialAbilities.length)];
    let x, z;
    if (rnd() < 0.8 && alive.length > 0) { const h = alive[Math.floor(rnd() * alive.length)]; x = h.pos.x; z = h.pos.z; }
    else { x = (rnd() - 0.5) * 16; z = (rnd() - 0.5) * 16; }
    eng.telegraphs.push({ pos: { x, z }, radius: sp.radius, delay: 1.5, damage: sp.damage, color: sp.color, name: sp.name, type: sp.type });
    ev.push({ t: 'special_telegraph', kind: 'special_telegraph', pos: { x, z }, radius: sp.radius, color: sp.color, name: sp.name, delay: 1.5, type: sp.type });
  }
  boss.specialCd = 6 + rnd() * 3;
}

// ---- 10. abilità firma (per bioma) e servitori -------------------------------------------------
function boss_signature(eng, boss, alive, dt, ev) {
  const sig = boss.sig && (boss.nmS || DBA_SIG[boss.key]);
  if (!(sig && boss.alive)) return;
  boss.sigCd = (boss.sigCd == null ? 12 : boss.sigCd) - dt;
  if (boss.sigCd <= 0) {
    boss.sigCd = sig.cd * (boss._p3 ? 0.7 : 1);
    try { DBA_SIGGO(eng, boss, sig, alive, ev); } catch (e) { /* come l'originale: ignora errori della firma */ }
  }
}
function boss_companions(eng, boss, dt, ev) {
  if (boss.companionCd > 0) boss.companionCd -= dt;
  if (!(boss.companionCd <= 0 && boss.alive)) return;
  const chance = (boss.companionChance || 0.1) + boss.tier * 0.04;
  if (rnd() < chance && eng.companions.filter((c) => c.alive).length < 2 + Math.floor(boss.tier / 2)) {
    const ang = rnd() * Math.PI * 2, dist = 2 + rnd() * 2;
    const x = boss.pos.x + Math.cos(ang) * dist, z = boss.pos.z + Math.sin(ang) * dist, hp = 25 + boss.tier * 8;
    const c = { id: 'comp_' + randomId(), pos: { x, z }, hp, maxHp: hp, attack: Math.round(boss.attack * 0.35), defense: 2, radius: 0.5, speed: 3.5, range: 1.5, alive: true, _deadAt: 0, attackCd: 1.5, bossColor: boss.color };
    eng.companions.push(c);
    ev.push({ t: 'companion_spawn', kind: 'companion_spawn', id: c.id, pos: { x, z }, color: boss.color });
  }
  boss.companionCd = 5 + rnd() * 3;
}

/** Un passo dell'IA del boss. */
function runBossAI(eng, dt, ev) {
  const boss = eng.boss;
  if (!boss.alive) return;
  boss_phases(boss, ev);
  boss_timers(boss, dt);
  const alive = eng.heroes.filter((h) => h.alive);
  if (alive.length === 0) return;
  DBA_TICK(eng, dt, ev, boss);
  boss_walls(eng, boss, alive, ev);
  boss_spikes(eng, boss, alive, dt, ev);
  boss_traps(eng, boss, dt, ev);
  boss_coverage(eng, boss, dt, ev);
  const { target, dist, reach } = boss_chase(eng, boss, alive, dt);
  boss_claw(eng, boss, target, dist, reach, dt, ev);
  boss_breath(eng, boss, dt, ev);
  boss_affix(eng, boss, alive, dt, ev);
  boss_roar(eng, boss, alive, dt, ev);
  boss_special(eng, boss, alive, dt, ev);
  boss_signature(eng, boss, alive, dt, ev);
  boss_companions(eng, boss, dt, ev);
}

// Passo di simulazione della battaglia (riscritto a mano da `step` e `resolveDecision`).
// Ordine di un passo (dt secondi):
//  1. decisioni del giocatore in attesa → il tempo si ferma
//  2. scadenza dei muri
//  3. timer e trasformazioni degli eroi
//  4. nuove decisioni (solo / squadra) proposte al giocatore
//  5. movimento e abilità di ogni eroe vivo
//  6. IA del boss
//  7. spuntoni, trappole, zona di danno, attacchi segnalati
//  8. compagni del boss e degli eroi
//  9. fine battaglia (vittoria / sconfitta)
// L'ordine delle chiamate a Math.random() è identico all'originale (necessario per i test con seme).

const SCARED_BY = new Set(['bossAoE', 'bossGroup', 'special_telegraph', 'spike_spawn', 'trap_spawn', 'coverage_spawn', 'wall_spawn']);
const dist2d = (a, b) => Math.hypot(a.pos.x - b.pos.x, a.pos.z - b.pos.z);

function killHeroIfDead(eng, hero, ev) {
  if (hero.hp <= 0) {
    hero.hp = 0; hero.alive = false; hero._deadAt = eng.time;
    ev.push({ t: 'death', from: { x: hero.pos.x, z: hero.pos.z }, c: '#9ca3af' });
  }
}
/** Danno di un pericolo a terra (spuntone, trappola, attacco segnalato): attacco×mult − difesa/2, ridotto da dmgReduce. */
function hazardDamage(eng, hero, mult) {
  const raw = Math.max(1, Math.round(eng.boss.attack * mult - hero.defense / 2));
  return Math.round(raw * (1 - (hero.dmgReduce || 0)) * (eng.boss.weakT > 0 ? 1 - (eng.boss.weakV || 0.25) : 1));
}
/** Ogni eroe "sceglie" una sola volta (70%) se evitare un pericolo; la scelta è memorizzata sul pericolo. */
function heroSuffersHazard(hazard, hero) {
  hazard._av = hazard._av || {};
  hazard._av[hero.id] ??= Math.random() < 0.7;
  return !hazard._av[hero.id];
}

// ---- decisioni del giocatore -------------------------------------------------------------------
function runResolveDecision(eng, choice) {
  const dec = eng.pendingDecision;
  if (!dec) return;
  const ev = [];
  if (dec.type === 'solo') {
    const hero = eng.heroes.find((h) => h.id === dec.heroId && h.alive);
    if (hero && choice && choice.index != null) {
      const idx = choice.index, ab = hero.abilities[idx];
      if (ab && hero.cd[idx] <= 0) {
        const from = { x: hero.pos.x, z: hero.pos.z }, to = { x: eng.boss.pos.x, z: eng.boss.pos.z };
        const cost = hero.noMana ? 0 : (ab.cost != null ? ab.cost : (cg[ab.kind] || 0));
        if (eng.execAbility(hero, ab, idx, from, to, ev, 1)) {
          hero.mana = Math.max(0, hero.mana - cost);
          if (hf.has(ab.kind)) eng.splashCompanions(to, 3, hero.attack + (hero.atkBuff || 0), ev);
        }
      }
    }
  } else if (dec.type === 'team') {
    const id = choice && choice.id, origin = { x: 0, z: 0 };
    if (id === 'focus') {
      for (const h of eng.heroes) if (h.alive) { h.atkBuff = (h.atkBuff || 0) + Math.round(h.attack * 0.4); h.atkBuffTimer = 6; }
      ev.push({ t: 'buff', kind: 'team_buff', from: origin, color: '#f59e0b', label: 'Assalto Concentrato' });
    } else if (id === 'defense') {
      for (const h of eng.heroes) if (h.alive) { h.dmgReduce = 0.5; h.dmgReduceTimer = 6; }
      ev.push({ t: 'buff', kind: 'team_buff', from: origin, color: '#38bdf8', label: 'Formazione Difensiva' });
    } else if (id === 'heal') {
      for (const h of eng.heroes) if (h.alive) h.hp = Math.min(h.maxHp, h.hp + Math.round(h.maxHp * 0.3));
      ev.push({ t: 'heal', kind: 'heal_ring', from: origin, color: '#22c55e', label: 'Cura di Gruppo' });
    } else if (id === 'fury') {
      for (const h of eng.heroes) if (h.alive) { h.atkSpeedMul = 1.6 * (h.atkSpdBase || 1); h.atkSpeedTimer = 6; }
      ev.push({ t: 'buff', kind: 'team_buff', from: origin, color: '#ef4444', label: 'Furia' });
    }
  }
  eng._pendingEvents = (eng._pendingEvents || []).concat(ev);
  eng.pendingDecision = null;
}

// ---- 3. timer e trasformazioni di un eroe -------------------------------------------------------
function step_heroTimers(eng, g, dt, ev) {
  // schivata manuale (solo eroe controllato dal giocatore)
  if (g._dgReq && !(g._dgCd > 0) && !(g._dgT > 0) && DBA_ISCTL(g.id)) {
    g._dgReq = 0; g._dgCd = 3; g._dgT = 0.38;
    const ax = g.pos.x - eng.boss.pos.x, az = g.pos.z - eng.boss.pos.z, al = Math.hypot(ax, az) || 1;
    g._dgX = (ax / al) * 22; g._dgZ = (az / al) * 22;
    g._dgSave = g.dmgReduce || 0; g._dgSaveT = Math.max(0, (g.dmgReduceTimer || 0) - 0.38);
    g.dmgReduce = 1; g.dmgReduceTimer = 0.6;
    ev.push({ t: 'dodge', kind: 'dodge', who: g.id, from: { x: g.pos.x, z: g.pos.z }, label: 'Schivata', c: '#93c5fd' });
  } else g._dgReq = 0;
  if (g._dgCd > 0) g._dgCd -= dt;
  if (g._dgT > 0) {
    g._dgT -= dt;
    const p = eng.clampToArena(g.pos.x + g._dgX * dt, g.pos.z + g._dgZ * dt);
    g.pos.x = p.x; g.pos.z = p.z;
    if (g._dgT <= 0) { g._dgT = 0; g.dmgReduce = g._dgSave; g.dmgReduceTimer = g._dgSaveT; }
  }
  // ricarichi, buff e rigenerazione
  for (let i = 0; i < g.cd.length; i++) if (g.cd[i] > 0) g.cd[i] -= dt;
  if (g.atkSpeedTimer > 0) { g.atkSpeedTimer -= dt; if (g.atkSpeedTimer <= 0) g.atkSpeedMul = g.atkSpdBase || 1; }
  if (g.dmgReduceTimer > 0) { g.dmgReduceTimer -= dt; if (g.dmgReduceTimer <= 0) g.dmgReduce = 0; }
  if (g.regenTimer > 0) {
    g.regenTimer -= dt;
    if (g.alive) g.hp = Math.min(g.maxHp, g.hp + g.regen * dt);
    if (g.regenTimer <= 0) g.regen = 0;
  }
  if (g.atkBuffTimer > 0) { g.atkBuffTimer -= dt; if (g.atkBuffTimer <= 0) g.atkBuff = 0; }
  // mana: rigenerazione normale, oppure (classi a "energia") ricarica in base al danno fatto al boss
  if (g.manaRegen) {
    const base = g.manaRegen * dt * (g.useEn ? 1 : g.isDps ? 1.3 : 1.2) * (!g.useEn && g.mana < g.maxMana * 0.25 ? 1.5 : 1);
    let fromDamage = 0;
    if (g.useEn) {
      const dealt = Math.max(0, (g._bh == null ? eng.boss.hp : g._bh) - eng.boss.hp);
      g._bh = eng.boss.hp;
      fromDamage = (dealt / Math.max(1, eng.boss.maxHp)) * 250;
    }
    g.mana = Math.min(g.maxMana, g.mana + base + fromDamage);
  }
  if (g.isTank) g.threat += dt * 4;
  if (g.repositionTimer > 0) g.repositionTimer -= dt;
  // trasformazione al livello 10+: l'energia sale di 6/s, a 100 l'eroe diventa più forte (+30% attacco) per 10 s
  if (g.level >= 10) {
    if (g.transformed) {
      g.transformTimer -= dt;
      if (g.transformTimer <= 0) {
        g.transformed = false;
        if (g._transformAtkSnap) g.attack = g._transformAtkSnap;
        g.energy = 0;
        ev.push({ t: 'hero_revert', kind: 'hero_revert', who: g.id, from: { x: g.pos.x, z: g.pos.z }, c: g.color });
      }
    } else {
      g.energy = Math.min(100, (g.energy || 0) + 6 * dt);
      if (g.energy >= 100) {
        g.transformed = true; g.transformTimer = 10; g._transformAtkSnap = g.attack; g.attack = Math.round(g.attack * 1.3);
        if (g.isTank) { g.dmgReduce = Math.max(g.dmgReduce || 0, 0.3); g.dmgReduceTimer = Math.max(g.dmgReduceTimer || 0, 10); }
        ev.push({ t: 'hero_transform', kind: 'hero_transform', who: g.id, from: { x: g.pos.x, z: g.pos.z }, c: g.color });
      }
    }
  }
}

// ---- 4. decisioni proposte al giocatore --------------------------------------------------------
function step_decisions(eng, dt) {
  eng.decisionTimer -= dt;
  if (eng.decisionTimer <= 0 && !eng.pendingDecision && !DBA_ANYCTL()) {
    const alive = eng.heroes.filter((h) => h.alive);
    const hero = eng.controlledHeroId ? eng.heroes.find((h) => h.id === eng.controlledHeroId && h.alive) : alive[Math.floor(Math.random() * alive.length)];
    if (hero) {
      const choices = [];
      for (let i = 0; i < hero.abilities.length; i++) {
        const ab = hero.abilities[i];
        if (!ab) continue;
        const cost = ab.cost != null ? ab.cost : (cg[ab.kind] || 0);
        if (hero.cd[i] <= 0 && hero.mana >= cost) choices.push({ name: ab.name, desc: ab.desc, kind: ab.kind, index: i, cost });
      }
      if (choices.length > 0) eng.pendingDecision = { type: 'solo', heroId: hero.id, heroName: hero.name, heroIcon: hero.icon, heroColor: hero.color, timer: 6, choices };
    }
    eng.decisionTimer = 9 + Math.random() * 4;
  }
  eng.teamDecisionTimer -= dt;
  if (eng.teamDecisionTimer <= 0 && !eng.pendingDecision) {
    if (eng.heroes.filter((h) => h.alive).length > 0) eng.pendingDecision = { type: 'team', choices: V6, timer: 6 };
    eng.teamDecisionTimer = 18 + Math.random() * 6;
  }
}

// ---- 5. movimento di un eroe -------------------------------------------------------------------
/** Se un muro blocca il tiro, l'eroe lo aggira (70% dei casi). Ritorna true se è bloccato. */
function hero_walkAroundWall(eng, g, aim, dt) {
  const wall = eng.findBlockingWall(g.pos.x, g.pos.z, aim.x, aim.z);
  if (!wall) return;
  g._wallPathMap = g._wallPathMap || {};
  if (g._wallPathMap[wall.id] === undefined) g._wallPathMap[wall.id] = Math.random() < 0.7;
  if (g._wallPathMap[wall.id]) {
    const along = { x: Math.cos(wall.angle), z: Math.sin(wall.angle) };          // direzione del muro
    const across = { x: -Math.sin(wall.angle), z: Math.cos(wall.angle) };        // perpendicolare
    const margin = Math.max(wall.length * 0.1, 1.2);
    const side = (g.pos.x - wall.x) * across.x + (g.pos.z - wall.z) * across.z;   // da che lato sta
    const sign = side >= 0 ? 1 : -1, offset = Math.abs(side);
    const endA = { x: wall.x + along.x * wall.halfLen, z: wall.z + along.z * wall.halfLen };
    const endB = { x: wall.x - along.x * wall.halfLen, z: wall.z - along.z * wall.halfLen };
    const nearerIsA = (Math.hypot(g.pos.x - endA.x, g.pos.z - endA.z) < Math.hypot(g.pos.x - endB.x, g.pos.z - endB.z) ? endA : endB) === endA;
    const toEnd = nearerIsA ? along : { x: -along.x, z: -along.z };
    let dx, dz;
    if (offset < margin) { dx = across.x * sign; dz = across.z * sign; }          // prima si scosta dal muro…
    else { dx = toEnd.x; dz = toEnd.z; }                                           // …poi lo costeggia fino all'estremità
    const sp = g.speed * dt * 1.4;
    g.pos.x += dx * sp; g.pos.z += dz * sp; g.moving = true;
  } else g.moving = false;
}

/** Dopo un attacco segnalato l'eroe si riposiziona (avvicina al bersaglio) per 1,5 s. */
function hero_reposition(eng, g, range, dt) {
  let goal = null, stopAt = range;
  if (g.isHealer) { const w = arenaLowestHurt(eng); if (w) { goal = { x: w.pos.x, z: w.pos.z }; stopAt = 4; } }
  if (!goal && eng.boss.alive) goal = { x: eng.boss.pos.x, z: eng.boss.pos.z };
  if (goal) {
    const dx = goal.x - g.pos.x, dz = goal.z - g.pos.z, d = Math.hypot(dx, dz) || 0.001;
    if (d > stopAt) { const sp = g.speed * dt; g.pos.x += (dx / d) * sp; g.pos.z += (dz / d) * sp; g.moving = true; }
    else { g.moving = false; g.repositionTimer = 0; }
  } else { g.moving = false; g.repositionTimer = 0; }
}

/** Movimento normale: schiva i pericoli segnalati, si avvicina al boss, altrimenti gira attorno a lui. */
function hero_moveNormally(eng, g, dx, dz, distBoss, range, dt) {
  let flee = null;
  const dangers = [];
  for (const t of eng.telegraphs) dangers.push({ pos: t.pos, radius: t.radius, key: 'tg_' + Math.round(t.pos.x * 10) + '_' + Math.round(t.pos.z * 10) });
  for (const s of eng.spikes) if (s.delay > 0) dangers.push({ pos: s.pos, radius: s.radius, key: 'sk_' + s.id });
  let inDanger = false;
  for (const d of dangers) {
    if (Math.hypot(g.pos.x - d.pos.x, g.pos.z - d.pos.z) <= d.radius + 1) {
      inDanger = true;
      g._dodgeMap = g._dodgeMap || {};
      if (g._dodgeMap[d.key] === undefined) g._dodgeMap[d.key] = Math.random() < 0.7;
      if (g._dodgeMap[d.key]) {
        const ex = g.pos.x - d.pos.x, ez = g.pos.z - d.pos.z, e = Math.hypot(ex, ez) || 0.001;
        flee = { x: ex / e, z: ez / e };
      }
      break;
    }
  }
  if (!inDanger && g._dodgeMap) g._dodgeMap = {};
  if (flee) {
    const sp = g.speed * dt * 1.5;
    g.pos.x += flee.x * sp; g.pos.z += flee.z * sp; g.moving = true;
  } else if ((g._ap = distBoss > (g._ap ? range * 0.85 : range + 0.35))) {
    const sp = g.speed * dt;
    g.pos.x += (dx / distBoss) * sp; g.pos.z += (dz / distBoss) * sp; g.moving = true;
  } else {
    // a tiro: ogni tanto fa un piccolo giro laterale attorno al boss
    g.wT = (g.wT === undefined ? 2 + Math.random() * 5 : g.wT) - dt;
    if (g.wT <= 0 && !g.wD) {
      const ang = Math.atan2(dz, dx) + (Math.random() < 0.5 ? 1 : -1) * (Math.PI / 2 + (Math.random() - 0.5) * 0.8), len = 2 + Math.random() * 3;
      g.wD = { x: g.pos.x + Math.cos(ang) * len, z: g.pos.z + Math.sin(ang) * len };
    }
    if (g.wD) {
      const wx = g.wD.x - g.pos.x, wz = g.wD.z - g.pos.z, wd = Math.hypot(wx, wz);
      if (wd > 0.25) { const sp = g.speed * dt * 0.6; g.pos.x += (wx / wd) * sp; g.pos.z += (wz / wd) * sp; g.moving = true; }
      else { g.wD = null; g.wT = 3 + Math.random() * 6; g.moving = false; }
    } else g.moving = false;
  }
}

function step_heroAct(eng, g, aliveAtStart, dt, ev) {
  const boss = eng.boss;
  const dx = boss.pos.x - g.pos.x, dz = boss.pos.z - g.pos.z, distBoss = Math.hypot(dx, dz) || 0.001, range = g.baseRange;
  let aim = null;                                       // verso chi guarda: ferito (curatori) o boss
  if (g.isHealer) { const w = arenaLowestHurt(eng); if (w) aim = { x: w.pos.x, z: w.pos.z }; }
  else if (boss.alive) aim = { x: boss.pos.x, z: boss.pos.z };

  let blocked = false;
  if (aim && eng.lineBlocked(g.pos.x, g.pos.z, aim.x, aim.z)) { blocked = true; hero_walkAroundWall(eng, g, aim, dt); }
  else if (g._wallPathMap) g._wallPathMap = {};

  if (blocked) {
    const p = eng.clampToArena(g.pos.x, g.pos.z); g.pos.x = p.x; g.pos.z = p.z;
    return;
  }
  if ((g.repositionTimer || 0) > 0) hero_reposition(eng, g, range, dt);
  else hero_moveNormally(eng, g, dx, dz, distBoss, range, dt);
  // gli eroi non si sovrappongono
  for (const o of aliveAtStart) {
    if (o === g) continue;
    const ox = g.pos.x - o.pos.x, oz = g.pos.z - o.pos.z, d = Math.hypot(ox, oz), min = g.radius + o.radius;
    if (d > 0 && d < min) { const push = Math.min((min - d) / 2, g.speed * dt * 0.5) * 0.5; g.pos.x += (ox / d) * push; g.pos.z += (oz / d) * push; }
  }
  const p = eng.clampToArena(g.pos.x, g.pos.z); g.pos.x = p.x; g.pos.z = p.z;
  eng.useAbility(g, distBoss <= range + 0.6, ev);
}

// ---- 7. pericoli a terra -----------------------------------------------------------------------
function step_hazards(eng, dt, ev) {
  const boss = eng.boss;
  // spuntoni: dopo il ritardo scattano e colpiscono chi non li ha evitati; poi svaniscono dopo 2 s
  for (let i = eng.spikes.length - 1; i >= 0; i--) {
    const s = eng.spikes[i];
    if (s.delay > 0) {
      s.delay -= dt;
      if (s.delay <= 0) {
        s.active = true;
        for (const h of eng.heroes) {
          if (!h.alive) continue;
          if (Math.hypot(h.pos.x - s.pos.x, h.pos.z - s.pos.z) <= s.radius && heroSuffersHazard(s, h)) {
            const dmg = hazardDamage(eng, h, s.damage);
            h.hp -= dmg; DBA_ELEM(eng, h, dmg, ev, s.pos);
            ev.push({ t: 'dmg', who: 'boss', from: s.pos, to: { x: h.pos.x, z: h.pos.z }, kind: 'spike_hit', label: 'Spuntone', val: dmg, c: s.color, target: h.id });
            killHeroIfDead(eng, h, ev);
          }
        }
        ev.push({ t: 'spike_trigger', kind: 'spike_trigger', id: s.id, pos: s.pos, color: s.color, radius: s.radius });
        s.fadeTimer = 2;
      }
    } else if (s.fadeTimer !== undefined) {
      s.fadeTimer -= dt;
      if (s.fadeTimer <= 0) { ev.push({ t: 'spike_remove', kind: 'spike_remove', id: s.id }); eng.spikes.splice(i, 1); }
    }
  }
  // trappole: scattano la prima volta che un eroe (non fortunato) le tocca
  for (let i = eng.traps.length - 1; i >= 0; i--) {
    const t = eng.traps[i];
    for (const h of eng.heroes) {
      if (!h.alive) continue;
      if (Math.hypot(h.pos.x - t.pos.x, h.pos.z - t.pos.z) <= t.radius && heroSuffersHazard(t, h)) {
        const dmg = hazardDamage(eng, h, t.damage);
        h.hp -= dmg; DBA_ELEM(eng, h, dmg, ev, t.pos);
        ev.push({ t: 'dmg', who: 'boss', from: t.pos, to: { x: h.pos.x, z: h.pos.z }, kind: 'trap_hit', label: 'Trappola', val: dmg, c: t.color, target: h.id });
        killHeroIfDead(eng, h, ev);
        ev.push({ t: 'trap_trigger', kind: 'trap_trigger', id: t.id, pos: t.pos, color: t.color });
        eng.traps.splice(i, 1);
        break;
      }
    }
  }
  // zona di danno nel tempo (nessun controllo morte qui: lo fa il resto del passo)
  if (eng.coverageArea) {
    for (const h of eng.heroes) {
      if (!h.alive) continue;
      if (Math.hypot(h.pos.x - eng.coverageArea.pos.x, h.pos.z - eng.coverageArea.pos.z) <= eng.coverageArea.radius) h.hp -= eng.coverageArea.dot * dt;
    }
  }
  // attacchi speciali segnalati: dopo il preavviso colpiscono l'area
  for (let i = eng.telegraphs.length - 1; i >= 0; i--) {
    const t = eng.telegraphs[i];
    t.delay -= dt;
    if (t.delay <= 0) {
      for (const h of eng.heroes) {
        if (!h.alive) continue;
        if (Math.hypot(h.pos.x - t.pos.x, h.pos.z - t.pos.z) <= t.radius && heroSuffersHazard(t, h)) {
          const dmg = hazardDamage(eng, h, t.damage);
          h.hp -= dmg; DBA_ELEM(eng, h, dmg, ev, t.pos);
          ev.push({ t: 'dmg', who: 'boss', from: { x: t.pos.x, z: t.pos.z }, to: { x: h.pos.x, z: h.pos.z }, kind: 'special_hit', label: t.name, val: dmg, c: t.color, target: h.id });
          killHeroIfDead(eng, h, ev);
        }
      }
      if (t.heal && boss.alive) boss.hp = Math.min(boss.maxHp, boss.hp + Math.round(boss.maxHp * t.heal));
      eng.splashHeroCompanions(t.pos, t.radius, boss.attack * t.damage, ev);
      ev.push({ t: 'special_trigger', kind: 'special_trigger', pos: { x: t.pos.x, z: t.pos.z }, radius: t.radius, color: t.color, name: t.name, type: t.type });
      eng.telegraphs.splice(i, 1);
    }
  }
}

// ---- 8. compagni --------------------------------------------------------------------------------
function step_bossCompanions(eng, dt, ev) {
  for (let i = eng.companions.length - 1; i >= 0; i--) {
    const c = eng.companions[i];
    if (!c.alive) { if (eng.time - c._deadAt > 2) eng.companions.splice(i, 1); continue; }
    let target = null, best = Infinity;
    for (const h of eng.heroes) {
      if (!h.alive) continue;
      const d = Math.hypot(h.pos.x - c.pos.x, h.pos.z - c.pos.z);
      if (d < best) { best = d; target = h; }
    }
    const tanks = eng.heroes.filter((h) => h.alive && h.isTank);
    if (tanks.length > 0 && Math.random() < 0.7) target = tanks[Math.floor(Math.random() * tanks.length)];   // 70%: attacca un tank
    if (!target) continue;
    const dx = target.pos.x - c.pos.x, dz = target.pos.z - c.pos.z, d = Math.hypot(dx, dz) || 0.001;
    if (d > c.range) { const sp = c.speed * dt; c.pos.x += (dx / d) * sp; c.pos.z += (dz / d) * sp; }
    const p = eng.clampToArena(c.pos.x, c.pos.z); c.pos.x = p.x; c.pos.z = p.z;
    if (c.attackCd > 0) c.attackCd -= dt;
    if (c.attackCd <= 0 && d <= c.range + 0.5) {
      const raw = Math.max(1, Math.round(c.attack - target.defense / 2)), dmg = Math.round(raw * (1 - (target.dmgReduce || 0)));
      target.hp -= dmg;
      ev.push({ t: 'dmg', who: c.id, from: { x: c.pos.x, z: c.pos.z }, to: { x: target.pos.x, z: target.pos.z }, kind: 'companionAttack', label: 'Morso', val: dmg, c: c.bossColor || '#ff6b6b', target: target.id });
      killHeroIfDead(eng, target, ev);
      c.attackCd = 1.5;
    }
  }
}

function step_heroCompanions(eng, dt, ev) {
  const boss = eng.boss;
  for (let i = eng.heroCompanions.length - 1; i >= 0; i--) {
    const c = eng.heroCompanions[i];
    if (!c.alive) { if (eng.time - c._deadAt > 2) eng.heroCompanions.splice(i, 1); continue; }
    if (!boss.alive) continue;
    const owner = eng.heroes.find((h) => h.id === c.ownerId);
    const dx = boss.pos.x - c.pos.x, dz = boss.pos.z - c.pos.z, d = Math.hypot(dx, dz) || 0.001;
    if (d > c.range) { const sp = c.speed * dt; c.pos.x += (dx / d) * sp; c.pos.z += (dz / d) * sp; }
    const p = eng.clampToArena(c.pos.x, c.pos.z); c.pos.x = p.x; c.pos.z = p.z;
    if (c.attackCd > 0) c.attackCd -= dt;
    const power = owner ? owner.attack + (owner.atkBuff || 0) : 10;
    if (c.type === 'demon4') {                    // demone maggiore: soffio di fuoco ×1,5 ogni 3,5 s
      if (c.fireBreathCd > 0) c.fireBreathCd -= dt;
      if (c.fireBreathCd <= 0 && d <= c.range && boss.alive) {
        const dmg = Math.max(1, Math.round(power * c.dmgMult * 1.5 - boss.defense / 2));
        boss.hp -= dmg;
        ev.push({ t: 'dmg', who: c.id, from: { x: c.pos.x, z: c.pos.z }, to: { x: boss.pos.x, z: boss.pos.z }, kind: 'fire_breath', label: 'Soffio di Fuoco', val: dmg, c: '#ff6600', compType: c.type, target: boss.id });
        c.fireBreathCd = 3.5;
      }
    }
    if (c.attackCd <= 0 && d <= c.range + 0.5 && boss.alive && c.type !== 'demon4') {
      const dmg = Math.max(1, Math.round(power * c.dmgMult - boss.defense / 2));
      boss.hp -= dmg;
      const label = c.type === 'hawk' ? 'Artiglio' : c.type === 'wolf' ? 'Morso' : c.type === 'demon2' ? 'Artiglio' : 'Dardo';
      ev.push({ t: 'dmg', who: c.id, from: { x: c.pos.x, z: c.pos.z }, to: { x: boss.pos.x, z: boss.pos.z }, kind: 'petAttack', label, val: dmg, c: c.color, compType: c.type, target: boss.id });
      c.attackCd = c.type === 'hawk' ? 0.8 : 1;
    }
  }
}

// ---- passo completo ----------------------------------------------------------------------------
function runStep(eng, dt) {
  eng._ls = performance.now();
  if (eng.over) return [];
  if (eng.pendingDecision) {                      // in attesa del giocatore: il tempo non scorre
    eng.pendingDecision.timer -= dt;
    if (eng.pendingDecision.timer <= 0) eng.resolveDecision(null);
    return [];
  }
  eng.time += dt;
  const ev = [];
  if (eng._pendingEvents) { for (const e of eng._pendingEvents) ev.push(e); eng._pendingEvents = null; }
  for (let i = eng.walls.length - 1; i >= 0; i--) {          // scadenza muri
    const w = eng.walls[i];
    w.duration -= dt;
    if (w.duration <= 0) { ev.push({ t: 'wall_remove', kind: 'wall_remove', id: w.id }); eng.walls.splice(i, 1); }
  }
  const aliveAtStart = eng.heroes.filter((h) => h.alive);
  for (const g of eng.heroes) if (g.alive) step_heroTimers(eng, g, dt, ev);
  step_decisions(eng, dt);
  for (const g of aliveAtStart) step_heroAct(eng, g, aliveAtStart, dt, ev);
  for (const g of aliveAtStart) { const p = eng.collideWalls(g.pos.x, g.pos.z, g.radius); g.pos.x = p.x; g.pos.z = p.z; }

  eng.bossAI(dt, ev);
  if (ev.some((e) => e.kind && SCARED_BY.has(e.kind))) for (const h of eng.heroes) if (h.alive) h.repositionTimer = 1.5;
  const bp = eng.collideWalls(eng.boss.pos.x, eng.boss.pos.z, eng.boss.radius);
  eng.boss.pos.x = bp.x; eng.boss.pos.z = bp.z;

  step_hazards(eng, dt, ev);
  step_bossCompanions(eng, dt, ev);
  step_heroCompanions(eng, dt, ev);

  // fine battaglia
  if (eng.boss.hp <= 0 && !DBA_REVIVE(eng, ev)) {
    eng.boss.hp = 0; eng.boss.alive = false;
    for (const c of eng.companions) if (c.alive) { c.alive = false; c._deadAt = eng.time; }
    for (const c of eng.heroCompanions) if (c.alive) { c.alive = false; c._deadAt = 0; }
    eng.spikes = []; eng.traps = []; eng.coverageArea = null;
    eng.over = true; eng.outcome = 'victory';
  }
  if (aliveAtStart.length === 0 && eng.heroes.every((h) => !h.alive)) { eng.over = true; eng.outcome = 'defeat'; }
  if (window.__dbaEv) window.__dbaEv(eng, ev);
  return ev;
}

// Creazione di una battaglia (riscritta a mano da `q6`): eroi, boss e oggetto "motore" con i suoi metodi.
// Dipende ancora dai vecchi moduli compressi: Kc (classi), Ep (abilità per classe/livello), DBA_FORM (formazione),
// DBA_RAGE (classi a rabbia), DBA_TALAPPLY (talenti), e2 (forma arena), B6 (rianimazioni per difficoltà), DBA_SYN (sinergie).

const ARENA_RADIUS = 16;

/** Dati di battaglia di un eroe: partono dalla scheda del giocatore e aggiungono ciò che serve in combattimento. */
function makeBattleHero(sheet, index, formation) {
  const cls = Kc[sheet.classKey], spot = formation(index, cls.arch), abilities = Ep(sheet.classKey, sheet.level);
  const rage = DBA_RAGE.has(sheet.classKey);
  return {
    ...sheet,
    mana: rage ? 40 : sheet.maxMana, maxMana: rage ? 100 : sheet.maxMana, manaRegen: rage ? 0.3 : (sheet.manaRegen || 2.5),
    useEn: rage, noMana: !!cls.noMana,
    pos: { x: spot.x, z: spot.z },
    baseRange: cls.range, speed: cls.speed, radius: cls.radius, color: cls.color, theme: cls.theme, weapon: cls.weapon, helmet: cls.helmet,
    form: cls.arch,
    isHealer: cls.arch === 'healer', isTank: cls.arch === 'tank',
    isDps: cls.arch === 'melee' || cls.arch === 'ranged',
    isMelee: cls.arch === 'melee' || cls.arch === 'tank',
    isRanged: cls.arch === 'ranged' || cls.arch === 'healer',
    abilities: abilities.map((a) => ({ ...a })),
    cd: abilities.map(() => 2 + Math.random() * 2),               // le abilità partono con 2-4 s di ricarico
    atkSpdBase: 1 + (sheet.atkSpd || 0) / 100, atkSpeedMul: 1 + (sheet.atkSpd || 0) / 100, atkSpeedTimer: 0,
    dmgReduce: 0, dmgReduceTimer: 0,
    threat: cls.arch === 'tank' ? 400 : 0,                        // il tank parte con minaccia alta
    alive: true, moving: false, _deadAt: 0,
  };
}

/** Il boss parte dal modello del gioco e aggiunge timer, bersaglio e tre attacchi speciali di base. */
function makeBattleBoss(template, arena) {
  return {
    ...template,
    pos: { x: 0, z: 0 }, radius: 1.6,
    attackCd: 1.5, aoeCd: 7, groupCd: 8, specialCd: 5, companionCd: 6, wallCd: 12, spikeCd: 6, trapCd: 10, coverageCd: 25,
    forcedTarget: null, forcedTimer: 0, dot: 0, dotTimer: 0, targetId: null, alive: true,
    specialAbilities: [
      ...(template.specialAbilities || []),
      { name: 'Devastazione', size: 0.5, damage: 0.5, radius: arena * 0.5, color: '#f87171' },
      { name: 'Detonazione', size: 0.25, damage: 0.85, radius: arena * 0.25, color: '#fb923c' },
      { name: 'Mira Devastante', size: 0.15, damage: 1.3, radius: arena * 0.15, color: '#ef4444' },
    ],
  };
}

/** Compagni iniziali: l'arciere ha un falco, il cacciatore un lupo. */
function makeStartingCompanions(heroes) {
  const companions = [], events = [];
  for (const h of heroes) {
    let kind = null, power = 0;
    if (h.classKey === 'arciere') { kind = 'hawk'; power = 0.2; }
    else if (h.classKey === 'cacciatore') { kind = 'wolf'; power = 0.2; }
    if (kind) {
      const c = makeHeroCompanion(h, kind, power);
      companions.push(c);
      events.push({ t: 'heroCompanion_spawn', kind: 'heroCompanion_spawn', id: c.id, ownerId: h.id, pos: { x: c.pos.x, z: c.pos.z }, color: h.color, type: kind });
    }
  }
  return { companions, events };
}

/** Crea il motore di una battaglia: `party` = schede eroe, `bossTemplate` = boss del gioco. */
function createBattle(party, bossTemplate) {
  const shape = bossTemplate.arenaShape || 'circle';
  const verts = e2(shape, ARENA_RADIUS);
  const formation = DBA_FORM(party.length);
  const heroes = party.map((sheet, i) => makeBattleHero(sheet, i, formation));
  DBA_TALAPPLY(heroes);
  const boss = makeBattleBoss(bossTemplate, ARENA_RADIUS);
  const start = makeStartingCompanions(heroes);

  return {
    // stato
    heroes, boss, companions: [], heroCompanions: start.companions,
    telegraphs: [], walls: [], spikes: [], traps: [], coverageArea: null,
    time: 0, over: false, outcome: null,
    arenaRadius: ARENA_RADIUS, arenaShape: shape, arenaVerts: verts,
    _pendingEvents: start.events,
    reviveUses: B6[bossTemplate.difficulty] || 1,
    controlledHeroId: null, pendingDecision: null, decisionTimer: 8, teamDecisionTimer: 18,

    // geometria e bersagli (arena.helpers.js)
    clampToArena(x, z) { return arenaClamp(this, x, z); },
    lineBlocked(x1, z1, x2, z2) { return arenaBlockingWall(this, x1, z1, x2, z2) !== null; },
    findBlockingWall(x1, z1, x2, z2) { return arenaBlockingWall(this, x1, z1, x2, z2); },
    collideWalls(x, z, r) { return arenaCollideWalls(this, x, z, r); },
    splashCompanions(center, r, dmg, ev) { arenaSplashCompanions(this, center, r, dmg, ev); },
    splashHeroCompanions(center, r, dmg, ev) { arenaSplashHeroCompanions(this, center, r, dmg, ev); },
    lowestHurt() { return arenaLowestHurt(this); },
    lowestDead() { return arenaLowestDead(this); },
    anyHurt() { return arenaAnyHurt(this); },
    healAll(n) { arenaHealAll(this, n); },

    // abilità degli eroi (abilities.js, abilityUse.js)
    execAbility(hero, ab, idx, from, to, ev, cdMul) {
      const b = this.boss;
      const before = { dot0: b.dotTimer > 0, tn0: !!(b.forcedTimer > 0 && b.forcedTarget), sh0: this.heroes.some((h) => h.alive && h.dmgReduceTimer > 0 && h.dmgReduce > 0), hp0: b.hp };
      const ok = this.execAbility0(hero, ab, idx, from, to, ev, cdMul);
      if (ok) { try { DBA_SYN(this, hero, ab, before, ev); } catch (e) { /* sinergie: errori ignorati come nell'originale */ } }
      return ok;
    },
    execAbility0(hero, ab, idx, from, to, ev, cdMul) { return runHeroAbility(this, hero, ab, idx, from, to, ev, cdMul); },
    useAbility(hero, inRange, ev) { useHeroAbility(this, hero, inRange, ev); },

    // boss e passo di simulazione (bossAI.js, step.js)
    bossAI(dt, ev) { runBossAI(this, dt, ev); },
    resolveDecision(choice) { runResolveDecision(this, choice); },
    step(dt) { return runStep(this, dt); },
  };
}

// Talenti e sinergie (riscritti a mano da DBA_TAL / DBA_TALFIND / DBA_TALAPPLY / DBA_SYN).
// I dati dei talenti stanno in src/data/talents.json: 4 archetipi × 3 livelli × 2 scelte.
// Ogni talento ha un oggetto `m` con i modificatori: hp, atk, def (valore), spd, mr (mana), thr (minaccia), syn (combo).

var DBA_TAL = DATA.talents;                  // var: il vecchio codice lo cerca anche come window.DBA_TAL
window.DBA_TAL = DBA_TAL;

/** Cerca un talento per id ("t1a", "m2b"…). */
function DBA_TALFIND(id) {
  for (const arch in DBA_TAL) for (const tier of DBA_TAL[arch]) for (const t of tier) if (t.id === id) return t;
  return null;
}
window.DBA_TALFIND = DBA_TALFIND;

/** Applica i talenti scelti (h.talents = lista di id) alle statistiche di battaglia di ogni eroe. */
function DBA_TALAPPLY(heroes) {
  for (const h of heroes) {
    const picked = h.talents;
    if (!picked || !picked.length) continue;
    const sum = { hp: 0, atk: 0, def: 0, spd: 0, mr: 0, thr: 0, syn: 0 };
    for (const id of picked) {
      const t = DBA_TALFIND(id);
      if (!t) continue;
      for (const k in sum) sum[k] += t.m[k] || 0;
    }
    if (sum.hp) { const r = 1 + sum.hp; h.maxHp = Math.round(h.maxHp * r); h.hp = Math.min(h.maxHp, Math.round(h.hp * r)); }
    if (sum.atk) h.attack = Math.round(h.attack * (1 + sum.atk));
    if (sum.def) h.defense = (h.defense || 0) + sum.def;
    if (sum.spd) { h.atkSpdBase *= 1 + sum.spd; h.atkSpeedMul = h.atkSpdBase; }
    if (sum.mr) h.manaRegen = (h.manaRegen || 2.5) * (1 + sum.mr);
    if (sum.thr) h.threat = (h.threat || 0) * (1 + sum.thr) + sum.thr * 100;
    if (sum.syn) h.synMul = 1 + sum.syn;
  }
}

/**
 * Sinergie ("combo") dopo un'abilità riuscita di `hero`:
 *  - attacco subito dopo un veleno/DoT sul boss → Detonazione (+35% del danno appena fatto), max ogni 2,2 s;
 *  - tiro a distanza mentre il boss è provocato → Fuoco di Copertura (+25%), stessa pausa;
 *  - cura mentre qualcuno ha uno scudo → Cura Protetta (cura di gruppo), max ogni 3 s.
 * `before` = fotografia presa prima dell'abilità (dot0, tn0, sh0, hp0). Il talento "syn" amplifica l'effetto.
 */
function DBA_SYN(eng, hero, ab, before, ev) {
  const boss = eng.boss, dealt = Math.max(0, before.hp0 - boss.hp);
  const DAMAGE = { strike: 1, big_strike: 1, aoe: 1, chain: 1, shot: 1, big_shot: 1, taunt_strike: 1 };
  const RANGED = { shot: 1, big_shot: 1, chain: 1, aoe: 1 };
  const HEAL = { heal_single: 1, heal_aoe: 1, regen: 1 };
  const mul = hero.synMul || 1, from = { x: hero.pos.x, z: hero.pos.z }, to = { x: boss.pos.x, z: boss.pos.z };
  const explode = (label, extra, color) => {
    boss.hp -= extra;
    ev.push({ t: 'dmg', who: hero.id, from, to, kind: 'explosion', label, val: extra, c: color });
  };
  if (DAMAGE[ab.kind] && dealt > 0 && eng.time - (boss._sy1 || -9) > 2.2) {
    if (before.dot0) { boss._sy1 = eng.time; explode('Combo: Detonazione', Math.round(dealt * 0.35 * mul), '#fb923c'); }
    else if (before.tn0 && RANGED[ab.kind]) { boss._sy1 = eng.time; explode('Combo: Fuoco di Copertura', Math.round(dealt * 0.25 * mul), '#38bdf8'); }
  }
  if (HEAL[ab.kind] && before.sh0 && eng.time - (boss._sy2 || -9) > 3) {
    boss._sy2 = eng.time;
    eng.healAll(Math.round(hero.attack * 0.8 * mul) + 6);
    ev.push({ t: 'heal', who: hero.id, from, to: from, kind: 'heal_ring', label: 'Combo: Cura Protetta', c: '#34d399' });
  }
}

// Formazione iniziale degli eroi nell'arena (riscritta a mano da DBA_FORM).
// Ad ogni battaglia si sceglie a caso uno di 6 schemi e un'angolazione; poi ogni eroe prende il suo posto
// in base al ruolo (tank vicino al boss, curatori lontano).
// L'ordine delle chiamate a Math.random() è identico all'originale.

const FORMATION_RADIUS = { tank: 4.5, melee: 6, ranged: 8.5, healer: 10 };   // distanza dal centro per ruolo

/** Ritorna una funzione (indice, ruolo) → posizione {x,z}. n = numero di eroi. */
function DBA_FORM(n) {
  const baseAngle = Math.random() * Math.PI * 2;
  const pattern = Math.floor(Math.random() * 6);
  const dirX = Math.cos(baseAngle), dirZ = Math.sin(baseAngle);
  return function (index, role) {
    const radius = (FORMATION_RADIUS[role] || 7) + (Math.random() - 0.5) * 1.2;
    const t = (index + 0.5) / Math.max(n, 1) - 0.5;          // posizione relativa nel gruppo, da -0,5 a +0,5
    let x, z;
    if (pattern === 0) {            // arco attorno al boss
      const a = baseAngle + t * 2.2; x = Math.cos(a) * radius; z = Math.sin(a) * radius;
    } else if (pattern === 1) {     // linea dritta
      const p = t * n * 2.2, d = radius * 0.8; x = dirX * d - dirZ * p; z = dirZ * d + dirX * p;
    } else if (pattern === 2) {     // V (le ali si allontanano)
      const p = t * n * 2.4, d = radius * 0.6 + Math.abs(t) * 10; x = dirX * d - dirZ * p; z = dirZ * d + dirX * p;
    } else if (pattern === 3) {     // cerchio completo
      const a = baseAngle + (index * Math.PI * 2) / Math.max(n, 1); x = Math.cos(a) * radius; z = Math.sin(a) * radius;
    } else if (pattern === 4) {     // due gruppi ai lati
      const a = baseAngle + (index % 2 ? 1 : -1) * (1.2 + Math.random() * 0.4) + (Math.random() - 0.5) * 0.5; x = Math.cos(a) * radius; z = Math.sin(a) * radius;
    } else {                        // sparsi
      const a = Math.random() * Math.PI * 2, w = 4 + Math.random() * 5; x = Math.cos(a) * w; z = Math.sin(a) * w;
    }
    const len = Math.hypot(x, z) || 1, clamped = Math.min(14, Math.max(3.4, len));   // tra 3,4 e 14 dal centro
    return { x: (x / len) * clamped, z: (z / len) * clamped };
  };
}

// Forme dell'arena e geometria (riscritte a mano da e2, j6, H6, DM).
// L'arena è un cerchio di raggio R oppure un poligono (quadrato, pentagono, esagono, ottagono) o una forma casuale irregolare.

/** Vertici del poligono dell'arena, o null se è un cerchio. */
function e2(shape, radius) {
  if (shape === 'circle') return null;
  if (shape === 'random') {                               // 5-8 vertici a distanza irregolare (72%-100% del raggio)
    const n = 5 + Math.floor(Math.random() * 4), verts = [];
    for (let i = 0; i < n; i++) {
      const ang = (i / n) * Math.PI * 2, r = radius * (0.72 + Math.random() * 0.28);
      verts.push({ x: Math.cos(ang) * r, z: Math.sin(ang) * r });
    }
    return verts;
  }
  const sides = { square: 4, pentagon: 5, hexagon: 6, octagon: 8 }[shape];
  if (!sides) return null;
  const verts = [];
  for (let i = 0; i < sides; i++) {
    const ang = (i / sides) * Math.PI * 2 - Math.PI / 2;  // un vertice in alto
    verts.push({ x: Math.cos(ang) * radius, z: Math.sin(ang) * radius });
  }
  return verts;
}

/** Il punto (x,z) è dentro il poligono? (regola pari-dispari) */
function j6(x, z, verts) {
  let inside = false;
  for (let i = 0, j = verts.length - 1; i < verts.length; j = i++) {
    const xi = verts[i].x, zi = verts[i].z, xj = verts[j].x, zj = verts[j].z;
    if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}

/** Riporta un punto dentro il poligono: se è fuori va sul lato più vicino, poi rientra dell'1,5%. */
function H6(x, z, verts) {
  if (j6(x, z, verts)) return { x, z };
  let nearest = { x, z }, best = Infinity;
  for (let i = 0, j = verts.length - 1; i < verts.length; j = i++) {
    const a = verts[j], b = verts[i], sx = b.x - a.x, sz = b.z - a.z, len2 = sx * sx + sz * sz || 1;
    const t = Math.max(0, Math.min(1, ((x - a.x) * sx + (z - a.z) * sz) / len2));
    const px = a.x + t * sx, pz = a.z + t * sz, d = Math.hypot(x - px, z - pz);
    if (d < best) { best = d; nearest = { x: px, z: pz }; }
  }
  return { x: nearest.x * 0.985, z: nearest.z * 0.985 };
}

/** I segmenti (x1,z1)-(x2,z2) e (x3,z3)-(x4,z4) si incrociano? */
function DM(x1, z1, x2, z2, x3, z3, x4, z4) {
  const den = (x2 - x1) * (z4 - z3) - (z2 - z1) * (x4 - x3);
  if (den === 0) return false;                             // paralleli
  const u = ((x3 - x1) * (z4 - z3) - (z3 - z1) * (x4 - x3)) / den;
  const v = ((x3 - x1) * (z2 - z1) - (z3 - z1) * (x2 - x1)) / den;
  return u >= 0 && u <= 1 && v >= 0 && v <= 1;
}

// Boss: tabella dei boss, difficoltà e creazione (riscritte a mano da $v, JR, NM, IM, W6, $6, ug).
// Dati in src/data: bosses.json (32 boss), bossLocations.json (luogo ed elemento), arenaShapes.json,
// difficulties.json (grado + moltiplicatore + probabilità), difficultyLabels.json.

const $v = DATA.bosses;                 // i boss, nell'ordine dei biomi (indice = bioma)
const JR = DATA.bossLocations;          // luogo ed elemento per chiave di boss
const NM = DATA.arenaShapes;            // forme d'arena possibili
const IM = DATA.difficulties;           // gradi: bianco, blu, viola, oro, rosso
const W6 = DATA.difficultyLabels;       // etichette: Facile … Impossibile

/** Grado di difficoltà del boss: forzato (window.__bossDiff) oppure estratto a sorte secondo `chance`. */
function $6() {
  if (window.__bossDiff) { const forced = IM.find((d) => d.key === window.__bossDiff); if (forced) return forced; }
  const roll = Math.random();
  let acc = 0;
  for (const d of IM) { acc += d.chance; if (roll < acc) return d; }
  return IM[0];
}

/**
 * Crea un boss.  n = bioma (1…), e = tier (0…4), lv = livello del party.
 *  vita    = (350 + 150·n) · (1 + 0,15·e) · 2 · moltiplicatore del grado · (1 + 0,16·(lv−1))
 *  attacco = (16 + n)       · (1 + 0,10·e)     ·   moltiplicatore del grado · (1 + 0,30·(lv−1))
 *  difesa  = 6 + 1,5·e (arrotondata per difetto)
 * (i fattori 0,16 e 0,30 si possono cambiare da console con window.__bhk e window.__bak)
 */
function ug(n, e = 0, lv = 1) {
  const biome = Math.max(1, n || 1);
  const base = $v[e % $v.length];
  const diff = $6();
  const levelsAbove1 = Math.max(1, lv || 1) - 1;
  const maxHp = Math.round((350 + biome * 150) * (1 + e * 0.15) * 2 * diff.statMul * (1 + levelsAbove1 * (window.__bhk || 0.16)));
  const attack = Math.round((16 + biome * 1) * (1 + e * 0.1) * diff.statMul * (1 + levelsAbove1 * (window.__bak || 0.3)));
  const defense = 6 + Math.floor(e * 1.5);
  const shape = NM[Math.floor(Math.random() * NM.length)];
  const place = JR[base.key] || {};
  return {
    ...base,
    maxHp, hp: maxHp, attack, defense, alive: true, tier: e,
    difficulty: diff.key, difficultyLabel: W6[diff.key] || diff.name, difficultyName: diff.name,
    difficultyIcon: diff.icon, difficultyColor: diff.color, difficultyMul: diff.statMul,
    color: base.bossColor, arena: base.arena, arenaShape: shape,
    location: place.location, element: place.element,
    name: base.name, title: base.title, icon: base.icon,
    specialAbilities: base.specialAbilities || [],
    requiredLevel: base.requiredLevel || 1,
    companionChance: base.companionChance || 0.1,
    companionName: base.companionName || 'Companion',
  };
}

// Effetti elementali dei boss, danni dei pericoli e rinascita (riscritti a mano da DBA_HURT, DBA_ELEM, DBA_TICK, DBA_REVIVE).
// Ogni boss ha un "tema" (fuoco, ghiaccio, ombra…) che colpisce gli eroi con un effetto di stato.
// Stati: burn (danno nel tempo), slow, stun, root (immobile), blind (−35% attacco), curse (−20% attacco).

const DBA_STY = DATA.elementStyles;                                // tema del boss → stile ('lava', 'ice', 'shade'…)
const DBA_RAGE = new Set(DATA.rageClasses);                        // classi che usano "energia" invece del mana
window.DBA_RAGE = DBA_RAGE;

/** Danno diretto a un eroe da un effetto speciale del boss (ridotto da dmgReduce, minimo 1). */
function DBA_HURT(eng, hero, dmg, ev, label, from) {
  dmg = Math.max(1, Math.round(dmg * (1 - (hero.dmgReduce || 0))));
  hero.hp -= dmg;
  ev.push({ t: 'dmg', who: 'boss', from: { x: from.x, z: from.z }, to: { x: hero.pos.x, z: hero.pos.z }, kind: 'special_hit', label, val: dmg, c: eng.boss.color, target: hero.id });
  if (hero.hp <= 0) {
    hero.hp = 0; hero.alive = false; hero._deadAt = eng.time;
    ev.push({ t: 'death', from: { x: hero.pos.x, z: hero.pos.z }, c: '#9ca3af' });
  }
}

/** Effetto di stato applicato quando un pericolo del boss ferisce `hero` (dmg = danno subito, pos = origine). */
function DBA_ELEM(eng, hero, dmg, ev, pos) {
  const boss = eng.boss, theme = boss.theme, style = DBA_STY[theme] || 'stone';
  const states = hero._st || (hero._st = {});
  const roll = Math.random();
  /** applica/rinnova uno stato (`secs` secondi); `value` = danno per tick, `label` = nome del danno */
  const add = (state, secs, value, label) => {
    states[state] = Math.max(states[state] || 0, secs);
    if (value !== undefined) hero['_v' + state] = value;
    if (label) hero._dl = label;
  };
  /** spinge l'eroe: sign = +1 verso l'esterno, −1 verso l'origine, di al massimo `dist` */
  const push = (sign, dist) => {
    let dx = hero.pos.x - pos.x, dz = hero.pos.z - pos.z, d = Math.hypot(dx, dz) || 0.01;
    if (d < 0.05) { dx = Math.random() - 0.5; dz = Math.random() - 0.5; d = Math.hypot(dx, dz) || 0.5; }
    const k = (sign * Math.min(dist, sign < 0 ? d : dist)) / d;
    const p = eng.clampToArena(hero.pos.x + dx * k, hero.pos.z + dz * k);
    hero.pos.x = p.x; hero.pos.z = p.z;
  };
  const burnDmg = (mult) => Math.max(1, Math.round(boss.attack * mult));

  if (style === 'lava') add('burn', 4, burnDmg(0.12), theme === 'fire' || theme === 'phoenix' ? 'Bruciatura' : 'Magma');
  else if (style === 'horn') { add('burn', 4, burnDmg(0.1), 'Sanguinamento'); boss.hp = Math.min(boss.maxHp, boss.hp + Math.round(dmg * 0.3)); }   // il boss si cura
  else if (style === 'ice') { add('slow', 4); if (roll < 0.2) add('stun', 1.2); }
  else if (style === 'crys') { add('slow', 3); add('blind', 3); }
  else if (style === 'thorn') { if (theme === 'venom') add('burn', 5, burnDmg(0.08), 'Veleno'); else add('root', 2.5); }
  else if (style === 'shade') { push(-1, 2.5); add('blind', 4); if (theme === 'chaos' && roll < 0.5) add('stun', 1); }   // attira verso l'origine
  else if (style === 'bone') add('curse', 5);
  else if (style === 'stone') { add('slow', 3); add('blind', 3); }
  else if (style === 'water') { push(1, 3); add('slow', 3); }                                                          // spinge lontano
  else if (style === 'bolt') {
    if (theme === 'light' || theme === 'celestial') add('blind', 3); else add('stun', 0.8);
    const near = eng.heroes.filter((x) => x !== hero && x.alive && Math.hypot(x.pos.x - hero.pos.x, x.pos.z - hero.pos.z) < 4.5).slice(0, 2);
    for (const o of near) DBA_HURT(eng, o, Math.max(1, dmg * 0.4), ev, 'Fulmine a catena', hero.pos);                 // salta su 2 vicini
  }
}

/** Fa scorrere gli stati degli eroi: aggiorna velocità/attacco e applica il danno da bruciatura (1 al secondo). */
function DBA_TICK(eng, dt, ev) {
  for (const h of eng.heroes) {
    const states = h._st;
    if (!states) continue;
    if (!h.alive) { h._st = null; if (h._bs !== undefined) { h.speed = h._bs; h.attack = h._ba; h._bs = undefined; } continue; }
    if (h._bs === undefined) { h._bs = h.speed; h._ba = h.attack; }                    // ricorda i valori normali
    let any = false;
    for (const k in states) if (states[k] > 0) { states[k] -= dt; any = true; }
    let speed = h._bs, atk = h._ba;
    if (states.slow > 0) speed *= 0.5;
    if (states.root > 0 || states.stun > 0) speed = 0;
    if (states.stun > 0 && h.cd) for (let q = 0; q < h.cd.length; q++) h.cd[q] = Math.max(h.cd[q], 0.25);   // stordito: niente abilità
    if (states.blind > 0) atk *= 0.65;
    if (states.curse > 0) atk *= 0.8;
    h.speed = speed; h.attack = Math.round(atk);
    if (states.burn > 0) {
      h._bt = (h._bt || 0) + dt;
      if (h._bt >= 1) { h._bt = 0; DBA_HURT(eng, h, h._vburn || 2, ev, h._dl || 'Bruciatura', h.pos); }
    }
    if (!any) { h._st = null; h.speed = h._bs; h.attack = h._ba; h._bs = undefined; }
  }
}

/** La Fenice rinasce una volta al 35% di vita con +20% attacco. Ritorna true se è rinata. */
function DBA_REVIVE(eng, ev) {
  const b = eng.boss;
  if (b.theme === 'phoenix' && !b._rev) {
    b._rev = 1; b.hp = Math.round(b.maxHp * 0.35); b.attack = Math.round(b.attack * 1.2);
    ev.push({ t: 'boss_transform', kind: 'boss_transform', color: b.color });
    ev.push({ t: 'special_trigger', kind: 'special_trigger', pos: { x: b.pos.x, z: b.pos.z }, radius: 6, color: b.color, name: 'Rinascita', type: 'meteor' });
    return true;
  }
  return false;
}

// Abilità "firma" di ogni boss (riscritte a mano da DBA_SIG / DBA_SIGGO). Dati in src/data/bossSignatures.json.
// Tipi: barrage (pioggia di colpi segnalati), ring (onda attorno al boss), drain (come ring ma cura il boss),
// slow (rallenta il party), blind (−30% attacco), summon (evoca un servitore).

var DBA_SIG = DATA.bossSignatures;           // per chiave di boss: nome, colore, ricarico, parametri

/** Lancia la firma `sig` del boss. alive = eroi vivi, ev = lista eventi. */
function DBA_SIGGO(eng, boss, sig, alive, ev) {
  const at = { x: boss.pos.x, z: boss.pos.z };
  ev.push({ t: 'bossWind', kind: 'bossWind', label: '⚠ ' + sig.nm, c: sig.c, from: at });
  /** segnala a terra un'area che esploderà dopo `delay` secondi */
  const telegraph = (x, z, radius, delay) => {
    eng.telegraphs.push({ pos: { x, z }, radius, delay, damage: sig.d * 0.85, color: sig.c, name: sig.nm, type: sig.fx || 'shockwave', heal: sig.h || 0 });
    ev.push({ t: 'special_telegraph', kind: 'special_telegraph', pos: { x, z }, radius, color: sig.c, name: sig.nm, delay, type: sig.fx || 'shockwave' });
  };
  const teamBuff = () => ev.push({ t: 'buff', kind: 'team_buff', from: { x: 0, z: 0 }, color: sig.c, label: sig.nm });

  if (sig.t === 'barrage') {
    for (let i = 0; i < sig.n; i++) {
      let x, z;
      if (sig.rnd || !alive.length) {                                       // a caso nell'arena
        const a = Math.random() * 6.283, q = Math.random() * eng.arenaRadius * 0.7;
        x = Math.cos(a) * q; z = Math.sin(a) * q;
      } else {                                                              // sopra un eroe a caso
        const h = alive[Math.floor(Math.random() * alive.length)];
        x = h.pos.x + (Math.random() - 0.5) * 3; z = h.pos.z + (Math.random() - 0.5) * 3;
      }
      const c = eng.clampToArena(x, z);
      telegraph(c.x, c.z, sig.r, 1.3 + i * 0.3);                            // un colpo ogni 0,3 s
    }
  } else if (sig.t === 'ring' || sig.t === 'drain') {
    telegraph(at.x, at.z, sig.r, 1.4);
  } else if (sig.t === 'slow') {
    for (const h of alive) { h.atkSpeedMul = Math.max(0.5, (h.atkSpdBase || 1) * 0.65); h.atkSpeedTimer = 6; }
    teamBuff();
  } else if (sig.t === 'blind') {
    for (const h of alive) { h.atkBuff = (h.atkBuff || 0) - Math.round(h.attack * 0.3); h.atkBuffTimer = 6; }
    teamBuff();
  } else if (sig.t === 'summon') {
    if (eng.companions.filter((c) => c.alive).length < 3) {                // al massimo 3 servitori
      const ang = Math.random() * 6.283, dist = 2 + Math.random() * 2;
      const x = at.x + Math.cos(ang) * dist, z = at.z + Math.sin(ang) * dist, hp = 25 + (boss.tier || 0) * 8;
      const c = { id: 'comp_' + Math.random().toString(36).slice(2), pos: { x, z }, hp, maxHp: hp, attack: Math.round(boss.attack * 0.35), defense: 2, radius: 0.5, speed: 3.5, range: 1.5, alive: true, _deadAt: 0, attackCd: 1.5, bossColor: boss.color };
      eng.companions.push(c);
      ev.push({ t: 'companion_spawn', kind: 'companion_spawn', id: c.id, pos: { x, z }, color: sig.c });
    }
  }
}

// Abilità "doppie" (riscritta a mano da window.DBA_DUAL): un'abilità con un danno opzionale e una lista di effetti `fx`.
// Dati dell'abilità (ab): dmg (moltiplicatore danno), fx (elenco di effetti), cd, hp (potenza cure), red (riduzione), tt (secondi di provocazione).
// Effetti: heal, healAll, bubble, bubbleAll, adapt, adaptAll, speed, self, allyShield, taunt.

window.DBA_DUAL = function (eng, hero, ab, idx, from, to, ev, cdMul) {
  const boss = eng.boss, atk = hero.attack + (hero.atkBuff || 0), color = hero.color;
  let firstLabel = true;
  const label = () => { const l = firstLabel ? ab.name : undefined; firstLabel = false; return l; };   // il nome appare solo sul 1° effetto
  const pos = (h) => ({ x: h.pos.x, z: h.pos.z });
  const alive = eng.heroes.filter((h) => h.alive);
  /** compagno più forte in attacco tra i DPS (o l'eroe stesso) */
  const bestDps = () => alive.filter((h) => h !== hero && h.isDps).sort((a, b) => b.attack - a.attack)[0] || hero;
  const aura = (h, col) => { const p = pos(h); ev.push({ t: 'buff', who: hero.id, from: p, to: p, kind: 'aura', label: label(), c: col || color, target: h.id }); };
  const bubble = (h) => { const p = pos(h); ev.push({ t: 'buff', who: hero.id, from: p, to: p, kind: 'bubble', label: label(), c: color, target: h.id }); };
  const shield = (h, red, secs) => { h.dmgReduce = Math.max(h.dmgReduce || 0, red); h.dmgReduceTimer = Math.max(h.dmgReduceTimer || 0, secs); };
  /** "adattamento": ogni ruolo riceve il bonus più adatto */
  const adapt = (h) => {
    if (h.isTank) shield(h, 0.4, 6);
    else if (h.isHealer) { if (!(h.atkBuffTimer > 0)) h.atkBuff = (h.atkBuff || 0) + Math.round(h.attack * 0.35); h.atkBuffTimer = 7; }
    else if (h.isMelee) { h.atkSpeedMul = 1.3 * (h.atkSpdBase || 1); h.atkSpeedTimer = 6; }
    else { if (!(h.atkBuffTimer > 0)) h.atkBuff = (h.atkBuff || 0) + Math.round(h.attack * 0.3); h.atkBuffTimer = 6; }
    aura(h, h.isTank ? '#60a5fa' : h.isHealer ? '#4ade80' : h.isMelee ? '#fbbf24' : '#f472b6');
  };

  let dealt = 0;
  if (ab.dmg) {
    let mul = ab.dmg * 1.7;
    if (ab.exec && boss.hp < boss.maxHp * 0.35) mul *= 1 + ab.exec;     // "esecuzione": bonus contro un boss quasi sconfitto
    const d = Math.max(1, Math.round(atk * mul - boss.defense / 2));
    dealt = d; boss.hp -= d; hero.threat += d;
    ev.push({ t: 'dmg', who: hero.id, from, to, kind: ab.vfx || 'projectile', label: label(), val: d, c: color });
  }
  for (const fx of ab.fx || []) {
    if (fx === 'heal') {
      const t = eng.lowestHurt();
      if (t) {
        const before = t.hp; t.hp = Math.min(t.maxHp, t.hp + Math.round(atk * (ab.hp || 1.8) + 8));
        ev.push({ t: 'heal', who: hero.id, from, to: pos(t), kind: 'heal_beam', label: label(), val: Math.round(t.hp - before), c: color, target: t.id });
      }
    } else if (fx === 'healAll') {
      if (eng.anyHurt()) { eng.healAll(Math.round(atk * (ab.hp || 1) + 5)); ev.push({ t: 'heal', who: hero.id, from, to: from, kind: 'heal_ring', label: label(), c: color }); }
    } else if (fx === 'bubble') {
      const t = eng.lowestHurt() || hero; shield(t, 0.5, 5); bubble(t);
    } else if (fx === 'bubbleAll') {
      for (const h of alive) { shield(h, 0.35, 4); bubble(h); }
    } else if (fx === 'adapt') adapt(bestDps());
    else if (fx === 'adaptAll') alive.forEach(adapt);
    else if (fx === 'dot') { boss.dot = Math.max(boss.dot || 0, atk * (ab.dm || 0.5)); boss.dotTimer = Math.max(boss.dotTimer || 0, ab.dt || 6); ev.push({ t: 'vfx', who: hero.id, from, to, kind: 'curse', c: color }); }
    else if (fx === 'lifesteal') { const g = Math.round(dealt * (ab.ls || 0.4)); if (g > 0) { hero.hp = Math.min(hero.maxHp, hero.hp + g); ev.push({ t: 'heal', who: hero.id, from: pos(hero), to: pos(hero), kind: 'heal_ring', val: g, c: '#ef4444', target: hero.id }); } }
    else if (fx === 'weaken') { boss.weakT = 6; boss.weakV = ab.wk || 0.25; ev.push({ t: 'vfx', who: hero.id, from: to, to, kind: 'ring', c: color }); }
    else if (fx === 'atkAll') alive.forEach((h) => { if (!(h.atkBuffTimer > 0)) h.atkBuff = (h.atkBuff || 0) + Math.round(h.attack * (ab.ap || 0.25)); h.atkBuffTimer = 6; aura(h, '#fbbf24'); });
    else if (fx === 'regenAll') { alive.forEach((h) => { h.regen = Math.max(h.regen || 0, atk * (ab.rg || 0.5) + 3); h.regenTimer = 6; }); ev.push({ t: 'heal', who: hero.id, from, to: from, kind: 'heal_ring', label: label(), c: color }); }
    else if (fx === 'manaAll') { alive.forEach((h) => { if (!h.noMana) h.mana = Math.min(h.maxMana, h.mana + (ab.mp || 15)); }); aura(hero, '#60a5fa'); }
    else if (fx === 'manaSelf') { if (!hero.noMana) hero.mana = Math.min(hero.maxMana, hero.mana + (ab.mp || 20)); aura(hero, '#60a5fa'); }
    else if (fx === 'selfHeal') { const g = Math.round(hero.maxHp * (ab.sh || 0.2)); hero.hp = Math.min(hero.maxHp, hero.hp + g); ev.push({ t: 'heal', who: hero.id, from: pos(hero), to: pos(hero), kind: 'heal_ring', val: g, c: color, target: hero.id }); }
    else if (fx === 'haste') { hero.atkSpeedMul = 1.5 * (hero.atkSpdBase || 1); hero.atkSpeedTimer = 6; aura(hero, '#fbbf24'); }
    else if (fx === 'hasteAll') alive.forEach((h) => { h.atkSpeedMul = 1.35 * (h.atkSpdBase || 1); h.atkSpeedTimer = 6; aura(h, '#fbbf24'); });
    else if (fx === 'speed') { const h = bestDps(); h.atkSpeedMul = 1.35 * (h.atkSpdBase || 1); h.atkSpeedTimer = 6; aura(h, '#fbbf24'); }
    else if (fx === 'self') { shield(hero, ab.red || 0.5, 5); aura(hero); }
    else if (fx === 'allyShield') {
      const t = eng.lowestHurt();
      if (t && t !== hero) { shield(t, 0.4, 5); bubble(t); }
    } else if (fx === 'taunt') {
      boss.forcedTarget = hero.id; boss.forcedTimer = Math.max(boss.forcedTimer || 0, ab.tt || 4); hero.threat += Math.round(hero.attack * 3);
    }
  }
  hero.cd[idx] = ab.cd * cdMul;
  return true;
};

// Equipaggiamento: statistiche degli oggetti + bonus di set (riscritto a mano da Pe0, ij e DBA_SETB del gioco v198).
// Oggetto: { slot, set?, stats:{attack,defense,maxHp,mana,manaRegen,atkSpeed} }.  Eroe: statistiche base + level + isTank.
// Set: con >=2 pezzi vale b2, con >=4 pezzi vale anche b3. I bonus sono percentuali sulla statistica (base eroe + oggetti), atkSpd in punti.

const GEAR_SETS = DATA.sets;
const GEAR_KEYS = ['attack', 'defense', 'maxHp', 'mana', 'manaRegen', 'atkSpeed'];

/** Somma delle statistiche degli oggetti, scalate per livello (0.45–1.6) e difesa ridotta per i non-tank (×0.6). */
function gearItemTotals(hero, items) {
  const lm = Math.max(0.45, Math.min(1.6, 0.4 + (hero.level || 1) * 0.04));
  const dm = hero.isTank ? 1 : 0.6;
  const t = { attack: 0, defense: 0, maxHp: 0, mana: 0, manaRegen: 0, atkSpeed: 0 };
  for (const it of items) {
    const s = it.stats || {};
    t.attack += Math.round((s.attack || 0) * lm);
    t.defense += Math.round((s.defense || 0) * lm * dm);
    t.maxHp += Math.round((s.maxHp || 0) * lm);
    t.mana += Math.round((s.mana || 0) * lm);
    t.manaRegen += Math.round((s.manaRegen || 0) * lm * 10) / 10;
    t.atkSpeed += s.atkSpeed || 0;
  }
  return t;
}

/** Aggiunge i bonus di set ai totali degli oggetti. `si` = icone dei set attivi. */
function gearWithSets(items, hero, totals) {
  const out = Object.assign({}, totals); out.si = '';
  const count = {};
  for (const it of items) if (it && it.set) count[it.set] = (count[it.set] || 0) + 1;
  const add = { attack: 0, defense: 0, maxHp: 0, mana: 0, manaRegen: 0, atkSpd: 0 };
  for (const S of GEAR_SETS) {
    const n = count[S.k] || 0;
    if (n < 2) continue;
    out.si += S.ic;
    for (const b of n >= 4 ? [S.b2, S.b3] : [S.b2]) {
      for (const k in b) {
        if (k === 'atkSpd') add.atkSpd += b[k] * 100;
        else add[k] += (hero[k === 'mana' ? 'maxMana' : k] + (totals[k] || 0)) * b[k];
      }
    }
  }
  out.attack += Math.round(add.attack); out.defense += Math.round(add.defense); out.maxHp += Math.round(add.maxHp); out.mana += Math.round(add.mana);
  out.manaRegen = Math.round((out.manaRegen + add.manaRegen) * 10) / 10;
  out.atkSpeed += add.atkSpd;
  return out;
}

/** Eroe con l'equipaggiamento applicato (come Pe0). Senza bonus restituisce l'eroe a vita/mana piena. */
function gearApply(hero, items) {
  const b = gearWithSets(items, hero, gearItemTotals(hero, items));
  if (b.attack || b.defense || b.maxHp || b.mana || b.manaRegen || b.atkSpeed) {
    const maxHp = hero.maxHp + b.maxHp, maxMana = hero.maxMana + b.mana;
    return Object.assign({}, hero, {
      attack: hero.attack + b.attack, defense: hero.defense + b.defense, maxHp, hp: maxHp, maxMana, mana: maxMana,
      manaRegen: hero.manaRegen + b.manaRegen, atkSpd: b.atkSpeed, alive: true,
    });
  }
  return Object.assign({}, hero, { atkSpd: 0, hp: hero.maxHp, mana: hero.maxMana || 0, alive: true });
}

/** Equipaggia l'oggetto `itemId` sull'eroe `heroId` (come Ue del gioco): libera lo stesso slot; un'arma a due mani libera la mano secondaria e viceversa. */
function gearEquip(items, itemId, heroId) {
  const it = items.find((o) => o.id === itemId);
  if (!it) return items;
  return items.map((o) => {
    if (o.equippedTo === heroId && o.id !== itemId &&
      (o.slot === it.slot || (it.slot === 'mainhand' && it.hands === 'two' && o.slot === 'offhand') || (it.slot === 'offhand' && o.slot === 'mainhand' && o.hands === 'two'))) return { ...o, equippedTo: null };
    return o.id === itemId ? { ...o, equippedTo: heroId } : o;
  });
}

// Generazione degli oggetti (riscritta a mano da rj / nj / DBA_PK / DBA_LBL del gioco v198).
// ATTENZIONE: l'ORDINE delle chiamate a Math.random() è quello dell'originale (serve per il test a seme fisso).
// Dati in src/data/gearGen.json (DATA.gearGen).

const GG = DATA.gearGen;
const GG_STATS = ['attack', 'defense', 'maxHp', 'mana', 'manaRegen', 'atkSpeed'];

function ggPick(list) { return list[Math.random() * list.length | 0]; }

/** Rarità casuale (nel gioco attuale le probabilità di salto sono 0: esce sempre "bianco", ma il tiro resta). */
function ggRollRarity() {
  let n = 0;
  for (let e = 1; e < GG.rarities.length && Math.random() < GG.rarities[e].chance; e++) n = e;
  return GG.rarities[n];
}

/** Etichetta e icona dello slot (solo estetica). */
function ggSlotLabel(o) {
  const sl = o.slot;
  if (sl === 'mainhand') return o.hands === 'two' ? { l: 'A due mani', i: '⚔️' } : { l: 'Mano primaria', i: '🗡️' };
  if (sl === 'offhand') {
    if (o.ohk === 'shield') return { l: 'Mano secondaria · Scudo', i: '🛡️' };
    if (o.ohk === 'held') return { l: 'Mano secondaria · Oggetto', i: '📖' };
    return { l: 'Mano secondaria · Arma', i: '🗡️' };
  }
  return { l: (GG.slotNames || {})[sl] || sl, i: (GG.slotIcons || {})[sl] || '' };
}

/** Sceglie lo slot (pesi), riprovando fino a 20 volte se esce "offhand" per una classe senza mano secondaria. */
function ggRollSlot(offhandKinds) {
  let sl = 'head';
  for (let g = 0; g < 20; g++) {
    let total = 0;
    GG.slotOrder.forEach((k) => (total += GG.slotWeights[k]));
    let x = Math.random() * total;
    sl = 'head';
    for (const k of GG.slotOrder) { x -= GG.slotWeights[k]; if (x <= 0) { sl = k; break; } }
    if (sl === 'offhand' && !offhandKinds.length) continue;
    break;
  }
  if (sl === 'offhand' && !offhandKinds.length) sl = 'head';
  return sl;
}

/** Crea un oggetto per la classe `classKey` (boss tier `tier`; `rarityKey` forza la rarità). */
function gearGenerate(classKey, tier = 0, rarityKey = null, classes = Kc) {
  const cls = classes[classKey];
  if (!cls) return null;
  const rar = rarityKey ? GG.rarities.find((r) => r.key === rarityKey) : ggRollRarity();
  const mul = rar.statMul * (1 + tier * 0.15);
  const offKinds = GG.classOffhand[classKey] || [];
  const slot = ggRollSlot(offKinds);
  const armor = GG.armorKind[classKey] || 'plate';
  let base = '', hands = null, ohk = null;
  if (slot === 'mainhand') { base = ggPick(GG.classWeapons[classKey] || ['Spada']); hands = GG.handsOf[base] || 'one'; }
  else if (slot === 'offhand') {
    ohk = ggPick(offKinds);
    if (ohk === 'weapon') {
      const ones = (GG.classWeapons[classKey] || []).filter((x) => GG.handsOf[x] === 'one');
      base = ggPick(ones.length ? ones : ['Pugnale']); hands = 'one';
    } else base = ggPick(GG.offhandNames[ohk]);
  } else base = ggPick(GG.armorNames[armor][slot]);
  const weightKey = slot === 'offhand' ? (ohk === 'weapon' ? 'mainhand' : ohk) : slot;
  const w = GG.slotStatWeights[weightKey];
  const sm = slot === 'mainhand' ? (hands === 'two' ? GG.slotScale.main2 : GG.slotScale.main1)
    : slot === 'offhand' ? (ohk === 'weapon' ? GG.slotScale.main1 * 0.8 : GG.slotScale.offhand) : GG.slotScale[slot];
  // da 1 a 3 statistiche, estratte con probabilità proporzionale al quadrato del peso dello slot
  const nStats = 1 + Math.floor(Math.random() * 3), stats = { attack: 0, defense: 0, maxHp: 0, mana: 0, manaRegen: 0, atkSpeed: 0 }, pool = [...GG_STATS];
  for (let q = 0; q < nStats && pool.length; q++) {
    let tw = 0; pool.forEach((k) => (tw += w[k] * w[k]));
    let x = Math.random() * tw, pk = pool[0];
    for (const k of pool) { x -= w[k] * w[k]; if (x <= 0) { pk = k; break; } }
    pool.splice(pool.indexOf(pk), 1);
    stats[pk] = Math.max(1, Math.round(GG.statBase[pk] * mul * w[pk] * sm * (0.5 + Math.random() * 0.7)));
  }
  if (stats.manaRegen) stats.manaRegen = Math.round(stats.manaRegen * 10) / 10;
  // set: solo sui pezzi d'armatura; probabilità per rarità; i set rari solo da oro/rosso
  let set = null;
  if (GG.setSlots.indexOf(slot) > -1) {
    const p = rar.key === 'bianco' ? 0.06 : rar.key === 'blu' ? 0.2 : 0.35;
    if (Math.random() < p) {
      const pool2 = GEAR_SETS.filter((q) => !q.rare || rar.key === 'oro' || rar.key === 'rosso');
      set = pool2[Math.random() * pool2.length | 0];
    }
  }
  const L = ggSlotLabel({ slot, hands, ohk });
  return {
    id: Math.random().toString(36).slice(2) + Date.now().toString(36),
    name: set ? `${base} ${rar.label} ${set.n} ${set.ic}` : `${base} ${rar.label}`,
    base, set: set ? set.k : null, rarity: rar.key, classKey, className: cls.name, icon: cls.icon,
    slotIcon: L.i, slotLabel: L.l, slot, hands, ohk, stats, bossTier: tier, equippedTo: null, _v: 2,
  };
}

// Incantesimi degli oggetti e effetti a 5 pezzi (riscritto a mano da DBA_EN / DBA_SETFX / DBA_ENP / DBA_ENB del gioco v198).
// Ogni incantesimo ha una "potenza" p: 1 + 0,5 per ogni gradino di rarità (bianco 1, blu 1,5 … rosso 3) per ogni pezzo incantato,
// più la potenza data dall'effetto a 5 pezzi dello stesso set (src/data/setFull.json).
// In battaglia contano solo Furia (+% attacco) e Baluardo (+% PV max); gli altri valgono nel mondo/dopo la vittoria.

const ENCH_RARITIES = ['bianco', 'blu', 'viola', 'oro', 'rosso'];
const ENCH_SETFULL = DATA.setFull;
/** key → [icona, nome, valore(p, tier), descrizione(valore)] */
const ENCH = {
  vamp: ['🩸', 'Vampirismo', (p) => Math.min(25, 2 * p), (x) => `Dopo ogni vittoria il party recupera il ${x}% dei PV massimi`],
  oro: ['💰', 'Avidità', (p, tier) => Math.round((8 + 3 * (tier | 0)) * p), (x) => `+${x} 🪙 a ogni vittoria`],
  xp: ['📚', 'Sapienza', (p, tier) => Math.round((6 + 2 * (tier | 0)) * p), (x) => `+${x} XP a ogni eroe dopo ogni vittoria`],
  racc: ['⛏', 'Raccolto', (p) => Math.min(60, 8 * p), (x) => `${x}% di probabilità di raccolta doppia`],
  fort: ['🍀', 'Fortuna', (p) => Math.min(40, 4 * p), (x) => `+${x}% di probabilità di trovare gemme e mappe`],
  rig: ['🌿', 'Rigenerazione', (p) => Math.min(6, Math.round(6 * p) / 10), (x) => `Nel mondo aperto il party recupera il ${x}% dei PV ogni 10 secondi`],
  furia: ['🔥', 'Furia', (p) => Math.min(40, 3 * p), (x) => `+${x}% di attacco in battaglia (solo l'eroe che lo indossa)`],
  baluardo: ['🛡', 'Baluardo', (p) => Math.min(40, 3 * p), (x) => `+${x}% di PV massimi in battaglia (solo l'eroe che lo indossa)`],
};

/** Effetti a 5 pezzi: { chiave incantesimo: potenza } sommati su tutti i set con almeno 5 pezzi. */
function enchantSetEffects(items) {
  const count = {}, out = {};
  for (const it of items) if (it.set) count[it.set] = (count[it.set] || 0) + 1;
  for (const k in count) if (count[k] >= 5 && ENCH_SETFULL[k]) for (const e in ENCH_SETFULL[k]) out[e] = (out[e] || 0) + ENCH_SETFULL[k][e];
  return out;
}

/** Potenza di un incantesimo per un eroe, dati i suoi pezzi equipaggiati. */
function enchantPower(key, items) {
  let p = 0;
  for (const it of items) if (it.ench === key) p += 1 + Math.max(0, ENCH_RARITIES.indexOf(it.rarity)) * 0.5;
  return p + (enchantSetEffects(items)[key] || 0);
}

/** Applica Furia e Baluardo agli eroi a inizio battaglia. `itemsOf(hero)` restituisce i pezzi equipaggiati dell'eroe. */
function enchantApplyBattle(heroes, itemsOf) {
  for (const h of heroes) {
    const items = itemsOf(h) || [];
    const f = enchantPower('furia', items), b = enchantPower('baluardo', items);
    if (f > 0) h.attack = Math.round(h.attack * (1 + ENCH.furia[2](f) / 100));
    if (b > 0) { const m = 1 + ENCH.baluardo[2](b) / 100; h.maxHp = Math.round(h.maxHp * m); h.hp = Math.round(h.hp * m); }
  }
}

/** Gradino di rarità di un oggetto (0 = bianco … 4 = rosso). */
function enchantRarityIndex(item) { return Math.max(0, ENCH_RARITIES.indexOf(item.rarity)); }

/** Costo per incantare un oggetto dall'incantatore: minerale (o), erbe (h), oro (g). */
function enchantCost(item) {
  const r = enchantRarityIndex(item);
  return { o: 4 + 3 * r, h: 3 + 2 * r, g: 150 * (1 + r) };
}

/**
 * Incanta l'oggetto `itemId` con `key` pagando le risorse `res` = {o, h, gold}.
 * Restituisce { ok, items, res, msg }: se risorse insufficienti o già applicato, nulla cambia.
 */
function enchantApply(items, itemId, key, res) {
  const it = items.find((x) => x.id === itemId);
  if (!it || !ENCH[key]) return { ok: false, items, res, msg: 'oggetto o incantesimo non valido' };
  if (it.ench === key) return { ok: false, items, res, msg: 'Già applicato' };
  const c = enchantCost(it);
  if ((res.o | 0) < c.o || (res.h | 0) < c.h || res.gold < c.g) return { ok: false, items, res, msg: `Servono ${c.o} ⛏ + ${c.h} 🌿 + ${c.g} 🪙` };
  return { ok: true, items: items.map((x) => (x.id === itemId ? { ...x, ench: key } : x)), res: { o: res.o - c.o, h: res.h - c.h, gold: res.gold - c.g }, msg: `${ENCH[key][0]} ${ENCH[key][1]} applicato` };
}

// Esperienza e livelli (riscritto a mano da Tp / Y6 / K6 / Z6 / OM del gioco v198).

const XP_AFTER_BATTLE = { survivor: 80, fallen: 30 };

/** XP necessaria per passare dal livello `level` al successivo. */
function xpForLevel(level) { return Math.round(100 + (level - 1) * 85 + (level - 1) * (level - 1) * 5); }

/** Sale di un livello: aggiunge le statistiche in base al ruolo e le restituisce. DPS +14 vita +6 att; curatori +12/+5; tank +34 vita +3 att +5 dif. */
function levelUpGains(hero) {
  const g = { maxHp: 0, attack: 0, defense: 0 };
  if (hero.isDps) { g.maxHp = 14; g.attack = 6; }
  else if (hero.isHealer) { g.maxHp = 12; g.attack = 5; }
  else if (hero.isTank) { g.maxHp = 34; g.attack = 3; g.defense = 5; }
  hero.maxHp += g.maxHp; hero.attack += g.attack; hero.defense += g.defense;
  return g;
}

/** Fine battaglia: ogni eroe riceve XP (sopravvissuto 80, caduto 30) e sale di livello quanto serve. Restituisce {party, summary}. */
function applyBattleXp(party) {
  const out = party.map((h) => ({ ...h })), summary = [];
  for (const h of out) {
    h.xp = (h.xp || 0) + (h.alive ? XP_AFTER_BATTLE.survivor : XP_AFTER_BATTLE.fallen);
    const before = h.level, gains = { maxHp: 0, attack: 0, defense: 0 };
    while (h.xp >= xpForLevel(h.level)) {
      h.xp -= xpForLevel(h.level); h.level += 1;
      const g = levelUpGains(h);
      gains.maxHp += g.maxHp; gains.attack += g.attack; gains.defense += g.defense;
    }
    if (h.level > before) summary.push({ name: h.name, icon: h.icon, className: h.className, level: h.level, classKey: h.classKey, gains });
  }
  return { party: out, summary };
}

/** Toglie i bonus temporanei dell'equipaggiamento (istantanea `_buffSnap`) prima di salvare l'eroe. */
function stripGearSnapshot(h) {
  const s = h._buffSnap;
  return s ? { ...h, attack: s.attack, maxHp: s.maxHp, defense: s.defense, hp: Math.min(h.hp, s.maxHp), _buffSnap: undefined, buff: null } : h;
}

// Ultimate manuale (riscritto a mano da forceUlt/press dello script_11 del gioco v198).
// L'ultimate di un eroe è la sua ULTIMA abilità; si lancia a mano, con ricarica di 8 s per eroe
// (l'originale usa Date.now(): qui si usa il tempo di simulazione, così funziona anche a velocità 2×/4×).

const ULT_COOLDOWN = 8;
/** Mana consumato in più per tipo di abilità (tabella CG dell'originale). */
const ULT_MANA_COST = { strike: 2, taunt_strike: 3, big_strike: 10, shot: 2, big_shot: 10, aoe: 15, chain: 16, dot: 14, heal_single: 8, heal_aoe: 18, regen: 12, shield: 16, buff_atk: 22, wall: 18, threat: 6, revive: 30, revive_companion: 15, summon_boost: 25 };
const ULT_DAMAGING = ['strike', 'big_strike', 'taunt_strike', 'shot', 'big_shot', 'aoe', 'chain', 'dot'];

/** 0..1: quanto è carica l'ultimate dell'eroe (1 = pronta). */
function ultimateIndex(hero) { const a = (hero && hero.abilities) || []; for (let i = a.length - 1; i >= 0; i--) if (a[i] && a[i].ult) return i; return -1; }
function ultimateProgress(eng, hero) {
  if (ultimateIndex(hero) < 0) return 0;
  const at = eng._ultAt && eng._ultAt[hero.id];
  return at === undefined ? 1 : Math.min(1, (eng.time - at) / ULT_COOLDOWN);
}

/** Lancia l'ultimate. Restituisce '' se riuscita, altrimenti il motivo (testo come nell'originale). */
function ultimateCast(eng, hero) {
  const abilities = hero.abilities || [], k = ultimateIndex(hero), ab = abilities[k];
  if (!eng || eng.over || !hero.alive) return 'Non disponibile';
  if (k < 0) return 'Si sblocca al livello 10';
  if (ultimateProgress(eng, hero) < 1) return 'In ricarica';
  if (k < 0 || !ab || !hero.cd) return 'Non disponibile';
  const kind = ab.kind, ev = [], from = { x: hero.pos.x, z: hero.pos.z }, to = { x: eng.boss.pos.x, z: eng.boss.pos.z };
  let target = null;
  if (!(hero.mana > 0)) return 'Mana esaurito';
  if (kind === 'revive') { target = eng.lowestDead(); if (!target) return 'Nessun eroe caduto'; }
  else if (kind === 'heal_single' || kind === 'regen' || kind === 'shield') { target = eng.lowestHurt(); if (!target) return 'Nessun ferito'; }
  else if (kind === 'heal_aoe') { if (!eng.anyHurt()) return 'Nessun ferito'; }
  else if (kind === 'revive_companion') { if (!eng.heroCompanions.some((c) => c.ownerId === hero.id && !c.alive)) return 'Nessun compagno caduto'; }
  const hit = ULT_DAMAGING.indexOf(kind) >= 0;
  if (hit || target) {
    const px = target ? target.pos.x : to.x, pz = target ? target.pos.z : to.z;
    if (eng.lineBlocked(from.x, from.z, px, pz) && !(hero.arch === 'healer' && Math.random() < 0.95)) return 'Visuale interrotta';
  }
  if (kind === 'revive' && eng.reviveUses <= 0) eng.reviveUses = 1;
  hero.cd[k] = 0;
  const ok = eng.execAbility(hero, ab, k, from, to, ev, 1 / (hero.atkSpeedMul || 1));
  if (!ok) { hero.cd[k] = 0; return kind === 'summon_boost' ? 'Limite evocazioni' : 'Non utilizzabile'; }
  hero.mana = Math.max(0, hero.mana - (ULT_MANA_COST[kind] || 0)); hero.cd[k] = 0;
  if (hit) eng.splashCompanions(to, 3, hero.attack + (hero.atkBuff || 0), ev);
  eng._pendingEvents = (eng._pendingEvents || []).concat(ev);
  (eng._ultAt = eng._ultAt || {})[hero.id] = eng.time;
  return '';
}

/** "Provoca": il boss punta l'eroe per 4 s (modalità alternativa del pulsante, come nell'originale). */
function ultimateTaunt(eng, hero) {
  if (!eng || eng.over || !hero.alive) return false;
  eng.boss.forcedTarget = hero.id; eng.boss.forcedTimer = 4; return true;
}

// Dungeon procedurale (riscritto a mano da DBA_DG del gioco v198, script_13). Solo logica: niente grafica né schermate.
// Dati (stanze, eventi, indovinelli, trappole) in src/data/dungeon.json. L'ordine delle chiamate a Math.random() è quello dell'originale.
// Uso: const dg = dungeonGenerate(DG); dg.L[livello][stanza] = { d, p, r:{id,name,th}, ex:[uscite], ev:[eventi], labs }.
// Eventi: n = nemico, m = miniboss, t = trappola, c = tesoro, r = indovinello.

const dgR = (n) => Math.random() * n | 0;                                                   // intero casuale 0..n-1
const dgShuffle = (a) => a.map((x) => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map((p) => p[1]);
const DG_TRAP_TYPES = ['spike', 'arrow', 'fire', 'poison'];

/** Le 1000 stanze preimpostate: 10 nomi × 10 aggettivi × 10 ambientazioni. */
function dungeonRoomPool(DG) {
  return Array.from({ length: 1000 }, (_, i) => ({ id: i, name: DG.roomNouns[i % 10] + ' ' + DG.roomAdjectives[(i / 10 | 0) % 10], th: DG.themes[(i / 100 | 0) % 10] }));
}

/** Genera la struttura: 4–8 livelli di stanze (da 1 a 3 per livello), collegamenti tra livelli ed eventi sparsi. */
function dungeonGenerate(DG) {
  const pool = dungeonRoomPool(DG);
  const D = 4 + dgR(5), ids = dgShuffle(pool.map((_, i) => i));
  let k = 0;
  const L = [];
  for (let d = 0; d < D; d++) {
    const width = d ? 1 + dgR(3) : 1;
    L.push(Array.from({ length: width }, (_, p) => ({ d, p, r: pool[ids[k++]], ex: [], ev: [] })));
  }
  for (let d = 0; d < D - 1; d++) {
    const next = L[d + 1], W = next.length;
    next.labs = W == 1 ? ['Dritto'] : W == 2 ? DG.pairs[dgR(3)] : ['Sinistra', 'Dritto', 'Destra'];
    L[d].forEach((n) => { n.ex = dgShuffle(next.map((_, i) => i)).slice(0, Math.min(W, 1 + dgR(3))).sort(); });
    // ogni stanza del livello successivo deve essere raggiungibile da almeno una del livello corrente
    next.forEach((_, i) => { if (!L[d].some((n) => n.ex.includes(i))) L[d][dgR(L[d].length)].ex.push(i); });
    L[d].forEach((n) => { n.ex = [...new Set(n.ex)].sort(); });
  }
  const all = dgShuffle(L.flat());
  dgShuffle(['n', 'n', 'n', 'm', 'm', 't', 'c', 'r']).forEach((e, i) => all[i % all.length].ev.push(e));
  return { D, L };
}

/** Il party subisce `dmg` (ridotto da metà difesa, minimo 1). Restituisce le righe di registro per gli eroi caduti. */
function dungeonHurt(party, dmg) {
  const log = [];
  for (const h of party) {
    if (!h.alive) continue;
    h.hp -= Math.max(1, Math.round(dmg - h.defense / 2));
    if (h.hp <= 0) { h.hp = 0; h.alive = false; log.push('💀 ' + h.name + ' è caduto'); }
  }
  return log;
}

/** Entrando in una stanza i vivi recuperano il 15% dei PV massimi. */
function dungeonRest(party) { for (const h of party) if (h.alive) h.hp = Math.min(h.maxHp, h.hp + h.maxHp * 0.15); }

/** Trappola: colpisce tutto il party con il 70% dell'attacco del boss. */
function dungeonTrap(party, boss) { return dungeonHurt(party, boss.attack * 0.7); }

/** Indovinello: risposta giusta = +25% PV ai vivi; sbagliata = colpo pari al 30% dell'attacco del boss. Restituisce il registro. */
function dungeonRiddleAnswer(party, boss, correct) {
  if (correct) { for (const h of party) if (h.alive) h.hp = Math.min(h.maxHp, h.hp + h.maxHp * 0.25); return []; }
  return dungeonHurt(party, boss.attack * 0.3);
}

/** Estrae un indovinello e mescola le risposte: [{testo, giusta}, …]. */
function dungeonPickRiddle(DG) {
  const q = DG.riddles[dgR(DG.riddles.length)];
  return { question: q[0], answers: dgShuffle(q[1].map((t, i) => [t, i == q[2]])).map((x) => ({ text: x[0], correct: x[1] })) };
}

const dungeonAlive = (party) => party.some((h) => h.alive);

const DG_THEMES = ['shadow', 'fire', 'frost', 'bone', 'nature', 'abyss', 'storm', 'void', 'blood', 'light'];

/** Mostro-modello per l'ambientazione `i` (0–9): uno a caso tra i boss di quel tema, altrimenti il primo. */
function dungeonTemplate(i) {
  const a = $v.filter((x) => x.theme == DG_THEMES[i]);
  return a.length ? a[Math.random() * a.length | 0] : $v[0];
}

/** Nemico di stanza (come DBA_MKB): normale = 12% PV e 50% attacco del boss finale, miniboss = 30% e 90%. */
function dungeonEnemy(template, B, mini, nHeroes) {
  const b = ug(nHeroes, $v.indexOf(template)), hp = Math.round(B.maxHp * (mini ? 0.3 : 0.12));
  return Object.assign(b, {
    tier: 0, maxHp: hp, hp, attack: Math.round(B.attack * (mini ? 0.9 : 0.5)), defense: B.defense,
    difficulty: B.difficulty, difficultyLabel: B.difficultyLabel, difficultyName: B.difficultyName, difficultyIcon: B.difficultyIcon, difficultyColor: B.difficultyColor, difficultyMul: B.difficultyMul,
    name: (mini ? 'Miniboss · ' : '') + template.name, companionChance: 0.05,
  });
}

function q6(n, e) { return createBattle(n, e); }

window.DBAEngine = { createEngine: q6, createBoss: ug, CLASSES: Kc, gearApply, GEAR_SETS, gearGenerate, gearEquip, enchantApplyBattle, enchantApply, enchantCost, ENCH, applyBattleXp, abilitiesAt: Ep, BOSSES: DATA.bosses, MANACOST: cg, xpForLevel, ultimateCast, ultimateTaunt, ultimateProgress, ultimateIndex, ULT_COOLDOWN, dungeon: { generate: () => dungeonGenerate(DATA.dungeon), hurt: dungeonHurt, rest: dungeonRest, trap: dungeonTrap, riddleAnswer: dungeonRiddleAnswer, pickRiddle: () => dungeonPickRiddle(DATA.dungeon), template: dungeonTemplate, enemy: dungeonEnemy, alive: dungeonAlive, data: DATA.dungeon } };
