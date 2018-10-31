import React, { Component } from 'react';
import CartButton from './cartButton';

class NavBar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <h2>
          <a href="index.html">Home</a> &nbsp;
          <a href="shop.html">Collections</a> &nbsp;
          <a href="dashboard.html">Dashboard</a> &nbsp;
        </h2>
        <CartButton />
      </div>
    );
  }
}

export default NavBar;
