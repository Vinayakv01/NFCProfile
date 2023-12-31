/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
  extend: {

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1080 px',
      'xl': '1440px',
      '2xl': '1441px',
    },

    fontFamily:{
      Quicksand:['Quicksand', 'sans-serif'],
      Montserrat:['Montserrat', 'sans-serif'],
      Inter:['Inter', 'sans-serif'],
      Poppins:['Poppins', 'sans-serif'],

    },
    
    fontSize: {
      xs: '8px',
      sm: '12px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      'st': '6px',
    },

    width: {
      '1400': '1400px',
      '1100': '1100px',
      '1000': '1000px',
      '900': '900px',
      '800': '800px',
      '701': '701px',
      '702': '702px',
      '703': '703px',
      '704': '704px',
      '705': '705px',
      '706': '706px',
      '707': '707px',
      '708': '708px',
      '709': '709px',
      '710': '710px',
      '711': '711px',
      '712': '712px',
      '713': '713px',
      '714': '714px',
      '715': '715px',
      '716': '716px',
      '717': '717px',
      '718': '718px',
      '719': '719px',
      '720': '720px',
      '730': '730px',
      '700': '700px',
      '500': '500px',
      '550': '550px',
      '200': '200px',
      '300': '300px',
      '340': '340px',
      '150': '150px',
      '100': '100px',
      '75': '75px',
      '250':'250px',
      '50': '50px',
      '350': '350px',
      '1920': '1920px'
    },
    height: {
      '600': '600px',
      '520': '520px',
      '250':'250px',
      '75': '75px',
      '50': '50px',
      '550': '550px',
      '500': '500px',
      '150': '150px',
      '100': '100px',
      '200': '200px',
      '450': '450px',
      '440': '440px',
      '701': '701px',
      '702': '702px',
      '703': '703px',
      '704': '704px',
      '705': '705px',
      '706': '706px',
      '707': '707px',
      '708': '708px',
      '709': '709px',
      '710': '710px',
      '711': '711px',
      '712': '712px',
      '713': '713px',
      '714': '714px',
      '715': '715px',
      '716': '716px',
      '717': '717px',
      '718': '718px',
      '719': '719px',
      '720': '720px',
      '700': '700px',
      '150': '150px',
      '1080':'1080px'
    },
  },
},
plugins: [],
}