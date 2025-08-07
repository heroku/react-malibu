const { expect } = require('chai')
const { describe, it, afterEach } = require('mocha')
const React = require('react')
const { render } = require('@testing-library/react')

const fetchMock = require('fetch-mock')
const { MalibuSprites } = require('../dist/')

describe('MalibuSprite', () => {
  const sprites = `
    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0;visibility:hidden">
      <defs>
      </defs>
    </svg>`

  afterEach(() => { fetchMock.restore() })

  it('fetches the latest version of the sprites', () => {
    const url = 'https://www.herokucdn.com/malibu/latest/sprite.svg'
    fetchMock.get(url, sprites)
    render(<MalibuSprites />)
    expect(fetchMock.lastUrl()).to.equal(url)
  })

  it('fetches different sprites when set is provided', () => {
    const set = 'marketing'
    const url = `https://www.herokucdn.com/malibu/latest/${set}/sprite.svg`
    fetchMock.get(url, sprites)
    render(<MalibuSprites set={set} />)
    expect(fetchMock.lastUrl()).to.equal(url)
  })

  it('does not permit arbitrary set values', () => {
    expect(() => (render(<MalibuSprites name='foo' set='WRONG'/>))).to.throw()
  })
})
