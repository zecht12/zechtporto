import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '15px',
        },
      },
      fontSize:{
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        "heroHeadText": ['40px', {
          lineHeight: '98px',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        }],
        "heroSubText": ['16px', {
          lineHeight: '40px',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        "sectionHeadText": ['30px', {
          lineHeight: '30px',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        }],
        "sectionSubText": ['14px', {
          lineHeight: '24px',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/assets/herobg.png')",
      },
      padding:{
        'paddingX': "sm:px-16 px-6",
        'paddingY': "sm:py-16 py-6",
        'padding': "sm:px-16 px-6 sm:py-16 py-10",
      },
      colors:{
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow:{
        card: "0px 35px 120px -15px #211e35",
      },
      screens:{
        xs: "450px",
      },
    },
  },
  plugins: [],
};