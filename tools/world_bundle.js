// Genera web/world.bundle.js: Three.js REALE (estratto dal bundle originale) + DBA_W/DBA_R3/DBA_X dell'originale.
const fs=require('fs');const deps=fs.readFileSync('reference/code/world_deps.js','utf8'),root=fs.readFileSync('reference/code/world_root.js','utf8');
const out='(function(){\n'+deps+'\n;'+root+'\n;window.THREE_O={WebGLRenderer:$2,Scene:E2,PerspectiveCamera:ir,AmbientLight:B2,DirectionalLight:kp,Fog:h_,Mesh:fe,MeshStandardMaterial:zt,MeshBasicMaterial:ln,Color:Rt,Texture:Og,BufferGeometry:Jn,BufferAttribute:on,Group:zn,SphereGeometry:Tt,CylinderGeometry:Fn,ConeGeometry:Gt,BoxGeometry:rn,TorusGeometry:Ci};window.DBA_W=DBA_W;window.DBA_R3=DBA_R3;if(typeof DBA_X!=="undefined")window.DBA_X=DBA_X;\n})();\n';
const names=new Set();let o2=out.replace(/(["'`])@@ASSET:([^@]+)@@\1/g,(m,q,n)=>{names.add(n);return 'window.__ASSETS["'+n+'"]'});
const mime={jpg:'image/jpeg',jpeg:'image/jpeg',png:'image/png',webp:'image/webp'};const A={};for(const n of names){const f='assets/img/'+n;A[n]='data:'+mime[n.split('.').pop()]+';base64,'+fs.readFileSync(f).toString('base64')}
fs.writeFileSync('web/assets.js','window.__ASSETS='+JSON.stringify(A)+';\n');console.log('assets',names.size,(JSON.stringify(A).length/1e6).toFixed(1)+'MB');
fs.writeFileSync('web/world.bundle.js',o2);console.log(out.length);
