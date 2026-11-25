# dba-next — base del nuovo Dragon's Bane Arena

Il gioco attuale resta `../DragonsBaneArena_v198_Equip.html`. Questa cartella è la base del progetto riscritto.

## Stato: il motore di battaglia è riscritto in moduli leggibili
| Modulo | Cosa fa | Righe |
|---|---|---|
| `src/engine/battle.js` | crea una battaglia (eroi, boss, compagni, oggetto motore) | 111 |
| `src/engine/step.js` | un passo di simulazione: timer, decisioni, movimento, pericoli, compagni, fine | 440 |
| `src/engine/bossAI.js` | fasi, muri, spuntoni, trappole, artiglio, Soffio, affissi, Ruggito, speciali | 267 |
| `src/engine/abilities.js` | le 18 abilità degli eroi + compagni | 118 |
| `src/engine/abilityUse.js` | quale abilità usa un eroe e quando (mana, tiro, cariche) | 94 |
| `src/engine/arena.helpers.js` | geometria arena, muri, bersagli, cure di gruppo | 100 |

**Dati ora leggibili (fatto):** `src/data/*.json` contiene classi eroe (31), abilità sbloccate per livello, costi mana, tipi di attacco base, rianimazioni del boss e scelte di squadra. `src/engine/data.js` ricostruisce `Ep(classe, livello)` a mano: identica all'originale su 31 classi × 80 livelli (2480/2480), e le battaglie restano identiche (5 scenari × 8 semi).

**Talenti, sinergie e formazione (fatto):** `src/data/talents.json` (12 talenti per archetipo), `src/engine/talents.js` (trova/applica talenti + sinergie combo), `src/engine/formation.js` (6 schemi di schieramento). Parità verificata anche con talenti assegnati agli eroi.

**Legacy residuo: nessuno.** `engine.deps.generated.js` è vuoto (0 byte): il motore di battaglia è interamente in moduli leggibili (aggiunti `effects.js`, `bossSignature.js`, `dualAbility.js` con dati in `src/data/`). Parità con l'originale verificata (vedi sotto).

