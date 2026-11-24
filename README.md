# Tiny World

Riscrittura modulare di **Tiny World** (già Dragon's Bane Arena): battaglie contro boss in 3D, dungeon procedurali, mondo aperto con 14 biomi, villaggi, missioni, cripte, arena a ondate, mappe del tesoro, inventario con set ed equipaggiamento, bestiario, spellbook e grimorio. Gira interamente nel browser (HTML/JS statico, nessun server richiesto), anche da telefono.

## Provarlo in locale
```bash
git clone <URL-del-repository>
cd <cartella>
python3 -m http.server 8080 --directory web     # oppure: npm start
# apri http://localhost:8080/
```
Serve solo un server statico (i file `file://` non bastano per via dei browser). La pagina di ingresso è `web/index.html`, che porta alla schermata dei salvataggi (`web/start.html`).

## Pubblicazione su GitHub Pages
Il workflow `.github/workflows/pages.yml` pubblica la cartella `web/` a ogni push su `main`.
1. Crea il repository e fai push su `main`.
2. *Settings → Pages → Build and deployment → Source: GitHub Actions*.
3. Il gioco sarà su `https://<utente>.github.io/<repository>/`.

## Struttura
| Cartella | Contenuto |
|---|---|
| `web/` | Il gioco servito al browser (HTML, JS, CSS, asset). Questa è la cartella pubblicata. |
| `src/engine`, `src/data`, `src/world` | Motore di battaglia, dati e logica del dungeon riscritti in moduli leggibili. |
| `tools/` | Script Node di bundle e di parità con il gioco originale (`node tools/<script>.js`). |
| `docs/` | `MAPPA.md` (mappa del codice) e `STORICO_SVILUPPO.md` (cronologia dettagliata di cosa è stato fatto e verificato). |
| `reference/` | Codice estratto dal gioco originale (non incluso nel repository, vedi `.gitignore`). |

Il motore (`web/engine.bundle.js`) si rigenera da `src/` con `node tools/bundle.js`. `web/world.bundle.js` (mondo aperto, builder 3D degli eroi) è estratto dal gioco originale.

## Stato e limiti (onesto)
Funzioni provate in browser headless (le battaglie nascono solo dagli incontri: nessuna boss fight autonoma) (Chromium): schermata salvataggi e creazione party, selezione modalità, battaglia contro boss con scelte rapide e schermata risultato, dungeon, mondo aperto (missioni, consegne, cancelli d'uscita, cripte, arena a ondate, mappe del tesoro), inventario, grimorio/bestiario/spellbook, impostazioni di visuale, lettore musicale, layout su telefono in verticale e orizzontale.

**Non verificato:**
- Confronto pixel per pixel con il gioco originale.
- Audio reale (provato solo lo stato del lettore), telefoni fisici, gesti touch complessi.
- Sconfitta in ondata, sfida arena a 3 scontri, monete e contatore missione dopo una cripta, biomi oltre il primo, visuale in prima persona.

Il dettaglio di ogni verifica è in [`docs/STORICO_SVILUPPO.md`](docs/STORICO_SVILUPPO.md).

## Licenza e materiali
Il codice è rilasciato con licenza MIT (vedi `LICENSE`). Il gioco originale, i suoi dati e le immagini/texture incorporate (`web/assets.js`, `web/biomeTex.js`, `web/bossAtlas.js`) appartengono all'autore del progetto: la licenza MIT non garantisce diritti di terzi su quei materiali. Verifica di poterli pubblicare prima di rendere pubblico il repository.
