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
      },
    },
  },
  plugins: [],
} satisfies Config;


// tailwind.config.js
// module.exports = {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}', // Path to your React components
//   ],
//   theme: {
//     extend: {
//       // Colors: Define a custom color palette
//       colors: {
//         primary: '#3490dc', // Example primary color
//         secondary: '#ffed4a', // Example secondary color
//         danger: '#e3342f', // Example danger color
//         background: '#f8fafc', // Background color for the site
//         // You can define other colors as per your design needs
//       },
//       // Font Family: Set custom fonts
//       fontFamily: {
//         sans: ['Inter', 'Arial', 'sans-serif'], // Main font family for body text
//         heading: ['Roboto', 'sans-serif'], // Font for headings
//       },
//       // Font Sizes: Customize font sizes
//       fontSize: {
//         'xxs': '0.625rem', // Custom extra small font size
//         'sm': '0.875rem',  // Small font size
//         'lg': '1.125rem',  // Large font size
//         'xl': '1.25rem',   // Extra large font size
//         '2xl': '1.5rem',   // Double extra large font size
//         // You can add other sizes as needed
//       },
//       // Border Radius: Define rounded corners (buttons, etc.)
//       borderRadius: {
//         'xl': '1rem', // Larger border radius for more rounded elements
//         '2xl': '1.5rem', // Even more rounded
//       },
//       // Gradients: Customize gradient colors
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//         // Define your custom gradients if needed
//       },
//       // Spacing: You can also define custom spacing for margins and paddings
//       spacing: {
//         '72': '18rem', // Example of custom spacing value
//         '84': '21rem', // Another custom spacing value
//       },
//     },
//   },
//   plugins: [],
// }