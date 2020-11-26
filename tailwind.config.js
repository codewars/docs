const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./content/**/*.md", "./src/**/*.vue", "./src/**/*.js"],
  },
  darkMode: "class",
  theme: {
    extend: {
      borderColor: {
        DEFAULT: "var(--color-ui-border)",
      },
      colors: {
        gray: colors.gray,
        tgray: colors.trueGray,
        wgray: colors.warmGray,
        cgray: colors.coolGray,
        bgray: colors.blueGray,
        typo: {
          base: "var(--color-typo-base)",
          high: "var(--color-typo-high)",
          low: "var(--color-typo-low)",
        },
        ui: {
          background: "var(--color-ui-background)",
          sidebar: "var(--color-ui-sidebar)",
          primary: "var(--color-ui-primary)",
          border: "var(--color-ui-border)",
        },
        brand: "#b1361e",
      },
      spacing: {
        sm: "24rem",
      },
      screens: {
        xxl: "1400px",
      },
      typography: (theme) => ({
        DEFAULT: {
          // Commented out properties are the defaults and are kept for reference.
          css: {
            // color: theme("colors.gray.700"),
            color: theme("colors.typo.base"),
            '[class~="lead"]': {
              // color: theme("colors.gray.700"),
              color: theme("colors.typo.base"),
            },
            a: {
              // color: theme("colors.gray.900"),
              color: theme("colors.typo.high"),
            },
            "a code": {
              // color: theme("colors.gray.900"),
              color: theme("colors.typo.high"),
            },
            strong: {
              // color: theme("colors.gray.900"),
              color: theme("colors.typo.high"),
            },
            "ol > li::before": {
              // color: theme("colors.gray.600"),
              color: theme("colors.typo.low"),
            },
            "ul > li::before": {
              // backgroundColor: theme("colors.gray.400"),
              backgroundColor: theme("colors.ui.border"),
            },
            hr: {
              // borderColor: theme("colors.gray.300"),
              borderColor: theme("colors.ui.border"),
            },
            blockquote: {
              // color: theme("colors.gray.900"),
              color: theme("colors.typo.base"),
              // borderLeftColor: theme("colors.gray.300"),
              borderLeftColor: theme("colors.ui.border"),
            },
            h1: {
              // color: theme("colors.gray.900"),
              color: theme("colors.typo.high"),
            },
            h2: {
              // color: theme("colors.gray.900"),
              color: theme("colors.typo.high"),
            },
            h3: {
              // color: theme("colors.gray.900"),
              color: theme("colors.typo.high"),
            },
            h4: {
              // color: theme("colors.gray.900"),
              color: theme("colors.typo.high"),
            },
            "figure figcaption": {
              // color: theme("colors.gray.600"),
              color: theme("colors.typo.low"),
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            code: {
              // color: theme("colors.gray.900"),
              color: theme("colors.typo.high"),
              borderColor: theme("colors.ui.border"),
              borderWidth: "1px",
              padding: theme("spacing.1"),
              borderRadius: theme("borderRadius.DEFAULT"),
              fontWeight: null,
            },
            pre: {
              // color: theme("colors.gray.300"),
              color: theme("colors.typo.high"),
              // backgroundColor: theme("colors.gray.800"),
              backgroundColor: "inherit",
            },
            thead: {
              // color: theme("colors.gray.900"),
              color: theme("colors.typo.high"),
              // borderBottomColor: theme("colors.gray.400"),
              borderBottomColor: theme("colors.ui.border"),
            },
            "tbody tr": {
              // borderBottomColor: theme("colors.gray.300"),
              borderBottomColor: theme("colors.ui.border"),
            },
          },
        },
      }),
    },
  },
  variants: {
    // Disable responsive variants for now
    typography: [],
    extend: {
      display: ["dark"],
    },
  },
  plugins: [
    require("@tailwindcss/typography")({ modifiers: [] }),
    require("@tailwindcss/forms"),
  ],
};
