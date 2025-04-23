import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        'vazirmatn': ['Vazirmatn', 'sans-serif'],
      },
      height: {
        '15': '60px',
      },
    }
  },
  plugins: []
} satisfies Config 