console.log("🔥🔥🔥 ARS BRAIN TEST JS LOADED 🔥🔥🔥");

alert("ARS BRAIN TEST JS IS WORKING");




   


/* =========================================================
   ARS BRAIN TEST — PREMIUM INTERACTION ENGINE
   Dedicated only to:
   <body class="brain-test-page">
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SAFETY CHECK
       Prevent script from affecting other ARS pages
       ===================================================== */

    const page = document.querySelector(".brain-test-page");

    if (!page) return;


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


    revealTargets.forEach((element, index) => {

        element.classList.add("reveal-element");

        element.style.setProperty(
            "--reveal-delay",
            `${Math.min(index * 45, 400)}ms`
        );

    });


    const revealObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12,
            rootMargin: "0px 0px -60px 0px"
        }

    );


    revealTargets.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       02 — GOLDEN MOUSE LIGHT
       ===================================================== */

    const glassCards = page.querySelectorAll(".ars-glass");


    glassCards.forEach(card => {

        card.addEventListener("pointermove", (event) => {

            const rect = card.getBoundingClientRect();

            const x =
                ((event.clientX - rect.left) / rect.width) * 100;

            const y =
                ((event.clientY - rect.top) / rect.height) * 100;


            card.style.setProperty(
                "--mouse-x",
                `${x}%`
            );

            card.style.setProperty(
                "--mouse-y",
                `${y}%`
            );

        });


        card.addEventListener("pointerleave", () => {

            card.style.setProperty(
                "--mouse-x",
                "50%"
            );

            card.style.setProperty(
                "--mouse-y",
                "50%"
            );

        });

    });


    /* =====================================================
       03 — PREMIUM 3D CARD TILT
       ===================================================== */

    const tiltCards = page.querySelectorAll(

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


    tiltCards.forEach(card => {


        card.addEventListener("pointermove", (event) => {


            if (window.innerWidth < 800) return;


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateY =
                ((x - centerX) / centerX) * 4;


            const rotateX =
                ((centerY - y) / centerY) * 4;


            card.style.transform =

                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;


        });


        card.addEventListener("pointerleave", () => {


            card.style.transform = "";


        });


    });


    /* =====================================================
       04 — SCROLL PROGRESS / GOLDEN TOP LIGHT
       ===================================================== */

    const updateScrollProgress = () => {


        const scrollTop =
            window.scrollY;


        const documentHeight =
            document.documentElement.scrollHeight
            - window.innerHeight;


        const progress =
            documentHeight > 0
                ? scrollTop / documentHeight
                : 0;


        page.style.setProperty(

            "--scroll-progress",

            progress

        );


    };


    window.addEventListener(

        "scroll",

        updateScrollProgress,

        { passive: true }

    );


    updateScrollProgress();


    /* =====================================================
       05 — HERO PARALLAX
       ===================================================== */

    const hero =
        page.querySelector(".arsbrain-hero");


    const heroBackground =
        page.querySelector(".arsbrain-background");


    const heroVisual =
        page.querySelector(".hero-visual");


    if (hero && (heroBackground || heroVisual)) {


        window.addEventListener(

            "scroll",

            () => {


                if (window.innerWidth < 800) return;


                const scroll =
                    window.scrollY;


                if (heroBackground) {

                    heroBackground.style.transform =

                        `translateY(${scroll * 0.12}px)`;

                }


                if (heroVisual) {

                    heroVisual.style.transform =

                        `translateY(${scroll * 0.04}px)`;

                }


            },

            { passive: true }

        );


    }


    /* =====================================================
       06 — CARD STAGGER
       ===================================================== */

    const grids = page.querySelectorAll(

        ".pillars-grid, " +
        ".family-grid, " +
        ".haven-grid, " +
        ".rose-capabilities, " +
        ".zhr-grid, " +
        ".os-grid, " +
        ".future-grid"

    );


    grids.forEach(grid => {


        const cards =
            grid.querySelectorAll(".ars-glass");


        cards.forEach((card, index) => {


            card.style.setProperty(

                "--card-index",

                index

            );


        });


    });


    /* =====================================================
       07 — GOLDEN CURSOR GLOW
       ===================================================== */

    let cursorX = 0;

    let cursorY = 0;


    page.addEventListener(

        "pointermove",

        (event) => {


            cursorX = event.clientX;

            cursorY = event.clientY;


            page.style.setProperty(

                "--cursor-x",

                `${cursorX}px`

            );


            page.style.setProperty(

                "--cursor-y",

                `${cursorY}px`

            );


        }

    );


    /* =====================================================
       08 — REDUCE MOTION ACCESSIBILITY
       ===================================================== */

    const prefersReducedMotion =

        window.matchMedia(

            "(prefers-reduced-motion: reduce)"

        );


    if (prefersReducedMotion.matches) {


        page.classList.add(

            "reduced-motion"

        );


    }


    /* =====================================================
       09 — INITIALIZE
       ===================================================== */

    page.classList.add(

        "brain-interactions-ready"

    );


    console.log(

        "ARS Brain Test — Premium Interaction Engine Active"

    );

});
