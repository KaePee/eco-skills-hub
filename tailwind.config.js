/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
        dark: "#271F41",
        light: "#FFFFFF",
        accent: "#EE9921", 
        accentDark: "#ffdb4d",
        gray: "#3C3C3C",
    },
    fontFamily: {
      mr: ["var(--font-mr)"],
      in: ["var(--font-in)"],
    }, 
  },
  },
  plugins: [],
}


