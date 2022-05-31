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
2. Apply @Authorize decorator to a route or controller
3. Create a [Requirement](docs/modules.md#irequirement)
4. Pass one or a set of requirements to the `@Authorize` decorator
   - To see how the requirements are applied, see the [authenticator documentation](docs/modules.md#getauthenticator)

### Access tokens

Applications should use short lived [JWT](https://jwt.io/) tokens to authenticate users.

papi uses a simple yet secure token mechanism. A secret is used to sign the token and the same secret is used to verify the validity of the token. Each application and environment should have it's own secret.

Creating a token is as simple as calling [createAccessToken](modules.md#createaccesstoken) with the required data and the secret that's used when [getting the authenticator](docs/modules.md#getauthenticator).

When the `@Authorize` decorator fires the token will be automatically verified and the data will be available on `request.token`

## Contracts

Contracts are the way to validate input and output. All views and bodies should be a contract with properties appropriately decorated using class-validator and class-transformer decorators.

papi comes with a set of base contracts for error handling and pagination.

- [Error classes](docs/modules.md#error-classes)
- [Contract classes](docs/modules.md#contract-classes) (Paging / Representation)

## Middleware

A set of default middleware is provided.

The full list of available middleware can be found in the [technical documentation](/docs/modules.md#middleware-functions).

<br>
<br>

## Local Development

### Testing

Tests are executed on a local build. Make sure the watcher is always on by enabling `vscode > Manage Automatic Tasks in Folder > Allow Automatic Tasks in Folder`

### Connecting a referencing project with yalc

Manually install the peer dependencies for building the project:

if we want to use this package with a link / file reference  
we need to install the packages  
we need to install the modules from peerdependencies (**WITHOUT ADDING THEM TO PACKAGE.JSON**)  
build the project  
remove the node modules again  
and optionally install the modules from package.json again (without the peerdependencies in the node modules)

<https://github.com/yarnpkg/yarn/issues/8105>
<https://github.com/typestack/class-transformer/issues/384>
<https://blog.thinknum.com/common-pitfalls-creating-a-custom-npm-package-with-react-and-typescript/> (see pitfall 3)

solution: <https://github.com/wclr/yalc>

Development using yalc:

- npm install -g yalc
- build this project `yarn build`
- `yalc publish`
- in the project where you'd like to use this package, run `yalc add <package name>`
  - this will make it so a file reference will be added to the local package in your project folder
  - yalc link somehow does not work for class-transformer, so we'll have to add a precommit hook to check if we're not accidentally commiting yalc references. `yalc check`
  - add to .gitignore:
    - .yalc
    - yalc.lock
- After changes made: `yarn build && yalc push`

Stop:

- In destination: `yalc remove --all`
- In package repo: `yalc installations clean {packageName}`
