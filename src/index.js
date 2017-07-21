import React from 'react';
import ReactDOM from 'react-dom';
import rootSaga from 'sagas';
import configureStore from 'store/configureStore';
import Root from 'containers/Root';
import './index.css';

const store = configureStore(window.__INITIAL_STATE__);

store.runSaga(rootSaga);

const MOUNT = document.getElementById('root');

ReactDOM.render(
  <Root
    store={store}
  />,
  MOUNT
);
