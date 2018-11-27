import React, { Component } from 'react';

class NavBar extends React.Component {

  render() {
    return (

      <nav>
       	 <a className="one" href="home.html">Home<br/></a>
         <a className="one" href="login.html">Register<br/></a>
         <a className="one" href="dashboard.html">Dashboard<br/></a>
         <a className="one" href="product.html">Products</a>
    	</nav>
    );
  }
}

export default NavBar;
