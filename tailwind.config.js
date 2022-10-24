/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*,{html,js,vue,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', ],
        serif: ['ui-serif', 'Georgia', ],
        display: ['Oswald', ],
        body: ['"Open Sans"', ],
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
