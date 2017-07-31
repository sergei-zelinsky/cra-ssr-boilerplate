import {FETCH_PAGE_INFORMATION_REQUEST} from 'constants/action-types';

export function fetchPageInformation(pathname){
  return {
    type: FETCH_PAGE_INFORMATION_REQUEST,
    payload: {
      pathname
    }
  };
}
