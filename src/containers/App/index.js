import React, { Component } from 'react';
import SimpleCounter from 'containers/SimpleCounter';
import {
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import logo from './logo.svg';
import './index.css';

const Home = ({match}) => (
  <div>
    <h2>Home page</h2>
    <p>You are on the Home page: {match.url}</p>
  </div>
);

const About = ({match}) => (
  <div>
    <h2>About page</h2>
    <p>You are on the About page: {match.url}</p>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to CRA SSR Boilerplate</h2>
          </div>
          <div className="App-intro">
            <SimpleCounter/>
          </div>
          <nav>
            <h3>Navigation</h3>
            <li>
              <Link to="/">Home page</Link>
            </li>
            <li>
              <Link to="/about">About page</Link>
            </li>
            <li>
              <Link to="/some-another-route">Some another page</Link>
            </li>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
}

export default App;
