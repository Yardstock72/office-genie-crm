import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'ui-monospace'],
      },
      colors: {
        brand: {
          ssr:  '#534AB7',
          rp:   '#0F6E56',
          gm:   '#854F0B',
          bq:   '#993C1D',
        }
      }
    },
  },
  plugins: [],
}
export default config
