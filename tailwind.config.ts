import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "0px", //320 px
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary_color: "#0B0B0D",
        secondary_color: {
          dark: "#0E0E11",
          light: "#14141A",
        },
        accent_color: {
          dark: "#1E1E27",
          light: "#FFD789",
        },
        tertiary_color: {
          dark: "#272423",
          light: "#D5EF9A",
        },
        neutral_color: "#202025",
      },
      fontSize:{
        "xs": "12px",
        "sm": "14px",
        "md": "16px",
        "lg": "18px",
        "xl": "20px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "48px",
        "5xl": "64px",
        "6xl": "96px",
        "7xl": "128px",
        "8xl": "256px",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
