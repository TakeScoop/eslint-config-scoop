/* eslint-disable */
module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2018,
    },
    "plugins": [
        "import",
        "implicit-dependencies"
    ],
    "settings": {
        "import/extensions": [".js", ".ts"],
        
        // https://github.com/import-js/eslint-plugin-import/issues/1485#issuecomment-535351922
        "import/resolver": {
            "typescript": {} // this loads <rootdir>/tsconfig.json to eslint
        }
    },
    
    // Rules which apply to JS + TS
    "rules": {
        "import/no-cycle": 2,
        "import/no-unresolved": 2,
        "import/order": [
            "error",
            {
                "groups": [
                    "builtin",
                    "external",
                    [
                        "internal",
                        "index",
                        "parent",
                        "sibling",
                        "object"
                    ]
                ],
                "pathGroupsExcludedImportTypes": [
                    "builtin"
                ],
                "newlines-between": "always"
            }
        ],
        "block-scoped-var": 2,
        "camelcase": 2,
        "comma-style": [
            2,
            "last"
        ],
        "consistent-this": [
            2,
            "self"
        ],
        "curly": [
            2,
            "all"
        ],
        "eol-last": 2,
        "eqeqeq": 2,
        "implicit-dependencies/no-implicit": [
            2,
            {
                "peer": true,
                "dev": true,
                "optional": true
            }
        ],
        "key-spacing": 2,
        "linebreak-style": 2,
        "new-cap": [
            2,
            {
                "capIsNewExceptions": [
                    "Sendgrid",
                    "Bookshelf"
                ],
                "newIsCapExceptions": [
                    "self"
                ]
            }
        ],
        "no-array-constructor": 2,
        "no-console": 0,
        "no-else-return": 2,
        "no-eq-null": 2,
        "no-extra-semi": 0,
        "no-implicit-globals": 2,
        "no-lonely-if": 2,
        "no-multi-spaces": 2,
        "no-multiple-empty-lines": [
            2, 
            {
                "max": 1,
                "maxEOF": 0,
                "maxBOF": 0
            }
        ],
        "no-multi-str": 2,
        "no-new-object": 2,
        "no-prototype-builtins": 0,
        "no-restricted-syntax": [
            2,
            {
                "selector": "CallExpression[callee.name!='parseInt'] > Identifier[name='parseInt']",
                "message": "Call parseInt directly to guarantee radix param is not incorrectly provided"
            }
        ],
        "no-return-assign": [
            2,
            "always"
        ],
        "no-sequences": 2,
        "no-shadow-restricted-names": 2,
        "no-spaced-func": 2,
        "no-unsafe-negation": 2,
        "no-useless-return": 2,
        "no-var": 2,
        "object-shorthand": ["error", "properties"],
        "one-var": [
            2,
            "never"
        ],
        "padded-blocks": 0,
        "prefer-const": 2,
        "semi-spacing": 2,
        "space-before-blocks": 2,
        "space-in-parens": [
            2,
            "never"
        ],
        "space-unary-ops": [
            2, {
            "words": true,
            "nonwords": false
            }
        ],
        "spaced-comment": 2,
        "strict": [
            2,
            "global"
        ],
        "valid-typeof": [
            2,
            {
                "requireStringLiterals": true
            }
        ],
        "vars-on-top": 2,
        "wrap-iife": [
            2,
            "inside"
        ],
    },
    "overrides": [
        // JS-only rules
        {
            "files": "*.js",
            "rules": {
                "brace-style": [
                    2,
                    "1tbs"
                ],
                "comma-dangle": [
                    2,
                    "only-multiline"
                ],
                "comma-spacing": [
                    2,
                    {
                        "before": false,
                        "after": true
                    }
                ],
                "dot-notation": 2,
                "keyword-spacing": 2,
                "no-extra-parens": [
                    2,
                    "functions"
                ],
                "no-unused-vars": [
                    2,
                    {
                        "args": "none",
                        "vars": "all"
                    }
                ],
                "no-use-before-define": [
                    2,
                    "nofunc"
                ],
                "padding-line-between-statements": [
                    2,
                    {"blankLine": "always", "prev": "directive", "next": "*"},
                    {"blankLine": "any", "prev": "directive", "next": "directive"},
                    {"blankLine": "always", "prev": "*", "next": "return"}
                ],
                "quotes": [
                    2,
                    "single",
                    "avoid-escape"
                ],
                "semi": [
                    2,
                    "never"
                ],
                "space-infix-ops": 2,
            }
        },
        
        // TS-only rules
        {
            "files": "*.ts",
            "extends": [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking"
            ],
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "project": "./tsconfig.json"
            },
            "rules": {
                "@typescript-eslint/brace-style": [
                    2,
                    "1tbs"
                ],
                "@typescript-eslint/comma-dangle": [
                    2,
                    "only-multiline"
                ],
                "@typescript-eslint/comma-spacing": [
                    2,
                    {
                        "before": false,
                        "after": true
                    }
                ],
                "@typescript-eslint/dot-notation": 2,
                "@typescript-eslint/keyword-spacing": 2,
                "@typescript-eslint/no-extra-parens": [
                    2,
                    "functions"
                ],
                "@typescript-eslint/no-unused-vars": [
                    2,
                    {
                        "args": "none",
                        "vars": "all"
                    }
                ],
                "@typescript-eslint/no-use-before-define": [
                    2,
                    "nofunc"
                ],
                "@typescript-eslint/padding-line-between-statements": [
                    2,
                    {"blankLine": "always", "prev": "directive", "next": "*"},
                    {"blankLine": "any", "prev": "directive", "next": "directive"},
                    {"blankLine": "always", "prev": "*", "next": "return"}
                ],
                "@typescript-eslint/quotes": [
                    2,
                    "single",
                    "avoid-escape"
                ],
                "@typescript-eslint/semi": [
                    2,
                    "never"
                ],
                "@typescript-eslint/space-infix-ops": 2,
                
                // Disable some extremely restrictive @typescript-eslint/recommended-requiring-type-checking rules
                "@typescript-eslint/no-empty-function": "off", // knex migrations often have empty functions
                "@typescript-eslint/no-explicit-any": "off", // far too many required cases right now to enable, even as a warning
                "@typescript-eslint/no-floating-promises": "off", // hates knex QueryBuilders because they expose a `.then()` method
                "@typescript-eslint/no-var-requires": "off", // would disallow requires within functions. But, we need this (unfortunately) because of circular dependencies.
                "@typescript-eslint/no-unsafe-argument": "off", // too much `any`
                "@typescript-eslint/no-unsafe-assignment": "off", // too much `any`
                "@typescript-eslint/no-unsafe-call": "off", // too much `any`
                "@typescript-eslint/no-unsafe-member-access": "off", // too much `any`
                "@typescript-eslint/no-unsafe-return": "off", // too much `any`
                "@typescript-eslint/restrict-template-expressions": "off", // too much `any`
                "@typescript-eslint/require-await": "off", // not already enabled
        
                // Override existing rules with slightly more forgiving behavior
                "@typescript-eslint/ban-ts-comment": [
                    "error",
                    {
                        "ts-expect-error": "allow-with-description",
                        "ts-ignore": "allow-with-description",
                        "ts-nocheck": "allow-with-description",
                        "ts-check": false
                    }
                ]
            }
        }
    ]
}
