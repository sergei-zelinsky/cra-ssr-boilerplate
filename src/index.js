import React from 'react';
import ReactDOM from 'react-dom';
import rootSaga from 'sagas';
import configureStore from 'store/configureStore';
import Root from 'containers/Root';
import { AsyncComponentProvider } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import {addLocaleData} from 'react-intl';
import PageInformationAPI from 'services/PageInformationAPI';
import './index.css';

const MOUNT = document.getElementById('root');

let initialState = window.INITIAL_STATE,
    rehydrateState = window.ASYNC_COMPONENTS_STATE;

bootstrap();

async function bootstrap(){
  // handle the case when application runs without server-side rendering
  if (!initialState) {
    const pageInformation = await PageInformationAPI.fetchPageInformation(
      window.location.pathname
    );

    const messages = await import(
      `constants/i18n/messages/${pageInformation.locale}/index.js`
      ).then(({default: messages}) => messages);

    initialState = {
      pageInformation,
      i18n: {
        locale: pageInformation.locale,
        messages
      }
    };
  }

  const localeData = await import(`react-intl/locale-data/${initialState.i18n.locale}`);
  addLocaleData(localeData);

  const store = configureStore(initialState);
  store.runSaga(rootSaga);

  renderApplication(store, rehydrateState);
}

function renderApplication(store, rehydrateState){
  const app = (
    <AsyncComponentProvider rehydrateState={rehydrateState}>
      <Root
        store={store}
      />
    </AsyncComponentProvider>
  );

  return asyncBootstrapper(app)
    .then(() => {
      ReactDOM.render(app, MOUNT)
    });
}
