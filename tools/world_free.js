const acorn=require('acorn'),es=require('eslint-scope'),fs=require('fs');
const src=fs.readFileSync('../reference/code/module_no_assets.js','utf8');
const parts=[[1254354,1265890],[1265892,1367393],[1207521,1207632],[1207633,1208061],[1367395,1367451]];
const code=parts.map(p=>src.slice(p[0],p[1])).join('\n');
const a=acorn.parse(code,{ecmaVersion:2022,sourceType:'script',ranges:true});const sm=es.analyze(a,{ecmaVersion:2022});
const o=new Set();sm.globalScope.through.forEach(r=>o.add(r.identifier.name));
console.log([...o].sort().join(' '));
