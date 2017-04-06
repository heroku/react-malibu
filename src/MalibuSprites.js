import React, { PropTypes } from 'react'
import SVGInline from 'react-svg-inline'
import 'whatwg-fetch'

export default class MalibuSprites extends React.Component {
  static propTypes = {
    version: PropTypes.string.isRequired,
  }

  static defaultProps = {
    version: 'latest'
  }

  state = {
    fetchTries: 0,
    sprites: '',
  }

  componentDidMount () {
    this.fetchSprites()
  }

  fetchSprites = () => {
    const { version } = this.props
    fetch(`https://www.herokucdn.com/malibu/${version}/sprite.svg`)
      .then((res) => (res.text()))
      .then((sprites) => {
        this.setState({
          fetchTries: 0,
          sprites,
        })
      })
      .catch((err) => {
        // Retry with exponential backoff
        let { fetchTries } = this.state
        fetchTries += 1
        this.setState({fetchTries})
        const fetchDelaySeconds = 2 ** fetchTries
        console.warn(`Error when fetching Malibu sprites, retrying in ${2 ** fetchTries}`, err)
        setTimeout(this.fetchSprites, fetchDelaySeconds ** 1000)
      })
  }

  render () {
    const { sprites } = this.state
    return (<SVGInline svg={sprites} />)
  }
}
