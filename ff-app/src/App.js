import React, { Component } from 'react';
import logo from './assets/logo-horizontal.png';
import './style.css';
import NavBar from './components/navBar.js';
import TitleBar from './components/titleBar.js';
import AccountControl from './components/accountControl.js';
import Collections from './components/collections.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <TitleBar />
          <NavBar />
          <AccountControl />

          <Collections />
      </div>
    );
  }
}

export default App;
