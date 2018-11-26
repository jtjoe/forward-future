import React, { Component } from 'react';
import CartButton from './cartButton';
import AccountControl from './accountControl';

class NavBar extends React.Component {
  handleOnClickCollections = (event) => {
    event.preventDefault();
    this.props.onScreenChange("collections");
  }
handleOnClickDashboard = (event) => {
  event.preventDefault();
  this.props.onScreenChange("dashboard");
}
  render() {
    return (

      <div>
        <ul id="navbar">
          <li><a href="index.html">Home</a></li>
          <li><a href="index.html" onClick={this.handleOnClickCollections} >Collections</a></li>
          <li><a href="dashboard.html" onClick={this.handleOnClickDashboard}>Dashboard</a></li>
        </ul>
        <CartButton />
      </div>
    );
  }
}

export default NavBar;
