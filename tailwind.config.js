/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headerSM: "url('/pattern-bg-mobile.png')",
        headerLG: "url('/pattern-bg-desktop.png')",
      },
    },
  },
  plugins: [],
};
