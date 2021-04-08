---
id: "native_push"
title: "Module: native/push"
sidebar_label: "native/push"
custom_edit_url: null
hide_title: true
---

# Module: native/push

## Functions

### askPermission

▸ **askPermission**(): *Promise*<any\>

**Returns:** *Promise*<any\>

___

### default

▸ **default**(): *object*

**Returns:** *object*

Name | Type |
:------ | :------ |
`loading` | *boolean* |
`pushTokens` | [*PushToken*](core_types.md#pushtoken)[] |
`subscribe` | () => *Promise*<undefined \| ExpoPushToken\> |
`subscribed` | *null* \| *boolean* |
`unsubscribe` | (`token`: *any*) => *Promise*<void\> |

___

### useCanAskPush

▸ **useCanAskPush**(): *null* \| *boolean*

**Returns:** *null* \| *boolean*

___

### useNotificationIntent

▸ **useNotificationIntent**(`cb`: (`screen`: *any*) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`cb` | (`screen`: *any*) => *void* |

**Returns:** *void*
