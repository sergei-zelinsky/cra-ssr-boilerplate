import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware, {END} from 'redux-saga';
import rootReducer from 'reducers';
import DevTools from 'containers/Root/DevTools';

const sagaMiddleware = createSagaMiddleware();


const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  DevTools.instrument()
);

export default function configureStore(initialState){

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}
