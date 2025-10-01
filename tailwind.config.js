/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        blue: {
          600: '#007BFF',
        },
      },
      fontFamily: {
        gugi: ["'Gugi'", "cursive"],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};