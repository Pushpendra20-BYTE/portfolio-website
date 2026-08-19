/* =========================================
   Theme Management
   Author : Pushpendra Singh Rathore
========================================= */

const themeToggle = document.getElementById("themeToggle");

const themeIcon = themeToggle.querySelector("i");


/* ================= Load Saved Theme ================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    themeIcon.classList.remove("fa-sun");

    themeIcon.classList.add("fa-moon");

}


/* ================= Theme Toggle ================= */

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");


    if (document.body.classList.contains("light-theme")) {

        localStorage.setItem("theme", "light");

        themeIcon.classList.remove("fa-sun");

        themeIcon.classList.add("fa-moon");

    } else {

        localStorage.setItem("theme", "dark");

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

    }

});