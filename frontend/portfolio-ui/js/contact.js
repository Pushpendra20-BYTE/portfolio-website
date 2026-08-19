/* =========================================
   Contact Form
   Author : Pushpendra Singh Rathore
========================================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();


    /* ================= Validation ================= */

    if (name === "") {

        alert("Please enter your name.");

        return;

    }


    if (email === "") {

        alert("Please enter your email.");

        return;

    }


    if (subject === "") {

        alert("Please enter a subject.");

        return;

    }


    if (message === "") {

        alert("Please enter your message.");

        return;

    }


    /* ================= Send Data to Backend ================= */

    try {

        const response = await fetch(
            "http://localhost:8080/api/contact",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                })
            }
        );


        /* ================= Backend Response ================= */

        if (response.ok) {

            alert("Thank you! Your message has been sent successfully.");

            contactForm.reset();

        } else {

            alert("Something went wrong. Please try again.");

        }


    } catch (error) {

        console.error("Contact form error:", error);

        alert(
            "Unable to connect to the server. Please try again later."
        );

    }

});