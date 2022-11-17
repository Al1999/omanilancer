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
        'hero' : "url(../src/assets/rm218-bb-07.jpg)",
        },
    },

    fontFamily: {
      Jali_med:["Jali_med"],
      almushaf:["almushaf"],
      falak_b:["falak_b"],
      falak_r:["falak_r"],
      ubuntu:["ubuntu"],
      quickR:["quicksandR"],
      quickB:["quicksandB"],
      besan:["besan"],
      amonos:["amonosdisplay-regular"],
      nord:["Nord-Black"],
      bjorn:["Bjorn Regular"],
      alcova:["Alcova Pro"],
      quirk:["Quirk"],
      nordr:["Nord-Book"],
      geomatik:["Geomatik"]
    }
  },
  plugins: [require("daisyui")],
}