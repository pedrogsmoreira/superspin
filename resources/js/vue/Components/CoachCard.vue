<template>
    <div class="coach-card w-full flex-col">
        <div
            class="relative w-full rounded-xl bg-gradient-to-t from-red to-red-light pb-[100%]"
        >
            <div
                class="absolute bottom-2 right-2 h-8 rounded-xl border bg-white px-3"
            >
                <span class="text-sm font-semibold leading-8">{{
                    `$${coach.hourly_rate}/H`
                }}</span>
            </div>
        </div>
        <div class="flex flex-col gap-y-0.5 p-2">
            <h3 class="text-md font-bold uppercase">{{ coach.name }}</h3>
            <p class="text-sm">
                {{ `Based in ${coach.city}, ${coach.country}` }}
            </p>
            <p class="text-sm">
                {{ `${coach.years_of_experience} years of experience` }}
            </p>

            <p class="text-sm">
                {{ `SuperSpin coach since ${coach.date_joined}` }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        coach: Object,
    },
};
</script>
