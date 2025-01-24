<template>
    <footer class="mt-8">
        <div class="container mx-auto grid grid-cols-2 gap-3 py-2">
            <div class="flex h-6 items-center">
                <Icon classList="h-[120%]" />
            </div>
            <p class="self-center text-xs">
                Designed and developed by Pedro Guilherme Moreira
            </p>
        </div>
    </footer>
</template>

<script>
import Icon from "./SVG/Icon.vue";

export default {
    components: {
        Icon
    },
};
</script>