/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '200px', 'max': '480px'},//mobile
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '481px', 'max': '768px'},//tablet
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '769px', 'max': '1024px'},//laptop
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'min': '1025px', 'max': '1200px'},//desktop
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': {'min': '1201px'},//large display
        // => @media (min-width: 1536px) { ... }
      },
    },
    fontFamily:{
      sans:['Wix Madefor Display', 'sans-serif'],
    }
  },
  plugins: [],
}

