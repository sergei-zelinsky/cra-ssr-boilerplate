import {takeLatest, put, call} from 'redux-saga/effects';
import SimpleCounterAPI from 'services/SimpleCounterAPI';
import {
    FETCH_INITIAL_VALUE_REQUEST,
    FETCH_INITIAL_VALUE_SUCCESS,
    FETCH_INITIAL_VALUE_FAILED
} from 'constants/action-types';

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
}

