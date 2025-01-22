import { initCoachesGrid } from "./coachesGrid";
import { initHeaderScrollAnimations } from "./header";
import { initHeroAnimation } from "./hero";

function initApp() {
    // Initialize the coaches grid
    initCoachesGrid();

    // Initialize the ball animation in the hero
    initHeroAnimation();

    // Initialize the scroll animations in the header
    initHeaderScrollAnimations();
}

initApp();
