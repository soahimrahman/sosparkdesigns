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
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb', // Primary brand blue
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
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
