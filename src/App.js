import React, { Component } from 'react';
import SimpleCounter from 'containers/SimpleCounter';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to CRA SSR Boilerplate</h2>
        </div>
        <div className="App-intro">
          <SimpleCounter/>
        </div>
      </div>
    );
  }
}

export default App;
