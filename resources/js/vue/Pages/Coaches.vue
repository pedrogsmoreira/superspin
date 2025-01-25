<template>
    <Header />
    <section class="container mx-auto flex flex-col flex-wrap xl:flex-row">
        <CoachNav
            :search-query="searchQuery"
            :clearEvent="clearSearchInput"
            @search="handleSearch"
            @sort="handleSort"
        />
        <CoachGrid
            ref="gridComponent"
            :coaches="coaches"
            :totalCoaches="totalCoaches"
            @clear="clearSearch"
        />
        <PaginationButtons
            v-show="totalCoaches > 0"
            :current-page="currentPage"
            :total-pages="totalPages"
            @change-page="changePage"
        />
    </section>
    <Footer />
</template>

<script>
import Header from "../Components/Header.vue";
import CoachNav from "../Components/CoachNav.vue";
import CoachGrid from "../Components/CoachGrid.vue";
import PaginationButtons from "../Components/PaginationButtons.vue";
import Footer from "../Components/Footer.vue";
import scrollToTopAnimation from "../../animations/scrollToTopAnimation";
import coachItemsAnimation from "../../animations/coachItemsAnimation";
import { fetchCoachesData } from "../../api.js";

export default {
    name: "Coaches",
    components: {
        Header,
        CoachNav,
        CoachGrid,
        PaginationButtons,
        Footer,
    },
    data() {
        return {
            // Default values for sorting, search query, pagination, and coaches data
            sortOption: "default",
            searchQuery: "",
            coaches: [],
            currentPage: 1,
            totalPages: 1,
            totalCoaches: 0,
            clearSearchInput: false,
        };
    },
    methods: {
        // Function to fetch the list of coaches based on current page, search, and sorting
        async fetchCoaches(animate = true) {
            try {
                // Fetch coach data from API
                const response = await fetchCoachesData(
                    this.currentPage,
                    this.searchQuery,
                    this.sortOption,
                );

                // Update the coaches data and pagination info
                this.coaches = response.data;
                this.totalPages = response.last_page;
                this.totalCoaches = response.total;

                // Trigger animations if gridComponent is available and animate is true
                if (this.$refs.gridComponent) {
                    this.$nextTick(() => {
                        const gridElement = this.$refs.gridComponent.$el;
                        coachItemsAnimation(gridElement); // Animation for the coach grid items

                        // Scroll to the top if animate is true
                        animate && scrollToTopAnimation();
                    });
                }
            } catch (error) {
                console.error("Error fetching coaches:", error);
            }
        },

        // Handle search input and update the coaches list
        async handleSearch(query) {
            this.searchQuery = query;
            this.currentPage = 1; // Reset to the first page when searching
            await this.fetchCoaches();
        },

        // Handle sorting option change and fetch sorted coaches
        async handleSort(option) {
            this.sortOption = option;
            this.currentPage = 1; // Reset to the first page when sorting
            await this.fetchCoaches();
        },

        // Clear the search query and reset pagination
        async clearSearch() {
            this.searchQuery = "";
            this.currentPage = 1; // Reset to the first page when clearing search
            this.clearSearchInput = true; // Trigger the clear action
            this.$nextTick(() => {
                this.clearSearchInput = false; // Reset the flag after clearing
            });
        },

        // Handle page change in pagination and fetch new set of coaches
        async changePage(newPage) {
            this.currentPage = newPage;
            await this.fetchCoaches();
        },
    },

    // Fetch initial coaches data when the component is mounted
    mounted() {
        this.fetchCoaches(false);
    },
};
</script>
