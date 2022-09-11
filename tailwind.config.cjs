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
