/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        surface: "#1E293B",
        accent: "#3B82F6",
        accentSecondary: "#8B5CF6",
        textPrimary: "#FFFFFF",
        textSecondary: "#94A3B8",
      },
      animation: {
        gradient: "gradient 8s ease infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
}