// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yakt',
  tagline: 'Yet Another Kernel Tweaker',
  favicon: 'img/favicon.ico',

  // GitHub Pages configuration
  url: 'https://NotZeetaa-business.github.io',
  baseUrl: '/Yakt-site/',
  organizationName: 'NotZeetaa-business',
  projectName: 'Yakt-site',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn', // Changed from 'throw' to 'warn' temporarily
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/NotZeetaa-business/yakt-site/tree/main/',
          path: './pages',
          // Add this to ignore JSX in Markdown
          remarkPlugins: [
            () => (tree) => {
              // This will prevent processing of JSX elements
            }
          ]
        },
        blog: false, // Disable blog if not using it
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/yakt_banner.jpg',
    navbar: {
      title: ' Yakt',
      logo: {
        alt: 'Yakt Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'SidebarYakt',
          position: 'left',
          label: 'Start',
        },
        {
          href: 'https://github.com/NotZeetaa-business/yakt-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Yakt',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/features',
            },
            {
              label: 'Features',
              to: '/docs/features',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/YAKTC',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/NotZeetaa-business/yakt-site',
            },
            {
              label: 'Download',
              to: '/docs/download',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yakt. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;