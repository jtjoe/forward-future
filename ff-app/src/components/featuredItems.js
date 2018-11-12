import React, { Component } from 'react';
import Item from './Item';

class FeaturedItems extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[{
        itemImage: "",
        itemName: "",
        price: 0,
        description: ""
      }]
    }
  }

  componentDidMount(){
   this.getData = () => {

     //call php function here to get data 

         this.setState({
           data.itemImage: "",
           data.itemName: "",
           data.price: 1,
           data.description: ""
         })

        .catch((e) => {
         console.log(e);
        });
   }

   this.getData();
}

  render() {
    return (
      <div id="featureditems">
    		<header>
    			<h2>Featured: </h2>
    		</header>

        {this.state.data.map((item, i) => <Item key = {i} data = {item} />)}

    	</div>
    );
  }
}

export default  FeaturedItems;
