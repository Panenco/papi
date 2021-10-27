import { Unauthorized } from 'contracts/errors';
import * as jwt from 'jsonwebtoken';

import { IAccessToken } from './accessToken.interface';

export const createAccessToken = async (secret: string, expiresIn: number, data: object): Promise<IAccessToken> => {
  return {
    expiresIn,
    token: jwt.sign(data, secret, { expiresIn }),
  };
};

export const getAccessTokenData = (token: string, secret: string) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw new Unauthorized('invalidAccessToken', 'Invalid token');
  }
};
