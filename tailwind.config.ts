import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'background': '#faf9f9',
        'card': '#f2f1f1',
        'input': '#edecec',
        'button': '#e6e5e5',
        'hover': '#d7d5d5',
        'label': '#8c8585',
        'text': '#564f4c',
        'subtitle': '#3f3937',
        'title': '#262220',
        'purple-dark': '#4b2894',
        'purple': '#7f46f7',
        'purple-light': '#ebe5f9',
        'yellow-dark': '#c47e16',
        'yellow': '#dbac2b',
        'yellow-light': '#f0e8c9',
      },
      fontFamily: {
        'Baloo': ['Baloo', 'cursive'],
        'Roboto': ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        'fill-17': 'repeat(auto-fill, 17rem)',
      },
      gridTemplateRows: {
        '4-21': 'repeat(4, 21rem)',
      },
    },
  },
  plugins: [],
}
export default config
