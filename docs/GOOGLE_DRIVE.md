# Accesso con Google e salvataggi nel tuo Drive

Il gioco può salvare i progressi nella cartella nascosta dell'app nel Google Drive di ciascun giocatore (permesso `drive.appdata`:
il gioco non vede né tocca nessun altro file del Drive). Funziona da GitHub Pages, senza server.

## Configurazione (una volta sola)
1. Vai su https://console.cloud.google.com e crea un progetto (es. "Tiny World").
2. **API e servizi → Libreria**: abilita **Google Drive API**.
3. **Schermata di consenso OAuth**: tipo *Esterno*; nome app, email di supporto; in *Ambiti* aggiungi `.../auth/drive.appdata` (più openid, email, profile).
   Finché l'app è in *Test* possono accedere solo gli utenti aggiunti in "Utenti di test" (max 100): per aprirla a tutti premi **Pubblica app**.
4. **Credenziali → Crea credenziali → ID client OAuth → Applicazione web**.
   *Origini JavaScript autorizzate*: `https://minigiochi.github.io` (e `https://tinyworld-uyf6.onrender.com` se giochi anche da lì). Nessun URI di reindirizzamento.
5. Copia l'ID client (finisce con `.apps.googleusercontent.com`) in `web/auth-config.js` → `googleClientId`. È un valore pubblico.

## Come funziona
- Schermata iniziale: **Accedi con Google** oppure **Gioca come ospite**.
- Dopo l'accesso il gioco legge il file `tinyworld-save.json` dal Drive; se è più recente di quello del dispositivo chiede se usarlo.
- Poi salva da solo ogni 60 s, quando la scheda va in secondo piano e quando si chiude.
- Il token Google dura circa 1 ora: alla scadenza il gioco prova a rinnovarlo in silenzio, altrimenti compare "Riaccedi con Google per sincronizzare".
- Non vengono sincronizzati i dati specifici del dispositivo (qualità grafica, indirizzo server, schermo intero).
