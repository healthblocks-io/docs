---
id: "core_app"
title: "Module: core/app"
sidebar_label: "core/app"
custom_edit_url: null
hide_title: true
---

# Module: core/app

## Type aliases

### AppState

Ƭ **AppState**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`anonymous` | *boolean* |
`api` | *string* |
`graph` | *string* |
`init` | *boolean* |
`initialize` | (`object`: *any*) => *void* |
`installationId` | *string* \| *null* |
`pid` | *string* |
`theme` | *object* |

## Variables

### $app

• `Const` **$app**: *UseStore*<[*AppState*](core_app.md#appstate)\>

___

### useApp

• `Const` **useApp**: *UseStore*<[*AppState*](core_app.md#appstate)\>

## Functions

### app

▸ **app**(): [*AppState*](core_app.md#appstate)

**Returns:** [*AppState*](core_app.md#appstate)

___

### initialize

▸ **initialize**(`config`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`config` | *any* |

**Returns:** *void*

___

### toAppState

▸ **toAppState**(`config`: *any*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`config` | *any* |

**Returns:** *any*
