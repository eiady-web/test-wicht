/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0A0A0A',
        'matte-black': '#111111',
        charcoal: '#1A1A1A',
        ash: '#2A2A2A',
        'amber-fire': '#E85D04',
        'amber-glow': '#FF7B1F',
        'warm-gold': '#F4A261',
        cream: '#F5F0E8',
        parchment: '#D4CFC6',
        stone: '#8A857C',
        'success-green': '#2D8A4E',
        'error-red': '#C0392B',
        'admin-bg': '#0C0C0E',
        'panel-bg': '#1A1A1E',
        elevated: '#232328',
        'admin-border': '#2E2E35',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ['Almarai', 'sans-serif'],
        brand: ['"Playfair Display"', 'serif'],
      },
      borderRadius: {
        card: '16px',
        button: '999px',
        small: '12px',
        image: '12px',
        dropdown: '20px',
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        'card-rest': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 12px 48px rgba(232, 93, 4, 0.15), 0 4px 16px rgba(0, 0, 0, 0.5)',
        'amber-glow': '0 0 30px rgba(232, 93, 4, 0.3), 0 0 60px rgba(232, 93, 4, 0.1)',
        'text-glow': '0 0 20px rgba(232, 93, 4, 0.4)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.3)',
        dropdown: '0 16px 48px rgba(0, 0, 0, 0.5)',
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      transitionTimingFunction: {
        'ease-default': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-snap': 'cubic-bezier(0.87, 0, 0.13, 1)',
        'ease-bounce': 'cubic-bezier(0.68, -0.15, 0.265, 1.15)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'pulse-scroll': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(8px)', opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'smoke-1': {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '15%': { opacity: '0.6' },
          '50%': { transform: 'translateY(-60px) scale(1.4)', opacity: '0.3' },
          '100%': { transform: 'translateY(-120px) scale(2)', opacity: '0' },
        },
        'smoke-2': {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '15%': { opacity: '0.4' },
          '50%': { transform: 'translateY(-80px) scale(1.6)', opacity: '0.2' },
          '100%': { transform: 'translateY(-160px) scale(2.2)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'pulse-scroll': 'pulse-scroll 2s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        'smoke-1': 'smoke-1 6s ease-out infinite',
        'smoke-2': 'smoke-2 8s ease-out infinite 2s',
        shimmer: 'shimmer 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
