<template>
    <div
        class="grid min-h-[calc(100vh-202px)] w-full grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:order-3 xl:min-h-[calc(100vh-162px)]"
    >
        <CoachCard v-for="coach in coaches" :key="coach.id" :coach="coach" />
        <div
            v-show="totalCoaches === 0"
            class="col-span-4 flex flex-col items-center justify-center"
        >
            <NoCoachesFound @clear="$emit('clear')" />
        </div>
    </div>
</template>

<script>
import CoachCard from "./CoachCard.vue";
import NoCoachesFound from "./NoCoachesFound.vue";

export default {
    components: { CoachCard, NoCoachesFound },
    props: {
        coaches: Array,
        totalCoaches: Number,
    },
};
</script>
