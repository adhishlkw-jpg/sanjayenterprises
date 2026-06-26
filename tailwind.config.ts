import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        medical: {
          blue: "#00A6E7",
          navy: "#102A43",
          ice: "#EAF8FF",
          section: "#F8FBFD"
        }
      },
      boxShadow: {
        float: "0 24px 70px rgba(16, 42, 67, 0.12)",
        soft: "0 16px 42px rgba(0, 166, 231, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
