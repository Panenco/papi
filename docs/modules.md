[@panenco/papi](README.md) / Exports

# @panenco/papi

## Table of contents

### Authorization Interfaces

- [IAccessToken](interfaces/IAccessToken.md)

### Authorization Functions

- [createAccessToken](modules.md#createaccesstoken)
- [getAccessTokenData](modules.md#getaccesstokendata)
- [getAuthenticator](modules.md#getauthenticator)

### Contract Functions

- [createListRepresentation](modules.md#createlistrepresentation)

### Decorator Functions

- [Body](modules.md#body)
- [ConditionalExpose](modules.md#conditionalexpose)
- [Date](modules.md#date)
- [DefaultValue](modules.md#defaultvalue)
- [Lower](modules.md#lower)
- [Nested](modules.md#nested)
- [Numeric](modules.md#numeric)
- [Query](modules.md#query)
- [Representer](modules.md#representer)
- [ListRepresenter](modules.md#listrepresenter)
- [ArrayRepresenter](modules.md#arrayrepresenter)
- [TransformBooleanString](modules.md#transformbooleanstring)

### Helpers Functions

- [importClasses](modules.md#importclasses)
- [stringToObject](modules.md#stringtoobject)
- [validator](modules.md#validator)

### Middleware Functions

- [errorMiddleware](modules.md#errormiddleware)

### Authorization Type Aliases

- [IRequirement](modules.md#irequirement)

### Contract Enumerations

- [QueryOrder](enums/QueryOrder.md)
- [StatusCode](enums/StatusCode.md)

### Contract Classes

- [PagingQuery](classes/PagingQuery.md)
- [SortQuery](classes/SortQuery.md)
- [ErrorRepresentation](classes/ErrorRepresentation.md)
- [ListRepresentation](classes/ListRepresentation.md)
- [ValidationErrorRepresentation](classes/ValidationErrorRepresentation.md)

### Error Classes

- [BadRequest](classes/BadRequest.md)
- [Conflict](classes/Conflict.md)
- [ErrorBase](classes/ErrorBase.md)
- [Forbidden](classes/Forbidden.md)
- [NotFound](classes/NotFound.md)
- [Unauthorized](classes/Unauthorized.md)
- [ValidationError](classes/ValidationError.md)

## Authorization Functions

### createAccessToken

▸ **createAccessToken**(`secret`, `expiresIn`, `data`): `Promise`<[`IAccessToken`](interfaces/IAccessToken.md)\>

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

[authorization/accessTokens.ts:15](https://github.com/Panenco/papi/blob/4e190be/src/authorization/accessTokens.ts#L15)

___

### getAccessTokenData

▸ **getAccessTokenData**(`token`, `secret`): `any`

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

[authorization/accessTokens.ts:30](https://github.com/Panenco/papi/blob/4e190be/src/authorization/accessTokens.ts#L30)

___

### getAuthenticator

▸ **getAuthenticator**(`jwtSecret`): (`action`: `Action`, `requirements`: [`IRequirement`](modules.md#irequirement) \| ([`IRequirement`](modules.md#irequirement) \| [`IRequirement`](modules.md#irequirement)[])[]) => `Promise`<`boolean`\>

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

[authorization/authenticator.ts:16](https://github.com/Panenco/papi/blob/4e190be/src/authorization/authenticator.ts#L16)

___

## Contract Functions

### createListRepresentation

▸ **createListRepresentation**<`TChild`\>(`type`): `ClassType`<[`ListRepresentation`](classes/ListRepresentation.md)<`TChild`\>\>

Output DTO for paginated lists. In order to generate the correct metadata for the validation and API documentation for the list schema we need to generate the class with the class type of the child DTO of the list.
This function can be used in combination with the representer. But a shorthand [[listRepresenter]] als o exists.

#### Type parameters

| Name |
| :------ |
| `TChild` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `ClassType`<`TChild`\> | The class type of a single list item |

#### Returns

`ClassType`<[`ListRepresentation`](classes/ListRepresentation.md)<`TChild`\>\>

The class type of a list representation with the necessary metadata for the items array. Similar to [[ListRepresentation<TChild>]] but with metadata.

#### Defined in

[contracts/representations/list.representation.ts:28](https://github.com/Panenco/papi/blob/4e190be/src/contracts/representations/list.representation.ts#L28)

___

## Decorator Functions

### Body

▸ **Body**(`bodyOptions?`, `validatorOptions?`, `type?`): (`target`: `Object`, `propertyKey`: `string`, `parameterIndex`: `number`) => `void`

Allows to inject and validate a request body value to the controller action parameter.

Must be applied on a controller action parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bodyOptions?` | `BodyOptions` | [[routing-controllers]] body options for binding the request body |
| `validatorOptions?` | `ValidatorOptions` | [[class-validator]] validation options for the validation to be performed. |
| `type?` | `Newable`<`any`\> | Override inferred type, set the expected type of the body |

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

[decorators/body.decorator.ts:20](https://github.com/Panenco/papi/blob/4e190be/src/decorators/body.decorator.ts#L20)

___

### ConditionalExpose

▸ **ConditionalExpose**(`condition`): (`target`: `any`, `key`: `string`) => `void`

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

[decorators/conditionalExpose.decorator.ts:11](https://github.com/Panenco/papi/blob/4e190be/src/decorators/conditionalExpose.decorator.ts#L11)

___

### Date

▸ **Date**(): (`target`: `any`, `key`: `string`) => `void`

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

[decorators/date.decorator.ts:13](https://github.com/Panenco/papi/blob/4e190be/src/decorators/date.decorator.ts#L13)

___

### DefaultValue

▸ **DefaultValue**(`value`): (`target`: `any`, `key`: `string`) => `void`

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

[decorators/defaultValue.decorator.ts:9](https://github.com/Panenco/papi/blob/4e190be/src/decorators/defaultValue.decorator.ts#L9)

___

### Lower

▸ **Lower**(): `PropertyDecorator`

Transforms strings to lowercase.

#### Returns

`PropertyDecorator`

#### Defined in

[decorators/lower.decorator.ts:8](https://github.com/Panenco/papi/blob/4e190be/src/decorators/lower.decorator.ts#L8)

___

### Nested

▸ **Nested**<`T`\>(`type`, `isArray?`): (`object`: `any`, `propertyName`: `string`) => `void`

Nested objects with this decorator will also be validated.

Transforms the nested objects to the defined type

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `ClassType`<`T`\> | `undefined` | The type to validate and transform the nested property |
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

[decorators/nested.decorator.ts:16](https://github.com/Panenco/papi/blob/4e190be/src/decorators/nested.decorator.ts#L16)

___

### Numeric

▸ **Numeric**(): (`target`: `any`, `key`: `string`) => `void`

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

[decorators/numeric.decorator.ts:11](https://github.com/Panenco/papi/blob/4e190be/src/decorators/numeric.decorator.ts#L11)

___

### Query

▸ **Query**(`options?`, `validatorOptions?`, `type?`): (`target`: `Object`, `propertyKey`: `string` \| `symbol`, `parameterIndex`: `number`) => `void`

Allows to inject and validate a request query params to the controller action parameter.

Must be applied on a controller action parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `ParamOptions` | [[routing-controllers]] param options for binding the request query |
| `validatorOptions?` | `ValidatorOptions` | [[class-validator]] validation options for the validation to be performed. |
| `type?` | `Newable`<`any`\> | Override inferred type, set the expected type of the query |

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

[decorators/query.decorator.ts:16](https://github.com/Panenco/papi/blob/4e190be/src/decorators/query.decorator.ts#L16)

___

### Representer

▸ **Representer**(`representation`, `statusCode?`, `options?`): (`target`: `any`, `key`: `string`) => `void`

Decorator to be used on [[routing-controllers]] controller method

Apply representation transformation on a controller method output.

The result of the transformed return value will be JSON serialized as the response body.

Must be applied on a controller method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `representation` | `ClassType`<`any`\> | class type of the representation to be used by [[class-transformer]] |
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

[decorators/representer.decorator.ts:20](https://github.com/Panenco/papi/blob/4e190be/src/decorators/representer.decorator.ts#L20)

___

### ListRepresenter

▸ **ListRepresenter**(`representation`, `statusCode?`, `options?`): (`target`: `any`, `key`: `string`) => `void`

Decorator to be used on [[routing-controllers]] controller method

Apply paginated list representation transformation on a controller method output.

The result of the transformed return value will be JSON serialized as the response body.

Must be applied on a controller method.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `representation` | `ClassType`<`any`\> | `undefined` | class type of the representation to be used by [[class-transformer]] |
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

[decorators/representer.decorator.ts:52](https://github.com/Panenco/papi/blob/4e190be/src/decorators/representer.decorator.ts#L52)

___

### ArrayRepresenter

▸ **ArrayRepresenter**(`representation`, `statusCode?`, `options?`): (`target`: `any`, `key`: `string`) => `void`

Decorator to be used on [[routing-controllers]] controller method

Apply array representation transformation on a controller method output.

The result of the transformed return value will be JSON serialized as the response body.

Must be applied on a controller method.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `representation` | `ClassType`<`any`\> | `undefined` | class type of the representation to be used by [[class-transformer]] |
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

[decorators/representer.decorator.ts:83](https://github.com/Panenco/papi/blob/4e190be/src/decorators/representer.decorator.ts#L83)

___

### TransformBooleanString

▸ **TransformBooleanString**(): `PropertyDecorator`

Transformation decorator

Transforms string boolean into JS boolean.

#### Returns

`PropertyDecorator`

#### Defined in

[decorators/transformBooleanString.decorator.ts:10](https://github.com/Panenco/papi/blob/4e190be/src/decorators/transformBooleanString.decorator.ts#L10)

___

## Helpers Functions

### importClasses

▸ **importClasses**<`TClassType`\>(`directories`): [`ClassType`<`TClassType`\>]

Import all classes within a list of directories (js files)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TClassType` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `directories` | `string`[] | directories glob to scan for classes |

#### Returns

[`ClassType`<`TClassType`\>]

Array of class types

#### Defined in

[utils/helpers/importClasses.ts:12](https://github.com/Panenco/papi/blob/4e190be/src/utils/helpers/importClasses.ts#L12)

___

### stringToObject

▸ **stringToObject**(`path`, `value`, `obj?`): `object`

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

[utils/helpers/stringToObject.ts:10](https://github.com/Panenco/papi/blob/4e190be/src/utils/helpers/stringToObject.ts#L10)

___

### validator

▸ **validator**(`object`, `options?`): `Promise`<`void`\>

Validates an object with class-validator [[`validate`]]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `object` | The object to validate |
| `options?` | `ValidatorOptions` | validation options |

#### Returns

`Promise`<`void`\>

#### Defined in

[utils/helpers/validator.ts:12](https://github.com/Panenco/papi/blob/4e190be/src/utils/helpers/validator.ts#L12)

___

## Middleware Functions

### errorMiddleware

▸ **errorMiddleware**(`error`, `req`, `res`, `next`): `void`

Express middleware to process and output errors.

Errors extended from [[`ErrorBase`]] will be handled and serialized to the response with the corresponding code

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

[utils/middleware/error.middleware.ts:15](https://github.com/Panenco/papi/blob/4e190be/src/utils/middleware/error.middleware.ts#L15)

## Authorization Type Aliases

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

[authorization/requirement.interface.ts:10](https://github.com/Panenco/papi/blob/4e190be/src/authorization/requirement.interface.ts#L10)
