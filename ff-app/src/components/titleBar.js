import React, { Component } from 'react';
import logo from '../assets/logo-horizontal.png';

class TitleBar extends React.Component {
  render() {
    return (
      <div id="titlebar">
        <img src= {logo} className="ff-logo" alt= "logo" />
      </div>
    );
  }
}

export default TitleBar;
