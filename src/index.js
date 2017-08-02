import React from 'react';
import ReactDOM from 'react-dom';
import rootSaga from 'sagas';
import configureStore from 'store/configureStore';
import Root from 'containers/Root';
import { AsyncComponentProvider } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import './index.css';

const initialState = window.INITIAL_STATE;

const rehydrateState = window.ASYNC_COMPONENTS_STATE;

const store = configureStore(initialState);

store.runSaga(rootSaga);

const MOUNT = document.getElementById('root');

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
