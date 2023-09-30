/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Markazi Text', "Open Sans" ,'sans-serif'],
        'markazi-text': ['Markazi Text'],
        'karla': ['karla'],
        'roboto':['Roboto']
      },
    }
  },
  plugins: [],
}