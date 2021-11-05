---
title: Analytics tracking events
---

To build an amazing patient experience it's vitally important to understand the patient behaviour. An important tool for learning about usage is the analytics block. The dashboard and template-app track many user actions. 

```tsx
<AnalyticsProvider>
  <MixpanelProvider>
    <App />
  </MixpanelProvider>
</AnalyticsProvider>
```

### Page as property

When you want to track everything that happens on a speicific page, it may be cumbersome to add special cases all over your components. `AnalyticsDataProvider` to the rescue. All events that are triggered by the children of this component will include the extra properties from the provider.

```tsx
const Calendar = () => (
  <AnalyticsDataProvider properties={{ page: 'Calendar' }}>
    <CalendarPage />
  </AnalyticsDataProvider>
)
```

### Custom event handler

The AnalyticsProvider does not actually wrap its children in a context. It uses the underlying Hook context to emit events. You can handle all events by listening to the global event emitter: `useContext(Hook)`

```tsx
import React, { ReactNode } from 'react'
import { Hook } from '@healthblocks/core/hook'

function AnalyticsLogger ({ children }: { children: ReactNode }) {
  const hook = useContext(Hook)
  const track = useCallback((data: Partial<TrackData>) => console.log('track', data), [])
  hook.on('track', track, [track])
  return <>{children}</>
}

const Calendar = () => (
  <AnalyticsLogger>
    <CalendarPage />
  </AnalyticsLogger>
)
```

## Standardized events

We would like to automate behaviour analysis, therefor we recommended to use the event names below. Try to stick to a similar naming scheme: `[Noun] [Verb]` with a past tense verb.


### template-app

`App Started`

- When the user starts the app

### @healthblocks-io/native

`Onboarding Completed`

- When going through the 3 introductory screens (or skipping), this is always anonymous

`Navigate` ⇒ { route }

- When the user changes the tab or opens an article

`Profile Updated` ⇒ profile_key = name, email, birthdate, language, timezone, ...

- When the user profile is updated

`Question Answered` ⇒ { question_id, value }

- When the user answers a question, fid is the custom field id, value is the answer

`Article Opened`

- When the user navigates to an article

`Article Expanded`

- When the user clicks "Read more" at the bottom of a article

`Article Collapsed`

- When the user navigates away from an article

`Article Page In`

- When the user opens a page of an expanded article

`Article Page Out`

- When the user leaves a page of an expanded article

`Article Link Opened`

- When the user clicks "Learn more" to open a URL on an article

`Article Flow Started`

- When the user starts an assessment from a CTA on an article

`Medication Created`

- When the user confirms the creation of a medication reminder

`Medication Updated`

- When the user changes a medication reminder

`Medication Removed`

- When the user removes a medication remineer

`Medication Statement Created` ⇒ { medication_name, planned_time }

- When the user toggles a medication statement

`Medication Statement Removed` ⇒ { medication_name, planned_time }

- When the user undoes a medication statement

`Reminder Sent`

- When the backend sends a reminder notification, typically for the daily checkin

`Notification Sent`

- When the backend sends a notification, typically for a HITL message

`Notification Received`

- When the app is opened while a notification is received

`Notification Opened`

- When the user interacts with a received notification

### Conversation component

`Flow Started`

- When the user starts a new flow

`Flow Completed` ⇒ { flow }

- When the user answers the last question of a flow

Flow Opened

Flow Closed
