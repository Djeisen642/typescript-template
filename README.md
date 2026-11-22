# typescript-template

Template using the following tools

- node 26 LTS (https://github.com/nodejs/release#release-schedule)
- nvm (https://github.com/nvm-sh/nvm) or volta (https://volta.sh/)
- yarn (https://yarnpkg.com/)
- typescript (https://www.typescriptlang.org/)
- prettier (https://prettier.io/)
- eslint with flat config and typescript-eslint (https://eslint.org/, https://typescript-eslint.io/)
- jest (https://jestjs.io/)
- lefthook (https://lefthook.dev/)
- commitlint (https://commitlint.js.org/#/)
- renovate (https://docs.renovatebot.com/)
- codeql (https://codeql.github.com/)

Assumes that nvm (or volta) and yarn are installed

Assumes that JetBrains IntelliJ (https://www.jetbrains.com/idea/) or Visual Studio Code (https://code.visualstudio.com/) is the IDE

## Commands

run `nvm install` or `volta install node` to ensure that the correct node version is installed

run `volta install yarn` (or `corepack enable`) to use the pinned yarn version

run `yarn` to install packages (this also installs the lefthook git hooks)

run `yarn test` to run tests

run `yarn lint` to run linter

run `yarn up-i` to update packages
