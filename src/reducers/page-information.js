import {FETCH_PAGE_INFORMATION_SUCCESS} from 'constants/action-types';

const initialState = {
  page: null
};

export default function pageInformation(state = initialState, action){
  switch (action.type){
    case FETCH_PAGE_INFORMATION_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}