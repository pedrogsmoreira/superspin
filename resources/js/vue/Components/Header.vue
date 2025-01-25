<template>
    <header class="sticky top-0 z-40">
        <div class="w-full bg-white py-2">
            <div class="container relative mx-auto flex justify-between">
                <div class="flex h-6 items-center">
                    <Icon class="icon h-[120%]" />
                    <h3 class="pl-2 text-2xl font-bold tracking-tighter">
                        Our Coaches
                    </h3>
                </div>
            </div>
        </div>
        <hr class="-mx-3 h-px w-screen bg-black" />
    </header>
</template>

<script>
import Icon from "./SVG/Icon.vue";

export default {
    components: {
        Icon,
    },
};
</script>
