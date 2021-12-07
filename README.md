# Scoop ESLint Configuration

To use:

```sh  
npm install --save-dev eslint@8 @scoop/eslint-config-scoop@latest
```

Then, add an `.eslintrc.json` file with the following:

```json
{
    "extends": "@scoop/eslint-config-scoop"
}
```

Then, try running like `npx eslint .`

If using TypeScript, this configuration will default to trying to use `tsconfig.json` as the TS config file; if using another filename,
make sure to override the `parserOptions.project` config option with the correct filename.

# Philosophy

Originally, Scoop's eslint configuration was designed to support both Scoop's style guidelines as well as catch syntactical errors. After some evolution, [Prettier](https://prettier.io/) was adopted by Scoop's Frontend
team, and then eventually expanded to our backend code as well. Our goal is to have our eslint catch all of our code-quality issues (`no-unused-vars`), while letting Prettier decide our formatting decisions (`max-len`). No ESLint style rule should ever
contradict a Prettier rule, but style rules may be added only if it complements Prettier (ex: newline before return), but these should be used extremely sparingly.

For more on our style philosophy, please see [Prettier's option philosophy](https://prettier.io/docs/en/option-philosophy.html)

## Publishing

```sh
npm version $inc
git push --follow-tags
```

CircleCI will upload this package to Scoop's private Artifactory-based npm repository. This package is no longer published to https://www.npmjs.com. 
