/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'seattle': {
          50: '#f8f6f2',  // Light tan
          100: '#f1ede5',
          200: '#e3d9c9',
          300: '#d5c5ad',
          400: '#c7b191',
          500: '#b99d75',  // Medium tan
          600: '#a78959',
          700: '#856b3d',
          800: '#634d21',
          900: '#422f05',
        },
        'evergreen': {
          50: '#f0f5f0',
          100: '#e1ebe1',
          200: '#c3d7c3',
          300: '#a5c3a5',
          400: '#87af87',
          500: '#699b69',  // Medium green
          600: '#4b874b',
          700: '#2d732d',
          800: '#0f5f0f',
          900: '#004b00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 