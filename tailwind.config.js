/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "almost-white":"#fafafa",
        "medium-gray":"#696969",
        "almost-black":"#141414"
      },
      fontFamily:{
        epilogue : ["Epilogue", "sans-serif"]
      }
    },
  },
  plugins: [],
}

