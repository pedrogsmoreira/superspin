<template>
    <header class="sticky top-0 z-40 mt-8 w-full bg-white py-2">
        <div class="container relative mx-auto">
            <div ref="headerLogo" class="logo flex h-8 items-center md:h-12">
                <Super class="h-full" />
                <Icon class="h-[120%]" />
                <Spin class="h-full" />
            </div>
            <div
                ref="headerTitle"
                class="invisible absolute -top-2 left-8 flex gap-2 py-1"
            >
                <h3 class="text-2xl font-bold tracking-tighter">Our Coaches</h3>
            </div>
        </div>
    </header>
</template>
<script>
import Super from "./SVG/Super.vue";
import Icon from "./SVG/Icon.vue";
import Spin from "./SVG/Spin.vue";

export default {
    components: {
        Super,
        Icon,
        Spin,
    },
};
</script>
