/**
 * Updates the pagination controls based on the data provided.
 *
 * @param {Object} data - The pagination data.
 * @param {number} data.current_page - The current page number.
 * @param {string} data.first_page_url - The URL for the first page.
 * @param {string} data.prev_page_url - The URL for the previous page.
 * @param {string} data.next_page_url - The URL for the next page.
 * @param {string} data.last_page_url - The URL for the last page.
 * @param {number} data.last_page - The total number of pages.
 * @param {number} data.total - The total number of items.
 */
export function renderPagination(data) {
    // Get the pagination element
    const pagination = document.getElementById("coaches-pagination");

    // Destructure the data object
    const {
        current_page,
        first_page_url,
        prev_page_url,
        next_page_url,
        last_page_url,
        last_page,
        total,
    } = data;

    // Show and enable pagination controls if there are items
    if (total > 0) {
        // Replace "hidden" class with "flex" to make the pagination visible
        pagination.classList.replace("hidden", "flex");

        // Enable all buttons in the pagination control
        pagination
            .querySelectorAll("button")
            .forEach((button) => (button.disabled = false));

        // Update the current page and total page text
        pagination.querySelector(".page-current").textContent = current_page;
        pagination.querySelector(".page-total").textContent = last_page;

        // Determine if navigation to first/previous or next/last should be disabled
        const disablePrevFirst = current_page === 1;
        const disableNextLast = current_page === last_page;

        // Disable or enable navigation buttons based on the current page
        pagination.querySelector(".first").disabled = disablePrevFirst;
        pagination.querySelector(".prev").disabled = disablePrevFirst;
        pagination.querySelector(".next").disabled = disableNextLast;
        pagination.querySelector(".last").disabled = disableNextLast;

        // Update data-href attributes for navigation buttons if enabled
        if (!disablePrevFirst) {
            pagination
                .querySelector(".first")
                .setAttribute("data-href", first_page_url);
            pagination
                .querySelector(".prev")
                .setAttribute("data-href", prev_page_url);
        }
        if (!disableNextLast) {
            pagination
                .querySelector(".next")
                .setAttribute("data-href", next_page_url);
            pagination
                .querySelector(".last")
                .setAttribute("data-href", last_page_url);
        }
    } else {
        // Hide the pagination control if there are no items
        pagination.classList.replace("flex", "hidden");
    }
}
