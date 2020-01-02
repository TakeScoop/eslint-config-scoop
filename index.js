'use strict'

/* eslint-disable */
module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "plugins": [
        "dependencies",
        "implicit-dependencies"
    ],
    "rules": {
        "dependencies/case-sensitive": 2,
        "dependencies/no-cycles": 2,
        "dependencies/no-unresolved": 2,
        "dependencies/require-json-ext": 2,
        "block-scoped-var": 2,
        "brace-style": [
            2,
            "1tbs"
        ],
        "camelcase": 2,
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
        "dot-notation": 2,
        "eol-last": 2,
        "eqeqeq": 2,
        "implicit-arrow-linebreak": [
            2,
            "beside"
        ],
        "implicit-dependencies/no-implicit": [
            2,
            {
                "peer": true,
                "dev": true,
                "optional": true
            }
        ],
        "indent": [
            2,
            4,
            {
                "MemberExpression": 0,
                "SwitchCase": 1
            }
        ],
        "key-spacing": 2,
        "keyword-spacing": 2,
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
        "no-extra-parens": [
            2,
            "functions"
        ],
        "no-implicit-globals": 2,
        "no-lonely-if": 2,
        "no-multi-assign": 2,
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
        "no-useless-return": 2,
        "no-var": 2,
        "object-curly-spacing": [
            2,
            "always",
            {
                "objectsInObjects": false
            }
        ],
        "one-var": [
            2,
            "never"
        ],
        "padded-blocks": 0,
        "padding-line-between-statements": [
            2,
            { "blankLine": "always", "prev": "directive", "next": "*" },
            { "blankLine": "any", "prev": "directive", "next": "directive" },
            { "blankLine": "always", "prev": "*", "next": "return" }
        ],
        "prefer-const": 2,
        "quotes": [
            2,
            "single",
            "avoid-escape"
        ],
        "semi": [
            2,
            "never"
        ],
        "semi-spacing": 2,
        "space-before-blocks": 2,
        "space-before-function-paren": [
            2,
            {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "space-in-parens": [
            2,
            "never"
        ],
        "space-infix-ops": 2,
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
        ]
    }
}
