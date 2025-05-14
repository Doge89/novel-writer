import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          50: '#FBEEF2',
          100: '#F7DEE6',
          200: '#F4CDD7',
          300: '#F0BCC9',
          400: '#E89BAF',
          500: '#DD6986',
          600: '#D1345B',
          700: '#A62646',
          800: '#741A31',
          900: '#430F1C',
          950: '#110407'
        },
        complementary: {
          50: '#F5EBFF',
          100: '#E0C2FF',
          200: '#C285FF',
          300: '#AD5CFF',
          400: '#A347FF',
          500: '#7F00FF',
          600: '#6600CC',
          700: '#5200A3',
          800: '#3D007A',
          900: '#1F003D',
          950: '#0A0014',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
