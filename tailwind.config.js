/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:["Vazir"],
      }
    },
  },
  plugins: [],
}

