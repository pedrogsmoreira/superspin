<template>
    <nav
        class="xl:justify-norma sticky bottom-0 z-10 flex justify-between bg-white py-2 xl:bottom-auto xl:top-10 xl:order-1 xl:w-1/2 xl:pl-[0.375rem]"
    >
        <div class="flex gap-2 xl:order-2 xl:pl-[0.375rem]">
            <Button
                type="first"
                @click="$emit('change-page', 1)"
                :isDisabled="currentPage <= 1"
            />
            <Button
                type="prev"
                @click="$emit('change-page', currentPage - 1)"
                :isDisabled="currentPage <= 1"
            />
        </div>
        <div
            class="flex items-center justify-end xl:order-1 xl:w-1/2 xl:pr-[0.375rem]"
        >
            <p class="text-xs uppercase">
                <span class="hidden sm:inline">Page</span>
                {{ currentPage }} of
                {{ totalPages }}
            </p>
        </div>
        <div class="flex gap-2 xl:order-2 xl:flex-grow xl:justify-end">
            <Button
                type="next"
                @click="$emit('change-page', currentPage + 1)"
                :isDisabled="currentPage >= totalPages"
            />
            <Button
                type="last"
                @click="$emit('change-page', totalPages)"
                :isDisabled="currentPage >= totalPages"
            />
        </div>
    </nav>
</template>

<script>
import Button from "./Button.vue";

export default {
    props: {
        currentPage: Number,
        totalPages: Number,
    },
    components: {
        Button,
    },
};
</script>
