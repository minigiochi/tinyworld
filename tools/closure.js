// Estrae da module_no_assets.js le definizioni top-level da cui dipende una funzione radice.
const acorn=require('acorn'),es=require('eslint-scope'),fs=require('fs');
const src=fs.readFileSync('../reference/code/module_no_assets.js','utf8');
const ast=acorn.parse(src,{ecmaVersion:2022,sourceType:'module',ranges:true});
const defs=new Map(); // name -> [{start,end}]
function add(n,s,e,pre){if(!defs.has(n))defs.set(n,[]);defs.get(n).push({s,e,pre})}
function pat(p,out){if(!p)return;if(p.type==='Identifier')out.push(p.name);else if(p.type==='ObjectPattern')p.properties.forEach(x=>pat(x.value||x.argument,out));else if(p.type==='ArrayPattern')p.elements.forEach(x=>pat(x,out));else if(p.type==='AssignmentPattern')pat(p.left,out);else if(p.type==='RestElement')pat(p.argument,out)}
for(const n of ast.body){
 if(n.type==='FunctionDeclaration'||n.type==='ClassDeclaration')add(n.id.name,n.start,n.end);
 else if(n.type==='VariableDeclaration'){n.declarations.forEach(d=>{const out=[];pat(d.id,out);out.forEach(x=>add(x,d.start,d.end,n.kind+' '))})}
 else if(n.type==='ExpressionStatement'){ // X=..., window.X=...
   const walk=e=>{if(e.type==='AssignmentExpression'){const l=e.left;if(l.type==='Identifier')add(l.name,n.start,n.end);else if(l.type==='MemberExpression'&&l.object.name==='window'&&l.property.name&&/^DBA_/.test(l.property.name))add(l.property.name,n.start,n.end)}else if(e.type==='SequenceExpression')e.expressions.forEach(walk)};walk(n.expression)}
}
const PROVIDED=new Set(process.env.PROVIDED?process.env.PROVIDED.split(','):[]);
const GL=new Set(['Math','Set','Map','window','performance','Object','Array','JSON','Date','Number','String','Promise','Symbol','document','localStorage','console','undefined','NaN','Infinity','parseInt','parseFloat','isNaN','Float32Array','Uint8Array','Error','RegExp','WeakMap','requestAnimationFrame','setTimeout','clearTimeout','setInterval','navigator','location','Boolean','Function','Reflect','Proxy','BigInt','globalThis','Intl','Uint16Array','Uint32Array','Float64Array','Int32Array']);
function free(code){const a=acorn.parse(code,{ecmaVersion:2022,sourceType:'script',ranges:true});const sm=es.analyze(a,{ecmaVersion:2022});const o=new Set();sm.globalScope.through.forEach(r=>o.add(r.identifier.name));for(const m of code.matchAll(/window\.(DBA_[A-Za-z0-9_]+)/g))o.add(m[1]);return o}
const root=fs.readFileSync('../reference/code/engine_raw.js','utf8');
const need=[...free(root),'ug'].filter(x=>!GL.has(x));const picked=new Map();const missing=new Set();const q=[...need];
while(q.length){const n=q.pop();if(picked.has(n)||GL.has(n)||PROVIDED.has(n))continue;const d=defs.get(n);if(!d){missing.add(n);continue}
 const ranges=d;const keys=ranges.map(r=>r.s+':'+r.e);picked.set(n,ranges);
 for(const r of ranges){const code=(r.pre||'')+src.slice(r.s,r.e)+(r.pre?';':'');let f;try{f=free(code)}catch(e){console.error('parse',n,e.message);continue}
  // le dichiarazioni dichiarano se stesse: ignora
  f.forEach(x=>{if(!GL.has(x)&&!PROVIDED.has(x)&&!picked.has(x))q.push(x)})}}
const seen=new Set(),parts=[];
for(const [n,r] of [...picked].sort((a,b)=>a[1][0].s-b[1][0].s))for(const x of r){const k=x.s+':'+x.e;if(seen.has(k))continue;seen.add(k);parts.push({s:x.s,e:x.e,pre:x.pre})}
parts.sort((a,b)=>a.s-b.s);
console.log('definizioni',picked.size,'blocchi',parts.length,'byte',parts.reduce((a,b)=>a+b.e-b.s,0));
console.log('mancanti',[...missing].sort().join(' '));
fs.writeFileSync(process.env.OUT||'../reference/code/engine_deps.js',parts.map(p=>(p.pre||'')+src.slice(p.s,p.e)+(p.pre?';':'')).join('\n'));
