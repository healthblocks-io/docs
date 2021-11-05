---
title: "Project configuration"
---

It's recommended to store configuration at the project level. This is available in the [Project Settings](https://dashboard.healthblocks.io/dr-corona/general). Standard and default settings are merged in the project object. Warning: project settings are public, anyone downloading your app can look into it.

### Prerequisites

* Create a project in the Healthblocks dashboard.

### Example


The API endpoint for this data is: `/api/projects/example` where you should replace dr-corona with your pid.

The recommended way to read project configuration is through the `useConfig()` hook. You should pass a function that selects the specific configuration option. This will allow future optimization that reduces rerenders when the project configuration is reloaded.

```tsx
import { ProjectProvider, useConfig } from '@healthblocks/core/project'

const App = () => (
  <ProjectProvider pid="example">
    <Screen />
  </ProjectProvider>
)

const Screen = () => {
  const appName = useConfig(p => p.config.appName)
  return <h1>Welcome to {appName}</h1>
}
```

## Preloaded configuration

Currently not available!

Using configuration preloading, it's possible to statically include a certain project configuration at build time. This speeds up the first app use.

## Configuration reference

Let's look at the project object: (this )

```ts
project = {
  // Auth0 integration data
  auth0: {
    app: { domain: '', clientId: '' },
    dashboard: { domain: '', clientId: '' }
  },
  
  // List of enabled blocks, may include custom blocks
  blocks: ['airtable', 'articles', 'i18n', 'questionnaires', ...],

  // General configuration, this can contain anything, some options are standardized
  config: {
    myCustomOption: ''
  },

  // These endpoints will be different when self hosting or developing locally
  env: {
    api: 'https://api.healthblocks.io'
    dashboard: 'https://dashboard.healthblocks.io'
    graph: 'https://graph.healthblocks.io'
  },

  // Response metadata
  pid: 'example',
  name: 'Example project',
  fetchtedAt: '2021-...'
}
```


More details? [See project API reference](/api#operation/getProjectById).