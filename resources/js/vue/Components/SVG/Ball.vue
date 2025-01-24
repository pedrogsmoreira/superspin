<template>
    <svg
        :class="classList"
        viewBox="0 0 78 78"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="39" cy="39" r="39" fill="url(#paint0_radial_470_17)" />
        <defs>
            <radialGradient
                id="paint0_radial_470_17"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(25.5 26) rotate(75.4464) scale(53.7238)"
            >
                <stop offset="0.45" stop-color="white" />
                <stop offset="1" stop-color="#A9A9A9" />
            </radialGradient>
        </defs>
    </svg>
</template>
<script>
export default {
    props: {
        classList: String,
    },
};
</script>
