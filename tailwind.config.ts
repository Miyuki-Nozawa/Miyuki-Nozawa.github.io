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
        green3: "#969F32",
        green4: "#555D1D",
        "dark-green": "#46601F",
        dark: "#222222",
        "dark-orange": "#C65310",
        brown: "#705429",
        brown2: "#5D3F11",
        brown3: "#B7966E",
        brown4: "#675532",
        brown5: "#764E2E",
        brown6: "#A04337",
        olive: "#B6BE8F",
        paper: "#F2EFEA",
        "light-pink": "#DCC9BA",
        "light-ivory": "#F9F7F2",
        beige: "#EAE6DD",
        "dark-brown": "#705429",
        link: "#0066FF",
        orange: "#C2705C",
      },
    },
  },
  plugins: [],
};
export default config;
