import { plainToInstance } from 'class-transformer';
import { ValidatorOptions } from 'class-validator';
import { NextFunction } from 'express';
import { validator } from 'utils';

import { TransformOptions } from '../types';

/**
 * @internal
 * Middleware used by the [[`Body`]] and [[`Query`]] decorators but can also be directly used in an express middleware tree.
 * @param type The expected type of the body. Should be a class-validator class
 * @param value location of the object to validate in the express Request (body, query, params)
 * @param options class-validator [[`ValidatorOptions]] for the validation to be performed.
 *
 * @category Middleware
 */
export const validationMiddleware = (
  type: any,
  value: string | 'body' | 'query' | 'params' = 'body',
  options: ValidatorOptions = {},
  transformOptions: TransformOptions = {},
) => {
  return async (req: Request, _: Response, next: NextFunction) => {
    transformOptions.exposeUnsetFields = transformOptions.exposeUnsetFields === true ? true : false;
    const input = plainToInstance(type, req[value], transformOptions);
    await validator(input, { skipMissingProperties: false, whitelist: true, forbidNonWhitelisted: true, ...options });

    req[value] = input;
    next();
  };
};
