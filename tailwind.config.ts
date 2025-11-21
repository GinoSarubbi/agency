import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#162e5f",   // tu azul marino profundo
      },
    },
  },
  plugins: [],
};

export default config;
