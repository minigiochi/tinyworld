const fs=require('fs');const src=fs.readFileSync('../reference/code/module_no_assets.js','utf8');
const parts=[[1254354,1265890],[1265892,1367393],[1207521,1207632],[1207633,1208061],[1367395,1367451],[1367452,1367521]];
let t=parts.map(p=>src.slice(p[0],p[1])).join('\n');
t+='\nvar __T=[$2,E2,ir,B2,kp,h_,Na,Ps,qd,Ku,Lf,Rt,zt,ln,fe,Og,Jn,on,zn,Tt,Fn,Gt,rn,Ci,_n,DBA_ARCH,DBA_BIKEYS,DBA_EN,DBA_ENP,DBA_EQ,DBA_GRIM,DBA_MUS,DBA_NMD,DBA_PRISM,DBA_RARS,DBA_SETFULL,DBA_SETFXT,DBA_SETS,DBA_SLOTW,DBA_TAL,DBA_TALFIND,DBA_THKEY,DBA_HMAT,DBA_NMB,DBA_VILTEX,WOW_RACES,WOW_build,$v,hn];\n';
fs.writeFileSync('../reference/code/world_root.js',t);console.log(t.length,t.slice(0,60));
