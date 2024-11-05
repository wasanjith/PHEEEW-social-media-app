import daisyui from "daisyui";
import daisyUIThemes from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],

  daisyui: {
    themes: [
      "light",
      {
        black: {
          ...daisyUIThemes["black"], // Inherit the original 'black' theme settings
          primary: "rgb(29, 155, 240)", // Keeping this as per your initial setup
          secondary: "rgb(24, 24, 24)", // Keeping this as per your initial setup
          accent: "#831843", // Adding the new color code #831843 to the theme
          neutral: "#1A1A1A", // You can add more custom colors if needed
          "base-100": "#000000", // You can adjust the background or base color as well
        },
      },
    ],
  },
};
