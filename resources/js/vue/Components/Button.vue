<template>
    <button
        :class="[
            type || '',
            'flex h-8 items-center rounded-xl border border-black bg-white px-3 text-xs font-semibold uppercase leading-8 text-black outline-none outline-offset-0 transition-all',
            {
                'hover:border-red-light hover:outline hover:outline-red-light':
                    !isDisabled,
                'focus:border-red focus:outline focus:outline-red': !isDisabled,
                'active:border-red-dark active:outline active:outline-red-dark':
                    !isDisabled,
                'disabled:border-gray disabled:text-gray disabled:outline-none disabled:hover:border-gray disabled:hover:bg-white':
                    isDisabled,
            },
        ]"
        :disabled="isDisabled"
    >
        <font-awesome-icon
            v-if="type === 'first'"
            icon="angles-left"
            class="-ml-1 mr-1 h-3"
        />
        <font-awesome-icon
            v-else-if="type === 'prev'"
            icon="angle-left"
            class="-ml-1 mr-1 h-3"
        />
        {{
            type == "first"
                ? "First"
                : type == "prev"
                  ? "prev"
                  : type == "next"
                    ? "Next"
                    : type == "last"
                      ? "Last"
                      : content
        }}
        <font-awesome-icon
            v-if="type === 'next'"
            icon="angle-right"
            class="-mr-1 ml-1 h-3"
        />
        <font-awesome-icon
            v-else-if="type === 'last'"
            icon="angles-right"
            class="-mr-1 ml-1 h-3"
        />
    </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        type: {
            type: String,
            default: "",
        },
        content: {
            type: String,
            default: "",
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
