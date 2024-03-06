/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%', // 16:9 aspect ratio
      },
    },
  },
  plugins: [],
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
}

