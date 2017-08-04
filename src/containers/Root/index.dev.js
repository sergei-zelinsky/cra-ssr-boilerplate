import React, {Component} from 'react';
import {Provider} from 'react-redux';
import App from 'containers/App';
import {StaticRouter, BrowserRouter} from 'react-router-dom';
import ConnectedIntlProvider from 'containers/ConnectedIntlProvider';
import DevTools from './DevTools';

class Root extends Component {
  state = {
    isDevToolsEnabled: false
  };

  componentDidMount(){
    // enable rendering of DevTools only on the client
    // after initial mounting to prevent React warnings about
    // a discrepancy of server and client markups
    this.setState({
      isDevToolsEnabled: true
    });
  }

  render(){
    const {type, url, store, context} = this.props;
    const {isDevToolsEnabled} = this.state;
    // use StaticRouter on the server
    if (type === 'server'){
      return (
        <Provider store={store}>
          <div>
            <StaticRouter
              location={url}
              context={context}
            >
              <App/>
            </StaticRouter>
          </div>
        </Provider>
      );
    }
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <ConnectedIntlProvider>
              <App/>
            </ConnectedIntlProvider>
          </BrowserRouter>
          {
            isDevToolsEnabled
              ? <DevTools/>
              : null
          }
        </div>
      </Provider>
    );
  }
}

export default Root;
