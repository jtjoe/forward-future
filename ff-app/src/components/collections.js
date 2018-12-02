import React, { Component } from 'react';
import FeaturedItems from './featuredItems';
import NewItems from './newItems';

class Collections extends React.Component {
  render() {
    return (
      <div id="collections">
        <h1 class= "featuredTitle">Collections<hr/></h1>

        <FeaturedItems />
        <NewItems />

      </div>
    );
  }
}

export default Collections;
