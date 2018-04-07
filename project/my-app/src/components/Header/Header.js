import React from 'react'

// Componete UI
/* function Header (props) {
  return (
    <header className="App-header">
      <img src={props.logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React </h1>
    </header>
  )
}

const Header = (props) => {
  return (
    <header className="App-header">
      <img src={props.logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React </h1>
    </header>
  )
}

const Header = props => {
  return (
    <header className="App-header">
      <img src={props.logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React </h1>
    </header>
  )
}*/

const Header = props => (
  <header className="App-header">
    <img src={props.logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React </h1>
  </header>
)

export default Header
