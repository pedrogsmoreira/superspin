import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export function scrollToTop() {
    gsap.to(window, {
        duration: 0.5,
        scrollTo: { y: "#coaches-grid", offsetY: 90 },
    });
}
