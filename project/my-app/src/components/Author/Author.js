import React, { PureComponent } from 'react'

class Author extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="post-block post-author clearfix">
        <h3 className="heading-primary">
          <i className="fa fa-user"></i>Author
        </h3>
        <div className="img-thumbnail">
          <a href="blog-post.html">
            <img src="http://via.placeholder.com/150x150" alt="" />
          </a>
        </div>
        <p>
          <strong className="name">
            <a href="#">{this.props.name}</a>
          </strong>
        </p>
        <p>{this.props.about}</p>
      </div>
    )
  }
}

export default Author
