<template>
    <Header ref="headerComponent" />
    <Hero ref="heroComponent" />
    <section class="container mx-auto flex flex-col flex-wrap xl:flex-row">
        <h3
            ref="coachesTitle"
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
            ref="gridComponent"
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
import { ref, onMounted, onBeforeUnmount } from "vue";
import getCurrentBreakpoint from "../../vanilla/utils";
import Header from "../Components/Header.vue";
import Hero from "../Components/Hero.vue";
import CoachNav from "../Components/CoachNav.vue";
import CoachGrid from "../Components/CoachGrid.vue";
import PaginationButtons from "../Components/PaginationButtons.vue";
import Footer from "../Components/Footer.vue";
import headerScrollAnimation from "../../animations/headerScrollAnimation";
import titleScrollAnimation from "../../animations/titleScrollAnimation";
import heroAnimation from "../../animations/heroAnimation";
import scrollToElementAnimation from "../../animations/scrollToElementAnimation";
import coachItemsAnimation from "../../animations/coachItemsAnimation";

import { fetchCoachesData } from "../../api.js";

export default {
    name: "Coaches",
    components: {
        Header,
        Hero,
        CoachNav,
        CoachGrid,
        PaginationButtons,
        Footer,
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

                        animate &&
                            scrollToElementAnimation(
                                gridElement,
                                getCurrentBreakpoint(),
                            );
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
        this.fetchCoaches(false);
    },
    setup() {
        const headerComponent = ref(null);
        const heroComponent = ref(null);
        const gridComponent = ref(null);
        const coachesTitle = ref(null);
        let headerScrollAnimationTL = null;
        let titleScrollAnimationTL = null;
        let heroAnimationTL = null;

        const triggerAnimations = () => {
            // Detect screen breakpoint
            const breakpoint = getCurrentBreakpoint();
            console.log(breakpoint);

            // Access refs
            const header = headerComponent.value?.header;
            const headerLogo = headerComponent.value?.headerLogo;
            const headerTitle = headerComponent.value?.headerTitle;
            const mainHero = heroComponent.value?.mainHero;
            const ballShadow = heroComponent.value?.ballShadow;

            // Initialize animations
            headerScrollAnimation(
                breakpoint,
                header,
                headerLogo,
                headerScrollAnimationTL,
            );

            titleScrollAnimation(
                headerLogo,
                coachesTitle.value,
                headerTitle,
                titleScrollAnimationTL,
            );

            heroAnimation(mainHero, ballShadow, heroAnimationTL);
        };

        onMounted(() => {
            triggerAnimations(); // Run animations on mount
        });

        onBeforeUnmount(() => {
            if (headerScrollAnimationTL) {
                headerScrollAnimationTL.kill();
                headerScrollAnimationTL = null;
            }
            if (titleScrollAnimationTL) {
                titleScrollAnimationTL.kill();
                titleScrollAnimationTL = null;
            }
            if (heroAnimationTL) {
                heroAnimationTL.kill();
                heroAnimationTL = null;
            }
        });

        return {
            headerComponent,
            heroComponent,
            gridComponent,
            coachesTitle,
        };
    },
};
</script>
