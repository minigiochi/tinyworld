// Estrae il sintetizzatore musicale originale (tracce So + classe p$) da module_no_assets.js → web/music.js
const fs=require('fs');const s=fs.readFileSync(__dirname+'/../reference/code/module_no_assets.js','utf8');
const iC=s.indexOf('class p${');let iS=s.lastIndexOf('const So=',iC);if(iS<0)iS=s.lastIndexOf('So=[',iC);
let d=0,j=iC+7;for(;j<s.length;j++){const c=s[j];if(c=='{')d++;else if(c=='}'){d--;if(d==0){j++;break}}}
console.log('So at',iS,'class',iC,'end',j,'len',j-iS,'|',JSON.stringify(s.slice(iS,iS+40)));
let code=s.slice(iS,j);
fs.writeFileSync(__dirname+'/../web/music.js','(function(){\n'+code+';\nconst fi=new p$;window.__dbaFi=fi;window.DBA_MUS=()=>fi;})();\n');
