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
        'blue-1': 'var(--blue-1)',
        'gray-1': 'var(--gray-1)',
        'gray-2': 'var(--gray-2)',
        'gray-3': 'var(--gray-3)',
      },
      animation: {
        reveal: 'reveal 0.5s ease-in forwards',
        'scale-up': 'scaleUp 0.3s ease-in-out forwards',
      },
      scale: {
        101: '1.01',
      },
    },
  },
  plugins: [],
}
