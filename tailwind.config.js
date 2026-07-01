/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body:    ['Sora', 'sans-serif'],
      },
      colors: {
        gold:     '#d4af37',
        'gold-soft': '#f1d27a',
        bull:     '#1ed9a7',
        bear:     '#ff5c6c',
        panel:    '#131a24',
        'bg-base':'#0a0e14',
        'bg-soft':'#0f141c',
      },
      animation: {
        'pulse-ring':  'pulse-ring 2.2s ease-out infinite',
        'float':       'float 5s ease-in-out infinite',
        'float2':      'float 5s ease-in-out 1s infinite',
        'ticker':      'ticker 28s linear infinite',
        'hero-rise':   'hero-rise 1s cubic-bezier(.16,1,.3,1) both',
        'hero-rise-d': 'hero-rise 1.1s cubic-bezier(.16,1,.3,1) .15s both',
        'spin-slow':   'spin 8s linear infinite',
        'progress':    'none',
      },
      keyframes: {
        'pulse-ring': {
          '0%':   { transform:'scale(0.9)', opacity:'0.8' },
          '100%': { transform:'scale(1.5)', opacity:'0'   },
        },
        float: {
          '0%,100%': { transform:'translateY(0)'    },
          '50%':     { transform:'translateY(-12px)' },
        },
        ticker: {
          from: { transform:'translateX(0)'    },
          to:   { transform:'translateX(-50%)' },
        },
        'hero-rise': {
          from: { opacity:'0', transform:'translateY(30px)' },
          to:   { opacity:'1', transform:'translateY(0)'    },
        },
      },
      backgroundImage: {
        'gold-grad':  'linear-gradient(135deg,#f1d27a,#d4af37)',
        'bull-grad':  'linear-gradient(135deg,#7df3d4,#1ed9a7)',
        'dark-panel': 'linear-gradient(160deg,#1a2230,#0d1219 70%)',
      },
      boxShadow: {
        'gold': '0 14px 40px -12px rgba(212,175,55,.6)',
        'bull': '0 14px 40px -12px rgba(30,217,167,.6)',
        'yt':   '0 14px 40px -12px rgba(230,46,46,.6)',
      },
    },
  },
  plugins: [],
}
