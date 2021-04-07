---
title: Error (ErrorBoundary)
---

This error boundary displays the caught error message.

Enable Sentry error logging (recommended)

```tsx
<ErrorBoundary sentry>
  <App />
</ErrorBoundary>
```

Use custom Sentry configuration

```tsx
<ErrorBoundary sentry={{ dsn: 'https://...ingest.sentry.io/...' }}>
```

Show a custom error screen

```tsx
const FallbackScreen = ({ error }) => <Text>{error.message}</Text>
<ErrorBoundary screen={FallbackScreen}>
```

Handle clicks on the default error screen

```tsx
<ErrorBoundary onPress={() => alert('Restart the app')}>
```

More info: [https://reactjs.org/docs/error-boundaries.html](https://reactjs.org/docs/error-boundaries.html)
