/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#3b8bf7',
          500: '#1a7af8',
          600: '#0069ea', // Official SoSparkDesigns Brand Blue (sampled from logo)
          700: '#0052c2',
          800: '#003d99',
          900: '#002970',
          950: '#00194d',
        },
        obsidian: {
          DEFAULT: '#09090b',
          light: '#0f172a',
          muted: '#1e293b',
        },
        surface: {
          canvas: '#ffffff',
          subtle: '#f8fafc',
          card: '#ffffff',
          border: 'rgba(0, 0, 0, 0.08)',
          hover: '#f1f5f9',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 10px 30px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'glass-lg': '0 20px 45px rgba(0, 0, 0, 0.07), 0 4px 12px rgba(0, 0, 0, 0.03)',
        'blue-glow': '0 14px 36px rgba(37, 99, 235, 0.15), 0 2px 8px rgba(37, 99, 235, 0.08)',
      },
    },
  },
  plugins: [],
};
