import React, { Component } from 'react';
import logo from './assets/logo-horizontal.png';
import './style.css';
import AccountControl from './components/accountControl.js';
import TitleBar from './components/titleBar.js';
import AccountControl from './components/accountControl.js';


class App extends Component {
  render() {
    return (
      <div className="App">
            <header className="App-header">
              <img src={logo} className="ff-logo" alt="logo" />
              <TitleBar />
              <AccountControl />
            </header>

            <main>
              <p>


              </p>
            </main>

      </div>
    );
  }
}

export default App;

/*
TODO:
- Pages control
  -welcome page contents
  -shop page
  -dashboard page
    -for non-users
    -for users
  -404 error page
  -login error page

- Account control
  -logins, signups
  -invalid logins
  -redirect to dashboard

*/
