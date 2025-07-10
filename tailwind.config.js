/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B3C53",
        "primary-light": "#456882",
        background: "#F9F3EF",
      },
      fontFamily: {
        title: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "primary-light": "0 4px 12px 0 rgba(69, 104, 130, 0.3)",
      },
    },
  },
  plugins: [],
};
