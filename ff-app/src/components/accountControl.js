import React, { Component } from 'react';
import LoginButton from './loginButton.js';
import LogoutButton from './logoutButton.js';
import SignupButton from './signupButton.js';

class AccountControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    // TODO: redirect to login page
    // TODO: show dashboard components
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    // TODO: redirect to index
    this.setState({isLoggedIn: false});
  }

  handleSignupClick() {
    // TODO: redirect to signup or show signup components
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>

        {button}
      </div>
    );
  }
}

export default AccountControl;
