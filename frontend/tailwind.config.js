/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      desktop: "1440px",
      tablet: "768px",
      mobile: "360px",
    },
    extend: {
      colors: {
        "purple-100": "#FAF5FE",
        "purple-200": "#F6EEFE",
        "purple-300": "#E8E0F0",
        "purple-600": "#684397",
        "purple-700": "#4B267A",
        "purple-800": "#3B166A",
        "purple-900": "#230052",
        "violet-50": "#F3F4FC",
        "violet-70": "#ECEDF5",
        "violet-100": "#D4C7FD",
        "violet-200": "#B8A1FB",
        "violet-300": "#9B7BF9",
        "blue-200": "#F0F8FE",
        "blue-300": "#C2E7FF",
        "blue-400": "#91BFE1",
        "neutral-100": "#DBD7DE",
        "neutral-800": "#625E65",
        "white-100": "#FFFFFF",
        "white-200": "#F9F9F9",
        "green-500": "#43974B",
        "red-500": "#E46962",
      },
    },
  },
  plugins: [],
};
