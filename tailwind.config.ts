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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // Define your custom gradients if needed
      },
    },

 
  },
  plugins: [],
} satisfies Config;

