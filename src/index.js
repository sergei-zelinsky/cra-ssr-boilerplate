import React from 'react';
import ReactDOM from 'react-dom';
import rootSaga from 'sagas';
import configureStore from 'store/configureStore';
import Root from 'containers/Root';
import { AsyncComponentProvider } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import './index.css';

/* TODO: find better way for the next two checks
  Next two checks are used to prevent passing strings like `{{INITIAL_STATE}}`
  and '{{ASYNC_COMPONENTS_STATE}}' as redux-store initialState and
  react-async-component rehydrateState if user loads application
  without server-side rendering
 */
const initialState = typeof window.INITIAL_STATE === 'object'
  ? window.INITIAL_STATE
  : {};

const rehydrateState = typeof window.ASYNC_COMPONENTS_STATE === 'object'
  ? window.ASYNC_COMPONENTS_STATE
  : {};

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
