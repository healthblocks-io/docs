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

if (process.env.GENERATE_TYPEDOC) {
  module.exports.presets.push([
    'docusaurus-plugin-typedoc',

    // Plugin / TypeDoc options
    {
      id: 'one',
      out: 'types',
      readme: 'none',
      disableSources: true,
      tsconfig: '../tsconfig.json',
      entryPoints: [
        '../apollo/index.ts',
        '../apollo/client.ts',
        '../apollo/activity.tsx',
        '../apollo/questionnaire.tsx',
        '../apollo/debug.ts',
        '../core/analytics.tsx',
        '../core/app.ts',
        '../core/auth.ts',
        '../core/content.ts',
        '../core/dev.ts',
        '../core/graph.ts',
        '../core/log.ts',
        '../core/mixpanel.ts',
        '../core/project.ts',
        '../core/storage.ts',
        '../core/theme.ts',
        '../core/types.ts',
        '../core/upload.ts',
        '../native/Article.tsx',
        '../native/Auth.tsx',
        '../native/Avatar.tsx',
        '../native/Badge.tsx',
        '../native/Button.tsx',
        '../native/Card.tsx',
        '../native/Chip.tsx',
        '../native/ClosedBeta.tsx',
        '../native/Consent.tsx',
        '../native/DatePicker.tsx',
        '../native/DeleteUser.tsx',
        '../native/Error.tsx',
        '../native/Icon.tsx',
        '../native/Language.tsx',
        '../native/Loading.tsx',
        '../native/Markdown.tsx',
        '../native/NotificationSettings.tsx',
        '../native/Onboarding.tsx',
        '../native/OnboardingLottie.tsx',
        '../native/OnboardingPager.tsx',
        '../native/Pages.tsx',
        '../native/Passwordless.tsx',
        '../native/Reminder.tsx',
        '../native/push.ts',
        '../native/theme.ts',
        '../native/TimePicker.tsx',
        '../native/types.ts',
        '../native/Version.tsx',
      ],
    },
  ])
}
