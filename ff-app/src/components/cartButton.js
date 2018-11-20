import React, { Component } from 'react';

class CartButton extends React.Component {
  render() {
    return (
      <div id="cartbutton">
        <button type="button" onClick={this.props.onClick}>My Cart</button>
      </div>
    );
  }
}

export default CartButton;
