import { useEffect } from "react";

const CursorTrail = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const trail = document.createElement("div");
      trail.className = "trail";
      trail.style.left = `${event.clientX}px`;
      trail.style.top = `${event.clientY}px`;
      document.body.appendChild(trail);

      setTimeout(() => {
        trail.remove();
      }, 1000); // Matches the animation duration
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null; // No rendered JSX needed, everything is handled dynamically
};

export default CursorTrail;
