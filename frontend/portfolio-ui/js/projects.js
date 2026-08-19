/* =========================================
   Projects API
   Author : Pushpendra Singh Rathore
========================================= */

const projectsGrid = document.querySelector(".projects-grid");

async function loadProjects() {

    try {

        const response = await fetch(
            "http://localhost:8080/api/projects"
        );

        if (!response.ok) {
            throw new Error("Failed to load projects.");
        }

        const projects = await response.json();

        console.log("Projects received:", projects);


        /* ================= Portfolio Project ================= */

        const portfolioProject = projects.find(
            project => project.title === "Portfolio Website"
        );


        if (portfolioProject) {

            const portfolioCard =
                document.querySelector(
                    '.project-card[data-project="portfolio"]'
                );


            if (portfolioCard) {

                portfolioCard.querySelector("h3").textContent =
                    portfolioProject.title;

                portfolioCard.querySelector(
                    ".project-content p"
                ).textContent =
                    portfolioProject.description;


                const techContainer =
                    portfolioCard.querySelector(".project-tech");

                techContainer.innerHTML = "";


                portfolioProject.technologies
                    .split(",")
                    .forEach(function (technology) {

                        const span =
                            document.createElement("span");

                        span.textContent =
                            technology.trim();

                        techContainer.appendChild(span);

                    });

            }

        }


    } catch (error) {

        console.error("Projects API error:", error);

    }

}

loadProjects();