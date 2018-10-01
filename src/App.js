import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="site-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ryan Karumanchery</h1>
        </header>
        <p className="App-intro">
          Ryan Karumanchery
        </p>
      </div>
    );
  }
}

export default App;
