import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F1E8',
        'cream-alt': '#EDE8DE',
        'warm-white': '#FDFBF7',
        charcoal: '#171720',
        'charcoal-2': '#1F1E2A',
        navy: '#0E2050',
        'navy-mid': '#162B6A',
        orange: '#E8581A',
        'orange-dim': 'rgba(232,88,26,0.10)',
        'orange-glow': 'rgba(232,88,26,0.25)',
        green: '#10b981',
        'text-1': '#171720',
        'text-2': '#6E6A7C',
        'text-3': '#A8A4B4',
        'dk-text-1': '#F4F0E8',
        'dk-text-2': 'rgba(244,240,232,0.58)',
        'dk-text-3': 'rgba(244,240,232,0.30)',
      },
      borderRadius: {
        card: '16px',
        footer: '24px',
      },
      fontFamily: {
        head: ['var(--font-head)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
