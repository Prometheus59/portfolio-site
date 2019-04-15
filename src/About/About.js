import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div id="About" className="default">
        <div id="intro">
          <h2 className="header">Hi, I'm Ryan</h2>
          <p>I'm a junior full-stack web developer with a passion
            for creating beautiful, responsive web applications in minimal time.</p>
          <p>
            I am currently studying computer science at Wilfred Laurier University in Waterloo, Ontario.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
