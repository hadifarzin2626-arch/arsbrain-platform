
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
