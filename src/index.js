import React from 'react';
import ReactDOM from 'react-dom';
import rootSaga from 'sagas';
import configureStore from 'store/configureStore';
import Root from 'containers/Root';
import './index.css';

const initialState = JSON.parse(document.getElementById('initial-state').textContent);

const store = configureStore(initialState);

store.runSaga(rootSaga);

const MOUNT = document.getElementById('root');

ReactDOM.render(
  <Root
    store={store}
  />,
  MOUNT
);
