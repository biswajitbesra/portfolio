/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundColor:{
            "cus-yellow": "#ffb100"
        },
        height:{
            "cus-4.5": "4.5rem"
        },
        textColor:{
            "cus-yellow": "#ffb100"
        }
      },
    },
    plugins: [],
  }