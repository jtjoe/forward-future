import React, { Component } from 'react';

class ComponentControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleCollectionsClick = this.handleCollectionsClick.bind(this);
    this.handleDashboardClick = this.handleDashboardClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleHomeClick() {
    // TODO: show home page components
    //this.setState({isLoggedIn: true});
  }

  handleCollectionsClick() {
    // TODO: show shop components depending on login state
    //this.setState({isLoggedIn: false});
  }

  handleDashboardClick() {
    // TODO: shwo dashboard depending on login state
    //this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let page;

    if (isLoggedIn)
    {
      //different components for each page

    }
    else
    {
      //different components for pages, with login/signup warnings
    }

    return (
      <div>
        {page}
      </div>
    );
  }
}

export default ComponentControl;
