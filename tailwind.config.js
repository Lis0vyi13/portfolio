/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}', './src/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        main: '#050816',
        secondary: 'rgb(170, 166, 195)',
        violet: '#915EFF',
        tertiary: 'rgb(21,16,48)',
        'main-100': 'rgb(16, 13, 37)',
      },
    },
    screens: {
      xxs: '400px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      lgXl: '1110px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};

