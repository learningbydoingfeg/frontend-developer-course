import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Author from './../Author/Author'

import './Post.css'

class Post extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  componentWillReceiveProps (nextProps) {
    const props = this.props
    this.state.myProps = nextProps
  }

  shouldComponentUpdate(nextProps) {
    const props = this.props
    //debugger
    if (props.prueba !== nextProps.prueba) {
      return true
    }
    return false
  }

  componentWillUpdate() {

  }

  componentDidUpdate () {
    const $a = document.getElementById('prueba')
    console.log('prueba', $a)
  }

  render () {
    console.log('Props')
    const { title, content, image, author } = this.props

    return (
      <article className="post post-large blog-single-post">
        <div id='prueba' className="post-image">
          <div className="owl-carousel owl-theme" data-plugin-options='{"items":1}'>
            <div>
              <div className="img-thumbnail">
                {
                  image && <img className="img-responsive" src={image} alt="Img" />
                }
              </div>
            </div>
          </div>
        </div>

        <div className="post-date">
          <span className="day">10</span>
          <span className="month">Jan</span>
        </div>

        <div className="post-content">

          <h2>
            <a href="blog-post.html">
              {title}
            </a>
          </h2>

          <p>{content}</p>
          {
            author && author.name
            ? (
              <div>
                Author: {author.name}
              </div>
            )
            : (
              <div>
                Author: UNNAMED
              </div>
            )
          }

        </div>
      </article>
    )
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.object
}

export default Post
