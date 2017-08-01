import {combineReducers} from 'redux';
import simpleCounter from './simple-counter';
import pageInformation from './page-information';

const rootReducer = combineReducers({
  simpleCounter,
  pageInformation
});

export default rootReducer;
