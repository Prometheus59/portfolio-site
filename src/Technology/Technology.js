import React, { Component } from "react";
import "./Technology.css";

class Technology extends Component {
  render() {
    return (
      <div id="Technology" className="default">
        <div id="">
          <h2 className="title">Programming Languages</h2>
          <ul className="list">
            <li>HTML5</li>
            <li>CSS</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>C</li>
          </ul>

          <h2 className="title">Technical Tools</h2>
          <ul className="list">
            <li>Git</li>
            <li>React</li>
            <li>Sass</li>
            <li>KnockoutJS</li>
            <li>JQuery</li>
            <li>Flask</li>
            <li>Ajax</li>
            <li>PSQL</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Technology;
