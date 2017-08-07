import React, {Component} from 'react';
import {Provider} from 'react-redux';
import App from 'containers/App';
import {StaticRouter, BrowserRouter} from 'react-router-dom';
import ConnectedIntlProvider from 'containers/ConnectedIntlProvider';

class Root extends Component {
  render(){
    const {type, url, store, context} = this.props;
    // use StaticRouter on the server
    if (type === 'server'){
      return (
        <Provider store={store}>
          <ConnectedIntlProvider>
            <StaticRouter
              location={url}
              context={context}
            >
              <App/>
            </StaticRouter>
          </ConnectedIntlProvider>
        </Provider>
      );
    }
    return (
      <Provider store={store}>
        <ConnectedIntlProvider>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </ConnectedIntlProvider>
      </Provider>
    );
  }
}

export default Root;
