const fs=require('fs'),vm=require('vm');
const ctx={console,Math,window:{},Float32Array,Object,String,Array,Number};ctx.window=ctx;vm.createContext(ctx);
for(const f of ['web/threeshim.js','web/wowdata.js','web/wowbuild.js'])vm.runInContext(fs.readFileSync(f,'utf8'),ctx,{filename:f});
const T=ctx.ThreeShim;
function stats(o){let m=0,v=0,g=0;(function w(n){g++;if(n.geometry){m++;v+=n.geometry.attributes.position.count}n.children.forEach(w)})(o);return{groups:g,meshes:m,verts:v}}
const keys=Object.keys(ctx.WOW_CLS),races=Object.keys(ctx.WOW_RACES);let ok=0,bad=[];
const t0=Date.now();
for(const ck of keys)for(const rc of races)for(const sex of ['male','female']){
 try{const A={classKey:ck,arch:'melee',color:'#cc8844',appearance:{race:rc,sex,skinColor:ctx.WOW_RACES[rc].skin[0],hairColor:ctx.WOW_RACES[rc].hair[0]}};
  const o=ctx.WOW_build(T,A,false);const s=stats(o);if(!s.verts)throw Error('vuoto');ok++;if(ck==='monaco'&&rc==='orco'&&sex==='male')console.log('monaco orco',s)}
 catch(e){bad.push(ck+'/'+rc+'/'+sex+': '+e.message)}}
console.log('ok',ok,'su',keys.length*races.length*2,'ms',Date.now()-t0);console.log(bad.slice(0,8));
