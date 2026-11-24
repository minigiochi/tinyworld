const acorn=require('acorn'),fs=require('fs');
const src=fs.readFileSync('../reference/code/module_no_assets.js','utf8');
const ast=acorn.parse(src,{ecmaVersion:2022,sourceType:'module',ranges:true});
const want=new Set(['DBA_W','DBA_TPL','DBA_MKB','DBA_R3','DBA_TPK']);
for(const n of ast.body){ if(n.type==='FunctionDeclaration'&&want.has(n.id.name))console.log(n.id.name,n.start,n.end,n.end-n.start);
 if(n.type==='ExpressionStatement'&&src.slice(n.start,n.start+30).includes('DBA_X='))console.log('DBA_X',n.start,n.end)}
