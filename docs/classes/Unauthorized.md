[@panenco/papi](../README.md) / [Exports](../modules.md) / Unauthorized

# Class: Unauthorized

Http error with status code 401

## Hierarchy

- [`ErrorBase`](ErrorBase.md)

  ↳ **`Unauthorized`**

## Table of contents

### Constructors

- [constructor](Unauthorized.md#constructor)

### Properties

- [code](Unauthorized.md#code)
- [reason](Unauthorized.md#reason)
- [message](Unauthorized.md#message)
- [payload](Unauthorized.md#payload)

## Constructors

### constructor

• **new Unauthorized**(`reason`, `message`, `payload?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `string` |
| `message` | `string` |
| `payload?` | `object` |

#### Overrides

[ErrorBase](ErrorBase.md).[constructor](ErrorBase.md#constructor)

#### Defined in

[contracts/errors/unauthorized.error.ts:9](https://github.com/Panenco/papi/blob/db78196/src/contracts/errors/unauthorized.error.ts#L9)

## Properties

### code

• **code**: `number`

#### Inherited from

[ErrorBase](ErrorBase.md).[code](ErrorBase.md#code)

#### Defined in

[contracts/errors/errorBase.error.ts:10](https://github.com/Panenco/papi/blob/db78196/src/contracts/errors/errorBase.error.ts#L10)

___

### reason

• **reason**: `string`

#### Inherited from

[ErrorBase](ErrorBase.md).[reason](ErrorBase.md#reason)

#### Defined in

[contracts/errors/errorBase.error.ts:11](https://github.com/Panenco/papi/blob/db78196/src/contracts/errors/errorBase.error.ts#L11)

___

### message

• **message**: `string`

#### Inherited from

[ErrorBase](ErrorBase.md).[message](ErrorBase.md#message)

#### Defined in

[contracts/errors/errorBase.error.ts:12](https://github.com/Panenco/papi/blob/db78196/src/contracts/errors/errorBase.error.ts#L12)

___

### payload

• `Optional` **payload**: `object`

#### Inherited from

[ErrorBase](ErrorBase.md).[payload](ErrorBase.md#payload)

#### Defined in

[contracts/errors/errorBase.error.ts:13](https://github.com/Panenco/papi/blob/db78196/src/contracts/errors/errorBase.error.ts#L13)
