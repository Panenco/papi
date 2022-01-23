[@panenco/papi](../README.md) / [Exports](../modules.md) / ValidationError

# Class: ValidationError<T\>

Http error with status code 400

Returns a JSON error map of input validation errors

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`BadRequest`](BadRequest.md)

  ↳ **`ValidationError`**

## Table of contents

### Constructors

- [constructor](ValidationError.md#constructor)

### Properties

- [code](ValidationError.md#code)
- [errors](ValidationError.md#errors)
- [httpCode](ValidationError.md#httpcode)
- [message](ValidationError.md#message)
- [name](ValidationError.md#name)
- [payload](ValidationError.md#payload)
- [reason](ValidationError.md#reason)
- [stack](ValidationError.md#stack)
- [stackTraceLimit](ValidationError.md#stacktracelimit)

### Methods

- [captureStackTrace](ValidationError.md#capturestacktrace)
- [prepareStackTrace](ValidationError.md#preparestacktrace)

## Constructors

### constructor

• **new ValidationError**<`T`\>(`errors`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `errors` | { [K in string \| number \| symbol]?: string \| object \| string[] } |

#### Overrides

[BadRequest](BadRequest.md).[constructor](BadRequest.md#constructor)

#### Defined in

[src/contracts/errors/validation.error.ts:10](https://github.com/Panenco/papi/blob/5302639/src/contracts/errors/validation.error.ts#L10)

## Properties

### code

• **code**: `number`

#### Inherited from

[BadRequest](BadRequest.md).[code](BadRequest.md#code)

#### Defined in

[src/contracts/errors/errorBase.error.ts:8](https://github.com/Panenco/papi/blob/5302639/src/contracts/errors/errorBase.error.ts#L8)

___

### errors

• **errors**: { [K in string \| number \| symbol]?: string \| object \| string[] }

#### Defined in

[src/contracts/errors/validation.error.ts:9](https://github.com/Panenco/papi/blob/5302639/src/contracts/errors/validation.error.ts#L9)

___

### httpCode

• **httpCode**: `number`

#### Inherited from

[BadRequest](BadRequest.md).[httpCode](BadRequest.md#httpcode)

#### Defined in

node_modules/routing-controllers/types/http-error/HttpError.d.ts:7

___

### message

• **message**: `string`

#### Inherited from

[BadRequest](BadRequest.md).[message](BadRequest.md#message)

#### Defined in

[src/contracts/errors/errorBase.error.ts:10](https://github.com/Panenco/papi/blob/5302639/src/contracts/errors/errorBase.error.ts#L10)

___

### name

• **name**: `string`

#### Inherited from

[BadRequest](BadRequest.md).[name](BadRequest.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### payload

• `Optional` **payload**: `object`

#### Inherited from

[BadRequest](BadRequest.md).[payload](BadRequest.md#payload)

#### Defined in

[src/contracts/errors/errorBase.error.ts:11](https://github.com/Panenco/papi/blob/5302639/src/contracts/errors/errorBase.error.ts#L11)

___

### reason

• **reason**: `string`

#### Inherited from

[BadRequest](BadRequest.md).[reason](BadRequest.md#reason)

#### Defined in

[src/contracts/errors/errorBase.error.ts:9](https://github.com/Panenco/papi/blob/5302639/src/contracts/errors/errorBase.error.ts#L9)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[BadRequest](BadRequest.md).[stack](BadRequest.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[BadRequest](BadRequest.md).[stackTraceLimit](BadRequest.md#stacktracelimit)

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

[BadRequest](BadRequest.md).[captureStackTrace](BadRequest.md#capturestacktrace)

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

[BadRequest](BadRequest.md).[prepareStackTrace](BadRequest.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11
