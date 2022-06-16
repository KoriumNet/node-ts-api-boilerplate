import { TErrorCode, TStatus, TResponseData, TErrors } from '../constants';

export interface HttpResponse {
    status: TStatus,
    code: TErrorCode,
    message: string,
    data: TResponseData,
    errors: TErrors
    stackTrace?: TStackTrace
}
