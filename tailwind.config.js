/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      backgroundImage:{
        loginImage: 'url(/src/assets/bg-image-login.png)',
        wave: 'url(/src/assets/bg-wave.png)'
      },

      colors:{
        abem:{
          100: '#bcb0cf',
          400: '#5f4781',
          900: '#331f54'
        }
      },
    },
  },
  plugins: [],
}
