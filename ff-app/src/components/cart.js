import React, { Component } from 'react';
import LoginWarning from './loginWarning';
import NewItems from './newItems';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let page = <LoginWarning />;

    if (isLoggedIn)
    {
      page = <NewItems />;
    }
    else
    {
      page = <LoginWarning />;
    }

    return (
      <div id="cart">
        {page}
      </div>
    );
  }
}

export default Cart;
