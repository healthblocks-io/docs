---
title: "Content Suggestions"
---

An important part of virtual care is self care. One way to support that is by bringing the right information to patients.

### Prerequisites

* Configure Airtable app & key in project configuration.

### Example

You can grab the records of any table like this:

```tsx
import { useContent } from '@healthblocks-io/core/content'
import type { Suggestion } from '@healthblocks-io/core/types'

function Example () {}
  const suggestions = useContent<Suggestion>('Suggestions')

  return (
    <ul>
      {suggestions.map((s, key) => <li key={key}>{s.Title}</li>)}
    </ul>
  )
}
```
