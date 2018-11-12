import React, { Component } from 'react';

//item component with props
class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <img src="{this.props.data.itemImage}" />
        <h4 className="item-name">{this.props.data.itemName}</h4>
        <p className="price">{this.props.data.price}</p>
        <p className="description">{this.props.data.description}</p>
      </div>
    );
  }
}

export default Item;
