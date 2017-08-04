import React, { Component } from 'react';
import SimpleCounter from 'containers/SimpleCounter';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'
import AsyncComponentResolver from 'containers/AsyncComponentResolver';
import Helmet from 'react-helmet';
import {FormattedMessage, injectIntl} from 'react-intl';
import LocaleSwitcher from 'containers/LocaleSwitcher';
import logo from './logo.svg';
import './index.css';

class App extends Component {
  render() {
    const {intl} = this.props;
    return (
      <div>
        <Helmet>
          <title>
            {intl.formatMessage({id: 'app.page_title'})}
          </title>
          <meta property="og:title" content="CRA SSR Boilerplate page title"/>
        </Helmet>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>
              <FormattedMessage id="app.welcome"/>
            </h2>
          </div>
          <div className="App-intro">
            <SimpleCounter/>
          </div>
          <div>
            <LocaleSwitcher/>
          </div>
          <nav>
            <h3>
              <FormattedMessage id="app.navigation"/>
            </h3>
            <li>
              <Link to="/my-seo-friendly-url-for-home-page">
                <FormattedMessage id="app.navigation.home_page"/>
              </Link>
            </li>
            <li>
              <Link to="/my-seo-friendly-url-for-about-page">
                <FormattedMessage id="app.navigation.about_page"/>
              </Link>
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

export default injectIntl(App);
