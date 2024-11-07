/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'md': ' 35px 60px -15px rgba(255, 255, 255, 0.3)',
      },
    }
    },
  plugins: [],
}

