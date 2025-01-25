import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

export default function heroAnimation(container, shadow, tl) {
    let ball;
    if (typeof container === "string") {
        ball = document.querySelector(`${container} svg`);
        container = document.querySelector(container);
    } else {
        ball = container.querySelector("svg");
    }

    // Kill existing timeline if it exists
    if (tl) {
        tl.kill();
    }

    // Set ball and shadow size relative to the container
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    gsap.set(ball, {
        x: -containerWidth / 4,
        y: containerHeight + containerHeight / 6,
        xPercent: -50, // Ensure the center of the ball is used
        yPercent: -50,
    });

    gsap.set(shadow, {
        x: -containerWidth / 4,
        y: 0,
        xPercent: -50,
        yPercent: -50,
        opacity: 0,
    });

    // Define paths
    const paths = [
        [
            { x: -containerWidth / 4, y: containerHeight / 2 },
            { x: 0, y: 0 },
            { x: containerWidth / 4, y: containerHeight / 2 },
        ],
        [
            { x: containerWidth / 4, y: containerHeight / 2 },
            { x: containerWidth / 2, y: 0 },
            { x: (containerWidth / 4) * 3, y: containerHeight / 2 },
        ],
        [
            { x: (containerWidth / 4) * 3, y: containerHeight / 2 },
            { x: containerWidth, y: 0 },
            { x: (containerWidth / 4) * 5, y: containerHeight / 2 },
        ],
    ];

    const diagonalPaths = [
        [
            {
                x: -containerWidth / 4,
                y: containerHeight + containerHeight / 6,
            },
            { x: containerWidth / 8, y: (containerHeight / 6) * 2 },
            { x: containerWidth / 4, y: (containerHeight / 4) * 3 },
        ],
        [
            { x: containerWidth / 4, y: (containerHeight / 4) * 3 },
            { x: (containerWidth / 8) * 5, y: containerHeight / 6 },
            { x: (containerWidth / 4) * 3, y: containerHeight / 4 },
        ],
        [
            { x: (containerWidth / 4) * 3, y: containerHeight / 4 },
            { x: containerWidth + containerWidth / 8, y: -containerHeight / 6 },
            { x: containerWidth + containerWidth / 4, y: -containerHeight / 4 },
        ],
    ];

    // Create the timeline
    tl = gsap.timeline({
        repeat: -1, // Loop forever
        yoyo: true, // Reverse animation
        onUpdate: updateShadow, // Synchronize shadow animation
    });

    // Add the motion path animation for each path
    paths.forEach((path) => {
        tl.to(ball, {
            duration: 0.75,
            motionPath: {
                path: path,
                curviness: 2,
                alignOrigin: [0.5, 0.5],
            },
            ease: "sine.inOut",
        });
    });

    // Function to update the shadow's position, opacity, and scale
    function updateShadow() {
        const ballPosition = gsap.getProperty(ball, "y");
        const ballX = gsap.getProperty(ball, "x");

        // Set shadow x to match ball x
        gsap.set(shadow, {
            x: ballX,
        });

        // Calculate shadow opacity and scale based on ball's y position
        const opacity = (ballPosition / (containerHeight / 2)) * 0.4; // Max opacity is 0.4
        const scale = ballPosition / (containerHeight / 2); // Scale remains unchanged

        gsap.set(shadow, {
            opacity: opacity,
            scale: scale,
        });
    }
}
