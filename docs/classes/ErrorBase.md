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

### Constructors

- [constructor](ErrorBase.md#constructor)

### Properties

- [code](ErrorBase.md#code)
- [httpCode](ErrorBase.md#httpcode)
- [message](ErrorBase.md#message)
- [name](ErrorBase.md#name)
- [payload](ErrorBase.md#payload)
- [reason](ErrorBase.md#reason)
- [stack](ErrorBase.md#stack)
- [stackTraceLimit](ErrorBase.md#stacktracelimit)

### Methods

- [captureStackTrace](ErrorBase.md#capturestacktrace)
- [prepareStackTrace](ErrorBase.md#preparestacktrace)

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

[src/contracts/errors/errorBase.error.ts:13](https://github.com/Panenco/papi/blob/5302639/src/contracts/errors/errorBase.error.ts#L13)

## Properties

### code

• **code**: `number`

#### Defined in

[src/contracts/errors/errorBase.error.ts:8](https://github.com/Panenco/papi/blob/5302639/src/contracts/errors/errorBase.error.ts#L8)

___

### httpCode

• **httpCode**: `number`

#### Inherited from

HttpError.httpCode

#### Defined in

node_modules/routing-controllers/types/http-error/HttpError.d.ts:7

___

### message

• **message**: `string`

#### Overrides

HttpError.message

#### Defined in

[src/contracts/errors/errorBase.error.ts:10](https://github.com/Panenco/papi/blob/5302639/src/contracts/errors/errorBase.error.ts#L10)

___

### name

• **name**: `string`

#### Inherited from

HttpError.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### payload

• `Optional` **payload**: `object`

#### Defined in

[src/contracts/errors/errorBase.error.ts:11](https://github.com/Panenco/papi/blob/5302639/src/contracts/errors/errorBase.error.ts#L11)

___

### reason

• **reason**: `string`

#### Defined in

[src/contracts/errors/errorBase.error.ts:9](https://github.com/Panenco/papi/blob/5302639/src/contracts/errors/errorBase.error.ts#L9)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

HttpError.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

HttpError.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

HttpError.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4

___

### prepareStackTrace

▸ `Static` `Optional` **prepareStackTrace**(`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

#### Returns

`any`

#### Inherited from

HttpError.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11
