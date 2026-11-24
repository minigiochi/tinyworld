const fs=require('fs'),vm=require('vm');
const noop=new Proxy(function(){},{get:(t,k)=>k==='canvas'?{}:noop,apply:()=>noop,set:()=>true});
const ctx={console,Math,Float32Array,Object,String,Array,Number,Date,Symbol,
 document:{createElement:()=>({width:0,height:0,getContext:()=>noop})}};ctx.window=ctx;vm.createContext(ctx);
for(const f of ['web/threeshim.js','web/bossbuild.js'])vm.runInContext(fs.readFileSync(f,'utf8'),ctx,{filename:f});
const keys=JSON.parse(fs.readFileSync('src/data/bosses.json')).map(b=>b.key);let bad=[];
for(const k of keys){try{const t=Date.now(),r=ctx.BossOrig.build(k);let m=0,v=0;(function w(n){if(n.geometry){m++;v+=n.geometry.attributes.position.count}n.children.forEach(w)})(r.root);console.log(k,'mesh',m,'vert',v,'ms',Date.now()-t,Object.keys(r).filter(x=>r[x]&&x!=='root'&&x!=='grp'&&x!=='bMesh'&&x!=='bBody').join())}catch(e){bad.push(k+': '+e.message.slice(0,100))}}
console.log('errori',bad);
{const r=ctx.BossOrig.build('inferno');for(const k of ['wingL','wingR','jaw','tail','clawL','clawR','legs'])console.log(k,r[k]&&r[k].constructor&&r[k].constructor.name,r[k]&&Object.keys(r[k]).slice(0,6).join())}
