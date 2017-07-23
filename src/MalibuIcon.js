import React from 'react'
import PropTypes from 'prop-types'

const purpleFillClasses = [
  'fill-black',
  'fill-near-black',
  'fill-dark-gray',
  'fill-mid-gray',
  'fill-gray',
  'fill-silver ',
  'fill-light-silver',
  'fill-lightest-silver',
  'fill-moon-gray',
  'fill-light-gray',
  'fill-near-white',
  'fill-white',
  'fill-transparent',
  'fill-dark-red',
  'fill-red',
  'fill-light-red',
  'fill-orange',
  'fill-gold',
  'fill-yellow',
  'fill-light-yellow',
  'fill-purple',
  'fill-light-purple',
  'fill-dark-pink',
  'fill-hot-pink',
  'fill-pink',
  'fill-light-pink',
  'fill-dark-green',
  'fill-green',
  'fill-light-green',
  'fill-navy',
  'fill-dark-blue',
  'fill-blue',
  'fill-light-blue',
  'fill-lightest-blue',
  'fill-washed-blue',
  'fill-washed-green',
  'fill-washed-yellow',
  'fill-washed-red',
]

const purpleGradientFillClasses = [
  'purple',
  'dark-gray',
  'red',
  'orange',
  'green',
  'blue',
]

export default class MalibuIcon extends React.Component {
  static propTypes = {
    extraClasses: PropTypes.string,
    fillClass: PropTypes.oneOf(purpleGradientFillClasses.concat(purpleFillClasses)),
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
  }

  static defaultProps = {
    fillClass: 'purple'
  }

  render () {
    const { extraClasses, fillClass, name, size } = this.props
    let style
    if (size) {
      style = {
        width: `${size}px`,
        height: `${size}px`,
      }
    }

    let classNames
    if (purpleGradientFillClasses.includes(fillClass)) {
      classNames = `malibu-fill-gradient-${fillClass}`
    }
    if (purpleFillClasses.includes(fillClass)) {
      classNames = fillClass
    }
    if (extraClasses) {
      classNames += ` ${extraClasses}`
    }

    return (
      <svg style={style} className={classNames}><use xlinkHref={`#${name}`}></use></svg>
    )
  }
}
