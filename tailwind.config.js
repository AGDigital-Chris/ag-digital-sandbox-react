/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Brand Colors - Core Palette
        brand: {
          'deep-black': 'var(--brand-deep-black)',
          black: 'var(--brand-black)',
          'off-black': 'var(--brand-off-black)',
          'dark-grey': 'var(--brand-dark-grey)',
          'light-grey': 'var(--brand-light-grey)',
          'lighter-grey': 'var(--brand-lighter-grey)',
          white: 'var(--brand-white)',
          'off-white': 'var(--brand-off-white)',
          blue: 'var(--brand-blue)',
          red: 'var(--brand-red)',
          focus: 'var(--brand-focus)',
          'focus-dark': 'var(--brand-focus-dark)',
          purple: 'var(--brand-purple)',
          pink: 'var(--brand-pink)',
          green: 'var(--brand-green)',
          badge: {
            bg: 'var(--brand-badge-bg)',
            text: 'var(--brand-badge-text)',
          },
        },
        // Simplified semantic tokens
        primary: {
          DEFAULT: 'var(--text-primary)',
          border: 'var(--border-primary)',
        },
        secondary: {
          DEFAULT: 'var(--text-secondary)',
        },
        inverse: 'var(--text-inverse)',
        'surface-primary': 'var(--surface-primary)',
        'surface-secondary': 'var(--surface-secondary)',
        'surface-tertiary': 'var(--surface-tertiary)',
        'surface-elevated': 'var(--surface-elevated)',
        'surface-muted': 'var(--surface-muted)',
        'focus-ring': 'var(--focus-ring)',
        badge: {
          bg: 'var(--brand-badge-bg)',
          text: 'var(--brand-badge-text)',
        },
      },
      borderColor: {
        light: 'var(--border-light)',
        'mid-grey': 'var(--border-mid-grey)',
        'dark-grey': 'var(--border-dark-grey)',
      },
      fontFamily: {
        primary: ['var(--font-family-primary)'],
        mono: ['var(--font-family-mono)'],
        sans: ['var(--font-family-primary)'], // Legacy support
      },
      fontSize: {
        xs: ['var(--font-size-xs)', { lineHeight: '1rem' }],
        sm: ['var(--font-size-sm)', { lineHeight: '1.25rem' }],
        base: ['var(--font-size-base)', { lineHeight: '1.5rem' }],
        lg: ['var(--font-size-lg)', { lineHeight: '1.75rem' }],
        xl: ['var(--font-size-xl)', { lineHeight: '1.75rem' }],
        '2xl': ['var(--font-size-2xl)', { lineHeight: '2rem' }],
        '3xl': ['var(--font-size-3xl)', { lineHeight: '2.25rem' }],
        '4xl': ['var(--font-size-4xl)', { lineHeight: '2.5rem' }],
        '5xl': ['var(--font-size-5xl)', { lineHeight: '3rem' }],
      },
      fontWeight: {
        demi: '600',  // Custom demi weight
      },
      borderRadius: {
        none: 'var(--radius-none)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        sm: 'var(--elevation-sm)',
        md: 'var(--elevation-md)',
        lg: 'var(--elevation-lg)',
        xl: 'var(--elevation-xl)',
        '2xl': 'var(--elevation-2xl)',
      },
      transitionDuration: {
        fast: 'var(--transition-fast)',
        normal: 'var(--transition-normal)',
        slow: 'var(--transition-slow)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { left: '-100%', opacity: '0' },
          '10%': { opacity: '1' },
          '50%': { left: '100%', opacity: '1' },
          '100%': { left: '100%', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
