[@panenco/papi](../README.md) / [Exports](../modules.md) / SortQuery

# Class: SortQuery

Base query validator for a sortable paged list

## Hierarchy

- [`PagingQuery`](PagingQuery.md)

  ↳ **`SortQuery`**

## Table of contents

### Constructors

- [constructor](SortQuery.md#constructor)

### Properties

- [offset](SortQuery.md#offset)
- [limit](SortQuery.md#limit)
- [sort](SortQuery.md#sort)
- [direction](SortQuery.md#direction)

## Constructors

### constructor

• **new SortQuery**()

#### Inherited from

[PagingQuery](PagingQuery.md).[constructor](PagingQuery.md#constructor)

## Properties

### offset

• `Optional` **offset**: `number` = `0`

#### Inherited from

[PagingQuery](PagingQuery.md).[offset](PagingQuery.md#offset)

#### Defined in

[contracts/queries/paging.query.ts:16](https://github.com/Panenco/papi/blob/1dcd4f2/src/contracts/queries/paging.query.ts#L16)

___

### limit

• `Optional` **limit**: `number` = `20`

#### Inherited from

[PagingQuery](PagingQuery.md).[limit](PagingQuery.md#limit)

#### Defined in

[contracts/queries/paging.query.ts:22](https://github.com/Panenco/papi/blob/1dcd4f2/src/contracts/queries/paging.query.ts#L22)

___

### sort

• `Optional` **sort**: `string`

#### Defined in

[contracts/queries/sort.query.ts:17](https://github.com/Panenco/papi/blob/1dcd4f2/src/contracts/queries/sort.query.ts#L17)

___

### direction

• `Optional` **direction**: [`QueryOrder`](../enums/QueryOrder.md)

#### Defined in

[contracts/queries/sort.query.ts:22](https://github.com/Panenco/papi/blob/1dcd4f2/src/contracts/queries/sort.query.ts#L22)
