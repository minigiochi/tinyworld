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
