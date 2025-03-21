/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "10px",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1200px",
        xxl: "1280px",
      },
    },
    extend: {},
  },
  plugins: [],
}

