import React, { Component } from 'react';
import glasses from '../assets/glasses.jpg';
import shirt from '../assets/shirt.jpg';
import glasses2 from '../assets/glasses2.jpg';
import shirt2 from '../assets/shirt2.jpg';

//import Item from './Item';

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

//   componentDidMount(){
//    this.getData = () => {
//
//      //call function here to get data
//
//          this.setState({
//            data.itemImage: "",
//            data.itemName: "",
//            data.price: 1,
//            data.description: ""
//          })
//
//         .catch((e) => {
//          console.log(e);
//         });
//    }
//    this.getData();
// }

  render() {
    //const itemMap = {this.state.data.map((item, i) => <Item key = {i} data = {item} />)};

    return (
      <div id="featureditems">
      		 <h1 className="featuredTitle">Featured Products</h1>
           <p className="p1"> The Future of Online Shopping is Here </p>
           <p className="p2"> Browse our selection of the finest futurtist clothing & accessories</p>
           <img src={glasses} className="g-photo" alt="glasses" />
           <img src={shirt} className="shirt-photo" alt="shirt" />
           <img src= {shirt2} className="shirt2-photo" alt= "shirt2" />
           <img src= {glasses2} className="g2-photo" alt= "glasses2" />

    	</div>
    );
  }
}

export default  FeaturedItems;
