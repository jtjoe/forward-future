import React, { Component } from 'react';
import Home from './components/home.js';
import Collections from './components/collections.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {screen: 'home'};
  }

  handleOnScreenChange = (screen) => {
    this.setState({screen: screen});
  };

  render() {
    let result;

    if (this.state.screen === 'home'){
      result = <Home onScreenChange={this.handleOnScreenChange}/>;
    }
    else if (this.state.screen === 'collections') {
      result = <Collections onScreenChange={this.handleOnScreenChange}/>;
    }
    else if (this.state.screen === 'dashboard'){
      result = <div>dashboard page</div>;
    }

    return result;
  }
}

export default App;
