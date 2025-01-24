<template>
    <div class="col-span-4 flex flex-col items-center justify-center">
        <h4 class="font-semibold tracking-tight">
            No coaches match your search criteria
        </h4>
        <p class="mb-3 text-sm">
            Try clearing your search to explore all available coaches.
        </p>
        <Button content="Clear Search" @click="$emit('clear')" />
    </div>
</template>

<script>
import Button from "./Button.vue";
export default {
    name: "Coaches",
    components: {
        Button,
    },
};
</script>
