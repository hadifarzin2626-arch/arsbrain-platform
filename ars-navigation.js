/* =====================================================
   ARS NAVIGATION V3
   PREMIUM ORB MOTION ENGINE
   PART 01/03
===================================================== */


/* =====================================================
   SAFE INITIALIZATION
===================================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


const navigation =
document.querySelector(".ars-navigation");


if(!navigation) return;



const nodes =
document.querySelectorAll(".ars-node");



const core =
document.querySelector(".ars-core");





/* =====================================================
   ENTRANCE ACTIVATION
===================================================== */


setTimeout(()=>{


navigation.classList.add(
"loaded"
);


},100);





/* =====================================================
   NODE ACTIVE SYSTEM
===================================================== */


nodes.forEach(node=>{


node.addEventListener(
"mouseenter",
()=>{


nodes.forEach(item=>{

item.classList.remove(
"active"
);

});


node.classList.add(
"active"
);



});




node.addEventListener(
"mouseleave",
()=>{


node.classList.remove(
"active"
);



});



});






/* =====================================================
   CLICK FEEDBACK
===================================================== */


nodes.forEach(node=>{


node.addEventListener(
"click",
()=>{


node.classList.add(
"clicked"
);



setTimeout(()=>{


node.classList.remove(
"clicked"
);



},400);



});


});





/* =====================================================
   CORE INTERACTION
===================================================== */


if(core){


core.addEventListener(
"mouseenter",
()=>{


core.classList.add(
"core-active"
);



});



core.addEventListener(
"mouseleave",
()=>{


core.classList.remove(
"core-active"
);



});



}






});

/* =====================================================
   ARS NAVIGATION V3
   MOUSE PARALLAX ENGINE
   PART 02/03
===================================================== */



document.addEventListener(
"DOMContentLoaded",
()=>{


const navigation =
document.querySelector(".ars-navigation");


const nodes =
document.querySelectorAll(".ars-node");



if(!navigation) return;




/* =====================================================
   MOUSE DEPTH MOVEMENT
===================================================== */


let mouseX = 0;

let mouseY = 0;


let currentX = 0;

let currentY = 0;



window.addEventListener(
"mousemove",
(e)=>{


const rect =
navigation.getBoundingClientRect();



mouseX =
(e.clientX - rect.left)
/
rect.width
-
0.5;



mouseY =
(e.clientY - rect.top)
/
rect.height
-
0.5;



});






function animateDepth(){


currentX +=
(mouseX - currentX) * 0.08;



currentY +=
(mouseY - currentY) * 0.08;




nodes.forEach(
(node,index)=>{


const depth =
(index+1)*3;



node.style.transform =

`
translate3d(
${currentX * depth}px,
${currentY * depth}px,
0
)

`;



});




navigation.style.transform =

`
rotateY(
${currentX * 8}deg
)

rotateX(
${currentY * -8}deg
)

`;





requestAnimationFrame(
animateDepth
);



}



animateDepth();







/* =====================================================
   RANDOM MICRO MOTION
===================================================== */


nodes.forEach(
(node,index)=>{


let angle =
Math.random()*360;


let distance =
8 + Math.random()*15;




setInterval(()=>{


angle +=
0.3 + index*.05;



const x =
Math.cos(angle)
*
distance;



const y =
Math.sin(angle)
*
distance;




node.style.marginLeft =
x+"px";



node.style.marginTop =
y+"px";




},60);



});






});


/* =====================================================
   ARS NAVIGATION V3
   FINAL MOTION & EFFECT ENGINE
   PART 03/03
===================================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


const nodes =
document.querySelectorAll(".ars-node");


const planets =
document.querySelectorAll(
".planet, .planet-core"
);




/* =====================================================
   ROTATION CONTROL
===================================================== */


planets.forEach(
(planet,index)=>{


let rotation = 0;


setInterval(()=>{


rotation +=
0.15 + (index * 0.03);



planet.style.transform =

`
rotate(
${rotation}deg
)
`;



},30);



});







/* =====================================================
   GLOW REACTION ENGINE
===================================================== */


nodes.forEach(
node=>{


node.addEventListener(
"mouseenter",
()=>{


const planet =
node.querySelector(".planet");


if(planet){


planet.style.filter =

`
brightness(1.35)
drop-shadow(
0 0 35px
rgba(255,210,120,.8)
)

`;



}



});





node.addEventListener(
"mouseleave",
()=>{


const planet =
node.querySelector(".planet");


if(planet){


planet.style.filter =
"";


}



});



});







/* =====================================================
   CLICK PULSE
===================================================== */


nodes.forEach(
node=>{


node.addEventListener(
"click",
function(){


this.classList.add(
"pulse"
);



setTimeout(()=>{


this.classList.remove(
"pulse"
);



},500);



});



});







/* =====================================================
   CORE BREATH CONTROL
===================================================== */


const core =
document.querySelector(".ars-core");



if(core){


let scale = 1;


let direction = 1;



setInterval(()=>{


scale +=
0.002 * direction;



if(scale>1.03){

direction=-1;

}



if(scale<1){

direction=1;

}




core.style.scale =
scale;



},40);



}







/* =====================================================
   CLEAN RESIZE HANDLER
===================================================== */


window.addEventListener(
"resize",
()=>{


document.body.style
.setProperty(
"--ars-width",
window.innerWidth+"px"
);



});





});

/* =====================================================
   ARS NAVIGATION V3
   FINAL MOTION & EFFECT ENGINE
   PART 03/03
===================================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


const nodes =
document.querySelectorAll(".ars-node");


const planets =
document.querySelectorAll(
".planet, .planet-core"
);




/* =====================================================
   ROTATION CONTROL
===================================================== */


planets.forEach(
(planet,index)=>{


let rotation = 0;


setInterval(()=>{


rotation +=
0.15 + (index * 0.03);



planet.style.transform =

`
rotate(
${rotation}deg
)
`;



},30);



});







/* =====================================================
   GLOW REACTION ENGINE
===================================================== */


nodes.forEach(
node=>{


node.addEventListener(
"mouseenter",
()=>{


const planet =
node.querySelector(".planet");


if(planet){


planet.style.filter =

`
brightness(1.35)
drop-shadow(
0 0 35px
rgba(255,210,120,.8)
)

`;



}



});





node.addEventListener(
"mouseleave",
()=>{


const planet =
node.querySelector(".planet");


if(planet){


planet.style.filter =
"";


}



});



});







/* =====================================================
   CLICK PULSE
===================================================== */


nodes.forEach(
node=>{


node.addEventListener(
"click",
function(){


this.classList.add(
"pulse"
);



setTimeout(()=>{


this.classList.remove(
"pulse"
);



},500);



});



});







/* =====================================================
   CORE BREATH CONTROL
===================================================== */


const core =
document.querySelector(".ars-core");



if(core){


let scale = 1;


let direction = 1;



setInterval(()=>{


scale +=
0.002 * direction;



if(scale>1.03){

direction=-1;

}



if(scale<1){

direction=1;

}




core.style.scale =
scale;



},40);



}







/* =====================================================
   CLEAN RESIZE HANDLER
===================================================== */


window.addEventListener(
"resize",
()=>{


document.body.style
.setProperty(
"--ars-width",
window.innerWidth+"px"
);



});





});
