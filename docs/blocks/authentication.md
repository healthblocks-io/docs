---
title: "Secure Authentication"
---

Healthblocks Authentication is based on a rotating JWT token.

### Prerequisites

* Configure the Auth0 integration in project configuration.

### Example

First wrap your app in `<AuthProvider>` and `<ProjectProvider>`.

```tsx
import { ProjectProvider } from '@healthblocks/core/project'
import { AuthProvider } from '@healthblocks/core/auth'

const App = () => {
  return (
    <ProjectProvider pid="example">
      <AuthProvider>
        <Screens />
      </AuthProvider>
    </ProjectProvider>
  )
}
```

Now only show the sign in screen when the user is not logged in yet.

```tsx
import { useAuth, useUser } from '@healthblocks/core/auth'

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

### Available hooks

`useAuth` returns the auth state and useful sign in methods.
- `data` has the auth state
- `loading` is true when one of the sign in methods is busy
- `error` has the last auth error
- `dismissError()` clears the error state
- `signInAnonymously()` is a way to create an account without credentials
- `signInAnonymously()` is a way to create an account without credentials
- `signInWithToken(id_token)` is a way to sign in using Auth0 or other providers
- `signInWithEmailAndPassword(email, password)` is a way to sign in using Auth0 email/password
- `createUserWithEmailAndPassword(email, password, code)` is a way to create an account using email/password
- `sendPasswordResetEmail(email)` sends a password reset email

`useUser` returns the decoded id_token of the currently logged in user.
- `sub` is the user id
- `email` is the verified user email address
- `phone` is the verified user phone number
