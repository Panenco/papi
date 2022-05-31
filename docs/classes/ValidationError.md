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
- [reason](ValidationError.md#reason)
- [message](ValidationError.md#message)
- [payload](ValidationError.md#payload)
- [errors](ValidationError.md#errors)

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

[contracts/errors/validation.error.ts:12](https://github.com/Panenco/papi/blob/dc0772e/src/contracts/errors/validation.error.ts#L12)

## Properties

### code

• **code**: `number`

#### Inherited from

[BadRequest](BadRequest.md).[code](BadRequest.md#code)

#### Defined in

[contracts/errors/errorBase.error.ts:10](https://github.com/Panenco/papi/blob/dc0772e/src/contracts/errors/errorBase.error.ts#L10)

___

### reason

• **reason**: `string`

#### Inherited from

[BadRequest](BadRequest.md).[reason](BadRequest.md#reason)

#### Defined in

[contracts/errors/errorBase.error.ts:11](https://github.com/Panenco/papi/blob/dc0772e/src/contracts/errors/errorBase.error.ts#L11)

___

### message

• **message**: `string`

#### Inherited from

[BadRequest](BadRequest.md).[message](BadRequest.md#message)

#### Defined in

[contracts/errors/errorBase.error.ts:12](https://github.com/Panenco/papi/blob/dc0772e/src/contracts/errors/errorBase.error.ts#L12)

___

### payload

• `Optional` **payload**: `object`

#### Inherited from

[BadRequest](BadRequest.md).[payload](BadRequest.md#payload)

#### Defined in

[contracts/errors/errorBase.error.ts:13](https://github.com/Panenco/papi/blob/dc0772e/src/contracts/errors/errorBase.error.ts#L13)

___

### errors

• **errors**: { [K in string \| number \| symbol]?: string \| object \| string[] }

#### Defined in

[contracts/errors/validation.error.ts:11](https://github.com/Panenco/papi/blob/dc0772e/src/contracts/errors/validation.error.ts#L11)
