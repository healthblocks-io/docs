---
title: Getting started with Next.js
---

### Use cases:
- Let's make a web app that allows the user to fill in a questionnaire.

### Prerequisites
- Install node.js 12.22+
- Create a project and note down the `pid` (project id)

### Steps

Let's use `healthblocks-template-app` as the project name.

1. Install next.js and healthblocks

   ```bash
   npx create-next-app@latest --typescript
   # Change directory to project folder
   cd healthblocks-template-app
   npm install --save @healthblocks-io/core @healthblocks-io/apollo
   ```

2. Add the Healthblocks providers in `pages/_app.tsx`. This will enable the use of hooks throughout your whole app.

    `LocalProvider` - Required: where in localStorage should data be saved  
    `ProjectProvider` Required: which project to load  
    `AuthProvider` - Required: handle sign in state  
    `AnalyticsProvider` - Optional: captures tracking events and sends them to API  
    `MixpanelProvider` - Optional: captures tracking events and sends them to Mixpanel  

    ```tsx
    <LocalProvider scope="example/local">
      <ProjectProvider api="https://api.healthblocks.io" pid="example">
        <AuthProvider>
          <AnalyticsProvider>
            <MixpanelProvider>
              <Component {...pageProps} />
            </MixpanelProvider>
          </AnalyticsProvider>
        </AuthProvider>
      </ProjectProvider>
    </LocalProvider>
    ```

3. Let's create a sign in page in `pages/index.tsx`

    ```tsx
    import { useAuth, useUser } from '@healthblocks-io/core/auth'
    import { useProjectFallback } from '@healthblocks-io/core/project'

    const Home: NextPage = () => {
      const fallback = useProjectFallback()
      const { signOut, signInAnonymously } = useAuth()
      const user = useUser()
      return (
        <div className={styles.container}>
          <main className={styles.main}>
            {fallback ? (
              'Project is not loaded...'
            ) : !user ? (
              <button onClick={signInAnonymously}>Sign in anonymously</button>
            ) : (
              <div>
                Signed in as {user.sub}!
                <br />
                <button onClick={signOut}>Sign out</button>
              </div>
            )}
          </main>
        </div>
      )
    }
    ```

4. Now let's show the questionnaire to logged in users

    ```tsx
    import { useQuestionnaireByName } from '@healthblocks-io/core/content'

    const Questionnaire = () => {
      const [questionnaire] = useQuestionnaireByName('intake')
      return (
        <div className="questionnaire">
          {questionnaire?.questions.map((question, key) => (
            <div className="question" key={key}>
              #{key + 1}: {question.text}
              {question.config?.replies?.map((reply, key) => (
                <div className="reply" key={key}>
                  #{key + 1}: {reply.title}
                </div>
              ))}
            </div>
          ))}
        </div>
      )
    }
    ```

5. We won't go into keeping the state of the questionnaire response while the user is filling it in. Let's immediately go to the final step of a questionnaire: submitting the response.

    ```tsx
    import { useQuestionnaireByName } from '@healthblocks-io/core/content'
    import { useFHIR } from '@healthblocks-io/core/fhir'

    const Questionnaire = () => {
      const [questionnaire] = useQuestionnaireByName('intake')
      const [answers] = useState([{ text: 'Good', question_id: 'abc' }])
      const { create } = useFHIR()
      const submit = async () => {
        await create({
          resourceType: 'QuestionnaireResponse',
          answers,
          questionnaire_id: questionnaire!.id,
        })
        alert('Success!')
      }
      return (
        <div className="questionnaire">
          ...
          <button onClick={submit}>Submit my response</button>
        </div>
      )
    }
    ```

6. Let's see if the response was actually saved by creating a page that shows all responses.

    ```tsx
    import { useSearch } from '@healthblocks-io/core/fhir'

    const Responses = () => {
      const { data, error, loading } = useSearch<QuestionnaireResponse>({
        type: 'QuestionnaireResponse',
      })

      return (
        <div className="responses">
          {data?.entry.map((response, key) => (
            <div className="response" key={key}>
              {response.questionnaire.title}
              {response.answers.map((answer) => (
                <div className="response" key={key}>
                  {answer.text}
                </div>
              ))}
            </div>
          ))}
        </div>
      )
    }
    ```

7. That's it! Every questionnaire response should show up in the list of responses.