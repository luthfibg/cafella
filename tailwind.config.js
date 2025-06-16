/** @type {import('tailwindcss').Config} */

import { colors, heroui } from "@heroui/theme";

module.exports = {
  content: ["./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          50:  '#f5f1ee',
          100: '#e8e0da',
          200: '#d4c1b5',
          300: '#bb9b89',
          400: '#9e755e',
          500: '#815940',
          600: '#6F4E37', // base color
          700: '#5a3f2c',
          800: '#4a3324',
          900: '#3b281d',
          950: '#23140d',
        },
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};