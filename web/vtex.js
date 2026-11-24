// Texture dei cerchi d'area a terra — testo ORIGINALE di DBA_VTEX (restituisce la canvas).
var DBA_VT={};
function DBA_VTEX(ty){if(DBA_VT[ty])return DBA_VT[ty];var c=document.createElement('canvas');c.width=c.height=256;var x=c.getContext('2d'),r=Math.random,i,a,k,px,py,d;x.translate(128,128);x.strokeStyle='#fff';x.fillStyle='#fff';
 function ring(rr,w){x.lineWidth=w;x.beginPath();x.arc(0,0,rr,0,7);x.stroke()}
 ring(120,5);ring(100,2);x.lineWidth=3;
 if(ty=='shockwave'){ring(70,4);x.lineWidth=3;for(i=0;i<14;i++){a=i*.45;x.beginPath();x.moveTo(Math.cos(a)*20,Math.sin(a)*20);for(k=1;k<6;k++)x.lineTo(Math.cos(a+(r()-.5)*.3)*(20+k*20),Math.sin(a+(r()-.5)*.3)*(20+k*20));x.stroke()}}
 else if(ty=='meteor'){for(i=0;i<9;i++){a=i/9*6.28;x.beginPath();x.moveTo(Math.cos(a)*30,Math.sin(a)*30);x.quadraticCurveTo(Math.cos(a+.8)*70,Math.sin(a+.8)*70,Math.cos(a+.3)*118,Math.sin(a+.3)*118);x.stroke()}x.globalAlpha=.5;x.beginPath();x.arc(0,0,40,0,7);x.fill()}
 else if(ty=='frost_storm'||ty=='ice_lance'){for(i=0;i<6;i++){x.save();x.rotate(i*Math.PI/3);x.beginPath();x.moveTo(0,0);x.lineTo(0,-115);x.moveTo(0,-50);x.lineTo(-22,-75);x.moveTo(0,-50);x.lineTo(22,-75);x.moveTo(0,-85);x.lineTo(-14,-102);x.moveTo(0,-85);x.lineTo(14,-102);x.stroke();x.restore()}}
 else if(ty=='root'){for(i=0;i<8;i++){a=i/8*6.28;x.beginPath();x.moveTo(0,0);x.bezierCurveTo(Math.cos(a+.6)*40,Math.sin(a+.6)*40,Math.cos(a-.5)*80,Math.sin(a-.5)*80,Math.cos(a)*115,Math.sin(a)*115);x.stroke();x.beginPath();x.arc(Math.cos(a+.1)*70,Math.sin(a+.1)*70,5,0,7);x.fill()}}
 else if(ty=='poison'){x.globalAlpha=.6;for(i=0;i<26;i++){a=r()*6.28;d=r()*95;x.beginPath();x.arc(Math.cos(a)*d,Math.sin(a)*d,4+r()*12,0,7);x.stroke()}}
 else if(ty=='shadow_wave'||ty=='void'){x.beginPath();for(i=0;i<200;i++){a=i*.14;x.lineTo(Math.cos(a)*i*.55,Math.sin(a)*i*.55)}x.stroke();for(i=0;i<12;i++){x.save();x.rotate(i/12*6.28);x.strokeRect(100,-5,12,10);x.restore()}}
 else if(ty=='lightning_storm'||ty=='storm'){for(i=0;i<8;i++){a=i/8*6.28;x.beginPath();x.moveTo(0,0);px=0;py=0;for(k=0;k<6;k++){px+=Math.cos(a)*19+(r()-.5)*18;py+=Math.sin(a)*19+(r()-.5)*18;x.lineTo(px,py)}x.stroke()}}
 else{for(i=0;i<12;i++){x.save();x.rotate(i/12*6.28);x.strokeRect(60,-6,40,12);x.restore()}ring(50,3)}
 DBA_VT[ty]=c;return c}

