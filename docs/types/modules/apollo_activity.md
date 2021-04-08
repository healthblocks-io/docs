---
id: "apollo_activity"
title: "Module: apollo/activity"
sidebar_label: "apollo/activity"
custom_edit_url: null
hide_title: true
---

# Module: apollo/activity

## Table of contents

### Interfaces

- [ActivitiesResult](../interfaces/apollo_activity.activitiesresult.md)
- [Activity](../interfaces/apollo_activity.activity.md)
- [ActivityDoc](../interfaces/apollo_activity.activitydoc.md)
- [ActivityInput](../interfaces/apollo_activity.activityinput.md)

## Variables

### InsertActivityMutation

• `Const` **InsertActivityMutation**: DocumentNode

___

### MyActivitiesQuery

• `Const` **MyActivitiesQuery**: DocumentNode

___

### UpdateActivityMutation

• `Const` **UpdateActivityMutation**: DocumentNode

## Functions

### insertActivity

▸ **insertActivity**(`object`: [*ActivityInput*](../interfaces/apollo_activity.activityinput.md)): *Promise*<FetchResult<any, Record<string, any\>, Record<string, any\>\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`object` | [*ActivityInput*](../interfaces/apollo_activity.activityinput.md) |

**Returns:** *Promise*<FetchResult<any, Record<string, any\>, Record<string, any\>\>\>

___

### updateActivity

▸ **updateActivity**(`where`: Where, `set?`: *Partial*<[*Activity*](../interfaces/apollo_activity.activity.md)\>, `append?`: *Partial*<[*ActivityDoc*](../interfaces/apollo_activity.activitydoc.md)\>): *Promise*<FetchResult<any, Record<string, any\>, Record<string, any\>\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`where` | Where |
`set?` | *Partial*<[*Activity*](../interfaces/apollo_activity.activity.md)\> |
`append?` | *Partial*<[*ActivityDoc*](../interfaces/apollo_activity.activitydoc.md)\> |

**Returns:** *Promise*<FetchResult<any, Record<string, any\>, Record<string, any\>\>\>

___

### useActivities

▸ **useActivities**(): *QueryResult*<[*ActivitiesResult*](../interfaces/apollo_activity.activitiesresult.md), Record<string, any\>\>

**Returns:** *QueryResult*<[*ActivitiesResult*](../interfaces/apollo_activity.activitiesresult.md), Record<string, any\>\>
