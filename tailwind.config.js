/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // inter: ["Inter", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        // roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        calibri: ["Calibri", "sans-serif"],
        arial: ["Arial", "sans-serif"],
        "times-new-roman": ["Times New Roman", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
