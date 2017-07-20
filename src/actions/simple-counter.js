import {
  INCREMENT,
  DECREMENT
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
