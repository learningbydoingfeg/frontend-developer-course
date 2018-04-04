import React, { Component } from 'react';

import logo from './logo.svg';
import Post from './components/Post/Post'

import Data from './assets/data/post.json'

import './App.css';

class App extends Component {
  constructor () {
    super()

    this.state = {
      Data
    }
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
    console.log(Data[0].title)
    return (
      <div className="App">
        {this.myHeader()}
        <Post
          title='Hola mundo'
          content='Este es mi primer ejercicio de react'
        />
        {
          this.state.Data.map((post, index) => (
            <Post
              key={index}
              title={post.title}
              content={post.contet}
              image={post.image}
            />
          ))
        }
      </div>
    );
  }
}


export default App;
