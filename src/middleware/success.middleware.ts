import { OK } from 'http-status';
import { response } from '../utils';

export const success = (data: object, status: number = OK, message = '') =>
  response('success', status, message, data, null);
