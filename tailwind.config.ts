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
        gray: "#E8E8E8",
        black: "#000000",
        white: "#ffffff",
      },

      fontFamily: {
        sans: ["Parkinsans", "Inter", "Arial", "sans-serif"], // Main font family for body text
        heading: ["Roboto", "sans-serif"], // Font for headings
      },

      backgroundImage: {
          'yellow-gradient': 'linear-gradient(to bottom, #FAAB02 0%, #539D43 100%)',
          'green-gradient': 'linear-gradient(to bottom, #539D43 0%, #99cc00 100%)',
         
       
      },
      animation: {
        marquee: 'scroll 20s linear infinite', // Animation duration and speed
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' }, // Start position
          '100%': { transform: 'translateX(-100%)' }, // End position, moves entire width
        },
      },
    },

 
  },
  plugins: [],
} satisfies Config;

