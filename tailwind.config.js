/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  addUtilities: {
    '.hide-scrollbar': {
      'scrollbar-width': 'none', /* Firefox */
      '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
    },
    '.hide-scrollbar::-webkit-scrollbar': {
      'display': 'none', /* Chrome, Safari, Opera */
    },
  }
}