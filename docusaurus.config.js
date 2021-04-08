/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Healthblocks',
  tagline: 'Build engaging digital health solutions, faster.',
  url: 'https://docs.healthblocks.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/healthblocks-logo-white.png',
  organizationName: 'healthblocks-io', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Healthblocks',
      logo: {
        alt: 'Healthblocks Logo',
        src: 'img/healthblocks-logo-white-round.png',
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'api',
          activeBasePath: 'api',
          label: 'API',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/healthblocks-io/docs',
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
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/healthblocks',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/healthblocks',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/healthblocks',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/healthblocks-io/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Healthblocks.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/healthblocks-io/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/healthblocks-io/docs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            specUrl: 'https://redocly.github.io/redoc/openapi.yaml',
          },
        ],
      },
    ],
  ],
}
