import 'babel-polyfill';
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import rootSaga from 'sagas';
import configureStore from 'store/configureStore';
import Root from 'containers/Root';
import path from 'path';
import fs from 'fs';

const app = express();

const __ROOT_DIR__ = process.cwd();

const htmlTemplate = fs.readFileSync(path.resolve(__ROOT_DIR__, 'build', 'index.html'), 'utf-8');

app.use('/static', express.static(path.resolve(__ROOT_DIR__, 'build', 'static')));

app.get('/', (req, res) => {
  const store = configureStore();

  const rootElement = (
    <Root
      store={store}
    />
  );

  store.runSaga(rootSaga).done.then(() => {
    const renderedMarkup = renderToString(rootElement);
    const initialState = JSON.stringify(store.getState());

    const renderedHTML = htmlTemplate
      .replace('{{HTML_MARKUP}}', renderedMarkup)
      .replace('{{INITIAL_STATE}}', initialState);

    res.end(renderedHTML);
  });

  renderToString(rootElement);
  store.close();

});

app.listen(4000, error => {
  if (error){
    throw error;
  }
  console.log('[SSR] Running on port 4000. Open http://localhost:4000 in your browser.');
});
