// mini3d — piccolo renderer WebGL 1 senza dipendenze (nessun Three.js): solido con luce, nebbia, trasparenze, pavimento procedurale.
// Uso: const r = Mini3D(canvas); r.camera({yaw,pitch,dist,target:[x,y,z]}); r.begin(); r.draw('sphere', m, {color:[r,g,b], alpha, emissive, mode}); r.end();
// Le matrici sono Float32Array(16) colonna-per-colonna (come WebGL); helper in Mini3D.m.
(function () {
  const M = {
    ident() { const o = new Float32Array(16); o[0] = o[5] = o[10] = o[15] = 1; return o; },
    mul(a, b) { const o = new Float32Array(16); for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) { let s = 0; for (let k = 0; k < 4; k++) s += a[k * 4 + r] * b[c * 4 + k]; o[c * 4 + r] = s; } return o; },
    persp(fov, asp, n, f) { const t = 1 / Math.tan(fov / 2), o = new Float32Array(16); o[0] = t / asp; o[5] = t; o[10] = (f + n) / (n - f); o[11] = -1; o[14] = 2 * f * n / (n - f); return o; },
    look(e, c, u) { const z = norm(sub(e, c)), x = norm(cross(u, z)), y = cross(z, x), o = new Float32Array(16);
      o[0] = x[0]; o[4] = x[1]; o[8] = x[2]; o[1] = y[0]; o[5] = y[1]; o[9] = y[2]; o[2] = z[0]; o[6] = z[1]; o[10] = z[2];
      o[12] = -dot(x, e); o[13] = -dot(y, e); o[14] = -dot(z, e); o[15] = 1; return o; },
    /** trasformazione: posizione, rotazione Y, rotazione X (intorno a Z locale dopo), scala */
    trs(px, py, pz, ry, sx, sy, sz, rx, rz) {
      ry = ry || 0; rx = rx || 0; rz = rz || 0; sy = sy === undefined ? sx : sy; sz = sz === undefined ? sx : sz;
      const cy = Math.cos(ry), sY = Math.sin(ry), cx = Math.cos(rx), sX = Math.sin(rx), cz = Math.cos(rz), sZ = Math.sin(rz);
      // R = Ry * Rx * Rz
      const r00 = cy * cz + sY * sX * sZ, r01 = -cy * sZ + sY * sX * cz, r02 = sY * cx,
        r10 = cx * sZ, r11 = cx * cz, r12 = -sX,
        r20 = -sY * cz + cy * sX * sZ, r21 = sY * sZ + cy * sX * cz, r22 = cy * cx;
      const o = new Float32Array(16);
      o[0] = r00 * sx; o[1] = r10 * sx; o[2] = r20 * sx; o[4] = r01 * sy; o[5] = r11 * sy; o[6] = r21 * sy; o[8] = r02 * sz; o[9] = r12 * sz; o[10] = r22 * sz;
      o[12] = px; o[13] = py; o[14] = pz; o[15] = 1; return o;
    },
  };
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]], dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2],
    cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]],
    norm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };

  // geometrie: array di vertici [x,y,z,nx,ny,nz] e indici
  function geo() { return { v: [], i: [] }; }
  function sphere(la = 14, lo = 22) { const g = geo(); for (let a = 0; a <= la; a++) { const t = a / la * Math.PI; for (let b = 0; b <= lo; b++) { const p = b / lo * Math.PI * 2, x = Math.sin(t) * Math.cos(p), y = Math.cos(t), z = Math.sin(t) * Math.sin(p); g.v.push(x * .5, y * .5, z * .5, x, y, z); } }
    for (let a = 0; a < la; a++) for (let b = 0; b < lo; b++) { const i = a * (lo + 1) + b; g.i.push(i, i + lo + 1, i + 1, i + 1, i + lo + 1, i + lo + 2); } return g; }
  function cylinder(n = 22, topR = .5, botR = .5) { const g = geo(); const sl = botR - topR; const ny = sl; // lato
    for (let b = 0; b <= n; b++) { const p = b / n * Math.PI * 2, c = Math.cos(p), s = Math.sin(p), l = Math.hypot(1, ny), nx = c / l, nz = s / l; g.v.push(c * topR, .5, s * topR, nx, ny / l, nz, c * botR, -.5, s * botR, nx, ny / l, nz); }
    for (let b = 0; b < n; b++) { const i = b * 2; g.i.push(i, i + 1, i + 2, i + 2, i + 1, i + 3); }
    const cap = (y, r, ny2) => { const base = g.v.length / 6; g.v.push(0, y, 0, 0, ny2, 0); for (let b = 0; b <= n; b++) { const p = b / n * Math.PI * 2; g.v.push(Math.cos(p) * r, y, Math.sin(p) * r, 0, ny2, 0); } for (let b = 0; b < n; b++) g.i.push(base, ny2 > 0 ? base + b + 2 : base + b + 1, ny2 > 0 ? base + b + 1 : base + b + 2); };
    if (topR > 0) cap(.5, topR, 1); cap(-.5, botR, -1); return g; }
  function box() { const g = geo(); const F = [[[0, 0, 1], [1, 0, 0], [0, 1, 0]], [[0, 0, -1], [-1, 0, 0], [0, 1, 0]], [[1, 0, 0], [0, 0, -1], [0, 1, 0]], [[-1, 0, 0], [0, 0, 1], [0, 1, 0]], [[0, 1, 0], [1, 0, 0], [0, 0, -1]], [[0, -1, 0], [1, 0, 0], [0, 0, 1]]];
    for (const [n, u, v] of F) { const b = g.v.length / 6; for (const [a, c] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) g.v.push((n[0] + u[0] * a + v[0] * c) * .5, (n[1] + u[1] * a + v[1] * c) * .5, (n[2] + u[2] * a + v[2] * c) * .5, n[0], n[1], n[2]); g.i.push(b, b + 1, b + 2, b, b + 2, b + 3); } return g; }
  function disc(n = 64) { const g = geo(); g.v.push(0, 0, 0, 0, 1, 0); for (let b = 0; b <= n; b++) { const p = b / n * Math.PI * 2; g.v.push(Math.cos(p), 0, Math.sin(p), 0, 1, 0); } for (let b = 0; b < n; b++) g.i.push(0, b + 2, b + 1); return g; }
  function ring(n = 64, inner = .86) { const g = geo(); for (let b = 0; b <= n; b++) { const p = b / n * Math.PI * 2, c = Math.cos(p), s = Math.sin(p); g.v.push(c, 0, s, 0, 1, 0, c * inner, 0, s * inner, 0, 1, 0); } for (let b = 0; b < n; b++) { const i = b * 2; g.i.push(i, i + 1, i + 3, i, i + 3, i + 2); } return g; }

  const VS = 'attribute vec3 aP;attribute vec3 aN;attribute vec3 aC;attribute vec2 aU;varying vec2 vU;varying vec3 vC;uniform mat4 uVP;uniform mat4 uM;uniform mat3 uNM;varying vec3 vN;varying vec3 vW;void main(){vec4 w=uM*vec4(aP,1.0);vW=w.xyz;vN=normalize(uNM*aN);vC=aC;vU=aU;gl_Position=uVP*w;}';
  const FS = 'precision mediump float;varying vec2 vU;uniform sampler2D uMT;uniform sampler2D uMET;uniform float uHM;uniform float uHA;uniform float uHEm;uniform vec2 uRep;uniform vec3 uEC;varying vec3 vC;uniform float uU;varying vec3 vN;varying vec3 vW;uniform vec3 uC;uniform float uA;uniform float uE;uniform int uMode;uniform vec3 uCam;uniform vec3 uFog;uniform float uT;uniform float uR;uniform sampler2D uTex;uniform vec4 uUV;uniform vec3 uL;uniform vec3 uTint;uniform float uTri;' +
    'void main(){float ta=1.0;if(uHA>.5){ta=texture2D(uMT,vU*uRep).a;if(ta<.03)discard;}vec3 n=normalize(vN);vec3 L=normalize(vec3(-.45,.85,.35));float d=max(dot(n,L),0.0);vec3 col=uC*vC;if(uHM>.5){if(uTri>0.){vec3 tw=pow(abs(n),vec3(4.));tw/=tw.x+tw.y+tw.z;vec3 tp=vW*uTri;col*=texture2D(uMT,tp.zy).rgb*tw.x+texture2D(uMT,tp.xy).rgb*tw.z+texture2D(uMT,tp.xz).rgb*tw.y;}else col*=texture2D(uMT,vU*uRep).rgb;}' +
    'if(uMode==2){vec2 uv=vec2(vW.x*uUV.x+.5,vW.z*uUV.y+.5);col=texture2D(uTex,uv).rgb*uTint;float r2=length(vW.xz)/uR;col*=1.0-.5*smoothstep(.9,1.7,r2);}if(uMode==1){float r=length(vW.xz)/uR;float rings=1.-smoothstep(0.,.015,abs(fract(r*6.)-.5)-.47);float ang=atan(vW.z,vW.x);float rays=(1.-smoothstep(0.,.02,abs(fract(ang*12./6.2831)-.5)-.485))*step(r,.95);float cell=mod(floor(vW.x*.9)+floor(vW.z*.9),2.0);col=mix(uC*.82,uC,cell);col+=vec3(.18,.2,.3)*(rings+rays*.6);col*=1.0-.35*smoothstep(.7,1.,min(r,1.));}' +
    'vec3 lit=col*(.34+.8*d*uL);vec3 V=normalize(uCam-vW);float rim=pow(1.-max(dot(n,V),0.),3.);lit+=vec3(.25,.3,.5)*rim*.25;lit+=col*uE;lit=mix(lit,col,uU);if(uHEm>.5)lit+=texture2D(uMET,vU*uRep).rgb*uEC;' +
    'float f=clamp((length(uCam-vW)-26.)/48.,0.,1.);lit=mix(lit,uFog,f);gl_FragColor=vec4(lit,uA*ta);}';

  window.Mini3D = function (canvas) {
    const gl = canvas.getContext('webgl', { antialias: true, alpha: false });
    if (!gl) return null;
    const sh = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(o)); return o; };
    const pg = gl.createProgram(); gl.attachShader(pg, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pg, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(pg); gl.useProgram(pg);
    const U = {}; ['uVP', 'uM', 'uNM', 'uC', 'uA', 'uE', 'uMode', 'uCam', 'uFog', 'uT', 'uR', 'uTex', 'uUV', 'uL', 'uTint', 'uU', 'uMT', 'uMET', 'uHM', 'uHA', 'uHEm', 'uRep', 'uEC', 'uTri'].forEach((n) => (U[n] = gl.getUniformLocation(pg, n)));
    const aP = gl.getAttribLocation(pg, 'aP'), aN = gl.getAttribLocation(pg, 'aN'), aC = gl.getAttribLocation(pg, 'aC'), aU = gl.getAttribLocation(pg, 'aU');
    const G = {}; const mk = (name, g) => { const vb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, vb); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(g.v), gl.STATIC_DRAW); const ib = gl.createBuffer(); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ib); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(g.i), gl.STATIC_DRAW); G[name] = { vb, ib, n: g.i.length }; };
    mk('sphere', sphere()); mk('cyl', cylinder()); mk('cone', cylinder(18, 0, .5)); mk('box', box()); mk('disc', disc()); mk('ring', ring()); mk('ringThin', ring(96, .975));
    let fog = [.04, .05, .09], lightCol = [1, 1, 1], tex = null, texUV = [3 / 52, 5.4 / 52], tint = [1, 1, 1];
    let cam = { yaw: .6, pitch: .62, dist: 19, target: [0, 1, 0] }, VP = M.ident(), eye = [0, 10, 20], t0 = 0, arenaR = 16, queue = [];
    const R = {
      m: M, canvas, gl,
      camera(c) { Object.assign(cam, c); },
      get cam() { return cam; },
      /** ambiente: colore nebbia/sfondo e della luce principale (0-1) */
      env(o) { if (o.fog) fog = o.fog; if (o.light) lightCol = o.light; if (o.tint) tint = o.tint; },
      /** texture del terreno da un'immagine (potenza di 2, ripetuta); uv: scala per metro in x e z */
      setFloorTexture(img, uv) {
        if (!img) { tex = null; return; } const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img); gl.generateMipmap(gl.TEXTURE_2D);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        const ext = gl.getExtension('EXT_texture_filter_anisotropic'); if (ext) gl.texParameterf(gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, 4);
        tex = t; if (uv) texUV = uv;
      },
      /** mesh non indicizzata con colori per vertice: v = Float32Array [x,y,z,nx,ny,nz,r,g,b]*N; restituisce un nome per draw() */
      makeMesh(v, uv) { const stride = uv ? 11 : 9; const vb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, vb); gl.bufferData(gl.ARRAY_BUFFER, v, gl.STATIC_DRAW); const name = 'm' + (R._mid = (R._mid || 0) + 1); G[name] = { vb, ib: null, n: v.length / stride, vc: true, stride }; return name; },
      /** texture dalla canvas/immagine (se non è potenza di 2 viene ricampionata a 512×512), con REPEAT */
      makeTex(src) { let c = src; const w = src.width, h = src.height, p2 = (n) => (n & (n - 1)) === 0; if (!p2(w) || !p2(h)) { c = document.createElement('canvas'); c.width = c.height = 512; c.getContext('2d').drawImage(src, 0, 0, 512, 512); }
        const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, c); gl.generateMipmap(gl.TEXTURE_2D);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT); return t; },
      resize() { const d = Math.min(window.devicePixelRatio || 1, 2), w = Math.floor(canvas.clientWidth * d), h = Math.floor(canvas.clientHeight * d); if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; } gl.viewport(0, 0, canvas.width, canvas.height); },
      begin(time, arenaRadius) {
        t0 = time || 0; arenaR = arenaRadius || 16; R.resize(); queue = [];
        gl.clearColor(fog[0], fog[1], fog[2], 1); gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); gl.enable(gl.DEPTH_TEST); gl.enable(gl.CULL_FACE); gl.cullFace(gl.BACK); gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        const cp = Math.cos(cam.pitch);
        eye = [cam.target[0] + Math.sin(cam.yaw) * cp * cam.dist, cam.target[1] + Math.sin(cam.pitch) * cam.dist, cam.target[2] + Math.cos(cam.yaw) * cp * cam.dist];
        const P = M.persp(.9, canvas.width / canvas.height, 2, 160), V = M.look(eye, cam.target, [0, 1, 0]); VP = M.mul(P, V);
        gl.uniformMatrix4fv(U.uVP, false, VP); gl.uniform3fv(U.uCam, eye); gl.uniform3fv(U.uFog, fog); gl.uniform3fv(U.uL, lightCol); gl.uniform3fv(U.uTint, tint); gl.uniform4fv(U.pad || U.uUV, [texUV[0], texUV[1], 0, 0]); if (tex) { gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, tex); gl.uniform1i(U.uTex, 0); } gl.uniform1f(U.uT, t0); gl.uniform1f(U.uR, arenaR);
      },
      /** disegna subito gli opachi; i trasparenti (alpha<1) vengono messi in coda e disegnati da end() ordinati per distanza */
      draw(g, m, o) { o = o || {}; const a = o.alpha === undefined ? 1 : o.alpha; if (a < 1) { queue.push({ g, m, o, d: (m[12] - eye[0]) ** 2 + (m[13] - eye[1]) ** 2 + (m[14] - eye[2]) ** 2 }); return; } R._d(g, m, o); },
      _d(g, m, o) {
        const geom = G[g]; gl.bindBuffer(gl.ARRAY_BUFFER, geom.vb); gl.enableVertexAttribArray(aP); gl.vertexAttribPointer(aP, 3, gl.FLOAT, false, (geom.vc ? geom.stride * 4 : 24), 0); gl.enableVertexAttribArray(aN); gl.vertexAttribPointer(aN, 3, gl.FLOAT, false, (geom.vc ? geom.stride * 4 : 24), 12); if (geom.vc) { gl.enableVertexAttribArray(aC); gl.vertexAttribPointer(aC, 3, gl.FLOAT, false, geom.stride * 4, 24); if (geom.stride === 11) { gl.enableVertexAttribArray(aU); gl.vertexAttribPointer(aU, 2, gl.FLOAT, false, 44, 36); } else { gl.disableVertexAttribArray(aU); gl.vertexAttrib2f(aU, 0, 0); } } else { gl.disableVertexAttribArray(aC); gl.vertexAttrib3f(aC, 1, 1, 1); gl.disableVertexAttribArray(aU); gl.vertexAttrib2f(aU, 0, 0); } if (geom.ib) gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, geom.ib);
        // matrice normali = inversa trasposta di 3x3 (per scale non uniformi)
        const a = m[0], b = m[1], c = m[2], d = m[4], e = m[5], f = m[6], gg = m[8], h = m[9], i = m[10];
        const A = e * i - f * h, B = f * gg - d * i, C = d * h - e * gg, det = a * A + b * B + c * C || 1;
        const nm = new Float32Array([A / det, B / det, C / det, (c * h - b * i) / det, (a * i - c * gg) / det, (b * gg - a * h) / det, (b * f - c * e) / det, (c * d - a * f) / det, (a * e - b * d) / det]);
        gl.uniformMatrix4fv(U.uM, false, m); gl.uniformMatrix3fv(U.uNM, false, nm);
        const col = o.color || [.7, .7, .7]; gl.uniform3fv(U.uC, col); gl.uniform1f(U.uA, o.alpha === undefined ? 1 : o.alpha); gl.uniform1f(U.uE, o.emissive || 0); gl.uniform1i(U.uMode, o.mode || 0); gl.uniform1f(U.uU, o.unlit ? 1 : 0); { const tx = o.tex; gl.uniform1f(U.uHM, tx ? 1 : 0); gl.uniform1f(U.uHEm, o.etex ? 1 : 0); gl.uniform1f(U.uHA, o.ta ? 1 : 0); gl.uniform2f(U.uRep, o.rep ? o.rep[0] : 1, o.rep ? o.rep[1] : 1); gl.uniform1f(U.uTri, o.tri || 0); gl.uniform3fv(U.uEC, o.ec || [0, 0, 0]); if (tx) { gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, tx); gl.uniform1i(U.uMT, 1); } if (o.etex) { gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, o.etex); gl.uniform1i(U.uMET, 2); } gl.activeTexture(gl.TEXTURE0); }
        gl.depthMask(!(o.alpha < 1)); if (o.double) gl.disable(gl.CULL_FACE); else gl.enable(gl.CULL_FACE);
        if (geom.vc) gl.drawArrays(gl.TRIANGLES, 0, geom.n); else gl.drawElements(gl.TRIANGLES, geom.n, gl.UNSIGNED_SHORT, 0);
      },
      end() { queue.sort((p, q) => q.d - p.d); for (const q of queue) R._d(q.g, q.m, q.o); gl.depthMask(true); },
      /** coordinate mondo → pixel del canvas (per etichette/barre PV); null se dietro la camera */
      project(x, y, z) { const v = VP; const cx = v[0] * x + v[4] * y + v[8] * z + v[12], cy = v[1] * x + v[5] * y + v[9] * z + v[13], cw = v[3] * x + v[7] * y + v[11] * z + v[15]; if (cw <= 0) return null; return { x: (cx / cw * .5 + .5) * canvas.width, y: (1 - (cy / cw * .5 + .5)) * canvas.height, s: 1 / cw }; },
    };
    return R;
  };
  Mini3D.m = M;
})();
