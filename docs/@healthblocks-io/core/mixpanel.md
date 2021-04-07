---
title: Mixpanel analytics integration
---

## Basic

`@healthblocks-io/core/analytics` provides basic event tracking with optional mixpanel integration based on project configuration.

```jsx
// Load Mixpanel token and hook into track()
import '@healthblocks-io/core/mixpanel'
import { track } from '@healthblocks-io/core/analytics'

track('Activity Started', { any: 'details' })
```

These events are saved in Mixpanel AND Healthblocks.

### Advanced (TODO)

Mixpanel provides more options, e.g. `people_increment`. These are not supported by Healthblocks at the moment. Therefor you can use Mixpanel directly:

```jsx
import { useMixpanel, MixpanelProvider } from '@healthblocks-io/core/mixpanel'

const App = () => (
  <MixpanelProvider>
    <MyButton />
  </MixpanelProvider>
)

const MyButton = () => {
  const mixpanel = useMixpanel()
  return <Button onPress={() => mixpanel.people_increment()} />
}
```

### Creating analytics plugins

```jsx
import { install } from '@healthblocks-io/core/analytics'

install({
  async track(data) {
    const { pid } = app()
    postJSON(TRACK_API + '/track', data)
  },
})
```
