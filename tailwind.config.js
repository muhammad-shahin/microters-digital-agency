import keepPreset from 'keep-react/src/keep-preset.js';
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: { realway: 'Raleway, sans-serif' },
    screens: {
      xsm: '320px',
      // => @media (min-width: 320px) { ... }

      sm: '425px',
      // => @media (min-width: 425px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        punch: {
          50: '#fff1f1',
          100: '#ffdfdf',
          200: '#ffc5c5',
          300: '#ff9d9d',
          400: '#ff6565',
          500: '#fe3535',
          600: '#e01212',
          700: '#c70e0e',
          800: '#a41010',
          900: '#881414',
          950: '#4a0505',
        },
        secondary: '#00005A',
        offWhite: '#F3F9F3',
      },
    },
  },
  plugins: [keepPreset],
};
