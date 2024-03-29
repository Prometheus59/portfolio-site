import React, { Component } from "react";
import Nav from "./Header/Nav";
import About from "./About/About";
import Interests from "./About/Interests";
import Technology from "./Technology/Technology";
import Projects from "./Projects/Projects";
import Work from "./Work/Work";
import Contact from "./Contact/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <About />
        <Interests />
        <Work />
        <Technology />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
