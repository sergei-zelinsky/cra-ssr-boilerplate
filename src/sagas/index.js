import {takeLatest, put, call} from 'redux-saga/effects';
import SimpleCounterAPI from 'services/SimpleCounterAPI';
import PageInformationAPI from 'services/PageInformationAPI';
import {
    FETCH_INITIAL_VALUE_REQUEST,
    FETCH_INITIAL_VALUE_SUCCESS,
    FETCH_INITIAL_VALUE_FAILED,
    FETCH_PAGE_INFORMATION_REQUEST,
    FETCH_PAGE_INFORMATION_SUCCESS
} from 'constants/action-types';

export function* fetchPageInformation(action) {
  const {pathname} = action.payload;
  const pageInformation = yield call(PageInformationAPI.fetchPageInformation, pathname)
  yield put({
    type: FETCH_PAGE_INFORMATION_SUCCESS,
    payload: pageInformation
  });
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

export default function* rootSaga(){
    yield takeLatest(FETCH_INITIAL_VALUE_REQUEST, fetchSimpleCounterInitialValue);
    yield takeLatest(FETCH_PAGE_INFORMATION_REQUEST, fetchPageInformation)
}

