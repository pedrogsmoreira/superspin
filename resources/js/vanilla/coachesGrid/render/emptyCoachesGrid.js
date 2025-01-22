/**
 * Clears the coaches grid, removing all children except the "#coaches-not-found" element.
 * Ensures the "#coaches-not-found" element is hidden.
 */
export function emptyCoachesGrid() {
    // Get the coaches grid element
    const grid = document.getElementById("coaches-grid");

    // Get the "coaches-not-found" element
    const notFound = document.getElementById("coaches-not-found");

    // Ensure the "coaches-not-found" element is hidden
    notFound.classList.replace("flex", "hidden");

    // Remove all children of the grid except the "coaches-not-found" element
    Array.from(grid.children).forEach((child) => {
        if (child !== notFound) {
            grid.removeChild(child);
        }
    });
}
