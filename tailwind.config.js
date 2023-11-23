/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        test1: {
          '0%': {opacity: '.55'},
          '100%': {opacity: '.15'},
        }
      },
      animation: {
        'glow':'test1 20s alternate infinite',
      },
    },
  },
  plugins: [],
}

