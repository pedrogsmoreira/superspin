<template>
    <header ref="header" class="sticky top-0 z-40 mt-8 w-full bg-white py-2">
        <div class="container relative mx-auto">
            <div ref="headerLogo" class="logo flex h-8 items-center md:h-12">
                <Super class="h-full" />
                <Icon class="icon h-[120%]" />
                <Spin class="h-full" />
            </div>
            <div class="invisible absolute -top-2 left-8 flex gap-2 py-1">
                <h3
                    ref="headerTitle"
                    class="text-2xl font-bold tracking-tighter"
                >
                    Our Coaches
                </h3>
            </div>
        </div>
    </header>
</template>
<script setup>
import { ref, defineExpose } from "vue";
import Super from "./SVG/Super.vue";
import Icon from "./SVG/Icon.vue";
import Spin from "./SVG/Spin.vue";

// Define refs
const header = ref(null);
const headerLogo = ref(null);
const headerTitle = ref(null);

// Expose refs
defineExpose({
    header,
    headerLogo,
    headerTitle,
});
</script>
