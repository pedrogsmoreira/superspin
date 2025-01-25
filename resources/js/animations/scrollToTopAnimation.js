import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default function scrollToTopAnimation() {
    gsap.to(window, {
        duration: 0.3,
        scrollTo: {
            y: 0,
        },
    });
}
