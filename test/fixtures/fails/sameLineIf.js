'use strict'

function roll() {
    return Math.random() > 0.5
}

let x = 4

if (roll()) x = 5

console.log(x)
