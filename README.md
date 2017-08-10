# Scoop's eslint configuration

To use:

```sh  
npm install --save-dev eslint@3 eslint-plugin-dependencies@2 @scoop/eslint-config-scoop@latest
```

Then, add an `.eslintrc.json` file with the following:

```js
{
    "extends": "@scoop/eslint-config-scoop"
}
```

Then, try running like `$(npm bin)/eslint .`
