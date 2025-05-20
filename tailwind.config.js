/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        "green": "#6e583a",
        "red": "#e89018",
        "secondary": "#f6efdd",
        "primary": "#d7c9b1"
      }
    },
  },
  plugins: [require("daisyui")
  ],
}

