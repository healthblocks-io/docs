---
title: "Conversational Assessment"
---

What is _Conversational Assessment_?
* An assessment is a set of questions that aim to improve the understanding of the condition of the patient.
* Conversational means that the questions are triggered one by one, as if you would have a conversation in person.

FHIR uses the term "questionnaire", which is the term we will use in a technical context.

### Prerequisites

* Create a questionnaire in the questionnaire builder, note down the questionnaire ID.
* Prepare a screen where the user is [authenticated](/docs/blocks/authentication).

### Leverage the Questionnaire component

Use the `<Questionnaire>` component to ask a set of questions. The `<NamedQuestionnaireProvider>` takes care of loading the questionnaire and configuring the submit handler.

```tsx
import { NamedQuestionnaireProvider } from '@healthblocks-io/apollo/questionnaire'
import Questionnaire from '@healthblocks-io/native/Questionnaire'

function Example (props) {
  return (
    <NamedQuestionnaireProvider
      name="intake"
      onClose={props.navigation.goBack}
    >
      <Questionnaire />
    </NamedQuestionnaireProvider>
  )
}
```

### Customize the questions

If some questions are not relevant based on previous answers, consider removing those using the `transform` prop. Any transformation is possible: add, remove, reorder, translate questions... or even custom quick replies.

```tsx
function Example (props) {
  return (
    <NamedQuestionnaireProvider
      name="intake"
      transform={({ questionnaire}) => ({
        ...questionnaire,
        // Skip the last 3 questions
        questions: questionnaire.questions.slice(-3)
      })}
    >
      <Questionnaire />
    </NamedQuestionnaireProvider>
  )
}
```

### Custom questionnaire renderer

The `useQuestionnaireByName` hook returns a list of matching questionnaires.

```tsx
import { useQuestionnaireByName } from '@healthblocks-io/core/content'

function Example () {
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

### Submit a response

```tsx
import { useQuestionnaireByName } from '@healthblocks-io/core/content'
import { saveQuestionnaireResponseActivity, Answer } from '@healthblocks-io/apollo/questionnaire'

const Questionnaire = () => {
  const [questionnaire] = useQuestionnaireByName('intake')
  const [answers] = useState<Answer[]>([{ text: 'Good', question_id: 'abc' }])

  const client = useApolloClient()
  const submit = async () => {
    await saveQuestionnaireResponseActivity(client, {
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

An alternative would be to store the response in FHIR. This currently does not show up in the dashboard Calendar.

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

### Show my previous responses

Let's see if the response was actually saved by creating a page that shows all responses.

```tsx
import { useSearch } from '@healthblocks-io/core/fhir'

function Responses () {
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
