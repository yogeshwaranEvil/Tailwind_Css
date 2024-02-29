/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      cursor: {
        default:
          "url(https://img.icons8.com/color/35/000000/cursor--v1.png), default",
        pointer:
          "url(https://img.icons8.com/color/45/000000/cursor--v1.png), pointer",
      },
    },
  },
  plugins: [],
};
