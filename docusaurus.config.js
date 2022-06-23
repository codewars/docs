const { createHighlighter } = require("./src/remark/shiki");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "The Codewars Docs",
  tagline: "Achieve mastery through challenge",
  url: "https://docs.codewars.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  organizationName: "codewars",
  projectName: "docs",
  // https://docusaurus.io/docs/next/api/themes/configuration
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    colorMode: {
      defaultMode: "dark",
    },
    algolia: {
      // Search only API key
      apiKey: "651420d53bdf2d24b6719c6777dc69a4",
      indexName: "codewars-docs",
      appId: "2O5VWTLFC8",
      contextualSearch: false,
    },
    navbar: {
      title: "Codewars",
      hideOnScroll: true,
      logo: {
        alt: "Codewars Logo",
        src: "logo.svg",
        // srcDark: "",
        href: "https://www.codewars.com/",
      },
      items: [
        {
          label: "Docs",
          activeBaseRegex: "/(?!search)",
          position: "left",
          to: "/",
        },
        {
          href: "https://github.com/codewars",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub",
        },
      ],
    },
    footer: {
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Codewars`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "content",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/codewars/docs/edit/master/",
          beforeDefaultRemarkPlugins: [
            createHighlighter({
              themes: ["github-dark-dimmed", "github-light"],
            }),
          ],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: ["./sitePlugin.js"],
};
