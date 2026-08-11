# typescript-template

Template using the following tools

- node 20 (https://github.com/nodejs/release#release-schedule)
- nvm (https://github.com/nvm-sh/nvm) or volta (https://volta.sh/)
- yarn (https://yarnpkg.com/)
- typescript (https://www.typescriptlang.org/)
- prettier (https://prettier.io/)
- eslint (https://eslint.org/)
- jest (https://jestjs.io/)
- lefthook (https://lefthook.dev/)
- commitlint (https://commitlint.js.org/#/)
- dependabot (https://docs.github.com/en/code-security/dependabot)
- codeql (https://codeql.github.com/)

Assumes that nvm (or volta) and yarn are installed

Assumes that JetBrains IntelliJ (https://www.jetbrains.com/idea/) or Visual Studio Code (https://code.visualstudio.com/) is the IDE

## Commands

run `nvm install` or `volta install node` to ensure that the correct node version is installed

run `yarn set version berry` or `volta install yarn` to use the latest yarn version

run `yarn` to install packages

run `yarn test` to run tests

run `yarn lint` to run linter

run `yarn up-i` to update packages

## Project Structure

```
.
├── .github/workflows/    # CI (lint + test) and Renovate auto-approve
├── src/
│   ├── index.ts          # library entry point
│   └── tests/            # jest specs (jest/* eslint rules apply only here)
├── lefthook.yml          # git hooks: pre-commit (lint+test), commit-msg (commitlint)
├── eslint.config.js      # flat-config ESLint setup (eslint 9+)
├── commitlint.config.js  # conventional-commit message rules
├── .prettierrc.js        # prettier config, extends prettier-config-standard
├── jest.config.json      # jest + ts-jest config
├── tsconfig.json         # extends @tsconfig/node18
└── renovate.json         # automated dependency update policy
```

Config files worth knowing about:

- **`volta` field in `package.json`** pins the node and yarn versions for local development (via [volta](https://volta.sh/)). `actions/setup-node` in CI reads this same field, so local dev and CI stay pinned to the same node version.
- **`lefthook.yml`** replaces the old `.husky/` directory. Hooks are installed automatically via the `postinstall` script (`lefthook install`) whenever `yarn` is run.
- **`eslint.config.js`** replaces the old `.eslintrc.js` / `src/tests/.eslintrc.js` pair now that ESLint uses flat config by default. Jest-specific rules are scoped to `src/tests/**` inside this single file instead of a nested `.eslintrc.js`.
