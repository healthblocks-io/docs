---
title: "@healthblocks-io/apollo"
---

This package has several hooks to easily access and update user data.

# General utilities

### useSubscription

A shorthand to use a subscription with a ready to the Apollo Client.

```tsx
import { gql, useSubscription } from '@healthblocks-io/apollo'

const Greeting = () => {
  const { data, error } = useSubscription(
    gql`
      subscription Profile($uid: uuid!) {
        users_by_pk(uid: $uid) {
          name
        }
      }
    `
  )
  return <Text>Welcome {data?.users_by_pk?.name || '...'}</Text>
}
```

### useProfile

Even though this hook may fetch more data than you need, it is optimised to only run once while being used in several components.

```tsx
import { useProfile } from '@healthblocks-io/apollo'

const Greeting = () => {
  const { loading, name, doc } = useProfile()
  return <Text>Welcome {loading ? '...' : name || doc.name}</Text>
}
```

# Questionnaires

### useQuestionnaires

Only the latest version of published questionnaires are returned

```tsx
import { useQuestionnaires } from '@healthblocks-io/apollo'

const Greeting = () => {
  const { data } = useQuestionnaires()
  return <Text>There are {data?.questionnaires.length} questionnaires</Text>
}
```

### useQuestionnaireByName

Only the latest version of a published questionnaire is returned

name === machine/developer readable identifier

title === human readable title

```tsx
import { useQuestionnaireByName } from '@healthblocks-io/apollo'

const Greeting = () => {
  const { data } = useQuestionnaireByName('onboarding')
  return <Text>Title {data?.questionnaires[0]?.title}</Text>
}
```

### saveQuestionnaireResponse

```tsx
import { saveQuestionnaireResponse } from '@healthblocks-io/apollo'

const Greeting = () => {
  const send = () => saveQuestionnaireResponse({ questionnaire_id, answers })
  return <Button onPress={send}>Send</Button>
}
```
