module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "plugin:vue/essential",
    "plugin:prettier-vue/recommended",
    "prettier/vue",
  ],

  settings: {
    "prettier-vue": {
      // Settings for how to process Vue SFC Blocks
      SFCBlocks: {
        template: true,
        script: true,
        style: true,
        customBlocks: {
          // Treat Gridsome `<page-query>`/`<static-query>` block as a `.graphql` file
          "page-query": { lang: "graphql" },
          "static-query": { lang: "graphql" },
        },
      },
    },
  },

  rules: {
    "prettier-vue/prettier": "error",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
};
