document.addEventListener("DOMContentLoaded", function () {

    console.log("🔥 ARS BRAIN TEST JS ACTIVE");

    const page = document.body;

    const items = page.querySelectorAll(
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
        ".vision-card, " +
        ".section-heading"
    );

    items.forEach(function (item) {

        item.classList.add("ars-reveal");

    });

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

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
            threshold: 0.12
        }
    );

    items.forEach(function (item) {

        observer.observe(item);

    });

});
