---
id: "apollo_questionnaire.basequestionnaireproviderprops"
title: "Interface: BaseQuestionnaireProviderProps"
sidebar_label: "BaseQuestionnaireProviderProps"
custom_edit_url: null
hide_title: true
---

# Interface: BaseQuestionnaireProviderProps

[apollo/questionnaire](../modules/apollo_questionnaire.md).BaseQuestionnaireProviderProps

## Hierarchy

* **BaseQuestionnaireProviderProps**

  ↳ [*QuestionnaireProviderProps*](apollo_questionnaire.questionnaireproviderprops.md)

  ↳ [*NamedQuestionnaireProviderProps*](apollo_questionnaire.namedquestionnaireproviderprops.md)

## Properties

### children

• `Optional` **children**: ReactNode

___

### customComponents

• `Optional` **customComponents**: [*CustomComponents*](apollo_questionnaire.customcomponents.md)

Map of custom components that will replace or add existing composers

Examples:

Add component for custom reply type

    onClose={{ Smiley }}

Replace component for Text reply type

    onClose={{ Text }}

___

### onClose

• `Optional` **onClose**: (`ctx`: [*CloseContext*](apollo_questionnaire.closecontext.md)) => *void*

Called when the user tries to close the questionnaire

Example:

    onClose={navigate.goBack}

#### Type declaration:

▸ (`ctx`: [*CloseContext*](apollo_questionnaire.closecontext.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`ctx` | [*CloseContext*](apollo_questionnaire.closecontext.md) |

**Returns:** *void*

___

### onSubmit

• `Optional` **onSubmit**: (`ctx`: [*ProgressContext*](apollo_questionnaire.progresscontext.md)) => *null* \| *void* \| [*PostSubmitHook*](apollo_questionnaire.postsubmithook.md)

Called before submitting questionnaire, this allows you to enable/disable saving the response

Examples:

Don't save the response

    onSubmit={() => ({ save: false })}

Verify the answers before saving

    onSubmit={async ({ answers }) => {
      const ok = await postJSON('/verify', { answers })
      if (!ok.valid) {
        return { save: false }
      }
    }}

Transform the answers before saving

    onSubmit={({ answers }) => ({
      answers: answers.map(a => ({ ...a, text: a.text || 'Empty' }))
    })}

#### Type declaration:

▸ (`ctx`: [*ProgressContext*](apollo_questionnaire.progresscontext.md)): *null* \| *void* \| [*PostSubmitHook*](apollo_questionnaire.postsubmithook.md)

#### Parameters:

Name | Type |
:------ | :------ |
`ctx` | [*ProgressContext*](apollo_questionnaire.progresscontext.md) |

**Returns:** *null* \| *void* \| [*PostSubmitHook*](apollo_questionnaire.postsubmithook.md)

___

### transform

• `Optional` **transform**: (`ctx`: [*ProgressContext*](apollo_questionnaire.progresscontext.md)) => [*Questionnaire*](apollo_questionnaire.questionnaire.md)

Change the questionnaire based on the answers

#### Type declaration:

▸ (`ctx`: [*ProgressContext*](apollo_questionnaire.progresscontext.md)): [*Questionnaire*](apollo_questionnaire.questionnaire.md)

#### Parameters:

Name | Type |
:------ | :------ |
`ctx` | [*ProgressContext*](apollo_questionnaire.progresscontext.md) |

**Returns:** [*Questionnaire*](apollo_questionnaire.questionnaire.md)
