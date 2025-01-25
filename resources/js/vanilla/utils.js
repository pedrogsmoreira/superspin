const TAILWIND_BREAKPOINTS = {
    xs: 0, // Extra small
    sm: 640, // Small
    md: 768, // Medium
    lg: 1024, // Large
    xl: 1280, // Extra large
    "2xl": 1536, // 2X Large
};

export default function getCurrentBreakpoint() {
    const width = window.innerWidth;

    if (width >= TAILWIND_BREAKPOINTS["2xl"]) return "2xl";
    if (width >= TAILWIND_BREAKPOINTS.xl) return "xl";
    if (width >= TAILWIND_BREAKPOINTS.lg) return "lg";
    if (width >= TAILWIND_BREAKPOINTS.md) return "md";
    if (width >= TAILWIND_BREAKPOINTS.sm) return "sm";
    return "xs";
}

/*export function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}*/
