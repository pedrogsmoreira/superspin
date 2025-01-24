<template>
    <Header />
    <Hero />
    <section class="container mx-auto flex flex-col flex-wrap xl:flex-row">
        <h3
            class="w-full py-1 text-2xl font-bold tracking-tighter"
            id="coaches-title"
        >
            Our Coaches
        </h3>
        <CoachNav
            :search-query="searchQuery"
            :clearEvent="clearSearchInput"
            @search="handleSearch"
            @sort="handleSort"
        />
        <CoachGrid
            :coaches="filteredCoaches"
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
import axios from "axios";
import Header from "../Components/Header.vue";
import Hero from "../Components/Hero.vue";
import CoachNav from "../Components/CoachNav.vue";
import CoachGrid from "../Components/CoachGrid.vue";
import PaginationButtons from "../Components/PaginationButtons.vue";
import Footer from "../Components/Footer.vue";

export default {
    name: "Coaches",
    components: {
        Header,
        Hero,
        CoachNav,
        CoachGrid,
        PaginationButtons,
        Footer
    },
    data() {
        return {
            sortOption: "default",
            searchQuery: "",
            coaches: [], // All coaches fetched from API
            currentPage: 1,
            totalPages: 1,
            totalCoaches: 0,
            clearSearchInput: false,
        };
    },
    computed: {
        filteredCoaches() {
            return this.coaches.filter((coach) =>
                coach.name
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase()),
            );
        },
    },
    methods: {
        async fetchCoaches() {
            try {
                const response = await axios.get("/api/coaches", {
                    params: {
                        page: this.currentPage,
                        search: this.searchQuery,
                        sort: this.sortOption,
                    },
                });
                this.coaches = response.data.data;
                this.totalPages = response.data.last_page;
                this.totalCoaches = response.data.total;
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
            this.clearSearchInput = true; // Trigger the clear action
            this.$nextTick(() => {
                this.clearSearchInput = false; // Reset the flag
            });
            this.searchQuery = "";
            this.currentPage = 1;
            await this.fetchCoaches();
        },
        async changePage(newPage) {
            this.currentPage = newPage;
            await this.fetchCoaches();
        },
    },
    mounted() {
        this.fetchCoaches();
    },
};
</script>
