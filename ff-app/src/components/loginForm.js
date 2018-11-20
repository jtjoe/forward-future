import React, { Component } from 'react';

class LoginForm extends React.Component {
  render() {
    return (
      <div id="loginform">
        <form action="./login.php" method="POST">
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
