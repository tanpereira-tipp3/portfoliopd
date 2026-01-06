import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6750a4",
        "primary-container": "#eaddff",
        "surface-container-low": "#f7f2fa",
        "surface-variant": "#e7e0ec",
        "primary-fixed": "#eaddff",
        "inverse-on-surface": "#f5eff7",
      },
      fontFamily: {
        "libre-baskerville": ['"Libre Baskerville"', "serif"],
        roboto: ['"Roboto"', "sans-serif"],
        "ibm-plex-mono": ['"IBM Plex Mono"', "monospace"],
        avenir: ['Avenir', 'Avenir Next', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;




