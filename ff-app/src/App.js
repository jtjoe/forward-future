import React, { Component } from 'react';
import logo from './assets/logo-horizontal.png';
import './style.css';
import NavBar from './components/navBar.js';
import TitleBar from './components/titleBar.js';
import AccountControl from './components/accountControl.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <TitleBar />
          <NavBar />
          <AccountControl />

            <header className="App-header">
              <img src={logo} className="ff-logo" alt="logo" />
              <p>
                Welcome to Forward Future

              </p>
            </header>
      </div>
    );
  }
}

export default App;
