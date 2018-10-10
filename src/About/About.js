import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div id="About" className='default'>
        <div id="intro">
          <h2 className='header'>Hi, I'm Ryan</h2>
          <p>I'm a computer science student at Wilfred Laurier University</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            deleniti eligendi dicta quo commodi libero nulla excepturi facilis
            labore eius repellat dolorem, cupiditate provident expedita. Iste
            modi tempora odit labore?
          </p>
        </div>
      </div>
    );
  }
}

export default About;
