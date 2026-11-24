const acorn=require('acorn'),es=require('eslint-scope'),fs=require('fs');
const src=fs.readFileSync(process.argv[2],'utf8');
const ast=acorn.parse(src,{ecmaVersion:2022,sourceType:'script',ranges:true});
const sm=es.analyze(ast,{ecmaVersion:2022});
const g=sm.globalScope;const names=new Set();
g.through.forEach(r=>names.add(r.identifier.name));
console.log([...names].sort().join(' '));
