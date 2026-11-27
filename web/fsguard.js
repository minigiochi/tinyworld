/* Rete di sicurezza: se per qualunque motivo lo schermo intero resta su un singolo elemento (es. l'area di battaglia) invece che sull'intera pagina,
 * il resto del gioco (mondo, pulsanti, finestre) risulta nascosto e non cliccabile: in quel caso si esce dallo schermo intero. */
(function () {
  function chk() { try { var f = document.fullscreenElement; if (f && f !== document.documentElement) { var r = f.getBoundingClientRect(); if (!f.isConnected || !r.width || !r.height || document.querySelector('#dbaDG') && !f.contains(document.querySelector('#dbaDG'))) document.exitFullscreen(); } } catch (e) {} }
  document.addEventListener('fullscreenchange', function () { setTimeout(chk, 300); });
  setInterval(chk, 2000);
})();
