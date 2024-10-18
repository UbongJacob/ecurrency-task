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
        appBlue100: "#12305B",
        appRed100: "#FC5959",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        openSans: "var(--font-open-sans)",
      },
    },
  },
  plugins: [],
};
export default config;
