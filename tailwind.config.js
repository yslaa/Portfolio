/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  prefix: "",
  darkMode: "class",
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      xxs: "320px",
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  daisyui: {
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: false,
    themes: [
      {
        mytheme: {
          "primary": "#bcf9a9",
          "secondary": "#95a6f9",
          "accent": "#efb1ec",
          "neutral": "#161b27",
          "base-100": "#f5f7fa",
          "info": "#aedfea",
          "success": "#149487",
          "warning": "#eeab5d",
          "error": "#f54d74",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
  ],
};