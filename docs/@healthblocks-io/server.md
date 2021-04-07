---
title: Serverside integration
---

# @healthblocks-io/server

@healthblocks-io/server DOES NOT EXIST YET, see code below

### Next.js example WITHOUT verifying user credentials

```tsx
// pages/api/homescreen
import { gql, query } from '@healthblocks-io/server/graphql'

export default async function (req, res) {
  const result = await query(
    gql`
      query Profile($uid: String!) {
        users_by_pk(uid: $uid) {
          doc
        }
      }
    `,
    { uid: req.uid },
    { auth: req.headers.authorization.replace('Bearer ', '') }
  )

  res.json({ user: result.data.users_by_pk })
}
```

### Next.js example with verifying user credentials

```tsx
// pages/api/homescreen
import { verify } from '@healthblocks-io/server/auth'
import { gql, query } from '@healthblocks-io/server/graphql'

export default async function (req, res) {
  await verify(req)
  if (!['user', 'moderator', 'owner'].includes(req.role))
    return res.status(401).json({ message: 'Not authorized' })

  console.log('Your role', req.role)
  console.log('Your uid', req.uid)
  console.log('Your project', req.pid)

  await query(
    gql`
      query Profile($uid: String!) {
        users_by_pk(uid: $uid) {
          doc
        }
      }
    `,
    { uid: req.uid },
    { auth: req.auth }
  )

  res.json({ role: req.role })
}
```

Verify

```tsx
// @healthblocks-io/server/auth
import { getJSON } from '@bothrs/util/fetch'

export async function verify(req) {
  if (req.headers.authorization) {
    req.auth = req.headers.authorization.replace('Bearer ', '')
    const user = await getJSON('https://api.healthblocks.io/api/auth', {
      auth: req.auth,
    })
    Object.assign(req, user)
  }
}
```

GraphQL

```tsx
// @healthblocks-io/server/graphql
import { postJSON } from '@bothrs/util/fetch'

const api = process.env.HASURA_GRAPHQL_ORIGIN || 'https://graph.healthblocks.io'

// TODO
export const gql = String.raw

export async function query(query, variables, options) {
  try {
    const result = await postJSON(
      api + '/v1/graphql',
      { query, variables },
      options
    )
  } catch (e) {
    // await Sentry.captureException(e, { extra: { query, variables } })
    return {
      data: null,
      errors: [{ message: e.message }],
    }
  }
}
```
