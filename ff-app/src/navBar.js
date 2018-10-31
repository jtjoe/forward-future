import React, { Component } from 'react';
import CartButton from './cartButton';

class NavBar extends React.Component {
  render() {
    return (
      <a href="index.html">Home</a>&nbsp;
      <a href="shop.html">Collections</a>&nbsp;
      <a href="dashboard.html">Dashboard</a>&nbsp;
      <CartButton />
    );
  }
}

export default NavBar;
