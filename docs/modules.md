[@panenco/papi](README.md) / Exports

# @panenco/papi

## Table of contents

### Enumerations

- [StatusCode](enums/StatusCode.md)

### Classes

- [BadRequest](classes/BadRequest.md)
- [Conflict](classes/Conflict.md)
- [ErrorBase](classes/ErrorBase.md)
- [ErrorRepresentation](classes/ErrorRepresentation.md)
- [Forbidden](classes/Forbidden.md)
- [ListRepresentation](classes/ListRepresentation.md)
- [NotFound](classes/NotFound.md)
- [PagingQuery](classes/PagingQuery.md)
- [SortQuery](classes/SortQuery.md)
- [Unauthorized](classes/Unauthorized.md)
- [ValidationError](classes/ValidationError.md)
- [ValidationErrorRepresentation](classes/ValidationErrorRepresentation.md)

### Interfaces

- [IAccessToken](interfaces/IAccessToken.md)

### Type aliases

- [ClassType](modules.md#classtype)
- [IRequirement](modules.md#irequirement)
- [Newable](modules.md#newable)

### Functions

- [ArrayRepresenter](modules.md#arrayrepresenter)
- [Body](modules.md#body)
- [ConditionalExpose](modules.md#conditionalexpose)
- [Date](modules.md#date)
- [DefaultValue](modules.md#defaultvalue)
- [ListRepresenter](modules.md#listrepresenter)
- [Nested](modules.md#nested)
- [Numeric](modules.md#numeric)
- [Query](modules.md#query)
- [Representer](modules.md#representer)
- [TransformBooleanString](modules.md#transformbooleanstring)
- [arrayRepresenter](modules.md#arrayrepresenter)
- [createAccessToken](modules.md#createaccesstoken)
- [createListRepresentation](modules.md#createlistrepresentation)
- [errorMiddleware](modules.md#errormiddleware)
- [getAccessTokenData](modules.md#getaccesstokendata)
- [getAuthenticator](modules.md#getauthenticator)
- [handleRequirements](modules.md#handlerequirements)
- [importClasses](modules.md#importclasses)
- [listRepresenter](modules.md#listrepresenter)
- [representer](modules.md#representer)
- [stringToObject](modules.md#stringtoobject)
- [validationMiddleware](modules.md#validationmiddleware)
- [validator](modules.md#validator)

## Type aliases

### ClassType

Ƭ **ClassType**<`T`\>: `Object`

Type to indicate the constructor of a specified class

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/utils/types/classType.ts:4](https://github.com/Panenco/papi/blob/5302639/src/utils/types/classType.ts#L4)

___

### IRequirement

Ƭ **IRequirement**: (`request`: `Request`) => `Promise`<`void`\> \| `void`

#### Type declaration

▸ (`request`): `Promise`<`void`\> \| `void`

Authorization definition base type

Implementation should validate required check and throw [Unauthorized](classes/Unauthorized.md) or [Forbidden](classes/Forbidden.md) Exception

##### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request` |

##### Returns

`Promise`<`void`\> \| `void`

#### Defined in

[src/authorization/requirement.interface.ts:8](https://github.com/Panenco/papi/blob/5302639/src/authorization/requirement.interface.ts#L8)

___

### Newable

Ƭ **Newable**<`T`\>: `Object`

Type to indicate the constructor of a specified class

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Defined in

[src/utils/types/newable.ts:4](https://github.com/Panenco/papi/blob/5302639/src/utils/types/newable.ts#L4)

## Functions

### ArrayRepresenter

▸ `Const` **ArrayRepresenter**(`representation`, `statusCode?`, `options?`): (`target`: `any`, `key`: `string`) => `void`

Decorator to be used on [[routing-controllers]] controller method

Apply array representation transformation on a controller method output.

The result of the transformed return value will be JSON serialized as the response body.

Must be applied on a controller method.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `representation` | [`ClassType`](modules.md#classtype)<`any`\> | `undefined` | class type of the representation to be used by [[class-transformer]] |
| `statusCode` | `number` | `200` | Optional Status code of the success response |
| `options` | `Object` | `{}` | OpenAPI options for API documentation |
| `options.contentType?` | `string` | `undefined` | - |
| `options.description?` | `string` | `undefined` | - |

#### Returns

`fn`

▸ (`target`, `key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `key` | `string` |

##### Returns

`void`

#### Defined in

[src/decorators/representer.decorator.ts:77](https://github.com/Panenco/papi/blob/5302639/src/decorators/representer.decorator.ts#L77)

___

### Body

▸ `Const` **Body**(`type`, `bodyOptions?`, `validatorOptions?`): (`target`: `Object`, `propertyKey`: `string`, `parameterIndex`: `number`) => `void`

Allows to inject and validate a request body value to the controller action parameter.

Must be applied on a controller action parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`Newable`](modules.md#newable)<`any`\> | The expected type of the body. Should be a [[class-validator]] class |
| `bodyOptions?` | `BodyOptions` | [[routing-controllers]] body options for binding the request body |
| `validatorOptions?` | `ValidatorOptions` | [[class-validator]] validation options for the validation to be performed. |

#### Returns

`fn`

▸ (`target`, `propertyKey`, `parameterIndex`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `propertyKey` | `string` |
| `parameterIndex` | `number` |

##### Returns

`void`

#### Defined in

[src/decorators/body.decorator.ts:14](https://github.com/Panenco/papi/blob/5302639/src/decorators/body.decorator.ts#L14)

___

### ConditionalExpose

▸ `Const` **ConditionalExpose**(`condition`): (`target`: `any`, `key`: `string`) => `void`

Extended version of [[class-transformer]][[Expose]] decorator where a condition can be passed to optionally return the property this is applied on.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `condition` | (`object`: `any`) => `boolean` | Condition to Expose the property. With argument the complete current object. |

#### Returns

`fn`

▸ (`target`, `key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `key` | `string` |

##### Returns

`void`

#### Defined in

[src/decorators/conditionalExpose.decorator.ts:9](https://github.com/Panenco/papi/blob/5302639/src/decorators/conditionalExpose.decorator.ts#L9)

___

### Date

▸ `Const` **Date**(): (`target`: `any`, `key`: `string`) => `void`

Extended version of [[class-validator]][[IsDate]] decorator

Checks if a value is a date.

Transforms string dates into JS Dates.

#### Returns

`fn`

▸ (`target`, `key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `key` | `string` |

##### Returns

`void`

#### Defined in

[src/decorators/date.decorator.ts:11](https://github.com/Panenco/papi/blob/5302639/src/decorators/date.decorator.ts#L11)

___

### DefaultValue

▸ `Const` **DefaultValue**(`value`): (`target`: `any`, `key`: `string`) => `void`

Decorator that produces a default value for non-existing or empty properties when transforming with [[class-transformer]]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The default value to be set. |

#### Returns

`fn`

▸ (`target`, `key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `key` | `string` |

##### Returns

`void`

#### Defined in

[src/decorators/defaultValue.decorator.ts:7](https://github.com/Panenco/papi/blob/5302639/src/decorators/defaultValue.decorator.ts#L7)

___

### ListRepresenter

▸ `Const` **ListRepresenter**(`representation`, `statusCode?`, `options?`): (`target`: `any`, `key`: `string`) => `void`

Decorator to be used on [[routing-controllers]] controller method

Apply paginated list representation transformation on a controller method output.

The result of the transformed return value will be JSON serialized as the response body.

Must be applied on a controller method.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `representation` | [`ClassType`](modules.md#classtype)<`any`\> | `undefined` | class type of the representation to be used by [[class-transformer]] |
| `statusCode` | `number` | `200` | Optional Status code of the success response |
| `options` | `Object` | `{}` | OpenAPI options for API documentation |
| `options.contentType?` | `string` | `undefined` | - |
| `options.description?` | `string` | `undefined` | - |

#### Returns

`fn`

▸ (`target`, `key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `key` | `string` |

##### Returns

`void`

#### Defined in

[src/decorators/representer.decorator.ts:48](https://github.com/Panenco/papi/blob/5302639/src/decorators/representer.decorator.ts#L48)

___

### Nested

▸ `Const` **Nested**<`T`\>(`type`, `isArray?`): (`object`: `any`, `propertyName`: `string`) => `void`

Nested objects with this decorator will also be validated.

Transforms the nested objects to the defined type

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | [`ClassType`](modules.md#classtype)<`T`\> | `undefined` | The type to validate and transform the nested property |
| `isArray` | `boolean` | `false` | Whether the property is an object or an array of objects |

#### Returns

`fn`

▸ (`object`, `propertyName`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `propertyName` | `string` |

##### Returns

`void`

#### Defined in

[src/decorators/nested.decorator.ts:14](https://github.com/Panenco/papi/blob/5302639/src/decorators/nested.decorator.ts#L14)

___

### Numeric

▸ `Const` **Numeric**(): (`target`: `any`, `key`: `string`) => `void`

Checks if a value is a number.

Transforms strings and other matching types to numbers

#### Returns

`fn`

▸ (`target`, `key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `key` | `string` |

##### Returns

`void`

#### Defined in

[src/decorators/numeric.decorator.ts:9](https://github.com/Panenco/papi/blob/5302639/src/decorators/numeric.decorator.ts#L9)

___

### Query

▸ `Const` **Query**(`type`, `options?`, `validatorOptions?`): (`target`: `Object`, `propertyKey`: `string` \| `symbol`, `parameterIndex`: `number`) => `void`

Allows to inject and validate a request query params to the controller action parameter.

Must be applied on a controller action parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`Newable`](modules.md#newable)<`any`\> | The expected type of the query params. Should be a [[class-validator]] class |
| `options?` | `ParamOptions` | [[routing-controllers]] param options for binding the request body |
| `validatorOptions?` | `ValidatorOptions` | [[class-validator]] validation options for the validation to be performed. |

#### Returns

`fn`

▸ (`target`, `propertyKey`, `parameterIndex`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `propertyKey` | `string` \| `symbol` |
| `parameterIndex` | `number` |

##### Returns

`void`

#### Defined in

[src/decorators/query.decorator.ts:14](https://github.com/Panenco/papi/blob/5302639/src/decorators/query.decorator.ts#L14)

___

### Representer

▸ `Const` **Representer**(`representation`, `statusCode?`, `options?`): (`target`: `any`, `key`: `string`) => `void`

Decorator to be used on [[routing-controllers]] controller method

Apply representation transformation on a controller method output.

The result of the transformed return value will be JSON serialized as the response body.

Must be applied on a controller method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `representation` | [`ClassType`](modules.md#classtype)<`any`\> | class type of the representation to be used by [[class-transformer]] |
| `statusCode?` | `number` | Optional Status code of the success response |
| `options` | `Object` | OpenAPI options for API documentation |
| `options.contentType?` | `string` | - |
| `options.description?` | `string` | - |

#### Returns

`fn`

▸ (`target`, `key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `key` | `string` |

##### Returns

`void`

#### Defined in

[src/decorators/representer.decorator.ts:18](https://github.com/Panenco/papi/blob/5302639/src/decorators/representer.decorator.ts#L18)

___

### TransformBooleanString

▸ `Const` **TransformBooleanString**(): `PropertyDecorator`

Transformation decorator

Transforms string boolean into JS boolean.

#### Returns

`PropertyDecorator`

#### Defined in

[src/decorators/transformBooleanString.decorator.ts:8](https://github.com/Panenco/papi/blob/5302639/src/decorators/transformBooleanString.decorator.ts#L8)

___

### arrayRepresenter

▸ `Const` **arrayRepresenter**<`T`\>(`representationType`): (`_`: `Action`, `content`: `any`[]) => `T`[]

Helper to be used on [[routing-controllers]] middleware (UseBefore, `UseAfter`)

Apply representation transformation on a given input.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `representationType` | [`ClassType`](modules.md#classtype)<`T`\> | class type of the representation to be used by `[[class-transformer]]` |

#### Returns

`fn`

▸ (`_`, `content`): `T`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `Action` |
| `content` | `any`[] |

##### Returns

`T`[]

#### Defined in

[src/utils/representers/arrayRepresenter.ts:12](https://github.com/Panenco/papi/blob/5302639/src/utils/representers/arrayRepresenter.ts#L12)

___

### createAccessToken

▸ `Const` **createAccessToken**(`secret`, `expiresIn`, `data`): `Promise`<[`IAccessToken`](interfaces/IAccessToken.md)\>

Generate an HS256 JWT Bearer token signed by a provided secret

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `secret` | `string` | Secret used to sign the JWT |
| `expiresIn` | `number` | Expiry Time |
| `data` | `object` | Data to be serialized in the JWT |

#### Returns

`Promise`<[`IAccessToken`](interfaces/IAccessToken.md)\>

An object containing the expiry time and the generated token

#### Defined in

[src/authorization/accessTokens.ts:13](https://github.com/Panenco/papi/blob/5302639/src/authorization/accessTokens.ts#L13)

___

### createListRepresentation

▸ `Const` **createListRepresentation**<`TChild`\>(`type`): [`ClassType`](modules.md#classtype)<[`ListRepresentation`](classes/ListRepresentation.md)<`TChild`\>\>

Output DTO for paginated lists. In order to generate the correct metadata for the validation and API documentation for the list schema we need to generate the class with the class type of the child DTO of the list.
This function can be used in combination with the representer. But a shorthand [listRepresenter](modules.md#listrepresenter) als o exists.

#### Type parameters

| Name |
| :------ |
| `TChild` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`ClassType`](modules.md#classtype)<`TChild`\> | The class type of a single list item |

#### Returns

[`ClassType`](modules.md#classtype)<[`ListRepresentation`](classes/ListRepresentation.md)<`TChild`\>\>

The class type of a list representation with the necessary metadata for the items array. Similar to [[ListRepresentation<TChild>]] but with metadata.

#### Defined in

[src/contracts/representations/list.representation.ts:24](https://github.com/Panenco/papi/blob/5302639/src/contracts/representations/list.representation.ts#L24)

___

### errorMiddleware

▸ `Const` **errorMiddleware**(`error`, `req`, `res`, `next`): `void`

Express middleware to process and output errors.

Errors extended from [ErrorBase](classes/ErrorBase.md) will be handled and serialized to the response with the corresponding code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | [`ErrorBase`](classes/ErrorBase.md) | Error to be processed. ErrorBase will be processed accordingly. Any other Error will result into a 500 with the specified message. |
| `req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> | express Request |
| `res` | `Response`<`any`, `Record`<`string`, `any`\>\> | express Response |
| `next` | `NextFunction` | express NextFunction |

#### Returns

`void`

#### Defined in

[src/utils/middleware/error.middleware.ts:13](https://github.com/Panenco/papi/blob/5302639/src/utils/middleware/error.middleware.ts#L13)

___

### getAccessTokenData

▸ `Const` **getAccessTokenData**(`token`, `secret`): `any`

Decode and verify JWT token

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | JWT token to decode and validate |
| `secret` | `string` | The secret that should have been used to sign the token |

#### Returns

`any`

Decoded token data

#### Defined in

[src/authorization/accessTokens.ts:26](https://github.com/Panenco/papi/blob/5302639/src/authorization/accessTokens.ts#L26)

___

### getAuthenticator

▸ `Const` **getAuthenticator**(`jwtSecret`): (`action`: `Action`, `requirements`: [`IRequirement`](modules.md#irequirement) \| ([`IRequirement`](modules.md#irequirement) \| [`IRequirement`](modules.md#irequirement)[])[]) => `Promise`<`boolean`\>

Integrates with routing controller `@Authorize` decorator
Supply an array of groups where within a group all requirements need to be valid
Example1: [[valid1, valid2], [valid3, invalid1]] => success
Example2: [valid1, invalid1] => success
Example3: [[valid1, invalid1]] => fail

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `jwtSecret` | `string` | JWT secret to be used to verify tokens |

#### Returns

`fn`

Authentication checker that should be passed into useExpressServer => authorizationChecker

▸ (`action`, `requirements`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `Action` |
| `requirements` | [`IRequirement`](modules.md#irequirement) \| ([`IRequirement`](modules.md#irequirement) \| [`IRequirement`](modules.md#irequirement)[])[] |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[src/authorization/authenticator.ts:14](https://github.com/Panenco/papi/blob/5302639/src/authorization/authenticator.ts#L14)

___

### handleRequirements

▸ `Const` **handleRequirements**(`requirements`, `request`): `Promise`<`void`\>

Validate an array of groups of requirements where within a group all requirements need to be valid

Example1: [[valid1, valid2], [valid3, invalid1]] => success

Example2: [valid1, invalid1] => success

Example3: [[valid1, invalid1]] => fail

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requirements` | [`IRequirement`](modules.md#irequirement) \| ([`IRequirement`](modules.md#irequirement) \| [`IRequirement`](modules.md#irequirement)[])[] | List of groups to verify |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> | Express request |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/authorization/handleRequirements.ts:16](https://github.com/Panenco/papi/blob/5302639/src/authorization/handleRequirements.ts#L16)

___

### importClasses

▸ `Const` **importClasses**<`TClassType`\>(`directories`): [[`ClassType`](modules.md#classtype)<`TClassType`\>]

Import all classes within a list of directories (js files)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TClassType` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `directories` | `string`[] | directories to scan for classes |

#### Returns

[[`ClassType`](modules.md#classtype)<`TClassType`\>]

Array of class types

#### Defined in

[src/utils/helpers/importClasses.ts:10](https://github.com/Panenco/papi/blob/5302639/src/utils/helpers/importClasses.ts#L10)

___

### listRepresenter

▸ `Const` **listRepresenter**<`T`\>(`representationType`): (`_`: `Action`, `content`: [`any`[], `number`]) => [`ListRepresentation`](classes/ListRepresentation.md)<`T`\>

Helper to be used on [[routing-controllers]] middleware (UseBefore, `UseAfter`)

Apply representation transformation on a given input.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `representationType` | [`ClassType`](modules.md#classtype)<`T`\> | class type of the representation to be used by `[[class-transformer]]` |

#### Returns

`fn`

▸ (`_`, `content`): [`ListRepresentation`](classes/ListRepresentation.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `Action` |
| `content` | [`any`[], `number`] |

##### Returns

[`ListRepresentation`](classes/ListRepresentation.md)<`T`\>

#### Defined in

[src/utils/representers/listRepresenter.ts:12](https://github.com/Panenco/papi/blob/5302639/src/utils/representers/listRepresenter.ts#L12)

___

### representer

▸ `Const` **representer**<`T`\>(`representationType`): (`_`: `Action`, `content`: `any`) => `T`

Helper to be used on [[routing-controllers]] middleware (UseBefore, `UseAfter`)

Apply representation transformation on a given input.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `representationType` | [`ClassType`](modules.md#classtype)<`T`\> | class type of the representation to be used by `[[class-transformer]]` |

#### Returns

`fn`

▸ (`_`, `content`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `Action` |
| `content` | `any` |

##### Returns

`T`

#### Defined in

[src/utils/representers/representer.ts:11](https://github.com/Panenco/papi/blob/5302639/src/utils/representers/representer.ts#L11)

___

### stringToObject

▸ `Const` **stringToObject**(`path`, `value`, `obj?`): `object`

Creates an object from a property path

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | Path to create an object from. Ex. `root.child.subChild` |
| `value` | `any` | The value to set on the lowest level Ex. `true` |
| `obj` | `object` | Optional root object |

#### Returns

`object`

The object that has been created from the path. Ex. ```{ root: { child: { subChild: true } } }```

#### Defined in

[src/utils/helpers/stringToObject.ts:8](https://github.com/Panenco/papi/blob/5302639/src/utils/helpers/stringToObject.ts#L8)

___

### validationMiddleware

▸ `Const` **validationMiddleware**(`type`, `value?`, `options?`): (`req`: `Request`, `_`: `Response`, `next`: `NextFunction`) => `Promise`<`void`\>

Middleware used by the [Body](modules.md#body) and [Query](modules.md#query) decorators but can also be directly used in an express middleware tree.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `any` | `undefined` | The expected type of the body. Should be a [[class-validator]] class |
| `value` | `string` | `'body'` | location of the object to validate in the express Request (body, query, params) |
| `options` | `ValidatorOptions` | `{}` | - |

#### Returns

`fn`

▸ (`req`, `_`, `next`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request` |
| `_` | `Response` |
| `next` | `NextFunction` |

##### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/middleware/validation.middleware.ts:12](https://github.com/Panenco/papi/blob/5302639/src/utils/middleware/validation.middleware.ts#L12)

___

### validator

▸ `Const` **validator**(`object`, `options?`): `Promise`<`void`\>

Validates an object with [[class-validator]]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `object` | The object to validate |
| `options?` | `ValidatorOptions` | validation options |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/helpers/validator.ts:10](https://github.com/Panenco/papi/blob/5302639/src/utils/helpers/validator.ts#L10)
