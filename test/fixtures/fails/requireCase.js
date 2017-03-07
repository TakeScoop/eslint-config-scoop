'use strict'

const fs = require('fs')

// mess up the case
const cased = require('../complexcaseFile')

function main() {
    const s = fs.constants
    process.stderr.write(s)
    process.stderr.write(cased)
}

main()
