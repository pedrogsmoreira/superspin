import { emptyCoachesGrid } from "./emptyCoachesGrid";

/**
 * Renders the "coaches not found" message by clearing the coaches grid
 * and displaying the "#coaches-not-found" element.
 */

export function renderCoachesNotFound() {
    // Clear all items from the coaches grid
    emptyCoachesGrid();

    // Get the "coaches-not-found" element
    const notFound = document.getElementById("coaches-not-found");

    // Display the "coaches-not-found" element by replacing the "hidden" class with "flex"
    notFound.classList.replace("hidden", "flex");
}
