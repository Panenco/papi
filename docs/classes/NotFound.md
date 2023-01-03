[@panenco/papi](../README.md) / [Exports](../modules.md) / NotFound

# Class: NotFound

Http error with status code 404

## Hierarchy

- [`ErrorBase`](ErrorBase.md)

  ↳ **`NotFound`**

## Table of contents

### Properties

- [code](NotFound.md#code)
- [reason](NotFound.md#reason)
- [message](NotFound.md#message)
- [payload](NotFound.md#payload)

### Constructors

- [constructor](NotFound.md#constructor)

## Properties

### code

• **code**: `number`

#### Inherited from

[ErrorBase](ErrorBase.md).[code](ErrorBase.md#code)

#### Defined in

[contracts/errors/errorBase.error.ts:10](https://github.com/Panenco/papi/blob/05920bb/src/contracts/errors/errorBase.error.ts#L10)

___

### reason

• **reason**: `string`

#### Inherited from

[ErrorBase](ErrorBase.md).[reason](ErrorBase.md#reason)

#### Defined in

[contracts/errors/errorBase.error.ts:11](https://github.com/Panenco/papi/blob/05920bb/src/contracts/errors/errorBase.error.ts#L11)

___

### message

• **message**: `string`

#### Inherited from

[ErrorBase](ErrorBase.md).[message](ErrorBase.md#message)

#### Defined in

[contracts/errors/errorBase.error.ts:12](https://github.com/Panenco/papi/blob/05920bb/src/contracts/errors/errorBase.error.ts#L12)

___

### payload

• `Optional` **payload**: `object`

#### Inherited from

[ErrorBase](ErrorBase.md).[payload](ErrorBase.md#payload)

#### Defined in

[contracts/errors/errorBase.error.ts:13](https://github.com/Panenco/papi/blob/05920bb/src/contracts/errors/errorBase.error.ts#L13)

## Constructors

### constructor

• **new NotFound**(`reason`, `message`, `payload?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `string` |
| `message` | `string` |
| `payload?` | `object` |

#### Overrides

[ErrorBase](ErrorBase.md).[constructor](ErrorBase.md#constructor)

#### Defined in

[contracts/errors/notFound.error.ts:9](https://github.com/Panenco/papi/blob/05920bb/src/contracts/errors/notFound.error.ts#L9)
