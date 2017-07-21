import 'babel-polyfill';
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import rootSaga from 'sagas';
import configureStore from 'store/configureStore';
import Root from 'containers/Root';
import path from 'path';

const app = express();

const __ROOT_DIR__ = process.cwd();

app.use('/static', express.static(path.resolve(__ROOT_DIR__, 'build', 'static')));


const layout = (body, initialState) => (`
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8"/>
    <title>CRA SSR Boilerplate</title>
  </head>
  <body>
    <div id="root">${body}</div>
    <script type="text/javascript" charset="utf-8">
      window.__INITIAL_STATE__ = ${initialState};
    </script>
    <script src="http://localhost:3000/static/js/bundle.js"></script>
  </body>
  </html>
`);

app.get('/', (req, res) => {
  const store = configureStore();

  const rootElement = (
    <Root
      store={store}
    />
  );

  store.runSaga(rootSaga).done.then(() => {
    const renderedMarkup = renderToString(rootElement);
    res.end(layout(renderedMarkup, JSON.stringify(store.getState())));
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
