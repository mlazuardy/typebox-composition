/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minWidth: {
        btn: "120px",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
