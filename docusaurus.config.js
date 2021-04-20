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
    colorMode: {
      defaultMode: "dark",
    },
    algolia: {
      // Search only API key
      apiKey: "651420d53bdf2d24b6719c6777dc69a4",
      indexName: "codewars-docs",
      appId: "2O5VWTLFC8",
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
        // {
        //   label: "Languages",
        //   position: "left",
        //   items: [
        //     {
        //       label: "JavaScript",
        //       href: "/languages/javascript",
        //     },
        //   ],
        // },
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
    prism: {
      // theme: require("prism-react-renderer/themes/vsLight"),
      // darkTheme: require("prism-react-renderer/themes/vsDark"),
      additionalLanguages: ["ruby", "rust", "toml"],
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
