import { expect } from 'chai'
import { describe, it } from 'mocha'
import React from 'react'
import { render } from '@testing-library/react'
import {screen} from '@testing-library/dom'

import { MalibuIcon } from '../src/'

describe('MalibuIcon', () => {
  it('displays a natively-sized icon', () => {
    const {container} = render(<MalibuIcon name='foo' />)
    const malibuClass = container.getElementsByClassName('malibu-fill-gradient-purple')
    const xlinkHrefElement = screen.queryAllByTestId('test-xlinkHref-name-foo')
    expect(malibuClass.length).to.equal(1)
    expect(xlinkHrefElement.length).to.equal(1)
  })

  it('correctly applies extra classes', () => {
    const {container} = render(<MalibuIcon name='foo' extraClasses='v-mid'/>)
    const malibuClass = container.getElementsByClassName('malibu-fill-gradient-purple')
    const malibuExtraClass = container.getElementsByClassName('v-mid')
    expect(malibuClass.length).to.equal(1)
    expect(malibuExtraClass.length).to.equal(1)
  })

  // it('correctly applies extra styles', () => {
  //   const wrapper = render(<MalibuIcon name='foo' style={{ position: 'absolute' }} size={16} />)
  //   expect(wrapper).to.have.prop('style').eql({ width: '16px', height: '16px', position: 'absolute' })
  // })

  it('displays a gradient fillClass icon', () => {
    const {container} = render(<MalibuIcon name='foo' fillClass='blue'/>)
    const malibuClass = container.getElementsByClassName('malibu-fill-gradient-blue')
    expect(malibuClass.length).to.equal(1)
  })

  it('displays a purple fillClass icon', () => {
    const {container} = render(<MalibuIcon name='foo' fillClass='fill-washed-blue'/>)
    const malibuClass = container.getElementsByClassName('fill-washed-blue')
    expect(malibuClass.length).to.equal(1)
  })

  it('displays a custom-sized icon', () => {
    const {container} = render(<MalibuIcon name='foo' fillClass='blue' size={333}/>)
    const malibuClass = container.getElementsByClassName('malibu-fill-gradient-blue')
    const malibuSize = Object.values(container.getElementsByTagName('svg')[0])[1]
    expect(malibuClass.length).to.equal(1)
    expect(malibuSize.style.width).to.equal('333px')
    expect(malibuSize.style.height).to.equal('333px')
  })

  it('does not permit arbitrary fillClass values', () => {
    expect(() => (render(<MalibuIcon name='foo' fillClass='WRONG'/>))).to.throw()
  })
})
