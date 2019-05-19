import React from "react";


const Comment = () => {


    return (

        <article className="post post-large">

                <div className="post-date">
                  <span className="day">10</span>
                  <span className="month">Jan</span>
                </div>

                <div className="post-content">

                  <blockquote>
                    Post Format - Blockquote - Mauris aliquet ultricies ante, non faucibus ante gravida sed. Sed ultrices pellentesque purus,
                    vulputate volutpat ipsum hendrerit sed neque sed sapien rutrum laoreet justo ultrices. In pellentesque
                    lorem condimentum dui morbi pulvinar dui non quam pretium ut lacinia tortor.
                    <small>Someone famous
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </blockquote>

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
                    <a href="blog-post.html" className="btn btn-xs btn-primary pull-right">Read more...</a>
                  </div>

                </div>
              </article>

    )

}



export default Comment;

