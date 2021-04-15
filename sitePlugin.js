const path = require("path");

// Make `@components/` resolve to `src/components`.
module.exports = () => {
  return {
    name: "site-plugin",
    configureWebpack: (_config, _isServer) => ({
      resolve: {
        alias: {
          "@components": path.resolve(__dirname, "src/components/"),
        },
      },
    }),
  };
};
