/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    darkMode: 'media',
    colors: {
      "button": "#0072bc",
      "button-hover": "#0765a4",
      "outline-blue": "#38617c",
      "background": "#111",
      "card-bg": "#212121",
      "card-border": "#373737",
      "success": "#67b064",
      "danger": "#df6e5a",
      "icons-color": '#b7bdcb',
      "close-icon": "#676767",
      "white": '#ffffff',
      "task-color": "#313131"

    },
  },
  plugins: [],
}

