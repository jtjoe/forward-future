import React, { Component } from 'react';
import TitleBar from './components/titleBar';
import Home from './components/home.js';
import Collections from './components/collections.js';
//import dashboard
import SignupForm from './components/signupForm.js';
import FeaturedItems from './components/featuredItems';
import NewItems from './components/newItems';
import LoginForm from './components/loginForm';

import './home.css';
import './style.css';
import './login.css';
import './product.css';
import './Register.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      screen: 'home',
      isLoggedIn: false,
      connected: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }
    componentDidMount() {
      //
    this.checkConnection()
      .then(res => this.setState({ connected: res.connection }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  checkConnection = async () => {
    const response = await fetch('../check');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  }

  handleOnClick(pageName) {
    this.setState({ screen: pageName });
  }

  render() {
    var show = <FeaturedItems />;
    if (this.state.screen === 'home') {
      show = <Home />;
    }
    if (this.state.screen === 'collections') {
      show = <Collections />;
    }
    if (this.state.screen === 'dashboard') {
      show = <FeaturedItems />;
    }
    if (this.state.screen === 'login') {
      show = <LoginForm />;
    }
    if (this.state.screen === 'signup') {
      show = <SignupForm />;
    }
    if (this.state.screen === 'cart') {
      show = <Home />;
    }

    return (
      <div>
        <div className="mainbuttons">
          <div id="loginbutton"><button type="button" onClick={() => this.handleOnClick('login')}>Login</button></div>
          <div id="signupbutton"><button type="button" onClick={() => this.handleOnClick('signup')}>Sign Up</button></div>
          <div id="cartbutton"><button type="button" onClick={() => this.handleOnClick('cart')}>My Cart</button></div>
        </div>

        <TitleBar />

        <div className="nav">
            <h2><a className="one" onClick={() => this.handleOnClick('home')}>Home</a></h2>
            <h2><a className="one" onClick={() => this.handleOnClick('collections')} >Collections</a></h2>
            <h2><a className="one" onClick={() => this.handleOnClick('dashboard')} >Dashboard</a></h2>
        </div>

        {show}

      </div>
    );
  }
}

export default App;

/*
  - edit styling for: NewItems, FeaturedItems, Collections,



*/
