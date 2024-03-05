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
    },
    colors: {
      'lg-white-1': '#FFFFFF',
      'lg-white-2': '#F2F2F2',
      'lg-white-3': '#E6E6E6',
      'lg-white-4': '#D9D9D9',
      'lg-gray-1': '#666666',
      'lg-gray-2': '#4D4D4D',
      'lg-gray-3': '#262626',
      'lg-gray-4': '#0E0E0C',
      'lg-beige-1': '#FAFAF9',
      'lg-beige-2': '#E8E8E3',
      'lg-beige-3': '#DDDDD5',
      'lg-beige-4': '#D1D1C7',
      'lg-green-1': '#AEAE9D',
      'lg-green-2': '#8C8C73',
    },
    fontFamily: {
      sans: ['"Cabinet Grotesk"'],
      heading: ['Satoshi'],
    },
  },
  plugins: [],
}
export default config
