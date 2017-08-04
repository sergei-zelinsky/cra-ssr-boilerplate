import {
  FETCH_LOCALE_DATA_SUCCESS
} from 'constants/action-types';

const initialState = {
  locale: null,
  messages: null
};

export default function i18n(state = initialState, action){
  switch (action.type){
    case FETCH_LOCALE_DATA_SUCCESS:
      return {
        ...state,
        locale: action.payload.locale,
        messages: action.payload.messages
      };
    default:
      return state;
  }
}
