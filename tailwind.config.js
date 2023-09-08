/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primerColor: "#4A1D96",
        segundoColor: "#9CA3AF"
        
      }
    },
  },
  plugins: [],
}

