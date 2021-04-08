---
id: "native_onboardinglottie"
title: "Module: native/OnboardingLottie"
sidebar_label: "native/OnboardingLottie"
custom_edit_url: null
hide_title: true
---

# Module: native/OnboardingLottie

## Functions

### LottieImage

▸ **LottieImage**(`props`: [*ImageProps*](../interfaces/native_onboarding.imageprops.md) & ViewProps): *Element*

Ready to be used in Onboarding

Example

    <Onboarding image={LottieImage} />

Example

    <Onboarding image={props => <LottieImage {...props} loop={false} />} />

#### Parameters:

Name | Type |
:------ | :------ |
`props` | [*ImageProps*](../interfaces/native_onboarding.imageprops.md) & ViewProps |

**Returns:** *Element*

___

### RemoteLottieView

▸ **RemoteLottieView**(`__namedParameters`: { [key: string]: *any*; `source`: { `uri`: *string*  } ; `style`: *StyleProp*<ViewStyle\>  }): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | *object* |
`__namedParameters.source` | *object* |
`__namedParameters.source.uri` | *string* |
`__namedParameters.style` | *StyleProp*<ViewStyle\> |

**Returns:** *Element*
