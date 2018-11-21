import React, { Component } from 'react';
import CartButton from './cartButton';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul id="navbar">
          <li><a href="index.html">Home</a></li>
          <li><a href="shop.html">Collections</a></li>
          <li><a href="dashboard.html">Dashboard</a></li>
        </ul>
        <CartButton />
      </div>
    );
  }
}

export default NavBar;
