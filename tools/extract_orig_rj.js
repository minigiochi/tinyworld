const fs=require('fs');const s=fs.readFileSync('/home/claude/dba-next/reference/code/module_no_assets.js','utf8');
function bal(i){const o=s[i],c=o=='{'?'}':o=='['?']':')';let d=0,k=i,q=null;for(;k<s.length;k++){const ch=s[k];if(q){if(ch=='\\')k++;else if(ch==q)q=null;continue}if(ch=='"'||ch=="'"||ch=='`'){q=ch;continue}if(ch==o)d++;if(ch==c&&--d==0)break}return s.slice(i,k+1)}
function def(name){const re=new RegExp('[ ,;(]'+name+'=([\\[{])');const m=re.exec(s);if(!m)throw name;const st=m.index+m[0].length-1;return bal(st)}
function fn(name){const i=s.indexOf('function '+name+'(');const b=s.indexOf('{',s.indexOf(')',i));return s.slice(i,b)+bal(b)}
const names=['DBA_SLOTW','DBA_CW','DBA_HT','DBA_OFFN','DBA_ARMN','DBA_ARMK','tj','DBA_SM','DBA_SETSL','DBA_CO','hc','J6','qv','Q6'];
let src='';const data={};
for(const n of names){const t=def(n);src+='var '+n+'='+t+';\n';data[n]=eval('('+t+')')}
src+='var bd=Object.fromEntries(hc.map(n=>[n.key,n]));\n';
for(const f of ['DBA_PK','DBA_LBL','nj','rj'])src+=fn(f)+'\n';
src+='var DBA_SETS='+def('DBA_SETS')+';\nvar Kc={};\n';
fs.writeFileSync(process.argv[2],src);fs.writeFileSync(process.argv[3],JSON.stringify(data));console.log(Object.keys(data).map(k=>k+':'+JSON.stringify(data[k]).length).join(' '));
