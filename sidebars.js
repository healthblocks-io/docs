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
      label: 'Examples',
      collapsed: false,
      items: [
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
      collapsed: false,
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
