import { gsap } from "gsap";

export function toggleSort(isOpen) {
    gsap.to("#coaches-sort-button+ul", {
        opacity: !isOpen ? 1 : 0,
        y: !isOpen ? 0 : -10,
        visibility: !isOpen ? "visible" : "hidden",
        ease: "sine.out",
        duration: 0.5,
    });
}
