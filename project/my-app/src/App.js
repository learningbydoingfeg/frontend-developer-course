import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

const name = 'Cristian'

class App extends Component {
  myHeader () {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React {name}</h1>
      </header>
    )
  }
  
  myContent () {
    return (
      <p className="App-intro">
        { 2 * 10 }
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    )
  }

  render() {
    return (
      <div className="App">
        {this.myHeader()}
        {this.myContent()}
      </div>
    );
  }
}


export default App;
