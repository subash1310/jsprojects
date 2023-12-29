import React, { Component } from "react";
import Praveen from "../image1/2bhk.png";
import Master from "../image2/3bhk.png";
export default class Saran extends Component {
    constructor(props) {
      super(props);
      this.state = {
        color : "red",
      images:[Praveen,Master]
    
      };
      
    }
    render() {
        return (
            <div>
                <h1>CEO</h1>
                <h2>M.D</h2>
                <p>{this.state.color}</p>
                {this.state.images.map((a, index) => (
        <img src={a} alt={`Image ${index + 1}`} />
      ))}
            </div>
 )}
        }
