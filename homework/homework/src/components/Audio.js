import React from "react";

const Audio = () => {

    return (


<article className="post post-large">
    <div className="post-audio">
      <iframe scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F67943430&amp;show_artwork=true&amp;maxwidth=132&amp;maxheight=1000"></iframe>
    </div>

    <div className="post-date">
      <span className="day">10</span>
      <span className="month">Jan</span>
    </div>

    <div className="post-content">

      <h2>
        <a href="blog-post.html">Post Format - Audio</a>
      </h2>
      <p>Euismod atras vulputate iltricies etri elit. className aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor
        ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget
        hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris
        tincidunt vitae. [...]</p>

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



export default Audio;