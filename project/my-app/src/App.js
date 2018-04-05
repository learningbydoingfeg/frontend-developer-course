import React, { Component } from 'react';

import logo from './logo.svg';
import Post from './components/Post/Post'

import Data from './assets/data/post.json'

import './App.css';

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

  myHeader () {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    )
  }

  render() {
    const { Data } = this.state
    return (
      <div className="App" style={{marginBottom: '50px'}}>
        {this.myHeader()}
        <button onClick={() => {this.setState({ a: 1 })} } > Update </button>
        {
          Data && Data.map((post, index) => (
            <Post
              key={index}
              title={post.title}
              content={post.contet}
              image={post.image}
              author={post.author}
            />
          )) || (
            <img src='loading.gif' />
          )
        }
      </div>
    );
  }
}


export default App;
