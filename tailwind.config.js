/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontfamily: {
      body: ["Inter"],
    },
    screens: {
      xs: "450px",
      xl: "1700px",
    },
    colors: {
      button: "#fd53c0",
    },
  },
};
export const plugins = [];
