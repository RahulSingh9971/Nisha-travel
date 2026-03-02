/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#002661",
          navy: "#0C1934",
          teal: "#0E313A",
          purple: "#242249",
          blue: "#2A6ABA",
          indigo: "#2E52B2",
          violet: "#41479B",
        },
        secondary: {
          gray: "#666666",
          lightGray: "#A08F8F",
          lighterGray: "#B3B1B1",
          bgGray: "#F0F0F0",
          bgLightGray: "#F5F5F5",
          bgLighterGray: "#F8F9FA",
        },
        accent: {
          red: "#C40808",
          orange: "#C40808",
          pink: "#FF4B55",
          yellow: "#FFE15A",
        },
        light: {
          blue: "#EAF0F6",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        renfrew: ["Renfrew", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
      },
      fontSize: {
        hero: ["48px", { lineHeight: "1.1", fontWeight: "700" }],
        "hero-mobile": ["32px", { lineHeight: "1.1", fontWeight: "700" }],
        section: ["36px", { lineHeight: "1.2", fontWeight: "700" }],
        "section-mobile": ["28px", { lineHeight: "1.2", fontWeight: "700" }],
        subtitle: ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "subtitle-mobile": ["20px", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-mobile": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        button: ["16px", { lineHeight: "1", fontWeight: "700" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out",
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "bounce-in": "bounceIn 0.6s ease-out",
        counter: "counter 2s ease-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "70%": { opacity: "1", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        counter: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
