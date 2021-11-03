---
title: Theming
---

The `useTheme()` hook returns all available design tokens. It's a subset of the tokens in the Figma Design system.

```tsx
import { useTheme } from '@healthblocks/core/theme'

const Example = () => <p style={{ color: useTheme().primary.color }}>Primary color</p>
```

### Custom themes

Optionally, one can override parts of the theme using a provider. It's also possible to do this in a part of the app.

```tsx
import { ThemeProvider, useTheme } from '@healthblocks/core/theme'

const App = ()=>(
  <ThemeProvider overrides={{ primary: { color: 'red' } }}>
    <Example />
  </ThemeProvider>
)

const Example = () => {
  const theme = useTheme()
  return <Button style={{ color: theme.primary.color }}>Default theme primary</Button>
}
```

### Custom design tokens

Brands may use more semantic colors, in that case we can add more design tokens. The recommended way of handling this is by creating a `.d.ts` file and extend the Theme interface. It's not recommended to change the type of existing design tokens. This may interfere with future updates.

```ts
import '@healthblocks-io/core/types'

declare module '@healthblocks-io/core/types' {
  export interface Theme {
    customBrand: string
  }
}
```

After declaring the extended Theme interface, let's use it:

```tsx
<ThemeProvider overrides={{ customBrand: 'red' }}>
```

Seeing this error? `Type '{ customBrand: string; }' is not assignable to type 'Partial<Theme>'` that means Typescript is not picking up your declaration file. You may need to include it through `tsconfig.json`. Add the exact file path to `include`. For example: `"include": ["*.ts", "*.tsx", "pages/declare.d.ts"]`.


### More options

Find the [full list of options](http://localhost:3000/docs/types/modules/core_types#theme) in the types section.