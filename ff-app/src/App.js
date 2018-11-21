import React, { Component } from 'react';
import logo from './assets/logo-horizontal.png';
import './style.css';
import AccountControl from './components/accountControl.js';
import TitleBar from './components/titleBar.js';
import NavBar from './components/collections.js';
import glasses from './assets/glasses.jpg';
import shirt from './assets/shirt.jpg';
import cart from './assets/cart.png';
import login from './assets/login.png';
import glasses2 from './assets/glasses2.jpg';
import shirt2 from './assets/shirt2.jpg';



class App extends Component {
  render() {
    return (
      <div className="App">
      <img src= {logo} className="ff-logo" alt= "logo" />
      <img src= {glasses} className="g-photo" alt= "glasses" />
      <img src= {shirt} className="shirt-photo" alt= "shirt" />
      <img src= {cart} className="cart-icon" alt= "cart" />
      <img src= {login} className="login-icon" alt= "login" />
      <img src= {shirt2} className="shirt2-photo" alt= "shirt2" />
      <img src= {glasses2} className="g2-photo" alt= "glasses2" />
           <TitleBar />
           <NavBar />
          <AccountControl />

          <div className="App">
          <p class="p1"> The Future of Online Shopping is Here </p><p class="p2"> &nbsp;&nbsp;&nbsp;
          Browse our selection of the finest<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          futurtist clothing & accessories</p>
          <h1 class= "featuredTitle">Featured Products<hr/></h1>
          <p className="about"> About Foward Future  </p>
          <p className="abouttxt"> The purpose of Forward Future is to explore the possibility of
			integrating 3D visualization into an online shopping <br/> experience.
			Currently, retailers lose the ability to showcase a 360 degree full
			detail view of their product when selling <br/> on the internet. The disconnect
		        between customer expectations and actual product can impact companies
			negatively, with <br/> reputation and item return costs. Forward Future aims to
			be a proof-of-concept for increasing customer engagement and <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; satisfaction
			through adding interactive 3D models into the company web store.   </p>
          </div>
          
      </div>

    );
  }
}

export default App;
