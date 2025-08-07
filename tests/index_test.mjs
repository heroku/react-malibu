// ES Module setup for tests
import '@babel/register'
import 'core-js/stable/index.js'
import { beforeEach, before, after } from 'mocha'
import sinon from 'sinon'
import { JSDOM } from 'jsdom'

// Since react will console.error propType warnings, that which we'd rather have
// as errors, we use sinon.js to stub it into throwing these warning as errors
// instead.
before(() => {
  sinon.stub(console, 'error').callsFake((warning) => { throw new Error(warning) })
})
// While not forgetting to restore it afterwards
after(() => { console.error.restore() })

// setup jsdom - only if not already set up
beforeEach(() => {
  if (!global.window) {
    const dom = new JSDOM('<!DOCTYPE html><div></div>', {
      url: 'https://data.example.com/'
    })

    global.window = dom.window
    global.document = dom.window.document
    global.navigator = dom.window.navigator
    global.fetch = window.fetch
  }
})
