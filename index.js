'use strict'

/* eslint-disable */
module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "plugins": [
        "require-path-exists"
    ],
    "rules": {
        "require-path-exists/exists": 2,
        "require-path-exists/notEmpty": 2,
        "require-path-exists/tooManyArguments": 2,
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
            "multi-line"
        ],
        "dot-notation": 2,
        "eol-last": 2,
        "eqeqeq": 2,
        "indent": [
            2,
            4,
            {
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
        "no-lonely-if": 2,
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-new-object": 2,
        "no-restricted-globals": [
            2,
            "Promise"
        ],
        "no-return-assign": [
            2,
            "always"
        ],
        "no-shadow-restricted-names": 2,
        "no-spaced-func": 2,
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
            "never"
        ],
        "space-in-parens": [
            2,
            "never"
        ],
        "space-infix-ops": 2,
        "spaced-comment": 2,
        "strict": [
            2,
            "global"
        ],
        "vars-on-top": 2
    }
}
