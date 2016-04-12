# Scoop's eslint configuration

To use:

```sh  
npm install --save-dev eslint
npm install --save-dev @scoop/eslint-config-scoop
```

Then, add an `.eslintrc.json` file with the following:

```js
{
    "extends": "@scoop/eslint-config-scoop"
}
```

Then, try running like `$(npm bin)/eslint .`
