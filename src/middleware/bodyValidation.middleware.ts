import { plainToClass } from 'class-transformer';
import * as express from 'express';

import { validator } from '../utils/validator';

export const bodyValidator = (
  type: any,
  skipMissingProperties = false
): express.RequestHandler => {
  return async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    const input = plainToClass(type, request.body);
    await validator(input, skipMissingProperties);

    request.body = input;
    next();
  };
};
