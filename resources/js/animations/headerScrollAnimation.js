import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * Animates the header logo during the initial scroll.
 * Shrinks the header and logo, and adds a border to the header when the user scrolls slightly.
 */
export default function headerScrollAnimation(
    breakpoint,
    header,
    headerLogo,
    tl,
) {
    // Kill existing timeline if it exists
    if (tl) {
        tl.kill();
    }

    // Create a GSAP timeline with ScrollTrigger for the animation
    tl = gsap.timeline({
        scrollTrigger: {
            trigger: headerLogo,
            start: "center",
            toggleActions: "play none none reverse", // Play animation on scroll down, reverse on scroll up
        },
    });

    // Shrink the header height with a smooth transition
    tl.fromTo(
        header,
        { height: breakpoint == "xs" || breakpoint == "sm" ? 48 : 64 }, // Initial height
        {
            transformOrigin: "left top",
            height: 40,
            ease: "power1.inOut",
            duration: 0.6,
        },
    );

    // Scale down the logo for a cohesive shrinking effect
    tl.to(
        headerLogo,
        {
            transformOrigin: "left top",
            scale: breakpoint == "xs" || breakpoint == "sm" ? (1 / 3) * 2 : 0.5, // Scale the logo to half its size
            ease: "power2.inOut",
            duration: 0.6,
        },
        "<", // Sync this animation to start at the same time as the previous one
    );

    // Ensure ScrollTrigger refreshes after rendering new elements
    ScrollTrigger.refresh();
}
