import { plainToClass } from 'class-transformer';
import { NextFunction } from 'express';
import { validator } from 'utils';

export const validationMiddleware = (
  type: any,
  value: string | 'body' | 'query' | 'params' = 'body',
  skipMissingProperties = false,
  whitelist = true,
  forbidNonWhitelisted = true,
) => {
  return async (req: Request, _: Response, next: NextFunction) => {
    const input = plainToClass(type, req[value]);
    await validator(input, { skipMissingProperties, whitelist, forbidNonWhitelisted });

    req[value] = input;
    next();
  };
};
