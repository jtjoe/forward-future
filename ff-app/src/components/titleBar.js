import React, { Component } from 'react';
import LoginButton from './loginButton';
import logo from '../assets/logo-horizontal.png';
const style = {width: 'auto'};
const style2 = {backgroundColor: '#f1f1f1'};

class TitleBar extends React.Component {

  closeModal(event) {
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    if (event.target == modal) {
        modal.style.display = "none";
      }

    document.getElementById('id01').style.display='none';
  }
changeModalDisplay() {
  document.getElementById('id01').style.display = "block";
}


  render() {
    return (
      <div id="titlebar" onClick={this.closeModal}>


      <button id="button2" onClick={this.changeModalDisplay} style={style}>Login</button>

      <div id="id01" className="modal">
        <form>
          <div className="imgcontainer">
          <span onClick={this.closeModal} className="close" title="Close Modal">&times;</span>
          <img src={logo} alt="Avatar" className="avatar" />
          </div>

          <div className="container">
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required></input>

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required></input>

          <button type="submit">Login</button>

          </div>

          <div className="container" style={style2}>
          <button type="button" onClick={this.closeModal} className="cancelbtn">Cancel</button>
          <span className="psw"> <a href="Login.html">Create a Account</a></span>
          </div>
        </form>
      </div>


        <header id="main">
          <h2>Welcome to Forward Future</h2>
          <img src={logo} className="logo" alt= "logo" border = "0" />
        </header>

      </div>
    );
  }
}

export default TitleBar;
