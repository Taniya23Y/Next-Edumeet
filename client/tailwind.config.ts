import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FFB400",
        p3: "#C8EA80",
        p5: "#FFFFFF",
        black: {
          DEFAULT: "#1D1D1D",
          100: "#05091D",
        },
      },
      fontFamily: {
        Inter: ["var(--font-Inter)"],
        Sans: ["var(--font-Sans)"],
        Poppins: ["var(--font-Poppins)"],
        Josefin_Sans: ["var(--font-Josefin_Sans)"],
      },
      screens: {
        "1000px": "1000px",
        "1100px": "1100px",
        "1200px": "1200px",
        "1300px": "1300px",
        "1500px": "1500px",
        "800px": "800px",
        "400px": "400px",
      },
      spacing: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "3/20": "15%",
        "7/20": "35%",
        "9/20": "45%",
        "11/20": "55%",
        "13/20": "65%",
        "15/20": "75%",
        "17/20": "85%",
        "19/20": "95%",
        22: "88px",
        100: "100px",
        512: "512px",
        330: "330px",
        388: "388px",
        400: "400px",
        440: "440px",
        640: "640px",
        960: "960px",
      },
      zIndex: {
        1: "1",
        2: "2",
        4: "4",
      },
      lineHeight: {
        12: "48px",
      },
      borderRadius: {
        14: "14px",
        20: "20px",
        40: "40px",
        half: "50%",
        "7xl": "40px",
      },
      flex: {
        50: "0 0 50%",
        320: "1px 0 320px",
        300: "0 0 300px",
        540: "0 0 540px",
        280: "0 0 280px",
        256: "0 0 256px",
        100: "0 0 100%",
      },
      keyframes: {
        "border-shine": {
          "0%": { borderColor: "yellow transparent transparent transparent" },
          "25%": { borderColor: "transparent yellow transparent transparent" },
          "50%": { borderColor: "transparent transparent yellow transparent" },
          "75%": { borderColor: "transparent transparent transparent yellow" },
          "100%": { borderColor: "yellow transparent transparent transparent" },
        },
      },
      animation: {
        "border-shine": "border-shine 2.5s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
