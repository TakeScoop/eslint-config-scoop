'use strict'

function x() {
    console.log(true)
}

x()

function y(fn) {
    fn()
}

y(function() {
    console.log('z')
})

const a = async () => true
a()

const b = () => true
b()
