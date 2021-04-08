---
id: "apollo"
title: "Module: apollo"
sidebar_label: "apollo"
custom_edit_url: null
hide_title: true
---

# Module: apollo

## Table of contents

### Namespaces

- [gql](apollo.gql.md)

### Interfaces

- [Answer](../interfaces/apollo.answer.md)

## References

### getApolloClient

Re-exports: [getApolloClient](apollo_client.md#getapolloclient)

___

### useApolloClient

Re-exports: [useApolloClient](apollo_client.md#useapolloclient)

## Variables

### profile

• `Const` **profile**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`client` | *null* \| *default*<NormalizedCacheObject\> |
`data` | [*Profile*](core_types.md#profile) & { `loading`: *boolean*  } |
`listeners` | () => *void*[] |
`local` | *Partial*<[*Profile*](core_types.md#profile) & [*UserDoc*](core_types.md#userdoc)\> |
`online` | [*Profile*](core_types.md#profile) & { `loading`: *boolean*  } |
`options` | *object* |
`options.query` | DocumentNode |
`options.variables` | *object* |
`state` | State |
`stopTimeout` | *any* |
`subscription` | *any* |
`append` | (`updates`: *any*) => *void* |
`delayedStop` | () => *void* |
`emit` | () => *void* |
`render` | () => *void* |
`reset` | () => *void* |
`start` | () => *void* |
`stop` | () => *void* |

___

### useLocalThreads

• `Const` **useLocalThreads**: *UseStore*<LocalThreadsState\>

___

### userFields

• `Const` **userFields**: *string*[]

## Functions

### deleteUser

▸ **deleteUser**(): *Promise*<void\>

**Returns:** *Promise*<void\>

___

### gql

▸ **gql**(`literals`: *ReadonlyArray*<string\> \| *Readonly*<string\>, ...`placeholders`: *any*[]): DocumentNode

#### Parameters:

Name | Type |
:------ | :------ |
`literals` | *ReadonlyArray*<string\> \| *Readonly*<string\> |
`...placeholders` | *any*[] |

**Returns:** DocumentNode

___

### insertThread

▸ **insertThread**(`thread`: *any*): *Promise*<FetchResult<any, Record<string, any\>, Record<string, any\>\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`thread` | *any* |

**Returns:** *Promise*<FetchResult<any, Record<string, any\>, Record<string, any\>\>\>

___

### saveQuestionnaireResponse

▸ **saveQuestionnaireResponse**(`variables`: saveQuestionnaireResponseProps): *Promise*<FetchResult<any, Record<string, any\>, Record<string, any\>\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`variables` | saveQuestionnaireResponseProps |

**Returns:** *Promise*<FetchResult<any, Record<string, any\>, Record<string, any\>\>\>

___

### saveQuestionnaireResponseActivity

▸ **saveQuestionnaireResponseActivity**(`variables`: saveQuestionnaireResponseProps): *Promise*<FetchResult<any, Record<string, any\>, Record<string, any\>\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`variables` | saveQuestionnaireResponseProps |

**Returns:** *Promise*<FetchResult<any, Record<string, any\>, Record<string, any\>\>\>

___

### send

▸ **send**(`__namedParameters`: [*SendMessage*](core_types.md#sendmessage) & { `tid`: *string*  }): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | [*SendMessage*](core_types.md#sendmessage) & { `tid`: *string*  } |

**Returns:** *void*

___

### updateProfile

▸ **updateProfile**(`updates`: *Partial*<[*Profile*](core_types.md#profile) & [*UserDoc*](core_types.md#userdoc)\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`updates` | *Partial*<[*Profile*](core_types.md#profile) & [*UserDoc*](core_types.md#userdoc)\> |

**Returns:** *void*

___

### updateThread

▸ **updateThread**(`variables`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`variables` | *any* |

**Returns:** *void*

___

### useFlow

▸ **useFlow**(`flowName`: *string*): *object*

#### Parameters:

Name | Type |
:------ | :------ |
`flowName` | *string* |

**Returns:** *object*

Name | Type |
:------ | :------ |
`data`? | *any* |
`error`? | *ApolloError* |
`loading` | *boolean* |
`variables` | *any* |

___

### useFlowReminders

▸ **useFlowReminders**(): *object*

**Returns:** *object*

Name | Type |
:------ | :------ |
`create` | (`reminder`: *any*) => *void* |
`loading` | *boolean* |
`reminders` | *any* |
`remove` | (`id`: *string*) => *void* |
`update` | (`id`: *string*, `updates`: *any*) => *void* |

___

### useMedication

▸ **useMedication**(): *object*

**Returns:** *object*

Name | Type |
:------ | :------ |
`create` | (`medication`: *any*) => *void* |
`medications` | *undefined* \| [*Medication*](core_types.md#medication)[] |
`remove` | (`id`: *string*) => *void* |
`update` | (`id`: *string*, `updates`: *any*) => *void* |

___

### useProfile

▸ **useProfile**(): [*Profile*](core_types.md#profile) & { `loading`: *boolean*  }

**Returns:** [*Profile*](core_types.md#profile) & { `loading`: *boolean*  }

___

### useQuestionnaireByName

▸ **useQuestionnaireByName**(`name`: *string*): *QueryResult*<QuestionnairesResult, Record<string, any\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** *QueryResult*<QuestionnairesResult, Record<string, any\>\>

___

### useQuestionnaires

▸ **useQuestionnaires**(): *QueryResult*<QuestionnairesResult, Record<string, any\>\>

**Returns:** *QueryResult*<QuestionnairesResult, Record<string, any\>\>

___

### useStartedFlow

▸ **useStartedFlow**(`flowName`: *string*): *object*

#### Parameters:

Name | Type |
:------ | :------ |
`flowName` | *string* |

**Returns:** *object*

Name | Type |
:------ | :------ |
`data`? | *any* |
`error`? | *ApolloError* |
`loading` | *boolean* |
`variables` | *any* |

___

### useSubscription

▸ **useSubscription**(`subscription`: DocumentNode, `variables?`: *any*): *object*

#### Parameters:

Name | Type |
:------ | :------ |
`subscription` | DocumentNode |
`variables?` | *any* |

**Returns:** *object*

Name | Type |
:------ | :------ |
`data`? | *any* |
`error`? | *ApolloError* |
`loading` | *boolean* |
`variables` | *any* |

___

### useThread

▸ **useThread**(`tid?`: *string*, `respond?`: *boolean*): [*useThreadData*](core_types.md#usethreaddata)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`tid?` | *string* | - |
`respond` | *boolean* | false |

**Returns:** [*useThreadData*](core_types.md#usethreaddata)

___

### useThread2

▸ **useThread2**(`tid`: *string*): *object*

#### Parameters:

Name | Type |
:------ | :------ |
`tid` | *string* |

**Returns:** *object*

Name | Type |
:------ | :------ |
`data` | *any* |
`error` | *undefined* \| *ApolloError* |
`loading` | *boolean* |
`messages` | [*Message*](core_types.md#message)[] |
