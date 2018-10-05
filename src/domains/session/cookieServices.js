import { DAYS_BEFORE_EXPIRATION } from './constants';
import * as jwt_decode from "jwt-decode";
import moment from 'moment';

export function putTokenToCookies( token ) {
  try {
    jwt_decode(token);
  }
  catch (error) {
    return error;
  }
  const expirationDateFormated = new Date(moment().add(DAYS_BEFORE_EXPIRATION, 'days').toDate());
  document.cookie = `token=${token}; expires=${expirationDateFormated};`;
  return false;
}

export function getDataFromToken( token ) {
  try {
    return jwt_decode(token);
  }
  catch (error) {
    return error;
  }
}
