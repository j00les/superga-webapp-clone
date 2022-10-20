/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'Inter var, sans-serif',
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['dark'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
};
