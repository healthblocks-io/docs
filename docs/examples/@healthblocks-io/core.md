---
title: "@healthblocks-io/core"
---


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
