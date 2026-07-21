/* =========================================================
   ARS BRAIN — PREMIUM MOTION ENGINE
   TEST VERSION
   BLACK / GOLD / NAVY GLASS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       01 — PAGE SAFETY
       ===================================================== */

    const page =
        document.querySelector(".brain-test-page");

    if (!page) return;


    /* =====================================================
       02 — CARD SELECTOR
       ===================================================== */

    const cards =
        page.querySelectorAll(
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


    if (!cards.length) return;


    /* =====================================================
       03 — SCROLL REVEAL
       ===================================================== */

    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ){

                        entry.target.classList.add(
                            "ars-card-visible"
                        );

                    }

                });

            },

            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -60px 0px"
            }

        );


    cards.forEach(card => {

        card.classList.add(
            "ars-card-reveal"
        );

        revealObserver.observe(card);

    });


    /* =====================================================
       04 — GOLDEN LIGHT ELEMENT
       ===================================================== */

    cards.forEach(card => {

        const light =
            document.createElement("span");

        light.className =
            "ars-golden-light";

        card.appendChild(light);

    });


    /* =====================================================
       05 — MOUSE 3D TILT
       ===================================================== */

    const canTilt =
        window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;


    if (canTilt) {

        cards.forEach(card => {

            card.addEventListener(
                "pointermove",
                event => {

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


                    const rotateY =
                        ((x - centerX) /
                        centerX) * 5;


                    const rotateX =
                        ((centerY - y) /
                        centerY) * 5;


                    card.style.setProperty(
                        "--ars-rotate-x",
                        `${rotateX}deg`
                    );


                    card.style.setProperty(
                        "--ars-rotate-y",
                        `${rotateY}deg`
                    );


                    card.style.setProperty(
                        "--ars-mouse-x",
                        `${x}px`
                    );


                    card.style.setProperty(
                        "--ars-mouse-y",
                        `${y}px`
                    );


                    card.classList.add(
                        "ars-card-tilt"
                    );

                }
            );


            card.addEventListener(
                "pointerleave",
                () => {

                    card.style.setProperty(
                        "--ars-rotate-x",
                        "0deg"
                    );


                    card.style.setProperty(
                        "--ars-rotate-y",
                        "0deg"
                    );


                    card.classList.remove(
                        "ars-card-tilt"
                    );

                }
            );

        });

    }


    /* =====================================================
       06 — SCROLL DEPTH ENGINE
       ===================================================== */

    let scrollTicking =
        false;


    function updateScrollDepth(){

        const viewportCenter =
            window.innerHeight / 2;


        cards.forEach(card => {

            const rect =
                card.getBoundingClientRect();


            const cardCenter =
                rect.top +
                rect.height / 2;


            const distance =
                cardCenter -
                viewportCenter;


            const normalized =
                Math.max(
                    -1,
                    Math.min(
                        1,
                        distance /
                        window.innerHeight
                    )
                );


            const depth =
                (1 -
                Math.abs(normalized))
                * 12;


            card.style.setProperty(
                "--ars-scroll-depth",
                `${depth}px`
            );


            card.style.setProperty(
                "--ars-scroll-light",
                `${Math.abs(normalized)}`
            );

        });


        scrollTicking =
            false;

    }


    window.addEventListener(
        "scroll",
        () => {

            if (!scrollTicking) {

                window.requestAnimationFrame(
                    updateScrollDepth
                );

                scrollTicking =
                    true;

            }

        },
        {
            passive: true
        }
    );


    updateScrollDepth();


    /* =====================================================
       07 — GOLDEN SCROLL LIGHT
       ===================================================== */

    let goldenTicking =
        false;


    function updateGoldenScroll(){

        const viewportHeight =
            window.innerHeight;


        cards.forEach(card => {

            const rect =
                card.getBoundingClientRect();


            const progress =
                (
                    viewportHeight -
                    rect.top
                ) /
                (
                    viewportHeight +
                    rect.height
                );


            const clamped =
                Math.max(
                    0,
                    Math.min(
                        1,
                        progress
                    )
                );


            const goldPosition =
                clamped *
                140 -
                20;


            card.style.setProperty(
                "--ars-gold-position",
                `${goldPosition}%`
            );

        });


        goldenTicking =
            false;

    }


    window.addEventListener(
        "scroll",
        () => {

            if (!goldenTicking) {

                window.requestAnimationFrame(
                    updateGoldenScroll
                );

                goldenTicking =
                    true;

            }

        },
        {
            passive: true
        }
    );


    updateGoldenScroll();


    /* =====================================================
       08 — STAGGERED CARD ANIMATION
       ===================================================== */

    cards.forEach(
        (card, index) => {

            card.style.setProperty(
                "--ars-card-delay",
                `${(index % 6) * 70}ms`
            );

        }
    );


    /* =====================================================
       09 — PAGE READY
       ===================================================== */

    page.classList.add(
        "ars-brain-motion-ready"
    );


});
