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
        dark: "#222222",
      },
      width: {
        656: "41rem",
      },
      height: {
        480: "30rem",
      },
      spacing: {
        "4.5": "4.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
