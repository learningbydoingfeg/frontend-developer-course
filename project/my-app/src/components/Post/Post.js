import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Date from './../Date/Date'
import Author from './../Author/Author'

import './Post.css'

class Post extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  componentWillReceiveProps (nextProps) {
    const props = this.props
    this.setState({myProps: nextProps})
  }

  shouldComponentUpdate(nextProps) {
    const props = this.props
    //debugger
    if (props.prueba !== nextProps.prueba) {
      return true
    }
    return false
  }

  render () {
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

        <Date day='10' month='Jan' />

        <div className="post-content">

          <h2>
            <a href="blog-post.html">
              {title}
            </a>
          </h2>

          <p>{content}</p>
          <Author name={author.name} about={author.about}/>


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
