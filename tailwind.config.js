const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
  ],
  safelist: ["proze"],
  darkMode: false,
  theme: {
    fontFamily: {
      dm_serif: ["DM Serif Text", "sans-serif"],
      outfit: ["Outfit", "sans-serif"],
    },
    extend: {
      colors: {
        dark: "#3E3E3E",
        "dark-100": "#4F4F4F",
        "brand-red": "#E80000",
        "brand-yellow": "#FFC700",
        "brand-yellow-25": "#B19B85",
        "brand-yellow-50": "#9C8772",
        "brand-yellow-100": "#F1EEEC",
        "brand-orange": "#EC6500",
        "brand-gray": "#F1F1F1",
        "brand-gray-20": "#D1D1D1",
        "brand-gray-50": "#E0E0E0",
        "brand-gray-100": "#A3A3A3",
        "brand-gray-150": "#DBDBDB",
        "brand-gray-200": "#FAFAFA",
        "brand-gray-300": "#DDDDDD",
        "brand-gray-400": "#DADADA",
        "brand-gray-500": "#E6E6E6",
        "brand-gray-600": "#646464",
        "brand-gray-800": "#828282",
        "brand-gray-900": "#9E9E9E",
      },
      boxShadow: {
        "4xl": "0 8px 28px 0 rgba(0,0,0,0.07)",
      },
      backgroundImage: {
        g1: "linear-gradient(180deg, rgba(37, 37, 37, 0) 0%, #000000c4 100%)",
        g2: "linear-gradient(90deg, rgba(0, 0, 0, 0.61) 30.21%, rgba(0, 0, 0, 0.2) 100%)",
        g3: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
