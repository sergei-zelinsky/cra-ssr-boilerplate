import 'babel-polyfill';
import 'ignore-styles';
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware, {END} from 'redux-saga';
import rootSaga from 'sagas';
import rootReducer from 'reducers';
import App from './App';

const app = express();


const layout = (body, initialState) => (`
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8"/>
    <title>CRA SSR Boilerplate</title>
  </head>
  <body>
    <div id="root"><div>${body}</div></div>
    <script type="text/javascript" charset="utf-8">
      window.__INITIAL_STATE__ = ${initialState};
    </script>
  </body>
  </html>
`);

app.use((req, res) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );

  const rootElement = (
    <Provider store={store}>
      <App/>
    </Provider>
  );

  sagaMiddleware.run(rootSaga).done.then(() => {
    res.end(renderToString(rootElement));
  });

  renderToString(rootElement);
  store.dispatch(END);

});

app.listen(4000, error => {
  if (error){
    throw error;
  }
  console.log('[SSR] Running on port 4000. Open http://localhost:4000 in your browser.');
});
