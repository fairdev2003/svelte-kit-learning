/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      theme: {
        screens: {
          'sm': '576px',
          // => @media (min-width: 576px) { ... }
    
          'md': '960px',
          // => @media (min-width: 960px) { ... }
    
          'lg': '1440px',
          // => @media (min-width: 1440px) { ... }
        },
      }
    }
  },
  plugins: []
};