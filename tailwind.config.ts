import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0e27',
        foreground: '#e4e6eb',
        primary: '#00ff9d',
        secondary: '#00b8ff',
      },
      animation: {
        'glitch-skew': 'glitch-skew 4s infinite',
        'fadeInUp': 'fadeInUp 0.6s ease',
      },
      keyframes: {
        'glitch-skew': {
          '0%': { transform: 'skew(0deg)' },
          '10%': { transform: 'skew(10deg)' },
          '20%': { transform: 'skew(-10deg)' },
          '30%': { transform: 'skew(0deg)' },
          '100%': { transform: 'skew(0deg)' },
        },
        'fadeInUp': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
