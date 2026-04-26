/**
 * Smoke test -- verifies the public surface of @heroku/react-malibu
 * builds and renders without error. This is layer L4 of the workspace
 * verification ladder (see 3pp-grackle/docs/verification-specs/react-malibu.md).
 *
 * Asserts:
 *   1. The built `lib/` directory exists after `yarn build`
 *   2. The package's public exports (MalibuIcon, MalibuSprites) load
 *   3. Each component server-renders without throwing
 *   4. MalibuIcon produces an <svg> tag for a known icon name
 *
 * Run via: yarn test (after yarn build) -- this file is picked up by
 * the existing `mocha tests/*_test.js` glob.
 */

require('@babel/register')

const path = require('path')
const fs = require('fs')
const { expect } = require('chai')
const { describe, it, before } = require('mocha')
const React = require('react')
const ReactDOMServer = require('react-dom/server')

describe('smoke -- public surface boots', () => {
  const LIB_DIR = path.join(__dirname, '..', 'lib')
  const LIB_INDEX = path.join(LIB_DIR, 'index.js')

  it('build artifact exists', () => {
    if (!fs.existsSync(LIB_DIR)) {
      throw new Error('lib/ does not exist; run `yarn build` first.')
    }
    if (!fs.existsSync(LIB_INDEX)) {
      throw new Error('lib/index.js does not exist; build did not produce expected entry.')
    }
  })

  describe('public exports', () => {
    let lib

    before(() => {
      // Load via the package's `main` field rather than via src/, so the
      // smoke exercises what npm consumers actually import.
      lib = require('../lib')
    })

    it('exports MalibuIcon as a function', () => {
      expect(lib.MalibuIcon).to.be.a('function')
    })

    it('exports MalibuSprites as a function', () => {
      expect(lib.MalibuSprites).to.be.a('function')
    })
  })

  describe('server-render', () => {
    let lib

    before(() => {
      lib = require('../lib')
    })

    it('MalibuSprites renders to non-empty HTML', () => {
      const html = ReactDOMServer.renderToStaticMarkup(
        React.createElement(lib.MalibuSprites)
      )
      expect(html).to.be.a('string')
      expect(html.length).to.be.greaterThan(0)
    })

    it('MalibuIcon renders an <svg> tag for a known icon', () => {
      const html = ReactDOMServer.renderToStaticMarkup(
        React.createElement(lib.MalibuIcon, { name: 'add-badge-16' })
      )
      expect(html).to.be.a('string')
      expect(html).to.include('<svg')
    })
  })
})
