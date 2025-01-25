import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default function scrollToElementAnimation(element, breakpoint) {
    gsap.to(window, {
        duration: 0.5,
        scrollTo: {
            y: element,
            offsetY:
                breakpoint == "xs" || breakpoint == "sm" || breakpoint == "md"
                    ? 128
                    : 90,
        },
    });
}
