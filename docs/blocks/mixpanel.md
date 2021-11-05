---
title: "Mixpanel"
---

The recommended way to save tracking events both in Healthblocks AND in Mixpanel is like this:

```tsx
<AnalyticsProvider>
  <MixpanelProvider>
    <App />
  </MixpanelProvider>
</AnalyticsProvider>
```

The MixpanelProvider will automatically pick up the token based on project configuration. So make sure to configure it there too. If you want to check which token is used, try this:

```tsx
const token = useConfig(p => p.config.mixpanel)
```
