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

- [direction](SortQuery.md#direction)
- [limit](SortQuery.md#limit)
- [offset](SortQuery.md#offset)
- [sort](SortQuery.md#sort)

## Constructors

### constructor

• **new SortQuery**()

#### Inherited from

[PagingQuery](PagingQuery.md).[constructor](PagingQuery.md#constructor)

## Properties

### direction

• `Optional` **direction**: `QueryOrder`

#### Defined in

[src/contracts/queries/sort.query.ts:20](https://github.com/Panenco/papi/blob/5302639/src/contracts/queries/sort.query.ts#L20)

___

### limit

• `Optional` **limit**: `number` = `20`

#### Inherited from

[PagingQuery](PagingQuery.md).[limit](PagingQuery.md#limit)

#### Defined in

[src/contracts/queries/paging.query.ts:20](https://github.com/Panenco/papi/blob/5302639/src/contracts/queries/paging.query.ts#L20)

___

### offset

• `Optional` **offset**: `number` = `0`

#### Inherited from

[PagingQuery](PagingQuery.md).[offset](PagingQuery.md#offset)

#### Defined in

[src/contracts/queries/paging.query.ts:14](https://github.com/Panenco/papi/blob/5302639/src/contracts/queries/paging.query.ts#L14)

___

### sort

• `Optional` **sort**: `string`

#### Defined in

[src/contracts/queries/sort.query.ts:15](https://github.com/Panenco/papi/blob/5302639/src/contracts/queries/sort.query.ts#L15)
