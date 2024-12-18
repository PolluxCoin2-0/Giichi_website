// ColorSplash.js
import React, { useRef } from "react";

const ColorSplash = ({ colors = [] }) => {
  const containerRef = useRef(null);

  const onPointerMove = (event) => {
    createSplash(event);
  };

  const createSplash = (event) => {
    const splash = document.createElement("div");
    splash.classList.add("splash");

    // Set a random color from the passed colors array
    const randomColor = colors.length > 0 ? getRandomColor(colors) : getRandomColor();
    splash.style.backgroundColor = randomColor;

    // Position the splash at the mouse coordinates
    splash.style.left = `${event.pageX}px`;
    splash.style.top = `${event.pageY}px`;

    // Append the splash to the container
    containerRef.current.appendChild(splash);

    // Remove the splash element after the animation ends (1 second)
    setTimeout(() => {
      splash.remove();
    }, 1000);
  };

  const getRandomColor = (colors) => {
    // Select a random color from the passed colors array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-screen overflow-hidden bg-transparent"
      onMouseMove={onPointerMove}
    >
      {/* The splashes will be generated here */}
    </div>
  );
};

export default ColorSplash;