**Equipaggiamento (calcolo fatto):** `src/engine/gear.js` riscrive a mano il calcolo di statistiche oggetti + bonus di set (b2 con ≥2 pezzi, b3 in più con ≥4), dati in `src/data/sets.json`. Parità con l'originale: `node tools/gear_parity.js <file_originale.js>` → 20000/20000 casi identici (il file originale si estrae da `reference/code/module_no_assets.js`: `ij`, `DBA_SETS`, `DBA_SETB`). Generazione oggetti: `src/engine/gearGen.js` (+ `src/data/gearGen.json`) riscrive `rj` con lo stesso ordine di tiri casuali: `node tools/gengear_parity.js <orig_rj.js>` → 300 semi × 30 oggetti identici (`tools/orig_rj.js` è già estratto dal vecchio gioco; si rigenera con `tools/extract_orig_rj.js <out.js> <data.json>`). Nel visore il pulsante 🎲 genera fino a 8 oggetti (uno per slot) per eroe. Regole di equipaggiamento: `gearEquip` in `gear.js` (stesso slot si libera; due mani ↔ mano secondaria), verificata solo con 3 casi a mano. Incantesimi + effetto a 5 pezzi: `src/engine/enchant.js` (+ `src/data/setFull.json`), parità con l'originale `node tools/enchant_parity.js tools/orig_enchant.js` → 20000/20000. In battaglia contano solo Furia e Baluardo (`enchantApplyBattle`). Incantare: `enchantCost` / `enchantApply` (letti dall'incantatore del mondo: costo ⛏ 4+3r, 🌿 3+2r, 🪙 150(1+r), r = gradino rarità; verificati solo a mano). Nel visore il menu "ench" per eroe applica Furia/Baluardo a tutti i pezzi, gratis (prova). NON ancora fatto: inventario, effetti fuori battaglia (vampirismo, oro, xp, raccolto…).

**Esperienza e livelli (fatto):** `src/engine/progression.js` (curva XP, guadagni per ruolo, XP a fine battaglia: sopravvissuto 80, caduto 30). Parità: `node tools/progression_parity.js tools/orig_progression.js` → 20000/20000. Nel visore, a fine battaglia gli eroi guadagnano XP e il livello viene salvato nel browser. Il visore ora ricava le statistiche dal livello con `levelUpGains` (guadagni per ruolo). `tools/sim.js` ora usa la stessa crescita per ruolo (`OLDGROWTH=1` per la vecchia formula semplice; `MIX=1` per un party variegato invece delle prime N classi, che sono tutte curatori e tank).

**Dungeon procedurale (logica fatta, senza grafica):** `src/world/dungeon.js` (+ `src/data/dungeon.json`) riscrive da `DBA_DG` (script_13): generazione 4–8 livelli di stanze con bivi, 1000 stanze preimpostate, eventi (nemico, miniboss, trappola, tesoro, indovinello), danni da trappola (70% attacco del boss), indovinelli (+25% PV / colpo 30%), recupero 15% a ogni stanza e nemici di stanza (`dungeonEnemy`, da `DBA_MKB`). Parità a seme fisso: `node tools/dungeon_parity.js tools/orig_dungeon.js` → 3000/3000 dungeon identici (strutture e etichette porte); `node tools/mkb_parity.js` → 500/500 (20 nemici ciascuno). `node tools/dungeon_sim.js [livello] [eroi] [prove]` gioca dungeon interi senza grafica. NON fatto: schermate/3D del dungeon, tesori (`mkLoot`/`addLoot` del gioco originale, non riscritti), musica, mondo aperto (`DBA_OW`, 3D, ancora nel vecchio codice).

**Grafica 3D (prima versione):** `web/mini3d.js` (renderer WebGL 1 scritto a mano, senza Three.js: luce, nebbia, trasparenze, pavimento procedurale) e `web/scene3d.js` (arena con colonne e braci, boss modellato con forme semplici, eroi colorati per ruolo con ombre, telegrafi, spuntoni, muri, proiettili/impatti/aure dagli eventi del motore, barre PV/mana e numeri di danno). Si attiva con la spunta "3D" in `web/index.html`; trascina per ruotare, rotella/pizzico per lo zoom, doppio clic per la rotazione automatica. Scelta fatta perché Three.js non era scaricabile qui; passare a Three.js (Vite) in seguito è possibile cambiando solo questi due file. Seconda passata: boss drago con collo, mascella, spuntoni dorsali, ali che sbattono e fuoco in bocca quando lancia; eroi con equipaggiamento per ruolo (tank spada e scudo, curatore bastone con sfera, a distanza arco/sfera, melee armi), affondo in avanti quando attaccano, lampo rosso quando colpiti, caduta a terra, particelle a ogni colpo/cura. Terza passata: `web/bosses3d.js` dà un corpo diverso a ogni tipo di mostro — orco, troll, golem, ciclope, minotauro, demone, cavaliere della morte, lich, gargoyle, ragno, idra a tre teste, kraken — mentre i 20 draghi restano il modello drago, differenziati da colore e stile (spettrale trasparente, magma/fenice/luce luminosi, ecc.). Quinta passata (ambiente): il terreno usa le texture del gioco originale per bioma (12 immagini da `DBA_BIOTEX`, ridotte a 512×256 e incorporate in `web/biomeTex.js`, rigenerabile dalle immagini in `assets/img/`), con colori di nebbia, luce e anello dell'arena presi dai dati di ogni boss (`arena`), rocce e cristalli attorno all'arena, selezione del boss nel visore. I biomi sabbia e caos non hanno texture nel gioco originale (nel vecchio codice usano un terreno generato): qui restano senza texture. Quarta passata: ogni classe eroe usa arma (11 tipi) ed elmo/copricapo (6 tipi) letti dai suoi dati. NON fatto: texture (le 76 immagini del vecchio gioco non sono ancora usate), ambienti diversi per i 14 biomi, forme dei draghi diverse tra loro, ombre vere, 3D del dungeon/mondo.

## Come provare
- `node tools/sim.js <livello> <bioma> <tier> <prove> <eroi>` — simula battaglie (≈25 ms l'una).
- `node tools/parity.js <coreA> <coreB> <livello> <bioma> <tier> <semi>` — confronta il motore originale (`engine.core.generated.js`) con il nuovo (`engine.core.v7.js`) usando lo stesso seme casuale: HP di boss ed eroi ogni 5 s devono coincidere. Variabile `NH` = numero eroi (max 31).
  Esempio: `NH=31 node tools/parity.js engine.core.generated.js engine.core.v7.js 13 6 1 10`
- `tools/closure.js` ricalcola l'estrazione delle dipendenze dal vecchio gioco (`NODE_PATH=/opt/node-tools/node_modules`).

## Risultati dei test di parità (nuovo = originale)
9 scenari × 10 semi = 90 battaglie, tutte identiche: livelli 2–40, biomi 1–13, tier 0–4, party da 5, 14 e 31 eroi (tutte le 18 abilità e le decisioni del giocatore comprese).
Non coperti: controllo manuale di un eroe (`window.__dbaCtl`, schivata), abilità con tempo di carica (nessuna nelle classi base).

## Cartelle
- `reference/code/` codice del vecchio gioco spezzato (sola lettura). `assets/img/` 76 texture. `docs/MAPPA.md` mappa dei sistemi.

## Come riprendere (anche in una nuova sessione)
1. Leggi questo README e `docs/MAPPA.md`; esegui `NH=31 node tools/parity.js engine.core.generated.js engine.core.v7.js 13 6 1 8` → deve stampare `identici 8/8`.
2. Scegli un pezzo legacy dall'elenco sopra (aggiungi `TAL=1` al test per includere i talenti), riscrivilo in un modulo `src/engine/*.js`, toglilo da `PROVIDED` in `tools/closure.js` (es. `PROVIDED=Kc,Ep,DBA_TAL,DBA_TALFIND,DBA_TALAPPLY,DBA_SYN,DBA_FORM,… OUT=../src/engine/engine.deps.generated.js node closure.js`) e ripeti il test di parità.

## Prossimi passi
1. Visore 2D con scelta del party (fino a 20 classi), livello e 3 talenti per eroe, tutto salvato nel browser: `web/index.html` (apri col browser; ricrea il bundle con `node tools/bundle.js`). Mostra arena, boss, eroi, barre vita; disegna anche telegrafi, muri, spuntoni e numeri di danno.
2. Mondo aperto, interfacce complete, grafica 3D (Three.js) e multiplayer: non iniziati.
3. TypeScript + progetto Vite sul tuo computer (qui non si può installare Vite).
3. Mondo, interfacce, grafica nuova, multiplayer (vedi `docs/MAPPA.md`).

## Modelli eroe originali (razza × classe)
- `web/wowbuild.js` = **testo originale** di `WOW_build`; `web/wowdata.js` = `WOW_RACES`, `WOW_CLS`, `WOW_skin`, `WOW_merge`, `DBA_HOLD`… estratti dall'originale.
- `web/threeshim.js` = mini-Three.js (geometrie vere: sfera, cilindro, cono, box, icosaedro, ottaedro, toro) per far girare il codice originale senza Three.js.
- `web/hero3d.js` = converte il grafo di scena in mesh Mini3D (colori per vertice, unlit per i bagliori) e anima camminata/attacco/caduta.
- `web/models.html` = galleria: una classe, tutte le razze, o tutte le classi.
- `tools/wow_test.js` = costruisce tutte le 31 classi × 13 razze × 2 sessi (806 combinazioni, 0 errori).
- Razza/sesso/capelli per eroe: deterministici dall'id (l'originale usa Math.random).
- Equipaggiamento visibile: `hero._items` (impostato in index.html dopo gearApply) → `A._eq` per WOW_build (elmo, petto, spalline, arma, mano secondaria); colori per oggetto da `WOW_skin` (hash dell'id, come l'originale). Etichetta "Classe - Razza" sopra gli eroi (`S3.showNames`).
- NON fatto: texture di stoffa/metallo, ombre, modelli boss originali, animazioni fini (cape/gonne).

## Modelli boss originali
- `web/bossbuild.js` = testo ORIGINALE di `DBA_BM` (palette PAL, sagome HM, drago/umanoide/ragno/kraken); `web/bossAtlas.js` = script_18 originale (3 atlanti, 24 celle → `DBA_BCELL`); `web/boss3d_orig.js` = disegno con Mini3D (UV, texture REPEAT, mappa emissiva, doppia faccia) + animazione semplice (ali, mascella, coda).
- Mini3D: `makeMesh(v, uv)`, `makeTex(canvas)`, opzioni `tex/etex/rep/ec/unlit`. Shim: capsula, UV su tutte le primitive.
- `web/bosses.html` = galleria dei 32 boss (`?i=N&d=distanza&y=rotazione`); `tools/boss_test.js` costruisce tutti e 32 (0 errori).
- Fallback: se l'atlante non è pronto o `window.__bossModels=false`, si usano i vecchi modelli semplici.
- NON fatto: animazioni originali di DBA_R3 (camminata, attacchi, morte), i boss 8 senza atlante usano la texture procedurale dell'originale, ombre, effetti particellari del boss, confronto affiancato col gioco originale, camera di battaglia più vicina.
- Camera di battaglia: segue il punto medio boss/eroi vivi, dist 19 (rotella 10–60).

## HUD di battaglia (copiato dall'originale)
- `web/hud.js`: barra HP boss a tutta larghezza, pillola "HP boss", titolo/sottotitolo/difficoltà, "Sopravvissuti x/y + tempo", fila icone classi (spente se morte), carte eroe (livello, nome, HP verde, mana blu / furia arancione, lampo rosso quando colpiti). Solo DOM/CSS, sovrapposto al 3D (`#v3`).
- NON fatto: pulsanti in alto a destra (tastiera, libro, pausa, 1×/2×, ?), Esci/schermo intero/impostazioni, barra e pulsanti ULTIMATE (la logica non è nel motore: da capire dal codice UI originale), cerchi d'area colorati a terra, pulsante "layers".

## Ultimate manuale
- `src/engine/ultimate.js` (riscritto da `forceUlt/press` dello script_11 originale): l'ultimate = ULTIMA abilità dell'eroe, ricarica 8 s (tempo di simulazione, non Date.now), costo mana per tipo, rifiuti con gli stessi messaggi ("Mana esaurito", "Nessun ferito", "Visuale interrotta"…); modalità "🎯 Provoca" (boss punta l'eroe 4 s). Esposti: `ultimateCast/ultimateTaunt/ultimateProgress/ULT_COOLDOWN`.
- HUD: icone classe = pulsanti con riempimento di ricarica, barra oro "N/M ULTIMATE PRONTE", badge ULT sulle carte, testo fluttuante col nome dell'abilità.
- Test: `node tools/ult_test.js` (48 lanci riusciti in 18 s simulati; rifiuti coerenti). NON confrontato con l'originale a parità di seme (l'originale dipende da Date.now e dal DOM).

## Banner di fase, statistiche di fine battaglia, pulsanti (HUD)
- Banner "FASE 2 · il boss accelera!" (`boss._p2`, a ≤70% HP), "FURIA · attacco +50%!" (`enraged`), "FASE 3 · attacco finale!" (`_p3`, ≤20%) — testi dall'originale.
- Schermata fine battaglia "Vittoria!/Sconfitta" con tabella Danno / Cure / Subito per eroe (massimi in oro, come nell'originale), nota XP e pulsante "Nuova battaglia". Dati da `HUD.feed(eng, eventi)`.
- Pulsanti in alto a destra: pausa (`window.__paused`) e velocità 1×/2×. Verificato: la pausa ferma `eng.time`; i banner con flag forzati; la tabella a fine battaglia.
- NON fatto: banner non osservati in una battaglia reale (solo con flag forzati), tastiera/libro/?/Esci/schermo intero/impostazioni, tabella non confrontata cifra per cifra.

## Animazione boss (formule dell'originale, ANE)
- Velocità del boss → `mv=min(1,v/3.5)`, fase passo `ph=t*(5+min(8,v*.5))`: gambe (±sin·.75), artigli (±sin·.6), ondeggio/rimbalzo del corpo, coda a onde, ali su `rotation.x` (non z), mascella alla cast.
- NON fatto: animazioni di attacco/morte (lunge, artigli, rinculo) di DBA_R3; i frame sono stati controllati solo come valori numerici (ala 0.10→0.21 rad) e senza errori, non confrontati in video con l'originale.

## Cerchi d'area a terra
- `web/vtex.js` = testo ORIGINALE di `DBA_VTEX` (disegni per tipo: shockwave, meteor, frost_storm, root, poison, shadow_wave, lightning_storm, generico). Mini3D: opzione `ta` (usa l'alpha della texture). Ogni telegraph: riempimento tenue + disegno texturizzato che ruota + anello + sfera al centro.
- Verificato: renderizzati con telegraph forzati (2 visibili in inquadratura: cerchio con spirale/raggi); nessun errore. NON verificato: tutti i 7+ tipi a schermo, confronto con l'originale (che sembra riempire il cerchio più pieno), zone degli eroi (cure/muri) e spuntoni.

## Pulsanti e tasti dell'HUD
- In alto a sinistra: schermo intero (⛶), impostazioni (⚙: etichette Classe-Razza, modelli eroe/boss originali, rotazione camera). In alto a destra: tasti (⌨), pausa, 1×, 2×, aiuto (?).
- Tasti: Spazio pausa · 1/2 velocità · F schermo intero · N nomi · R rotazione camera · U ultimate di tutti gli eroi pronti · Esc chiude i pannelli.
- Verificato in Chromium headless: velocità, pausa, tasto N, impostazione modelli boss, U (3 ultimate lanciate su 8 eroi), pannello aiuto. NON verificato: schermo intero reale (API del browser), uso su telefono/touch, pulsanti "libro" ed "Esci" dell'originale (non portati: compendio e menu principale non esistono ancora qui).

## Effetti degli attacchi (scene3d.js, `event()`)
Porting degli effetti dell'originale per tipo di evento: raggio (Lt: slash, cure), proiettile (Jt), esplosione (se), maledizione che sale (Je), anello (Ne), cupola, fulmine (DBA_BOLT), pioggia, soffio del boss (cono) e particelle.
- Verificato a schermo: slash, slash_big, fulmine, pioggia, maledizione, proiettile, esplosione, anello, cupola, soffio, raggio di cura.
- Debug: `window.__fxlife=40` allunga la vita degli effetti, `window.__fxp=.4` ne congela il progresso (utile per gli screenshot).
- Non ancora portati: zone degli eroi, spuntoni DBA_SPK, effetti a tema DBA_FX, animazioni di attacco/morte del boss.

## Spuntoni del boss (scene3d.js)
Porting di DBA_SPK/DBA_PR: forma e colore per tema (lava/horn, ice, crys, thorn, shade, bone, stone, water, bolt-pilastro), crescita in 0,25 s dopo lo scatto, dissolvenza, disco di avviso prima dello scatto.
- Verificato a schermo: tema fire (lava) e crystal. Frost e nature renderizzati ma non ispezionati.
- Non verificato: bolt/water/shade/bone/stone; confronto pixel con l'originale; fulmine DBA_BOLT allo scatto degli spuntoni di tema bolt.
- Ancora da portare: zone degli eroi (cura/muro), trappole a tema (DBA_TRAPFILL), DBA_FX a tema, animazioni di attacco/morte del boss.

## Muri, trappole, area di copertura (scene3d.js)
Porting di DBA_WALL / DBA_TRAPFILL / coverage_spawn: muri a tema (merli di lava, cristalli, spine, teste d'osso, lastra luminosa con pali per bolt/water), crescita 0,5 s e calo finale 1,2 s; trappole con anello + disco + mini-spuntoni (o sfera per bolt); area di copertura come disco + anello.
- Verificato a schermo: temi fire e storm (muri, trappole, area). Frost renderizzato ma non ispezionato.
- Non verificato: altri temi, trappole nel combattimento reale (oggetti inseriti a mano), confronto pixel con l'originale; texture a tema sul disco della trappola/area (uso colore piatto, non DBA_ETEX).
- Ancora da portare: zone degli eroi, DBA_FX a tema, animazioni attacco/morte del boss.

## Effetti a tema + animazioni del boss (scene3d.js, boss3d_orig.js)
- DBA_FX portato come `S3.themeFx(tipo,pos,colore,raggio)`: shockwave, meteor, frost_storm/ice_lance, lightning_storm/storm, tide, poison, void/shadow_wave, root, bolt1 (con la regola DBA_TY: tema bolt→fulmini, water→marea). Usato da `spike_trigger` / `trap_trigger` (mappa tema→effetto come DBA_TRIG). Cerchio runico con la texture DBA_VTEX del tipo.
- Animazioni del boss come `ur` dell'originale: bossSlash/bossGroup (artigli su, affondo), bossAoE (soffio: mascella + gonfiore), bossWind (carica ruggito/artiglio). Morte: crollo con rotazione 1,25 rad, esplosione e particelle.
- Verificato: themeFx visto a schermo per shockwave, frost_storm, lightning_storm, void/rune (cerchi); numericamente: rotazione di artigli e mascella per le 4 animazioni (es. slash: artiglio dx -2.03 rad, soffio: mascella +.72).
- NON verificato a schermo: meteor, tide, poison, root (particelle piccole, non distinguibili nello scatto); morte del boss (coperta dalla schermata finale nello scatto); (special_trigger ora collegato a themeFx: verificato a schermo con shockwave e frost_storm).

## Effetti di classe, impatto e scossa (scene3d.js: `classFx`, `shake`)
Porting di DBA_CLSFXI (21 classi: foglie, gocce, sigilli, pilastri di luce, risucchio di sangue, archi di lama, scie, nubi, schegge di ghiaccio…), DBA_FXPLUS (lampo all'impatto, scia per attacchi lontani, max 7 ogni 250 ms, onda per colpi grandi) e DBA_HITFX/DBA_SHAKE (scossa dello schermo per boss/esplosioni/fulmini ecc.).
- Verificato a schermo: druido, monaco, chierico (sigillo), paladino (pilastro), scie e lampi d'impatto.
- Non verificato a schermo: le altre classi (mago, crio_mago, fulmine_mago, stregone, necromante, assassino, ninja, arciere, cacciatore, spadaccino, gladiatore, boia, cavaliere oscuro, mago_sangue, barbaro, guardiano, guerriero); la scossa dello schermo (codice scritto, non misurato). Gli archi di lama (guerriero ecc.) sono approssimati con sfere lungo l'arco, non con il toro dell'originale.

## Modalità Dungeon (web/dungeon_ui.js + pulsante "🏰 Dungeon")
Flusso di DBA_DG: 4–8 livelli di stanze con bivi (Sinistra/Dritto/Destra), eventi nemico/miniboss/trappola/forziere/indovinello, recupero 15% PV a ogni stanza, porta del boss. Usa la logica già portata (`DBAEngine.dungeon`) e battaglie 3D reali (`runBattle` in index.html, eroi caduti restano caduti, PV riportati tra le stanze). Il bottino dei forzieri finisce in `localStorage.dbaNextStash` (ancora senza schermata inventario).
- Verificato: partita completa automatica fino a "Dungeon completato" (con livello 1 del boss), tutti i tipi di evento attraversati senza errori JS; sconfitta → "Riprova/Esci".
- NON verificato / differenze: la stanza è una scena 2D semplificata (emoji del tema + porte), NON la stanza 3D dell'originale (DBA_X.R3, porte che si aprono, trappole animate); niente musica del dungeon; il bilanciamento (PV/attacco dei nemici in rapporto al livello degli eroi) non è confrontato con l'originale — con eroi lv 10 e boss scalato a lv 30 il party perde.

## Inventario (web/inventory.js + pulsante "📦 Inventario")
Porting della schermata b$/S$/_$ dell'originale: membri del party con griglia degli 8 slot (clic per togliere), filtri per slot e "Solo set", carte oggetto con colore rarità, statistiche scalate per livello (DBA_EFF), confronto ▲/▼ con l'oggetto equipaggiato (DBA_CMP), "⭐ Evidenzia migliori" (dbaScore), seleziona/elimina, popup Confronto → "Equipaggia" (`gearEquip`: libera lo slot, arma a due mani libera la mano secondaria). Magazzino unico in `localStorage.dbaNextInv` (oggetti con `equippedTo` = classe dell'eroe); migra i vecchi `cf.items` e `dbaNextStash`. Il bottino dei forzieri del dungeon e il pulsante 🎲 finiscono qui; gli oggetti equipaggiati contano in battaglia (`hero()`).
- Verificato a schermo: apertura, evidenzia migliori, equipaggia, nessun errore JS.
- NON portato: vendi/smantella (DBA_ECO, serve il mondo aperto), icone SVG degli oggetti (DBA_svg: uso emoji), testo bonus set (DBA_SETTXT), incantesimi/aspetto sulle carte, Grimorio (DBA_GRIM.scan). Il bottino dei boss normali non viene ancora assegnato (solo dungeon e 🎲).

## Three.js ORIGINALE + mondo aperto e dungeon 3D originali (grosso salto)
Scoperta: il bundle originale contiene Three.js completo. `tools/closure2.js` (closure delle dipendenze, ora anche con gli assegnamenti statici `Classe.prop=` e gli IIFE `window.DBA_PRISM/HMAT/VILTEX/NMB/O6N`) estrae DBA_W (mondo), DBA_R3 (stanze dungeon), DBA_X, i set/talenti/ecc. e Three.js necessario: `tools/world_bundle.js` genera `web/world.bundle.js` (870 KB) e `web/assets.js` (72 texture come data-URI, 7 MB; servono data-URI perché WebGL non accetta immagini file://). Insieme agli script originali `web/orig/script_13/16/17/20.js` (DBA_OW, DBA_DG, DBA_PICK, ECO, ITV, audio, set) girano nel nuovo progetto:
- **🌍 Mondo aperto** (`DBA_OW`): villaggio di partenza, HUD, minimappa, missioni, mercanti, nemici nel mondo, cripte, ondate, impostazioni di visuale… è il codice originale.
- **🏰 Dungeon** (`DBA_DG` + `DBA_R3`): stanze 3D originali (sostituisce il mio dungeon semplificato, rimosso).
- Le battaglie lanciate dal mondo/dungeon usano il MIO motore e la MIA scena 3D (`runBattle`), con `__arenaKey` per l'arena; poi si torna al mondo (sconfitta → "Risorgi al campo").
- Ganci verso l'app (`worldHooks` in index.html): inventario (`__dbaGetInv/MapInv/OpenInv`), XP (`__dbaGiveXp`), party (`__dbaGetParty`), bottino (`sjLoot` = sj dell'originale).
- Verificato: avvio senza errori JS; villaggio con texture; movimento (lento nel sandbox: ~10 fps); teleport davanti a un nemico → battaglia nella mia scena → sconfitta → ritorno al mondo; stanza 3D del dungeon.
- NON verificato: vittoria in battaglia e consegna di bottino/XP dal mondo, mercanti/forgia/pesca/locanda, mappa, cripte, ondate, salvataggi del mondo, audio (AudioContext bloccato in headless), prestazioni su telefono, bilanciamento (il party lv 10 perde contro i boss del mondo), "Esci/Indietro" dal dungeon, schermo intero.

## Verifica del mondo aperto (controllo generale)
- Corretto: mancavano gli helper host `__dbaFSget/__dbaFSOn/__dbaFSOk/__dbaFS` (schermo intero) usati dal menu originale → definiti in `web/index.html`; ora aprendo diario/mappa/zaino/impostazioni nessun errore JS.
- Verificato: `__dbaGiveXp(3000)` porta tutto il party da lv 5 a lv 9 (xp 100) e salva; XP in mondo arriva solo da `reward()` (missioni), non dalle uccisioni semplici, come nell'originale.
- Regressione: parità 5/5 (parity), 300/300 (gengear), 20000/20000 (enchant, progression), 3000/3000 (dungeon), 500/500 (mkb); ult_test, boss_test, wow_test eseguiti senza errori; pagina battaglia normale senza errori JS.
- NON rieseguito: gear_parity (richiede il file originale estratto), mercante/missioni a fondo (solo aperti i pannelli), salvataggio del mondo, cripte/ondate, musica, touch/schermo intero reale.

## Avvio originale (script_15) + Diario
- `web/orig/script_15.js` (originale) è caricato all'avvio: accesso come ospite → scelta "Esperienza completa" (apre il mondo aperto) / "Esperienza veloce" (resta sul visore: battaglia, dungeon) → alla ricarica "Continua la partita precedente / Cambia modalità". Colla in `index.html`: `__dbaLastInfo`, `__dbaStart`, `__dbaSetLast`, chiave `dbaNextLast`. `?nointro` salta la schermata (usato dai test automatici).
- Bestiario, Imprese, Grimorio, Reputazione sono già dentro il Diario di script_13: aperti e senza errori JS (tutti a zero in una partita nuova).
- Verificato (headless): ospite → completa → mondo; ricarica → continua → mondo; veloce → nessun mondo; 0 errori JS.
- NON fatto/verificato: accesso Google/Apple e sync cloud (richiedono client id e server `syncUrl`, non configurati), "Comandi 1 eroe" (`__dbaCtl`), musica.

## Comandi 1 eroe (script_14)
- Menu 🎮 nella barra in alto: scegli un eroe e lo controlli tu (gli altri restano automatici, con ultimate automatiche); "🤖 Automatico" per tornare indietro. `window.__dbaCtl={on,id}` come nell'originale: il motore già gestiva coda manuale `_mq` e schivata `_dgReq`.
- `web/orig/script_14.js` (barra originale: abilità 1–9, ULT, Schiva con ricarica/mana/cast bar) + ponte in `index.html`: `__dbaKe` (motore corrente), `__dbaPress` (ultimate), `__dbaUAt` (proxy: progresso ultimate), `DBA_G` (costi mana da `DATA.manaCost`).
- `hud.js`: con un eroe controllato Spazio/1–9/U non fanno più pausa/velocità (sono abilità, schivata, ult).
- Verificato (headless): barra con costi mana corretti; tasti 1/2 mettono in coda le abilità (ricarica parte); Spazio → schivata (spostamento + ricarica 3 s); U → ultimate parte; 0 errori JS; test mondo/Diario ancora ok.
- NON verificato: tocco/mobile, tasti personalizzati (`DBA_KEYS`, impostazioni tastiera originali non portate), sovrapposizione della barra col pannello eroi in finestre piccole (l'originale la riposizionava a mano), telecamera "terza persona" (`__dbaSetCam`).

## Musica ed effetti sonori
- Musica: `tools/music_extract.js` estrae dall'originale (`module_no_assets.js`) le 40 tracce + la classe sintetizzatore (WebAudio procedurale: pad, arpeggio, basso, riverbero) in `web/music.js` ed espone `window.DBA_MUS()` come l'originale (il mondo e il dungeon la avviano da soli). Nella barra in alto: 🎵 play/pausa, ⏭ traccia, volume (salvato), nome traccia.
- Effetti: `script_16` (originale) era già caricato: suono dei click e dei toast; ora `index.html` chiama `window.__dbaEv(eng, eventi)` a ogni passo del motore, quindi colpi/cure/morti/avvisi/ruggiti suonano in battaglia.
- Verificato (headless): AudioContext "running", tempo audio che avanza, play/pausa/next/volume funzionano, la musica parte entrando nel mondo, 96 eventi in 4 s passati agli effetti, 0 errori JS.
- NON verificato: l'ascolto vero (nessuna uscita audio nel test) quindi bilanciamento volumi, qualità e mix musica/effetti; autoplay del browser (la musica parte solo dopo un clic); pannello accessibilità/audio originale (ci sarà ma non provato).

## Schermata d'ingresso fedele (start.html)
- Nuovo punto d'ingresso `web/start.html`: splash originale → accesso/modalità (script_15) → **2 slot di salvataggio** → **"Componi il tuo party"** → "⚔️ Entra nell'arena" → `index.html?slot=N`. `index.html` senza parametri rimanda a `start.html`; `?nointro` salta tutto (test).
- Markup e classi Tailwind copiati dall'originale v198; `web/start.css` = fogli di stile originali (font Cinzel incluso). `web/start.data.js` = sezioni/carte (icone, statistiche, gradienti) estratte dal gioco originale; `web/start.js` = logica.
- Funzioni: carte per sezione con contatore, nome personalizzato, Auto-riempi (20, con almeno 1 tank e 1 healer), roster con 🎨 ✕, avviso tank/healer mancanti, 🔍 Visualizza 3D (piattaforma girevole `web/preview3d.js`), 🎨 Personalizza (razza, sesso, colore pelle, capelli, colore capelli, barba, anteprima 3D; `hero3d.js` accetta `h.look`), slot con Continua/Elimina.
- Viewer: legge il roster dello slot (eroi duplicati, nomi e aspetto personalizzati), mostra il selettore originale `DBA_PICK` (Automatico / Comanda 1 eroe; Dungeon / Boss / Open world), pulsante ☰ Menu per tornare ai salvataggi.
- Verificato (headless, confronto visivo con screenshot dell'originale): splash→slot→party, 31 carte, aggiunta/rimozione, 3D, 🎨, salvataggio roster per slot, ingresso nel viewer con 5 eroi (2 Bardo duplicati + nome "Gandalf"), Solo boss fight, 0 errori JS; regressioni mondo/Diario/comandi/musica ok.
- NON verificato / diverso: aspetto di uno slot già pieno (nell'originale non l'ho potuto vedere: la mia è un'interpretazione); pulsanti in alto dell'originale (Bestiario, Spellbook, Grimorio, Impostazioni) e 💾/⌨/📚 non portati nella schermata party; "Come si gioca" omesso (niente tutorial contestuale, come richiesto); sottotitolo originale "23 classi" copiato anche se le carte sono 31; "Anteprima elmo" non portata; livelli/talenti/equipaggiamento restano per classe (eroi duplicati della stessa classe li condividono); XP/livelli del mondo per classe; mobile/touch non provato; nessun confronto pixel per pixel.

## Progressione per singolo eroe
- Con un roster da slot, livello, XP, talenti, incantesimo ed equipaggiamento sono per **eroe** (chiave `u<uid>`), non più per classe: due Bardo possono avere livelli e oggetti diversi. Il pannello "Party, livelli, talenti ed equipaggiamento" e l'Inventario elencano ogni eroe col suo nome. Senza slot (`?nointro`) resta il comportamento per classe.
- Verificato (headless): 3 eroi (2 Bardo + Cavaliere) con livelli 5/20/7 e un oggetto solo al secondo → HP e oggetti indipendenti; XP del mondo (3000) applicata a ciascuno con la sua curva; l'Inventario mostra Alfa e Beta separati; 0 errori JS; regressioni ok.
- NON verificato: salvataggio del roster dopo cambi di livello in un reload completo del mondo; migrazione di vecchi salvataggi per classe verso quelli per eroe (non necessaria per slot nuovi).

## Servizi del mondo (verifica a fondo)
- Nuovo: nell'Inventario, con oggetti selezionati e il mondo aperto attivo, compaiono **💰 Vendi (+monete)** e **🔨 Smantella (+⛏/🌿)** come nell'originale (`DBA_ECO`/`DBA_ITV` di script_13); fuori dal mondo il testo "Vendi/Smantella: disponibili nel mondo aperto". Gli oggetti equipaggiati non si vendono.
- Corretto: `threeshim.js` non aveva `Color.setRGB/setHex` → errore `color.setRGB is not a function` riprendendo un mondo salvato (ora aggiunti).
- Verificato (headless): vendita 8 oggetti → inventario 0 e monete 0→34; Mercato (offerte del giorno -30%, "Compra 5 pesci" 90🪙: 304→214, "Vendi tutte le risorse" +25), menu Mappe del tesoro (mappa in vendita a 150🪙), 🎒 → Vendi; salvataggio del mondo: uscita con 🚪, nuovo ingresso → "Continua l'avventura" → stesse monete (262→262), 0 errori JS.
- NON verificato: Fabbro/Gioielliere/incantatore fisicamente nel villaggio (aperti solo tramite menu, non camminando fino agli NPC), missioni giornaliere completate fino alla ricompensa, cripte/ondate/arena, mappe del tesoro con scavo, reputazione con acquisti, vendita di pezzi oro/rossi (conferma del browser accettata nel test). In un test su tre la schermata "Continua l'avventura" non è comparsa subito dopo l'uscita (non chiarito se tempistica del test o salvataggio ritardato).

## Correzioni dopo la prova su PC (tasti, minimappa, razze)
- **Tasto F (e altri) con il mondo aperto**: `hud.js` (Spazio, 1/2, F=schermo intero battaglia, N, R, U) e la barra "Comandi 1 eroe" (`__dbaKe`) rispondevano anche con mondo/dungeon aperto → F vicino a un NPC apriva la schermata del boss. Ora l'HUD ignora i tasti se `#dbaDG` è visibile e `__dbaKe` è nullo mentre il mondo è aperto (i combattimenti dentro il mondo, a overlay nascosto, funzionano come prima).
- **Minimappa schiacciata**: la regola globale `canvas{height:62vh;min-height:320px}` della pagina colpiva anche il canvas del mondo (110×110 → 110×320). Ora vale solo per `#c`.
- **Razza che cambia cambiando grafica**: il mondo originale assegna una razza casuale a un eroe senza `appearance` a ogni ricostruzione dei modelli. Ora ogni eroe ha `appearance` stabile (calcolata da id+classe+personalizzazione 🎨, stessa funzione del 3D della battaglia), quindi razza/colori restano uguali anche cambiando grafica o riaprendo il mondo.
- Corretto anche: id degli eroi = chiave del loro equipaggiamento (`u<uid>` / classe) → Fabbro, Gioielliere e talenti del mondo vedono i pezzi equipaggiati (prima "0 pezzi").
- Verificato (headless, 1500×850): minimappa 110×110; F vicino alla locanda apre il menu, niente schermo intero; razze identiche prima/dopo `setParty`; personalizzazione orco/femmina rispettata nel mondo; Fabbro (+1 pezzo), Talenti (scelta), Riposa, Gioielliere, Incarico, Anziano (accetta missioni), Taglia, Contratti, Arcanista, Negozio, Arena si aprono; potenziamento Fabbro consuma 2⛏+40🪙.
- NON verificato: il cambio di "modalità grafica" vero e proprio dalle impostazioni del mondo (ho verificato la ricostruzione del party, non il pulsante); gli altri tasti del mondo su tastiera reale; completamento di missioni fino alla ricompensa; mobile.

## Eroe senza equipaggiamento = nessun capo indossato
- `wowbuild.js` (e la stessa patch in `world.bundle.js`): flag `A.naked` (nel mondo: l'eroe è nel party e non ha oggetti). Senza armatura: niente veste/corazza/cintura/spalline/mantello/extra di classe, corpo, braccia, gambe e piedi in colore pelle. Senza elmo: nessun elmo/cappello. Senza arma: mani vuote. Senza scudo: nessuno scudo.
- Per slot: se equipaggi solo l'arma, vedi solo l'arma, ecc.
- `hero3d.js`: calcola `naked` da `_items` (incluso nella chiave di cache). Valido in battaglia 3D, mondo, anteprime party.
- Nota: le anteprime di classe nel party ora mostrano l'eroe nudo finché non ha oggetti.

## Prova delle missioni fino alla ricompensa (solo verifica, nessun codice cambiato)
- Anziano → "Accetta tutte" → combattimento reale nel mondo (battaglia 3D, ~100 s in headless) → ritorno al mondo con contatore 1/9.
- Conteggi impostati direttamente su `__owQ` (9 mostri, 3 miniboss, 5 di notte, guardiano) → 4 pulsanti "Consegna": monete 250→350, 4 oggetti nell'inventario, progresso "4/5" per l'uscita e "4/6" per il cavallo.

## Parti dell'originale ora copiate (audit del bundle principale)
Confronto delle stringhe del bundle React originale (`module_no_assets.js`) con `web/`: mancavano queste parti, ora portate.
- `web/decision.js`: pannello **Scelta rapida** (eroe) e **Tattica di squadra** in battaglia, con barra del tempo. Il motore ferma il tempo e la scelta scade da sola: prima non c'era nessuna interfaccia.
- `web/result.js` + `showResult` in `index.html`: **schermata risultato** (VITTORIA/Sconfitta, Tempo/Sopravvissuti/Valutazione, "Saliti di livello" con nuove abilità, carte XP, **Bottino del Drago** con Raccogli/Scarta, Prossima battaglia/Inventario/Nuovo party/Riprova). Solo per le battaglie semplici; dungeon e mondo hanno il loro flusso.
- Corretto: l'XP della battaglia semplice si salvava sulla chiave di classe e non su quella per-eroe (`hc[h.id]`).
- `web/topbar.js`: **📖 Bestiario, 📖 Spellbook, 📕 Grimorio, ⚙ Impostazioni** nella schermata slot/party e nel visore.
- Impostazioni: telecamera Orbita / 3ª persona / 1ª persona (con distanza), "Livello nel nome", più la sezione originale `DBA_SETSEC` (difficoltà, qualità). Salvate in `dbaNextSettings`; `scene3d.js` le applica.
- Personalizzazione eroe: pulsante **Anteprima → Senza elmo**.
- `engine.bundle.js` / `tools/bundle.js`: esportati `abilitiesAt`, `BOSSES`, `MANACOST`.

## Inventario: testi come l'originale
- `inventory.js`: il confronto sulle carte ora è identico a `DBA_CMP` (testi "vs <oggetto>: …", "Slot libero", "Uguale a …", "· toglie <oggetto>" per due mani/scudo) e c'è la riga del set ("🔥 Set Fenice: 1/5 su <eroe> · bonus 2/4 pezzi!") come `DBA_SETTXT`.

- Verificati (headless, condizioni forzate): Scelta rapida del singolo eroe (6 abilità del Paladino, il clic la applica) e schermata Sconfitta con "Riprova" che riavvia la battaglia.

## Catena missioni: consegna, uscita, salvataggio (verificato headless)
- Accettate e consegnate le missioni dei 3 anziani del bioma 0 (Cacciatori, Esploratori, Naturalisti) forzando i contatori `__owQ`.
- Contatore uscita 5/5 e "Cavallo da guerra" 6/6 ✅ ottenuta.
- Salvataggio `dba_ow_save4_0` + ricarica + "Continua l'avventura": le missioni consegnate (`cl`) sono identiche.
- NON verificato: apertura fisica del cancello d'uscita, missioni completate giocando davvero (contatori forzati), altri biomi.

## Cancello d'uscita (verificato headless)
- Dopo 5/5 missioni consegnate, `__owW.mapData().gates` mostra i 2 cancelli del bioma 0 con `o:true`; tutti gli altri restano chiusi (`0`).
- NON verificato: attraversare il cancello e arrivare nel bioma successivo.
- Attraversamento del cancello e passaggio al bioma successivo: verificato manualmente dall'utente (funziona).

## Niente boss fight dietro le schermate di scelta
- Prima la battaglia (party di default, Drago Infernale) girava dietro "Scegli la modalità" (modalità/Comanda 1 eroe). Ora, finché il selettore è aperto, la scena è nascosta e la simulazione in pausa; alla scelta parte la battaglia con il party del salvataggio (t=1s).
- Verificato headless: schermata modalità pulita, battaglia parte alla scelta "Solo boss fight", nessun errore. Schermata salvataggi (start.html) era già senza battaglia.
- NON verificato: "Annulla" sul selettore, scelta "Comanda 1 eroe" e "Dungeon"/"Mondo aperto" dopo il fix.
- Selettore modalità senza battaglia dietro: verificato manualmente dall'utente (funziona).

## Cripte (verificato headless, partita completa)
- Avvicinandosi a una cripta si apre "🏺 Cripta" → "Entra nella cripta" → dungeon di 6 stanze (Facile, boss Drago Infernale).
- Attraversate in automatico: trappola (Fiamme, il party resiste), bivi (1 o 2 strade), miniboss (battaglia reale vinta), indovinello (risposta sbagliata → danno), forziere (oggetto in inventario), nemico sbarra-strada (battaglia vinta), Porta del Boss.
- Uscita: ritorno al mondo con "🏺 Cripta completata! 🪙 +100 · ⛏ +8 · 🌿 +6"; la materia (🌿6 ⛏8) compare nei contatori. Nessun errore in console.
- NON verificato: che le 🪙 +100 vengano davvero sommate (la barra mostrava ancora 350 subito dopo), cripta persa/uscita con 🚪, stanze con altri eventi, contatore missione "Esploratore di cripte", biomi diversi dal primo.

## Lettore musicale come l'originale
- Aggiunti ⏮ "Brano precedente" e 🔊/🔇 "Muta" / "Riattiva audio"; i titoli dei pulsanti sono quelli dell'originale ("Riproduci"/"Pausa", "Brano successivo").
- Verificato headless: play, next, prev×2, muta, riattiva, pausa (stato e testi corretti, nessun errore). "Annulla" del selettore modalità ripristina la schermata (verificato).
- NON verificato: suono reale (solo stato del player, niente audio in headless).
- Scelta utente: gli eroi senza equipaggiamento restano nudi anche nelle anteprime di classe (nessun equipaggiamento di classe).
- "Come si gioca" resta omesso di proposito (niente tutorial).

## Mappe del tesoro e Ondate infinite (verificato headless)
- Mappa: creata, raggiunto il punto, "⛏ Qui sotto c'è qualcosa…" → Scava → "🏆 Tesoro trovato!" (+120🪙, +3⛏, +2🌿, un oggetto in inventario); la mappa viene consumata.
- Arena → "🌊 Ondate infinite": ondate 1-3 vinte con battaglie reali; monete 37/49/61 (25+12·w), oggetto alla 3ª ondata, record aggiornato (3); "🏳 Ritirati" torna al mondo sbloccato. Nessun errore in console.
- NON verificato: sconfitta in ondata (record + "lose"), sfida arena a 3 scontri, acquisto mappa, mappa con più biomi, ritrovamento mappe da forzieri/boss.

## Mobile / touch (iPhone 13 emulato, headless)
- Verificato: nessuno scorrimento orizzontale né pulsanti fuori schermo in start, salvataggi, selettore modalità, battaglia e mondo aperto (390px); il joystick touch sinistro registra l'input (stato y≈-0.96) con eventi touch reali (CDP).
- Osservato: nella schermata battaglia la barra superiore (livello, boss, party, musica…) occupa circa metà dello schermo su telefono e il titolo del boss si sovrappone al contatore HP.
- NON verificato: spostamento reale del personaggio con il joystick (in headless il framerate è troppo basso per misurarlo: anche il tasto W si sposta solo 1,45), tocco sui pulsanti d'azione, rotazione schermo, gesti pinch, dispositivi reali.

## Mobile: barra compatta
- Su schermi ≤700px la barra superiore parte compressa (solo Menu, ⚙, Nuova battaglia, Dungeon, Inventario, Mondo aperto, controlli musica); il pulsante ⚙ la espande (livello, scala, boss, party, Bestiario/Spellbook/Grimorio/Impostazioni). Su desktop il pulsante è nascosto e la barra resta intera.
- Titolo del boss spostato sotto i pulsanti e pillole HP/sopravvissuti più piccole su ≤600px: niente più sovrapposizione.
- Verificato headless (iPhone 13, 390px): barra compressa, espansione, ritorno desktop, nessun scorrimento orizzontale, nessun errore.
- NON verificato: telefoni veri, orientamento orizzontale, altre schermate strette (tablet).

## Orizzontale su telefono e preparazione GitHub
- Telefono in orizzontale (iPhone 13 landscape 750×342): la barra superiore si comprime anche con altezza ≤500px e l'area di battaglia usa tutta l'altezza (niente scorrimento forzato). Verificati salvataggi, selettore modalità, battaglia e mondo aperto: nessun elemento fuori schermo né errori.
- Repository: README riscritto (uso, struttura, stato e limiti), `.gitignore` (esclude `reference/`, zip, node_modules), `package.json` (`npm start`), workflow GitHub Pages (`.github/workflows/pages.yml`, pubblica `web/`), vecchio README spostato qui.
- Verificato: servendo `web/` da un sottopercorso (come su GitHub Pages) il gioco parte, nessun 404, nessun errore. NON verificato: il workflow su GitHub vero (non eseguito qui), nessuna licenza scelta.

## Rinominato in "Tiny World"
- Cambiato il nome visibile: titoli pagina, splash, intestazione, schermata d'accesso, messaggi, README, package.json. Verificato headless: nessun testo "Dragon's Bane" nelle schermate splash, accesso e salvataggi; nessun errore.
- Lasciati invariati di proposito gli identificatori interni (chiavi `dba_*` del salvataggio, variabili `DBA_*`, `game:'DragonsBaneArena'` nei file di esportazione) per non rompere salvataggi e backup esistenti.
- NON verificato: altre schermate (mondo, dungeon) e testi dentro gli asset immagine; eventuale nome nelle immagini incorporate.

## Boss fight sovrapposta a "Entra nell'arena" / scelta modalità (corretto)
- Cause: (1) per ~0,4 s dopo "Entra nell'arena" la battaglia di default era visibile prima del selettore; (2) alla scelta "Open world"/"Dungeon" il selettore si chiudeva e la battaglia riappariva sotto mentre il mondo si caricava; (3) la battaglia iniziale continuava a girare in sottofondo con il mondo aperto e, finendo, poteva far comparire il risultato (e dare XP) sopra al mondo.
- Correzioni (`web/index.html`): scena nascosta e in pausa dal primo istante con `?slot=`; resta nascosta finché il selettore è aperto e fino a quando parte il mondo/dungeon; il ciclo non avanza né chiude la battaglia di sfondo mentre il mondo/dungeon è aperto (le battaglie *dentro* il mondo funzionano come prima).
- Verificato headless: nessuna scena visibile da 50 ms dopo il caricamento; "Comanda 1 eroe" → "Open world" va dritto al mondo; tempo del motore fermo (0 → 0) con il mondo aperto; forzando la morte del boss di sfondo non compare alcun risultato sopra al mondo; ondata dell'arena (battaglia dentro il mondo) ancora vinta (+37🪙).
- NON verificato: stesso percorso per "Dungeon procedurale" dopo la correzione, e su telefono.

## Boss fight autonoma eliminata; battaglia solo negli incontri, a schermo intero
- Rimossi: la battaglia che partiva da sola al caricamento di `index.html`, il pulsante "🐉 Solo boss fight" del selettore, la barra di controllo (livello, scala, boss, party, musica, ecc.) e il pannello party sotto la scena. `start()` ora è un no-op: i combattimenti nascono solo da incontri (mondo, dungeon, cripte, arena, ondate) tramite `runBattle`.
- Interfaccia di battaglia: a schermo intero con il solo HUD (titolo boss, HP, sopravvissuti, pulsanti, barra ultimate, carte eroe), senza la barra di sviluppo. Il riquadro finale ha "Continua" (prima "Nuova battaglia") e porta subito al mondo/dungeon.
- "Annulla" del selettore, uscita dal dungeon e uscita dal mondo (🚪 due volte) tornano alla schermata dei salvataggi.
- Verificato headless: selettore senza "Solo boss fight" (modalità veloce: Dungeon; completa: Open world), niente battaglia/barra visibili a riposo, Annulla → salvataggi, dungeon si apre e 🚪 esce ai salvataggi, battaglia dell'arena a schermo intero e "Continua" torna al mondo in <0,5 s, 🚪🚪 dal mondo → salvataggi; nessun errore.
- Conseguenza: i controlli musica e i pulsanti Bestiario/Spellbook/Grimorio/Impostazioni non sono più nella barra in gioco (restano nella schermata salvataggi/party); in battaglia e nel mondo la musica parte da sola ma non ha comandi.
- NON verificato: battaglia dentro un dungeon/cripta con la nuova interfaccia, telefono (verticale/orizzontale) con l'interfaccia a schermo intero, sconfitta in battaglia di incontro.

## Allineamento HUD e arena 3D della battaglia a schermo intero
- HUD ristilizzato come l'originale (barra superiore, titolo con icone di rango, pulsanti ⌨ 📚 ⏸ 1× 2× ?, pillole HP/sopravvissuti, barra ultimate, carte eroe con barre numeriche e "Liv. N", pannello abilità).
- Etichette eroe "Classe · Razza" sopra le barre.
- Arena 3D (`scene3d.js`, `arenaProps`): bordo a cerchio oppure poligono (`arenaVerts`), coni sui vertici, 26 prop di tema a raggio 18-22 (fuoco, ghiaccio, natura, cristalli, ecc.).
- Verificato: screenshot headless con 20 eroi vs. originale (molto simili, non identici). Non verificato: confronto pixel per pixel, arene di tutti i temi, mobile con il nuovo HUD.

## Battaglia a schermo intero su mobile
- Sotto i 900px di larghezza o 500px di altezza le carte eroe stanno su una sola riga scorrevole (dock 71px) e la riga ultimate scorre in orizzontale; il pannello abilità scorre allo stesso modo. Prima, in orizzontale, la scena restava ridotta a una fascia sottile.
- Verificato: iPhone 13 emulato (390×844 e 844×390), 6 eroi, nessun errore JS. Non verificato: telefoni reali, 20 eroi su mobile, tocco sulle carte scorrevoli.

## Confronto sistematico originale / nuovo
- Confrontati splash, menu, slot, party, selezione modalità, mondo aperto, dungeon: identici salvo il nome (Tiny World) e il pulsante 💾 dell'originale. Il contenuto dei dungeon è casuale, quindi cambia da partita a partita.
- Difetto trovato e corretto: telecamera della battaglia. Ora parte come l'originale (dall'alto, inclinazione ~.87 rad, distanza 16, fissa) invece che bassa e in rotazione lenta automatica.
- Prestazioni misurate in headless (software GL, 20 eroi): originale ~1.7 fps, nuovo ~2.2 fps. Non dimostra nulla sulle prestazioni reali di un dispositivo.

## Terza modalità: Boss diretto
- Il selettore mostra ora tutte e tre le modalità: 🏰 Dungeon procedurale, 🌍 Open world, ⚔️ Boss diretto (prima nascondeva Dungeon o Open world in base alla modalità di salvataggio e non aveva il boss diretto).
- Boss diretto parte SOLO al click: `start()` crea lo scontro con tutto il gruppo; nessun boss in background prima della scelta. "Prossima battaglia" nel risultato ne avvia un altro, "Nuovo party" torna ai salvataggi.
- Verificato (headless): Boss diretto → battaglia → risultato → Prossima battaglia; Dungeon parte anche con "Comanda 1 eroe". Non verificato: Open world dal selettore dopo la modifica, "Comanda 1 eroe" in Boss diretto, telefoni reali.

## Licenza e texture degli alberi
- Aggiunto `LICENSE` (MIT) e aggiornata la sezione Licenza del README (i materiali dell'originale restano da verificare).
- Mondo aperto: gli alberi usano il codice originale (Three.js, shader triplanare con `bark` e `leaf`); nel confronto con l'originale texture e dimensioni immagine sono corrette, quindi non modificato.
- Arene di battaglia: i prop "albero" erano coni a tinta unita. Ora Mini3D ha una modalità di mappatura triplanare (`tri`) e gli alberi usano le stesse immagini corteccia/foglie dell'originale (tronco + chiome a cono o tonde).
- Verificato: screenshot di un'arena a tema natura (tronchi con corteccia visibili ai bordi). Non verificato: le chiome intere (la telecamera le taglia), altri temi, dispositivi reali.

## Confronto Bestiario / Spellbook / Grimorio / Impostazioni
- Bestiario, Spellbook e Grimorio: uguali all'originale (solo il titolo cambia in "Tiny World").
- Difetto trovato e corretto: nelle Impostazioni del menu mancavano Qualità grafica, Stile grafico, Lanterna notturna, Musica, Effetti sonori e Accessibilità. Causa: `start.html` non definiva `__dbaFSOn`/`__dbaFS` (nell'originale stanno in `script_10`), quindi lo script delle impostazioni si fermava a metà con un errore. Aggiunti gli helper a `start.html`.
- Verificato: le sezioni compaiono in headless, nessun errore JS. Non verificato: effetto reale di Qualità/Stile/Lanterna/Musica sul gioco, sezioni Effetti sonori e Accessibilità (sotto lo scroll), dispositivi reali.

## Confronto Diario, mappa, inventario nel mondo
- Diario e mappa: identici all'originale. Nota: la riga "Cavalcatura: nessuna (6 missioni riscosse in $(BN[0]))" mostra un segnaposto non sostituito anche nell'originale (bug originale, lasciato com'è).
- Inventario: aggiunto il contatore equipaggiati "n/8" per ogni eroe e il testo del vuoto come nell'originale ("Sconfiggi i boss per ottenere equipaggiamento!").
- Differenze rimaste (cosmetiche, non corrette): l'originale ha la freccia per comprimere le carte degli eroi e icone SVG al posto di alcune emoji; il pannello è una riscrittura (`inventory.js`), non il componente originale.
- Verificato: screenshot headless dell'inventario nel mondo, nessun errore JS. Non verificato: equipaggiare/togliere oggetti dopo la modifica, dispositivi reali.

## Stabilità: contesti WebGL in eccesso
- Misura (Chromium headless, grafica software, 8 s): costi JS simili a quelli dell'originale; l'originale ~1 fps, il nuovo 1-2 fps. Non emerge un collo di bottiglia JS, ma la misura non rappresenta GPU e memoria di un telefono.
- Differenza reale trovata: nel mondo aperto il nuovo creava 3 contesti WebGL (originale: 1): la scena 3D della battaglia (`#c3`, inutile finché non c'è uno scontro) e un contesto temporaneo usato solo per calcolare l'aspetto degli eroi, mai rilasciato. Sui telefoni i contesti extra consumano memoria e possono causare perdita di contesto/scatti.
- Corretto: la scena battaglia (`Scene3D`) viene creata al primo scontro (`mkS3()`); il contesto temporaneo viene rilasciato subito (`WEBGL_lose_context`).
- Verificato: nel mondo aperto restano il contesto del mondo e quello (rilasciato) temporaneo; Boss diretto → risultato → Prossima battaglia; scontro in arena a ondate. Non verificato: miglioramento reale su telefono (non misurabile qui), memoria, riutilizzo della scena battaglia dopo molti scontri.

## Stabilità: lavoro per fotogramma in battaglia
- Misura (20 eroi, headless): draw call per fotogramma ~516 nel nuovo contro ~794 nell'originale (il rendering 3D non è più pesante). Ma le mutazioni DOM erano ~200/s a 2.4 fps (≈85 per fotogramma) contro ~5/s dell'originale: a 60 fps sarebbero migliaia al secondo, un peso reale su telefoni.
- Corretto: `hud.js` scrive nel DOM solo quando il valore cambia (larghezze barre, testi, tooltip, sfondi delle icone ultimate); `scene3d.js` non riassegna più `width`/`height` della canvas overlay a ogni fotogramma (riassegnarla svuota e rialloca la canvas).
- Risultato: mutazioni DOM ~90/s (da ~200/s) a parità di fps. Il resto sono barre e testi che cambiano davvero.
- Verificato: Boss diretto → risultato → Prossima battaglia, battaglia mobile verticale con HUD aggiornato. Non verificato: miglioramento percepibile su un telefono vero.

## Stabilità: mondo aperto
- Misura: mutazioni DOM nel mondo aperto ~1/s nell'originale, ~7/s nel nuovo (il lettore musicale riscriveva testi e stili ad ogni controllo anche se invariati). Ora scrive solo se lo stato cambia: ~2/s.
- Verificato: misura headless dopo la modifica. Non verificato: pulsanti musica in uso reale.

## Segnalazioni dal test su GitHub Pages: X, rinascita, blocchi
- **X / Indietro → finestra precedente.** Uscendo da Open world o Dungeon (🚪 tapped twice, "Esci", fine dungeon) si tornava ai salvataggi; ora si torna al selettore modalità (`toPick` / `__reopenPick`, con la scena nascosta da `__pickGuard`). La finestra "Continua l'avventura / Nuovo mondo" non aveva un'azione di ritorno: la ✕ la chiudeva lasciando il mondo vuoto. Aggiunto "← Indietro" (la ✕ ed Esc lo eseguono) che chiude il mondo e riapre il selettore.
- **Rinascita.** Bug: la finestra "Il party è caduto" aveva solo "Risorgi al campo": la ✕ (o Esc) la chiudeva e il party restava morto con il mondo in pausa. Ora ✕ ed Esc risorgono come il pulsante. Inoltre il party rinasce al più vicino tra i campi aperti **o già raggiunti** (`Q.vc`, registrati quando ci si avvicina a meno di 150 unità; salvati nel salvataggio); prima contavano solo i campi con l'uscita aperta.
- **Blocchi a tratti.** Non riprodotti: il salvataggio ogni 5 s costa ~0,5 ms, il profilo JS del mondo è equivalente a quello dell'originale (stesso codice Three.js), nessun lavoro periodico pesante. Restano ipotesi non verificate: caricamento iniziale di ~6 MB compressi (`assets.js` 5,4 MB), GPU/driver del PC, cache del browser.
- Verificato (headless): ✕ sul modale Continua/Nuovo mondo → selettore; sconfitta reale in battaglia nel mondo → Continua → Risorgi, anche con ✕/Esc; rinascita al campo 1 dopo averlo visitato. Non verificato: PC reale, uscita da dungeon con il nuovo ritorno al selettore, partite salvate già esistenti (senza `Q.vc`).

## Uscita dal dungeon → selettore
- Verificato (headless): 🚪 nel dungeon riporta al selettore modalità e il Dungeon si rilancia. Trovato un doppione: l'uscita richiamava il ritorno due volte e impilava due selettori; `__reopenPick` ora rimuove quelli già aperti.
- Non verificato: uscita da dungeon a metà battaglia, PC reale.

## Creazione personaggio: capelli
- Bug 1: il creatore salvava `hairStyle`/`beardStyle` ma non i flag `hairPick`/`beardPick` che il modello (`wowbuild.js`, codice originale) richiede: i Troll mostravano sempre la cresta e le femmine la barba ignorava la scelta. Ora `hero3d.js` li imposta quando la scelta è esplicita.
- Bug 2: Gnomo, Pandaren, Tauren e Worgen non hanno capelli nel modello (come nell'originale), ma il creatore mostrava comunque stili e colori che non facevano nulla. Ora per queste razze compare "questa razza non ha capelli" al posto delle opzioni.
- Verificato (headless): Umano con Lungo, Cresta, Spinoso, Ricci cambia davvero; Troll con Lungo cambia; Tauren mostra il messaggio. Non verificato: tutte le razze × tutti gli stili, la barba, i salvataggi già esistenti (la scelta compare al riaprire il personaggio).

## Capelli per tutte le razze, più stili di capelli e barba
- `wowbuild.js` (non più "testo originale non modificato"): i capelli compaiono su tutte le razze (Gnomo, Pandaren, Tauren, Worgen inclusi); restano nascosti solo sotto cappuccio ed elmi.
- Capelli: da 8 a 18 stili. Nuovi: Chignon, Caschetto, Frangia, Afro, Codini, Rasato (cresta centrale), Ciuffo, Treccia, Selvaggio, Corona.
- Barba: da 5 a 12 stili. Nuovi: Lunga, Capra, Basette, Collare, Manubrio, Trecciata, Selvaggia. Disponibile per tutte le razze (anche per le razze col muso, solo se scelta) e per entrambi i sessi; Nani e Gnomi mantengono la barba di default finché non si sceglie altro; le barbe che pendono sono spostate in avanti per non sparire dentro il torso.
- Il creatore (`start.js`) mostra 18 stili di capelli e 12 di barba per tutte le razze.
- Verificato (headless): tutti i 18 stili di capelli sono distinti (umano); capelli visibili su 12 razze, tra cui Tauren, Worgen, Pandaren, Gnomo; le nuove barbe compaiono. Non verificato: tutte le razze × tutti gli stili, barbe viste frontalmente da vicino (l'anteprima ruota e i miei scatti sono piccoli), compatibilità con gli elmi, salvataggi esistenti.

## Esperimento "collo e corpo più magro" (copia separata `dba-next-collo`)

Fatto solo in `web/wowbuild.js` e `web/threeshim.js`; la versione precedente (`dba-next`) non è stata toccata.

- **Collo**: la testa è alzata di 0,3 unità e un cilindro (colore pelle/pelo/osso/panda secondo la razza) la collega al busto.
- **Corpo più magro**: `bw` (larghezza di busto, braccia, gambe, spalline) ×0,88.
- **Barba**: dopo la costruzione i pezzi appesi sono compressi in verticale (`fitHang`) in modo che la punta non scenda sotto il petto, e spostati di 0,07 in avanti.
- **Capelli**: stessa compressione (lati e retro con limiti diversi), retro spostato indietro di 0,08. Con elmo/cappuccio/elmo cornuto/velo/cappello i capelli non vengono più disegnati; sotto elmo resta solo una frangia posteriore sotto il bordo.
- **Corone, cerchietti, bande, spine, palchi**: anello ingrandito del 16% per stare sopra i capelli senza attraversarli.
- `threeshim.js`: le geometrie espongono `parameters` (altezza/raggio), necessarie a `fitHang`.

Non verificato: nessun test numerico di collisione (solo screenshot), elmi equipaggiati reali, tutte le razze × tutti gli stili.

### Ritocco: barbe più vicine, ciuffi più corti
- Barba: spostamento in avanti ridotto da 0,07 a 0,015, così resta attaccata al mento.
- Ciuffi laterali: limite del fondo a livello mento (-0,3), larghezza ×0,7 e profondità ×0,75.
- Verificato solo con screenshot (umano, nano, orco); non su elmi equipaggiati.

### Ritocco: barbe piatte
- Le barbe non sono più coni: sono ellissoidi appiattiti (profondità 0,16), leggermente inclinati in avanti, appoggiati sul mento (helper `FB` in `wowbuild.js`). Stili 0, 1, 4, 5, 9, 10, 11 modificati; gli altri erano già piatti.
- Verificato solo con screenshot (umano, nano, gnomo).

### Articolazioni dei personaggi (senza sfere)
- Spalle, gomiti, anche e ginocchia hanno ora un cilindretto trasversale dello stesso colore dell'arto, più stretto dell'arto stesso: riempie il vuoto quando si piega e non sporge in posa di riposo (`wowbuild.js`).
- Le palle di spalla sono diventate calotte tronche allineate al braccio; la mano non è più un icosaedro ma un blocchetto affusolato.
- Nessuna sfera di giunzione visibile. Mostri non toccati.
- Verificato solo in posa di riposo (anteprima del creatore); non ancora con il personaggio in movimento.

## Correzione: mondo bloccato dopo la chiusura dell'inventario
- Causa: quando l'inventario si apre dalla locanda o dal pulsante 🎒, il mondo viene messo in pausa e riparte solo quando `window.__dbaInvOpen` torna `false` dopo essere stato `true`. Il nuovo inventario non impostava mai il segnale a `true`, quindi la pausa non veniva mai tolta.
- Fix (`index.html`, `__dbaOpenInv`): il segnale diventa `true` all'apertura e `false` alla chiusura.
- Verificato in headless: prima della correzione il personaggio restava fermo dopo la chiusura, dopo la correzione si muove. Non verificato: la sparizione delle texture al ritorno sulla scheda del browser (non riprodotta; la perdita del contesto WebGL forzata si è ripresa correttamente).

## Battaglie più lunghe e pannello "Comanda 1 eroe"
- **Sovrapposizione:** con "Comanda 1 eroe" il pannello abilità dell'eroe controllato (`#dbaCtl`, `orig/script_14.js`) copriva la barra Ultimate e le icone del party. La barra Ultimate ha `pointer-events:none` e il calcolo originale la saltava. Ora `hud.js` pubblica `--dbaCtlB` (altezza del dock + 70 px) e il pannello non scende mai sotto quel valore. Verificato a 1280×800 con 4 e 8 eroi.
- **Durata:** i nemici di arena/mondo (`DBA_MKB` in `world.bundle.js`) avevano il 12% dei PV di un boss (campione 30%). Ora 18% e 80%. La durata reale non è stata misurata in modo affidabile: la simulazione automatica non riproduce il gioco vero (eroi sconfitti troppo presto o troppo forti), quindi il valore è una stima da affinare con la tua esperienza.
- **Menù:** diario, mappa, impostazioni e inventario dal mondo riportano tutti il gioco in marcia (personaggio si muove dopo la chiusura). Non provati: locanda, mercante, taglie, bacheche.

## Selezione party, aspetto in mondo aperto, articolazioni dei mostri
- **Schermata party (`start.js`)**: ad ogni selezione la pagina saltava in cima, perché la posizione di scroll veniva salvata *dopo* il ridisegno e il vecchio handler la ripristinava con un valore vecchio. Ora lo scroll è salvato prima, l'altezza della pagina è mantenuta durante il ridisegno e i ripristini duplicati sono stati tolti. Verificato: dopo 3 click scrollY e posizione della carta restano identici.
- **Aspetto in mondo aperto**: `world.bundle.js` conteneva una copia vecchia di `WOW_build`, quindi capelli, barbe, collo e corpo più magro non comparivano nel mondo. Ora la funzione è la stessa di `wowbuild.js` (testo sostituito per intero). Verificato in mondo aperto con 4 eroi di razze e stili diversi: capelli, barbe piatte e mohawk corrispondono a quelli scelti.
- **Mostri umanoidi (`bossbuild.js` e copia nel bundle)**: spalla senza sfera, gomito con perno (forearm + pugno + arma ruotano insieme), anche e ginocchia con perno; animazione in `boss3d_orig.js` e nel mondo. Non toccati draghi, ragno, kraken, idra. Verificato solo che i boss si carichino e si vedano senza errori; le pieghe di gomiti e ginocchia non sono state osservate da vicino.

## Missioni speciali nel mondo (viandanti, caccia, scorta)
- 42 NPC "viandante" sparsi nei 14 biomi (2 cacciatori, 1 viandante per bioma: dispersi dispersi = scorta nei biomi dispari, "derubato" nei pari). Deterministici dal seed, stato salvato in `Q.sq`.
- **Caccia**: servono 5 oggetti (pelle di troll, zanne d'orco, scaglie di drago, ecc.) dai nemici dedicati generati vicino al NPC con nomi particolari (Ciclope, Minotauro, orchi, troll, ragni, gargoyle, golem, draghi del bioma). Ogni uccisione: 30% di drop. Consegna al NPC per ricompensa (oro + equip).
- **Aiuto**: 3 predoni da sconfiggere, poi ritorno dal NPC.
- **Scorta**: il NPC segue il giocatore (movimento a tempo reale, 11 u/s), imboscata a metà strada, ricompensa all'arrivo al campo.
- Diario: sezione "⭐ Missioni speciali". Nuove API del mondo: addNpc/rmNpc/moveNpc/spot/spawnQ/entAt.
- Verificato in headless: offerta, accettazione, spawn nemici, battaglia, drop (16 uccisioni per 5 oggetti ≈ atteso 17), ricompensa, scorta (follow, imboscata, arrivo).
- Non verificato: salvataggio/ricarica a metà missione, giocata reale su PC/GitHub Pages, diario a schermo, bilanciamento ricompense.

## Missioni speciali: nemici sparsi nel bioma e consegne in altri biomi
- Nemici delle missioni caccia (10) e aiuto (3 predoni) ora compaiono in punti casuali di tutto il bioma del NPC (non più vicino a lui).
- ~45% delle missioni caccia/aiuto sono "con consegna": finito il lavoro compare un destinatario in un altro bioma (da 1 a 3 biomi di distanza, più spesso verso biomi più difficili). Per la consegna: XP e oro crescono con distanza e difficoltà del bioma di arrivo (XP = (base+bioma_dest×15)×(1+.35×distanza+.15×salita)), oggetto di rarità del bioma di arrivo.
- Anche le missioni senza consegna ora danno XP. Il diario mostra la destinazione.
- Verificato in headless: offerta con destinazione/XP, 10 nemici sparsi (spread ~1000 u), completamento, comparsa destinatario, messaggio al committente, ricompensa +XP e rimozione NPC.
- Non verificato: salvataggio/ricarica con destinatario presente, aiuto con consegna, percorso reale a piedi, bilanciamento XP.

## Minimappa: segnaposto delle missioni speciali
- Rombi sulla minimappa (ai bordi se fuori vista): rosa = i 4 nemici più vicini della missione di caccia/aiuto attiva, verde = committente o destinatario quando il lavoro è finito, ciano = campo di arrivo per le scorte. Dati in `window.__sqInd` (aggiornati ogni 0,5 s), disegnati in `world.bundle.js` (entrambe le copie), separati dalla "Guida" gialla.
- Verificato in headless: lista segnaposto corretta (4 nemici rosa → destinatario verde dopo il completamento) e rombo verde visibile sulla minimappa.
- Non verificato: aspetto dei rombi rosa e ciano a schermo, leggibilità con molte missioni attive contemporaneamente.

## Mappa grande (🗺): segnaposto missioni speciali
- Gli stessi rombi della minimappa (rosa nemici, verde consegna, ciano scorta) sono ora disegnati nella mappa del menù 🗺, con voce in legenda.
- Verificato in headless: rombi rosa visibili nel bioma della missione attiva. Non verificato: verde/ciano a schermo nella mappa grande.

## Aspetto eroi: creatore uguale al gioco (battaglie, "Comanda 1 eroe")
- Causa: l'anteprima del creatore usava l'id `pv_<uid><classe>`, mentre in gioco (mondo, battaglie, dungeon) l'eroe ha id `u<uid>`. Razza, sesso, capelli e colori non scelti esplicitamente derivano da un hash dell'id, quindi erano completamente diversi (es. creatore: umano maschio; gioco: worgen femmina). Il problema si vedeva di più con la camera ravvicinata di "Comanda 1 eroe".
- Fix: `start.js` ora usa lo stesso id `u<uid>` nell'anteprima. Gli eroi con aspetto già personalizzato (scelte esplicite) non cambiano; le caratteristiche non scelte nel creatore ora mostrano ciò che si vede in gioco.
- Verificato: con lo stesso hash, gli id `pv_…` e `u…` davano aspetti diversi per 5/5 classi; ora il creatore usa `u…` (controllo di coerenza sull'id, `node --check`).
- Non verificato: schermata creatore a video dopo la modifica, confronto visivo creatore ↔ battaglia con camera in terza persona.

## "Comanda 1 eroe": correzioni
Bug trovati provando la modalità in battaglia (Boss diretto, 4 eroi) e confrontandola con l'automatico:
1. ~~Passaggio automatico del comando al compagno quando il controllato muore~~ — **annullato su richiesta dell'utente**: se muore l'eroe controllato si resta spettatori e il resto del gruppo combatte in automatico (pannello abilità nascosto).
2. **Camera mai in 3ª persona**: il codice chiamava una funzione (`__dbaSetCam`) che non esisteva e confrontava il tipo di battaglia al posto della camera. Ora all'inizio del comando la camera passa a 3ª persona (se non scelta altrimenti), se il giocatore la cambia a mano non viene più forzata, a fine comando torna quella di prima. La finestra Impostazioni mostra la modalità reale.
3. **Barra Ultimate e icone eroe duplicate**: restavano visibili in basso (selettori CSS vecchi) e si sovrapponevano al concetto di "ULT" del pannello; ora nascoste in modalità comando (le ult degli altri eroi sono già automatiche).
4. **Prestazioni**: il posizionamento del pannello scansionava tutto il DOM ogni 0,4 s; ora legge solo l'altezza delle carte eroe.
- Verificato in headless: abilità via tasti (cooldown e coda), schivata, ult, morte del controllato (passaggio a Mago), camera 3ª persona e ripristino a fine battaglia, nessun errore in console. Screenshot prima/dopo.
- Non verificato: tutti gli altri comportamenti che l'utente ha notato ("svariati bug" senza dettagli), bilanciamento (in comando il gruppo muore prima: l'automatico usa tutte le abilità, il comando solo base+taunt finché non premi i tasti), touch/mobile, battaglie in arena e nel mondo con comando.
- Annullato il punto 1: verificato in headless che con l'eroe controllato morto il pannello sparisce, il comando non passa ad altri e gli altri eroi continuano da soli.
- Aggiunto avviso da spettatore: quando l'eroe controllato cade compare in basso "💀 X è caduto: assisti alla battaglia, il gruppo combatte da solo" al posto del pannello abilità; sparisce se l'eroe viene rianimato (il pannello ricompare). Verificato in headless con screenshot.

## Versione parallela "Boss Coop" (dba-next-coop)
- Nuova modalità multiplayer 2-4 giocatori, un eroe a testa, boss co-op. Vedi `docs/COOP.md`.
- Verificato in headless (Chromium, 2-3 contesti separati collegati via WebRTC in locale): creazione codici, collegamento, lobby, scelta eroi, avvio sincronizzato, ~430-500 passi di simulazione con ingressi da host e ospiti, nessuna divergenza (stato identico passo per passo, `desync = 0`), schermata di fine su tutti i client, disconnessione di un ospite a battaglia in corso.
- Bug trovato e risolto durante i test: i suoni (`__dbaEv`) consumavano numeri del generatore casuale condiviso durante il passo → desincronizzazione; ora girano col generatore nativo.
- NON verificato: connessione via internet reale (NAT/firewall, STUN), latenza reale, Vittoria (provate Sconfitta), uscita dalla battaglia con "Esci", mobile/touch, 4 giocatori, giocatori su browser diversi (es. Firefox/Safari), prestazioni a lungo termine.

## Coop: stanze pubbliche
Aggiunti `mqtt-lite.js` (client MQTT 3.1.1 su WebSocket) e elenco stanze in `coop.js`. Test locale a 2 browser: crea→elenco→entra→lobby→start, 0 desync.

## Mondo condiviso fase 1
Copia `dba-next-world`. Seme comune per generare il mondo, avatar remoti con nome, relè host con area di interesse. Test locale: 3 browser (host + 2 ospiti via stanza pubblica), 0 errori; le posizioni arrivano a tutti.

## Mondo condiviso fase 2
Hook runBattle nel mondo: scontro coop con i vicini (host nel combattimento), ritorno al mondo, fallback solitario.

## Ricompense scontri mondo condiviso
Partecipanti non-richiedenti ricevono la vittoria sul proprio nemico gemello; -70% per chi non usa abilità.

## Abilità base non conta
Il cast slot 1 (e le provocazioni auto del tank) non contano come partecipazione. Vittoria di squadra: il richiedente caduto non azzera il party.

## Capelli afro
L'afro non copre più il viso: calotta superiore sopra la fronte + guscio posteriore/laterale con apertura frontale (wowbuild.js e copia nel bundle del mondo). Verificato con screenshot (umano, nano); in battaglia/mondo non visto.

## Articolazioni boss (tutti)
Draghi/idra: ginocchio sulle zampe posteriori e gomito su quelle anteriori (pivot). Ragno: ginocchio su tutte e 8 le zampe con andatura a fasi alterne. Kraken: tentacoli a catena di segmenti con onda. Modelli verificati con screenshot (nessun errore); la fluidità del movimento non è stata valutata in video.

## Texture dipinte fase 1
Occhi e sopracciglia con texture (decalcomanie), vedi docs/TEXTURE.md.

Correzione sopracciglia: orientamento come nel foglio (coda sottile all'esterno, estremo spesso verso il naso).

Sopracciglia: causa reale era la texture capovolta in verticale nel motore Mini3D (v invertita in hero3d.js); sopracciglia leggermente più lunghe e più vicine all'occhio.

Occhi: aggiunta palpebra superiore con ciglia (tessere lid/lidL, tinta del colore pelle), iride un po' più piccola e coperta in alto, come nella foto di riferimento.

Texture pelle e pelo (fase 2): vedi docs/TEXTURE.md.

## Modelli eroe: finezza
Segmenti di default a 3 (2 su telefono) in creatore/battaglia (prima 1: tronco esagonale, testa a 7 lati); mascella e piedi a ellissoide invece che a blocco. Proporzioni (testa grande, tronco a barile) invariate: la ricostruzione realistica va fatta a fasi, partendo dall'umano.

## Modelli realistici – fase 1: umano (maschio e femmina)
- Testa più piccola (hd 0.8), collo più lungo e spesso, torace ellittico con spalle (deltoidi sferici), vita rastremata e bacino, al posto del cilindro unico.
- Il corpo base viene rimpicciolito per l'umano così non sporge sotto armature e vestiti; armature, elmi e armi seguono la nuova forma.
- Altre razze invariate (verranno fatte dopo l'approvazione dell'umano).
- Verificato: screenshot headless (nudo/armato, maschio/femmina), nessun errore JS. Non verificato: nel mondo aperto, classi robe/stoffa, telefoni, confronto pixel a pixel.

## Umano fase 1 (rifatta sul riferimento dell'utente)
- Proporzioni da adulto: gambe lunghe (inguine a circa metà altezza), testa piccola (hd 0.55), corpo più snello (larghezza x0.84), altezza 0.9, collo ridotto.
- Gambe parametriche (HIPY/KNY); il resto del corpo viene alzato (LIFT) a fine costruzione, così armature, elmi e armi mantengono il rapporto.
- Femmina: bacino più largo e vita più stretta.
- Verificato: screenshot headless nudo/armato maschio e femmina, nessun errore JS, world.bundle.js sintatticamente valido. Non verificato: render nel mondo aperto, classi robe, telefoni.
- Petto femmina: busto più naturale e basso (niente mensola sul torace), spalle femminili più strette. Verificato solo in galleria modelli.

## Proporzioni per razza (tabella WOW_PROP in wowdata.js)
- Ogni razza ha ora gambe, larghezza, testa e altezza propri (lift = lunghezza gambe, bwm = larghezza corpo, cx/cy = petto, bl = pancia), sul modello dell'immagine di riferimento dell'utente (umani, elfi, draenei, worgen, nani, gnomi, orchi, tauren, troll, non morti, goblin, pandaren).
- Torace ellittico con spalle e vita al posto del cilindro per tutte le razze (esclusi i personaggi con veste lunga).
- world.bundle.js (coop e world) sincronizzato con wowbuild.js e wowdata.js.
- Verificato: galleria modelli di tutte le 13 razze, maschio e femmina, nudi e con armatura; nessun errore JS. Non verificato: mondo aperto, battaglie, classi con veste, telefoni, coda/zoccoli/ginocchio digitigrado (worgen, draenei, tauren hanno ancora gambe da umano), curvatura della schiena, confronto pixel con il riferimento.

## Gambe da animale e schiena curva
- Draenei, tauren e worgen: gambe digitigrade (coscia in avanti, stinco indietro, ginocchio spostato), pivot del ginocchio aggiornato.
- Schiena curva (hunch) ora inclina il torace e sposta spalle e testa in avanti; orchi 0.12, troll 0.24 (worgen 0.14, tauren 0.06 già presenti).
- Coda dei draenei avvicinata al corpo.
- Verificato: viste laterali nudi e armati, nessun errore JS. Non verificato: animazione di corsa con gambe piegate, mondo aperto, telefoni.

## Troll
- Schiena curva marcata (hunch 0.3, inclinazione torace 2.1), gobba di raccordo tra torace e vita, braccia spostate in avanti insieme alle spalle (vale per tutte le razze con hunch).
- Verificato: viste laterale e 3/4, nudo e armato. Non verificato: animazioni, mondo aperto.

## Controllo animazioni (nessuna modifica al codice)
- Corsa e attacco verificati in galleria su tutte le 13 razze con le nuove gambe e proporzioni: nessuna deformazione evidente, spada impugnata. Non verificato: mondo aperto/battaglia reale, telefoni.

## Velocità battaglie -50% e flusso Solo/Coop
- Il passo di simulazione ora usa un accumulatore a tempo reale (`__dbaSim`, 1.5 s di gioco per secondo reale a 1×, 3 a 2×) invece di un numero fisso di passi per frame: prima la velocità dipendeva dai Hz dello schermo (a 60 Hz era il doppio di adesso). Vale per battaglie, boss, mondo e host coop.
- Flusso (coop/world): crea party → Automatico/Comanda 1 eroe → modalità (Dungeon, Open world, Boss diretto) → Solo o Coop → partenza. Il pulsante "Boss Coop" separato è stato rimosso. Dungeon: coop non disponibile. Open world coop solo nella versione world.
- Lobby coop da 1 a 4 giocatori (si può avviare da soli). Titoli e pulsanti seguono la modalità scelta.
- Verificato: matematica dell'accumulatore a 30/60/144 fps, flusso con screenshot, avvio boss coop con 1 giocatore, ingresso nel mondo coop con 1 giocatore, boss solo. Non verificato: sensazione reale della velocità su schermi veloci/telefoni, partita coop con 2+ giocatori dopo questa modifica, interfaccia di "Comanda 1 eroe" ancora da ridurre.

## Interfaccia "Comanda 1 eroe" più piccola (verticale e orizzontale)
- Con il comando attivo: pannello abilità ridotto (verticale ×0.84, orizzontale ×0.76 su una sola riga di 8 pulsanti), schede eroe ridotte (×0.8 / ×0.7) senza la riga del livello, barra superiore, pillole HP/sopravvissuti, titolo boss e pulsanti a sinistra ridotti. Solo CSS in orig/script_14.js, attivo con body.dba-cmd e solo su schermi piccoli (≤760 px in verticale, ≤520 px di altezza in orizzontale).
- Verificato: screenshot 390×844 e 844×390 (a 2× di densità) e desktop senza errori. Non verificato: telefoni reali, tablet, schermi molto stretti, altre modalità (automatico non cambiato).

## Battaglie: velocità predefinita 1×, movimenti stabili
- Velocità predefinita 1× (prima 2×); aggiunta l'opzione 0,5× nel selettore e nella barra in alto.
- Causa del va-e-vieni: gli eroi si avvicinavano al boss, la separazione tra eroi li respingeva e riprendevano ad avvicinarsi, girandosi a ogni passo.
- Correzioni: isteresi sull'avvicinamento (si ferma a 85% della portata, riparte oltre portata+0,35), separazione limitata e più dolce, rotazione graduale con sguardo verso il boss in combattimento.
- Misura su una battaglia simulata (4 eroi, boss): inversioni di direzione 703 → 63; distanza percorsa dagli eroi circa 285 → 103 (parte da battaglie di durata diversa, quindi indicativa).
- Non verificato: sensazione su telefono, coop reale con 2+ giocatori.
