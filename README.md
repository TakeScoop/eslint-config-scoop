# Scoop's eslint configuration

To use:

1. ```sh  
   npm install --save-dev eslint
   npm install --save-dev @scoop/eslint-config-scoop
   ```

2. add an `.eslintrc.json` file with the following:

    ```js
    {
        "extends": "@scoop/eslint-config-scoop"
    }
    ```

3. try running like `$(npm bin)/eslint .`
