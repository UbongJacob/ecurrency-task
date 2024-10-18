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
        appBlue200: "#21384299",
        appRed100: "#FC5959",
        appLightGray100: "#FBF9F2",
        appGreen100: "#4D533C",
        appYellow100: "#FFD7231A",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        openSans: "var(--font-open-sans)",
      },
      boxShadow: {
        testimonyShadow: "0px 100px 100px 0px #00000025",
      },
    },
  },
  plugins: [],
};
export default config;
