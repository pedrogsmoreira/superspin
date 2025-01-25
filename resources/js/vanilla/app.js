import { initCoachesGrid } from "./coachesGrid";
import { updateAnimations } from "./animations";
import getCurrentBreakpoint from "./../utils/getCurrentBreakpoint";

function initApp() {
    const breakpoint = getCurrentBreakpoint(); // Get Tailwind breakpoint

    // Initialize the coaches grid
    initCoachesGrid(breakpoint);

    // Initialize the animations ball animation in the hero
    updateAnimations(breakpoint);

    // Attach a debounced resize listener
    /*const debouncedUpdate = debounce(updateAnimations, 200);
    window.addEventListener("resize", debouncedUpdate);*/
}

initApp();
