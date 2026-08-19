/* =========================================
   Main Portfolio JavaScript
   Author : Pushpendra Singh Rathore
========================================= */

// Common JavaScript functionality

/* =========================================
   Project Under Development Modal
========================================= */

const projectModal = document.getElementById("projectModal");

const projectModalClose =
    document.getElementById("projectModalClose");

const projectModalOk =
    document.getElementById("projectModalOk");

const projectModalOverlay =
    document.querySelector(".project-modal-overlay");

const developmentButtons =
    document.querySelectorAll(".project-under-development");


/* ================= Open Modal ================= */

developmentButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        projectModal.classList.add("active");

    });

});


/* ================= Close Modal ================= */

function closeProjectModal() {

    projectModal.classList.remove("active");

}


/* ================= Close Button ================= */

projectModalClose.addEventListener(
    "click",
    closeProjectModal
);


/* ================= Okay Button ================= */

projectModalOk.addEventListener(
    "click",
    closeProjectModal
);


/* ================= Overlay Click ================= */

projectModalOverlay.addEventListener(
    "click",
    closeProjectModal
);


/* ================= Escape Key ================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeProjectModal();

    }

});