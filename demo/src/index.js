import React from 'react'
import { createRoot } from 'react-dom/client';
import difference from 'lodash.difference'

import { MalibuSprites, MalibuIcon } from '../../src'

class Demo extends React.Component {
  state = {
    fill: 'purple',
    iconIds: [],
  }

  handleGradient = (e) => {
    const fill = e.currentTarget.getAttribute('data-gradient')
    this.setState({fill})
  }

  handleSpriteUpdate = () => {
    if (this.node) {
      const svgInline = this.node.querySelector('.SVGInline')
      if (svgInline) {
        const iconIds = Array.from(svgInline.querySelectorAll('symbol')).map((s) => s.id)
        if (difference(iconIds, this.state.iconIds).length) {
          this.setState({iconIds})
        }
      }
    }
  }

  render() {
    const { fill, iconIds } = this.state
    const iconDemos = iconIds.map((i) => (
      <li className='pa3 pa4-ns bb b--black-10' key={i}>
        <h3 >{i}</h3>
        <div className='ma1 mh2 dib'>
          <MalibuIcon name={i} size={12} fillClass={fill} />
          <p className='mt1 pt1 mb0 f6 black-50 tc bt b--black-10'>12</p>
        </div>
        <div className='ma1 mh2 dib'>
          <MalibuIcon name={i} size={16} fillClass={fill} />
          <p className='mt1 pt1 mb0 f6 black-50 tc bt b--black-10'>16</p>
        </div>
        <div className='ma1 mh2 dib'>
          <MalibuIcon name={i} size={20} fillClass={fill} />
          <p className='mt1 pt1 mb0 f6 black-50 tc bt b--black-10'>20</p>
        </div>
        <div className='ma1 mh2 dib'>
          <MalibuIcon name={i} size={24} fillClass={fill} />
          <p className='mt1 pt1 mb0 f6 black-50 tc bt b--black-10'>24</p>
        </div>
        <div className='ma1 mh2 dib'>
          <MalibuIcon name={i} size={28} fillClass={fill} />
          <p className='mt1 pt1 mb0 f6 black-50 tc bt b--black-10'>28</p>
        </div>
        <div className='ma1 mh2 dib'>
          <MalibuIcon name={i} size={32} fillClass={fill} />
          <p className='mt1 pt1 mb0 f6 black-50 tc bt b--black-10'>32</p>
        </div>
        <div className='ma1 mh2 dib'>
          <MalibuIcon name={i} size={48} fillClass={fill} />
          <p className='mt1 pt1 mb0 f6 black-50 tc bt b--black-10'>48</p>
        </div>
        <div className='ma1 mh2 dib'>
          <MalibuIcon name={i} size={64} fillClass={fill} />
          <p className='mt1 pt1 mb0 f6 black-50 tc bt b--black-10'>64</p>
        </div>
        <div className='ma1 mh2 dib'>
          <MalibuIcon name={i} size={128} fillClass={fill} />
          <p className='mt1 pt1 mb0 f6 black-50 tc bt b--black-10'>128</p>
        </div>
      </li>
    ))


    return <div className='mw7 center' ref={(node) => { this.node = node }}>
      <h1 className='tc pb3'>MalibuSprites Demo</h1>
      <MalibuSprites handleUpdate={this.handleSpriteUpdate}/>

      <div className='bb b--black-30 tc pb3'>
        <p className='f5 black-50 i mt3 mb0'>Select a fill color:</p>
        <a className='pointer grow dib ma2' data-gradient='purple' onClick={this.handleGradient}><svg width={48} height={48} shapeRendering='crispEdges' className='ma0 pa0 dib malibu-fill-gradient-purple'><rect x={0} y={0} width={48} height={48}/></svg></a>
        <a className='pointer grow dib ma2' data-gradient='dark-gray' onClick={this.handleGradient}><svg width={48} height={48} className='ma0 pa0 malibu-fill-gradient-dark-gray'><rect x={0} y={0} width={48} height={48}/></svg></a>
        <a className='pointer grow dib ma2' data-gradient='red' onClick={this.handleGradient}><svg width={48} height={48} className='ma0 pa0 malibu-fill-gradient-red'><rect x={0} y={0} width={48} height={48} /></svg></a>
        <a className='pointer grow dib ma2' data-gradient='orange' onClick={this.handleGradient}><svg width={48} height={48} className='ma0 pa0 malibu-fill-gradient-orange'><rect x={0} y={0} width={48} height={48} /></svg></a>
        <a className='pointer grow dib ma2' data-gradient='green' onClick={this.handleGradient}><svg width={48} height={48} className='ma0 pa0 malibu-fill-gradient-green'><rect x={0} y={0} width={48} height={48} /></svg></a>
        <a className='pointer grow dib ma2' data-gradient='blue' onClick={this.handleGradient}><svg width={48} height={48} className='ma0 pa0 malibu-fill-gradient-blue'><rect x={0} y={0} width={48} height={48} /></svg></a>
      </div>

      <ul className='list pl0'>
        {iconDemos}
      </ul>
    </div>
  }
}

// inject purple3's stylesheet
const head = document.getElementsByTagName('head')[0]
const cssLink = document.createElement('link')
cssLink.href = 'https://www.herokucdn.com/purple3/latest/purple3.min.css'
cssLink.type = 'text/css'
cssLink.rel = 'stylesheet'
head.appendChild(cssLink)

const root = createRoot(document.querySelector('#demo'));
root.render(<Demo/>)
