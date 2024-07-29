[@panenco/papi](../README.md) / [Exports](../modules.md) / BadRequest

# Class: BadRequest

Http error with status code 400

## Hierarchy

- [`ErrorBase`](ErrorBase.md)

  ↳ **`BadRequest`**

  ↳↳ [`ValidationError`](ValidationError.md)

## Table of contents

### Constructors

- [constructor](BadRequest.md#constructor)

### Properties

- [code](BadRequest.md#code)
- [reason](BadRequest.md#reason)
- [payload](BadRequest.md#payload)

## Constructors

### constructor

• **new BadRequest**(`reason`, `message`, `payload?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `string` |
| `message` | `string` |
| `payload?` | `object` |

#### Overrides

[ErrorBase](ErrorBase.md).[constructor](ErrorBase.md#constructor)

#### Defined in

[contracts/errors/badRequest.error.ts:9](https://github.com/Panenco/papi/blob/1848616/src/contracts/errors/badRequest.error.ts#L9)

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
