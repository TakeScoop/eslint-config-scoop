'use strict'

function map() {
    // no op
}

function a() {
    return map([6, 3], (daysSince) => {
        return this.do({
            x: 'x',
            daysAgo: daysSince
        })
    })
}

a()

function b() {
    return map([6, 3], (daysSince) => this.do({ x: 'x' }))
}

b()

function c() {
    return map([6, 3], function(daysSince) {
        return this.do({
            x: 'x',
            daysAgo: daysSince
        })
    })
}

c()
