// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Docc",
  icon: {
    favicon: "./src/assets/favicon.png",
    touchicon: "./src/assets/favicon.png",
  },
  siteUrl: process.env.SITE_URL ? process.env.SITE_URL : "https://example.com",
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [{ path: "/docs/", title: "Docs" }],
    },
    sidebar: [
      {
        name: "docs",
        sections: [
          {
            title: "Getting Started",
            items: [
              "/docs/",
              "/docs/installation/",
              "/docs/writing-content/",
              "/docs/deploying/",
            ],
          },
          {
            title: "Configuration",
            items: ["/docs/settings/", "/docs/sidebar/"],
          },
        ],
      },
    ],
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "./content",
        path: "**/*.md",
        typeName: "MarkdownPage",
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["noopener", "noreferrer"],
          plugins: ["@gridsome/remark-prismjs"],
        },
        refs: {
          // Each page is classified under a single category.
          category: {
            typeName: "Category",
          },
          // Can have multiple tags.
          // tags: {
          //   typeName: "Tag",
          // },
          // Can reference multiple languages to be listed on the language page.
          // languages: {
          //   typeName: "Language",
          // },
        },
      },
    },

    {
      use: "@gridsome/plugin-sitemap",
      options: {},
    },
  ],
  chainWebpack: (config) => {
    config.module
      .rule("css")
      .oneOf("normal")
      .use("postcss-loader")
      .tap((options) => {
        options.plugins.unshift(
          require("postcss-import"),
          require("tailwindcss")(),
          require("postcss-nesting")
        );
        return options;
      });
  },

  templates: {
    Category: [
      {
        path: "/category/:id/",
        component: "@/templates/Category.vue",
      },
    ],
    // Tag: [
    //   {
    //     path: "/tags/:id/",
    //     component: "@/templates/Tag.vue",
    //   },
    // ],
    Language: [
      {
        path: "/languages/:id/",
        template: "@/templates/Language.vue",
      },
    ],
  },
};
