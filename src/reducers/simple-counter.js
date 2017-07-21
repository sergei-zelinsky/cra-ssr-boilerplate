import {
  INCREMENT,
  DECREMENT,
  FETCH_INITIAL_VALUE_SUCCESS
} from 'constants/action-types';

const initialState = 0;

export default function simpleCounter(state = initialState, action){
  switch (action.type){
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case FETCH_INITIAL_VALUE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
