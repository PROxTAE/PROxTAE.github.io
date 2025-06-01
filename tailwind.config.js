import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-mitr)"],
        mono: ["var(--font-mono)"],
        mochiy: ["var(--font-mochiy)"],
      },
        colors: {
        darkbrown: '#2D200D', 
        primary:'#0068AD',
        secondary:"#FF7226",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;