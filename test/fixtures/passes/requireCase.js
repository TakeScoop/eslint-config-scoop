'use strict'

const fs = require('fs')

const cased = require('../complexCaseFile')

function main() {
    const s = fs.constants
    process.stderr.write(s)
    process.stderr.write(cased)
}

main()
