[@panenco/papi](../README.md) / [Exports](../modules.md) / Conflict

# Class: Conflict

Http error with status code 409 (duplicates)

## Hierarchy

- [`ErrorBase`](ErrorBase.md)

  ↳ **`Conflict`**

## Table of contents

### Constructors

- [constructor](Conflict.md#constructor)

### Properties

- [code](Conflict.md#code)
- [reason](Conflict.md#reason)
- [payload](Conflict.md#payload)

## Constructors

### constructor

• **new Conflict**(`reason`, `message`, `payload?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `string` |
| `message` | `string` |
| `payload?` | `object` |

#### Overrides

[ErrorBase](ErrorBase.md).[constructor](ErrorBase.md#constructor)

#### Defined in

[contracts/errors/conflict.error.ts:9](https://github.com/Panenco/papi/blob/1848616/src/contracts/errors/conflict.error.ts#L9)

## Properties

### code

• **code**: `number`

#### Inherited from

[ErrorBase](ErrorBase.md).[code](ErrorBase.md#code)

#### Defined in

[contracts/errors/errorBase.error.ts:9](https://github.com/Panenco/papi/blob/1848616/src/contracts/errors/errorBase.error.ts#L9)

___

### reason

• **reason**: `string`

#### Inherited from

[ErrorBase](ErrorBase.md).[reason](ErrorBase.md#reason)

#### Defined in

[contracts/errors/errorBase.error.ts:10](https://github.com/Panenco/papi/blob/1848616/src/contracts/errors/errorBase.error.ts#L10)

___

### payload

• `Optional` **payload**: `object`

#### Inherited from

[ErrorBase](ErrorBase.md).[payload](ErrorBase.md#payload)

#### Defined in

[contracts/errors/errorBase.error.ts:11](https://github.com/Panenco/papi/blob/1848616/src/contracts/errors/errorBase.error.ts#L11)
