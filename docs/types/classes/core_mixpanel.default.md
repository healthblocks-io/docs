---
id: "core_mixpanel.default"
title: "Class: default"
sidebar_label: "default"
custom_edit_url: null
hide_title: true
---

# Class: default

[core/mixpanel](../modules/core_mixpanel.md).default

## Implements

* [*Integration*](../interfaces/core_analytics.integration.md)

## Constructors

### constructor

\+ **new default**(`__namedParameters`: TrackOptions): [*default*](core_mixpanel.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | TrackOptions |

**Returns:** [*default*](core_mixpanel.default.md)

## Properties

### client

• **client**: *ExpoMixpanelAnalytics*

___

### increment

• **increment**: *string*[]= []

___

### set

• **set**: *string*[]= []

## Methods

### event

▸ **event**(`type`: *string*, `data`: [*IntegrationEvent*](../interfaces/core_analytics.integrationevent.md)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`type` | *string* |
`data` | [*IntegrationEvent*](../interfaces/core_analytics.integrationevent.md) |

**Returns:** *Promise*<void\>

Implementation of: Integration.event

___

### identify

▸ **identify**(`userId`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`userId` | *string* |

**Returns:** *void*

Implementation of: Integration.identify

___

### reset

▸ **reset**(): *void*

**Returns:** *void*

Implementation of: Integration.reset
