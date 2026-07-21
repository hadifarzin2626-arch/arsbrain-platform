/* =========================================================
   ARS BRAIN TEST
   PREMIUM INTERACTION ENGINE
   Dedicated only to:
   <body class="brain-test-page">
   ========================================================= */

console.log("🔥 ARS BRAIN TEST JS LOADED");


document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       SAFETY CHECK
       ===================================================== */

    const page = document.querySelector(".brain-test-page");

    if (!page) {

        console.log(
            "ARS Brain Test JS stopped: page not found."
        );

        return;

    }


    /* =====================================================
       01 — SCROLL REVEAL
       ===================================================== */

    const revealTargets = page.querySelectorAll(

        ".section-heading, " +

        ".ars-glass, " +

        ".pillar-card, " +

        ".feature-card, " +

        ".family-card, " +

        ".haven-card, " +

        ".rose-card, " +

        ".zhr-card, " +

        ".os-card, " +

        ".future-card, " +

        ".architecture-card, " +

        ".vision-card"

    );


    revealTargets.forEach((element) => {

        element.classList.add(
            "ars-reveal"
        );

    });


    /* =====================================================
       INTERSECTION OBSERVER
       ===================================================== */

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "ars-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {

            threshold: .12,

            rootMargin:
                "0px 0px -60px 0px"

        }

    );


    revealTargets.forEach((element) => {

        observer.observe(
            element
        );

    });


    /* =====================================================
       02 — PREMIUM CARD HOVER TILT
       ===================================================== */

    const cards = page.querySelectorAll(

        ".pillar-card, " +

        ".feature-card, " +

        ".family-card, " +

        ".haven-card, " +

        ".rose-card, " +

        ".zhr-card, " +

        ".os-card, " +

        ".future-card, " +

        ".architecture-card, " +

        ".vision-card"

    );


    cards.forEach((card) => {


        card.addEventListener(

            "mousemove",

            (event) => {


                if (
                    window.innerWidth < 900
                ) return;


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                    centerY) * -3;


                const rotateY =
                    ((x - centerX) /
                    centerX) * 3;


                card.style.transform =

                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;


            }

        );


        card.addEventListener(

            "mouseleave",

            () => {

                card.style.transform = "";

            }

        );


    });


    /* =====================================================
       03 — HERO IMAGE FLOAT
       ===================================================== */

    const heroImage =
        page.querySelector(
            ".hero-visual img"
        );


    if (heroImage) {


        let lastScroll = 0;


        window.addEventListener(

            "scroll",

            () => {


                if (
                    window.innerWidth < 700
                ) return;


                const currentScroll =
                    window.scrollY;


                const movement =
                    Math.min(
                        currentScroll * .04,
                        35
                    );


                heroImage.style.transform =

                    `translateY(${movement}px)`;


                lastScroll =
                    currentScroll;


            },

            {
                passive: true
            }

        );

    }


    /* =====================================================
       04 — GOLD LIGHT CURSOR
       ===================================================== */

    const glow =
        document.createElement(
            "div"
        );


    glow.className =
        "ars-cursor-glow";


    page.appendChild(
        glow
    );


    document.addEventListener(

        "mousemove",

        (event) => {


            if (
                window.innerWidth < 900
            ) return;


            glow.style.left =
                `${event.clientX}px`;


            glow.style.top =
                `${event.clientY}px`;


        }

    );


    /* =====================================================
       05 — ACTIVE CARD GLOW
       ===================================================== */

    cards.forEach((card) => {


        card.addEventListener(

            "mouseenter",

            () => {

                card.classList.add(
                    "ars-card-active"
                );

            }

        );


        card.addEventListener(

            "mouseleave",

            () => {

                card.classList.remove(
                    "ars-card-active"
                );

            }

        );


    });


    console.log(
        "✨ ARS Brain Premium Interaction Engine Active"
    );


});
