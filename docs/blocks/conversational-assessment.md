---
title: "Conversational Assessment"
---

Verify that your app is Wrapped inside `<AuthProvider>` and `<ProjectProvider>`.

```tsx
import { ProjectProvider } from '@healthblocks/core/project'
import { AuthProvider, useAuth, useUser } from '@healthblocks/core/auth'

const App = () => {
  return (
    <ProjectProvider pid="example">
      <AuthProvider>
        <Screens />
      </AuthProvider>
    </ProjectProvider>
  )
}

const Screens = () => {
  const user = useUser()
  if (!user) {
    return <SignInScreen />
  }
  return <div>Logged in as {user.sub}</div>
}

const SignInScreen = () => {
  const { signInWithEmailAndPassword, createUserWithEmailAndPassword } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div>
      <input
        placeholder="email"
        onChange={(evt) => setEmail(evt.target.value)}
      />
      <input
        placeholder="password"
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <button onClick={() => signInWithEmailAndPassword(email, password)}>Sign in</button>
      <button onClick={() => createUserWithEmailAndPassword(email, password)}>Register</button>
    </div>
  )
}
```