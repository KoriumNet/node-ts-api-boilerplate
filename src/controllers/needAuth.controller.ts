import { Request, Response, NextFunction } from 'express';
import { OK, CREATED } from 'http-status';
import { success } from '../middleware';


const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Service or repository calls...
    res.status(OK).json(success({}, OK));
  } catch (error) {
    next(error);
  }
};

const post = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Service or repository calls...
      res.status(CREATED).json(success({}, CREATED));
    } catch (error) {
      next(error);
    }
  };

export = {
  get,
  post
};
