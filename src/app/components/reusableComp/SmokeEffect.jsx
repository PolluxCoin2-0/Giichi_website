import React, { useEffect, useRef } from "react";

const SmokeEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 20 + 10; // Size of the particle
        this.opacity = 1; // Initial opacity
        this.color = `rgba(200, 200, 200, ${this.opacity})`; // Smoke-like color
        this.speedX = Math.random() * 2 - 1; // Horizontal movement
        this.speedY = Math.random() * -2; // Upward movement
        this.life = Math.random() * 100 + 100; // Lifespan
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        this.opacity -= 0.01; // Fade out gradually
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 200, 200, ${this.opacity})`;
        ctx.fill();
        ctx.closePath();
      }
    }

    const handleMouseMove = (event) => {
      for (let i = 0; i < 5; i++) {
        particles.push(new Particle(event.clientX, event.clientY));
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        if (particle.life <= 0 || particle.opacity <= 0) {
          particles.splice(index, 1); // Remove dead particles
        } else {
          particle.update();
          particle.draw();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }} />;
};

export default SmokeEffect;
