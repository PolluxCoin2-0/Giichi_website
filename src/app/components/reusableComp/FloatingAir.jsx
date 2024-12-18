import  { useEffect } from "react";

const FloatingAir = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const airElement = document.createElement("div");
      airElement.className = "air-element";

      // Set the position near the cursor with slight randomness
      const xOffset = Math.random() * 50 - 25;
      const yOffset = Math.random() * 50 - 25;
      airElement.style.left = `${event.clientX + xOffset}px`;
      airElement.style.top = `${event.clientY + yOffset}px`;

      // Randomize size and opacity
      const size = Math.random() * 40 + 10; // Between 10px and 50px
      airElement.style.width = `${size}px`;
      airElement.style.height = `${size}px`;
      airElement.style.opacity = `${Math.random() * 0.5 + 0.2}`; // Between 0.2 and 0.7

      document.body.appendChild(airElement);

      // Remove the element after the animation
      setTimeout(() => {
        airElement.remove();
      }, 3000); // Matches the animation duration
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null; // No visible component, all handled dynamically
};

export default FloatingAir;
