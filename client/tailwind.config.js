/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/components/*.{js,ts,jsx,tsx}", "./src/user/**/*.{js,ts,jsx,tsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
   
     
    },
  },
  plugins: [

        require('flowbite/plugin'),
    ],
}};