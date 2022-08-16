[@panenco/papi](../README.md) / [Exports](../modules.md) / ErrorBase

# Class: ErrorBase

Base for API Error

## Hierarchy

- `HttpError`

  ↳ **`ErrorBase`**

  ↳↳ [`BadRequest`](BadRequest.md)

  ↳↳ [`Conflict`](Conflict.md)

  ↳↳ [`Forbidden`](Forbidden.md)

  ↳↳ [`NotFound`](NotFound.md)

  ↳↳ [`Unauthorized`](Unauthorized.md)

## Table of contents

### Properties

- [code](ErrorBase.md#code)
- [reason](ErrorBase.md#reason)
- [message](ErrorBase.md#message)
- [payload](ErrorBase.md#payload)

### Constructors

- [constructor](ErrorBase.md#constructor)

## Properties

### code

• **code**: `number`

#### Defined in

[contracts/errors/errorBase.error.ts:10](https://github.com/Panenco/papi/blob/6dd999a/src/contracts/errors/errorBase.error.ts#L10)

___

### reason

• **reason**: `string`

#### Defined in

[contracts/errors/errorBase.error.ts:11](https://github.com/Panenco/papi/blob/6dd999a/src/contracts/errors/errorBase.error.ts#L11)

___

### message

• **message**: `string`

#### Overrides

HttpError.message

#### Defined in

[contracts/errors/errorBase.error.ts:12](https://github.com/Panenco/papi/blob/6dd999a/src/contracts/errors/errorBase.error.ts#L12)

___

### payload

• `Optional` **payload**: `object`

#### Defined in

[contracts/errors/errorBase.error.ts:13](https://github.com/Panenco/papi/blob/6dd999a/src/contracts/errors/errorBase.error.ts#L13)

## Constructors

### constructor

• **new ErrorBase**(`code`, `reason`, `message`, `payload?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | [`StatusCode`](../enums/StatusCode.md) |
| `reason` | `string` |
| `message` | `string` |
| `payload?` | `object` |

#### Overrides

HttpError.constructor

#### Defined in

[contracts/errors/errorBase.error.ts:15](https://github.com/Panenco/papi/blob/6dd999a/src/contracts/errors/errorBase.error.ts#L15)
