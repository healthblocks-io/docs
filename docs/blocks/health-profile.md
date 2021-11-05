---
title: "Health Profile"
---

The health profile represents a set of FHIR resources.

### Provider setup

Enable the `useFHIR()` hook using the `<FHIRProvider>`.

```tsx
import { FHIRProvider } from '@healthblocks-io/core/fhir'

function ProjectApp () {}
  const auth = useAuthState()
  if (!auth) return <SignInScreen />

  return (
    <FHIRProvider>
      <Example />
    </FHIRProvider>
  )
}
```

Now let's use `useSearch()` to retrieve all observations.

```tsx
import { useSearch } from '@healthblocks-io/core/fhir'
import { toTimeChart } from '@healthblocks-io/core/observation'
import { Observation } from '@healthblocks-io/core/types'

function Example() {
  const search = useSearch<Observation>({ type: 'Observation' })

  if (!search.data?.entry) return <Loading />
  if (!search.data.entry.length) return <EmptyScreen title="No observations" />

  return (
    <>
      {search.data.entry.map((observation, key) => ...)}
    </>
  )
}
```

### Chart.js

There is a function `toTimeChart(observations)` available that prepares observations for passing them to Chart.js

```tsx
import { useSearch } from '@healthblocks-io/core/fhir'
import { toTimeChart } from '@healthblocks-io/core/observation'
import { Observation } from '@healthblocks-io/core/types'

function ChartExample () {
  const search = useSearch<Observation>({ type: 'Observation' })
  const chart = toTimeChart(search.data?.entry)
  return chart && <ChartJS chart={chart} />
}
```
