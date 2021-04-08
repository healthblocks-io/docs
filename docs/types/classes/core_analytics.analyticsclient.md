---
id: "core_analytics.analyticsclient"
title: "Class: AnalyticsClient"
sidebar_label: "AnalyticsClient"
custom_edit_url: null
hide_title: true
---

# Class: AnalyticsClient

[core/analytics](../modules/core_analytics.md).AnalyticsClient

## Constructors

### constructor

\+ **new AnalyticsClient**(`integrations`: [*Integration*](../interfaces/core_analytics.integration.md)[], `anonymousId`: *string*, `pid`: *string*): [*AnalyticsClient*](core_analytics.analyticsclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`integrations` | [*Integration*](../interfaces/core_analytics.integration.md)[] |
`anonymousId` | *string* |
`pid` | *string* |

**Returns:** [*AnalyticsClient*](core_analytics.analyticsclient.md)

## Properties

### anonymousId

• **anonymousId**: *string*

___

### integrations

• **integrations**: [*Integration*](../interfaces/core_analytics.integration.md)[]

___

### pid

• **pid**: *string*

___

### userId

• `Optional` **userId**: *string*

## Methods

### event

▸ **event**(`type`: *string*, `event`: *string*, `properties?`: Props, `context?`: Props): *void*

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`type` | *string* | - |
`event` | *string* | - |
`properties` | Props | {} |
`context` | Props | {} |

**Returns:** *void*

___

### identify

▸ **identify**(`userId`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`userId` | *any* |

**Returns:** *void*

___

### people\_append

▸ **people_append**(`properties?`: Props, `context?`: Props): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`properties?` | Props |
`context?` | Props |

**Returns:** *void*

___

### people\_delete\_user

▸ **people_delete_user**(`properties?`: Props, `context?`: Props): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`properties?` | Props |
`context?` | Props |

**Returns:** *void*

___

### people\_increment

▸ **people_increment**(`properties?`: Props, `context?`: Props): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`properties?` | Props |
`context?` | Props |

**Returns:** *void*

___

### people\_set

▸ **people_set**(`properties?`: Props, `context?`: Props): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`properties?` | Props |
`context?` | Props |

**Returns:** *void*

___

### people\_set\_once

▸ **people_set_once**(`properties?`: Props, `context?`: Props): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`properties?` | Props |
`context?` | Props |

**Returns:** *void*

___

### people\_union

▸ **people_union**(`properties?`: Props, `context?`: Props): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`properties?` | Props |
`context?` | Props |

**Returns:** *void*

___

### people\_unset

▸ **people_unset**(`properties?`: Props, `context?`: Props): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`properties?` | Props |
`context?` | Props |

**Returns:** *void*

___

### register

▸ **register**(`properties?`: Props): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`properties?` | Props |

**Returns:** *void*

___

### reset

▸ **reset**(): *void*

**Returns:** *void*

___

### track

▸ **track**(`event`: *string*, `properties?`: Props, `context?`: Props): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* |
`properties?` | Props |
`context?` | Props |

**Returns:** *void*
