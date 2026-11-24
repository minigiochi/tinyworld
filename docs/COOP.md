# Boss Coop (2-4 giocatori) — versione parallela

Build separata da `dba-next-collo`: stesso gioco + modalità **🤝 Boss Coop** (nel selettore "Scegli la modalità").

## Come si gioca
1. **Host**: Boss Coop → "Crea una stanza" → "Invita" (per ogni amico) → copia il codice e invialo (chat, Discord…).
2. **Ospite**: Boss Coop → "Entra in una stanza" → incolla il codice → "Genera la risposta" → rimanda il codice di risposta all'host.
3. **Host**: incolla la risposta nel riquadro del giocatore → "Collega".
4. Ognuno sceglie il PROPRIO eroe (dal proprio salvataggio); l'host sceglie boss, livello e scala e preme "Avvia". Gli altri slot fino a 4 eroi sono automatici (eroi dell'host).
5. In battaglia: tasti 1-6 abilità, U ultimate, Spazio schivata (come "Comanda 1 eroe"). Gli eroi non comandati usano anche l'ultimate da soli.

## Architettura
- Connessione WebRTC diretta (DataChannel) senza server: scambio manuale di codici (SDP compresso, ~600 caratteri). Usa STUN pubblico di Google; senza TURN alcune reti (NAT rigidi, reti aziendali) potrebbero non connettersi.
- Sincronizzazione **lockstep**: tutti simulano lo stesso scontro (stesso seme, passo fisso 0,05 s); si scambiano solo gli ingressi (abilità/ult/schivata), eseguiti D=6 passi (0,3 s) dopo, decisi dall'host. Il motore usa `window.__dbaCtlSet` (insieme eroi comandati) invece del singolo `__dbaCtl`.
- Ogni 40 passi l'host manda un hash di stato; l'ospite segnala "possibile desincronizzazione" se diverge.
- Se un ospite si disconnette, il suo eroe passa in automatico per tutti. Se cade l'host, gli ospiti si fermano.
- File: `web/coop.js` (rete, lobby, simulazione), patch in `engine.bundle.js`, `index.html` (ciclo), `orig/script_13.js` (selettore), `orig/script_14.js` (comandi), `hero3d.js` (aspetto da `appId`).

## Limiti noti (v1)
- Nessun XP/bottino a fine battaglia (solo schermata Vittoria/Sconfitta).
- Un solo boss per partita; nessuna riconnessione dopo l'inizio; nessun recupero da desincronizzazione (solo avviso).
- Collegamento manuale con codici (un server di segnalazione gratuito permetterebbe codici stanza brevi).

## Stanze pubbliche (elenco senza codici)
- "Crea una stanza pubblica" pubblica la stanza su un broker MQTT pubblico (EMQX, HiveMQ, Mosquitto test; override `?broker=ws://...`). "Cerca stanze pubbliche" mostra l'elenco; "Entra" scambia automaticamente i codici WebRTC via MQTT. Il gioco resta peer-to-peer (lockstep).
- Il codice manuale resta come opzione "avanzato".
- Limiti: i broker pubblici sono visibili a tutti (nessuna privacy), stanze fantasma filtrate con finestra 90 s (richiede orologi ragionevolmente allineati), nessun account/budget. Testato solo con broker locale di prova (`mq/broker.js`), NON con i broker pubblici reali.

## Mondo condiviso — fase 1 (in questa versione `dba-next-world`)
- Dalla lobby (stanza pubblica o con codici) l'host preme "🌍 Entra nel mondo condiviso": tutti entrano nel mondo aperto, generato con lo STESSO seme (verificato: nemici/strade/ostacoli identici).
- Ogni giocatore muove il proprio party; gli altri vedono l'eroe scelto in lobby con il nome. Posizioni a 10 Hz: gli ospiti inviano all'host, l'host le rilancia (topologia a stella) solo ai giocatori entro 700 unità (area di interesse).
- Hook nel bundle del mondo: `window.__dbaWAPI` (scena, altezza terreno, build eroe, anim, posizione propria) e `window.__dbaWH(dt,t)` chiamato a ogni frame.
- NON ancora: combattimenti condivisi, nemici/bottino/missioni sincronizzati (ognuno ha i propri nemici, stesso posto iniziale ma stato indipendente), ciclo giorno/notte comune, chat, salvataggi per ruolo, ingrandimento mappe, oltre 4 giocatori (limite lobby attuale).

## Mondo condiviso — fase 2: combattimenti
- Toccando un nemico, il giocatore chiede all'host uno scontro coop (lockstep, stesso motore del Boss Coop) con tutti i giocatori entro 90 unità. Ogni partecipante comanda il proprio eroe; il party del richiedente fa da riempitivo automatico. Gli altri giocatori restano nel mondo.
- Fine scontro: il richiedente riceve l'esito come in single player (nemico ucciso, XP, bottino, hp); gli altri tornano al mondo senza ricompense (ancora da fare).
- LIMITE: l'host deve essere vicino al richiedente e non già in combattimento (simula lo scontro e fa da orologio); altrimenti, o se non c'è nessuno vicino, si combatte da soli come prima. Un solo scontro alla volta. Per superarlo serve un server (vedi roadmap).
- Test locale: host + 2 ospiti, scontro avviato da un ospite, 0 desync, tutti tornano al mondo.

## Ricompense degli scontri nel mondo condiviso
- Tutti i partecipanti ricevono la ricompensa dell'uccisione: chi ha toccato il nemico dal flusso normale, gli altri applicando la vittoria sullo stesso nemico del PROPRIO mondo (identico grazie al seme), quindi con le proprie monete/bottino/missioni.
- Chi non usa nemmeno un'abilità (ult, schivata o abilità diverse dalla base: l'abilità base — slot 1 — e quelle lanciate in automatico dal comando, come le provocazioni del tank, NON contano) riceve il 30% (−70%): monete e XP ridotti in proporzione, ogni oggetto nuovo tenuto con probabilità 30%. Compare un avviso.
- Non ridotti: gemme, mappe, reputazione, progressi missione (contano come uccisione). Test: host con abilità 408 monete, due ospiti inattivi 122 (=30%). L'XP non è stato provato (le uccisioni normali non danno XP, solo missioni/incantesimi).
