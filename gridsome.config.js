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
            title: "Training",
            items: [
              "/concepts/kata/",
              "/concepts/kata/training-routines/",
              "/concepts/kata/tests/",
              "/concepts/kata/solutions/",
              "/concepts/kata/discourse/",
              "/concepts/kata/collections/",
              "/concepts/kumite/",
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
          /* {
            title: "How to...",
            items: ["/recipes/solve-kata/", "/recipes/create-kata/"],
          },*/
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
          {
            title: "Authoring",
            items: [
              "/authoring/",
              "/authoring/kata/",
              "/authoring/translation/",
            ],
          },
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
              "/authoring/guidelines/kata/",
            ],
          },
        ],
      },
      {
        name: "curating",
        sections: [
          {
            title: "Curating",
            items: ["/curating/", "/curating/kata/", "/curating/translation/"],
          },
          {
            title: "Curating Guidelines",
            items: [
              "/curating/guidelines/",
              "/curating/guidelines/kata/",
              "/curating/guidelines/translation/",
            ],
          },
          {
            title: "See Also",
            items: ["/authoring/guidelines/"],
          },
        ],
      },
      {
        name: "community",
        sections: [
          {
            title: "Community",
            items: [
              "/community/",
              "/community/moderation/",
              "/community/rules/",
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
            [
              "gridsome-remark-figure-caption",
              {
                figureClassName: "w-full",
                imageClassName: "object-contain mx-auto",
                captionClassName: "text-center",
              },
            ],
            [
              "gridsome-plugin-remark-container",
              {
                icons: "svg",
                classMaster: "admonition",
                // Using heroicons instead because it's easier to style, consistent, and are all square.
                useDefaultTypes: false,
                customTypes: {
                  // Ignore the `emoji` field. The plugin requires emoji field to be truthy for some reason.
                  note: {
                    keyword: "note",
                    defaultTitle: "Note",
                    // annotation
                    svg:
                      '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>',
                    emoji: "n",
                  },
                  tip: {
                    keyword: "tip",
                    defaultTitle: "Tip",
                    // light-bulb
                    svg:
                      '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>',
                    emoji: "t",
                  },
                  info: {
                    keyword: "info",
                    defaultTitle: "Info",
                    // information-circle
                    svg: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
                    emoji: "i",
                  },
                  warning: {
                    keyword: "warning",
                    defaultTitle: "Warning",
                    // exclamation
                    svg:
                      '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>',
                    emoji: "w",
                  },
                  caution: {
                    keyword: "caution",
                    defaultTitle: "Caution",
                    // fire
                    svg:
                      '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>',
                    emoji: "c",
                  },
                  details: {
                    keyword: "details",
                    customBlock: true,
                    tagName: "details",
                    children: `[element('summary', '', titleNodes), contentNodes]`,
                    properties: {
                      type: "info",
                      className: ["admonition-details"],
                    },
                  },
                },
              },
            ],
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
