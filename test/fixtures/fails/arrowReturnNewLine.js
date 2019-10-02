'use strict'

function map() {
    // no op
}

function a() {
    return map([6, 3], (daysSince) => 
        this.do({
            x: 'x',
            daysAgo: daysSince
        })
    )
}

a()
