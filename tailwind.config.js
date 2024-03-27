/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '1024px',
      // => @media (min-width: 768px) { ... }

      lg: '1280px',
      // => @media (min-width: 1024px) { ... }

<<<<<<< HEAD
      xl: '1536px',
=======
      xl: '1536px'
>>>>>>> ce8676969e6c5fb8edf19426e04cd81b1d2e5e1c
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      width: '100%',
      center: true
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '18px',
      lg: '23px',
      xl: '25px',
      '2xl': '35px',
      '3xl': '42px',
      '4xl': '44px',
      '5xl': '48px',
      '6xl': '62px',
      '7xl': '72px'
    },
    extend: {
      spacing: {
        '2px': '2px'
      },
      width: {
        xxl: '135px'
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
        success: '#73D677',
        poison: '#07D6F2',
        lightgray: '#F2F2F2',
        graySecond: '#F5F5F5',
        gold: '#F2CB07',
        darkGray: '#4B4B4B'
      },
      fontFamily: {
        sanspro: 'Source Sans Pro',
        karla: 'Karla',
        roboto: 'Roboto'
      },
      boxShadow: {
        xs: '4px 4px 4px 0px #2121211A',
        '2xs': '0px -9px 0px 0px #0000002E inset',
        sm: '0px -2px 0px 0px rgba(0, 0, 0, 0.18) inset',
        md: '2px 2px 2px 0px #2121211A',
        lg: '4px 4px 24px -24px rgba(1, 17, 38, 0.20)',
        xl: '4px 4px 8px 0px #011C4033',
        '2xl': '0px 4px 16px 0px #011C4033',
        '7xl': '0 0 0 8000px rgba(0, 0, 0, 0.6)'
      },
      borderRadius: {
        xxl: '40px'
      },
      inset: {
        large: 'calc(50% - 12px)'
      },
      borderWidth: {
        3: '3px'
      },
      lineHeight: {
        '7xl': '84px'
      },
      transformOrigin: {
        1: '1px'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
