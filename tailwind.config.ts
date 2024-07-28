import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      manrope: ["var(--font-manrope)", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        base: "#F8F8F6",
        green: "#556C3F",
        green2: "#445E2C",
        "dark-green": "#46601F",
        dark: "#222222",
        brown: "#705429",
        brown2: "#5D3F11",
        olive: "#B6BE8F",
        paper: "#F2EFEA",
        "light-pink": "#DCC9BA",
      },
    },
  },
  plugins: [],
};
export default config;
