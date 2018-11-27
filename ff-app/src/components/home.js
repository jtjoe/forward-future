import React, { Component } from 'react';
import TitleBar from './titleBar';
import NavBar from './navBar';

class Home extends React.Component {
  render() {
    return (
      <div id="home">


        <a href="index.html"><h1>Forward Future</h1></a>&nbsp;
      </div>
    );
  }
}

export default Home;


/*
import glasses from './assets/glasses.jpg';
import shirt from './assets/shirt.jpg';
import cart from './assets/cart.png';
import login from './assets/login.png';
import glasses2 from './assets/glasses2.jpg';
import shirt2 from './assets/shirt2.jpg';

<img src= {logo} className="ff-logo" alt= "logo" />
<img src= {glasses} className="g-photo" alt= "glasses" />
<img src= {shirt} className="shirt-photo" alt= "shirt" />
<img src= {cart} className="cart-icon" alt= "cart" />
<img src= {login} className="login-icon" alt= "login" />
<img src= {shirt2} className="shirt2-photo" alt= "shirt2" />
<img src= {glasses2} className="g2-photo" alt= "glasses2" />

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

import CartButton from './cartButton';

<div id="loginbutton">
  <button type="button" onClick={this.props.onClick}>Login</button>
</div>

<div id="id01" className="modal">
  <form>
    <div className="imgcontainer">
    <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
    <img src={logo} alt="Avatar" className="avatar" />
    </div>

    <div className="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required></input>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required></input>

    <button type="submit">Login</button>
    <label><input type="checkbox" checked="checked" name="remember"> Remember me </input></label>
    </div>

    <div className="container" style="background-color:#f1f1f1">
    <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
    <span className="psw"> <a href="Login.html">Create a Account</a></span>
    </div>
  </form>
</div>

*/
