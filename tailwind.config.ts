import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1E2A4A",
          dark: "#141C33",
          light: "#2A3A63",
        },
        ice: {
          DEFAULT: "#A8DDE8",
          bright: "#D4F1F7",
          deep: "#5FB8CC",
        },
        flame: {
          DEFAULT: "#F07A2B",
          deep: "#D9601A",
          light: "#FFA45C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "0.55", filter: "blur(0px)" },
          "50%": { opacity: "1", filter: "blur(1px)" },
        },
        sweep: {
          "0%": { strokeDashoffset: "1600" },
          "100%": { strokeDashoffset: "0" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(240,122,43,0.55)" },
          "50%": { boxShadow: "0 0 24px 6px rgba(240,122,43,0.45)" },
        },
      },
      animation: {
        shimmer: "shimmer 5s ease-in-out infinite",
        sweep: "sweep 9s linear infinite",
        "glow-pulse": "glowPulse 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
