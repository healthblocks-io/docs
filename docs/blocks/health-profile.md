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
import type { Observation } from '@healthblocks-io/core/types'

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

### Render a chart using Chart.js

There is a function `toTimeChart(observations)` available that prepares observations for passing them to Chart.js

```tsx
import { useSearch } from '@healthblocks-io/core/fhir'
import { toTimeChart } from '@healthblocks-io/core/observation'
import type { Observation } from '@healthblocks-io/core/types'

function ChartExample () {
  const { data } = useSearch<Observation>({ type: 'Observation' })
  const chart = toTimeChart(data?.entry)
  return chart && <ChartJS chart={chart} />
}
```

### Poll for the latest observations

Let's see if the response was actually saved by creating a page that shows all responses.

```tsx
import { useSearch } from '@healthblocks-io/core/fhir'
import { observationValue } from '@healthblocks-io/core/observation'
import type { Observation } from '@healthblocks-io/core/types'

function Example() {
  const { data, refetch } = useSearch<Observation>({ type: 'Observation' })
  const latest = data?.entry[0]
  const quantity = latest ? observationValue(latest) : null

  useEffect(() => {
    const interval = setInterval(refetch, 5000)
    return () => clearInterval(interval)
  }, [refetch])

  return quantity ? <div><b>{quantity.value}</b> {quantity.unit}</div> : null
}
```
