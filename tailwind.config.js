/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      paleWhite: '#F7EBCF',
      paleBlue: '#8BCCC4',
      dark: '#141311',
    },
    fontFamily: {
      ubuntuMono: ["Ubuntu Mono", "monospace"]
    },
  },
  plugins: [],
};
