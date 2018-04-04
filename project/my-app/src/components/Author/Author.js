import React, { Component } from 'react'

class Author extends Component {
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
            <a href="#">John Doe</a>
          </strong>
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque
          urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies,
          justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui. </p>
      </div>
    )
  }
}

export default Author