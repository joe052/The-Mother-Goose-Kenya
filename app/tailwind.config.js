/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'footer': "url('/src/assets/images/image3.jpg')",
      },
    },
  },
  plugins: [],
};
