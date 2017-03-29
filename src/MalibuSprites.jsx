import React from 'react'
import SVGInline from 'react-svg-inline'
import sprites from 'raw-loader!./sprite.svg'

export default () => {
  <SVGInline svg={ sprites } />
}
