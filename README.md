# Typescript package template

This is a template for a typescript package project.

## Features

- Unit testing with [jest](https://www.npmjs.com/package/jest)
- Tests file generation with [jest-test-gen](https://www.npmjs.com/package/jest-test-gen)
- Generate documentation from comments in TypeScript source code into rendered HTML with [typedoc](https://www.npmjs.com/package/typedoc)
- NPM package and documentation deployment automation with [Github Actions](https://github.com/features/actions)

## Scripts

### Generate test file from source code

jest-test-gen helps generate test files from source code file with:


```bash
FILE=index.ts npm run build:test
```

### Run tests

This command will run tests in the `test` directory and export tests coverage in the `coverage` directory:

```bash
npm run test
```

### Generate documentation

Documentation is automatically generated at build time but you can manually generate it with:

```bash
npm run build:docs
```

### Build the project

This command will transpile the Typescript code into javascript with source maps and type declaration files:

```bash
npm run build
```

### Deploy package to NPM and documentation to Github Pages

This template includes a workflow that deploys the package to npm, compiles it's documentation and deploys it to gh-pages. Don't forget to activate gh-pages and to update the workflow permissions of your Github repository.

You must declare the GITHUB_TOKEN and NPM_TOKEN secrets in your User/Organization/Repository settings.
# template-generator-core
# template-generator-core
