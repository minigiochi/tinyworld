# Texture dipinte (generate con Nano Banana, ritagliate)
- Fogli sorgente: atlante 4x3 (occhi, sopracciglio, scaglie, pelo, capelli, barbe, ricci) e foglio pelli 2x2 (umana, orco, anziana, bestia). Le tessere usate nel gioco sono in `web/tex/`.
- Fase 1 (fatta): occhi (sclera + iride colorata via tinta, con il colore occhi scelto) e sopracciglia (tinta col colore capelli) come DECALCOMANIE: piccoli rettangoli con texture e trasparenza attaccati alla testa (`wowbuild.js`, blocco `DEC`). `texdec.js` precarica le immagini; se mancano si torna ai riquadri colorati.
- Non applicata ai race con occhi luminosi (elfo della notte ecc.), panda, scheletri e modalità LEGO: restano i riquadri.
- Rendering: `hero3d.js` (Mini3D, creatore/battaglia) disegna le mesh con UV e alpha; il mondo (Three.js vero) usa il materiale con `map`. Le immagini sono potenze di 2 (richiesto da WebGL1).
- Fase 2 (fatta): texture pelle (`tex/skin.png`) e pelo (`tex/fur.png`, razze con pelo/pandaren) sulle parti del corpo colorate come la pelle: mesh separata con materiale a texture, tinta dal colore scelto. Contrasto basso di proposito (dettaglio sottile). Le texture sono mappate una volta per pezzo (non ripetute), quindi su pezzi grandi risultano allungate.
- Da fare: capelli/barba su geometria, scaglie per draghi/rettili, texture dell'armatura.
