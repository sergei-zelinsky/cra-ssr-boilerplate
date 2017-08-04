import {combineReducers} from 'redux';
import simpleCounter from './simple-counter';
import pageInformation from './page-information';
import i18n from './i18n';

const rootReducer = combineReducers({
  simpleCounter,
  pageInformation,
  i18n
});

export default rootReducer;
