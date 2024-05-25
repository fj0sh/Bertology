import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    colors:{
      'black': {100:'#0F0E0E',
                500: '#000000'},
      'orange' : {100:'#FF6000',
                  500: '#F24E1E'
                  },
      'brown' : '#FFE6C7',
      'grey' : '#D9D9D9',
      'white' : '#ffffff'
    }
  },
  plugins: [],
};
export default config;
