---
title: Accessing the GraphiQL console
---

### Use dashboard GraphiQL with anonymous user

1. Sign in to the dashboard `https://dashboard.healthblocks.io`
2. Visit Settings > GraphiQL

### Use GraphiQL with anonymous user

You can use the [GraphiQL Electron app](https://www.electronjs.org/apps/graphiql) to connect:

1. Set GraphQL endpoint: `https://graph.healthblocks.io/v1/graphql`
2. Create anonymous user: `https://api.healthblocks.io/api/auth?pid=<PID>`
3. Note down the `id_token` it starts with `eY`
4. Add HTTP Header: `Authorization` with value `Bearer eY.....`
5. Keep the JSON headers (content-type)

The GraphQL API at [graph.healthblocks.io](http://graph.healthblocks.io) has a built-in GraphiQL console, but it's not enabled today. We are looking into enabling it.
