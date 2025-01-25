import headerScrollAnimation from "../animations/headerScrollAnimation";
import titleScrollAnimation from "../animations/titleScrollAnimation";
import heroAnimation from "../animations/heroAnimation";
export function updateAnimations(breakpoint) {
    let headerScrollAnimationTL = null;
    let titleScrollAnimationTL = null;
    let heroAnimationTL = null;

    headerScrollAnimation(
        breakpoint,
        "header",
        "#header-logo",
        headerScrollAnimationTL,
    );

    titleScrollAnimation(
        "#header-logo",
        "#coaches-title",
        "#header-title",
        titleScrollAnimationTL,
    );

    heroAnimation("#main-hero", "#ball-shadow", heroAnimationTL);
}
