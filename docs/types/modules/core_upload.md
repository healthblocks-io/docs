---
id: "core_upload"
title: "Module: core/upload"
sidebar_label: "core/upload"
custom_edit_url: null
hide_title: true
---

# Module: core/upload

## Type aliases

### Dimensions

Ƭ **Dimensions**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`height` | *number* |
`width` | *number* |

___

### FileUpload

Ƭ **FileUpload**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`height` | *number* |
`size` | *number* |
`url` | *string* |
`width` | *number* |

___

### NativeFile

Ƭ **NativeFile**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`height` | *number* |
`uri` | *string* |
`width` | *number* |

## Functions

### imageDimensions

▸ **imageDimensions**(`file`: File): *Promise*<[*Dimensions*](core_upload.md#dimensions)\>

Loads an image to determine its dimensions

#### Parameters:

Name | Type |
:------ | :------ |
`file` | File |

**Returns:** *Promise*<[*Dimensions*](core_upload.md#dimensions)\>

the width and height of the image

___

### large

▸ **large**(`image`: [*Image*](core_types.md#image)): [*ImageData*](core_types.md#imagedata)

Large thumbnail with cloudinary + cloudfront support

#### Parameters:

Name | Type |
:------ | :------ |
`image` | [*Image*](core_types.md#image) |

**Returns:** [*ImageData*](core_types.md#imagedata)

___

### resized

▸ **resized**(`url`: *string*, `width?`: *number*): *string*

Scaled down image URL

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`url` | *string* | - |
`width` | *number* | 600 |

**Returns:** *string*

___

### small

▸ **small**(`image`: [*Image*](core_types.md#image)): [*ImageData*](core_types.md#imagedata)

Small thumbnail with cloudinary + cloudfront support

#### Parameters:

Name | Type |
:------ | :------ |
`image` | [*Image*](core_types.md#image) |

**Returns:** [*ImageData*](core_types.md#imagedata)

___

### thumbnail

▸ **thumbnail**(`image`: [*Image*](core_types.md#image) \| [*ImageData*](core_types.md#imagedata), `maxwidth?`: *number*): [*ImageData*](core_types.md#imagedata)

Returns a scaled down image, dimensions may be 0

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`image` | [*Image*](core_types.md#image) \| [*ImageData*](core_types.md#imagedata) | - |
`maxwidth` | *number* | 600 |

**Returns:** [*ImageData*](core_types.md#imagedata)

___

### upload

▸ **upload**(`input`: FileList \| File, `folder?`: *string*): *Promise*<{ `size`: *number* ; `url`: *string*  }\>

Upload a file

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`input` | FileList \| File | - |
`folder` | *string* | '' |

**Returns:** *Promise*<{ `size`: *number* ; `url`: *string*  }\>

the URL and size of the uploaded file

___

### uploadNative

▸ **uploadNative**(`input`: [*NativeFile*](core_upload.md#nativefile), `folder?`: *string*): *Promise*<[*FileUpload*](core_upload.md#fileupload)\>

Upload an image in React Native/Expo

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`input` | [*NativeFile*](core_upload.md#nativefile) | - |
`folder` | *string* | '' |

**Returns:** *Promise*<[*FileUpload*](core_upload.md#fileupload)\>

___

### uploadWeb

▸ **uploadWeb**(`input`: FileList \| File, `folder?`: *string*): *Promise*<[*FileUpload*](core_upload.md#fileupload)\>

Upload an image on Web

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`input` | FileList \| File | - |
`folder` | *string* | '' |

**Returns:** *Promise*<[*FileUpload*](core_upload.md#fileupload)\>

___

### useSignedImage

▸ **useSignedImage**(): *function*

**Returns:** (`image`: [*Image*](core_types.md#image) \| [*ImageData*](core_types.md#imagedata), `width`: *number*) => [*Image*](core_types.md#image) \| [*ImageData*](core_types.md#imagedata)

___

### useSignedURL

▸ **useSignedURL**(): *function*

The hook provides a function that signs CloudFront URLs

```tsx
const sign = useSignedURL()
return <Image source={{ uri: sign(someURL) }} />
```

**Returns:** (`url`: *string*) => *string*
