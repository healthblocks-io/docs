---
id: "native_types"
title: "Module: native/types"
sidebar_label: "native/types"
custom_edit_url: null
hide_title: true
---

# Module: native/types

## Type aliases

### AirtableData

Ƭ **AirtableData**: *undefined* \| *string* \| [*Image*](native_types.md#image)[] \| [*Reply*](native_types.md#reply)[]

___

### AirtableQuestion

Ƭ **AirtableQuestion**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`_id` | *string* |
`id` | *string* |
`images`? | [*Image*](native_types.md#image)[] |
`question` | *string* |
`replies` | *string*[] |
`replyType` | *string* |

___

### AirtableRecord

Ƭ **AirtableRecord**: *object*

#### Type declaration:

___

### AirtableReply

Ƭ **AirtableReply**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`_id` | *string* |
`id` | *string* |
`reply` | *string* |

___

### ComposerElement

Ƭ **ComposerElement**: (`props`: [*ComposerProps*](native_types.md#composerprops)) => JSX.Element

#### Type declaration:

▸ (`props`: [*ComposerProps*](native_types.md#composerprops)): JSX.Element

#### Parameters:

Name | Type |
:------ | :------ |
`props` | [*ComposerProps*](native_types.md#composerprops) |

**Returns:** JSX.Element

___

### ComposerProps

Ƭ **ComposerProps**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`message` | [*Message*](native_types.md#message) |
`send` | [*SendMethod*](native_types.md#sendmethod) |

___

### ConversationProps

Ƭ **ConversationProps**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`customComponents`? | [*customComponentsMapping*](native_types.md#customcomponentsmapping) |
`navigation`? | *any* |
`onClose`? | Function |
`onMessage`? | Function |

___

### DecodedJWT

Ƭ **DecodedJWT**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`name` | *string* |
`sub` | *string* |

___

### Image

Ƭ **Image**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`doc`? | *any* |
`thumbnails` | [*ImageThumbnails*](native_types.md#imagethumbnails) |
`url` | *string* |

___

### ImageData

Ƭ **ImageData**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`height` | *number* |
`url` | *string* |
`width` | *number* |

___

### ImageThumbnails

Ƭ **ImageThumbnails**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`full` | [*ImageData*](native_types.md#imagedata) |
`large` | [*ImageData*](native_types.md#imagedata) |
`small` | [*ImageData*](native_types.md#imagedata) |

___

### Intake

Ƭ **Intake**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`checked_at` | *string* |
`count`? | *number* |
`datetime` | *string* |
`medication` | *string* |
`moment` | [*IntakeMoment*](native_types.md#intakemoment) |

___

### IntakeMoment

Ƭ **IntakeMoment**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`count`? | *number* |
`name` | *string* |
`time` | *string* |

___

### MaybeProject

Ƭ **MaybeProject**: [*Project*](native_types.md#project) \| *null*

___

### Medication

Ƭ **Medication**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`count`? | *number* |
`days`? | *number*[] |
`dose`? | *number* |
`id` | *string* |
`moments` | [*IntakeMoment*](native_types.md#intakemoment)[] |
`name` | *string* |
`period` | *string* |
`type` | *string* |
`unit`? | *string* |

___

### Message

Ƭ **Message**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`body` | *string* |
`doc` | [*MessageDoc*](native_types.md#messagedoc) |
`mid` | *string* |
`qid` | *string* \| *null* |
`sender` | *string* |
`sent_at` | *string* |
`thread`? | [*Thread*](native_types.md#thread) |
`tid` | *string* |
`user` | *Pick*<[*Profile*](native_types.md#profile), *doc*\> |

___

### MessageDoc

Ƭ **MessageDoc**: *object*

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`assessment`? | *any* | System messages   |
`id`? | *string* | Questions   |
`images`? | [*Image*](native_types.md#image)[] | - |
`replies`? | [*Reply*](native_types.md#reply)[] | - |
`reply`? | [*Reply*](native_types.md#reply)[] | Replies   |
`replyTo`? | *string* | - |
`replyType`? | *string* | - |
`startFlow`? | *string* | - |
`startFlows`? | *string*[] | Flows   |
`stopFlow`? | *string* | - |

___

### MessageHelpers

Ƭ **MessageHelpers**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`merged`? | *boolean* |
`mergedReply`? | [*Message*](native_types.md#message) |
`rindex`? | *number* |

___

### Profile

Ƭ **Profile**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`doc` | [*UserDoc*](native_types.md#userdoc) |
`role`? | *string* |
`uid` | *string* |

___

### Project

Ƭ **Project**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`config` | *any* |
`pid` | *string* |
`questions` | [*Question*](native_types.md#question)[] |

___

### ProjectContext

Ƭ **ProjectContext**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`project` | [*MaybeProject*](native_types.md#maybeproject) |
`reload`? | () => *Promise*<void\> |

___

### PushToken

Ƭ **PushToken**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`createdAt` | *string* |
`deviceId`? | *string* |
`deviceName`? | *string* |
`token` | *string* |

___

### Question

Ƭ **Question**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`id` | *string* |
`images`? | [*Image*](native_types.md#image)[] |
`question` | *string* |
`replies` | [*Reply*](native_types.md#reply)[] |
`replyType` | *string* |

___

### Reply

Ƭ **Reply**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`id` | *string* |
`reply` | *string* |

___

### SendMethod

Ƭ **SendMethod**: (`msg`: [*SendMessage*](core_types.md#sendmessage)) => *Promise*<void\>

#### Type declaration:

▸ (`msg`: [*SendMessage*](core_types.md#sendmessage)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`msg` | [*SendMessage*](core_types.md#sendmessage) |

**Returns:** *Promise*<void\>

___

### Thread

Ƭ **Thread**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`messages` | [*Message*](native_types.md#message)[] |
`tid` | *string* |

___

### UserDoc

Ƭ **UserDoc**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`email`? | *string* |
`intakes`? | [*Intake*](native_types.md#intake)[] |
`medications`? | [*Medication*](native_types.md#medication)[] |
`name`? | *string* |
`phone`? | *string* |
`pushTokens`? | [*PushToken*](native_types.md#pushtoken)[] |

___

### customComponentsMapping

Ƭ **customComponentsMapping**: *object*

#### Type declaration:

___

### useThreadData

Ƭ **useThreadData**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`error` | *any* |
`fullProfile` | *object* |
`loading` | *boolean* |
`messages` | [*Message*](native_types.md#message)[] |
`send` | [*SendMethod*](native_types.md#sendmethod) |
