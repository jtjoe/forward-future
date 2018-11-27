import React, { Component } from 'react';
import logo from './assets/logo-horizontal.png';
import './style.css';
import './home.css';
import './login.css';
import './product.css';
import './Register.css';
//import './search.css';
import AccountControl from './components/accountControl.js';
import TitleBar from './components/titleBar.js';

import NavBar from './components/navBar.js';
import Footer from './components/footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">

          <TitleBar />



          <NavBar/>



          <Footer />

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
