'use strict'

const arr = ['11', '3']

console.log(arr.map(function(n) {
    return parseInt(n)
}))

parseInt(5, 10)

// not really safe but eslint doesn't support catching this
const fun = parseInt
console.log(arr.map(fun))
