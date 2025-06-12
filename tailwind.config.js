/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Extra small devices (phones)
        'sm': '640px', // Small devices (tablets)
        'md': '768px', // Medium devices (desktops)
        'lg': '1024px', // Large devices (large desktops)
        'xl': '1280px', // Extra large devices (large desktops)
        'max': {max: "1536px"} // 2X large devices
      },
      colors: {
        neutral: {
          //neutral surfaces and backgrounds
          white: 'var(--neutral-white)',
          black: 'var(--neutral-black)',
          bw: 'var(--neutral-bw)',
          wb: 'var(--neutral-wb)',
          primary: 'var(--neutral-primary)',
          secondary: 'var(--neutral-secondary)',
          tertiary: 'var(--neutral-tertiary)',
          bg: 'var(--neutral-bg)',
          rest: 'var(--neutral-rest)',
          hover: 'var(--neutral-hover)',
          focus: 'var(--neutral-focus)',
          //neutral text 
          inverse: 'var(--neutral-primary)',
          mute: 'var(--text-neutral-mute)',
          placeholder: 'var(--text-neutral-placeholder)',
          default: 'var(--text-neutral-secondary)',
          hovered: 'var(--text-neutral-tertiary)',
          focused: 'var(--text-neutral-primary)',
          //neutral border
          regular: 'var(--border-neutral-regular)',
          subtle: 'var(--border-neutral-subtle)',
          strong: 'var(--border-neutral-strong)',
        },
        brand: {
          //primary surfaces and backgrounds
          'primary-rest': 'var(--primary-rest)',
          'primary-hover': 'var(--primary-hover)',
          'primary-focus': 'var(--primary-focus)',
          'primary-bg': 'var(--primary-bg)',
          'primary-light': 'var(--primary-light)',
          //brand primary text
          'primary-default': 'var(--text-primary-rest)',
          'primary-hovered': 'var(--text-primary-hover)',
          'primary-focused': 'var(--text-primary-focus)',
          //brand primary border
          'primary-regular': 'var(--border-primary-regular)',
          'primary-subtle': 'var(--border-primary-subtle)',
          'primary-strong': 'var(--border-primary-strong)',

          //secondary surfaces and backgrounds
          'secondary-rest': 'var(--secondary-rest)',
          'secondary-hover': 'var(--secondary-hover)',
          'secondary-focus': 'var(--secondary-focus)',
          'secondary-bg': 'var(--secondary-bg)',
          'secondary-light': 'var(--secondary-light)',
          //brand secondary text
          'secondary-default': 'var(--text-secondary-rest)',
          'secondary-hovered': 'var(--text-secondary-hover)',
          'secondary-focused': 'var(--text-secondary-focus)',
          //brand secondary border
          'secondary-regular': 'var(--border-secondary-regular)',
          'secondary-subtle': 'var(--border-secondary-subtle)',
          'secondary-strong': 'var(--border-secondary-strong)',

          //tertiary surfaces and backgrounds
          'tertiary-rest': 'var(--tertiary-rest)',
          'tertiary-hover': 'var(--tertiary-hover)',
          'tertiary-focus': 'var(--tertiary-focus)',
          'tertiary-bg': 'var(--tertiary-bg)',
          'tertiary-light': 'var(--tertiary-light)',
          //brand tertiary text
          'tertiary-default': 'var(--text-tertiary-rest)',
          'tertiary-hovered': 'var(--text-tertiary-hover)',
          'tertiary-focused': 'var(--text-tertiary-focus)',
          //brand tertiary border
          'tertiary-regular': 'var(--border-tertiary-regular)',
          'tertiary-subtle': 'var(--border-tertiary-subtle)',
          'tertiary-strong': 'var(--border-tertiary-strong)',
        },
        semantic: {
          //success surfaces and backgrounds
          'success-rest': 'var(--success-rest)',
          'success-hover': 'var(--success-hover)',
          'success-focus': 'var(--success-focus)',
          'success-bg': 'var(--success-bg)',
          'success-light': 'var(--success-light)',
          //success text
          'success-default': 'var(--text-success-rest)',
          'success-hovered': 'var(--text-success-hover)',
          'success-focused': 'var(--text-success-focus)',
          //success border
          'success-regular': 'var(--border-success-regular)',
          'success-subtle': 'var(--border-success-subtle)',
          'success-strong': 'var(--border-success-strong)',

          //error surfaces and backgrounds
          'error-rest': 'var(--error-rest)',
          'error-hover': 'var(--error-hover)',
          'error-focus': 'var(--error-focus)',
          'error-bg': 'var(--error-bg)',
          'error-light': 'var(--error-light)',
          //error text
          'error-default': 'var(--text-error-rest)',
          'error-hovered': 'var(--text-error-hover)',
          'error-focused': 'var(--text-error-focus)',
          //error border
          'error-regular': 'var(--border-error-regular)',
          'error-subtle': 'var(--border-error-subtle)',
          'error-strong': 'var(--border-error-strong)',

          //warning surfaces and backgrounds
          'warning-rest': 'var(--warning-rest)',
          'warning-hover': 'var(--warning-hover)',
          'warning-focus': 'var(--warning-focus)',
          'warning-bg': 'var(--warning-bg)',
          'warning-light': 'var(--warning-light)',
          //warning text
          'warning-default': 'var(--text-warning-rest)',
          'warning-hovered': 'var(--text-warning-hover)',
          'warning-focused': 'var(--text-warning-focus)',
          //warning border
          'warning-regular': 'var(--border-warning-regular)',
          'warning-subtle': 'var(--border-warning-subtle)',
          'warning-strong': 'var(--border-warning-strong)',

          //info surfaces and backgrounds
          'info-rest': 'var(--info-rest)',
          'info-hover': 'var(--info-hover)',
          'info-focus': 'var(--info-focus)',
          'info-bg': 'var(--info-bg)',
          'info-light': 'var(--info-light)',
          //info text
          'info-default': 'var(--text-info-rest)',
          'info-hovered': 'var(--text-info-hover)',
          'info-focused': 'var(--text-info-focus)',
          //info border
          'info-regular': 'var(--border-info-regular)',
          'info-subtle': 'var(--border-info-subtle)',
          'info-strong': 'var(--border-info-strong)',
        },
        white: {
          50: '#ffffff',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#f0f0f0',
          400: '#eaeaea',
          500: '#e0e0e0',
          600: '#dadada',
          700: '#d5d5d5',
          800: '#d0d0d0',
          900: '#cacaca',
          950: '#c5c5c5',
        },
        black: {
          50: '#555555',
          100: '#505050',
          200: '#454545',
          300: '#404040',
          400: '#353535',
          500: '#303030',
          600: '#252525',
          700: '#202020',
          800: '#151515',
          900: '#101010',
          950: '#000000',
        },
        
        primary: {
          50: colors.cyan[50],
          100: colors.cyan[100],
          200: colors.cyan[200],
          300: colors.cyan[300],
          400: colors.cyan[400],
          500: colors.cyan[500],
          600: colors.cyan[600],
          700: colors.cyan[700],
          800: colors.cyan[800],
          900: colors.cyan[900],
          950: colors.cyan[950],
        },
        secondary: {
          50: colors.purple[50],
          100: colors.purple[100],
          200: colors.purple[200],
          300: colors.purple[300],
          400: colors.purple[400],
          500: colors.purple[500],
          600: colors.purple[600],
          700: colors.purple[700],
          800: colors.purple[800],
          900: colors.purple[900],
          950: colors.purple[950],
        },
        tertiary: {
          50: colors.yellow[50],
          100: colors.yellow[100],
          200: colors.yellow[200],
          300: colors.yellow[300],
          400: colors.yellow[400],
          500: colors.yellow[500],
          600: colors.yellow[600],
          700: colors.yellow[700],
          800: colors.yellow[800],
          900: colors.yellow[900],
          950: colors.yellow[950],
        },
        success: {
          50: colors.emerald[50],
          100: colors.emerald[100],
          200: colors.emerald[200],
          300: colors.emerald[300],
          400: colors.emerald[400],
          500: colors.emerald[500],
          600: colors.emerald[600],
          700: colors.emerald[700],
          800: colors.emerald[800],
          900: colors.emerald[900],
          950: colors.emerald[950],
        },
        error: {
          50: colors.red[50],
          100: colors.red[100],
          200: colors.red[200],
          300: colors.red[300],
          400: colors.red[400],
          500: colors.red[500],
          600: colors.red[600],
          700: colors.red[700],
          800: colors.red[800],
          900: colors.red[900],
          950: colors.red[950],
        },
        warning: {
          50: colors.amber[50],
          100: colors.amber[100],
          200: colors.amber[200],
          300: colors.amber[300],
          400: colors.amber[400],
          500: colors.amber[500],
          600: colors.amber[600],
          700: colors.amber[700],
          800: colors.amber[800],
          900: colors.amber[900],
          950: colors.amber[950],
        },
        info: {
          50: colors.indigo[50],
          100: colors.indigo[100],
          200: colors.indigo[200],
          300: colors.indigo[300],
          400: colors.indigo[400],
          500: colors.indigo[500],
          600: colors.indigo[600],
          700: colors.indigo[700],
          800: colors.indigo[800],
          900: colors.indigo[900],
          950: colors.indigo[950],
        }
      },
      fontSize: {
        'disp-xxl': '4.5rem', // 72px
        'disp-xl': '4rem',   // 64px
        'disp-lg': '3.5rem', // 56px
        'disp-md': '3rem',   // 48px
        'disp-sm': '2.5rem', // 40px
        'disp-xs': '2rem',   // 32px
        'body-xxl': '1.5rem', // 24px
        'body-xl': '1.25rem', // 20px
        'body-lg': '1.125rem', // 18px
        'body-md': '1rem',   // 16px
        'body-sm': '0.875rem', // 14px
        'body-xs': '0.75rem', // 12px
        'body-xxs': '0.5rem', // 8px          
      },
      fontFamily: {
        disp: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      spacing: {
        'null': '0px',
        'uno': '0.0625rem', // 1px
        'duo': '0.125rem', // 2px
        'trio': '0.1875rem', // 3px
        'base': '0.25rem', // 4px
        'penta': '0.3125rem', // 5px
        '1_5x': '0.375rem', // 6px
        '2x': '0.5rem', // 8px
        '2_5x': '0.625rem', // 10px
        '3x': '0.75rem', // 12px
        '4x': '1rem', // 16px
        '5x': '1.25rem', // 20px
        '6x': '1.5rem', // 24px
        '7x': '1.75rem', // 28px
        '8x': '2rem', // 32px
        '9x': '2.25rem', // 36px
        '10x': '2.5rem', // 40px
        '11x': '2.75rem', // 44px
        '12x': '3rem', // 48px
        '14x': '3.5rem', // 56px
        '16x': '4rem', // 64px
        '18x': '4.5rem', // 72px
        '20x': '5rem', // 80px
        '24x': '6rem', // 96px
        '32x': '8rem', // 128px
        '40x': '10rem', // 160px
        '48x': '12rem', // 192px
        '56x': '14rem', // 224px
        '60x': '15rem', // 240px
        '64x': '16rem', // 256px
        '80x': '20rem', // 320px
        '96x': '24rem', // 384px
        '120x': '30rem', // 480px
        '128x': '32rem', // 512px
        '144x': '36rem', // 576px
        '160x': '40rem', // 640px
        '180x': '45rem', // 720px
        '192x': '48rem', // 768px
        '240x': '60rem', // 960px
        '256x': '64rem', // 1024px
        '320x': '80rem', // 1280px
        '384x': '96rem', // 1536px
        '400x': '100rem', // 1600px
        '480x': '120rem', // 1920px
      },
      borderRadius: {
        'square': '0px',
        'curve-xxs': '0.125rem', // 2px
        'curve-xs': '0.25rem', // 4px
        'curve-sm': '0.375rem', // 6px
        'curve-md': '0.5rem', // 8px
        'curve-lg': '0.625rem', // 10px
        'curve-xl': '0.75rem', // 12px
        'curve-xxl': '1rem', // 16px
        'pill': '9999px', // Fully rounded
      },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      const extract = (obj, prefix = '') => Object.keys(obj).reduce((res, key) => {
        const value = obj[key];
        if (typeof value === 'string') {
          res[`--color${prefix}-${key}`] = value;
        } else {
          Object.assign(res, extract(value, `${prefix}-${key}`));
        }
        return res;
      }, {});

      addBase({ ':root': extract(theme('colors')) });
    }),
  ],
}