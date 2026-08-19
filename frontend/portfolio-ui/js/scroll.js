/* =========================================
   Scroll Navigation
   Author : Pushpendra Singh Rathore
========================================= */

const scrollButton = document.getElementById("scrollButton");

const scrollIcon = scrollButton.querySelector("i");


/* ================= Scroll Button ================= */

scrollButton.addEventListener("click", function () {

    const atBottom =
        window.innerHeight + window.scrollY
        >= document.documentElement.scrollHeight - 100;


    if (atBottom) {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });

    }

});


/* ================= Change Arrow ================= */

window.addEventListener("scroll", function () {

    const atBottom =
        window.innerHeight + window.scrollY
        >= document.documentElement.scrollHeight - 100;


    if (atBottom) {

        scrollIcon.classList.remove("fa-arrow-down");

        scrollIcon.classList.add("fa-arrow-up");

        scrollButton.setAttribute(
            "aria-label",
            "Back to Top"
        );

    } else {

        scrollIcon.classList.remove("fa-arrow-up");

        scrollIcon.classList.add("fa-arrow-down");

        scrollButton.setAttribute(
            "aria-label",
            "Go to Bottom"
        );

    }

});