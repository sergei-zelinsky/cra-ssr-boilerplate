import React from 'react';
import {renderToString} from 'react-dom/server';
import rootSaga from 'sagas';
import configureStore from 'store/configureStore';
import Root from 'containers/Root';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import renderHTMLTemplate from '../template';
import PageInformationAPI from 'services/PageInformationAPI';

async function reactSSRMiddleware(req, res){
  // fetch information about current url for supporting SEO-friendly URLs
  const pageInformation = await PageInformationAPI.fetchPageInformation(req.url);

  const store = configureStore({
    pageInformation
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
      // send rendered html to the client
      res.end(renderHTMLTemplate({
        appString,
        initialState,
        asyncState
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
