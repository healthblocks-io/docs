---
id: "core_types"
title: "Module: core/types"
sidebar_label: "core/types"
custom_edit_url: null
hide_title: true
---

# Module: core/types

## Type aliases

### AirtableData

Ƭ **AirtableData**: *undefined* \| *string* \| [*Image*](core_types.md#image)[] \| [*Reply*](core_types.md#reply)[]

___

### AirtableQuestion

Ƭ **AirtableQuestion**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`_id` | *string* |
`id` | *string* |
`images`? | [*Image*](core_types.md#image)[] |
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

Ƭ **ComposerElement**: (`props`: [*ComposerProps*](core_types.md#composerprops)) => *any*

#### Type declaration:

▸ (`props`: [*ComposerProps*](core_types.md#composerprops)): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | [*ComposerProps*](core_types.md#composerprops) |

**Returns:** *any*

___

### ComposerProps

Ƭ **ComposerProps**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`message` | [*Message*](core_types.md#message) |
`send` | [*SendMethod*](core_types.md#sendmethod) |

___

### ConversationProps

Ƭ **ConversationProps**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`customComponents`? | [*customComponentsMapping*](core_types.md#customcomponentsmapping) |
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
`thumbnails` | [*ImageThumbnails*](core_types.md#imagethumbnails) |
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
`full` | [*ImageData*](core_types.md#imagedata) |
`large` | [*ImageData*](core_types.md#imagedata) |
`small` | [*ImageData*](core_types.md#imagedata) |

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
`moment` | [*IntakeMoment*](core_types.md#intakemoment) |

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

Ƭ **MaybeProject**: [*Project*](core_types.md#project) \| *null*

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
`moments` | [*IntakeMoment*](core_types.md#intakemoment)[] |
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
`doc` | [*MessageDoc*](core_types.md#messagedoc) |
`merged`? | *boolean* |
`mergedReply`? | [*Message*](core_types.md#message) |
`mid` | *string* |
`observations` | [*Observation*](core_types.md#observation)[] |
`qid` | *string* \| *null* |
`sender` | *string* |
`sent_at` | *string* |
`thread`? | [*Thread*](core_types.md#thread) |
`tid` | *string* |
`user` | *Pick*<[*Profile*](core_types.md#profile), *doc*\> |

___

### MessageDoc

Ƭ **MessageDoc**: *object*

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`assessment`? | *any* | System messages   |
`id`? | *string* | **`deprecated`** use message.qid instead |
`images`? | [*Image*](core_types.md#image)[] | - |
`replies`? | [*Reply*](core_types.md#reply)[] | - |
`reply`? | [*Reply*](core_types.md#reply)[] | Replies   |
`replyTo`? | *string* | - |
`replyType`? | *string* | - |
`startFlow`? | *string* | - |
`startFlows`? | *string*[] | Flows   |
`stopFlow`? | *string* | - |

___

### Observation

Ƭ **Observation**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`fid` | *string* |
`valueInteger` | *number* \| *null* |
`valueString` | *string* \| *null* |

___

### Profile

Ƭ **Profile**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`birthDate`? | *string* |
`checkouts` | { `doc`: { `id`: *string* ; `order`: *any* \| *null* ; `webUrl`: *string*  } ; `id`: *string*  }[] |
`consented_at`? | *string* |
`doc` | [*UserDoc*](core_types.md#userdoc) |
`email`? | *string* |
`gender`? | *string* |
`group`? | *string* |
`language`? | *string* |
`name`? | *string* |
`notes`? | *string* |
`phone`? | *string* |
`pid` | *string* |
`role` | *string* |
`timezone`? | *string* |
`uid` | *string* |

___

### Project

Ƭ **Project**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`config` | *any* |
`pid` | *string* |
`questions` | [*Question*](core_types.md#question)[] |

___

### ProjectContext

Ƭ **ProjectContext**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`project` | [*MaybeProject*](core_types.md#maybeproject) |
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
`flowIds`? | *string* |
`id` | *string* |
`images`? | [*Image*](core_types.md#image)[] |
`question` | *string* |
`replies` | [*Reply*](core_types.md#reply)[] |
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

### SendMessage

Ƭ **SendMessage**: *object*

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`body` | *string* | - |
`doc` | [*MessageDoc*](core_types.md#messagedoc) | - |
`fid`? | *string* | - |
`qid`? | *string* \| *null* | - |
`summary`? | *any* | Deprecated   |
`tid`? | *string* | - |
`value`? | *string* \| *number* | - |

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

### SendProps

Ƭ **SendProps**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`doc` | *any* |
`id` | *string* |
`text` | *string* |

___

### Theme

Ƭ **Theme**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`bodyFont` | *string* |
`button` | *object* |
`button.radius` | *number* |
`card` | *object* |
`card.radius` | *number* |
`error` | *object* |
`error.activeColor` | *string* |
`error.color` | *string* |
`error.disabledColor` | *string* |
`error.other`? | *string* |
`h1Font` | *string* |
`primary` | *object* |
`primary.activeColor` | *string* |
`primary.color` | *string* |
`primary.disabledColor` | *string* |
`primary.other`? | *string* |
`secondary` | *object* |
`secondary.activeColor` | *string* |
`secondary.color` | *string* |
`secondary.disabledColor` | *string* |
`secondary.other`? | *string* |
`spacing` | *number* |
`success` | *object* |
`success.activeColor` | *string* |
`success.color` | *string* |
`success.disabledColor` | *string* |
`success.other`? | *string* |
`tertiary` | *object* |
`tertiary.color` | *string* |
`types` | *object* |
`types.body` | *object* |
`types.h1` | *object* |
`types.smallText` | *object* |

___

### Thread

Ƭ **Thread**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`messages` | [*Message*](core_types.md#message)[] |
`tid` | *string* |

___

### UserDoc

Ƭ **UserDoc**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`intakes`? | [*Intake*](core_types.md#intake)[] |
`medications`? | [*Medication*](core_types.md#medication)[] |
`pushTokens`? | [*PushToken*](core_types.md#pushtoken)[] |

___

### customComponentsMapping

Ƭ **customComponentsMapping**: *object*

#### Type declaration:

___

### onSendProps

Ƭ **onSendProps**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`activeFlow`? | *string* |
`fullProfile`? | *object* |
`messages` | [*Message*](core_types.md#message)[] |
`send`? | [*SendMethod*](core_types.md#sendmethod) |
`tid` | *string* |
`user` | *any* |

___

### useThreadData

Ƭ **useThreadData**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`error` | *any* |
`fullProfile` | *object* |
`loading` | *boolean* |
`messages` | [*Message*](core_types.md#message)[] |
`send` | [*SendMethod*](core_types.md#sendmethod) |
