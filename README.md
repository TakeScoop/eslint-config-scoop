# Scoop's eslint configuration

**Maintainer(s):** [@hulbert](https://github.com/hulbert)

To use:

```sh  
npm install --save-dev eslint@4 eslint-plugin-dependencies@2 eslint-plugin-implicit-dependencies@1 @scoop/eslint-config-scoop@latest
```

Then, add an `.eslintrc.json` file with the following:

```js
{
    "extends": "@scoop/eslint-config-scoop"
}
```

Then, try running like `$(npm bin)/eslint .`
