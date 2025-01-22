import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            black: "#111112",
            white: "#fff",
            gray: "#A9A9A9",
            red: {
                light: "#FF6462",
                DEFAULT: "#D72421",
                dark: "#811513",
            },
        },
    },
    plugins: [],
};
