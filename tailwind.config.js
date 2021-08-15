const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ffeb3b',
          light: '#fff9c4',
        },
        accent: {
          DEFAULT: '#fbc02d',
        },
        secondary: {
          light: '#bdbdbd',
          DEFAULT: '#757575',
          dark: '#212121',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
      },
      fontFamily: {
        oswald: "'Oswald', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
