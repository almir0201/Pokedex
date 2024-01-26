/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      width: '100%',
      center: true
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
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
        sm: '0px -2px 0px 0px rgba(0, 0, 0, 0.18) inset'
      },
      borderRadius: {
        large: '40px',
        small: '11px'
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
