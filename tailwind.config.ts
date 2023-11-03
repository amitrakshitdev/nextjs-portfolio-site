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
        dwhite:{
          50: "#fdfeff",
          200: "#a9adb8",
          400: "rgb(169, 173, 184)"
        },
        daccent: {
          100: "#fec544"
        },
        dblack: {
          50: '#070D1B',
          100: "#0a101e"
        }
      }
    },
    textShadow:{
      sm: "0 1px 2px var(--tw-shadow-color)"
    }, 
  },
  plugins: [],
}
export default config
