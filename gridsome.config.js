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
        name: "getting-started",
        sections: [
          {
            title: "Getting Started",
            items: [
              "/training/getting-started/",
              "/training/getting-started/registering/",
              "/training/getting-started/setting-up/",
              "/training/getting-started/finding-kata/",
              "/training/getting-started/solving-kata/",
              "/training/getting-started/kata-solved/",
              "/training/getting-started/solutions/",
              "/training/getting-started/community/",
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
      {
        name: "authoring",
        sections: [
          // TODO Tutorials
          // {
          //   title: "Tutorials",
          //   items: [
          //     "/authoring/tutorials/",
          //   ],
          // },
          {
            title: "Guidelines",
            items: [
              "/authoring/guidelines/",
              "/authoring/guidelines/description/",
              "/authoring/guidelines/coding/",
              "/authoring/guidelines/sample-tests/",
              "/authoring/guidelines/submission-tests/",
              "/authoring/guidelines/preloaded/",
              "/authoring/guidelines/reference-solution/",
              "/authoring/guidelines/translation/",
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
          plugins: [
            "remark-attr",
            "@gridsome/remark-prismjs",
            "gridsome-plugin-remark-container",
          ],
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
          require("postcss-nesting"),
          require("autoprefixer")
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
