import React from 'react';
import {renderToString} from 'react-dom/server';
import rootSaga from 'sagas';
import configureStore from 'store/configureStore';
import Root from 'containers/Root';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import renderHTMLTemplate from '../renderHTMLTemplate';

function reactSSRMiddleware(req, res){
  const store = configureStore();
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
      const htmlMarkup = renderToString(rootElement);
      const initialState = JSON.stringify(store.getState());
      const asyncState = JSON.stringify(asyncContext.getState());
      // send rendered html to the client
      res.end(renderHTMLTemplate({
        htmlMarkup,
        initialState,
        asyncState
      }));
    });

    renderToString(rootElement);
    store.close();

    // redirect user if need
    if (context.location){
      res.redirect(context.location.pathname)
    }
  });
}

export default reactSSRMiddleware;
