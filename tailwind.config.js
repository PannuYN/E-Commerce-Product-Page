/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',  // Small screens
      md: '768px',  // Medium screens
      lg: '1024px', // Large screens
      xl: '1280px', // Extra large screens
      '2xl': '1536px', // Very large screens
    },
    extend: {
      fontFamily: {
        kumbh: ['"Kumbh Sans"', 'sans-serif'],
      },
      colors: {
        customOrange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',
        darkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(219, 9%, 45%)',
        grayishBlue: 'hsl(220, 14%, 75%)',
        lightGrayishBlue: 'hsl(223, 64%, 98%)',
        lightBoxBlack: 'hsla(0, 0%, 0%, 0.75)'
      },
      cursor: {
        smallFist: 'url("./images/small-fist.cur"), pointer',
      }
    },
  },
  plugins: [],
};

