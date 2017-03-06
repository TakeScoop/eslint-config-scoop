'use strict'

function something() {
    return 'hi'
}

something()
.then(function() {
    console.log('here i am')
})
    .then(function() {
        console.log('this indentation should not be allowed')
    })
