import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div id="About" className="default">
        <div id="intro">
          <h2 className="header focus-in-expand">Hi, I'm Ryan</h2>
          <div className="info slide-in-left">
            <p>
              I'm a junior full-stack web developer with a passion for creating
              beautiful, responsive web applications in minimal time.
            </p>
          </div>
          <div className="slide-in-left-delay">
            <p>
              I am currently studying computer science at Wilfrid Laurier
              University in Waterloo, Ontario.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
