/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "primary-background": "#0F1828", // Background color
        "primary-text": "#FFFFFF", // Text color
        "primary-button": "#375FFF", // Button color
      },
    },
  },
  // plugins: [],
};
