import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let coachGridAnimation = null; // Store the reference to the animation

export function animateCoachesGrid() {
    // Kill existing animations to avoid conflicts
    if (coachGridAnimation) {
        coachGridAnimation.kill();
        coachGridAnimation = null;
    }

    // Reinitialize animation
    coachGridAnimation = gsap.fromTo(
        ".coach-item",
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: "sine.out",
            duration: 0.5,
            scrollTrigger: {
                trigger: "#coaches-grid-nav",
                //markers: true,
            },
        },
    );

    // Ensure ScrollTrigger refreshes after rendering new elements
    ScrollTrigger.refresh();
}
