import { Unauthorized } from 'contracts';
import * as jwt from 'jsonwebtoken';

import { IAccessToken } from './accessToken.interface';

/**
 * Generate an HS256 JWT Bearer token signed by a provided secret
 * @param secret Secret used to sign the JWT
 * @param expiresIn Expiry Time
 * @param data Data to be serialized in the JWT
 * @returns An object containing the expiry time and the generated token
 *
 * @category Authorization
 */
export const createAccessToken = async (secret: string, expiresIn: number, data: object): Promise<IAccessToken> => {
  return {
    expiresIn,
    token: jwt.sign(data, secret, { expiresIn }),
  };
};

/**
 * Decode and verify JWT token
 * @param token JWT token to decode and validate
 * @param secret The secret that should have been used to sign the token
 * @returns Decoded token data
 *
 * @category Authorization
 */
export const getAccessTokenData = (token: string, secret: string): any => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw new Unauthorized('invalidAccessToken', 'Invalid token');
  }
};
