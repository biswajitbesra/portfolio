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
            "cus-4.5": "4.5rem",
            "cus-6": "6rem",
            "cus-7.5": "7.5rem",
            "cus-35": "35rem",
        },
        textColor:{
            "cus-yellow": "#ffb100"
        },
        width:{
            "project-img-20.25": "20.25rem",
            "project-img-18.25": "18.25rem",
            "project-img-16.25": "16.25rem",
            "project-img-15.25": "15.25rem",
            "project-img-14.25": "14.25rem",
        }
      },
    },
    plugins: [],
  }