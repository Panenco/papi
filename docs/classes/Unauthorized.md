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
- [httpCode](Unauthorized.md#httpcode)
- [message](Unauthorized.md#message)
- [name](Unauthorized.md#name)
- [payload](Unauthorized.md#payload)
- [reason](Unauthorized.md#reason)
- [stack](Unauthorized.md#stack)
- [stackTraceLimit](Unauthorized.md#stacktracelimit)

### Methods

- [captureStackTrace](Unauthorized.md#capturestacktrace)
- [prepareStackTrace](Unauthorized.md#preparestacktrace)

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

[src/contracts/errors/unauthorized.error.ts:7](https://github.com/Panenco/papi/blob/5302639/src/contracts/errors/unauthorized.error.ts#L7)

## Properties

### code

• **code**: `number`

#### Inherited from

[ErrorBase](ErrorBase.md).[code](ErrorBase.md#code)

#### Defined in

[src/contracts/errors/errorBase.error.ts:8](https://github.com/Panenco/papi/blob/5302639/src/contracts/errors/errorBase.error.ts#L8)

___

### httpCode

• **httpCode**: `number`

#### Inherited from

[ErrorBase](ErrorBase.md).[httpCode](ErrorBase.md#httpcode)

#### Defined in

node_modules/routing-controllers/types/http-error/HttpError.d.ts:7

___

### message

• **message**: `string`

#### Inherited from

[ErrorBase](ErrorBase.md).[message](ErrorBase.md#message)

#### Defined in

[src/contracts/errors/errorBase.error.ts:10](https://github.com/Panenco/papi/blob/5302639/src/contracts/errors/errorBase.error.ts#L10)

___

### name

• **name**: `string`

#### Inherited from

[ErrorBase](ErrorBase.md).[name](ErrorBase.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### payload

• `Optional` **payload**: `object`

#### Inherited from

[ErrorBase](ErrorBase.md).[payload](ErrorBase.md#payload)

#### Defined in

[src/contracts/errors/errorBase.error.ts:11](https://github.com/Panenco/papi/blob/5302639/src/contracts/errors/errorBase.error.ts#L11)

___

### reason

• **reason**: `string`

#### Inherited from

[ErrorBase](ErrorBase.md).[reason](ErrorBase.md#reason)

#### Defined in

[src/contracts/errors/errorBase.error.ts:9](https://github.com/Panenco/papi/blob/5302639/src/contracts/errors/errorBase.error.ts#L9)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[ErrorBase](ErrorBase.md).[stack](ErrorBase.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[ErrorBase](ErrorBase.md).[stackTraceLimit](ErrorBase.md#stacktracelimit)

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

[ErrorBase](ErrorBase.md).[captureStackTrace](ErrorBase.md#capturestacktrace)

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

[ErrorBase](ErrorBase.md).[prepareStackTrace](ErrorBase.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11
