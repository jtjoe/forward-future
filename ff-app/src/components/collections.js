import React, { Component } from 'react';
import FeaturedItems from './featuredItems';
import NewItems from './newItems';

class Collections extends React.Component {
  render() {
    return (
      <div id="collections">
        <h1 className= "featuredTitle">Collections</h1>
        <p className="abouttxt">
          All our collections thoughtfully chosen by our staff, taking in considerations for usefulness and design.
          Featured items are curated bi-weekly, and new items are added as soon as they are discovered.
        </p>

        <FeaturedItems />
        <NewItems />

      </div>
    );
  }
}

export default Collections;
