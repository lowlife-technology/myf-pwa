/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      appearance: ['hover', 'focus'],
      colors: {
        brand: {
          grey1: '#E9E6E6',
          grey2: '#C3C0C0',
          grey3: '#464646'
        },
        grey: {
          1: '#E9E6E6',
          2: '#C3C0C0',
          3: '#464646'
        },
        red: {
          1: '#FEA3A3'
        },
        lilac: {
          1: '#CBB2EA'
        },
        blue: {
          1: '#88B2C9'
        },
        jade: {
          1: '#C1E1C1'
        }
      }
    },
    fontSize: {
      xs: ['10px', '15px'],
      sm: ['12px', '18px'],
      ms: ['14px', '20px'],
      md: ['16px', '22px'],
      ml: ['20px', '27px'],
      lg: ['24px', '30px'],
      xl: ['28px', '30px']
    },

    animation: {
      pushPull: 'pushPull 1000ms ease-in-out'
    },

    keyframes: {
      pushPull: {
        ' 0%, 100%': {
          boxShadow: '0 4px 3px 0px #C3C0C0, 0px -3px 2px #ffffff'
        },
        '50%': {
          boxShadow: 'inset 0 4px 3px 0px #C3C0C0,inset 0px -3px 2px #ffffff'
        }
      }
    },

    boxShadow: {
      inner: 'inset 0px 6px 6px #C3C0C0, inset 0px -6px 6px #ffffff',
      button: '0 4px 3px 0px #C3C0C0, 0px -3px 2px #ffffff'
    }
  },
  plugins: []
};
