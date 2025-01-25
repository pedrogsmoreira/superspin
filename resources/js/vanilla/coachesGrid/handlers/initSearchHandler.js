import { fetchCoaches } from "..";
import scrollToTopAnimation from "../../../animations/scrollToTopAnimation";

/**
 * Initializes a search handler for the search input field.
 * Automatically fetches and updates the coaches list when the user types in the search box,
 * using a debounce mechanism to improve performance.
 *
 * @param {Object} searchQuery - Object tracking the current search query value.
 * @param {Object} sortOption - Object tracking the current sorting option value.
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
        scrollToTopAnimation();
    });
}
