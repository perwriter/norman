
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['PT Sans', 'sans-serif'],
        headline: ['Playfair Display', 'serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in-up': 'slide-in-up 0.5s ease-out forwards',
      },
      // Added typography for prose styling, if you choose to use @tailwindcss/typography
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.foreground'),
            a: {
              color: theme('colors.accent.DEFAULT'),
              '&:hover': {
                color: theme('colors.accent.DEFAULT / 0.8'),
              },
            },
            h1: { color: theme('colors.primary.DEFAULT'), fontFamily: theme('fontFamily.headline').join(', ') },
            h2: { color: theme('colors.primary.DEFAULT'), fontFamily: theme('fontFamily.headline').join(', ') },
            h3: { color: theme('colors.primary.DEFAULT'), fontFamily: theme('fontFamily.headline').join(', ') },
            h4: { color: theme('colors.primary.DEFAULT'), fontFamily: theme('fontFamily.headline').join(', ') },
            strong: { color: theme('colors.foreground') },
            // Add more styles as needed
          },
        },
        invert: { // For dark mode
          css: {
            color: theme('colors.foreground'), // Assuming foreground is adjusted for dark mode
             a: {
              color: theme('colors.accent.DEFAULT'), // Adjust if accent needs dark mode variant
              '&:hover': {
                color: theme('colors.accent.DEFAULT / 0.8'),
              },
            },
            h1: { color: theme('colors.primary.DEFAULT') }, // Adjust if primary needs dark mode variant
            h2: { color: theme('colors.primary.DEFAULT') },
            h3: { color: theme('colors.primary.DEFAULT') },
            h4: { color: theme('colors.primary.DEFAULT') },
            strong: { color: theme('colors.foreground') },
          }
        }
      }),
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography') // Added Tailwind Typography plugin
  ],
} satisfies Config;
