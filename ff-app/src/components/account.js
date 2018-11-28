
import React, { Component } from 'react';
import LoginButton from './loginButton.js';
import LogoutButton from './logoutButton.js';
import SignupButton from './signupButton.js';
import SignupForm from './signupForm.js';
import LoginForm from './loginForm.js';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.state = {showForm: false};
  }

  handleLoginClick() {
    // TODO: redirect to login page
    // TODO: show dashboard components
    this.setState({showForm: "login"});
  }

  handleLogoutClick() {
    // TODO: redirect to index
    this.setState({showForm: "logout"});
  }

  handleSignupClick() {
    // TODO: redirect to signup or show signup components
    this.setState({showForm: "signup"});
    if (this.state.redirect){
      return <redirect to='/signup.html' />
    }
  }

  render() {
    const showForm = this.state.showForm;
    let button;
    let button2;
    let form;

    if (showForm == "login")
    {
      button = <SignupButton onClick={this.handleSignupClick} />;
      button2 = "";
      form = <LoginForm />;
    }
    if (showForm == "signup")
    {
      button = <LoginButton onClick={this.handleLoginClick} />;
      button2 = "";
      form = <SignupForm />;
    }
    if (showForm == "logout") {
      button = "";
      button2 = "";
    }
    else
    {
      button = <LoginButton onClick={this.handleLoginClick} />;
      button2 = <SignupButton onClick={this.handleSignupClick} />;
    }

    return (
      <div>
        {form}
        {button}
        {button2}
      </div>
    );
  }
}

export default Account;
