import {
  INCREMENT,
  DECREMENT
} from 'constants/action-types';

const initialState = 0;

export default function simpleCounter(state = initialState, action){
  switch (action.type){
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
