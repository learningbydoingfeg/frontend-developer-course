import React from 'react'

const Icon = props => (
  <svg
    fill={props.color}
    height={props.size}
    viewBox="0 0 32 32"
    width={props.size}
  >
    {props.children}
  </svg>
)

export default Icon
