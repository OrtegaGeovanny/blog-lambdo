/** @type {import('tailwindcss').Config} */
const extendColors = {
  // Custom hexadecimal colors
  secondary: "#99494E",
  warning: "#f9c018",
  classic: "#2C2C2C",
};
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: extendColors,
      screens: {
        sm: "576px",
        // => @media (min-width: 640px) { ... }

        md: "820px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".btn": {
          padding: theme("spacing.4"),
          margin: "auto",
        },
      });
    },
  ],
};
