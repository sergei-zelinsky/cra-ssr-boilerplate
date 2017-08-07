import React from 'react';
import {renderToString} from 'react-dom/server';
import rootSaga from 'sagas';
import configureStore from 'store/configureStore';
import Root from 'containers/Root';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import renderHTMLTemplate from '../template';
import PageInformationAPI from 'services/PageInformationAPI';
import Helmet from 'react-helmet';
import {addLocaleData} from 'react-intl';

async function reactSSRMiddleware(req, res){
  // fetch information about current url for supporting SEO-friendly URLs
  const pageInformation = await PageInformationAPI.fetchPageInformation(req.url);

  const localeMessages = await import(`constants/i18n/messages/${pageInformation.locale}/index.js`).then(({default: messages}) => messages);

  const reactIntlLocaleData = await import(`react-intl/locale-data/${pageInformation.locale}`);

  addLocaleData(reactIntlLocaleData);

  const store = configureStore({
    pageInformation,
    i18n: {
      locale: pageInformation.locale,
      messages: localeMessages
    }
  });

  const context = {};

  const asyncContext = createAsyncContext();

  const rootElement = (
    <AsyncComponentProvider asyncContext={asyncContext}>
      <Root
        store={store}
        type="server"
        url={req.url}
        context={context}
      />
    </AsyncComponentProvider>
  );

  asyncBootstrapper(rootElement).then(() => {
    // wait while all tasks will be done
    store.runSaga(rootSaga).done.then(() => {
      const appString = renderToString(rootElement);
      const initialState = store.getState();
      const asyncState = asyncContext.getState();
      // retrieve helmet properties to inject in html
      const helmet = Helmet.renderStatic();

      // send rendered html to the client
      res.end(renderHTMLTemplate({
        appString,
        initialState,
        asyncState,
        helmet
      }));
    });
    // make initial rendering to invoke all sagas which have to collect initial data
    // needed for rendering
    renderToString(rootElement);
    // send END action to require all sagas termination
    store.close();

    // redirect user if need
    if (context.location){
      res.redirect(context.location.pathname)
    }
  });
}

export default reactSSRMiddleware;
