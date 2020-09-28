// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Codewars Docs",
  icon: {
    favicon: "./src/assets/favicon.png",
    touchicon: "./src/assets/favicon.png",
  },
  siteUrl: "https://docs.codewars.com",
  settings: {
    web: "https://www.codewars.com",
    twitter: process.env.URL_TWITTER || false,
    github: "https://github.com/codewars",
    // Repository for this documentation.
    repository: "https://github.com/codewars/docs",
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
      {
        name: "getting-started",
        sections: [
          {
            title: "Getting Started",
            items: [
              "/getting-started/",
              "/getting-started/registering/",
              "/getting-started/setting-up/",
              "/getting-started/finding-kata/",
              "/getting-started/solving-kata/",
              "/getting-started/kata-solved/",
              "/getting-started/solutions/",
              "/getting-started/community/",
            ],
          },
        ],
      },
      {
        name: "explanation-kata",
        sections: [
          {
            title: "Solving",
            items: [
              "/concepts/kata/",
              "/concepts/kata/training-routines/",
              "/concepts/kata/tests/",
              "/concepts/kata/solutions/",
              "/concepts/kata/discourse/",
              "/concepts/kata/collections/",
            ],
          },
          {
            title: "Contributing",
            items: [
              "/concepts/kata/satisfaction-rating/",
              "/concepts/kata/beta-process/",
              "/concepts/kata/translations/",
            ],
          },
          {
            title: "How to...",
            items: ["/recipes/solve-kata/", "/recipes/create-kata/"],
          },
        ],
      },
      {
        name: "markdown",
        sections: [
          {
            title: "Markdown Syntax",
            items: [
              "/references/markdown/",
              "/references/markdown/extensions/",
            ],
          },
        ],
      },
      {
        name: "ranks-honor",
        sections: [
          {
            title: "About",
            items: [
              "/concepts/gamification/",
              "/concepts/gamification/ranks/",
              "/concepts/gamification/honor/",
              "/concepts/gamification/privileges/",
            ],
          },
          {
            title: "References",
            items: [
              "/references/gamification/ranks/",
              "/references/gamification/honor/",
              "/references/gamification/privileges/",
            ],
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
          // Each documentation should belong to a single kind.
          kind: {
            typeName: "Kind",
          },
          // Can have multiple tags.
          tags: {
            typeName: "Tag",
          },
          // Can reference multiple languages to be listed on the language page.
          languages: {
            typeName: "Language",
          },
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
    Tag: [
      {
        path: "/tags/:id/",
        component: "@/templates/Tag.vue",
      },
    ],
    Language: [
      {
        path: "/languages/:id/",
        template: "@/templates/Language.vue",
      },
    ],
  },
};
