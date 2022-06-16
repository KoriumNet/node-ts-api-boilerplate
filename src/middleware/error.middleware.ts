import { INTERNAL_SERVER_ERROR } from 'http-status';
import { Request, Response, NextFunction } from 'express';
import { response } from '../utils';
import { TErrors, TStackTrace } from '../types/constants';


export const error = (msg: string, code: number, errors: TErrors = null, stackTrace: TStackTrace = '') =>
  response('error', code, msg, null, errors, stackTrace);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handler = async (err: Error, req: Request, res: Response, next: NextFunction) =>
  res.status(INTERNAL_SERVER_ERROR)
    .json(response('error', INTERNAL_SERVER_ERROR, err.message, null, err, err.stack));
