import { Request, Response, NextFunction } from 'express';
import { OK } from 'http-status';
import { success } from '../middleware';
import { generateJWT } from '../utils/jwt';

const signin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(OK).json(success({}, OK));
  } catch (error) {
    next(error);
  }
};

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const payload = { 
        email,
        password
    };

    const jwt:string = generateJWT(payload);

    res.status(OK).json(success({token: jwt}, OK));
  } catch (error) {
    next(error);
  }
};

export = {
  signin,
  signup,
};
