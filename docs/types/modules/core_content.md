---
id: "core_content"
title: "Module: core/content"
sidebar_label: "core/content"
custom_edit_url: null
hide_title: true
---

# Module: core/content

## Functions

### useContent

▸ **useContent**<T\>(`table?`: *string*): T[]

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | [*AirtableRecord*](core_types.md#airtablerecord) |

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`table` | *string* | 'Config' |

**Returns:** T[]

___

### useQuestionnaireByName

▸ **useQuestionnaireByName**(`name`: *string*): Questionnaire[]

Fetch questionnaire by name anonymously

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** Questionnaire[]

___

### useQuestionnaires

▸ **useQuestionnaires**(): Questionnaire[]

Fetch all active questionnaires anonymously

**Returns:** Questionnaire[]
