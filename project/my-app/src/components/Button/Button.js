import React, { Component } from 'react'

class Button extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    //debugger
    // const content = this.props.content
    const { content } = this.props
    return (
      <button>
        {content}
      </button>
    )
  }
}

export default Button
