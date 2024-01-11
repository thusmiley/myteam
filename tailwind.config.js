/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnightGreen: "#014E56",
        lightCoral: "#F67E7E",
        raptureBlue: "#79C8C7",
        policeBlue: "#2C6269",
        deepJungleGreen: "#004047",
        sacramentoGreen: "#012F34",
        darkGreen: "#002529",
        textColorJobs: "#6E8098",
      },
      backgroundImage: {
        webMobile: "url('/src/assets/home/mobile/image-web-design.jpg')",
        webTablet: "url('/src/assets/home/tablet/image-web-design.jpg')",
        webDesktop: "url('/src/assets/home/desktop/image-web-design-large.jpg')",
      },
      spacing: { container: "var(--container-w)" },
    },
    screens: {
      ss: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
    },
    fontFamily: {
      livvic: ["Livvic", "sans serif"],
    },
  },
  plugins: [],
};
