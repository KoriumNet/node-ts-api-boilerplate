import { Request, Response, NextFunction } from 'express';
import { OK } from 'http-status';
import { success } from '../middleware';


const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(OK).json(success({}, OK));
  } catch (error) {
    next(error);
  }
};

export = {
  get
};
