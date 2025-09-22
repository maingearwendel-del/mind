/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        'sucks': '10px',
      }, 
      scale: {
        '110': '1.1',
        '124': '1.24',
        '123': '1.23',
        '122': '1.22',
        '121': '1.21',
        '120': '1.20',
        '115': '1.15',
        '118': '1.18',
        '130': '1.3',
        '140': '1.4',
        '150': '1.5',
        '175': '1.75',
        '200': '2.0',
      }
    },
  },
  plugins: [],
};
