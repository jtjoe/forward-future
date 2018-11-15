import React, { Component } from 'react';

//logout button
class LogoutButton extends React.Component {
  render() {
    return (
      <div id="logoutbutton">
        <button type="button" onClick={this.props.onClick}>Logout</button>
      </div>
    );
  }
}

export default LogoutButton;
