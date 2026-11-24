// Scena 3D della battaglia: traduce lo stato del motore (eroi, boss, telegrafi, muri, spuntoni, eventi) in chiamate a Mini3D.
// Uso: const S = Scene3D(canvas, overlayCanvas); S.event(ev) per ogni evento del motore; S.frame(eng, dt) a ogni fotogramma.
(function () {
  /** texture corteccia/foglie dell'originale (gli stessi file di tronchi e chiome del mondo aperto), caricate una volta */
  const TT = { bark: null, leaf: null, started: false };
  function treeTex() {
    if (!TT.started && window.__ASSETS && window.__scene3dR) {
      TT.started = true;
      for (const [k, f] of [['bark', 'tex_49_05477c72.jpg'], ['leaf', 'tex_50_9be679d0.jpg']]) { const src = window.__ASSETS[f]; if (!src) continue; const img = new Image(); img.onload = () => { try { TT[k] = window.__scene3dR.makeTex(img); } catch (e) {} }; img.src = src; }
    }
    return TT;
  }
  const SPKPAL = {fire:['#2a1410','#ff8a30','lava'],phoenix:['#3a1a0c','#ffd060','lava'],magma:['#1e1208','#ff6a10','lava'],blood:['#3a0a0a','#ff4a4a','horn'],frost:['#7aa8c8','#cdf4ff','ice'],ancient:['#5a6a7a','#a0d0ff','ice'],crystal:['#5ab0d8','#d0ffff','crys'],nature:['#2f5a2a','#9ad064','thorn'],venom:['#2a3a1a','#b0ff60','thorn'],shadow:['#2a2438','#a07aff','shade'],void:['#1a1030','#7c3aed','shade'],spectral:['#8a9ad0','#e0e8ff','shade'],chaos:['#4a1a5a','#ff80ff','shade'],bone:['#d8d0b8','#9aff9a','bone'],sand:['#b8924a','#fff0b0','stone'],storm:['#3a4a5a','#fff3a0','bolt'],thunder:['#4a3a1a','#ffd060','bolt'],light:['#e8e0c8','#fff0a0','bolt'],celestial:['#c8d0f0','#ffffff','bolt'],abyss:['#10306a','#60e0ff','water']};
  const hex = (h, k = 1) => { h = String(h || '#888').replace('#', ''); if (h.length === 3) h = h.replace(/./g, '$&$&'); const n = parseInt(h, 16); return [((n >> 16) & 255) / 255 * k, ((n >> 8) & 255) / 255 * k, (n & 255) / 255 * k]; };
  const ARCH = { tank: '#3b82f6', healer: '#4ade80', melee: '#f59e0b', ranged: '#c084fc' };
  const CW = {}, CH = {}, THKEY = { fire: 'inferno', frost: 'frost', nature: 'natura', shadow: 'ombra', storm: 'tempesta', blood: 'sangue', crystal: 'cristallo', magma: 'magma', spectral: 'spettrale', bone: 'ossa', light: 'luce', abyss: 'abisso' };
  window.Scene3D = function (canvas, overlay, classes) {
    if (classes) for (const k in classes) { CW[k] = classes[k].weapon; CH[k] = classes[k].helmet; }
    const r = Mini3D(canvas); if (!r) return null; r.camera({ yaw: 0, pitch: .87, dist: 16 }); window.__scene3dR = r;
    let QD = null; const qc = {};
    /** quadrato con UV + texture del cerchio d'area (DBA_VTEX dell'originale), una per tipo di abilità */
    const quadFor = (type) => {
      if (!window.DBA_VTEX) return null; type = type || 'x'; if (qc[type]) return qc[type];
      if (!QD) { const C = [[-1, -1, 0, 0], [1, -1, 1, 0], [1, 1, 1, 1], [-1, 1, 0, 1]], v = []; for (const i of [0, 1, 2, 0, 2, 3]) { const c = C[i]; v.push(c[0], 0, c[1], 0, 1, 0, 1, 1, 1, c[2], c[3]); } QD = r.makeMesh(new Float32Array(v), true); }
      return (qc[type] = { g: QD, t: r.makeTex(DBA_VTEX(type)) });
    };
    const BO = window.BossO3D ? BossO3D(r) : null; window.__bo = BO;
    const H3 = window.Hero3D && window.WOW_build ? Hero3D(r, classes) : null;
    const m = r.m, ctx = overlay.getContext('2d'), st = { spk: {}, heroes: {},  names: true, fx: [], floats: [], parts: [], lunge: {}, flash: {}, bossFlash: 0, bossCast: 0, boss: { x: 0, z: 0, face: 0 }, drag: null, auto: false, yaw: 0 };
    let clock = 0;
    // controlli camera: trascinamento (mouse/tocco), rotella e pinch
    const ptrs = new Map();
    canvas.addEventListener('pointerdown', (e) => { canvas.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]); st.auto = false; });
    canvas.addEventListener('pointerup', (e) => ptrs.delete(e.pointerId)); canvas.addEventListener('pointercancel', (e) => ptrs.delete(e.pointerId));
    canvas.addEventListener('pointermove', (e) => {
      const p = ptrs.get(e.pointerId); if (!p) return; const c = r.cam;
      if (ptrs.size === 2) { const o = [...ptrs.entries()].find(([k]) => k !== e.pointerId)[1], d0 = Math.hypot(p[0] - o[0], p[1] - o[1]); ptrs.set(e.pointerId, [e.clientX, e.clientY]); const d1 = Math.hypot(e.clientX - o[0], e.clientY - o[1]); r.camera({ dist: Math.max(10, Math.min(60, c.dist * d0 / (d1 || d0))) }); return; }
      r.camera({ yaw: c.yaw - (e.clientX - p[0]) * .008, pitch: Math.max(.15, Math.min(1.45, c.pitch + (e.clientY - p[1]) * .006)) }); ptrs.set(e.pointerId, [e.clientX, e.clientY]);
    });
    canvas.addEventListener('wheel', (e) => { e.preventDefault(); r.camera({ dist: Math.max(10, Math.min(60, r.cam.dist * (1 + Math.sign(e.deltaY) * .08))) }); }, { passive: false });
    canvas.addEventListener('dblclick', () => { st.auto = true; });
    const S = {
      renderer: r,
      /** mostra/nasconde le etichette "Classe - Razza" sopra gli eroi */
      showNames(v) { st.names = !!v; },
      autoRotate(v) { st.auto = !!v; },
      get opts() { return { names: st.names, auto: !!st.auto }; },
      /** evento del motore → effetto visivo */
      /** scossa schermo (DBA_SHAKE) */
      shake(a, d) { st.shk = { a: Math.max((st.shk ? st.shk.a * Math.max(0, st.shk.t / st.shk.d) : 0), a), d: d || .28, t: d || .28 }; },
      /** effetti di classe (DBA_CLSFXI), flash d'impatto (DBA_FXPLUS) e scossa (DBA_HITFX) dell'originale */
      classFx(e, G) {
        const k = e.kind, Fm = { x: e.from.x, z: e.from.z }, T = { x: e.to.x, z: e.to.z }, SH = { bossSlash: 5, bossAoE: 8, bossGroup: 10, special_trigger: 8, slash_big: 3.5, taunt_strike: 3, explosion: 4, lightning: 3.5, death: 4, rain: 3, frost: 2.5 }[k]; if (SH) this.shake(SH);
        const L = window.__fxlife || 1, put = (life, fn) => st.fx.push({ k: 'cl', t0: clock, life: life * L, lf: life, fn, a: Fm, b: T, c: G }), rnd = Math.random;
        // FXPLUS: lampo all'impatto + scia + scintille (max 7 ogni 250 ms), non per boss/compagni
        if (e.t === 'dmg' && e.val > 0 && e.who !== 'boss' && !(typeof e.who === 'string' && (e.who.indexOf('comp_') === 0 || e.who.indexOf('hc_') === 0))) {
          const nw = performance.now(), X = (this._fp = this._fp || { t: 0, n: 0 }); if (nw - X.t > 250) { X.t = nw; X.n = 0; }
          if (++X.n <= 7) { const big = /big|aoe|chain|explosion|nova|storm|rain|meteor/.test(k || '');
            put(.2, (a, f) => r.draw('sphere', m.trs(T.x, 1.3, T.z, 0, (big ? .7 : .45) + f * (big ? 1.3 : .8)), { color: G, alpha: .55 * (1 - f), unlit: true }));
            const dx = T.x - Fm.x, dz = T.z - Fm.z, d = Math.hypot(dx, dz);
            if (d > 3 && k !== 'slash' && k !== 'slash_big') put(.2, (a, f) => { const w = Math.max(.05, 1 - f) * .14; r.draw('box', m.trs((Fm.x + T.x) / 2, 1.2, (Fm.z + T.z) / 2, Math.atan2(dx, dz), w, w, d), { color: G, alpha: .7 * (1 - f), unlit: true }); });
            if (big) { st.fx.push({ k: 'wave', t0: clock, life: .6 * L, at: T, c: G, W: 3.2, a: T, b: T }); this.shake(1.6, .18); } } }
        const h = st.cls && st.cls[e.who], ck = h; if (!ck || window.__dbaReduce) return;
        const hl = k === 'heal_beam' || k === 'heal_ring' || k === 'regen' || k === 'bubble', col = (hx) => hex(hx);
        const rise = (x, z, c, n, shape, sc, sp) => { for (let i = 0; i < n; i++) { const px = x + (rnd() - .5) * 2.2, pz = z + (rnd() - .5) * 2.2, y0 = .3 + rnd() * .6, vy = (sp || 2) * (.6 + rnd() * .8), lf = .9 + rnd() * .4, ry = 0; put(lf, (a, f) => shape(px, y0 + vy * a, pz, c, (sc || 1), 1 - f, a * (rnd() * 0 + 3))); } };
        const fall = (x, z, c, n, shape, sc) => { for (let i = 0; i < n; i++) { const px = x + (rnd() - .5) * 3, pz = z + (rnd() - .5) * 3, y0 = 4 + rnd() * 2, vy = 4 + rnd() * 3; put(.8, (a, f) => shape(px, Math.max(.2, y0 - vy * a), pz, c, sc || 1, 1 - f, a * 4)); } };
        const leaf = (x, y, z, c, s, al, rt) => r.draw('cone', m.trs(x, y, z, rt, .24 * s, .35 * s, .24 * s), { color: c, alpha: al * .9, unlit: true }), drop = (x, y, z, c, s, al) => r.draw('sphere', m.trs(x, y, z, 0, .1 * s), { color: c, alpha: al * .9, unlit: true }), shard = (x, y, z, c, s, al, rt) => { r.draw('cone', m.trs(x, y, z, rt, .24 * s, .26 * s, .24 * s), { color: c, alpha: al * .9, unlit: true }); r.draw('cone', m.trs(x, y - .13 * s, z, rt, .24 * s, -.26 * s, .24 * s), { color: c, alpha: al * .9, unlit: true }); }, spark = (x, y, z, c, s, al) => r.draw('sphere', m.trs(x, y, z, 0, .07 * s), { color: c, alpha: al * .9, unlit: true }), ember = (x, y, z, c, s, al) => r.draw('sphere', m.trs(x, y, z, 0, .09 * s), { color: c, alpha: al * .9, unlit: true });
        const ring = (x, z, c, R) => st.fx.push({ k: 'wave', t0: clock, life: .6 * L, at: { x, z }, c, W: R, a: Fm, b: T });
        const pillar = (x, z, c) => put(.8, (a, f) => r.draw('cyl', m.trs(x, 3.5, z, 0, 1.1 * (1 + f * .3), 7, 1.1 * (1 + f * .3)), { color: c, alpha: .55 * (1 - f), unlit: true, double: true }));
        const arc = (c, big) => { const dx = T.x - Fm.x, dz = T.z - Fm.z, mx = (Fm.x + T.x) / 2, mz = (Fm.z + T.z) / 2, th = Math.atan2(dx, dz), R0 = big ? 2.2 : 1.7; put(.3, (a, f) => { const sc = .8 + f * .5; for (let j = 0; j < 8; j++) { const an = th + (j / 7 - .5) * 2.4, px = mx + Math.sin(an + 1.57) * 0 + Math.sin(an) * R0 * sc * .5, pz = mz + Math.cos(an) * R0 * sc * .5; r.draw('sphere', m.trs(px, 1.1, pz, 0, (big ? .16 : .1) * 1.3), { color: c, alpha: .95 * (1 - f), unlit: true }); } }); };
        const trail = (c, n) => { for (let i = 0; i < n; i++) { const f0 = i / n; put(.5, (a, f) => { if (f <= f0 * .35) return; r.draw('sphere', m.trs(Fm.x + (T.x - Fm.x) * f0, 1.1, Fm.z + (T.z - Fm.z) * f0, 0, .12 * (1 - f * .6)), { color: c, alpha: .8 * (1 - f), unlit: true }); }); } };
        const sigil = (x, z, c, R) => put(.9, (a, f) => { const rr = R, al = .9 * (1 - f); r.draw('ring', m.trs(x, .15, z, 0, rr, 1, rr), { color: c, alpha: al, unlit: true, double: true }); r.draw('ring', m.trs(x, .15, z, 0, rr * .62, 1, rr * .62), { color: c, alpha: al, unlit: true, double: true }); for (let i = 0; i < 3; i++) r.draw('box', m.trs(x, .16, z, a * 3 + i * Math.PI / 3, .08, .05, rr * 3), { color: c, alpha: al * .9, unlit: true }); });
        const spikes = (x, z, c, n, R) => { for (let i = 0; i < n; i++) { const an = i / n * 6.283; put(.7, (a, f) => { const sy = Math.min(1, f * 5) * (1 - Math.max(0, f - .6) * 2), hh = 1.5 * Math.max(.01, sy); r.draw('cone', m.trs(x + Math.cos(an) * R, hh / 2, z + Math.sin(an) * R, 0, .56, hh, .56), { color: c, alpha: .95 * (1 - f * f), unlit: true }); }); } };
        const burst = (x, z, c, n) => { for (let i = 0; i < n; i++) { const an = i / n * 6.283; put(.4, (a, f) => r.draw('box', m.trs(x + Math.cos(an) * f * 3.2, .9, z + Math.sin(an) * f * 3.2, 1.5708 - an, .12, .12, 1.1), { color: c, alpha: .9 * (1 - f), unlit: true })); } };
        const puff = (x, z, c, n) => { for (let i = 0; i < n; i++) { const px = x + (rnd() - .5) * 1.2, pz = z + (rnd() - .5) * 1.2, py = .7 + rnd() * .6, vx = (rnd() - .5) * 2; put(.7, (a, f) => r.draw('sphere', m.trs(px + vx * a, py, pz, 0, .4 * (1 + f * 2.2)), { color: c, alpha: .55 * (1 - f), unlit: true })); } };
        const drain = (c, n) => { for (let i = 0; i < n; i++) { const dl = i * .06; put(.7 + dl, (a) => { const f = Math.max(0, (a - dl) / .7); if (a <= dl) return; r.draw('sphere', m.trs(T.x + (Fm.x - T.x) * f + Math.sin(f * 6 + i) * .4, 1 + Math.sin(f * 3.14) * 1.2, T.z + (Fm.z - T.z) * f, 0, .13), { color: c, alpha: 1 - f * .5, unlit: true }); }); } };
        const C = { druido: 0x66dd55, monaco: 0x5ec8ff };
        const H = (n) => [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255];
        switch (ck) {
          case 'druido': rise(hl ? T.x : Fm.x, hl ? T.z : Fm.z, H(0x66dd55), 9, leaf, 1, 1.6); break;
          case 'monaco': rise(hl ? T.x : Fm.x, hl ? T.z : Fm.z, H(0x5ec8ff), 8, drop, 1.2, 2.2); if (hl) ring(T.x, T.z, H(0x5ec8ff), 2.4); break;
          case 'chierico': if (hl) { pillar(T.x, T.z, H(0xffe27a)); rise(T.x, T.z, H(0xfff2b0), 8, spark, 1.2, 2.6); } else sigil(Fm.x, Fm.z, H(0xffe27a), 1.3); break;
          case 'mago_sangue': drain(H(0xdd1133), 9); break;
          case 'cavaliere': case 'paladino': ring(Fm.x, Fm.z, H(ck === 'paladino' ? 0xfff2b0 : 0xcbd5e1), 3); if (ck === 'paladino') pillar(Fm.x, Fm.z, H(0xfff2b0)); break;
          case 'barbaro': case 'berserker': ring(Fm.x, Fm.z, H(0xff3322), 4.5); rise(T.x, T.z, H(0xff6622), 7, ember, 1.3, 2.8); break;
          case 'guardiano': spikes(Fm.x, Fm.z, H(0x8a6a44), 10, 2.2); break;
          case 'guerriero': arc(H(0xffffff), k === 'slash_big'); break;
          case 'spadaccino': arc(H(0xcfe8ff), false); if (k === 'multislash') trail(H(0xcfe8ff), 8); break;
          case 'cavaliere_oscuro': arc(H(0x9a4dff), k === 'slash_big'); puff(Fm.x, Fm.z, H(0x2a1040), 4); break;
          case 'assassino': puff(Fm.x, Fm.z, H(0x241830), 5); trail(H(0x9aa0b0), 7); break;
          case 'ninja': puff(Fm.x, Fm.z, H(0x333a4a), 6); trail(H(0xb0b8c8), 6); break;
          case 'gladiatore': case 'boia': burst(T.x, T.z, H(ck === 'boia' ? 0xcc2222 : 0xffd24a), 10); break;
          case 'arciere': case 'cacciatore': trail(H(ck === 'arciere' ? 0x9be37a : 0xe3c07a), 9); break;
          case 'mago': rise(T.x, T.z, H(0xff8a30), 9, ember, 1.3, 3); break;
          case 'crio_mago': fall(T.x, T.z, H(0xa8f0ff), 10, shard, 1.1); break;
          case 'fulmine_mago': ring(T.x, T.z, H(0xfff06a), 3.2); rise(T.x, T.z, H(0xfff9b0), 6, spark, 1.2, 3.2); break;
          case 'stregone': sigil(Fm.x, Fm.z, H(0xb040ff), 1.5); rise(T.x, T.z, H(0xc070ff), 6, leaf, 1.2, 2); break;
          case 'necromante': rise(T.x, T.z, H(0x66ff99), 8, drop, 1.5, 1.8); puff(T.x, T.z, H(0x143c24), 3); break;
        }
      },
      /** effetti a tema DBA_FX dell'originale (shockwave, meteor, frost_storm, lightning_storm, tide, poison, void, shadow_wave, root, bolt1) */
      themeFx(ty, pos, col, R) {
        const stl = (SPKPAL[st.th] || ['', '', 'stone'])[2];
        if (stl === 'bolt' && ty !== 'lightning_storm' && ty !== 'storm' && ty !== 'bolt1') ty = 'lightning_storm'; if (stl === 'water' && (ty === 'storm' || ty === 'lightning_storm')) ty = 'tide';
        st.fx.push({ k: 'tfx', ty, at: { x: pos.x, z: pos.z }, R: R || 2, c: col, t0: clock, life: (ty === 'bolt1' ? .5 : 1.6) * (window.__fxlife || 1), a: pos, b: pos });
      },
      event(e) {
        if (e.t === 'bossWind') { st.bossCast = clock; st.bossAnim = { type: 'wind', t0: clock, dur: e.claw ? .3 : .9 }; }
        else if (e.kind === 'bossSlash') st.bossAnim = { type: 'slash', t0: clock, dur: .4 }; else if (e.kind === 'bossAoE') st.bossAnim = { type: 'breath', t0: clock, dur: .7 }; else if (e.kind === 'bossGroup') st.bossAnim = { type: 'slash', t0: clock, dur: .6 };
        if (e.kind === 'special_trigger' && e.pos) { const col = hex(e.color || '#fb923c'), rad = e.radius || 3; st.fx.push({ k: 'boom', t0: clock, life: .5, at: e.pos, c: col, a: e.pos, b: e.pos }); st.fx.push({ k: 'wave', t0: clock, life: .7, at: e.pos, c: col, W: rad, up: true, a: e.pos, b: e.pos }); this.themeFx(e.type, e.pos, col, rad); return; }
        if (e.kind === 'spike_trigger' || e.kind === 'trap_trigger') {
          const pos = e.pos, th = st.th, pr = SPKPAL[th] || ['', '', 'stone'], stl = pr[2], col = hex(e.color || '#fa0');
          st.fx.push({ k: 'boom', t0: clock, life: .5, at: pos, c: col, a: pos, b: pos });
          if (e.kind === 'spike_trigger') { if (stl === 'bolt') this.themeFx('bolt1', pos, col, 1); }
          else if (stl === 'bolt') this.themeFx('bolt1', pos, col, 1);
          else this.themeFx({ lava: 'meteor', horn: 'meteor', ice: 'frost_storm', crys: 'frost_storm', thorn: th === 'venom' ? 'poison' : 'root', shade: 'void', bone: 'shadow_wave', stone: 'shockwave', water: 'tide' }[stl] || 'shockwave', pos, col, 2);
          return;
        }
        if (!e.from || !e.to) return; const c = hex(e.c || '#fff'); this.classFx(e, c);
        const A = { x: e.from.x, z: e.from.z }, B = { x: e.to.x, z: e.to.z }, kd = e.kind, add = (o) => { o.life *= (window.__fxlife || 1); st.fx.push(Object.assign({ t0: clock, a: A, b: B, c }, o)); }, burst = (p, n, col) => { for (let i = 0; i < n; i++) { const an = Math.random() * 6.283, sp = 2 + Math.random() * 3; st.parts.push({ x: p.x, y: 1, z: p.z, vx: Math.cos(an) * sp, vy: 2 + Math.random() * 2.5, vz: Math.sin(an) * sp, t0: clock, life: .6, c: col || c }); } };
        // effetti per tipo, come nell'originale (Lt raggio, Jt proiettile, se esplosione, Ne anello, Te raggio cura…)
        const typed = (() => { switch (kd) {
          case 'slash': add({ k: 'beam', life: .22, w: .35 }); return true;
          case 'slash_big': add({ k: 'beam', life: .22, w: .6 }); burst(B, 8); return true;
          case 'taunt_strike': add({ k: 'beam', life: .22, w: .6 }); add({ k: 'wave', life: .6, W: 2.5, at: A }); return true;
          case 'multislash': for (let i = -1; i <= 1; i++) add({ k: 'beam', life: .25 + .05 * (i + 1), w: .3, off: i * .7 }); return true;
          case 'projectile': case 'petAttack': add({ k: 'ball', life: .3 }); return true;
          case 'explosion': add({ k: 'boom', life: .5, at: B }); burst(B, 10); return true;
          case 'curse': add({ k: 'rise', life: .9, at: B }); return true;
          case 'heal_beam': add({ k: 'beam', life: .4, w: .12, h: true }); burst(B, 6); return true;
          case 'regen': add({ k: 'beam', life: .4, w: .12, h: true }); add({ k: 'wave', life: .6, W: 2.2, at: B }); return true;
          case 'heal_ring': add({ k: 'wave', life: .6, W: 3.8, at: A }); return true;
          case 'ring': add({ k: 'wave', life: .6, W: 3.2, at: A }); burst(A, 6); return true;
          case 'aura': add({ k: 'wave', life: .9, W: 2.4, at: A, up: true }); return true;
          case 'bubble': add({ k: 'dome', life: .9, at: B }); return true;
          case 'lightning': add({ k: 'bolt', life: .35 }); return true;
          case 'rain': add({ k: 'rainfx', life: .9, at: B }); return true;
          case 'frost': add({ k: 'wave', life: .6, W: 2.4, at: B }); burst(B, 8, [.7, .9, 1]); return true;
          case 'bossSlash': add({ k: 'beam', life: .22, w: .35, c: hex('#f87171') }); burst(B, 6, hex('#f87171')); return true;
          case 'bossAoE': add({ k: 'breath', life: .7 }); return true;
          case 'bossGroup': add({ k: 'wave', life: .9, W: 6, at: A, up: true }); burst(A, 12); return true;
          case 'companionAttack': add({ k: 'beam', life: .22, w: .35 }); return true;
          default: return false; } })();
        if (!typed) st.fx.push({ k: e.t, a: { x: e.from.x, z: e.from.z }, b: { x: e.to.x, z: e.to.z }, t0: clock, life: e.t === 'buff' ? .9 : .32, c, heal: e.t === 'heal', big: e.kind && /ring|aoe|nova|breath|slam/.test(e.kind) });
        if (e.who && e.who !== 'boss') st.lunge[e.who] = clock;
        if (e.who === 'boss') { st.bossCast = clock; if (e.t === 'dmg' && e.target) st.flash[e.target] = clock; }
        else if (e.t === 'dmg') st.bossFlash = clock;
        if (e.t === 'dmg' || e.t === 'heal') for (let i = 0; i < 7; i++) { const a = Math.random() * 6.283, sp = 1.5 + Math.random() * 3; st.parts.push({ x: e.to.x, y: 1.2, z: e.to.z, vx: Math.cos(a) * sp, vy: 2 + Math.random() * 3, vz: Math.sin(a) * sp, t0: clock, life: .55, c: e.t === 'heal' ? [.5, 1, .6] : c }); }
        if (e.val) st.floats.push({ x: e.to.x, z: e.to.z, v: e.val, t0: clock, heal: e.t === 'heal' });
      },
      frame(eng, dt) {
        clock += dt; const R = eng.arenaRadius || 16, boss = eng.boss, T = clock; st.th = boss && boss.theme; st.dt = dt; st.cls = st.cls || {}; for (const h of eng.heroes) st.cls[h.id] = h.classKey; if (st.shk && st.shk.t > 0) { st.shk.t -= dt; const q = Math.max(0, st.shk.t / st.shk.d) * st.shk.a; canvas.style.transform = 'translate(' + ((Math.random() - .5) * 2 * q).toFixed(1) + 'px,' + ((Math.random() - .5) * 2 * q).toFixed(1) + 'px)'; } else if (st.shk) { canvas.style.transform = ''; st.shk = null; }
        // impostazioni camera (Orbita / 3ª persona / 1ª persona) dal pannello Impostazioni
        const SG = window.__dbaSet || {}, cm = SG.cameraMode; let subj = null;
        if (cm === 'third' || cm === 'first') { const ctl = window.__dbaCtl; subj = (ctl && ctl.on && eng.heroes.find((h) => h.id === ctl.id && h.alive && h.pos)) || eng.heroes.find((h) => h.alive && h.pos); }
        if (subj) { const s0 = st.heroes[subj.id], f = s0 ? s0.face : 0; if (cm === 'third') r.camera({ yaw: f + Math.PI, pitch: .32, dist: SG.thirdPersonDistance || 5, target: [subj.pos.x, 1.7, subj.pos.z] }); else r.camera({ yaw: f + Math.PI, pitch: .02, dist: 1, target: [subj.pos.x + Math.sin(f), 1.8, subj.pos.z + Math.cos(f)] }); }
        else if (SG.cameraDistance && st._cd !== SG.cameraDistance) { st._cd = SG.cameraDistance; r.camera({ dist: SG.cameraDistance }); }
        // camera: orbita lenta automatica finché l'utente non la muove
        if (!subj && st.auto) { st.yaw += dt * .06; r.camera({ yaw: st.yaw }); }
        if (!subj) { // la camera segue il punto medio tra boss ed eroi vivi (morbida)
          const al = eng.heroes.filter((h) => h.alive && h.pos); let tx = 0, tz = 0;
          if (al.length && boss && boss.pos && !st.manualTarget) { let hx = 0, hz = 0; al.forEach((h) => { hx += h.pos.x; hz += h.pos.z; }); hx /= al.length; hz /= al.length; tx = (hx + boss.pos.x) / 2; tz = (hz + boss.pos.z) / 2; }
          const c0 = r.cam.target || [0, 1.2, 0], k = Math.min(1, dt * 2.5); r.camera({ target: [c0[0] + (tx - c0[0]) * k, 1.4, c0[2] + (tz - c0[2]) * k] });
        }
        this.setEnv(boss);
        r.begin(T, R);
        // pavimento + bordo + colonne
        const ar = (boss && boss.arena) || {}, ringC = hex(ar.ring || '#445'), hasTex = st.texKey;
        r.draw('disc', m.trs(0, 0, 0, 0, 26, 1, 26), hasTex ? { color: [1, 1, 1], mode: 2 } : { color: hex(ar.ground || '#2a2a3a', 3), mode: 1 });
        this.arenaProps(eng, boss, R, ringC);
        // telegrafi
        for (const t of eng.telegraphs || []) {
          const k = .22 + .1 * Math.sin(T * 8), col = hex(t.color || '#ff3030'), q = quadFor(t.type);
          r.draw('disc', m.trs(t.pos.x, .12, t.pos.z, 0, t.radius, 1, t.radius), { color: col, alpha: k, emissive: .5 });
          if (q) r.draw(q.g, m.trs(t.pos.x, .14, t.pos.z, T * (t.type === 'meteor' ? .4 : .15), t.radius, 1, t.radius), { color: col.map((x) => Math.min(1, x + .35)), alpha: .8, unlit: true, tex: q.t, ta: true, double: true });
          r.draw('ring', m.trs(t.pos.x, .16, t.pos.z, 0, t.radius, 1, t.radius), { color: col, alpha: .85, emissive: 1, double: true });
          r.draw('sphere', m.trs(t.pos.x, .5, t.pos.z, 0, .3), { color: col, alpha: .5, emissive: 1 });
        }
        // spuntoni del boss: forma per tema come DBA_SPK dell'originale (palette DBA_PR), crescono in .25 s dopo lo scatto
        { const pr = SPKPAL[boss && boss.theme] || ['#4a4a50', '#ffffff', 'stone'], stl = pr[2], gc = hex(pr[1]), live = new Set();
          for (const k of eng.spikes || []) { if (!k.pos) continue; live.add(k.id);
            const R = (k.radius || 1.2) / 1.2;
            if (!k.active) { r.draw('disc', m.trs(k.pos.x, .1, k.pos.z, 0, k.radius || 1, 1, k.radius || 1), { color: gc, alpha: .25 }); continue; }
            const t0 = st.spk[k.id] === undefined ? (st.spk[k.id] = clock) : st.spk[k.id], gr = Math.min(1, .05 + (clock - t0) / .25), fade = k.fadeTimer !== undefined ? Math.min(1, k.fadeTimer / .6) : 1;
            if (stl === 'bolt') { r.draw('ring', m.trs(k.pos.x, .06, k.pos.z, 0, R * 1.15, 1, R * 1.15), { color: gc, alpha: .9 * fade, unlit: true, double: true }); r.draw('cyl', m.trs(k.pos.x, 7, k.pos.z, 0, .12, 14, .12), { color: gc, alpha: (.45 + Math.random() * .55) * fade, unlit: true }); continue; }
            for (let i = 0; i <= 6; i++) { const a = i / 6 * Math.PI * 2, c = i === 6, hh = (c ? 2.3 : 1.5 + (Math.sin(i * 12.9 + k.pos.x * 7.7) * .5 + .5) * .6) * gr * R, rr = (c ? 0 : .65) * R, px = k.pos.x + Math.cos(a) * rr, pz = k.pos.z + Math.sin(a) * rr, w = (c ? .3 : .22) * 2 * R;
              const base = stl === 'water' ? { color: gc, alpha: .8 * fade, unlit: true } : stl === 'lava' || stl === 'horn' ? { color: [.18, .08, .05], emissive: .9, alpha: fade < 1 ? fade : undefined } : stl === 'ice' || stl === 'crys' ? { color: gc.map((x) => x * .8 + .15), emissive: .35, alpha: fade < 1 ? fade : undefined } : stl === 'thorn' ? { color: [.2, .38, .15], alpha: fade < 1 ? fade : undefined } : stl === 'shade' ? { color: [.12, .09, .2], emissive: .5, alpha: fade < 1 ? fade : undefined } : stl === 'bone' ? { color: [.85, .82, .7], alpha: fade < 1 ? fade : undefined } : { color: [.5, .47, .42], alpha: fade < 1 ? fade : undefined };
              if (stl === 'crys') { r.draw('cone', m.trs(px, hh * .5, pz, 0, .55 * R, hh, .55 * R), base); r.draw('cone', m.trs(px, hh * .5 - hh * .25, pz, 0, .55 * R, -hh * .5, .55 * R), base); }
              else if (stl === 'water') r.draw('cyl', m.trs(px, hh / 2, pz, 0, .28 * R, hh, .28 * R), base);
              else r.draw('cone', m.trs(px, hh / 2, pz, 0, w * (stl === 'shade' || stl === 'bone' ? .6 : 1), hh * (stl === 'shade' ? 1.3 : 1), w * (stl === 'shade' || stl === 'bone' ? .6 : 1)), base);
              if ((stl === 'lava' || stl === 'horn') && gr > .5) r.draw('cone', m.trs(px, hh + .2, pz, 0, .2, .5, .2), { color: gc, alpha: .9 * fade, unlit: true }); }
            r.draw('disc', m.trs(k.pos.x, .1, k.pos.z, 0, k.radius || 1, 1, k.radius || 1), { color: gc, alpha: .2 * fade }); }
          for (const id in st.spk) if (!live.has(id)) delete st.spk[id]; }
        // muri, trappole e area di copertura a tema (DBA_WALL / DBA_TRAPFILL / coverage_spawn dell'originale)
        { const pr = SPKPAL[boss && boss.theme] || ['#4a4a50', '#ffffff', 'stone'], stl = pr[2], gc = hex(pr[1]);
          const solid = stl === 'lava' || stl === 'horn' ? { color: [.2, .09, .06], emissive: .8 } : stl === 'ice' || stl === 'crys' ? { color: gc.map((x) => x * .7 + .2), emissive: .3 } : stl === 'thorn' ? { color: [.2, .36, .14] } : stl === 'shade' ? { color: [.14, .1, .22], emissive: .45 } : stl === 'bone' ? { color: [.85, .82, .7] } : { color: [.5, .47, .42] };
          const ca = eng.coverageArea; if (ca && ca.pos) { r.draw('disc', m.trs(ca.pos.x, .05, ca.pos.z, 0, ca.radius, 1, ca.radius), { color: hex(ca.color || '#fa0'), alpha: .3, unlit: true }); r.draw('ring', m.trs(ca.pos.x, .06, ca.pos.z, 0, ca.radius, 1, ca.radius), { color: hex(ca.color || '#fa0'), alpha: .6, unlit: true, double: true }); }
          for (const w of eng.walls || []) {
            const L = w.length || 6, H = w.height || 4, dur = 14, tt = dur - (w.duration === undefined ? dur : w.duration), sy = Math.max(.01, Math.min(1, tt / .5) * Math.min(1, Math.max(0, (dur - tt) / 1.2))), cs = Math.cos(w.angle), sn = Math.sin(w.angle), at = (lx, y, lz, sx, sh, sz, g, o) => r.draw(g, m.trs(w.x + cs * lx - sn * lz * 0 , y * sy, w.z + sn * lx, -w.angle, sx, sh * sy, sz), o);
            const wc = hex(w.color || '#7aa7d6');
            if (stl === 'bolt' || stl === 'water') { r.draw('box', m.trs(w.x, H / 2 * sy, w.z, -w.angle, L, H * sy, .25), { color: gc, alpha: .28, unlit: true, double: true });
              for (const sd of [-1, 1]) { const px = w.x + Math.cos(w.angle) * sd * L / 2, pz = w.z + Math.sin(w.angle) * sd * L / 2; r.draw('cyl', m.trs(px, (H + 1) / 2 * sy, pz, 0, .5, (H + 1) * sy, .5), { color: [.4, .45, .5], emissive: .3 }); r.draw('sphere', m.trs(px, (H + .8) * sy, pz, 0, .6), { color: gc, alpha: .9, unlit: true }); } continue; }
            r.draw('box', m.trs(w.x, H / 2 * sy, w.z, -w.angle, L, H * sy, w.thickness || .7), solid);
            const n = Math.max(4, Math.round(L / .8));
            for (let i = 0; i < n; i++) { const lx = -L / 2 + L * (i + .5) / n, px = w.x + Math.cos(w.angle) * lx, pz = w.z + Math.sin(w.angle) * lx, hr = (Math.sin(i * 12.9) * .5 + .5);
              if (stl === 'lava' || stl === 'horn') r.draw('cone', m.trs(px, (H + .4) * sy, pz, 0, .64, (.9 + hr * .8) * sy, .64), { color: gc, alpha: .9, unlit: true });
              else if (stl === 'ice' || stl === 'crys') r.draw('cone', m.trs(px, (H + .5) * sy, pz, 0, .48, (1 + hr * 1.4) * sy, .48), solid);
              else if (stl === 'thorn') r.draw('cone', m.trs(px, H * (.2 + hr * .7) * sy, pz + (i % 2 ? .45 : -.45), 0, .28, .9 * sy, .28), solid);
              else if (stl === 'bone') r.draw('sphere', m.trs(px, (H + .2) * sy, pz, 0, .6), solid);
              else if (stl === 'shade') r.draw('sphere', m.trs(px, (H + .8 + hr * .6) * sy, pz, 0, .5), { color: gc, alpha: .85, unlit: true });
              else r.draw('box', m.trs(px, (H + .2) * sy, pz, -w.angle, L / n * .8, (.5 + hr * .5) * sy, .7), solid); } }
          for (const tr of eng.traps || []) { if (!tr.pos) continue; const rad = tr.radius || 1, tc = hex(tr.color || '#fa0');
            r.draw('disc', m.trs(tr.pos.x, .06, tr.pos.z, 0, rad, 1, rad), { color: tc, alpha: .3, unlit: true }); r.draw('ring', m.trs(tr.pos.x, .07, tr.pos.z, 0, rad, 1, rad), { color: tc, alpha: .7, unlit: true, double: true });
            if (stl === 'bolt') r.draw('sphere', m.trs(tr.pos.x, .3, tr.pos.z, 0, .44), { color: gc, alpha: .95, unlit: true });
            else for (let i = 0; i <= 6; i++) { const a = i / 6 * 6.283, c = i === 6, hh = (c ? 2.3 : 1.75) * .45, rr = c ? 0 : .65 * .45; r.draw('cone', m.trs(tr.pos.x + Math.cos(a) * rr, hh / 2, tr.pos.z + Math.sin(a) * rr, 0, (c ? .6 : .44) * .45 * 1.2, hh, (c ? .6 : .44) * .45 * 1.2), stl === 'water' ? { color: gc, alpha: .8, unlit: true } : solid); } } }
        // boss
        if (boss && boss.pos) this.drawBoss(eng, boss, T);
        // eroi
        eng.heroes.forEach((h) => this.drawHero(h, boss, T, eng));
        // effetti
        st.fx = st.fx.filter((f) => clock - f.t0 < f.life);
        for (const f of st.fx) {
          const p = window.__fxp != null ? window.__fxp : (clock - f.t0) / f.life;
          if (f.k === 'beam' || f.k === 'bolt') { const dx = f.b.x - f.a.x, dz = f.b.z - f.a.z, L = Math.max(.6, Math.hypot(dx, dz)), ry = Math.atan2(dx, dz), ox = f.off ? Math.cos(ry) * f.off : 0, oz = f.off ? -Math.sin(ry) * f.off : 0, fa = (1 - p) * (f.h ? .85 : .95);
            if (f.k === 'bolt') { const n = 5; let px = f.a.x, pz = f.a.z; for (let i = 1; i <= n; i++) { const tx = f.a.x + dx * i / n + (i < n ? (Math.sin(i * 12.9 + Math.floor(p * 9)) * .5) : 0), tz = f.a.z + dz * i / n + (i < n ? Math.cos(i * 7.3 + Math.floor(p * 9)) * .5 : 0), sx = tx - px, sz = tz - pz, sl = Math.hypot(sx, sz) + .01; r.draw('box', m.trs((px + tx) / 2, .9 + Math.sin(i) * .25, (pz + tz) / 2, Math.atan2(sx, sz), .1, .1, sl), { color: [1, 1, .7], alpha: fa, unlit: true, double: true }); px = tx; pz = tz; } continue; }
            r.draw('box', m.trs((f.a.x + f.b.x) / 2 + ox, .9, (f.a.z + f.b.z) / 2 + oz, ry, f.w, f.h ? f.w : .05, L), { color: f.heal || f.h ? [.4, 1, .55] : f.c, alpha: fa, unlit: true, double: true }); continue; }
          if (f.k === 'cl') { const a = p * f.lf; f.fn(a, Math.min(1, a / f.lf)); continue; }
          if (f.k === 'tfx') { const a = p * f.life / (window.__fxlife || 1), X = f.at.x, Z = f.at.z, RR = f.R, ty = f.ty, col = f.c, n = 14, rn = (i, k) => { const v = Math.sin(i * 12.9898 + k * 78.233 + X * 3.1 + Z * 1.7) * 43758.5453; return v - Math.floor(v); };
            const ringW = (d, sp) => { const q = (a - d) / .8; if (q < 0 || q > 1) return; const sc = .01 + q * RR * sp; r.draw('ring', m.trs(X, .2, Z, 0, sc, 1, sc), { color: col, alpha: .8 * (1 - q), unlit: true, double: true }); };
            const pt = (sz, vx, vy, vz, life, g, x0, y0, z0) => { if (a > life || a < 0) return; r.draw('sphere', m.trs(x0 + vx * a, Math.max(.05, y0 + vy * a - .5 * g * a * a), z0 + vz * a, 0, sz), { color: col, alpha: .9 * (1 - a / life), unlit: true }); };
            const vbolt = (x, z, age) => { if (age < 0 || age > .45) return; const fa = age / .45, fl = fa < .5 ? (rn(Math.floor(age * 40), x) < .7 ? 1 : .3) : 1 - fa; let px = x + (rn(0, x) - .5) * 1.6, py = 16, pz = z + (rn(1, z) - .5) * 1.6;
              for (let i = 1; i <= 7; i++) { const nx = i === 7 ? x : x + (rn(i, x) - .5) * (i < 2 ? 1.6 : .8), nz = i === 7 ? z : z + (rn(i, z + 5) - .5) * (i < 2 ? 1.6 : .8), ny = i === 7 ? 0 : 16 - i * 2.3, dx = nx - px, dy = ny - py, dz = nz - pz, L = Math.hypot(dx, dy, dz), hz = Math.hypot(dx, dz), pitch = Math.atan2(hz, dy);
                r.draw('box', m.trs((px + nx) / 2, (py + ny) / 2, (pz + nz) / 2, Math.atan2(dx, dz), .22, .22, L, Math.atan2(-dy, hz) ), { color: col, alpha: fl, unlit: true, double: true }); r.draw('box', m.trs((px + nx) / 2, (py + ny) / 2, (pz + nz) / 2, Math.atan2(dx, dz), .08, .08, L, Math.atan2(-dy, hz)), { color: [1, 1, 1], alpha: fl, unlit: true, double: true }); px = nx; py = ny; pz = nz; }
              r.draw('disc', m.trs(x, .15, z, 0, 2.4, 1, 2.4), { color: col, alpha: .8 * (1 - fa), unlit: true, double: true }); };
            if (ty === 'bolt1') { vbolt(X, Z, a); continue; }
            const q0 = quadFor(ty); if (q0 && a < 1) r.draw(q0.g, m.trs(X, .14, Z, a * (ty === 'void' || ty === 'shadow_wave' ? -4 : 2), RR, 1, RR), { color: col, alpha: .85 * (1 - a), unlit: true, tex: q0.t, ta: true, double: true });
            if (ty === 'shockwave') { ringW(0, 1); ringW(.15, .8); ringW(.3, .6); for (let i = 0; i < n; i++) { const an = i / n * 6.283; pt(.14, Math.cos(an) * (3 + rn(i, 1) * 3), 1.5 + rn(i, 2) * 3, Math.sin(an) * (3 + rn(i, 3) * 3), .7, 9, X, .3, Z); } }
            else if (ty === 'meteor') { if (a < .4) { const q = a / .4; r.draw('sphere', m.trs(X, 14 - q * 13, Z, 0, .9 * (1 + q * .5)), { color: col, alpha: .95, unlit: true }); } for (let i = 0; i < n; i++) { const an = rn(i, 4) * 6.283, sp = 2 + rn(i, 5) * 5; pt(.1 + rn(i, 6) * .2, Math.cos(an) * sp, 3 + rn(i, 7) * 5, Math.sin(an) * sp, .9 + rn(i, 8) * .4, 12, X, .5, Z); } ringW(.4, 1); }
            else if (ty === 'frost_storm' || ty === 'ice_lance') { const q = Math.min(1, a); for (let i = 0; i < n; i++) { if (a > 1) break; const an = i / n * 6.283, rr = RR * (.3 + rn(i, 1) * .6), hh = (1.2 + rn(i, 2) * 1.4) * Math.min(1, q * 4); r.draw('cone', m.trs(X + Math.cos(an) * rr, hh / 2, Z + Math.sin(an) * rr, 0, .36, hh, .36), { color: col, alpha: .9 * (1 - q * q), unlit: true }); } ringW(0, .9); }
            else if (ty === 'lightning_storm' || ty === 'storm') { for (let i = 0; i < 7; i++) vbolt(X + (rn(i, 1) - .5) * RR * 1.6, Z + (rn(i, 2) - .5) * RR * 1.6, a - i * .09); ringW(.1, .8); }
            else if (ty === 'tide') { for (let i = 0; i < n; i++) { const an = rn(i, 1) * 6.283, d = rn(i, 2) * RR * .9; pt(.1 + rn(i, 3) * .15, 0, 1 + rn(i, 4) * 2, 0, 1.3, X + Math.cos(an) * d, .2, Z + Math.sin(an) * d); /* g=-.3 */ } ringW(0, 1); ringW(.25, .7); }
            else if (ty === 'poison') { for (let i = 0; i < n; i++) { const an = rn(i, 1) * 6.283, d = rn(i, 2) * RR * .8; pt(.12 + rn(i, 3) * .2, 0, .8 + rn(i, 4) * 1.5, 0, 1.4, X + Math.cos(an) * d, .2, Z + Math.sin(an) * d); } if (a < 1.2) r.draw('sphere', m.trs(X, .6, Z, 0, RR * .5, RR * .5 * .35, RR * .5), { color: col, alpha: .3 * (1 - a / 1.2), unlit: true }); }
            else if (ty === 'void' || ty === 'shadow_wave') { const q = a / .9; if (q <= 1) for (let i = 0; i < n; i++) { const a0 = i / n * 6.283, d = RR * (1 - q); r.draw('sphere', m.trs(X + Math.cos(a0 + q * 5) * d, .5 + q * 1.5, Z + Math.sin(a0 + q * 5) * d, 0, .16), { color: col, alpha: .9 * (1 - q), unlit: true }); } ringW(.5, 1); }
            else if (ty === 'root') { const q = Math.min(1, a); for (let i = 0; i < n; i++) { if (a > 1) break; const an = i / n * 6.283, hh = 1.6 * Math.min(1, q * 5); r.draw('cone', m.trs(X + Math.cos(an) * RR * .6, hh / 2, Z + Math.sin(an) * RR * .6, 0, .24, hh, .24), { color: col, alpha: .9 * (1 - q * q), unlit: true }); } ringW(0, .8); }
            else { for (let i = 0; i < n; i++) { const an = i / n * 6.283; pt(.12, Math.cos(an) * (2 + rn(i, 1) * 3), 1 + rn(i, 2) * 3, Math.sin(an) * (2 + rn(i, 3) * 3), .7, 8, X, .4, Z); } ringW(0, .9); }
            continue; }
          if (f.k === 'ball') { const q = Math.min(1, p), x = f.a.x + (f.b.x - f.a.x) * q, z = f.a.z + (f.b.z - f.a.z) * q; r.draw('sphere', m.trs(x, 1.1, z, 0, .16), { color: f.c, alpha: 1 - q * .4, unlit: true }); r.draw('sphere', m.trs(x, 1.1, z, 0, .3), { color: f.c, alpha: .4 * (1 - q), unlit: true }); continue; }
          if (f.k === 'boom') { r.draw('sphere', m.trs(f.at.x, 1, f.at.z, 0, .4 * (1 + p * 5)), { color: f.c, alpha: .85 * (1 - p), unlit: true }); continue; }
          if (f.k === 'wave') { const R0 = .3 + p * f.W; r.draw('ring', m.trs(f.at.x, f.up ? .2 + p * 1.2 : .85, f.at.z, 0, R0, 1, R0), { color: f.c, alpha: .9 * (1 - p), unlit: true, double: true }); continue; }
          if (f.k === 'dome') { r.draw('sphere', m.trs(f.at.x, 1, f.at.z, 0, 1.3), { color: f.c, alpha: .35 * Math.sin(Math.min(1, p) * Math.PI), unlit: true, double: true }); continue; }
          if (f.k === 'rise') { for (let i = 0; i < 14; i++) { const sx = Math.sin(i * 91.7) * 1, sz = Math.cos(i * 57.3) * 1; r.draw('sphere', m.trs(f.at.x + sx, .5 + (Math.sin(i * 12.3) * .5 + .5) * 2 + p * (1 + i % 3 * .3), f.at.z + sz, 0, .1), { color: f.c, alpha: 1 - p, unlit: true }); } continue; }
          if (f.k === 'rainfx') { for (let i = 0; i < 16; i++) { const sx = Math.sin(i * 41.7) * 2, sz = Math.cos(i * 17.3) * 2, yy = 7 - ((p * 9 + i * .37) % 1) * 7; r.draw('box', m.trs(f.at.x + sx, yy, f.at.z + sz, 0, .06, .5, .06), { color: f.c, alpha: .8 * (1 - p * .5), unlit: true }); } continue; }
          if (f.k === 'breath') { const dx = f.b.x - f.a.x, dz = f.b.z - f.a.z, ry = Math.atan2(dx, dz), L = 9 * Math.min(1, p * 2.2 + .15); r.draw('cone', m.trs(f.a.x + Math.sin(ry) * L * .5, 1.6, f.a.z + Math.cos(ry) * L * .5, ry, 3.4 * Math.min(1, p * 2 + .3), L, 3.4 * Math.min(1, p * 2 + .3), -Math.PI / 2), { color: [1, .55, .15], alpha: .55 * (1 - p), unlit: true, double: true }); continue; }
          if (f.k === 'buff') { r.draw('ring', m.trs(f.b.x, .2 + p * 2.4, f.b.z, 0, .9 + p * .4, 1, .9 + p * .4), { color: f.c, alpha: 1 - p, emissive: 1, double: true }); continue; }
          const q = Math.min(1, p * 1.8), x = f.a.x + (f.b.x - f.a.x) * q, z = f.a.z + (f.b.z - f.a.z) * q, y = 1.2 + Math.sin(q * Math.PI) * .6;
          if (q < 1) r.draw('sphere', m.trs(x, y, z, 0, .35), { color: f.c, emissive: 1.2 }); else r.draw('sphere', m.trs(f.b.x, 1.2, f.b.z, 0, .5 + (p - .55) * 3.2 * (f.big ? 2 : 1)), { color: f.heal ? [.4, 1, .5] : f.c, alpha: Math.max(0, 1 - (p - .55) / .45) * .6, emissive: 1 });
        }
        st.parts = st.parts.filter((q) => clock - q.t0 < q.life);
        for (const q of st.parts) { const a = clock - q.t0, y = q.y + q.vy * a - 4.9 * a * a; r.draw('sphere', m.trs(q.x + q.vx * a, Math.max(.1, y), q.z + q.vz * a, 0, .16 * (1 - a / q.life * .6)), { color: q.c, emissive: 1.2 }); }
        r.end();
        this.overlay(eng);
      },
      /** ambiente del boss: nebbia, luce e texture del terreno del suo bioma (come DBA_THKEY/DBA_BIOTEX del gioco originale) */
      setEnv(boss) {
        const key = boss && (boss.key || '') + '|' + (boss.theme || ''); if (key === st.envKey) return; st.envKey = key;
        const ar = (boss && boss.arena) || {}; r.env({ fog: hex(ar.fog || '#0a0d18').map((x) => Math.min(1, x * 1.6 + .02)), light: hex(ar.light || '#ffffff').map((x) => .55 + x * .5), tint: [1, 1, 1] });
        const tk = THKEY[boss && boss.theme], src = tk && window.BIOME_TEX && window.BIOME_TEX[tk]; st.texKey = null;
        if (src) { const img = new Image(); img.onload = () => { r.setFloorTexture(img, [3 / 52, 5.4 / 52]); st.texKey = tk; }; img.src = src; } else r.setFloorTexture(null);
      },
      /** rocce e cristalli attorno all'arena, nei colori del bioma (versione semplice di DBA_PROPS) */
      /** bordo arena e prop di tema come nell'originale: cerchio (anelli) o poligono (arenaVerts) + coni sui vertici + 26 prop a r 18-22 */
      arenaProps(eng, boss, R, ringC) {
        const V = eng.arenaVerts, circ = !V || eng.arenaShape === 'circle';
        if (circ) { r.draw('ringThin', m.trs(0, .06, 0, 0, R, 1, R), { color: ringC, emissive: .9, double: true }); r.draw('ringThin', m.trs(0, .04, 0, 0, 7.7, 1, 7.7), { color: ringC, alpha: .45, emissive: .6, double: true }); }
        else { for (let i = 0; i < V.length; i++) { const a = V[i], b = V[(i + 1) % V.length], dx = b.x - a.x, dz = b.z - a.z, len = Math.hypot(dx, dz); r.draw('box', m.trs((a.x + b.x) / 2, .05, (a.z + b.z) / 2, Math.atan2(dx, dz), .22, .06, len), { color: ringC, emissive: .9 }); } r.draw('ringThin', m.trs(0, .04, 0, 0, 7.7, 1, 7.7), { color: ringC, alpha: .3, emissive: .6, double: true }); }
        const pts = V && !circ ? V : Array.from({ length: 8 }, (_, i) => ({ x: Math.cos(i / 8 * 6.2832) * 17.5, z: Math.sin(i / 8 * 6.2832) * 17.5 }));
        pts.forEach((p, i) => r.draw('cone', m.trs(p.x * 1.04, .9, p.z * 1.04, 0, .4, 1.8, .4), { color: ringC, emissive: .6 }));
        const th = (boss && boss.theme) || '', key = th + '|' + ((boss && boss.name) || '');
        if (!st.props || st.propsKey !== key) { st.propsKey = key; let q = key.length * 7 + 3; const rnd = () => (q = q * 16807 % 2147483647) / 2147483647, N = 26,
            KD = ({ nature: 't', venom: 'm', frost: 'c', crystal: 'c', abyss: 'c', spectral: 'c', fire: 's', phoenix: 's', magma: 's', blood: 's', shadow: 'p', void: 'p', chaos: 'p', light: 'p', bone: 'b', sand: 'k', storm: 's', thunder: 's', ancient: 'c', celestial: 'p' })[th] || 'r';
          st.props = Array.from({ length: N }, (_, i) => { const a = i / N * 6.2832 + rnd() * .3, d = 18 + rnd() * 4, sc = .8 + rnd() * 1.1; return { k: i % 5 === 4 ? 'r' : KD, x: Math.cos(a) * d, z: Math.sin(a) * d, ry: rnd() * 6.28, sc, v: [rnd(), rnd(), rnd(), rnd(), rnd()] }; }); }
        const PAL = { fire: ['#2a1410', '#ff8a30'], phoenix: ['#3a1a0c', '#ffd060'], magma: ['#1e1208', '#ff6a10'], frost: ['#7aa8c8', '#cdf4ff'], crystal: ['#5ab0d8', '#d0ffff'], nature: ['#2f5a2a', '#9ad064'], venom: ['#2a3a1a', '#b0ff60'], shadow: ['#2a2438', '#a07aff'], void: ['#1a1030', '#7c3aed'], spectral: ['#8a9ad0', '#e0e8ff'], bone: ['#d8d0b8', '#9aff9a'], sand: ['#b8924a', '#fff0b0'], storm: ['#3a4a5a', '#fff3a0'], thunder: ['#4a3a1a', '#ffd060'], blood: ['#3a0a0a', '#ff4a4a'], light: ['#e8e0c8', '#fff0a0'], chaos: ['#4a1a5a', '#ff80ff'], abyss: ['#10306a', '#60e0ff'], ancient: ['#5a6a7a', '#a0d0ff'], celestial: ['#c8d0f0', '#ffffff'] }[th] || ['#4a4a50', '#ffffff'], C0 = hex(PAL[0]).map((x) => x * 1.35 + .04), C1 = hex(PAL[1]);
        for (const p of st.props) { const X = p.x, Z = p.z, S = p.sc, c = (y, k) => y * S;
          switch (p.k) {
            case 's': r.draw('cone', m.trs(X, 2.5 * S, Z, p.ry, .9 * S, 5 * S, .9 * S), { color: C0 }); r.draw('sphere', m.trs(X, 5.1 * S, Z, 0, .35 * S), { color: C1, emissive: 1 }); r.draw('cyl', m.trs(X, .25 * S, Z, 0, .7 * S, .5 * S, .7 * S), { color: C0 }); break;
            case 't': { const T = treeTex(), bk = T.bark ? { tex: T.bark, tri: .35, color: [1.5, 1.4, 1.3] } : { color: C0 }, lf = T.leaf ? { tex: T.leaf, tri: .3, color: [1.5, 1.6, 1.4] } : null;
              r.draw('cyl', m.trs(X, 1.6 * S, Z, 0, .5 * S, 3.2 * S, .5 * S), bk);
              if (p.v[0] < .5) for (let k = 0; k < 3; k++) r.draw('cone', m.trs(X, (3 + k * 1.2) * S, Z, 0, (2.4 - k * .6) * S, 2.6 * S, (2.4 - k * .6) * S), lf || { color: k % 2 ? [.23, .48, .16] : [.16, .35, .13] });
              else { r.draw('sphere', m.trs(X, 4.1 * S, Z, 0, 2.3 * S, 1.8 * S, 2.3 * S), lf || { color: [.2, .42, .15] }); r.draw('sphere', m.trs(X + .9 * S, 3.4 * S, Z + .4 * S, 0, 1.5 * S, 1.2 * S, 1.5 * S), lf || { color: [.2, .42, .15] }); }
              break; }
            case 'm': r.draw('cyl', m.trs(X, .8 * S, Z, 0, .25 * S, 1.6 * S, .25 * S), { color: C0 }); r.draw('sphere', m.trs(X, 1.7 * S, Z, 0, 1.1 * S, .55 * S, 1.1 * S), { color: C1, emissive: 1 }); break;
            case 'c': for (let i = 0; i < 5; i++) { const h = 1.8 + p.v[i] * 2.4; r.draw('cone', m.trs(X + (p.v[(i + 1) % 5] - .5) * 1.4 * S, h / 2 * S, Z + (p.v[(i + 2) % 5] - .5) * 1.4 * S, 0, (.35 + p.v[i] * .25) * S, h * S, (.35 + p.v[i] * .25) * S), { color: i % 2 ? C1 : C0, emissive: i % 2 ? .9 : 0 }); } break;
            case 'p': r.draw('cyl', m.trs(X, 2.25 * S, Z, 0, .62 * S, 4.5 * S, .62 * S), { color: C0 }); r.draw('cyl', m.trs(X, 4.6 * S, Z, 0, .75 * S, .3 * S, .75 * S), { color: C0 }); r.draw('sphere', m.trs(X, 5 * S, Z, 0, .3 * S), { color: C1, emissive: 1 }); break;
            case 'b': r.draw('sphere', m.trs(X - 1.8 * S, .5 * S, Z, 0, .5 * S), { color: C0 }); r.draw('sphere', m.trs(X, 1.4 * S, Z, 0, 1.8 * S, .22 * S, .3 * S), { color: C0 }); break;
            case 'k': r.draw('cyl', m.trs(X, 1.3 * S, Z, 0, .38 * S, 2.6 * S, .38 * S), { color: C0 }); r.draw('cyl', m.trs(X + .6 * S, 1.9 * S, Z, 0, .22 * S, 1.2 * S, .22 * S), { color: C0 }); break;
            default: for (let i = 0; i < 3; i++) r.draw('sphere', m.trs(X + (p.v[i] - .5) * 1.4 * S, .4 * S, Z + (p.v[(i + 1) % 5] - .5) * 1.4 * S, p.ry + i, (.8 + p.v[i] * .8) * S, (.8 + p.v[i] * .8) * (.7 + p.v[(i + 2) % 5] * .5) * S, (.8 + p.v[i] * .8) * S), { color: C0 });
          } }
      },
      rocks(boss, R) {
        const ar = (boss && boss.arena) || {}, g = hex(ar.ground || '#2a2a3a').map((x) => x * 1.4 + .08), acc = hex(ar.ring || '#888');
        if (!st.rocks || st.rocksKey !== st.envKey) { st.rocksKey = st.envKey; let s = 7; const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647; st.rocks = Array.from({ length: 28 }, () => { const a = rnd() * 6.283, d = R + 3 + rnd() * 9, h = 1.5 + rnd() * 4.5; return { x: Math.cos(a) * d, z: Math.sin(a) * d, h, w: 1.4 + rnd() * 2.6, rot: rnd() * 3, crys: rnd() < .22 }; }); }
        for (const k of st.rocks) { if (k.crys) r.draw('cone', m.trs(k.x, k.h * .5, k.z, k.rot, k.w * .5, k.h, k.w * .5), { color: acc, emissive: .9, alpha: .97 }); else { r.draw('cone', m.trs(k.x, k.h * .5, k.z, k.rot, k.w, k.h, k.w * .8), { color: g }); r.draw('sphere', m.trs(k.x + .6, k.h * .25, k.z - .4, k.rot, k.w * .8, k.h * .5, k.w * .7), { color: g.map((x) => x * .8) }); } }
      },
      drawBoss(eng, boss, T) {
        const base = hex(boss.color || boss.bossColor || '#a8a29e'), acc = hex(boss.bossColor || boss.color || '#ffd24a', 1.15).map((x) => Math.min(1, x + .2));
        const hit = Math.max(0, 1 - (clock - st.bossFlash) / .18), cast = Math.max(0, 1 - (clock - st.bossCast) / .5), tele = (eng.telegraphs || []).length > 0 ? 1 : 0;
        const c = base.map((x) => Math.min(1, x + hit * .5)), dark = base.map((x) => x * .55), belly = base.map((x) => Math.min(1, x * .75 + .25));
        const tgt = eng.heroes.find((h) => h.alive && h.pos);
        const want = tgt ? Math.atan2(tgt.pos.x - boss.pos.x, tgt.pos.z - boss.pos.z) : st.boss.face;
        let d = want - st.boss.face; d = Math.atan2(Math.sin(d), Math.cos(d)); st.boss.face += d * .12;
        const fy = st.boss.face, sc = 1.6, bob = Math.sin(T * 2) * .08 + cast * .25, hurt = boss.hp / boss.maxHp, glow = Math.min(1, tele * .5 + cast);
        const at = (lx, ly, lz) => [boss.pos.x + (Math.cos(fy) * lx + Math.sin(fy) * lz) * sc, ly * sc + bob, boss.pos.z + (-Math.sin(fy) * lx + Math.cos(fy) * lz) * sc];
        const partBase = (g, lx, ly, lz, sx, sy, sz, col, o, rx, rz, ry) => { const p = at(lx, ly, lz); r.draw(g, m.trs(p[0], p[1], p[2], fy + (ry || 0), sx * sc, sy * sc, sz * sc, rx, rz), Object.assign({ color: col }, o)); };
        const kind = Boss3D.plan(boss.key), look = Boss3D.look(boss.key);
        r.draw('disc', m.trs(boss.pos.x, .09, boss.pos.z, 0, 3, 1, 3), { color: [0, 0, 0], alpha: .4 });
        if (BO && BO.ready() && window.__bossModels !== false && BO.draw(boss.key, boss.pos.x, boss.pos.z, fy + (window.__bossYaw || 0), (boss.arenaScale || 1) * (window.__bossScale || 1.3), T, { hit, cast, dead: (() => { if (boss.alive !== false) { st.bdead = 0; st.bdfx = 0; return 0; } st.bdead = Math.min(1, (st.bdead || 0) + (st.dt || 0) * 1.1); if (!st.bdfx) { st.bdfx = 1; st.fx.push({ k: 'boom', t0: clock, life: .6, at: boss.pos, c: [1, .78, .25], a: boss.pos, b: boss.pos }); for (let i = 0; i < 14; i++) { const an = Math.random() * 6.283, sp = 2 + Math.random() * 4; st.parts.push({ x: boss.pos.x, y: 1.2, z: boss.pos.z, vx: Math.cos(an) * sp, vy: 3 + Math.random() * 3, vz: Math.sin(an) * sp, t0: clock, life: 1.1, c: [.6, .6, .65] }); } } return st.bdead; })(), anim: (() => { const a = st.bossAnim; if (!a) return null; const g = (window.__bossAnimG != null ? window.__bossAnimG : (clock - a.t0) / a.dur); if (g >= 1) { st.bossAnim = null; return null; } return { type: a.type, g }; })() })) {
          if (hurt < .35) r.draw('sphere', m.trs(boss.pos.x, 3.2, boss.pos.z, 0, 4.5), { color: [1, .25, .1], alpha: .08 + .05 * Math.sin(T * 10), emissive: 1 });
          return;
        }
        // stile del boss: trasparenza, bagliore, ossa/lava applicati a ogni parte
        const part0 = partBase;
        const part2 = (g, lx, ly, lz, sx, sy, sz, col, o, rx, rz, ry) => { o = Object.assign({}, o); if (look.alpha) o.alpha = (o.alpha === undefined ? 1 : o.alpha) * look.alpha; if (look.emissive) o.emissive = (o.emissive || 0) + look.emissive; return part0(g, lx, ly, lz, sx, sy, sz, col, o, rx, rz, ry); };
        if (kind !== 'dragon') {
          const X = { part: part2, T, c, dark, belly, acc, hit, cast, glow, hurt, look, dragon: null };
          Boss3D.draw(kind, X);
          if (hurt < .35) part2('sphere', 0, 2.2, 0, 3, 3, 3, [1, .25, .1], { alpha: .1 + .06 * Math.sin(T * 10), emissive: 1 });
          return;
        }
        const part = part2;
        part('sphere', 0, 1.15, 0, 1.7, 1.3, 2.4, c, { emissive: hit * .6 });             // corpo
        part('sphere', 0, .95, .25, 1.35, .9, 1.9, belly);                              // ventre chiaro
        for (let i = 0; i < 6; i++) part('cone', 0, 1.9 - i * .04, .9 - i * .45, .22, .5, .22, acc);   // spuntoni dorsali
        part('cyl', 0, 1.45, 1.05, .55, .5, .8, c, {}, .55);                             // collo
        part('sphere', 0, 1.75, 1.55, 1.0, .9, 1.05, c, { emissive: hit * .6 });         // testa
        part('sphere', 0, 1.6, 2.05, .62, .48, .75, dark);                               // muso
        const jaw = cast * .25 + Math.max(0, Math.sin(T * 1.5)) * .04;
        part('box', 0, 1.42 - jaw, 2.0, .45, .08, .55, dark);                            // mascella
        if (glow > .05) part('sphere', 0, 1.55, 2.4, .4 + glow * .5, .4 + glow * .5, .4 + glow * .5, acc, { alpha: .75, emissive: 1.6 });   // fuoco in bocca
        for (const s of [-1, 1]) {
          part('sphere', s * .3, 1.95, 1.98, .2, .2, .2, [1, .9, .3], { emissive: 1.8 });             // occhi
          part('cone', s * .35, 2.3, 1.3, .2, .9, .2, [.92, .9, .82], {}, -.55);                       // corna
          const flap = Math.sin(T * 3 + (s > 0 ? 0 : .35)) * .28;
          const ang = s * (.5 + flap), ax = s * (1.0 + Math.cos(ang) * .7), ay = 1.95 + Math.sin(Math.abs(ang)) * .7;
          part('box', ax, ay, -.1, 1.6, .12, .12, dark, {}, 0, ang);                                                // braccio dell'ala
          part('box', s * (1.05 + Math.cos(ang) * 1.05), 1.9 + Math.sin(Math.abs(ang)) * 1.0, -.45, 1.5, .04, 1.3, dark, { double: true, emissive: glow * .15 }, 0, ang);   // membrana
          for (const z of [-.75, .75]) { part('cyl', s * .7, .55, z, .42, 1.1, .42, dark); part('box', s * .7, .1, z + .2, .55, .2, .8, dark); }   // zampe + piedi
        }
        for (let i = 0; i < 6; i++) { const w = Math.sin(T * 2 - i * .5) * .18 * (i + 1) / 3; part('cone', w, 1.0 - i * .12, -1.5 - i * .5, .55 - i * .07, 1.0, .55 - i * .07, i % 2 ? c : dark, {}, -Math.PI / 2); }   // coda
        if (hurt < .35) part('sphere', 0, 1.2, 0, 1.75, 1.35, 2.45, [1, .25, .1], { alpha: .16 + .1 * Math.sin(T * 10), emissive: 1 });   // furia
      },
      drawHero(h, boss, T, eng) {
        if (!h.pos) return; const s = st.heroes[h.id] = st.heroes[h.id] || { x: h.pos.x, z: h.pos.z, face: 0, step: 0, fall: 0 };
        const dx = h.pos.x - s.x, dz = h.pos.z - s.z, moved = Math.hypot(dx, dz); if (moved > .002) { s.face = Math.atan2(dx, dz); s.step += moved * 6; } else if (boss && boss.pos) s.face = Math.atan2(boss.pos.x - h.pos.x, boss.pos.z - h.pos.z);
        s.x = h.pos.x; s.z = h.pos.z; const base = hex(h.color || ARCH[h.arch] || '#fff'), acc = hex(h.accent || '#e5e7eb');
        const fl = Math.max(0, 1 - (clock - (st.flash[h.id] || -9)) / .25), cc = base.map((x) => Math.min(1, x * .8 + .15 + fl * .6));
        const big = h.arch === 'tank' ? 1.2 : 1, bob = Math.abs(Math.sin(s.step)) * .08, ls = clock - (st.lunge[h.id] || -9), L = ls < .3 ? Math.sin(ls / .3 * Math.PI) : 0;
        const melee = h.arch === 'tank' || h.arch === 'melee', fwd = L * (melee ? .9 : .15);
        const px = h.pos.x + Math.sin(s.face) * fwd, pz = h.pos.z + Math.cos(s.face) * fwd, y = bob;
        const F = Math.sin(s.face), G = Math.cos(s.face), side = (k) => [Math.sin(s.face + 1.5708) * k, Math.cos(s.face + 1.5708) * k];
        r.draw('disc', m.trs(h.pos.x, .08, h.pos.z, 0, .6, 1, .6), { color: [0, 0, 0], alpha: .4 });
        if (H3 && window.__heroModels !== false) { // modelli originali razza × classe
          if (!h.alive) s.fall = Math.min(1, s.fall + .06); else s.fall = 0;
          if (H3.draw(h, px, 0, pz, s.face, { step: s.step, moving: moved > .002, atk: L, melee, fall: s.fall, flash: fl, scale: h.arch === 'tank' ? 1.05 : 1 })) return;
        }
        if (!h.alive) { s.fall = Math.min(1, s.fall + .08); r.draw('cyl', m.trs(h.pos.x, .55 - s.fall * .25, h.pos.z, s.face, .62, 1.1, .62, 0, s.fall * Math.PI / 2), { color: cc.map((x) => x * .4) }); return; } s.fall = 0;
        r.draw('cyl', m.trs(px, .55 * big + y, pz, s.face, .62 * big, 1.1 * big, .62 * big), { color: cc });                                   // corpo
        r.draw('cyl', m.trs(px, .12 + y * .3, pz, s.face, .5 * big, .24, .5 * big), { color: cc.map((x) => x * .55) });                         // stivali
        r.draw('sphere', m.trs(px, 1.38 * big + y, pz, s.face, .56 * big), { color: [.95, .82, .7] });                                         // testa
        const hy = 1.38 * big + y, cl = h.classKey, wp = h.weapon || CW[cl] || 'sword', hm = h.helmet || CH[cl] || 'hood';
        const lit = base.map((x) => Math.min(1, x + .25)), steel = [.82, .85, .92], gold = [.95, .8, .3];
        // elmo / copricapo dai dati della classe
        if (hm === 'hood') { r.draw('sphere', m.trs(px - F * .05, hy + .05, pz - G * .05, s.face, .7 * big, .66 * big, .7 * big), { color: base }); r.draw('cone', m.trs(px - F * .1, hy + .5 * big, pz - G * .1, s.face, .55 * big, .45 * big, .55 * big), { color: base }); r.draw('sphere', m.trs(px + F * .2 * big, hy - .02, pz + G * .2 * big, s.face, .4 * big), { color: [.95, .82, .7] }); }
        else if (hm === 'band') { r.draw('cyl', m.trs(px, hy + .12, pz, s.face, .6 * big, .1, .6 * big), { color: lit, emissive: .15 }); r.draw('box', m.trs(px - F * .32, hy + .1, pz - G * .32, s.face, .12, .25, .12), { color: lit }); }
        else if (hm === 'circlet') { r.draw('cyl', m.trs(px, hy + .2, pz, s.face, .6 * big, .06, .6 * big), { color: gold, emissive: .5 }); r.draw('sphere', m.trs(px + F * .3, hy + .24, pz + G * .3, s.face, .12), { color: lit, emissive: 1.6 }); }
        else if (hm === 'hat') { r.draw('cyl', m.trs(px, hy + .22, pz, s.face, .95 * big, .05, .95 * big), { color: base.map((x) => x * .7) }); r.draw('cone', m.trs(px, hy + .65 * big, pz, s.face, .6 * big, .9 * big, .6 * big, -.12), { color: base }); }
        else { // helmet / horned
          r.draw('sphere', m.trs(px, hy + .08, pz, s.face, .64 * big, .56 * big, .64 * big), { color: steel.map((x) => x * .9) }); r.draw('box', m.trs(px + F * .27 * big, hy, pz + G * .27 * big, s.face, .32 * big, .1, .1), { color: [.12, .12, .16] }); r.draw('box', m.trs(px + F * .3 * big, hy - .1, pz + G * .3 * big, s.face, .06, .24, .08), { color: steel });
          if (hm === 'horned') for (const k of [-1, 1]) { const o = side(.34 * k); r.draw('cone', m.trs(px + o[0], hy + .35, pz + o[1], s.face, .13, .5, .13, 0, -k * .7), { color: [.93, .9, .8] }); }
          else r.draw('cone', m.trs(px - F * .1, hy + .42, pz - G * .1, s.face, .12, .3, .3, 0, 0), { color: base });   // cresta
        }
        // arma dai dati della classe: pezzi lungo l'asse dell'arma [forma, u (lungo l'asse), lat, sx, sy, sz, colore, opzioni, rotZ]
        const R = side(.5 * big), Lf = side(-.5 * big), swing = melee ? L * 1.3 : L * .5, th = -.15 + swing;
        const ax = px + R[0] + F * .15, ay = .85 * big + y, az = pz + R[1] + G * .15, wood = [.5, .35, .2], orb = h.arch === 'healer' ? [.6, 1, .7] : lit;
        const W = {
          staff: [['cyl', .5, 0, .09, 1.9, .09, wood], ['sphere', 1.55, 0, .28 + L * .25, .28 + L * .25, .28 + L * .25, orb, { emissive: 1.2 + L * 1.5 }]],
          mace: [['cyl', .3, 0, .09, 1.0, .09, wood], ['sphere', .85, 0, .3, .3, .3, steel], ['box', .85, 0, .45, .1, .1, steel]],
          sword: [['box', .75, 0, .1, 1.1, .04, steel, { emissive: .1 + L * .8 }], ['box', .15, 0, .4, .07, .08, gold], ['cyl', 0, 0, .07, .3, .07, wood]],
          axe: [['cyl', .45, 0, .08, 1.5, .08, wood], ['box', 1.0, .25, .5, .45, .06, steel], ['box', 1.0, -.1, .08, .3, .08, steel]],
          hammer: [['cyl', .45, 0, .09, 1.5, .09, wood], ['box', 1.15, 0, .7, .4, .4, [.6, .6, .68]]],
          dagger: [['box', .35, 0, .08, .5, .03, steel, { emissive: .1 + L }], ['box', .05, 0, .2, .05, .06, gold]],
          spear: [['cyl', .8, 0, .07, 2.5, .07, wood], ['cone', 2.15, 0, .16, .45, .16, steel]],
          greatsword: [['box', 1.05, 0, .24, 1.8, .05, steel, { emissive: .1 + L * .8 }], ['box', .1, 0, .6, .09, .1, gold], ['cyl', -.15, 0, .08, .4, .08, wood]],
          katana: [['box', .95, 0, .06, 1.55, .03, [.9, .92, .98], { emissive: .1 + L }], ['cyl', .05, 0, .3, .05, .3, gold], ['cyl', -.15, 0, .06, .4, .06, [.2, .15, .15]]],
          bow: [['box', .5, 0, .07, .4, .07, wood], ['box', 1.0, -.08, .06, .7, .06, wood, {}, -.35], ['box', .0, -.08, .06, .7, .06, wood, {}, .35], ['box', .5, -.18, .02, 1.5, .02, [.9, .9, .85]]],
          crossbow: [['box', .45, 0, .95, .08, .08, wood], ['box', .45, 0, .08, .08, .7, wood], ['box', .6, 0, .02, .02, .6, [.9, .9, .85]]],
        };
        const rw = (wp === 'sword' || wp === 'mace' || wp === 'axe') ? 0 : 0;
        const cT = Math.cos(th), sT = Math.sin(th), fc = Math.cos(s.face), fs = Math.sin(s.face);
        for (const [g, u, lat, sx, sy, sz, col, o, rz] of (W[wp] || W.sword)) {
          const ly = u * cT, lz = u * sT, lx = lat;
          if (wp === 'bow' || wp === 'crossbow') { /* gli archi stanno in verticale, davanti alla mano */ }
          r.draw(g, m.trs(ax + fc * lx + fs * lz, ay + ly, az - fs * lx + fc * lz, s.face, sx, sy, sz, th, rz || 0), Object.assign({ color: col }, o));
        }
        if (h.arch === 'tank' && (wp === 'sword' || wp === 'mace' || wp === 'axe')) r.draw('box', m.trs(px + Lf[0] + F * .25, .65 * big + y, pz + Lf[1] + G * .25, s.face, .1, .95 * big, .75 * big), { color: base.map((x) => Math.min(1, x * .9 + .1)), emissive: .15 });   // scudo
        else if (wp === 'dagger') r.draw('box', m.trs(px + Lf[0] + F * .15, .8 * big + y, pz + Lf[1] + G * .15, s.face, .08, .5, .03, th), { color: steel });   // seconda lama
        if (fl > 0) r.draw('cyl', m.trs(px, .6 * big + y, pz, s.face, .7 * big, 1.2 * big, .7 * big), { color: [1, .2, .1], alpha: fl * .5, emissive: 1 });
      },
      overlay(eng) {
        const w = canvas.width, h = canvas.height; if (overlay.width !== w) overlay.width = w; if (overlay.height !== h) overlay.height = h; ctx.clearRect(0, 0, w, h); const d = h / 700;
        const bar = (x, y, bw, f, col) => { ctx.fillStyle = 'rgba(0,0,0,.65)'; ctx.fillRect(x - bw / 2 - 1, y - 1, bw + 2, 7 * d); ctx.fillStyle = col; ctx.fillRect(x - bw / 2, y, bw * Math.max(0, Math.min(1, f)), 5 * d); };
        const b = eng.boss; if (b && b.pos) { const p = r.project(b.pos.x, 6.2, b.pos.z); if (p) { bar(p.x, p.y, 150 * d, b.hp / b.maxHp, '#ef4444'); ctx.fillStyle = '#fff'; ctx.font = `${13 * d}px system-ui`; ctx.textAlign = 'center'; ctx.fillText(`${b.icon || ''} ${b.name || 'Boss'}`, p.x, p.y - 6 * d); } }
        ctx.font = `${12 * d}px system-ui`; ctx.textAlign = 'center';
        for (const hr of eng.heroes) { if (!hr.alive || !hr.pos) continue; const p = r.project(hr.pos.x, 2.3, hr.pos.z); if (!p) continue; bar(p.x, p.y, 34 * d, hr.hp / hr.maxHp, '#4ade80'); if (hr.maxMana && hr.mana !== undefined) { ctx.fillStyle = 'rgba(0,0,0,.6)'; ctx.fillRect(p.x - 17 * d, p.y + 7 * d, 34 * d, 3 * d); ctx.fillStyle = '#60a5fa'; ctx.fillRect(p.x - 17 * d, p.y + 7 * d, 34 * d * Math.max(0, hr.mana / hr.maxMana), 3 * d); } if (H3 && st.names) { ctx.font = `600 ${9 * d}px system-ui`; ctx.lineWidth = 2.5 * d; ctx.strokeStyle = 'rgba(0,0,0,.85)'; ctx.fillStyle = '#fff'; const tx = String(H3.label(hr)).replace(' - ', ' · ') + (window.__dbaSet && window.__dbaSet.showLevel && hr.level ? ' · Lv.' + hr.level : ''); ctx.strokeText(tx, p.x, p.y - 4 * d); ctx.fillText(tx, p.x, p.y - 4 * d); ctx.lineWidth = 1; ctx.font = `${12 * d}px system-ui`; } else { ctx.fillStyle = '#fff'; ctx.fillText(hr.icon || '', p.x, p.y - 4 * d); } }
        st.floats = st.floats.filter((f) => clock - f.t0 < .9);
        for (const f of st.floats) { const p = r.project(f.x, 2.2 + (clock - f.t0) * 2.2, f.z); if (!p) continue; ctx.globalAlpha = 1 - (clock - f.t0) / .9; ctx.fillStyle = f.heal ? '#86efac' : '#fde68a'; ctx.font = `bold ${15 * d}px system-ui`; ctx.fillText(f.v, p.x, p.y); ctx.globalAlpha = 1; }
      },
    };
    return S;
  };
})();
