import React, { Component } from 'react';

class LoginButton extends React.Component {
  render() {
    return (
      <div id="loginbutton">
        <button type="button" onClick={this.props.onClick}>Login</button>
      </div>
    );
  }
}

export default LoginButton;
