module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    debugScreens: {
    position: ['top', 'left'],
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    ],
}
