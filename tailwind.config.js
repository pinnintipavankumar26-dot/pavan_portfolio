/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050a14",
        navy: {
          900: "#071426",
          800: "#0b1c36",
          700: "#102648"
        },
        charcoal: "#0a0a0a",
        accent: {
          blue: "#3b82f6",
          cyan: "#00f0ff",
          sky: "#38bdf8",
          purple: "#9333ea"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px rgba(0, 240, 255, 0.2)",
        "glow-blue": "0 0 25px rgba(59, 130, 246, 0.25)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
      },
      backdropBlur: {
        xs: "2px"
      }
    },
  },
  plugins: [],
}
