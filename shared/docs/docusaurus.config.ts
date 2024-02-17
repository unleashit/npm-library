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
  } satisfies Preset.ThemeConfig,
};

export default config;
