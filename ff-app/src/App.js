import React, { Component } from 'react';
import TitleBar from './components/titleBar';
import NavBar from './components/navBar';
//import Home from './components/home.js';
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
  }
//     componentDidMount() {
//       // Call our fetch function below once the component mounts
//     this.callBackendAPI()
//       .then(res => this.setState({ data: res.express }))
//       .catch(err => console.log(err));
//   }
//     // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
//   callBackendAPI = async () => {
//     const response = await fetch('/express_backend');
//     const body = await response.json();
//
//     if (response.status !== 200) {
//       throw Error(body.message)
//     }
// return body;
//   }

  render() {
    return (
      <div>
        <TitleBar />
        <NavBar />
        <Collections />
        <LoginForm />
      </div>
    );
  }
}

export default App;

/*
  - edit styling for: NewItems, FeaturedItems, Collections,



*/
