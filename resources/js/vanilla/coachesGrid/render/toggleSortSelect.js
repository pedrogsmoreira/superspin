import { gsap } from "gsap";

/**
 * Toggles the sorting options visibility and animation
 */
export function toggleSort(isOpen) {
    // Animating the sort button's dropdown (ul) based on the isOpen state
    gsap.to("#coaches-sort-button+ul", {
        opacity: !isOpen ? 1 : 0,
        y: !isOpen ? 0 : -10,
        visibility: !isOpen ? "visible" : "hidden",
        ease: "sine.out",
        duration: 0.5,
    });
}
