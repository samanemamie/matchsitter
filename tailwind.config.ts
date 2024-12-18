import type { Config } from 'tailwindcss'

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
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      width: {
        '68': '17rem',
      },
      height: {
        '68': '17rem',
      },
      padding: {
        '68': '17rem',
      },
      margin: {
        '68': '17rem',
      },
      translate: {
        '68': '17rem',
      },
      backgroundImage: {
        score: 'linear-gradient(90deg, #FF513A 0%, #FF993A 40.22%, #FACD53 69.98%, #3FC276 87.5%)',
      },
      colors: {
        ring: 'hsl(var(--ring))',
        foreground: 'hsl(var(--foreground))',
        input: 'hsl(var(--input))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          50: 'hsl(var(--primary-50))',
          100: 'hsl(var(--primary-100))',
          200: 'hsl(var(--primary-200))',
          300: 'hsl(var(--primary-300))',
          400: 'hsl(var(--primary-400))',
          500: 'hsl(var(--primary-500))',
          600: 'hsl(var(--primary-600))',
          700: 'hsl(var(--primary-700))',
          800: 'hsl(var(--primary-800))',
          900: 'hsl(var(--primary-900))',
        },
        surface: {
          DEFAULT: 'hsl(var(--surface))',
        },
        border: {
          100: 'hsl(var(--border-100))',
          200: 'hsl(var(--border-200))',
          300: 'hsl(var(--border-300))',
        },
        heading: 'hsl(var(--heading))',
        body: {
          50: 'hsl(var(--body-50))',
          100: 'hsl(var(--body-100))',
          200: 'hsl(var(--body-200))',
          300: 'hsl(var(--body-300))',
          400: 'hsl(var(--body-400))',
        },

        background: {
          50: 'hsl(var(--background-50))',
          100: 'hsl(var(--background-100))',
          200: 'hsl(var(--background-200))',
          300: 'hsl(var(--background-300))',
          400: 'hsl(var(--background-400))',
        },

        success: 'hsl(var(--success))',
        success_light: 'hsl(var(--success-light))',
        success_dark: 'hsl(var(--success-dark))',

        error: 'hsl(var(--error))',
        error_light: 'hsl(var(--error-light))',
        error_dark: 'hsl(var(--error-dark))',

        warning: 'hsl(var(--warning))',
        warning_light: 'hsl(var(--warning-light))',
        warning_dark: 'hsl(var(--warning-dark))',

        info: 'hsl(var(--info))',
        info_light: 'hsl(var(--info-light))',
        info_dark: 'hsl(var(--info-dark))',

        icon: {
          500: 'hsl(var(--icon-500))',
          600: 'hsl(var(--icon-600))',
          700: 'hsl(var(--icon-700))',
          800: 'hsl(var(--icon-800))',
        },

        neutral: {
          100: 'hsl(var(--neutral-100))',
          300: 'hsl(var(--neutral-300))',
          500: 'hsl(var(--neutral-500))',
          900: 'hsl(var(--neutral-900))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        32: '32px',
        50: '5px',
        80: '8px',
        100: '10px',
        150: '15px',
        200: '20px',
        250: '25px',
        3600: '360px',
      },
      screens: {
        mb: '640px',
        ds: '1024px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'up-down': {
          '0%, 100%': { top: '100%' },
          '50%': { top: '0%' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'up-down': 'up-down 4s ease-in-out infinite',
      },
      fontSize: {
        'size-heading-1-ds': [
          '56px',
          {
            fontWeight: 700,
          },
        ],
        'size-heading-1-mb': [
          '28px',
          {
            fontWeight: 700,
          },
        ],
        'size-heading-2-ds': [
          '40px',
          {
            fontWeight: 700,
          },
        ],
        'size-heading-2-mb': [
          '24px',
          {
            fontWeight: 700,
          },
        ],
        'size-heading-3-ds': [
          '32px',
          {
            fontWeight: 700,
          },
        ],
        'size-heading-3-mb': [
          '20px',
          {
            fontWeight: 700,
          },
        ],
        'size-heading-4-ds': [
          '24px',
          {
            fontWeight: 700,
          },
        ],
        'size-heading-4-mb': [
          '18px',
          {
            fontWeight: 700,
          },
        ],
        'size-heading-5-ds': [
          '20px',
          {
            fontWeight: 700,
          },
        ],
        'size-heading-5-mb': [
          '16px',
          {
            fontWeight: 700,
          },
        ],
        'size-heading-6-ds': [
          '18px',
          {
            fontWeight: 700,
          },
        ],
        'size-heading-6-mb': [
          '14px',
          {
            fontWeight: 700,
          },
        ],
        'size-title-lg-ds': [
          '20px',
          {
            fontWeight: 500,
          },
        ],
        'size-title-lg-mb': [
          '16px',
          {
            fontWeight: 600,
          },
        ],
        'size-title-md-ds': [
          '16px',
          {
            lineHeight: '26px',
            fontWeight: 500,
          },
        ],
        'size-title-md-mb': [
          '14px',
          {
            fontWeight: 600,
          },
        ],
        'size-title-sm-ds': [
          '14px',
          {
            lineHeight: '22px',
            fontWeight: 500,
          },
        ],
        'size-title-sm-mb': [
          '12px',
          {
            fontWeight: 600,
          },
        ],
        'size-body-lg-ds': [
          '16px',
          {
            lineHeight: '28px',
            fontWeight: 400,
          },
        ],
        'size-body-lg-mb': [
          '14px',
          {
            lineHeight: '26px',
            fontWeight: 400,
          },
        ],
        'size-body-sm-ds': [
          '14px',
          {
            lineHeight: '24px',
            fontWeight: 400,
          },
        ],
        'size-body-sm-mb': [
          '12px',
          {
            lineHeight: '22px',
            fontWeight: 400,
          },
        ],
        'size-button-lg-ds': [
          '16px',
          {
            fontWeight: 600,
          },
        ],
        'size-button-lg-mb': [
          '16px',
          {
            fontWeight: 600,
          },
        ],
        'size-button-md-ds': [
          '14px',
          {
            fontWeight: 600,
          },
        ],
        'size-button-md-mb': [
          '14px',
          {
            fontWeight: 600,
          },
        ],
        'size-button-sm-ds': [
          '14px',
          {
            fontWeight: 600,
          },
        ],
        'size-button-sm-mb': [
          '12px',
          {
            fontWeight: 600,
          },
        ],
        'size-label-ds': [
          '14px',
          {
            fontWeight: 500,
          },
        ],
        'size-label-mb': [
          '12px',
          {
            fontWeight: 500,
          },
        ],
        'size-input-ds': [
          '16px',
          {
            fontWeight: 400,
          },
        ],
        'size-input-mb': [
          '14px',
          {
            fontWeight: 400,
          },
        ],
        'size-caption-ds': [
          '12px',
          {
            fontWeight: 400,
          },
        ],
        'size-caption-mb': [
          '12px',
          {
            fontWeight: 400,
          },
        ],
        current_price: [
          '18px',
          {
            fontWeight: 600,
          },
        ],
        calendar_time: [
          '10px',
          {
            fontWeight: 600,
          },
        ],
      },

      boxShadow: {
        dropDown: '0px 10px 20px hsla(220, 3%, 49%, 0.25)',
        tabs: '0px 4px 4px hsla(220, 5%, 45%, 0.05)',
        categories: '0px 15px 15px -8px #021814',
        success: '0px 18px 30px hsla(163, 66%, 45%, 0.10)',
        error: '0px 18px 30px hsla(347, 78%, 45%, 0.1)',
        subscription: '0px 10px 60px 0px #5C688026',
        menu: '0px 8px 20px 0px #0000001A',
        toolbar: '0px 0px 5.1px 0px #EDD5B7',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('autoprefixer')],
} satisfies Config
