import React, { Component } from 'react';
import CartButton from './cartButton';
import AccountControl from './accountControl';

class NavBar extends React.Component {

  render() {
    return (
<<<<<<< HEAD
      <div>
        <ul id="navbar">
          <li><a href="index.html">Home</a></li>
          <li><a href="shop.html">Collections</a></li>
          <li><a href="dashboard.html">Dashboard</a></li>
        </ul>
        <CartButton />
=======
      <div id="navbar">
        <h2>
          <a href="index.html" onClick={(ev) => this.props.handleMainPages("index")}>Home</a> &nbsp;
          <a href="shop.html" onClick={(ev) => this.props.handleMainPages("shop")}>Collections</a> &nbsp;
          <a href="dashboard.html" onClick={(ev) => this.props.handleMainPages("dashboard")}>Dashboard</a> &nbsp;
        </h2>
        <CartButton onClick={(ev) => this.props.handleMainPages("cart")}/>
>>>>>>> 99940aea26a1ef018b72b8d5a0443b93e12d88be
      </div>
    );
  }
}

export default NavBar;
