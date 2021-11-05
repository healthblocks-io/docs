---
title: "Care Plan"
---

A care plan represents a list of planned/proposed care activities.

Let's use this as a base:

```tsx
import { FHIRProvider } from '@healthblocks-io/core/fhir'

function ProjectApp () {}
  const auth = useAuthState()
  if (!auth) return <SignInScreen />

  return (
    <FHIRProvider>
      <CalendarScreen />
    </FHIRProvider>
  )
}
```

The FHIRProvider enables the use of the `useFHIR()` hook. This can be used to load the activities we want to show on a calendar:

```tsx
import { useSearch } from '@healthblocks-io/core/fhir'
import { CarePlanActivity } from '@healthblocks-io/core/types'
import Calendar, { CalendarContext } from '@healthblocks-io/native/Calendar'
import Loading from '@healthblocks-io/native/Loading'

function CalendarScreen() {
  const search = useSearch<CarePlanActivity>({
    type: 'CarePlan.Activity',
  })

  // This context is passed to calendar items
  const refresh = search.refetch
  const context = useMemo(() => ({ refresh }), [refresh])

  if (!search.data?.entry) {
    return <Loading />
  }
  if (!search.data.entry.length) {
    return <EmptyScreen title="No activities" />
  }
  return (
    <CalendarContext.Provider value={context}>
      <Calendar activities={search.data.entry} />
    </CalendarContext.Provider>
  )
}
```
