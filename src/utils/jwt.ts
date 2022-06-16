import {
  JwtPayload,
  verify,
  VerifyErrors,
  sign,
  SignOptions,
} from 'jsonwebtoken';
import { publicKey } from '../config/vars';
import { IPayload } from '../types/custom';
import * as fs from 'fs';
import * as path from 'path';

export const verifyJWT = async (jwt: string): Promise<IPayload> => {
  const token: string = jwt.replace('Bearer ', '');
  console.log(token);

  const cert = fs.readFileSync(path.join(__dirname, '../../public.key'));
  return new Promise((resolve, reject) => {
    verify(
      token,
      cert,
      { algorithms: ['RS256'] },
      (
        err: VerifyErrors | null,
        decoded: string | JwtPayload | undefined
      ): void => {
        if (err) {
          return reject(err);
        }
        return resolve(decoded as IPayload);
      }
    );
  });
};

export const generateJWT = (payload: string | object | Buffer): string => {
  const signInOptions: SignOptions = {
    // RS256 uses a public/private key pair. The API provides the private key
    // to generate the JWT. The client gets a public key to validate the
    // signature
    algorithm: 'RS256',
    expiresIn: '1h',
  };
  const privateKey = fs.readFileSync(path.join(__dirname, '../../private.key'));
  return sign(
    payload,
    privateKey,
    signInOptions
  );
};
