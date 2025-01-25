import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function coachItemsAnimation(trigger) {
    // Kill animation if it already exists
    const st = ScrollTrigger.getById("coachItemsAnimation");
    st && st.kill();

    if (typeof trigger === "string") {
        trigger = document.querySelector(trigger);
    }

    gsap.fromTo(
        trigger.querySelectorAll(".coach-card"),
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: "sine.out",
            duration: 0.5,
            scrollTrigger: {
                id: "coachItemsAnimation",
                trigger: trigger,
                markers: true,
            },
        },
    );
}
