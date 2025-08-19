/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0f1115",
        light: "#f8f9fa",
        accent: "#38bdf8", // schönes Cyan
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
