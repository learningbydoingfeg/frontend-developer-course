import React from 'react'

const Icon = (props) => (
  <svg
    viewBox="0 0 32 32"
    fill={props.color}
    width={props.size}
    height={props.size}
  >
    {props.children}
  </svg>
)

export default Icon
