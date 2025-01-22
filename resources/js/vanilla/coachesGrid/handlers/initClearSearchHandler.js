import { scrollToTop } from "../render/scrollToTop";
import { fetchCoaches } from "..";
/**
 * Initializes the "Clear Search" button handler.
 * Resets the search query and input field, fetches the initial coaches data,
 * and scrolls to the top of the section when the button is clicked.
 *
 * @param {Object} searchQuery - Object tracking the current search query value.
 * @param {Object} sortOption - Object tracking the current sorting option value.
 */
export function initClearSearchHandler(searchQuery, sortOption) {
    const clearSearchButton = document.querySelector(
        "#coaches-not-found button",
    );

    clearSearchButton.addEventListener("click", () => {
        // Reset the search query
        searchQuery.value = "";

        // Clear the search input field
        const searchInput = document.getElementById("coaches-search");
        searchInput.value = "";

        // Fetch the initial coaches data (page 1, no query, current sort option)
        fetchCoaches(1, searchQuery.value, sortOption.value);

        // Scroll to the top of the coaches section
        scrollToTop();
    });
}
