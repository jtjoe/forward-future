import React, { Component } from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="App">

          <p className="p1"> The Future of Online Shopping is Here </p>
          <p className="p2">
            Browse our selection of the finest futurtist clothing & accessories
          </p>

          <a-scene embedded>
            <a-assets>
              <a-asset-item id="nikeMag" src="https://raw.githubusercontent.com/jtjoe/forward-future/master/ff-app/src/assets/nike_air_mag/scene.gltf"></a-asset-item>
            </a-assets>

            <a-gltf-model src="#nikeMag" position="-1 0.5 -4" rotation="0 90 0"scale="0.5 0.5 0.5"></a-gltf-model>

          </a-scene>

          <p className="about"> About Foward Future</p>
          <p className="abouttxt">
          The purpose of Forward Future is to explore the possibility of
      integrating 3D visualization into an online shopping experience.
      Currently, retailers lose the ability to showcase a 360 degree full
      detail view of their product when selling on the internet. The disconnect
            between customer expectations and actual product can impact companies
      negatively, with reputation and item return costs. Forward Future aims to
      be a proof-of-concept for increasing customer engagement and satisfaction
      through adding interactive 3D models into the company web store.
       </p>

      </div>
    );
  }
}

export default Home;
