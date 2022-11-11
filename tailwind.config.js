/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
     "./screens/**/*.{js,jsx,ts,tsx}"
     
    ],
  theme: {
    extend: {
      colors: {
        t1: '#0B0B0D',
        t2: '#474A56',
        t3: '#929AAB',
        t4: '#D3D5FD'
      },
    },
  },
  plugins: [],
}
