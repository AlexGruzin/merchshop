import { omitBy, isNil, mapKeys } from 'lodash';

export const toUnderscore = key => key.replace(/([A-Z])/g, ($1) => `_${$1.toLowerCase()}`);
export const toCamelcase = key => key.replace(/(_[A-z0-9])/g, ($1) => $1.slice(1).toUpperCase());
export const transformKeys = (obj, func) => {
  const transformed = mapKeys(obj, (value, key) => func(key));
  return omitBy(transformed, isNil);
};
