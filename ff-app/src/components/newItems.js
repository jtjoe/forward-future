import React, { Component } from 'react';
import slide1 from '../assets/smart-coat-1.jpg';
import slide2 from '../assets/smart-coat-2.jpg';
import slide3 from '../assets/smart-coat-3.jpg';

class NewItems extends React.Component {
  componentDidMount() {
		//this.showSlides();
  }

  showSlides() {
				 	var i;
          var slideIndex = 0;
					var slides = document.getElementsByClassName("mySlides");
					var dots = document.getElementsByClassName("dot");
					for (i = 0; i < slides.length; i++) {
						slides[i].style.display = "none";
					}
					slideIndex++;
					if (slideIndex > slides.length) {slideIndex = 1}
					for (i = 0; i < dots.length; i++) {
						dots[i].className = dots[i].className.replace(" active", "");
					}
					slides[slideIndex-1].style.display = "block";
					dots[slideIndex-1].className += " active";
					setTimeout(this.showSlides(), 2000); // Change image every 2 seconds
	}

  render() {
    return (
      <div id="newitems">
        <h1 className="featuredTitle">New Products</h1>

        <div className="slideshow-container">
      		<div className="smartcoat"><img src= {slide1} alt= "smartcoat" /></div>
          <div className="smartcoat"><img src= {slide2} alt= "smartcoat" /></div>
          <div className="smartcoat"><img src= {slide3} alt= "smartcoat" /></div>
    		</div>

    	</div>
    );
  }
}

export default  NewItems;

/*

<img src= {slide1} className="product-image" id="shirt-photo" alt= "smartcoat" />
<img src= {slide2} className="product-image" id="shirt2-photo" alt= "smartcoat" />
<img src= {slide3} className="product-image" id="g-photo" alt= "smartcoat" />

*/
