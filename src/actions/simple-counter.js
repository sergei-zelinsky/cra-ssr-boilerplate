import {
  INCREMENT,
  DECREMENT,
  FETCH_INITIAL_VALUE_REQUEST
} from 'constants/action-types';

export function increment(){
  return {
    type: INCREMENT
  }
}

export function decrement(){
  return {
    type: DECREMENT
  };
}

export function fetchInitialValue(){
  return {
    type: FETCH_INITIAL_VALUE_REQUEST
  };
}
