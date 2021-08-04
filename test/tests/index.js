'use strict'

const fs = require('fs')
const path = require('path')

const Code = require('code')
const CLIEngine = require('eslint').CLIEngine

const engine = new CLIEngine({
    configFile: path.join(__dirname, '../../index.js')
})

const fixturesDirectory = path.join(__dirname, '../fixtures')

describe('testing eslint configuration', function() {
    
    describe('failure cases', function() {
        
        /*
         * Each item should be a file in ../fixtures/fails directory.
         * `rulename` can be a string or array, where it's the acceptable rule
         * that the corresponding lines should violate.
         * 
         * `line` can be a positive integer or an array, corresponding to the line(s)
         * that should violate the given rule(s).
         *  
         * This is premised on the one failure type per file, but we have an edge case
         * where the failure mode changes depending on OS so support 
         * multiple `rulename` values as an implicit OR.
         * 
         */
        const failureCases = [
            {
                filename: 'parseIntWithMap.js',
                rulename: 'no-restricted-syntax',
                line: 5
            },
            {
                filename: 'sameLineIf.js',
                rulename: 'curly',
                line: 9
            },
            {
                filename: 'shouldPreferConst.js',
                rulename: 'prefer-const',
                line: 3
            },
            {
                filename: 'tooManySpacesAfterAsync.js',
                rulename: 'no-multi-spaces',
                line: 3
            },
            {
                filename: 'unarySpaceNonword.js',
                rulename: 'space-unary-ops',
                line: 3
            },
            {
                filename: 'unarySpaceWord.js',
                rulename: 'space-unary-ops',
                line: 3
            },
            {
                filename: 'useStrictUnpadded.js',
                rulename: 'padding-line-between-statements',
                line: 2
            },
            {
                filename: 'usingVar.js',
                rulename: 'no-var',
                line: 3
            },
            {
                filename: 'validTypeofShouldNotBeUndefined.js',
                rulename: 'valid-typeof',
                line: 5
            },
        ]
        
        it('should have a codified failure case for every fail fixture', function(done) {
            fs.readdir(path.join(fixturesDirectory, '/fails'), function(err, filenames) {
                if (err) {
                    throw err
                }
            
                const failureCaseFilenames = failureCases.map(failureCase => failureCase.filename)
                expect(failureCaseFilenames.length).to.be.at.least(1)
            
                filenames.forEach(function(filename) {
                    expect(failureCaseFilenames).to.include(filename)
                })
            
                done()
            })
        })

        failureCases.forEach(function(test) {
            it(`should fail ${test.filename} for violating ${castArray(test.rulename).join(' or ')}`, function(done) {
                const filepath = path.join(fixturesDirectory, '/fails', test.filename)
                const report = engine.executeOnFiles([filepath])
            
                expect(report.errorCount, 'ESLint error count').to.be.at.least(1)
            
                const linesWithFailures = castArray(test.line)
                const rulesThisCanViolate = castArray(test.rulename)
                
                expect(report.results).to.be.length(1)
                expect(report.results[0].messages).to.be.length(linesWithFailures.length)
            
                report.results[0].messages.forEach(function(message) {
                    expect(rulesThisCanViolate).to.include(message.ruleId)
                    expect(linesWithFailures, 'Defined line numbers should include error line').to.include(message.line)
                })
            
                done()
            })
        })
    })
    
    describe('passing cases', function() {
        const filenames = fs.readdirSync(path.join(fixturesDirectory, '/passes'))
        filenames.forEach(function(filename) {
            const caseName = filename.replace(/\.js$/, '')
            
            it(`test case '${caseName}' should pass`, function(done) {
                const filepath = path.join(fixturesDirectory, '/passes', filename)
                const report = engine.executeOnFiles([filepath])

                const errorStrings = report.results[0].messages.map(function(message) {
                    return `\tAt line ${message.line} column ${message.column}: ${message.message} (${message.ruleId})`
                })
                
                if (report.errorCount > 0) {
                    Code.fail(`${report.errorCount} linting errors found:\n${errorStrings.join('\n')}`)
                }
                
                done()
            })
        })
    })
})

function castArray(val) {
    if (Array.isArray(val)) {
        return val
    }
    
    return [val]
}
