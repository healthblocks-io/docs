module.exports = {
  docs: [
    'getting-started',
    {
      type: 'category',
      label: 'React Native',
      items: [
        'guides/expo-template-app',
        'guides/analytics-tracking-events',
        'guides/e2e-testing-with-detox',
        'guides/translations',
        'guides/upgrade',
      ],
    },
    {
      type: 'category',
      label: 'React',
      items: ['guides/next-template-app'],
    },
    {
      type: 'category',
      label: 'Dashboard',
      items: ['guides/graphiql-console'],
    },
    {
      type: 'category',
      label: 'Server',
      // collapsed: false,
      items: ['deploy/aws', 'deploy/gcp', 'guides/express'],
    },
    {
      type: 'category',
      label: 'Examples',
      // collapsed: false,
      items: [
        'examples/sign-in-screen',
        'examples/project-config',
        'examples/theming',
        // 'examples/web-questionnaires',
        'examples/@healthblocks-io/core',
        'examples/@healthblocks-io/apollo',
        'examples/@healthblocks-io/native/Icon',
        'examples/@healthblocks-io/native/Error',
        'examples/@healthblocks-io/server',
      ],
    },
    {
      type: 'category',
      label: 'Types',
      // collapsed: false,
      items: splitModules(require('./typedoc-sidebar')),
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

// function types(folder = 'modules') {
//   return require('fs')
//     .readdirSync('./docs/types/' + folder + '')
//     .map((a) => 'types/' + folder + '/' + a.replace('.md', ''))
// }

function splitModules([toc, x, ...rest]) {
  if (!x) return []
  return [
    toc,
    {
      type: 'category',
      label: '@healthblocks-io/core',
      items: x.items.filter((i) => i.includes('/core')),
    },
    {
      type: 'category',
      label: '@healthblocks-io/apollo',
      items: x.items.filter((i) => i.includes('/apollo')),
    },
    {
      type: 'category',
      label: '@healthblocks-io/native',
      items: x.items.filter((i) => i.includes('/native')),
    },
    ...rest,
  ]
}
