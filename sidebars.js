module.exports = {
  docs: [
    'getting-started',
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        'guides/initial-project-setup',
        'guides/analytics-tracking-events',
        'guides/translations',
        'guides/graphiql-console',
        'guides/e2e-testing-with-detox',
        'guides/upgrade',
      ],
    },
    {
      type: 'category',
      label: '@healthblocks-io/native',
      collapsed: false,
      items: [
        '@healthblocks-io/native/components',
        {
          type: 'category',
          label: 'Components',
          items: [
            '@healthblocks-io/native/Error',
            '@healthblocks-io/native/Icon',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '@healthblocks-io/apollo',
      collapsed: false,
      items: ['@healthblocks-io/apollo/examples'],
    },
    {
      type: 'category',
      label: '@healthblocks-io/core',
      collapsed: false,
      items: [
        '@healthblocks-io/core/examples',
        '@healthblocks-io/core/mixpanel',
      ],
    },
    {
      type: 'category',
      label: 'Server',
      collapsed: false,
      items: ['@healthblocks-io/server'],
    },
    {
      type: 'link',
      label: 'API reference',
      href: '/api',
    },
    {
      type: 'link',
      label: 'DNA / Design tokens',
      href: 'https://design.healthblocks.io',
    },
    {
      type: 'link',
      label: 'healthblocks.io',
      href: 'https://healthblocks.io',
    },
  ],
}
