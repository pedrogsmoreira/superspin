<template>
    <div class="relative lg:w-full">
        <input
            type="text"
            v-model="localSearchQuery"
            class="h-8 w-full rounded-xl border border-black px-2 text-sm outline-none outline-1 outline-offset-0 hover:border-red-light hover:outline hover:outline-red-light focus:border-red focus:outline focus:outline-red active:border-red-dark active:outline active:outline-red-dark"
            placeholder="Search by name or location..."
        />
        <button
            @click="emitSearch"
            class="group absolute right-0 top-0 flex h-8 w-8 items-center justify-center outline-none"
        >
            <font-awesome-icon
                icon="search"
                class="h-3 text-black group-hover:text-red-light group-focus:text-red group-active:text-red-dark"
            />
        </button>
    </div>
</template>

<script>
export default {
    props: {
        searchQuery: String,
    },
    data() {
        return {
            localSearchQuery: this.searchQuery,
            debounceTimeout: null,
        };
    },
    watch: {
        localSearchQuery: {
            immediate: true,
            handler(newValue) {
                this.debounce(() => this.emitSearch(newValue), 300);
            },
        },
    },
    methods: {
        emitSearch() {
            this.$emit("search", this.localSearchQuery);
        },
        clearInput() {
            this.localSearchQuery = "";
        },
        debounce(callback, delay) {
            clearTimeout(this.debounceTimeout);
            this.debounceTimeout = setTimeout(callback, delay);
        },
    },
};
</script>
