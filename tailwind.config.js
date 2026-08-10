/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#080B12",
          50: "#F4F5F7",
          100: "#E5E8ED",
          200: "#B9C2D0",
          300: "#8B96A8",
          400: "#5C6980",
          500: "#3A4459",
          600: "#242C3D",
          700: "#171D2B",
          800: "#111726",
          900: "#0B101B",
          950: "#080B12",
        },
        panel: "#0E1420",
        border: "#1C2434",
        amber: {
          DEFAULT: "#E3A857",
          soft: "#F2C888",
          dim: "#8A6A3B",
        },
        signal: "#3FBF8F",
      },
      fontFamily: {
        mono: ["'IBM Plex Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(227,168,87,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(227,168,87,0.06) 1px, transparent 1px)",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
