import React from 'react';
import ReactDOM from 'react-dom';
import rootSaga from 'sagas';
import configureStore from 'store/configureStore';
import Root from 'containers/Root';
import { AsyncComponentProvider } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import './index.css';


let initialState;

try {
  initialState = JSON.parse(document.getElementById('initial-state').textContent);
} catch (e){
  initialState = {};
}

const store = configureStore(initialState);

store.runSaga(rootSaga);

const MOUNT = document.getElementById('root');

const rehydrateState = JSON.parse(document.getElementById('async-state').textContent);

const app = (
  <AsyncComponentProvider rehydrateState={rehydrateState}>
    <Root
      store={store}
    />
  </AsyncComponentProvider>
);

asyncBootstrapper(app).then(() => {
  ReactDOM.render(app, MOUNT)
});
