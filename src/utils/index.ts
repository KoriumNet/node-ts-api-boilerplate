import { TErrors, TErrorCode, TResponseData, TStatus, TStackTrace } from '../types/constants';
import { HttpResponse } from '../types/response';
import { env, defaultPageSize, defaultOffset, maxPageSize } from '../config/vars';
import { ICustomRequest } from '../types/custom';
import { environment } from '../config/constants';
import { IPagination } from '../types/pagination';


export const response = (status: TStatus, code: TErrorCode, message: string, data: TResponseData, errors: TErrors,
  stackTrace?: TStackTrace): HttpResponse => {
  return (env === environment.PRODUCTION) ?
    { status, code, message, data, errors, } :
    { status, code, message, data, errors, stackTrace };
};

export const initializePagination = (req: ICustomRequest): IPagination => {
  let { query: { pageSize, offset, } } = req;
  pageSize = parseInt(pageSize) > maxPageSize ? defaultPageSize : parseInt(pageSize) || defaultPageSize;
  offset = parseInt(offset) || defaultOffset;
  return { offset, pageSize };
};

export const resPagination = (count: number, offset: number, pageSize: number): IPagination => {
  const size = (count < pageSize) ? count : pageSize;
  return { offset, pageSize: size };
};
