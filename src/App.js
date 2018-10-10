import React, { Component } from "react";
import Nav from "./Header/Nav";
import About from "./About/About";
import Interests from "./About/Interests";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <About />
        <Interests />
      </div>
    );
  }
}

export default App;
