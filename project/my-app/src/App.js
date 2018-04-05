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

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () {
    // 1. Manipular DOM
    // 2. Realizar peticiones HTTP
    console.log('componentDidMount')
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
    return (
      <div className="App" style={{marginBottom: '50px'}}>
        {this.myHeader()}
        <Post
          title='Hola mundo'
          content='Este es mi primer ejercicio de react'
          image={Data[0].image}
          prueba={this.state.a}
        />
        <button onClick={() => {this.setState({ a: 1 })} } > Update </button>
        {
          /*this.state.Data.map((post, index) => (
            <Post
              key={index}
              title={post.title}
              content={post.contet}
              image={post.image}
            />
          ))*/
        }
      </div>
    );
  }
}


export default App;
