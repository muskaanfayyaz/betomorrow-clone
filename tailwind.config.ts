import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',

    // Enable Tailwind to keep `underline` and `text-white` used in raw HTML
    {
      raw: 'underline text-white',
      extension: 'html',
    },
  ],
  theme: {
    extend: {
      screens: {
        'small': '375px',
        'custom-lg': '1024px',
        '3xl': '2560px',
      },
      maxWidth: {
        'small' : '425px',
        'custom-lg': '1024px',
        '3xl': '3840px',
      },
      fontFamily: {
        parabole: ['Parabole', 'sans-serif'],
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        slide: 'slide 60s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
