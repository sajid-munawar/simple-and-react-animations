import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css';
function App2() {
    const { ref, playState1 } = useWebAnimations({
        keyframes: {
            transform: ["translateX(500px)"], // Move by 500px
            background: ["red", "blue", "green"], // Go through three colors
        },
        timing: {
            // delay: 500, // Start with a 500ms delay
            duration: 1000, // Run for 1000ms
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
        }
    })

    return (
        <div ref={ref} className="div">
        </div>      
    
    )
}
export default App2;