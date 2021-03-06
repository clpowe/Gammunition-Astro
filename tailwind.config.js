module.exports = {
  purge: {
    enabled: true,
    content: [
      './public/**/*.html',
      './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
    ],
    options: {
      keyframes: true,
      fontFace: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        yellow: '2px solid #ffeb3b',
      },
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
  plugins: [require('@tailwindcss/forms')],
};
