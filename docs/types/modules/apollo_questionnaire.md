---
id: "apollo_questionnaire"
title: "Module: apollo/questionnaire"
sidebar_label: "apollo/questionnaire"
custom_edit_url: null
hide_title: true
---

# Module: apollo/questionnaire

## Table of contents

### Interfaces

- [Answer](../interfaces/apollo_questionnaire.answer.md)
- [BaseQuestionnaireProviderProps](../interfaces/apollo_questionnaire.basequestionnaireproviderprops.md)
- [CloseContext](../interfaces/apollo_questionnaire.closecontext.md)
- [CustomComponents](../interfaces/apollo_questionnaire.customcomponents.md)
- [NamedQuestionnaireProviderProps](../interfaces/apollo_questionnaire.namedquestionnaireproviderprops.md)
- [PostSubmitHook](../interfaces/apollo_questionnaire.postsubmithook.md)
- [ProgressContext](../interfaces/apollo_questionnaire.progresscontext.md)
- [Question](../interfaces/apollo_questionnaire.question.md)
- [Questionnaire](../interfaces/apollo_questionnaire.questionnaire.md)
- [QuestionnaireProviderProps](../interfaces/apollo_questionnaire.questionnaireproviderprops.md)

## Type aliases

### QuestionnaireContext

Ƭ **QuestionnaireContext**: *object*

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`answers` | [*Answer*](../interfaces/apollo_questionnaire.answer.md)[] | - |
`change` | (`ans`: ValueObjects, `text?`: *string*) => *void* | Select answer and go to next question   |
`close`? | () => *void* | Close the questionnaire   |
`customComponents` | [*CustomComponents*](../interfaces/apollo_questionnaire.customcomponents.md) | - |
`index` | *number* | - |
`input` | (`ans`: ValueObjects, `text?`: *string*) => *void* | Select answer without going to the next question   |
`next` | (`diff?`: *number*) => *void* | Skip a question or go back   |
`question`? | [*Question*](../interfaces/apollo_questionnaire.question.md) | - |
`questionnaire`? | [*Questionnaire*](../interfaces/apollo_questionnaire.questionnaire.md) | - |
`rindex` | *number* | - |
`submit` | (`answers`: [*Answer*](../interfaces/apollo_questionnaire.answer.md)[]) => *void* | Submit all answers   |

## Variables

### Context

• `Const` **Context**: *Context*<[*QuestionnaireContext*](apollo_questionnaire.md#questionnairecontext)\>

## Functions

### NamedQuestionnaireProvider

▸ **NamedQuestionnaireProvider**(`props`: [*NamedQuestionnaireProviderProps*](../interfaces/apollo_questionnaire.namedquestionnaireproviderprops.md)): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | [*NamedQuestionnaireProviderProps*](../interfaces/apollo_questionnaire.namedquestionnaireproviderprops.md) |

**Returns:** *Element*

___

### QuestionnaireProvider

▸ **QuestionnaireProvider**(`__namedParameters`: [*QuestionnaireProviderProps*](../interfaces/apollo_questionnaire.questionnaireproviderprops.md)): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | [*QuestionnaireProviderProps*](../interfaces/apollo_questionnaire.questionnaireproviderprops.md) |

**Returns:** *Element*

___

### useQuestionnaire

▸ **useQuestionnaire**(): [*QuestionnaireContext*](apollo_questionnaire.md#questionnairecontext)

This hook provides the questionnaire data

**Returns:** [*QuestionnaireContext*](apollo_questionnaire.md#questionnairecontext)
