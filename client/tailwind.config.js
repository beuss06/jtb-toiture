/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brick: {
          DEFAULT: '#b5341c',
          dark: '#8a2410',
          light: '#d4543c',
        },
        slate: {
          DEFAULT: '#2c3340',
          light: '#3d4556',
        },
        cream: {
          DEFAULT: '#f7f3ee',
          dark: '#ede8e0',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#ddc06e',
        },
        footer: '#1a1f2b',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Outfit', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-up-delay': 'fadeUp 0.7s ease-out 0.2s forwards',
        'hero-zoom': 'heroZoom 20s ease alternate infinite',
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        heroZoom: {
          from: { transform: 'scale(1.05)' },
          to: { transform: 'scale(1.12)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '1', height: '40px' },
          '50%': { opacity: '0.3', height: '20px' },
        },
      },
    },
  },
  plugins: [],
}
