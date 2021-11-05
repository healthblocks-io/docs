/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  docs: [
    'getting-started',
    {
      type: 'category',
      label: 'Blocks',
      collapsed: false,
      items: [
        'blocks/project-configuration',
        'blocks/authentication',
        'blocks/content-suggestions',
        'blocks/conversational-assessment',
        'blocks/health-profile',
        'blocks/care-plan-activities',
        'blocks/analytics-tracking-events',
        'blocks/mixpanel',
        'blocks/theming',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/expo-template-app',
        'guides/next-template-app',
        'guides/graphiql-console',
        'guides/e2e-testing-with-detox',
        'guides/translations',
        'guides/upgrade',
        'deploy/aws',
        'deploy/gcp',
        'guides/express',
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
