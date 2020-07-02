import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { describe, it } from 'mocha'
import React from 'react'
import { shallow } from 'enzyme'

import { MalibuIcon } from '../src/'

chai.use(chaiEnzyme())

describe('MalibuIcon', () => {
  it('displays a natively-sized icon', () => {
    const wrapper = shallow(<MalibuIcon name='foo' />)
    expect(wrapper).to.not.have.prop('style')
    expect(wrapper).to.have.className('malibu-fill-gradient-purple')
    expect(wrapper).not.to.have.className('undefined')
    expect(wrapper.find('use')).to.be.present()
    expect(wrapper.find('use')).to.have.prop('href').equal('#foo')
  })

  it('correctly applies extra classes', () => {
    const wrapper = shallow(<MalibuIcon name='foo' extraClasses='v-mid'/>)
    expect(wrapper).to.not.have.prop('style')
    expect(wrapper).to.have.className('malibu-fill-gradient-purple')
    expect(wrapper).to.have.className('v-mid')
    expect(wrapper.find('use')).to.be.present()
    expect(wrapper.find('use')).to.have.prop('href').equal('#foo')
  })

  it('displays a gradient fillClass icon', () => {
    const wrapper = shallow(<MalibuIcon name='foo' fillClass='blue'/>)
    expect(wrapper).to.not.have.prop('style')
    expect(wrapper).to.have.className('malibu-fill-gradient-blue')
    expect(wrapper.find('use')).to.be.present()
    expect(wrapper.find('use')).to.have.prop('href').equal('#foo')
  })

  it('displays a purple fillClass icon', () => {
    const wrapper = shallow(<MalibuIcon name='foo' fillClass='fill-washed-blue'/>)
    expect(wrapper).to.not.have.prop('style')
    expect(wrapper).to.have.className('fill-washed-blue')
    expect(wrapper.find('use')).to.be.present()
    expect(wrapper.find('use')).to.have.prop('href').equal('#foo')
  })

  it('displays a custom-sized icon', () => {
    const wrapper = shallow(<MalibuIcon name='foo' fillClass='blue' size={333}/>)
    expect(wrapper.prop('style')).to.deep.equal({width: '333px', height: '333px'})
    expect(wrapper).to.have.className('malibu-fill-gradient-blue')
    expect(wrapper.find('use')).to.be.present()
    expect(wrapper.find('use')).to.have.prop('href').equal('#foo')
  })

  it('does not permit arbitrary fillClass values', () => {
    expect(() => (shallow(<MalibuIcon name='foo' fillClass='WRONG'/>))).to.throw()
  })
})
