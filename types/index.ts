import type Code from '@hapi/code'

declare global {
    /* eslint-disable vars-on-top, no-var */
    var expect: typeof Code.expect
    /* eslint-enable vars-on-top, no-var */
}
