import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from 'reducers';
import App from './App';
import './index.css';

const store = createStore(rootReducer);

const MOUNT = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  MOUNT
);
