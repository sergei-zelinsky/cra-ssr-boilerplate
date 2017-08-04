import React from 'react';
import ReactDOM from 'react-dom';
import rootSaga from 'sagas';
import configureStore from 'store/configureStore';
import Root from 'containers/Root';
import { AsyncComponentProvider } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import {addLocaleData} from 'react-intl';
import './index.css';

const initialState = window.INITIAL_STATE;

const rehydrateState = window.ASYNC_COMPONENTS_STATE;

const store = configureStore(initialState);

store.runSaga(rootSaga);

const MOUNT = document.getElementById('root');

const renderApp = () => {
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
};

if (initialState){
  import(`react-intl/locale-data/${initialState.i18n.locale}`)
    .then(localeData => {
      addLocaleData(localeData);
      renderApp();
    });
} else {
  renderApp();
}
