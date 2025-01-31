import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./@/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      screens: {
        tablet: "768px",
      },
      colors: {
        orangePrimary: "#F96C2F",
        black: "#000000",
        white: "#DADADA",
        grey: "#252531",
        background: "#080808",
        orangeRed: "#FF661F",
        ninjaBlack: "#1a1a1a",
        asphalt: "#333333",
      },
    },
  },
  plugins: [],
};
export default config;
