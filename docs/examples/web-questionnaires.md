---
title: "Questionnaires on web"
---

### Building a questionnaire on web

This store should be initialized when the application starts.

```tsx
import { useHealthblocks, initialize } from '@healthblocks/core/app'

initialize({
  pid: 'dr-corona',
})

// TODO: considering <HealthblocksProvider> (doesn't exist)
```

### @healthblocks-io/core/auth

This store contains data related to sign in, JWT tokens, refresh tokens. `setAuth()` accepts a JWT token or an AuthState object which typically looks like `{ id_token: "..." }`

```tsx
import { signInAnonymously, useAuth, useUser } from '@healthblocks/core/auth'

const SignIn = () => (
  <Button onPress={() => signInAnonymously(email, password)} />
)

const SignInScreen = () => {
  const { id_token, loading, signInError } = useAuth()
  const { sub, name, email } = useUser() // Decoded JWT
}
```

### @healthblocks-io/core/project

This store contains a cache of projects that have been opened. This will allow to switch between projects on the fly. This store might subscribe to the current project data, currently it does not.

```tsx
import { useProject } from '@healthblocks/core/project'

const Greeting = () => {
  const project = useProject()
  return <Text>Welcome to {project.config.appName}</Text>
}
```

### @healthblocks-io/core/theme

This module provides helpers & hooks for the current theme

```tsx
import { useTheme } from '@healthblocks/core/theme'

const RocketLauncher = () => {
  const theme = useTheme()
  return <Button style={{ color: theme.color.primary }}>Launch</Button>
}
```

### @healthblocks-io/core/upload

This module allows users to safely upload personal images.

```tsx
import { upload, useSignedURL } from '@healthblocks/core/upload'

const Camera = () => {
  const takePicture = () => {
    const file = await cameraRef.takePictureAsync()
    const selfie = await upload(file)
    // await updateProfile({ selfie })
  }
  return <Button onPress={takePicture}>Take picture</Button>
}

const Avatar = () => {
  const sign = useSignedURL()
  const doc = useProfile()
  return <Image source={{ uri: sign(doc.selfie.url) }} />
}
```
