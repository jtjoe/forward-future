import React, { Component } from 'react';
import NavBar from './navBar';
import Account from './account';
import LogoutButton from './logoutButton';


class AccountControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleMainPages = this.handleMainPages.bind(this);
    this.handleAccount = this.handleAccount.bind(this);

    this.state = {isLoggedIn: false,
                  showForm: false,
                  mainPage: "index",
                };
  }

  handleMainPages(pageToShow) {
    //show or hide components such as dashboard depending on login state
    this.setState({mainPage: pageToShow});
  }
  handleAccount(loginType) {
    //handles login logic such as signing in
    this.setState({showForm: loginType});
  }

  render() {
    //enable relevant handler for each page
    //show form
    const page = <signupButton onClick={this.handleSignupClick} />;
    const form = this.state.showForm;

    if (this.state.isLoggedIn) {
      //user is already logged in

      //set components for different pages
    }

    return (
      <div>
      <NavBar />
      <Account />
        {page}
        {form}
      </div>
    );
  }
}

export default AccountControl;
