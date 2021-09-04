import React, { Component } from "react";
import "./About.css";
import profilePic from "./../Static/project_images/profilePic.png";

class About extends Component {
  render() {
    return (
      <div id="About" className="default">
        <div id="intro">
          <h2 className="header slide-in-left">Hi, I'm Ryan</h2>
          <div className="slide-in-left-delay-1">
            <p>
              I'm a junior full-stack web developer with a passion for creating
              beautiful, responsive web applications in minimal time.
            </p>
          </div>
          <div className="slide-in-left-delay-2">
            <p>
              I am currently studying computer science at Wilfrid Laurier
              University in Waterloo, Ontario.
            </p>
          </div>
        </div>
        <img id="profilePic" className="slide-in-blurred-br" src={profilePic} alt="profile picture" />
      </div>
    );
  }
}

export default About;
