import React from 'react'
import PropTypes from 'prop-types'

export default class MalibuIcon extends React.Component {
  static propTypes = {
    extraClasses: PropTypes.string,
    fillClass: PropTypes.oneOf([
      'purple',
      'dark-gray',
      'red',
      'orange',
      'green',
      'blue',
    ]),
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

    let classNames = `malibu-fill-gradient-${fillClass}`

    if (extraClasses) {
      classNames += ` ${extraClasses}`
    }

    return (
      <svg style={style} className={classNames}><use xlinkHref={`#${name}`}></use></svg>
    )
  }
}
