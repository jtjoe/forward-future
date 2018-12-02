import React, { Component } from 'react';
import slide1 from '../assets/smart-coat-1.jpg';
import slide2 from '../assets/smart-coat-2.jpg';
import slide3 from '../assets/smart-coat-3.jpg';

class NewItems extends React.Component {
  render() {
    return (
      <div id="newitems">
        <h2>New Products</h2>

        <img src= {slide1} className="shirt-photo" alt= "smartcoat" />
        <img src= {slide2} className="shirt2-photo" alt= "smartcoat" />
        <img src= {slide3} className="g-photo" alt= "smartcoat" />
    	</div>
    );
  }
}

export default  NewItems;
