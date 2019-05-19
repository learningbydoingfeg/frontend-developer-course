import React from 'react';
import Gallery from './Gallery';
import Singleimage from './Singleimage';
import Video from './Video'
import Audio from './Audio'
import Comment from './Comment'
import Sidebar from './Sidebar'


const Main = () => {
    
return (

<div role="main" className="main">

    
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="breadcrumb">
                <li>
                  <a href="#">Home</a>
                </li>
                <li className="active">Blog</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h1>Super Project Frontend Developers</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="container">

        <div className="row">
          <div className="col-md-9">
            <div className="blog-posts">

              

              <Gallery />
              <Singleimage />
              <Video />
              <Audio />

              < Comment />
              < Comment />
              < Comment />

              <ul className="pagination pagination-lg pull-right">
                <li>
                  <a href="#">«</a>
                </li>
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">»</a>
                </li>
              </ul>

            </div>
          </div>

          <div className="col-md-3">

            <Sidebar />
          </div>
        </div>

      </div>

    </div>

)

}

export default Main;