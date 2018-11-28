import React, { Component } from 'react';
import Home from './components/home.js';
import Collections from './components/collections.js';


import NavBar from './components/navBar.js';
import Footer from './components/footer.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {screen: 'home'};
  }

  handleOnScreenChange = (screen) => {
    this.setState({screen: screen});
  };

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
