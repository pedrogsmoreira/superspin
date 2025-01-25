/**
 * Initializes event handlers for pagination buttons.
 * When a button is clicked, it fetches the corresponding page of coach data.
 *
 * @param {HTMLElement} searchQuery - An input or select element containing the current search query.
 * @param {HTMLElement} sortOption - An input or select element containing the selected sort option.
 */

import { fetchCoaches } from "..";
import scrollToTopAnimation from "../../../animations/scrollToTopAnimation";

export function initPaginationHandlers(searchQuery, sortOption) {
    // Select all pagination buttons and attach click event listeners
    document
        .querySelectorAll("#coaches-pagination button")
        .forEach((button) => {
            button.addEventListener("click", (event) => {
                // If the clicked button is disabled, do nothing
                if (event.currentTarget.disabled) return;

                // Retrieve the URL stored in the button's data-href attribute
                const url = new URL(
                    event.currentTarget.getAttribute("data-href"),
                );

                // Extract the "page" query parameter from the URL, defaulting to page 1 if absent
                const page = parseInt(url.searchParams.get("page"), 10) || 1;

                // Fetch coach data for the specified page, using the search query and sort option
                fetchCoaches(page, searchQuery.value, sortOption.value);

                // Scroll to the top of the section
                scrollToTopAnimation();
            });
        });
}
