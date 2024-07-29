@panenco/papi / [Exports](modules.md)

# @panenco/papi

@panenco/papi is a superset on top of a few packages:

- [routing-controllers](https://www.npmjs.com/package/routing-controllers)
- [class-validator](https://www.npmjs.com/package/class-validator)
- [class-transformer](https://www.npmjs.com/package/class-transformer)

This general set of utilities helps you to build RESTful APIs with ease.
It embraces a very opinionated approach by forcing a specific pattern. All endpoints using these utilities should follow the following steps:

1. Authorize and validate requirements
2. Validate and map input (body, query, params)
3. Business logic in a handler
4. Output representation with a specific schema defined in validation classes so no excessive data can be accidentally returned

4 Main categories of utilities:

- [Decorators](#decorators)
- [Authorization](#authorization)
- [Contracts](#contracts)
- [Middleware](#middleware)

## Decorators

A set of extended and combined decorators to make input validation and output representation easier and very consistent.

The full list of available decorators can be found in the [technical documentation](/docs/modules.md#decorator-functions).

## Authorization

A general way of authorizing requests by first validating the token and then checking the authorization requirements specified in the route.

### Setup Authorization

1. Create an authenticator instance and pass it to routing-controllers `authorizationChecker` with [getAuthenticator](docs/modules.md#getauthenticator)
   - This will connect the `@Authorize` decorator
2. Apply
