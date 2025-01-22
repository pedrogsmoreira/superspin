import { fetchCoaches } from "..";
import { toggleSort } from "../render/toggleSortSelect";

/**
 * Initializes sort handlers for sorting coach data.
 * Manages the sort dropdown, updates the selected sort option, and fetches the relevant data.
 *
 * @param {HTMLElement} searchQuery - An object representing the current search query (e.g., an input or state object).
 * @param {HTMLElement} sortOption - An object representing the current sorting option (e.g., a select element).
 */
export function initSortHandlers(searchQuery, sortOption) {
    let sortOpen = false; // Tracks whether the sort dropdown is open

    // Handle the click event on the sort button to toggle the dropdown
    document
        .getElementById("coaches-sort-button")
        .addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent the event from bubbling up to the document
            toggleSort(sortOpen); // Toggle the visibility of the sort dropdown
            sortOpen = !sortOpen; // Update the state of the dropdown
        });

    // Add click event listeners to each sort option button
    document
        .querySelectorAll("#coaches-sort-options button")
        .forEach((button) => {
            button.addEventListener("click", (event) => {
                // Update the sort option value with the selected option
                sortOption.value =
                    event.currentTarget.getAttribute("data-value");

                // Fetch the first page of coach data using the new sort option and current search query
                fetchCoaches(1, searchQuery.value, sortOption.value);

                // Update the sort button text with the selected option's label
                document.querySelector(
                    "#coaches-sort-button span",
                ).textContent = event.currentTarget.textContent;

                // Scroll to the top of the section after selecting a new sort option
                scrollToTop();
            });
        });

    // Handle clicks outside the sort dropdown to close it
    document.addEventListener("click", (event) => {
        if (
            sortOpen && // If the sort dropdown is open
            !document
                .getElementById("coaches-sort-button") // Check if the click was outside the sort button
                .contains(event.target)
        ) {
            sortOpen = false; // Update the dropdown state
            toggleSort(true); // Close the sort dropdown
        }
    });
}
