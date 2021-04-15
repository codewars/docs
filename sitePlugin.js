const path = require("path");

module.exports = () => {
  return {
    name: "site-plugin",

    // Make `@components/` resolve to `src/components`.
    configureWebpack: (_config, _isServer) => ({
      resolve: {
        alias: {
          "@components": path.resolve(__dirname, "src/components/"),
        },
      },
    }),

    // Append new PostCSS plugins.
    configurePostCss: (postcssOptions) => {
      postcssOptions.plugins.push(
        require("tailwindcss"),
        require("postcss-nested"),
        require("postcss-preset-env")({
          autoprefixer: {
            flexbox: "no-2009",
          },
          stage: 4,
        })
      );
      return postcssOptions;
    },
  };
};
