---
title: "Care Plan"
---

A care plan represents a list of planned/proposed care activities.

```tsx
function ProjectApp () {}
  const auth = useAuthState()
  if (!auth) return <SignInScreen />

  return (
      <UserApolloProvider>
        <FHIRProvider>
          <PatientCareTeamProvider subject={user!.sub} fallback={Loading}>
            <Root />
          </PatientCareTeamProvider>
        </FHIRProvider>
      </UserApolloProvider>
  )

```