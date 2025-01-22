import { emptyCoachesGrid } from "./emptyCoachesGrid";

/**
 * Renders a list of coaches into the coaches grid by cloning and populating a template for each coach.
 *
 * @param {Array} coaches - An array of coach objects to be rendered.
 * Each coach object should have the following properties:
 *   - hourly_rate: The hourly rate of the coach.
 *   - name: The name of the coach.
 *   - city: The city where the coach is based.
 *   - country: The country where the coach is based.
 *   - years_of_experience: The coach's years of experience.
 *   - date_joined: The date the coach joined the platform.
 */

export function renderCoaches(coaches) {
    // Clear the existing grid contents
    emptyCoachesGrid();

    // Get the coaches grid element
    const grid = document.getElementById("coaches-grid");

    // Get the template for a coach card
    const template = document.getElementById("coach-template");

    // Iterate over each coach in the provided list
    coaches.forEach((coach) => {
        // Clone the template to create a new card
        const card = template.cloneNode(true);

        // Populate the card with coach details
        card.querySelector("span").textContent = `$${coach.hourly_rate}/H`; // Hourly rate
        card.querySelector("h3").textContent = coach.name; // Coach's name
        card.querySelectorAll("p")[0].textContent =
            `Based in ${coach.city}, ${coach.country}`; // Location
        card.querySelectorAll("p")[1].textContent =
            `${coach.years_of_experience} years of experience`; // Years of experience
        card.querySelectorAll("p")[2].textContent =
            `SuperSpin coach since ${coach.date_joined}`; // Joining date

        // Make the card visible by replacing "hidden" with "flex"
        card.classList.replace("hidden", "flex");

        // Remove the ID attribute to avoid duplicate IDs in the DOM
        card.removeAttribute("id");

        // Append the populated card to the grid
        grid.appendChild(card);
    });
}
