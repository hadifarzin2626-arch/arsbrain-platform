
// =====================================================
// ARS HERITAGE GROUP - SCRIPT V2
// BASIC INTERACTIONS
// =====================================================



// =========================
// HEADER SCROLL EFFECT
// =========================


const header = document.querySelector(".main-header");


window.addEventListener("scroll", function(){


    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }


});






// =========================
// SCROLL REVEAL
// =========================


const sections = document.querySelectorAll("section");



const observer = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }


    });


},

{

    threshold:0.15

}

);




sections.forEach(section=>{

    observer.observe(section);

});


// =========================
// SMOOTH NAVIGATION
// =========================


const navLinks = document.querySelectorAll(
    ".main-header nav a"
);



navLinks.forEach(link => {


    link.addEventListener(
        "click",
        function(e){


            const target =
            document.querySelector(
                this.getAttribute("href")
            );


            if(target){

                e.preventDefault();


                target.scrollIntoView({

                    behavior:"smooth"

                });

            }


        }
    );


});







// =========================
// SAFE INITIALIZATION
// =========================


document.addEventListener(
"DOMContentLoaded",
()=>{


    console.log(
        "ARS Heritage Group V2 Loaded Successfully"
    );


});
/* ===================================================== */
/* ARS SCROLL ACTIVATION ENGINE */
/* ===================================================== */


let scrollTimer;


window.addEventListener("scroll", () => {


    document.body.classList.add("scrolling");


    clearTimeout(scrollTimer);


    scrollTimer = setTimeout(() => {

        document.body.classList.remove("scrolling");

    }, 700);


});





/*
/* ===================================================== */
/* ARS ECOSYSTEM ACTIVE OBSERVER */
/* ===================================================== */

const arsCards = document.querySelectorAll(
    ".ecosystem-card"
);


const arsObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("ars-active");

        }else{

            entry.target.classList.remove("ars-active");

        }

    });

},

{
    threshold:.45
}

);


arsCards.forEach(card=>{

    arsObserver.observe(card);

});





/* ===================================================== */
/* ARS CORE SUN CLICK INTERACTION */
/* ===================================================== */


document.addEventListener("DOMContentLoaded",()=>{


    const arsCore = document.querySelector(".ars-v3-sun");


    if(arsCore){


        arsCore.addEventListener("click",()=>{


            arsCore.classList.toggle("core-click");


        });


    }


});
    /* ========================================= */
/* ARS CORE - STEP 1 */
/* ========================================= */

const arsCore=document.querySelector(".ars-v3-sun");

if(arsCore){

    arsCore.addEventListener("click",function(){

        arsCore.classList.add("core-click");

        setTimeout(function(){

         window.location.href="#about";
        },280);

    });

}
    // ARS SUN CLICK TEST

const arsSun = document.querySelector(".ars-v3-sun");

if(arsSun){

    arsSun.onclick = function(){

        window.location.href = "ars-brain.html";

    };

}

);



arsCards.forEach(card=>{

arsObserver.observe(card);

});
document.addEventListener("DOMContentLoaded", function(){

    const sun = document.querySelector(".ars-v3-sun");

    console.log("SUN TEST:", sun);

    if(sun){

        sun.style.cursor = "pointer";

        sun.addEventListener("click", function(){

            alert("ARS SUN CLICKED");

        });

    }

});
