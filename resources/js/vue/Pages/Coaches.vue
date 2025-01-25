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
        async fetchCoaches(animate = true) {
            try {
                const response = await fetchCoachesData(
                    this.currentPage,
                    this.searchQuery,
                    this.sortOption,
                );

                this.coaches = response.data;
                this.totalPages = response.last_page;
                this.totalCoaches = response.total;
                if (this.$refs.gridComponent) {
                    this.$nextTick(() => {
                        const gridElement = this.$refs.gridComponent.$el;
                        coachItemsAnimation(gridElement);

                        animate && scrollToTopAnimation();
                    });
                }
            } catch (error) {
                console.error("Error fetching coaches:", error);
            }
        },
        async handleSearch(query) {
            this.searchQuery = query;
            this.currentPage = 1;
            await this.fetchCoaches();
        },
        async handleSort(option) {
            this.sortOption = option;
            this.currentPage = 1;
            await this.fetchCoaches();
        },
        async clearSearch() {
            this.searchQuery = "";
            this.currentPage = 1;
            this.clearSearchInput = true; // Trigger the clear action
            this.$nextTick(() => {
                this.clearSearchInput = false; // Reset the flag
            });
        },
        async changePage(newPage) {
            this.currentPage = newPage;
            await this.fetchCoaches();
        },
    },
    mounted() {
        this.fetchCoaches(false);
    },
};
</script>
