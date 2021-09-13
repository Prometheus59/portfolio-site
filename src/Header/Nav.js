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
            <Link smooth to="#About">
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
            <Link smooth to="#Projects">
              Projects
            </Link>
            <Link smooth to="#Contact">
              Contact
            </Link>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1wDxhGEao_hcphDdsC60yw9spswDPcrCz/view?usp=sharing"
            >
              Resume
            </a>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Nav;
