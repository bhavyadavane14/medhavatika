/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Poppins', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#1a56a8',
          'blue-light': '#2d6fd4',
          'blue-dark': '#0d3b7a',
          green: '#3a8c3f',
          'green-light': '#4caf50',
          'green-dark': '#2a6b2e',
          orange: '#f5a623',
          'orange-light': '#f7bc57',
          purple: '#6e3ab7',
          teal: '#009688',
          red: '#e53935',
          pink: '#e91e8c',
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#1a56a8',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#3a8c3f',
          700: '#15803d',
        },
        warm: {
          50: '#fffbeb',
          100: '#fef3c7',
          400: '#f5a623',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #f0f9ff 0%, #e8f5e9 50%, #fff8e1 100%)',
        'section-gradient': 'linear-gradient(180deg, #ffffff 0%, #f8faff 100%)',
        'card-gradient': 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
        'brand-gradient': 'linear-gradient(135deg, #1a56a8 0%, #3a8c3f 100%)',
        'warm-gradient': 'linear-gradient(135deg, #fff8e1 0%, #f0f9ff 100%)',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(0,0,0,0.06)',
        'card': '0 8px 32px rgba(26, 86, 168, 0.08)',
        'hover': '0 12px 40px rgba(26, 86, 168, 0.15)',
        'glow-blue': '0 0 30px rgba(26, 86, 168, 0.2)',
        'glow-green': '0 0 30px rgba(58, 140, 63, 0.2)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
