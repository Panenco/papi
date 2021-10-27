import { NextFunction, Request, Response } from 'express';

import { ErrorRepresentation } from '../error.representation';
import { ErrorBase } from '../errors/errorBase';
import { ValidationError } from '../errors/validationError';
import { DataResponse } from '../responses/data.response';
import { ValidationErrorResponse } from '../responses/validationError.response';
import { ValidationErrorRepresentation } from '../validationError.representation';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorMiddleware = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (process.env.NODE_ENV === "development")
    console.error(error, error.message);
  const { responseObject, type } = getResponse(error);
  response.status(responseObject.status);

  response.json({
    ...responseObject.getFormattedResponse(type),
    status: responseObject.status,
  });
};

const getResponse = (error: Error) => {
  if (error instanceof ValidationError)
    return {
      responseObject: ValidationErrorResponse.badRequest(error),
      type: ValidationErrorRepresentation,
    };
  if (error instanceof ErrorBase)
    return {
      responseObject: DataResponse.error(error),
      type: ErrorRepresentation,
    };
  console.log(error);
  return {
    responseObject: DataResponse.create(500, error),
    type: ErrorRepresentation,
  };
};
