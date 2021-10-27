import { ErrorBase, ValidationError } from 'contracts/errors';
import { ErrorRepresentation, ValidationErrorRepresentation } from 'contracts/representations';
import { DataResponse, ValidationErrorResponse } from 'contracts/responses';
import { NextFunction, Request, Response } from 'express';

export const errorMiddleware = (error: Error, _: Request, response: Response, __: NextFunction) => {
  if (process.env.NODE_ENV === 'development') console.error(error, error.message);
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
