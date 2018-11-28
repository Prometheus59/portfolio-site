import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <HashRouter>
        <div id="nav">
          <h2>Ryan Karumachery</h2>
          <div id="right">
            <Link smooth to="#intro">
              About
            </Link>
            <Link smooth to="#interests">
              Interests
            </Link>
            <Link smooth to="#Work">
              Work
            </Link>
            <Link smooth to="#Technology">
              Technology
            </Link>
            <Link smooth to="#projects">
              Projects
            </Link>
            <a href="#">Resume</a>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Nav;
