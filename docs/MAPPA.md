# Dragon's Bane Arena — mappa del gioco (da v198_Equip)

Fonte: `DragonsBaneArena_v198_Equip.html` (10,4 MB). Tutto quanto sotto è stato letto nel file; dove non so, lo scrivo.

## 1. Composizione del file
| Parte | Dimensione | Note |
|---|---|---|
| Script `type=module` | 9,1 MB | Contiene motore compresso (React, Three.js) + gioco originale |
| di cui 76 immagini incorporate (jpg/webp) | 5,5 MB (decodificate) | Estratte in `assets/img/` (tex_00…tex_75) |
| di cui codice | ~1,6 MB | In `reference/code/module_no_assets.js`, con i dati sostituiti da `@@ASSET:nome@@` |
| 20 script normali | ~1,0 MB | In `reference/code/script_01…20.js`, in chiaro |
| `script_18` | 0,78 MB | Texture del boss (atlanti), "v171", quasi tutto immagini base64 |

## 2. Moduli globali `DBA_*` (leggibili, riusabili)
- **DBA_NEWCLS** — nuove classi eroe (es. Sciamano: arch, HP, attacco, difesa, velocità, raggio, colore).
- **DBA_SETS / DBA_SETB / DBA_SETFULL** — set di equipaggiamento (Fenice, Titano…) con bonus a 2/3 pezzi.
- **DBA_TAL** — talenti per archetipo (tank, …) con modificatori (`hp`, `def`, `thr`).
- **DBA_EN / DBA_ENB / DBA_ENP** — incantesimi/effetti degli oggetti (es. Vampirismo).
- **DBA_GRIM** — Grimorio (collezione), salvato in localStorage `dba_grim_v1`.
- **DBA_PRISM** — modalità con nome/livello/vittorie/sconfitte/record (probabile torre/prisma: da verificare).
- **DBA_RAGE** — insieme di classi a "rabbia" (araldo, mistico, berserker, guerriero, …).
- **DBA_EQ / DBA_ARMK / DBA_HMAT / DBA_APPR / DBA_ANIM** — equipaggiamento, aspetto e animazioni degli eroi.
- **DBA_MUS / DBA_SFX / DBA_AMB** — musica, effetti, ambiente.
- **DBA_OW** (script_13) — controller del mondo (missioni, mappa, servizi, gioielliere…).
- **DBA_DG / DBA_PICK / DBA_ECO / DBA_ITV** (script_13) — dungeon, scelta, economia, intervalli.
- **DBA_AUTH / DBA_AUTH_CONFIG / DBA_MODE_PICK** (script_15) — login Google/Apple e sincronizzazione con `syncUrl`.
  Sono già predisposti, ma `googleClientId`, `appleClientId` e `syncUrl` sono vuoti. Utile per il multiplayer e i salvataggi in cloud.
- **DBA_SETSEC** (script_17) — sezioni delle impostazioni.
- **DBA_KEYS** (script_20) — scorciatoie da tastiera.

## 3. Schermate e flussi (stati React visti nel codice)
`select` (scelta party) → `battle` → `result`/`victory`; mondo aperto con modale `DBA_OW.modal`; dungeon (`DBA_DG`); inventario; impostazioni; Grimorio; Bestiario; Spellbook; Nuovo party.
Non ho ancora una lista completa e verificata di tutte le schermate: è il lavoro della prossima fase.

## 4. Dati e numeri già estratti dal lavoro delle versioni
- 14 biomi (`bi` 0–13), 5 gradi di zona (bianco/blu/viola/oro/rosso, moltiplicatori 1/1,2/1,8/2,5/3).
- Formule di battaglia: artiglio del boss, Soffio ad area, HP/attacco del boss e dei miniboss, `lvB`, fattore equipaggiamento (v198).
- Crescita eroi: +14 HP, +6 attacco per livello; curva XP `Tp`.
- 48 tipi di abilità (`kind`) distinti nel codice.
- 20 eroi nel party massimo (verificato nelle battaglie).

## 5. Come usare questa cartella
- `reference/` è solo lettura: serve per confrontare il comportamento del vecchio gioco.
- Il nuovo progetto non copia il codice compresso: riscrive i sistemi in moduli, partendo dai dati (sezione 2).
- Ordine proposto: 1) dati e regole (set, talenti, classi, incantesimi) → 2) motore di battaglia senza grafica → 3) confronto con simulazione sul vecchio → 4) mondo e interfacce → 5) grafica → 6) multiplayer.

## 6. Ancora da capire
- Dove sono definiti gli eroi originali (le classi di base) e le abilità: non compaiono come `classKey:"…"` leggibili.
- Struttura delle 14 mappe/biomi e dei nemici (`DBA_EN` sono incantesimi oggetto, non nemici).
- Il motore di battaglia (`__dbaKe`): è nel codice compresso e va letto.
