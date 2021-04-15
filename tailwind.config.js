const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./content/**/*.mdx"],
  corePlugins: {
    preflight: false,
  },
  // Using custom dark variant `html[data-theme="dark"]` to match Docusaurus.
  darkMode: false,
  theme: {
    extend: {
      colors: {
        brand: "#b1361e",
        // Admonitions colors
        note: colors.coolGray[600],
        "note-content": colors.coolGray[500],
        tip: colors.emerald[600],
        "tip-content": colors.emerald[600],
        info: colors.lightBlue[500],
        "info-content": colors.lightBlue[700],
        warning: colors.orange[500],
        "warning-content": colors.orange[700],
        caution: colors.red[600],
        "caution-content": colors.red[500],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
      display: ["dark"],
    },
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant("dark", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `html[data-theme="dark"] .${e(
            `dark${separator}${className}`
          )}`;
        });
      });
    }),
  ],
};
