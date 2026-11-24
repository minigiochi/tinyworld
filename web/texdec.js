/* Texture dipinte (decalcomanie su occhi e sopracciglia). Caricate in anticipo; senza di esse il gioco usa i riquadri colorati di prima. */
(function () {
  var T = { ready: false, t: {} }, files = { sclera: 'tex/sclera.png', iris: 'tex/iris.png', brow: 'tex/brow.png', browL: 'tex/browL.png', lid: 'tex/lid.png', lidL: 'tex/lidL.png', skin: 'tex/skin.png', fur: 'tex/fur.png' }, ks = Object.keys(files), n = 0;
  ks.forEach(function (k) {
    var im = new Image(); im.onload = function () { T[k] = im; if (++n === ks.length) { T.ready = true; try { window.dispatchEvent(new Event('dba-tex')); } catch (e) {} } };
    im.onerror = function () { console.warn('texture non caricata', k); }; im.src = files[k];
  });
  window.DBA_TEX = T;
})();
