/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      width: '100%',
      center: true
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '23px',
      xl: '25px'
    },
    extend: {
      width: {
        lg: '30px'
      },
      height: {
        xs: '6px',
        md: '22px'
      },
      colors: {
        primary: '#F2B807',
        second: '#F28F16',
        third: '#F5DB13',
        danger: '#D93E30',
        gray: '#F6F7F9',
        dark: '#212121',
        grass: '#73D677',
        poison: '#07D6F2'
      },
      fontFamily: {
        sanspro: 'Source Sans Pro',
        karla: 'Karla',
        roboto: 'Roboto'
      },
      boxShadow: {
        sm: '0px -2px 0px 0px rgba(0, 0, 0, 0.18) inset',
        md: '2px 2px 2px 0px #2121211A',
        lg: '4px 4px 24px -24px rgba(1, 17, 38, 0.20)'
      },
      borderRadius: {
        xxl: '40px',
        'header-item-bottom': '0 0 16px 16px'
      },
      inset: {
        large: 'calc(50% - 12px)'
      },
      borderWidth: {
        3: '3px'
      },
      transformOrigin: {
        1: '1px'
      }
    }
  },
  plugins: []
};
