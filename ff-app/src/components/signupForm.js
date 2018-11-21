import React, { Component } from 'react';

class SignupForm extends React.Component {
  render() {
    return (
      <div id="signupform">
        <form action="./signup.php" method="POST">
          <h2>Register Here</h2>
          <p>Please fill in this form to create an account.</p>


          <label for="userFirst"><b>First Name</b></label>
          <input type="text" placeholder="Enter First Name" name="userFirst" required></input>

          <label for="userLast"><b>Last Name</b></label>
          <input type="text" placeholder="Enter Last Name" name="userLast" required></input>

          <label for="userName"><b>User Name</b></label>
          <input type="text" placeholder="Choose User Name" name="userName" required></input>

          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required></input>

          <label for="userPass"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="userPass" required></input>

          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>


          <button type="submit" class="registerbtn">Register</button>
    </form>
    </div>
    );
  }
}

export default SignupForm;
