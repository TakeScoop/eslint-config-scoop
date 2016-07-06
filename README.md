# Scoop's eslint configuration

To use:

```sh  
npm install --save-dev eslint@2 eslint-plugin-require-path-exists @scoop/eslint-config-scoop
```

Then, add an `.eslintrc.json` file with the following:

```js
{
    "extends": "@scoop/eslint-config-scoop"
}
```

Then, try running like `$(npm bin)/eslint .`
