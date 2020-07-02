import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import 'whatwg-fetch'

const alternativeSpriteSets = [
  'marketing'
]

export default class MalibuSprites extends React.Component {
  static displayName = 'MalibuSprites'

  static propTypes = {
    handleUpdate: PropTypes.func,
    version: PropTypes.string.isRequired,
    set: PropTypes.oneOf(alternativeSpriteSets)
  }

  static defaultProps = {
    handleUpdate: () => {},
    version: 'latest'
  }

  _isMounted = false

  state = {
    fetchTries: 0,
    sprites: '',
  }

  componentDidMount () {
    this._isMounted = true
    this.fetchSprites()
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  componentDidUpdate () {
    this.props.handleUpdate()
  }

  fetchSprites = () => {
    const { version, set } = this.props
    const file = set ? `${set}/sprite.svg` : 'sprite.svg'

    fetch(`https://www.herokucdn.com/malibu/${version}/${file}`)
      .then((res) => (res.text()))
      .then((sprites) => {
        if (this._isMounted) this.setState({
          fetchTries: 0,
          sprites,
        })
      })
      .catch((err) => {
        if (!this._isMounted) return
        // Retry with exponential backoff
        let { fetchTries } = this.state
        fetchTries += 1
        this.setState({ fetchTries })
        const fetchDelaySeconds = 2 ** fetchTries
        console.warn(`Error when fetching Malibu sprites, retrying in ${2 ** fetchTries}`, err)
        setTimeout(this.fetchSprites, fetchDelaySeconds ** 1000)
      })
  }

  render () {
    const { sprites } = this.state
    return (<SVGInline svg={sprites}/>)
  }
}

