import { plainToClass } from 'class-transformer';
import { ValidatorOptions } from 'class-validator';
import { NextFunction } from 'express';
import { validator } from 'utils';

export const validationMiddleware = (
  type: any,
  value: string | 'body' | 'query' | 'params' = 'body',
  options: ValidatorOptions = {},
) => {
  return async (req: Request, _: Response, next: NextFunction) => {
    const input = plainToClass(type, req[value]);
    await validator(input, { skipMissingProperties: false, whitelist: true, forbidNonWhitelisted: true, ...options });

    req[value] = input;
    next();
  };
};
