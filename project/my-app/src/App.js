import React, { Component } from 'react';

import logo from './logo.svg';
import Header from './components/Header/Header'
import Post from './components/Post/Post'

import Data from './assets/data/post.json'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  constructor () {
    super()

    this.state = { }
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () {
    // 1. Manipular DOM
    // 2. Realizar peticiones HTTP

    // Simulando los datos del servidor
    setTimeout(() => {
      this.setState({ Data })
      console.log('componentDidMount')
    }, 3000);
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log('asas')
    console.log(error, info);
  }

  render() {
    const { Data } = this.state
    return (
      <div className="App" style={{marginBottom: '50px'}}>
        <Header logo={logo} />
        <button
          className='btn btn-primary'
          onClick={() => {this.setState({ a: 1 })} }
        >
          Update
        </button>
        <div className='row'>
          <div className='col-sm-7'>
            {
              Data
              ? Data.map((post, index) => (
                <Post
                  key={index}
                  title={post.title}
                  content={post.contet}
                  image={post.image}
                  author={post.author}
                />
              ))
              : (
                <img src='loading.gif' />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}


export default App;
