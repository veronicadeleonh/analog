/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['IBM Plex Sans', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}

