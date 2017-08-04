import React, { Component } from 'react';
import SimpleCounter from 'containers/SimpleCounter';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'
import AsyncComponentResolver from 'containers/AsyncComponentResolver';
import Helmet from 'react-helmet';
import {FormattedMessage} from 'react-intl';
import LocaleSwitcher from 'containers/LocaleSwitcher';
import logo from './logo.svg';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>CRA SSR Boilerplate page title</title>
          <meta property="og:title" content="CRA SSR Boilerplate page title"/>
        </Helmet>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to CRA SSR Boilerplate</h2>
          </div>
          <div className="App-intro">
            <SimpleCounter/>
          </div>
          <div>
            <LocaleSwitcher/>
            <h3>Translations</h3>
            <div>
              <FormattedMessage id="my_message_id"/>
            </div>
          </div>
          <nav>
            <h3>Navigation</h3>
            <li>
              <Link to="/my-seo-friendly-url-for-home-page">Home page</Link>
            </li>
            <li>
              <Link to="/my-seo-friendly-url-for-about-page">About page</Link>
            </li>
          </nav>
        </div>

        <Switch>
          <Route path="*" component={AsyncComponentResolver}/>
        </Switch>
      </div>
    );
  }
}

export default App;
