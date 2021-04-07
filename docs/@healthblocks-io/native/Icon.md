---
title: Icon
---

The Icon component receives the name of icon as prop. The name can be any of the 28 built-in icons. The Button component accepts the same icon names, also the custom ones.

### Adding custom icons

The starting template already contains some examples of custom icons. Check out src/components/CustomIcon, that is also the place to add more.

The idea is that you reuse the same Icon component, but at the start of the app, add/replace icons in the underlying icon set: `icons`.

```tsx
// src/components/CustomIcon.tsx

// icons is an object where every value contains the contents of an SVG element
import { icons } from '@healthblocks-io/native/Icon'

// mutate the object
icons.myCustomIcon = (
  <Path
    d="M20 6L9 17l-5-5"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
)
```

You can import `src/components/Icon` once in App.tsx and `myCustomIcon` is now available in all places that show icons.

### Recommended

To make the dependency on custom icons clearer, it's also possible to re-export the Icon component like this:

This way, you can use `@healthblocks-io/native/Icon` and `src/components/Icon` interchangeably, just don't forget to import src/components/Icon at least once!

### Custom icon viewBox

The icon viewBox is expected to be 24x24, if that doesn't work for you icon, you can override the viewBox for an icon like this:

```tsx
// src/components/CustomIcon.tsx
import { viewBoxes } from '@healthblocks-io/native/Icon'
viewBoxes.add('myCustomIcon', '0 0 18 18')
```

Alternatively you can apply it case per case:

```tsx
<Icon icon="myCustomIcon" viewBox="0 0 18 18" />
```
