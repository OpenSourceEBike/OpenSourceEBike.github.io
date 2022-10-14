// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "OpenSource-EBike",
  tagline: "OpenSource E-Bike Information and Firmwares",
  url: "https://opensource-ebike.org",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/hotlink-ok/favicon/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "OpenSourceEBike", // Usually your GitHub org/user name.
  projectName: "OpenSourceEBike.github.io", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/OpenSourceEBike/OpenSourceEBike.github.io/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  // https://gabrielcsapo.github.io/docusaurus-plugin-image-zoom/docs/getting-started/
  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    require.resolve("docusaurus-plugin-google-adsense"),
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      googleAdsense: {
        dataAdClient: "ca-pub-9270569596814796",
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      zoom: {
        selector: ".markdown :not(em) > img",
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          margin: 100,
          background: {
            light: "rgb(255, 255, 255)",
            dark: "rgb(50, 50, 50)",
          },
        },
      },
      navbar: {
        title: "OpenSource-Ebike",
        logo: {
          alt: "OpenSource-Ebike logo",
          src: "img/hotlink-ok/logo/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "tsdz2/intro",
            position: "left",
            label: "TSDZ2",
          },
          {
            type: "doc",
            docId: "bafang/intro",
            position: "left",
            label: "Bafang",
          },
          {
            type: "doc",
            docId: "display/intro",
            position: "left",
            label: "Display",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/OpenSourceEBike/OpenSourceEBike.github.io",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Other",
            items: [
              //  {
              //    label: "FAQ",
              //    href: "/manual/FAQ"
              //  }
            ],
          },
          {
            title: "Community",
            items: [
              //  {
              //    label: "Twitter",
              //    href: "https://twitter.com/useTrueCharts"
              //  },
              //  {
              //    label: "Discord",
              //    href: "https://discord.gg/tVsPTHWTtr"
              //  },
              //  {
              //    label: "Facebook",
              //    href: "https://www.facebook.com/truecharts",
              //  },
              //  {
              //    label: "Telegram",
              //    href: "https://t.me/s/truecharts"
              //  }
            ],
          },
          {
            title: "Legal",
            items: [
              // {
              //   label: "Code of Conduct",
              //   href: "https://github.com/codeofconduct"
              // },
              // {
              //   label: "License",
              //   href: "https://github.com/LICENSE"
              // },
              // {
              //   label: "Apach2-license",
              //   href: "https://github.com/Apach2-license"
              // }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpenSource-EBike`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "WZ05W1IA1Q",

        // Public API key: it is safe to commit it
        apiKey: "1f3e66a5e4ee6a3963ac68d432cce0e3",

        indexName: "opensource-ebike",

        //... other Algolia params
      },
    }),
};

module.exports = config;
