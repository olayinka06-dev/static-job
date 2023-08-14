/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "main": "hsl(180, 29%, 50%)",
        "primary": "hsl(180, 52%, 96%)"
      }
    },
    container: {
      center: true,
      padding:  {
        DEFAULT: '20px',
        md: '50px'
      }
    },
  },
  plugins: [],
}
