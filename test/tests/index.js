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
        
        const failureCases = [
            {
                filename: 'indentMemberExpression.js',
                rulename: 'indent',
                line: [11, 12, 13]
            },
            {
                filename: 'parseIntWithMap.js',
                rulename: 'no-restricted-syntax',
                line: 5
            },
            {
                filename: 'requireCase.js',
                rulename: 'dependencies/case-sensitive',
                line: 6
            },
            {
                filename: 'shouldPreferConst.js',
                rulename: 'prefer-const',
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
            it(`should fail ${test.filename} for violating ${test.rulename}`, function(done) {
                const filepath = path.join(fixturesDirectory, '/fails', test.filename)
                const report = engine.executeOnFiles([filepath])
            
                expect(report.errorCount).to.be.at.least(1)
            
                let lines = test.line
                if (!Array.isArray(test.line)) {
                    lines = [test.line]
                }
            
                expect(report.results).to.be.length(1)
                expect(report.results[0].messages).to.be.length(lines.length)
            
                report.results[0].messages.forEach(function(message) {
                    expect(message.ruleId).to.equal(test.rulename)
                    expect(lines, 'Defined line numbers should include error line').to.include(message.line)
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
