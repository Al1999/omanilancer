/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '360px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      backgroundImage : {
        'hero' : "url(../src/assets/Dust-Textures-1.jpg)",
        },
    },

    fontFamily: {
      Jali_med:["Jali_med"],
      almushaf:["almushaf"],
      falak_b:["falak_b"],
      falak_r:["falak_r"],
      ubuntu:["ubuntu"],
      quickR:["quicksandR"],
      quickB:["quicksandB"]
    }
  },
  plugins: [require("daisyui")],
}