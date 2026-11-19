/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          950: '#060608',
          900: '#0a0a0d',
          850: '#0f0f13',
          800: '#141419',
          750: '#1a1a21',
          700: '#22222b',
          600: '#32323e',
          500: '#525260',
          400: '#7e7e8f',
          300: '#abaabb',
          200: '#d5d5e0',
          100: '#eeeef4',
          50: '#f7f7fa',
        },
        lime: {
          accent: '#d4ff00',
          glow: 'rgba(212, 255, 0, 0.15)',
        },
        silver: {
          light: '#f1f5f9',
          metallic: '#cbd5e1',
          dark: '#64748b',
        },
      },
      fontFamily: {
        serif: ['"Italiana"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'cinematic': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '250': '250ms',
        '280': '280ms',
        '350': '350ms',
        '600': '600ms',
        '700': '700ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
