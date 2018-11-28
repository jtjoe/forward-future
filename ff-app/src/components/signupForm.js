import React, { Component } from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      userName: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordRepeat: '',
      error: '',
    }; //user data

    //bind functions
    this.updateUsername = this.updateUsername.bind(this);
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updatePasswordRepeat = this.updatePasswordRepeat.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  };

  componentDidMount() {
   this.setState({
     isLoading: false
   });
}

  updateUsername(event) {
    this.setState({
      userName: event.target.value,
    });
  }
  updateFirstName(event) {
    this.setState({
    firstName: event.target.value,
    });
  }
  updateLastName(event) {
    this.setState({
      lastName: event.target.value,
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
  updatePasswordRepeat(event) {
    this.setState({
      passwordRepeat: event.target.value,
    });
  }

  onSignUp() {
    //get user data stored in React state
    const {
      userName,
      firstName,
      lastName,
      email,
      password,
      passwordRepeat,
    } = this.state;

    this.setState({ isLoading: true, });

    //post to backend
   fetch('../backend/signup', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       userName: userName,
       firstName: firstName,
       lastName: lastName,
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
           firstName: '',
           lastName: '',
           email: '',
           password: '',
           passwordRepeat: '',
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
      <div id="signupform">

          <h2>Register Here</h2>
          <p>Please fill in this form to create an account.</p>


          <label for="userName"><b>Handle Name/User name</b></label>
          <input type="text" placeholder="User Name" name="userName" onChange={this.updateUsername} required></input>

          <label for="userFirst"><b>First Name</b></label>
          <input type="text" placeholder="First Name" name="firstName" onChange={this.updateFirstName} required></input>

          <label for="userLast"><b>Last Name</b></label>
          <input type="text" placeholder="Last Name" name="lastName" onChange={this.updateLastName} required></input>

          <label for="userEmail"><b>Email</b></label>
          <input type="email" placeholder="Email" name="userEmail" onChange={this.updateEmail} required></input>

          <label for="userPass"><b>Password</b></label>
          <input type="password" placeholder="Password" name="userPass" onChange={this.updatePassword} required></input>

          <label for="userPass"><b>Repeat Password</b></label>
          <input type="password" placeholder="Password" name="userPass" onChange={this.updatePasswordRepeat} required></input>

          <button type="submit" class="registerbtn" onClick={this.onSignUp}>Sign Up</button>
    </form>
    </div>
    );
  }
}

export default SignupForm;
