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
      colors: {
        theme: {
          DEFAULT: "#20aea5",
          hover: "#57b957",
        },
      },
      maxHeight: {
        submenu: "1000px",
      },
      transitionProperty: {
        "max-height-opacity": "max-height, opacity",
      },
    },
  },
  plugins: [],
};
export default config;
