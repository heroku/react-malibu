import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { describe, it, afterEach } from 'mocha'
import React from 'react'
import { shallow, mount } from 'enzyme'

import fetchMock from 'fetch-mock'
import { MalibuSprites } from '../src/'

chai.use(chaiEnzyme())

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
    mount(<MalibuSprites />)
    expect(fetchMock.lastUrl()).to.equal(url)
  })

  it('correctly sets the content of sprites when fetched', () => {
    const wrapper = shallow(<MalibuSprites />)
    wrapper.setState({sprites})
    wrapper.update()
    expect(wrapper.props().svg).to.equal(sprites)
  })
})
