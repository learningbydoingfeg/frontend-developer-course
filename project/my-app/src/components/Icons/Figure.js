import React from 'react'

import Icon from './Icon'

const Play = (props) => (
  <Icon {...props}>
    <path d="M6 4l20 12-20 12z"></path>
  </Icon>
)

const Pause = (props) => (
  <Icon {...props}>
    <path d="M4 4h10v24h-10zM18 4h10v24h-10z"></path>
  </Icon>
)

export { Play, Pause }
