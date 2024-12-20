import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bricolage: ["Bricolage Grotesque", "sans-serif"],
        sans: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        'primary': '#FABF1A',
        'primary-hover': '#D9A617',
        'secondary': '#3A55A5',
        'secondary-hover': '#283B73',
        'background-dark': '#282C6E',
        'tertiary': '#EF4426',
        'textColor': '#10121F',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite"
      },
      keyframes: {
        "loop-scroll": {
          from:  {transform : "translateX(0)"},
          to:  {transform : "translateX(-100%)"},
        },
      },
    },
  },
  plugins: [],
};
export default config;
