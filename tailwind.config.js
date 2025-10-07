/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0f1115",
        light: "#f8f9fa",
        accent: "#38bdf8", // schönes Cyan
        // Farben inspiriert von deinem holografischen Foto
        holographic: {
          blue: "#4287f5",
          purple: "#8b5cf6", 
          pink: "#ec4899",
          cyan: "#06b6d4",
          indigo: "#6366f1",
          violet: "#8b5cf6",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
