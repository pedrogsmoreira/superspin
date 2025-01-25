import { fetchCoachesData } from "../../api";
import { renderCoaches } from "./render/renderCoaches";
import { renderPagination } from "./render/renderPagination";
import { renderCoachesNotFound } from "./render/renderCoachesNotFound";
import coachItemsAnimation from "../../animations/coachItemsAnimation";

import { initPaginationHandlers } from "./handlers/initPaginationHandlers";
import { initSearchHandler } from "./handlers/initSearchHandler";
import { initSortHandlers } from "./handlers/initSortHandlers";
import { initClearSearchHandler } from "./handlers/initClearSearchHandler";

/**
 * Fetches and displays coaches based on the given parameters.
 * Handles rendering the coaches list, pagination, and fallback for no results.
 *
 * @param {number} page - The page number to fetch (default is 1).
 * @param {string} query - The search query string (default is an empty string).
 * @param {string} sort - The sort option selected (default is "default").
 */
export async function fetchCoaches(page = 1, query = "", sort = "default") {
    try {
        // Fetch data from the API based on the page, search query, and sort option
        const data = await fetchCoachesData(page, query, sort);

        // Render the pagination controls with the fetched data
        renderPagination(data);

        if (data.total > 0) {
            // Render the list of coaches if there are results
            renderCoaches(data.data);
            coachItemsAnimation("#coaches-grid"); // Add animations to the grid after rendering
        } else {
            // Render a "not found" message if there are no results
            renderCoachesNotFound();
        }
    } catch (error) {
        // Log the error and display an alert to the user in case of failure
        console.error("Error fetching coaches:", error);
        alert("Failed to load data. Please try again later.");
    }
}

/**
 * Initializes the coaches grid, including search, sort, and pagination handlers.
 * Fetches the initial data and sets up event listeners for user interactions.
 */
export function initCoachesGrid(breakpoint) {
    // Create objects to track the current search query and sort option
    const searchQuery = { value: "" }; // Holds the current search query value
    const sortOption = { value: "default" }; // Holds the current sort option value

    // Fetch the initial list of coaches
    fetchCoaches();

    // Initialize handlers for pagination, sorting, and search functionalities
    initPaginationHandlers(searchQuery, sortOption);
    initSortHandlers(searchQuery, sortOption);
    initSearchHandler(searchQuery, sortOption);

    // Initialize handlers to reset the search in the coachesNotFound element
    initClearSearchHandler(searchQuery, sortOption);
}
