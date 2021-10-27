import { plainToClass } from 'class-transformer';
import { NextFunction, Request, RequestHandler, Response } from 'express-serve-static-core';

import { validator } from '../utils/validator';

export const queryValidator = (
  type: any,
  skipMissingProperties = true
): RequestHandler => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const input = plainToClass(type, request.query) as any;
    await validator(input, skipMissingProperties);

    request.query = input;
    next();
  };
};
