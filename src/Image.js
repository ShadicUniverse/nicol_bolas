import React, { Component } from "react";
import Dragon_God from "./Dragon_God.JPG";
 
class Image extends Component {
  render() {
    return (
      <div>
        <h2>Picture of The Dragon God</h2>
        <p>
        <img src={Dragon_God} className="Image-Dragon_God" alt="dragon_god" />
        </p>
      </div>
    );
  }
}
 
export default Image;