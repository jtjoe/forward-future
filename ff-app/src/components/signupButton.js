import React, { Component } from 'react';

class SignupButton extends React.Component {
  render() {
    return (
      <div id="signupbutton">
        <button type="button" onClick={this.props.onClick}>Sign Up</button>
      </div>
    );
  }
}

export default SignupButton;
