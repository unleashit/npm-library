import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NPM Library',
  tagline: 'Collection of React components',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://unleashit.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/npm-library',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'unleashit', // Usually your GitHub org/user name.
  projectName: 'npm-library', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          sidebarCollapsed: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/unleashit/npm-library/tree/master/shared/docs/',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
            [require('remark-code-snippets'), { baseDir: '../..' }],
          ],
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/unleashit/npm-library/tree/master/shared/docs/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'NPM Library',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Components',
        // },
        // { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/category/components', label: 'Components', position: 'left' },
        {
          href: 'https://npm-library-demo.vercel.app',
          label: 'Demo',
          position: 'left',
        },
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'right',
        // },
        {
          href: 'https://github.com/unleashit/npm-library',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Components',
              to: '/category/components',
            },
          ],
        },
        {
          title: 'Github',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/unleashit/npm-library',
            },
          ],
        },
        {
          title: 'Demo',
          items: [
            {
              label: 'Demo',
              href: 'https://npm-library-demo.vercel.app',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} unleashit`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'HBEMRWSYQI',

      // Public API key: it is safe to commit it
      apiKey: '0d49710c82b27ef87766a2522f80b927',

      indexName: 'npm-library',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },

      // Optional: Algolia search parameters
      // searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
