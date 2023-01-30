[@panenco/papi](../README.md) / [Exports](../modules.md) / Forbidden

# Class: Forbidden

Http error with status code 403

## Hierarchy

- [`ErrorBase`](ErrorBase.md)

  ↳ **`Forbidden`**

## Table of contents

### Properties

- [code](Forbidden.md#code)
- [reason](Forbidden.md#reason)
- [message](Forbidden.md#message)
- [payload](Forbidden.md#payload)

### Constructors

- [constructor](Forbidden.md#constructor)

## Properties

### code

• **code**: `number`

#### Inherited from

[ErrorBase](ErrorBase.md).[code](ErrorBase.md#code)

#### Defined in

[contracts/errors/errorBase.error.ts:10](https://github.com/Panenco/papi/blob/2f616a8/src/contracts/errors/errorBase.error.ts#L10)

___

### reason

• **reason**: `string`

#### Inherited from

[ErrorBase](ErrorBase.md).[reason](ErrorBase.md#reason)

#### Defined in

[contracts/errors/errorBase.error.ts:11](https://github.com/Panenco/papi/blob/2f616a8/src/contracts/errors/errorBase.error.ts#L11)

___

### message

• **message**: `string`

#### Inherited from

[ErrorBase](ErrorBase.md).[message](ErrorBase.md#message)

#### Defined in

[contracts/errors/errorBase.error.ts:12](https://github.com/Panenco/papi/blob/2f616a8/src/contracts/errors/errorBase.error.ts#L12)

___

### payload

• `Optional` **payload**: `object`

#### Inherited from

[ErrorBase](ErrorBase.md).[payload](ErrorBase.md#payload)

#### Defined in

[contracts/errors/errorBase.error.ts:13](https://github.com/Panenco/papi/blob/2f616a8/src/contracts/errors/errorBase.error.ts#L13)

## Constructors

### constructor

• **new Forbidden**(`reason`, `message`, `payload?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `string` |
| `message` | `string` |
| `payload?` | `object` |

#### Overrides

[ErrorBase](ErrorBase.md).[constructor](ErrorBase.md#constructor)

#### Defined in

[contracts/errors/forbidden.error.ts:9](https://github.com/Panenco/papi/blob/2f616a8/src/contracts/errors/forbidden.error.ts#L9)
