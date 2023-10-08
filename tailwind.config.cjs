/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Commissioner Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#3C315B",
        secondary: "#AB9FF2",
        tertiary: "#1C1C1C",
        neutral: "#F5F2FF",
        muted: "#e2dffe",
      },
      transitionProperty: {
        button: "transform, background-color",
      },
    },
  },
  plugins: [],
};
