import React, { Component } from 'react';
import LoginWarning from './loginWarning';
import FeaturedItems from './featuredItems';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let page = <LoginWarning />;

    if (isLoggedIn)
    {
      page = <FeaturedItems />;
    }
    else
    {
      page = <LoginWarning />;
    }

    return (
      <div>
        {page}
      </div>
    );
  }
}

export default Dashboard;
