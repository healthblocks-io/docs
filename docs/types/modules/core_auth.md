---
id: "core_auth"
title: "Module: core/auth"
sidebar_label: "core/auth"
custom_edit_url: null
hide_title: true
---

# Module: core/auth

## Table of contents

### Interfaces

- [AuthState](../interfaces/core_auth.authstate.md)
- [DecodedJWT](../interfaces/core_auth.decodedjwt.md)

## Variables

### useGlobalAuth

• `Const` **useGlobalAuth**: *UseStore*<GlobalAuthState\>

## Functions

### atob

▸ **atob**(`input?`: *string*): *string*

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`input` | *string* | '' |

**Returns:** *string*

___

### auth

▸ **auth**(): [*AuthState*](../interfaces/core_auth.authstate.md)

**Returns:** [*AuthState*](../interfaces/core_auth.authstate.md)

___

### createUserWithEmailAndPassword

▸ **createUserWithEmailAndPassword**(`email`: *string*, `password`: *string*, `code`: *string*): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`email` | *string* |
`password` | *string* |
`code` | *string* |

**Returns:** *Promise*<any\>

___

### dismissAuthError

▸ **dismissAuthError**(): *void*

**Returns:** *void*

___

### getUser

▸ **getUser**(): [*DecodedJWT*](../interfaces/core_auth.decodedjwt.md) \| *null*

**Returns:** [*DecodedJWT*](../interfaces/core_auth.decodedjwt.md) \| *null*

___

### refresh

▸ **refresh**(): *Promise*<void\>

**Returns:** *Promise*<void\>

___

### setAuth

▸ **setAuth**(`auth`: *Partial*<[*AuthState*](../interfaces/core_auth.authstate.md)\> \| *string* \| (`AuthState`: *any*) => [*AuthState*](../interfaces/core_auth.authstate.md), `pid?`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`auth` | *Partial*<[*AuthState*](../interfaces/core_auth.authstate.md)\> \| *string* \| (`AuthState`: *any*) => [*AuthState*](../interfaces/core_auth.authstate.md) |
`pid` | *string* |

**Returns:** *void*

___

### setAuthState

▸ **setAuthState**(`auth`: *Partial*<[*AuthState*](../interfaces/core_auth.authstate.md)\> \| (`AuthState`: *any*) => [*AuthState*](../interfaces/core_auth.authstate.md), `pid?`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`auth` | *Partial*<[*AuthState*](../interfaces/core_auth.authstate.md)\> \| (`AuthState`: *any*) => [*AuthState*](../interfaces/core_auth.authstate.md) |
`pid` | *string* |

**Returns:** *void*

___

### signInAnonymously

▸ **signInAnonymously**(): *Promise*<string \| void\>

Signs the user in with a random id

**Returns:** *Promise*<string \| void\>

___

### signInWithEmailAndPassword

▸ **signInWithEmailAndPassword**(`email`: *string*, `password`: *string*): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`email` | *string* |
`password` | *string* |

**Returns:** *Promise*<any\>

___

### signInWithToken

▸ **signInWithToken**(`id_token`: *string*): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`id_token` | *string* |

**Returns:** *Promise*<any\>

___

### signOut

▸ **signOut**(): *void*

**Returns:** *void*

___

### token

▸ **token**(): *Promise*<string \| void\>

**Returns:** *Promise*<string \| void\>

___

### useAuth

▸ **useAuth**(): [*AuthState*](../interfaces/core_auth.authstate.md)

**Returns:** [*AuthState*](../interfaces/core_auth.authstate.md)

___

### useToken

▸ **useToken**(): *string*

**Returns:** *string*

___

### useUser

▸ **useUser**(): [*DecodedJWT*](../interfaces/core_auth.decodedjwt.md) \| *null*

**Returns:** [*DecodedJWT*](../interfaces/core_auth.decodedjwt.md) \| *null*
