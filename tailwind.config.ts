import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        ev: 'url("/ev-background.png")',
      },
      colors: {
        primary: "#912338",
        secondary: "#b18c62",
        tertiary: "#D9BF77",
        dark: {
          "200": "#0D0F10",
          "300": "#131619",
          "400": "#1A1D21",
          "500": "#363A3D",
          "600": "#76828D",
          "700": "#ABB8C4",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
