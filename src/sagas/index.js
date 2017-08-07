import {takeLatest, put, call} from 'redux-saga/effects';
import SimpleCounterAPI from 'services/SimpleCounterAPI';
import PageInformationAPI from 'services/PageInformationAPI';
import {
  FETCH_INITIAL_VALUE_REQUEST,
  FETCH_INITIAL_VALUE_SUCCESS,
  FETCH_INITIAL_VALUE_FAILED,
  FETCH_PAGE_INFORMATION_REQUEST,
  FETCH_PAGE_INFORMATION_SUCCESS,
  SET_LOCALE,
  FETCH_LOCALE_DATA_REQUEST,
  FETCH_LOCALE_DATA_SUCCESS,
  FETCH_LOCALE_DATA_FAILED
} from 'constants/action-types';
import {addLocaleData} from 'react-intl';

export function* fetchPageInformation(action) {
  const {pathname} = action.payload;
  const pageInformation = yield call(PageInformationAPI.fetchPageInformation, pathname)
  yield put({
    type: FETCH_PAGE_INFORMATION_SUCCESS,
    payload: pageInformation
  });
  yield put({
    type: SET_LOCALE,
    payload: {
      locale: pageInformation.locale
    }
  })
}

export function* fetchSimpleCounterInitialValue(){
  try {
    const initialValue = yield call(SimpleCounterAPI.fetchInitialValue);
    yield put({
        type: FETCH_INITIAL_VALUE_SUCCESS,
        payload: initialValue
    });
  } catch (error){
    yield put({
        type: FETCH_INITIAL_VALUE_FAILED,
        error
    });
  }
}

export function* fetchLocaleData(action){
  const {locale} = action.payload;
  yield put({type: FETCH_LOCALE_DATA_REQUEST});
  try {
    const messages = yield call(fetchLocaleMessages, locale);

    const reactIntlLocaleData = yield call(fetchReactIntlLocaleData, locale);
    addLocaleData(reactIntlLocaleData);

    yield put({
      type: FETCH_LOCALE_DATA_SUCCESS,
      payload: {
        locale,
        messages
      }
    });
  } catch (error) {
    yield put({
      type: FETCH_LOCALE_DATA_FAILED,
      error
    })
  }

}

function fetchReactIntlLocaleData(locale){
  return import(`react-intl/locale-data/${locale}`)
}

function fetchLocaleMessages(locale){
  return import(`constants/i18n/messages/${locale}/index.js`)
    .then(({default: messages}) => messages);
}

export default function* rootSaga(){
  yield takeLatest(FETCH_INITIAL_VALUE_REQUEST, fetchSimpleCounterInitialValue);
  yield takeLatest(FETCH_PAGE_INFORMATION_REQUEST, fetchPageInformation);
  yield takeLatest(SET_LOCALE, fetchLocaleData);
}

