# Scoop ESLint Configuration

To use:

```sh  
npm install --save-dev eslint@5 eslint-plugin-dependencies@2 eslint-plugin-implicit-dependencies@1 @scoop/eslint-config-scoop@latest
```

Then, add an `.eslintrc.json` file with the following:

```js
{
    "extends": "@scoop/eslint-config-scoop"
}
```

Then, try running like `npx eslint .`

## Publishing

This package is a public package that is published directly with npm: https://docs.npmjs.com/cli/publish. Note you must have the proper write permissions to publish this package. 
