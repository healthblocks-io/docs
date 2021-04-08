---
id: "core_analytics.integration"
title: "Interface: Integration"
sidebar_label: "Integration"
custom_edit_url: null
hide_title: true
---

# Interface: Integration

[core/analytics](../modules/core_analytics.md).Integration

## Implemented by

* [*BasicIntegration*](../classes/core_analytics.basicintegration.md)
* [*default*](../classes/core_mixpanel.default.md)

## Properties

### event

• **event**: (`type`: *string*, `data`: [*IntegrationEvent*](core_analytics.integrationevent.md)) => *void*

#### Type declaration:

▸ (`type`: *string*, `data`: [*IntegrationEvent*](core_analytics.integrationevent.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`type` | *string* |
`data` | [*IntegrationEvent*](core_analytics.integrationevent.md) |

**Returns:** *void*

___

### identify

• `Optional` **identify**: (`userId`: *string*) => *void*

#### Type declaration:

▸ (`userId`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`userId` | *string* |

**Returns:** *void*

___

### reset

• `Optional` **reset**: () => *void*

#### Type declaration:

▸ (): *void*

**Returns:** *void*
