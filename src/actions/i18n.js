import {
  SET_LOCALE
} from 'constants/action-types';

export function setLocale(locale){
  return {
    type: SET_LOCALE,
    payload: {
      locale
    }
  };
}
