import React, { Component } from 'react';
import 'whatwg-fetch';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      email: '',
      password: '',
      error: ''
    };//login data

    //bind state
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.onLogin = this.onLogin.bind(this);
  };

  componentDidMount() {
   this.setState({
     isLoading: false
   });
}

  updateEmail(event) {
    this.setState({
    email: event.target.value,
    });
  }
  updatePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  onLogin() {
    const {
      email,
      password,
    } = this.state;

    this.setState({ isLoading: true, });

    //post to backend
    fetch('../backend/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.setState({
            error: json.message,
            isLoading: false,
            email: '',
            password: '',
          });
        } else {
          this.setState({
            error: json.message,
            isLoading: false,
          });
        }
      });
  }

  render() {
    return (
      <div id="loginform">
        <form>
          <h2>Login to Your Account</h2>

          <label for="email"><b>Email</b></label>
          <input type="email" placeholder="Email" name="email" value={this.email} onChange={this.updateEmail} required></input>

          <label for="userPass"><b>Password</b></label>
          <input type="password" placeholder="Password" name="userPass" value={this.password} onChange={this.updatePassword} required></input>

          <button type="submit" class="registerbtn" onClick={this.onLogin}>Login</button>
    </form>
    </div>
    );
  }
}

export default LoginForm;
