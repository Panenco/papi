[@panenco/papi](../README.md) / [Exports](../modules.md) / ErrorBase

# Class: ErrorBase

Base for API Error

## Hierarchy

- `Error`

  ↳ **`ErrorBase`**

  ↳↳ [`BadRequest`](BadRequest.md)

  ↳↳ [`Conflict`](Conflict.md)

  ↳↳ [`Forbidden`](Forbidden.md)

  ↳↳ [`NotFound`](NotFound.md)

  ↳↳ [`Unauthorized`](Unauthorized.md)

## Table of contents

### Constructors

- [constructor](ErrorBase.md#constructor)

### Properties

- [code](ErrorBase.md#code)
- [reason](ErrorBase.md#reason)
- [payload](ErrorBase.md#payload)

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

Error.constructor

#### Defined in

[contracts/errors/errorBase.error.ts:13](https://github.com/Panenco/papi/blob/1848616/src/contracts/errors/errorBase.error.ts#L13)

## Properties

### code

• **code**: `number`

#### Defined in

[contracts/errors/errorBase.error.ts:9](https://github.com/Panenco/papi/blob/1848616/src/contracts/errors/errorBase.error.ts#L9)

___

### reason

• **reason**: `string`

#### Defined in

[contracts/errors/errorBase.error.ts:10](https://github.com/Panenco/papi/blob/1848616/src/contracts/errors/errorBase.error.ts#L10)

___

### payload

• `Optional` **payload**: `object`

#### Defined in

[contracts/errors/errorBase.error.ts:11](https://github.com/Panenco/papi/blob/1848616/src/contracts/errors/errorBase.error.ts#L11)
