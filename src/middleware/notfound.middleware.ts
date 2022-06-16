import { Request, Response } from 'express';
import { NOT_FOUND } from 'http-status';
import { errorMessages } from '../config/constants';
import { error } from './error.middleware';

export const notFound = (req: Request, res: Response) => res.status(NOT_FOUND)
  .json(error(errorMessages.NOT_FOUND, NOT_FOUND));
