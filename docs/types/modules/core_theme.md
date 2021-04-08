---
id: "core_theme"
title: "Module: core/theme"
sidebar_label: "core/theme"
custom_edit_url: null
hide_title: true
---

# Module: core/theme

## Variables

### color

• `Const` **color**: *object*

**`deprecated`** Use useTheme().color

#### Type declaration:

Name | Type |
:------ | :------ |
`bg` | *string* |
`darkText` | *string* |
`grayBackground` | *string* |
`grayIconColor` | *string* |
`text` | *string* |

___

### defaultTheme

• `Const` **defaultTheme**: [*Theme*](core_types.md#theme)

___

### h1Text

• `Const` **h1Text**: *object*

**`deprecated`** Use useTheme().h1

#### Type declaration:

Name | Type |
:------ | :------ |
`fontFamily` | *string* |
`fontSize` | *number* |

___

### pText

• `Const` **pText**: *object*

**`deprecated`** Use useTheme().body

#### Type declaration:

Name | Type |
:------ | :------ |
`fontFamily` | *string* |
`fontSize` | *number* |
`fontWeight` | *string* |
`lineHeight` | *number* |

___

### spacing

• `Const` **spacing**: *8*= 8

**`deprecated`** Use useTheme().spacing

## Functions

### lighten

▸ **lighten**(`color?`: *string*, `opacity?`: *number*): *string*

Returns a color that's mixed with white
Use 1 for original color
Use 0 for white

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`color` | *string* | '#004488' |
`opacity` | *number* | 0.8 |

**Returns:** *string*

___

### opacity

▸ **opacity**(`color`: *string*, `opacity`: *number*): *string*

Returns a transparent color
Consider using lighten if this element overlaps other elements

#### Parameters:

Name | Type |
:------ | :------ |
`color` | *string* |
`opacity` | *number* |

**Returns:** *string*

___

### setTheme

▸ **setTheme**(`theme`: *Partial*<[*Theme*](core_types.md#theme)\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`theme` | *Partial*<[*Theme*](core_types.md#theme)\> |

**Returns:** *void*

___

### theme

▸ **theme**(): [*Theme*](core_types.md#theme)

**Returns:** [*Theme*](core_types.md#theme)

___

### useStyled

▸ **useStyled**<T\>(`func`: (`Theme`: *any*) => T): T

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`func` | (`Theme`: *any*) => T |

**Returns:** T

___

### useTheme

▸ **useTheme**(): [*Theme*](core_types.md#theme)

**Returns:** [*Theme*](core_types.md#theme)
