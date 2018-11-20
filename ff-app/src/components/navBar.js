import React, { Component } from 'react';
import CartButton from './cartButton';
import AccountControl from './accountControl';

class NavBar extends React.Component {

  render() {
    return (
      <div id="navbar">
        <h2>
          <a href="index.html" onClick={(ev) => this.props.handleMainPages("index")}>Home</a> &nbsp;
          <a href="shop.html" onClick={(ev) => this.props.handleMainPages("shop")}>Collections</a> &nbsp;
          <a href="dashboard.html" onClick={(ev) => this.props.handleMainPages("dashboard")}>Dashboard</a> &nbsp;
        </h2>
        <CartButton onClick={(ev) => this.props.handleMainPages("cart")}/>
      </div>
    );
  }
}

export default NavBar;
