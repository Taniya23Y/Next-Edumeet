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
          "100": "#05091D",
          DEFAULT: "#1D1D1D",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
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
        "22": "88px",
        "100": "100px",
        "330": "330px",
        "388": "388px",
        "400": "400px",
        "440": "440px",
        "512": "512px",
        "640": "640px",
        "960": "960px",
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
      },
      zIndex: {
        "1": "1",
        "2": "2",
        "4": "4",
      },
      lineHeight: {
        "12": "48px",
      },
      borderRadius: {
        "14": "14px",
        "20": "20px",
        "40": "40px",
        half: "50%",
        "7xl": "40px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      flex: {
        "50": "0 0 50%",
        "100": "0 0 100%",
        "256": "0 0 256px",
        "280": "0 0 280px",
        "300": "0 0 300px",
        "320": "1px 0 320px",
        "540": "0 0 540px",
      },
      keyframes: {
        "border-shine": {
          "0%": {
            borderColor: "yellow transparent transparent transparent",
          },
          "25%": {
            borderColor: "transparent yellow transparent transparent",
          },
          "50%": {
            borderColor: "transparent transparent yellow transparent",
          },
          "75%": {
            borderColor: "transparent transparent transparent yellow",
          },
          "100%": {
            borderColor: "yellow transparent transparent transparent",
          },
        },
      },
      animation: {
        "border-shine": "border-shine 2.5s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
