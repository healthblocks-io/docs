---
id: "core_analytics"
title: "Module: core/analytics"
sidebar_label: "core/analytics"
custom_edit_url: null
hide_title: true
---

# Module: core/analytics

## Table of contents

### Classes

- [AnalyticsClient](../classes/core_analytics.analyticsclient.md)
- [BasicIntegration](../classes/core_analytics.basicintegration.md)

### Interfaces

- [Integration](../interfaces/core_analytics.integration.md)
- [IntegrationEvent](../interfaces/core_analytics.integrationevent.md)

## Variables

### Context

• `Const` **Context**: *Context*<[*AnalyticsClient*](../classes/core_analytics.analyticsclient.md)\>

This default Context is not an actual Analytics client

## Functions

### AnalyticsProvider

▸ **AnalyticsProvider**(`__namedParameters`: AnalyticsProviderProps): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | AnalyticsProviderProps |

**Returns:** *Element*

___

### id

▸ **id**(): *any*

**Returns:** *any*

___

### install

▸ **install**(`i`: [*Integration*](../interfaces/core_analytics.integration.md)): *void*

**`deprecated`** use AnalyticsProvider instead

#### Parameters:

Name | Type |
:------ | :------ |
`i` | [*Integration*](../interfaces/core_analytics.integration.md) |

**Returns:** *void*

___

### navTracker

▸ **navTracker**(`__namedParameters`: *Object*): *void*

**`deprecated`** TODO refactor

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | *Object* |

**Returns:** *void*

___

### track

▸ **track**(`event`: *string*, `properties?`: Props, `context?`: Props): *Promise*<void\>

**`deprecated`** 

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`event` | *string* | - |
`properties` | Props | {} |
`context` | Props | {} |

**Returns:** *Promise*<void\>

___

### useAnalytics

▸ **useAnalytics**(): [*AnalyticsClient*](../classes/core_analytics.analyticsclient.md)

This hook provides the Analytics client

**Returns:** [*AnalyticsClient*](../classes/core_analytics.analyticsclient.md)

___

### useNavTracker

▸ **useNavTracker**(): *function*

**Returns:** (`\_\_namedParameters`: *Object*) => *void*

___

### usePeopleIncrement

▸ **usePeopleIncrement**(`properties?`: Props, `deps?`: *any*[]): *void*

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`properties` | Props | {} |
`deps` | *any*[] | [] |

**Returns:** *void*

___

### useTrack

▸ **useTrack**(`event`: *string*, `properties?`: Props, `deps?`: *any*[]): *void*

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`event` | *string* | - |
`properties` | Props | {} |
`deps` | *any*[] | [] |

**Returns:** *void*
