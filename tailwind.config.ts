import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { graphite: "#252A2E", navy: "#17232D", emerald: "#064E3B", accent: "#0F9D7A", ivory: "#F7F5F2", lime: "#C7F36B" },
    fontFamily: { sans: ["Inter", "Geist", "ui-sans-serif", "system-ui", "sans-serif"] }
  }},
  plugins: []
};
export default config;