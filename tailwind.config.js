import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
    },
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["winter"],
  },
};

export default config;
