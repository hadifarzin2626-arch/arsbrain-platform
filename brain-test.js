/* =========================================================
   ARS BRAIN — PREMIUM INTERACTION ENGINE
   brain-test.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
        ".ars-glass, " +
        ".pillar-card, " +
        ".architecture-card, " +
        ".family-card, " +
        ".feature-card, " +
        ".platform-card, " +
        ".haven-card, " +
        ".rose-card, " +
        ".zhr-card, " +
        ".os-card, " +
        ".future-card, " +
        ".roadmap-item, " +
        ".vision-card"
    );

    if (!reducedMotion && "IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("is-visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -60px 0px"
            }
        );

        revealElements.forEach((element) => {

            element.classList.add("reveal-element");

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.classList.add("is-visible");

        });

    }


    /* =====================================================
       CARD 3D TILT + GOLDEN LIGHT TRACKING
       ===================================================== */

    const cards = document.querySelectorAll(
        ".ars-glass, " +
        ".pillar-card, " +
        ".architecture-card, " +
        ".family-card, " +
        ".feature-card, " +
        ".platform-card, " +
        ".haven-card, " +
        ".rose-card, " +
        ".zhr-card, " +
        ".os-card, " +
        ".future-card, " +
        ".roadmap-item, " +
        ".vision-card"
    );

    const isTouchDevice =
        window.matchMedia("(hover: none)").matches ||
        window.matchMedia("(pointer: coarse)").matches;


    if (!reducedMotion && !isTouchDevice) {

        cards.forEach((card) => {

            card.addEventListener("mousemove", (event) => {

                const rect = card.getBoundingClientRect();

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


                card.style.setProperty(
                    "--mouse-x",
                    `${x}px`
                );

                card.style.setProperty(
                    "--mouse-y",
                    `${y}px`
                );


                card.style.transform =
                    `perspective(1000px)
                     translateY(-8px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateZ(10px)`;

            });


            card.addEventListener("mouseleave", () => {

                card.style.transform =
                    "";

            });

        });

    }


    /* =====================================================
       PREMIUM BUTTON MAGNETIC EFFECT
       ===================================================== */

    const buttons = document.querySelectorAll(
        ".btn-primary, " +
        ".btn-secondary, " +
        ".hero-buttons a"
    );


    if (!reducedMotion && !isTouchDevice) {

        buttons.forEach((button) => {

            button.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        button.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;

                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;


                    button.style.transform =
                        `translate(${x * 0.08}px,
                                   ${y * 0.08}px)`;

                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    button.style.transform = "";

                }
            );

        });

    }


    /* =====================================================
       SMOOTH ANCHOR NAVIGATION
       ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior:
                        reducedMotion
                            ? "auto"
                            : "smooth",
                    block: "start"
                });

            }
        );

    });


    /* =====================================================
       SCROLL PROGRESS
       ===================================================== */

    let ticking = false;


    function updateScrollProgress() {

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;


        const progress =
            documentHeight > 0
                ? scrollTop / documentHeight
                : 0;


        document.documentElement.style
            .setProperty(
                "--scroll-progress",
                progress.toFixed(4)
            );


        ticking = false;

    }


    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                window.requestAnimationFrame(
                    updateScrollProgress
                );

                ticking = true;

            }

        },
        {
            passive: true
        }
    );


    updateScrollProgress();


    /* =====================================================
       HERO PARALLAX
       ===================================================== */

    const hero =
        document.querySelector(
            ".arsbrain-hero"
        );

    const heroVisual =
        document.querySelector(
            ".arsbrain-hero .hero-visual"
        );


    if (
        hero &&
        heroVisual &&
        !reducedMotion &&
        !isTouchDevice
    ) {

        let heroFrame = null;


        hero.addEventListener(
            "mousemove",
            (event) => {

                if (heroFrame) {
                    cancelAnimationFrame(
                        heroFrame
                    );
                }


                heroFrame =
                    requestAnimationFrame(
                        () => {

                            const rect =
                                hero.getBoundingClientRect();


                            const x =
                                (event.clientX -
                                    rect.left) /
                                rect.width -
                                0.5;


                            const y =
                                (event.clientY -
                                    rect.top) /
                                rect.height -
                                0.5;


                            heroVisual.style.transform =
                                `translate3d(
                                    ${x * 14}px,
                                    ${y * 10}px,
                                    0
                                )`;

                        }
                    );

            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                heroVisual.style.transform =
                    "";

            }
        );

    }


    /* =====================================================
       ACTIVE SECTION DETECTION
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    if (
        sections.length &&
        navLinks.length &&
        "IntersectionObserver" in window
    ) {

        const sectionObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                const id =
                                    entry.target.id;


                                navLinks.forEach(
                                    (link) => {

                                        link.classList.toggle(
                                            "active",
                                            link.getAttribute(
                                                "href"
                                            ) ===
                                            `#${id}`
                                        );

                                    }
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.35
                }
            );


        sections.forEach(
            (section) => {

                sectionObserver.observe(
                    section
                );

            }
        );

    }

});
