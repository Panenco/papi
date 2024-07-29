[@panenco/papi](../README.md) / [Exports](../modules.md) / TransformOptions

# Interface: TransformOptions

Options to be passed during transformation.

**`Inherit Doc`**

## Hierarchy

- `ClassTransformOptions`

  ↳ **`TransformOptions`**

## Table of contents

### Properties

- [exposeUnsetFields](TransformOptions.md#exposeunsetfields)

## Properties

### exposeUnsetFields

• `Optional` **exposeUnsetFields**: `boolean`

When set to true, fields with `undefined` as value will be included in class to plain transformation. Otherwise
those fields will be omitted from the result.

DEFAULT: `false`

#### Overrides

ClassTransformOptions.exposeUnsetFields

#### Defined in

[utils/types/transformerOptions.ts:30](https://github.com/Panenco/papi/blob/1848616/src/utils/types/transformerOptions.ts#L30)
