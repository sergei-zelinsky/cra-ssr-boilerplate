import React from 'react';
import {renderToString} from 'react-dom/server';
import rootSaga from 'sagas';
import configureStore from 'store/configureStore';
import Root from 'containers/Root';
import renderHTMLTemplate from '../renderHTMLTemplate';

function reactSSRMiddleware(req, res){
  const store = configureStore();

  const rootElement = (
    <Root
      store={store}
    />
  );
  // wait while all tasks will be done
  store.runSaga(rootSaga).done.then(() => {
    const htmlMarkup = renderToString(rootElement);
    const initialState = JSON.stringify(store.getState());

    res.end(renderHTMLTemplate({
      htmlMarkup,
      initialState
    }));
  });

  renderToString(rootElement);
  store.close();
}

export default reactSSRMiddleware;
