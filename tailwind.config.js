module.exports = {
  purge: {
    content: ["./content/**/*.md", "./src/**/*.vue", "./src/**/*.js"],
    options: {},
  },
  theme: {
    extend: {
      colors: {
        ui: {
          background: "var(--color-ui-background)",
          sidebar: "var(--color-ui-sidebar)",
          typo: "var(--color-ui-typo)",
          primary: "var(--color-ui-primary)",
          border: "var(--color-ui-border)",
        },
      },
      spacing: {
        sm: "24rem",
      },
      screens: {
        xxl: "1400px",
      },
    },
  },
  variants: {},
  plugins: [],
};
