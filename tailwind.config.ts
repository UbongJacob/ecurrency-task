import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
        appBlue300: "#8FE2FF",
        appRed100: "#FC5959",
        appLightGray100: "#FBF9F2",
        appLightGray200: "#21384218",
        appGray100: "#ABABAB",
        appGreen100: "#4D533C",
        appGreen200: "#27AE60",
        appYellow100: "#FFD7231A",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        openSans: "var(--font-open-sans)",
      },
      boxShadow: {
        testimonyShadow: "0px 100px 100px 0px #00000025",
        vapeShadow: "50px 50px 100px 0px #00000025",
      },

      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },

      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
