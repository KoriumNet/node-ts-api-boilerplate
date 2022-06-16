import { Request, Response, NextFunction } from 'express';
import { UNAUTHORIZED, FORBIDDEN } from 'http-status';
import { IPayload } from '../types/custom';
import { error } from './error.middleware';
import { errorMessages } from '../config/constants';
import { verifyJWT } from '../utils/jwt';

export const authorization = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { headers: { authorization } } = req;
    if (!authorization) {
      return res.status(UNAUTHORIZED).json(error(errorMessages.NO_AUTHORIZATION, UNAUTHORIZED));
    }

    const { scopes }: IPayload = await verifyJWT(authorization);

    if (scopes) {
      req.scopes = scopes;
      return next();
    }

    return res.status(FORBIDDEN).json(error(errorMessages.FORBIDDEN, FORBIDDEN));

  } catch (errorRes: any) {
    const { err } = errorRes;
    return res.status(UNAUTHORIZED).json(error(errorRes.msg, UNAUTHORIZED, errorRes,
      err ? err.stack : errorRes.stack));
  }
};
