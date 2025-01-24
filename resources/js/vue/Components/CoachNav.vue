<template>
    <div
        class="sticky top-10 z-20 bg-white py-2 xl:order-1 xl:w-1/2 xl:pr-[0.375rem]"
    >
        <div class="flex flex-col gap-2 lg:flex-row lg:gap-3">
            <SearchBar
                ref="searchBar"
                :searchQuery="searchQuery"
                @search="emitSearch"
            />
            <SortSelect @sort="emitSort" />
        </div>
    </div>
</template>

<script>
import SortSelect from "./SortSelect.vue";
import SearchBar from "./SearchBar.vue";

export default {
    components: { SortSelect, SearchBar },
    props: {
        searchQuery: String,
        clearEvent: {
            type: Boolean,
            default: false,
        },
    },
    watch: {
        clearEvent(newValue) {
            if (newValue) {
                this.clearSearchBar();
            }
        },
    },
    methods: {
        emitSearch(query) {
            this.$emit("search", query);
        },
        emitSort(option) {
            this.$emit("sort", option);
        },
        clearSearchBar() {
            this.$refs.searchBar.clearInput();
        },
    },
};
</script>
