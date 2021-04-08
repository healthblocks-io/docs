---
id: "core_project"
title: "Module: core/project"
sidebar_label: "core/project"
custom_edit_url: null
hide_title: true
---

# Module: core/project

## Variables

### $globalProject

• `Const` **$globalProject**: *UseStore*<GlobalProjectState\>

___

### useGlobalProject

• `Const` **useGlobalProject**: *UseStore*<GlobalProjectState\>

## Functions

### fetchProject

▸ **fetchProject**(`pid?`: *string*, `options?`: FetchProjectOptions): *Promise*<any\> \| ProjectState

Fetch project

Examples

    // Production
    fetchProject(app().pid, { maxAge: 120, maxStale: 900 })
    // Development
    fetchProject(app().pid, { maxAge: 10, maxStale: 10 })

#### Parameters:

Name | Type |
:------ | :------ |
`pid` | *string* |
`options?` | FetchProjectOptions |

**Returns:** *Promise*<any\> \| ProjectState

___

### getProject

▸ **getProject**(`pid`: *string*): ProjectState

#### Parameters:

Name | Type |
:------ | :------ |
`pid` | *string* |

**Returns:** ProjectState

___

### project

▸ **project**(): ProjectState

**Returns:** ProjectState

___

### refresh

▸ **refresh**(`pid?`: *string*): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`pid?` | *string* |

**Returns:** *Promise*<any\>

___

### resolveAssessmentData

▸ **resolveAssessmentData**(`data`: *any*): [*Project*](core_types.md#project)

#### Parameters:

Name | Type |
:------ | :------ |
`data` | *any* |

**Returns:** [*Project*](core_types.md#project)

___

### setProject

▸ **setProject**(`project`: *Partial*<ProjectState\>, `pid?`: *string*): *void*

Merge valid project data with current state and save in storage

#### Parameters:

Name | Type |
:------ | :------ |
`project` | *Partial*<ProjectState\> |
`pid` | *string* |

**Returns:** *void*

___

### setProjectState

▸ **setProjectState**(`project`: *Partial*<ProjectState\>, `pid?`: *string*): *void*

Merge project data with current state

#### Parameters:

Name | Type |
:------ | :------ |
`project` | *Partial*<ProjectState\> |
`pid` | *string* |

**Returns:** *void*

___

### useConfig

▸ **useConfig**<T\>(`selector`: (`p`: ProjectState) => T): T

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`selector` | (`p`: ProjectState) => T |

**Returns:** T

___

### useProject

▸ **useProject**(): ProjectState

**Returns:** ProjectState

___

### useProjectFallback

▸ **useProjectFallback**(): *boolean*

**Returns:** *boolean*
