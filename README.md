# @panenco/papi

## Development

- we need to manually install the peer dependencies for building the project

if we want to use this package with a link / file reference
we need to install the packages
we need to install the modules from peerdependencies (WITHOUT ADDING THEM TO PACKAGE.JSON)
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
