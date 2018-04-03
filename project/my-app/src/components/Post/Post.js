import React, { Component } from 'react'

import Author from './../Author/Author'

import './Post.css'

class Post extends Component {
  render () {
    return (
      <article className="post post-large blog-single-post">
        <div className="post-image">
          <div className="owl-carousel owl-theme" data-plugin-options='{"items":1}'>
            <div>
              <div className="img-thumbnail">
                <img className="img-responsive" src='http://via.placeholder.com/1280x550' alt="Img" />
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
            <a href="blog-post.html">className aptent taciti sociosqu ad litora torquent</a>
          </h2>

          <div className="post-meta">
            <span>
              <i className="fa fa-user"></i> By
              <a href="#">John Doe</a>
            </span>
            <span>
              <i className="fa fa-tag"></i>
              <a href="#">Duis</a>,
              <a href="#">News</a>
            </span>
            <span>
              <i className="fa fa-comments"></i>
              <a href="#">12 Comments</a>
            </span>
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lectus lacus, rutrum sit amet placerat et, bibendum
            nec mauris. Duis molestie, purus eget placerat viverra, nisi odio gravida sapien, congue tincidunt nisl ante nec tellus.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Fusce sagittis, massa fringilla consequat blandit, mauris ligula porta nisi, non tristique
            enim sapien vel nisl. Suspendisse vestibulum lobortis dapibus. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia Curae; Praesent nec tempus nibh. Donec mollis commodo metus et fringilla. Etiam venenatis,
            diam id adipiscing convallis, nisi eros lobortis tellus, feugiat adipiscing ante ante sit amet dolor. Vestibulum vehicula
            scelerisque facilisis. Sed faucibus placerat bibendum. Maecenas sollicitudin commodo justo, quis hendrerit leo consequat
            ac. Proin sit amet risus sapien, eget interdum dui. Proin justo sapien, varius sit amet hendrerit id, egestas quis
            mauris.</p>
            
          <Author />
        </div>
      </article>

    )
  }
}

export default Post
