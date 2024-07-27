/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#20222f',
          200: '#1d1f29',
        },
        darkslategray: '#252b42',
        steelblue: '#8c98c6',
        crimson: {
          100: '#dc414c',
          200: '#c4032b',
        },
        mediumseagreen: '#1eb589',
        cornflowerblue: '#1da1f2',
        dodgerblue: '#178ff5',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '8xs': '5px',
        xl: '20px',
      },
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      lgi: '19px',
      '3xl': '22px',
      '7xl': '26px',
      '9xl': '28px',
      '13xl': '32px',
      '15xl': '34px',
      '26xl': '45px',
      '37xl': '56px',
    },
    screens: {
      sm: '450px',
      md: '750px',
      lg: '1025px',
      xl: '1100px',
    },
  },
  corePlugins: {
    preflight: false,
  },
};
