<template>
    <div class="flex w-full items-center gap-2">
        <span class="text-xs uppercase">Sort by</span>
        <div class="relative flex-grow">
            <button
                class="relative z-20 flex h-8 w-full items-center rounded-xl border border-black bg-white px-2 text-left text-sm outline-offset-0 hover:border-red-light hover:outline hover:outline-red-light focus:border-red focus:outline focus:outline-red active:border-red-dark active:outline active:outline-red-dark"
                @click="toggleDropdown"
            >
                <span>{{ selectedOption.label }}</span>
                <font-awesome-icon icon="angle-down" class="ml-auto w-3" />
            </button>
            <ul
                v-show="dropdownVisible"
                class="absolute left-0 top-0 z-10 w-full overflow-hidden rounded-xl border bg-white text-sm"
            >
                <li v-for="(option, index) in sortOptions" :key="option.value">
                    <button
                        :class="[
                            index === 0 ? 'h-16 pt-8' : 'h-8 border-t',
                            'w-full px-2 text-left outline-none transition-colors hover:bg-red-light focus:bg-red-light',
                        ]"
                        @click="selectOption(option)"
                    >
                        {{ option.label }}
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dropdownVisible: false,
            selectedOption: { label: "Default", value: "default" },
            sortOptions: [
                { label: "Default", value: "default" },
                { label: "Hourly Rate (Ascending)", value: "asc" },
                { label: "Hourly Rate (Descending)", value: "desc" },
            ],
        };
    },
    methods: {
        toggleDropdown() {
            this.dropdownVisible = !this.dropdownVisible;
        },
        selectOption(option) {
            this.selectedOption = option;
            this.dropdownVisible = false;
            this.$emit("sort", option.value); // Emit selected value to parent
        },
    },
};
</script>
