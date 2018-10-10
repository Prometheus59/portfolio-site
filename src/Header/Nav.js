import React, { Component } from "react";
import './Nav.css'

class Nav extends Component {
  render() {
    return (
      <div id='nav'>
        <h1>Ryan Karumachery</h1>
        <ul id='right'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
        </ul>
      </div>
    );
  }
}

export default Nav;
