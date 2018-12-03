import React, { Component } from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      isLoggedIn: false,
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/router', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div id="loginform" className="modal-content">
        <form action={this.handleSubmit} method="POST">
          <h2>Login to Your Account</h2>

          <label for="userName"><b>User Name</b></label>
          <input type="text" placeholder="User Name" name="userName" required></input>

          <label for="userPass"><b>Password</b></label>
          <input type="password" placeholder="Password" name="userPass" required></input>

          <button type="submit" class="registerbtn">Login</button>
    </form>
    </div>
    );
  }
}

export default LoginForm;
