import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: "#FBCE21",
        orange: "#FAAB02",
        green: "#539D43",
        lightgreen: "#99cc00",
        lightestGreen: "#151515",
        gray: "#E8E8E8",
        lightGray: "#A8A8A9",
        black: "#000000",
        lightblack: "#282828",
        white: "#ffffff",
      },

      fontFamily: {
        sans: ["Parkinsans", "Inter", "Arial", "sans-serif"], // Main font family for body text
        heading: ["Roboto", "sans-serif"], // Font for headings
      },

      backgroundImage: {
          'yellow-gradient': 'linear-gradient(to bottom, #FAAB02 0%, #539D43 100%)',
          'green-gradient': 'linear-gradient(to bottom, #539D43 0%, #99cc00 100%)',
           'vital-ocean': 'linear-gradient(90deg, #1CB5E0 0%, #000851 100%)',
           'kale-salad': 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)',
           'retro-wagon': 'linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%)',
           'lovely-lilly': 'linear-gradient(90deg, #efd5ff 0%, #515ada 100%)',
           'melo-yellow': 'linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)',
           'oyee-goyee': 'linear-gradient(90deg, #0700b8 0%, #00ff88 100%)',
           'bloody-minosa': 'linear-gradient(90deg, #d53369 0%, #daae51 100%)'
      },
    
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' }, // Start position
          '100%': { transform: 'translateX(-100%)' }, // End position, moves entire width
        },
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scaleUp: {
          '0%, 100%': { transform: 'scale(1)' }, // Normal size
          '50%': { transform: 'scale(1.1)' },  // Slightly enlarged
        },
        scaleDown: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
        },
        bounceVertically: {
          '0%, 100%': { transform: 'translateY(0)' }, // Start and end at original position
          '50%': { transform: 'translateY(-20px)' }, // Move up slightly in the middle
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        blurToVisible: {
          '0%': { opacity: '0', filter: 'blur(10px)' },
          '100%': { opacity: '1', filter: 'blur(0px)' },
        },
      },
      animation: {
        marquee: 'scroll 20s linear infinite', // Animation duration and speed
        scaleUp: 'scaleUp 8s ease-in-out infinite', // Animates smoothly in a loop
        scaleDown: "scaleDown 8s ease-in-out infinite", // New scale-down animation
        rotate360: 'rotate360 50s linear infinite',
        bounceVertically: 'bounceVertically 3s ease-in-out infinite', // Bounce animation
        slideInLeft: 'slideInLeft 1s ease-out',
        slideInRight: 'slideInRight 1s ease-out',
        blurToVisible: 'blurToVisible 1.5s ease-out', // Adjust duration and easing as desired
      },
       
      
  
    },

 
  },
  plugins: [],
} satisfies Config;

