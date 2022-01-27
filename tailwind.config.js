const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Don't look in `content/` for now because this can generate unnecessary classes and also cause issues.
    // For example, Prism adds `table` class to a token in TOML, and because some pages uses the word `table`,
    // `.table` is generated, and that token gets `display: table`.
    // "./content/**/*.mdx",
  ],
  corePlugins: {
    preflight: false,
  },
  // Using custom dark variant `html[data-theme="dark"]` to match Docusaurus.
  darkMode: false,
  theme: {
    extend: {
      colors: {
        brand: "#b1361e",
        amber: colors.amber,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        // Admonitions colors
        note: colors.coolGray[600],
        "note-content": colors.coolGray[600],
        "note-content-dark": colors.coolGray[400],
        tip: colors.emerald[700],
        "tip-content": colors.emerald[700],
        "tip-content-dark": colors.emerald[500],
        info: colors.sky[600],
        "info-content": colors.sky[700],
        "info-content-dark": colors.sky[500],
        warning: colors.orange[600],
        "warning-content": colors.orange[700],
        "warning-content-dark": colors.orange[500],
        caution: colors.red[500],
        "caution-content": colors.red[700],
        "caution-content-dark": colors.red[400],
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
