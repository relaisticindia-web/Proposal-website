function createRose(){

const rose=document.createElement("div");

rose.className="rose";

const flowers=["🌹","🌸","🌺","💖"];

rose.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

rose.style.left=Math.random()*100+"vw";

rose.style.animationDuration=(4+Math.random()*6)+"s";

rose.style.fontSize=(25+Math.random()*35)+"px";

document.body.appendChild(rose);

setTimeout(()=>{
rose.remove();
},10000);

}

setInterval(createRose,250);
