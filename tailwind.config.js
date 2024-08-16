/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        heading: 'var(--heading-text-color)',
        default: 'var(--default-text-color)',
      },
      backgroundColor: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        foreground: 'var(--foreground-color)',
      },
      fontSize: {
        '2xl': '1.75rem',
        xl: '1.125rem',
      },
      borderColor: {
        'default-border': 'var(--default-border-color)',
      },
      colors: {
        'blue-1': '#4A96FF',
        'gray-1': '#6B6C70',
        'gray-2': '#969696',
        'gray-3': '#343434',
      },
      animation: {
        reveal: 'reveal 0.5s ease-in forwards',
        'scale-up': 'scaleUp 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
