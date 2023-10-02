import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato']
      },
      backgroundImage: {
        hero: "url('/hero.png')",
        heromd: "url('/hero-mobile.png')"
      }
    }
  },
  plugins: []
}
export default config
