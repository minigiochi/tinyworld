# Mondo sempre attivo su Render (gratuito)

## Come funziona
- `server/server.js` è un piccolo server Node (nessun browser). Fa da host permanente del **mondo condiviso**: stesso seme per tutti, si vedono muovere gli altri giocatori (nome, eroe, equipaggiamento). Ogni giocatore combatte in locale con il proprio party (nemici e bottino non sono condivisi).
- Serve anche i file del gioco (`web/`), quindi puoi giocare direttamente dall'indirizzo Render, oppure dal sito GitHub Pages inserendo l'indirizzo Render nella schermata "🌍 Mondo sempre attivo".
- `/healthz` risponde `{"ok":true,"players":N}` ed è quello che viene contattato per tenerlo sveglio.

## Cosa fare (una volta sola, ~5 minuti, nessuna carta)
1. Vai su https://render.com e crea un account con "Sign in with GitHub".
2. **New + → Blueprint**, scegli il repository `minigiochi/tinyworld` (Render ti chiede di autorizzare l'accesso a quel repository: lo fai tu, non serve dare nulla a nessun altro).
3. Render legge `render.yaml`: conferma con **Apply**. Il primo avvio richiede qualche minuto.
4. Copia l'indirizzo del servizio (es. `https://tinyworld.onrender.com`) e verifica che `…/healthz` risponda.
5. In GitHub: repository → Settings → Secrets and variables → Actions → **Variables** → New repository variable: nome `RENDER_URL`, valore l'indirizzo del punto 4. Da quel momento il workflow *Keep-alive Render* lo contatta ogni 10 minuti.
6. (Consigliato come seconda rete) crea un monitor gratuito su https://uptimerobot.com (tipo HTTP, ogni 5 minuti) verso `…/healthz`.
7. Nel gioco: Open world → Coop → **🌍 Mondo sempre attivo**, scrivi l'indirizzo (senza `https://`), scegli l'eroe, entra.

## Limiti da conoscere
- Il piano gratuito ha 750 ore/mese per account: un solo servizio sempre acceso ci sta (744 h al mese).
- Senza ping il servizio si spegne dopo 15 minuti e il primo accesso successivo impiega circa 1 minuto.
- I workflow programmati di GitHub possono ritardare di qualche minuto e vengono sospesi dopo 60 giorni senza attività nel repository: per questo conviene anche UptimeRobot (o `node server/keepalive.js URL` su un PC sempre acceso).
- Se il servizio si riavvia, chi è dentro perde il collegamento: va ricaricata la pagina.
- Questa è la prima versione: provata in locale con 2 browser, non ancora su Render né con molti giocatori.
