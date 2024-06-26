import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ghostWite: "var(--ghostWhite)",
        midnightBlack: "var(--midnightBlack)",
        slateGray: "var(--slateGray)"
      },
      fontFamily: {
        "PPNeueMontreal": "var(--PPNeueMontreal)"
      },
      transitionProperty: {
        "imageHover": " 0.2s ease",
        "linkHover": "#e30613 0.2s ease"
      }
    },
  },
  plugins: [],
};
export default config;
