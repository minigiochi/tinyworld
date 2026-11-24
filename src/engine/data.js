// Dati di gioco (classi eroe, abilità, costi mana…) caricati dai file JSON in src/data/.
// Questo file è SCRITTO A MANO: i JSON si modificano a mano, questo non va rigenerato.
// (Nel browser i JSON saranno importati; qui sotto la versione per il test in Node è iniettata da load.js come DATA.)

const Kc = DATA.classes;                    // classi: statistiche e abilità di base
const O6 = DATA.unlockByClass;              // abilità sbloccate ogni 3 livelli, per classe (arciere, cacciatore, stregone)
const ip = DATA.unlockByArch;               // idem, per archetipo (healer, tank, melee, ranged) per le altre classi
const k6 = DATA.healerSpecial;              // Resurrezione dei curatori (dal livello 6)
const cg = DATA.manaCost;                   // costo in mana per tipo di abilità
const hf = new Set(DATA.basicKinds);        // tipi di "attacco base" (restituiscono un po' di mana)
const B6 = DATA.reviveUses;                 // rianimazioni del boss per difficoltà
const V6 = DATA.teamChoices;                // scelte di squadra offerte al giocatore

/**
 * Abilità di un eroe: quelle di base (livello 1) + una nuova ogni 3 livelli.
 * Tempo di carica: fino al livello 6 nessuno, fino al 10 mezzo secondo, poi 1,2 s.
 * I curatori ricevono Resurrezione dal livello 6 (carica 3 s).
 */
function Ep(classKey, level) {
  const cls = Kc[classKey];
  if (!cls) return [];
  const list = cls.abilities.map((a) => ({ ...a, _req: 1, _ct: 0 }));
  const unlocked = Math.floor(level / 3);
  if (unlocked > 0) {
    const pool = O6[classKey] || ip[cls.arch] || [];
    for (let i = 0; i < unlocked; i++) {
      const reqLevel = 3 * (i + 1);
      if (pool[i]) list.push({ ...pool[i], _req: reqLevel, _ct: reqLevel <= 6 ? 0 : reqLevel <= 10 ? 0.5 : 1.2 });
    }
  }
  if (cls.arch === 'healer' && level >= 6) list.push({ ...k6, _req: 6, _ct: 3 });
  return list;
}
