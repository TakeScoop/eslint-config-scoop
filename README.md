# Scoop ESLint Configuration

To use:

```sh  
npm install --save-dev eslint@7 @scoop/eslint-config-scoop@latest
```

Then, add an `.eslintrc.json` file with the following:

```js
{
    "extends": "@scoop/eslint-config-scoop"
}
```

Then, try running like `npx eslint .`

## Publishing

```sh
npm version $inc
git push --follow-tags
```

CircleCI will upload this package to Scoop's private Artifactory-based npm repository. This package is no longer published to https://www.npmjs.com. 
