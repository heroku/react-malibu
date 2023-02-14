import 'babel-core/register'
import 'babel-polyfill'
import { beforeEach, before, after } from 'mocha'
import sinon from 'sinon'
import { jsdom } from 'jsdom'

// import Enzyme from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'

// Enzyme.configure({ adapter: new Adapter() })

// Since react will console.error propType warnings, that which we'd rather have
// as errors, we use sinon.js to stub it into throwing these warning as errors
// instead.
before(() => {
  sinon.stub(console, 'error').callsFake((warning) => { throw new Error(warning) })
})
// While not forgetting to restore it afterwards
after(() => { console.error.restore() })

// setup jsdom
beforeEach(() => {
  const fetch = window.fetch
  jsdom.env({
    url: 'https://data.example.com/',
    html: '<div></div>',
    created: (err, window) => {
      if (!err) {
        window.fetch = fetch
        global.fetch = fetch
        global.window = window
      }
    }
  })
})
