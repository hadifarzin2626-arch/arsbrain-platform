/* =========================================================
   ARS BRAIN TEST — JS INTERACTION LAYER
   Works with brain-test.js
   ========================================================= */


/* =========================================================
   01 — SCROLL REVEAL
   ========================================================= */

.brain-test-page .reveal-element{

    opacity:0;

    transform:
        translateY(45px)
        scale(.985);

    transition:
        opacity .8s ease,
        transform .8s cubic-bezier(.2,.8,.2,1);

    transition-delay:
        var(--reveal-delay,0ms);

}


.brain-test-page
.reveal-element.is-visible{

    opacity:1;

    transform:
        translateY(0)
        scale(1);

}


/* =========================================================
   02 — GOLDEN MOUSE LIGHT
   ========================================================= */

.brain-test-page
.ars-glass::after{

    content:"";

    position:absolute;

    width:280px;

    height:280px;

    left:
        var(--mouse-x,50%);

    top:
        var(--mouse-y,50%);

    transform:
        translate(-50%,-50%);

    border-radius:50%;

    background:
        radial-gradient(
            circle,
            rgba(231,201,130,.20) 0%,
            rgba(201,164,92,.10) 25%,
            transparent 70%
        );

    opacity:0;

    pointer-events:none;

    transition:
        opacity .35s ease;

    z-index:0;

}


.brain-test-page
.ars-glass:hover::after{

    opacity:1;

}


/* Keep card content above the light */

.brain-test-page
.ars-glass > *{

    position:relative;

    z-index:1;

}


/* =========================================================
   03 — PREMIUM CARD TRANSITION
   ========================================================= */

.brain-test-page
.pillar-card,
.brain-test-page
.feature-card,
.brain-test-page
.family-card,
.brain-test-page
.haven-card,
.brain-test-page
.rose-card,
.brain-test-page
.zhr-card,
.brain-test-page
.os-card,
.brain-test-page
.future-card,
.brain-test-page
.architecture-card,
.brain-test-page
.vision-card{

    transform-style:
        preserve-3d;

    will-change:
        transform;

    transition:

        transform .18s ease-out,

        border-color .35s ease,

        box-shadow .35s ease;

}


/* =========================================================
   04 — GOLDEN CARD HOVER
   ========================================================= */

.brain-test-page
.pillar-card:hover,
.brain-test-page
.feature-card:hover,
.brain-test-page
.family-card:hover,
.brain-test-page
.haven-card:hover,
.brain-test-page
.rose-card:hover,
.brain-test-page
.zhr-card:hover,
.brain-test-page
.os-card:hover,
.brain-test-page
.future-card:hover,
.brain-test-page
.architecture-card:hover,
.brain-test-page
.vision-card:hover{

    border-color:
        rgba(231,201,130,.72);

    box-shadow:

        0 30px 80px
        rgba(0,0,0,.60),

        0 0 35px
        rgba(201,164,92,.16),

        inset 0 1px 0
        rgba(255,255,255,.10);

}


/* =========================================================
   05 — CARD STAGGER
   ========================================================= */

.brain-test-page
.pillar-card,
.brain-test-page
.feature-card,
.brain-test-page
.family-card,
.brain-test-page
.haven-card,
.brain-test-page
.rose-card,
.brain-test-page
.zhr-card,
.brain-test-page
.os-card,
.brain-test-page
.future-card{

    transition-delay:
        calc(var(--card-index,0) * 45ms);

}


/* =========================================================
   06 — HERO PARALLAX
   ========================================================= */

.brain-test-page
.arsbrain-background{

    will-change:
        transform;

}


.brain-test-page
.hero-visual{

    will-change:
        transform;

}


/* =========================================================
   07 — GOLDEN SCROLL PROGRESS
   ========================================================= */

.brain-test-page::before{

    content:"";

    position:fixed;

    top:0;

    left:0;

    width:100%;

    height:2px;

    z-index:99999;

    pointer-events:none;

    background:

        linear-gradient(

            90deg,

            transparent 0%,

            var(--brain-gold-light) 45%,

            #ffffff 50%,

            var(--brain-gold-light) 55%,

            transparent 100%

        );

    box-shadow:

        0 0 8px
        rgba(231,201,130,.8),

        0 0 22px
        rgba(201,164,92,.45);

    transform:

        scaleX(
            var(--scroll-progress,0)
        );

    transform-origin:
        left center;

}


/* =========================================================
   08 — INTERACTION READY
   ========================================================= */

.brain-test-page
.brain-interactions-ready
.ars-glass{

    cursor:
        default;

}


/* =========================================================
   09 — REDUCED MOTION
   ========================================================= */

.brain-test-page
.reduced-motion
.reveal-element{

    opacity:1;

    transform:none;

    transition:none;

}


@media
(prefers-reduced-motion:reduce){

    .brain-test-page
    *,
    .brain-test-page
    *::before,
    .brain-test-page
    *::after{

        animation-duration:
            .01ms !important;

        animation-iteration-count:
            1 !important;

        transition-duration:
            .01ms !important;

        scroll-behavior:
            auto !important;

    }

}


/* =========================================================
   10 — MOBILE SAFETY
   ========================================================= */

@media(max-width:800px){

    .brain-test-page
    .ars-glass:hover{

        transform:
            translateY(-4px);

    }


    .brain-test-page
    .ars-glass::after{

        display:none;

    }

    }
