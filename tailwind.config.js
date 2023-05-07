/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      grey: {
        100: "#F5F7FA",
        1000: "#1F2933"
      },
    },
    typography: theme => ({
      default: {
        css: {
          pre: {
            color: theme("colors.grey.1000"),
            backgroundColor: theme("colors.grey.100")
          },
          "pre code::before": {
            "padding-left": "unset"
          },
          "pre code::after": {
            "padding-right": "unset"
          },
          code: {
            backgroundColor: theme("colors.grey.100"),
            color: "#DD1144",
            fontWeight: "400",
            "border-radius": "0.25rem"
          },
          "code::before": {
            content: '""',
            "padding-left": "0.25rem"
          },
          "code::after": {
            content: '""',
            "padding-right": "0.25rem"
          }
        }
      }
    }),
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
