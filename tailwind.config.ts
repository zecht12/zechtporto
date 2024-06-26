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
      fontWeight:{
        "heroHeadText":
        "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
      "heroSubText":
        "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
      "sectionHeadText":
        "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
      "sectionSubText":
        "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
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
export default config;
