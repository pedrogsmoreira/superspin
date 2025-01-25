import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * Animates the header title during scroll.
 * Hides the SuperSpin name and shows the section title next to the logo when the user scrolls past the section title..
 */
export default function titleScrollAnimation(
    headerLogo,
    coachesTitle,
    headerTitle,
    tl,
) {
    let superElement, logoElement, textElements;

    if (typeof headerLogo === "string") {
        superElement = document.querySelector(`${headerLogo} svg`);
        logoElement = document.querySelector(`${headerLogo} svg.icon`);
        textElements = document.querySelectorAll(
            `${headerLogo} svg:not(.icon)`,
        );
    } else {
        superElement = headerLogo.querySelector("svg");
        logoElement = headerLogo.querySelector("svg.icon");
        textElements = headerLogo.querySelectorAll("svg:not(.icon)");
    }
    const superWidth = superElement.getBoundingClientRect().width;

    // Kill existing timeline if it exists
    if (tl) {
        tl.kill();
    }

    tl = gsap.timeline({
        scrollTrigger: {
            trigger: coachesTitle,
            start: "top top+=40px",
            toggleActions: "play none none reverse",
        },
    });

    tl.to(textElements, {
        opacity: 0,
        ease: "power1.inOut",
        duration: 0.4,
    });

    tl.to(
        logoElement,
        {
            x: -superWidth,
            ease: "power3.inOut",
            duration: 0.4,
        },
        "<",
    );

    tl.fromTo(
        headerTitle,
        { visibility: "visible", opacity: 0 },
        {
            opacity: 1,
            ease: "power2.out",
            duration: 0.6,
        },
    );

    return tl;
}
