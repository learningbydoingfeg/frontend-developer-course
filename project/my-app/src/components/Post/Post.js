import React, { Component, PropTypes } from 'react'

import Author from './../Author/Author'

import './Post.css'

class Post extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { title, content, image } = this.props

    return (
      <article className="post post-large blog-single-post">
        <div className="post-image">
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
        </div>
      </article>
    )
  }
}

Post.prototype = {
  title: PropTypes.string,
  content: PropTypes.string,
  show: PropTypes.bool
}

export default Post
