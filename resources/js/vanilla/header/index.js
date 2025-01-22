import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function initHeaderScrollAnimations() {
    firstScrollAnimation();
    secondScrollAnimation();
}

/**
 * Animates the header logo during the initial scroll.
 * Shrinks the header and logo, and adds a border to the header when the user scrolls slightly.
 */
function firstScrollAnimation() {
    // Create a GSAP timeline with ScrollTrigger for the animation
    const logoScrollTL = gsap.timeline({
        scrollTrigger: {
            trigger: "#header-logo",
            start: "center",
            toggleActions: "play none none reverse", // Play animation on scroll down, reverse on scroll up
        },
    });

    // Shrink the header height with a smooth transition
    logoScrollTL.fromTo(
        "header",
        { height: 64 }, // Initial height
        {
            transformOrigin: "left top",
            height: 40,
            ease: "power1.inOut",
            duration: 0.6,
        },
    );

    // Scale down the logo for a cohesive shrinking effect
    logoScrollTL.to(
        ".logo",
        {
            transformOrigin: "left top",
            scale: 0.5, // Scale the logo to half its size
            ease: "power2.inOut",
            duration: 0.6,
        },
        "<", // Sync this animation to start at the same time as the previous one
    );

    // Add a border at the bottom of the header for visual separation
    logoScrollTL.fromTo(
        "#header-border",
        { opacity: 0 },
        {
            opacity: 1,
            ease: "power2.inOut", // Smooth easing
            duration: 0.6, // Match the duration with other animations
        },
    );
}

function secondScrollAnimation() {
    const superElement = document.querySelector("#header-logo svg");
    const superWidth = superElement.getBoundingClientRect().width;

    const titleScrollTL = gsap.timeline({
        scrollTrigger: {
            trigger: "#coaches-title",
            start: "top",
            toggleActions: "play none none reverse",
        },
    });

    titleScrollTL.to("#header-logo svg:not(.icon)", {
        opacity: 0,
        ease: "power1.inOut",
        duration: 0.4, // Slightly longer for a smoother fade
    });

    titleScrollTL.to(
        "#header-logo svg.icon",
        {
            x: -superWidth,
            ease: "power3.inOut", // More dynamic easing
            duration: 0.4, // Longer for better movement visibility
        },
        "<",
    );

    titleScrollTL.fromTo(
        "#header-title h3",
        { visibility: "visible", opacity: 0 },
        {
            opacity: 1,
            ease: "power2.out", // A gentle easing for fade-in
            duration: 0.6, // Slightly longer to match other transitions
        },
    );

    titleScrollTL.fromTo(
        "#coaches-nav-border",
        { opacity: 0 },
        {
            opacity: 1,
            ease: "power2.inOut", // Smooth easing
            duration: 0.6, // Match the duration with other animations
        },
        "<", // Sync this animation to start at the same time as the previous one
    );
}
