import React, { Component } from 'react';
import logo from './ff-logo-draft_v1.png';
import './style.css';
import NavBar from './navBar.js';
import TitleBar from './titleBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <TitleBar />
      <NavBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Forward Future
          </p>
          <p>Hello React!</p>
        </header>
      </div>
    );
  }
}

export default App;
