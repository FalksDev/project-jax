/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        DEFAULT: "rgb(var(--color-primary))",
        light: "rgb(var(--color-primary-light))",
        dark: "rgb(var(--color-primary-dark))",
        hover: "rgb(var(--color-primary) / 0.6)",
        'dark-hover': "rgb(var(--color-primary-dark) / 0.6)",
        'light-hover': "rgb(var(--color-primary-light) / 0.6)"
      },
      background: {
        root: "#1e293b",
        DEFAULT: "#475569"
      },
      normal: {
        DEFAULT: "#e2e8f0"
      }
    },
  },
  plugins: [],
}

