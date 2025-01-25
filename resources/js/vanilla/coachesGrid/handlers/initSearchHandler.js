import { fetchCoaches } from "..";
import scrollToElementAnimation from "../../../animations/scrollToElementAnimation";

/**
 * Initializes a search handler for the search input field.
 * Automatically fetches and updates the coaches list when the user types in the search box,
 * using a debounce mechanism to improve performance.
 *
 * @param {HTMLElement} searchQuery - An object representing the current search query (e.g., an input or state object).
 * @param {HTMLElement} sortOption - An object representing the current sorting option (e.g., a select element).
 */
export function initSearchHandler(searchQuery, sortOption) {
    // Get the search input field element
    const searchInput = document.getElementById("coaches-search");

    let debounceTimer; // Timer to handle debouncing

    // Add an input event listener to the search input
    searchInput.addEventListener("input", (e) => {
        // Clear the previous debounce timer
        clearTimeout(debounceTimer);

        // Set a new debounce timer to delay the search action
        debounceTimer = setTimeout(() => {
            // Update the search query value with the current input
            searchQuery.value = e.target.value;

            // Fetch the first page of coach data with the updated search query and sorting option
            fetchCoaches(1, searchQuery.value, sortOption.value);
        }, 300); // Delay the search action by 300 milliseconds

        // Scroll to the top of the section after the input event
        scrollToElementAnimation("#coaches-grid");
    });
}
