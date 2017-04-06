import React, { PropTypes } from 'react'

export default class MalibuIcon extends React.Component {
  static propTypes = {
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
    const { fillClass, name, size } = this.props
    const style = {}
    if (size) {
      style.width = `${size}px`
      style.height = `${size}px`
    }
    return (
      <svg style={style} className={`malibu-fill-gradient-${fillClass}`}><use xlinkHref={`#${name}`}></use></svg>
    )
  }
}
