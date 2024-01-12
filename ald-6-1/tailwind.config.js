/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#9282C5",
          "primary-focus": "#1965B6",
          "neutral": "#2A609A",
          "neutral-focus": "white",
          "dark-accent": "#D53C41"
          
        },
      },
    ],
},
  theme: {
    extend: {
      colors: {
        primary: "#9282C5",
        "primary-focus": "#1965B6",
        neutral: "#2A609A",
        "neutral-focus": "white",
        "dark-accent": "#845F91",
        "light-accent": "#979C75"
      },
      
    },
  },
  darkMode: "class",
  plugins: [require("daisyui"),nextui()],
  
}